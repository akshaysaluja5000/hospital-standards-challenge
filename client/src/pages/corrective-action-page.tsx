import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Plus, ClipboardCheck, AlertTriangle, CheckCircle2,
  Clock, X, Calendar, User, BookOpen,
  StickyNote, Circle, Info, FlaskConical, Database,
  GraduationCap, ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useFacilityAuth } from "@/lib/facility-auth";
import { auditLog } from "@/lib/audit-log";
import { DEMO_REMEDIATION_PLANS } from "@/data/demoCorrectiveActions";

// ── Types ──────────────────────────────────────────────────────────────────
// Remediation plans are ONLY created when a learner scores below 70% on a
// final test / post-test. Diagnostic, practice quiz, readiness review, and
// study mode results do NOT trigger remediation.

export type PlanStatus = "Active" | "In Progress" | "Awaiting Verification" | "Completed";

export interface RemediationPlan {
  id: string;
  learnerRole: string;
  module: string;
  chapter: string;
  quizScore: number;
  remediationStep: string;
  status: PlanStatus;
  assignedDate: string;
  dueDate: string;
  facilityId: string;
  facilityName: string;
  notes?: string;
  reassessmentRequired?: boolean;
  isDemo?: boolean;
}

interface CreatePlanForm {
  chapter: string;
  learnerRole: string;
  quizScore: string;
  dueDate: string;
  notes: string;
}

// ── Data Mode Toggle ────────────────────────────────────────────────────────

type DataMode = "demo" | "live";

// ── Live Data Source ────────────────────────────────────────────────────────
// In Live mode, plans are auto-created from final test results (score < 70%).
// Manual demo creation is available in Demo mode only.
// Connect to a real backend by replacing with a TanStack Query on a
// GET /api/remediation-plans endpoint.

const INITIAL_LIVE_PLANS: RemediationPlan[] = [];

// ── Constants ──────────────────────────────────────────────────────────────

const ALL_STATUSES: PlanStatus[] = ["Active", "In Progress", "Awaiting Verification", "Completed"];

const CHAPTER_OPTIONS = [
  // Hospital — Joint Commission
  "Transport of Instruments",
  "Environment & Surfaces",
  "Clean vs. Dirty",
  "Sterile Storage",
  "Instrument Integrity",
  "Facilities & Equipment",
  "SPD & Decontamination",
  "OR & Sterile Technique",
  "Surgical Safety & Consent",
  "Patient Care & Documentation",
  "EOC & Safety Compliance",
  // ASC — AAAHC / CMS
  "ASC: Patient Rights and Responsibilities",
  "ASC: Governance",
  "ASC: Administration",
  "ASC: Quality of Care Provided",
  "ASC: Quality Management and Improvement",
  "ASC: Clinical Records and Health Information",
  "ASC: Infection Prevention and Control and Safety",
  "ASC: Facilities and Environment",
  "ASC: Anesthesia and Surgical Services",
  "ASC: Pharmaceutical Services",
];

const ROLE_OPTIONS = [
  "OR Circulating Nurse",
  "OR Scrub Tech",
  "SPD Technician",
  "Charge RN",
  "RN — Pre/Post",
  "CRNA",
  "ASC Circulating RN",
  "Infection Preventionist",
  "Biomedical Technician",
  "OR Director",
  "Quality Coordinator",
  "Compliance Officer",
];

// ── Helpers ────────────────────────────────────────────────────────────────

function statusConfig(status: PlanStatus) {
  switch (status) {
    case "Active":
      return { color: "text-blue-400", bg: "bg-blue-500/15 border-blue-500/25", icon: Circle };
    case "In Progress":
      return { color: "text-amber-400", bg: "bg-amber-500/15 border-amber-500/25", icon: Clock };
    case "Awaiting Verification":
      return { color: "text-purple-400", bg: "bg-purple-500/15 border-purple-500/25", icon: ClipboardCheck };
    case "Completed":
      return { color: "text-green-400", bg: "bg-green-500/15 border-green-500/25", icon: CheckCircle2 };
  }
}

