import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Plus, AlertTriangle, CheckCircle2,
  Clock, X, Calendar, Info, FlaskConical, Database,
  GraduationCap, ShieldCheck, User, ClipboardList,
  Hospital, Stethoscope,
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
// Remediation plans are assigned ONLY when a learner scores below the required
// passing threshold on a final test. Diagnostic, practice quiz, readiness
// review, and study mode results do NOT trigger remediation.

export type PlanStatus = "Assigned" | "In Progress" | "Completed" | "Verified";

export interface RemediationPlan {
  id: string;
  learner: string;
  facilityType: "Hospital" | "ASC";
  category: string;
  assessmentType: string;
  quizScore: number;
  passingThreshold: number;
  remediationStep: string;
  status: PlanStatus;
  assignedDate: string;
  dueDate: string;
  facilityId: string;
  facilityName: string;
  assignedBy?: string;
  verifiedBy?: string;
  notes?: string;
  isDemo?: boolean;
}

interface CreatePlanForm {
  facilityType: "Hospital" | "ASC" | "";
  category: string;
  learner: string;
  quizScore: string;
  dueDate: string;
  assignedBy: string;
  notes: string;
}

type DataMode = "demo" | "live";

const INITIAL_LIVE_PLANS: RemediationPlan[] = [];

// ── Category Options ────────────────────────────────────────────────────────

const HOSPITAL_CATEGORIES = [
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
];

const ASC_CATEGORIES = [
  "Patient Rights and Responsibilities",
  "Governance",
  "Credentialing and Privileging",
  "Administration",
  "Quality of Care Provided",
  "Quality Management and Improvement",
  "Clinical Records and Health Information",
  "Infection Prevention and Control and Safety",
  "Facilities and Environment",
  "Anesthesia and Surgical Services",
  "Surgical and Related Services",
  "Pharmaceutical Services",
];

const ALL_STATUSES: PlanStatus[] = ["Assigned", "In Progress", "Completed", "Verified"];

const PASSING_THRESHOLD = 70;

// ── Helpers ────────────────────────────────────────────────────────────────

function statusConfig(status: PlanStatus) {
  switch (status) {
    case "Assigned":
      return { color: "text-blue-400", bg: "bg-blue-500/15 border-blue-500/25", icon: ClipboardList };
    case "In Progress":
      return { color: "text-amber-400", bg: "bg-amber-500/15 border-amber-500/25", icon: Clock };
    case "Completed":
      return { color: "text-green-400", bg: "bg-green-500/15 border-green-500/25", icon: CheckCircle2 };
    case "Verified":
      return { color: "text-purple-400", bg: "bg-purple-500/15 border-purple-500/25", icon: ShieldCheck };
  }
}

function scoreColor(score: number, threshold: number) {
  const gap = threshold - score;
  if (gap <= 6) return "text-amber-400";
  if (gap <= 16) return "text-orange-400";
  return "text-red-400";
}

function isOverdue(plan: RemediationPlan) {
  return (plan.status === "Assigned" || plan.status === "In Progress")
    && new Date(plan.dueDate) < new Date();
}

function formatDate(iso: string) {
  return format(new Date(iso), "MMM d, yyyy");
}

function autoRemediationStep(score: number, facilityType: "Hospital" | "ASC" | ""): string {
  if (score < 55) return "Guided Review + Checklist Verification (Supervisor Sign-off Required)";
  if (score < 65) return "Guided Review + Teach-Back";
  return "Targeted Review + Retest";
}

// ── Purpose Statement ───────────────────────────────────────────────────────

function PurposeBanner() {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3" data-testid="banner-purpose">
      <p className="text-sm text-foreground/75 leading-relaxed">
        Remediation plans are assigned only when a learner scores below the required passing threshold on the final test.
        These plans guide targeted review, reinforcement, and reassessment.{" "}
        <span className="font-semibold text-foreground/90">
          They do not represent hospital or ASC operational incidents.
        </span>
      </p>
    </div>
  );
}

// ── How to Read This Page ───────────────────────────────────────────────────

