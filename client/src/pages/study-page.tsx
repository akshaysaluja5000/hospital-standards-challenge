import { useState, useEffect, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Play,
  AlertTriangle, ListChecks, FileText, CheckCircle2, RotateCcw,
  Trophy, RefreshCw, Timer, Clock, CalendarDays, X, HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { findLevelById } from "@shared/all-levels";
import type { StudyConcept } from "@shared/schema";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { FlashcardReview } from "@shared/schema";

// ── Types ────────────────────────────────────────────────────────────────────

type SRRating = "again" | "hard" | "good" | "easy";

const SR_CONFIG: Record<SRRating, {
  label: string;
  interval: string;
  icon: typeof Timer;
  btn: string;
  dot: string;
  badge: string;
  requeue: number | null; // null = done for session; number = slots ahead to reinsert
}> = {
  again: {
    label: "Again",
    interval: "< 2 min",
    icon: Timer,
    btn: "bg-red-500 hover:bg-red-600 text-white border-0",
    dot: "#f87171",
    badge: "bg-red-500/15 text-red-400 border-red-500/25",
    requeue: 2,
  },
  hard: {
    label: "Hard",
    interval: "< 10 min",
    icon: Clock,
    btn: "bg-orange-500 hover:bg-orange-600 text-white border-0",
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

// ── Category config ───────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<
  NonNullable<StudyConcept["category"]>,
  { label: string; bg: string; text: string; border: string }
> = {
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

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildInitialQueue(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

function insertAt<T>(arr: T[], idx: number, item: T): T[] {
  const next = [...arr];
  next.splice(idx, 0, item);
  return next;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function StudyPage() {
  const [, params] = useRoute("/study/:levelId");
  const [, setLocation] = useLocation();
  const levelId = params?.levelId;
  const level = useMemo(() => findLevelById(levelId ?? ""), [levelId]);

  const [view, setView] = useState<"summary" | "concepts">("concepts");
  const [flipped, setFlipped] = useState(false);
  const [sessionDone, setSessionDone] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(
    () => localStorage.getItem("ar_flashcard_tip_dismissed") !== "1"
  );

  // Spaced-repetition queue state
  const [queue, setQueue] = useState<number[]>(() =>
    buildInitialQueue(level?.studyMaterial.length ?? 0)
  );
  const [queueIndex, setQueueIndex] = useState(0);
  // Last rating per original card index
  const [ratings, setRatings] = useState<Record<number, SRRating>>({});

  // ── Persistence: fetch existing review schedule for this level ─────────────
  const { data: existingReviews } = useQuery<FlashcardReview[]>({
    queryKey: ["/api/flashcards", levelId],
    queryFn: async () => {
      const res = await fetch(`/api/flashcards/${levelId}`);
      if (!res.ok) return [];
      return res.json();
    },
    enabled: !!levelId,
    staleTime: 30_000,
  });

  // Build a map of cardIndex → stored review for quick lookup
  const reviewMap = useMemo<Record<number, FlashcardReview>>(() => {
    if (!existingReviews) return {};
    const m: Record<number, FlashcardReview> = {};
    for (const r of existingReviews) m[r.cardIndex] = r;
    return m;
  }, [existingReviews]);

  const reviewMutation = useMutation({
    mutationFn: async ({ cardIndex, rating }: { cardIndex: number; rating: SRRating }) => {
      const res = await apiRequest("POST", `/api/flashcards/${levelId}/review`, { cardIndex, rating });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/flashcards/due/count"] });
    },
  });

  useEffect(() => {
    setFlipped(false);
  }, [queueIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (view !== "concepts" || sessionDone) return;
      if (e.key === " ") { e.preventDefault(); setFlipped((v) => !v); }
      if (e.key === "ArrowRight" && flipped) rate("good");
      if (e.key === "ArrowLeft" && !flipped && queueIndex > 0) goBack();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [view, flipped, queueIndex, sessionDone]);

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Level not found</p>
      </div>
    );
  }

  const concepts = level.studyMaterial;
  const currentCardIndex = queue[queueIndex];
  const currentConcept = concepts[currentCardIndex];
  const isFirst = queueIndex === 0;
  const summary = level.chapterSummary;
  const catKey = currentConcept?.category;
  const cat = catKey ? CATEGORY_CONFIG[catKey] : null;

  // How many unique original cards remain in queue from queueIndex onward
  const remainingUnique = new Set(queue.slice(queueIndex)).size;

  const rate = (rating: SRRating) => {
    const cfg = SR_CONFIG[rating];

    // Store rating for this card
    setRatings((prev) => ({ ...prev, [currentCardIndex]: rating }));

    // Persist to backend (fire-and-forget — session UX is not blocked)
    if (levelId) {
      reviewMutation.mutate({ cardIndex: currentCardIndex, rating });
    }

    const nextQueueIndex = queueIndex + 1;

    if (cfg.requeue !== null) {
      // Re-insert the card into the queue ahead
      const insertPos = Math.min(nextQueueIndex + cfg.requeue, queue.length);
      const newQueue = insertAt(queue, insertPos, currentCardIndex);
      setQueue(newQueue);
      if (nextQueueIndex >= newQueue.length) {
        setSessionDone(true);
      } else {
        setQueueIndex(nextQueueIndex);
      }
    } else {
      // Good / Easy — just advance
      if (nextQueueIndex >= queue.length) {
        setSessionDone(true);
      } else {
        setQueueIndex(nextQueueIndex);
      }
    }
  };

  const goBack = () => {
    if (!isFirst) {
      setQueueIndex((i) => i - 1);
      setFlipped(false);
    }
  };

  const restart = () => {
    setQueue(buildInitialQueue(concepts.length));
    setQueueIndex(0);
    setFlipped(false);
    setRatings({});
    setSessionDone(false);
  };

  // Summary counts — use last rating per card
  const ratingCounts: Record<SRRating, number> = { again: 0, hard: 0, good: 0, easy: 0 };
  Object.values(ratings).forEach((r) => { ratingCounts[r]++; });
  const totalRated = Object.values(ratingCounts).reduce((a, b) => a + b, 0);

  // For progress dots (original card count), derive color from last rating
  const dotColor = (i: number): string => {
    const r = ratings[i];
    if (r) return SR_CONFIG[r].dot;
    if (i === currentCardIndex && !sessionDone) return level.color;
    return level.color;
  };

  const dotOpacity = (i: number): string => {
    const r = ratings[i];
    if (r) return "opacity-90";
    const posInQueue = queue.indexOf(i, queueIndex);
    if (posInQueue === queueIndex) return "opacity-90";
    if (posInQueue > queueIndex) return "opacity-20";
    return "opacity-35";
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Sticky Header ── */}
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-lg mx-auto px-4 py-3 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back">
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center gap-2">
                <BookOpen size={16} style={{ color: level.color }} />
                <h2 className="font-bold text-base" style={{ color: level.color }} data-testid="text-study-title">
                  {level.name}
                </h2>
              </div>
            </div>
            <Button variant="default" size="sm" onClick={() => setLocation(`/play/${level.id}`)} data-testid="button-start-quiz">
              <Play size={14} className="mr-1" /> Quiz
            </Button>
          </div>

          {summary && (
            <div className="flex gap-2">
              <button
                onClick={() => setView("summary")}
                className={`flex-1 text-xs font-bold uppercase tracking-wide py-1.5 rounded-md border transition-all ${
                  view === "summary" ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground border-border"
                }`}
                data-testid="button-view-summary"
              >
                <FileText size={12} className="inline mr-1" /> Chapter Overview
              </button>
              <button
                onClick={() => setView("concepts")}
                className={`flex-1 text-xs font-bold uppercase tracking-wide py-1.5 rounded-md border transition-all ${
                  view === "concepts" ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground border-border"
                }`}
                data-testid="button-view-concepts"
              >
                <BookOpen size={12} className="inline mr-1" /> Flashcards
              </button>
            </div>
          )}

          {/* Progress dots — one per original card */}
          {view === "concepts" && !sessionDone && (
            <div className="flex gap-1">
              {concepts.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1.5 rounded-full transition-all ${dotOpacity(i)}`}
                  style={{ backgroundColor: dotColor(i) }}
                  data-testid={`dot-concept-${i}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Summary View ── */}
      {view === "summary" && summary && (
        <div className="flex-1 flex flex-col items-center p-4">
          <div className="w-full max-w-lg space-y-4">
            <Card className="rounded-2xl border-2 p-6 shadow-lg" style={{ borderColor: `${level.color}30` }}>
              <h3 className="text-xl font-black mb-3" data-testid="text-chapter-title">{summary.chapterTitle}</h3>
              <p className="text-base text-foreground/80 leading-relaxed" data-testid="text-chapter-summary">
                {summary.plainLanguageSummary}
              </p>
              {summary.cmsTags && summary.cmsTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border" data-testid="container-chapter-cms-tags">
                  {summary.cmsTags.map((tag, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border" data-testid={`text-chapter-cms-tag-${i}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>

            {summary.commonRiskPoints && summary.commonRiskPoints.length > 0 && (
              <div className="rounded-2xl p-6 shadow-lg border-2 border-red-300 bg-red-50">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle size={22} className="text-red-600 flex-shrink-0" />
                  <h4 className="text-base font-black uppercase tracking-wide text-red-700">Where Teams Get Cited</h4>
                  <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full text-red-700 bg-red-100 border border-red-300" data-testid="badge-risk-count">
                    {summary.commonRiskPoints.length} high-risk failures
                  </span>
                </div>
                <ul className="space-y-3" data-testid="list-risks">
                  {summary.commonRiskPoints.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-red-900">
                      <AlertTriangle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span data-testid={`text-risk-${i}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {summary.keyOperationalExpectations && summary.keyOperationalExpectations.length > 0 && (
              <div className="rounded-2xl p-6 shadow-md border-2 border-primary/30 bg-primary/5">
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks size={20} className="text-primary" />
                  <h4 className="text-base font-black uppercase tracking-wide text-primary">What Surveyors Expect</h4>
                </div>
                <ul className="space-y-2" data-testid="list-expectations">
                  {summary.keyOperationalExpectations.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/80 leading-relaxed">
                      <span className="text-primary mt-0.5 font-bold">•</span>
                      <span data-testid={`text-expectation-${i}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <Button size="lg" className="flex-1" onClick={() => setLocation(`/play/${level.id}`)} data-testid="button-start-quiz-from-summary">
                <Play size={18} className="mr-1" /> Quiz Me on These Risks
              </Button>
              {concepts.length > 0 && (
                <Button variant="outline" size="lg" className="flex-1" onClick={() => setView("concepts")} data-testid="button-go-to-concepts">
                  <BookOpen size={18} className="mr-1" /> Flashcards
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Concepts View: Active Cards ── */}
      {view === "concepts" && !sessionDone && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 gap-5">

          {/* How it works panel */}
          {howItWorksOpen ? (
            <div className="w-full max-w-lg rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle size={15} className="text-primary flex-shrink-0" />
                  <p className="text-xs font-black uppercase tracking-wide text-primary">How flashcards work</p>
                </div>
                <button
                  onClick={() => { setHowItWorksOpen(false); localStorage.setItem("ar_flashcard_tip_dismissed", "1"); }}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  data-testid="button-dismiss-tip"
                >
                  <X size={14} />
                </button>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed mb-3">
                Tap a card to flip it and reveal the answer. After flipping, rate how well you remembered it:
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl border border-red-500/30 bg-red-500/8 p-2.5 text-center">
                  <p className="font-black text-red-400">Again</p>
                  <p className="text-muted-foreground mt-0.5 leading-tight">Forgot it — shows again right away</p>
                </div>
                <div className="rounded-xl border border-orange-500/30 bg-orange-500/8 p-2.5 text-center">
                  <p className="font-black text-orange-400">Hard</p>
                  <p className="text-muted-foreground mt-0.5 leading-tight">Struggled — comes back in ~15 min</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/8 p-2.5 text-center">
                  <p className="font-black text-emerald-400">Good</p>
                  <p className="text-muted-foreground mt-0.5 leading-tight">Got it — scheduled for tomorrow</p>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2.5 leading-relaxed">
                Cards you find hard come back sooner. Cards you know well are spaced further out. This is how long-term memory is built.
              </p>
            </div>
          ) : (
            <button
              onClick={() => setHowItWorksOpen(true)}
              className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-show-tip"
            >
              <HelpCircle size={12} />
              How does rating work?
            </button>
          )}

          {/* Counter + queue info */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Card <span className="font-black" style={{ color: level.color }}>{queueIndex + 1}</span>
              {queue.length > concepts.length
                ? <span className="text-muted-foreground/60"> · {remainingUnique} left</span>
                : <span className="text-muted-foreground/60"> of {concepts.length}</span>
              }
            </span>
            {ratingCounts.good + ratingCounts.easy > 0 && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                ✓ {ratingCounts.good + ratingCounts.easy} done
              </span>
            )}
            {ratingCounts.again + ratingCounts.hard > 0 && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/25">
                ↺ {ratingCounts.again + ratingCounts.hard} queued
              </span>
            )}
          </div>

          {/* Flip card */}
          <div className="w-full max-w-lg" data-testid={`card-concept-${currentCardIndex}`}>
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
                    style={{ borderColor: `${level.color}30`, minHeight: "320px" }}
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
                      {ratings[currentCardIndex] ? (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${SR_CONFIG[ratings[currentCardIndex]].badge}`}>
                          This session: {SR_CONFIG[ratings[currentCardIndex]].label}
                        </span>
                      ) : reviewMap[currentCardIndex] ? (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${SR_CONFIG[reviewMap[currentCardIndex].lastRating as SRRating]?.badge ?? "bg-muted text-muted-foreground border-border"}`}>
                          Last: {reviewMap[currentCardIndex].lastRating}
                        </span>
                      ) : null}
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
                    style={{ borderColor: `${level.color}50` }}
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
                      <span className="text-[10px] text-muted-foreground font-semibold">
                        {currentCardIndex + 1} of {concepts.length}
                      </span>
                    </div>

                    {/* Answer — keyPoint is the direct answer shown first and prominently */}
                    <div
                      className="rounded-xl p-5 border"
                      style={{ backgroundColor: `${level.color}12`, borderColor: `${level.color}30` }}
                    >
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: level.color }}>
                        Answer
                      </p>
                      <p className="text-lg font-bold leading-snug" data-testid="text-concept-keypoint">
                        {currentConcept.keyPoint}
                      </p>
                    </div>

                    {/* Explanation — content is supplementary context below the answer */}
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

                    {/* ── 4-Button Spaced Repetition Row ── */}
                    <div className="flex flex-col gap-2 pt-1">
                      <p className="text-[10px] text-center text-muted-foreground/50 font-semibold uppercase tracking-widest">
                        How well did you know this?
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {(["again", "hard", "good"] as SRRating[]).map((r) => {
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

          {/* Nav row */}
          <div className="flex items-center gap-3 w-full max-w-lg">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              disabled={isFirst}
              onClick={goBack}
              data-testid="button-prev-concept"
            >
              <ChevronLeft size={16} className="mr-1" /> Prev
            </Button>
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
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={() => {
                const next = queueIndex + 1;
                if (next >= queue.length) setSessionDone(true);
                else setQueueIndex(next);
              }}
              data-testid="button-skip-concept"
            >
              Skip <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>

          {/* Keyboard hint */}
          <p className="text-[11px] text-muted-foreground/40 text-center hidden sm:block">
            Space = flip &nbsp;·&nbsp; → = Good &nbsp;·&nbsp; ← = Back
          </p>
        </div>
      )}

      {/* ── Session Complete Screen ── */}
      {view === "concepts" && sessionDone && (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-lg space-y-5"
            >
              {/* Trophy */}
              <div className="flex flex-col items-center gap-3 py-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: `${level.color}20`, border: `2px solid ${level.color}40` }}>
                  <Trophy size={30} style={{ color: level.color }} />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-black" data-testid="text-session-complete">Session Complete</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    You reviewed {totalRated} card{totalRated !== 1 ? "s" : ""} this session
                  </p>
                </div>
              </div>

              {/* 4-bucket summary */}
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

              {/* Next-session nudge */}
              <Card className="rounded-2xl border-2 p-5" style={{ borderColor: `${level.color}25` }}>
                <p className="text-sm text-foreground/75 leading-relaxed text-center">
                  {ratingCounts.again + ratingCounts.hard === 0
                    ? "Excellent session — you rated every card Good or Easy. Ready to prove it on the quiz?"
                    : ratingCounts.good + ratingCounts.easy === 0
                    ? "Keep reviewing — run through the deck again until more cards feel Good or Easy."
                    : `${ratingCounts.good + ratingCounts.easy} card${ratingCounts.good + ratingCounts.easy !== 1 ? "s" : ""} feeling solid. ${ratingCounts.again + ratingCounts.hard} still need more review.`}
                </p>
              </Card>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => setLocation(`/play/${level.id}`)}
                  data-testid="button-start-quiz-done"
                >
                  <Play size={18} className="mr-2" /> Take the Quiz
                </Button>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={restart}
                    data-testid="button-restart-cards"
                  >
                    <RefreshCw size={16} className="mr-2" /> Run Again
                  </Button>
                  {(ratingCounts.again > 0 || ratingCounts.hard > 0) && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-orange-500/40 text-orange-400 hover:bg-orange-500/10"
                      onClick={() => {
                        // Restart with only again+hard rated cards
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
                      <RotateCcw size={16} className="mr-2" /> Review Weak
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
