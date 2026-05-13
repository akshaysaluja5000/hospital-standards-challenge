import { useState, useEffect, useMemo } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Brain, CheckCircle2, Timer, Clock,
  Trophy, RefreshCw, ChevronRight, RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { findLevelById } from "@shared/all-levels";
import type { FlashcardReview } from "@shared/schema";

type SRRating = "again" | "hard" | "good";

const SR_CONFIG: Record<SRRating, {
  label: string;
  interval: string;
  icon: typeof Timer;
  btn: string;
  dot: string;
  badge: string;
  requeue: number | null;
}> = {
  again: {
    label: "Again",
    interval: "< 2 min",
    icon: Timer,
    btn: "bg-red-500 hover:bg-red-600 text-white border-0",
    dot: "#f87171",
    badge: "bg-red-500/15 text-red-400 border-red-500/25",
    requeue: 2,
  },
  hard: {
    label: "Hard",
    interval: "< 15 min",
    icon: Clock,
    btn: "bg-orange-500 hover:bg-orange-600 text-white border-0",
    dot: "#fb923c",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/25",
    requeue: 8,
  },
  good: {
    label: "Good",
    interval: "1 day",
    icon: CheckCircle2,
    btn: "bg-emerald-600 hover:bg-emerald-500 text-white border-0",
    dot: "#34d399",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    requeue: null,
  },
};

