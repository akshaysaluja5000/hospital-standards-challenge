import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, Download, FileText, AlertTriangle, CheckCircle2,
  Clock, Flag, Building2, TrendingUp, Filter, X, ChevronRight,
  ClipboardCheck, Circle, Printer
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/lib/auth";
import { getRoleConfig } from "@shared/roles";
import { differenceInDays, format, parseISO, startOfWeek, subWeeks } from "date-fns";

// ── Types ──────────────────────────────────────────────────────────────────

type ActionStatus = "Open" | "In Progress" | "Pending Validation" | "Closed";
type ActionPriority = "Critical" | "High" | "Medium" | "Low";
type ValidationStatus = "Pending" | "Approved" | "Rejected" | null;

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

// ── Mock Data ──────────────────────────────────────────────────────────────

const TODAY = new Date();
const d = (offset: number) => {
  const dt = new Date(TODAY);
  dt.setDate(dt.getDate() + offset);
  return dt.toISOString().split("T")[0];
};

export const EXEC_MOCK_ACTIONS: ExecAction[] = [
  {
    id: "cap-001", title: "Document corrective action for temp excursion — med fridge #3",
    standard: "EC.02.05.07", department: "Pharmacy", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "Maria Chen", priority: "Critical", status: "Open",
    createdAt: d(-21), dueDate: d(-4), closedAt: undefined,
    daysOpen: 21, daysOverdue: 4, validationStatus: null,
  },
  {
    id: "cap-002", title: "Secure oxygen cylinders in procedure room 2 with approved brackets",
    standard: "EC.02.06.01", department: "Perioperative", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "James Okafor", priority: "Critical", status: "In Progress",
    createdAt: d(-14), dueDate: d(-2), closedAt: undefined,
    daysOpen: 14, daysOverdue: 2, validationStatus: null,
  },
  {
    id: "cap-003", title: "Replace extension cord used as permanent wiring at nurse station B",
    standard: "EC.02.05.01", department: "Nursing", facility: "Orthopedic Hospital of Wisconsin",
    owner: "Priya Nair", priority: "High", status: "Open",
    createdAt: d(-10), dueDate: d(4), closedAt: undefined,
    daysOpen: 10, daysOverdue: 0, validationStatus: null,
  },
  {
    id: "cap-004", title: "Update blanket warmer logs to document temp range and corrective steps",
    standard: "EC.02.05.07", department: "Perioperative", facility: "Ascension SE Wisconsin – Franklin",
    owner: "Derek Walsh", priority: "High", status: "Pending Validation",
    createdAt: d(-18), dueDate: d(7), closedAt: undefined,
    daysOpen: 18, daysOverdue: 0, validationStatus: "Pending",
  },
  {
    id: "cap-005", title: "Attach current PM sticker to EKG machine in cardiology suite",
    standard: "EC.02.04.01", department: "Cardiology", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "Sandra Brooks", priority: "Medium", status: "Closed",
    createdAt: d(-30), dueDate: d(-5), closedAt: d(-3),
    daysOpen: 27, daysOverdue: 0, validationStatus: "Approved",
  },
  {
    id: "cap-006", title: "Post hand hygiene compliance data in staff break room",
    standard: "IC.02.01.01", department: "Infection Control", facility: "Orthopedic Hospital of Wisconsin",
    owner: "Tom Reyes", priority: "Medium", status: "Open",
    createdAt: d(-7), dueDate: d(17), closedAt: undefined,
    daysOpen: 7, daysOverdue: 0, validationStatus: null,
  },
  {
    id: "cap-007", title: "Complete fire drill documentation for Q1 — missing patient count signatures",
    standard: "EC.02.03.03", department: "Facilities", facility: "Ascension SE Wisconsin – Elmbrook",
    owner: "Linda Park", priority: "Low", status: "Closed",
    createdAt: d(-45), dueDate: d(-18), closedAt: d(-20),
    daysOpen: 25, daysOverdue: 0, validationStatus: "Approved",
  },
  {
    id: "cap-008", title: "Reconcile missing entries in medication administration record for unit 3B",
    standard: "RC.02.01.01", department: "Nursing", facility: "Ascension SE Wisconsin – Franklin",
    owner: "Yolanda Morris", priority: "Critical", status: "Open",
    createdAt: d(-5), dueDate: d(1), closedAt: undefined,
    daysOpen: 5, daysOverdue: 0, validationStatus: null,
  },
  {
    id: "cap-009", title: "Resolve expired credentials on file for two contracted physicians",
    standard: "HR.01.05.03", department: "Medical Staff Office", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "Grace Patel", priority: "High", status: "In Progress",
    createdAt: d(-12), dueDate: d(-1), closedAt: undefined,
    daysOpen: 12, daysOverdue: 1, validationStatus: null,
  },
  {
    id: "cap-010", title: "Update fire extinguisher inspection tags — 3 expired in OR corridor",
    standard: "EC.02.03.05", department: "Facilities", facility: "Orthopedic Hospital of Wisconsin",
    owner: "Marcus Webb", priority: "Medium", status: "Closed",
    createdAt: d(-38), dueDate: d(-10), closedAt: d(-12),
    daysOpen: 26, daysOverdue: 0, validationStatus: "Approved",
  },
  {
    id: "cap-011", title: "Train staff on updated restraint use policy — 6 staff not yet complete",
    standard: "PC.03.05.01", department: "Nursing", facility: "Ascension SE Wisconsin – Elmbrook",
    owner: "Rachel Kim", priority: "High", status: "In Progress",
    createdAt: d(-9), dueDate: d(5), closedAt: undefined,
    daysOpen: 9, daysOverdue: 0, validationStatus: null,
  },
  {
    id: "cap-012", title: "Document informed consent variance for elective case on 4/28",
    standard: "RI.01.03.01", department: "Perioperative", facility: "Midwest Orthopedic Specialty Hospital",
    owner: "James Okafor", priority: "Critical", status: "Open",
    createdAt: d(-6), dueDate: d(-1), closedAt: undefined,
    daysOpen: 6, daysOverdue: 1, validationStatus: null,
  },
];

