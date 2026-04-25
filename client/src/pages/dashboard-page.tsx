import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import { Flame, Zap, Target, TrendingUp, ChevronRight, LogOut, BarChart3, Calendar as CalendarIcon, Settings, BookOpen, Trophy, Shuffle, Microscope, BrainCircuit, Stethoscope, Crown, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { StreakFlame } from "@/components/streak-flame";
import { XpBar } from "@/components/xp-bar";
import { LevelCard } from "@/components/level-card";
import { DailyCalendar } from "@/components/daily-calendar";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import type { UserStreak, UserProgress, DailyActivity, QuizSession, DiagnosticResult } from "@shared/schema";
import { getVisibleLevelsForModule } from "@shared/all-levels";
import type { ModuleId } from "@shared/schema";
import { getRoleConfig } from "@shared/roles";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();

  const { data: streak, isLoading: streakLoading } = useQuery<UserStreak>({
    queryKey: ["/api/game/streak"],
  });

  const { data: progress, isLoading: progressLoading } = useQuery<UserProgress[]>({
    queryKey: ["/api/game/progress"],
  });

  const { data: activities, isLoading: activitiesLoading } = useQuery<DailyActivity[]>({
    queryKey: ["/api/game/activities"],
  });

  const { data: todayActivity } = useQuery<DailyActivity>({
    queryKey: ["/api/game/today"],
  });

  const { data: savedSessions } = useQuery<QuizSession[]>({
    queryKey: ["/api/game/sessions"],
  });

  const { data: diagnosticResults } = useQuery<DiagnosticResult[]>({
    queryKey: ["/api/diagnostic/results"],
  });

  const { data: masteryEligibility } = useQuery<{ eligible: boolean; missingSections: string[] }>({
    queryKey: ["/api/mastery/eligibility"],
  });

  const { data: rolesList } = useQuery<{ id: number; slug: string; name: string }[]>({
    queryKey: ["/api/roles"],
    enabled: !!user?.roleId,
  });
  const { data: assignedData } = useQuery<{ chapters: string[]; role: { name: string; scope: string; department: string } | null }>({
    queryKey: ["/api/user/assigned-chapters"],
  });

  const viewScopeMutation = useMutation({
    mutationFn: async (scope: "department" | "all") => {
      const res = await apiRequest("PATCH", "/api/user/view-scope", { scope });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
      queryClient.invalidateQueries({ queryKey: ["/api/user/assigned-chapters"] });
    },
  });

  const isLoading = streakLoading || progressLoading || activitiesLoading;

  const progressMap = new Map<string, UserProgress>();
  progress?.forEach((p) => progressMap.set(p.levelId, p));

  const userModule: ModuleId = (user?.organizationType as ModuleId) || "hospital";
  const moduleLevels = getVisibleLevelsForModule(userModule);

  const assignedFilteredLevels = (assignedData?.chapters && assignedData.chapters.length > 0)
    ? moduleLevels.filter(l => assignedData.chapters.includes(l.id))
    : moduleLevels;

  const sessionsMap = new Map<string, QuizSession>();
  savedSessions?.forEach((s) => sessionsMap.set(s.levelId, s));

  const sessionXp = savedSessions?.reduce((sum, s) => sum + (s.xpEarned || 0), 0) || 0;
  const displayXp = (streak?.totalXp || 0) + sessionXp;

  const isLevelUnlocked = (_levelIndex: number) => {
    return true;
  };

  const dailyGoal = user?.dailyGoal || 5;
  const todayQuestions = todayActivity?.questionsAnswered || 0;
  const goalProgress = Math.min((todayQuestions / dailyGoal) * 100, 100);

  if (isLoading) {
    return (
      <div className="min-h-screen p-4 max-w-2xl mx-auto">
        <div className="flex flex-col gap-6 pt-4">
          <Skeleton className="h-12 w-48" />
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => <Skeleton key={i} className="h-24 rounded-2xl" />)}
          </div>
          <Skeleton className="h-40 rounded-2xl" />
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-24 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary">
              <span className="font-black text-sm text-primary-foreground">
                {user?.username?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <h1 className="font-bold text-lg truncate" data-testid="text-username">
                {user?.username}
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome back!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation("/leaderboard")}
              data-testid="button-leaderboard"
            >
              <Trophy size={16} />
            </Button>
            {user?.isAdmin && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLocation("/admin")}
                data-testid="button-admin"
              >
                <BarChart3 size={16} />
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation("/profile")}
              data-testid="button-profile"
            >
              <Settings size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={async () => { await logout(); setLocation("/auth"); }}
              data-testid="button-logout"
            >
              <LogOut size={16} />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 flex flex-col gap-6">
        {user?.roleId && (() => {
          const dbRole = rolesList?.find((r) => r.id === user.roleId);
          const cfg = dbRole ? getRoleConfig(dbRole.slug) : undefined;
          const title = cfg?.title || dbRole?.name || assignedData?.role?.name || "Your role";
          const department = cfg?.department || assignedData?.role?.department || "";
          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-card border border-card-border p-4 flex items-center gap-3"
              data-testid="card-current-role"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase size={18} className="text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold leading-none mb-1">
                  Your role
                </p>
                <p className="font-bold text-sm truncate" data-testid="text-current-role-title">
                  {title}
                </p>
                {department && (
                  <p className="text-xs text-muted-foreground truncate">{department}</p>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLocation("/role-select")}
                data-testid="button-dashboard-change-role"
              >
                Change
              </Button>
            </motion.div>
          );
        })()}

        <div className="grid grid-cols-3 gap-3">
          <motion.div
            className="game-card p-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <StreakFlame streak={streak?.currentStreak || 0} size="sm" />
          </motion.div>

          <motion.div
            className="game-card p-4 flex flex-col items-center justify-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-1">
              <Zap size={18} className="text-chart-4" fill="currentColor" />
              <span className="text-2xl font-black" data-testid="text-total-xp">
                {displayXp}
              </span>
            </div>
            <span className="text-sm text-muted-foreground font-semibold">Total XP</span>
          </motion.div>

          <motion.div
            className="game-card p-4 flex flex-col items-center justify-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-1">
              <TrendingUp size={20} className="text-chart-3" />
              <span className="text-2xl font-black" data-testid="text-longest-streak">
                {streak?.longestStreak || 0}
              </span>
            </div>
            <span className="text-sm text-muted-foreground font-semibold">Best Streak</span>
          </motion.div>
        </div>

        <motion.div
          className="rounded-2xl bg-card border border-card-border p-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Target size={20} className="text-primary" />
              <h3 className="font-bold text-base">Daily Goal</h3>
            </div>
            <span className="text-sm font-bold text-primary" data-testid="text-daily-progress">
              {todayQuestions}/{dailyGoal} questions
            </span>
          </div>
          <div className="relative h-4 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 gradient-progress"
              initial={{ width: 0 }}
              animate={{ width: `${goalProgress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          {goalProgress >= 100 && (
            <p className="text-xs text-chart-1 font-bold mt-2">
              Goal complete! Keep going for bonus XP!
            </p>
          )}
        </motion.div>

        <XpBar currentXp={displayXp} />

        {(!diagnosticResults || diagnosticResults.length === 0) && (
          <motion.button
            className="w-full rounded-2xl border-2 p-4 flex items-center gap-4 transition-colors text-left bg-teal-500/5 border-teal-500/20 hover:bg-teal-500/10"
            onClick={() => setLocation("/diagnostic")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            data-testid="button-diagnostic-cta"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-teal-500 to-cyan-600 shadow-md">
              <Stethoscope size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base">New here? Take the Diagnostic Quiz</h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-teal-500/10 text-teal-600 uppercase tracking-wider">
                  Start
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                25 questions to benchmark your compliance knowledge — takes about 10 minutes
              </p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground flex-shrink-0" />
          </motion.button>
        )}

        <motion.button
          className="w-full rounded-2xl border-2 p-4 flex items-center gap-4 transition-colors text-left bg-primary/5 border-primary/20 hover:bg-primary/10"
          onClick={() => setLocation("/handbook")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.98 }}
          data-testid="button-handbook"
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10">
            <BookOpen size={24} className="text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base">Compliance Handbook</h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Complete reference guide with detailed explanations, critical values, and scenarios
            </p>
          </div>
          <ChevronRight size={18} className="text-muted-foreground flex-shrink-0" />
        </motion.button>

        <motion.button
          className="w-full rounded-2xl border-2 p-4 flex items-center gap-4 transition-colors text-left bg-secondary/5 border-secondary/20 hover:bg-secondary/10"
          onClick={() => setLocation("/deep-dive")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.98 }}
          data-testid="button-deep-dive"
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-secondary/10">
            <Microscope size={24} className="text-secondary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base">Deep Dive Tracer</h3>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-secondary/10 text-secondary uppercase tracking-wider">
                New
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              Branching follow-up questions — earn <span className="font-bold text-secondary">Expert XP</span> for deeper knowledge
            </p>
          </div>
          <ChevronRight size={18} className="text-muted-foreground flex-shrink-0" />
        </motion.button>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black flex items-center gap-2">
              <CalendarIcon size={20} className="text-primary" />
              Levels
            </h2>
          </div>
          <div className="flex items-center gap-2 mb-4 px-3 py-3 rounded-xl bg-primary/5 border border-primary/10" data-testid="text-shuffle-note">
            <Shuffle size={16} className="text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Questions are <span className="font-semibold text-foreground">shuffled each time</span> you play, so you'll get a different order every session.
            </p>
          </div>
          {assignedData?.role && (
            <div className="flex flex-wrap items-center gap-3 mb-4 px-4 py-3 rounded-xl bg-muted border border-border" data-testid="text-role-banner">
              <Briefcase size={16} className="text-muted-foreground flex-shrink-0" />
              <p className="text-sm flex-1 min-w-[180px] text-foreground">
                Showing <span className="font-semibold">{assignedFilteredLevels.length}</span> level{assignedFilteredLevels.length === 1 ? "" : "s"} for your role:{" "}
                <span className="font-semibold">{assignedData.role.name}</span>
              </p>
              <div className="flex items-center gap-2 flex-shrink-0">
                {assignedData.role.scope === "dual" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    data-testid="button-toggle-view-scope"
                    onClick={() => viewScopeMutation.mutate(user?.viewScope === "all" ? "department" : "all")}
                    disabled={viewScopeMutation.isPending}
                  >
                    {user?.viewScope === "all" ? "Show only my role" : "Show all chapters"}
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  data-testid="button-banner-change-role"
                  onClick={() => setLocation("/role-select")}
                >
                  Change role
                </Button>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-3">
            {assignedFilteredLevels.map((level, index) => (
              <LevelCard
                key={level.id}
                level={level}
                progress={progressMap.get(level.id)}
                savedSession={sessionsMap.get(level.id)}
                isUnlocked={isLevelUnlocked(index)}
                index={index}
                onPlay={() => setLocation(`/play/${level.id}`)}
                onStudy={() => setLocation(`/study/${level.id}`)}
              />
            ))}
          </div>
        </div>

        {masteryEligibility?.eligible && (
          <motion.button
            className="w-full rounded-2xl border-2 p-4 flex items-center gap-4 transition-colors text-left bg-amber-500/5 border-amber-500/20 hover:bg-amber-500/10"
            onClick={() => setLocation("/mastery")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            data-testid="button-mastery-cta"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-amber-500 to-orange-600 shadow-md">
              <Crown size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base">All sections complete? Take the Final Assessment</h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-amber-500/10 text-amber-600 uppercase tracking-wider">
                  Unlocked
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                25 advanced questions to see how much you've learned — compare your results to your Diagnostic score
              </p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground flex-shrink-0" />
          </motion.button>
        )}

        <div className="rounded-2xl bg-card border border-card-border p-5">
          <h3 className="font-bold text-base mb-4 flex items-center gap-2">
            <CalendarIcon size={18} className="text-primary" />
            Activity Calendar
          </h3>
          <DailyCalendar
            activities={activities || []}
            dailyGoal={dailyGoal}
          />
        </div>
      </div>

      <div className="text-center mt-8 mb-4 text-xs text-muted-foreground" data-testid="text-disclaimer-footer">
        Not affiliated with The Joint Commission. For educational purposes only.{" "}
        <Link href="/terms" className="underline hover:text-primary">Terms & Privacy</Link>
      </div>
    </div>
  );
}
