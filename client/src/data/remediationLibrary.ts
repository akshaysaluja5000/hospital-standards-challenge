// ── Remediation Library ────────────────────────────────────────────────────
//
// STRUCTURE:
//   REMEDIATION_LIBRARY  — category name → array of 3 preset plans
//   LEVEL_TO_CATEGORY    — levelId → category name (one-to-one)
//   getRemediationPlan() — levelId + score % → assigned steps + reassessment flag
//
// SCORE THRESHOLDS:
//   ≥ 70%     : no remediation
//   60 – 69%  : 1 plan assigned (primary review)
//   50 – 59%  : 2 plans assigned (review + reinforcement)
//   < 50%     : 2 plans assigned + reassessmentRequired flag
//
// LANGUAGE POLICY:
//   Supportive educational wording only.
//   Do not use incident-based or operational corrective action language.

export interface RemediationPlan {
  title: string;
  description: string;
}

export interface RemediationResult {
  category: string;
  steps: RemediationPlan[];
  reassessmentRequired: boolean;
}

// ── Category → 3 preset plans ─────────────────────────────────────────────

export const REMEDIATION_LIBRARY: Record<string, [RemediationPlan, RemediationPlan, RemediationPlan]> = {

  "Instrument Integrity": [
    {
      title: "Targeted Review of Instrument Inspection Concepts",
      description:
        "Work through the study cards for Instrument Integrity at your own pace. Focus on the rules for functional testing, tip condition, and documentation requirements before your next quiz attempt.",
    },
    {
      title: "Guided Instrument Inspection Walkthrough",
      description:
        "Ask a preceptor or lead tech to walk through a real instrument set with you step by step. Observe the inspection process, ask questions, and take notes on any steps that were unclear.",
    },
    {
      title: "Return Demonstration: Instrument Check Before Use",
      description:
        "Demonstrate the full instrument pre-use inspection process to your supervisor or preceptor. Explain each step as you perform it, then discuss any areas where you felt uncertain.",
    },
  ],

  "Facilities & Equipment": [
    {
      title: "Focused Review of Equipment Safety Standards",
      description:
        "Review the study cards covering equipment maintenance cycles, PM sticker requirements, and documentation standards. Pay close attention to the rules around equipment readiness and reporting.",
    },
    {
      title: "Unit-Based Equipment Safety Observation",
      description:
        "Walk your unit with a supervisor or charge staff member. Identify equipment items together and discuss what a surveyor would look for regarding maintenance records, labels, and storage conditions.",
    },
    {
      title: "Equipment Compliance Reinforcement Quiz",
      description:
        "Retake the Facilities & Equipment quiz after your review. If you score 70% or higher, you are ready to move on. If not, schedule a brief check-in with your manager before your next attempt.",
    },
  ],

  "SPD & Decontamination": [
    {
      title: "Decontamination Workflow Review",
      description:
        "Go back through the SPD & Decontamination study cards and focus on the sequence of the decontamination process, PPE requirements, and sink usage standards. Understanding the 'why' behind each step will help it stick.",
    },
    {
      title: "Checklist Walkthrough with Preceptor",
      description:
        "Complete a decontamination area walkthrough with an experienced SPD team member. Use your facility's standard checklist and ask your preceptor to highlight any commonly missed compliance points.",
    },
    {
      title: "Scenario Review + Reassessment",
      description:
        "Review two or three common decontamination scenarios from the study material — particularly around PPE breaches and instrument flow. Once confident, schedule a reassessment with your supervisor.",
    },
  ],

  "OR & Sterile Technique": [
    {
      title: "Sterile Field and Attire Review",
      description:
        "Review the study concepts covering gown and glove technique, sterile field boundaries, and what constitutes a break in sterility. The key rules are specific — read each one carefully before retesting.",
    },
    {
      title: "Observed Sterile Technique Reinforcement",
      description:
        "Ask a circulator, scrub tech, or OR educator to observe you setting up or assisting with a sterile field. Request feedback after the case on anything that could be improved from a compliance standpoint.",
    },
    {
      title: "Teach-Back on Breaks in Sterility",
      description:
        "Explain to your supervisor or educator what constitutes a break in the sterile field and what the correct response is. Teaching the concept back in your own words is one of the most effective ways to confirm understanding.",
    },
  ],

  "Transport of Instruments": [
    {
      title: "Instrument Transport Process Review",
      description:
        "Review the study cards for Transport of Instruments, focusing on point-of-use cleaning, containment requirements, and the flow from the OR or procedure room to the decontamination area.",
    },
    {
      title: "Workflow Observation: Point of Use to Decontam",
      description:
        "Follow a transport cycle from point of use through delivery to SPD with an experienced staff member. Observe proper containment, labeling, and handoff steps, and ask about any steps that were unclear in your review.",
    },
    {
      title: "Transport Compliance Retest",
      description:
        "After completing your review and observation, retake the quiz. Aim for 70% or above to confirm readiness. If needed, consult the study cards one more time before your attempt.",
    },
  ],

  "Environment & Surfaces": [
    {
      title: "Environmental Infection Prevention Review",
      description:
        "Go through the study cards for Environment & Surfaces, paying close attention to terminal cleaning standards, high-touch surface protocols, and what surveyors typically evaluate in patient care areas.",
    },
    {
      title: "Area Walkthrough with Supervisor",
      description:
        "Walk a patient care area or clinical space with your supervisor. Discuss what you observe from a cleanliness and compliance standpoint — look at surfaces, waste containers, and environmental conditions together.",
    },
    {
      title: "Scenario-Based Surface Safety Review",
      description:
        "Work through the scenario-type study cards in this category. These are designed to help you apply the standards to real situations. Discuss any tricky scenarios with your supervisor or infection prevention contact.",
    },
  ],

  "Clean vs. Dirty": [
    {
      title: "Segregation Principles Review",
      description:
        "Review the clean/dirty separation study cards. Focus on the rules for physical separation, airflow considerations, and how surveyors evaluate segregation compliance in your environment.",
    },
    {
      title: "Verbal Workflow Walkthrough",
      description:
        "Verbally walk your supervisor or preceptor through the clean-to-dirty workflow in your area. Describe the separation points, the flow of instruments, and how contamination is prevented at each step.",
    },
    {
      title: "Teach-Back on Contamination Prevention",
      description:
        "Explain to your educator or supervisor what can go wrong when clean and dirty items are not properly separated, and what the correct prevention steps are. Identifying the 'why' helps reinforce the standard.",
    },
  ],

  "Sterile Storage": [
    {
      title: "Sterile Storage Standards Review",
      description:
        "Review the study cards covering sterile storage — shelf height requirements, event-related vs. time-related expiration, humidity and temperature ranges, and what to look for on packaging integrity.",
    },
    {
      title: "Storage Area Guided Review",
      description:
        "Walk your sterile storage area with a supervisor or sterile processing lead. Identify together any items or conditions that might not meet Joint Commission expectations, and discuss the applicable standards.",
    },
    {
      title: "Storage Decision Scenarios",
      description:
        "Work through the scenario-type study cards in the Sterile Storage category. These focus on edge cases — damaged packaging, borderline shelf heights, and expiration decisions — that often appear on surveys.",
    },
  ],

  "Surgical Safety & Consent": [
    {
      title: "Universal Protocol Review",
      description:
        "Review the study cards for Surgical Safety & Consent, with a focus on the three components of Universal Protocol: pre-procedure verification, site marking, and the time-out. Understand the required participants and documentation.",
    },
    {
      title: "Pre-Procedure Safety Walkthrough",
      description:
        "Walk through a pre-procedure verification process with an OR educator, charge nurse, or physician. Discuss what is required at each step, who owns each component, and what a surveyor would look for.",
    },
    {
      title: "Teach-Back: Time-Out and Consent",
      description:
        "Explain to your supervisor or educator how the time-out is conducted, what must be confirmed, and how consent is documented in your facility. If any part of the explanation is uncertain, review that section of the study cards before retesting.",
    },
  ],

  "Patient Care & Documentation": [
    {
      title: "Documentation and Care Standards Review",
      description:
        "Review the Patient Care & Documentation study cards. Focus on the rules for care planning, patient education, medication reconciliation, and how records are expected to reflect care delivered.",
    },
    {
      title: "Case-Based Documentation Practice",
      description:
        "Work through the scenario-type cards in this category. These present common documentation gaps and ask you to identify what is missing or incorrect. Discuss any scenarios that were unclear with your supervisor.",
    },
    {
      title: "Focused Reassessment",
      description:
        "After completing your review and scenario practice, schedule a brief reassessment with your educator or manager. The goal is to confirm that the core documentation and care standards are clear before your next quiz attempt.",
    },
  ],

  "EOC & Safety Compliance": [
    {
      title: "Environment of Care Review",
      description:
        "Work through the EOC & Safety Compliance study cards. Focus on fire safety requirements, utility system responsibilities, hazardous materials management, and what each category of the Environment of Care program covers.",
    },
    {
      title: "Safety Checklist Walkthrough",
      description:
        "Complete a safety-focused walkthrough of your department or unit with your supervisor. Use a standard EOC checklist and identify together any conditions that could be cited in a survey.",
    },
    {
      title: "Safety Readiness Reassessment",
      description:
        "After your review and walkthrough, take the quiz again. If specific EOC standards are still unclear, ask your safety officer or manager to clarify before your next attempt.",
    },
  ],
};