// ── Trend Data (last 8 weeks) ──────────────────────────────────────────────

function buildTrendData(actions: ExecAction[]) {
  const weeks: { week: string; opened: number; closed: number }[] = [];
  for (let w = 7; w >= 0; w--) {
    const weekStart = startOfWeek(subWeeks(TODAY, w));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    const label = format(weekStart, "MMM d");
    const opened = actions.filter((a) => {
      const c = parseISO(a.createdAt);
      return c >= weekStart && c <= weekEnd;
    }).length;
    const closed = actions.filter((a) => {
      if (!a.closedAt) return false;
      const c = parseISO(a.closedAt);
      return c >= weekStart && c <= weekEnd;
    }).length;
    weeks.push({ week: label, opened, closed });
  }
  return weeks;
}

// ── KPI Calculations ───────────────────────────────────────────────────────

function calcKpis(actions: ExecAction[]) {
  const open = actions.filter((a) => a.status !== "Closed").length;
  const overdue = actions.filter((a) => a.daysOverdue > 0).length;
  const now = new Date();
  const closedThisMonth = actions.filter((a) => {
    if (!a.closedAt) return false;
    const c = parseISO(a.closedAt);
    return c.getMonth() === now.getMonth() && c.getFullYear() === now.getFullYear();
  }).length;
  const highPriorityOpen = actions.filter(
    (a) => a.status !== "Closed" && (a.priority === "Critical" || a.priority === "High")
  ).length;
  const closedActions = actions.filter((a) => a.closedAt);
  const avgDaysToClose = closedActions.length
    ? Math.round(closedActions.reduce((acc, a) => acc + a.daysOpen, 0) / closedActions.length)
    : 0;
  return { open, overdue, closedThisMonth, highPriorityOpen, avgDaysToClose };
}

// ── Dept Breakdown ─────────────────────────────────────────────────────────

function buildDeptBreakdown(actions: ExecAction[]) {
  const map: Record<string, { open: number; overdue: number; highPri: number }> = {};
  for (const a of actions) {
    if (!map[a.department]) map[a.department] = { open: 0, overdue: 0, highPri: 0 };
    if (a.status !== "Closed") map[a.department].open++;
    if (a.daysOverdue > 0) map[a.department].overdue++;
    if (a.status !== "Closed" && (a.priority === "Critical" || a.priority === "High"))
      map[a.department].highPri++;
  }
  return Object.entries(map)
    .map(([dept, stats]) => ({ dept, ...stats }))
    .sort((a, b) => b.open - a.open);
}

