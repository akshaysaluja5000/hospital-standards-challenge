import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Trophy, Star, Zap, RotateCcw, Home, UserPlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SwipeCard } from "@/components/swipe-card";
import { QuizCard } from "@/components/quiz-card";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import { levels } from "@shared/questions";
import type { GameState, QuizSession } from "@shared/schema";

function shuffleWithSeed(arr: any[], seed: string) {
  const result = [...arr];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  for (let i = result.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash) + i;
    hash |= 0;
    const j = Math.abs(hash) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function PlayPage() {
  const [, params] = useRoute("/play/:levelId");
  const [, setLocation] = useLocation();
  const { user, isGuest, exitGuestMode } = useAuth();
  const levelId = params?.levelId;
  const level = useMemo(() => levels.find((l) => l.id === levelId), [levelId]);
  const [sessionLoaded, setSessionLoaded] = useState(isGuest);
  const [isComplete, setIsComplete] = useState(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [questionOrder, setQuestionOrder] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    xpEarned: 0,
    answers: [],
  });

  const { data: savedSession, isFetching: sessionLoading } = useQuery<QuizSession | null>({
    queryKey: ["/api/game/session", levelId],
    enabled: !isGuest && !!levelId,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
  });

  useEffect(() => {
    if (!level) return;

    if (isGuest) {
      const shuffled = shuffleWithSeed(level.questions, `guest-${level.id}-${Date.now()}`);
      setQuestionOrder(shuffled.map((q) => q.id));
      setGameState({ currentQuestion: 0, score: 0, correctAnswers: 0, totalQuestions: level.questions.length, xpEarned: 0, answers: [] });
      setSessionLoaded(true);
      return;
    }

    if (sessionLoading) return;
    if (sessionLoaded) return;

    if (savedSession && savedSession.questionOrder && savedSession.questionOrder.length > 0) {
      const savedAnswers: GameState["answers"] = JSON.parse(savedSession.answers || "[]");
      setQuestionOrder(savedSession.questionOrder);
      setGameState({
        currentQuestion: savedSession.currentQuestion,
        score: 0,
        correctAnswers: savedSession.correctAnswers,
        totalQuestions: level.questions.length,
        xpEarned: savedSession.xpEarned,
        answers: savedAnswers,
      });
    } else {
      const shuffled = shuffleWithSeed(level.questions, `${user?.id}-${level.id}-${Date.now()}`);
      setQuestionOrder(shuffled.map((q) => q.id));
      setGameState({ currentQuestion: 0, score: 0, correctAnswers: 0, totalQuestions: level.questions.length, xpEarned: 0, answers: [] });
    }
    setSessionLoaded(true);
  }, [savedSession, sessionLoading, level, isGuest, sessionLoaded, user?.id]);

  const questions = useMemo(() => {
    if (!level || questionOrder.length === 0) return [];
    return questionOrder.map((id) => level.questions.find((q) => q.id === id)).filter(Boolean) as typeof level.questions;
  }, [level, questionOrder]);

  const saveMutation = useMutation({
    mutationFn: async (data: { questionOrder: string[]; answers: any[]; currentQuestion: number; correctAnswers: number; xpEarned: number }) => {
      await apiRequest("POST", `/api/game/session/${levelId}`, data);
    },
  });

  const deleteSessionMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", `/api/game/session/${levelId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/game/session", levelId] });
    },
  });

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

  const saveSession = useCallback((state: GameState, order: string[]) => {
    if (isGuest || !levelId) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      saveMutation.mutate({
        questionOrder: order,
        answers: state.answers,
        currentQuestion: state.currentQuestion,
        correctAnswers: state.correctAnswers,
        xpEarned: state.xpEarned,
      });
    }, 300);
  }, [isGuest, levelId, saveMutation]);

  const currentQuestionAnswered = gameState.answers.find(
    (a) => a.questionId === questions[gameState.currentQuestion]?.id
  );
  const hasAnswered = !!currentQuestionAnswered;

  const handleAnswer = useCallback((selectedIndex: number) => {
    if (hasAnswered || !level) return;

    const currentQ = questions[gameState.currentQuestion];
    const isCorrect = selectedIndex === currentQ.correctIndex;
    const xpGained = isCorrect ? currentQ.xpReward : 0;

    const newState: GameState = {
      ...gameState,
      correctAnswers: gameState.correctAnswers + (isCorrect ? 1 : 0),
      xpEarned: gameState.xpEarned + xpGained,
      answers: [...gameState.answers, { questionId: currentQ.id, correct: isCorrect, selectedIndex }],
    };

    setGameState(newState);
    saveSession(newState, questionOrder);
  }, [hasAnswered, gameState, questions, level, saveSession, questionOrder]);

  const handleNext = useCallback(() => {
    if (!level) return;
    const isLastQuestion = gameState.currentQuestion >= questions.length - 1;

    if (isLastQuestion) {
      setIsComplete(true);
      if (!isGuest) {
        submitMutation.mutate({
          levelId: level.id,
          score: gameState.correctAnswers,
          totalQuestions: questions.length,
          xpEarned: gameState.xpEarned,
        });
        deleteSessionMutation.mutate();
      }
    } else {
      const newState = { ...gameState, currentQuestion: gameState.currentQuestion + 1 };
      setGameState(newState);
      saveSession(newState, questionOrder);
    }
  }, [gameState, questions, level, isGuest, submitMutation, deleteSessionMutation, saveSession, questionOrder]);

  const handlePrevious = useCallback(() => {
    if (gameState.currentQuestion > 0) {
      const newState = { ...gameState, currentQuestion: gameState.currentQuestion - 1 };
      setGameState(newState);
      saveSession(newState, questionOrder);
    }
  }, [gameState, saveSession, questionOrder]);

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Level not found</p>
      </div>
    );
  }

  if (!sessionLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading your progress...</p>
        </div>
      </div>
    );
  }

  const progressPercent = (gameState.answers.length / questions.length) * 100;
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

            {isGuest && (
              <div className="w-full rounded-xl bg-primary/5 border border-primary/20 p-3 flex items-center gap-3">
                <UserPlus size={18} className="text-primary flex-shrink-0" />
                <p className="text-xs text-muted-foreground flex-1">
                  This score won't be saved. Create an account to track your progress!
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="text-xs flex-shrink-0"
                  onClick={() => { exitGuestMode(); setLocation("/auth"); }}
                  data-testid="button-guest-signup-results"
                >
                  Sign Up
                </Button>
              </div>
            )}

            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  const shuffled = shuffleWithSeed(level.questions, `${user?.id || "guest"}-${level.id}-${Date.now()}`);
                  const newOrder = shuffled.map((q) => q.id);
                  setQuestionOrder(newOrder);
                  setGameState({
                    currentQuestion: 0, score: 0, correctAnswers: 0,
                    totalQuestions: questions.length, xpEarned: 0, answers: [],
                  });
                  setIsComplete(false);
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

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
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
            key={`${currentQuestion.id}-${gameState.currentQuestion}`}
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
                disabled={hasAnswered}
                isGuest={isGuest}
                previousAnswer={currentQuestionAnswered ? { selectedIndex: currentQuestionAnswered.selectedIndex, correct: currentQuestionAnswered.correct } : null}
              />
            ) : (
              <QuizCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                disabled={hasAnswered}
                isGuest={isGuest}
                previousAnswer={currentQuestionAnswered ? { selectedIndex: currentQuestionAnswered.selectedIndex, correct: currentQuestionAnswered.correct } : null}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-card border-t border-card-border sticky bottom-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handlePrevious}
            disabled={gameState.currentQuestion === 0}
            data-testid="button-previous"
          >
            <ArrowLeft size={16} className="mr-2" />
            Previous
          </Button>
          <Button
            className="flex-1"
            onClick={handleNext}
            disabled={!hasAnswered}
            data-testid="button-next"
          >
            {gameState.currentQuestion >= questions.length - 1 ? "Finish" : "Next"}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
