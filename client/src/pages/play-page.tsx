import { useState, useCallback, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trophy, Star, Zap, RotateCcw, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SwipeCard } from "@/components/swipe-card";
import { QuizCard } from "@/components/quiz-card";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { levels } from "@shared/questions";
import type { GameState } from "@shared/schema";

export default function PlayPage() {
  const [, params] = useRoute("/play/:levelId");
  const [, setLocation] = useLocation();
  const levelId = params?.levelId;

  const level = useMemo(() => levels.find((l) => l.id === levelId), [levelId]);
  const questions = useMemo(() => {
    if (!level) return [];
    return [...level.questions].sort(() => Math.random() - 0.5);
  }, [level]);

  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    correctAnswers: 0,
    totalQuestions: questions.length,
    xpEarned: 0,
    answers: [],
  });

  const [isComplete, setIsComplete] = useState(false);
  const [answering, setAnswering] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (data: { levelId: string; score: number; totalQuestions: number; xpEarned: number }) => {
      await apiRequest("POST", "/api/game/submit", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/game/streak"] });
      queryClient.invalidateQueries({ queryKey: ["/api/game/progress"] });
      queryClient.invalidateQueries({ queryKey: ["/api/game/activities"] });
      queryClient.invalidateQueries({ queryKey: ["/api/game/today"] });
    },
  });

  const handleAnswer = useCallback((selectedIndex: number) => {
    if (answering || !level) return;
    setAnswering(true);

    const currentQ = questions[gameState.currentQuestion];
    const isCorrect = selectedIndex === currentQ.correctIndex;
    const xpGained = isCorrect ? currentQ.xpReward : 0;

    setGameState((prev) => {
      const newState = {
        ...prev,
        score: prev.score + (isCorrect ? 1 : 0),
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
        xpEarned: prev.xpEarned + xpGained,
        answers: [...prev.answers, { questionId: currentQ.id, correct: isCorrect, selectedIndex }],
      };

      const isLastQuestion = prev.currentQuestion >= questions.length - 1;

      if (isLastQuestion) {
        setTimeout(() => {
          setIsComplete(true);
          submitMutation.mutate({
            levelId: level.id,
            score: newState.correctAnswers,
            totalQuestions: questions.length,
            xpEarned: newState.xpEarned,
          });
        }, currentQ.isSwipe ? 300 : 100);
      } else {
        setTimeout(() => {
          setGameState((s) => ({ ...s, currentQuestion: s.currentQuestion + 1 }));
          setAnswering(false);
        }, currentQ.isSwipe ? 500 : 2500);
      }

      return newState;
    });
  }, [answering, gameState.currentQuestion, questions, level, submitMutation]);

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Level not found</p>
      </div>
    );
  }

  const progressPercent = ((gameState.currentQuestion + (isComplete ? 1 : 0)) / questions.length) * 100;
  const currentQuestion = questions[gameState.currentQuestion];

  if (isComplete) {
    const percentage = Math.round((gameState.correctAnswers / questions.length) * 100);
    const passed = percentage >= 60;

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <div className="rounded-2xl bg-card border border-card-border p-8 flex flex-col items-center gap-6">
            <motion.div
              className={`w-24 h-24 rounded-full flex items-center justify-center ${
                passed ? "bg-chart-1/15" : "bg-chart-4/15"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {passed ? (
                <Trophy size={48} className="text-chart-1" />
              ) : (
                <Star size={48} className="text-chart-4" />
              )}
            </motion.div>

            <div>
              <h2 className="text-2xl font-black" data-testid="text-result-title">
                {passed ? "Level Complete!" : "Keep Practicing!"}
              </h2>
              <p className="text-muted-foreground mt-1">
                {passed ? "Great job! You've mastered this level." : "You need 60% to pass. Try again!"}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="rounded-xl bg-muted p-3">
                <p className="text-2xl font-black" data-testid="text-result-score">{percentage}%</p>
                <p className="text-xs text-muted-foreground">Score</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <p className="text-2xl font-black text-chart-1" data-testid="text-result-correct">
                  {gameState.correctAnswers}
                </p>
                <p className="text-xs text-muted-foreground">Correct</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <div className="flex items-center justify-center gap-1">
                  <Zap size={16} className="text-chart-4" fill="currentColor" />
                  <p className="text-2xl font-black text-chart-4" data-testid="text-result-xp">
                    {gameState.xpEarned}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">XP Earned</p>
              </div>
            </div>

            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setGameState({
                    currentQuestion: 0, score: 0, correctAnswers: 0,
                    totalQuestions: questions.length, xpEarned: 0, answers: [],
                  });
                  setIsComplete(false);
                  setAnswering(false);
                }}
                data-testid="button-retry"
              >
                <RotateCcw size={16} className="mr-2" />
                Retry
              </Button>
              <Button
                className="flex-1"
                onClick={() => setLocation("/")}
                data-testid="button-home"
              >
                <Home size={16} className="mr-2" />
                Home
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocation("/")}
              data-testid="button-back"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1 text-center">
              <h2 className="font-bold text-sm" data-testid="text-level-title" style={{ color: level.color }}>
                {level.name}
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <Zap size={14} className="text-chart-4" fill="currentColor" />
              <span className="text-sm font-bold text-chart-4">{gameState.xpEarned}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Progress value={progressPercent} className="flex-1 h-2.5" />
            <span className="text-xs text-muted-foreground font-bold whitespace-nowrap">
              {gameState.currentQuestion + 1}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {currentQuestion.isSwipe ? (
              <SwipeCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                disabled={answering}
              />
            ) : (
              <QuizCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                disabled={answering}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
