import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Loader2, MessageSquare, Send, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";

export function AiHandbookSearch() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v => v.lang.startsWith("en") && v.name.includes("Google"))
      || voices.find(v => v.lang.startsWith("en-US"))
      || voices.find(v => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current = utterance;
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, [isSpeaking]);

  const handleSearch = async () => {
    if (query.trim().length < 3) return;
    setLoading(true);
    setError(null);
    setAnswer(null);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
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
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BrainCircuit size={14} className="text-primary" />
                  <span className="text-xs font-bold text-primary">AI Answer</span>
                </div>
                {typeof window !== "undefined" && window.speechSynthesis && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSpeak(answer)}
                    className={`h-8 w-8 p-0 ${isSpeaking ? "text-primary" : "text-muted-foreground"}`}
                    data-testid="button-speak-handbook"
                  >
                    {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </Button>
                )}
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
