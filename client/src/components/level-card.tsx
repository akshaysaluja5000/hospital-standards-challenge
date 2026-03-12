import { motion } from "framer-motion";
import { Star, Truck, Building2, ArrowLeftRight, Package, Wrench, Thermometer, BookOpen, Play, FlaskConical, HeartPulse, ClipboardCheck, FileText, ShieldCheck, RotateCcw, PlayCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Level, UserProgress, QuizSession } from "@shared/schema";

const iconMap: Record<string, any> = {
  Truck, Building2, ArrowLeftRight, Package, Wrench, Thermometer, FlaskConical, HeartPulse, ClipboardCheck, FileText, ShieldCheck,
};

interface LevelCardProps {
  level: Level;
  progress?: UserProgress;
  savedSession?: QuizSession;
  isUnlocked: boolean;
  index: number;
  onPlay: () => void;
  onStudy: () => void;
}

export function LevelCard({ level, progress, savedSession, index, onPlay, onStudy }: LevelCardProps) {
  const Icon = iconMap[level.icon] || Star;
  const bestScore = progress?.bestScore || 0;
  const totalQuestions = level.questions.length;
  const percentage = totalQuestions > 0 ? Math.round((bestScore / totalQuestions) * 100) : 0;
  const hasInProgress = !!savedSession;
  const inProgressQuestion = savedSession?.currentQuestion || 0;
  const hasPlayed = progress && progress.totalQuestions > 0;

  const handleStartOver = async () => {
    try {
      await apiRequest("DELETE", `/api/game/session/${level.id}`);
      queryClient.invalidateQueries({ queryKey: ["/api/game/sessions"] });
      queryClient.invalidateQueries({ queryKey: ["/api/game/session", level.id] });
    } catch (e) {}
    onPlay();
  };

  return (
    <motion.div
      className={`w-full rounded-2xl border-2 p-5 transition-all shadow-md hover:shadow-lg ${
        hasInProgress
          ? "border-chart-4/40 bg-chart-4/5"
          : "border-border bg-card"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ y: -2 }}
      data-testid={`card-level-${level.id}`}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: `${level.color}20`,
            color: level.color,
          }}
        >
          <Icon size={28} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-black text-lg" data-testid={`text-level-name-${level.id}`}>
              {level.name}
            </h3>
            {hasInProgress && (
              <span className="px-2 py-0.5 rounded-full bg-chart-4/15 text-chart-4 text-sm font-bold" data-testid={`badge-in-progress-${level.id}`}>
                In Progress ({inProgressQuestion + 1}/{totalQuestions})
              </span>
            )}
            {hasPlayed && !hasInProgress && (
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center gap-1" data-testid={`badge-best-${level.id}`}>
                <Trophy size={12} />
                Best: {percentage}%
              </span>
            )}
          </div>
          <p className="text-base text-foreground/70 mt-1.5 line-clamp-2 leading-relaxed">
            {level.description}
          </p>
          <div className="flex items-center gap-3 mt-2.5">
            <span className="text-sm text-muted-foreground font-semibold">
              {totalQuestions} questions
            </span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground font-semibold">
              {level.studyMaterial.length} study concepts
            </span>
            {hasPlayed && (
              <>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground font-semibold">
                  Shuffled each play
                </span>
              </>
            )}
          </div>

          <div className="flex gap-2 mt-4 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              className="text-sm font-semibold"
              onClick={onStudy}
              data-testid={`button-study-${level.id}`}
            >
              <BookOpen size={15} className="mr-1.5" />
              Study First
            </Button>
            {hasInProgress ? (
              <>
                <Button
                  size="sm"
                  className="text-sm font-semibold"
                  onClick={onPlay}
                  data-testid={`button-continue-${level.id}`}
                >
                  <PlayCircle size={15} className="mr-1.5" />
                  Continue
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-sm font-semibold"
                  onClick={handleStartOver}
                  data-testid={`button-restart-${level.id}`}
                >
                  <RotateCcw size={15} className="mr-1.5" />
                  Start Over
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                className="text-sm font-semibold"
                onClick={onPlay}
                data-testid={`button-level-${level.id}`}
              >
                <Play size={15} className="mr-1.5" />
                {hasPlayed ? "Play Again" : "Play Quiz"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
