import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft, ShieldCheck, RefreshCw, CheckCircle2, AlertTriangle,
  Clock, FileText, ClipboardList, BarChart3, FlameKindling,
  Zap, Stethoscope, Shield, Biohazard, AlertCircle, Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";

type ItemStatus = "current" | "overdue" | "expiring_soon" | "not_logged";

interface ActionItem {
  itemId: number;
  volume: string;
  standardCode: string;
  itemName: string;
  frequency: string;
  tier: number;
  tierLabel: string;
  category: string;
  surveyorPriority: number;
  status: ItemStatus;
  lastCompleted: string | null;
  nextDue: string | null;
  documentExpiresOn: string | null;
}

interface CategoryData {
  total: number;
  current: number;
  expiring: number;
  overdue: number;
  score: number;
}

interface ReadinessReport {
  score: number;
  color: "green" | "amber" | "red";
  totalItems: number;
  currentItems: number;
  overdueItems: number;
  expiringSoonItems: number;
  notLoggedItems: number;
  byCategory: Record<string, CategoryData>;
  actionItems: ActionItem[];
  lastCalculated: string;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Building & Life Safety": Building2,
  "Hazardous Materials": Biohazard,
  "Quality Management": BarChart3,
  "Emergency Preparedness": AlertCircle,
  "Utility Systems": Zap,
  "Fire Safety": FlameKindling,
  "Medical Equipment": Stethoscope,
  "Infection Control": Shield,
};

function ScoreGauge({ score, color }: { score: number; color: "green" | "amber" | "red" }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const strokeColor = color === "green" ? "#10b981" : color === "amber" ? "#f59e0b" : "#ef4444";
  const offset = circ * (1 - score / 100);
  return (
    <div className="relative flex items-center justify-center w-44 h-44">
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r={r} stroke="currentColor" strokeWidth="9" className="text-muted/20" />
        <circle cx="60" cy="60" r={r} stroke={strokeColor} strokeWidth="9"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease" }} />
      </svg>
      <div className="flex flex-col items-center z-10">
        <span className="text-5xl font-black tracking-tight" style={{ color: strokeColor }}>{score}</span>
        <span className="text-base font-bold" style={{ color: strokeColor }}>%</span>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">Readiness</span>
      </div>
    </div>
  );
}

function CategoryCard({ name, data }: { name: string; data: CategoryData }) {
  const scoreColor = data.score >= 90 ? "#10b981" : data.score >= 75 ? "#f59e0b" : "#ef4444";
  const Icon = CATEGORY_ICONS[name] ?? BarChart3;
  return (
    <div className="bg-card rounded-xl border p-4 space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm font-semibold text-foreground truncate">{name}</span>
        </div>
        <span className="text-sm font-black ml-2 shrink-0" style={{ color: scoreColor }}>{data.score}%</span>
      </div>
      <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700"
          style={{ width: `${data.score}%`, backgroundColor: scoreColor }} />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{data.current + data.expiring}/{data.total} current</span>
        <div className="flex gap-2">
          {data.expiring > 0 && <span className="text-amber-500 font-medium">{data.expiring} expiring</span>}
          {data.overdue > 0 && <span className="text-red-500 font-medium">{data.overdue} overdue</span>}
        </div>
      </div>
    </div>
  );
}

