import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Plus, ClipboardCheck, AlertTriangle, CheckCircle2,
  Clock, Filter, ChevronDown, X, Calendar, User, Building2,
  FileText, Flag, StickyNote, Circle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useFacilityAuth } from "@/lib/facility-auth";
import { auditLog } from "@/lib/audit-log";

// ── Types ──────────────────────────────────────────────────────────────────

type ActionStatus = "Open" | "In Progress" | "Pending Validation" | "Closed";
type ActionPriority = "Critical" | "High" | "Medium" | "Low";

interface CorrectiveAction {
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

// ── Mock Data ──────────────────────────────────────────────────────────────
// Two facilities to prove scoped filtering:
//   facility_mosh = Midwest Orthopedic Specialty Hospital
//   facility_ohw  = Orthopedic Hospital of Wisconsin

const MOCK_ACTIONS: CorrectiveAction[] = [
  // ── facility_mosh ──────────────────────────────────────────────────────
  {
    id: "cap-001",
    title: "Document corrective action for temp excursion — med fridge #3",
    standard: "EC.02.05.07 / AAAHC 8.I.C",
    department: "Pharmacy",
    owner: "Maria Chen",
    dueDate: "2026-05-10",
    status: "Open",
    priority: "Critical",
    facilityId: "facility_mosh",
    facilityName: "Midwest Orthopedic Specialty Hospital",
    notes: "Temp log showed 42°F for 4 hours. No corrective action was documented.",
  },
  {
    id: "cap-002",
    title: "Secure oxygen cylinders in procedure room 2 with approved brackets",
    standard: "EC.02.06.01",
    department: "Perioperative",
    owner: "James Okafor",
    dueDate: "2026-05-08",
    status: "In Progress",
    priority: "Critical",
    facilityId: "facility_mosh",
    facilityName: "Midwest Orthopedic Specialty Hospital",
    notes: "Two cylinders found unsecured against wall. Bracket order placed.",
  },
  {
    id: "cap-003",
    title: "Replace extension cord used as permanent wiring at nurse station B",
    standard: "EC.02.05.01",
    department: "Nursing",
    owner: "Priya Nair",
    dueDate: "2026-05-14",
    status: "Open",
    priority: "High",
    facilityId: "facility_mosh",
    facilityName: "Midwest Orthopedic Specialty Hospital",
    notes: "",
  },
  {
    id: "cap-004",
    title: "Update blanket warmer logs to document temp range and corrective steps",
    standard: "EC.02.05.07",
    department: "Perioperative",
    owner: "Derek Walsh",
    dueDate: "2026-05-20",
    status: "Pending Validation",
    priority: "High",
    facilityId: "facility_mosh",
    facilityName: "Midwest Orthopedic Specialty Hospital",
    notes: "New log template distributed. Supervisor needs to verify compliance.",
  },
  {
    id: "cap-005",
    title: "Attach current PM sticker to EKG machine in cardiology suite",
    standard: "EC.02.04.01",
    department: "Cardiology",
    owner: "Sandra Brooks",
    dueDate: "2026-04-28",
    status: "Closed",
    priority: "Medium",
    facilityId: "facility_mosh",
    facilityName: "Midwest Orthopedic Specialty Hospital",
    notes: "Biomedical completed PM and affixed updated sticker on 4/27.",
  },
  {
    id: "cap-006",
    title: "Post hand hygiene compliance data in staff break room",
    standard: "IC.02.01.01",
    department: "Infection Control",
    owner: "Tom Reyes",
    dueDate: "2026-05-30",
    status: "Open",
    priority: "Medium",
    facilityId: "facility_mosh",
    facilityName: "Midwest Orthopedic Specialty Hospital",
    notes: "",
  },
  {
    id: "cap-007",
    title: "Complete fire drill documentation for Q1 — missing patient count signatures",
    standard: "EC.02.03.03",
    department: "Facilities",
    owner: "Linda Park",
    dueDate: "2026-04-15",
    status: "Closed",
    priority: "Low",
    facilityId: "facility_mosh",
    facilityName: "Midwest Orthopedic Specialty Hospital",
    notes: "All signatures collected and filed.",
  },

  // ── facility_demo_hospital ─────────────────────────────────────────────
  {
    id: "cap-demo-001",
    title: "Update sterile supply expiration tracking log — OR suite B",
    standard: "IC.02.02.01",
    department: "Perioperative",
    owner: "Keisha Hammond",
    dueDate: "2026-05-15",
    status: "Open",
    priority: "High",
    facilityId: "facility_demo_hospital",
    facilityName: "Demo Regional Medical Center",
    notes: "Supply log missing date entries for 3 items.",
  },
  {
    id: "cap-demo-002",
    title: "Obtain missing QAPI committee sign-off for Q1 improvement plan",
    standard: "PI.01.01.01",
    department: "Quality",
    owner: "Angela Ross",
    dueDate: "2026-05-02",
    status: "Open",
    priority: "Critical",
    facilityId: "facility_demo_hospital",
    facilityName: "Demo Regional Medical Center",
    notes: "Q1 plan submitted but committee sign-off page missing.",
  },
  {
    id: "cap-demo-003",
    title: "Correct staff credentialing file — two licenses expired last quarter",
    standard: "HR.01.05.03",
    department: "Medical Staff Office",
    owner: "Diana Cho",
    dueDate: "2026-05-06",
    status: "In Progress",
    priority: "High",
    facilityId: "facility_demo_hospital",
    facilityName: "Demo Regional Medical Center",
    notes: "MSO contacted both staff. Renewals pending.",
  },

  // ── facility_ohw ───────────────────────────────────────────────────────
  {
    id: "cap-ohw-001",
    title: "Update fire extinguisher inspection tags — 3 expired in OR corridor",
    standard: "EC.02.03.05",
    department: "Facilities",
    owner: "Marcus Webb",
    dueDate: "2026-05-12",
    status: "Open",
    priority: "High",
    facilityId: "facility_ohw",
    facilityName: "Orthopedic Hospital of Wisconsin",
    notes: "Biomedical to schedule re-inspection before 5/12.",
  },
  {
    id: "cap-ohw-002",
    title: "Train staff on updated restraint use policy — 6 staff not yet complete",
    standard: "PC.03.05.01",
    department: "Nursing",
    owner: "Rachel Kim",
    dueDate: "2026-05-18",
    status: "In Progress",
    priority: "High",
    facilityId: "facility_ohw",
    facilityName: "Orthopedic Hospital of Wisconsin",
    notes: "Online module assigned. 6 staff have not completed as of last check.",
  },
  {
    id: "cap-ohw-003",
    title: "Reconcile missing entries in medication administration record for unit 3B",
    standard: "RC.02.01.01",
    department: "Nursing",
    owner: "Yolanda Morris",
    dueDate: "2026-05-09",
    status: "Open",
    priority: "Critical",
    facilityId: "facility_ohw",
    facilityName: "Orthopedic Hospital of Wisconsin",
    notes: "Three entries missing date/time signature from April shift.",
  },
];

const ALL_STATUSES: ActionStatus[] = ["Open", "In Progress", "Pending Validation", "Closed"];

const DEPARTMENTS = [
  "Pharmacy", "Perioperative", "Nursing", "Cardiology",
  "Infection Control", "Facilities", "Administration", "Radiology", "Laboratory",
];

const STANDARDS = [
  "EC.02.05.07", "EC.02.06.01", "EC.02.05.01", "EC.02.04.01",
  "IC.02.01.01", "EC.02.03.03", "RC.02.01.01", "HR.01.05.03",
  "AAAHC 8.I.C", "AAAHC 5.B", "CMS §482.15",
];

// ── Helpers ────────────────────────────────────────────────────────────────

function statusConfig(status: ActionStatus) {
  switch (status) {
    case "Open":
      return { color: "text-blue-400", bg: "bg-blue-500/15 border-blue-500/25", icon: Circle };
    case "In Progress":
      return { color: "text-chart-4", bg: "bg-chart-4/15 border-chart-4/25", icon: Clock };
    case "Pending Validation":
      return { color: "text-purple-400", bg: "bg-purple-500/15 border-purple-500/25", icon: ClipboardCheck };
    case "Closed":
      return { color: "text-green-400", bg: "bg-green-500/15 border-green-500/25", icon: CheckCircle2 };
  }
}

function priorityConfig(priority: ActionPriority) {
  switch (priority) {
    case "Critical":
      return { color: "text-destructive", bg: "bg-destructive/15 border-destructive/25" };
    case "High":
      return { color: "text-orange-400", bg: "bg-orange-500/15 border-orange-500/25" };
    case "Medium":
      return { color: "text-chart-4", bg: "bg-chart-4/15 border-chart-4/25" };
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

// ── Create Action Form ─────────────────────────────────────────────────────

function CreateActionDialog({
  open,
  onClose,
  onSave,
  defaultFacilityId,
  defaultFacilityName,
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
          {/* Title */}
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

          {/* Standard */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <ClipboardCheck size={13} className="text-muted-foreground" /> Related Standard
            </label>
            <Select value={standard} onValueChange={(v) => setValue("standard", v)}>
              <SelectTrigger className="text-sm" data-testid="select-standard">
                <SelectValue placeholder="Select standard..." />
              </SelectTrigger>
              <SelectContent>
                {STANDARDS.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Department */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <Building2 size={13} className="text-muted-foreground" /> Department
            </label>
            <Select value={department} onValueChange={(v) => setValue("department", v)}>
              <SelectTrigger className="text-sm" data-testid="select-department">
                <SelectValue placeholder="Select department..." />
              </SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Owner */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <User size={13} className="text-muted-foreground" /> Owner
            </label>
            <input
              {...register("owner", { required: true })}
              placeholder="Responsible person or role..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-action-owner"
            />
            {errors.owner && <span className="text-xs text-destructive">Required</span>}
          </div>

          {/* Due Date + Priority row */}
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

          {/* Notes */}
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
              <Plus size={15} className="mr-1.5" />
              Create Action
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
      className="rounded-2xl border-2 border-border bg-card p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
      data-testid={`card-action-${action.id}`}
    >
      {/* Top row: priority badge + status badge */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${pc.bg} ${pc.color}`} data-testid={`badge-priority-${action.id}`}>
          <Flag size={10} />
          {action.priority}
        </span>
        <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${sc.bg} ${sc.color}`} data-testid={`badge-status-${action.id}`}>
          <StatusIcon size={10} />
          {action.status}
        </span>
        {overdue && (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border bg-destructive/15 border-destructive/25 text-destructive" data-testid={`badge-overdue-${action.id}`}>
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

      {/* Meta grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5" data-testid={`text-action-standard-${action.id}`}>
          <ClipboardCheck size={11} className="flex-shrink-0" />
          <span className="truncate">{action.standard || "—"}</span>
        </div>
        <div className="flex items-center gap-1.5" data-testid={`text-action-department-${action.id}`}>
          <Building2 size={11} className="flex-shrink-0" />
          <span className="truncate">{action.department || "—"}</span>
        </div>
        <div className="flex items-center gap-1.5" data-testid={`text-action-owner-${action.id}`}>
          <User size={11} className="flex-shrink-0" />
          <span className="truncate">{action.owner || "—"}</span>
        </div>
        <div className={`flex items-center gap-1.5 ${overdue ? "text-destructive font-semibold" : ""}`} data-testid={`text-action-due-${action.id}`}>
          <Calendar size={11} className="flex-shrink-0" />
          <span>{action.dueDate ? formatDate(action.dueDate) : "—"}</span>
        </div>
      </div>

      {/* Notes */}
      {action.notes && (
        <p className="text-xs text-muted-foreground italic border-t border-border/60 pt-2 leading-relaxed" data-testid={`text-action-notes-${action.id}`}>
          {action.notes}
        </p>
      )}
    </motion.div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function CorrectiveActionPage() {
  const [, setLocation] = useLocation();
  const facilityAuth = useFacilityAuth();
  const { facilityId: scopedFacilityId, facilityName: scopedFacilityName, isSuperAdmin, permissions } = facilityAuth;

  const [actions, setActions] = useState<CorrectiveAction[]>(MOCK_ACTIONS);
  const [activeStatus, setActiveStatus] = useState<ActionStatus | "All">("All");
  const [activePriority, setActivePriority] = useState<ActionPriority | "All">("All");
  const [createOpen, setCreateOpen] = useState(false);

  // Facility-scoped base list — CEO/admin never see another hospital's data
  const facilityActions = useMemo(() => {
    // Fail-closed: super_admin sees all; everyone else is locked to their facilityId.
    // If a non-super-admin has no facilityId, they see nothing (never leak cross-facility).
    if (isSuperAdmin) return actions;
    if (!scopedFacilityId) return [];
    return actions.filter((a) => a.facilityId === scopedFacilityId);
  }, [actions, isSuperAdmin, scopedFacilityId]);

  const openCount = facilityActions.filter((a) => a.status === "Open").length;
  const inProgressCount = facilityActions.filter((a) => a.status === "In Progress").length;
  const pendingCount = facilityActions.filter((a) => a.status === "Pending Validation").length;
  const closedCount = facilityActions.filter((a) => a.status === "Closed").length;
  const overdueCount = facilityActions.filter(isOverdue).length;

  const filtered = facilityActions.filter((a) => {
    const matchStatus = activeStatus === "All" || a.status === activeStatus;
    const matchPriority = activePriority === "All" || a.priority === activePriority;
    return matchStatus && matchPriority;
  });

  function handleSave(action: CorrectiveAction) {
    setActions((prev) => [action, ...prev]);
    auditLog({
      userId: facilityAuth.user?.id ?? null,
      role: facilityAuth.facilityRole,
      facilityId: scopedFacilityId,
      facilityName: scopedFacilityName,
      action: "corrective_action_created",
      meta: { actionId: action.id, priority: action.priority },
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Header ── */}
      <div className="sticky top-[58px] z-40 border-b border-white/10" style={{ background: "rgba(7,22,48,0.88)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <ClipboardCheck size={16} className="text-primary" />
              <h2 className="font-bold text-base" data-testid="text-page-title">Corrective Action Plan</h2>
            </div>
            <p className="text-xs text-muted-foreground truncate" data-testid="text-facility-scope">
              {scopedFacilityName} &middot; Track gaps, assign fixes, document closure
            </p>
          </div>
          {permissions.canCreateActions && (
            <Button size="sm" onClick={() => setCreateOpen(true)} data-testid="button-create-action-header">
              <Plus size={14} className="mr-1.5" />
              Create Action
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-5 flex flex-col gap-5">

        {/* ── Stat Summary ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" data-testid="container-stats">
          {[
            { label: "Open", count: openCount, icon: Circle, color: "text-blue-400" },
            { label: "In Progress", count: inProgressCount, icon: Clock, color: "text-chart-4" },
            { label: "Pending Validation", count: pendingCount, icon: ClipboardCheck, color: "text-purple-400" },
            { label: "Closed", count: closedCount, icon: CheckCircle2, color: "text-green-400" },
          ].map(({ label, count, icon: Icon, color }) => (
            <button
              key={label}
              onClick={() => setActiveStatus(activeStatus === label as ActionStatus ? "All" : label as ActionStatus)}
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
          <div className="rounded-xl border border-destructive/30 bg-destructive/8 px-4 py-2.5 flex items-center gap-2.5" data-testid="banner-overdue">
            <AlertTriangle size={15} className="text-destructive flex-shrink-0" />
            <p className="text-sm font-semibold text-destructive">
              {overdueCount} action{overdueCount > 1 ? "s are" : " is"} overdue and need immediate attention.
            </p>
          </div>
        )}

        {/* ── Filters ── */}
        <div className="flex flex-wrap gap-2 items-center" data-testid="container-filters">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
            <Filter size={12} />
            Filter:
          </div>

          {/* Status filter pills */}
          <div className="flex flex-wrap gap-1.5">
            {(["All", ...ALL_STATUSES] as (ActionStatus | "All")[]).map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s)}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all ${
                  activeStatus === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40"
                }`}
                data-testid={`filter-status-${s.toLowerCase().replace(/ /g, "-")}`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Priority filter */}
          <Select value={activePriority} onValueChange={(v) => setActivePriority(v as ActionPriority | "All")}>
            <SelectTrigger className="h-7 text-xs w-36 border-border" data-testid="select-filter-priority">
              <Flag size={11} className="mr-1 text-muted-foreground" />
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Priorities</SelectItem>
              {(["Critical", "High", "Medium", "Low"] as ActionPriority[]).map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(activeStatus !== "All" || activePriority !== "All") && (
            <button
              onClick={() => { setActiveStatus("All"); setActivePriority("All"); }}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              data-testid="button-clear-filters"
            >
              <X size={11} /> Clear
            </button>
          )}
        </div>

        {/* ── Action List ── */}
        <div className="flex flex-col gap-3" data-testid="list-actions">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-border bg-card p-10 flex flex-col items-center gap-2 text-center" data-testid="empty-state-actions">
              <ClipboardCheck size={32} className="text-muted-foreground/40" />
              <p className="text-sm font-semibold text-muted-foreground">No actions match this filter</p>
              <p className="text-xs text-muted-foreground/60">Try clearing filters or create a new action</p>
              {permissions.canCreateActions && (
                <Button size="sm" className="mt-2" onClick={() => setCreateOpen(true)} data-testid="button-create-from-empty">
                  <Plus size={13} className="mr-1" /> Create Action
                </Button>
              )}
            </div>
          ) : (
            filtered.map((action) => (
              <ActionCard key={action.id} action={action} showFacility={isSuperAdmin} />
            ))
          )}
        </div>
      </div>

      {/* ── Create Dialog ── */}
      <CreateActionDialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSave={handleSave}
        defaultFacilityId={scopedFacilityId ?? "facility_mosh"}
        defaultFacilityName={scopedFacilityName}
      />
    </div>
  );
}
