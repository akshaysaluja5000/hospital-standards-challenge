import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Calendar, UserPlus, Shield, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/auth";
import { AiLeadershipCoach } from "@/components/ai-leadership-coach";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { LEADERSHIP_LABELS, LEADERSHIP_ROLES, type LeadershipRole } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

interface AdminUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  questionsAnswered: number;
  questionsToday: number;
  correctTotal: number;
  correctToday: number;
  accuracy: number;
  lastActive: string | null;
  joinedAt: string | null;
  leadershipRole?: string;
}

interface AdminStats {
  totalUsers: number;
  activeToday: number;
  totalQuestionsAnswered: number;
  averageAccuracy: number;
  userList: AdminUser[];
}

const LEADERSHIP_RANK: Record<string, number> = {
  learner: 0, educator: 1, director: 2, ceo: 3, admin: 4, super_admin: 5,
};

export default function AdminPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data: stats, isLoading } = useQuery<AdminStats>({
    queryKey: ["/api/admin/stats"],
  });

  const callerRank = LEADERSHIP_RANK[(user?.leadershipRole as string) || "learner"] ?? 0;
  const callerIsAdmin = user?.isAdmin || callerRank >= LEADERSHIP_RANK["admin"];

  const { data: auditLogEntries } = useQuery<Array<{
    id: number; username: string | null; leadershipRole: string;
    facilityName: string | null; action: string; createdAt: string;
  }>>({
    queryKey: ["/api/audit-log"],
    enabled: callerIsAdmin,
  });

  const roleChangeMutation = useMutation({
    mutationFn: async ({ userId, role }: { userId: number; role: string }) => {
      const res = await apiRequest("PATCH", `/api/admin/users/${userId}/leadership-role`, { leadershipRole: role });
      if (!res.ok) throw new Error("Failed to update role");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
      toast({ title: "Role updated" });
    },
    onError: (err: any) => {
      toast({ title: "Failed to update role", description: err.message, variant: "destructive" });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen p-4 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6 pt-16">
          <Skeleton className="h-12 w-48" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-24 rounded-2xl" />)}
          </div>
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Never";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const formatRelativeTime = (dateStr: string | null) => {
    if (!dateStr) return "Never";
    const now = new Date();
    const d = new Date(dateStr);
    const diffMs = now.getTime() - d.getTime();
    if (diffMs < 0) return "Just now";
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHr / 24);
    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHr < 24) return `${diffHr} hr ago`;
    if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    return formatDate(dateStr);
  };

  const getDisplayName = (u: AdminUser) => {
    if (u.firstName && u.lastName) return `${u.firstName} ${u.lastName}`;
    if (u.firstName) return u.firstName;
    return u.username;
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/leadership")} data-testid="button-back">
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="font-bold text-base text-foreground">User Management</h1>
            <p className="text-sm font-medium text-foreground/70">Track engagement, accuracy, and assign roles</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Registered Users", value: stats?.totalUsers || 0, icon: UserPlus, color: "text-primary" },
            { label: "Active Today", value: stats?.activeToday || 0, icon: Calendar, color: "text-chart-2" },
            { label: "Questions Answered", value: stats?.totalQuestionsAnswered || 0, icon: Target, color: "text-chart-4" },
            { label: "Avg Accuracy", value: `${stats?.averageAccuracy || 0}%`, icon: TrendingUp, color: "text-chart-1" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: i * 0.05 }}
            >
              <stat.icon size={22} className={stat.color} />
              <span className="text-2xl font-black" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground font-medium text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <AiLeadershipCoach />

        <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
          <div className="p-5 border-b border-card-border flex items-center justify-between gap-2">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Users size={18} className="text-primary" />
              Registered Users ({stats?.totalUsers || 0})
            </h3>
            {callerIsAdmin && (
              <div className="flex items-center gap-1.5 text-sm text-foreground/70 font-semibold">
                <Shield size={13} className="text-primary" />
                Role management enabled
              </div>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-muted/30">
                  <th className="text-left p-3 font-bold text-muted-foreground">#</th>
                  <th className="text-left p-3 font-bold text-muted-foreground">Name</th>
                  <th className="text-left p-3 font-bold text-muted-foreground hidden sm:table-cell">Username</th>
                  <th className="text-right p-3 font-bold text-muted-foreground">XP</th>
                  <th className="text-right p-3 font-bold text-muted-foreground">Streak</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden sm:table-cell">Total Q's</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden sm:table-cell">Today</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden sm:table-cell">Accuracy</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden lg:table-cell">Last Active</th>
                  {callerIsAdmin && (
                    <th className="text-left p-3 font-bold text-muted-foreground hidden lg:table-cell">Access Role</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {stats?.userList?.map((u, i) => {
                  const userRank = LEADERSHIP_RANK[(u.leadershipRole as string) || "learner"] ?? 0;
                  return (
                    <tr key={u.id} className="border-b border-card-border/50 last:border-0" data-testid={`row-user-${u.id}`}>
                      <td className="p-3 font-bold">{i + 1}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                            {(u.firstName || u.username).charAt(0).toUpperCase()}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold" data-testid={`text-name-${u.id}`}>{getDisplayName(u)}</span>
                            <span className="text-xs text-muted-foreground sm:hidden">{u.username}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-muted-foreground hidden sm:table-cell" data-testid={`text-username-${u.id}`}>{u.username}</td>
                      <td className="p-3 text-right font-bold text-chart-4">{u.totalXp}</td>
                      <td className="p-3 text-right font-bold">{u.currentStreak}</td>
                      <td className="p-3 text-right text-muted-foreground hidden sm:table-cell">{u.questionsAnswered}</td>
                      <td className="p-3 text-right text-muted-foreground hidden sm:table-cell">{u.questionsToday}</td>
                      <td className="p-3 text-right hidden sm:table-cell">
                        <span className={`font-bold ${u.accuracy >= 80 ? "text-chart-1" : u.accuracy >= 50 ? "text-chart-4" : "text-destructive"}`}>
                          {u.accuracy}%
                        </span>
                      </td>
                      <td className="p-3 text-right text-muted-foreground text-xs hidden lg:table-cell">
                        {formatRelativeTime(u.lastActive)}
                      </td>
                      {callerIsAdmin && (
                        <td className="p-3 hidden lg:table-cell">
                          <select
                            className="text-xs border border-border rounded-lg px-2 py-1 bg-background font-semibold focus:outline-none focus:ring-1 focus:ring-primary"
                            value={u.leadershipRole || "learner"}
                            disabled={roleChangeMutation.isPending || userRank >= callerRank}
                            data-testid={`select-role-${u.id}`}
                            onChange={(e) => roleChangeMutation.mutate({ userId: u.id, role: e.target.value })}
                          >
                            {LEADERSHIP_ROLES.filter(r => LEADERSHIP_RANK[r] <= callerRank).map((r) => (
                              <option key={r} value={r}>{LEADERSHIP_LABELS[r as LeadershipRole]}</option>
                            ))}
                          </select>
                        </td>
                      )}
                    </tr>
                  );
                })}
                {(!stats?.userList || stats.userList.length === 0) && (
                  <tr>
                    <td colSpan={12} className="p-8 text-center text-muted-foreground">
                      No users yet. Share the facility code to get started!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {callerIsAdmin && (
        <div className="max-w-4xl mx-auto px-4 pb-8 mt-6">
          <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
            <div className="p-5 border-b border-card-border flex items-center gap-2">
              <ScrollText size={18} className="text-primary" />
              <h3 className="font-bold text-base">Access Audit Log</h3>
              <span className="ml-auto text-sm text-foreground/60 font-medium">Last {auditLogEntries?.length ?? 0} events</span>
            </div>
            <div className="overflow-x-auto max-h-80 overflow-y-auto">
              {!auditLogEntries || auditLogEntries.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground text-sm">No audit events yet.</div>
              ) : (
                <table className="w-full text-xs">
                  <thead className="sticky top-0 bg-muted/60 backdrop-blur">
                    <tr className="border-b border-card-border">
                      <th className="text-left p-2 font-bold text-muted-foreground">Time</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">User</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">Role</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">Action</th>
                      <th className="text-left p-2 font-bold text-muted-foreground hidden sm:table-cell">Facility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogEntries.map((entry) => (
                      <tr key={entry.id} className="border-b border-card-border/40 last:border-0 hover:bg-muted/20" data-testid={`row-audit-${entry.id}`}>
                        <td className="p-2 text-muted-foreground whitespace-nowrap">
                          {new Date(entry.createdAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                        </td>
                        <td className="p-2 font-medium">{entry.username ?? "—"}</td>
                        <td className="p-2 text-muted-foreground">{entry.leadershipRole}</td>
                        <td className="p-2 font-mono text-xs text-chart-4">{entry.action}</td>
                        <td className="p-2 text-muted-foreground hidden sm:table-cell">{entry.facilityName ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
