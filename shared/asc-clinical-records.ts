import type { Level } from "./schema";

export const ascClinicalRecordsLevel: Level = {
  id: "asc_clinical_records",
  module: "asc",
  name: "Clinical Records and Health Information",
  description:
    "What goes into the chart, who can sign, when it has to be done, and how long it has to be kept — the documentation backbone of the ASC.",
  icon: "FileText",
  color: "hsl(165, 60%, 40%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Clinical Records and Health Information",
    plainLanguageSummary:
      "The medical record is the legal account of what happened in the ASC. Surveyors evaluate it in two ways: are the required elements present in every chart, and is the chart trustworthy — meaning entries are timely, identifiable to the author, and protected from unauthorized access. The most cited gaps in this chapter are missing or stale H&Ps, op notes that don't include all the required elements, consent forms signed in PACU rather than pre-op, late entries that are not flagged as late, and storage practices that don't actually protect privacy. A complete, contemporaneous, properly authenticated chart is the difference between a defensible case and an unwinnable one.",
    keyOperationalExpectations: [
      "A medical history and physical (H&P) is completed and placed in the chart no more than 30 days before the procedure, with documented update on the day of surgery.",
      "An operative report is dictated or written immediately after the procedure (intraoperative findings, technique, specimens, complications, surgeon, assistants, anesthesia type).",
      "Informed consent is documented before the patient enters the operating room — not after sedation, not in PACU.",
      "Every chart entry is dated, timed, and authenticated (signed) by the author. Late entries are clearly labeled as 'Late Entry' with the actual date/time of authorship.",
      "Records are stored to protect confidentiality (locked, access-controlled, HIPAA-compliant), and retention follows state law and federal requirements.",
      "Patient access requests are honored within applicable timelines (HIPAA: typically 30 days, may be extended once by 30 days with notice).",
    ],
    commonRiskPoints: [
      "H&P older than 30 days at the time of surgery, or no documented update on the day of the procedure.",
      "Op note dictated days after the case with no contemporaneous brief operative note in the chart.",
      "Consent obtained after the patient has received sedation or while on the OR table.",
      "Free-text 'addendum' entries that retroactively change earlier documentation without late-entry flags.",
      "Charts left open in unlocked rooms, on unattended computer screens, or visible from public corridors.",
      "Records destroyed before the end of the state or federal retention period.",
    ],
    cmsTags: [
      "42 CFR 416.47",
      "Q-0140 series (Medical records)",
      "HIPAA 45 CFR 164 (Privacy)",
    ],
  },
  studyMaterial: [
    {
      title: "What Are the Two Time Requirements for a Compliant History and Physical?",
      content:
        "The history and physical must be completed within 30 days before the procedure and updated on the day of the procedure to confirm no material change. The day-of update is a separate, dated, signed entry — not a checkbox that says 'reviewed.' A surveyor can find a perfectly written H&P from 28 days ago and still cite the chart if the day-of update is missing.",
      keyPoint:
        "30-day window + day-of-surgery update note. Both pieces. Always.",
    },
    {
      title: "What Must Be in the Chart Before a Patient Leaves the OR or PACU?",
      content:
        "The operative report has to be in the chart — at least as a brief operative note — before the patient leaves the OR or PACU. The full dictated note follows quickly after, but the brief note has to capture: procedure, surgeon, assistants, anesthesia type, findings, specimens, complications, estimated blood loss, and disposition. A chart with no op note when the patient is already in PACU is a documentation emergency.",
      keyPoint:
        "Brief op note before the patient leaves the OR. Full report shortly after. No delay.",
    },
    {
      title: "When Must Informed Consent Be Documented?",
      content:
        "Informed consent must be documented before the patient receives any sedation or premedication. Consent obtained from a patient who has already been given Versed, fentanyl, or a pre-op sedative is presumptively defective. The consent must include the specific procedure, the surgeon, the risks, the alternatives, and the patient's signature — and it has to be dated and timed.",
      keyPoint:
        "Consent before sedation, every time. If it didn't happen pre-op, it can't happen at all.",
    },
    {
      title: "How Must Late Chart Entries Be Documented?",
      content:
        "Every entry has to be identifiable to its author and made at the time of the event. If something is documented later, it must be clearly labeled 'Late Entry,' with both the actual date/time of writing and the date/time of the event being documented. Retroactive edits to existing entries are not permitted; corrections are made by addendum.",
      keyPoint:
        "Date, time, and author on every entry. Late entries are flagged as such — never disguised as contemporaneous.",
    },
    {
      title: "How Long Must Medical Records Be Retained and When Must They Be Released?",
      content:
        "Medical records have to be stored in a way that protects confidentiality (locked storage, access controls, encrypted EHR access, no unattended screens). Retention is governed by both state law and federal requirements; the longer applicable period controls. Patients have a right to access their records under HIPAA, generally within 30 days, with the option to extend once for an additional 30 days with written notice.",
      keyPoint:
        "Lock it, retain it for the longer of state or federal minimum, and release it to the patient within 30 days when asked.",
    },
    {
      title: "Where Must Allergies and Sensitivities Be Documented in the Chart?",
      content:
        "42 CFR 416.47(b)(5) and Q-0162 require that the presence — or absence — of allergies, sensitivities, and reactions to drugs, food, and environmental agents be documented in a prominent, consistently defined location on every chart. 'Consistent' means the surveyor can pick up any chart, look in the same place, and find it. Patients have to be asked at every encounter, the specific reaction has to be captured (rash vs. anaphylaxis matters), and updates have to be reconciled — not just appended. 'NKDA' is an answer; a blank field is not.",
      keyPoint:
        "Same location on every chart. Asked every visit. Reaction described, not just the allergen named.",
    },
    {
      title: "How Must Corrections Be Made to a Signed Chart Entry?",
      content:
        "Once a chart entry has been authenticated (signed), it is part of the legal record and cannot be altered. If something is wrong, the fix is a dated, timed, signed addendum that identifies the original entry, states what was incorrect, and provides the correct information. Editing the original — even by the original author — destroys the audit trail and is treated as documentation falsification. EHRs should be configured to lock authenticated notes and force a one-click 'Add Addendum' workflow.",
      keyPoint:
        "Signed = locked. Corrections live in a new addendum, not on top of the old entry.",
    },
    {
      title: "Who Owns Clinical Documentation Generated by Contracted Providers at the ASC?",
      content:
        "HIPAA requires the ASC to define and maintain a designated record set, and 42 CFR 416.47 requires that the medical record be available at the facility. That includes the anesthesia record, contracted radiology readings, pathology reports, and any other clinical documentation generated during the case — regardless of who employs the clinician. Letting a contract anesthesia group take their records back to their office creates a custody gap that fails on survey, billing, and clinical-handoff grounds. Contracts have to require all documentation to be filed in the ASC's record system before the contractor leaves the building.",
      keyPoint:
        "If care happened at the ASC, the record lives at the ASC — contractor or not.",
    },
    {
      title: "Which Vendors Require a Business Associate Agreement?",
      content:
        "Any vendor that creates, receives, maintains, or transmits protected health information for the ASC is a Business Associate under 45 CFR 164.502(e), and a written Business Associate Agreement (BAA) is required before PHI changes hands. That covers shredding companies, off-site storage vendors, IT support, billing services, transcription, and the EHR vendor itself. A 'we've trusted them for years' verbal arrangement is a HIPAA violation from day one — not from the day of a breach. A BAA inventory, with renewal dates tracked by the privacy officer, is the audit-proof artifact.",
      keyPoint:
        "No BAA, no PHI. The privacy officer should be able to produce a current BAA for every vendor on the list.",
    },
  ],
  questions: [
    {
      id: "asc_cr_01",
      question:
        "A patient arrives for outpatient knee arthroscopy. The chart contains an H&P dated 32 days ago. The pre-op nurse asks the patient about any changes and writes 'No changes' on a sticky note in the chart. Does this meet the requirement?",
      options: [
        "Yes — the patient confirmed no changes, which is the day-of update",
        "Yes — H&P validity is 90 days for low-risk procedures",
        "No — the H&P is outside the 30-day window and the day-of update must be a properly dated, signed chart entry, not a sticky note",
        "No — the H&P window is 14 days for ASC procedures",
      ],
      correctIndex: 2,
      explanation:
        "Two separate problems: (1) the H&P is past the 30-day window, so a new H&P (or a properly documented update assessment by a qualified provider) is required; and (2) a sticky note is not a chart entry — it has no author, no signature, no date/time, and is not part of the legal record. A surveyor will write up both issues.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0142 (42 CFR 416.47(b)(1))",
      tutor: {
        whyCorrect:
          "The 30-day rule is a hard line. The day-of update has to be a real chart entry: dated, timed, signed by a qualified provider (typically the surgeon or anesthesiologist), and stating that the H&P was reviewed and any interval changes were assessed.",
        whyWrong: {
          A: "The patient's verbal report has to be captured by a clinician in the legal record — not on a sticky note that may not survive the day.",
          B: "The 30-day window applies. There is no 90-day option for any procedure category.",
          D: "The window is 30 days, not 14.",
        },
        operationalContext:
          "Build a pre-op checklist that requires the surgeon or anesthesiologist to make a dated, signed update note in the EHR before the patient enters the OR. Make 'H&P date' a hard-stop field on the OR scheduling system.",
      },
    },
    {
      id: "asc_cr_02",
      question:
        "An anesthesiologist completes the pre-anesthesia evaluation, the patient receives midazolam in pre-op holding, and on the way to the OR the surgeon stops by, explains the procedure for the first time, and asks the patient to sign the consent form. What is the documentation problem?",
      options: [
        "No problem — consent must be obtained immediately before the procedure",
        "Consent was obtained after the patient received sedating medication, which compromises the validity of the consent and the chart entry",
        "No problem — surgeons routinely confirm consent immediately before surgery",
        "Problem only if the patient later complained",
      ],
      correctIndex: 1,
      explanation:
        "Consent has to be informed, which means the patient has to have decision-making capacity at the moment of signing. A patient who has just received midazolam (a benzodiazepine with amnestic effects) is no longer in a position to make an informed decision. The chart shows consent signed after sedation — a serious documentation defect that surveyors specifically look for.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0146 (42 CFR 416.47)",
      tutor: {
        whyCorrect:
          "Consent must be obtained before any sedating medication is given. The discussion can happen in the office days before, in the pre-op area before any premed, or by phone — but the signature and the conversation must precede sedation. Surveyors trace timestamps on the consent against MAR entries for premedication.",
        whyWrong: {
          A: "'Immediately before' becomes 'after sedation' the moment any premed is on board.",
          C: "Surgeons can confirm and re-confirm, but the underlying signed consent has to be valid — meaning obtained before sedation.",
          D: "The defect is documentary and exists regardless of complaint.",
        },
        operationalContext:
          "Pre-op nursing pause: 'Consent timestamp confirmed before any sedating med is administered.' Build the EHR to flag a sedating med order if the consent timestamp is later than the order timestamp.",
      },
    },
    {
      id: "asc_cr_03",
      question:
        "After a difficult case, the surgeon dictates the operative report 4 days later and signs it. There is no other operative documentation in the chart. The patient has been discharged home. What does a surveyor expect to see?",
      options: [
        "The dictated note signed within a week is sufficient — no other documentation required",
        "A brief operative note (procedure, surgeon, anesthesia type, findings, specimens, EBL, disposition) should have been written or dictated immediately post-procedure to bridge the gap",
        "No expectation — documentation timeliness is a guideline, not a requirement",
        "An attestation from the circulator is sufficient",
      ],
      correctIndex: 1,
      explanation:
        "The expectation — driven by both AAAHC standards and broader CMS Conditions — is that a brief operative note is in the chart immediately after the procedure, before the patient leaves the OR or PACU. The full dictated report follows. A 4-day gap with no contemporaneous documentation leaves a clinical vacuum that PACU and discharge teams cannot safely operate within.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0142 (42 CFR 416.47(b)(2))",
      tutor: {
        whyCorrect:
          "The brief op note exists to protect the next clinician. PACU nurses, recovery teams, and downstream providers need to know what was done, what was found, and what to watch for. Dictated reports that arrive days later cannot perform that function.",
        whyWrong: {
          A: "A signed dictated note 4 days later does not retroactively close the gap during which downstream care was provided without operative documentation.",
          C: "Timeliness is a hard expectation, not a guideline.",
          D: "Circulator nursing notes record the room and the count; they do not substitute for a surgeon's operative note.",
        },
        operationalContext:
          "Hard-wire it: the surgeon writes a 5-line brief op note in the EHR before signing out at the OR computer. PACU policy: no patient is transferred to PACU without a brief op note in the chart. The dictated full report is a separate downstream artifact.",
      },
    },
    {
      id: "asc_cr_04",
      question:
        "A nurse realizes 6 hours after a procedure that she forgot to document the patient's pain score in PACU. She opens the chart and inserts an entry under the original PACU time stamp without flagging it as a late entry. What is the documentation issue?",
      options: [
        "No issue — the nurse is the author and is correcting an oversight",
        "The entry is a back-dated entry, not a late entry; it misrepresents the time of authorship and undermines the integrity of the legal record",
        "No issue if the entry is initialed",
        "Issue only if the patient was still on premises",
      ],
      correctIndex: 1,
      explanation:
        "Late entries are made at their actual time of writing, with both the original event time and the actual entry time visible, and clearly labeled 'Late Entry.' Inserting an entry under an earlier timestamp falsifies the timeline. The integrity of the medical record depends on entries reflecting when they were actually written. This kind of edit is a documented finding category.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0143 (42 CFR 416.47(a))",
      tutor: {
        whyCorrect:
          "Audit trails in modern EHRs capture the actual entry time, so back-dating is detectable. Even on paper, the practice undermines the chart's legal status. The correct method is: write the entry now, label it 'Late Entry — for event at [original time],' and sign with current date/time.",
        whyWrong: {
          A: "Correcting an oversight is fine; misrepresenting when the correction was made is not.",
          C: "Initials don't fix back-dating.",
          D: "The integrity issue exists regardless of patient location.",
        },
        operationalContext:
          "Train every clinician on the late-entry procedure and turn off 'edit timestamp' permissions in the EHR. Audit a sample of late entries quarterly to confirm the practice is being followed correctly.",
      },
    },
    {
      id: "asc_cr_05",
      question:
        "A patient calls the ASC and asks for a copy of her medical record from a procedure done 3 weeks ago. The medical records clerk says, 'We can't give you the record — the surgeon hasn't signed off on the discharge summary yet.' Is this defensible under HIPAA and the patient's right to access?",
      options: [
        "Yes — incomplete records cannot be released",
        "No — patients have a right to access their record (with limited exceptions); the response should be to fulfill the request within 30 days, even if some elements are still in process",
        "Yes — the surgeon must approve all releases",
        "No — release must be immediate and same-day",
      ],
      correctIndex: 1,
      explanation:
        "HIPAA gives patients the right to access their own protected health information, generally within 30 days of the request (extendable once by 30 days with written notice). 'The chart is incomplete' is not a recognized exception. The ASC must release what it has and supplement when the missing pieces are finalized, or provide the patient with a written explanation if access is being denied for a permissible reason.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "HIPAA 45 CFR 164.524",
      tutor: {
        whyCorrect:
          "The right of access is broad and the exceptions are narrow (psychotherapy notes compiled separately, information for use in a legal proceeding, certain research data). 'The provider hasn't signed yet' is not an exception. A surveyor or OCR investigator will treat this denial as a HIPAA violation.",
        whyWrong: {
          A: "Incompleteness does not toll the access right.",
          C: "Surgeon approval is not a HIPAA prerequisite for release of the patient's own record.",
          D: "The standard is 30 days, with one 30-day extension possible with written notice.",
        },
        operationalContext:
          "Train front-office staff: 'Patient requests their own record' = log the request, fulfill within 30 days, and escalate to the privacy officer if the chart is genuinely incomplete. Have a written form letter for the rare denial scenarios that are actually permissible.",
      },
    },
    {
      id: "asc_cr_06",
      question:
        "An ASC has a paper chart system. At end of business, the medical records room is unlocked because the cleaning crew comes through. The administrator says, 'They're our trusted vendor, and the room is in a back hallway.' What is the issue?",
      options: [
        "No issue — vendor relationships are governed by contract",
        "Trusted vendors do not satisfy access controls; medical records must be stored in a locked, access-controlled environment regardless of who is in the building",
        "No issue — paper records are not subject to the same controls as electronic records",
        "Issue only if a record was actually accessed",
      ],
      correctIndex: 1,
      explanation:
        "Access controls are defined by policy and physical security, not by trust. Cleaning crews, maintenance, and other after-hours personnel routinely have access to areas that should be locked. The standard is locked + access-controlled, with a signed BAA and documented training for any vendor who legitimately needs access to PHI areas. 'Trusted' is not a control.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "HIPAA 45 CFR 164.310",
      tutor: {
        whyCorrect:
          "Physical safeguards under the HIPAA Security Rule require facility access controls. 'Locked' means a key, badge, or code; 'access-controlled' means only authorized personnel can enter. After-hours access by cleaners is fine if their company has a BAA and they are trained — but the room still has to be locked at the end of the shift.",
        whyWrong: {
          A: "Vendor contracts are necessary but not sufficient; physical controls still apply.",
          C: "Paper records are subject to physical safeguards just like electronic records are subject to technical safeguards.",
          D: "The control failure exists at the moment the door is unlocked, regardless of whether someone walks through it.",
        },
        operationalContext:
          "Walk-through audit at 6 PM monthly: are all PHI areas locked? Are workstations logged off? Are charts off the desks? Photograph any deficiencies and address them before the next morning.",
      },
    },
    {
      id: "asc_cr_07",
      question:
        "An ASC retains paper records for 7 years after the date of service per its policy. State law in its jurisdiction requires retention for 10 years. The administrator wants to begin destroying records at 7 years 'because that's our policy.' How should this be handled?",
      options: [
        "Destroy at 7 years — the ASC's own policy controls",
        "The longer of state or federal retention period applies; records must be retained for the full 10 years required by state law",
        "Federal HIPAA retention is 6 years, so 7 years is over-retention",
        "Destroy at 7 years and notify the state",
      ],
      correctIndex: 1,
      explanation:
        "When state and federal retention periods differ, the longer period controls. State law here requires 10 years, so destroying at 7 years would create a state-law violation and potential exposure to malpractice or licensure investigations that rely on those records. The ASC's policy needs to be amended to match the longer of state or federal floor.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0148 (42 CFR 416.47(c))",
      tutor: {
        whyCorrect:
          "Retention is a least-restrictive analysis: identify every applicable retention requirement (CMS, HIPAA, state medical board, state pediatric statute of limitations, billing audit windows, malpractice statutes of limitations) and retain for the longest period. Most ASCs end up at 10–15 years for adult records and longer for pediatric.",
        whyWrong: {
          A: "Internal policy cannot be shorter than the applicable law.",
          C: "HIPAA's 6-year retention applies to certain HIPAA documentation; medical records themselves are governed by state law and other CMS rules.",
          D: "Notifying the state of an unlawful destruction does not legalize it.",
        },
        operationalContext:
          "Maintain a retention matrix by record type: adult medical record (longest of state/federal, often 10 years), pediatric (often majority + statute of limitations), billing records (often 7 years), HIPAA documentation (6 years), credentialing files (often per medical staff bylaws + statute of limitations). Review with counsel every 2 years.",
      },
    },
    {
      id: "asc_cr_08",
      question:
        "During a tracer, the surveyor pulls a chart and sees that the consent form lists the procedure as 'left knee arthroscopy' but the operative report says 'right knee arthroscopy.' The patient confirms the right knee was the intended side. What is the documentation problem?",
      options: [
        "Documentation discrepancy — no further action needed since the patient is fine",
        "Consent must accurately identify the procedure and side; a discrepancy of this magnitude requires immediate root-cause review and is also a wrong-site verification failure",
        "The surgeon can amend the consent retroactively",
        "Documentation discrepancies are acceptable if the outcome was good",
      ],
      correctIndex: 1,
      explanation:
        "A consent identifying the wrong side is a near-miss for wrong-site surgery and a defective consent. Either (1) the wrong side was consented and the right side was operated on without proper consent, or (2) the consent is wrong and the team operated correctly. Either way, time-out and consent verification protocols failed to catch it. This is a serious finding that triggers a review of the universal protocol process.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0146 (42 CFR 416.47), Universal Protocol",
      tutor: {
        whyCorrect:
          "Consent is the documented authorization for a specific procedure on a specific side. A side discrepancy means the documentary chain failed and the verification process (time-out, surgical site marking) did not catch it. Both are reportable to the QAPI program and to the governing body.",
        whyWrong: {
          A: "The risk reflected by the discrepancy is independent of the actual outcome.",
          C: "Retroactive amendment of a consent to match what was done is documentary fabrication.",
          D: "Documentation accuracy is not graded on outcome.",
        },
        operationalContext:
          "Build the time-out script to read the procedure and side from the consent aloud, with the surgical site mark visible. If the consent doesn't match the marked site, the case stops until the consent is corrected with a new signature.",
      },
    },
    {
      id: "asc_cr_09",
      question:
        "An ASC is implementing a new EHR. During the parallel-run period, some entries are made in the old paper chart and some in the new EHR. After go-live, the paper chart for a particular case has the consent and pre-op note; the EHR has the op note and PACU note. Where is the legal medical record?",
      options: [
        "Wherever the entries happen to be — there is no formal requirement",
        "The medical record for any case must be retrievable as a complete document; during transitions the ASC must reconcile and either consolidate or maintain a clear cross-reference",
        "Only the EHR is the legal record after go-live",
        "Only paper records are legally binding",
      ],
      correctIndex: 1,
      explanation:
        "The medical record is whatever the ASC has formally designated as the legal record set. During EHR transitions, the legal record can be split, but the ASC must be able to produce a complete, identifiable, retrievable record on demand. Parallel-run cases require either physical consolidation, scanning into the EHR, or an explicit cross-reference policy that surveyors can follow.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0140 (42 CFR 416.47(a))",
      tutor: {
        whyCorrect:
          "The 'designated record set' is a HIPAA concept that the ASC has to define and follow. During transitions, document the rule in writing: 'Cases through [date] are paper; cases after [date] are electronic; cases bridging the date are scanned into the EHR within 30 days of completion.' Then audit to make sure that's actually what's happening.",
        whyWrong: {
          A: "There is a formal requirement under HIPAA to identify the designated record set.",
          C: "Pre-go-live cases remain in their original format unless intentionally migrated.",
          D: "Both paper and electronic records are legally binding when they meet authentication and integrity standards.",
        },
        operationalContext:
          "Before go-live, write the bridging policy and identify a scanner workflow. During parallel run, audit weekly to confirm that hybrid charts are being reconciled per policy. Keep a chart-locator log so any case can be retrieved within 5 minutes.",
      },
    },
    {
      id: "asc_cr_10",
      question:
        "A surgeon dictates a long operative note, signs the dictation, and discovers the next day that he misstated the size of the implant used (he said '8mm' but it was actually '10mm'). What is the correct way to fix this?",
      options: [
        "Open the dictation, change '8mm' to '10mm,' and re-sign — no flag needed",
        "Add an addendum dated today that clarifies the correct implant size; do not alter the original entry",
        "Have the circulator add a note to the chart correcting the size",
        "Leave the original alone — small errors don't matter clinically",
      ],
      correctIndex: 1,
      explanation:
        "Corrections to authenticated entries are made by addendum, not by editing the original. The original stays as written, and a new dated, signed addendum identifies the error and provides the correct information. This preserves the audit trail and the integrity of the record. The implant size matters for downstream care, billing, and any future revision surgery.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0143 (42 CFR 416.47(a))",
      tutor: {
        whyCorrect:
          "The addendum approach: 'Addendum [today's date/time]: The implant size in the original op note dated [date] was incorrectly stated as 8mm. The correct implant size is 10mm. [Surgeon signature].' The original remains unchanged, and the audit trail is intact.",
        whyWrong: {
          A: "Editing an authenticated entry destroys the audit trail and is a documentation falsification risk.",
          C: "The circulator can correct her own notes; she cannot correct the surgeon's operative report.",
          D: "Implant size is medically and legally relevant. Documentation must be accurate.",
        },
        operationalContext:
          "Configure the EHR so that authenticated entries are read-only and require explicit addenda for any correction. Train surgeons on the addendum process so it is the default response to any post-signature error.",
      },
    },
    {
      id: "asc_cr_11",
      question:
        "An ASC's anesthesia records are kept in a separate paper folder filed by the anesthesia group, who provides services under contract. A surveyor asks to see the anesthesia record for a case from last week. The anesthesia group says they've taken their records back to their office. What is the issue?",
      options: [
        "No issue — the anesthesia group is contracted, so they own their records",
        "The anesthesia record is part of the patient's medical record at the ASC and must be available at the ASC for survey, billing, legal, and clinical care purposes",
        "No issue — the records are available on request",
        "Issue only if the patient asks for them",
      ],
      correctIndex: 1,
      explanation:
        "The anesthesia record is part of the patient's chart at the ASC, regardless of who provided the anesthesia service. The ASC must have the record on premises and available within reasonable retrieval time. Allowing a contracted group to take records off-site creates a custody gap that compromises survey readiness, patient care, and HIPAA accountability.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0140 (42 CFR 416.47(a))",
      tutor: {
        whyCorrect:
          "The ASC is the covered entity that holds the medical record. Contracted clinicians provide service, but the documentation they generate becomes part of the ASC's record set. The contract must require the contractor to deliver records to the ASC at the time of service, not retain them.",
        whyWrong: {
          A: "Service provision and record ownership are separate. The ASC owns the record.",
          C: "Off-site availability means the record is not at the ASC when needed for an in-process survey or an emergent clinical question.",
          D: "Custody requirements are independent of patient request.",
        },
        operationalContext:
          "Amend every contracted clinician agreement to require that all clinical documentation be filed in the ASC's record system (paper or electronic) before the contractor leaves the premises. Audit monthly that the records are present.",
      },
    },
    {
      id: "asc_cr_12",
      question:
        "A patient was discharged after a procedure with verbal instructions only. The discharge instruction sheet was not given because the printer was down. The PACU nurse documents 'verbal instructions given' in the chart. The patient calls the next day with a question about wound care. What is the documentation issue?",
      options: [
        "No issue — verbal instructions were given and documented",
        "Discharge instructions must be provided in writing; the chart should reflect the written instructions delivered, signed by the patient acknowledging receipt",
        "No issue if the patient was alert at discharge",
        "Issue only if the patient was injured",
      ],
      correctIndex: 1,
      explanation:
        "Discharge instructions must be in writing, and the patient (or responsible adult) must sign acknowledging receipt. A printer outage is a system failure to be solved, not an exception to the requirement. 'Verbal instructions only' leaves the patient without a reference at home and the ASC without evidence that critical information was conveyed.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0148 (42 CFR 416.42(c))",
      tutor: {
        whyCorrect:
          "Written discharge instructions create the audit trail and the patient's home reference. The standard expectation is: instructions in writing, copy in the chart, signature line for the patient or escort, and emergency contact phone numbers prominent on the document.",
        whyWrong: {
          A: "Documentation of 'verbal instructions' does not equal compliance with a written-instructions requirement.",
          C: "Patient alertness does not substitute for the document.",
          D: "The compliance requirement is independent of injury.",
        },
        operationalContext:
          "Pre-print master discharge instructions for the most common procedures so a printer outage doesn't stop the workflow. Stock the PACU with paper backup. Audit signed discharge instructions monthly; missing signatures are a top easy citation.",
      },
    },
    {
      id: "asc_cr_13",
      question:
        "An ASC stores its old paper records in an off-site commercial storage facility. The agreement is verbal — 'we've used them for years, we trust them.' What is wrong with this arrangement under HIPAA?",
      options: [
        "Nothing — verbal agreements are valid contracts",
        "A commercial storage facility handling PHI must be a Business Associate with a written Business Associate Agreement (BAA); a verbal arrangement creates a HIPAA violation",
        "Nothing — physical custody is separate from HIPAA",
        "Wrong only if the storage facility had a breach",
      ],
      correctIndex: 1,
      explanation:
        "Any vendor that creates, receives, maintains, or transmits PHI on behalf of the ASC is a Business Associate and requires a written BAA. A storage company physically housing paper records absolutely qualifies. Without a BAA, the ASC is in violation of HIPAA from day one — not only when something goes wrong.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "HIPAA 45 CFR 164.502(e), 164.504(e)",
      tutor: {
        whyCorrect:
          "BAAs are non-negotiable for vendors with PHI access. The BAA defines permitted uses, requires safeguards, mandates breach notification, and assigns liability. Without one, the ASC has handed PHI to an entity with no legal accountability for protecting it.",
        whyWrong: {
          A: "Verbal agreements are not BAAs and do not satisfy HIPAA.",
          C: "Physical custody of PHI triggers BA status.",
          D: "The violation exists at the moment PHI is handed over without a BAA, not only at the time of breach.",
        },
        operationalContext:
          "Build a BAA inventory: every vendor with PHI access, current BAA on file, expiration tracked, renewal cycle. Annual review by the privacy officer. Common gaps: shredding companies, IT support contractors, billing services, transcription services, and physical storage vendors.",
      },
    },
    {
      id: "asc_cr_14",
      question:
        "A physician dictates an op note and the transcription comes back the next day. The physician reviews and signs electronically. Three days later the physician realizes one finding was misstated. Should the physician edit the existing transcribed report or add an addendum?",
      options: [
        "Edit the existing report and re-sign — the physician is the author",
        "Add a dated, signed addendum that identifies the original error and states the correction; do not alter the signed original",
        "Have the transcriptionist correct the error",
        "Leave it — minor errors are acceptable",
      ],
      correctIndex: 1,
      explanation:
        "Once an entry is signed (authenticated), it becomes part of the legal record. Corrections are made by addendum, not by editing the original. The audit trail must show that the original existed, that an error was identified, and that a correction was issued — with both visible to anyone reviewing the chart later.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0143 (42 CFR 416.47(a))",
      tutor: {
        whyCorrect:
          "Addenda preserve the documentary chain. The chart shows the original report, the date and time of the addendum, the nature of the correction, and the author of the correction. A surveyor or attorney reviewing the record can reconstruct exactly what happened.",
        whyWrong: {
          A: "Authenticated entries are read-only. Editing them undermines the integrity of the record.",
          C: "The transcriptionist is not the author and cannot make clinical corrections.",
          D: "Accuracy is the standard, not severity.",
        },
        operationalContext:
          "Lock authenticated transcribed reports in the EHR. Provide a one-click 'Add Addendum' workflow that prompts for the nature of the correction and forces a signature. Audit a sample of corrections quarterly.",
      },
    },
    {
      id: "asc_cr_15",
      question:
        "An ASC is acquired by a hospital system. The acquiring system wants to migrate all historical patient records into its enterprise EHR and physically destroy the paper originals. What documentation control must be in place before the originals are destroyed?",
      options: [
        "None — once the records are in the new EHR, the paper is redundant",
        "A documented quality assurance process verifying that the scanned/migrated records are complete, legible, and accurately mapped, plus a signed certificate of destruction; retention requirements continue to apply to the migrated record",
        "A general legal release from the hospital system's counsel is sufficient",
        "Patient consent for each individual record",
      ],
      correctIndex: 1,
      explanation:
        "Before destroying originals, the ASC must verify that the migration is complete and legible (sample audit, page-count reconciliation, signed QA), then issue a certificate of destruction documenting what was destroyed, when, by whom, and the method. The migrated record then becomes the legal record and inherits the original's retention period — destruction at the original date of creation is not allowed.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0148 (42 CFR 416.47(c))",
      tutor: {
        whyCorrect:
          "Migration projects fail when QA is skipped. The defensible workflow: scan, OCR, sample-audit by a qualified records professional, reconcile page counts, validate readability, then destroy with a certificate. The retention clock continues from the original date of service.",
        whyWrong: {
          A: "Destruction without QA risks losing pieces of the record permanently.",
          C: "A general release does not substitute for documented technical QA.",
          D: "Patient consent is not required for record migration; QA and retention controls are.",
        },
        operationalContext:
          "Build a migration SOP: chain of custody log, scan QA checklist, sample-audit rate (at least 5–10% with stratified sampling for unusual chart types), page-count reconciliation, signed QA report by a records manager, then certificate of destruction by a HIPAA-compliant shredding vendor with BAA on file.",
      },
    },
  ],
};
