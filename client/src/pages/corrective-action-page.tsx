import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Plus, ClipboardCheck, AlertTriangle, CheckCircle2,
  Clock, X, Calendar, User, Building2,
  FileText, Flag, StickyNote, Circle, Info, FlaskConical, Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useFacilityAuth } from "@/lib/facility-auth";
import { auditLog } from "@/lib/audit-log";
import { DEMO_CORRECTIVE_ACTIONS } from "@/data/demoCorrectiveActions";

// ── Types ──────────────────────────────────────────────────────────────────

export type ActionStatus = "Open" | "In Progress" | "Awaiting Verification" | "Closed";
export type ActionPriority = "Critical" | "High" | "Medium" | "Low";

export interface CorrectiveAction {
  id: string;
  title: string;
  standard: string;
  department: string;
  owner: string;
  dueDate: string;
  status: ActionStatus;
  priority: ActionPriority;
  facilityId: string;
  facilityName: string;
  notes?: string;
  isDemo?: boolean;
}

interface CreateActionForm {
  title: string;
  standard: string;
  department: string;
  owner: string;
  dueDate: string;
  priority: ActionPriority;
  notes: string;
}

// ── Data Mode Toggle ────────────────────────────────────────────────────────
// This is the single source of truth for Demo vs Live data mode.
// To connect to role-based permissions or admin settings later,
// replace this local useState with a context value or API flag.

type DataMode = "demo" | "live";

// ── Live Data Source ────────────────────────────────────────────────────────
// In Live mode, the page reads from `liveActions` state (initially empty).
// Connect to a real backend by replacing this with a TanStack Query fetch
// from an API endpoint such as GET /api/corrective-actions.
// No fake/synthetic data is ever injected in Live mode.

const INITIAL_LIVE_ACTIONS: CorrectiveAction[] = [];

// ── Constants ──────────────────────────────────────────────────────────────

const ALL_STATUSES: ActionStatus[] = ["Open", "In Progress", "Awaiting Verification", "Closed"];

const DEPARTMENTS = [
  "Pharmacy", "Perioperative", "Nursing", "Cardiology",
  "Infection Control", "Facilities", "Administration", "Radiology",
  "Laboratory", "Biomedical", "Quality", "Medical Staff Office",
];

const STANDARDS = [
  "EC.02.05.07", "EC.02.06.01", "EC.02.05.01", "EC.02.04.01",
  "IC.02.01.01", "EC.02.03.03", "RC.02.01.01", "HR.01.05.03",
  "AAAHC 8.I.C", "AAAHC 5.B", "CMS §482.15", "PI.01.01.01",
];

// ── Helpers ────────────────────────────────────────────────────────────────

function statusConfig(status: ActionStatus) {
  switch (status) {
    case "Open":
      return { color: "text-blue-400", bg: "bg-blue-500/15 border-blue-500/25", icon: Circle };
    case "In Progress":
      return { color: "text-amber-400", bg: "bg-amber-500/15 border-amber-500/25", icon: Clock };
    case "Awaiting Verification":
      return { color: "text-purple-400", bg: "bg-purple-500/15 border-purple-500/25", icon: ClipboardCheck };
    case "Closed":
      return { color: "text-green-400", bg: "bg-green-500/15 border-green-500/25", icon: CheckCircle2 };
  }
}

function priorityConfig(priority: ActionPriority) {
  switch (priority) {
    case "Critical":
      return { color: "text-red-400", bg: "bg-red-500/15 border-red-500/25" };
    case "High":
      return { color: "text-orange-400", bg: "bg-orange-500/15 border-orange-500/25" };
    case "Medium":
      return { color: "text-amber-400", bg: "bg-amber-500/15 border-amber-500/25" };
    case "Low":
      return { color: "text-muted-foreground", bg: "bg-muted/40 border-border" };
  }
}

function isOverdue(action: CorrectiveAction) {
  return action.status !== "Closed" && new Date(action.dueDate) < new Date();
}

function formatDate(iso: string) {
  return format(new Date(iso), "MMM d, yyyy");
}

// ── How to Read This Box ────────────────────────────────────────────────────
// Rendered in BOTH Demo and Live modes near the top of the page.

