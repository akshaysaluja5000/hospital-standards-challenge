import type { Question } from "./schema";

export interface AscPretestQuestion extends Question {
  chapterId: string;
  chapterName: string;
}

export const ascPretestQuestions: AscPretestQuestion[] = [
  {
    id: "asc_pre_pr_01",
    chapterId: "asc_patient_rights",
    chapterName: "Patient Rights",
    question:
      "A pre-op nurse is reviewing the consent form with a patient who has limited English proficiency. The patient's adult son offers to translate. What is the most defensible practice?",
    options: [
      "Use the son to translate — family interpretation is faster and the patient prefers it",
      "Use a qualified medical interpreter (in person or by phone/video) and document the interpreter's identity",
      "Proceed with consent in English and have the patient sign anyway",
      "Cancel the case until the patient brings a certified family member translator",
    ],
    correctIndex: 1,
    explanation:
      "Family members — even adult children — are not qualified medical interpreters. They may filter information, lack medical vocabulary, or have a personal interest that biases the conversation. The defensible practice is a qualified interpreter, with the interpreter's identity documented in the chart.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0070 (42 CFR 416.50)",
    tutor: {
      whyCorrect:
        "Qualified interpreters are trained, neutral, and accountable. The chart should record the interpreter's name (or interpretation service vendor and call ID) so that the conversation is auditable later.",
      whyWrong: {
        A: "Family interpretation is convenient but not defensible — bias and accuracy concerns are well-documented.",
        C: "Consent in a language the patient doesn't understand is presumptively defective.",
        D: "Cancellation isn't required if a phone or video interpreter is available, which most ASCs have on contract.",
      },
      operationalContext:
        "Establish a contract with a qualified interpreter service that provides phone/video access 24/7. Train front-office and pre-op staff to dial the service immediately when a language need is identified.",
    },
  },
  {
    id: "asc_pre_pr_02",
    chapterId: "asc_patient_rights",
    chapterName: "Patient Rights",
    question:
      "A patient submits a written grievance to the ASC complaining about pain control after discharge. The administrator calls the patient, apologizes, and considers the matter closed. What governance step is missing?",
    options: [
      "Nothing — verbal resolution is sufficient",
      "A written response to the patient within the timeframe defined by ASC policy, with documentation in the grievance log",
      "The complaint should be referred to state survey only",
      "The medical director should not be involved",
    ],
    correctIndex: 1,
    explanation:
      "Grievances require a written response within a defined timeframe (typically 7 days, with full resolution within 30 days). The grievance log captures the complaint, investigation, response, and any process changes triggered by the issue.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0070 (42 CFR 416.50(d))",
    tutor: {
      whyCorrect:
        "The written response and grievance log create the audit trail. Surveyors pull both to verify the program is operating, not just resolving complaints conversationally.",
      whyWrong: {
        A: "Verbal resolution doesn't satisfy the documentation requirement.",
        C: "State survey notification is appropriate for unresolved or sentinel-level complaints, not the standard pathway.",
        D: "Clinical complaints (like pain control) typically warrant medical director involvement in the response.",
      },
      operationalContext:
        "Maintain a written grievance procedure that defines acknowledgment time, investigation lead, response time, and escalation triggers. Audit the grievance log monthly for cycle-time and resolution patterns.",
    },
  },
  {
    id: "asc_pre_pr_03",
    chapterId: "asc_patient_rights",
    chapterName: "Patient Rights",
    question:
      "A patient calls the ASC three weeks after surgery and asks for a copy of their advance directive that they brought in on the day of the procedure. The medical records clerk says, 'We don't keep advance directives — they go home with the patient.' Is this defensible?",
    options: [
      "Yes — advance directives belong to the patient",
      "No — when an advance directive is presented at the time of care, the ASC must place a copy in the medical record and have a procedure to honor it",
      "Yes — ASCs are not required to address advance directives",
      "No — but only if the patient was admitted overnight",
    ],
    correctIndex: 1,
    explanation:
      "ASCs must inform patients of their right to formulate advance directives and honor those directives during their care. When a patient presents one, a copy goes into the chart and the ASC's procedure is followed if a relevant clinical event occurs.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0070 (42 CFR 416.50(c))",
    tutor: {
      whyCorrect:
        "The advance directive becomes part of the chart when presented. That allows the clinical team to honor it during a code or other emergency without searching for the document.",
      whyWrong: {
        A: "The original belongs to the patient; a copy belongs in the chart.",
        C: "The Patient Self-Determination Act applies to ASCs.",
        D: "ASC duty applies regardless of admission status.",
      },
      operationalContext:
        "Pre-op intake includes the question 'Do you have an advance directive?' If yes, scan/copy and place in the chart. If no, provide written information about the right to formulate one.",
    },
  },
  {
    id: "asc_pre_pr_04",
    chapterId: "asc_patient_rights",
    chapterName: "Patient Rights",
    question:
      "Before sedation, a surgeon discovers the consent form lists a left-side procedure but the surgical site marking is on the right. What is the correct response?",
    options: [
      "Proceed — the marking is correct, the consent is a typo",
      "Stop, verify with the patient while they are still able to participate, correct the consent with a new signature, and re-confirm the surgical site",
      "Have the circulator amend the consent without the patient's knowledge",
      "Cancel the case permanently",
    ],
    correctIndex: 1,
    explanation:
      "A discrepancy between consent and site marking is exactly what the universal protocol is designed to catch. Stop the line, verify with the awake patient, correct the documentation, and re-confirm. The case can proceed safely once the discrepancy is resolved.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0146 (42 CFR 416.47), Universal Protocol",
    tutor: {
      whyCorrect:
        "The patient is the source of truth while still able to participate. Correcting documentation without verification is a falsification risk; proceeding without correction is a wrong-site surgery risk.",
      whyWrong: {
        A: "Proceeding past a documentation discrepancy is the wrong-site surgery pattern surveyors specifically train for.",
        C: "Amending without the patient's knowledge is documentation fraud.",
        D: "Permanent cancellation isn't required; correct, verify, proceed.",
      },
      operationalContext:
        "Pre-op nursing pause script: read the procedure and side from the consent aloud, confirm with the patient, confirm the marked site is visible. Discrepancies stop the line until corrected.",
    },
  },
  {
    id: "asc_pre_gov_01",
    chapterId: "asc_governance",
    chapterName: "Governance",
    question:
      "An ASC's bylaws designate the governing body as the appointing authority for medical staff. The medical staff committee recommends new privileges, but the governing body has not signed approvals for two new physicians who have already started operating. What is the issue?",
    options: [
      "No issue — medical staff approval is sufficient",
      "Without governing body sign-off, the privileges have not been legally granted, and the two physicians are operating without authority",
      "Issue only if a complication has occurred",
      "Issue only if the physicians lack board certification",
    ],
    correctIndex: 1,
    explanation:
      "The governing body holds the legal authority to grant privileges. Without their signed approval, the privileges were never legally granted, regardless of medical staff committee action.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0044 (42 CFR 416.41(a))",
    tutor: {
      whyCorrect:
        "The chain is: medical staff recommends → governing body approves. Skipping the second step means the appointment is incomplete and the privilege has not been granted.",
      whyWrong: {
        A: "Medical staff is recommendatory in this structure, not the appointing authority.",
        C: "The defect exists regardless of clinical outcome.",
        D: "Board certification is a credentialing element, not a substitute for governing body approval.",
      },
      operationalContext:
        "Build a credentialing workflow that does not mark a file 'complete' until the governing body's signed approval is filed. OR scheduling should be hard-blocked on incomplete files.",
    },
  },
  {
    id: "asc_pre_gov_02",
    chapterId: "asc_governance",
    chapterName: "Governance",
    question:
      "An ASC's transfer agreement with the local hospital expired four months ago. None of the staff physicians have admitting privileges at any nearby hospital. A patient suffers an intra-operative complication and needs transfer. What is the regulatory exposure?",
    options: [
      "None — informal hospital relationships are sufficient",
      "Major — the absence of either a current transfer agreement or documented physician admitting privileges violates the Conditions for Coverage and creates direct patient safety exposure",
      "Minor — transfer is rare and the issue is administrative",
      "None — transfer requirements apply to hospitals, not ASCs",
    ],
    correctIndex: 1,
    explanation:
      "The CFR requires either a current written transfer agreement or documented admitting privileges for all staff physicians. With neither in place, the ASC has no legal pathway for emergent transfer — a Condition-level deficiency made worse by the actual transfer event.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0080 (42 CFR 416.41(b))",
    tutor: {
      whyCorrect:
        "The two-pathway rule (agreement or privileges) exists to ensure transfer is always possible. Both pathways missing means transfer arrangements are unverified at the moment they are needed.",
      whyWrong: {
        A: "Informal arrangements have no legal force when needed.",
        C: "The exposure is patient-safety, not administrative.",
        D: "The transfer requirement applies specifically to ASCs in 42 CFR 416.41(b).",
      },
      operationalContext:
        "Tickle the transfer agreement renewal 90 days before expiration. Maintain a parallel folder of current physician hospital-privilege letters as the backup pathway.",
    },
  },
  {
    id: "asc_pre_gov_03",
    chapterId: "asc_governance",
    chapterName: "Governance",
    question:
      "A QAPI report shows a sustained sterilization failure rate above benchmark for 4 months. Governing body minutes say only 'QAPI report received.' Does this meet the requirement?",
    options: [
      "Yes — receipt is documented",
      "No — governance requires evidence of substantive review, discussion, and direction, not just receipt",
      "Yes — only if the QAPI committee is acting on the issue",
      "No — only if patient harm has occurred",
    ],
    correctIndex: 1,
    explanation:
      "Receipt without review is not oversight. The minutes must reflect that the governing body engaged with the data, discussed the implications, and directed action.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0044 (42 CFR 416.41(a))",
    tutor: {
      whyCorrect:
        "Surveyors compare event data to minutes. When real data shows a sustained problem and the minutes are silent, the conclusion is that the governing body did not actually engage with the program.",
      whyWrong: {
        A: "Receipt is a clerical act; oversight is a substantive act.",
        C: "QAPI committee action is necessary but doesn't substitute for governance review.",
        D: "Governance failure exists independent of harm.",
      },
      operationalContext:
        "Use a minutes template that forces fields: 'Data Reviewed,' 'Issues Identified,' 'Action Directed,' 'Owner,' 'Follow-up Date.'",
    },
  },
  {
    id: "asc_pre_gov_04",
    chapterId: "asc_governance",
    chapterName: "Governance",
    question:
      "The medical director recommends focused review of a high-volume surgeon whose complication rate has been climbing. The governing body declines, citing the surgeon's revenue contribution. What is the governance defect?",
    options: [
      "No defect — high-revenue clinicians require special handling",
      "The governing body cannot subordinate patient safety to revenue considerations; declining a focused review for non-clinical reasons is a serious fiduciary and credentialing failure",
      "Defect only if the surgeon then has a sentinel event",
      "No defect — focused review is at the medical director's discretion only",
    ],
    correctIndex: 1,
    explanation:
      "Patient safety is the primary fiduciary duty. Declining a focused review for revenue reasons creates a structural conflict that undermines the credentialing process and the QAPI program.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0044, Q-0091 (42 CFR 416.41 and 416.45)",
    tutor: {
      whyCorrect:
        "When the medical director identifies a clinical concern, the credentialing process must respond. Bylaws should require focused review on medical director recommendation.",
      whyWrong: {
        A: "Volume and value do not insulate any clinician from review.",
        C: "Defect exists at the moment of refusal, not at a future event.",
        D: "Medical director can recommend; the governing body and MSC must act.",
      },
      operationalContext:
        "Bylaws should explicitly require the MSC to act on medical director recommendations within a defined timeframe (e.g., 30 days), with documented rationale for any decision not to act.",
    },
  },
  {
    id: "asc_pre_cr_01",
    chapterId: "asc_clinical_records",
    chapterName: "Clinical Records",
    question:
      "A patient arrives for a procedure with an H&P dated 28 days ago. The pre-op nurse documents a brief assessment but the surgeon does not write a day-of update note. Does this meet the requirement?",
    options: [
      "Yes — the H&P is within 30 days",
      "No — the H&P is within window but the day-of update by a qualified provider is a separate, required entry",
      "Yes — pre-op nurse documentation is the day-of update",
      "No — the H&P window is 14 days, not 30",
    ],
    correctIndex: 1,
    explanation:
      "Both pieces are required: an H&P within 30 days AND a day-of-surgery update by a qualified provider (typically the surgeon or anesthesiologist) confirming no material change.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0142 (42 CFR 416.47(b)(1))",
    tutor: {
      whyCorrect:
        "The day-of update is a clinical assessment by a qualified provider, dated and signed in the chart. Nursing notes don't substitute for it.",
      whyWrong: {
        A: "Window compliance alone doesn't satisfy the day-of update requirement.",
        C: "Pre-op nurse documentation is part of the workflow but doesn't replace the qualified-provider update.",
        D: "The window is 30 days.",
      },
      operationalContext:
        "Build a hard-stop on the OR tracker that requires a day-of H&P update entry signed by surgeon or anesthesiologist before the patient enters the OR.",
    },
  },
  {
    id: "asc_pre_cr_02",
    chapterId: "asc_clinical_records",
    chapterName: "Clinical Records",
    question:
      "A patient signs the surgical consent in pre-op holding 15 minutes after receiving midazolam for anxiety. The chart shows the consent timestamp is after the medication timestamp. What is the documentation defect?",
    options: [
      "No defect — consent obtained in pre-op is timely",
      "Consent obtained after a sedating medication is presumptively defective; the patient lacks decision-making capacity",
      "No defect if the patient was alert during signing",
      "Defect only if the patient later complains",
    ],
    correctIndex: 1,
    explanation:
      "Midazolam impairs decision-making capacity and produces amnesia. Consent must be obtained before any sedating premedication, with the timeline traceable in the chart.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0146 (42 CFR 416.47)",
    tutor: {
      whyCorrect:
        "Surveyors compare consent timestamps to MAR entries. Any sedating med given before consent signature is a documented defect.",
      whyWrong: {
        A: "Pre-op timing isn't enough; pre-medication timing matters.",
        C: "Apparent alertness doesn't satisfy the legal standard for capacity after sedation.",
        D: "The defect is documentary and exists regardless of complaint.",
      },
      operationalContext:
        "Configure the EHR to flag any sedating med order with a timestamp later than the consent signature, requiring resolution before administration.",
    },
  },
  {
    id: "asc_pre_cr_03",
    chapterId: "asc_clinical_records",
    chapterName: "Clinical Records",
    question:
      "A surgeon's office faxes the H&P the morning of surgery. The H&P is dated 38 days before the procedure. The pre-op nurse asks the surgeon, who says, 'Nothing's changed — just proceed.' What does the ASC regulation require?",
    options: [
      "Accept the verbal assurance and proceed",
      "The H&P must be performed not more than 30 days before the procedure; if it is older than 30 days a new comprehensive H&P is required before the case can proceed",
      "Add a brief surgeon attestation and proceed",
      "Re-do the H&P only if more than 90 days old",
    ],
    correctIndex: 1,
    explanation:
      "Under 42 CFR 416.52(a), the comprehensive medical history and physical assessment must be performed not more than 30 calendar days before the date of the scheduled surgery. An H&P that is 38 days old is out of compliance, and the corrective action is to perform a new H&P before the procedure — not to add an attestation to an out-of-window H&P.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0142 (42 CFR 416.52(a))",
    tutor: {
      whyCorrect:
        "The 30-day rule is the regulatory boundary on the H&P itself. Once the H&P is older than 30 days, it no longer satisfies the standard for that procedure date, and a new H&P by an authorized practitioner is required. A pre-op nurse who catches this is performing exactly the stop-the-line role the regulation depends on.",
      whyWrong: {
        A: "Verbal assurance is not part of the medical record and does not refresh an out-of-window H&P.",
        C: "An attestation does not convert an expired H&P into a current one; the rule is on the H&P, not on the surgeon's assurance.",
        D: "The 30-day window controls; 90 days is not a regulatory threshold for ASCs.",
      },
      operationalContext:
        "Build pre-op checklist controls that flag any H&P over 30 days. Establish a workflow for completing a new H&P at the ASC if the surgeon's office H&P is out of window. Make 'no surgery without a current H&P performed within 30 days' a hard stop in the pre-op chart review.",
    },
  },
  {
    id: "asc_pre_cr_04",
    chapterId: "asc_clinical_records",
    chapterName: "Clinical Records",
    question:
      "A patient requests a copy of her medical record 10 days after her procedure. The clerk says, 'The dictated op note isn't transcribed yet — we can't release.' Under HIPAA, what is the correct response?",
    options: [
      "Wait until the chart is complete",
      "Provide what is currently in the record within 30 days; supplement when the missing pieces are completed",
      "Refuse — incomplete records cannot be released",
      "Release only after surgeon approval",
    ],
    correctIndex: 1,
    explanation:
      "HIPAA grants patients the right to access their record, generally within 30 days. 'Incomplete' is not a recognized exception. Release what is available and supplement when more is added.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "HIPAA 45 CFR 164.524",
    tutor: {
      whyCorrect:
        "The right of access is broad and the exceptions narrow. Provider workflow gaps don't toll the timeline.",
      whyWrong: {
        A: "Waiting indefinitely creates a HIPAA violation.",
        C: "Incompleteness is not a permitted denial reason.",
        D: "Surgeon approval is not a HIPAA requirement for the patient's own records.",
      },
      operationalContext:
        "Build a release SOP: log the request, fulfill within 30 days, document any extension with written notice to the patient, supplement when needed.",
    },
  },
  {
    id: "asc_pre_ip_01",
    chapterId: "asc_infection_prevention_safety",
    chapterName: "Infection Prevention",
    question:
      "A sterilizer cycle fails its biological indicator test. The SPD tech places the tray in 'do not use' status, repeats the cycle, and gets a passing result on the second cycle. Has the failure been adequately handled?",
    options: [
      "Yes — the second cycle passed",
      "No — all loads run since the last passing BI must be quarantined and recalled if already used; the failure must be investigated and documented",
      "Yes — only failures with three consecutive losses require recall",
      "No — but only if the load contained implants",
    ],
    correctIndex: 1,
    explanation:
      "A BI failure invalidates the cycle and all loads sterilized since the last passing BI. Those loads must be quarantined; if any have already been used, patients must be identified and the events investigated.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "AAMI ST79; AAAHC IP standards",
    tutor: {
      whyCorrect:
        "The BI is the only assay that confirms biological kill. A failure means we cannot assume any prior load was sterile.",
      whyWrong: {
        A: "Passing the next cycle doesn't retroactively validate failed loads.",
        C: "There is no 'three failures' rule; one failure triggers the response.",
        D: "Implant loads have additional rules but the recall obligation applies broadly.",
      },
      operationalContext:
        "BI failure SOP: quarantine current load, recall and trace prior loads to last passing BI, notify infection preventionist within 1 hour, investigate root cause, document in QAPI.",
    },
  },
  {
    id: "asc_pre_ip_02",
    chapterId: "asc_infection_prevention_safety",
    chapterName: "Infection Prevention",
    question:
      "A nurse uses an alcohol-based hand rub between patients in pre-op. After contact with a patient who has C. difficile, she uses the same hand rub. What is the issue?",
    options: [
      "No issue — alcohol-based rubs work for all organisms",
      "C. difficile spores are not effectively killed by alcohol; soap-and-water hand washing is required after contact with a C. diff patient",
      "Issue only in inpatient settings",
      "Issue only if the patient is symptomatic",
    ],
    correctIndex: 1,
    explanation:
      "Alcohol-based hand rubs do not kill C. difficile spores. Soap-and-water hand washing is required after any contact with a known or suspected C. diff patient, environment, or items.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0240 (CDC hand hygiene)",
    tutor: {
      whyCorrect:
        "The mechanical action of soap-and-water washing physically removes spores, which alcohol cannot kill. This is one of the few exceptions to the alcohol-rub-as-default rule.",
      whyWrong: {
        A: "Alcohol kills most pathogens but not spore-formers.",
        C: "Setting doesn't matter; the organism does.",
        D: "Asymptomatic carriers can still shed spores.",
      },
      operationalContext:
        "Post visual reminders at C. diff patient bays: 'C. diff = soap and water, not alcohol.' Train all staff at orientation and annually.",
    },
  },
  {
    id: "asc_pre_ip_03",
    chapterId: "asc_infection_prevention_safety",
    chapterName: "Infection Prevention",
    question:
      "An ASC reuses single-use devices (SUDs) that have been processed by an FDA-approved third-party reprocessor. The administrator says, 'Single-use means we can't reuse anything.' Is the administrator correct?",
    options: [
      "Yes — SUDs cannot be reprocessed under any circumstances",
      "No — SUDs can be reprocessed if done by an FDA-cleared third-party reprocessor following FDA-approved protocols, and the ASC tracks the reprocessor and cycle count",
      "Yes — but only because the ASC isn't accredited",
      "No — any in-house reprocessing is acceptable",
    ],
    correctIndex: 1,
    explanation:
      "The FDA permits SUD reprocessing by entities that meet FDA requirements (typically third-party reprocessors). The ASC must track which devices have been reprocessed, by whom, and how many cycles.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "FDA SUD reprocessing guidance; AAAHC IP",
    tutor: {
      whyCorrect:
        "Third-party SUD reprocessing is a regulated industry with FDA oversight. The ASC's job is to verify the reprocessor's FDA clearance and maintain device tracking.",
      whyWrong: {
        A: "Reprocessing under FDA-approved protocols is allowed.",
        C: "Accreditation status does not affect FDA SUD rules.",
        D: "In-house reprocessing of FDA-labeled SUDs is generally not permitted without FDA clearance.",
      },
      operationalContext:
        "Maintain an SUD reprocessing log: device, reprocessor, FDA clearance documentation, cycle count, expiration. Verify reprocessor FDA status annually.",
    },
  },
  {
    id: "asc_pre_ip_04",
    chapterId: "asc_infection_prevention_safety",
    chapterName: "Infection Prevention",
    question:
      "An infection preventionist wants to track post-op SSI rates but has no follow-up mechanism — patients leave the same day and rarely report back. What is the most defensible surveillance approach?",
    options: [
      "Track only intra-operative findings — post-op surveillance is impractical",
      "Implement structured post-op follow-up (calls at 7 and 30 days, surgeon office report-back, EHR query for return visits or admissions) and document the methodology in the QAPI plan",
      "Skip SSI surveillance entirely for ASCs",
      "Rely on patient self-report only",
    ],
    correctIndex: 1,
    explanation:
      "SSI surveillance in the ASC setting requires a structured follow-up methodology because patients are not on-site post-discharge. The methodology must be documented and the data fed into QAPI.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0240 series; NHSN/CDC SSI",
    tutor: {
      whyCorrect:
        "Defensible surveillance defines numerator (cases with SSI), denominator (cases performed), and the case-finding method. Post-discharge calls and surgeon report-back are standard methods.",
      whyWrong: {
        A: "Intra-op findings miss SSI by definition (SSIs develop post-op).",
        C: "SSI surveillance is required as part of QAPI for ASCs.",
        D: "Self-report alone underestimates SSI substantially.",
      },
      operationalContext:
        "Document the SSI surveillance methodology in writing: who calls, what questions, what follow-up triggers a chart review, what counts as an SSI. Report aggregate rates monthly to QAPI.",
    },
  },
  {
    id: "asc_pre_cred_01",
    chapterId: "asc_credentialing",
    chapterName: "Credentialing & Privileging",
    question:
      "A surgeon was originally credentialed at the ASC 38 months ago. The credentialing coordinator says, 'We'll get to reappointment when she has time.' What is the regulatory expectation?",
    options: [
      "Reappointment cycles are flexible administrative milestones",
      "Reappointment must occur on a defined cycle no longer than every 24 months, with current primary source verification, updated competency data, and governing body action; passing the deadline means privileges have lapsed and must be paused",
      "Reappointment is only required if a complaint has been filed",
      "Reappointment can be deferred indefinitely if the surgeon's volume is low",
    ],
    correctIndex: 1,
    explanation:
      "Reappointment is a governance act that confirms the clinician's privileges remain appropriate. The standard cycle is no longer than 24 months. Going past the deadline means the clinician is operating without a current grant — the corrective action is to pause privileges, complete the reappointment work, and then reinstate.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0091 (42 CFR 416.45)",
    tutor: {
      whyCorrect:
        "Reappointment looks at the body of work since the last appointment: case volume, complications, OPPE/FPPE results, peer review findings, complaints, and any expirables. The governing body acts on a recommendation from the medical staff and either reappoints, modifies, or denies.",
      whyWrong: {
        A: "The cycle is bounded by regulation, not at the coordinator's discretion.",
        C: "Reappointment is calendar-driven, not complaint-driven.",
        D: "Volume affects competency questions, not whether reappointment occurs at all.",
      },
      operationalContext:
        "Build a reappointment calendar with 180/120/60-day milestones. Trigger pre-work at the 180-day mark; complete the file by the 60-day mark; governing body action on cycle. No clinician should reach the deadline without the file ready.",
    },
  },
  {
    id: "asc_pre_cred_02",
    chapterId: "asc_credentialing",
    chapterName: "Credentialing & Privileging",
    question:
      "A surgeon's medical license expired yesterday and the renewal certificate hasn't arrived. He is scheduled to operate this morning. What is the correct action?",
    options: [
      "Allow him to operate — renewals are routine",
      "Auto-suspend privileges until current license renewal is verified; reschedule today's cases",
      "Have the medical director sign a one-day waiver",
      "Allow today's cases and document in QAPI",
    ],
    correctIndex: 1,
    explanation:
      "An expired license means no legal authority to practice. Operating without an active license exposes the patient, the ASC, and may invalidate malpractice coverage.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0091 (42 CFR 416.45(a))",
    tutor: {
      whyCorrect:
        "Auto-suspension is the protective mechanism that removes individual judgment from the equation. Verification via the state board takes minutes when the license is actually current.",
      whyWrong: {
        A: "Routine renewal does not equal current authority.",
        C: "No individual can waive a regulatory requirement.",
        D: "After-the-fact documentation does not authorize the action in real time.",
      },
      operationalContext:
        "Configure expirables tracking with alerts at 60, 30, 14, and 0 days. Auto-suspension triggers automatically at expiration; reinstatement requires verified renewal.",
    },
  },
  {
    id: "asc_pre_cred_03",
    chapterId: "asc_credentialing",
    chapterName: "Credentialing & Privileging",
    question:
      "A surgeon was granted a new robotic privilege 8 months ago. Three of the planned 5 FPPE cases have proctor evaluations on file; cases 4 and 5 are not reviewed. The privilege is in active status. What is the gap?",
    options: [
      "No gap — three positive evaluations are sufficient",
      "FPPE plans must be completed in full, with a documented closeout decision before the privilege moves to unrestricted status",
      "No gap — proctor stopped attending due to confidence",
      "Gap only if a complication occurred",
    ],
    correctIndex: 1,
    explanation:
      "FPPE has a defined plan, defined number of cases, and a closeout decision. Closing the loop is not optional.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0091 (42 CFR 416.45(a))",
    tutor: {
      whyCorrect:
        "FPPE without closeout means the new privilege never received final confirmation. The remaining cases must be reviewed and the closeout signed.",
      whyWrong: {
        A: "Three is not five; the plan defines the number.",
        C: "Proctor opt-out by impression isn't a documented evaluation.",
        D: "Process compliance is independent of clinical outcome.",
      },
      operationalContext:
        "Build an FPPE template that requires every planned case to be filled in with evaluation and a final closeout decision before the privilege transitions to unrestricted status.",
    },
  },
  {
    id: "asc_pre_cred_04",
    chapterId: "asc_credentialing",
    chapterName: "Credentialing & Privileging",
    question:
      "A locum tenens surgeon is scheduled to cover three case days next week. The agency emails a packet of credentials the day before the first case. What is the appropriate response?",
    options: [
      "Accept the agency packet and proceed since locums are pre-vetted",
      "Apply the same credentialing and privileging standards to locums as to permanent staff: complete primary source verification, governing body action on temporary privileges, and a defined privilege list before any patient contact",
      "Skip credentialing — locums work under the agency's authority",
      "Have the medical director sign the packet on the morning of surgery",
    ],
    correctIndex: 1,
    explanation:
      "There is no 'locum exception' to credentialing. The ASC must independently verify credentials, grant privileges through its own process (often an expedited or temporary track), and document scope before the locum sees a patient. Agency packets are a starting point, not a substitute for the ASC's process.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0091 (42 CFR 416.45)",
    tutor: {
      whyCorrect:
        "Patients at the ASC are the ASC's responsibility. The ASC's credentialing committee owns the verification and privilege grant; the agency relationship is administrative.",
      whyWrong: {
        A: "Pre-vetting at an agency is not equivalent to facility credentialing.",
        C: "Agency authority does not override the ASC's regulatory obligation.",
        D: "Same-day medical-director sign-off bypasses governing body action and primary source verification.",
      },
      operationalContext:
        "Maintain a written temporary/locum privileging procedure with required PSVs, governing body delegation rules, expirables list, and a no-exception lead time so packets land in credentialing well before the first scheduled date.",
    },
  },
  {
    id: "asc_pre_qm_01",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "An ASC's QAPI committee membership consists of the administrator, the office manager, and the receptionist. The medical director is invited but rarely attends, and no other clinical staff participate. What is the structural problem?",
    options: [
      "No problem — the committee is meeting consistently",
      "QAPI requires multidisciplinary clinical participation; without medical staff, nursing, infection prevention, and pharmacy input, the committee cannot evaluate clinical care meaningfully",
      "No problem if the administrator is clinically trained",
      "Problem only if patient outcomes are deteriorating",
    ],
    correctIndex: 1,
    explanation:
      "QAPI is a clinical quality program. The committee composition must reflect the work being evaluated — clinical experts must be in the room when clinical indicators are reviewed, otherwise the analysis defaults to administrative metrics and misses the point of the program.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43)",
    tutor: {
      whyCorrect:
        "Surveyors review QAPI minutes and ask who attended. Persistent absence of clinical participation undermines the program's ability to act on clinical signals and is a structural finding even when meetings are held on cadence.",
      whyWrong: {
        A: "Cadence is necessary but not sufficient — composition matters.",
        C: "Single-person clinical knowledge does not substitute for multidisciplinary review.",
        D: "Structural inadequacy precedes outcome deterioration; the gap is independent of any single event.",
      },
      operationalContext:
        "Define committee composition in the QAPI plan: medical director, nursing leader, infection preventionist, pharmacy representative, administrator. Document attendance in minutes; address chronic absence formally with the absent member's leadership.",
    },
  },
  {
    id: "asc_pre_qm_02",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "PACU nurses verbally hand off patients to discharge nurses with no standardized template. Information about anesthesia type, intra-op events, and post-op orders is sometimes missed and rework is common. What is the QAPI angle?",
    options: [
      "Hand-off is operational, not QAPI",
      "Communication failures during transitions of care are a leading source of harm; QAPI should track hand-off completeness, intervene with a structured template, and re-measure",
      "No QAPI angle unless an adverse event has occurred",
      "Track only the rework time, not the communication content",
    ],
    correctIndex: 1,
    explanation:
      "Transitions of care are one of the highest-yield areas in QAPI. Unstandardized hand-offs cause information loss that surfaces as missed orders, repeat assessments, and patient confusion. A structured tool (SBAR or facility-specific equivalent) plus measurement of element-completion is the standard intervention.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43)",
    tutor: {
      whyCorrect:
        "QAPI's job is to improve clinical care, and hand-offs sit squarely inside that scope. Define a standard template, audit a sample weekly for completeness, and adjust the template based on what staff report missing.",
      whyWrong: {
        A: "Operational and clinical care are not exclusive — QAPI owns clinical operations.",
        C: "Waiting for adverse events misses the point of preventive QAPI.",
        D: "Rework time is a downstream effect; the upstream measurement is the hand-off itself.",
      },
      operationalContext:
        "Roll out a single hand-off template (paper or EHR-embedded) with the elements every receiving nurse needs. Audit 20 hand-offs per week against the template; report completeness percentages to QAPI monthly.",
    },
  },
  {
    id: "asc_pre_qm_03",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "An ASC tracks adverse events but has no system for capturing near-misses (events that could have caused harm but were caught before reaching the patient). The QAPI committee says, 'No harm, no event to track.' What is the QAPI problem?",
    options: [
      "No problem — adverse events are the regulated category",
      "Near-misses are the early warning system for adverse events; a QAPI program that ignores them loses the most valuable improvement signal and is operating reactively",
      "No problem if the adverse event rate is low",
      "Problem only after a sentinel event occurs",
    ],
    correctIndex: 1,
    explanation:
      "Mature safety programs treat near-misses as gold — they reveal latent system failures before patients are harmed. Restricting the program to adverse events means the program waits for harm to happen before learning, which is the opposite of preventive QAPI.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43)",
    tutor: {
      whyCorrect:
        "A reporting system that captures both adverse events and near-misses gives the QAPI program the volume of signal it needs to identify trends and intervene proactively. Surveyors look for evidence near-misses are tracked, themed, and acted on.",
      whyWrong: {
        A: "Regulated minimum is one floor; effective QAPI is more.",
        C: "Low adverse event counts may simply mean events are not reaching the count, not that risk is low.",
        D: "Waiting for sentinel events to drive learning is the failure mode this category was created to prevent.",
      },
      operationalContext:
        "Add a named near-miss reporting category to the event reporting system. Train staff that near-misses are valued and non-punitive. Review aggregate near-miss themes at every QAPI meeting alongside adverse events.",
    },
  },
  {
    id: "asc_pre_qm_04",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "An ASC's annual QAPI plan names three priority areas: post-op infection, medication safety, and patient identification. The active PIPs in progress are about employee parking and waiting-room flow. What is the misalignment?",
    options: [
      "No misalignment — any improvement work counts",
      "Active PIPs should reflect the priorities defined in the QAPI plan; running PIPs unrelated to the named priorities means the program is not executing what the governing body approved",
      "No misalignment if the parking and flow PIPs have charters",
      "Misalignment only if a sentinel event occurred in a priority area",
    ],
    correctIndex: 1,
    explanation:
      "The QAPI plan and the PIPs must match. The plan is the governing body's approved roadmap; the PIPs are how the roadmap gets executed. Drift between the two means either the plan is wrong or the program is not running the plan — either way, it requires explanation in the next plan revision.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43(a))",
    tutor: {
      whyCorrect:
        "Surveyors trace the line from plan → indicators → PIPs → outcomes. A break in that chain is a structural QAPI finding even if individual PIPs are technically well run.",
      whyWrong: {
        A: "Random improvement is not what the regulation requires.",
        C: "Charter quality is necessary but separate from plan alignment.",
        D: "Misalignment is a chronic structural issue, not event-triggered.",
      },
      operationalContext:
        "On the QAPI dashboard, list each plan priority and the active PIPs that address it. Empty rows are gaps requiring action — either spin up a PIP or revise the plan with governing body approval.",
    },
  },
  {
    id: "asc_pre_qm_05",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "The QAPI committee meets monthly with detailed minutes. Discussion is recorded but no decisions are documented and no action items are assigned. How does a surveyor read this?",
    options: [
      "Detailed minutes are evidence of compliance",
      "Discussion without decisions or assigned actions is process without product; QAPI requires documented decisions and follow-through",
      "Decisions are required only for sentinel events",
      "Attendance is sufficient",
    ],
    correctIndex: 1,
    explanation:
      "Effective QAPI minutes show discussion, decisions, owners, and deadlines. Concerns that recur month-after-month with no closure indicate the committee deliberates but does not act.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43(a))",
    tutor: {
      whyCorrect:
        "Minutes should use a decision-log format. Each item: discussion, decision, owner, follow-up date. Carry forward to next meeting.",
      whyWrong: {
        A: "Detail without decisions is activity without progress.",
        C: "Decisions are needed across the board.",
        D: "Attendance is the floor; substance is the standard.",
      },
      operationalContext:
        "Standardize the QAPI agenda: review prior decision log, review priority indicators with thresholds, discuss new events, decide actions with owners and dates, sign the log, carry forward.",
    },
  },
];