// ── Level ID → Category mapping ────────────────────────────────────────────
// Each hospital level ID maps to exactly one remediation category.

export const LEVEL_TO_CATEGORY: Record<string, string> = {
  transport:        "Transport of Instruments",
  environment:      "Environment & Surfaces",
  segregation:      "Clean vs. Dirty",
  sterile_storage:  "Sterile Storage",
  instruments:      "Instrument Integrity",
  facilities:       "Facilities & Equipment",
  spd_decontam:     "SPD & Decontamination",
  or_sterile_field: "OR & Sterile Technique",
  universal_protocol: "Surgical Safety & Consent",
  patient_care_docs:  "Patient Care & Documentation",
  eoc_safety:         "EOC & Safety Compliance",
};

// ── Assignment function ────────────────────────────────────────────────────
//
// Returns null if no remediation is warranted (score ≥ 70%).
// Otherwise returns the category label, the assigned plan steps,
// and a flag indicating whether a supervisor reassessment is required.

export function getRemediationPlan(
  levelId: string,
  percentage: number
): RemediationResult | null {
  if (percentage >= 70) return null;

  const category = LEVEL_TO_CATEGORY[levelId];
  if (!category) return null;

  const plans = REMEDIATION_LIBRARY[category];
  if (!plans) return null;

  // 60–69%: 1 step — targeted review only
  if (percentage >= 60) {
    return {
      category,
      steps: [plans[0]],
      reassessmentRequired: false,
    };
  }

  // 50–59%: 2 steps — review + reinforcement activity
  if (percentage >= 50) {
    return {
      category,
      steps: [plans[0], plans[1]],
      reassessmentRequired: false,
    };
  }

  // < 50%: 2 steps + reassessment required before completion
  return {
    category,
    steps: [plans[0], plans[1]],
    reassessmentRequired: true,
  };
}
