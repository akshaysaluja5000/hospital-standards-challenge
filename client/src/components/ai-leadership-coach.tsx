import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";

interface LevelStat {
  levelId: string;
  levelName: string;
  attempts: number;
  avgScore: number;
}

export function AiLeadershipCoach() {
  const [insights, setInsights] = useState<string | null>(null);
  const [levelStats, setLevelStats] = useState<LevelStat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiRequest("POST", "/api/admin/ai-insights", {});
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setInsights(data.insights);
        setLevelStats(data.levelStats || []);
      }
    } catch (e: any) {
      setError("Unable to generate insights right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
      <div className="p-5 border-b border-card-border">
        <h3 className="font-bold text-base flex items-center gap-2">
          <Sparkles size={18} className="text-primary" />
          AI Leadership Coach
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          Get AI-generated insights on unit readiness, priority focus areas, and actionable next steps for survey prep.
        </p>
      </div>

      <div className="p-5">
        {!insights && !loading && (
          <Button
            onClick={handleGenerate}
            className="gap-2 w-full"
            data-testid="button-ai-insights"
          >
            <TrendingUp size={16} />
            Generate Unit Readiness Report
          </Button>
        )}

        {loading && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-6" data-testid="ai-insights-loading">
            <Loader2 size={18} className="animate-spin" />
            Analyzing unit-wide performance data...
          </div>
        )}

        <AnimatePresence>
          {insights && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              {levelStats.length > 0 && (
                <div className="rounded-xl bg-muted/50 p-4">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Topic Performance</h4>
                  <div className="flex flex-col gap-2">
                    {levelStats.map((l) => (
                      <div key={l.levelId} className="flex items-center gap-3 text-sm">
                        <span className="flex-1 font-medium truncate">{l.levelName}</span>
                        <span className="text-xs text-muted-foreground">{l.attempts} attempt{l.attempts !== 1 ? "s" : ""}</span>
                        <span className={`font-bold min-w-[3rem] text-right ${
                          l.avgScore >= 80 ? "text-chart-1" : l.avgScore >= 50 ? "text-chart-4" : "text-destructive"
                        }`}>
                          {l.avgScore}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4" data-testid="ai-insights-response">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-bold text-primary">AI Leadership Insights</span>
                </div>
                <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                  {insights}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic" data-testid="text-insights-disclaimer">
                  Check your organization's policies; this is a learning aid, not clinical guidance.
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleGenerate}
                disabled={loading}
                className="gap-2 self-start"
                data-testid="button-refresh-insights"
              >
                <TrendingUp size={14} />
                Refresh Report
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <p className="text-sm text-destructive mt-2 text-center" data-testid="ai-insights-error">{error}</p>
        )}
      </div>
    </div>
  );
}
