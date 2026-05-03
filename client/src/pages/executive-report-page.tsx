import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Download, AlertTriangle, CheckCircle2, Clock,
  Flag, Building2, TrendingUp, TrendingDown, Filter, X,
  ChevronRight, ClipboardCheck, Circle, Printer, FileText,
  ShieldCheck, ShieldAlert, ShieldX, ChevronDown, ChevronUp,
  Minus
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/lib/auth";
import { getRoleConfig } from "@shared/roles";
import { format, parseISO, startOfWeek, subWeeks } from "date-fns";

// ── Types ──────────────────────────────────────────────────────────────────

type ActionStatus = "Open" | "In Progress" | "Pending Validation" | "Closed";
type ActionPriority = "Critical" | "High" | "Medium" | "Low";
type ValidationStatus = "Pending" | "Approved" | "Rejected" | null;
type RiskLevel = "green" | "yellow" | "red";

interface ExecAction {
  id: string;
  title: string;
  standard: string;
  department: string;
  facility: string;
  owner: string;
  priority: ActionPriority;
  status: ActionStatus;
  createdAt: string;
  dueDate: string;
  closedAt?: string;
  daysOpen: number;
  daysOverdue: number;
  validationStatus: ValidationStatus;
}

interface TrendPoint { week: string; opened: number; closed: number; }

// ── Mock Data ──────────────────────────────────────────────────────────────

const TODAY = new Date();
const d = (offset: number) => {
  const dt = new Date(TODAY);
  dt.setDate(dt.getDate() + offset);
  return dt.toISOString().split("T")[0];
};

const EXEC_MOCK_ACTIONS: ExecAction[] = [
  {
    id: "cap-001", title: "Document corrective action for temp excursion — med fridge #3",
    standard: "EC.02.05.07", department: "Pharmacy", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "Maria Chen", priority: "Critical", status: "Open",
    createdAt: d(-21), dueDate: d(-4), daysOpen: 21, daysOverdue: 4, validationStatus: null,
  },
  {
    id: "cap-002", title: "Secure oxygen cylinders in procedure room 2 with approved brackets",
    standard: "EC.02.06.01", department: "Perioperative", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "James Okafor", priority: "Critical", status: "In Progress",
    createdAt: d(-14), dueDate: d(-2), daysOpen: 14, daysOverdue: 2, validationStatus: null,
  },
  {
    id: "cap-003", title: "Replace extension cord used as permanent wiring at nurse station B",
    standard: "EC.02.05.01", department: "Nursing", facility: "Orthopedic Hospital of Wisconsin",
    owner: "Priya Nair", priority: "High", status: "Open",
    createdAt: d(-10), dueDate: d(4), daysOpen: 10, daysOverdue: 0, validationStatus: null,
  },
  {
    id: "cap-004", title: "Update blanket warmer logs to document temp range and corrective steps",
    standard: "EC.02.05.07", department: "Perioperative", facility: "Ascension SE Wisconsin – Franklin",
    owner: "Derek Walsh", priority: "High", status: "Pending Validation",
    createdAt: d(-18), dueDate: d(7), daysOpen: 18, daysOverdue: 0, validationStatus: "Pending",
  },
  {
    id: "cap-005", title: "Attach current PM sticker to EKG machine in cardiology suite",
    standard: "EC.02.04.01", department: "Cardiology", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "Sandra Brooks", priority: "Medium", status: "Closed",
    createdAt: d(-30), dueDate: d(-5), closedAt: d(-3), daysOpen: 27, daysOverdue: 0, validationStatus: "Approved",
  },
  {
    id: "cap-006", title: "Post hand hygiene compliance data in staff break room",
    standard: "IC.02.01.01", department: "Infection Control", facility: "Orthopedic Hospital of Wisconsin",
    owner: "Tom Reyes", priority: "Medium", status: "Open",
    createdAt: d(-7), dueDate: d(17), daysOpen: 7, daysOverdue: 0, validationStatus: null,
  },
  {
    id: "cap-007", title: "Complete fire drill documentation for Q1 — missing patient count signatures",
    standard: "EC.02.03.03", department: "Facilities", facility: "Ascension SE Wisconsin – Elmbrook",
    owner: "Linda Park", priority: "Low", status: "Closed",
    createdAt: d(-45), dueDate: d(-18), closedAt: d(-20), daysOpen: 25, daysOverdue: 0, validationStatus: "Approved",
  },
  {
    id: "cap-008", title: "Reconcile missing entries in medication administration record for unit 3B",
    standard: "RC.02.01.01", department: "Nursing", facility: "Ascension SE Wisconsin – Franklin",
    owner: "Yolanda Morris", priority: "Critical", status: "Open",
    createdAt: d(-5), dueDate: d(1), daysOpen: 5, daysOverdue: 0, validationStatus: null,
  },
  {
    id: "cap-009", title: "Resolve expired credentials on file for two contracted physicians",
    standard: "HR.01.05.03", department: "Medical Staff Office", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "Grace Patel", priority: "High", status: "In Progress",
    createdAt: d(-12), dueDate: d(-1), daysOpen: 12, daysOverdue: 1, validationStatus: null,
  },
  {
    id: "cap-010", title: "Update fire extinguisher inspection tags — 3 expired in OR corridor",
    standard: "EC.02.03.05", department: "Facilities", facility: "Orthopedic Hospital of Wisconsin",
    owner: "Marcus Webb", priority: "Medium", status: "Closed",
    createdAt: d(-38), dueDate: d(-10), closedAt: d(-12), daysOpen: 26, daysOverdue: 0, validationStatus: "Approved",
  },
  {
    id: "cap-011", title: "Train staff on updated restraint use policy — 6 staff not yet complete",
    standard: "PC.03.05.01", department: "Nursing", facility: "Ascension SE Wisconsin – Elmbrook",
    owner: "Rachel Kim", priority: "High", status: "In Progress",
    createdAt: d(-9), dueDate: d(5), daysOpen: 9, daysOverdue: 0, validationStatus: null,
  },
  {
    id: "cap-012", title: "Document informed consent variance for elective case on 4/28",
    standard: "RI.01.03.01", department: "Perioperative", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "James Okafor", priority: "Critical", status: "Open",
    createdAt: d(-6), dueDate: d(-1), daysOpen: 6, daysOverdue: 1, validationStatus: null,
  },
];