function HowToReadBox() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border border-border overflow-hidden"
      data-testid="container-how-to-read"
    >
      <button
        className="w-full flex items-center gap-2.5 px-4 py-3 text-left hover:bg-white/5 transition-colors bg-card"
        onClick={() => setOpen((v) => !v)}
        data-testid="button-toggle-how-to-read"
      >
        <Info size={15} className="text-primary flex-shrink-0" />
        <span className="text-sm font-semibold">How to read this page</span>
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
            <div className="px-4 pb-4 pt-3 flex flex-col gap-3 text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-card">
              <p className="text-foreground/80">
                Each card represents a learner remediation plan created after a final test score below the required passing threshold.
              </p>
              <div>
                <p className="font-bold text-foreground/90 mb-1">Status</p>
                <ul className="space-y-1 pl-1">
                  <li><span className="font-semibold text-foreground/80">Assigned</span> — the remediation plan has been created and assigned</li>
                  <li><span className="font-semibold text-foreground/80">In Progress</span> — the learner is completing review or reinforcement steps</li>
                  <li><span className="font-semibold text-foreground/80">Completed</span> — the learner finished the assigned remediation work</li>
                  <li><span className="font-semibold text-foreground/80">Verified</span> — a supervisor or educator confirmed completion</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1">Final Test Score</p>
                <p>The learner's score on the formal post-test / final assessment.</p>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1">Passing Threshold</p>
                <p>The minimum score required to pass without remediation.</p>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1">Assigned Plan</p>
                <p>The preset educational follow-up selected for the learner's category or chapter.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Create Demo Remediation Form ───────────────────────────────────────────