const CATEGORY_CONFIG: Record<string, { label: string; bg: string; text: string; border: string }> = {
  rule:       { label: "Rule",           bg: "bg-blue-500/15",    text: "text-blue-400",    border: "border-blue-500/25" },
  definition: { label: "Definition",     bg: "bg-indigo-500/15",  text: "text-indigo-400",  border: "border-indigo-500/25" },
  scenario:   { label: "Scenario",       bg: "bg-orange-500/15",   text: "text-orange-500",   border: "border-orange-500/25" },
  mistake:    { label: "Common Mistake", bg: "bg-red-500/15",     text: "text-red-400",     border: "border-red-500/25" },
  number:     { label: "Key Number",     bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25" },
  tip:        { label: "Surveyor Tip",   bg: "bg-violet-500/15",  text: "text-violet-400",  border: "border-violet-500/25" },
};

const FLIP_VARIANTS = {
  enterFront: { opacity: 0, rotateY: -12, scale: 0.97 },
  center:     { opacity: 1, rotateY: 0,   scale: 1 },
  exitFront:  { opacity: 0, rotateY: 12,  scale: 0.97 },
};

function getTopicLabel(title: string): string {
  const dashIdx = title.indexOf(" — ");
  if (dashIdx !== -1) return title.slice(dashIdx + 3);
  return title;
}

function getCodeLabel(title: string): string | null {
  const dashIdx = title.indexOf(" — ");
  if (dashIdx !== -1) return title.slice(0, dashIdx);
  return null;
}

const CATEGORY_PROMPTS: Record<string, string> = {
  rule:       "What does this standard require?",
  definition: "How is this term defined?",
  scenario:   "What applies in this situation?",
  mistake:    "What's the common mistake to avoid?",
  number:     "What's the key number or threshold?",
  tip:        "What would a surveyor check here?",
};

function deriveQuestion(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes("notif") || t.includes("within 15"))
    return "What events trigger a required notification under this standard, and what is the timeframe?";
  if (t.includes("public representation") || t.includes("representation of accreditation"))
    return "What restrictions govern how an organization may publicly represent its accreditation status?";
  if (t.includes("fiscal") || t.includes("financial control"))
    return "What fiscal controls or financial accountability does this standard require?";
  if (t.includes("orientation") || t.includes("personnel polic"))
    return "What must personnel policies address, and what must new-employee orientation cover?";
  if (t.includes("professional development") || t.includes("personnel sufficiency"))
    return "What ongoing professional development and staffing adequacy does this standard require?";
  if (t.includes("pre-op") || t.includes("pre-operative") || t.includes("pre-procedural"))
    return "What assessments and documentation must be completed before a procedure begins?";
  if (t.includes("patient identification") || t.includes("site marking"))
    return "What does this standard require for correct patient identification and surgical site marking?";
  if (t.includes("time-out") || t.includes("timeout"))
    return "What must be verified during the pre-procedural time-out, and who must participate?";
  if (t.includes("anesthesia monitor") || t.includes("anesthesia management"))
    return "What monitoring and documentation requirements apply while a patient is under anesthesia?";
  if (t.includes("post-anesthesia") || t.includes("recovery") || t.includes("discharge criteria"))
    return "What criteria must be met before a patient can be discharged from the recovery area?";
  if (t.includes("therapeutic environment") || t.includes("behavioral health setting"))
    return "What environmental or care standards apply specifically to behavioral health settings?";
  if (t.includes("individualized treatment") || t.includes("treatment plan"))
    return "What must an individualized treatment plan address and document?";
  if (t.includes("staff qualif") || (t.includes("qualified") && t.includes("personnel")))
    return "What qualifications must staff hold to meet this standard?";
  if (t.includes("continuity") || t.includes("discharge planning"))
    return "What must be documented to ensure continuity of care at and after discharge?";
  if (t.includes("clinical record") && (t.includes("requirement") || t.includes("individual") || t.includes("element")))
    return "What specific elements must appear in every patient's clinical record?";
  if (t.includes("records system") || (t.includes("collection") && t.includes("record")))
    return "What does this standard require for how clinical records are collected, stored, and maintained?";
  if (t.includes("written polic") && t.includes("record"))
    return "What written policies governing clinical records must the organization maintain?";
  if (t.includes("confidentiality") || (t.includes("privacy") && t.includes("record")))
    return "What safeguards must protect the confidentiality and privacy of clinical records?";
  if (t.includes("allergy") || t.includes("sensitivity"))
    return "How must known allergies and sensitivities be documented in the clinical record?";
  if (t.includes("informed consent") && (t.includes("document") || t.includes("incorporat")))
    return "How must informed consent discussions be documented in the clinical record?";
  if (t.includes("informed consent"))
    return "What elements must be present for informed consent to be legally valid under this standard?";
  if (t.includes("governing body") && t.includes("credentialing"))
    return "What accountability does the governing body hold for credentialing and privileging decisions?";
  if (t.includes("credentialing") || t.includes("privileging"))
    return "What must a compliant credentialing and privileging process verify and document?";
  if (t.includes("initial application") || t.includes("evidence of competence"))
    return "What must an initial credentialing application demonstrate and verify before privileges are granted?";
  if (t.includes("attestation"))
    return "What written attestations are required as part of a valid credentialing application?";
  if (t.includes("source verification") || t.includes("npdb"))
    return "What primary and secondary source verifications must be completed before granting privileges?";
  if (t.includes("reappointment"))
    return "How frequently must reappointment occur, and what must the reappointment process include?";
  if (t.includes("peer review") && t.includes("who reviews"))
    return "Who is required to review each physician, dentist, or health care professional — and why does it matter?";
  if (t.includes("peer review"))
    return "What does a compliant peer review process require, and who must participate?";
  if (t.includes("ongoing monitoring") && (t.includes("credential") || t.includes("date-sensitive")))
    return "What date-sensitive credentialing information must be tracked on an ongoing basis?";
  if (t.includes("medical emergency") || t.includes("unplanned transfer"))
    return "What must written procedures for medical emergencies and unplanned transfers address?";
  if (t.includes("bls") || t.includes("basic life support"))
    return "Who must hold current BLS certification, and what equipment training is required on-site?";
  if (t.includes("disaster preparedness") || t.includes("emergency and disaster") || (t.includes("emergency") && t.includes("comprehensive")))
    return "What must a comprehensive emergency and disaster preparedness plan include?";
  if (t.includes("drill") || t.includes("quarterly") || t.includes("scenario-based"))
    return "How frequently must drills be conducted, and what must each written drill evaluation document?";
  if (t.includes("emergency equipment") && (t.includes("maintained") || t.includes("accessible")))
    return "What does it mean for emergency equipment to be 'maintained' and 'readily accessible'?";
  if (t.includes("building code") || t.includes("life safety"))
    return "What building and life safety code compliance does this standard require?";
  if (t.includes("patient comfort") || (t.includes("physical environment") && !t.includes("surgical")))
    return "What physical environment conditions must the facility maintain for patient comfort and privacy?";
  if (t.includes("clean") || t.includes("visible hazard"))
    return "What cleanliness and hazard-free conditions would a surveyor expect to observe?";
  if (t.includes("fire protection") || t.includes("emergency exiting") || t.includes("exit sign"))
    return "What fire protection equipment and emergency exit requirements does this standard establish?";
  if (t.includes("equipment maintenance") || t.includes("calibration"))
    return "What maintenance and calibration records must be current for medical equipment?";
  if (t.includes("alternate power") || t.includes("backup power") || t.includes("generator"))
    return "When is alternate power required, and what documentation proves the system is adequate?";
  if (t.includes("scope of services"))
    return "What must the governing body formally define in its approved scope of services document?";
  if (t.includes("contract") || t.includes("arrangement oversight"))
    return "What oversight must the governing body maintain over contracted services and arrangements?";
  if (t.includes("meeting frequency") || t.includes("annual review"))
    return "How often must the governing body meet, and what items require at least annual review?";
  if (t.includes("oversight of anesthesia") || t.includes("oversight of surgery") || t.includes("anesthesia and surgery"))
    return "What governing body approval is required before anesthesia techniques or surgical procedures may be performed?";
  if (t.includes("strategic direction") || t.includes("operational accountability"))
    return "What strategic and operational responsibilities does the governing body hold under this standard?";
  if (t.includes("written ipc") || t.includes("ipc program"))
    return "What elements must a written infection prevention and control program include?";
  if (t.includes("hand hygiene") || t.includes("safe injection"))
    return "What surveillance does this standard require for hand hygiene and safe injection practices?";
  if (t.includes("sterilization") || t.includes("three-indicator"))
    return "What three types of indicators must validate every sterilization cycle, and what does each confirm?";
  if (t.includes("sharps"))
    return "What must a compliant sharps injury prevention program include and actively document?";
  if (t.includes("surgical environment") || t.includes("surgical safeguard"))
    return "What environmental safeguards must be maintained in and around surgical procedure areas?";
  if (t.includes("clia") || t.includes("laboratory license"))
    return "What laboratory certifications and licenses must the organization maintain and keep current?";
  if (t.includes("laboratory personnel") || (t.includes("qualified") && t.includes("lab")))
    return "What qualifications must laboratory personnel hold to perform testing under this standard?";
  if (t.includes("quality control") && t.includes("lab"))
    return "What quality control procedures and documentation does this standard require for lab testing?";
  if (t.includes("test description") || (t.includes("procedure") && t.includes("lab")))
    return "What written procedures and test descriptions must the laboratory maintain?";
  if (t.includes("pathology") || t.includes("provider review of results"))
    return "How must laboratory or pathology results be reviewed and documented in patient care?";
  if (t.includes("pharmaceutical") || (t.includes("medication") && t.includes("oversight")))
    return "What oversight responsibilities does this standard assign for pharmaceutical services?";
  if (t.includes("high-alert") || t.includes("lasa"))
    return "What safeguards must be in place for high-alert and look-alike/sound-alike medications?";
  if (t.includes("drug security") || (t.includes("medication") && t.includes("storage")))
    return "What security and storage requirements apply to medications under this standard?";
  if (t.includes("medication labeling") || t.includes("labeling outside") || t.includes("original container"))
    return "What labeling requirements apply when medications are removed from their original containers?";
  if (t.includes("vaccine"))
    return "What storage and handling requirements apply to vaccines under this standard?";
  if (t.includes("anticoagulant"))
    return "What specific safety requirements apply to anticoagulant medication management?";
  if (t.includes("alarm"))
    return "What clinical alarm management and response requirements does this standard establish?";
  if (t.includes("critical value") || (t.includes("communication") && t.includes("reporting")))
    return "What requirements govern the communication and documentation of critical test values?";
  if (t.includes("fall prevention") || t.includes("fall risk"))
    return "What fall prevention measures and documentation does this standard require?";
  if (t.includes("pressure injur") || t.includes("pressure ulcer"))
    return "What prevention measures must be in place for healthcare-associated pressure injuries?";
  if (t.includes("correct patient") || (t.includes("patient identification") && !t.includes("site")))
    return "What does this standard require to ensure every patient receives the correct care?";
  if (t.includes("suicide"))
    return "What screening and risk-reduction requirements does this standard establish for suicide prevention?";
  if (t.includes("dental") || t.includes("oncology") || t.includes("chemo") || t.includes("reproductive") || t.includes("ivf") || t.includes("fertilization"))
    return "What additional requirements apply to organizations providing this specialty service?";
  if (t.includes("quality monitoring") && t.includes("specialty"))
    return "What quality monitoring activities are required for specialty and other clinical services?";
  if (t.includes("dignity") || t.includes("shared decision"))
    return "What patient rights around dignity, privacy, and shared decision-making does this standard protect?";
  if (t.includes("communicating rights") || t.includes("before care"))
    return "When and how must patient rights and responsibilities be communicated before care begins?";
  if (t.includes("organizational information") || t.includes("accessible to patient"))
    return "What organizational information must be made accessible to patients upon request?";
  if (t.includes("language") || t.includes("manner the patient"))
    return "What communication accommodations must the organization provide for patients with language or literacy barriers?";
  if (t.includes("risk management"))
    return "What must a written risk management program include and actively monitor?";
  if (t.includes("incident") || t.includes("adverse event"))
    return "How does this standard define incidents, and what actions must follow when one occurs?";
  if (t.includes("safety program") && !t.includes("risk"))
    return "What elements must a written safety program include and address?";
  if (t.includes("product recall") || t.includes("expiration"))
    return "What processes must be in place for product recalls and expiration date monitoring?";
  if (t.includes("biolog") || t.includes("bloodborne"))
    return "What protections must be in place for healthcare workers at risk of biologic hazard exposure?";
  if (t.includes("val") || t.includes("validation"))
    return "What does the AAAHC Validation category require, and how does it differ from full accreditation?";
  if (t.includes("care plan") || t.includes("goal setting"))
    return "What must the plan of care address, and how must care goals be documented?";
  if (t.includes("ongoing monitoring") && t.includes("data"))
    return "What three-step sequence does this standard require for ongoing quality monitoring?";
  if (t.includes("governing body reporting") || t.includes("privileging connection"))
    return "How must peer review results be reported to the governing body, and how do they connect to privilege renewal?";
  if (t.includes("quality improvement stud") || t.includes("qi stud"))
    return "What components must a compliant quality improvement study include?";
  if (t.includes("integrating") || (t.includes("ipc") && t.includes("safety") && t.includes("risk")))
    return "How must quality improvement, IPC, safety, and risk management be formally linked under this standard?";
  if (t.includes("administrative polic"))
    return "What administrative policies, procedures, and internal controls must be in place and documented?";
  return `A surveyor arrives to assess: ${topic}. What evidence of compliance would you need to show?`;
}

