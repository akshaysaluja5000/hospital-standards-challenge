import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Plus, AlertTriangle, CheckCircle2,
  Clock, X, Calendar, Info, FlaskConical, Database,
  GraduationCap, ShieldCheck, User, ClipboardList,
  Hospital, Stethoscope, ChevronRight, BookOpen, ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useFacilityAuth } from "@/lib/facility-auth";
import { auditLog } from "@/lib/audit-log";
import { DEMO_REMEDIATION_PLANS } from "@/data/demoCorrectiveActions";
import { REMEDIATION_LIBRARY } from "@/data/remediationLibrary";

// ── Types ──────────────────────────────────────────────────────────────────
// Remediation plans are assigned ONLY when a learner scores below the required
// passing threshold on a FINAL test.
//
// Assessment types tracked across the platform:
//   "diagnostic" — knowledge-gap diagnostic, never triggers remediation
//   "drill"      — rapid-fire drill, never triggers remediation
//   "practice"   — practice quiz, never triggers remediation
//   "final"      — formal post-test / final assessment — the ONLY type that
//                  triggers remediation when score < passing threshold

export type AssessmentType = "diagnostic" | "drill" | "practice" | "final";

export const ASSESSMENT_TYPE_LABELS: Record<AssessmentType, string> = {
  diagnostic: "Diagnostic",
  drill:      "Drill",
  practice:   "Practice Quiz",
  final:      "Final Test",
};

// ── Remediation Guard ──────────────────────────────────────────────────────
//
// THIS IS THE SINGLE SOURCE OF TRUTH for whether a remediation plan should
// be created. Every code path that creates a remediation plan MUST call
// this function before proceeding.
//
// Logic:
//   assessment_type === "final"  AND  score < passingThreshold
//
// Callers:
//   - handleSave()               in the Create Demo dialog (manual demo only)
//   - getRemediationPlan()       in remediationLibrary.ts (quiz engine hook)
//   - (future) quiz result hook  in the backend when a final test is submitted

export function shouldCreateRemediationPlan(
  assessmentType: AssessmentType,
  score: number,
  passingThreshold = PASSING_THRESHOLD,
): boolean {
  return assessmentType === "final" && score < passingThreshold;
}

export interface RemediationStep {
  title: string;
  description: string;
}

export type PlanStatus = "Assigned" | "In Progress" | "Completed" | "Verified";

