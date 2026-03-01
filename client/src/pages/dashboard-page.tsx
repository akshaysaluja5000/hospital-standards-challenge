import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import { Flame, Zap, Target, TrendingUp, ChevronRight, LogOut, BarChart3, Calendar as CalendarIcon, Settings, BookOpen, Trophy, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { StreakFlame } from "@/components/streak-flame";
import { XpBar } from "@/components/xp-bar";
import { LevelCard } from "@/components/level-card";
import { DailyCalendar } from "@/components/daily-calendar";
import { useAuth } from "@/lib/auth";
import type { UserStreak, UserProgress, DailyActivity, QuizSession } from "@shared/schema";
import { levels } from "@shared/questions";

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

  const isLoading = streakLoading || progressLoading || activitiesLoading;

  const progressMap = new Map<string, UserProgress>();
  progress?.forEach((p) => progressMap.set(p.levelId, p));

  const sessionsMap = new Map<string, QuizSession>();
  savedSessions?.forEach((s) => sessionsMap.set(s.levelId, s));

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
              <h1 className="font-bold text-base truncate" data-testid="text-username">
                {user?.username}
              </h1>
              <p className="text-xs text-muted-foreground">
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
        <div className="grid grid-cols-3 gap-3">
          <motion.div
            className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <StreakFlame streak={streak?.currentStreak || 0} size="sm" />
          </motion.div>

          <motion.div
            className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center justify-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-1">
              <Zap size={18} className="text-chart-4" fill="currentColor" />
              <span className="text-xl font-black" data-testid="text-total-xp">
                {streak?.totalXp || 0}
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-medium">Total XP</span>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center justify-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-1">
              <TrendingUp size={18} className="text-chart-3" />
              <span className="text-xl font-black" data-testid="text-longest-streak">
                {streak?.longestStreak || 0}
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-medium">Best Streak</span>
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
              <Target size={18} className="text-primary" />
              <h3 className="font-bold text-sm">Daily Goal</h3>
            </div>
            <span className="text-xs font-bold text-primary" data-testid="text-daily-progress">
              {todayQuestions}/{dailyGoal} questions
            </span>
          </div>
          <div className="relative h-4 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-primary"
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

        <XpBar currentXp={streak?.totalXp || 0} />

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
            <h3 className="font-bold text-sm">Compliance Handbook</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Complete reference guide with detailed explanations, critical values, and scenarios
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
          <div className="flex items-center gap-2 mb-4 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10" data-testid="text-shuffle-note">
            <Shuffle size={14} className="text-primary flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              Questions are <span className="font-semibold text-foreground">shuffled each time</span> you play, so you'll get a different order every session.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {levels.map((level, index) => (
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
