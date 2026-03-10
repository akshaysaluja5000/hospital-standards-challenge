import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Trophy,
  Home,
  Loader2,
  Microscope,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Sparkles,
  RotateCcw,
  X,
  Shuffle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import type { DeepDiveLevel, DeepDiveGameState } from "@shared/schema";
import type { QuizSession } from "@shared/schema";

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

function invalidateDashboardData() {
  queryClient.invalidateQueries({ queryKey: ["/api/game/streak"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/progress"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/activities"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/today"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/leaderboard"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/deep-dive/session"] });
}

interface SavedDeepDiveState {
  questionOrder: string[];
  gameState: DeepDiveGameState;
  selectedIndex: number | null;
  showExplanation: boolean;
}

export default function DeepDivePage() {
  const [, params] = useRoute("/deep-dive/:levelId");
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const levelId = params?.levelId;

  const { data: level, isLoading: levelLoading } = useQuery<DeepDiveLevel>({
    queryKey: ["/api/game/deep-dive", levelId],
    enabled: !!levelId,
  });

  const { data: savedSession, isFetching: sessionLoading } = useQuery<QuizSession | null>({
    queryKey: ["/api/game/deep-dive/session", levelId],
    enabled: !!levelId,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
  });

  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [questionOrder, setQuestionOrder] = useState<string[]>([]);
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
  const [showQuitDialog, setShowQuitDialog] = useState(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prevLevelIdRef = useRef(levelId);
  useEffect(() => {
    if (levelId !== prevLevelIdRef.current) {
      prevLevelIdRef.current = levelId;
      setSessionLoaded(false);
      setQuestionOrder([]);
      setGameState({
        currentQuestion: 0, totalQuestions: 0, phase: "base",
        baseCorrect: 0, followUpCorrect: 0, baseXpEarned: 0, expertXpEarned: 0, answers: [],
      });
      setSelectedIndex(null);
      setShowExplanation(false);
      setIsComplete(false);
      setShowQuitDialog(false);
    }
  }, [levelId]);

  useEffect(() => {
    if (!level) return;
    if (sessionLoading) return;
    if (sessionLoaded) return;

    const initFresh = () => {
      const shuffled = shuffleWithSeed(level.questions, `${user?.id}-${levelId}-${Date.now()}`);
      setQuestionOrder(shuffled.map((q: any) => q.id));
      setGameState({
        currentQuestion: 0, totalQuestions: level.questions.length,
        phase: "base", baseCorrect: 0, followUpCorrect: 0,
        baseXpEarned: 0, expertXpEarned: 0, answers: [],
      });
    };

    if (savedSession && savedSession.questionOrder && savedSession.questionOrder.length > 0) {
      try {
        const parsed: SavedDeepDiveState = JSON.parse(savedSession.answers || "{}");
        if (parsed.gameState && parsed.questionOrder && Array.isArray(parsed.questionOrder)) {
          setQuestionOrder(parsed.questionOrder);
          setGameState({
            ...parsed.gameState,
            totalQuestions: level.questions.length,
          });
          setSelectedIndex(parsed.selectedIndex ?? null);
          setShowExplanation(parsed.showExplanation ?? false);
        } else {
          initFresh();
        }
      } catch {
        initFresh();
      }
    } else {
      initFresh();
    }
    setSessionLoaded(true);
  }, [savedSession, sessionLoading, level, sessionLoaded, user?.id, levelId]);

  const questions = useMemo(() => {
    if (!level || questionOrder.length === 0) return [];
    return questionOrder
      .map((id) => level.questions.find((q) => q.id === id))
      .filter(Boolean) as typeof level.questions;
  }, [level, questionOrder]);

  const currentQ = questions[gameState.currentQuestion];

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      await apiRequest("POST", `/api/game/deep-dive/session/${levelId}`, data);
    },
    retry: 2,
  });

  const deleteSessionMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", `/api/game/deep-dive/session/${levelId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/game/deep-dive/session", levelId] });
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/game/deep-dive/submit", data);
      return res.json();
    },
    onSuccess: () => {
      deleteSessionMutation.mutate();
      invalidateDashboardData();
    },
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 5000),
  });

  const saveSession = useCallback(
    (gs: DeepDiveGameState, order: string[], selIdx: number | null, showExp: boolean) => {
      if (!levelId) return;
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        const payload: SavedDeepDiveState = {
          questionOrder: order,
          gameState: gs,
          selectedIndex: selIdx,
          showExplanation: showExp,
        };
        saveMutation.mutate({
          questionOrder: order,
          answers: JSON.stringify(payload),
          currentQuestion: gs.currentQuestion,
          correctAnswers: gs.baseCorrect + gs.followUpCorrect,
          xpEarned: gs.baseXpEarned + gs.expertXpEarned,
        });
      }, 300);
    },
    [levelId, saveMutation]
  );

  const currentAnswer = useMemo(() => {
    if (!currentQ) return null;
    return gameState.answers.find((a) => a.questionId === currentQ.id) || null;
  }, [currentQ, gameState.answers]);

  const isReviewingAnswered = useMemo(() => {
    if (!currentAnswer) return false;
    if (gameState.phase === "base") return currentAnswer.baseSelectedIndex !== undefined && currentAnswer.baseSelectedIndex !== null;
    if (gameState.phase === "followUp") return currentAnswer.followUpSelectedIndex !== null;
    return false;
  }, [currentAnswer, gameState.phase]);

  const handleSelect = useCallback(
    (index: number) => {
      if (selectedIndex !== null || !currentQ || isReviewingAnswered) return;
      setSelectedIndex(index);
      setShowExplanation(true);

      if (gameState.phase === "base") {
        const isCorrect = index === currentQ.baseCorrectIndex;
        const newState = {
          ...gameState,
          baseCorrect: gameState.baseCorrect + (isCorrect ? 1 : 0),
          baseXpEarned: gameState.baseXpEarned + (isCorrect ? currentQ.baseXp : 0),
          answers: [
            ...gameState.answers,
            {
              questionId: currentQ.id,
              baseCorrect: isCorrect,
              baseSelectedIndex: index,
              followUpCorrect: null,
              followUpSelectedIndex: null,
            },
          ],
        };
        setGameState(newState);
        saveSession(newState, questionOrder, index, true);
      } else if (gameState.phase === "followUp") {
        const isCorrect = index === currentQ.followUp.correctIndex;
        const updatedAnswers = [...gameState.answers];
        const answerEntry = updatedAnswers.find((a) => a.questionId === currentQ.id);
        if (answerEntry) {
          answerEntry.followUpCorrect = isCorrect;
          answerEntry.followUpSelectedIndex = index;
        }
        const newState = {
          ...gameState,
          followUpCorrect: gameState.followUpCorrect + (isCorrect ? 1 : 0),
          expertXpEarned: gameState.expertXpEarned + (isCorrect ? currentQ.followUp.expertXp : 0),
          answers: updatedAnswers,
        };
        setGameState(newState);
        saveSession(newState, questionOrder, index, true);
      }
    },
    [selectedIndex, currentQ, gameState, isReviewingAnswered, saveSession, questionOrder]
  );

  const handleNext = useCallback(() => {
    if (!currentQ || !level) return;

    if (gameState.phase === "base") {
      const answer = gameState.answers.find((a) => a.questionId === currentQ.id);
      const isCorrect = answer?.baseCorrect ?? false;

      if (isCorrect) {
        if (answer && answer.followUpSelectedIndex !== null) {
          const nextQ = gameState.currentQuestion + 1;
          if (nextQ >= questions.length) {
            finishGame();
          } else {
            const newState = { ...gameState, currentQuestion: nextQ, phase: "base" as const };
            setGameState(newState);
            const nextAnswer = gameState.answers.find((a) => a.questionId === questions[nextQ]?.id);
            if (nextAnswer) {
              setSelectedIndex(nextAnswer.baseSelectedIndex);
              setShowExplanation(true);
            } else {
              setSelectedIndex(null);
              setShowExplanation(false);
            }
            saveSession(newState, questionOrder, null, false);
          }
        } else {
          const newState = { ...gameState, phase: "followUp" as const };
          setGameState(newState);
          setSelectedIndex(null);
          setShowExplanation(false);
          saveSession(newState, questionOrder, null, false);
        }
      } else {
        const nextQ = gameState.currentQuestion + 1;
        if (nextQ >= questions.length) {
          finishGame();
        } else {
          const newState = { ...gameState, currentQuestion: nextQ, phase: "base" as const };
          setGameState(newState);
          const nextAnswer = gameState.answers.find((a) => a.questionId === questions[nextQ]?.id);
          if (nextAnswer) {
            setSelectedIndex(nextAnswer.baseSelectedIndex);
            setShowExplanation(true);
          } else {
            setSelectedIndex(null);
            setShowExplanation(false);
          }
          saveSession(newState, questionOrder, null, false);
        }
      }
    } else if (gameState.phase === "followUp") {
      const nextQ = gameState.currentQuestion + 1;
      if (nextQ >= questions.length) {
        finishGame();
      } else {
        const newState = { ...gameState, currentQuestion: nextQ, phase: "base" as const };
        setGameState(newState);
        const nextAnswer = gameState.answers.find((a) => a.questionId === questions[nextQ]?.id);
        if (nextAnswer) {
          setSelectedIndex(nextAnswer.baseSelectedIndex);
          setShowExplanation(true);
        } else {
          setSelectedIndex(null);
          setShowExplanation(false);
        }
        saveSession(newState, questionOrder, null, false);
      }
    }
  }, [currentQ, level, gameState, questions, saveSession, questionOrder]);

  const handlePrevious = useCallback(() => {
    if (gameState.phase === "followUp") {
      const newState = { ...gameState, phase: "base" as const };
      setGameState(newState);
      const answer = gameState.answers.find((a) => a.questionId === currentQ?.id);
      if (answer) {
        setSelectedIndex(answer.baseSelectedIndex);
        setShowExplanation(true);
      }
      saveSession(newState, questionOrder, answer?.baseSelectedIndex ?? null, true);
    } else if (gameState.currentQuestion > 0) {
      const prevIdx = gameState.currentQuestion - 1;
      const prevQ = questions[prevIdx];
      const prevAnswer = gameState.answers.find((a) => a.questionId === prevQ?.id);

      if (prevAnswer && prevAnswer.baseCorrect && prevAnswer.followUpSelectedIndex !== null) {
        const newState = { ...gameState, currentQuestion: prevIdx, phase: "followUp" as const };
        setGameState(newState);
        setSelectedIndex(prevAnswer.followUpSelectedIndex);
        setShowExplanation(true);
        saveSession(newState, questionOrder, prevAnswer.followUpSelectedIndex, true);
      } else if (prevAnswer) {
        const newState = { ...gameState, currentQuestion: prevIdx, phase: "base" as const };
        setGameState(newState);
        setSelectedIndex(prevAnswer.baseSelectedIndex);
        setShowExplanation(true);
        saveSession(newState, questionOrder, prevAnswer.baseSelectedIndex, true);
      } else {
        const newState = { ...gameState, currentQuestion: prevIdx, phase: "base" as const };
        setGameState(newState);
        setSelectedIndex(null);
        setShowExplanation(false);
        saveSession(newState, questionOrder, null, false);
      }
    }
  }, [gameState, currentQ, questions, saveSession, questionOrder]);

  const finishGame = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    setIsComplete(true);
    if (level) {
      const followUpAttempted = gameState.answers.filter(
        (a) => a.followUpCorrect !== null
      ).length;
      submitMutation.mutate({
        levelId: level.id,
        baseCorrect: gameState.baseCorrect,
        followUpCorrect: gameState.followUpCorrect,
        totalQuestions: questions.length,
        followUpAttempted,
        baseXpEarned: gameState.baseXpEarned,
        expertXpEarned: gameState.expertXpEarned,
      });
    }
  }, [level, gameState, questions, submitMutation]);

  const handleQuitConfirm = useCallback(async (saveProgress: boolean) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    if (saveProgress && levelId) {
      try {
        const payload: SavedDeepDiveState = {
          questionOrder,
          gameState,
          selectedIndex,
          showExplanation,
        };
        await apiRequest("POST", `/api/game/deep-dive/session/${levelId}`, {
          questionOrder,
          answers: JSON.stringify(payload),
          currentQuestion: gameState.currentQuestion,
          correctAnswers: gameState.baseCorrect + gameState.followUpCorrect,
          xpEarned: gameState.baseXpEarned + gameState.expertXpEarned,
        });
      } catch (e) {}
    }
    if (!saveProgress && levelId) {
      deleteSessionMutation.mutate();
    }
    invalidateDashboardData();
    setShowQuitDialog(false);
    setLocation("/deep-dive");
  }, [levelId, deleteSessionMutation, setLocation, questionOrder, gameState, selectedIndex, showExplanation]);

  const handleStartOver = useCallback(() => {
    if (!level) return;
    deleteSessionMutation.mutate();
    const shuffled = shuffleWithSeed(level.questions, `${user?.id}-${levelId}-${Date.now()}`);
    const newOrder = shuffled.map((q: any) => q.id);
    setQuestionOrder(newOrder);
    setGameState({
      currentQuestion: 0, totalQuestions: level.questions.length,
      phase: "base", baseCorrect: 0, followUpCorrect: 0,
      baseXpEarned: 0, expertXpEarned: 0, answers: [],
    });
    setSelectedIndex(null);
    setShowExplanation(false);
    setShowQuitDialog(false);
    setIsComplete(false);
  }, [level, user?.id, levelId, deleteSessionMutation]);

  if (!level || levelLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-secondary" />
      </div>
    );
  }

  if (!sessionLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={32} className="animate-spin text-secondary" />
          <p className="text-muted-foreground font-medium">Loading your progress...</p>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const totalXp = gameState.baseXpEarned + gameState.expertXpEarned;
    const totalQuestions2 = questions.length;
    const basePercent = Math.round((gameState.baseCorrect / totalQuestions2) * 100);
    const followUpAttempted = gameState.answers.filter((a) => a.followUpCorrect !== null).length;
    const followUpPercent = followUpAttempted > 0
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
              <div className="text-xs text-muted-foreground font-medium mt-1">Base Accuracy</div>
            </div>
            <div className="rounded-xl bg-secondary/5 p-4">
              <div className="text-2xl font-black text-secondary">{followUpPercent}%</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Expert Accuracy</div>
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
              <span className="font-black text-lg text-secondary">{gameState.expertXpEarned}</span>
              <span className="text-xs text-muted-foreground">Expert XP</span>
            </div>
          </div>

          <div className="rounded-xl bg-muted/50 p-3 mb-4">
            <div className="text-sm font-bold">
              Total XP Earned: <span className="text-primary">{totalXp}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/5 border border-secondary/10 mb-6" data-testid="text-dd-shuffle-note">
            <Shuffle size={14} className="text-secondary flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              Play again for a <span className="font-semibold text-foreground">fresh question order</span> each time!
            </p>
          </div>

          {submitMutation.isPending && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Loader2 size={16} className="animate-spin" />
              <span>Saving your results...</span>
            </div>
          )}

          {submitMutation.isError && (
            <div className="w-full rounded-xl bg-destructive/10 border border-destructive/20 p-3 text-center mb-4">
              <p className="text-sm text-destructive font-medium">Failed to save results.</p>
              <Button variant="outline" size="sm" className="mt-2" onClick={() => submitMutation.mutate({
                levelId: level.id, baseCorrect: gameState.baseCorrect, followUpCorrect: gameState.followUpCorrect,
                totalQuestions: questions.length, followUpAttempted,
                baseXpEarned: gameState.baseXpEarned, expertXpEarned: gameState.expertXpEarned,
              })} data-testid="button-dd-retry-submit">Retry Save</Button>
            </div>
          )}

          <div className="flex gap-3">
            <Button className="flex-1" variant="outline" onClick={() => setLocation("/")} data-testid="button-deep-dive-home">
              <Home size={16} className="mr-2" />Dashboard
            </Button>
            <Button className="flex-1" variant="outline" onClick={handleStartOver} data-testid="button-deep-dive-replay">
              <RotateCcw size={16} className="mr-2" />Play Again
            </Button>
            <Button className="flex-1" onClick={() => setLocation("/deep-dive")} data-testid="button-deep-dive-more">
              <Microscope size={16} className="mr-2" />More Topics
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentQ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-secondary" />
      </div>
    );
  }

  const isBasePhase = gameState.phase === "base";
  const displayQuestion = isBasePhase ? currentQ.baseQuestion : currentQ.followUp.question;
  const displayOptions = isBasePhase ? currentQ.baseOptions : currentQ.followUp.options;
  const displayCorrectIdx = isBasePhase ? currentQ.baseCorrectIndex : currentQ.followUp.correctIndex;
  const displayExplanation = isBasePhase ? currentQ.baseExplanation : currentQ.followUp.explanation;

  const reviewSelected = isReviewingAnswered
    ? (isBasePhase ? currentAnswer?.baseSelectedIndex : currentAnswer?.followUpSelectedIndex) ?? null
    : null;
  const activeSelected = isReviewingAnswered ? reviewSelected : selectedIndex;
  const activeShowExplanation = isReviewingAnswered ? true : showExplanation;

  const hasAnsweredCurrent = isReviewingAnswered || selectedIndex !== null;

  const progressPercent =
    ((gameState.currentQuestion + (isBasePhase ? 0 : 0.5)) / questions.length) * 100;

  const canGoNext = hasAnsweredCurrent;
  const isAtEnd = gameState.phase === "followUp"
    ? gameState.currentQuestion + 1 >= questions.length
    : isBasePhase && currentAnswer && !currentAnswer.baseCorrect && gameState.currentQuestion + 1 >= questions.length;

  const canGoPrev = gameState.currentQuestion > 0 || gameState.phase === "followUp";

  let nextButtonLabel = "Next Question →";
  if (isBasePhase && currentAnswer?.baseCorrect && (currentAnswer.followUpSelectedIndex === null || currentAnswer.followUpSelectedIndex === undefined)) {
    nextButtonLabel = "Go Deeper →";
  } else if (isAtEnd) {
    nextButtonLabel = "Finish";
  }

  return (
    <div className="min-h-screen flex flex-col">
      {showQuitDialog && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <motion.div
            className="w-full max-w-sm rounded-2xl bg-card border border-card-border p-6 flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="font-bold text-lg text-center" data-testid="text-dd-quit-title">Leave this Deep Dive?</h3>
            <p className="text-sm text-muted-foreground text-center">
              You're on question {gameState.currentQuestion + 1} of {questions.length}. What would you like to do?
            </p>
            <div className="flex flex-col gap-2">
              <Button onClick={() => handleQuitConfirm(true)} data-testid="button-dd-quit-save">
                <Home size={16} className="mr-2" />Save & Exit
              </Button>
              <Button variant="outline" onClick={handleStartOver} data-testid="button-dd-quit-restart">
                <RotateCcw size={16} className="mr-2" />Start Over (New Question Order)
              </Button>
              <Button variant="outline" onClick={() => handleQuitConfirm(false)}
                className="text-destructive hover:text-destructive" data-testid="button-dd-quit-discard">
                <X size={16} className="mr-2" />Quit Without Saving
              </Button>
              <Button variant="ghost" onClick={() => setShowQuitDialog(false)} data-testid="button-dd-quit-cancel">
                Continue Playing
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <Button variant="ghost" size="icon" onClick={() => setShowQuitDialog(true)} data-testid="button-dd-quit">
              <X size={20} />
            </Button>
            <div className="flex-1 text-center">
              <h2 className="font-bold text-sm text-secondary" data-testid="text-dd-level-title">
                {level.name}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Zap size={14} className="text-chart-4" fill="currentColor" />
                <span className="text-sm font-bold" data-testid="text-base-xp">{gameState.baseXpEarned}</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles size={14} className="text-secondary" />
                <span className="text-sm font-bold text-secondary" data-testid="text-expert-xp">{gameState.expertXpEarned}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Progress value={progressPercent} className="flex-1 h-2.5" />
            <span className="text-xs text-muted-foreground font-bold whitespace-nowrap">
              {gameState.currentQuestion + 1}/{questions.length}
            </span>
          </div>
          {!isBasePhase && (
            <motion.div
              className="flex items-center justify-center gap-1"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ChevronDown size={12} className="text-secondary" />
              <span className="text-xs font-bold text-secondary uppercase tracking-wide">Deep Dive Follow-Up</span>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${gameState.currentQuestion}-${gameState.phase}`}
            className={`w-full max-w-lg game-card p-6 ${!isBasePhase ? "deep-dive-glow" : ""}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
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

            <h3 className="text-xl font-black leading-relaxed mb-6" data-testid="text-deep-dive-question">
              {displayQuestion}
            </h3>

            <div className="flex flex-col gap-3">
              {displayOptions?.map((option, idx) => {
                const isSelected = activeSelected === idx;
                const isCorrect = idx === displayCorrectIdx;
                const showResult = activeShowExplanation;

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
                    disabled={isReviewingAnswered || selectedIndex !== null}
                    whileTap={!isReviewingAnswered && selectedIndex === null ? { scale: 0.98 } : undefined}
                    data-testid={`button-deep-dive-option-${idx}`}
                  >
                    <div className="flex items-start gap-3">
                      {showResult && isCorrect && (
                        <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      {!showResult && (
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-base font-medium leading-relaxed">{option}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {activeShowExplanation && (
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div
                    className={`p-4 rounded-xl border ${
                      activeSelected === displayCorrectIdx
                        ? "bg-primary/5 border-primary/20"
                        : "bg-destructive/5 border-destructive/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {activeSelected === displayCorrectIdx ? (
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
                          <span className="text-sm font-bold text-destructive">Not quite</span>
                        </>
                      )}
                    </div>
                    <p className="text-base text-foreground/70 leading-relaxed">{displayExplanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-card border-t border-card-border sticky bottom-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handlePrevious}
            disabled={!canGoPrev}
            data-testid="button-dd-previous"
          >
            <ArrowLeft size={16} className="mr-2" />Previous
          </Button>
          <Button
            className="flex-1"
            onClick={handleNext}
            disabled={!canGoNext}
            data-testid="button-dd-next"
          >
            {nextButtonLabel}
            {!isAtEnd && nextButtonLabel !== "Go Deeper →" && <ArrowRight size={16} className="ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