export interface RemediationPlan {
  id: string;
  learner: string;
  facilityType: "Hospital" | "ASC";
  category: string;
  assessmentType: AssessmentType;
  quizScore: number;
  passingThreshold: number;
  remediationSteps: RemediationStep[];
  reassessmentRequired: boolean;
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

// ── Category Options ────────────────────────────────────────────────────────

export const HOSPITAL_CATEGORIES = [
  "Instrument Integrity",
  "Facilities & Equipment",
  "SPD & Decontamination",
  "OR & Sterile Technique",
  "Transport of Instruments",
  "Environment & Surfaces",
  "Clean vs. Dirty",
  "Sterile Storage",
  "Surgical Safety & Consent",
  "Patient Care & Documentation",
  "EOC & Safety Compliance",
];

export const ASC_CATEGORIES = [
  "Patient Rights and Responsibilities",
  "Governance",
  "Administration",
  "Quality of Care Provided",
  "Quality Management and Improvement",
  "Clinical Records and Health Information",
  "Infection Prevention and Control and Safety",
  "Facilities and Environment",
  "Anesthesia and Surgical Services",
  "Surgical and Related Services",
  "Pharmaceutical Services",
  "Pathology and Medical Laboratory Services",
  "Diagnostic and Other Imaging Services",
];

const ALL_STATUSES: PlanStatus[] = ["Assigned", "In Progress", "Completed", "Verified"];
const PASSING_THRESHOLD = 70;

// ── Library Helpers ────────────────────────────────────────────────────────

function getLibraryKey(facilityType: "Hospital" | "ASC" | "", category: string): string {
  return facilityType === "ASC" ? `ASC: ${category}` : category;
}

function getStepsForScore(
  facilityType: "Hospital" | "ASC" | "",
  category: string,
  score: number,
): RemediationStep[] {
  if (!facilityType || !category || isNaN(score) || score <= 0) return [];
  const key = getLibraryKey(facilityType, category);
  const plans = REMEDIATION_LIBRARY[key];
  if (!plans) return [];
  if (score >= 60) return [plans[0]];
  return [plans[0], plans[1]];
}

function needsReassessment(score: number): boolean {
  return score < 50;
}

// ── UI Helpers ─────────────────────────────────────────────────────────────

function statusConfig(status: PlanStatus) {
  switch (status) {
    case "Assigned":
      return { color: "text-blue-300", bg: "bg-blue-500/15 border-blue-400/30", icon: ClipboardList, next: "In Progress" as PlanStatus, nextLabel: "Mark In Progress", nextColor: "text-amber-300 border-amber-400/40 hover:bg-amber-500/15" };
    case "In Progress":
      return { color: "text-amber-300", bg: "bg-amber-500/15 border-amber-400/30", icon: Clock, next: "Completed" as PlanStatus, nextLabel: "Mark Completed", nextColor: "text-green-300 border-green-400/40 hover:bg-green-500/15" };
    case "Completed":
      return { color: "text-green-300", bg: "bg-green-500/15 border-green-400/30", icon: CheckCircle2, next: "Verified" as PlanStatus, nextLabel: "Mark Verified", nextColor: "text-purple-300 border-purple-400/40 hover:bg-purple-500/15" };
    case "Verified":
      return { color: "text-purple-300", bg: "bg-purple-500/15 border-purple-400/30", icon: ShieldCheck, next: null, nextLabel: null, nextColor: "" };
  }
}

function scoreColor(score: number, threshold: number) {
  const gap = threshold - score;
  if (gap <= 10) return "text-amber-300";
  if (gap <= 20) return "text-orange-400";
  return "text-red-400";
}

function isOverdue(plan: RemediationPlan) {
  return (plan.status === "Assigned" || plan.status === "In Progress")
    && new Date(plan.dueDate) < new Date();
}

function formatDate(iso: string) {
  try { return format(new Date(iso), "MMM d, yyyy"); } catch { return iso; }
}

// ── Purpose Banner ─────────────────────────────────────────────────────────

function PurposeBanner() {
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/6 px-5 py-4" data-testid="banner-purpose">
      <p className="text-sm leading-relaxed text-foreground/80">
        Remediation plans are assigned only when a learner scores below the required passing threshold on the final test.
        These plans guide targeted review, reinforcement, and reassessment.{" "}
        <span className="font-semibold text-foreground/95">
          They do not represent hospital or ASC operational incidents.
        </span>
      </p>
    </div>
  );
}

// ── How to Read This Page ──────────────────────────────────────────────────

function HowToReadBox() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border overflow-hidden" data-testid="container-how-to-read">
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-white/4 transition-colors bg-card"
        onClick={() => setOpen((v) => !v)}
        data-testid="button-toggle-how-to-read"
      >
        <Info size={17} className="text-primary flex-shrink-0" />
        <span className="text-base font-bold">How to read this page</span>
        <span className="ml-auto text-sm text-muted-foreground">{open ? "Hide" : "Show"}</span>
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
            <div className="px-5 pb-5 pt-4 flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-card">
              <p className="text-foreground/80 text-base">
                Each card represents a learner remediation plan created after a final test score below the required passing threshold.
              </p>
              <div>
                <p className="font-bold text-foreground/90 mb-2 text-sm uppercase tracking-wide">Status</p>
                <ul className="space-y-2 pl-1">
                  <li><span className="font-semibold text-blue-300">Assigned</span> — the remediation plan has been created and assigned</li>
                  <li><span className="font-semibold text-amber-300">In Progress</span> — the learner is completing review or reinforcement steps</li>
                  <li><span className="font-semibold text-green-300">Completed</span> — the learner finished the assigned remediation work</li>
                  <li><span className="font-semibold text-purple-300">Verified</span> — a supervisor or educator confirmed completion</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1 text-sm uppercase tracking-wide">Final Test Score</p>
                <p>The learner's score on the formal post-test / final assessment.</p>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1 text-sm uppercase tracking-wide">Passing Threshold</p>
                <p>The minimum score required to pass without remediation.</p>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1 text-sm uppercase tracking-wide">Assigned Plan</p>
                <p>The preset educational follow-up selected for the learner's category or chapter. One plan is assigned for scores 60–69%; two plans for scores below 60%. Scores below 50% also require supervisor reassessment before the plan can be verified.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Steps Preview ──────────────────────────────────────────────────────────

