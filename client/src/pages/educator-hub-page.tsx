import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Users, Flame, Zap, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/auth";

interface TeamMember {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  department: string | null;
  totalXp: number;
  currentStreak: number;
  leadershipRole: string;
}

interface EducatorTeamResponse {
  team: TeamMember[];
  department: string | null;
}

export default function EducatorHubPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const { data, isLoading } = useQuery<EducatorTeamResponse>({
    queryKey: ["/api/educator/team"],
  });

  const department = data?.department ?? (user as any)?.department ?? null;
  const team = data?.team ?? [];

  const getDisplayName = (m: TeamMember) => {
    if (m.firstName && m.lastName) return `${m.firstName} ${m.lastName}`;
    if (m.firstName) return m.firstName;
    return m.username;
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back-to-training">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-bold text-base text-foreground">Educator Console</h1>
              {department && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-violet-500/10 text-violet-600 border border-violet-500/20">
                  <Building2 size={10} /> {department}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">My team — {team.length} learner{team.length !== 1 ? "s" : ""}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6 flex flex-col gap-6">

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Team Size", value: team.length, icon: Users, color: "text-primary" },
            { label: "Total XP", value: team.reduce((s, m) => s + m.totalXp, 0).toLocaleString(), icon: Zap, color: "text-chart-4" },
            { label: "Active Streaks", value: team.filter(m => m.currentStreak > 0).length, icon: Flame, color: "text-chart-2" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <stat.icon size={20} className={stat.color} />
              <span className="text-xl font-black">{isLoading ? "—" : stat.value}</span>
              <span className="text-xs text-muted-foreground font-medium text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Team roster */}
        <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
          <div className="p-5 border-b border-card-border flex items-center gap-2">
            <GraduationCap size={18} className="text-primary" />
            <h3 className="font-bold text-base">
              {department ? `${department} Team` : "My Team"}
            </h3>
          </div>

          {isLoading ? (
            <div className="p-4 flex flex-col gap-3">
              {[1, 2, 3].map(i => <Skeleton key={i} className="h-12 w-full rounded-xl" />)}
            </div>
          ) : team.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-sm">
              {department
                ? `No learners found in the "${department}" department yet. Make sure learner accounts have this department assigned.`
                : "No department assigned to your account. Contact an administrator to set your department so you can view your team."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-card-border bg-muted/30">
                    <th className="text-left p-3 font-bold text-muted-foreground">#</th>
                    <th className="text-left p-3 font-bold text-muted-foreground">Name</th>
                    <th className="text-left p-3 font-bold text-muted-foreground hidden sm:table-cell">Department</th>
                    <th className="text-right p-3 font-bold text-muted-foreground">XP</th>
                    <th className="text-right p-3 font-bold text-muted-foreground">Streak</th>
                  </tr>
                </thead>
                <tbody>
                  {team.map((m, i) => (
                    <tr key={m.id} className="border-b border-card-border/50 last:border-0" data-testid={`row-team-${m.id}`}>
                      <td className="p-3 font-bold text-muted-foreground">{i + 1}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                            {(m.firstName || m.username).charAt(0).toUpperCase()}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold truncate" data-testid={`text-team-name-${m.id}`}>{getDisplayName(m)}</span>
                            <span className="text-xs text-muted-foreground sm:hidden">{m.username}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-muted-foreground hidden sm:table-cell text-xs">{m.department ?? "—"}</td>
                      <td className="p-3 text-right font-bold text-chart-4">{m.totalXp}</td>
                      <td className="p-3 text-right">
                        <span className={`font-bold ${m.currentStreak > 0 ? "text-chart-2" : "text-muted-foreground"}`}>
                          {m.currentStreak > 0 ? `🔥 ${m.currentStreak}` : "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-xs text-center text-muted-foreground px-2">
          Showing learners in your assigned department only. Contact an administrator to adjust access.
        </p>
      </div>
    </div>
  );
}
