import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface XpBarProps {
  currentXp: number;
  className?: string;
}

function getLevel(xp: number) {
  const levels = [
    { level: 1, name: "Novice", threshold: 0 },
    { level: 2, name: "Observer", threshold: 100 },
    { level: 3, name: "Inspector", threshold: 250 },
    { level: 4, name: "Specialist", threshold: 500 },
    { level: 5, name: "Expert", threshold: 800 },
    { level: 6, name: "Compliance Pro", threshold: 1200 },
    { level: 7, name: "Audit Master", threshold: 1800 },
    { level: 8, name: "Joint Commission Ready", threshold: 2500 },
  ];

  let current = levels[0];
  let next = levels[1];

  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].threshold) {
      current = levels[i];
      next = levels[i + 1] || levels[i];
      break;
    }
  }

  const progress = next.threshold > current.threshold
    ? ((xp - current.threshold) / (next.threshold - current.threshold)) * 100
    : 100;

  return { current, next, progress };
}

export function XpBar({ currentXp, className = "" }: XpBarProps) {
  const { current, next, progress } = getLevel(currentXp);

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-chart-4/15">
            <Zap size={14} className="text-chart-4" fill="currentColor" />
          </div>
          <span className="text-sm font-bold" data-testid="text-level-name">
            Lvl {current.level} - {current.name}
          </span>
        </div>
        <span className="text-xs text-muted-foreground font-medium" data-testid="text-xp-count">
          {currentXp} XP
        </span>
      </div>
      <div className="relative h-3 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--chart-4)), hsl(var(--chart-4) / 0.8))",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      {next.threshold > current.threshold && (
        <span className="text-xs text-muted-foreground">
          {next.threshold - currentXp} XP to {next.name}
        </span>
      )}
    </div>
  );
}