// ── Trend Data ─────────────────────────────────────────────────────────────

function buildTrendData(actions: ExecAction[]): TrendPoint[] {
  return Array.from({ length: 8 }, (_, i) => {
    const w = 7 - i;
    const weekStart = startOfWeek(subWeeks(TODAY, w));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    return {
      week: format(weekStart, "MMM d"),
      opened: actions.filter((a) => { const c = parseISO(a.createdAt); return c >= weekStart && c <= weekEnd; }).length,
      closed: actions.filter((a) => { if (!a.closedAt) return false; const c = parseISO(a.closedAt); return c >= weekStart && c <= weekEnd; }).length,
    };
  });
}

// ── KPI Calculations ───────────────────────────────────────────────────────

function calcKpis(actions: ExecAction[]) {
  const now = new Date();
  const open = actions.filter((a) => a.status !== "Closed").length;
  const overdue = actions.filter((a) => a.daysOverdue > 0).length;
  const closedThisMonth = actions.filter((a) => {
    if (!a.closedAt) return false;
    const c = parseISO(a.closedAt);
    return c.getMonth() === now.getMonth() && c.getFullYear() === now.getFullYear();
  }).length;
  const criticalOverdue = actions.filter((a) => a.daysOverdue > 0 && a.priority === "Critical").length;
  const highPriorityOpen = actions.filter((a) => a.status !== "Closed" && (a.priority === "Critical" || a.priority === "High")).length;
  const closedActions = actions.filter((a) => a.closedAt);
  const avgDaysToClose = closedActions.length
    ? Math.round(closedActions.reduce((s, a) => s + a.daysOpen, 0) / closedActions.length) : 0;
  return { open, overdue, closedThisMonth, criticalOverdue, highPriorityOpen, avgDaysToClose };
}

// ── Risk Status ────────────────────────────────────────────────────────────

function calcRiskStatus(actions: ExecAction[], trendData: TrendPoint[]): RiskLevel {
  const criticalOverdue = actions.filter((a) => a.daysOverdue > 0 && a.priority === "Critical").length;
  const highOverdue = actions.filter((a) => a.daysOverdue > 0 && a.priority === "High").length;
  const recent = trendData.slice(-4);
  const recentOpened = recent.reduce((s, w) => s + w.opened, 0);
  const recentClosed = recent.reduce((s, w) => s + w.closed, 0);
  const worsening = recentOpened > 0 && recentClosed < recentOpened * 0.6;
  if (criticalOverdue > 0 || worsening) return "red";
  if (highOverdue > 0) return "yellow";
  return "green";
}

