import type { DeepDiveLevel } from "./schema";

export const ddPatientRightsLevel: DeepDiveLevel = {
  id: "dd-patient-rights",
  name: "Patient Rights & Responsibilities Deep Dive",
  description: "Expert-level scenarios on informed consent validity, advance directive conflicts, restraint order gaps, grievance resolution, and protecting vulnerable patients.",
  icon: "Microscope",
  color: "hsl(24, 90%, 48%)",
  baseLevelId: "patient_rights",
  questions: [
    {
      id: "dd-pr1",
      baseQuestion: "A patient consented to a laparoscopic appendectomy. Intraoperatively, the surgeon discovers a suspicious mass on the colon and wants to perform a biopsy. The patient is under general anesthesia and cannot be consulted. The surgeon performs the biopsy. Is this practice compliant?",
      baseOptions: [
        "Yes — the discovery of an unexpected finding during surgery gives the surgeon the authority to perform clinically indicated procedures without additional consent",
        "No — unless the biopsy was immediately necessary to prevent death or serious harm, the extension of the procedure scope without consent requires that the patient be awakened to consent or the procedure deferred to a separate encounter",
        "Yes — general surgical consent covers all procedures performed within the same operative session",
        "No — the surgeon should have called the patient's healthcare proxy for telephone consent during the procedure"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Informed consent for surgery covers the specific procedure consented to. Performing an additional, non-emergency procedure without consent — even if discovered during the consented procedure — violates the patient's right to consent to their own care. The biopsy could be deferred to a separate encounter with appropriate consent discussion, unless immediate biopsy was clinically necessary to prevent serious imminent harm.",
      baseXp: 20,
      followUps: [
        {
          question: "The surgeon argues that informing the patient about the mass before surgery would have caused undue anxiety and that the biopsy result ultimately showed a benign finding, so no harm occurred. Does the benign result change the consent analysis?",
          options: [
            "Yes — a benign outcome demonstrates that the biopsy was the correct clinical decision, which retroactively validates the consent deviation",
            "No — the validity of consent is evaluated at the time it is obtained, not by the outcome of the procedure. A benign result does not retroactively justify performing a procedure without consent. The patient's right to make an informed decision about the biopsy — including the right to refuse — existed regardless of what the result turned out to be",
            "Partially — the benign result eliminates liability but does not fully satisfy the consent standard",
            "Yes — JC standards include a harm-based consent analysis where outcome determines whether a deviation was acceptable"
          ],
          correctIndex: 1,
          explanation: "Informed consent is a process right — the right to decide in advance, based on information, whether to accept a proposed treatment. Outcome does not determine whether consent was properly obtained. The surgeon's argument that the patient 'didn't need to know' substitutes physician judgment for patient autonomy, which is the core concept consent rights protect against. The benign result is irrelevant to the rights violation.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr2",
      baseQuestion: "An elderly patient with dementia becomes agitated at night and attempts to climb out of bed. The nurse applies wrist restraints citing fall risk. No physician order has been obtained. The nurse calls the physician 2 hours later to report. What is the compliance status of this sequence?",
      baseOptions: [
        "Compliant — nursing judgment in an immediate safety emergency permits restraint application prior to physician notification",
        "Non-compliant — behavioral restraints require a physician order before application; emergency restraint application without an order requires immediate physician notification and order within a defined timeframe (typically 1 hour), not 2 hours later",
        "Compliant — the 2-hour window for physician notification is within acceptable limits for behavioral restraints in geriatric patients",
        "Non-compliant — dementia patients cannot be restrained under any circumstances without ethics committee approval"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC and CMS require a physician order for behavioral restraints. Emergency application without a prior order is permissible in some circumstances, but notification and order must occur within a defined timeframe — typically 1 hour. A 2-hour delay between application and physician notification exceeds the allowable window and is a compliance finding.",
      baseXp: 15,
      followUps: [
        {
          question: "The unit manager reviews the past 3 months of restraint use and finds that the same nurse applied restraints without orders on 8 occasions, with physician notification averaging 2.5 hours post-application. The nurse says 'the doctors always approve them anyway.' What does this pattern represent and what response is required?",
          options: [
            "A performance issue for one nurse — counseling and re-education on restraint policy is sufficient",
            "A systemic pattern of non-compliance that has been tolerated — this requires: individual accountability for the nurse, evaluation of whether the current restraint application workflow makes timely physician contact impractical, a review of physician response times to restraint notifications, and leadership-level reinforcement that 'they always approve it' does not substitute for obtaining prior authorization when possible",
            "A documentation problem only — the restraints themselves were appropriate; the issue is timely paperwork",
            "Evidence that the restraint policy is too restrictive and should be revised to allow nurses to apply behavioral restraints for fall prevention without a prior order"
          ],
          correctIndex: 1,
          explanation: "Eight occurrences with the same nurse and similar timing indicate a normalized pattern — the nurse has learned that non-compliant behavior has no consequence because physicians ultimately approve. This requires both individual accountability and systemic examination. Why is physician contact taking 2.5 hours? Is the notification system broken? Is there a cultural expectation that approval is pro forma? JC would view a sustained 8-incident pattern as a systems and leadership failure, not just an individual nurse issue.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr3",
      baseQuestion: "A hospital conducts a grievance audit and finds: 34 written grievances received in 90 days; average written response time of 18 days; 6 grievances with no written response at all; and no tracking of grievance themes for quality improvement. What is the compliance status?",
      baseOptions: [
        "Partially compliant — the 18-day average response is within acceptable limits for complex grievances",
        "Non-compliant on multiple dimensions — CMS requires written response within 7 days for most grievances; 6 unresponded grievances represent direct compliance failures; and lack of grievance trend tracking for quality improvement violates the requirement that grievance data drive improvement",
        "Compliant — an 18-day average suggests some responses were timely; the average masks the range",
        "Non-compliant only for the 6 unresponded grievances — response timing is measured from the date the investigation is complete, not the date of receipt"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Multiple failures are present: (1) CMS requires written response within 7 days — an 18-day average represents a systemic timing violation; (2) 6 unanswered grievances are direct non-compliance; (3) no theme tracking means the grievance process is not being used for improvement as required. The grievance program has both process and outcome failures.",
      baseXp: 15,
      followUps: [
        {
          question: "The patient relations director proposes fixing the response time issue by having the investigation summary letter sent automatically within 7 days stating 'your grievance is under investigation and you will receive a full response within 30 days.' Does this approach satisfy the CMS and JC grievance response requirements?",
          options: [
            "Yes — acknowledging receipt within 7 days satisfies the written response requirement; the 30-day follow-up provides the investigation result",
            "No — the written response within 7 days must include the substance of the response: what was investigated, what was found, what actions were taken, and the name of a contact person. A form letter saying 'we are investigating' does not satisfy the content requirements of the written response standard",
            "Yes — CMS explicitly permits a two-stage response where acknowledgment and final resolution are sent separately",
            "Partially — the 7-day acknowledgment satisfies the timing requirement; the content requirement can be met in the 30-day follow-up"
          ],
          correctIndex: 1,
          explanation: "The CMS grievance response requirements specify that the written response must include: the hospital contact person, steps taken to investigate, results of the grievance investigation, and the date of completion. A form acknowledgment letter stating 'we are investigating' does not meet the content standard — it only satisfies notification that the grievance was received. The substantive response must be provided on a timely basis, not deferred to a separate letter weeks later.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr4",
      baseQuestion: "A nurse caring for an elderly patient witnesses a nursing assistant being verbally abusive to the patient — shouting, using demeaning language, and roughly handling the patient during repositioning. The nurse does not report the behavior because 'I don't want to cause problems with a coworker.' What are the nurse's obligations?",
      baseOptions: [
        "The nurse should speak privately with the nursing assistant first — direct peer-to-peer feedback is the appropriate first step before escalation",
        "The nurse has a mandatory obligation to report the witnessed abuse to a supervisor and through the facility's abuse reporting process — 'not wanting to cause problems' is not an acceptable reason to withhold a required abuse report. The patient's right to be free from abuse is not negotiable",
        "The nurse should document the observation in the patient's chart — chart documentation satisfies the reporting obligation",
        "Reporting is appropriate but not mandatory when the abuse is verbal rather than physical"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Witnessing patient abuse — including verbal abuse and rough physical handling — triggers a mandatory reporting obligation. JC requires that staff report suspected abuse through the facility's defined reporting channels. The coworker relationship does not reduce this obligation. Documenting in the chart without reporting through the abuse reporting channel is insufficient.",
      baseXp: 20,
      followUps: [
        {
          question: "The nurse reports the incident to the charge nurse, who says 'I know him, he's actually really good with patients — probably just a bad day. Let's not make it a big deal.' The charge nurse takes no further action. What has occurred and what should happen next?",
          options: [
            "The charge nurse made a reasonable clinical judgment — a single witnessed incident does not constitute confirmed abuse and investigation is appropriate before escalation",
            "The charge nurse has failed to fulfill their supervisory obligation to escalate an abuse report — the nurse who witnessed the event must escalate the report to the next level of leadership or through an alternative reporting pathway (patient safety hotline, compliance department) since the immediate supervisor has not acted",
            "The charge nurse's dismissal of the report means the obligation is discharged — the frontline nurse has fulfilled their responsibility by reporting to their supervisor",
            "The nurse should confront the nursing assistant directly since the charge nurse declined to act"
          ],
          correctIndex: 1,
          explanation: "When a supervisor fails to act on a reported abuse allegation, the reporting obligation does not end — it escalates. The nurse who witnessed the abuse must use alternative escalation pathways: direct supervisor's supervisor, patient safety or compliance reporting line, or risk management. A supervisor's dismissal of an abuse report as 'a bad day' is itself a supervisory failure that may require reporting. JC expects that facilities have multiple reporting pathways specifically because direct supervisor channels can fail.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr5",
      baseQuestion: "A non-English-speaking patient with limited literacy in their native language is admitted. The physician uses the patient's teenage child as an interpreter for the entire admission history, physical findings discussion, consent for procedure, and discharge instructions. The child is 14 years old. What rights issues are present?",
      baseOptions: [
        "No issues — the patient chose to have their child interpret and patient preference for family interpreters is supported by JC",
        "Multiple issues: professional interpreter services must be offered first before a patient can choose family interpretation; a 14-year-old child should not be asked to interpret complex medical information for a parent — this creates an inappropriate role reversal and the child may filter, misunderstand, or be emotionally harmed by the content; and consent discussions require accurate interpretation that a child may not be able to provide",
        "One issue — consent should have used a professional interpreter, but the history and discharge instructions are acceptable with a family interpreter",
        "No issues — JC permits family interpretation when the patient has not requested professional services"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Multiple rights and safety issues exist: (1) professional interpreter services must be offered before family interpretation occurs — there is no documentation that this happened; (2) using a minor child as a medical interpreter creates an inappropriate burden, a role reversal with psychological implications, and an accuracy risk since a 14-year-old may not have the vocabulary, emotional distance, or ability to accurately translate complex medical content; (3) consent interpretation through a child raises validity questions.",
      baseXp: 20,
      followUps: [
        {
          question: "The physician argues that the patient 'seemed to understand' during the visit and that the child is bilingual and well-educated. The patient expressed no concerns. Does the patient's apparent satisfaction with the interpretation validate the approach?",
          options: [
            "Yes — patient satisfaction is a key indicator of effective communication; if the patient did not express concerns, the interpretation was likely adequate",
            "No — patient satisfaction with the interpretation process does not validate it. Patients often do not know what they do not know — they may not realize information was filtered, mistranslated, or omitted. A patient cannot evaluate interpretation accuracy in a language they cannot fully understand. JC and HIPAA-aligned standards require that professional interpreters be offered regardless of patient apparent satisfaction",
            "Partially — patient satisfaction validates the history and discharge components but does not validate the consent discussion",
            "Yes — if the child was objectively bilingual and the physician observed appropriate understanding, the standard has been met"
          ],
          correctIndex: 1,
          explanation: "Apparent patient satisfaction cannot be used to validate interpretation quality because patients are unable to independently assess whether translation was accurate, complete, or appropriately nuanced. This is precisely why professional interpreter standards exist — to protect patients from communication failures they cannot themselves detect. A patient who nods and says 'yes' when asked if they understand may be responding to social cues rather than genuine comprehension.",
          expertXp: 25
        }
      ]
    }
  ]
};
