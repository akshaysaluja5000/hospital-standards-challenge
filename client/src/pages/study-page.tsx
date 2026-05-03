import { useState, useEffect, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Lightbulb, Play,
  AlertTriangle, ListChecks, FileText, CheckCircle2, RotateCcw,
  Trophy, RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { findLevelById } from "@shared/all-levels";
import type { StudyConcept } from "@shared/schema";

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

export default function StudyPage() {
  const [, params] = useRoute("/study/:levelId");
  const [, setLocation] = useLocation();
  const levelId = params?.levelId;
  const level = useMemo(() => findLevelById(levelId ?? ""), [levelId]);

  const [view, setView] = useState<"summary" | "concepts">(
    level?.chapterSummary ? "summary" : "concepts"
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownSet, setKnownSet] = useState<Set<number>>(new Set());
  const [reviewSet, setReviewSet] = useState<Set<number>>(new Set());
  const [sessionDone, setSessionDone] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [currentIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (view !== "concepts" || sessionDone) return;
      if (e.key === " ") { e.preventDefault(); setFlipped((v) => !v); }
      if (e.key === "ArrowRight" && flipped) advance("known");
      if (e.key === "ArrowLeft" && !flipped && currentIndex > 0) goBack();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [view, flipped, currentIndex, sessionDone]);

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Level not found</p>
      </div>
    );
  }

  const concepts = level.studyMaterial;
  const currentConcept = concepts[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === concepts.length - 1;
  const summary = level.chapterSummary;
  const catKey = currentConcept?.category;
  const cat = catKey ? CATEGORY_CONFIG[catKey] : null;

  const advance = (result: "known" | "review") => {
    if (result === "known") {
      setKnownSet((prev) => new Set(Array.from(prev).concat(currentIndex)));
    } else {
      setReviewSet((prev) => new Set(Array.from(prev).concat(currentIndex)));
    }
    if (isLast) {
      setSessionDone(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const goBack = () => {
    if (!isFirst) setCurrentIndex((i) => i - 1);
  };

  const restart = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setKnownSet(new Set());
    setReviewSet(new Set());
    setSessionDone(false);
  };

  const knownCount = knownSet.size;
  const reviewCount = reviewSet.size;
  const totalAnswered = knownSet.size + reviewSet.size;

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Sticky Header ── */}
      <div
        className="sticky top-[58px] z-40 border-b border-white/10"
        style={{ background: "rgba(7,22,48,0.92)", backdropFilter: "blur(12px)" }}
      >
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

          {/* Progress dots */}
          {view === "concepts" && !sessionDone && (
            <div className="flex gap-1">
              {concepts.map((_, i) => (
                <button
                  key={i}
                  className={`flex-1 h-1.5 rounded-full transition-all ${
                    knownSet.has(i)
                      ? "opacity-100"
                      : reviewSet.has(i)
                      ? "opacity-60"
                      : i === currentIndex
                      ? "opacity-90"
                      : i < currentIndex
                      ? "opacity-40"
                      : "opacity-15"
                  }`}
                  style={{
                    backgroundColor: knownSet.has(i)
                      ? level.color
                      : reviewSet.has(i)
                      ? "rgb(251 146 60)"
                      : level.color,
                  }}
                  onClick={() => { setCurrentIndex(i); setSessionDone(false); }}
                  data-testid={`button-concept-dot-${i}`}
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
              <div className="rounded-2xl p-6 shadow-lg" style={{ background: "linear-gradient(135deg, #3d0a0a 0%, #2a0808 100%)", border: "1px solid rgba(220,38,38,0.35)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle size={22} className="text-red-400 flex-shrink-0" />
                  <h4 className="text-base font-black uppercase tracking-wide text-red-300">Where Teams Get Cited</h4>
                  <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full text-red-200" style={{ background: "rgba(220,38,38,0.3)" }} data-testid="badge-risk-count">
                    {summary.commonRiskPoints.length} high-risk failures
                  </span>
                </div>
                <ul className="space-y-3" data-testid="list-risks">
                  {summary.commonRiskPoints.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgba(252,165,165,0.9)" }}>
                      <AlertTriangle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <span data-testid={`text-risk-${i}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {summary.keyOperationalExpectations && summary.keyOperationalExpectations.length > 0 && (
              <Card className="rounded-2xl border-2 p-6 shadow-md" style={{ borderColor: `${level.color}20` }}>
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks size={20} style={{ color: level.color }} />
                  <h4 className="text-base font-black uppercase tracking-wide" style={{ color: level.color }}>What Surveyors Expect</h4>
                </div>
                <ul className="space-y-2" data-testid="list-expectations">
                  {summary.keyOperationalExpectations.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/80 leading-relaxed">
                      <span className="text-muted-foreground mt-0.5">•</span>
                      <span data-testid={`text-expectation-${i}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
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
          {/* Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Card <span className="font-black" style={{ color: level.color }}>{currentIndex + 1}</span> of {concepts.length}
            </span>
            {knownSet.size > 0 && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                ✓ {knownSet.size} known
              </span>
            )}
          </div>

          {/* Flip card */}
          <div className="w-full max-w-lg" data-testid={`card-concept-${currentIndex}`}>
            <AnimatePresence mode="wait" initial={false}>
              {!flipped ? (
                <motion.div
                  key={`front-${currentIndex}`}
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
                    {/* Top row: category + "flip to reveal" */}
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
                        {currentIndex + 1} / {concepts.length}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex-1 flex items-center">
                      <h3 className="text-2xl font-black leading-tight" data-testid="text-concept-title">
                        {currentConcept.title}
                      </h3>
                    </div>

                    {/* Tap hint */}
                    <div className="flex items-center justify-center gap-2 pt-2 border-t border-border/40">
                      <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">
                        Tap card to reveal answer
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key={`back-${currentIndex}`}
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
                    {/* Top row */}
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
                        {currentIndex + 1} / {concepts.length}
                      </span>
                    </div>

                    {/* Answer */}
                    <p className="text-base text-foreground/85 leading-relaxed" data-testid="text-concept-content">
                      {currentConcept.content}
                    </p>

                    {/* Key takeaway */}
                    <div
                      className="rounded-xl p-4 flex gap-3 items-start"
                      style={{ backgroundColor: `${level.color}12` }}
                    >
                      <Lightbulb size={18} className="flex-shrink-0 mt-0.5" style={{ color: level.color }} />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: level.color }}>
                          Key Rule
                        </p>
                        <p className="text-sm font-semibold leading-snug" data-testid="text-concept-keypoint">
                          {currentConcept.keyPoint}
                        </p>
                      </div>
                    </div>

                    {/* Got it / Review buttons */}
                    <div className="flex gap-3 pt-1">
                      <Button
                        variant="outline"
                        className="flex-1 border-orange-500/40 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/60"
                        onClick={() => advance("review")}
                        data-testid="button-review-again"
                      >
                        <RotateCcw size={14} className="mr-1.5" />
                        Review Again
                      </Button>
                      <Button
                        className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white border-0"
                        onClick={() => advance("known")}
                        data-testid="button-got-it"
                      >
                        <CheckCircle2 size={14} className="mr-1.5" />
                        Got It
                      </Button>
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
                if (isLast) setSessionDone(true);
                else setCurrentIndex((i) => i + 1);
              }}
              data-testid="button-skip-concept"
            >
              Skip <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>

          {/* Keyboard hint */}
          <p className="text-[11px] text-muted-foreground/40 text-center hidden sm:block">
            Space = flip &nbsp;·&nbsp; → = Got It &nbsp;·&nbsp; ← = Back
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
                  <h2 className="text-2xl font-black">Session Complete</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    You worked through all {concepts.length} flashcards
                  </p>
                </div>
              </div>

              {/* Score cards */}
              <div className="grid grid-cols-2 gap-3">
                <Card className="rounded-2xl p-5 border-2 border-emerald-500/25 bg-emerald-500/8 text-center" data-testid="stat-known">
                  <div className="text-3xl font-black text-emerald-400">{knownCount}</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-400/80 mt-1">Knew It</div>
                </Card>
                <Card className="rounded-2xl p-5 border-2 border-orange-500/25 bg-orange-500/8 text-center" data-testid="stat-review">
                  <div className="text-3xl font-black text-orange-400">{reviewCount}</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-orange-400/80 mt-1">To Review</div>
                </Card>
              </div>

              {/* Message */}
              <Card className="rounded-2xl border-2 p-5" style={{ borderColor: `${level.color}25` }}>
                <p className="text-sm text-foreground/75 leading-relaxed text-center">
                  {knownCount === concepts.length
                    ? "Perfect session! You nailed every card. Ready to prove it on the quiz?"
                    : reviewCount > 0
                    ? `${reviewCount} card${reviewCount > 1 ? "s" : ""} to revisit. Run through the deck again or jump into the quiz when ready.`
                    : "Great work going through the full deck. Take the quiz to lock in what you've learned."}
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
                  {reviewCount > 0 && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-orange-500/40 text-orange-400 hover:bg-orange-500/10"
                      onClick={() => {
                        const firstReview = Array.from(reviewSet)[0];
                        setCurrentIndex(firstReview ?? 0);
                        setFlipped(false);
                        setSessionDone(false);
                      }}
                      data-testid="button-review-marked"
                    >
                      <RotateCcw size={16} className="mr-2" /> Review Marked
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