// ── Executive Narrative ────────────────────────────────────────────────────

function generateNarrative(
  actions: ExecAction[],
  kpis: ReturnType<typeof calcKpis>,
  trendData: TrendPoint[]
): string {
  const facilityCount = new Set(actions.map((a) => a.facility)).size;

  // Top departments by open load
  const deptMap: Record<string, number> = {};
  for (const a of actions.filter((a) => a.status !== "Closed")) {
    deptMap[a.department] = (deptMap[a.department] || 0) + 1;
  }
  const topDepts = Object.entries(deptMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([d]) => d);

  // Trend direction
  const recent = trendData.slice(-4);
  const recentOpened = recent.reduce((s, w) => s + w.opened, 0);
  const recentClosed = recent.reduce((s, w) => s + w.closed, 0);
  const trendImproving = recentClosed >= recentOpened;

  let text = `As of ${format(TODAY, "MMMM d, yyyy")}, there are ${kpis.open} open corrective action${kpis.open !== 1 ? "s" : ""} across ${facilityCount} facilit${facilityCount !== 1 ? "ies" : "y"}.`;

  if (kpis.overdue > 0) {
    text += ` ${kpis.overdue} item${kpis.overdue !== 1 ? "s are" : " is"} past due`;
    if (kpis.criticalOverdue > 0) {
      text += `, including ${kpis.criticalOverdue} critical item${kpis.criticalOverdue !== 1 ? "s" : ""} requiring immediate leadership attention`;
    }
    text += ".";
  } else {
    text += " No actions are currently overdue.";
  }

  if (topDepts.length > 0) {
    text += ` ${topDepts.join(" and ")} ${topDepts.length > 1 ? "carry" : "carries"} the highest concentration of open items.`;
  }

  if (recentOpened + recentClosed > 0) {
    text += trendImproving
      ? " The closure rate over the past four weeks is ahead of new openings — the backlog is improving."
      : " Over the past four weeks, new actions are outpacing closures — the backlog is growing and warrants follow-up.";
  }

  return text;
}

// ── Dept Breakdown ─────────────────────────────────────────────────────────

function buildDeptBreakdown(actions: ExecAction[]) {
  const map: Record<string, { open: number; overdue: number; highPri: number }> = {};
  for (const a of actions) {
    if (!map[a.department]) map[a.department] = { open: 0, overdue: 0, highPri: 0 };
    if (a.status !== "Closed") map[a.department].open++;
    if (a.daysOverdue > 0) map[a.department].overdue++;
    if (a.status !== "Closed" && (a.priority === "Critical" || a.priority === "High")) map[a.department].highPri++;
  }
  return Object.entries(map).map(([dept, s]) => ({ dept, ...s })).sort((a, b) => b.open - a.open);
}

// ── Attention Sort ─────────────────────────────────────────────────────────

const PW: Record<ActionPriority, number> = { Critical: 4, High: 3, Medium: 2, Low: 1 };