function scoreConfig(score: number) {
  if (score >= 60) return { color: "text-amber-400", bg: "bg-amber-500/15 border-amber-500/25", label: `${score}% — Just below passing` };
  if (score >= 50) return { color: "text-orange-400", bg: "bg-orange-500/15 border-orange-500/25", label: `${score}% — Needs reinforcement` };
  return { color: "text-red-400", bg: "bg-red-500/15 border-red-500/25", label: `${score}% — Significant gap` };
}

function isOverdue(plan: RemediationPlan) {
  return plan.status !== "Completed" && new Date(plan.dueDate) < new Date();
}

function formatDate(iso: string) {
  return format(new Date(iso), "MMM d, yyyy");
}

// ── How Remediation Plans Work ──────────────────────────────────────────────

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
        <span className="text-sm font-semibold">How remediation plans work</span>
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
              <p className="font-semibold text-foreground/80">
                Remediation plans are assigned automatically when a learner scores below 70% on a final test.
              </p>
              <p className="text-amber-400/90 font-medium">
                Diagnostic quizzes, practice sessions, readiness reviews, and study mode do not trigger remediation.
                Only a final test result below 70% creates a plan.
              </p>
              <ul className="space-y-1.5 pl-1 mt-1">
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[130px]">Score</span>
                  <span>The final test score (%) that triggered this plan. Lower scores receive more intensive steps.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[130px]">Chapter</span>
                  <span>The training domain where the knowledge gap was identified.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[130px]">Remediation Step</span>
                  <span>The specific learning activity assigned from the preset library.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground font-semibold min-w-[130px]">Reassessment</span>
                  <span>Scores below 50% require a supervisor reassessment before the plan can close.</span>
                </li>
              </ul>
              <div className="pl-[138px] space-y-1 mt-0.5">
                {[
                  ["Active", "Plan assigned — not yet started."],
                  ["In Progress", "Learner is working through the assigned steps."],
                  ["Awaiting Verification", "Steps complete — waiting for supervisor confirmation."],
                  ["Completed", "Verified and finished. Learner may retake the final test."],
                ].map(([s, d]) => (
                  <div key={s} className="flex gap-1.5">
                    <span className="font-semibold text-foreground/80">{s}</span>
                    <span className="text-muted-foreground">— {d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Create Demo Remediation Form ───────────────────────────────────────────
// Demo mode only. Illustrates the remediation plan structure; not connected
// to a real final test result. Real plans are created automatically.

function CreatePlanDialog({
  open, onClose, onSave, defaultFacilityId, defaultFacilityName,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (plan: RemediationPlan) => void;
  defaultFacilityId: string;
  defaultFacilityName: string;
}) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<CreatePlanForm>({
    defaultValues: { chapter: "", learnerRole: "", quizScore: "", dueDate: "", notes: "" },
  });
  const chapter = watch("chapter");
  const learnerRole = watch("learnerRole");

  function onSubmit(data: CreatePlanForm) {
    const score = parseInt(data.quizScore, 10);
    const newPlan: RemediationPlan = {
      id: `rem-${Date.now()}`,
      learnerRole: data.learnerRole,
      module: data.chapter.startsWith("ASC:") ? "ASC (AAAHC/CMS)" : "Hospital (Joint Commission)",
      chapter: data.chapter,
      quizScore: score,
      remediationStep: score < 50
        ? "Guided Review + Checklist Verification (Reassessment Required)"
        : score < 60
        ? "Guided Review + Teach-Back"
        : "Review + Retest",
      status: "Active",
      assignedDate: new Date().toISOString().split("T")[0],
      dueDate: data.dueDate,
      facilityId: defaultFacilityId,
      facilityName: defaultFacilityName,
      notes: data.notes,
      reassessmentRequired: score < 50,
    };
    onSave(newPlan);
    reset();
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { onClose(); reset(); } }}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto" data-testid="dialog-create-plan">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap size={18} className="text-primary" />
            Create Demo Remediation
          </DialogTitle>
        </DialogHeader>
        <p className="text-xs text-muted-foreground -mt-1 mb-1 leading-relaxed">
          This creates a sample remediation plan for demonstration. In production, plans are
          created automatically when a learner scores below 70% on a final test.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-1">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <BookOpen size={13} className="text-muted-foreground" /> Chapter / Domain
            </label>
            <Select value={chapter} onValueChange={(v) => setValue("chapter", v)}>
              <SelectTrigger className="text-sm" data-testid="select-chapter">
                <SelectValue placeholder="Select chapter..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Hospital (Joint Commission)</SelectLabel>
                  {CHAPTER_OPTIONS.filter((c) => !c.startsWith("ASC:")).map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>ASC (AAAHC/CMS)</SelectLabel>
                  {CHAPTER_OPTIONS.filter((c) => c.startsWith("ASC:")).map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.chapter && <span className="text-xs text-destructive">Required</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <User size={13} className="text-muted-foreground" /> Learner Role
            </label>
            <Select value={learnerRole} onValueChange={(v) => setValue("learnerRole", v)}>
              <SelectTrigger className="text-sm" data-testid="select-learner-role">
                <SelectValue placeholder="Select role..." />
              </SelectTrigger>
              <SelectContent>
                {ROLE_OPTIONS.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.learnerRole && <span className="text-xs text-destructive">Required</span>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-1.5">
                <AlertTriangle size={13} className="text-muted-foreground" /> Final Test Score (%)
              </label>
              <input
                type="number"
                min={1}
                max={69}
                {...register("quizScore", {
                  required: true,
                  min: { value: 1, message: "Score must be at least 1" },
                  max: { value: 69, message: "Only scores below 70% trigger remediation" },
                })}
                placeholder="e.g. 62"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-quiz-score"
              />
              {errors.quizScore && <span className="text-xs text-destructive">{errors.quizScore.message || "Required"}</span>}
              <p className="text-[10px] text-muted-foreground">Must be below 70% (final test only)</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold flex items-center gap-1.5">
                <Calendar size={13} className="text-muted-foreground" /> Due Date
              </label>
              <input
                type="date"
                {...register("dueDate", { required: true })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-plan-due-date"
              />
              {errors.dueDate && <span className="text-xs text-destructive">Required</span>}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold flex items-center gap-1.5">
              <StickyNote size={13} className="text-muted-foreground" /> Notes <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <textarea
              {...register("notes")}
              rows={3}
              placeholder="Additional context or supervisor observations..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              data-testid="textarea-plan-notes"
            />
          </div>
          <div className="flex gap-2 pt-1">
            <Button type="submit" className="flex-1" data-testid="button-submit-plan">
              <Plus size={15} className="mr-1.5" /> Create Demo Remediation
            </Button>
            <Button type="button" variant="outline" onClick={() => { onClose(); reset(); }} data-testid="button-cancel-plan">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ── Remediation Plan Card ──────────────────────────────────────────────────

function PlanCard({ plan, showFacility }: { plan: RemediationPlan; showFacility: boolean }) {
  const sc = statusConfig(plan.status);
  const scoreC = scoreConfig(plan.quizScore);
  const overdue = isOverdue(plan);
  const StatusIcon = sc.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border-2 border-border bg-card flex flex-col gap-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      data-testid={`card-plan-${plan.id}`}
    >
      <div className="p-4 flex flex-col gap-3">
        {/* Badge row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${scoreC.bg} ${scoreC.color}`} data-testid={`badge-score-${plan.id}`}>
            Score: {plan.quizScore}%
          </span>
          <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${sc.bg} ${sc.color}`} data-testid={`badge-status-${plan.id}`}>
            <StatusIcon size={10} />
            {plan.status}
          </span>
          {plan.reassessmentRequired && plan.status !== "Completed" && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border bg-orange-500/15 border-orange-500/25 text-orange-400" data-testid={`badge-reassessment-${plan.id}`}>
              <ShieldAlert size={10} />
              Reassessment Required
            </span>
          )}
          {overdue && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border bg-red-500/15 border-red-500/25 text-red-400" data-testid={`badge-overdue-${plan.id}`}>
              <AlertTriangle size={10} />
              Overdue
            </span>
          )}
          {showFacility && (
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-muted/30 border-border text-muted-foreground" data-testid={`badge-facility-${plan.id}`}>
              {plan.facilityName}
            </span>
          )}
        </div>

        {/* Chapter + Step */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60 mb-0.5">{plan.chapter}</p>
          <p className="text-sm font-semibold leading-snug" data-testid={`text-plan-step-${plan.id}`}>
            {plan.remediationStep}
          </p>
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-role-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Learner Role</span>
            <span className="flex items-center gap-1 text-foreground/80 font-medium">
              <User size={10} className="text-muted-foreground flex-shrink-0" />
              {plan.learnerRole || "—"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-module-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Module</span>
            <span className="flex items-center gap-1 text-foreground/80 font-medium text-[11px]">
              {plan.module}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-due-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Due</span>
            <span className={`flex items-center gap-1 font-medium ${overdue ? "text-red-400" : "text-foreground/80"}`}>
              <Calendar size={10} className="flex-shrink-0" />
              {plan.dueDate ? formatDate(plan.dueDate) : "—"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-assigned-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Assigned</span>
            <span className="flex items-center gap-1 text-foreground/80 font-medium">
              <Calendar size={10} className="text-muted-foreground flex-shrink-0" />
              {plan.assignedDate ? formatDate(plan.assignedDate) : "—"}
            </span>
          </div>
        </div>

        {/* Notes */}
        {plan.notes && (
          <p className="text-xs text-muted-foreground italic border-t border-border/50 pt-2.5 leading-relaxed" data-testid={`text-plan-notes-${plan.id}`}>
            {plan.notes}
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
        <h3 className="text-base font-bold mb-2" data-testid="text-empty-title">No remediation plans yet</h3>
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-empty-body">
          Remediation plans appear here automatically when a learner scores below 70% on a final test.
          Practice quizzes, diagnostics, and readiness reviews do not create plans.
        </p>
      </div>
      <ul className="text-left space-y-2 text-xs text-muted-foreground max-w-xs">
        <li className="flex gap-2 items-start">
          <span className="text-primary mt-0.5">•</span>
          <span>Plans are assigned from the preset remediation library based on the score and chapter.</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-primary mt-0.5">•</span>
          <span>Scores below 50% require a supervisor reassessment before a plan can close.</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-primary mt-0.5">•</span>
          <span>Switch to Demo mode to explore sample remediation plans.</span>
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

  const [dataMode, setDataMode] = useState<DataMode>("demo");
  const [livePlans, setLivePlans] = useState<RemediationPlan[]>(INITIAL_LIVE_PLANS);
  const [activeStatus, setActiveStatus] = useState<PlanStatus | "All">("All");
  const [createOpen, setCreateOpen] = useState(false);

  const sourcePlans = dataMode === "demo" ? DEMO_REMEDIATION_PLANS : livePlans;

  const facilityPlans = useMemo(() => {
    if (dataMode === "demo") return sourcePlans;
    if (isSuperAdmin) return sourcePlans;
    if (!scopedFacilityId) return [];
    return sourcePlans.filter((p) => p.facilityId === scopedFacilityId);
  }, [sourcePlans, dataMode, isSuperAdmin, scopedFacilityId]);

  const activeCount = facilityPlans.filter((p) => p.status === "Active").length;
  const inProgressCount = facilityPlans.filter((p) => p.status === "In Progress").length;
  const awaitingCount = facilityPlans.filter((p) => p.status === "Awaiting Verification").length;
  const completedCount = facilityPlans.filter((p) => p.status === "Completed").length;
  const overdueCount = facilityPlans.filter(isOverdue).length;

  const filtered = facilityPlans.filter((p) => {
    return activeStatus === "All" || p.status === activeStatus;
  });

  function handleSave(plan: RemediationPlan) {
    setLivePlans((prev) => [plan, ...prev]);
    auditLog({
      userId: facilityAuth.user?.id ?? null,
      role: facilityAuth.facilityRole,
      facilityId: scopedFacilityId,
      facilityName: scopedFacilityName,
      action: "remediation_plan_created",
      meta: { planId: plan.id, chapter: plan.chapter, score: plan.quizScore },
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
              <GraduationCap size={16} className="text-primary flex-shrink-0" />
              <h2 className="font-bold text-base" data-testid="text-page-title">Remediation Plans</h2>
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
              {dataMode === "demo" ? "Sample data mode" : scopedFacilityName} · Final test results below 70% · Assigned from preset library
            </p>
          </div>
          {dataMode === "demo" && (
            <Button size="sm" onClick={() => setCreateOpen(true)} data-testid="button-create-plan-header">
              <Plus size={14} className="mr-1.5" /> Create Demo
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-5 flex flex-col gap-5">

        {/* ── Demo / Live Toggle ── */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-1" data-testid="container-data-mode-toggle">
            <button
              onClick={() => { setDataMode("demo"); setActiveStatus("All"); }}
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
              onClick={() => { setDataMode("live"); setActiveStatus("All"); }}
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

          {dataMode === "demo" && (
            <div className="flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/8 px-3 py-2" data-testid="banner-demo-mode">
              <FlaskConical size={13} className="text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-amber-300">Demo Data</span>
                <span className="text-xs text-amber-300/70 ml-2">
                  Sample remediation plans shown for demonstration. Real plans are created automatically when a learner scores below 70% on a final test.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ── How Remediation Plans Work ── */}
        <HowToReadBox dataMode={dataMode} />

        {/* ── Stat Summary ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" data-testid="container-stats">
          {[
            { label: "Active", count: activeCount, icon: Circle, color: "text-blue-400" },
            { label: "In Progress", count: inProgressCount, icon: Clock, color: "text-amber-400" },
            { label: "Awaiting Verification", count: awaitingCount, icon: ClipboardCheck, color: "text-purple-400" },
            { label: "Completed", count: completedCount, icon: CheckCircle2, color: "text-green-400" },
          ].map(({ label, count, icon: Icon, color }) => (
            <button
              key={label}
              onClick={() => setActiveStatus(activeStatus === (label as PlanStatus) ? "All" : (label as PlanStatus))}
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
              {overdueCount} plan{overdueCount > 1 ? "s are" : " is"} overdue and require follow-up.
            </p>
          </div>
        )}

        {/* ── Status Filters ── */}
        <div className="flex flex-wrap gap-2 items-center" data-testid="container-filters">
          <div className="flex items-center gap-1.5 flex-wrap">
            {(["All", ...ALL_STATUSES] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s === "All" ? "All" : s as PlanStatus)}
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
          {activeStatus !== "All" && (
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setActiveStatus("All")} data-testid="button-clear-filters">
              <X size={14} />
            </Button>
          )}
        </div>

        {/* ── Cards area ── */}
        {dataMode === "live" && livePlans.length === 0 ? (
          <>
            {permissions.canCreateActions && (
              <div className="flex justify-end">
                <Button size="sm" onClick={() => setCreateOpen(true)} data-testid="button-create-plan-empty">
                  <Plus size={14} className="mr-1.5" /> Create Demo Remediation
                </Button>
              </div>
            )}
            <LiveEmptyState />
          </>
        ) : (
          <div className="flex flex-col gap-3" data-testid="container-plan-cards">
            {filtered.length === 0 ? (
              <div className="text-center py-10 text-muted-foreground text-sm" data-testid="text-no-results">
                No plans match your current filters.
              </div>
            ) : (
              filtered.map((plan) => (
                <PlanCard key={plan.id} plan={plan} showFacility={showFacility} />
              ))
            )}
          </div>
        )}

        {/* Result count */}
        {facilityPlans.length > 0 && filtered.length > 0 && (
          <p className="text-center text-xs text-muted-foreground pb-4" data-testid="text-result-count">
            Showing {filtered.length} of {facilityPlans.length} plan{facilityPlans.length !== 1 ? "s" : ""}
            {dataMode === "demo" && " (demo data)"}
          </p>
        )}
      </div>

      <CreatePlanDialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSave={handleSave}
        defaultFacilityId={scopedFacilityId ?? ""}
        defaultFacilityName={scopedFacilityName ?? ""}
      />
    </div>
  );
}
