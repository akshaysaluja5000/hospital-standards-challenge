import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";

interface AiDebriefBoxProps {
  levelId: string;
  levelTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  missedQuestions: { question: string; correctAnswer: string }[];
}

export function AiDebriefBox({ levelId, levelTitle, totalQuestions, correctAnswers, missedQuestions }: AiDebriefBoxProps) {
  const [debrief, setDebrief] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiRequest("POST", "/api/ai-debrief", {
        levelId,
        levelTitle,
        totalQuestions,
        correctAnswers,
        missedQuestions,
      });
      const data = await res.json();
      setDebrief(data.debrief);
    } catch (e: any) {
      const msg = e?.message || "";
      if (msg.includes("429")) {
        setError("Rate limit reached. Please try again later.");
      } else {
        setError("Unable to generate debrief right now. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {!debrief && !loading && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleGenerate}
          className="gap-2 text-sm font-semibold w-full"
          data-testid="button-ai-debrief"
        >
          <ClipboardList size={16} />
          Generate Manager Micro‑Debrief
        </Button>
      )}

      {loading && (
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-3" data-testid="ai-debrief-loading">
          <Loader2 size={16} className="animate-spin" />
          Generating debrief...
        </div>
      )}

      <AnimatePresence>
        {debrief && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-left" data-testid="ai-debrief-response">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-bold text-primary">Manager Micro‑Debrief</span>
              </div>
              <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {debrief}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic" data-testid="text-debrief-disclaimer">
                Check your organization's policies; this is a learning aid, not clinical guidance.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="text-sm text-destructive mt-2 text-center" data-testid="ai-debrief-error">{error}</p>
      )}
    </div>
  );
}
