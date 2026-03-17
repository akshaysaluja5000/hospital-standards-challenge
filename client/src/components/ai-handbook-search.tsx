import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Loader2, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";

export function AiHandbookSearch() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (query.trim().length < 3) return;
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const res = await apiRequest("POST", "/api/ai-handbook", {
        query: query.trim(),
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (e: any) {
      const msg = e?.message || "";
      if (msg.includes("429")) {
        setError("Rate limit reached. Please try again later.");
      } else {
        setError("Unable to search right now. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading && query.trim().length >= 3) {
      handleSearch();
    }
  };

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare size={18} className="text-primary" />
        <h3 className="font-bold text-sm">Ask About Standards</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
        Ask a question and get answers drawn from the compliance handbook content. For education and preparation only.
      </p>
      <div className="flex gap-2">
        <Input
          placeholder='e.g. "What are the key SPD indicators for peel-packs?"'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="text-sm"
          data-testid="input-ai-handbook-query"
        />
        <Button
          size="sm"
          onClick={handleSearch}
          disabled={loading || query.trim().length < 3}
          data-testid="button-ai-handbook-search"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        </Button>
      </div>

      <AnimatePresence>
        {answer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-xl border border-primary/10 bg-card p-4" data-testid="ai-handbook-response">
              <div className="flex items-center gap-2 mb-2">
                <BrainCircuit size={14} className="text-primary" />
                <span className="text-xs font-bold text-primary">AI Answer</span>
              </div>
              <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {answer}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic" data-testid="text-handbook-ai-disclaimer">
                Check your organization's policies; this is a learning aid, not clinical guidance.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="text-sm text-destructive mt-2" data-testid="ai-handbook-error">{error}</p>
      )}
    </div>
  );
}
