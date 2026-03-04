import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Calendar, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/auth";

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
  correctAnswers: number;
  accuracy: number;
  lastActive: string | null;
  joinedAt: string | null;
}

interface AdminStats {
  totalUsers: number;
  activeToday: number;
  totalQuestionsAnswered: number;
  averageAccuracy: number;
  userList: AdminUser[];
}

export default function AdminPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const { data: stats, isLoading } = useQuery<AdminStats>({
    queryKey: ["/api/admin/stats"],
  });

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Access Denied</h2>
          <p className="text-muted-foreground">You need admin privileges to view this page.</p>
          <Button className="mt-4" onClick={() => setLocation("/")} data-testid="button-go-home">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

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
      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation("/")}
            data-testid="button-back"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="font-bold text-base">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">Track user engagement & performance</p>
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
              transition={{ delay: i * 0.05 }}
            >
              <stat.icon size={22} className={stat.color} />
              <span className="text-2xl font-black" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground font-medium text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
          <div className="p-5 border-b border-card-border">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Users size={18} className="text-primary" />
              Registered Users ({stats?.totalUsers || 0})
            </h3>
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
                  <th className="text-right p-3 font-bold text-muted-foreground hidden sm:table-cell">Correct</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden sm:table-cell">Accuracy</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden lg:table-cell">Joined</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden lg:table-cell">Last Active</th>
                </tr>
              </thead>
              <tbody>
                {stats?.userList?.map((u, i) => (
                  <tr
                    key={u.id}
                    className="border-b border-card-border/50 last:border-0"
                    data-testid={`row-user-${u.id}`}
                  >
                    <td className="p-3 font-bold">
                      {i + 1}
                    </td>
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
                    <td className="p-3 text-right font-bold hidden sm:table-cell">{u.correctAnswers}</td>
                    <td className="p-3 text-right hidden sm:table-cell">
                      <span className={`font-bold ${u.accuracy >= 80 ? "text-chart-1" : u.accuracy >= 50 ? "text-chart-4" : "text-destructive"}`}>
                        {u.accuracy}%
                      </span>
                    </td>
                    <td className="p-3 text-right text-muted-foreground text-xs hidden lg:table-cell">
                      {formatDate(u.joinedAt)}
                    </td>
                    <td className="p-3 text-right text-muted-foreground text-xs hidden lg:table-cell">
                      {formatRelativeTime(u.lastActive)}
                    </td>
                  </tr>
                ))}
                {(!stats?.userList || stats.userList.length === 0) && (
                  <tr>
                    <td colSpan={11} className="p-8 text-center text-muted-foreground">
                      No users yet. Share the facility code to get started!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