function HowToReadBox({ dataMode }: { dataMode: DataMode }) {
  const [open, setOpen] = useState(false);
  const isDemo = dataMode === "demo";
  return (
    <div
      className={`rounded-xl border overflow-hidden transition-colors ${
        isDemo
          ? "border-amber-500/30 bg-amber-500/5 border-l-4 border-l-amber-500/60"
          : "border-primary/20 bg-primary/5 border-l-4 border-l-primary/50"
      }`}
      data-testid="container-how-to-read"
    >
      <button
        className="w-full flex items-center gap-2.5 px-4 py-3 text-left hover:bg-white/5 transition-colors"
        onClick={() => setOpen((v) => !v)}
        data-testid="button-toggle-how-to-read"
      >
        <Info size={15} className={isDemo ? "text-amber-400 flex-shrink-0" : "text-primary flex-shrink-0"} />
        <span className="text-sm font-semibold">How to read this tracker</span>
        <span className="ml-auto text-xs text-muted-foreground">{open ? "Hide" : "Show"}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 flex flex-col gap-2 text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
              <p>Each card is one corrective action created from a compliance gap.</p>
              <ul className="space-y-1.5 pl-1">
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[110px]">Priority</span>
                  <span>How serious the issue is — Critical requires immediate attention.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[110px]">Status</span>
                  <span>Where the action is in the workflow:</span>
                </li>
              </ul>
              <div className="pl-[118px] space-y-1">
                {[
                  ["Open", "Identified but not yet started."],
                  ["In Progress", "Being actively worked on."],
                  ["Awaiting Verification", "Fix completed — waiting for supervisor or leader confirmation."],
                  ["Closed", "Verified and completed."],
                ].map(([s, d]) => (
                  <div key={s} className="flex gap-1.5">
                    <span className="font-semibold text-foreground/80">{s}</span>
                    <span className="text-muted-foreground">— {d}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-1.5 pl-1 mt-1">
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[110px]">Owner</span>
                  <span>The responsible role — not necessarily a named individual.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[110px]">Due date</span>
                  <span>When the action should be completed.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[110px]">Standard</span>
                  <span>The accreditation or regulatory reference linked to the issue.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Create Action Form ─────────────────────────────────────────────────────

function CreateActionDialog({
  open, onClose, onSave, defaultFacilityId, defaultFacilityName,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (action: CorrectiveAction) => void;
  defaultFacilityId: string;
  defaultFacilityName: string;
}) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<CreateActionForm>({
    defaultValues: { title: "", standard: "", department: "", owner: "", dueDate: "", priority: "Medium", notes: "" },
  });
  const priority = watch("priority");
  const department = watch("department");
  const standard = watch("standard");

  function onSubmit(data: CreateActionForm) {
    const newAction: CorrectiveAction = {
      id: `cap-${Date.now()}`,
      title: data.title,
      standard: data.standard,
      department: data.department,
      owner: data.owner,
      dueDate: data.dueDate,
      status: "Open",
      priority: data.priority,
      facilityId: defaultFacilityId,
      facilityName: defaultFacilityName,
      notes: data.notes,
    };
    onSave(newAction);
    reset();
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { onClose(); reset(); } }}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto" data-testid="dialog-create-action">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ClipboardCheck size={18} className="text-primary" />
            Create Corrective Action
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <FileText size={13} className="text-muted-foreground" /> Action Title
            </label>
            <input
              {...register("title", { required: true })}
              placeholder="Describe the corrective action..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-action-title"
            />
            {errors.title && <span className="text-xs text-destructive">Required</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <ClipboardCheck size={13} className="text-muted-foreground" /> Related Standard
            </label>
            <Select value={standard} onValueChange={(v) => setValue("standard", v)}>
              <SelectTrigger className="text-sm" data-testid="select-standard">
                <SelectValue placeholder="Select standard..." />
              </SelectTrigger>
              <SelectContent>
                {STANDARDS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <Building2 size={13} className="text-muted-foreground" /> Department
            </label>
            <Select value={department} onValueChange={(v) => setValue("department", v)}>
              <SelectTrigger className="text-sm" data-testid="select-department">
                <SelectValue placeholder="Select department..." />
              </SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <User size={13} className="text-muted-foreground" /> Owner (role or person)
            </label>
            <input
              {...register("owner", { required: true })}
              placeholder="e.g. Nurse Manager A, Pharmacy Lead..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-action-owner"
            />
            {errors.owner && <span className="text-xs text-destructive">Required</span>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-1.5">
                <Calendar size={13} className="text-muted-foreground" /> Due Date
              </label>
              <input
                type="date"
                {...register("dueDate", { required: true })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-action-due-date"
              />
              {errors.dueDate && <span className="text-xs text-destructive">Required</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-1.5">
                <Flag size={13} className="text-muted-foreground" /> Priority
              </label>
              <Select value={priority} onValueChange={(v) => setValue("priority", v as ActionPriority)}>
                <SelectTrigger className="text-sm" data-testid="select-priority">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(["Critical", "High", "Medium", "Low"] as ActionPriority[]).map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <StickyNote size={13} className="text-muted-foreground" /> Notes <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <textarea
              {...register("notes")}
              rows={3}
              placeholder="Additional context, evidence, or instructions..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              data-testid="textarea-action-notes"
            />
          </div>
          <div className="flex gap-2 pt-1">
            <Button type="submit" className="flex-1" data-testid="button-submit-action">
              <Plus size={15} className="mr-1.5" /> Create Action
            </Button>
            <Button type="button" variant="outline" onClick={() => { onClose(); reset(); }} data-testid="button-cancel-action">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ── Action Card ────────────────────────────────────────────────────────────

function ActionCard({ action, showFacility }: { action: CorrectiveAction; showFacility: boolean }) {
  const sc = statusConfig(action.status);
  const pc = priorityConfig(action.priority);
  const overdue = isOverdue(action);
  const StatusIcon = sc.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border-2 border-border bg-card flex flex-col gap-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      data-testid={`card-action-${action.id}`}
    >
      {/* Top color bar based on priority */}
      <div className={`h-1 w-full ${action.priority === "Critical" ? "bg-red-500" : action.priority === "High" ? "bg-orange-500" : action.priority === "Medium" ? "bg-amber-400" : "bg-muted-foreground/30"}`} />

      <div className="p-4 flex flex-col gap-3">
        {/* Badge row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${pc.bg} ${pc.color}`} data-testid={`badge-priority-${action.id}`}>
            <Flag size={10} />
            Priority: {action.priority}
          </span>
          <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${sc.bg} ${sc.color}`} data-testid={`badge-status-${action.id}`}>
            <StatusIcon size={10} />
            Status: {action.status}
          </span>
          {overdue && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border bg-red-500/15 border-red-500/25 text-red-400" data-testid={`badge-overdue-${action.id}`}>
              <AlertTriangle size={10} />
              Overdue
            </span>
          )}
          {showFacility && (
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-muted/30 border-border text-muted-foreground" data-testid={`badge-facility-${action.id}`}>
              <Building2 size={9} />
              {action.facilityName}
            </span>
          )}
        </div>

        {/* Title */}
        <p className="text-sm font-semibold leading-snug" data-testid={`text-action-title-${action.id}`}>
          {action.title}
        </p>

        {/* Labeled meta grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          <div className="flex flex-col gap-0.5" data-testid={`text-action-owner-${action.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Owner</span>
            <span className="flex items-center gap-1 text-foreground/80 font-medium">
              <User size={10} className="text-muted-foreground flex-shrink-0" />
              {action.owner || "—"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-action-department-${action.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Department</span>
            <span className="flex items-center gap-1 text-foreground/80 font-medium">
              <Building2 size={10} className="text-muted-foreground flex-shrink-0" />
              {action.department || "—"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-action-due-${action.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Due</span>
            <span className={`flex items-center gap-1 font-medium ${overdue ? "text-red-400" : "text-foreground/80"}`}>
              <Calendar size={10} className="flex-shrink-0" />
              {action.dueDate ? formatDate(action.dueDate) : "—"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-action-standard-${action.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Standard</span>
            <span className="flex items-center gap-1 text-foreground/80 font-medium">
              <ClipboardCheck size={10} className="text-muted-foreground flex-shrink-0" />
              {action.standard || "—"}
            </span>
          </div>
        </div>

        {/* Notes */}
        {action.notes && (
          <p className="text-xs text-muted-foreground italic border-t border-border/50 pt-2.5 leading-relaxed" data-testid={`text-action-notes-${action.id}`}>
            {action.notes}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ── Live Mode Empty State ──────────────────────────────────────────────────

function LiveEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-14 text-center" data-testid="container-live-empty">
      <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center bg-muted/20">
        <Database size={26} className="text-muted-foreground" />
      </div>
      <div className="max-w-sm">
        <h3 className="text-base font-bold mb-2" data-testid="text-empty-title">No live corrective actions yet</h3>
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-empty-body">
          This tracker will display real corrective actions created from identified compliance gaps. Once actions are assigned, you will see the owner role, department, due date, priority, and current status here.
        </p>
      </div>
      <ul className="text-left space-y-2 text-xs text-muted-foreground max-w-xs">
        <li className="flex gap-2 items-start">
          <span className="text-primary mt-0.5">•</span>
          <span>Use this tracker to assign fixes, track progress, and verify closure.</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-primary mt-0.5">•</span>
          <span>Only real action records should appear in Live Data mode.</span>
        </li>
      </ul>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function CorrectiveActionPage() {
  const [, setLocation] = useLocation();
  const facilityAuth = useFacilityAuth();
  const { facilityId: scopedFacilityId, facilityName: scopedFacilityName, isSuperAdmin, permissions } = facilityAuth;

  // ── Data Mode Toggle ──────────────────────────────────────────────────────
  // Switch between Demo Data (synthetic sample records) and Live Data (real backend).
  // To connect to role-based permissions later, replace this with a prop or context value.
  const [dataMode, setDataMode] = useState<DataMode>("demo");

  // ── Live data state ───────────────────────────────────────────────────────
  // In Live mode, start empty. Connect to backend by replacing with a TanStack Query.
  const [liveActions, setLiveActions] = useState<CorrectiveAction[]>(INITIAL_LIVE_ACTIONS);

  const [activeStatus, setActiveStatus] = useState<ActionStatus | "All">("All");
  const [activePriority, setActivePriority] = useState<ActionPriority | "All">("All");
  const [createOpen, setCreateOpen] = useState(false);

  // Select which dataset to show based on mode
  const sourceActions = dataMode === "demo" ? DEMO_CORRECTIVE_ACTIONS : liveActions;

  // Facility-scoped base list — in demo mode, show all demo actions; in live, scope by facility
  const facilityActions = useMemo(() => {
    if (dataMode === "demo") return sourceActions;
    if (isSuperAdmin) return sourceActions;
    if (!scopedFacilityId) return [];
    return sourceActions.filter((a) => a.facilityId === scopedFacilityId);
  }, [sourceActions, dataMode, isSuperAdmin, scopedFacilityId]);

  const openCount = facilityActions.filter((a) => a.status === "Open").length;
  const inProgressCount = facilityActions.filter((a) => a.status === "In Progress").length;
  const awaitingCount = facilityActions.filter((a) => a.status === "Awaiting Verification").length;
  const closedCount = facilityActions.filter((a) => a.status === "Closed").length;
  const overdueCount = facilityActions.filter(isOverdue).length;

  const filtered = facilityActions.filter((a) => {
    const matchStatus = activeStatus === "All" || a.status === activeStatus;
    const matchPriority = activePriority === "All" || a.priority === activePriority;
    return matchStatus && matchPriority;
  });

  function handleSave(action: CorrectiveAction) {
    setLiveActions((prev) => [action, ...prev]);
    auditLog({
      userId: facilityAuth.user?.id ?? null,
      role: facilityAuth.facilityRole,
      facilityId: scopedFacilityId,
      facilityName: scopedFacilityName,
      action: "corrective_action_created",
      meta: { actionId: action.id, priority: action.priority },
    });
  }

  const showFacility = isSuperAdmin && dataMode !== "demo";

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Header ── */}
      <div className="sticky top-[58px] z-40 border-b border-white/10" style={{ background: "rgba(7,22,48,0.88)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <ClipboardCheck size={16} className="text-primary flex-shrink-0" />
              <h2 className="font-bold text-base" data-testid="text-page-title">Corrective Action Tracker</h2>
              {dataMode === "demo" ? (
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/40 bg-amber-500/15 text-amber-300"
                  data-testid="badge-mode-demo"
                >
                  <FlaskConical size={9} />
                  Demo Data
                </span>
              ) : (
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/40 bg-green-500/15 text-green-400"
                  data-testid="badge-mode-live"
                >
                  <Database size={9} />
                  Live Data
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground truncate" data-testid="text-facility-scope">
              {dataMode === "demo" ? "Sample data mode" : scopedFacilityName} &middot; Assign fixes, track progress, verify closure
            </p>
          </div>
          {permissions.canCreateActions && dataMode === "live" && (
            <Button size="sm" onClick={() => setCreateOpen(true)} data-testid="button-create-action-header">
              <Plus size={14} className="mr-1.5" /> Create Action
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-5 flex flex-col gap-5">

        {/* ── Demo / Live Toggle ── */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-1" data-testid="container-data-mode-toggle">
            <button
              onClick={() => { setDataMode("demo"); setActiveStatus("All"); setActivePriority("All"); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                dataMode === "demo"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="button-mode-demo"
            >
              <FlaskConical size={15} />
              Demo Data
            </button>
            <button
              onClick={() => { setDataMode("live"); setActiveStatus("All"); setActivePriority("All"); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                dataMode === "live"
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="button-mode-live"
            >
              <Database size={15} />
              Live Data
            </button>
          </div>

          {/* Demo mode notice */}
          {dataMode === "demo" && (
            <div className="flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/8 px-3 py-2" data-testid="banner-demo-mode">
              <FlaskConical size={13} className="text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-amber-300">Demo Data</span>
                <span className="text-xs text-amber-300/70 ml-2">Sample corrective actions shown for demonstration purposes only.</span>
              </div>
            </div>
          )}
        </div>

        {/* ── How to Read This ── */}
        <HowToReadBox dataMode={dataMode} />

        {/* ── Stat Summary — always visible, shows 0s when live is empty ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" data-testid="container-stats">
          {[
            { label: "Open", count: openCount, icon: Circle, color: "text-blue-400" },
            { label: "In Progress", count: inProgressCount, icon: Clock, color: "text-amber-400" },
            { label: "Awaiting Verification", count: awaitingCount, icon: ClipboardCheck, color: "text-purple-400" },
            { label: "Closed", count: closedCount, icon: CheckCircle2, color: "text-green-400" },
          ].map(({ label, count, icon: Icon, color }) => (
            <button
              key={label}
              onClick={() => setActiveStatus(activeStatus === (label as ActionStatus) ? "All" : (label as ActionStatus))}
              className={`rounded-xl border p-3 flex flex-col items-center gap-1 transition-all text-center ${
                activeStatus === label
                  ? "border-primary/40 bg-primary/10"
                  : "border-border bg-card hover:border-primary/25"
              }`}
              data-testid={`stat-${label.toLowerCase().replace(/ /g, "-")}`}
            >
              <Icon size={15} className={color} />
              <span className="text-xl font-black">{count}</span>
              <span className="text-[10px] text-muted-foreground font-semibold leading-tight">{label}</span>
            </button>
          ))}
        </div>

        {/* Overdue callout */}
        {overdueCount > 0 && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/8 px-4 py-2.5 flex items-center gap-2.5" data-testid="banner-overdue">
            <AlertTriangle size={15} className="text-red-400 flex-shrink-0" />
            <p className="text-sm font-semibold text-red-400">
              {overdueCount} action{overdueCount > 1 ? "s are" : " is"} overdue and need immediate attention.
            </p>
          </div>
        )}

        {/* ── Filters — always visible ── */}
        <div className="flex flex-wrap gap-2 items-center" data-testid="container-filters">
          <div className="flex items-center gap-1.5 flex-wrap">
            {(["All", ...ALL_STATUSES] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s === "All" ? "All" : s as ActionStatus)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-full border transition-all ${
                  activeStatus === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40"
                }`}
                data-testid={`filter-status-${s.toLowerCase().replace(/ /g, "-")}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Select value={activePriority} onValueChange={(v) => setActivePriority(v as ActionPriority | "All")}>
              <SelectTrigger className="h-8 text-xs w-[130px]" data-testid="filter-priority">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Priorities</SelectItem>
                {(["Critical", "High", "Medium", "Low"] as ActionPriority[]).map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(activeStatus !== "All" || activePriority !== "All") && (
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setActiveStatus("All"); setActivePriority("All"); }} data-testid="button-clear-filters">
                <X size={14} />
              </Button>
            )}
          </div>
        </div>

        {/* ── Cards area: empty state (live only) or card list ── */}
        {dataMode === "live" && liveActions.length === 0 ? (
          <>
            {permissions.canCreateActions && (
              <div className="flex justify-end">
                <Button size="sm" onClick={() => setCreateOpen(true)} data-testid="button-create-action-empty">
                  <Plus size={14} className="mr-1.5" /> Create First Action
                </Button>
              </div>
            )}
            <LiveEmptyState />
          </>
        ) : (
          <div className="flex flex-col gap-3" data-testid="container-action-cards">
            {filtered.length === 0 ? (
              <div className="text-center py-10 text-muted-foreground text-sm" data-testid="text-no-results">
                No actions match your current filters.
              </div>
            ) : (
              filtered.map((action) => (
                <ActionCard key={action.id} action={action} showFacility={showFacility} />
              ))
            )}
          </div>
        )}

        {/* Filtered count */}
        {facilityActions.length > 0 && filtered.length > 0 && (
          <p className="text-center text-xs text-muted-foreground pb-4" data-testid="text-result-count">
            Showing {filtered.length} of {facilityActions.length} action{facilityActions.length !== 1 ? "s" : ""}
            {dataMode === "demo" && " (demo data)"}
          </p>
        )}
      </div>

      <CreateActionDialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSave={handleSave}
        defaultFacilityId={scopedFacilityId ?? ""}
        defaultFacilityName={scopedFacilityName ?? ""}
      />
    </div>
  );
}