function getQuestionPrompt(category?: string, title?: string): string {
  if (category && CATEGORY_PROMPTS[category]) return CATEGORY_PROMPTS[category];
  if (title) return deriveQuestion(getTopicLabel(title));
  return "What does this standard require?";
}

function insertAt<T>(arr: T[], idx: number, item: T): T[] {
  const next = [...arr];
  next.splice(idx, 0, item);
  return next;
}

interface ReviewCard {
  levelId: string;
  cardIndex: number;
  reviewId: number;
}

export default function FlashcardReviewPage() {
  const [, setLocation] = useLocation();

  const { data: dueReviews, isLoading, isError } = useQuery<FlashcardReview[]>({
    queryKey: ["/api/flashcards/due"],
    queryFn: async () => {
      const res = await fetch("/api/flashcards/due", { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
    staleTime: 0,
  });

  const reviewCards = useMemo<ReviewCard[]>(() => {
    if (!dueReviews) return [];
    return dueReviews.map((r) => ({
      levelId: r.levelId,
      cardIndex: r.cardIndex,
      reviewId: r.id,
    }));
  }, [dueReviews]);

  const [queue, setQueue] = useState<number[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionDone, setSessionDone] = useState(false);
  const [ratings, setRatings] = useState<Record<number, SRRating>>({});

  useEffect(() => {
    if (reviewCards.length > 0 && queue.length === 0) {
      setQueue(Array.from({ length: reviewCards.length }, (_, i) => i));
    }
  }, [reviewCards]);

  useEffect(() => {
    setFlipped(false);
  }, [queueIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (sessionDone) return;
      if (e.key === " ") { e.preventDefault(); setFlipped((v) => !v); }
      if (e.key === "ArrowRight" && flipped) rate("good");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [flipped, queueIndex, sessionDone]);

  const reviewMutation = useMutation({
    mutationFn: async ({ levelId, cardIndex, rating }: { levelId: string; cardIndex: number; rating: SRRating }) => {
      const res = await apiRequest("POST", `/api/flashcards/${levelId}/review`, { cardIndex, rating });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/flashcards/due/count"] });
      queryClient.invalidateQueries({ queryKey: ["/api/flashcards/due"] });
    },
  });

  const rate = (rating: SRRating) => {
    const cfg = SR_CONFIG[rating];
    setRatings((prev) => ({ ...prev, [queue[queueIndex]]: rating }));

    const card = reviewCards[queue[queueIndex]];
    if (card) {
      reviewMutation.mutate({ levelId: card.levelId, cardIndex: card.cardIndex, rating });
    }

    const nextQueueIndex = queueIndex + 1;
    if (cfg.requeue !== null) {
      const insertPos = Math.min(nextQueueIndex + cfg.requeue, queue.length);
      const newQueue = insertAt(queue, insertPos, queue[queueIndex]);
      setQueue(newQueue);
      if (nextQueueIndex >= newQueue.length) setSessionDone(true);
      else setQueueIndex(nextQueueIndex);
    } else {
      if (nextQueueIndex >= queue.length) setSessionDone(true);
      else setQueueIndex(nextQueueIndex);
    }
  };

  const ratingCounts: Record<SRRating, number> = { again: 0, hard: 0, good: 0 };
  Object.values(ratings).forEach((r) => { ratingCounts[r]++; });
  const totalRated = Object.values(ratingCounts).reduce((a, b) => a + b, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-violet-500 border-t-transparent" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <p className="text-muted-foreground text-sm text-center max-w-xs mb-6">
          Unable to load your flashcard queue. Please try again.
        </p>
        <Button onClick={() => setLocation("/")} data-testid="button-back-to-dashboard">
          Back to Dashboard
        </Button>
      </div>
    );
  }

  if (reviewCards.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-violet-500/15 border-2 border-violet-500/30 mb-4">
          <Brain size={28} className="text-violet-400" />
        </div>
        <h2 className="text-2xl font-black mb-2">All caught up!</h2>
        <p className="text-muted-foreground text-sm text-center max-w-xs mb-6">
          No flashcards are due for review right now. Keep studying to build up your review queue.
        </p>
        <Button onClick={() => setLocation("/")} data-testid="button-back-to-dashboard">
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const currentSlot = queue[queueIndex];
  const currentCard = reviewCards[currentSlot];
  const currentLevel = currentCard ? findLevelById(currentCard.levelId) : undefined;
  const currentConcept = currentLevel?.studyMaterial?.[currentCard?.cardIndex ?? 0];
  const catKey = currentConcept?.category;
  const cat = catKey ? CATEGORY_CONFIG[catKey] : null;
  const levelColor = currentLevel?.color ?? "#7c3aed";
  const uniqueRemaining = new Set(queue.slice(queueIndex)).size;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2">
              <Brain size={16} className="text-violet-400" />
              <h2 className="font-bold text-base text-violet-300" data-testid="text-review-title">
                Due for Review
              </h2>
            </div>
          </div>
          <div className="w-10" />
        </div>

        {/* Progress bar */}
        {!sessionDone && (
          <div className="max-w-lg mx-auto px-4 pb-3">
            <div className="flex gap-1">
              {reviewCards.map((_, i) => {
                const r = ratings[i];
                const isActive = queue[queueIndex] === i;
                return (
                  <div
                    key={i}
                    className="flex-1 h-1.5 rounded-full transition-all"
                    style={{
                      backgroundColor: r ? SR_CONFIG[r].dot : isActive ? levelColor : "#334155",
                      opacity: r ? 0.9 : isActive ? 0.9 : 0.25,
                    }}
                    data-testid={`dot-review-${i}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Active cards */}
      {!sessionDone && currentConcept && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 gap-5">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Card <span className="font-black" style={{ color: levelColor }}>{queueIndex + 1}</span>
              {queue.length > reviewCards.length
                ? <span className="text-muted-foreground/60"> · {uniqueRemaining} left</span>
                : <span className="text-muted-foreground/60"> of {reviewCards.length}</span>
              }
            </span>
            {currentLevel && (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                style={{ color: levelColor, borderColor: `${levelColor}40`, background: `${levelColor}12` }}
              >
                {currentLevel.name}
              </span>
            )}
            {ratingCounts.good > 0 && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                ✓ {ratingCounts.good} done
              </span>
            )}
          </div>

          <div className="w-full max-w-lg" data-testid={`card-review-${currentSlot}`}>
            <AnimatePresence mode="wait" initial={false}>
              {!flipped ? (
                <motion.div
                  key={`front-${queueIndex}`}
                  initial={FLIP_VARIANTS.enterFront}
                  animate={FLIP_VARIANTS.center}
                  exit={FLIP_VARIANTS.exitFront}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Card
                    className="rounded-2xl border-2 p-7 flex flex-col gap-5 shadow-lg cursor-pointer select-none active:scale-[0.99] transition-transform"
                    style={{ borderColor: `${levelColor}30`, minHeight: "300px" }}
                    onClick={() => setFlipped(true)}
                    data-testid="card-front"
                  >
                    <div className="flex items-center justify-between">
                      {cat ? (
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${cat.bg} ${cat.text} ${cat.border}`}>
                          {cat.label}
                        </span>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-muted text-muted-foreground border-border">
                          Concept
                        </span>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-4">
                      <p className="text-xl font-black leading-snug" data-testid="text-concept-question">
                        {getQuestionPrompt(currentConcept.category, currentConcept.title)}
                      </p>
                      {currentConcept.category ? (
                        <p className="text-sm font-semibold text-muted-foreground leading-snug" data-testid="text-concept-title">
                          Topic: {getTopicLabel(currentConcept.title)}
                        </p>
                      ) : getCodeLabel(currentConcept.title) ? (
                        <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest" data-testid="text-concept-title">
                          {getCodeLabel(currentConcept.title)}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-2 border-t border-border/40">
                      <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">
                        Tap card to reveal answer
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key={`back-${queueIndex}`}
                  initial={FLIP_VARIANTS.enterFront}
                  animate={FLIP_VARIANTS.center}
                  exit={FLIP_VARIANTS.exitFront}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Card
                    className="rounded-2xl border-2 p-7 flex flex-col gap-5 shadow-lg"
                    style={{ borderColor: `${levelColor}50` }}
                    data-testid="card-back"
                  >
                    <div className="flex items-center justify-between">
                      {cat ? (
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${cat.bg} ${cat.text} ${cat.border}`}>
                          {cat.label}
                        </span>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-muted text-muted-foreground border-border">
                          Concept
                        </span>
                      )}
                      <button
                        onClick={() => setFlipped(false)}
                        className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                        data-testid="button-flip-to-question"
                      >
                        <RotateCcw size={11} />
                        See question
                      </button>
                    </div>

                    {/* Answer — keyPoint is the direct answer */}
                    <div
                      className="rounded-xl p-5 border"
                      style={{ backgroundColor: `${levelColor}12`, borderColor: `${levelColor}30` }}
                    >
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: levelColor }}>
                        Answer
                      </p>
                      <p className="text-lg font-bold leading-snug" data-testid="text-concept-keypoint">
                        {currentConcept.keyPoint}
                      </p>
                    </div>

                    {/* Explanation */}
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        Explanation
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed" data-testid="text-concept-content">
                        {currentConcept.content}
                      </p>
                    </div>

                    {currentConcept.extraInfo && (
                      <div className="rounded-xl p-4 bg-muted/40 border border-border/50">
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-muted-foreground">
                          Also Note
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-concept-extrainfo">
                          {currentConcept.extraInfo}
                        </p>
                      </div>
                    )}

                    {/* 3-Button SR Row */}
                    <div className="flex flex-col gap-2 pt-1">
                      <p className="text-[10px] text-center text-muted-foreground/50 font-semibold uppercase tracking-widest">
                        How well did you know this?
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {(["again", "hard", "good"] as SRRating[]).map((r) => {
                          const cfg = SR_CONFIG[r];
                          const Icon = cfg.icon;
                          return (
                            <button
                              key={r}
                              onClick={() => rate(r)}
                              className={`flex flex-col items-center gap-1 px-1 py-2.5 rounded-xl border font-bold text-[11px] transition-all active:scale-95 ${cfg.btn}`}
                              data-testid={`button-rate-${r}`}
                            >
                              <Icon size={14} />
                              <span>{cfg.label}</span>
                              <span className="text-[9px] font-semibold opacity-70">{cfg.interval}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 w-full max-w-lg">
            <div className="flex-1 text-center">
              {!flipped && (
                <button
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                  onClick={() => setFlipped(true)}
                  data-testid="button-flip-card"
                >
                  Flip
                </button>
              )}
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground/40 text-center hidden sm:block">
            Space = flip &nbsp;·&nbsp; → = Good
          </p>
        </div>
      )}

      {/* Session Complete */}
      {sessionDone && (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-lg space-y-5"
            >
              <div className="flex flex-col items-center gap-3 py-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-violet-500/15 border-2 border-violet-500/30">
                  <Trophy size={30} className="text-violet-400" />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-black" data-testid="text-session-complete">Review Complete!</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    You reviewed {totalRated} card{totalRated !== 1 ? "s" : ""} from your due queue
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {(["good", "hard", "again"] as SRRating[]).map((r) => {
                  const cfg = SR_CONFIG[r];
                  const Icon = cfg.icon;
                  const count = ratingCounts[r];
                  return (
                    <Card
                      key={r}
                      className={`rounded-2xl p-4 border-2 text-center ${count === 0 ? "opacity-40" : ""}`}
                      style={{
                        borderColor: count > 0 ? `${cfg.dot}40` : undefined,
                        background: count > 0 ? `${cfg.dot}10` : undefined,
                      }}
                      data-testid={`stat-rating-${r}`}
                    >
                      <Icon size={18} className="mx-auto mb-1" style={{ color: count > 0 ? cfg.dot : undefined }} />
                      <div className="text-3xl font-black" style={{ color: count > 0 ? cfg.dot : undefined }}>{count}</div>
                      <div className="text-xs font-bold uppercase tracking-wide mt-0.5 opacity-80" style={{ color: count > 0 ? cfg.dot : undefined }}>
                        {cfg.label}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{cfg.interval}</div>
                    </Card>
                  );
                })}
              </div>

              <Card className="rounded-2xl border-2 p-5 border-violet-500/20">
                <p className="text-sm text-foreground/75 leading-relaxed text-center">
                  {ratingCounts.again + ratingCounts.hard === 0
                    ? "Excellent! All cards rated Good — they'll return tomorrow."
                    : `${ratingCounts.good} card${ratingCounts.good !== 1 ? "s" : ""} scheduled for tomorrow. ${ratingCounts.again + ratingCounts.hard} card${ratingCounts.again + ratingCounts.hard !== 1 ? "s" : ""} coming back sooner.`}
                </p>
              </Card>

              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => setLocation("/")}
                  data-testid="button-back-to-dashboard"
                >
                  Back to Dashboard <ChevronRight size={16} className="ml-1" />
                </Button>
                {(ratingCounts.again > 0 || ratingCounts.hard > 0) && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      const needsWork = Object.entries(ratings)
                        .filter(([, r]) => r === "again" || r === "hard")
                        .map(([i]) => Number(i));
                      setQueue(needsWork);
                      setQueueIndex(0);
                      setFlipped(false);
                      setRatings({ again: 0, hard: 0, good: 0 } as any);
                      setSessionDone(false);
                    }}
                    data-testid="button-review-weak"
                  >
                    <RefreshCw size={16} className="mr-2" /> Review Weak Cards Again
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
