import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Flame, Zap, Trophy, Target, Bell, BellOff, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StreakFlame } from "@/components/streak-flame";
import { XpBar } from "@/components/xp-bar";
import { DailyCalendar } from "@/components/daily-calendar";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { UserStreak, DailyActivity } from "@shared/schema";

export default function ProfilePage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const { data: streak } = useQuery<UserStreak>({
    queryKey: ["/api/game/streak"],
  });

  const { data: activities } = useQuery<DailyActivity[]>({
    queryKey: ["/api/game/activities"],
  });

  const updateSettingsMutation = useMutation({
    mutationFn: async (data: { dailyGoal?: number; reminderEnabled?: boolean }) => {
      await apiRequest("PATCH", "/api/auth/settings", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
    },
  });

  const totalCorrect = activities?.reduce((sum, a) => sum + a.correctAnswers, 0) || 0;
  const totalAnswered = activities?.reduce((sum, a) => sum + a.questionsAnswered, 0) || 0;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const daysActive = activities?.filter((a) => a.questionsAnswered > 0).length || 0;

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation("/")}
            data-testid="button-back"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="font-bold text-base">Profile & Settings</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 flex flex-col gap-6">
        <motion.div
          className="rounded-2xl bg-card border border-card-border p-6 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <UserIcon size={36} className="text-primary" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-black" data-testid="text-profile-username">{user?.username}</h2>
          </div>
          <StreakFlame streak={streak?.currentStreak || 0} size="lg" />
        </motion.div>

        <XpBar currentXp={streak?.totalXp || 0} />

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Days Active", value: daysActive, icon: Target, color: "text-primary" },
            { label: "Accuracy", value: `${accuracy}%`, icon: Trophy, color: "text-chart-4" },
            { label: "Total Questions", value: totalAnswered, icon: Zap, color: "text-chart-2" },
            { label: "Best Streak", value: streak?.longestStreak || 0, icon: Flame, color: "text-chart-3" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <stat.icon size={20} className={stat.color} />
              <span className="text-xl font-black">{stat.value}</span>
              <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-card border border-card-border p-5">
          <h3 className="font-bold text-base mb-4">Settings</h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Target size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-bold">Daily Goal</p>
                  <p className="text-xs text-muted-foreground">Questions per day</p>
                </div>
              </div>
              <Select
                value={String(user?.dailyGoal || 5)}
                onValueChange={(val) =>
                  updateSettingsMutation.mutate({ dailyGoal: parseInt(val) })
                }
              >
                <SelectTrigger className="w-20" data-testid="select-daily-goal">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {user?.reminderEnabled ? (
                  <Bell size={18} className="text-muted-foreground" />
                ) : (
                  <BellOff size={18} className="text-muted-foreground" />
                )}
                <div>
                  <p className="text-sm font-bold">Daily Reminders</p>
                  <p className="text-xs text-muted-foreground">Get notified to complete your goal</p>
                </div>
              </div>
              <Switch
                checked={user?.reminderEnabled ?? true}
                onCheckedChange={(checked) =>
                  updateSettingsMutation.mutate({ reminderEnabled: checked })
                }
                data-testid="switch-reminders"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-card-border p-5">
          <h3 className="font-bold text-base mb-4">Activity History</h3>
          <DailyCalendar
            activities={activities || []}
            dailyGoal={user?.dailyGoal || 5}
          />
        </div>
      </div>
    </div>
  );
}