function CreatePlanDialog({
  open, onClose, onSave, defaultFacilityId, defaultFacilityName,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (plan: RemediationPlan) => void;
  defaultFacilityId: string;
  defaultFacilityName: string;
}) {
  const {
    register, handleSubmit, reset, setValue, watch,
    formState: { errors },
  } = useForm<CreatePlanForm>({
    defaultValues: { facilityType: "", category: "", learner: "", quizScore: "", dueDate: "", assignedBy: "", notes: "" },
  });
  const facilityType = watch("facilityType");
  const category = watch("category");
  const quizScoreRaw = watch("quizScore");
  const scoreNum = parseInt(quizScoreRaw, 10);

  const categoryOptions = facilityType === "Hospital"
    ? HOSPITAL_CATEGORIES
    : facilityType === "ASC"
    ? ASC_CATEGORIES
    : [];

  function onSubmit(data: CreatePlanForm) {
    const score = parseInt(data.quizScore, 10);
    const newPlan: RemediationPlan = {
      id: `rem-${Date.now()}`,
      learner: data.learner,
      facilityType: data.facilityType as "Hospital" | "ASC",
      category: data.category,
      assessmentType: "Final Test",
      quizScore: score,
      passingThreshold: PASSING_THRESHOLD,
      remediationStep: autoRemediationStep(score, data.facilityType as "Hospital" | "ASC"),
      status: "Assigned",
      assignedDate: new Date().toISOString().split("T")[0],
      dueDate: data.dueDate,
      facilityId: defaultFacilityId,
      facilityName: defaultFacilityName,
      assignedBy: data.assignedBy || undefined,
      notes: data.notes || undefined,
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
            Create Demo Remediation Plan
          </DialogTitle>
        </DialogHeader>
        <p className="text-xs text-muted-foreground -mt-1 mb-1 leading-relaxed">
          Creates a sample plan for demonstration only. In production, plans are assigned automatically when a learner scores below the passing threshold on a final test.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-1">

          {/* Facility Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Facility Type</label>
            <Select
              value={facilityType}
              onValueChange={(v) => {
                setValue("facilityType", v as "Hospital" | "ASC");
                setValue("category", "");
              }}
            >
              <SelectTrigger className="text-sm" data-testid="select-facility-type">
                <SelectValue placeholder="Hospital or ASC..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Hospital">Hospital (Joint Commission)</SelectItem>
                <SelectItem value="ASC">ASC (AAAHC / CMS)</SelectItem>
              </SelectContent>
            </Select>
            {errors.facilityType && <span className="text-xs text-destructive">Required</span>}
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Category / Chapter</label>
            <Select
              value={category}
              onValueChange={(v) => setValue("category", v)}
              disabled={!facilityType}
            >
              <SelectTrigger className="text-sm" data-testid="select-chapter">
                <SelectValue placeholder={facilityType ? "Select category..." : "Select facility type first"} />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.category && <span className="text-xs text-destructive">Required</span>}
          </div>

          {/* Learner */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Learner</label>
            <input
              {...register("learner", { required: true })}
              placeholder="e.g. Learner A, OR Circulating Nurse"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-learner"
            />
            {errors.learner && <span className="text-xs text-destructive">Required</span>}
          </div>

          {/* Assessment Type (read-only) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Assessment Type</label>
            <div className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground">
              Final Test
              <span className="ml-2 text-[10px] text-muted-foreground/60">(only final tests trigger remediation)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Final Test Score */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold">Final Test Score (%)</label>
              <input
                type="number"
                min={1}
                max={69}
                {...register("quizScore", {
                  required: true,
                  min: { value: 1, message: "Must be at least 1" },
                  max: { value: 69, message: "Must be below 70% (passing threshold)" },
                })}
                placeholder="e.g. 58"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-quiz-score"
              />
              {errors.quizScore && <span className="text-xs text-destructive">{errors.quizScore.message || "Required"}</span>}
              {!isNaN(scoreNum) && scoreNum > 0 && (
                <p className="text-[10px] text-muted-foreground">Passing threshold: {PASSING_THRESHOLD}% · Gap: {PASSING_THRESHOLD - scoreNum}pts</p>
              )}
            </div>

            {/* Due Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold">Due Date</label>
              <input
                type="date"
                {...register("dueDate", { required: true })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-plan-due-date"
              />
              {errors.dueDate && <span className="text-xs text-destructive">Required</span>}
            </div>
          </div>

          {/* Assigned By (optional) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">
              Assigned By <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <input
              {...register("assignedBy")}
              placeholder="Educator, Clinical Supervisor..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-assigned-by"
            />
          </div>

          {/* Notes (optional) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">
              Notes <span className="text-muted-foreground font-normal">(optional — educational context only)</span>
            </label>
            <textarea
              {...register("notes")}
              rows={3}
              placeholder="Educational observations, context, or learner notes..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              data-testid="textarea-plan-notes"
            />
          </div>

          <div className="flex gap-2 pt-1">
            <Button type="submit" className="flex-1" data-testid="button-submit-plan">
              <Plus size={15} className="mr-1.5" /> Create Demo Plan
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
  const ScoreIcon = plan.facilityType === "Hospital" ? Hospital : Stethoscope;
  const StatusIcon = sc.icon;
  const overdue = isOverdue(plan);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border-2 border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
      data-testid={`card-plan-${plan.id}`}
    >
      {/* ── Card header: type + status + overdue ── */}
      <div className="px-4 pt-4 pb-3 flex flex-wrap items-center gap-2 border-b border-border/40">
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${
            plan.facilityType === "Hospital"
              ? "bg-blue-500/10 border-blue-500/25 text-blue-300"
              : "bg-teal-500/10 border-teal-500/25 text-teal-300"
          }`}
          data-testid={`badge-type-${plan.id}`}
        >
          <ScoreIcon size={10} />
          {plan.facilityType}
        </span>
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${sc.bg} ${sc.color}`}
          data-testid={`badge-status-${plan.id}`}
        >
          <StatusIcon size={10} />
          {plan.status}
        </span>
        {overdue && (
          <span
            className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border bg-red-500/15 border-red-500/25 text-red-400"
            data-testid={`badge-overdue-${plan.id}`}
          >
            <AlertTriangle size={10} />
            Overdue
          </span>
        )}
        {showFacility && (
          <span className="ml-auto text-[10px] font-semibold text-muted-foreground" data-testid={`badge-facility-${plan.id}`}>
            {plan.facilityName}
          </span>
        )}
      </div>

      <div className="px-4 py-3 flex flex-col gap-3">
        {/* ── Category ── */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55 mb-0.5">Category</p>
          <p className="text-sm font-bold leading-snug" data-testid={`text-plan-category-${plan.id}`}>
            {plan.category}
          </p>
        </div>

        {/* ── Assigned Plan ── */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55 mb-0.5">Assigned Plan</p>
          <p className="text-sm font-medium leading-snug text-foreground/85" data-testid={`text-plan-step-${plan.id}`}>
            {plan.remediationStep}
          </p>
        </div>

        {/* ── Meta grid ── */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-2.5 text-xs pt-1 border-t border-border/40">
          <div className="flex flex-col gap-0.5 col-span-1" data-testid={`text-plan-learner-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55">Learner</span>
            <span className="font-semibold text-foreground/85 flex items-center gap-1">
              <User size={10} className="text-muted-foreground flex-shrink-0" />
              {plan.learner}
            </span>
          </div>
          <div className="flex flex-col gap-0.5 col-span-2" data-testid={`text-plan-score-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55">Score / Threshold</span>
            <span className="flex items-baseline gap-1.5 flex-wrap">
              <span className={`text-base font-black ${scoreColor(plan.quizScore, plan.passingThreshold)}`}>
                {plan.quizScore}%
              </span>
              <span className="text-muted-foreground text-[11px]">/ {plan.passingThreshold}% required</span>
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-assessment-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55">Assessment</span>
            <span className="text-foreground/80 font-medium">{plan.assessmentType}</span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-assigned-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55">Assigned</span>
            <span className="flex items-center gap-1 text-foreground/80 font-medium">
              <Calendar size={9} className="flex-shrink-0" />
              {plan.assignedDate ? formatDate(plan.assignedDate) : "—"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-due-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55">Due Date</span>
            <span className={`flex items-center gap-1 font-medium ${overdue ? "text-red-400" : "text-foreground/80"}`}>
              <Calendar size={9} className="flex-shrink-0" />
              {plan.dueDate ? formatDate(plan.dueDate) : "—"}
            </span>
          </div>
          {plan.assignedBy && (
            <div className="flex flex-col gap-0.5" data-testid={`text-plan-assigned-by-${plan.id}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55">Assigned By</span>
              <span className="text-foreground/80 font-medium">{plan.assignedBy}</span>
            </div>
          )}
          {plan.verifiedBy && (
            <div className="flex flex-col gap-0.5" data-testid={`text-plan-verified-by-${plan.id}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/55">Verified By</span>
              <span className="text-purple-300 font-medium flex items-center gap-1">
                <ShieldCheck size={10} />
                {plan.verifiedBy}
              </span>
            </div>
          )}
        </div>

        {/* ── Notes ── */}
        {plan.notes && (
          <p
            className="text-xs text-muted-foreground italic border-t border-border/40 pt-2.5 leading-relaxed"
            data-testid={`text-plan-notes-${plan.id}`}
          >
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
        <h3 className="text-base font-bold mb-2" data-testid="text-empty-title">No remediation plans assigned yet.</h3>
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-empty-body">
          Remediation plans appear here only when a learner scores below the required threshold on a final test.
        </p>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function CorrectiveActionPage() {
  const [, setLocation] = useLocation();
  const facilityAuth = useFacilityAuth();
  const { facilityId: scopedFacilityId, facilityName: scopedFacilityName, isSuperAdmin } = facilityAuth;

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

  const countOf = (s: PlanStatus) => facilityPlans.filter((p) => p.status === s).length;
  const overdueCount = facilityPlans.filter(isOverdue).length;

  const filtered = facilityPlans.filter((p) =>
    activeStatus === "All" || p.status === activeStatus
  );

  function handleSave(plan: RemediationPlan) {
    if (dataMode === "demo") {
      // Demo mode: add to demo list (we prepend to a mutable state for demo)
      setLivePlans((prev) => [plan, ...prev]);
      setDataMode("live");
    } else {
      setLivePlans((prev) => [plan, ...prev]);
    }
    auditLog({
      userId: facilityAuth.user?.id ?? null,
      role: facilityAuth.facilityRole,
      facilityId: scopedFacilityId,
      facilityName: scopedFacilityName,
      action: "remediation_plan_created",
      meta: { planId: plan.id, category: plan.category, score: plan.quizScore },
    });
  }

  const showFacility = isSuperAdmin && dataMode !== "demo";

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Header ── */}
      <div
        className="sticky top-[58px] z-40 border-b border-white/10"
        style={{ background: "rgba(7,22,48,0.88)", backdropFilter: "blur(12px)" }}
      >
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
                  <FlaskConical size={9} /> Demo Data
                </span>
              ) : (
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/40 bg-green-500/15 text-green-400"
                  data-testid="badge-mode-live"
                >
                  <Database size={9} /> Live Data
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground truncate" data-testid="text-facility-scope">
              {dataMode === "demo" ? "Sample data mode" : scopedFacilityName} · Final test only · {PASSING_THRESHOLD}% passing threshold
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
          <div
            className="flex items-center gap-2 rounded-xl border border-border bg-card p-1"
            data-testid="container-data-mode-toggle"
          >
            <button
              onClick={() => { setDataMode("demo"); setActiveStatus("All"); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                dataMode === "demo"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="button-mode-demo"
            >
              <FlaskConical size={15} /> Demo Data
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
              <Database size={15} /> Live Data
            </button>
          </div>
          {dataMode === "demo" && (
            <div
              className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/8 px-3 py-2"
              data-testid="banner-demo-mode"
            >
              <FlaskConical size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-300/80">
                <span className="font-bold text-amber-300">Demo Data — </span>
                Sample remediation plans shown for demonstration. Real plans are assigned automatically when a learner scores below the passing threshold on a final test.
              </p>
            </div>
          )}
        </div>

        {/* ── Purpose Statement ── */}
        <PurposeBanner />

        {/* ── How to Read This Page ── */}
        <HowToReadBox />

        {/* ── Stat Summary ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" data-testid="container-stats">
          {(["Assigned", "In Progress", "Completed", "Verified"] as PlanStatus[]).map((s) => {
            const cfg = statusConfig(s);
            const Icon = cfg.icon;
            return (
              <button
                key={s}
                onClick={() => setActiveStatus(activeStatus === s ? "All" : s)}
                className={`rounded-xl border p-3 flex flex-col items-center gap-1 transition-all text-center ${
                  activeStatus === s
                    ? "border-primary/40 bg-primary/10"
                    : "border-border bg-card hover:border-primary/25"
                }`}
                data-testid={`stat-${s.toLowerCase().replace(/ /g, "-")}`}
              >
                <Icon size={15} className={cfg.color} />
                <span className="text-xl font-black">{countOf(s)}</span>
                <span className="text-[10px] text-muted-foreground font-semibold leading-tight">{s}</span>
              </button>
            );
          })}
        </div>

        {/* Overdue callout */}
        {overdueCount > 0 && (
          <div
            className="rounded-xl border border-red-500/30 bg-red-500/8 px-4 py-2.5 flex items-center gap-2.5"
            data-testid="banner-overdue"
          >
            <AlertTriangle size={15} className="text-red-400 flex-shrink-0" />
            <p className="text-sm font-semibold text-red-400">
              {overdueCount} plan{overdueCount > 1 ? "s are" : " is"} overdue and require learner follow-up.
            </p>
          </div>
        )}

        {/* ── Status Filters ── */}
        <div className="flex flex-wrap gap-2 items-center" data-testid="container-filters">
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
          {activeStatus !== "All" && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setActiveStatus("All")}
              data-testid="button-clear-filters"
            >
              <X size={14} />
            </Button>
          )}
        </div>

        {/* ── Cards area ── */}
        {dataMode === "live" && livePlans.length === 0 ? (
          <>
            {dataMode === "live" && (
              <div className="flex justify-end">
                <Button size="sm" onClick={() => setCreateOpen(true)} data-testid="button-create-plan-empty">
                  <Plus size={14} className="mr-1.5" /> Create Demo Plan
                </Button>
              </div>
            )}
            <LiveEmptyState />
          </>
        ) : (
          <div className="flex flex-col gap-3" data-testid="container-plan-cards">
            {filtered.length === 0 ? (
              <div
                className="text-center py-10 text-muted-foreground text-sm"
                data-testid="text-no-results"
              >
                No remediation plans match the selected filters.
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
