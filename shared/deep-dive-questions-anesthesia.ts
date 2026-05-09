import type { DeepDiveLevel } from "./schema";

export const ddAnesthesiaLevel: DeepDiveLevel = {
  id: "dd-anesthesia",
  name: "Anesthesia & Sedation Deep Dive",
  description: "Expert-level questions on moderate sedation credentialing, post-anesthesia documentation, reversal agents, regional anesthesia protocols, and JC compliance scenarios.",
  icon: "Microscope",
  color: "hsl(262, 65%, 52%)",
  baseLevelId: "anesthesia_sedation",
  questions: [
    {
      id: "dd-anes1",
      baseQuestion: "A hospitalist with moderate sedation privileges administers midazolam and fentanyl for a bedside procedure. Thirty minutes in, the patient becomes minimally responsive, only reacting to painful stimulation. The hospitalist continues the procedure. What has occurred and what is the primary compliance issue?",
      baseOptions: [
        "The patient is in expected moderate sedation — deep unresponsiveness is a normal variation within the moderate sedation range",
        "The patient has transitioned to deep sedation — the hospitalist must hold deep sedation privileges to continue, which is a higher credential level",
        "The patient is under general anesthesia — the procedure must stop and anesthesia must be called immediately",
        "No compliance issue exists as long as the patient's oxygen saturation remains above 92%"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "When a patient no longer responds to verbal or light tactile stimulation, they have crossed into deep sedation. JC requires the administering provider to hold a specific deep sedation privilege — which is distinct from and higher than a moderate sedation credential. Continuing without that credential is a compliance finding.",
      baseXp: 15,
      followUps: [
        {
          question: "The hospitalist argues that the transition to deep sedation was unintended and brief. The facility's policy does not address unintended sedation depth escalation. What are the JC compliance implications of this policy gap?",
          options: [
            "No implications — unintended sedation escalation is an expected clinical event and does not require specific policy guidance",
            "The policy gap means the facility lacks defined procedures for managing unintended sedation depth escalation, which JC would cite as a deficiency in the sedation management program",
            "The compliance issue rests entirely with the individual provider — facility policy gaps are not cited when the root cause is a provider credentialing issue",
            "The gap is permissible if the facility documents the event as a near-miss and submits a corrective action plan within 90 days"
          ],
          correctIndex: 1,
          explanation: "JC requires that the hospital's anesthesia and sedation policies address the full spectrum of clinical scenarios, including unintended sedation level escalation. A policy that does not define what to do when a patient transitions unexpectedly from moderate to deep sedation leaves staff without guidance during a critical moment. This policy gap would be cited as a systemic deficiency in the sedation program.",
          expertXp: 25
        },
        {
          question: "Following the event, the quality team conducts a root cause analysis. They discover the hospitalist has performed 47 moderate sedation cases in the past year, four of which involved unintended deep sedation transitions, all undocumented. What systemic failures does this reveal and what corrections are required?",
          options: [
            "The failure is individual provider non-compliance — suspension of privileges pending retraining is the only required action",
            "Systemic failures include: lack of mandatory depth-of-sedation documentation, no trigger for reporting unintended escalation, no monitoring of sedation complication rates by provider, and no review of sedation outcomes at the credentials committee. Corrections include sedation monitoring policy revision, mandatory reporting protocol, and outcomes tracking linked to re-credentialing",
            "The finding requires reporting to the state medical board before any internal corrective action can be taken",
            "The four undocumented events are the only finding — the facility should implement a chart audit to identify all missing documentation and backfill records"
          ],
          correctIndex: 1,
          explanation: "Four undocumented unintended deep sedation transitions in one provider's practice over one year reflects multiple systemic failures: no mandatory sedation outcome documentation, no mechanism for reporting unexpected events, no ongoing monitoring of sedation practice quality, and no credential review trigger. True systemic correction requires policy changes, outcome surveillance, and integration of sedation performance data into the credentialing process — not just individual provider action.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes2",
      baseQuestion: "A post-anesthesia evaluation completed at 46 hours documents all required elements except post-operative hydration status. The anesthesiologist argues this element is covered by nursing assessments and need not be in the anesthesia evaluation. Is this reasoning correct?",
      baseOptions: [
        "Yes — hydration status is a nursing domain and its documentation in the nursing flow sheet satisfies the anesthesia evaluation requirement",
        "No — all 7 required post-anesthesia evaluation elements must be documented by the qualified provider completing the evaluation, not distributed across other documentation",
        "Yes — the Joint Commission allows cross-referencing other chart sections for post-anesthesia evaluation elements",
        "No — but only when the anesthesia evaluation is the only post-procedure note in the chart"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "All 7 post-anesthesia evaluation elements must be present in the evaluation completed by the qualified provider. Cross-referencing nursing documentation for required elements does not satisfy the standard — each element must be addressed within the evaluation itself.",
      baseXp: 15,
      followUps: [
        {
          question: "A quality audit reveals that 23% of post-anesthesia evaluations are missing at least one of the 7 required elements, and 15% are completed beyond the 48-hour window. The anesthesia department chief submits a plan to re-educate providers. What else must the improvement plan include to satisfy JC performance improvement expectations?",
          options: [
            "Re-education alone satisfies JC performance improvement requirements — the plan is complete",
            "The plan must also include: a baseline measurement of the current deficiency rate, a defined improvement goal, a monitoring mechanism with regular data collection post-intervention, a reporting cadence to leadership, and a reassessment timeline to verify sustained improvement",
            "The plan must include a corrective action for each individual provider who had deficient documentation — systemic measures are secondary to individual accountability",
            "The plan is complete once a new documentation template is created that prompts providers to complete all 7 elements"
          ],
          correctIndex: 1,
          explanation: "A re-education-only plan does not constitute a performance improvement process. JC requires PDSA-cycle thinking: define the problem (baseline data), implement an intervention, measure the result, and sustain improvement. The plan must include baseline data, an improvement goal, a post-intervention monitoring mechanism, leadership reporting, and reassessment. A documentation template can be one tool, but it must be accompanied by outcome measurement.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes3",
      baseQuestion: "A GI suite uses midazolam and fentanyl for colonoscopy sedation. During a tracer, the surveyor asks the nurse to show where reversal agents are stored. The nurse leads the surveyor to the medication room, approximately 90 feet away. Is this location compliant?",
      baseOptions: [
        "Yes — the medication room is the standard storage location for all reversal agents in a GI suite",
        "No — reversal agents must be immediately available at the bedside or in the procedure room during any procedure using the drugs they reverse",
        "Yes — 90 feet is within the acceptable distance standard for reversal agent access",
        "No — reversal agents must be carried by the administering provider at all times during sedation procedures"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires reversal agents to be 'immediately available' — meaning at the bedside or within the procedure room, not down the hall. A medication room 90 feet away does not meet the standard because a delay in obtaining naloxone or flumazenil during a sedation emergency could result in patient harm or death.",
      baseXp: 15,
      followUps: [
        {
          question: "The GI suite manager proposes storing reversal agents in a locked cabinet in an alcove just outside each procedure room door — approximately 12 feet away — with the key kept on the administering nurse. The surveyor is asked whether this arrangement is compliant. What is the correct analysis?",
          options: [
            "Non-compliant — locked storage with a key always fails the immediately available standard, regardless of distance",
            "Compliant — 12 feet with a key on the administering nurse represents immediate access within the meaning of the standard",
            "Compliant only if the cabinet uses a break-glass mechanism rather than a key lock",
            "Non-compliant — reversal agents must be in the procedure room itself; outside the room never satisfies the standard"
          ],
          correctIndex: 1,
          explanation: "The immediately available standard does not specify a precise distance — it requires that the reversal agent be accessible without delay during an emergency. A locked cabinet 12 feet away with the key on the administering nurse is a defensible interpretation of immediate availability — the provider can access the medication in seconds without leaving the clinical area. This is significantly different from a medication room 90 feet down a corridor. Facilities should document the rationale for their storage approach in policy.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes4",
      baseQuestion: "Before a spinal block, an anesthesiologist marks the lumbar site with a skin marker, discusses the plan with the patient, and proceeds without a formal time-out. The anesthesiologist argues that a time-out is not required for a spinal because 'the site is obvious and the patient is awake.' Is this reasoning correct?",
      baseOptions: [
        "Yes — time-outs for spinal anesthesia are discretionary when the patient is awake and can confirm the site",
        "No — regional anesthesia and nerve blocks require a site-specific time-out before injection regardless of patient awareness or perceived site clarity",
        "Yes — time-outs are required only for procedures performed under general anesthesia",
        "No — but only when the spinal is performed for surgical rather than obstetrical anesthesia"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Universal Protocol requires a time-out before all invasive procedures involving regional anesthesia techniques — including spinal blocks. Patient awareness does not substitute for the time-out process. The time-out confirms correct patient, correct site/level, and correct procedure with the clinical team present.",
      baseXp: 15,
      followUps: [
        {
          question: "A facility's anesthesia department argues that requiring a time-out for every spinal block slows workflow in a high-volume obstetrics unit. They propose a 'mini time-out' where only the anesthesiologist verbally confirms the site to themselves before injection. Does this modified approach satisfy the Universal Protocol?",
          options: [
            "Yes — any verbal confirmation before an invasive procedure constitutes a time-out under the Universal Protocol",
            "No — the Universal Protocol requires a team time-out involving at least the anesthesiologist and one other member of the clinical team — a solo provider self-confirming does not satisfy the requirement",
            "Yes — the Universal Protocol time-out requirement has documented efficiency exceptions for high-volume procedural areas",
            "No — the time-out requires all team members present in the room, including circulating nurses, scrub technicians, and the supervising physician"
          ],
          correctIndex: 1,
          explanation: "The Universal Protocol time-out must involve the clinical team — it is a team verification process, not an individual self-confirmation. A provider verbally confirming to themselves is not a time-out. In an obstetrics setting, the minimum team for a spinal time-out would include the anesthesiologist and the labor and delivery nurse. Workflow concerns must be addressed through efficient process design, not by eliminating team verification.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes5",
      baseQuestion: "An endoscopy unit's credential files show RN sedation credentials that include training completion documentation but no competency validation (return demonstration or proctored sedation cases). The education coordinator says the training module is comprehensive. Does this satisfy the JC credentialing standard?",
      baseOptions: [
        "Yes — documented completion of a comprehensive training module satisfies JC moderate sedation credentialing requirements",
        "No — credentialing requires both training completion and competency validation demonstrating the provider can perform the skill correctly",
        "Yes — competency validation is required only for new-to-profession nurses, not for experienced RNs",
        "No — competency validation must be performed by an external certifying organization, not internally"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC credentialing requires both: (1) training that covers required knowledge, and (2) competency validation that confirms the provider can correctly perform moderate sedation in practice. Training completion alone is insufficient. Validation methods include return demonstration, simulation, or proctored real cases with sign-off from a qualified supervisor.",
      baseXp: 15,
      followUps: [
        {
          question: "The unit implements a new competency validation process where nurses complete 3 proctored sedation cases with a physician sign-off. One nurse fails to achieve independent performance after 3 cases but is credentialed anyway because of unit staffing needs. What are the JC implications?",
          options: [
            "Credentialing a provider who failed to demonstrate competency creates direct patient risk and constitutes a false credential — JC would cite this as a serious compliance failure in the medical staff credentialing process",
            "The credential is valid because the physician signed off, and staffing need is a documented mitigating factor",
            "The nurse can be credentialed provisionally if an experienced nurse is available in the unit during each of their sedation cases",
            "The implication depends on whether the cases where the nurse struggled involved any adverse patient outcomes"
          ],
          correctIndex: 0,
          explanation: "Credentialing a provider who has not demonstrated competency — regardless of the reason — is a fundamental credentialing failure. JC requires that credentials reflect demonstrated competency, not staffing convenience. Granting a credential to someone who failed the validation process exposes patients to an unqualified provider and constitutes a falsification of the credential record. JC would cite this as a serious finding in the credentialing program.",
          expertXp: 30
        }
      ]
    }
  ]
};
