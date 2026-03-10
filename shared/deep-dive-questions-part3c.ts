import type { DeepDiveLevel } from "./schema";

export const ddPatientCareLevel: DeepDiveLevel = {
  id: "dd-patient-care",
  name: "Patient Care & Documentation Deep Dive",
  description: "Master patient assessment, medication reconciliation, fall prevention, and clinical documentation with expert-level branching questions.",
  icon: "Microscope",
  color: "hsl(280, 65%, 55%)",
  baseLevelId: "patient_care_docs",
  questions: [
    {
      id: "dd-pc1",
      baseQuestion: "A tracer reveals that a patient admitted through the ED had their initial nursing assessment documented 3 hours after arrival. According to Joint Commission standards, when must the initial nursing assessment be completed?",
      baseOptions: [
        "Within 24 hours of admission",
        "Within the time frame defined by hospital policy, typically within 8 hours but ideally upon admission",
        "Before the physician writes admission orders",
        "Within 30 minutes of triage"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard PC.01.02.01 requires that each patient receives an initial assessment within the time frame specified by hospital policy. Most hospitals set this within 8 hours, but best practice is to complete it as early as possible upon admission to guide the plan of care.",
      baseXp: 15,
      followUp: {
        question: "During the same tracer, the surveyor notes the initial assessment lacks a nutritional screening. Which validated screening tool is most commonly used in acute care to meet Joint Commission nutritional assessment requirements?",
        options: [
          "Mini Nutritional Assessment (MNA)",
          "Malnutrition Universal Screening Tool (MUST)",
          "Nutritional Risk Screening (NRS-2002) or the Malnutrition Screening Tool (MST)",
          "Body Mass Index calculation alone"
        ],
        correctIndex: 2,
        explanation: "Joint Commission requires nutritional screening as part of the initial assessment (PC.01.02.01 EP4). The NRS-2002 and MST are validated, efficient tools commonly used in acute care settings. BMI alone is insufficient, and the MNA is more suited for geriatric outpatient populations.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc2",
      baseQuestion: "A surveyor traces a patient who was readmitted within 30 days and finds no evidence of medication reconciliation on the prior discharge. Which Joint Commission NPSG specifically addresses medication reconciliation?",
      baseOptions: [
        "NPSG.01.01.01 - Patient Identification",
        "NPSG.03.06.01 - Medication Reconciliation",
        "NPSG.07.01.01 - Hand Hygiene",
        "NPSG.15.01.01 - Suicide Risk"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NPSG.03.06.01 requires organizations to maintain and communicate an accurate medication list across transitions of care. This includes reconciliation at admission, transfer, and discharge to prevent adverse drug events.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks the nurse to walk through the medication reconciliation process. Which element is MOST critical to include when reconciling medications at discharge?",
        options: [
          "Verifying the patient's insurance formulary coverage",
          "Comparing the admission medication list, in-hospital medications, and the discharge medication list to resolve discrepancies",
          "Obtaining the patient's pharmacy phone number",
          "Documenting the brand name rather than generic name for all medications"
        ],
        correctIndex: 1,
        explanation: "The core of medication reconciliation is the comparison of the pre-admission medication list with current in-hospital orders and the intended discharge list. All discrepancies (additions, deletions, dose changes) must be identified and resolved with the prescriber. This three-way comparison prevents unintentional omissions or duplications.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc3",
      baseQuestion: "During a tracer, a surveyor asks about fall prevention. A patient assessed as high-risk for falls has no fall prevention interventions documented in the care plan. What is the FIRST action the nurse should have taken?",
      baseOptions: [
        "Place a yellow wristband on the patient",
        "Implement individualized, evidence-based fall prevention interventions and document them in the care plan",
        "Move the patient closer to the nursing station",
        "Order a physical therapy consult"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard PC.01.02.01 and NPSG.09.02.01 require that patients identified as fall risks have individualized interventions implemented and documented in the care plan. Interventions must be tailored to the patient's specific risk factors (e.g., medication effects, mobility deficits, cognitive status), not just a standardized set of actions.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks which validated fall risk assessment tool the organization uses. Which of the following is the MOST widely used and validated fall risk assessment tool in acute care hospitals?",
        options: [
          "Timed Up and Go (TUG) test",
          "Morse Fall Scale",
          "Berg Balance Scale",
          "Hendrich II Fall Risk Model used exclusively"
        ],
        correctIndex: 1,
        explanation: "The Morse Fall Scale is the most widely used validated fall risk assessment tool in acute care settings. It evaluates six variables: history of falling, secondary diagnosis, ambulatory aid, IV/heparin lock, gait, and mental status. While the Hendrich II is also validated, the Morse Fall Scale has the most extensive evidence base in hospital settings.",
        expertXp: 25
      }
    },
    {
      id: "dd-pc4",
      baseQuestion: "A surveyor reviews the chart of a patient in bilateral wrist restraints. The documentation shows a physician order but no documented face-to-face evaluation within the required time frame. For a non-violent/non-self-destructive restraint, when must the physician evaluate the patient?",
      baseOptions: [
        "Within 1 hour of restraint application",
        "Within 24 hours of restraint application, per hospital policy consistent with CMS/Joint Commission requirements",
        "Within 4 hours of restraint application",
        "Only if the patient's condition deteriorates"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "For non-violent, non-self-destructive restraints (medical-surgical), CMS Conditions of Participation and Joint Commission standard PC.03.05.01 require a physician or LIP evaluation within 24 hours. This differs from violent/self-destructive restraints, which require a face-to-face evaluation within 1 hour.",
      baseXp: 15,
      followUp: {
        question: "The surveyor then asks about ongoing monitoring requirements. How frequently must a patient in non-violent medical-surgical restraints be monitored and assessed?",
        options: [
          "Every 4 hours",
          "At intervals defined by hospital policy, which must address circulation, sensation, movement, nutrition, hydration, and readiness for discontinuation, typically every 2 hours",
          "Every 8 hours, coinciding with shift change",
          "Continuous 1:1 observation is required"
        ],
        correctIndex: 1,
        explanation: "Joint Commission and CMS require ongoing monitoring at regular intervals per hospital policy. Documentation must address circulation, sensation, skin integrity, range of motion, nutrition/hydration, elimination needs, vital signs, and continued need for restraints. Most hospitals set this at every 1-2 hours for medical-surgical restraints.",
        expertXp: 35
      }
    },
    {
      id: "dd-pc5",
      baseQuestion: "A tracer patient reports that no one has asked about their pain since admission 6 hours ago. According to Joint Commission standards, when should pain be assessed?",
      baseOptions: [
        "Only when the patient complains of pain",
        "On initial assessment and reassessed based on the patient's condition and organizational policy",
        "Every 4 hours by protocol",
        "Once per shift by the assigned nurse"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard PC.01.02.07 requires that pain is assessed in all patients on initial assessment and reassessed at regular intervals based on the organization's defined criteria. Assessment must be appropriate to the patient's condition and should occur after interventions to evaluate effectiveness.",
      baseXp: 15,
      followUp: {
        question: "The patient is a 78-year-old with moderate cognitive impairment. Which pain assessment approach is MOST appropriate for this patient?",
        options: [
          "Numeric Rating Scale (0-10) only",
          "Ask the patient's family to rate the pain",
          "Use a validated behavioral pain scale such as the PAINAD (Pain Assessment in Advanced Dementia) in addition to patient self-report when possible",
          "Defer pain assessment until the patient can clearly verbalize their pain level"
        ],
        correctIndex: 2,
        explanation: "For patients with cognitive impairment, Joint Commission expects the use of validated tools appropriate to the population. The PAINAD scale assesses five behavioral indicators: breathing, vocalization, facial expression, body language, and consolability. Self-report should still be attempted as it remains the gold standard, but behavioral tools supplement assessment when self-report is unreliable.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc6",
      baseQuestion: "During a tracer, the surveyor reviews a discharge summary and finds no evidence that the patient or caregiver received education about warning signs to watch for at home. Which Joint Commission standard addresses discharge education?",
      baseOptions: [
        "PC.04.01.05 - Discharge planning includes patient education on post-discharge care",
        "PC.02.03.01 - The hospital educates the patient about their plan of care and safe discharge",
        "RI.01.01.01 - Patient rights",
        "LD.03.06.01 - Leadership responsibilities"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "PC.02.03.01 requires that the hospital provides education to the patient (and family/caregiver as appropriate) that addresses ongoing health care needs, including medications, diet, follow-up appointments, and warning signs that require immediate medical attention. This education must be documented.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks the discharge nurse how they assess the patient's understanding of discharge instructions. What is the BEST method to verify patient comprehension?",
        options: [
          "Ask the patient to sign a form confirming they understand",
          "Use the teach-back method by having the patient explain instructions in their own words",
          "Provide written instructions in the patient's preferred language",
          "Ask the patient if they have any questions"
        ],
        correctIndex: 1,
        explanation: "The teach-back method (also called show-back or closing the loop) is considered the gold standard for verifying patient understanding. The patient restates or demonstrates the information in their own words, allowing the clinician to identify and correct misunderstandings. Simply asking 'Do you understand?' or obtaining a signature does not confirm comprehension.",
        expertXp: 25
      }
    },
    {
      id: "dd-pc7",
      baseQuestion: "A surveyor discovers that a patient with a documented penicillin allergy has no allergy wristband and the allergy is not flagged in the electronic medication administration record (eMAR). What is the PRIMARY risk?",
      baseOptions: [
        "The patient may refuse medications",
        "Potential administration of a contraindicated medication leading to an allergic reaction or anaphylaxis",
        "The pharmacy may not fill prescriptions correctly",
        "The patient's insurance may deny claims"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Failure to prominently document and communicate allergies creates a direct patient safety risk. Joint Commission NPSG.03.06.01 and medication management standards require that allergies are documented, visible in all medication-related systems, and communicated at every transition of care to prevent adverse drug reactions.",
      baseXp: 15,
      followUp: {
        question: "The surveyor probes further: the allergy is listed as 'penicillin - rash.' What additional information should be documented to meet best practice standards for allergy documentation?",
        options: [
          "Only the drug name and reaction type are needed",
          "The drug name, specific reaction, severity, date of reaction (if known), and whether it is a true allergy versus an intolerance/adverse effect",
          "The drug class and a notation to avoid all antibiotics",
          "The prescribing physician's name and the pharmacy contact"
        ],
        correctIndex: 1,
        explanation: "Complete allergy documentation includes the specific allergen, the type and severity of the reaction (e.g., anaphylaxis vs. rash), onset/date if known, and the distinction between a true immune-mediated allergy and an adverse effect or intolerance. This distinction is critical because mislabeling an intolerance as an allergy can unnecessarily restrict treatment options.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc8",
      baseQuestion: "A surveyor reviews the clinical record and notes a 12-hour gap in nursing documentation for a post-surgical patient. According to Joint Commission documentation standards, what is the concern?",
      baseOptions: [
        "The nurse may face disciplinary action",
        "Gaps in documentation may indicate gaps in care and violate standards requiring timely, accurate, and complete clinical documentation",
        "The billing department cannot process the claim",
        "The patient's family may file a complaint"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard RC.01.02.01 requires that clinical documentation is accurate, timely, and complete. Documentation gaps raise concerns that assessments and interventions were not performed. The legal standard 'if it wasn't documented, it wasn't done' applies during surveys and litigation.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks about late entries in the medical record. What is the proper procedure for documenting a late entry?",
        options: [
          "Backdate the entry to the time the care was provided",
          "Label it as a 'late entry,' document the current date and time, reference the date and time of the actual event, and provide the relevant clinical information",
          "Have a supervisor add the entry under their credentials",
          "Create an addendum in a separate paper note"
        ],
        correctIndex: 1,
        explanation: "A late entry must be clearly labeled as such, documented with the current date and time, and reference the original date/time of the event or care provided. Backdating entries is falsification of medical records. The entry should be made by the clinician who provided the care, under their own credentials.",
        expertXp: 25
      }
    },
    {
      id: "dd-pc9",
      baseQuestion: "During a shift-change tracer, a surveyor observes a nurse giving report by saying 'The patient in room 302 is fine, nothing going on.' What standardized communication framework does Joint Commission expect for handoff communication?",
      baseOptions: [
        "Progress notes read aloud from the chart",
        "SBAR (Situation, Background, Assessment, Recommendation) or an equivalent standardized format",
        "A verbal summary of vital signs only",
        "An email sent to the oncoming nurse"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard PC.02.02.01 requires standardized approaches to handoff communication. SBAR is the most widely adopted framework, ensuring critical information (situation, background, assessment, and recommendation) is communicated consistently. Vague statements like 'the patient is fine' fail to convey actionable clinical information.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks the oncoming nurse to demonstrate how they would use SBAR for this patient, a 67-year-old admitted for pneumonia with oxygen requirements. Which element represents the 'A' (Assessment) component?",
        options: [
          "'The patient was admitted two days ago with community-acquired pneumonia'",
          "'The patient is on 3L nasal cannula with SpO2 of 94%, and I'm concerned the respiratory status may be worsening because the oxygen requirement increased from 2L to 3L this shift'",
          "'I recommend obtaining a repeat chest X-ray and notifying the attending'",
          "'The patient's name is John Smith, date of birth January 5, 1958'"
        ],
        correctIndex: 1,
        explanation: "The Assessment component of SBAR reflects the nurse's clinical judgment about the patient's current status. It includes objective findings (SpO2, oxygen requirement changes) combined with the nurse's professional evaluation of the clinical trend. The admission history is Background, the recommendation is Recommendation, and the patient identification is Situation.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc10",
      baseQuestion: "A surveyor asks a staff nurse what infection prevention education is provided to patients. The nurse states, 'We tell them to wash their hands.' What additional patient education is expected by Joint Commission?",
      baseOptions: [
        "Hand hygiene education alone is sufficient",
        "Education on hand hygiene, respiratory etiquette, their role in infection prevention, when to alert staff about signs of infection, and device-specific care (e.g., central lines, urinary catheters)",
        "Provide a brochure upon discharge only",
        "Infection prevention education is the responsibility of infection preventionists, not bedside nurses"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard IC.02.01.01 requires comprehensive infection prevention education for patients and families. This includes hand hygiene, cough etiquette, understanding their role in preventing healthcare-associated infections, recognizing signs of infection, and caring for invasive devices. Education should be ongoing, not a one-time event.",
      baseXp: 15,
      followUp: {
        question: "A patient with a peripheral IV asks the nurse, 'How do I know if my IV is getting infected?' What signs should the nurse educate the patient to report?",
        options: [
          "Any bruising around the IV site",
          "Redness, swelling, warmth, pain or tenderness at the site, drainage, or red streaking along the vein, as well as fever or chills",
          "Only report if the IV stops working",
          "The patient should not inspect their own IV site"
        ],
        correctIndex: 1,
        explanation: "Patient education about IV site monitoring aligns with Joint Commission expectations for patient engagement in safety. Signs of phlebitis or infection include erythema, edema, warmth, tenderness, purulent drainage, and red streaking (lymphangitis). Systemic signs such as fever or chills should also prompt immediate notification of the nursing staff.",
        expertXp: 25
      }
    },
    {
      id: "dd-pc11",
      baseQuestion: "A tracer reveals a patient on Contact Precautions for C. difficile. The surveyor enters the room and finds no isolation signage on the door and no gowns or gloves available outside the room. What standard is being violated?",
      baseOptions: [
        "EC.02.06.01 - Environmental safety",
        "IC.01.05.01 - The hospital implements transmission-based precautions, including appropriate signage, PPE availability, and isolation protocols",
        "HR.01.05.03 - Staff competency",
        "LD.04.01.01 - Leadership governance"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard IC.01.05.01 requires implementation of transmission-based precautions based on the mode of transmission. For Contact Precautions, this includes signage on the door identifying the precaution type, readily available PPE (gowns and gloves), and staff compliance with donning/doffing protocols.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks what specific environmental cleaning requirements apply to a C. difficile isolation room. What is the CRITICAL difference from standard terminal cleaning?",
        options: [
          "The room should be cleaned twice instead of once",
          "Sporicidal disinfectants (such as bleach-based solutions or EPA-registered sporicidal agents) must be used because C. difficile spores are resistant to standard quaternary ammonium disinfectants",
          "UV light disinfection replaces manual cleaning",
          "Only high-touch surfaces need to be cleaned"
        ],
        correctIndex: 1,
        explanation: "C. difficile produces spores that are resistant to alcohol-based and quaternary ammonium disinfectants. EPA-registered sporicidal agents, typically sodium hypochlorite (bleach) at appropriate concentrations, are required for terminal cleaning. UV-C disinfection can supplement but does not replace manual cleaning with sporicidal agents.",
        expertXp: 35
      }
    },
    {
      id: "dd-pc12",
      baseQuestion: "During a tracer, the surveyor asks a patient if they know who their nurse is and what their plan of care includes for the day. The patient responds, 'Nobody tells me anything.' Which patient right is potentially being violated?",
      baseOptions: [
        "The right to refuse treatment",
        "The right to be informed about and participate in their care, treatment, and services",
        "The right to access their medical records",
        "The right to have visitors"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard RI.01.01.01 establishes that patients have the right to be informed about and participate in decisions regarding their care. This includes knowing their care team members, understanding their diagnosis, treatment options, and the plan of care. Patient engagement is a fundamental expectation.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks how the organization ensures patients are informed about their rights. What is the Joint Commission expectation for communicating patient rights?",
        options: [
          "Post a sign in the lobby listing patient rights",
          "Provide information about patient rights in writing at admission in a language and format the patient can understand, and ensure staff are prepared to explain these rights",
          "Include patient rights information on the hospital website only",
          "Discuss patient rights only if the patient asks"
        ],
        correctIndex: 1,
        explanation: "Joint Commission standard RI.01.01.01 requires that patients receive written information about their rights at admission, in a language and format they can understand. Staff must be knowledgeable about patient rights and able to explain them. Simply posting a sign or relying on a website does not meet the standard of individual communication.",
        expertXp: 25
      }
    },
    {
      id: "dd-pc13",
      baseQuestion: "A surveyor reviews a care plan for a patient with diabetes, heart failure, and depression. The care plan addresses only the diabetes. What Joint Commission standard requires individualized, comprehensive care planning?",
      baseOptions: [
        "PC.01.03.01 - The hospital plans the patient's care based on needs identified in the assessment",
        "PC.01.01.01 - The hospital accepts patients for care",
        "MM.05.01.01 - Medication monitoring",
        "IC.02.02.01 - Infection surveillance"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "PC.01.03.01 requires that care planning is individualized, based on the patient's assessed needs, and addresses all identified problems. A patient with multiple comorbidities requires a care plan that integrates management of all active conditions, including mental health needs like depression.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks how the interdisciplinary team collaborates on this patient's care plan. What does Joint Commission expect regarding interdisciplinary care planning?",
        options: [
          "Each discipline documents their own separate plan of care",
          "An integrated, interdisciplinary care plan that reflects collaboration among all disciplines involved in the patient's care, with evidence of coordinated goals and interventions",
          "The attending physician writes the care plan and other disciplines follow it",
          "Care plans are only required for patients with more than 5 days of hospitalization"
        ],
        correctIndex: 1,
        explanation: "Joint Commission expects an integrated, interdisciplinary approach to care planning. The care plan should reflect input from nursing, physicians, pharmacists, social workers, therapists, and other relevant disciplines. Evidence of collaboration includes shared goals, coordinated interventions, and documentation of interdisciplinary communication.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc14",
      baseQuestion: "A surveyor traces a patient who was transferred from the ICU to a medical-surgical unit. The receiving nurse states she did not receive a medication reconciliation during the transfer. What is the Joint Commission requirement?",
      baseOptions: [
        "Medication reconciliation is only required at admission and discharge",
        "Medication reconciliation must occur at every transition of care, including intra-facility transfers",
        "The pharmacist is solely responsible for reconciliation during transfers",
        "A verbal order is sufficient to continue ICU medications on the floor"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NPSG.03.06.01 requires medication reconciliation at every transition of care, which includes transfers within the same facility (e.g., ICU to floor, OR to PACU, ED to inpatient). The current medication list must be compared with the new orders to ensure accuracy and prevent omissions or duplications.",
      baseXp: 15,
      followUp: {
        question: "During the ICU-to-floor transfer, several high-alert medications were discontinued. Which category of high-alert medications most commonly causes harm during transitions of care?",
        options: [
          "Vitamins and nutritional supplements",
          "Anticoagulants, insulins, and opioids",
          "Antihypertensives only",
          "Topical medications"
        ],
        correctIndex: 1,
        explanation: "ISMP identifies anticoagulants, insulins, and opioids as high-alert medications that most frequently cause patient harm during transitions of care. These medications have narrow therapeutic indices and require careful dose adjustment, monitoring, and communication during transfers. Joint Commission specifically targets these categories in medication safety initiatives.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc15",
      baseQuestion: "A surveyor observes a nurse documenting a patient assessment 4 hours after it was performed. The nurse states, 'I was too busy to chart in real time.' What is the Joint Commission expectation for documentation timeliness?",
      baseOptions: [
        "Documentation can be completed at the end of the shift",
        "Documentation should be completed as close to the time of the event as possible, per organizational policy, to ensure accuracy",
        "Documentation is only required to be completed before discharge",
        "Nurses have 24 hours to complete documentation"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard RC.01.02.01 requires that entries in the medical record are timely. While it defers to organizational policy for specific time frames, the expectation is documentation concurrent with or as close to the time of care as possible. Delayed documentation increases the risk of inaccurate or incomplete records.",
      baseXp: 15,
      followUp: {
        question: "The nurse asks about the legal implications of delayed documentation. From a risk management perspective, why is timely documentation critical?",
        options: [
          "It ensures the billing cycle is not disrupted",
          "Timely documentation creates a contemporaneous record that is more credible in legal proceedings, supports continuity of care, and reduces the risk of recall errors",
          "It is only important for regulatory surveys",
          "Late documentation is acceptable as long as it is eventually completed"
        ],
        correctIndex: 1,
        explanation: "Contemporaneous documentation (created at or near the time of the event) is considered more reliable and credible than records created hours later. In malpractice litigation, delayed entries may be scrutinized for accuracy and may appear self-serving. For patient safety, real-time documentation ensures the next caregiver has current, accurate information.",
        expertXp: 25
      }
    },
    {
      id: "dd-pc16",
      baseQuestion: "During a tracer, a surveyor asks a patient about their understanding of fall prevention strategies. The patient states, 'I don't know why I have this yellow bracelet on.' What does this finding indicate?",
      baseOptions: [
        "The wristband program is working as intended",
        "The patient was not educated about their fall risk status, the meaning of the visual cues, and their role in fall prevention",
        "The patient has cognitive impairment and cannot understand",
        "The wristband was placed in error"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission expects patient and family engagement in fall prevention. NPSG.09.02.01 requires that patients identified as fall risks are educated about their risk factors, the meaning of visual identifiers (wristbands, signage), and specific actions they should take (e.g., calling for assistance before ambulating). A wristband alone without education is insufficient.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks what a comprehensive fall prevention education session should include for a high-risk patient. Which elements are essential?",
        options: [
          "Only instructions to call the nurse before getting up",
          "Review of individual risk factors, proper use of the call light, appropriate footwear, environmental awareness (wet floors, clutter), medication side effects that increase fall risk, and engagement of family members in the prevention plan",
          "A pamphlet placed at the bedside",
          "Instructions to remain in bed at all times"
        ],
        correctIndex: 1,
        explanation: "Comprehensive fall prevention education addresses the patient's specific risk factors, teaches proper use of assistive devices and call lights, reviews medication side effects (sedation, orthostatic hypotension), emphasizes appropriate footwear, discusses environmental hazards, and engages family members. Education must be individualized, not generic.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc17",
      baseQuestion: "A surveyor reviews a patient's chart and finds the initial assessment was completed by a nurse, but there is no evidence of a medical history and physical (H&P) by a physician or qualified practitioner. When must the H&P be completed?",
      baseOptions: [
        "Within 48 hours of admission",
        "Within 24 hours of admission, or an H&P performed within 30 days prior to admission may be used if updated within 24 hours of admission",
        "Within 72 hours of admission",
        "Before the first surgical procedure only"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard PC.01.02.03 and CMS Conditions of Participation require that an H&P be completed within 24 hours of admission. An H&P completed within 30 days prior to admission is acceptable if a durable, legible update examining any changes in the patient's condition is documented within 24 hours of admission.",
      baseXp: 15,
      followUp: {
        question: "The surveyor finds that a pre-admission H&P from an outside physician was used but no update was documented. What MUST the update include?",
        options: [
          "A statement saying 'H&P reviewed, no changes'",
          "An examination of the patient with documentation of any changes in condition since the prior H&P, including current physical findings and any interval changes in medications, diagnoses, or functional status",
          "A copy of the outside H&P placed in the chart",
          "A telephone order from the attending physician"
        ],
        correctIndex: 1,
        explanation: "The update to a pre-admission H&P must include a focused examination of the patient with documentation of any changes. A simple statement of 'no changes' without evidence of an actual patient evaluation does not meet the standard. The update must be performed by a physician or qualified practitioner with appropriate privileges.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc18",
      baseQuestion: "A surveyor is tracing an Airborne Precautions patient with active pulmonary tuberculosis. Which engineering control is REQUIRED for the patient's room?",
      baseOptions: [
        "A standard private room with the door closed",
        "An airborne infection isolation room (AIIR) with negative pressure, a minimum of 6-12 air changes per hour, and air exhausted directly outside or through HEPA filtration",
        "Any private room with a HEPA air purifier",
        "A room at the end of the hallway"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard IC.01.05.01 and CDC guidelines require that patients with suspected or confirmed airborne infections (TB, measles, varicella, disseminated zoster) be placed in an AIIR. The room must have monitored negative pressure relative to the corridor, a minimum of 6 (existing) to 12 (new construction) air changes per hour, and air exhausted directly outside or HEPA-filtered before recirculation.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks how often the negative pressure in AIIRs must be monitored and documented. What is the requirement?",
        options: [
          "Once a month during routine maintenance",
          "Daily when the room is in use for an airborne precautions patient, with documentation of negative pressure verification",
          "Only at the time of patient placement",
          "Annually during environment of care rounds"
        ],
        correctIndex: 1,
        explanation: "When an AIIR is in use for an airborne precautions patient, negative pressure must be monitored and documented at least daily. Many facilities use continuous monitoring with visual indicators (smoke tubes or flutter strips) or electronic pressure monitors. The results must be documented and any loss of negative pressure requires immediate corrective action.",
        expertXp: 35
      }
    },
    {
      id: "dd-pc19",
      baseQuestion: "During a tracer, a surveyor asks a nurse about pain reassessment following an intervention. The nurse administered morphine IV 2mg at 0800 but there is no documented reassessment. When should pain be reassessed after an intervention?",
      baseOptions: [
        "At the next scheduled assessment",
        "Within a time frame appropriate to the intervention: typically 15-30 minutes for IV medications and 60 minutes for oral medications, per organizational policy",
        "Only if the patient requests it",
        "At the end of the shift"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard PC.01.02.07 requires reassessment of pain after interventions to evaluate effectiveness. The reassessment time frame should be consistent with the expected onset of the intervention: approximately 15-30 minutes for IV medications and 30-60 minutes for oral medications. Organizations must define these time frames in policy.",
      baseXp: 15,
      followUp: {
        question: "The patient reports the morphine reduced pain from 8/10 to 6/10. The nurse documents 'pain better' without a numeric score. What is the documentation deficiency?",
        options: [
          "The documentation is adequate because it indicates improvement",
          "The reassessment must include a quantified pain score using the same validated tool as the initial assessment, the patient's functional response, any side effects observed, and the plan if pain remains above the patient's comfort goal",
          "Only the physician needs to document pain reassessments",
          "A numeric score is not required if the patient appears comfortable"
        ],
        correctIndex: 1,
        explanation: "Pain reassessment documentation must include a quantified score using the same validated scale as the initial assessment (for consistency and trending), the patient's functional status (e.g., ability to ambulate, sleep), observed side effects (sedation, respiratory depression), and a follow-up plan if pain management goals are not met. Subjective terms like 'better' are insufficient.",
        expertXp: 30
      }
    },
    {
      id: "dd-pc20",
      baseQuestion: "A surveyor asks a patient if they were informed about how to file a complaint or grievance. The patient states they were never told. Which Joint Commission standard requires this communication?",
      baseOptions: [
        "PC.04.02.01 - Operative procedures",
        "RI.01.07.01 - The hospital informs patients about their right to file complaints and grievances, including how to contact external agencies",
        "EC.02.01.01 - Environmental safety",
        "HR.01.02.01 - Staff qualifications"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard RI.01.07.01 requires that patients are informed of the process for filing a complaint or grievance, including how to contact the state health department and The Joint Commission directly. CMS Conditions of Participation also require that this information be provided to patients at admission.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks the patient relations manager to explain the difference between a complaint and a grievance. What is the key distinction under CMS and Joint Commission definitions?",
        options: [
          "There is no difference; the terms are interchangeable",
          "A complaint can typically be resolved at the point of care by staff present, while a grievance is a formal or written complaint that requires investigation, written response, and resolution through the grievance process",
          "A complaint is filed by the patient and a grievance is filed by a family member",
          "A complaint relates to clinical care and a grievance relates to non-clinical issues"
        ],
        correctIndex: 1,
        explanation: "Under CMS Conditions of Participation and Joint Commission standards, a complaint can generally be resolved promptly by staff present (e.g., room temperature, meal preference). A grievance is a formal complaint (written or verbal if not resolved at the point of care) that requires investigation, a written response to the patient within a defined time frame, and documentation of the resolution process.",
        expertXp: 30
      }
    }
  ]
};
