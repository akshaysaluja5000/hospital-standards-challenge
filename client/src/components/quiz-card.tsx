import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import { playCorrectSound, playWrongSound } from "@/lib/sounds";
import { AiTutorBox } from "@/components/ai-tutor-box";
import type { Question } from "@shared/schema";

interface QuizCardProps {
  question: Question;
  onAnswer: (selectedIndex: number) => void;
  disabled?: boolean;
  previousAnswer?: { selectedIndex: number; correct: boolean } | null;
}

export function QuizCard({ question, onAnswer, disabled, previousAnswer }: QuizCardProps) {
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
    if (index === question.correctIndex) {
      playCorrectSound();
    } else {
      playWrongSound();
    }
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
      <div className="rounded-2xl bg-card border-2 border-card-border p-6 flex flex-col gap-5 shadow-lg">
        {question.scenario && (
          <div className="bg-accent/50 rounded-xl p-4 border border-accent">
            <p className="text-base text-foreground/70 italic leading-relaxed" data-testid="text-scenario">
              {question.scenario}
            </p>
          </div>
        )}

        <h3 className="text-xl font-black leading-snug" data-testid="text-question">
          {question.question}
        </h3>

        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => {
            let optionStyle = "border-border bg-background";
            if (showResult) {
              if (index === question.correctIndex) {
                optionStyle = "border-chart-1 bg-chart-1/10 text-chart-1";
              } else if (index === selected && !isCorrect) {
                optionStyle = "border-destructive bg-destructive/10 text-destructive";
              }
            } else if (index === selected) {
              optionStyle = "border-primary bg-primary/10";
            }

            return (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-colors ${optionStyle} ${
                  !showResult && !disabled ? "cursor-pointer" : "cursor-default"
                }`}
                onClick={() => handleSelect(index)}
                whileTap={!showResult && !disabled ? { scale: 0.98 } : {}}
                data-testid={`button-option-${index}`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current/20 flex items-center justify-center text-sm font-bold mt-0.5">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-base leading-relaxed">{option}</span>
                  {showResult && index === question.correctIndex && (
                    <CheckCircle2 size={20} className="ml-auto flex-shrink-0 text-chart-1 mt-0.5" />
                  )}
                  {showResult && index === selected && !isCorrect && (
                    <XCircle size={20} className="ml-auto flex-shrink-0 text-destructive mt-0.5" />
                  )}
                </div>
              </motion.button>
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
                  size={20}
                  className={`flex-shrink-0 mt-0.5 ${isCorrect ? "text-chart-1" : "text-destructive"}`}
                />
                <div>
                  <p className={`text-base font-bold mb-1 ${isCorrect ? "text-chart-1" : "text-destructive"}`}>
                    {isCorrect ? `Correct! +${question.xpReward} XP` : "Not quite!"}
                  </p>
                  {!isCorrect && (
                    <p className="text-base font-semibold mb-1" data-testid="text-correct-answer">
                      Correct answer: {question.options[question.correctIndex]}
                    </p>
                  )}
                  <p className="text-base text-foreground/70 leading-relaxed" data-testid="text-explanation">
                    {question.explanation}
                  </p>
                  {selected !== null && (
                    <AiTutorBox question={question} selectedIndex={selected} />
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
