import type { DeepDiveLevel } from "./schema";

export const ddMedicationLevel: DeepDiveLevel = {
  id: "dd-medication",
  name: "Medication Management Deep Dive",
  description: "Expert-level scenarios on high-alert medications, LASA safeguards, medication reconciliation failures, override patterns, and JC compliance in complex clinical situations.",
  icon: "Microscope",
  color: "hsl(346, 78%, 48%)",
  baseLevelId: "medication_management",
  questions: [
    {
      id: "dd-mm1",
      baseQuestion: "A surveyor finds heparin infusion bags in two concentrations (25,000 units/250 mL and 25,000 units/500 mL) stored in the same pharmacy bin on a cardiac unit. Both are available for nursing to select. What is the immediate compliance concern?",
      baseOptions: [
        "No concern — the concentration is printed on each bag label and nurses verify before hanging",
        "Multiple concentrations of a high-alert anticoagulant in the same storage location create dangerous mix-up potential — differentiation strategies or concentration standardization are required",
        "Concern exists only when both concentrations are available in the same patient's room simultaneously",
        "The concern is limited to look-alike packaging — if the bags are visually distinct, storage together is acceptable"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Heparin is a high-alert anticoagulant. Storing two different concentrations together creates a selection error risk that can result in 2-fold dosing errors. JC requires differentiation: separate storage, clear concentration labeling, and ideally standardization to a single concentration. Relying on label reading alone is insufficient for high-alert medications.",
      baseXp: 15,
      followUps: [
        {
          question: "The pharmacy director proposes eliminating the 25,000/500 mL concentration entirely and standardizing to 25,000/250 mL for all heparin infusions. A cardiologist objects, stating that some patients require the lower concentration for fluid management reasons. How should this conflict be resolved within a JC-compliant framework?",
          options: [
            "The cardiologist's clinical judgment supersedes the safety-driven standardization — physicians can order any concentration they deem appropriate",
            "The medication safety committee should evaluate the clinical rationale for dual concentrations, define clear criteria for when each is appropriate, implement additional safeguards if dual concentrations are maintained, and document the decision with leadership approval",
            "The pharmacy director has final authority over formulary decisions — standardization should proceed regardless of physician objections",
            "The conflict should be submitted to JC for resolution before any formulary change is implemented"
          ],
          correctIndex: 1,
          explanation: "Clinical and safety considerations must both be addressed through a structured process. The medication safety committee (or equivalent governance body) is the appropriate forum — they can evaluate whether the clinical need is valid, define criteria for when each concentration is indicated, and determine what additional safeguards are required if both concentrations are maintained. This process satisfies JC's expectation that medication safety decisions involve interprofessional governance.",
          expertXp: 25
        },
        {
          question: "After standardizing to a single heparin concentration, a medication error occurs when a nurse selects the wrong weight for the weight-based dosing protocol, resulting in a 2-fold overdose. The patient develops a serious bleeding event. What does JC require the facility to do with this event?",
          options: [
            "Disciplinary action for the nurse who selected the wrong weight, followed by re-education on weight-based protocol",
            "Report the event as a sentinel event if it resulted in serious patient harm, conduct a root cause analysis, implement system-level corrective actions, and provide a quality improvement report to leadership",
            "Conduct an internal review only — reporting to JC is voluntary for medication errors",
            "File an incident report within 72 hours — no further action is required unless the patient dies"
          ],
          correctIndex: 1,
          explanation: "A serious patient harm event from a medication error meets the definition of a sentinel event under JC standards. Facilities are expected to report sentinel events and conduct a thorough root cause analysis examining contributing factors beyond the individual provider error — including protocol design, weight verification processes, pump programming safeguards, and override patterns. System-level corrective actions must be implemented and their effectiveness monitored.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm2",
      baseQuestion: "A surveyor observes a nurse drawing up three medications from different vials in the pre-op area and placing labeled syringes on a tray. The nurse then draws a fourth medication and places the unlabeled syringe on the tray saying 'I'll label it in a second.' The surveyor stops the nurse. What is the finding?",
      baseOptions: [
        "No finding — the nurse stated intention to label the syringe and only momentarily set it down",
        "Immediate finding — all medications must be labeled at the point of preparation; the unlabeled syringe must be discarded regardless of intended subsequent labeling",
        "Finding only if the unlabeled syringe contains a high-alert medication",
        "Minor finding — the nurse can label it within 5 minutes without discarding the syringe"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires labeling at the point of preparation — not 'soon after.' An unlabeled syringe is indistinguishable from other syringes on the tray and must be discarded. The risk of mix-up during the labeling delay, particularly in a busy pre-op environment with multiple syringes, is unacceptable.",
      baseXp: 15,
      followUps: [
        {
          question: "After the survey, the anesthesia department reports that the unlabeled syringe practice has been standard in their pre-op area for years because 'everyone knows what's in it.' The department chief pushes back on the finding, arguing clinical context eliminates the safety risk. How should hospital leadership respond?",
          options: [
            "Acknowledge the department's experience and allow a modified standard for pre-op areas where providers prepare their own medications and context is clear",
            "Reject the rationalization — 'everyone knows' is not a safety system; leaders must reinforce the labeling standard, address the cultural normalization of the unsafe practice, and implement monitoring to verify sustained compliance",
            "Escalate to JC for guidance on whether an exception applies to anesthesia pre-op preparation areas",
            "Accept the exception during normal operations and require full labeling only during scheduled inspections or surveys"
          ],
          correctIndex: 1,
          explanation: "Cultural normalization of unsafe practices ('we've always done it this way' or 'everyone knows') is a recognized patient safety failure mode. Leadership must reject the rationalization, communicate why the standard exists (multiple wrong-drug errors have occurred in exactly these 'everyone knows' situations), implement the standard fully, and monitor compliance. Accepting survey-only compliance reinforces exactly the wrong behavioral pattern.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm3",
      baseQuestion: "A pharmacist's override log review shows that 34% of all ADC overrides on the medical-surgical floor occurred for non-emergency medications during normal pharmacy hours, including routine antibiotics, antihypertensives, and sleeping medications. What does this pattern indicate?",
      baseOptions: [
        "Normal operational variance — some override rate is expected in any ADC system and 34% is within acceptable limits",
        "The override rate suggests systemic issues with pharmacy turnaround time, ADC stocking, or workflow design that are driving staff to bypass the pharmacist review safety check for non-urgent medications",
        "The overrides are appropriate since nurses have clinical judgment authority to determine which medications are urgent",
        "The pattern indicates the ADC software threshold settings need to be tightened — a system configuration change will resolve the issue"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A high override rate for non-emergency medications during pharmacy operational hours indicates that the pharmacy review process is not serving the clinical workflow — staff are overriding routinely because it is faster. This eliminates the pharmacist safety check for a significant portion of medications. JC expects override rates to be monitored and high rates to trigger root cause analysis and system improvement.",
      baseXp: 20,
      followUps: [
        {
          question: "The pharmacy director proposes reducing overrides by requiring a supervisor cosign for every override. Nursing leadership predicts this will slow medication administration and increase patient complaints. How should the facility balance the competing concerns?",
          options: [
            "Prioritize patient experience — override restrictions that increase wait times for medication administration should not be implemented",
            "The underlying problem is not override approval authority but pharmacy turnaround time and ADC par levels — the correct solution addresses the root cause (improving pharmacy responsiveness and stocking) rather than adding friction to the existing broken workflow",
            "Implement the supervisor cosign requirement and monitor for one quarter before evaluating the impact",
            "Allow nursing leadership to set their own override policy — pharmacy has no authority over nursing ADC use practices"
          ],
          correctIndex: 1,
          explanation: "Adding a supervisor cosign to a fundamentally broken workflow adds bureaucratic friction without fixing the underlying problem. If overrides are occurring because pharmacy is slow or ADCs are understocked, those are the root causes to address — faster pharmacy response, improved par level management, and better first-dose stocking. Addressing root causes improves both safety and efficiency, while cosign requirements alone only slow an already suboptimal process.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm4",
      baseQuestion: "A medication reconciliation audit reveals that 42% of patients discharged to home had at least one home medication not addressed on the discharge reconciliation — neither continued, modified, held, or intentionally discontinued with documentation. What is the patient safety risk and compliance finding?",
      baseOptions: [
        "Low risk — patients can self-manage their home medications based on pre-admission practices",
        "High risk — unaddressed home medications create significant potential for patients to omit critical medications (antihypertensives, anticoagulants, seizure medications) or continue medications that should be stopped — this represents a systemic reconciliation failure requiring improvement",
        "Moderate risk — the finding applies only if the unaddressed medications are high-alert drugs",
        "The finding exists but requires documentation only of controlled substances — other medication classes are lower priority"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Medication reconciliation at discharge is a patient safety requirement. A 42% rate of unaddressed home medications means nearly half of discharged patients received an incomplete discharge medication list. Patients may stop critical medications thinking they were intentionally discontinued, or they may unknowingly duplicate medications. This systemic failure requires a root cause analysis and process redesign.",
      baseXp: 15,
      followUps: [
        {
          question: "To address the reconciliation failure rate, the quality team proposes making medication reconciliation a required field in the electronic discharge documentation — the system will not allow discharge completion until all home medications are addressed. The nursing staff objects, saying this will delay discharges and is 'too rigid.' How should leadership respond?",
          options: [
            "Support the nursing objection — discharge workflow efficiency should take priority over mandatory reconciliation checkpoints",
            "Implement the hard stop with appropriate workflow support — a 42% failure rate indicates the current voluntary process is insufficient and a system-level control is warranted; address the workflow efficiency concern by ensuring the process is streamlined, not by removing the safety checkpoint",
            "Implement the hard stop only for patients on high-alert medications — for other patients, maintain the current voluntary approach",
            "Pilot the hard stop on one unit for 90 days before considering broader implementation"
          ],
          correctIndex: 1,
          explanation: "A 42% deficiency rate demonstrates that voluntary compliance with medication reconciliation is not working. A hard stop in the EHR is an appropriate system-level control — it changes the environment to make the right action the required action. Workflow efficiency concerns should be addressed by optimizing the reconciliation process itself (auto-population of home medication lists, pharmacy support), not by removing the safety gate.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm5",
      baseQuestion: "During a tracer activity, a surveyor asks a bedside nurse to explain what makes warfarin a 'high-alert medication' and describe one safeguard used on this unit. The nurse says 'I know it's high-alert because it's on the list, but I don't know any specific safeguard we have for it.' What does this response reveal?",
      baseOptions: [
        "Acceptable knowledge level — knowing the medication is high-alert is the primary staff expectation",
        "The response reveals inadequate staff education — staff must know both what makes a medication high-alert and the specific facility safeguards they are expected to implement during administration",
        "The surveyor's question is unreasonable — safeguard details are pharmacy and policy responsibilities, not bedside nursing knowledge",
        "No concern — the nurse can look up the safeguards in the policy manual during patient care situations"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Knowing a medication is 'on the list' without understanding why or what safeguards apply is insufficient. Staff must understand what makes high-alert medications dangerous (narrow therapeutic index, severe bleeding risk for warfarin) and know the specific safeguards they are expected to apply — such as INR monitoring before administration, weight-based dosing, hold parameters, and patient education. This knowledge gap is a staff education deficiency.",
      baseXp: 15,
      followUps: [
        {
          question: "The pharmacy director reports that the high-alert medication education was delivered via a 15-minute online learning module completed by 94% of nursing staff with 100% passing rate on the post-test. Yet staff knowledge at the bedside is consistently inadequate on tracer surveys. What does this disconnect indicate?",
          options: [
            "The online module is sufficient — bedside knowledge gaps are attributable to staff forgetting over time, which is expected and unavoidable",
            "A high completion and pass rate on a knowledge test does not guarantee transfer of knowledge to bedside practice — competency must be assessed in context, not just through testing, and the education modality may need to shift to include scenario-based application and direct observation",
            "The disconnect means the post-test questions are too easy — increasing test difficulty will improve bedside knowledge transfer",
            "The 94% completion rate means 6% of staff are the source of all bedside knowledge gaps"
          ],
          correctIndex: 1,
          explanation: "This is the classic education-to-practice gap. Online modules test recognition knowledge ('which of these is high-alert?') but do not necessarily build the applied competence to identify and implement safeguards in complex real situations. JC-aligned competency development includes situational application, not just test-passing. Adding scenario-based simulation, case reviews with clinical examples, and direct observation of practice improves actual bedside performance.",
          expertXp: 25
        }
      ]
    }
  ]
};
