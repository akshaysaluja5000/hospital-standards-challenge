import { useState, useEffect, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Brain, CheckCircle2, Timer, Clock, CalendarDays,
  Trophy, RefreshCw, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { findLevelById } from "@shared/all-levels";
import type { FlashcardReview } from "@shared/schema";

type SRRating = "again" | "hard" | "good" | "easy";

const SR_CONFIG: Record<SRRating, {
  label: string;
  interval: string;
  icon: typeof Timer;
  btn: string;
  dot: string;
  badge: string;
  requeue: number | null;
}> = {
  again: {
    label: "Again",
    interval: "< 2 min",
    icon: Timer,
    btn: "border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500/70",
    dot: "#f87171",
    badge: "bg-red-500/15 text-red-400 border-red-500/25",
    requeue: 2,
  },
  hard: {
    label: "Hard",
    interval: "< 15 min",
    icon: Clock,
    btn: "border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/70",
    dot: "#fb923c",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/25",
    requeue: 8,
  },
  good: {
    label: "Good",
    interval: "1 day",
    icon: CheckCircle2,
    btn: "bg-emerald-600 hover:bg-emerald-500 text-white border-0",
    dot: "#34d399",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    requeue: null,
  },
  easy: {
    label: "Easy",
    interval: "3 days",
    icon: CalendarDays,
    btn: "bg-sky-600 hover:bg-sky-500 text-white border-0",
    dot: "#38bdf8",
    badge: "bg-sky-500/15 text-sky-400 border-sky-500/25",
    requeue: null,
  },
};

const CATEGORY_CONFIG: Record<string, { label: string; bg: string; text: string; border: string }> = {
  rule:       { label: "Rule",           bg: "bg-blue-500/15",    text: "text-blue-400",    border: "border-blue-500/25" },
  definition: { label: "Definition",     bg: "bg-indigo-500/15",  text: "text-indigo-400",  border: "border-indigo-500/25" },
  scenario:   { label: "Scenario",       bg: "bg-amber-500/15",   text: "text-amber-400",   border: "border-amber-500/25" },
  mistake:    { label: "Common Mistake", bg: "bg-red-500/15",     text: "text-red-400",     border: "border-red-500/25" },
  number:     { label: "Key Number",     bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25" },
  tip:        { label: "Surveyor Tip",   bg: "bg-violet-500/15",  text: "text-violet-400",  border: "border-violet-500/25" },
};

const FLIP_VARIANTS = {
  enterFront: { opacity: 0, rotateY: -12, scale: 0.97 },
  center:     { opacity: 1, rotateY: 0,   scale: 1 },
  exitFront:  { opacity: 0, rotateY: 12,  scale: 0.97 },
};

function insertAt<T>(arr: T[], idx: number, item: T): T[] {
  const next = [...arr];
  next.splice(idx, 0, item);
  return next;
}

interface ReviewCard {
  levelId: string;
  cardIndex: number;
  reviewId: number;
}

export default function FlashcardReviewPage() {
  const [, setLocation] = useLocation();

  const { data: dueReviews, isLoading } = useQuery<FlashcardReview[]>({
    queryKey: ["/api/flashcards/due"],
    queryFn: async () => {
      const res = await fetch("/api/flashcards/due");
      if (!res.ok) return [];
      return res.json();
    },
    staleTime: 0,
  });

  const reviewCards = useMemo<ReviewCard[]>(() => {
    if (!dueReviews) return [];
    return dueReviews.map((r) => ({
      levelId: r.levelId,
      cardIndex: r.cardIndex,
      reviewId: r.id,
    }));
  }, [dueReviews]);

  const [queue, setQueue] = useState<number[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionDone, setSessionDone] = useState(false);
  const [ratings, setRatings] = useState<Record<number, SRRating>>({});

  useEffect(() => {
    if (reviewCards.length > 0 && queue.length === 0) {
      setQueue(Array.from({ length: reviewCards.length }, (_, i) => i));
    }
  }, [reviewCards]);

  useEffect(() => {
    setFlipped(false);
  }, [queueIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (sessionDone) return;
      if (e.key === " ") { e.preventDefault(); setFlipped((v) => !v); }
      if (e.key === "ArrowRight" && flipped) rate("good");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [flipped, queueIndex, sessionDone]);

  const reviewMutation = useMutation({
    mutationFn: async ({ levelId, cardIndex, rating }: { levelId: string; cardIndex: number; rating: SRRating }) => {
      const res = await apiRequest("POST", `/api/flashcards/${levelId}/review`, { cardIndex, rating });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/flashcards/due/count"] });
      queryClient.invalidateQueries({ queryKey: ["/api/flashcards/due"] });
    },
  });

  const rate = (rating: SRRating) => {
    const cfg = SR_CONFIG[rating];
    setRatings((prev) => ({ ...prev, [queue[queueIndex]]: rating }));

    const card = reviewCards[queue[queueIndex]];
    if (card) {
      reviewMutation.mutate({ levelId: card.levelId, cardIndex: card.cardIndex, rating });
    }

    const nextQueueIndex = queueIndex + 1;
    if (cfg.requeue !== null) {
      const insertPos = Math.min(nextQueueIndex + cfg.requeue, queue.length);
      const newQueue = insertAt(queue, insertPos, queue[queueIndex]);
      setQueue(newQueue);
      if (nextQueueIndex >= newQueue.length) setSessionDone(true);
      else setQueueIndex(nextQueueIndex);
    } else {
      if (nextQueueIndex >= queue.length) setSessionDone(true);
      else setQueueIndex(nextQueueIndex);
    }
  };

  const ratingCounts: Record<SRRating, number> = { again: 0, hard: 0, good: 0, easy: 0 };
  Object.values(ratings).forEach((r) => { ratingCounts[r]++; });
  const totalRated = Object.values(ratingCounts).reduce((a, b) => a + b, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-violet-500 border-t-transparent" />
      </div>
    );
  }

  if (reviewCards.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-violet-500/15 border-2 border-violet-500/30 mb-4">
          <Brain size={28} className="text-violet-400" />
        </div>
        <h2 className="text-2xl font-black mb-2">All caught up!</h2>
        <p className="text-muted-foreground text-sm text-center max-w-xs mb-6">
          No flashcards are due for review right now. Keep studying to build up your review queue.
        </p>
        <Button onClick={() => setLocation("/")} data-testid="button-back-to-dashboard">
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const currentSlot = queue[queueIndex];
  const currentCard = reviewCards[currentSlot];
  const currentLevel = currentCard ? findLevelById(currentCard.levelId) : undefined;
  const currentConcept = currentLevel?.studyMaterial[currentCard?.cardIndex ?? 0];
  const catKey = currentConcept?.category;
  const cat = catKey ? CATEGORY_CONFIG[catKey] : null;
  const levelColor = currentLevel?.color ?? "#7c3aed";
  const uniqueRemaining = new Set(queue.slice(queueIndex)).size;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div
        className="sticky top-[58px] z-40 border-b border-border"
        className="bg-background/95 backdrop-blur-md"
      >
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2">
              <Brain size={16} className="text-violet-400" />
              <h2 className="font-bold text-base text-violet-300" data-testid="text-review-title">
                Due for Review
              </h2>
            </div>
          </div>
          <div className="w-10" />
        </div>

        {/* Progress bar */}
        {!sessionDone && (
          <div className="max-w-lg mx-auto px-4 pb-3">
            <div className="flex gap-1">
              {reviewCards.map((_, i) => {
                const r = ratings[i];
                const isActive = queue[queueIndex] === i;
                return (
                  <div
                    key={i}
                    className="flex-1 h-1.5 rounded-full transition-all"
                    style={{
                      backgroundColor: r ? SR_CONFIG[r].dot : isActive ? levelColor : "#334155",
                      opacity: r ? 0.9 : isActive ? 0.9 : 0.25,
                    }}
                    data-testid={`dot-review-${i}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Active cards */}
      {!sessionDone && currentConcept && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 gap-5">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Card <span className="font-black" style={{ color: levelColor }}>{queueIndex + 1}</span>
              {queue.length > reviewCards.length
                ? <span className="text-muted-foreground/60"> · {uniqueRemaining} left</span>
                : <span className="text-muted-foreground/60"> of {reviewCards.length}</span>
              }
            </span>
            {currentLevel && (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                style={{ color: levelColor, borderColor: `${levelColor}40`, background: `${levelColor}12` }}
              >
                {currentLevel.name}
              </span>
            )}
            {ratingCounts.good + ratingCounts.easy > 0 && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                ✓ {ratingCounts.good + ratingCounts.easy} done
              </span>
            )}
          </div>

          <div className="w-full max-w-lg" data-testid={`card-review-${currentSlot}`}>
            <AnimatePresence mode="wait" initial={false}>
              {!flipped ? (
                <motion.div
                  key={`front-${queueIndex}`}
                  initial={FLIP_VARIANTS.enterFront}
                  animate={FLIP_VARIANTS.center}
                  exit={FLIP_VARIANTS.exitFront}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Card
                    className="rounded-2xl border-2 p-7 flex flex-col gap-5 shadow-lg cursor-pointer select-none active:scale-[0.99] transition-transform"
                    style={{ borderColor: `${levelColor}30`, minHeight: "300px" }}
                    onClick={() => setFlipped(true)}
                    data-testid="card-front"
                  >
                    <div className="flex items-center justify-between">
                      {cat ? (
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${cat.bg} ${cat.text} ${cat.border}`}>
                          {cat.label}
                        </span>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-muted text-muted-foreground border-border">
                          Concept
                        </span>
                      )}
                    </div>
                    <div className="flex-1 flex items-center">
                      <h3 className="text-2xl font-black leading-tight" data-testid="text-concept-title">
                        {currentConcept.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-2 border-t border-border/40">
                      <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">
                        Tap card to reveal answer
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key={`back-${queueIndex}`}
                  initial={FLIP_VARIANTS.enterFront}
                  animate={FLIP_VARIANTS.center}
                  exit={FLIP_VARIANTS.exitFront}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Card
                    className="rounded-2xl border-2 p-7 flex flex-col gap-5 shadow-lg"
                    style={{ borderColor: `${levelColor}50` }}
                    data-testid="card-back"
                  >
                    <div className="flex items-center justify-between">
                      {cat ? (
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${cat.bg} ${cat.text} ${cat.border}`}>
                          {cat.label}
                        </span>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-muted text-muted-foreground border-border">
                          Concept
                        </span>
                      )}
                    </div>

                    {/* Answer — keyPoint is the direct answer */}
                    <div
                      className="rounded-xl p-5 border"
                      style={{ backgroundColor: `${levelColor}12`, borderColor: `${levelColor}30` }}
                    >
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: levelColor }}>
                        Answer
                      </p>
                      <p className="text-lg font-bold leading-snug" data-testid="text-concept-keypoint">
                        {currentConcept.keyPoint}
                      </p>
                    </div>

                    {/* Explanation */}
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        Explanation
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed" data-testid="text-concept-content">
                        {currentConcept.content}
                      </p>
                    </div>

                    {currentConcept.extraInfo && (
                      <div className="rounded-xl p-4 bg-muted/40 border border-border/50">
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-muted-foreground">
                          Also Note
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-concept-extrainfo">
                          {currentConcept.extraInfo}
                        </p>
                      </div>
                    )}

                    {/* 4-Button SR Row */}
                    <div className="flex flex-col gap-2 pt-1">
                      <p className="text-[10px] text-center text-muted-foreground/50 font-semibold uppercase tracking-widest">
                        How well did you know this?
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {(["again", "hard", "good", "easy"] as SRRating[]).map((r) => {
                          const cfg = SR_CONFIG[r];
                          const Icon = cfg.icon;
                          return (
                            <button
                              key={r}
                              onClick={() => rate(r)}
                              className={`flex flex-col items-center gap-1 px-1 py-2.5 rounded-xl border font-bold text-[11px] transition-all active:scale-95 ${cfg.btn}`}
                              data-testid={`button-rate-${r}`}
                            >
                              <Icon size={14} />
                              <span>{cfg.label}</span>
                              <span className="text-[9px] font-semibold opacity-70">{cfg.interval}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 w-full max-w-lg">
            <div className="flex-1 text-center">
              {!flipped && (
                <button
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                  onClick={() => setFlipped(true)}
                  data-testid="button-flip-card"
                >
                  Flip
                </button>
              )}
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground/40 text-center hidden sm:block">
            Space = flip &nbsp;·&nbsp; → = Good
          </p>
        </div>
      )}

      {/* Session Complete */}
      {sessionDone && (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-lg space-y-5"
            >
              <div className="flex flex-col items-center gap-3 py-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-violet-500/15 border-2 border-violet-500/30">
                  <Trophy size={30} className="text-violet-400" />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-black" data-testid="text-session-complete">Review Complete!</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    You reviewed {totalRated} card{totalRated !== 1 ? "s" : ""} from your due queue
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {(["easy", "good", "hard", "again"] as SRRating[]).map((r) => {
                  const cfg = SR_CONFIG[r];
                  const Icon = cfg.icon;
                  const count = ratingCounts[r];
                  return (
                    <Card
                      key={r}
                      className={`rounded-2xl p-4 border-2 text-center ${count === 0 ? "opacity-40" : ""}`}
                      style={{
                        borderColor: count > 0 ? `${cfg.dot}40` : undefined,
                        background: count > 0 ? `${cfg.dot}10` : undefined,
                      }}
                      data-testid={`stat-rating-${r}`}
                    >
                      <Icon size={18} className="mx-auto mb-1" style={{ color: count > 0 ? cfg.dot : undefined }} />
                      <div className="text-3xl font-black" style={{ color: count > 0 ? cfg.dot : undefined }}>{count}</div>
                      <div className="text-xs font-bold uppercase tracking-wide mt-0.5 opacity-80" style={{ color: count > 0 ? cfg.dot : undefined }}>
                        {cfg.label}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{cfg.interval}</div>
                    </Card>
                  );
                })}
              </div>

              <Card className="rounded-2xl border-2 p-5 border-violet-500/20">
                <p className="text-sm text-foreground/75 leading-relaxed text-center">
                  {ratingCounts.again + ratingCounts.hard === 0
                    ? "Excellent! All cards rated Good or Easy — they'll return in 1–3 days."
                    : `${ratingCounts.good + ratingCounts.easy} card${ratingCounts.good + ratingCounts.easy !== 1 ? "s" : ""} scheduled for tomorrow. ${ratingCounts.again + ratingCounts.hard} card${ratingCounts.again + ratingCounts.hard !== 1 ? "s" : ""} coming back sooner.`}
                </p>
              </Card>

              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => setLocation("/")}
                  data-testid="button-back-to-dashboard"
                >
                  Back to Dashboard <ChevronRight size={16} className="ml-1" />
                </Button>
                {(ratingCounts.again > 0 || ratingCounts.hard > 0) && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      const needsWork = Object.entries(ratings)
                        .filter(([, r]) => r === "again" || r === "hard")
                        .map(([i]) => Number(i));
                      setQueue(needsWork);
                      setQueueIndex(0);
                      setFlipped(false);
                      setRatings({});
                      setSessionDone(false);
                    }}
                    data-testid="button-review-weak"
                  >
                    <RefreshCw size={16} className="mr-2" /> Review Weak Cards
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