const TIER_BADGE: Record<number, { label: string; className: string }> = {
  1: { label: "LOG", className: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  2: { label: "VAULT", className: "bg-blue-100 text-blue-700 border-blue-200" },
  4: { label: "3RD PARTY", className: "bg-orange-100 text-orange-700 border-orange-200" },
};

const STATUS_CONFIG: Record<ItemStatus, { label: string; className: string; icon: React.ElementType }> = {
  current: { label: "Current", className: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: CheckCircle2 },
  overdue: { label: "Overdue", className: "bg-red-100 text-red-700 border-red-200", icon: AlertTriangle },
  expiring_soon: { label: "Expiring Soon", className: "bg-amber-100 text-amber-700 border-amber-200", icon: Clock },
  not_logged: { label: "Not Logged", className: "bg-gray-100 text-gray-600 border-gray-200", icon: AlertCircle },
};

function ActionItemRow({ item, onAction }: { item: ActionItem; onAction: (item: ActionItem) => void }) {
  const statusCfg = STATUS_CONFIG[item.status];
  const StatusIcon = statusCfg.icon;
  const tierCfg = TIER_BADGE[item.tier] ?? TIER_BADGE[4];
  const priorityColor = item.surveyorPriority === 1 ? "bg-red-500" : item.surveyorPriority === 2 ? "bg-amber-500" : "bg-gray-300";

  return (
    <div className="flex items-start gap-3 px-4 py-3.5 border-b last:border-b-0 hover:bg-muted/30 transition-colors">
      <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${priorityColor}`} title={`Priority ${item.surveyorPriority}`} />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-1.5 mb-1">
          <Badge variant="outline" className="text-xs font-bold px-1.5 py-0 bg-primary/5 border-primary/20 text-primary">
            {item.volume}
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">{item.standardCode}</span>
          <Badge variant="outline" className={`text-xs px-1.5 py-0 border ${tierCfg.className}`}>
            {tierCfg.label}
          </Badge>
          <span className="text-xs text-muted-foreground">{item.frequency}</span>
        </div>
        <p className="text-sm font-medium text-foreground leading-snug">{item.itemName}</p>
        {item.nextDue && (
          <p className="text-xs text-muted-foreground mt-0.5">
            Due: {new Date(item.nextDue + "T00:00:00").toLocaleDateString()}
          </p>
        )}
        {item.documentExpiresOn && (
          <p className="text-xs text-muted-foreground mt-0.5">
            Expires: {new Date(item.documentExpiresOn + "T00:00:00").toLocaleDateString()}
          </p>
        )}
      </div>
      <div className="flex flex-col items-end gap-2 shrink-0">
        <Badge variant="outline" className={`text-xs border flex items-center gap-1 ${statusCfg.className}`}>
          <StatusIcon className="w-3 h-3" />
          {statusCfg.label}
        </Badge>
        {item.status !== "current" && (
          <Button size="sm" variant="outline" className="text-xs h-7 px-2.5"
            onClick={() => onAction(item)}
            data-testid={`action-btn-${item.itemId}`}>
            {item.tier === 1 ? "Log It" : "Mark On File"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default function SurveyReadinessPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();

  const [statusFilter, setStatusFilter] = useState<"all" | ItemStatus>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [logItem, setLogItem] = useState<ActionItem | null>(null);
  const [logNotes, setLogNotes] = useState("");
  const [docName, setDocName] = useState("");
  const [docExpiry, setDocExpiry] = useState("");

  const { data: report, isLoading, isFetching, refetch } = useQuery<ReadinessReport>({
    queryKey: ["/api/compliance/readiness"],
  });

  const logMutation = useMutation({
    mutationFn: (data: { itemId: number; notes: string }) =>
      apiRequest("POST", "/api/compliance/log", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/readiness"] });
      toast({ title: "Logged", description: "Completion recorded." });
      setLogItem(null);
      setLogNotes("");
    },
    onError: () => toast({ title: "Error", description: "Failed to save.", variant: "destructive" }),
  });

  const docMutation = useMutation({
    mutationFn: (data: { itemId: number; documentName: string; expirationDate?: string }) =>
      apiRequest("POST", "/api/compliance/document", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/readiness"] });
      toast({ title: "Marked On File", description: "Document status recorded." });
      setLogItem(null);
      setDocName("");
      setDocExpiry("");
    },
    onError: () => toast({ title: "Error", description: "Failed to save.", variant: "destructive" }),
  });

  const filteredItems = useMemo(() => {
    if (!report) return [];
    return report.actionItems.filter(item => {
      const statusMatch = statusFilter === "all" || item.status === statusFilter;
      const catMatch = categoryFilter === "all" || item.category === categoryFilter;
      return statusMatch && catMatch;
    });
  }, [report, statusFilter, categoryFilter]);

  const categories = useMemo(() =>
    report ? Object.keys(report.byCategory).sort() : [],
    [report]
  );

  const colorLabel = report?.color === "green"
    ? "Survey Ready"
    : report?.color === "amber"
    ? "Needs Attention"
    : "High Risk";

  const colorClass = report?.color === "green"
    ? "text-emerald-600 bg-emerald-50 border-emerald-200"
    : report?.color === "amber"
    ? "text-amber-600 bg-amber-50 border-amber-200"
    : "text-red-600 bg-red-50 border-red-200";

  const handleAction = (item: ActionItem) => {
    setLogItem(item);
    setLogNotes("");
    setDocName(item.itemName);
    setDocExpiry("");
  };

  const handleSubmit = () => {
    if (!logItem) return;
    if (logItem.tier === 1) {
      logMutation.mutate({ itemId: logItem.itemId, notes: logNotes });
    } else {
      if (!docName.trim()) {
        toast({ title: "Required", description: "Document name is required.", variant: "destructive" });
        return;
      }
      docMutation.mutate({ itemId: logItem.itemId, documentName: docName.trim(), expirationDate: docExpiry || undefined });
    }
  };

  const isMutating = logMutation.isPending || docMutation.isPending;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setLocation("/leadership")}
              data-testid="btn-back-hub" className="gap-1.5">
              <ArrowLeft className="w-4 h-4" />
              Hub
            </Button>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Survey Readiness Agent</h1>
              <Badge variant="outline" className="text-xs font-medium border-primary/30 text-primary bg-primary/5">
                AAAHC · ASC
              </Badge>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => refetch()} disabled={isFetching}
            data-testid="btn-refresh" className="gap-1.5">
            <RefreshCw className={`w-3.5 h-3.5 ${isFetching ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : !report ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Failed to load readiness data. Try refreshing.</p>
          </div>
        ) : (
          <>
            {/* Score + Stats */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl border p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <ScoreGauge score={report.score} color={report.color} />
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className={`text-sm font-bold px-3 py-1 border ${colorClass}`}>
                      {colorLabel}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Last calculated {new Date(report.lastCalculated).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <StatPill label="Total Standards" value={report.totalItems} className="border-border" />
                    <StatPill label="Current" value={report.currentItems + report.expiringSoonItems}
                      className="border-emerald-200 bg-emerald-50 text-emerald-700" valueClass="text-emerald-700" />
                    <StatPill label="Overdue" value={report.overdueItems}
                      className="border-red-200 bg-red-50" valueClass="text-red-600" />
                    <StatPill label="Not Logged" value={report.notLoggedItems}
                      className="border-gray-200 bg-gray-50" valueClass="text-gray-600" />
                  </div>
                  {report.expiringSoonItems > 0 && (
                    <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{report.expiringSoonItems} document{report.expiringSoonItems !== 1 ? "s" : ""} expiring within 60 days</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Category Breakdown */}
            <section>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Category Breakdown
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {categories.map(cat => (
                  <motion.div key={cat} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                    <button className="w-full text-left" onClick={() =>
                      setCategoryFilter(prev => prev === cat ? "all" : cat)}>
                      <div className={`transition-all ${categoryFilter === cat ? "ring-2 ring-primary ring-offset-1 rounded-xl" : ""}`}>
                        <CategoryCard name={cat} data={report.byCategory[cat]} />
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Action List */}
            <section>
              <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Action List
                  {filteredItems.length > 0 && (
                    <span className="ml-2 text-xs bg-muted px-1.5 py-0.5 rounded-full font-normal">
                      {filteredItems.length}
                    </span>
                  )}
                </h2>
                <div className="flex gap-1.5 flex-wrap">
                  {(["all", "overdue", "expiring_soon", "not_logged"] as const).map(f => (
                    <button key={f} onClick={() => setStatusFilter(f)}
                      data-testid={`filter-${f}`}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                        statusFilter === f
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-muted-foreground border-border hover:border-primary/40"
                      }`}>
                      {f === "all" ? "All" : f === "overdue" ? "Overdue" : f === "expiring_soon" ? "Expiring Soon" : "Not Logged"}
                    </button>
                  ))}
                  {categoryFilter !== "all" && (
                    <button onClick={() => setCategoryFilter("all")}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                      {categoryFilter} ×
                    </button>
                  )}
                </div>
              </div>

              {filteredItems.length === 0 ? (
                <div className="bg-card rounded-xl border p-12 flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {statusFilter === "all" ? "All items are current — great work!" : "No items match this filter."}
                  </p>
                </div>
              ) : (
                <div className="bg-card rounded-xl border overflow-hidden">
                  {filteredItems.map(item => (
                    <ActionItemRow key={item.itemId} item={item} onAction={handleAction} />
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>

      {/* Log / Mark Dialog */}
      <Dialog open={!!logItem} onOpenChange={open => { if (!open) setLogItem(null); }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base">
              {logItem?.tier === 1
                ? <><ClipboardList className="w-4 h-4 text-emerald-600" /> Log Completion</>
                : <><FileText className="w-4 h-4 text-blue-600" /> Mark Document On File</>}
            </DialogTitle>
          </DialogHeader>
          {logItem && (
            <div className="space-y-4">
              <div className="bg-muted/40 rounded-lg p-3 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs font-bold px-1.5 py-0 bg-primary/5 border-primary/20 text-primary">
                    {logItem.volume}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">{logItem.standardCode}</span>
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">{logItem.itemName}</p>
                <p className="text-xs text-muted-foreground">{logItem.frequency}</p>
              </div>

              {logItem.tier === 1 ? (
                <div className="space-y-2">
                  <Label htmlFor="log-notes">Notes (optional)</Label>
                  <Textarea id="log-notes" placeholder="Add notes about this completion..."
                    value={logNotes} onChange={e => setLogNotes(e.target.value)}
                    className="resize-none h-20" data-testid="input-log-notes" />
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="doc-name">Document Name <span className="text-red-500">*</span></Label>
                    <Input id="doc-name" placeholder="e.g. Fire Drill Policy 2026"
                      value={docName} onChange={e => setDocName(e.target.value)}
                      data-testid="input-doc-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doc-expiry">Expiration Date <span className="text-muted-foreground">(optional)</span></Label>
                    <Input id="doc-expiry" type="date"
                      value={docExpiry} onChange={e => setDocExpiry(e.target.value)}
                      data-testid="input-doc-expiry" />
                    <p className="text-xs text-muted-foreground">Leave blank for documents that do not expire.</p>
                  </div>
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setLogItem(null)} disabled={isMutating}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isMutating} data-testid="btn-submit-action">
              {isMutating ? "Saving…" : logItem?.tier === 1 ? "Confirm Completion" : "Mark On File"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StatPill({ label, value, className = "", valueClass = "" }: {
  label: string; value: number; className?: string; valueClass?: string;
}) {
  return (
    <div className={`rounded-lg border px-3 py-2.5 bg-background ${className}`}>
      <div className={`text-2xl font-black ${valueClass || "text-foreground"}`}>{value}</div>
      <div className="text-xs text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
