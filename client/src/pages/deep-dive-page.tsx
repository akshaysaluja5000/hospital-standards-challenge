import { useState, useMemo, useCallback, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Zap, Star, Trophy, Home, Loader2, Microscope, ChevronDown, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { DeepDiveLevel, DeepDiveGameState } from "@shared/schema";

function invalidateDashboardData() {
  queryClient.invalidateQueries({ queryKey: ["/api/game/streak"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/progress"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/activities"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/today"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/leaderboard"] });
}

export default function DeepDivePage() {
  const [, params] = useRoute("/deep-dive/:levelId");
  const [, setLocation] = useLocation();
  const levelId = params?.levelId;

  const { data: level, isLoading } = useQuery<DeepDiveLevel>({
    queryKey: ["/api/game/deep-dive", levelId],
    enabled: !!levelId,
  });

  const [gameState, setGameState] = useState<DeepDiveGameState>({
    currentQuestion: 0,
    totalQuestions: 0,
    phase: "base",
    baseCorrect: 0,
    followUpCorrect: 0,
    baseXpEarned: 0,
    expertXpEarned: 0,
    answers: [],
  });

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (level) {
      setGameState((prev) => ({
        ...prev,
        totalQuestions: level.questions.length,
      }));
    }
  }, [level?.id]);

  const currentQ = level?.questions[gameState.currentQuestion];

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/game/deep-dive/submit", data);
      return res.json();
    },
    onSuccess: () => {
      invalidateDashboardData();
    },
  });

  const handleSelect = useCallback(
    (index: number) => {
      if (selectedIndex !== null || !currentQ) return;
      setSelectedIndex(index);
      setShowExplanation(true);

      if (gameState.phase === "base") {
        const isCorrect = index === currentQ.baseCorrectIndex;
        setGameState((prev) => ({
          ...prev,
          baseCorrect: prev.baseCorrect + (isCorrect ? 1 : 0),
          baseXpEarned: prev.baseXpEarned + (isCorrect ? currentQ.baseXp : 0),
        }));
      } else if (gameState.phase === "followUp") {
        const isCorrect = index === currentQ.followUp.correctIndex;
        setGameState((prev) => {
          const updatedAnswers = [...prev.answers];
          const lastAnswer = updatedAnswers[updatedAnswers.length - 1];
          if (lastAnswer) {
            lastAnswer.followUpCorrect = isCorrect;
            lastAnswer.followUpSelectedIndex = index;
          }
          return {
            ...prev,
            followUpCorrect: prev.followUpCorrect + (isCorrect ? 1 : 0),
            expertXpEarned:
              prev.expertXpEarned + (isCorrect ? currentQ.followUp.expertXp : 0),
            answers: updatedAnswers,
          };
        });
      }
    },
    [selectedIndex, currentQ, gameState.phase]
  );

  const handleNext = useCallback(() => {
    if (!currentQ || !level) return;

    if (gameState.phase === "base") {
      const isCorrect = selectedIndex === currentQ.baseCorrectIndex;
      setGameState((prev) => ({
        ...prev,
        phase: isCorrect ? "followUp" : "base",
        currentQuestion: isCorrect
          ? prev.currentQuestion
          : prev.currentQuestion + 1,
        answers: [
          ...prev.answers,
          ...(isCorrect
            ? []
            : [
                {
                  questionId: currentQ.id,
                  baseCorrect: false,
                  baseSelectedIndex: selectedIndex!,
                  followUpCorrect: null,
                  followUpSelectedIndex: null,
                },
              ]),
        ],
      }));
      if (isCorrect) {
        setGameState((prev) => ({
          ...prev,
          answers: [
            ...prev.answers,
            {
              questionId: currentQ.id,
              baseCorrect: true,
              baseSelectedIndex: selectedIndex!,
              followUpCorrect: null,
              followUpSelectedIndex: null,
            },
          ],
        }));
      }
      setSelectedIndex(null);
      setShowExplanation(false);

      if (!isCorrect && gameState.currentQuestion + 1 >= level.questions.length) {
        finishGame();
      }
    } else if (gameState.phase === "followUp") {
      const nextQ = gameState.currentQuestion + 1;
      if (nextQ >= level.questions.length) {
        finishGame();
      } else {
        setGameState((prev) => ({
          ...prev,
          currentQuestion: nextQ,
          phase: "base",
        }));
        setSelectedIndex(null);
        setShowExplanation(false);
      }
    }
  }, [currentQ, level, gameState, selectedIndex]);

  const finishGame = () => {
    setIsComplete(true);
    if (level) {
      const followUpAttempted = gameState.answers.filter(
        (a) => a.followUpCorrect !== null
      ).length + (gameState.phase === "followUp" ? 1 : 0);
      submitMutation.mutate({
        levelId: level.id,
        baseCorrect: gameState.baseCorrect,
        followUpCorrect: gameState.followUpCorrect,
        totalQuestions: level.questions.length,
        followUpAttempted,
        baseXpEarned: gameState.baseXpEarned,
        expertXpEarned: gameState.expertXpEarned,
      });
    }
  };

  if (isLoading || !level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-secondary" />
      </div>
    );
  }

  if (isComplete) {
    const totalXp = gameState.baseXpEarned + gameState.expertXpEarned;
    const totalQuestions = level.questions.length;
    const basePercent = Math.round(
      (gameState.baseCorrect / totalQuestions) * 100
    );
    const followUpAttempted = gameState.answers.filter(
      (a) => a.followUpCorrect !== null
    ).length;
    const followUpPercent =
      followUpAttempted > 0
        ? Math.round((gameState.followUpCorrect / followUpAttempted) * 100)
        : 0;

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          className="game-card max-w-md w-full p-8 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 deep-dive-glow">
            <Trophy size={40} className="text-secondary" />
          </div>
          <h2 className="text-2xl font-black mb-2" data-testid="text-deep-dive-complete">
            Deep Dive Complete!
          </h2>
          <p className="text-muted-foreground mb-6">{level.name}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-primary/5 p-4">
              <div className="text-2xl font-black text-primary">{basePercent}%</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                Base Accuracy
              </div>
            </div>
            <div className="rounded-xl bg-secondary/5 p-4">
              <div className="text-2xl font-black text-secondary">{followUpPercent}%</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                Expert Accuracy
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-chart-4" fill="currentColor" />
              <span className="font-black text-lg">{gameState.baseXpEarned}</span>
              <span className="text-xs text-muted-foreground">Base XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-secondary" />
              <span className="font-black text-lg text-secondary">
                {gameState.expertXpEarned}
              </span>
              <span className="text-xs text-muted-foreground">Expert XP</span>
            </div>
          </div>

          <div className="rounded-xl bg-muted/50 p-3 mb-6">
            <div className="text-sm font-bold">
              Total XP Earned:{" "}
              <span className="text-primary">{totalXp}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => setLocation("/")}
              data-testid="button-deep-dive-home"
            >
              <Home size={16} className="mr-2" />
              Dashboard
            </Button>
            <Button
              className="flex-1"
              onClick={() => setLocation("/deep-dive")}
              data-testid="button-deep-dive-more"
            >
              <Microscope size={16} className="mr-2" />
              More Topics
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const isBasePhase = gameState.phase === "base";
  const question = isBasePhase ? currentQ?.baseQuestion : currentQ?.followUp.question;
  const options = isBasePhase ? currentQ?.baseOptions : currentQ?.followUp.options;
  const correctIdx = isBasePhase
    ? currentQ?.baseCorrectIndex
    : currentQ?.followUp.correctIndex;
  const explanation = isBasePhase
    ? currentQ?.baseExplanation
    : currentQ?.followUp.explanation;
  const progressPercent =
    ((gameState.currentQuestion + (isBasePhase ? 0 : 0.5)) / level.questions.length) * 100;

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setLocation("/deep-dive")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-deep-dive-back"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Zap size={14} className="text-chart-4" fill="currentColor" />
                <span className="text-sm font-bold" data-testid="text-base-xp">
                  {gameState.baseXpEarned}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles size={14} className="text-secondary" />
                <span className="text-sm font-bold text-secondary" data-testid="text-expert-xp">
                  {gameState.expertXpEarned}
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-3 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 gradient-progress"
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground font-medium">
              Question {gameState.currentQuestion + 1} of {level.questions.length}
            </span>
            {!isBasePhase && (
              <motion.span
                className="text-xs font-bold text-secondary flex items-center gap-1"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ChevronDown size={12} />
                DEEP DIVE
              </motion.span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${gameState.currentQuestion}-${gameState.phase}`}
            className={`game-card p-6 ${!isBasePhase ? "deep-dive-glow" : ""}`}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {!isBasePhase && (
              <motion.div
                className="flex items-center gap-2 mb-4 px-3 py-2 rounded-xl bg-secondary/10 border border-secondary/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Microscope size={16} className="text-secondary" />
                <span className="text-xs font-bold text-secondary uppercase tracking-wide">
                  Deep Dive Follow-Up — Expert XP Available
                </span>
              </motion.div>
            )}

            <h3
              className="text-lg font-bold leading-relaxed mb-6"
              data-testid="text-deep-dive-question"
            >
              {question}
            </h3>

            <div className="flex flex-col gap-3">
              {options?.map((option, idx) => {
                const isSelected = selectedIndex === idx;
                const isCorrect = idx === correctIdx;
                const showResult = showExplanation;

                let borderClass = "border-border hover:border-primary/40";
                let bgClass = "bg-card hover:bg-primary/5";

                if (showResult) {
                  if (isCorrect) {
                    borderClass = "border-primary";
                    bgClass = "bg-primary/10";
                  } else if (isSelected && !isCorrect) {
                    borderClass = "border-destructive";
                    bgClass = "bg-destructive/10";
                  } else {
                    borderClass = "border-border/50";
                    bgClass = "bg-card opacity-60";
                  }
                }

                return (
                  <motion.button
                    key={idx}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${borderClass} ${bgClass}`}
                    onClick={() => handleSelect(idx)}
                    disabled={selectedIndex !== null}
                    whileTap={selectedIndex === null ? { scale: 0.98 } : undefined}
                    data-testid={`button-deep-dive-option-${idx}`}
                  >
                    <div className="flex items-start gap-3">
                      {showResult && isCorrect && (
                        <CheckCircle2
                          size={20}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle
                          size={20}
                          className="text-destructive flex-shrink-0 mt-0.5"
                        />
                      )}
                      {!showResult && (
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm font-medium leading-relaxed">
                        {option}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div
                    className={`p-4 rounded-xl border ${
                      selectedIndex === correctIdx
                        ? "bg-primary/5 border-primary/20"
                        : "bg-destructive/5 border-destructive/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {selectedIndex === correctIdx ? (
                        <>
                          <CheckCircle2 size={16} className="text-primary" />
                          <span className="text-sm font-bold text-primary">
                            {isBasePhase ? "Correct!" : "Expert Answer!"}
                          </span>
                          <span className="ml-auto text-xs font-bold flex items-center gap-1">
                            {isBasePhase ? (
                              <>
                                <Zap size={12} className="text-chart-4" fill="currentColor" />
                                +{currentQ?.baseXp} XP
                              </>
                            ) : (
                              <>
                                <Sparkles size={12} className="text-secondary" />
                                +{currentQ?.followUp.expertXp} Expert XP
                              </>
                            )}
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} className="text-destructive" />
                          <span className="text-sm font-bold text-destructive">
                            Not quite
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {explanation}
                    </p>
                  </div>

                  <Button
                    className="w-full mt-4"
                    size="lg"
                    onClick={handleNext}
                    data-testid="button-deep-dive-next"
                  >
                    {isBasePhase && selectedIndex === correctIdx
                      ? "Go Deeper →"
                      : gameState.currentQuestion + 1 >= level.questions.length &&
                        (gameState.phase === "followUp" || selectedIndex !== correctIdx)
                      ? "See Results"
                      : "Next Question →"}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-2">
          {level.questions.map((_, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx < gameState.currentQuestion
                  ? "bg-primary"
                  : idx === gameState.currentQuestion
                  ? isBasePhase
                    ? "bg-primary/50"
                    : "bg-secondary"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
