import type { DeepDiveLevel } from "./schema";

export const ddSurgicalSafetyLevel: DeepDiveLevel = {
  id: "dd-surgical-safety",
  name: "Surgical Safety & Consent Deep Dive",
  description: "Go deeper on Universal Protocol, surgical time-out, site marking, and informed consent with expert-level branching questions.",
  icon: "Microscope",
  color: "hsl(160, 70%, 40%)",
  baseLevelId: "universal_protocol",
  questions: [
    {
      id: "dd-ssc1",
      baseQuestion: "A Joint Commission tracer surveyor asks you to name the three components of the Universal Protocol. Which answer correctly identifies all three?",
      baseOptions: [
        "Pre-procedure verification, site marking, time-out",
        "Informed consent, patient identification, time-out",
        "Site marking, surgical count, debriefing",
        "Patient identification, pre-procedure verification, surgical count"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "The Universal Protocol consists of three components: (1) pre-procedure verification, (2) marking the operative/procedure site, and (3) performing a time-out immediately before the procedure.",
      baseXp: 15,
      followUp: {
        question: "During the pre-procedure verification, the surgical team discovers the history and physical was completed 32 days ago. According to Joint Commission standards, what must happen before proceeding?",
        options: [
          "Proceed since the H&P is within 60 days",
          "An updated examination must be documented within 30 days of the procedure; a new H&P or update is required",
          "Cancel the case and reschedule after a new H&P",
          "The attending may verbally confirm no changes and proceed"
        ],
        correctIndex: 1,
        explanation: "Joint Commission requires a history and physical within 30 days prior to the procedure, with an update within 24 hours before the procedure if the H&P was done more than 24 hours in advance. At 32 days, the H&P has expired and must be redone.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc2",
      baseQuestion: "During a tracer, a surveyor observes the surgical time-out. Which element is NOT a required component of the time-out per Joint Commission standards?",
      baseOptions: [
        "Correct patient identity confirmed",
        "Agreement on the procedure to be performed",
        "Confirmation of anesthesia provider's lunch break schedule",
        "Correct site verified and marked"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "The time-out must include verification of correct patient identity, correct side/site, agreement on the procedure to be performed, and correct patient position. Scheduling logistics are not part of the time-out.",
      baseXp: 15,
      followUp: {
        question: "The surgeon wants to add an additional procedure discovered intraoperatively. What does the Universal Protocol require?",
        options: [
          "No additional steps are needed since the patient is already under anesthesia",
          "A new time-out must be performed before the additional procedure begins",
          "The circulating nurse simply documents the additional procedure in the operative note",
          "The surgeon verbally announces the addition and that serves as the time-out"
        ],
        correctIndex: 1,
        explanation: "Whenever a new procedure is added, even intraoperatively, a separate time-out must be conducted before beginning the additional procedure. This includes verifying correct site, correct procedure, and correct patient.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc3",
      baseQuestion: "Who is responsible for marking the operative site according to Joint Commission requirements?",
      baseOptions: [
        "The circulating nurse",
        "The surgical technologist",
        "The licensed practitioner who is performing the procedure",
        "Any member of the surgical team"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "The Joint Commission requires the operative site to be marked by the licensed independent practitioner (LIP) who is performing the procedure or a licensed individual to whom the practitioner delegates this task per hospital policy.",
      baseXp: 15,
      followUp: {
        question: "A patient is scheduled for a left inguinal hernia repair. The site mark must meet which Joint Commission specification?",
        options: [
          "An 'X' placed at the incision site",
          "The surgeon's initials or 'YES' at or near the incision site, unambiguous and visible after draping",
          "A dot of indelible ink on the operative side",
          "A sticker placed by the pre-op nurse on the correct side"
        ],
        correctIndex: 1,
        explanation: "The Joint Commission requires the mark to be unambiguous (initials or 'YES' — never an 'X' which can be interpreted as 'not here'), placed at or near the procedure site, and visible after the patient is prepped and draped. The mark must be made with a permanent marker.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc4",
      baseQuestion: "When must the surgical time-out be performed?",
      baseOptions: [
        "In the pre-operative holding area before transport to the OR",
        "After the patient is anesthetized but before draping",
        "Immediately before making the incision or starting the procedure, with active participation of all team members",
        "During the pre-procedure verification in the surgeon's office"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "The Joint Commission mandates the time-out occur immediately before starting the procedure. All members of the team must actively participate, which means the procedure must not begin until all questions or concerns are resolved.",
      baseXp: 15,
      followUp: {
        question: "During the time-out, the scrub tech notices the consent form says 'right knee arthroscopy' but the site mark is on the left knee. What is the correct action?",
        options: [
          "Proceed with the right knee since the consent form is the legal document",
          "Proceed with the left knee since the surgeon marked it",
          "Stop the procedure and resolve the discrepancy before proceeding",
          "Ask the anesthesiologist to decide which side is correct"
        ],
        correctIndex: 2,
        explanation: "Any discrepancy identified during the time-out must halt the procedure. The team must resolve the discrepancy by verifying with the patient (if possible), reviewing imaging, and confirming with the surgeon before proceeding. This is a fundamental safety checkpoint.",
        expertXp: 35
      }
    },
    {
      id: "dd-ssc5",
      baseQuestion: "Which of the following scenarios does NOT require site marking per Joint Commission standards?",
      baseOptions: [
        "Left total knee replacement",
        "Right carpal tunnel release",
        "Insertion of a central venous catheter in the right internal jugular vein",
        "Cesarean section (midline incision)"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "Site marking is required for procedures involving laterality (right/left distinction), multiple structures (e.g., fingers, toes), or multiple levels (e.g., spine). A cesarean section with a midline incision does not involve laterality and may be exempt per hospital policy, though pre-procedure verification and time-out still apply.",
      baseXp: 15,
      followUp: {
        question: "A spine surgeon is performing a multi-level lumbar fusion. How should site marking be handled according to Joint Commission guidance?",
        options: [
          "Mark only the first level to be fused",
          "No marking needed since spine procedures use intraoperative imaging",
          "Mark the general spinal area and verify specific levels with intraoperative imaging during time-out",
          "Mark each individual vertebral level on the patient's skin with a permanent marker"
        ],
        correctIndex: 2,
        explanation: "For spinal procedures, the general area should be marked, and the specific level(s) must be confirmed with intraoperative imaging (radiographic verification) as part of the time-out. Marking individual vertebral levels on skin is impractical and unreliable for identifying exact spinal levels.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc6",
      baseQuestion: "A tracer surveyor reviews the informed consent form for a surgical patient. Which element is required for valid informed consent?",
      baseOptions: [
        "A witness signature from a family member only",
        "The specific procedure, risks, benefits, and alternatives explained to the patient in understandable language",
        "Only the surgeon's signature is needed",
        "A generic pre-printed consent form with no procedure-specific information"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Valid informed consent requires disclosure of the specific procedure, material risks, expected benefits, alternatives (including no treatment), and that the patient demonstrates understanding. The discussion must be in language the patient can understand.",
      baseXp: 15,
      followUp: {
        question: "A patient who speaks only Mandarin is scheduled for gallbladder surgery. The consent discussion was conducted through the patient's 12-year-old bilingual child. Is this acceptable?",
        options: [
          "Yes, as long as the child accurately translates",
          "Yes, if the child signs as the interpreter",
          "No, a qualified medical interpreter must be used; minor family members should not serve as interpreters for informed consent",
          "No, the procedure must be cancelled entirely"
        ],
        correctIndex: 2,
        explanation: "Joint Commission standards and federal regulations require the use of qualified medical interpreters for informed consent discussions. Minor children should never serve as interpreters for medical decisions due to potential inaccuracy, emotional burden, and inability to understand complex medical terminology.",
        expertXp: 35
      }
    },
    {
      id: "dd-ssc7",
      baseQuestion: "What is the primary purpose of the WHO Surgical Safety Checklist?",
      baseOptions: [
        "To document billing codes for the procedure",
        "To reduce surgical complications and mortality through systematic safety checks at three critical phases",
        "To satisfy malpractice insurance requirements",
        "To ensure the surgeon's credentials are verified"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The WHO Surgical Safety Checklist was designed to reduce surgical morbidity and mortality worldwide. It includes checks at three phases: Sign In (before anesthesia induction), Time Out (before skin incision), and Sign Out (before the patient leaves the OR).",
      baseXp: 15,
      followUp: {
        question: "During the WHO checklist 'Sign In' phase (before anesthesia induction), which of the following must be confirmed?",
        options: [
          "Final surgical count is correct",
          "Patient identity, procedure and site consent confirmed, site marked, anesthesia safety check completed, pulse oximeter functioning, known allergy status, and airway/aspiration risk assessment",
          "Equipment and instrument sterility only",
          "The post-operative recovery plan"
        ],
        correctIndex: 1,
        explanation: "The Sign In phase occurs before induction of anesthesia and includes confirming patient identity, procedure, site, and consent; verifying the site is marked; confirming the anesthesia machine and medication check is complete; pulse oximeter is on the patient and functioning; known allergies; airway assessment; and risk of blood loss.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc8",
      baseQuestion: "A surveyor asks about the two-patient-identifier requirement in the perioperative setting. Which combination meets Joint Commission standards?",
      baseOptions: [
        "Patient's room number and bed assignment",
        "Patient's full name and date of birth",
        "Patient's diagnosis and surgeon name",
        "Patient's gown color and wristband color"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Joint Commission requires at least two patient-specific identifiers (such as name and date of birth, or name and medical record number). Room number, bed assignment, and other location-based identifiers are never acceptable as patient identifiers.",
      baseXp: 15,
      followUp: {
        question: "An unconscious trauma patient arrives in the OR with no identification. How should the two-patient-identifier requirement be met?",
        options: [
          "Skip identification since it's an emergency",
          "Use a temporary identification system (e.g., trauma alias and assigned medical record number) with a wristband applied to the patient",
          "Use the room number as one identifier",
          "Wait for family to arrive before proceeding"
        ],
        correctIndex: 1,
        explanation: "For unidentified patients, hospitals must have a policy for assigning temporary identifiers (e.g., 'Trauma Alpha' with a unique medical record number). A wristband with these temporary identifiers must be applied to the patient. The two-identifier process must still be followed using these temporary identifiers.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc9",
      baseQuestion: "According to Joint Commission National Patient Safety Goals, when must surgical specimens be labeled?",
      baseOptions: [
        "After the specimen is received in the pathology lab",
        "At the point of collection, in the presence of the patient, before leaving the procedure room",
        "When the circulating nurse has a free moment",
        "Only if the specimen appears abnormal"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission NPSG.01.03.01 requires labeling of specimens at the point of collection, in the presence of the patient. The label must include at least two patient identifiers, specimen source/site, and any other required information.",
      baseXp: 15,
      followUp: {
        question: "During a bilateral breast biopsy, how should the surgical team handle specimen labeling to prevent a mix-up?",
        options: [
          "Place both specimens in the same container and label it with the patient's name",
          "Label each specimen separately with patient identifiers, laterality (right/left), and specific site; use a verification process with read-back between surgeon and circulating nurse",
          "Label them 'Specimen 1' and 'Specimen 2'",
          "Send them unlabeled and call pathology with the details"
        ],
        correctIndex: 1,
        explanation: "Each specimen must be individually labeled at the point of collection with two patient identifiers, laterality, and specific site. A verification process (such as read-back) between the surgeon and circulating nurse is required to confirm correct labeling. This prevents critical errors in pathology that could lead to incorrect treatment.",
        expertXp: 35
      }
    },
    {
      id: "dd-ssc10",
      baseQuestion: "What is the most common root cause of wrong-site surgery events reported to The Joint Commission?",
      baseOptions: [
        "Equipment malfunction",
        "Inadequate staffing levels",
        "Failure in the pre-operative verification process and communication breakdown",
        "Surgeon inexperience"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Analysis of sentinel events reported to The Joint Commission consistently identifies breakdown in communication and failure to follow the pre-operative verification process as the most common root causes of wrong-site, wrong-patient, and wrong-procedure events.",
      baseXp: 15,
      followUp: {
        question: "A hospital has had two wrong-site near-miss events in three months. As part of the root cause analysis, which action is MOST aligned with Joint Commission expectations?",
        options: [
          "Terminate the surgeons involved",
          "Implement a system-level corrective action plan including staff education, process standardization, compliance monitoring, and a culture that encourages reporting without blame",
          "Add a disclaimer to the consent form",
          "Only discipline the circulating nurses who were present"
        ],
        correctIndex: 1,
        explanation: "Joint Commission sentinel event policy expects a thorough root cause analysis followed by a system-level corrective action plan. This includes process improvements, education, monitoring compliance with the Universal Protocol, and fostering a just culture where staff feel safe reporting concerns and near-miss events.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc11",
      baseQuestion: "Who must actively participate in the surgical time-out?",
      baseOptions: [
        "Only the surgeon and anesthesiologist",
        "The entire operative team including surgeon, anesthesia provider, circulating nurse, scrub person, and any other active participants",
        "Only the circulating nurse who reads the checklist",
        "The surgeon and the patient's family"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Joint Commission requires that the time-out involves the entire operative team. All members must actively communicate and agree on patient identity, procedure, and site before the procedure begins. Passive participation is not acceptable.",
      baseXp: 15,
      followUp: {
        question: "A tracer surveyor observes a time-out where the surgeon continues scrubbing at the sink while the circulating nurse reads the checklist items. The surgeon says 'yeah, yeah' without looking up. Is this compliant?",
        options: [
          "Yes, the surgeon verbally acknowledged the information",
          "Yes, as long as the circulating nurse documents the time-out",
          "No, the time-out requires active participation by all team members; the surgeon must stop, be present, and actively engage in the verification process",
          "No, but only because the surgeon should have been already scrubbed"
        ],
        correctIndex: 2,
        explanation: "Active participation means all team members must pause, be focused, and actively engage in the time-out process. A distracted acknowledgment ('yeah, yeah') while performing another task does not constitute active participation. The procedure must not start until all team members have genuinely participated.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc12",
      baseQuestion: "During a tracer, a surveyor reviews the fire risk assessment documentation in the OR. What three elements make up the 'fire triangle' that must be assessed?",
      baseOptions: [
        "Heat, fuel, and oxidizer",
        "Electricity, oxygen, and drapes",
        "Laser, alcohol, and supplemental oxygen",
        "Cautery, prep solution, and patient hair"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "The fire triangle consists of three elements: a heat/ignition source (e.g., electrosurgical units, lasers, fiber-optic lights), fuel (e.g., drapes, alcohol-based prep, patient hair, intestinal gases), and an oxidizer (e.g., supplemental oxygen, nitrous oxide). All three must be present for a fire to occur.",
      baseXp: 15,
      followUp: {
        question: "A head and neck surgery requires supplemental oxygen via nasal cannula and use of electrocautery near the face. What is the most appropriate fire prevention strategy?",
        options: [
          "No special precautions are needed for routine cases",
          "Use an alcohol-based prep on the face to ensure sterility",
          "Minimize oxygen concentration, allow alcohol-based prep to fully dry, consider draping techniques that prevent oxygen pooling near the surgical site, and have a fire extinguisher immediately available",
          "Switch to a different surgeon who does not use cautery"
        ],
        correctIndex: 2,
        explanation: "Head and neck procedures with supplemental oxygen and electrosurgery represent the highest fire risk. Prevention includes reducing FiO2 to the minimum necessary, allowing all alcohol-based preps to completely dry (minimum 3 minutes), draping to prevent oxygen entrapment, and ensuring fire suppression equipment is immediately available.",
        expertXp: 35
      }
    },
    {
      id: "dd-ssc13",
      baseQuestion: "What is the purpose of surgical count reconciliation?",
      baseOptions: [
        "To track inventory for ordering supplies",
        "To ensure all sponges, sharps, instruments, and miscellaneous items used during a procedure are accounted for before wound closure, preventing retained surgical items",
        "To calculate the cost of the procedure",
        "To determine how many staff members were in the OR"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Surgical counts are performed to prevent retained surgical items (RSIs), a serious and preventable patient safety event. Counts must include sponges, sharps, instruments, and miscellaneous items and must be reconciled before wound closure.",
      baseXp: 15,
      followUp: {
        question: "The final surgical count before closure is incorrect — one laparotomy sponge is unaccounted for. What is the required course of action?",
        options: [
          "Close the wound and order a post-operative X-ray",
          "Repeat the count, conduct a thorough wound exploration, and if still unresolved, obtain an intraoperative radiograph before closing",
          "Document the discrepancy and close the wound",
          "Ask the team to recount from memory"
        ],
        correctIndex: 1,
        explanation: "When a count discrepancy occurs, the wound must not be closed until the missing item is found. Standard protocol requires repeating the count, searching the surgical field and wound, checking trash and linen, and if the item remains unaccounted for, performing an intraoperative radiograph. The wound should not be closed until the item is located.",
        expertXp: 35
      }
    },
    {
      id: "dd-ssc14",
      baseQuestion: "Before administering a blood transfusion in the OR, which verification steps are required per Joint Commission standards?",
      baseOptions: [
        "One nurse checks the blood label against the patient's wristband",
        "Two qualified individuals must independently verify the patient's identity (two identifiers), blood product unit number, blood type compatibility, and expiration date at the patient's bedside",
        "The anesthesiologist verbally confirms the blood type",
        "The blood bank's phone confirmation is sufficient"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Blood product verification requires two qualified individuals to independently verify at the bedside: patient identity using two identifiers matched to the blood bank tag, ABO/Rh compatibility, unit number, and expiration date. This dual verification is critical to preventing hemolytic transfusion reactions.",
      baseXp: 15,
      followUp: {
        question: "During the blood verification, one of the two verifiers notices the unit is labeled 'O Positive' but the patient's blood type on the chart says 'O Negative.' The patient is a 28-year-old female. What should happen?",
        options: [
          "Proceed since O Positive is compatible with O Negative patients",
          "Proceed since the patient is not currently pregnant",
          "Do NOT transfuse; notify the blood bank of the discrepancy. Rh-positive blood given to an Rh-negative female of childbearing age can cause Rh sensitization with serious implications for future pregnancies",
          "Transfuse only half the unit to minimize risk"
        ],
        correctIndex: 2,
        explanation: "This is a critical discrepancy. Administering Rh-positive blood to an Rh-negative female of childbearing age can cause Rh sensitization (formation of anti-D antibodies), which can lead to hemolytic disease of the fetus and newborn in future pregnancies. The transfusion must be stopped and the blood bank notified immediately.",
        expertXp: 35
      }
    },
    {
      id: "dd-ssc15",
      baseQuestion: "A Joint Commission surveyor asks when pre-procedure verification should begin. What is the correct answer?",
      baseOptions: [
        "Only in the operating room",
        "At the time the procedure is scheduled and continues through all stages of care up to and including the time-out",
        "Only when the patient arrives in the pre-operative holding area",
        "After the patient is anesthetized"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Pre-procedure verification is an ongoing process that begins at the time the procedure is first planned or scheduled. It continues through all transitions of care (office visit, pre-admission testing, admission, pre-op holding, OR) up to and including the time-out.",
      baseXp: 15,
      followUp: {
        question: "During pre-procedure verification in the holding area, the nurse discovers the consent form lists 'right shoulder arthroplasty' but the surgeon's posted schedule says 'right shoulder arthroscopy.' What is the appropriate action?",
        options: [
          "Use the consent form since it has the patient's signature",
          "Use the schedule since the surgeon's office prepared it",
          "Resolve the discrepancy immediately by contacting the surgeon, verifying the intended procedure with the patient, and correcting the documentation before proceeding",
          "Proceed with whichever procedure the OR is set up for"
        ],
        correctIndex: 2,
        explanation: "Any discrepancy in procedure documentation must be resolved before the patient enters the operating room. This requires direct communication with the surgeon, verification with the patient, and correction of all documents. An arthroplasty (joint replacement) versus arthroscopy (scope) are vastly different procedures with different implants, instruments, and recovery expectations.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc16",
      baseQuestion: "Which type of ink must be used for operative site marking?",
      baseOptions: [
        "Any pen available at the nursing station",
        "A permanent/indelible marker that will remain visible after skin preparation and draping",
        "A water-soluble marker that washes off with prep solution",
        "A felt-tip marker in the facility's designated color"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The site mark must be made with a permanent, indelible marker so it remains visible after skin preparation with antiseptic solutions and after draping. A mark that washes off defeats the purpose of site verification.",
      baseXp: 15,
      followUp: {
        question: "A patient with a dark skin tone has a site mark that is not easily visible. What should the surgical team do?",
        options: [
          "Proceed without the mark since the surgeon knows which side",
          "Use alternative marking methods such as a different color marker, adhesive marker, or apply the mark to an area where it is visible, and document the alternative method per hospital policy",
          "Use a skin-lightening agent to improve visibility",
          "Take a photograph of the mark as documentation and proceed"
        ],
        correctIndex: 1,
        explanation: "When standard marking is not clearly visible due to skin tone, the team must use alternative methods as outlined in hospital policy. Options include different colored markers, adhesive site markers, or marking on an adjacent visible area. The chosen alternative must be documented and communicated to all team members during the time-out.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc17",
      baseQuestion: "In the WHO Surgical Safety Checklist, what occurs during the 'Sign Out' phase?",
      baseOptions: [
        "The surgeon signs the operative note",
        "The team confirms the procedure performed, instrument/sponge/needle counts are correct, specimen labeling is verified, and any equipment problems are addressed",
        "The patient signs a post-operative consent form",
        "The anesthesiologist signs out the controlled substances"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Sign Out phase occurs before the patient leaves the operating room. It includes confirmation of the procedure name for documentation, completion of instrument/sponge/needle counts, correct specimen labeling, identification of equipment problems, and review of key concerns for recovery and management.",
      baseXp: 15,
      followUp: {
        question: "During Sign Out, the team identifies that a key concern for recovery is the patient's obstructive sleep apnea and the use of opioid pain management. What communication step is essential?",
        options: [
          "Document it in the chart and assume the recovery room nurse will read it",
          "Provide a structured handoff to the PACU team that specifically addresses the patient's OSA, opioid use, and the need for continuous pulse oximetry monitoring and potential CPAP/BiPAP availability",
          "Tell the patient's family to watch for breathing problems",
          "Order an automatic respiratory therapy consult for all surgical patients"
        ],
        correctIndex: 1,
        explanation: "A structured handoff from the OR team to the PACU team is essential, specifically highlighting the patient's obstructive sleep apnea and opioid administration. This should include monitoring recommendations (continuous SpO2), CPAP/BiPAP availability, and positioning guidance to reduce airway obstruction risk.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc18",
      baseQuestion: "A patient is scheduled for a procedure on a non-lateralized midline structure (e.g., thyroidectomy). How should site marking be handled?",
      baseOptions: [
        "Mark an 'X' on the neck",
        "Site marking is not required for midline procedures without laterality, but all other Universal Protocol steps must still be performed",
        "The surgeon must mark both sides of the neck",
        "Site marking is optional for all procedures"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Joint Commission does not require site marking for midline procedures where there is no laterality, no multiple structures, and no multiple levels. However, pre-procedure verification and time-out are still mandatory. Individual hospital policy may still require marking for these cases.",
      baseXp: 15,
      followUp: {
        question: "A patient is having a thyroid lobectomy (removal of the RIGHT lobe only). Does this change the site marking requirement?",
        options: [
          "No, thyroid procedures never require marking",
          "Yes, because the procedure now involves laterality (right vs. left lobe), site marking IS required",
          "Only if the patient requests it",
          "Marking is only needed if both lobes might be removed"
        ],
        correctIndex: 1,
        explanation: "A thyroid lobectomy involves laterality (right versus left lobe), which makes it subject to the site marking requirement under the Universal Protocol. The operating side must be marked by the surgeon to prevent wrong-side surgery. This differs from a total thyroidectomy which is a midline procedure.",
        expertXp: 25
      }
    },
    {
      id: "dd-ssc19",
      baseQuestion: "A Joint Commission surveyor asks about the organization's process for patients who refuse site marking. What is the correct policy approach?",
      baseOptions: [
        "Cancel the surgery",
        "The organization must have a written policy for situations where the patient refuses marking, which may include alternative processes while still ensuring correct site verification",
        "Proceed without any site verification",
        "Have the patient's family member mark the site instead"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Joint Commission acknowledges that patients may refuse site marking for various reasons (cultural, religious, cosmetic concerns). Organizations must have a written alternative process that ensures correct site verification even when marking is not performed.",
      baseXp: 15,
      followUp: {
        question: "A Jehovah's Witness patient refuses surgical site marking for religious reasons. She is having a left knee replacement. What alternative process would satisfy Joint Commission requirements?",
        options: [
          "Cancel the case",
          "Proceed without any additional steps since the patient refused",
          "Implement the hospital's alternative verification process (e.g., imaging confirmation, additional verification steps during time-out, sticker/band on the operative extremity), document the refusal, and ensure all team members are aware",
          "Have the chaplain mark the site instead"
        ],
        correctIndex: 2,
        explanation: "When a patient refuses site marking, the hospital's alternative verification process must be followed. This may include additional imaging review, extra verification during time-out, use of non-ink methods like stickers or bands, and clear documentation of the refusal and alternative methods used. The goal remains preventing wrong-site surgery through an adapted process.",
        expertXp: 30
      }
    },
    {
      id: "dd-ssc20",
      baseQuestion: "During a tracer in the ambulatory surgery center, a surveyor observes a nurse performing a pre-procedure verification. The nurse checks the consent form, confirms the patient's identity with two identifiers, and verifies the procedure matches the schedule. What critical element is the nurse missing?",
      baseOptions: [
        "Verifying the patient's insurance information",
        "Confirming that all relevant documents, imaging studies, and required equipment are available and correctly labeled",
        "Calling the surgeon to confirm arrival time",
        "Checking the patient's dietary preferences"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Pre-procedure verification must include confirming that all relevant documents (H&P, consent, pre-procedure orders), imaging studies (properly labeled and displayed), and any required implants, special equipment, or blood products are available, correct, and matched to the patient.",
      baseXp: 15,
      followUp: {
        question: "The pre-procedure verification reveals that the CT scan displayed on the viewer belongs to a different patient with a similar name. This is caught before the procedure. What systemic issue does this represent, and what corrective action is most appropriate?",
        options: [
          "A minor clerical error that requires no follow-up",
          "A labeling error; simply replace the scan and proceed",
          "A patient identification failure that warrants an incident report, root cause analysis, review of imaging labeling and retrieval processes, and staff education on verification procedures",
          "An imaging department issue that is not the surgical team's concern"
        ],
        correctIndex: 2,
        explanation: "A wrong-patient imaging study reaching the OR represents a significant system failure in patient identification and verification. This near-miss requires an incident report, root cause analysis examining how the wrong study was pulled and not caught earlier, review of imaging retrieval workflows, and education for all staff involved in the pre-procedure verification chain.",
        expertXp: 35
      }
    }
  ]
};
