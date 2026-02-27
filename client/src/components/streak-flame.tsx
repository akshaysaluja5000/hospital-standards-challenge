import { motion } from "framer-motion";
import { Flame } from "lucide-react";

interface StreakFlameProps {
  streak: number;
  size?: "sm" | "md" | "lg";
}

export function StreakFlame({ streak, size = "md" }: StreakFlameProps) {
  const sizes = {
    sm: { icon: 20, text: "text-sm", container: "h-10 w-10" },
    md: { icon: 28, text: "text-lg", container: "h-14 w-14" },
    lg: { icon: 40, text: "text-2xl", container: "h-20 w-20" },
  };

  const s = sizes[size];
  const isActive = streak > 0;

  const flameColor = streak >= 30
    ? "text-purple-500"
    : streak >= 14
    ? "text-blue-500"
    : streak >= 7
    ? "text-orange-500"
    : "text-orange-400";

  return (
    <div className="flex flex-col items-center gap-1">
      <motion.div
        className={`${s.container} rounded-full flex items-center justify-center relative`}
        animate={isActive ? {
          scale: [1, 1.08, 1],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: streak >= 30
                ? "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)"
                : streak >= 14
                ? "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(251,146,60,0.25) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        <Flame
          size={s.icon}
          className={isActive ? flameColor : "text-muted-foreground/30"}
          fill={isActive ? "currentColor" : "none"}
        />
      </motion.div>
      <span className={`${s.text} font-bold ${isActive ? "text-foreground" : "text-muted-foreground"}`}
        data-testid="text-streak-count">
        {streak}
      </span>
      <span className="text-xs text-muted-foreground font-medium">
        {streak === 1 ? "day streak" : "day streak"}
      </span>
    </div>
  );
}