function StepsPreview({ facilityType, category, score }: { facilityType: "Hospital" | "ASC" | ""; category: string; score: number; }) {
  const steps = getStepsForScore(facilityType, category, score);
  const reassessment = needsReassessment(score);
  if (!steps.length || !category || !facilityType) return null;
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col gap-3">
      <p className="text-xs font-bold uppercase tracking-wider text-primary/80">
        Plans that will be assigned ({steps.length} step{steps.length > 1 ? "s" : ""})
      </p>
      {steps.map((s, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          <p className="text-sm font-semibold">{i + 1}. {s.title}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
        </div>
      ))}
      {reassessment && (
        <div className="flex items-start gap-2 rounded-lg bg-orange-500/10 border border-orange-500/25 px-3 py-2">
          <ShieldAlert size={13} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-orange-300 font-semibold">Supervisor reassessment required before this plan can be marked Verified.</p>
        </div>
      )}
    </div>
  );
}

// ── Create Plan Dialog ─────────────────────────────────────────────────────

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
    defaultValues: { facilityType: "", category: "", learner: "", quizScore: "", dueDate: "", assignedBy: "", notes: "" },
  });
  const facilityType = watch("facilityType");
  const category = watch("category");
  const quizScoreRaw = watch("quizScore");
  const scoreNum = parseInt(quizScoreRaw, 10);

  const categoryOptions = facilityType === "Hospital" ? HOSPITAL_CATEGORIES : facilityType === "ASC" ? ASC_CATEGORIES : [];
  const previewSteps = getStepsForScore(facilityType as "Hospital" | "ASC" | "", category, scoreNum);
  const reassessment = needsReassessment(scoreNum);

  function onSubmit(data: CreatePlanForm) {
    const score = parseInt(data.quizScore, 10);
    // ── Remediation guard: only "final" assessment type below passing threshold ──
    if (!shouldCreateRemediationPlan("final", score)) return;
    const steps = getStepsForScore(data.facilityType as "Hospital" | "ASC", data.category, score);
    const newPlan: RemediationPlan = {
      id: `rem-${Date.now()}`,
      learner: data.learner,
      facilityType: data.facilityType as "Hospital" | "ASC",
      category: data.category,
      assessmentType: "final",
      quizScore: score,
      passingThreshold: PASSING_THRESHOLD,
      remediationSteps: steps,
      reassessmentRequired: needsReassessment(score),
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
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto" data-testid="dialog-create-plan">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <GraduationCap size={19} className="text-primary" />
            Create Demo Remediation Plan
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground -mt-1 mb-2 leading-relaxed">
          Creates a sample plan for demonstration. In production, plans are assigned automatically when a learner scores below the passing threshold on a final test.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">Facility Type</label>
            <Select value={facilityType} onValueChange={(v) => { setValue("facilityType", v as "Hospital" | "ASC"); setValue("category", ""); }}>
              <SelectTrigger data-testid="select-facility-type">
                <SelectValue placeholder="Select Hospital or ASC..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Hospital">Hospital (Joint Commission)</SelectItem>
                <SelectItem value="ASC">ASC (AAAHC / CMS)</SelectItem>
              </SelectContent>
            </Select>
            {errors.facilityType && <span className="text-xs text-destructive">Required</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">Category / Chapter</label>
            <Select value={category} onValueChange={(v) => setValue("category", v)} disabled={!facilityType}>
              <SelectTrigger data-testid="select-chapter">
                <SelectValue placeholder={facilityType ? "Select category..." : "Select facility type first"} />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.category && <span className="text-xs text-destructive">Required</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">Learner</label>
            <input
              {...register("learner", { required: true })}
              placeholder="e.g. Learner A, OR Circulating Nurse"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-learner"
            />
            {errors.learner && <span className="text-xs text-destructive">Required</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">Assessment Type</label>
            <div className="rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm text-muted-foreground flex items-center gap-2">
              <BookOpen size={13} className="text-primary/60" />
              Final Test
              <span className="ml-1 text-[10px] text-muted-foreground/55">(only final tests trigger remediation)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold">Final Test Score (%)</label>
              <input
                type="number" min={1} max={69}
                {...register("quizScore", { required: true, min: { value: 1, message: "Min 1" }, max: { value: 69, message: "Must be below 70%" } })}
                placeholder="e.g. 58"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-quiz-score"
              />
              {errors.quizScore && <span className="text-xs text-destructive">{errors.quizScore.message || "Required"}</span>}
              {!isNaN(scoreNum) && scoreNum > 0 && scoreNum < 70 && (
                <p className="text-[11px] text-muted-foreground">
                  {scoreNum >= 60 ? "1 step assigned" : "2 steps assigned"}
                  {scoreNum < 50 ? " + reassessment required" : ""}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold">Due Date</label>
              <input
                type="date"
                {...register("dueDate", { required: true })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-plan-due-date"
              />
              {errors.dueDate && <span className="text-xs text-destructive">Required</span>}
            </div>
          </div>

          {previewSteps.length > 0 && (
            <StepsPreview facilityType={facilityType as "Hospital" | "ASC" | ""} category={category} score={scoreNum} />
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">
              Assigned By <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              {...register("assignedBy")}
              placeholder="Educator, Clinical Supervisor..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-assigned-by"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">
              Notes <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <textarea
              {...register("notes")}
              rows={3}
              placeholder="Educational context or learner notes..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              data-testid="textarea-plan-notes"
            />
          </div>

          <div className="flex gap-2 pt-1">
            <Button type="submit" className="flex-1" size="lg" data-testid="button-submit-plan">
              <Plus size={16} className="mr-1.5" /> Assign Remediation Plan
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => { onClose(); reset(); }} data-testid="button-cancel-plan">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ── Plan Card ──────────────────────────────────────────────────────────────

function PlanCard({
  plan, showFacility, onStatusChange,
}: {
  plan: RemediationPlan;
  showFacility: boolean;
  onStatusChange: (id: string, status: PlanStatus) => void;
}) {
  const sc = statusConfig(plan.status);
  const StatusIcon = sc.icon;
  const overdue = isOverdue(plan);
  const TypeIcon = plan.facilityType === "Hospital" ? Hospital : Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border-2 border-border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
      data-testid={`card-plan-${plan.id}`}
    >
      {/* ── Header bar ── */}
      <div className="px-5 pt-5 pb-4 flex flex-wrap items-center gap-2 border-b border-border/40">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${
            plan.facilityType === "Hospital"
              ? "bg-blue-500/10 border-blue-400/25 text-blue-300"
              : "bg-teal-500/10 border-teal-400/25 text-teal-300"
          }`}
          data-testid={`badge-type-${plan.id}`}
        >
          <TypeIcon size={11} /> {plan.facilityType}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${sc.bg} ${sc.color}`}
          data-testid={`badge-status-${plan.id}`}
        >
          <StatusIcon size={11} /> {plan.status}
        </span>
        {overdue && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border bg-red-500/15 border-red-400/30 text-red-400" data-testid={`badge-overdue-${plan.id}`}>
            <AlertTriangle size={11} /> Overdue
          </span>
        )}
        {plan.reassessmentRequired && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border bg-orange-500/15 border-orange-400/30 text-orange-300" data-testid={`badge-reassessment-${plan.id}`}>
            <ShieldAlert size={11} /> Reassessment Required
          </span>
        )}
        {showFacility && (
          <span className="ml-auto text-xs font-semibold text-muted-foreground" data-testid={`text-facility-${plan.id}`}>{plan.facilityName}</span>
        )}
      </div>

      <div className="px-5 py-4 flex flex-col gap-4 flex-1">

        {/* ── Score + Category ── */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-center">
            <div className={`text-5xl font-black leading-none ${scoreColor(plan.quizScore, plan.passingThreshold)}`} data-testid={`text-plan-score-${plan.id}`}>
              {plan.quizScore}%
            </div>
            <div className="text-[11px] text-muted-foreground mt-1 font-semibold">{plan.passingThreshold}% required</div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55 mb-0.5">Category</p>
            <p className="text-lg font-bold leading-snug" data-testid={`text-plan-category-${plan.id}`}>{plan.category}</p>
            <p className="text-xs text-muted-foreground mt-0.5" data-testid={`text-plan-assessment-${plan.id}`}>{ASSESSMENT_TYPE_LABELS[plan.assessmentType]}</p>
          </div>
        </div>

        {/* ── Assigned Steps ── */}
        <div className="flex flex-col gap-3 pt-3 border-t border-border/40">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">
            Assigned Plan{plan.remediationSteps.length > 1 ? "s" : ""} ({plan.remediationSteps.length} step{plan.remediationSteps.length > 1 ? "s" : ""})
          </p>
          {plan.remediationSteps.map((step, i) => (
            <div key={i} className="flex gap-3" data-testid={`container-step-${plan.id}-${i}`}>
              <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-black text-primary">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold leading-snug mb-1" data-testid={`text-step-title-${plan.id}-${i}`}>{step.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-step-desc-${plan.id}-${i}`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Meta grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 pt-3 border-t border-border/40 text-sm">
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-learner-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Learner</span>
            <span className="font-semibold flex items-center gap-1">
              <User size={11} className="text-muted-foreground flex-shrink-0" />
              {plan.learner}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-assigned-date-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Assigned</span>
            <span className="flex items-center gap-1 font-medium">
              <Calendar size={11} className="text-muted-foreground flex-shrink-0" />
              {formatDate(plan.assignedDate)}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-due-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Due Date</span>
            <span className={`flex items-center gap-1 font-medium ${overdue ? "text-red-400" : ""}`}>
              <Calendar size={11} className={`flex-shrink-0 ${overdue ? "text-red-400" : "text-muted-foreground"}`} />
              {formatDate(plan.dueDate)}
            </span>
          </div>
          {plan.assignedBy && (
            <div className="flex flex-col gap-0.5" data-testid={`text-plan-assigned-by-${plan.id}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Assigned By</span>
              <span className="font-medium">{plan.assignedBy}</span>
            </div>
          )}
          {plan.verifiedBy && (
            <div className="flex flex-col gap-0.5" data-testid={`text-plan-verified-by-${plan.id}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Verified By</span>
              <span className="text-purple-300 font-medium flex items-center gap-1">
                <ShieldCheck size={11} /> {plan.verifiedBy}
              </span>
            </div>
          )}
        </div>

        {/* ── Notes ── */}
        {plan.notes && (
          <p className="text-sm text-muted-foreground italic border-t border-border/40 pt-3 leading-relaxed" data-testid={`text-plan-notes-${plan.id}`}>
            {plan.notes}
          </p>
        )}

        {/* ── Action buttons ── */}
        {sc.next && (
          <div className="pt-2 border-t border-border/30">
            <button
              onClick={() => onStatusChange(plan.id, sc.next!)}
              className={`w-full flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-bold transition-colors ${sc.nextColor}`}
              data-testid={`button-advance-${plan.id}`}
            >
              <ChevronRight size={15} />
              {sc.nextLabel}
            </button>
          </div>
        )}
        {plan.status === "Verified" && (
          <div className="pt-2 border-t border-border/30">
            <div className="flex items-center justify-center gap-2 rounded-xl border border-purple-400/25 bg-purple-500/8 py-2.5 text-sm font-bold text-purple-300">
              <ShieldCheck size={15} /> Plan Verified
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Live Empty State ───────────────────────────────────────────────────────

function LiveEmptyState({ onCreateDemo }: { onCreateDemo: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 text-center" data-testid="container-live-empty">
      <div className="w-20 h-20 rounded-full border-2 border-border flex items-center justify-center bg-muted/20">
        <Database size={36} className="text-muted-foreground" />
      </div>
      <div className="max-w-md">
        <h3 className="text-xl font-bold mb-2" data-testid="text-empty-title">No remediation plans assigned yet.</h3>
        <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-empty-body">
          Remediation plans appear here only when a learner scores below the required threshold on a final test.
        </p>
      </div>
      <Button size="lg" variant="outline" onClick={onCreateDemo} data-testid="button-create-plan-empty">
        <Plus size={16} className="mr-2" /> Create Demo Remediation
      </Button>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function CorrectiveActionPage() {
  const [, setLocation] = useLocation();
  const facilityAuth = useFacilityAuth();
  const { facilityId: scopedFacilityId, facilityName: scopedFacilityName, isSuperAdmin } = facilityAuth;

  const [dataMode, setDataMode] = useState<DataMode>("demo");
  const [demoPlans, setDemoPlans] = useState<RemediationPlan[]>(DEMO_REMEDIATION_PLANS);
  const [livePlans, setLivePlans] = useState<RemediationPlan[]>([]);
  const [activeStatus, setActiveStatus] = useState<PlanStatus | "All">("All");
  const [facilityTypeFilter, setFacilityTypeFilter] = useState<"All" | "Hospital" | "ASC">("All");
  const [createOpen, setCreateOpen] = useState(false);

  const sourcePlans = dataMode === "demo" ? demoPlans : livePlans;

  const facilityPlans = useMemo(() => {
    if (dataMode === "demo") return sourcePlans;
    if (isSuperAdmin) return sourcePlans;
    if (!scopedFacilityId) return [];
    return sourcePlans.filter((p) => p.facilityId === scopedFacilityId);
  }, [sourcePlans, dataMode, isSuperAdmin, scopedFacilityId]);

  const typedPlans = useMemo(() =>
    facilityTypeFilter === "All"
      ? facilityPlans
      : facilityPlans.filter((p) => p.facilityType === facilityTypeFilter),
    [facilityPlans, facilityTypeFilter]
  );

  const countOf = (s: PlanStatus) => typedPlans.filter((p) => p.status === s).length;
  const overdueCount = typedPlans.filter(isOverdue).length;

  const filtered = typedPlans.filter((p) =>
    activeStatus === "All" || p.status === activeStatus
  );

  function handleStatusChange(id: string, newStatus: PlanStatus) {
    if (dataMode === "demo") {
      setDemoPlans((prev) => prev.map((p) => p.id === id ? { ...p, status: newStatus } : p));
    } else {
      setLivePlans((prev) => prev.map((p) => p.id === id ? { ...p, status: newStatus } : p));
    }
  }

  function handleSave(plan: RemediationPlan) {
    if (dataMode === "live") {
      setLivePlans((prev) => [plan, ...prev]);
    } else {
      setDemoPlans((prev) => [plan, ...prev]);
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
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <GraduationCap size={18} className="text-primary flex-shrink-0" />
              <h2 className="font-bold text-xl" data-testid="text-page-title">Remediation Plans</h2>
              {dataMode === "demo" ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-500/40 bg-amber-500/15 text-amber-300" data-testid="badge-mode-demo">
                  <FlaskConical size={10} /> Demo Data
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/40 bg-green-500/15 text-green-400" data-testid="badge-mode-live">
                  <Database size={10} /> Live Data
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-facility-scope">
              {dataMode === "demo" ? "Sample data mode" : scopedFacilityName} · Final test only · {PASSING_THRESHOLD}% passing threshold
            </p>
          </div>
          <Button size="lg" onClick={() => setCreateOpen(true)} data-testid="button-create-plan-header">
            <Plus size={16} className="mr-2" /> Create Demo Remediation
          </Button>
        </div>
      </div>

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-7 flex flex-col gap-7">

        {/* ── Demo / Live Toggle ── */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-1.5" data-testid="container-data-mode-toggle">
            <button
              onClick={() => { setDataMode("demo"); setActiveStatus("All"); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                dataMode === "demo"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/4"
              }`}
              data-testid="button-mode-demo"
            >
              <FlaskConical size={15} /> Demo Data
            </button>
            <button
              onClick={() => { setDataMode("live"); setActiveStatus("All"); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                dataMode === "live"
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/4"
              }`}
              data-testid="button-mode-live"
            >
              <Database size={15} /> Live Data
            </button>
          </div>
          {dataMode === "demo" && (
            <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/8 px-4 py-3" data-testid="banner-demo-mode">
              <FlaskConical size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-300/80 leading-relaxed">
                <span className="font-bold text-amber-300">Demo Data — </span>
                Sample remediation plans for demonstration. In production, plans are assigned automatically when a learner scores below the passing threshold on a final test.
              </p>
            </div>
          )}
        </div>

        {/* ── Purpose Statement ── */}
        <PurposeBanner />

        {/* ── How to Read ── */}
        <HowToReadBox />

        {/* ── Stat Summary ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" data-testid="container-stats">
          {(["Assigned", "In Progress", "Completed", "Verified"] as PlanStatus[]).map((s) => {
            const cfg = statusConfig(s);
            const Icon = cfg.icon;
            return (
              <button
                key={s}
                onClick={() => setActiveStatus(activeStatus === s ? "All" : s)}
                className={`rounded-2xl border-2 p-5 flex flex-col items-center gap-2 transition-all text-center ${
                  activeStatus === s
                    ? "border-primary/40 bg-primary/10"
                    : "border-border bg-card hover:border-primary/25 hover:bg-card/80"
                }`}
                data-testid={`stat-${s.toLowerCase().replace(/ /g, "-")}`}
              >
                <Icon size={18} className={cfg.color} />
                <span className="text-4xl font-black leading-none">{countOf(s)}</span>
                <span className="text-xs text-muted-foreground font-bold leading-tight">{s}</span>
              </button>
            );
          })}
        </div>

        {/* Overdue callout */}
        {overdueCount > 0 && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/8 px-5 py-3.5 flex items-center gap-3" data-testid="banner-overdue">
            <AlertTriangle size={18} className="text-red-400 flex-shrink-0" />
            <p className="text-base font-bold text-red-400">
              {overdueCount} plan{overdueCount > 1 ? "s are" : " is"} overdue — learner follow-up required.
            </p>
          </div>
        )}

        {/* ── Facility Type Tabs ── */}
        <div className="flex items-center gap-2" data-testid="container-type-filter">
          {(["All", "Hospital", "ASC"] as const).map((t) => {
            const count = t === "All" ? facilityPlans.length : facilityPlans.filter((p) => p.facilityType === t).length;
            const Icon = t === "Hospital" ? Hospital : t === "ASC" ? Stethoscope : null;
            return (
              <button
                key={t}
                onClick={() => { setFacilityTypeFilter(t); setActiveStatus("All"); }}
                className={`flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl border-2 transition-all ${
                  facilityTypeFilter === t
                    ? t === "Hospital"
                      ? "bg-blue-500/20 border-blue-400/60 text-blue-300"
                      : t === "ASC"
                        ? "bg-teal-500/20 border-teal-400/60 text-teal-300"
                        : "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                data-testid={`filter-type-${t.toLowerCase()}`}
              >
                {Icon && <Icon size={13} />}
                {t === "All" ? `All Facilities (${count})` : `${t} (${count})`}
              </button>
            );
          })}
        </div>

        {/* ── Status Filter Row ── */}
        <div className="flex flex-wrap gap-2.5 items-center" data-testid="container-filters">
          {(["All", ...ALL_STATUSES] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveStatus(s === "All" ? "All" : s as PlanStatus)}
              className={`text-sm font-bold px-4 py-2 rounded-xl border-2 transition-all ${
                activeStatus === s
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
              data-testid={`filter-status-${s.toLowerCase().replace(/ /g, "-")}`}
            >
              {s === "All" ? `All (${typedPlans.length})` : `${s} (${countOf(s)})`}
            </button>
          ))}
          {activeStatus !== "All" && (
            <Button variant="ghost" size="sm" onClick={() => setActiveStatus("All")} data-testid="button-clear-filters">
              <X size={14} className="mr-1" /> Clear filter
            </Button>
          )}
        </div>

        {/* ── Cards area ── */}
        {dataMode === "live" && livePlans.length === 0 ? (
          <LiveEmptyState onCreateDemo={() => setCreateOpen(true)} />
        ) : (
          <div data-testid="container-plan-cards">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground" data-testid="text-no-results">
                <Database size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg font-semibold">No remediation plans match the selected filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filtered.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    showFacility={showFacility}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {facilityPlans.length > 0 && filtered.length > 0 && (
          <p className="text-center text-sm text-muted-foreground pb-4" data-testid="text-result-count">
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
