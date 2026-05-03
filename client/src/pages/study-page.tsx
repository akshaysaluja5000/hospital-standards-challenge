import { useState, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Lightbulb, Play, AlertTriangle, ListChecks, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { findLevelById } from "@shared/all-levels";

export default function StudyPage() {
  const [, params] = useRoute("/study/:levelId");
  const [, setLocation] = useLocation();
  const levelId = params?.levelId;

  const level = useMemo(() => findLevelById(levelId), [levelId]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState<"summary" | "concepts">(
    level?.chapterSummary ? "summary" : "concepts"
  );

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

  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-[58px] z-40 border-b border-white/10" style={{ background: "rgba(7,22,48,0.88)", backdropFilter: "blur(12px)" }}>
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
              <div className="flex items-center justify-center gap-2">
                <BookOpen size={16} style={{ color: level.color }} />
                <h2 className="font-bold text-base" style={{ color: level.color }} data-testid="text-study-title">
                  Study: {level.name}
                </h2>
              </div>
            </div>
            <Button
              variant="default"
              size="sm"
              onClick={() => setLocation(`/play/${level.id}`)}
              data-testid="button-start-quiz"
            >
              <Play size={14} className="mr-1" />
              Quiz
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
                <BookOpen size={12} className="inline mr-1" /> Study Cards
              </button>
            </div>
          )}
          {view === "concepts" && (
            <div className="flex gap-1.5">
              {concepts.map((_, i) => (
                <button
                  key={i}
                  className={`flex-1 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "opacity-100"
                      : i < currentIndex
                      ? "opacity-60"
                      : "opacity-20"
                  }`}
                  style={{ backgroundColor: level.color }}
                  onClick={() => setCurrentIndex(i)}
                  data-testid={`button-concept-dot-${i}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {view === "summary" && summary && (
        <div className="flex-1 flex flex-col items-center p-4">
          <div className="w-full max-w-lg space-y-4">
            <Card className="rounded-2xl border-2 p-6 shadow-lg" style={{ borderColor: `${level.color}30` }}>
              <h3 className="text-xl font-black mb-3" data-testid="text-chapter-title">
                {summary.chapterTitle}
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed" data-testid="text-chapter-summary">
                {summary.plainLanguageSummary}
              </p>
              {summary.cmsTags && summary.cmsTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border" data-testid="container-chapter-cms-tags">
                  {summary.cmsTags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
                      data-testid={`text-chapter-cms-tag-${i}`}
                    >
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
                  <h4 className="text-base font-black uppercase tracking-wide text-red-300">
                    Where Teams Get Cited
                  </h4>
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
                  <h4 className="text-base font-black uppercase tracking-wide" style={{ color: level.color }}>
                    What surveyors expect
                  </h4>
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
              <Button
                size="lg"
                className="flex-1"
                onClick={() => setLocation(`/play/${level.id}`)}
                data-testid="button-start-quiz-from-summary"
              >
                <Play size={18} className="mr-1" />
                Quiz Me on These Risks
              </Button>
              {concepts.length > 0 && (
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => setView("concepts")}
                  data-testid="button-go-to-concepts"
                >
                  <BookOpen size={18} className="mr-1" />
                  Study Cards
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {view === "concepts" && (
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg"
          >
            <Card className="rounded-2xl border-2 p-7 flex flex-col gap-5 shadow-lg" style={{ borderColor: `${level.color}30` }}>
              <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-wide">
                <span style={{ color: level.color }}>Concept {currentIndex + 1}</span>
                <span>of {concepts.length}</span>
              </div>

              <h3 className="text-2xl font-black" data-testid="text-concept-title">
                {currentConcept.title}
              </h3>

              <p className="text-base text-foreground/75 leading-relaxed" data-testid="text-concept-content">
                {currentConcept.content}
              </p>

              <div
                className="rounded-xl p-4 flex gap-3 items-start"
                style={{ backgroundColor: `${level.color}12` }}
              >
                <Lightbulb size={22} className="flex-shrink-0 mt-0.5" style={{ color: level.color }} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: level.color }}>
                    Key Takeaway
                  </p>
                  <p className="text-base font-semibold" data-testid="text-concept-keypoint">
                    {currentConcept.keyPoint}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4 mt-8 w-full max-w-lg">
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            disabled={isFirst}
            onClick={() => setCurrentIndex((i) => i - 1)}
            data-testid="button-prev-concept"
          >
            <ChevronLeft size={18} className="mr-1" />
            Previous
          </Button>
          {isLast ? (
            <Button
              size="lg"
              className="flex-1"
              onClick={() => setLocation(`/play/${level.id}`)}
              data-testid="button-start-quiz-bottom"
            >
              <Play size={18} className="mr-1" />
              Start Quiz
            </Button>
          ) : (
            <Button
              size="lg"
              className="flex-1"
              onClick={() => setCurrentIndex((i) => i + 1)}
              data-testid="button-next-concept"
            >
              Next
              <ChevronRight size={18} className="ml-1" />
            </Button>
          )}
        </div>
      </div>
      )}
    </div>
  );
}
