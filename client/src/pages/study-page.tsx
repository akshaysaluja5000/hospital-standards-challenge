import { useState, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Lightbulb, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { findLevelById } from "@shared/all-levels";

export default function StudyPage() {
  const [, params] = useRoute("/study/:levelId");
  const [, setLocation] = useLocation();
  const levelId = params?.levelId;

  const level = useMemo(() => findLevelById(levelId), [levelId]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        </div>
      </div>

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
    </div>
  );
}
