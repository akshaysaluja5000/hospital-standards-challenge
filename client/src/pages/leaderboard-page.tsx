import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Trophy, Zap, Flame, Target, TrendingUp, Medal, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/auth";
import { levels } from "@shared/questions";

interface LeaderboardEntry {
  id: number;
  username: string;
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  questionsAnswered: number;
  accuracy: number;
  levelsCompleted: number;
  lastActive: string | null;
}

export default function LeaderboardPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const { data: leaderboard, isLoading } = useQuery<LeaderboardEntry[]>({
    queryKey: ["/api/game/leaderboard"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen p-4 max-w-2xl mx-auto">
        <div className="flex flex-col gap-6 pt-16">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-48 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    );
  }

  const totalLevels = levels.length;
  const topThree = leaderboard?.slice(0, 3) || [];
  const rest = leaderboard?.slice(3) || [];
  const myRank = leaderboard?.findIndex((e) => e.id === user?.id);
  const myEntry = myRank !== undefined && myRank >= 0 ? leaderboard?.[myRank] : null;

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
          <div>
            <h1 className="font-bold text-base">Leaderboard</h1>
            <p className="text-xs text-muted-foreground">See how you compare with your team</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 flex flex-col gap-6">
        {myEntry && myRank !== undefined && (
          <motion.div
            className="rounded-2xl bg-primary/5 border border-primary/20 p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-black text-sm">
                    #{myRank + 1}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm">Your Ranking</p>
                  <p className="text-xs text-muted-foreground">
                    {myEntry.totalXp} XP · {myEntry.levelsCompleted}/{totalLevels} levels · {myEntry.accuracy}% accuracy
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Flame size={16} className="text-chart-5" />
                <span className="font-bold text-sm">{myEntry.currentStreak}</span>
              </div>
            </div>
          </motion.div>
        )}

        {topThree.length > 0 && (
          <div className="flex items-end justify-center gap-3 pt-4 pb-2">
            {topThree.length > 1 && (
              <motion.div
                className="flex flex-col items-center gap-2 w-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gray-300/20 border-2 border-gray-400 flex items-center justify-center">
                  <span className="text-xl font-black">{topThree[1].username.charAt(0).toUpperCase()}</span>
                </div>
                <Medal size={20} className="text-gray-400" />
                <p className="text-xs font-bold truncate w-full text-center" data-testid={`text-rank-2-name`}>{topThree[1].username}</p>
                <p className="text-xs text-muted-foreground font-medium">{topThree[1].totalXp} XP</p>
              </motion.div>
            )}

            <motion.div
              className="flex flex-col items-center gap-2 w-28 -mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Crown size={24} className="text-yellow-500" />
              <div className="w-20 h-20 rounded-full bg-yellow-500/20 border-2 border-yellow-500 flex items-center justify-center">
                <span className="text-2xl font-black">{topThree[0].username.charAt(0).toUpperCase()}</span>
              </div>
              <p className="text-sm font-black truncate w-full text-center" data-testid={`text-rank-1-name`}>{topThree[0].username}</p>
              <p className="text-xs text-primary font-bold">{topThree[0].totalXp} XP</p>
            </motion.div>

            {topThree.length > 2 && (
              <motion.div
                className="flex flex-col items-center gap-2 w-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-amber-700/20 border-2 border-amber-700 flex items-center justify-center">
                  <span className="text-xl font-black">{topThree[2].username.charAt(0).toUpperCase()}</span>
                </div>
                <Medal size={20} className="text-amber-700" />
                <p className="text-xs font-bold truncate w-full text-center" data-testid={`text-rank-3-name`}>{topThree[2].username}</p>
                <p className="text-xs text-muted-foreground font-medium">{topThree[2].totalXp} XP</p>
              </motion.div>
            )}
          </div>
        )}

        <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
          <div className="p-4 border-b border-card-border">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <Trophy size={16} className="text-primary" />
              All Players
            </h3>
          </div>
          <div className="divide-y divide-card-border/50">
            {leaderboard?.map((entry, i) => {
              const isMe = entry.id === user?.id;
              return (
                <motion.div
                  key={entry.id}
                  className={`flex items-center gap-3 px-4 py-3 ${isMe ? "bg-primary/5" : ""}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  data-testid={`row-leaderboard-${entry.id}`}
                >
                  <div className="w-8 text-center flex-shrink-0">
                    {i === 0 ? (
                      <Crown size={18} className="text-yellow-500 mx-auto" />
                    ) : i === 1 ? (
                      <Medal size={18} className="text-gray-400 mx-auto" />
                    ) : i === 2 ? (
                      <Medal size={18} className="text-amber-700 mx-auto" />
                    ) : (
                      <span className="font-black text-sm text-muted-foreground">{i + 1}</span>
                    )}
                  </div>

                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${isMe ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <span className="text-xs font-bold">{entry.username.charAt(0).toUpperCase()}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`text-sm font-bold truncate ${isMe ? "text-primary" : ""}`}>
                        {entry.username}
                        {isMe && <span className="text-xs font-normal text-muted-foreground ml-1">(you)</span>}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{entry.levelsCompleted}/{totalLevels} levels</span>
                      <span>·</span>
                      <span>{entry.questionsAnswered} Qs</span>
                      <span>·</span>
                      <span className={entry.accuracy >= 80 ? "text-chart-1 font-bold" : entry.accuracy >= 50 ? "text-chart-4 font-bold" : "text-destructive font-bold"}>
                        {entry.accuracy}%
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <Zap size={14} className="text-chart-4" fill="currentColor" />
                      <span className="text-sm font-black">{entry.totalXp}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame size={12} className="text-chart-5" />
                      <span className="text-xs text-muted-foreground">{entry.currentStreak}d</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {(!leaderboard || leaderboard.length === 0) && (
              <div className="p-8 text-center text-muted-foreground">
                <Trophy size={32} className="mx-auto mb-3 opacity-30" />
                <p className="font-medium">No players yet</p>
                <p className="text-xs mt-1">Complete a quiz to appear on the leaderboard!</p>
              </div>
            )}
          </div>
        </div>

        {leaderboard && leaderboard.length > 0 && (
          <motion.div
            className="rounded-2xl bg-card border border-card-border p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" />
              Team Stats
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-xl font-black" data-testid="text-team-total-players">{leaderboard.length}</p>
                <p className="text-xs text-muted-foreground">Players</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black" data-testid="text-team-avg-accuracy">
                  {leaderboard.length > 0
                    ? Math.round(leaderboard.reduce((s, e) => s + e.accuracy, 0) / leaderboard.filter(e => e.questionsAnswered > 0).length || 0)
                    : 0}%
                </p>
                <p className="text-xs text-muted-foreground">Avg Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black" data-testid="text-team-total-xp">
                  {leaderboard.reduce((s, e) => s + e.totalXp, 0)}
                </p>
                <p className="text-xs text-muted-foreground">Total XP</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