// ── Needs Attention Sort ───────────────────────────────────────────────────

const PRIORITY_WEIGHT: Record<ActionPriority, number> = { Critical: 4, High: 3, Medium: 2, Low: 1 };

function sortForAttention(actions: ExecAction[]) {
  return [...actions]
    .filter((a) => a.status !== "Closed")
    .sort((a, b) => {
      if (b.daysOverdue !== a.daysOverdue) return b.daysOverdue - a.daysOverdue;
      if (PRIORITY_WEIGHT[b.priority] !== PRIORITY_WEIGHT[a.priority])
        return PRIORITY_WEIGHT[b.priority] - PRIORITY_WEIGHT[a.priority];
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

// ── Export Helpers ─────────────────────────────────────────────────────────

function exportCsv(actions: ExecAction[]) {
  const headers = ["ID", "Title", "Standard", "Department", "Facility", "Owner", "Priority", "Status", "Due Date", "Days Open", "Days Overdue"];
  const rows = actions.map((a) => [
    a.id, `"${a.title}"`, a.standard, a.department, a.facility, a.owner,
    a.priority, a.status, a.dueDate, a.daysOpen, a.daysOverdue,
  ]);
  const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `executive-report-${format(TODAY, "yyyy-MM-dd")}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportPdf() {
  window.print();
}

// ── Role Gate ──────────────────────────────────────────────────────────────

function canViewReport(user: { isAdmin?: boolean; roleId?: string | null } | null) {
  if (!user) return false;
  if (user.isAdmin) return true;
  const role = getRoleConfig(user.roleId);
  return role?.reportingScope === "enterprise" || role?.reportingScope === "own_plus_all";
}

// ── Main Page ──────────────────────────────────────────────────────────────

const ALL_FACILITIES = ["All Facilities", ...Array.from(new Set(EXEC_MOCK_ACTIONS.map((a) => a.facility)))];
const ALL_DEPARTMENTS = ["All Departments", ...Array.from(new Set(EXEC_MOCK_ACTIONS.map((a) => a.department))).sort()];
const ALL_STATUSES: (ActionStatus | "All")[] = ["All", "Open", "In Progress", "Pending Validation", "Closed"];
const ALL_PRIORITIES: (ActionPriority | "All")[] = ["All", "Critical", "High", "Medium", "Low"];

export default function ExecutiveReportPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const [facility, setFacility] = useState("All Facilities");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState<ActionStatus | "All">("All");
  const [priority, setPriority] = useState<ActionPriority | "All">("All");

  const filtered = useMemo(() => {
    return EXEC_MOCK_ACTIONS.filter((a) => {
      if (facility !== "All Facilities" && a.facility !== facility) return false;
      if (department !== "All Departments" && a.department !== department) return false;
      if (status !== "All" && a.status !== status) return false;
      if (priority !== "All" && a.priority !== priority) return false;
      return true;
    });
  }, [facility, department, status, priority]);

  const kpis = useMemo(() => calcKpis(filtered), [filtered]);
  const trendData = useMemo(() => buildTrendData(filtered), [filtered]);
  const deptBreakdown = useMemo(() => buildDeptBreakdown(filtered), [filtered]);
  const attentionList = useMemo(() => sortForAttention(filtered), [filtered]);

  const hasFilters = facility !== "All Facilities" || department !== "All Departments" || status !== "All" || priority !== "All";

  // ── Role Gate ──
  if (!canViewReport(user)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-sm text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-destructive/15 flex items-center justify-center">
            <AlertTriangle size={28} className="text-destructive" />
          </div>
          <h2 className="text-xl font-bold" data-testid="text-access-denied">Access Restricted</h2>
          <p className="text-sm text-muted-foreground">
            This report is available to Admin, Compliance Officer, and Leadership roles only.
          </p>
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
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
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
            <Button
              variant="outline" size="sm"
              onClick={() => exportCsv(filtered)}
              data-testid="button-export-csv"
            >
              <Download size={13} className="mr-1.5" /> CSV
            </Button>
            <Button
              variant="outline" size="sm"
              onClick={exportPdf}
              data-testid="button-export-pdf"
            >
              <Printer size={13} className="mr-1.5" /> PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-6 flex flex-col gap-6">

        {/* ── Filters ── */}
        <div className="flex flex-wrap gap-2 items-center print:hidden" data-testid="container-filters">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold mr-1">
            <Filter size={12} /> Filters:
          </div>
          <Select value={facility} onValueChange={setFacility}>
            <SelectTrigger className="h-8 text-xs w-52" data-testid="select-facility">
              <Building2 size={11} className="mr-1.5 text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ALL_FACILITIES.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="h-8 text-xs w-44" data-testid="select-department">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ALL_DEPARTMENTS.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={status} onValueChange={(v) => setStatus(v as ActionStatus | "All")}>
            <SelectTrigger className="h-8 text-xs w-40" data-testid="select-status">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              {ALL_STATUSES.map((s) => <SelectItem key={s} value={s}>{s === "All" ? "All Statuses" : s}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={priority} onValueChange={(v) => setPriority(v as ActionPriority | "All")}>
            <SelectTrigger className="h-8 text-xs w-36" data-testid="select-priority">
              <Flag size={11} className="mr-1.5 text-muted-foreground" />
              <SelectValue placeholder="All Priorities" />
            </SelectTrigger>
            <SelectContent>
              {ALL_PRIORITIES.map((p) => <SelectItem key={p} value={p}>{p === "All" ? "All Priorities" : p}</SelectItem>)}
            </SelectContent>
          </Select>
          {hasFilters && (
            <button
              onClick={() => { setFacility("All Facilities"); setDepartment("All Departments"); setStatus("All"); setPriority("All"); }}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              data-testid="button-clear-filters"
            >
              <X size={11} /> Clear all
            </button>
          )}
        </div>

        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3" data-testid="container-kpis">
          {[
            { label: "Open Actions", value: kpis.open, icon: Circle, color: "text-blue-400", testid: "kpi-open" },
            { label: "Overdue", value: kpis.overdue, icon: AlertTriangle, color: "text-destructive", testid: "kpi-overdue" },
            { label: "Closed This Month", value: kpis.closedThisMonth, icon: CheckCircle2, color: "text-green-400", testid: "kpi-closed-month" },
            { label: "High Priority Open", value: kpis.highPriorityOpen, icon: Flag, color: "text-orange-400", testid: "kpi-high-priority" },
            { label: "Avg Days to Close", value: kpis.avgDaysToClose, icon: Clock, color: "text-purple-400", testid: "kpi-avg-days", suffix: "d" },
          ].map(({ label, value, icon: Icon, color, testid, suffix }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border-2 border-border bg-card p-4 flex flex-col items-center gap-1.5 text-center shadow-sm"
              data-testid={testid}
            >
              <Icon size={16} className={color} />
              <span className="text-2xl font-black">{value}{suffix}</span>
              <span className="text-[11px] text-muted-foreground font-semibold leading-tight">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Trend + Dept Breakdown ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Trend Chart */}
          <div className="rounded-2xl border-2 border-border bg-card p-5 shadow-sm" data-testid="container-trend-chart">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={15} className="text-primary" />
              <h3 className="font-bold text-sm">Actions Opened vs Closed — Last 8 Weeks</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={trendData} barGap={2} barSize={10}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="week" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.45)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.45)" }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ background: "rgba(7,22,48,0.95)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", fontSize: 12 }}
                  labelStyle={{ color: "rgba(255,255,255,0.7)", marginBottom: 4 }}
                />
                <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
                <Bar dataKey="opened" name="Opened" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} opacity={0.85} />
                <Bar dataKey="closed" name="Closed" fill="hsl(var(--chart-2))" radius={[3, 3, 0, 0]} opacity={0.85} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Dept Breakdown */}
          <div className="rounded-2xl border-2 border-border bg-card p-5 shadow-sm" data-testid="container-dept-breakdown">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={15} className="text-primary" />
              <h3 className="font-bold text-sm">Open Actions by Department</h3>
            </div>
            <div className="flex flex-col gap-1.5 overflow-auto max-h-[220px]">
              <div className="grid grid-cols-4 text-[10px] font-bold uppercase tracking-wide text-muted-foreground pb-1.5 border-b border-border px-1">
                <span className="col-span-2">Department</span>
                <span className="text-center">Open</span>
                <span className="text-center">Overdue</span>
              </div>
              {deptBreakdown.map(({ dept, open, overdue, highPri }) => (
                <div key={dept} className="grid grid-cols-4 text-xs px-1 py-1.5 rounded-lg hover:bg-white/5 transition-colors" data-testid={`row-dept-${dept}`}>
                  <span className="col-span-2 font-medium truncate pr-2">{dept}</span>
                  <span className="text-center font-bold text-blue-400">{open}</span>
                  <span className={`text-center font-bold ${overdue > 0 ? "text-destructive" : "text-muted-foreground"}`}>
                    {overdue > 0 ? overdue : "—"}
                  </span>
                </div>
              ))}
              {deptBreakdown.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-6">No data for current filters</p>
              )}
            </div>
          </div>
        </div>

        {/* ── Needs Attention Table ── */}
        <div className="rounded-2xl border-2 border-border bg-card shadow-sm overflow-hidden" data-testid="container-needs-attention">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div className="flex items-center gap-2">
              <AlertTriangle size={15} className="text-destructive" />
              <h3 className="font-bold text-sm">Needs Attention</h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-destructive/15 text-destructive border border-destructive/25">
                {attentionList.length} open
              </span>
            </div>
            <Button variant="outline" size="sm" className="text-xs" onClick={() => setLocation("/corrective-actions")} data-testid="button-view-all-actions">
              View Action Plan <ChevronRight size={13} className="ml-1" />
            </Button>
          </div>

          {/* Table header */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs" data-testid="table-needs-attention">
              <thead>
                <tr className="border-b border-border/60 text-muted-foreground font-bold uppercase tracking-wide text-[10px]">
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
                    <td colSpan={8} className="text-center py-10 text-muted-foreground">
                      <CheckCircle2 size={24} className="text-green-400/40 mx-auto mb-2" />
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
                    {/* Title */}
                    <td className="px-5 py-3 max-w-[240px]">
                      <p className="font-semibold leading-snug line-clamp-2" data-testid={`text-title-${action.id}`}>{action.title}</p>
                      <p className="text-muted-foreground mt-0.5 text-[10px]">{action.standard}</p>
                    </td>
                    {/* Dept */}
                    <td className="px-3 py-3 hidden sm:table-cell text-muted-foreground whitespace-nowrap" data-testid={`text-dept-${action.id}`}>
                      {action.department}
                    </td>
                    {/* Owner */}
                    <td className="px-3 py-3 hidden md:table-cell text-muted-foreground whitespace-nowrap" data-testid={`text-owner-${action.id}`}>
                      {action.owner}
                    </td>
                    {/* Priority */}
                    <td className="px-3 py-3 text-center">
                      <span className={`font-bold ${priorityColor(action.priority)}`} data-testid={`text-priority-${action.id}`}>
                        {action.priority}
                      </span>
                    </td>
                    {/* Due */}
                    <td className={`px-3 py-3 text-center hidden sm:table-cell whitespace-nowrap font-semibold ${action.daysOverdue > 0 ? "text-destructive" : "text-muted-foreground"}`} data-testid={`text-due-${action.id}`}>
                      {format(parseISO(action.dueDate), "MMM d")}
                    </td>
                    {/* Status */}
                    <td className="px-3 py-3 text-center">
                      <span className="inline-flex items-center justify-center gap-1 whitespace-nowrap" data-testid={`text-status-${action.id}`}>
                        {statusIcon(action.status)}
                        <span className="hidden lg:inline">{action.status}</span>
                      </span>
                    </td>
                    {/* Days Overdue */}
                    <td className="px-3 py-3 text-center" data-testid={`text-overdue-days-${action.id}`}>
                      {action.daysOverdue > 0 ? (
                        <span className="font-bold text-destructive">{action.daysOverdue}d</span>
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                    {/* Drill-down */}
                    <td className="px-3 py-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-[11px] px-2.5"
                        onClick={() => setLocation("/corrective-actions")}
                        data-testid={`button-drilldown-${action.id}`}
                      >
                        View <ChevronRight size={11} className="ml-0.5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