function sortForAttention(actions: ExecAction[]) {
  return [...actions]
    .filter((a) => a.status !== "Closed")
    .sort((a, b) => {
      if (b.daysOverdue !== a.daysOverdue) return b.daysOverdue - a.daysOverdue;
      if (PW[b.priority] !== PW[a.priority]) return PW[b.priority] - PW[a.priority];
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
}

// ── Helpers ────────────────────────────────────────────────────────────────

function priorityColor(p: ActionPriority) {
  switch (p) {
    case "Critical": return "text-destructive";
    case "High": return "text-orange-400";
    case "Medium": return "text-chart-4";
    case "Low": return "text-muted-foreground";
  }
}

function statusIcon(s: ActionStatus) {
  switch (s) {
    case "Open": return <Circle size={12} className="text-blue-400" />;
    case "In Progress": return <Clock size={12} className="text-chart-4" />;
    case "Pending Validation": return <ClipboardCheck size={12} className="text-purple-400" />;
    case "Closed": return <CheckCircle2 size={12} className="text-green-400" />;
  }
}

// ── Risk Status Config ─────────────────────────────────────────────────────

const RISK_CONFIG = {
  green: {
    Icon: ShieldCheck,
    label: "Compliant",
    sub: "No critical overdue actions. Closure rate on track.",
    bg: "bg-green-500/10 border-green-500/25",
    text: "text-green-400",
    dot: "bg-green-400",
  },
  yellow: {
    Icon: ShieldAlert,
    label: "Attention Required",
    sub: "High priority items are overdue. Monitor closely.",
    bg: "bg-amber-500/10 border-amber-500/25",
    text: "text-amber-400",
    dot: "bg-amber-400",
  },
  red: {
    Icon: ShieldX,
    label: "Immediate Action Required",
    sub: "Critical items are overdue or backlog is worsening.",
    bg: "bg-destructive/10 border-destructive/30",
    text: "text-destructive",
    dot: "bg-destructive",
  },
};

// ── Export Helpers ─────────────────────────────────────────────────────────

function exportCsv(actions: ExecAction[]) {
  const headers = ["ID", "Title", "Standard", "Department", "Facility", "Owner", "Priority", "Status", "Due Date", "Days Open", "Days Overdue"];
  const rows = actions.map((a) => [a.id, `"${a.title}"`, a.standard, a.department, a.facility, a.owner, a.priority, a.status, a.dueDate, a.daysOpen, a.daysOverdue]);
  const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = `executive-report-${format(TODAY, "yyyy-MM-dd")}.csv`;
  link.click(); URL.revokeObjectURL(url);
}

// ── Role Gate ──────────────────────────────────────────────────────────────

function canViewReport(user: { isAdmin?: boolean; roleId?: string | null } | null) {
  if (!user) return false;
  if (user.isAdmin) return true;
  const role = getRoleConfig(user.roleId);
  return role?.reportingScope === "enterprise" || role?.reportingScope === "own_plus_all";
}

// ── Constants ──────────────────────────────────────────────────────────────

const ALL_FACILITIES = ["All Facilities", ...Array.from(new Set(EXEC_MOCK_ACTIONS.map((a) => a.facility)))];
const ALL_DEPARTMENTS = ["All Departments", ...Array.from(new Set(EXEC_MOCK_ACTIONS.map((a) => a.department))).sort()];
const ALL_STATUSES: (ActionStatus | "All")[] = ["All", "Open", "In Progress", "Pending Validation", "Closed"];
const ALL_PRIORITIES: (ActionPriority | "All")[] = ["All", "Critical", "High", "Medium", "Low"];

// ── Main Page ──────────────────────────────────────────────────────────────

export default function ExecutiveReportPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const [facility, setFacility] = useState("All Facilities");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState<ActionStatus | "All">("All");
  const [priority, setPriority] = useState<ActionPriority | "All">("All");
  const [tableExpanded, setTableExpanded] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => EXEC_MOCK_ACTIONS.filter((a) =>
    (facility === "All Facilities" || a.facility === facility) &&
    (department === "All Departments" || a.department === department) &&
    (status === "All" || a.status === status) &&
    (priority === "All" || a.priority === priority)
  ), [facility, department, status, priority]);

  const kpis = useMemo(() => calcKpis(filtered), [filtered]);
  const trendData = useMemo(() => buildTrendData(filtered), [filtered]);
  const deptBreakdown = useMemo(() => buildDeptBreakdown(filtered), [filtered]);
  const attentionList = useMemo(() => sortForAttention(filtered), [filtered]);
  const riskLevel = useMemo(() => calcRiskStatus(filtered, trendData), [filtered, trendData]);
  const narrative = useMemo(() => generateNarrative(filtered, kpis, trendData), [filtered, kpis, trendData]);
  const hasFilters = facility !== "All Facilities" || department !== "All Departments" || status !== "All" || priority !== "All";

  const recent = trendData.slice(-4);
  const recentOpened = recent.reduce((s, w) => s + w.opened, 0);
  const recentClosed = recent.reduce((s, w) => s + w.closed, 0);
  const trendImproving = recentClosed >= recentOpened;

  const riskCfg = RISK_CONFIG[riskLevel];
  const RiskIcon = riskCfg.Icon;

  if (!canViewReport(user)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-sm text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-destructive/15 flex items-center justify-center">
            <AlertTriangle size={28} className="text-destructive" />
          </div>
          <h2 className="text-xl font-bold" data-testid="text-access-denied">Access Restricted</h2>
          <p className="text-sm text-muted-foreground">This report is available to Admin, Compliance Officer, and Leadership roles only.</p>
          <Button variant="outline" onClick={() => setLocation("/")} data-testid="button-go-home">
            <ArrowLeft size={14} className="mr-1.5" /> Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col print:bg-white print:text-black">

      {/* ── Header ── */}
      <div className="sticky top-[58px] z-40 border-b border-white/10 print:hidden" style={{ background: "rgba(7,22,48,0.88)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" />
              <h2 className="font-bold text-base" data-testid="text-page-title">Executive Readiness Report</h2>
            </div>
            <p className="text-xs text-muted-foreground">Corrective Action Plan · {format(TODAY, "MMMM d, yyyy")}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setFiltersOpen((v) => !v)} data-testid="button-toggle-filters">
              <Filter size={13} className="mr-1.5" /> Filters {hasFilters && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary inline-block" />}
            </Button>
            <Button variant="outline" size="sm" onClick={() => exportCsv(filtered)} data-testid="button-export-csv">
              <Download size={13} className="mr-1.5" /> CSV
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.print()} data-testid="button-export-pdf">
              <Printer size={13} className="mr-1.5" /> PDF
            </Button>
          </div>
        </div>

        {/* Collapsible filters */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/8"
            >
              <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap gap-2 items-center" data-testid="container-filters">
                <Select value={facility} onValueChange={setFacility}>
                  <SelectTrigger className="h-8 text-xs w-52" data-testid="select-facility">
                    <Building2 size={11} className="mr-1.5 text-muted-foreground flex-shrink-0" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>{ALL_FACILITIES.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}</SelectContent>
                </Select>
                <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger className="h-8 text-xs w-44" data-testid="select-department"><SelectValue /></SelectTrigger>
                  <SelectContent>{ALL_DEPARTMENTS.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
                </Select>
                <Select value={status} onValueChange={(v) => setStatus(v as ActionStatus | "All")}>
                  <SelectTrigger className="h-8 text-xs w-40" data-testid="select-status"><SelectValue /></SelectTrigger>
                  <SelectContent>{ALL_STATUSES.map((s) => <SelectItem key={s} value={s}>{s === "All" ? "All Statuses" : s}</SelectItem>)}</SelectContent>
                </Select>
                <Select value={priority} onValueChange={(v) => setPriority(v as ActionPriority | "All")}>
                  <SelectTrigger className="h-8 text-xs w-36" data-testid="select-priority">
                    <Flag size={11} className="mr-1.5 text-muted-foreground flex-shrink-0" /><SelectValue />
                  </SelectTrigger>
                  <SelectContent>{ALL_PRIORITIES.map((p) => <SelectItem key={p} value={p}>{p === "All" ? "All Priorities" : p}</SelectItem>)}</SelectContent>
                </Select>
                {hasFilters && (
                  <button onClick={() => { setFacility("All Facilities"); setDepartment("All Departments"); setStatus("All"); setPriority("All"); }}
                    className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1" data-testid="button-clear-filters">
                    <X size={11} /> Clear all
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 flex flex-col gap-5">

        {/* ── Risk Status Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl border-2 p-5 flex items-center gap-4 ${riskCfg.bg}`}
          data-testid="container-risk-status"
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${riskCfg.bg}`}>
            <RiskIcon size={26} className={riskCfg.text} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${riskCfg.dot}`} />
              <span className={`font-black text-base ${riskCfg.text}`} data-testid="text-risk-label">{riskCfg.label}</span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-risk-sub">{riskCfg.sub}</p>
          </div>
          <div className="flex-shrink-0 text-right hidden sm:block">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Survey Risk</p>
            <p className={`text-2xl font-black ${riskCfg.text}`} data-testid="text-risk-level">{riskLevel === "green" ? "Low" : riskLevel === "yellow" ? "Moderate" : "High"}</p>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border-2 border-border bg-card p-5 shadow-sm"
          data-testid="container-executive-summary"
        >
          <div className="flex items-center gap-2 mb-3">
            <FileText size={15} className="text-primary flex-shrink-0" />
            <h3 className="font-bold text-sm">Executive Summary</h3>
            <span className="ml-auto text-[10px] font-semibold text-muted-foreground">{format(TODAY, "MMM d, yyyy")}</span>
          </div>
          <p className="text-sm leading-relaxed text-foreground/85" data-testid="text-narrative">{narrative}</p>

          {/* Inline signal pills */}
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/60">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
              trendImproving ? "bg-green-500/10 border-green-500/25 text-green-400" : "bg-destructive/10 border-destructive/25 text-destructive"
            }`} data-testid="pill-trend">
              {trendImproving ? <TrendingDown size={11} /> : <TrendingUp size={11} />}
              {trendImproving ? "Closure trend improving" : "Backlog growing"}
            </span>
            {kpis.criticalOverdue > 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-destructive/10 border-destructive/25 text-destructive" data-testid="pill-critical-overdue">
                <AlertTriangle size={11} /> {kpis.criticalOverdue} critical overdue
              </span>
            )}
            {kpis.criticalOverdue === 0 && kpis.overdue === 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-green-500/10 border-green-500/25 text-green-400" data-testid="pill-on-track">
                <CheckCircle2 size={11} /> All actions on track
              </span>
            )}
          </div>
        </motion.div>

        {/* ── 3 KPI Cards ── */}
        <div className="grid grid-cols-3 gap-3" data-testid="container-kpis">
          {[
            { label: "Open Actions", value: kpis.open, sub: `${kpis.highPriorityOpen} high/critical`, icon: ClipboardCheck, color: "text-blue-400", testid: "kpi-open" },
            { label: "Overdue", value: kpis.overdue, sub: kpis.criticalOverdue > 0 ? `${kpis.criticalOverdue} critical` : "None critical", icon: AlertTriangle, color: kpis.overdue > 0 ? "text-destructive" : "text-muted-foreground", testid: "kpi-overdue" },
            { label: "Closed This Month", value: kpis.closedThisMonth, sub: `Avg ${kpis.avgDaysToClose}d to close`, icon: CheckCircle2, color: "text-green-400", testid: "kpi-closed-month" },
          ].map(({ label, value, sub, icon: Icon, color, testid }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border-2 border-border bg-card p-4 flex flex-col items-center gap-1 text-center shadow-sm"
              data-testid={testid}
            >
              <Icon size={15} className={color} />
              <span className="text-3xl font-black mt-0.5">{value}</span>
              <span className="text-xs text-muted-foreground font-semibold leading-tight">{label}</span>
              <span className="text-[10px] text-muted-foreground/60 mt-0.5">{sub}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Trend + Dept ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Trend */}
          <div className="rounded-2xl border-2 border-border bg-card p-5 shadow-sm" data-testid="container-trend-chart">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-primary" />
                <h3 className="font-bold text-sm">Opened vs Closed — 8 Weeks</h3>
              </div>
              <span className={`text-[11px] font-bold flex items-center gap-1 ${trendImproving ? "text-green-400" : "text-destructive"}`}>
                {trendImproving ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                {trendImproving ? "Improving" : "Worsening"}
              </span>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={trendData} barGap={2} barSize={9}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="week" tick={{ fontSize: 9, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip contentStyle={{ background: "rgba(7,22,48,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", fontSize: 11 }} labelStyle={{ color: "rgba(255,255,255,0.65)", marginBottom: 3 }} />
                <Legend wrapperStyle={{ fontSize: 10, paddingTop: 6 }} />
                <Bar dataKey="opened" name="Opened" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} opacity={0.8} />
                <Bar dataKey="closed" name="Closed" fill="hsl(var(--chart-2))" radius={[3, 3, 0, 0]} opacity={0.8} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Dept Breakdown */}
          <div className="rounded-2xl border-2 border-border bg-card p-5 shadow-sm" data-testid="container-dept-breakdown">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={14} className="text-primary" />
              <h3 className="font-bold text-sm">Exposure by Department</h3>
            </div>
            <div className="flex flex-col gap-1">
              <div className="grid grid-cols-4 text-[9px] font-bold uppercase tracking-wider text-muted-foreground pb-1.5 border-b border-border px-1">
                <span className="col-span-2">Department</span>
                <span className="text-center">Open</span>
                <span className="text-center">Overdue</span>
              </div>
              {deptBreakdown.map(({ dept, open, overdue }) => (
                <div key={dept} className="grid grid-cols-4 text-xs px-1 py-1.5 rounded-lg hover:bg-white/5 transition-colors items-center" data-testid={`row-dept-${dept}`}>
                  <span className="col-span-2 font-medium truncate pr-2 text-[11px]">{dept}</span>
                  <span className="text-center font-bold text-blue-400">{open || "—"}</span>
                  <span className={`text-center font-bold ${overdue > 0 ? "text-destructive" : "text-muted-foreground/40"}`}>
                    {overdue > 0 ? overdue : "—"}
                  </span>
                </div>
              ))}
              {deptBreakdown.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">No data for current filters</p>
              )}
            </div>
          </div>
        </div>

        {/* ── Needs Attention Table (collapsible) ── */}
        <div className="rounded-2xl border-2 border-border bg-card shadow-sm overflow-hidden" data-testid="container-needs-attention">
          <button
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/3 transition-colors text-left"
            onClick={() => setTableExpanded((v) => !v)}
            data-testid="button-toggle-table"
          >
            <div className="flex items-center gap-2.5">
              <AlertTriangle size={15} className={kpis.overdue > 0 ? "text-destructive" : "text-muted-foreground"} />
              <span className="font-bold text-sm">Needs Attention</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {attentionList.length} open
              </span>
              {kpis.overdue > 0 && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-destructive/15 text-destructive border border-destructive/25">
                  {kpis.overdue} overdue
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-7 px-2.5"
                onClick={(e) => { e.stopPropagation(); setLocation("/corrective-actions"); }}
                data-testid="button-view-all-actions"
              >
                View All <ChevronRight size={11} className="ml-0.5" />
              </Button>
              {tableExpanded ? <ChevronUp size={15} className="text-muted-foreground" /> : <ChevronDown size={15} className="text-muted-foreground" />}
            </div>
          </button>

          <AnimatePresence initial={false}>
            {tableExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-border/60"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-xs" data-testid="table-needs-attention">
                    <thead>
                      <tr className="border-b border-border/60 text-muted-foreground font-bold uppercase tracking-wider text-[9px]">
                        <th className="text-left px-5 py-2.5">Action</th>
                        <th className="text-left px-3 py-2.5 hidden sm:table-cell">Department</th>
                        <th className="text-left px-3 py-2.5 hidden md:table-cell">Owner</th>
                        <th className="text-center px-3 py-2.5">Priority</th>
                        <th className="text-center px-3 py-2.5 hidden sm:table-cell">Due</th>
                        <th className="text-center px-3 py-2.5">Status</th>
                        <th className="text-center px-3 py-2.5">Overdue</th>
                        <th className="px-3 py-2.5"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {attentionList.length === 0 && (
                        <tr>
                          <td colSpan={8} className="text-center py-8 text-muted-foreground">
                            <CheckCircle2 size={20} className="text-green-400/40 mx-auto mb-1.5" />
                            No open actions match current filters
                          </td>
                        </tr>
                      )}
                      {attentionList.map((action, i) => (
                        <tr
                          key={action.id}
                          className={`border-b border-border/40 hover:bg-white/3 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}
                          data-testid={`row-action-${action.id}`}
                        >
                          <td className="px-5 py-3 max-w-[200px]">
                            <p className="font-semibold leading-snug line-clamp-2 text-[11px]">{action.title}</p>
                            <p className="text-muted-foreground mt-0.5 text-[10px]">{action.standard}</p>
                          </td>
                          <td className="px-3 py-3 hidden sm:table-cell text-muted-foreground whitespace-nowrap text-[11px]">{action.department}</td>
                          <td className="px-3 py-3 hidden md:table-cell text-muted-foreground whitespace-nowrap text-[11px]">{action.owner}</td>
                          <td className="px-3 py-3 text-center">
                            <span className={`font-bold text-[11px] ${priorityColor(action.priority)}`}>{action.priority}</span>
                          </td>
                          <td className={`px-3 py-3 text-center hidden sm:table-cell whitespace-nowrap font-semibold text-[11px] ${action.daysOverdue > 0 ? "text-destructive" : "text-muted-foreground"}`}>
                            {format(parseISO(action.dueDate), "MMM d")}
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className="inline-flex items-center justify-center gap-1">{statusIcon(action.status)}</span>
                          </td>
                          <td className="px-3 py-3 text-center">
                            {action.daysOverdue > 0
                              ? <span className="font-bold text-destructive">{action.daysOverdue}d</span>
                              : <Minus size={12} className="text-muted-foreground/30 mx-auto" />}
                          </td>
                          <td className="px-3 py-3">
                            <Button variant="ghost" size="sm" className="h-6 text-[10px] px-2" onClick={() => setLocation("/corrective-actions")} data-testid={`button-drilldown-${action.id}`}>
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

