import type { Level } from "./schema";

export const ascAdministrationLevel: Level = {
  id: "asc_administration",
  module: "asc",
  name: "Administration",
  description:
    "Day-to-day operational management: personnel files, training, fiscal controls, nursing leadership, and patient satisfaction systems.",
  icon: "Briefcase",
  color: "hsl(195, 65%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Administration",
    plainLanguageSummary:
      "Administration is where the governing body's policies meet daily operations. The CMS surveyor is going to pull personnel files, ask for training records, look at the fiscal control policies, check that a Registered Nurse is formally designated to direct nursing services, and verify that nursing assignments are in writing and that an RN is available for emergencies whenever a patient is on the premises. This chapter is documentation-heavy: most citations come not from things the ASC isn't doing, but from things it is doing without a paper trail. A clean administration program looks like a current job description for every person, an orientation checklist completed within 30 days, annual training documented for everyone (including contractors and per-diem staff), current professional licenses verified by the ASC (not self-attested), a designated RN director with a signed letter, written nursing assignments for the day, and patient satisfaction data that loops back up to the governing body with documented action.",
    keyOperationalExpectations: [
      "Every staff member has a personnel file with current job description, license/certification verification, orientation checklist (completed within 30 days), annual training records, and performance evaluation.",
      "A Registered Nurse is formally designated in writing to direct nursing services, and an RN is available for emergency treatment whenever a patient is in the ASC.",
      "Nursing patient-care assignments are made in writing — not communicated verbally at the start of the shift.",
      "Fiscal control policies cover accounts receivable, accounts payable, cash handling, collections, and the purchase/security of supplies and equipment.",
      "Patient satisfaction surveys are conducted on an ongoing basis, results are analyzed, the governing body reviews them, and corrective actions are documented.",
      "Orientation and annual training cover fire safety, emergency preparedness, infection prevention (with OSHA bloodborne pathogen training), exposure control and sharps prevention, incident reporting, and HIPAA confidentiality.",
    ],
    commonRiskPoints: [
      "Personnel files missing primary source license verification, with the file relying on a photocopy the employee handed in at hire.",
      "Orientation completed but no documented annual training (or annual training rosters that show only some of the required topics).",
      "Verbal nursing assignments at the start of the day with no written assignment sheet anywhere in the facility — a direct Q-0141 hit.",
      "Patient satisfaction surveys collected but never analyzed, never seen by the governing body, and never resulting in a documented action.",
      "Contracted or per-diem staff with no personnel file at the ASC because 'they work for the staffing agency' — the ASC still owns verification of licensure, orientation, and competency.",
    ],
    cmsTags: [
      "42 CFR 416.46 (Nursing services)",
      "42 CFR 416.51(c) (Personnel and policies)",
      "Q-0140 (RN directs nursing services)",
      "Q-0141 (Written assignments and RN available for emergency)",
      "Q-0246 (Organizational records properly filed and safeguarded)",
    ],
  },
  studyMaterial: [
    {
      title: "The personnel file is the surveyor's first stop",
      content:
        "When a surveyor walks in, one of the first things they do is request personnel files for a sample of staff — usually a mix of clinical and non-clinical. They are looking for the same six things in every file: current job description signed by the employee, primary source license/certification verification done by the ASC, orientation checklist completed within 30 days of hire, annual training documentation, current performance evaluation, and any required health screenings. A file missing any one of these is a finding. Five files missing the same item is a pattern finding, which is worse.",
      keyPoint:
        "A personnel file is not a hiring file. It is a continuous-currency record that has to be maintained, not just assembled at hire.",
    },
    {
      title: "License verification is the ASC's job, not the employee's",
      content:
        "The ASC has to verify each licensed staff member's credentials with the primary source — meaning the state licensing board's website or a verified service like Nursys. A photocopy of a license the nurse handed in at hire is not verification. License verification has to be re-done at each renewal cycle (usually every 1–2 years depending on the state and discipline) and the verification document — printout, screenshot, or service report — has to be in the personnel file with a date.",
      keyPoint:
        "If the ASC didn't do the lookup, the ASC didn't do the verification.",
    },
    {
      title: "Q-0140 and Q-0141: nursing leadership and written assignments",
      content:
        "Two CMS tags drive most nursing administration findings. Q-0140 requires that the ASC formally designate a Registered Nurse to direct nursing services — this needs to be a written designation, not an unspoken arrangement. Q-0141 requires that nursing patient-care assignments be in writing AND that a Registered Nurse be available for emergency treatment whenever there is a patient in the ASC. Verbal assignments at huddle don't satisfy Q-0141. The assignment sheet has to exist, in writing, somewhere a surveyor can find it.",
      keyPoint:
        "If a surveyor asks 'who is in charge of nursing today and what are they assigned to?' you should be able to point to a written document, not say a name out loud.",
    },
    {
      title: "Orientation within 30 days, training annually, training documented",
      content:
        "Every new hire — including contractors, per-diem, and locum tenens — has to complete documented orientation within 30 days of starting. That orientation has to include fire safety, emergency preparedness, infection prevention, OSHA bloodborne pathogens, sharps injury prevention, incident/adverse event reporting, and HIPAA. The same content has to be delivered annually thereafter, AND when there is an identified need (e.g., a new piece of equipment, a new procedure type, a regulatory change). The delivery of all training has to be documented — sign-in sheets, completion certificates, LMS records — anything that proves who attended what and when.",
      keyPoint:
        "Training nobody can prove happened didn't happen, in the surveyor's eyes.",
    },
    {
      title: "Patient satisfaction is a governance loop, not a survey project",
      content:
        "The ASC has to collect patient satisfaction data on an ongoing basis, analyze it, escalate it to the governing body, and document corrective action when issues surface. Many ASCs do steps one and two well — they collect surveys and even run vendor reports — but never close the loop. The data has to appear in governing body minutes, the governing body has to discuss it, and any directed action has to be tracked. A binder full of surveys nobody read is a citation, not a defense.",
      keyPoint:
        "Patient satisfaction survey data that never reaches the governing body is data that doesn't exist for survey purposes.",
    },
  ],
  questions: [
    {
      id: "asc_admin_01",
      question:
        "A surveyor pulls 5 personnel files at random. Three of them contain photocopies of nursing licenses but no documentation that the ASC verified the licenses with the state board of nursing. The administrator says, 'We collect a copy of the license at hire and at every renewal.' What is the finding?",
      options: [
        "No finding — collecting a copy of the license is sufficient verification",
        "Standard-level finding — primary source verification (a check with the state licensing board or a verified service) is required, and a photocopy from the employee does not satisfy it",
        "No finding — the employee is responsible for maintaining their own license",
        "Standard-level finding only if a license has actually expired",
      ],
      correctIndex: 1,
      explanation:
        "Primary source verification means the ASC has to confirm the license directly with the issuing authority (state board, Nursys, or equivalent). A photocopy the employee hands in is not verification — the employee could have altered it, the license could have been suspended after the copy was made, or the number could be wrong. The verification document with a date and source has to live in the personnel file.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0246 (42 CFR 416.51(c))",
      tutor: {
        whyCorrect:
          "Surveyors specifically check for primary source verification because photocopies are unreliable. The expectation is that the ASC ran the lookup, printed or saved the result, dated it, and filed it. This has to happen at hire and at every renewal cycle.",
        whyWrong: {
          A: "A photocopy is the employee's representation, not verification by the ASC.",
          C: "The ASC, not the employee, is responsible for ensuring everyone providing care holds a valid license. The personnel file proves the ASC did the verification.",
          D: "The finding is the absence of verification documentation — it does not depend on whether a license actually lapsed.",
        },
        operationalContext:
          "Build a license tracker spreadsheet with employee name, license type, license number, expiration date, last verification date, source, and reviewer initials. Run it monthly and re-verify before each renewal. Save the verification printout to the personnel file the same day.",
      },
    },
    {
      id: "asc_admin_02",
      question:
        "A new circulating nurse started 45 days ago. Her orientation checklist is partially complete — fire safety and HIPAA are signed off, but bloodborne pathogens, emergency preparedness, and incident reporting have not been done. What is the issue?",
      options: [
        "No issue — orientation can be completed at the new hire's pace",
        "Standard-level finding — orientation must be documented as complete within 30 days of employment",
        "No issue — the missing topics are covered in annual training the following year",
        "Standard-level finding only if she has independently provided patient care without supervision",
      ],
      correctIndex: 1,
      explanation:
        "The standard requires documented orientation completion within 30 days of employment. At day 45, with required topics still incomplete, the ASC is in violation regardless of whether the employee has been working under supervision. The 30-day clock is a hard line.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) (Personnel)",
      tutor: {
        whyCorrect:
          "The 30-day requirement is explicit. Surveyors check the hire date against the orientation checklist completion date — if the gap is greater than 30 days, that is the finding. The remedy is to schedule and complete missed orientation immediately, document it, and add a corrective process so it doesn't repeat.",
        whyWrong: {
          A: "There is no flexible 'at the new hire's pace' provision. The 30-day rule is a stated standard.",
          C: "Annual training is in addition to orientation, not a substitute for it. The new hire still needs the topics within 30 days of starting.",
          D: "The finding is the documentation gap, not whether harm occurred.",
        },
        operationalContext:
          "Use a structured orientation checklist with target completion dates aligned to days 1, 7, 14, and 30. Assign an orientation buddy for every new hire and have HR or nursing leadership sign off on completion before day 30. Track orientation completion as a monthly compliance metric.",
      },
    },
    {
      id: "asc_admin_03",
      question:
        "An ASC has no formal designation of who directs nursing services. The administrator says, 'Our most senior RN is in charge — everyone knows it.' During a survey, what is the most likely finding?",
      options: [
        "No finding — informal designation is acceptable in a small ASC",
        "Condition-level finding — the ASC must have written documentation designating a Registered Nurse to direct nursing services (Q-0140)",
        "Standard-level finding — the medical director can countersign retroactively",
        "No finding — only ASCs with more than 10 nurses need a formal RN director",
      ],
      correctIndex: 1,
      explanation:
        "Q-0140 (42 CFR 416.46) explicitly requires the ASC to have documentation that it has designated a Registered Nurse to direct nursing services. Informal arrangements don't satisfy this — the designation has to be in writing, signed by the governing body or its delegate, and on file. This applies to ASCs of any size.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0140 (42 CFR 416.46)",
      tutor: {
        whyCorrect:
          "Q-0140 is one of the most-cited tags in ASC surveys because it has a hard documentation requirement. The remedy is simple: write a letter or board action that names the RN, defines the scope of authority, and dates it. Keep the original in the personnel file and a copy in the survey-ready binder.",
        whyWrong: {
          A: "There is no small-ASC carve-out. Q-0140 applies regardless of size.",
          C: "Retroactive countersignature does not erase the gap. Surveyors evaluate present-state documentation.",
          D: "Q-0140 applies to every Medicare-certified ASC.",
        },
        operationalContext:
          "Draft a one-page 'Designation of Director of Nursing Services' letter. Include the RN's name, license number, effective date, scope of authority, reporting relationship to the administrator/medical director, and governing body signature. Re-sign on a defined cycle (annually or whenever the role changes).",
      },
    },
    {
      id: "asc_admin_04",
      question:
        "On survey day a surveyor asks the charge nurse to show today's nursing assignment sheet. The charge nurse says, 'I assign verbally at huddle each morning — everyone knows what room they're in.' Is the ASC compliant?",
      options: [
        "Yes — verbal assignments are acceptable when staff are consistent and the ASC is small",
        "No — Q-0141 requires that nursing patient-care assignments be in writing",
        "Yes — only if assignments change during the day must they be written",
        "No — but only because the assignment sheet should also include physician names",
      ],
      correctIndex: 1,
      explanation:
        "Q-0141 (42 CFR 416.46(a)) explicitly requires written assignments. Verbal assignments at huddle do not meet this standard regardless of facility size or staff consistency. The assignment sheet has to exist as a tangible document the surveyor can hold.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0141 (42 CFR 416.46(a))",
      tutor: {
        whyCorrect:
          "Written assignments protect patients (everyone knows who is responsible for whom), protect staff (clear scope), and protect the ASC (audit trail). Q-0141 is a recurring citation precisely because so many ASCs do daily assignments verbally and assume that's enough.",
        whyWrong: {
          A: "There is no size-based exemption. The standard is written, period.",
          C: "Initial assignments must be in writing too. Updates during the day should also be reflected.",
          D: "Including physician names is a good practice but the underlying finding is the absence of any written assignment.",
        },
        operationalContext:
          "Create a daily assignment grid (room/case → circulator, scrub, PACU RN, charge) printed or filled in on a white board AND captured to a daily log book. Photograph or scan the day's grid into a folder so historical assignments are retrievable on request.",
      },
    },
    {
      id: "asc_admin_05",
      question:
        "A patient arrives for a procedure at 2:00 PM. There are no other patients in the ASC and no procedures running. The only RN on the schedule, the charge nurse, has stepped out at 2:05 PM to pick up lunch. The patient is being interviewed pre-op by an LPN. Is this a problem?",
      options: [
        "No — the LPN is qualified to interview the patient",
        "Yes — Q-0141 requires that an RN be available for emergency treatment whenever there is a patient in the ASC",
        "No — as long as the RN is reachable by phone, she counts as available",
        "Yes — but only if the patient is a higher-risk ASA classification",
      ],
      correctIndex: 1,
      explanation:
        "Q-0141 requires that a Registered Nurse be available for emergency treatment whenever there is a patient in the ASC. 'Available' means physically present and able to respond — not 10 minutes away with a sandwich. The moment the patient walks through the door, the clock starts on this requirement and doesn't stop until the patient is discharged.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0141 (42 CFR 416.46(a))",
      tutor: {
        whyCorrect:
          "RN availability for emergency treatment is a presence requirement, not a paged-back-in-15 requirement. The intent of the standard is that if a patient codes or has an unexpected reaction, an RN can intervene immediately. A nurse out of the building does not satisfy that standard.",
        whyWrong: {
          A: "The LPN's qualifications are not the issue — the issue is the absence of an RN on premises.",
          C: "Phone availability is not 'available for emergency treatment.' The standard requires presence.",
          D: "Q-0141 applies to every patient regardless of acuity.",
        },
        operationalContext:
          "Build the daily schedule so that an RN is always physically present from first patient arrival to last patient discharge. Stagger lunch coverage so there is always RN coverage on the floor. Document this in a coverage matrix that the surveyor can be shown.",
      },
    },
    {
      id: "asc_admin_06",
      question:
        "An ASC's fiscal controls policies cover purchasing and equipment security but say nothing about accounts receivable, accounts payable, or cash handling. The administrator says 'we don't handle cash — everything is insurance billing.' What is the finding?",
      options: [
        "No finding — if the ASC doesn't handle cash, no cash policy is needed",
        "Standard-level finding — written fiscal control policies are required for AR, AP, cash payments and credit arrangements, collections, and supply/equipment management",
        "No finding — fiscal controls are the parent organization's responsibility",
        "Standard-level finding only if the ASC's annual revenue exceeds a threshold",
      ],
      correctIndex: 1,
      explanation:
        "The standard requires written policies covering accounts receivable, accounts payable, cash payments and credit arrangements, unpaid accounts/collections, and supply and equipment purchase/security. Even if cash transactions are rare or absent, the policy still has to exist (it can simply state how the rare exception is handled). The policy gap itself is the finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) (Administrative policies)",
      tutor: {
        whyCorrect:
          "Surveyors check that the ASC has written policies covering each named area. Saying 'we don't do that' doesn't substitute for a policy — write a one-paragraph policy that says when cash is accepted (e.g., copays only, never elective payment), how it's secured, and how it's reconciled. That is enough to satisfy the standard.",
        whyWrong: {
          A: "The policy has to exist whether or not the activity happens. Patient copays alone may involve cash.",
          C: "The ASC owns its operations and its fiscal controls regardless of corporate parentage.",
          D: "There is no revenue threshold — the standard applies to every ASC.",
        },
        operationalContext:
          "Maintain a 'Fiscal Controls' policy section with one short policy per required topic: AR aging review cadence, AP authorization signatures, cash handling (even if minimal), collections triggers, supply purchasing approvals. Review annually with governing body signoff.",
      },
    },
    {
      id: "asc_admin_07",
      question:
        "An ASC mails a patient satisfaction survey to every patient post-discharge. Response rates are good, the surveys are scanned into a vendor dashboard, and a quarterly report is generated. The administrator reads the report. The governing body minutes contain no reference to patient satisfaction in the past 18 months. What is the finding?",
      options: [
        "No finding — the administrator is the proper recipient of operational data",
        "Standard-level finding — the standard explicitly requires that the governing body review survey results and that corrective actions be taken as needed",
        "No finding — patient satisfaction is a clinical quality matter, not a governance matter",
        "Standard-level finding only if survey results trended unfavorably",
      ],
      correctIndex: 1,
      explanation:
        "The standard has four parts: (1) ongoing surveys, (2) ongoing analysis, (3) governing body review, and (4) corrective action as needed. Steps 1 and 2 are happening; steps 3 and 4 are not visible. The absence of governing body review is the citation.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) (Patient satisfaction)",
      tutor: {
        whyCorrect:
          "Patient satisfaction data has to flow up to the governing body and the governing body has to act on it. If 18 months of minutes are silent on patient satisfaction, the surveyor concludes the loop is broken. The fix is to put patient satisfaction on the governing body agenda as a recurring item with documented discussion.",
        whyWrong: {
          A: "The administrator can be the operational owner, but the governing body is the required reviewer.",
          C: "Patient satisfaction is governance because it speaks to the quality of services delivered to the public.",
          D: "The finding is the absence of review and action, not whether trends are unfavorable.",
        },
        operationalContext:
          "Add 'Patient Satisfaction Report' as a standing agenda item at every governing body meeting. Have the administrator present the dashboard, document the discussion, name any concerns, and record any directed corrective action with a follow-up date. Track closure to the next meeting.",
      },
    },
    {
      id: "asc_admin_08",
      question:
        "An ASC uses a staffing agency to fill per-diem RN positions. The agency provides credentialing packets and the RNs sign in for orientation by initialing a single sign-in sheet at the start of each shift they work. The ASC has no personnel file for any of these RNs. What is the finding?",
      options: [
        "No finding — the staffing agency is responsible for the personnel records of agency staff",
        "Standard-level finding — the ASC must maintain personnel records, license verification, orientation documentation, and competency assessment for every clinician providing care, including agency and contracted staff",
        "No finding — agency staff are not 'employed' by the ASC and so are out of scope",
        "Standard-level finding only if an agency RN provides anesthesia",
      ],
      correctIndex: 1,
      explanation:
        "Patient care is patient care regardless of employment status. The ASC has to verify that every clinician — employee, contractor, agency, locum, per-diem — is licensed, oriented to the ASC's policies and equipment, and competent to perform the role. A sign-in sheet does not constitute orientation documentation.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) and Q-0246",
      tutor: {
        whyCorrect:
          "The agency may credential the RN for the agency's purposes, but the ASC has to verify and document that the RN is qualified and oriented for this specific facility — its equipment, its policies, its emergency procedures. Without an ASC-side personnel file (or equivalent record), there is no evidence the ASC discharged its responsibility.",
        whyWrong: {
          A: "Responsibility doesn't transfer to the agency. The ASC owns patient safety in its facility.",
          C: "Anyone providing patient care in the ASC is in scope.",
          D: "The standard applies regardless of role; anesthesia is not the boundary.",
        },
        operationalContext:
          "Maintain a 'contracted/agency personnel' file folder for each individual who works at the ASC. Include the agency's credentialing packet, a primary source license verification done by the ASC, an ASC-specific orientation checklist (equipment, policies, emergency response), and a competency attestation. Re-verify on a defined cycle.",
      },
    },
    {
      id: "asc_admin_09",
      question:
        "A surveyor reviews CPR cards in personnel files for the OR team. Two RNs and one anesthesia tech have CPR cards that expired 2-4 months ago. The administrator says the next class is scheduled in two weeks. What is the issue and the immediate response?",
      options: [
        "No issue — a renewal class is on the calendar, so the gap is being addressed",
        "Standard-level finding — staff providing direct patient care must hold current required certifications; the affected staff should not be assigned to clinical duties until certifications are renewed",
        "Standard-level finding — but the staff can continue to work because patient harm has not occurred",
        "No issue — CPR is recommended, not required",
      ],
      correctIndex: 1,
      explanation:
        "Required certifications must be current at all times. An expired CPR card means the staff member is not in compliance with the ASC's own competency requirements. The immediate operational response is to remove the affected staff from direct patient care assignments until certifications are renewed, then document remediation. Continuing to assign expired-cert staff to cases compounds the finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) (Periodic appraisal of competence)",
      tutor: {
        whyCorrect:
          "The ASC sets certifications as a requirement in its own policies. Surveyors hold the ASC to its own policy. An expired card is a current-state finding regardless of whether a renewal class is scheduled. The defensible position is to track expirations 60-90 days in advance and pull staff before the card lapses.",
        whyWrong: {
          A: "Future remediation does not cure a current gap.",
          C: "Patient harm is not the threshold. The finding is the expired credential against the ASC's own competency requirement.",
          D: "BLS/ACPS is a near-universal ASC requirement and is in nearly every facility's competency policy.",
        },
        operationalContext:
          "Maintain a certifications dashboard with expiration dates 90/60/30 days out. Send automated reminders. Schedule renewal classes far enough in advance that no card lapses. If a card does lapse, pull the staff member and document the corrective action.",
      },
    },
    {
      id: "asc_admin_10",
      question:
        "An ASC's job descriptions for OR techs are 5 years old. A surveyor compares the current OR tech's actual duties (which now include opening sterile fields, counting instruments, and entering data into the perioperative EHR) to the job description (which doesn't mention EHR or sterile field setup). What does this trigger?",
      options: [
        "No finding — the original job description is grandfathered as long as it was accurate at hire",
        "Standard-level finding — written job descriptions must define and delineate functional responsibilities, authority, and qualifications, and must be kept current as the role evolves",
        "No finding — actual duties always supersede the written description",
        "Standard-level finding only if the OR tech filed a complaint about scope of duties",
      ],
      correctIndex: 1,
      explanation:
        "Job descriptions are required to be current and to reflect actual functional responsibilities and the qualifications needed to perform them. A 5-year-old job description that omits major duties the tech actually performs is a finding because it leaves competency requirements undefined for those duties.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) (Personnel)",
      tutor: {
        whyCorrect:
          "Job descriptions drive everything downstream — qualifications at hire, orientation, competency assessment, and performance evaluation. If the description doesn't list a duty, the ASC can't show it required the qualifications or evaluated the competency for that duty. Update job descriptions whenever roles materially change and re-sign with the employee.",
        whyWrong: {
          A: "There is no grandfather provision. Job descriptions must be current.",
          C: "Actual duties without a matching written description create the finding, not cure it.",
          D: "The finding is environmental, not complaint-driven.",
        },
        operationalContext:
          "Review every job description annually as part of performance evaluation. If the job has changed, update the description, have the employee initial the new version, and place it in the personnel file. Tie any new duties to a competency assessment.",
      },
    },
    {
      id: "asc_admin_11",
      question:
        "An ASC documents annual training using a sign-in sheet that lists topic, date, and attendee signatures. For the most recent annual training, fire safety and HIPAA are signed off, but bloodborne pathogens, sharps injury prevention, and incident reporting are missing from the roster entirely. What is the surveyor likely to conclude?",
      options: [
        "No finding — the ASC documented what was covered",
        "Standard-level finding — required annual training must address fire safety, emergency preparedness, infection prevention/OSHA bloodborne pathogens, sharps injury prevention, incident reporting, and HIPAA, and the delivery of all training must be documented",
        "No finding — the missing topics will be picked up at the next quarterly in-service",
        "Standard-level finding only if a sharps injury or exposure has occurred",
      ],
      correctIndex: 1,
      explanation:
        "The standard names specific required topics. If the annual training roster is missing required topics, the ASC has not delivered (or at least cannot prove it delivered) the required training. The fix is to complete the missed topics immediately, document delivery, and adjust the annual training plan to cover everything.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) (Orientation and training)",
      tutor: {
        whyCorrect:
          "Surveyors compare the roster to the required topic list. Anything missing is a documentation gap, which is a finding. Build the annual training as a single bundled module that covers all required topics so partial completion is impossible — or use an LMS that tracks topic-by-topic completion.",
        whyWrong: {
          A: "Documenting only the topics covered does not satisfy the requirement to cover all required topics.",
          C: "Quarterly catchup doesn't cure an incomplete annual cycle.",
          D: "The finding is the absence of training documentation, not whether harm occurred.",
        },
        operationalContext:
          "Build an annual training calendar that lists every required topic. Use an LMS or attendance tracking system that records topic-by-topic completion per employee. Audit the roster quarterly so gaps are found early, not at survey.",
      },
    },
    {
      id: "asc_admin_12",
      question:
        "An ASC has not conducted formal performance evaluations for any employees in the past 24 months. The administrator says, 'We give informal feedback constantly — we don't think the formal cycle adds value.' What is the regulatory issue?",
      options: [
        "No finding — informal feedback is an acceptable substitute",
        "Standard-level finding — written personnel policies must require periodic appraisal of each person's job performance, including current competence, and the ASC must follow its own policies",
        "No finding — performance evaluation cadence is at administrative discretion",
        "Standard-level finding only if the lapse exceeds 36 months",
      ],
      correctIndex: 1,
      explanation:
        "The standard requires written policies for periodic performance appraisal AND requires the ASC to follow its own policies. Skipping the formal cycle means the ASC is out of compliance with both the standard and (almost certainly) its own personnel policy. Performance evaluation also typically captures competency assessment, so skipping it leaves multiple downstream gaps.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) (Personnel policies)",
      tutor: {
        whyCorrect:
          "Performance evaluations document that the ASC actively appraised each employee's current competence at a defined cadence. The signed evaluation in the file is also evidence that the employee was given feedback and that any deficiencies were addressed. Without it, surveyors cannot see how the ASC monitors workforce competence over time.",
        whyWrong: {
          A: "Informal feedback leaves no audit trail and does not satisfy the documentation requirement.",
          C: "Cadence is not at unconstrained discretion — the ASC's own policy sets the cadence and surveyors hold the ASC to it.",
          D: "There is no time threshold for the finding; it triggers at the first missed cycle.",
        },
        operationalContext:
          "Set a fixed annual evaluation cycle (e.g., on hire anniversary). Use a structured evaluation form that includes competency assessment for the role's required skills. Have employee and supervisor sign and date. File in the personnel file the same week.",
      },
    },
    {
      id: "asc_admin_13",
      question:
        "An ASC's competency assessment for circulating nurses was last documented at hire — for some nurses that was 4-7 years ago. The administrator says, 'They've been doing this every day, they're obviously competent.' What is the issue?",
      options: [
        "No finding — daily practice constitutes ongoing competency assessment",
        "Standard-level finding — competency must be reassessed periodically (and when there is an identified need such as a new procedure or piece of equipment), and the assessment must be documented",
        "No finding — competency assessment is required only at hire",
        "Standard-level finding only when a new procedure is introduced",
      ],
      correctIndex: 1,
      explanation:
        "Competency assessment is not a one-time event at hire. It must be repeated periodically (most ASCs do annually) and whenever there is an identified need — new equipment, new procedure type, change in standard of care, or remediation following an event. Each reassessment must be documented in the personnel file.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.51(c) (Periodic appraisal of competence)",
      tutor: {
        whyCorrect:
          "Competency drift is real. Nurses can be doing a procedure daily and still be doing it incorrectly — that is what competency assessment catches. The expectation is a defined cadence (typically annual) plus event-triggered reassessment. Documentation has to show what was assessed, by whom, against what standard, and the result.",
        whyWrong: {
          A: "Practice is not assessment. Assessment requires an evaluator measuring against a standard.",
          C: "There is no 'at hire only' provision. Periodic reassessment is required.",
          D: "Periodic reassessment is required even without new procedures; new procedures add an additional trigger.",
        },
        operationalContext:
          "Build a competency assessment matrix per role. Schedule annual reassessment for high-risk skills (medication administration, sterile field, count, time-out, emergency response). Add event-triggered assessments any time new equipment or new procedure types come in. File the completed assessment with date and assessor signature.",
      },
    },
    {
      id: "asc_admin_14",
      question:
        "A surveyor asks for the past 24 months of governing body meeting minutes, the bylaws, and the corporate organizational documents. The administrator can produce some of the minutes but cannot find the bylaws and says, 'I think they're in a box from when we moved offices.' What is the finding?",
      options: [
        "No finding — the bylaws don't have to be physically present during a survey",
        "Standard-level finding — official organizational documents (bylaws, governing body minutes, corporate documents) must be properly filed, secured, and safeguarded (Q-0246)",
        "No finding — the administrator can attest to the bylaws verbally",
        "Standard-level finding only if the bylaws are missing for more than 6 months",
      ],
      correctIndex: 1,
      explanation:
        "Q-0246 explicitly requires that official organizational documents — governing body minutes, corporate documents, bylaws — be properly filed, secured, and safeguarded. Documents that cannot be produced on request are functionally not safeguarded. The remedy is to locate the documents, file them in a secure and accessible location, and document the records management policy.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0246 (42 CFR 416.51(c))",
      tutor: {
        whyCorrect:
          "Records that cannot be produced fail the safeguarding requirement. Surveyors expect that someone at the ASC can put hands on the bylaws, the past several years of governing body minutes, and current corporate documents within minutes — not days.",
        whyWrong: {
          A: "Documents must be available for review on request during a survey.",
          C: "Verbal attestation does not substitute for the document.",
          D: "The finding triggers immediately on inability to produce, not after a time threshold.",
        },
        operationalContext:
          "Maintain a 'survey-ready binder' (physical or electronic) with: current bylaws, last 24 months of governing body minutes, corporate documents (formation, licensure, Medicare provider agreement), current organizational chart, and policy index. Review and refresh quarterly.",
      },
    },
    {
      id: "asc_admin_15",
      question:
        "During a tracer, a surveyor asks the OR charge nurse to explain how nursing assignments were made today and to produce evidence. The charge nurse points to a whiteboard with room numbers, surgeon initials, and circulator/scrub names that has been erased and rewritten throughout the day with no archive. The morning's original assignments are gone. What is the issue?",
      options: [
        "No finding — a whiteboard satisfies the written assignment requirement",
        "Standard-level finding — written assignments must be preserved as evidence; an ephemeral whiteboard with no archive does not allow the ASC to demonstrate compliance with Q-0141 retrospectively",
        "No finding — only assignments at the start of the day count",
        "Standard-level finding only if a patient outcome was related to an assignment change",
      ],
      correctIndex: 1,
      explanation:
        "A whiteboard meets the 'in writing' requirement at any given moment but fails the evidence requirement if it's erased and rewritten with no archive. The ASC must be able to show, after the fact, who was assigned to what at any given time of day. Photograph or scan the whiteboard at defined intervals (start of day, after each material change) and file the images.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0141 (42 CFR 416.46(a))",
      tutor: {
        whyCorrect:
          "Written assignment is necessary but not sufficient. The assignment also has to be retrievable as evidence. Ephemeral records are common gaps — whiteboards, sticky notes, verbal updates. The fix is to capture the state of the assignment at intervals and file the captures.",
        whyWrong: {
          A: "A whiteboard is acceptable in real time but inadequate as a record.",
          C: "Assignments throughout the day matter — the surveyor will ask about coverage at multiple times.",
          D: "The finding is the absence of retrievable assignment records, not whether outcomes were affected.",
        },
        operationalContext:
          "Use a paper assignment grid in addition to (or instead of) a whiteboard. If using a whiteboard, photograph it at the start of every day and after every material change, and save to a dated folder. Some facilities use a perioperative scheduling system that auto-archives staff assignments by case.",
      },
    },
  ],
};
