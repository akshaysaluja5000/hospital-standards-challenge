import { useState, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BookOpen, ChevronDown, ChevronRight, Search,
  AlertTriangle, Play, List, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiHandbookSearch } from "@/components/ai-handbook-search";
import { handbook } from "@shared/handbook";
import { levels } from "@shared/questions";
import type { HandbookChapter, HandbookSection } from "@shared/schema";

function SectionCard({ section, levelColor, index }: { section: HandbookSection; levelColor: string; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="rounded-xl border-2 border-card-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        className="w-full text-left p-4 flex items-center gap-3 hover:bg-accent/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
        data-testid={`button-section-${index}`}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-base font-bold flex-shrink-0"
          style={{ backgroundColor: levelColor }}
        >
          {index + 1}
        </div>
        <h3 className="font-bold text-base flex-1">{section.heading}</h3>
        <ChevronDown
          size={20}
          className={`text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 flex flex-col gap-4">
              <p className="text-base text-foreground/75 leading-relaxed" data-testid={`text-section-content-${index}`}>
                {section.content}
              </p>

              {section.criticalValues && section.criticalValues.length > 0 && (
                <div className="rounded-xl border-2 overflow-hidden shadow-sm" style={{ borderColor: `${levelColor}30` }}>
                  <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: `${levelColor}10` }}>
                    <AlertTriangle size={16} style={{ color: levelColor }} />
                    <span className="text-sm font-bold uppercase tracking-wide" style={{ color: levelColor }}>
                      Critical Values
                    </span>
                  </div>
                  <div className="divide-y divide-border bg-card">
                    {section.criticalValues.map((cv, i) => (
                      <div key={i} className="px-4 py-3 flex gap-4 text-base">
                        <span className="font-bold text-foreground whitespace-nowrap min-w-[120px]">{cv.label}</span>
                        <span className="text-foreground/70">{cv.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.thinkAboutIt && (
                <div className="rounded-xl p-4 flex gap-3 items-start border" style={{ backgroundColor: `${levelColor}08`, borderColor: `${levelColor}20` }}>
                  <Brain size={18} className="flex-shrink-0 mt-0.5" style={{ color: levelColor }} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide mb-1.5" style={{ color: levelColor }}>
                      Think About It
                    </p>
                    <p className="text-base text-foreground/70 italic leading-relaxed">
                      {section.thinkAboutIt}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ChapterView({ chapter, onBack }: { chapter: HandbookChapter; onBack: () => void }) {
  const [, setLocation] = useLocation();
  const level = levels.find((l) => l.id === chapter.levelId);
  const color = level?.color || "hsl(152, 82%, 39%)";
  const [showQuickRef, setShowQuickRef] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back-handbook">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <BookOpen size={18} style={{ color }} />
              <h2 className="font-bold text-base" style={{ color }} data-testid="text-chapter-title">
                {chapter.title}
              </h2>
            </div>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={() => setLocation(`/play/${chapter.levelId}`)}
            data-testid="button-chapter-quiz"
          >
            <Play size={14} className="mr-1" />
            Quiz
          </Button>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-5">
        <div className="rounded-xl p-5 border-2 shadow-sm" style={{ borderColor: `${color}30`, backgroundColor: `${color}08` }}>
          <p className="text-base leading-relaxed text-foreground/80" data-testid="text-chapter-overview">
            {chapter.overview}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant={showQuickRef ? "outline" : "default"}
            size="sm"
            className="flex-1"
            onClick={() => setShowQuickRef(false)}
            data-testid="button-show-sections"
          >
            <BookOpen size={14} className="mr-1" />
            Full Guide
          </Button>
          <Button
            variant={showQuickRef ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={() => setShowQuickRef(true)}
            data-testid="button-show-quickref"
          >
            <List size={14} className="mr-1" />
            Quick Reference
          </Button>
        </div>

        {showQuickRef ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl border border-card-border bg-card overflow-hidden"
          >
            <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: `${color}10` }}>
              <List size={18} style={{ color }} />
              <h3 className="font-bold text-base">Quick Reference — {chapter.title}</h3>
            </div>
            <div className="divide-y divide-border">
              {chapter.quickReference.map((item, i) => (
                <div key={i} className="px-4 py-3.5 flex gap-4 text-base" data-testid={`quickref-item-${i}`}>
                  <span className="font-bold text-foreground min-w-[140px] flex-shrink-0">{item.fact}</span>
                  <span className="text-foreground/70">{item.detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-3">
            {chapter.sections.map((section, i) => (
              <SectionCard key={i} section={section} levelColor={color} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function HandbookPage() {
  const [, params] = useRoute("/handbook/:levelId");
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const selectedLevelId = params?.levelId;
  const selectedChapter = selectedLevelId
    ? handbook.find((ch) => ch.levelId === selectedLevelId)
    : null;

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return handbook;
    const q = searchQuery.toLowerCase();
    return handbook.filter((ch) => {
      if (ch.title.toLowerCase().includes(q)) return true;
      if (ch.overview.toLowerCase().includes(q)) return true;
      return ch.sections.some(
        (s) =>
          s.heading.toLowerCase().includes(q) ||
          s.content.toLowerCase().includes(q) ||
          s.criticalValues?.some((cv) => cv.value.toLowerCase().includes(q) || cv.label.toLowerCase().includes(q)) ||
          s.thinkAboutIt?.toLowerCase().includes(q)
      ) || ch.quickReference.some(
        (qr) => qr.fact.toLowerCase().includes(q) || qr.detail.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  if (selectedChapter) {
    return <ChapterView chapter={selectedChapter} onBack={() => setLocation("/handbook")} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back-home">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex items-center gap-2 flex-1">
            <BookOpen size={20} className="text-primary" />
            <h1 className="font-black text-lg">Compliance Handbook</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-5">
        <div className="rounded-xl bg-primary/5 border border-primary/20 p-5">
          <h2 className="font-bold text-base mb-1.5">Your Complete Reference Guide</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Everything you need to know for Joint Commission compliance — organized by topic with detailed explanations,
            critical values, and real-world scenarios. Use this alongside the quizzes to build deep understanding.
          </p>
        </div>

        <AiHandbookSearch />

        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search topics, rules, values..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="input-handbook-search"
          />
        </div>

        <div className="flex flex-col gap-3">
          {filteredChapters.map((chapter) => {
            const level = levels.find((l) => l.id === chapter.levelId);
            const color = level?.color || "hsl(152, 82%, 39%)";

            return (
              <motion.button
                key={chapter.levelId}
                className="w-full text-left rounded-xl border-2 border-card-border bg-card p-4 flex items-center gap-4 hover:bg-accent/30 transition-all shadow-sm hover:shadow-md"
                onClick={() => setLocation(`/handbook/${chapter.levelId}`)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-testid={`button-chapter-${chapter.levelId}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <BookOpen size={22} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base" style={{ color }}>
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                    {chapter.sections.length} sections · {chapter.quickReference.length} quick reference items
                  </p>
                </div>
                <ChevronRight size={18} className="text-muted-foreground flex-shrink-0" />
              </motion.button>
            );
          })}

          {filteredChapters.length === 0 && (
            <div className="text-center py-12">
              <Search size={32} className="mx-auto text-muted-foreground/30 mb-3" />
              <p className="text-sm text-muted-foreground">No chapters match your search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
