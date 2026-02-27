import { useState, useCallback } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Check, X } from "lucide-react";
import type { Question } from "@shared/schema";

interface SwipeCardProps {
  question: Question;
  onAnswer: (selectedIndex: number) => void;
  disabled?: boolean;
}

export function SwipeCard({ question, onAnswer, disabled }: SwipeCardProps) {
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const leftOpacity = useTransform(x, [-150, -50, 0], [1, 0.5, 0]);
  const rightOpacity = useTransform(x, [0, 50, 150], [0, 0.5, 1]);

  const handleDragEnd = useCallback((_: any, info: PanInfo) => {
    if (disabled) return;
    const threshold = 100;
    if (info.offset.x > threshold) {
      setExitDirection("right");
      onAnswer(0);
    } else if (info.offset.x < -threshold) {
      setExitDirection("left");
      onAnswer(1);
    }
  }, [onAnswer, disabled]);

  if (exitDirection) {
    return null;
  }

  return (
    <div className="relative w-full max-w-sm mx-auto" style={{ height: 380 }}>
      <div className="absolute inset-x-0 bottom-0 flex justify-between px-8 pb-4">
        <div className="flex flex-col items-center gap-1 text-destructive/60">
          <div className="w-12 h-12 rounded-full border-2 border-destructive/30 flex items-center justify-center">
            <X size={24} />
          </div>
          <span className="text-xs font-semibold">{question.options[1]}</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-chart-1/60">
          <div className="w-12 h-12 rounded-full border-2 border-chart-1/30 flex items-center justify-center">
            <Check size={24} />
          </div>
          <span className="text-xs font-semibold">{question.options[0]}</span>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ x, rotate, touchAction: "none" }}
        drag={disabled ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        data-testid="swipe-card"
      >
        <div className="w-full h-full rounded-2xl bg-card border border-card-border p-6 flex flex-col relative select-none">
          <motion.div
            className="absolute top-4 right-4 px-3 py-1 rounded-md bg-chart-1/10 text-chart-1 font-bold text-sm border border-chart-1/20"
            style={{ opacity: rightOpacity }}
          >
            {question.options[0]}
          </motion.div>
          <motion.div
            className="absolute top-4 left-4 px-3 py-1 rounded-md bg-destructive/10 text-destructive font-bold text-sm border border-destructive/20"
            style={{ opacity: leftOpacity }}
          >
            {question.options[1]}
          </motion.div>

          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 pt-8">
            {question.scenario && (
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                {question.scenario}
              </p>
            )}
            <h3 className="text-lg font-bold leading-snug" data-testid="text-question">
              {question.question}
            </h3>
          </div>

          <div className="text-center pb-2">
            <p className="text-xs text-muted-foreground font-medium">
              Swipe right for "{question.options[0]}" or left for "{question.options[1]}"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
