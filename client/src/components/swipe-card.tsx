import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Question } from "@shared/schema";

interface SwipeCardProps {
  question: Question;
  onAnswer: (selectedIndex: number) => void;
  disabled?: boolean;
  isGuest?: boolean;
  previousAnswer?: { selectedIndex: number; correct: boolean } | null;
}

export function SwipeCard({ question, onAnswer, disabled, isGuest, previousAnswer }: SwipeCardProps) {
  const [selected, setSelected] = useState<number | null>(previousAnswer?.selectedIndex ?? null);
  const [showResult, setShowResult] = useState(!!previousAnswer);

  useEffect(() => {
    setSelected(previousAnswer?.selectedIndex ?? null);
    setShowResult(!!previousAnswer);
  }, [question.id, previousAnswer]);

  const handleSelect = (index: number) => {
    if (disabled || showResult) return;
    setSelected(index);
    setShowResult(true);
    onAnswer(index);
  };

  const isCorrect = selected === question.correctIndex;

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-2xl bg-card border border-card-border p-6 flex flex-col gap-5">
        {question.scenario && (
          <div className="bg-accent/50 rounded-xl p-4 border border-accent">
            <p className="text-sm text-muted-foreground italic leading-relaxed" data-testid="text-scenario">
              {question.scenario}
            </p>
          </div>
        )}

        <h3 className="text-lg font-bold leading-snug text-center" data-testid="text-question">
          {question.question}
        </h3>

        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => {
            const isYes = index === 0;
            let btnStyle = isYes
              ? "border-chart-1/40 bg-chart-1/5 hover:bg-chart-1/15 text-chart-1"
              : "border-destructive/40 bg-destructive/5 hover:bg-destructive/15 text-destructive";

            if (showResult) {
              if (index === question.correctIndex) {
                btnStyle = "border-chart-1 bg-chart-1/15 text-chart-1 ring-2 ring-chart-1/30";
              } else if (index === selected && !isCorrect) {
                btnStyle = "border-destructive bg-destructive/15 text-destructive ring-2 ring-destructive/30";
              } else {
                btnStyle = "border-border bg-muted/50 text-muted-foreground opacity-50";
              }
            }

            return (
              <button
                key={index}
                className={`w-full text-left px-4 py-3 min-h-[3.5rem] rounded-xl border-2 font-bold transition-all ${btnStyle} ${
                  !showResult && !disabled ? "cursor-pointer" : "cursor-default"
                }`}
                onClick={() => handleSelect(index)}
                disabled={showResult || disabled}
                data-testid={`button-yesno-${index}`}
              >
                <span className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-0.5">{isYes ? <Check size={18} /> : <X size={18} />}</span>
                  <span className="text-sm leading-relaxed whitespace-normal">{option}</span>
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div
                className={`rounded-xl p-4 flex gap-3 ${
                  isCorrect
                    ? "bg-chart-1/10 border border-chart-1/20"
                    : "bg-destructive/10 border border-destructive/20"
                }`}
              >
                <Lightbulb
                  size={18}
                  className={`flex-shrink-0 mt-0.5 ${isCorrect ? "text-chart-1" : "text-destructive"}`}
                />
                <div>
                  <p className={`text-sm font-bold mb-1 ${isCorrect ? "text-chart-1" : "text-destructive"}`}>
                    {isCorrect ? `Correct! +${question.xpReward} XP` : "Not quite!"}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm font-semibold mb-1" data-testid="text-correct-answer">
                      Correct answer: {question.options[question.correctIndex]}
                    </p>
                  )}
                  {isGuest ? (
                    <p className="text-xs text-muted-foreground italic" data-testid="text-guest-explanation-prompt">
                      Create an account to see detailed explanations
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-explanation">
                      {question.explanation}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
