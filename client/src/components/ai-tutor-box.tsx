import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import type { Question } from "@shared/schema";

interface AiTutorBoxProps {
  question: Question;
  selectedIndex: number;
}

export function AiTutorBox({ question, selectedIndex }: AiTutorBoxProps) {
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAskTutor = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiRequest("POST", "/api/ai-tutor", {
        question: question.question,
        userAnswer: question.options[selectedIndex],
        correctAnswer: question.options[question.correctIndex],
        explanation: question.explanation,
      });
      const data = await res.json();
      setAiExplanation(data.aiExplanation);
    } catch (e: any) {
      const msg = e?.message || "";
      if (msg.includes("429")) {
        setError("You've reached the AI Tutor limit. Please try again later.");
      } else {
        setError("AI Tutor is temporarily unavailable. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      {!aiExplanation && !loading && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleAskTutor}
          className="gap-2 text-sm font-semibold"
          data-testid="button-ask-ai-tutor"
        >
          <Sparkles size={16} />
          Ask AI Tutor
        </Button>
      )}

      {loading && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground py-2" data-testid="ai-tutor-loading">
          <Loader2 size={16} className="animate-spin" />
          AI Tutor is thinking...
        </div>
      )}

      <AnimatePresence>
        {aiExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4" data-testid="ai-tutor-response">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-bold text-primary">AI Tutor</span>
              </div>
              <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {aiExplanation}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic" data-testid="text-ai-disclaimer">
                Check your organization's policies; this is a learning aid, not clinical guidance.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="text-sm text-destructive mt-2" data-testid="ai-tutor-error">{error}</p>
      )}
    </div>
  );
}
