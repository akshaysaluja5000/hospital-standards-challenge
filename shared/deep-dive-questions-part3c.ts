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
      followUps: [
        {
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
        },
        {
          question: "The surveyor discovers that the nutritional screening flagged the patient as high-risk, but no registered dietitian referral was generated for 48 hours. Under PC.01.02.01 EP4 and PC.01.03.01, what is the organization's obligation when a nutritional screening triggers a positive result?",
          options: [
            "Document the positive screen and reassess at discharge to determine if a referral is still needed",
            "A comprehensive nutritional assessment by a qualified dietetics professional must be initiated within the time frame defined by organizational policy, and individualized nutritional interventions must be integrated into the plan of care",
            "Notify the attending physician and await a specific dietitian order before proceeding",
            "Place the patient on a standard high-protein diet and document the intervention as the nutritional plan"
          ],
          correctIndex: 1,
          explanation: "When a validated nutritional screen is positive, Joint Commission expects a timely, comprehensive assessment by a qualified dietetics professional (per PC.01.03.01). The assessment must lead to individualized interventions integrated into the interdisciplinary care plan. Simply waiting for a physician order or applying a generic diet does not meet the standard for individualized care planning.",
          expertXp: 30
        },
        {
          question: "During the same tracer, the surveyor reviews the initial assessment of an 82-year-old ED admission who speaks only Mandarin. The assessment was documented entirely in English with a note stating 'daughter interpreted.' The surveyor cites a deficiency. Which Joint Commission standard was violated, and what is the specific requirement?",
          options: [
            "RI.01.01.03 requires that qualified interpreters or language services be used for clinical communication; family members should not serve as primary interpreters for assessments because of accuracy and confidentiality concerns",
            "PC.01.02.01 only requires that the assessment be completed in a timely manner; using a family interpreter is acceptable if documented",
            "HR.01.06.01 requires staff to be trained in cultural competency, but using family interpreters is permitted when professional services are unavailable",
            "RI.01.01.01 addresses patient rights but does not specifically prohibit use of family members as interpreters during clinical assessments"
          ],
          correctIndex: 0,
          explanation: "Joint Commission standard RI.01.01.03 requires that the hospital addresses the patient's communication needs, including providing qualified interpreter services. Using family members as interpreters for clinical assessments poses risks of inaccurate translation, omission of sensitive information, and breach of confidentiality. CMS Conditions of Participation reinforce that qualified interpreters must be offered for LEP (Limited English Proficiency) patients.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor reviews this readmitted patient's current admission medication reconciliation and notices that the patient's home medication list includes 'metformin 500mg twice daily,' but the previous discharge summary listed 'metformin 1000mg twice daily.' The patient states they have been taking 500mg because that is what they had at home. Under NPSG.03.06.01, what is the MOST appropriate action?",
          options: [
            "Continue the 1000mg dose as documented in the prior discharge summary since that was the most recent physician-ordered dose",
            "Contact the patient's primary care provider and community pharmacy to verify the correct dose, reconcile the discrepancy with the admitting provider, and document the resolution including the source of verification",
            "Use the patient's reported dose of 500mg since the patient is the most reliable source of their home medication regimen",
            "Consult endocrinology to determine the correct metformin dose before proceeding with reconciliation"
          ],
          correctIndex: 1,
          explanation: "When discrepancies are identified between patient report, discharge records, and other sources, NPSG.03.06.01 requires active investigation using multiple reliable sources (PCP, pharmacy records, medication bottles). The discrepancy must be resolved with the prescriber and documented. Relying solely on the patient's report or prior discharge records without verification risks perpetuating an error.",
          expertXp: 30
        },
        {
          question: "During the same tracer, the surveyor discovers that the organization uses a 'best possible medication history' (BPMH) process but finds that the pharmacy technician who obtained the BPMH did not document which sources were used to compile the list. The surveyor asks what NPSG.03.06.01 EP2 requires regarding source documentation. What is the correct answer?",
          options: [
            "Source documentation is a best practice recommendation but not an explicit requirement under NPSG.03.06.01",
            "The BPMH must document the sources used to obtain the medication history (e.g., patient interview, pharmacy records, medication bottles, outside provider records) to establish reliability and enable discrepancy resolution",
            "The pharmacy technician's credential and signature are sufficient documentation of source reliability",
            "Source documentation is only required when the patient is unable to provide their own medication history due to cognitive or communication barriers"
          ],
          correctIndex: 1,
          explanation: "NPSG.03.06.01 requires that the medication reconciliation process includes obtaining and documenting a complete and accurate medication list. Documenting the sources used to compile the BPMH (patient, family, pharmacy, PCP records) is essential for establishing reliability, enabling discrepancy resolution, and demonstrating a systematic process during survey. Without source documentation, the accuracy of the list cannot be verified.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor reviews the fall risk reassessment schedule and finds that the patient's Morse Fall Scale score was obtained on admission but not reassessed after the patient received a new sedating medication (lorazepam). Under NPSG.09.02.01, when must fall risk be reassessed beyond the routine schedule?",
          options: [
            "Only at shift change and upon transfer to a new unit",
            "After any change in patient condition that could affect fall risk, including new sedating medications, changes in mobility status, post-procedure, or after a fall event",
            "Every 24 hours per protocol is sufficient regardless of condition changes",
            "Reassessment is only required if the patient or family requests it or if a fall occurs"
          ],
          correctIndex: 1,
          explanation: "NPSG.09.02.01 requires ongoing reassessment of fall risk. Beyond routine reassessment intervals, fall risk must be reevaluated whenever there is a significant change in the patient's condition that could alter risk, such as administration of sedating medications, post-procedural status changes, new mobility limitations, or change in cognitive status. A static assessment schedule fails to capture dynamic risk changes.",
          expertXp: 30
        },
        {
          question: "A post-fall huddle reveals that the patient fell while ambulating to the bathroom unassisted at 0300. The bed alarm was activated but the nursing assistant response time was 4 minutes. The surveyor asks what elements must be included in the post-fall assessment and event analysis per Joint Commission expectations. What is the MOST comprehensive answer?",
          options: [
            "Document the fall in the medical record, complete an incident report, notify the physician, and perform a focused neurological and musculoskeletal assessment",
            "Perform an immediate post-fall assessment including vital signs, neurological evaluation (including head injury screening), musculoskeletal examination, and skin assessment; obtain diagnostic studies as indicated; conduct a root cause analysis or post-fall huddle examining contributing factors (medications, environment, equipment, staffing, care plan adherence); update the care plan with modified interventions; and communicate findings to the interdisciplinary team and patient/family",
            "Notify the physician, obtain a CT scan of the head, and file an incident report within 24 hours",
            "Complete the incident report, reassess the patient's Morse Fall Scale score, and add bed alarm to the care plan"
          ],
          correctIndex: 1,
          explanation: "Joint Commission expects a comprehensive post-fall response that includes immediate clinical assessment (neurological, musculoskeletal, skin integrity, vitals), appropriate diagnostic workup, a systematic analysis of contributing factors (post-fall huddle or RCA), care plan modification with enhanced individualized interventions, interdisciplinary communication, and patient/family engagement. Simply documenting and reporting without systematic analysis and care plan revision fails to meet performance improvement expectations under PI.01.01.01 and NPSG.09.02.01.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor discovers that the restraint order was written as 'bilateral wrist restraints PRN agitation.' Under PC.03.05.01 and CMS Conditions of Participation, why is this order non-compliant?",
          options: [
            "PRN restraint orders are permitted as long as the physician specifies the clinical criteria for application",
            "Restraint orders must not be written as PRN or standing orders; each episode of restraint requires an individual order specifying the type of restraint, clinical justification, and duration not to exceed 24 hours for non-violent restraints, with renewal requiring reassessment",
            "The order is non-compliant only because it does not specify the restraint manufacturer",
            "PRN restraint orders are acceptable for non-violent restraints but prohibited for violent/self-destructive restraints"
          ],
          correctIndex: 1,
          explanation: "CMS Conditions of Participation (42 CFR 482.13) and Joint Commission PC.03.05.01 explicitly prohibit PRN and standing orders for restraints. Each restraint application requires an individualized order with specific clinical justification, the type of restraint, and a time-limited duration (not to exceed 24 hours for medical-surgical restraints). The order must be renewed with a reassessment demonstrating continued clinical need.",
          expertXp: 30
        },
        {
          question: "During the tracer, the surveyor interviews the patient in bilateral wrist restraints and asks if alternatives were tried before restraints were applied. The nurse states, 'The patient was pulling at their central line, so we went straight to restraints.' The surveyor identifies this as a deficiency. Under PC.03.05.01 EP3, what documentation must exist BEFORE restraint application?",
          options: [
            "A physician order is the only prerequisite; alternatives are recommended but not required to be documented",
            "Documentation of the patient's behavior necessitating restraint and a nursing assessment that the restraint is clinically indicated",
            "Documentation that less restrictive alternatives were attempted and were ineffective or clinically contraindicated, the specific patient behavior necessitating restraint, the clinical justification, and evidence that the patient and/or family were informed about the reason for restraint use",
            "A risk management consultation and ethics committee approval must be obtained before any restraint application"
          ],
          correctIndex: 2,
          explanation: "PC.03.05.01 requires that restraint use is a last resort. Documentation must demonstrate that less restrictive alternatives (mittens, 1:1 sitter, reorientation, addressing underlying cause such as pain or delirium) were attempted and failed or were clinically contraindicated. The specific behavior, clinical justification, and patient/family notification must all be documented. Proceeding directly to restraints without attempting alternatives is a significant compliance deficiency.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor reviews the organization's pain management policy and notes it relies exclusively on pharmacologic interventions. Under PC.01.02.07, what does Joint Commission expect regarding non-pharmacologic pain management?",
          options: [
            "Non-pharmacologic interventions are optional and only required if the patient specifically requests them",
            "The organization must offer and document non-pharmacologic pain management strategies as part of a multimodal approach, which may include repositioning, ice/heat therapy, relaxation techniques, music therapy, or physical therapy, based on individual patient needs and preferences",
            "Non-pharmacologic pain management is only required in pediatric and obstetric populations",
            "Non-pharmacologic interventions are addressed under rehabilitation standards, not pain management standards"
          ],
          correctIndex: 1,
          explanation: "Joint Commission revised pain assessment standards emphasize a multimodal approach that includes both pharmacologic and non-pharmacologic strategies. Organizations must define, offer, and document non-pharmacologic options tailored to the patient's condition, preferences, and cultural considerations. Relying exclusively on medications fails to meet the expectation for comprehensive, individualized pain management.",
          expertXp: 30
        },
        {
          question: "The surveyor identifies that the organization's pain reassessment protocol does not address patients receiving Patient-Controlled Analgesia (PCA). A nurse is asked what specific monitoring is required for a patient on a hydromorphone PCA. Which response demonstrates the MOST compliant practice?",
          options: [
            "Monitor pain scores every 4 hours and respiratory rate every 8 hours while the PCA is infusing",
            "Continuous pulse oximetry or capnography, respiratory rate and sedation level assessment at defined intervals per policy (typically every 1-2 hours), pain reassessment after dose adjustments, and defined parameters for when to notify the provider including a sedation scale threshold and respiratory rate below 10",
            "Standard vital signs every 4 hours are sufficient as long as the PCA has a lockout interval programmed",
            "Respiratory monitoring is only necessary during the first 24 hours of PCA therapy; after that, routine vital signs are adequate"
          ],
          correctIndex: 1,
          explanation: "Patients on PCA, particularly with opioids such as hydromorphone, require enhanced monitoring per Joint Commission medication management standards and ISMP guidelines. This includes continuous or frequent respiratory monitoring (pulse oximetry and/or capnography), sedation assessment using a validated scale (e.g., Pasero Opioid-Induced Sedation Scale), defined notification parameters, and ongoing pain reassessment. The highest risk period extends beyond 24 hours, especially with dose adjustments or concurrent sedating medications.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor discovers that the patient being discharged has a new diagnosis of heart failure and was prescribed four new medications. The discharge education was documented as a single checkbox: 'Discharge instructions reviewed with patient.' Under PC.02.03.01, why is this documentation insufficient?",
          options: [
            "Checkbox documentation is acceptable as long as the patient signed the form acknowledging receipt of instructions",
            "Documentation must reflect individualized education content specific to the patient's condition, including medication names/purposes/side effects, dietary modifications, activity restrictions, warning signs requiring emergency care, follow-up appointments, and evidence of the patient's comprehension using teach-back or return demonstration",
            "Checkbox documentation is acceptable for stable patients but not for patients with new diagnoses",
            "The deficiency is only with the medication education component; the rest of the checkbox is adequate"
          ],
          correctIndex: 1,
          explanation: "Joint Commission expects discharge education documentation to demonstrate individualized, patient-specific content rather than generic checkbox completion. For a patient with a new heart failure diagnosis and multiple new medications, documentation must show education on each medication, dietary sodium restriction, daily weight monitoring, fluid restrictions if applicable, activity guidelines, recognition of decompensation symptoms, and verification of understanding. A checkbox provides no evidence of individualized content or comprehension assessment.",
          expertXp: 30
        },
        {
          question: "The surveyor traces the same heart failure patient's discharge process and finds that the patient was discharged at 2100 on a Friday with a follow-up appointment scheduled for the following Thursday (6 days post-discharge). Current evidence-based guidelines recommend early follow-up for heart failure. What does Joint Commission expect regarding transitions of care for high-risk patients under PC.04.01.01?",
          options: [
            "Follow-up timing is at the discretion of the attending physician and does not have a specific Joint Commission standard",
            "The organization must have a process to identify patients at risk for readmission and implement enhanced discharge planning, which for heart failure includes follow-up within 7 days per CMS quality measures, a confirmed appointment before discharge, a follow-up phone call within 48 hours, and coordination with outpatient providers to ensure continuity",
            "A 6-day follow-up is within the 7-day CMS quality measure window and therefore meets the standard",
            "Joint Commission only requires that a follow-up appointment be documented in the discharge summary; the timing is not specified"
          ],
          correctIndex: 1,
          explanation: "Joint Commission standard PC.04.01.01 requires a discharge planning process that addresses follow-up care. For high-risk populations such as heart failure, best practice aligned with CMS quality measures targets follow-up within 7 days. However, comprehensive transition planning goes beyond scheduling an appointment; it includes confirming the appointment before discharge, post-discharge telephone follow-up within 24-48 hours, medication reconciliation communication to the outpatient provider, and ensuring the patient has resources to manage their condition at home. A Friday evening discharge with a Thursday appointment, while technically within 7 days, raises concerns about weekend coverage and access to care if symptoms worsen.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The attending physician wants to order cefazolin (a first-generation cephalosporin) for surgical prophylaxis for this patient with a documented penicillin allergy manifesting as a rash. The nurse questions whether this is safe. What is the evidence-based approach that aligns with Joint Commission medication safety expectations?",
          options: [
            "All cephalosporins are absolutely contraindicated in any patient with a penicillin allergy due to the beta-lactam cross-reactivity",
            "The cross-reactivity rate between penicillins and cephalosporins is approximately 1-2% for most cephalosporins; for a non-severe penicillin allergy (rash), cephalosporins can generally be administered with appropriate monitoring, and the decision should be documented with a risk-benefit analysis by the prescriber",
            "Administer the cefazolin without concern because cephalosporins and penicillins are completely different drug classes",
            "Only second-generation and later cephalosporins are safe; first-generation cephalosporins should always be avoided"
          ],
          correctIndex: 1,
          explanation: "Current evidence shows cross-reactivity between penicillins and cephalosporins is approximately 1-2%, primarily with first-generation cephalosporins sharing similar side chains. For patients with non-severe penicillin reactions (rash), cephalosporins can generally be safely administered with appropriate monitoring. The prescriber should document the risk-benefit analysis. This aligns with Joint Commission's expectation for evidence-based medication decision-making and proper allergy documentation per MM.05.01.01.",
          expertXp: 30
        },
        {
          question: "The surveyor escalates the tracer by asking the pharmacy director about the organization's process for allergy verification during the medication use process. The surveyor finds that the CPOE system allows overriding allergy alerts without documentation of clinical rationale. Under MM.01.01.03 and NPSG.03.06.01, what is the expected compliance standard?",
          options: [
            "Alert overrides are acceptable as long as the pharmacist verifies the order before dispensing",
            "The organization must have a defined process for managing allergy alert overrides that includes mandatory documentation of clinical rationale for each override, periodic monitoring and reporting of override rates, prescriber education on appropriate override criteria, and integration of override data into the medication safety performance improvement program",
            "CPOE allergy alerts are advisory only and do not require documentation of overrides under Joint Commission standards",
            "The pharmacy and therapeutics committee must pre-approve a list of acceptable allergy overrides, and any override not on the list requires a peer review"
          ],
          correctIndex: 1,
          explanation: "Joint Commission medication management standards (MM.01.01.03) and NPSG.03.06.01 require that organizations have robust processes for medication safety, including management of clinical decision support alerts. Override of allergy alerts without documented clinical rationale creates a significant safety gap. The organization must track override rates, require documented justification, integrate findings into performance improvement (PI.01.01.01), and ensure that alert fatigue is addressed through optimization of the alert system.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor discovers that the 12-hour documentation gap occurred during a period when the post-surgical patient experienced a blood pressure drop to 82/50 and received a fluid bolus. No documentation of the assessment, intervention, or physician notification exists. Under RC.01.02.01 and PC.01.02.01, what are the implications of this specific gap?",
          options: [
            "The documentation gap is a minor deficiency since the patient ultimately recovered and the outcome was not affected",
            "This represents a significant patient safety concern because undocumented clinical deterioration, assessment findings, interventions, and provider notifications cannot be verified as having occurred; the organization cannot demonstrate compliance with standards requiring timely assessment and response to changes in condition",
            "The gap only becomes a compliance issue if the patient files a formal complaint about the incident",
            "The charge nurse can verbally attest that care was provided, which satisfies the documentation requirement"
          ],
          correctIndex: 1,
          explanation: "A documentation gap during a clinically significant event is a serious deficiency under RC.01.02.01 (timely, accurate documentation) and PC.01.02.01 (ongoing assessment). The organization cannot demonstrate that the patient was properly assessed, that the deterioration was recognized and communicated, or that appropriate interventions were implemented. This gap could constitute a condition-level deficiency if it represents a pattern, and creates substantial legal liability. Verbal attestation does not substitute for contemporaneous documentation.",
          expertXp: 30
        },
        {
          question: "Following the documentation gap finding, the surveyor requests to review the organization's audit process for clinical documentation completeness. The quality director states audits are performed annually on a random sample of 10 charts. The surveyor identifies this as insufficient. Under PI.01.01.01 and RC.01.02.01, what documentation monitoring process does Joint Commission expect?",
          options: [
            "Annual random chart audits of 10 records are acceptable if findings are reported to the medical executive committee",
            "Documentation audits should be conducted at sufficient frequency and volume to identify trends, with real-time or concurrent review for high-risk populations, defined performance metrics and thresholds, integration of findings into staff education and performance improvement plans, and evidence that audit results lead to measurable improvement in documentation compliance",
            "Joint Commission does not prescribe specific documentation audit methodologies; the organization has full discretion",
            "Automated EHR compliance reports are sufficient without manual chart review as long as they generate monthly exception reports"
          ],
          correctIndex: 1,
          explanation: "Joint Commission PI.01.01.01 requires ongoing, systematic performance monitoring. For documentation compliance under RC.01.02.01, this means audits must be frequent enough to detect patterns, include sufficient sample sizes for statistical validity, focus on high-risk areas (post-surgical patients, critical care, transitions), define measurable targets, and demonstrate that findings drive improvement. An annual review of 10 charts is insufficient to identify systemic issues, ensure staff accountability, or demonstrate a culture of continuous improvement.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor observes that handoffs on this unit take place at the nursing station without the oncoming nurse having access to the patient's chart or being able to verify information. Under PC.02.02.01, what is the Joint Commission expectation for the handoff process environment and structure?",
          options: [
            "Handoffs at the nursing station are the standard practice and do not require chart access",
            "The handoff process must include an opportunity for the receiver to ask questions, review relevant patient information in the medical record, and ideally include a face-to-face component or bedside handoff; the process should minimize interruptions and occur in a setting that supports focused communication and patient engagement when appropriate",
            "Handoffs can occur via recorded audio messages that the oncoming nurse listens to at their convenience",
            "Chart access during handoff is a best practice but not a Joint Commission requirement as long as SBAR is used"
          ],
          correctIndex: 1,
          explanation: "PC.02.02.01 requires that the handoff process includes an opportunity for the receiving clinician to ask questions, review pertinent data, and verify critical information. Joint Commission emphasizes interactive communication (not one-way) with read-back of critical values, access to current clinical information, and when possible, bedside handoff that engages the patient. The goal is to ensure accurate, complete transfer of essential information with minimal opportunity for communication failures.",
          expertXp: 30
        },
        {
          question: "Following the handoff observation, the surveyor reviews the organization's handoff communication data and finds that the unit has had three adverse events in 6 months attributed to handoff communication failures, including a missed critical lab value. The surveyor asks what performance improvement actions are required. Under PI.01.01.01 and PC.02.02.01, what is the MOST comprehensive response?",
          options: [
            "Provide additional SBAR training to all nursing staff and document completion",
            "Conduct a root cause analysis of each adverse event to identify common contributing factors, implement targeted interventions (such as mandatory inclusion of pending results and critical values in the handoff checklist), establish measurable outcome metrics, monitor compliance through direct observation and auditing, report findings to leadership, and reassess the effectiveness of interventions using PDCA methodology",
            "Switch from SBAR to I-PASS handoff framework and retrain all staff",
            "Require all handoffs to be conducted at the bedside and add 15 minutes to the shift overlap period"
          ],
          correctIndex: 1,
          explanation: "Joint Commission PI.01.01.01 requires systematic performance improvement using data-driven analysis. Three adverse events from handoff failures constitute a pattern requiring root cause analysis, identification of system-level contributing factors (not just individual performance), targeted interventions based on findings, measurable outcomes, ongoing monitoring, and leadership reporting. Simply retraining on SBAR or switching frameworks without systematic analysis fails to address the underlying system issues. The PDCA (Plan-Do-Check-Act) cycle ensures interventions are evaluated for effectiveness.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor now traces a patient with a central venous catheter (CVC) and asks the nurse about the organization's central line bundle. The nurse can name hand hygiene and chlorhexidine dressing changes but cannot articulate the other bundle elements. Under IC.01.05.01 and NPSG.07.04.01, what are the complete evidence-based central line bundle elements?",
          options: [
            "Hand hygiene, sterile gloves, and antibiotic ointment at the insertion site",
            "Hand hygiene, maximal sterile barrier precautions during insertion, chlorhexidine skin antisepsis, optimal catheter site selection (subclavian preferred for non-tunneled catheters), and daily review of line necessity with prompt removal when no longer needed",
            "Hand hygiene, site rotation every 72 hours, daily blood cultures, and prophylactic antibiotics",
            "Hand hygiene, chlorhexidine bathing, transparent dressings changed weekly, and routine catheter exchange over a guidewire every 7 days"
          ],
          correctIndex: 1,
          explanation: "The evidence-based central line bundle (aligned with CDC/SHEA/IDSA guidelines and Joint Commission NPSG.07.04.01) includes: hand hygiene before insertion and access, maximal sterile barrier precautions (cap, mask, sterile gown, sterile gloves, full-body drape), chlorhexidine greater than 0.5% skin antisepsis, optimal site selection (avoiding femoral when possible, subclavian preferred for infection risk reduction), and daily assessment of line necessity with removal when no longer clinically indicated. Staff must be able to articulate all bundle elements.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews the organization's CLABSI (Central Line-Associated Bloodstream Infection) rate data and notes the rate has been above the NHSN benchmark for three consecutive quarters. The infection preventionist states they are 'monitoring the situation.' Under IC.01.04.01 and PI.01.01.01, what is the surveyor likely to cite as deficient?",
          options: [
            "Monitoring alone is acceptable as long as the data is reported to the infection control committee quarterly",
            "The organization has failed to implement a systematic performance improvement response to sustained elevated CLABSI rates, which should include analysis of each CLABSI event for contributing factors, competency validation of insertion and maintenance bundle compliance through direct observation, targeted interventions based on identified gaps, leadership engagement, and measurable reduction goals with defined timelines",
            "The infection preventionist should have escalated to the state health department after two consecutive quarters above benchmark",
            "The organization needs to purchase antimicrobial-impregnated catheters for all central line insertions"
          ],
          correctIndex: 1,
          explanation: "Three consecutive quarters above the NHSN benchmark constitutes a sustained performance problem requiring active intervention, not passive monitoring. Joint Commission IC.01.04.01 requires that the organization take action on infection surveillance data, and PI.01.01.01 mandates systematic improvement. The response must include event-level analysis, bundle compliance auditing (insertion and maintenance), competency validation, targeted interventions based on root cause findings, leadership engagement and resource allocation, and measurable improvement goals. Simply monitoring without action is a significant compliance deficiency.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor observes a dietary aide delivering a meal tray to the C. difficile patient. The aide puts on gloves but does not don a gown before entering the room. When questioned, the aide states, 'I'm only dropping off a tray, I won't touch the patient.' Under IC.01.05.01, is this practice compliant?",
          options: [
            "Yes, gloves alone are sufficient for brief non-patient-contact entries such as meal delivery",
            "No, Contact Precautions require both gown and gloves for ALL individuals entering the room regardless of anticipated patient contact, because C. difficile spores contaminate environmental surfaces and can be transmitted via contact with any contaminated surface in the room",
            "Yes, as long as the aide uses alcohol-based hand sanitizer upon exiting",
            "Gowns are only required for clinical staff providing direct patient care; ancillary staff may enter with gloves alone"
          ],
          correctIndex: 1,
          explanation: "Contact Precautions require gown AND gloves for all individuals entering the room, regardless of whether direct patient contact is anticipated. C. difficile spores are shed into the environment and contaminate surfaces including bed rails, tray tables, door handles, and call lights. Any contact with these surfaces can result in transmission. Additionally, alcohol-based hand sanitizer is ineffective against C. difficile spores; soap and water handwashing is required.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews the organization's C. difficile prevention program and notes that the antibiotic stewardship committee has not met in 6 months and there is no documented review of fluoroquinolone prescribing patterns despite elevated C. difficile rates. Under IC.01.04.01 and MM.09.01.01, what is the expected organizational response?",
          options: [
            "Antibiotic stewardship is a pharmacy function and not directly connected to C. difficile prevention under Joint Commission standards",
            "The organization must maintain an active antimicrobial stewardship program that includes regular review of prescribing patterns for high-risk antibiotics (fluoroquinolones, clindamycin, broad-spectrum cephalosporins), prospective audit and feedback or pre-authorization strategies, integration of stewardship data with infection surveillance to identify correlations, and regular committee meetings with documented actions and outcomes",
            "Antibiotic stewardship program meetings are required annually, and 6 months without a meeting is within acceptable parameters",
            "The stewardship program only needs to focus on antibiotic duration of therapy, not specific antibiotic selection"
          ],
          correctIndex: 1,
          explanation: "Joint Commission MM.09.01.01 requires an active antimicrobial stewardship program, and IC.01.04.01 requires action on infection surveillance data. When C. difficile rates are elevated, the stewardship program must actively review prescribing of high-risk antibiotics (fluoroquinolones are strongly associated with C. difficile), implement interventions to optimize antibiotic use, integrate stewardship data with infection prevention surveillance, and maintain regular committee oversight with documented actions. A 6-month gap in committee meetings with elevated C. difficile rates demonstrates a failure to act on known risk factors.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor interviews a patient who speaks limited English and was admitted overnight. The patient received a patient rights document in English only and states through an interpreter that they do not understand their rights or plan of care. Under RI.01.01.03, what specific actions must the organization take?",
          options: [
            "Provide the document in the patient's language within 24 hours of the request",
            "The organization must provide patient rights information in the patient's preferred language at the time of admission, ensure qualified interpreter services are available 24/7 for verbal explanation, document that communication was effective, and integrate language needs into the care plan to ensure ongoing informed participation",
            "Having the English document available is sufficient as long as an interpreter was used during the admission process",
            "The organization must provide translated documents for the top 5 languages in their service area; other languages require only verbal interpretation"
          ],
          correctIndex: 1,
          explanation: "RI.01.01.03 requires that the organization addresses patient communication needs, including providing information in the patient's preferred language. This is not optional or contingent on the patient's request. The organization must have translated materials available, provide qualified interpreter services (not family members) 24/7, document effective communication, and ensure language barriers do not impede the patient's ability to understand and participate in their care. CMS also requires compliance with Section 1557 of the ACA regarding language access.",
          expertXp: 30
        },
        {
          question: "The surveyor expands the tracer to review informed consent documentation for a procedure performed on a patient who has a legal guardian due to cognitive disability. The consent form was signed by the patient alone without guardian involvement. Under RI.01.02.01 and RI.01.03.01, what are the specific requirements for informed consent involving a legally incapacitated patient?",
          options: [
            "The patient's signature alone is valid as long as the patient was oriented and cooperative at the time of signing",
            "Informed consent must be obtained from the patient's legally authorized representative (guardian), must include a discussion of the procedure's nature, risks, benefits, and alternatives conducted in a manner the representative can understand, and documentation must reflect who provided consent, their legal authority, and that the patient was included in the discussion to the extent of their capacity",
            "The attending physician can provide consent on behalf of the patient if the guardian is unavailable",
            "Two witnesses signing the consent form in lieu of the guardian satisfies the informed consent requirement"
          ],
          correctIndex: 1,
          explanation: "Joint Commission RI.01.02.01 and RI.01.03.01 require that informed consent be obtained from the patient's legally authorized representative when the patient lacks decision-making capacity. The consent process must include a meaningful discussion of the procedure, risks, benefits, and alternatives with the authorized representative. Documentation must identify the representative, their legal authority (guardianship documentation should be in the record), and reflect that the patient was involved in the discussion to the extent of their ability. A physician cannot substitute consent, and witness signatures do not replace the representative's authorization.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor notes that depression was identified in the nursing assessment but no psychiatric or behavioral health consultation was ordered, no depression screening tool score was documented, and no psychosocial interventions were included in the care plan. Under PC.01.03.01 and PC.02.01.01, what is the expected standard of care?",
          options: [
            "Depression management is an outpatient concern and does not need to be addressed in the acute care plan unless the patient is suicidal",
            "Identified mental health needs must be assessed using validated tools (e.g., PHQ-2/PHQ-9), integrated into the interdisciplinary care plan with specific interventions, and appropriate consultations or referrals must be initiated; the plan must address how depression may impact management of the patient's other conditions",
            "Nursing documentation of depressed mood is sufficient; formal screening tools and psychiatric consultation are not required unless the patient requests them",
            "The social worker is solely responsible for addressing depression and the care plan only needs to reflect a social work referral"
          ],
          correctIndex: 1,
          explanation: "Joint Commission requires that all identified patient needs, including mental health, are assessed with appropriate validated tools and addressed in the care plan (PC.01.03.01). For a patient with diabetes and heart failure, unmanaged depression directly impacts self-care adherence, glycemic control, and heart failure outcomes. The care plan must include screening scores, psychosocial interventions, appropriate consultations, and consideration of how depression interacts with the patient's other conditions. A siloed approach where mental health is delegated without integration fails to meet the standard.",
          expertXp: 30
        },
        {
          question: "The surveyor asks the charge nurse to explain how care plan updates are communicated when the patient's condition changes. The charge nurse states, 'We update the care plan in the EHR and assume everyone reads it.' The surveyor identifies this as a gap. Under PC.02.02.01, what is the required process for communicating care plan changes across the interdisciplinary team?",
          options: [
            "EHR documentation of care plan updates is sufficient communication as long as all team members have access to the electronic record",
            "Care plan changes must be actively communicated through structured interdisciplinary methods such as daily team huddles, interdisciplinary rounds, documented handoff communication, and direct notification of affected disciplines; passive documentation alone does not meet the standard for effective communication of changes that impact patient care",
            "Care plan changes only need to be communicated during shift-change handoffs; interdisciplinary communication occurs at the weekly care conference",
            "The attending physician is responsible for communicating all care plan changes to the team through written orders"
          ],
          correctIndex: 1,
          explanation: "PC.02.02.01 requires effective communication among all care providers. Passive reliance on EHR documentation ('read it in the chart') does not constitute active communication of care plan changes. Joint Commission expects structured mechanisms for interdisciplinary communication, including daily huddles, interdisciplinary rounds, direct notification of relevant team members, and documented acknowledgment of significant care plan changes. The goal is to ensure that all team members are aware of and acting on current care plan goals and interventions, particularly when changes occur in response to evolving patient needs.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor discovers that the ICU patient was on a continuous insulin infusion that was discontinued upon transfer, but no subcutaneous insulin overlap was ordered. The patient's blood glucose 4 hours post-transfer is 342 mg/dL. Under NPSG.03.06.01 and MM.05.01.01, what process failure does this represent?",
          options: [
            "This is a physician ordering error, not a medication reconciliation failure",
            "This represents a failure in the medication reconciliation process at transition because the conversion from IV to subcutaneous insulin should have been addressed as part of reconciliation, including verification that an appropriate basal/bolus subcutaneous regimen was ordered with overlap timing to prevent glycemic gaps",
            "The floor nurse should have independently initiated a subcutaneous insulin protocol without a physician order",
            "Insulin infusion to subcutaneous conversion is a pharmacy responsibility and not part of the nursing medication reconciliation process"
          ],
          correctIndex: 1,
          explanation: "The transition from IV insulin to subcutaneous insulin is a critical medication reconciliation event. NPSG.03.06.01 requires that all medication changes at transitions are identified, reconciled, and communicated. Best practice requires that subcutaneous basal insulin be administered 1-2 hours before discontinuing the infusion to prevent rebound hyperglycemia. The failure to address this conversion during the transfer represents a gap in the reconciliation process, prescriber communication, and potentially in the organization's ICU transfer protocols.",
          expertXp: 30
        },
        {
          question: "The surveyor escalates the tracer by reviewing the organization's ICU transfer order set and finds that it does not include a mandatory medication reconciliation step, high-alert medication conversion protocols, or a requirement for pharmacist review before transfer. Under MM.02.01.01 and NPSG.03.06.01, what system-level improvements does Joint Commission expect?",
          options: [
            "Order sets are physician preference items and Joint Commission does not mandate specific order set content",
            "The organization must integrate medication safety checkpoints into the ICU transfer process, including a mandatory medication reconciliation step within the transfer order set, standardized high-alert medication conversion protocols (especially insulin and anticoagulant transitions), pharmacist review of transfer orders for high-risk patients, and a verification step confirming that the receiving nurse has reviewed and acknowledged all medication changes before accepting the patient",
            "Adding a general reminder to 'reconcile medications' in the transfer order set is sufficient compliance",
            "Pharmacist review is only required at admission and discharge per NPSG.03.06.01, not at intra-facility transfers"
          ],
          correctIndex: 1,
          explanation: "Joint Commission expects system-level safeguards, not reliance on individual memory. MM.02.01.01 requires that the medication management system includes safeguards at high-risk points, and NPSG.03.06.01 applies to ALL transitions including intra-facility transfers. A robust ICU transfer process should hardwire medication reconciliation into the order set, include standardized conversion protocols for high-alert medications, leverage pharmacist expertise for complex regimens, and build in verification checkpoints. The absence of these system-level safeguards creates predictable, preventable medication errors.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor discovers a pattern: multiple nurses on this unit routinely document assessments 2-4 hours after they are performed, citing staffing shortages and EHR complexity. The unit manager states, 'That's just how it is on this unit.' Under LD.03.09.01 and RC.01.02.01, what leadership responsibility does this finding trigger?",
          options: [
            "Documentation timeliness is a nursing practice issue, not a leadership responsibility",
            "Leadership must investigate system-level barriers to timely documentation, which may include staffing adequacy, EHR workflow optimization, reduction of documentation burden, workload redistribution, and implementation of supportive technology; the pattern must be addressed through performance improvement with measurable targets and leadership accountability",
            "The unit manager should implement disciplinary action for nurses who fail to document within the required time frame",
            "Leadership should hire additional clerical staff to transcribe nursing assessments from handwritten notes"
          ],
          correctIndex: 1,
          explanation: "Joint Commission LD.03.09.01 holds leadership accountable for ensuring adequate resources, including staffing, to support safe patient care. A pattern of delayed documentation across a unit suggests system-level barriers rather than individual performance issues. Leadership must investigate root causes (staffing ratios, EHR workflow efficiency, documentation requirements, competing priorities), implement system-level solutions, set measurable improvement targets, and monitor compliance. Punitive approaches alone fail to address systemic issues and may discourage honest reporting.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews a specific case where a nurse documented a normal neurological assessment at 1400, but retrospective review of the continuous telemetry monitoring shows the patient had a 45-second pause in cardiac rhythm at 1345. The nurse acknowledges she had not yet seen the patient at the time documented and was charting from memory based on the previous shift's assessment. Under RC.01.02.01 and RC.01.03.01, what are the implications?",
          options: [
            "This is a minor documentation timing issue that can be corrected with a late entry addendum",
            "This constitutes falsification of the medical record because the nurse documented an assessment that was not performed at the stated time, creating a fraudulent clinical record that could mask a clinically significant event; this finding may trigger a condition-level citation, must be reported through the organization's compliance and risk management processes, and requires immediate corrective action including investigation of scope and prevalence",
            "The nurse should simply amend the documentation to reflect the correct time and add the cardiac rhythm findings",
            "This is a competency issue for the individual nurse and does not reflect a system-level problem"
          ],
          correctIndex: 1,
          explanation: "Documenting a clinical assessment that was not actually performed at the stated time constitutes falsification of the medical record, which is a serious compliance and legal issue. Under RC.01.02.01, entries must accurately reflect when care was provided. In this case, the fabricated assessment missed a clinically significant cardiac event, potentially endangering the patient. This finding requires investigation into whether the practice is isolated or systemic, mandatory reporting through compliance channels, immediate corrective action, re-education on documentation integrity, and potential individual and system-level interventions. A condition-level citation is possible if the practice is widespread.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor observes that the patient's room has several environmental fall hazards: the call light is out of reach, the bed is in the highest position, non-skid slippers are in the closet rather than at bedside, and the pathway to the bathroom is obstructed by an IV pole and a chair. Under EC.02.06.01 and NPSG.09.02.01, who is responsible for maintaining a safe environment?",
          options: [
            "Environmental services is solely responsible for room safety; nursing focuses on clinical care",
            "Every staff member entering the patient's room shares responsibility for identifying and correcting environmental hazards; the nurse is specifically accountable for ensuring the call light is within reach, bed is in the lowest locked position, personal items and mobility aids are accessible, and the path to the bathroom is clear",
            "The patient and family are responsible for keeping their room tidy and reporting hazards",
            "Environmental safety rounds conducted weekly by the safety officer are sufficient to address room hazards"
          ],
          correctIndex: 1,
          explanation: "Fall prevention is a shared responsibility. Under EC.02.06.01 (environment of care) and NPSG.09.02.01 (fall prevention), every staff member entering the room should assess for and correct hazards. Nursing has specific accountability for clinical environmental safety: bed in lowest locked position, call light within reach, non-skid footwear accessible, clear pathways, adequate lighting, and personal items within reach. These elements should be verified during hourly rounding and at every patient encounter.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews the organization's fall prevention program data and finds that 60% of falls on this unit occur during nighttime hours (2200-0600), primarily involving patients ambulating to the bathroom unassisted. The fall committee has not analyzed time-of-day patterns or implemented targeted nighttime interventions. Under PI.01.01.01 and NPSG.09.02.01, what is the expected performance improvement response?",
          options: [
            "Implementing bed alarms for all high-risk patients during nighttime hours is sufficient",
            "The fall committee must conduct a data-driven analysis of the nighttime fall pattern, including contributing factors (staffing ratios, lighting, toileting schedules, sedating medication timing), develop targeted interventions such as proactive toileting rounds, medication timing adjustments to reduce nighttime sedation peaks, enhanced nighttime staffing or rounding protocols, and improved lighting; implement the interventions with defined metrics and monitor for effectiveness using PDCA methodology",
            "Restricting all high-risk patients from ambulating during nighttime hours addresses the safety concern",
            "Adding nighttime fall prevention to the unit's annual safety education module is an adequate response"
          ],
          correctIndex: 1,
          explanation: "A clear pattern of nighttime falls requires systematic analysis and targeted intervention under PI.01.01.01 and NPSG.09.02.01. The fall committee must analyze contributing factors specific to the nighttime period (staffing patterns, timing of sedating medications relative to fall events, lighting adequacy, toileting needs assessment). Evidence-based interventions should be implemented, such as proactive scheduled toileting rounds, review of medication administration timing to avoid peak sedation during high-risk ambulation hours, enhanced purposeful rounding, and environmental modifications. Blanket restrictions on ambulation violate patient rights and are not evidence-based. Bed alarms alone without addressing root causes are insufficient.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor discovers that a patient scheduled for surgery at 0700 has an H&P dated from 32 days prior to admission, with no update documented. The OR charge nurse states, 'The surgeon will update it before the case starts.' Under PC.01.02.03 and the medical staff bylaws, can the surgery proceed?",
          options: [
            "Yes, as long as the surgeon updates the H&P in the preoperative holding area before the incision",
            "No, the surgery cannot proceed because the H&P exceeds the 30-day window and is no longer valid; a new complete H&P must be performed and documented before the patient can undergo surgery, regardless of whether an update is planned",
            "Yes, the 30-day requirement has a 48-hour grace period for surgical patients",
            "The anesthesiologist's pre-anesthesia assessment can substitute for the expired H&P"
          ],
          correctIndex: 1,
          explanation: "CMS Conditions of Participation and Joint Commission PC.01.02.03 allow use of a pre-admission H&P only if it was performed within 30 days prior to admission AND updated within 24 hours. An H&P older than 30 days is expired and cannot be updated; a completely new H&P must be performed. The surgery cannot proceed without a valid H&P. The pre-anesthesia assessment is a separate requirement and does not substitute for the medical H&P. This is a common survey finding that can result in a condition-level citation.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews the medical staff credentialing files and finds that a nurse practitioner (NP) has been performing and documenting H&Ps for surgical patients, but the NP's privilege delineation does not specifically include the authority to perform H&Ps. The medical staff bylaws state that H&Ps must be performed by 'physicians or privileged practitioners.' Under MS.01.01.01 and PC.01.02.03, what is the compliance concern?",
          options: [
            "NPs are qualified by education and licensure to perform H&Ps, so specific privileging is not required",
            "The H&Ps performed by the NP without specific privilege delineation are non-compliant and may need to be re-evaluated; the organization must ensure that any practitioner performing H&Ps has been specifically granted that privilege through the medical staff credentialing and privileging process, and the medical staff bylaws must clearly define which practitioner categories are authorized",
            "The NP can perform H&Ps as long as the collaborating physician co-signs within 24 hours",
            "This is only a concern if the NP is performing H&Ps for surgical patients; medical admissions do not require privileged practitioners for H&Ps"
          ],
          correctIndex: 1,
          explanation: "Joint Commission MS.01.01.01 requires that the medical staff bylaws define the categories of practitioners eligible for membership and privilege delineation. PC.01.02.03 requires that H&Ps be performed by individuals with appropriate privileges. If an NP performs H&Ps without the specific privilege being delineated in their credentialing file, those H&Ps are technically non-compliant regardless of the NP's qualifications. The organization must ensure that privilege delineation explicitly authorizes H&P performance, and H&Ps performed without proper privileging may need retrospective review and physician attestation.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor asks a nurse preparing to enter the TB patient's room what respiratory protection is required. The nurse holds up a standard surgical mask. Under IC.01.05.01 and OSHA respiratory protection standards, is this adequate?",
          options: [
            "A surgical mask provides adequate filtration for airborne pathogens when properly fitted",
            "No, staff entering an AIIR for a patient on Airborne Precautions must wear a NIOSH-certified N95 respirator (or higher-level respirator such as a PAPR), and each staff member must have a documented annual fit test for their specific N95 model; surgical masks do not provide adequate filtration for airborne particles of 1-5 microns",
            "An N95 respirator is recommended but a surgical mask is acceptable if N95s are unavailable",
            "Respiratory protection is only required during aerosol-generating procedures, not for routine room entry"
          ],
          correctIndex: 1,
          explanation: "OSHA's Respiratory Protection Standard (29 CFR 1910.134) and Joint Commission IC.01.05.01 require N95 or higher-level respiratory protection for staff entering AIIRs. Surgical masks filter large droplets but do not provide adequate protection against airborne particles (1-5 microns) such as M. tuberculosis. Each staff member must have a documented annual fit test specific to the N95 model they will use. PAPR (Powered Air-Purifying Respirator) is an alternative for staff who cannot be fit-tested for N95s. Respiratory protection is required for ALL entries into the AIIR, not just during aerosol-generating procedures.",
          expertXp: 30
        },
        {
          question: "The surveyor discovers that the hospital has only two AIIRs and both are currently occupied. A third patient with suspected pulmonary TB presents to the ED. The infection preventionist is unsure how to manage the situation. Under IC.01.05.01 and EC.02.06.01, what is the required contingency response?",
          options: [
            "Place the patient in a standard private room with the door closed and a surgical mask on the patient until an AIIR becomes available",
            "The organization must have a documented AIIR surge plan that includes placing the patient in the most appropriate available space (private room, door closed, patient masked), immediately implementing portable HEPA filtration, initiating transfer arrangements to a facility with available AIIR capacity, notifying infection prevention and facility leadership, and ensuring staff use N95 respirators during any patient contact; the surge plan must be exercised and reviewed annually",
            "Cohort the new patient with one of the existing TB patients in the same AIIR",
            "The patient can be held in the ED waiting area with a surgical mask until an AIIR is available"
          ],
          correctIndex: 1,
          explanation: "Joint Commission expects organizations to have contingency plans for situations exceeding AIIR capacity (EC.02.06.01 and IC.01.05.01). The surge plan must address interim placement (private room, door closed, patient masked, portable HEPA filtration), transfer protocols to facilities with available capacity, staff protection (N95 use regardless of room type), notification chains, and documentation. Cohorting TB patients is generally not recommended due to potential for different TB strains. The contingency plan must be part of the organization's emergency management framework and tested through exercises.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The pain reassessment reveals persistent pain of 6/10 after morphine. The nurse's next documented action is 'notified MD, awaiting orders.' Three hours later, there is still no additional intervention documented. Under PC.01.02.07 and PC.02.01.01, what is the compliance deficiency?",
          options: [
            "The nurse fulfilled their obligation by notifying the physician; the delay is the physician's responsibility",
            "The nurse has a continuing obligation to advocate for the patient's pain management, which includes escalating through the chain of command if the physician does not respond in a timely manner, implementing non-pharmacologic interventions in the interim, reassessing pain at regular intervals, and documenting all actions taken and communications made",
            "Three hours is within an acceptable wait time for a non-emergent pain management issue",
            "The nurse should have independently administered an additional dose of morphine under the PRN order range"
          ],
          correctIndex: 1,
          explanation: "Joint Commission expects a proactive approach to pain management. PC.01.02.07 requires ongoing reassessment and treatment of pain. When an intervention is partially effective and the physician has not responded, the nurse must escalate through the chain of command (charge nurse, supervisor, chief medical officer), implement non-pharmacologic interventions, continue reassessing and documenting, and advocate for the patient. Passive waiting for hours while a patient remains in pain fails to meet the standard of care and represents a potential patient rights issue under RI.01.01.01.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews the organization's opioid prescribing and monitoring data and discovers that the Pharmacy & Therapeutics committee has not reviewed naloxone rescue protocols or opioid-related adverse event data in over a year, despite three incidents of opioid-induced respiratory depression on this unit. Under MM.07.01.03, PC.01.02.07, and PI.01.01.01, what comprehensive system improvement does Joint Commission expect?",
          options: [
            "Naloxone should be available on the unit and the three incidents should be reported to the state board of pharmacy",
            "The organization must implement a comprehensive opioid safety program that includes standardized naloxone rescue protocols with defined trigger criteria (sedation scale scores, respiratory rate thresholds), staff competency validation on recognition of opioid-induced respiratory depression, mandatory monitoring parameters for all patients receiving parenteral opioids, P&T committee review of all opioid-related adverse events with root cause analysis, integration of opioid safety metrics into the organization's quality dashboard, and evidence that findings have driven measurable improvements in monitoring compliance and adverse event rates",
            "The three incidents should each be reviewed as individual events; a comprehensive program is only required after five or more incidents",
            "Restrict opioid prescribing privileges to pain management specialists and anesthesiologists to reduce adverse events"
          ],
          correctIndex: 1,
          explanation: "Three opioid-induced respiratory depression events constitute a significant patient safety pattern requiring a comprehensive, system-level response. Joint Commission expects integration of medication safety (MM.07.01.03), clinical care standards (PC.01.02.07), and performance improvement (PI.01.01.01). The response must include standardized rescue protocols, staff competency, enhanced monitoring requirements, P&T committee oversight with event analysis, and measurable outcomes. Simply having naloxone available without a comprehensive program addressing prevention, early recognition, response, and system improvement is insufficient. The P&T committee's failure to review this data for over a year represents a leadership and governance gap under LD.03.09.01.",
          expertXp: 35
        }
      ]
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
      followUps: [
        {
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
        },
        {
          question: "The surveyor reviews the organization's grievance log and finds that a patient filed a grievance about a medication error that resulted in an adverse reaction. The written response sent to the patient 45 days later states: 'Your concern has been reviewed and addressed internally.' Under CMS Conditions of Participation (42 CFR 482.13) and RI.01.07.01, what are the specific deficiencies in this response?",
          options: [
            "The response is adequate because it acknowledges receipt and indicates internal action was taken",
            "The written response must be provided within the time frame specified by CMS (reasonable time, with many organizations adopting 7-day acknowledgment and 30-day resolution), must include the name of the hospital contact person, the steps taken to investigate the grievance, the results of the investigation, the date of completion, and information about how to contact the state health department or The Joint Commission if dissatisfied; the vague response fails to meet any of these specific requirements",
            "The 45-day response time is the only deficiency; the content of the response is sufficient",
            "Medication error grievances should be handled through the risk management department, not the patient relations grievance process"
          ],
          correctIndex: 1,
          explanation: "CMS Conditions of Participation (42 CFR 482.13(a)(2)) have specific requirements for grievance responses: they must include the contact person, investigation steps, results, completion date, and external contact information. The response must be timely (many organizations set 7 business days for acknowledgment and 30 days for resolution, with interim updates for complex cases). A vague statement of 'addressed internally' fails to provide the required elements and does not demonstrate transparency or resolution. The 45-day timeline also likely exceeds the organization's own policy.",
          expertXp: 30
        },
        {
          question: "The surveyor escalates by reviewing the organization's grievance data trending and finds that the same type of complaint about poor communication regarding plan of care has been filed by 12 different patients over 6 months across multiple units, but no aggregate analysis or performance improvement action has been taken. The patient relations director states each was resolved individually. Under PI.01.01.01, RI.01.07.01, and LD.03.09.01, what is the compliance expectation?",
          options: [
            "Individual resolution of each grievance satisfies the requirement; aggregate analysis is a best practice but not mandated",
            "The organization must aggregate and trend grievance data to identify patterns, conduct root cause analysis of systemic issues identified through trending, implement organization-wide corrective actions when patterns emerge, report findings to leadership and the governing body, integrate grievance trends into the quality and performance improvement program, and monitor the effectiveness of interventions through defined metrics and sustained reduction in complaint volume",
            "Grievance trending is required only annually as part of the quality management plan review",
            "The patient relations department should increase staffing to handle the volume of grievances more efficiently"
          ],
          correctIndex: 1,
          explanation: "Twelve similar grievances across multiple units over 6 months constitutes a clear pattern requiring system-level analysis and action. Joint Commission PI.01.01.01 requires data-driven performance improvement, and LD.03.09.01 holds leadership accountable for acting on quality and safety data. Grievance data must be aggregated, trended, analyzed for root causes, and integrated into the performance improvement program. Leadership and the governing body must receive reports on grievance trends and demonstrate that corrective actions were implemented and effective. Individual resolution without aggregate analysis represents a failure to identify and address systemic issues, which is a core Joint Commission expectation.",
          expertXp: 35
        }
      ]
    }
  ]
};
