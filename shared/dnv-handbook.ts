import type { HandbookChapter } from "./schema";

export const dnvHandbook: HandbookChapter[] = [
  {
    levelId: "dnv_qm",
    title: "Quality Management (QM)",
    overview:
      "DNV's Quality Management standards require hospitals to maintain a comprehensive, organization-wide quality management system (QMS) integrating ISO 9001 principles. The QMS must cover all departments, use data-driven performance measurement, include root cause analysis for adverse events, and report findings to the governing body. The QAPI program integrates quality assessment with structured performance improvement.",
    sections: [
      {
        heading: "QM.1 — Organization-Wide QMS",
        content:
          "A written Quality Management Plan covering all hospital departments and services is required. The plan must define scope, objectives, methodology, data sources, and reporting lines. It must be reviewed and updated at least annually and approved by the governing body. DNV uniquely integrates ISO 9001 quality management principles — requiring systematic, documented approaches to quality processes.",
        thinkAboutIt:
          "Ask: Does your QM Plan cover environmental services and dietary, not just clinical departments? Has it been updated this calendar year? Does it have governing body approval on file?",
      },
      {
        heading: "QM.2/QM.3 — Performance Indicators and Root Cause Analysis",
        content:
          "Quality indicators must be measurable, monitored continuously, trended over time, and compared against external benchmarks across multiple dimensions (patient safety, clinical outcomes, satisfaction, operations). Root cause analysis (RCA) for sentinel events and near misses must be systematic, interdisciplinary, and system-focused — not blame-focused. CAPA must be assigned owners, given timelines, and tracked to verified effectiveness.",
        criticalValues: [
          { label: "RCA required for", value: "All sentinel events AND near misses" },
          { label: "RCA approach", value: "System-focused, interdisciplinary, not blame-focused" },
          { label: "CAPA tracking", value: "Owner assigned + timeline + effectiveness verification" },
        ],
      },
      {
        heading: "QM.4/QM.5 — Governing Body Reporting and QAPI",
        content:
          "Quality data must be reported to the governing body AND medical staff at defined intervals with documented active engagement — not passive receipt. QAPI requires at minimum one active, structured PI project following PDCA/PDSA methodology with all phases documented (baseline → intervention → re-measurement). Physician participation in QAPI is mandatory.",
        thinkAboutIt:
          "Check meeting minutes: do they show governing body members asking questions and directing actions? A quality report attached to minutes without discussion = non-compliant.",
      },
    ],
    quickReference: [
      { fact: "QM Plan review frequency", detail: "At least annually with governing body approval" },
      { fact: "RCA required for", detail: "All sentinel events and near misses" },
      { fact: "QAPI minimum projects", detail: "At least one active, structured PI project at all times" },
      { fact: "Quality reporting recipients", detail: "Governing body AND medical staff — both required" },
      { fact: "PI methodology", detail: "PDCA/PDSA or equivalent — all phases must be documented" },
      { fact: "CAPA requirements", detail: "Owner + timeline + effectiveness verification required" },
    ],
  },
  {
    levelId: "dnv_gb",
    title: "Governance & Governing Body (GB)",
    overview:
      "DNV's Governance standards establish the governing body (board of directors/trustees) as the entity holding ultimate legal responsibility for hospital quality, safety, and operations. Governing body accountability cannot be fully delegated. Key responsibilities include approving the mission, appointing and evaluating the CEO, approving medical staff bylaws, overseeing quality, and managing conflicts of interest.",
    sections: [
      {
        heading: "GB.1/GB.2 — Authority and Mission",
        content:
          "The governing body retains ultimate accountability for hospital outcomes even when day-to-day management is delegated to the CEO and medical staff. The governing body must include independent members not employed by management. The organization's mission, scope of services, and strategic direction must be formally approved by the governing body. Any addition or elimination of service lines requires governing body approval.",
        thinkAboutIt:
          "If the CEO decides to add an outpatient surgery program, this must go to the board for approval — it cannot be an administrative-only decision.",
      },
      {
        heading: "GB.3/GB.4 — CEO and Medical Staff Oversight",
        content:
          "The governing body appoints the CEO and must conduct formal, documented performance evaluations at defined intervals. CEO performance criteria must include quality outcomes, financial stewardship, regulatory compliance, and organizational culture. Medical staff bylaws must be reviewed and re-approved by the governing body at minimum every 2 years. Medical staff cannot unilaterally change their own governance documents.",
        criticalValues: [
          { label: "CEO evaluation frequency", detail: "At defined intervals per governing body policy (typically annual)" },
          { label: "Bylaws review minimum", detail: "Every 2 years — requires governing body approval" },
        ],
      },
      {
        heading: "GB.5 — Quality Oversight",
        content:
          "The governing body must actively engage with quality data — reviewing trends, approving corrective actions, and holding leadership accountable. Passive receipt of reports without documented discussion or directed actions is non-compliant. Board meeting minutes are the primary evidence of governing body quality engagement. The governing body cannot fully delegate quality accountability to the medical staff or administration.",
        thinkAboutIt:
          "DNV surveyors will request board minutes and look for substantive quality discussions. 'Report received' in the minutes is not sufficient — questions asked, concerns raised, and actions directed must be documented.",
      },
    ],
    quickReference: [
      { fact: "Governing body composition", detail: "Must include independent members not employed by management" },
      { fact: "Medical staff bylaws review", detail: "Minimum every 2 years with governing body re-approval" },
      { fact: "CEO performance evaluation", detail: "Formal, documented, at defined intervals" },
      { fact: "Scope of service changes", detail: "Require governing body approval — not administrative-only" },
      { fact: "Quality report requirement", detail: "Active engagement with documented discussion — not passive receipt" },
      { fact: "Ultimate accountability", detail: "Governing body retains accountability even with delegation" },
    ],
  },
  {
    levelId: "dnv_ms",
    title: "Medical Staff (MS)",
    overview:
      "DNV's Medical Staff standards require formal medical staff organization with bylaws, standing committees (credentials, executive, quality/peer review), and elected officers. All practitioners must be credentialed through primary source verification (PSV) before providing care. Privileges must be specific and based on demonstrated competence. OPPE and FPPE are required for all privileged providers. Peer review must be by similarly-privileged peers and results must inform privilege renewal.",
    sections: [
      {
        heading: "MS.1/MS.2 — Organization and Credentialing",
        content:
          "The medical staff must have formal bylaws with standing committees including credentials, executive, and quality/peer review. Primary source verification (PSV) of ALL credentials is required before any practitioner provides care: licenses, education, training, board certification, malpractice history, and mandatory NPDB query. Credentials must be re-verified at minimum every 2 years as part of reappointment.",
        criticalValues: [
          { label: "PSV elements", detail: "License, education, training, board cert, malpractice, NPDB query — ALL required" },
          { label: "Re-verification cycle", detail: "Minimum every 2 years at reappointment" },
          { label: "NPDB query", detail: "Mandatory — cannot be skipped or substituted" },
        ],
      },
      {
        heading: "MS.3 — Clinical Privileging",
        content:
          "Clinical privileges must be specific (e.g., 'laparoscopic cholecystectomy') not general (e.g., 'surgery'). Privileges are granted based on demonstrated competence — education, training, experience, and current performance data — not licensure alone. Privileges are renewed at minimum every 2 years as part of the reappointment process using OPPE data.",
        thinkAboutIt:
          "A privilege for 'general surgery' is not a valid delineated privilege under DNV. Surveyors will look for specific procedure-level privileges that have been granted based on documented competence.",
      },
      {
        heading: "MS.4/MS.5 — OPPE, FPPE, and Peer Review",
        content:
          "OPPE (ongoing data collection) must be used in privilege renewal decisions — data alone without application to privileging fails the standard. FPPE is triggered for all new privileges AND whenever performance concerns arise — it involves direct observation or prospective case review for a defined period. Peer review must be by similarly-privileged peers, cover all providers annually, include clinical incidents, and results must inform privilege renewal and be reported to the governing body annually.",
        criticalValues: [
          { label: "FPPE triggers", detail: "ALL new privileges AND any performance concern identified" },
          { label: "OPPE use", detail: "Must be used in privilege renewal — collection without use is non-compliant" },
          { label: "Peer review frequency", detail: "Each provider reviewed at minimum annually" },
          { label: "Peer review reporting", detail: "Results → executive committee AND governing body (annually)" },
        ],
      },
    ],
    quickReference: [
      { fact: "PSV completion timing", detail: "Before practitioner provides any patient care" },
      { fact: "NPDB query", detail: "Mandatory at appointment and reappointment — no exceptions" },
      { fact: "Privilege specificity", detail: "Procedure-specific, not specialty-general" },
      { fact: "Privilege renewal cycle", detail: "Minimum every 2 years using OPPE data" },
      { fact: "FPPE triggers", detail: "All new privileges OR any performance concern" },
      { fact: "Peer review by", detail: "Similarly privileged and/or licensed peers — not administrators" },
    ],
  },
  {
    levelId: "dnv_ns",
    title: "Nursing & Staffing Management (NS/SM)",
    overview:
      "DNV's Nursing Services and Staffing Management standards require an organized nursing service directed by an RN executive with organization-wide authority. Staffing must be based on patient acuity (not just census), with a systematic acuity measurement system enabling real-time adjustments. All nursing staff — including float pool and agency — must demonstrate unit-specific competencies. Written staffing plans must define ratios and skill mix, with variances tracked and analyzed.",
    sections: [
      {
        heading: "NS.1 — Nursing Executive Authority",
        content:
          "A registered nurse (RN) executive must direct nursing services organization-wide — including the ED, outpatient areas, and procedural areas. The nursing executive's qualifications must match the scope and complexity of the hospital's nursing services. Authority extends to nursing policies, standards of practice, staffing plans, and competency of all nursing personnel.",
        thinkAboutIt:
          "If the nursing executive's authority stops at inpatient units, that's a deficiency. Organization-wide means every location where nurses provide care.",
      },
      {
        heading: "NS.2/NS.3 — Acuity-Based Staffing and Competency",
        content:
          "Staffing must use a documented acuity measurement system that translates patient complexity scores into staffing requirements with real-time adjustment capability. Census-based staffing (headcount) is insufficient. Competency assessments must be unit-specific, patient-population-specific, completed at orientation AND annually thereafter. Acceptable assessment methods include simulation, return demonstration, direct observation, and written testing.",
        criticalValues: [
          { label: "Staffing basis", detail: "Patient acuity scores — not patient census/headcount" },
          { label: "Competency timing", detail: "At orientation AND annually thereafter" },
          { label: "Competency specificity", detail: "Unit-specific and patient-population-specific" },
        ],
      },
      {
        heading: "NS.4/SM.1 — Float/Agency Staff and Staffing Plans",
        content:
          "Float pool and agency nurses must have organization-verified, unit-specific competencies before assignment — agency training certificates alone are insufficient. Written staffing plans must define nurse-to-patient ratios, skill mix, and charge nurse coverage for each unit. Plans must be reviewed annually. Staffing variances must be formally documented, mitigated, tracked for patterns, and escalated to QM if systematic.",
        thinkAboutIt:
          "A cardiac ICU requires different competencies than a medical-surgical floor. Sending an MS float nurse to the CICU without verified CICU-specific competencies is a serious deficiency.",
      },
    ],
    quickReference: [
      { fact: "Nursing executive qualification", detail: "RN with organization-wide authority — qualifications match scope/complexity" },
      { fact: "Staffing basis", detail: "Acuity-based — not census-based" },
      { fact: "Competency assessment timing", detail: "Orientation AND annually thereafter" },
      { fact: "Agency staff competency", detail: "Organization-verified, unit-specific — not agency certificates" },
      { fact: "Staffing plan review", detail: "At least annually" },
      { fact: "Variance tracking", detail: "Documented, mitigated, pattern-analyzed, escalated to QM if systematic" },
    ],
  },
  {
    levelId: "dnv_pc",
    title: "Patient-Centered Care (PC)",
    overview:
      "DNV's Patient-Centered Care standards establish patient rights and organizational obligations throughout every episode of care. Patients have the right to dignity, privacy, informed consent, advance directives, participation in care decisions, and freedom from abuse. Individualized assessments must drive care planning with patient participation. Patient education must be in the patient's language at appropriate literacy levels. Discharge planning begins at admission.",
    sections: [
      {
        heading: "PC.1/PC.2 — Patient Rights and Informed Consent",
        content:
          "Patient rights must be communicated in writing at admission in the patient's preferred language and posted in care areas. All rights apply — including the right to file grievances without retaliation, refuse treatment, and access spiritual care. Informed consent requires five elements: nature/purpose, material risks/benefits, alternatives, consequences of refusal, and practitioner identity. Surgical consent must be obtained before pre-operative sedation.",
        criticalValues: [
          { label: "Rights communication", detail: "Written, at admission, in patient's preferred language" },
          { label: "5 consent elements", detail: "Nature/purpose, risks/benefits, alternatives, consequences, practitioner ID" },
          { label: "Consent timing", detail: "Before pre-operative sedation — not after" },
        ],
      },
      {
        heading: "PC.3/PC.4 — Advance Directives and Care Planning",
        content:
          "Every patient must be asked at admission whether they have an advance directive — existence cannot be a condition of care. If present, the advance directive must be documented and accessible in the active medical record (especially during emergencies). Individualized assessments must identify clinical, psychosocial, cultural, spiritual, and functional needs. Care plans must be developed with patient participation, updated as conditions change, and include multidisciplinary input for complex patients.",
        thinkAboutIt:
          "An advance directive in the physician's office file is useless during a code. It must be in the active medical record, accessible to clinical staff at the bedside.",
      },
      {
        heading: "PC.5 — Patient Education and Discharge Planning",
        content:
          "Education must be in the patient's preferred language at an appropriate health literacy level — standard printed handouts in medical terminology fail patients with low health literacy. Discharge planning must begin at or near admission (not the day of discharge), involve the patient and family, and ensure continuity of care through follow-up appointments, community resources, and medication reconciliation.",
        criticalValues: [
          { label: "Education language", detail: "Patient's preferred language — interpreter required if needed" },
          { label: "Education literacy", detail: "Health literacy must be assessed and education adapted" },
          { label: "Discharge planning start", detail: "At or near admission — not day of discharge" },
        ],
      },
    ],
    quickReference: [
      { fact: "Rights notification timing", detail: "At admission, written, in preferred language" },
      { fact: "Rights posting requirement", detail: "Patient care areas throughout the organization" },
      { fact: "Advance directive inquiry", detail: "Every patient at every admission — cannot condition care on it" },
      { fact: "Consent before sedation", detail: "Surgical consent before pre-op sedation — mandatory" },
      { fact: "Care plan participation", detail: "Patient must participate in care plan development" },
      { fact: "Discharge planning start", detail: "At or near admission for all patients" },
    ],
  },
  {
    levelId: "dnv_mm",
    title: "Medication Management (MM)",
    overview:
      "DNV's Medication Management standards govern the entire medication use process from ordering through monitoring. Qualified pharmacist oversight is required for all pharmaceutical services. High-alert medications require distinctive labeling, separate storage, and enhanced verification safeguards. After-hours pharmacy access must be controlled with documented type and quantity of removal. All ADRs and medication errors require immediate physician notification and aggregate reporting to quality management for trend analysis.",
    sections: [
      {
        heading: "MM.1/MM.2 — Pharmacist Oversight and Ordering Controls",
        content:
          "All pharmaceutical services require qualified pharmacist oversight — even when provided through contract. Medication orders must be complete (drug name, dose, route, frequency), legible, and authenticated. A pharmacist must clinically review all orders before dispensing (checking appropriateness, drug interactions, dosing). Verbal orders are urgent-situation-only and must be authenticated within 48 hours by authorized personnel.",
        criticalValues: [
          { label: "Order elements", detail: "Drug name + dose + route + frequency — all required" },
          { label: "Pharmacist review", detail: "Before every dispensing — not optional" },
          { label: "Verbal order authentication", detail: "Within 48 hours — urgent situations only" },
        ],
      },
      {
        heading: "MM.4/MM.5 — High-Alert Medications and After-Hours Access",
        content:
          "The organization must formally identify high-alert medications (anticoagulants, insulin, concentrated electrolytes, opioids, chemotherapy) with a written list. These require: distinctive labeling, separate storage from routine medications, and double-check/independent verification before administration. After-hours pharmacy access must be controlled, with designation of specific authorized personnel, and every removal documented with type AND quantity. Pharmacist must routinely review all after-hours removal activity.",
        thinkAboutIt:
          "Finding concentrated KCl (potassium chloride) stored next to standard IV fluids without special labeling = immediate high-alert medication deficiency. This is a top DNV survey finding.",
      },
      {
        heading: "MM.6/MM.7 — ADR Reporting and Drug Information",
        content:
          "Medication errors, ADRs, and drug incompatibilities require immediate reporting to the attending physician AND aggregate reporting to quality management for trending and corrective action. The organization must measure its reporting system effectiveness against established benchmarks. A non-punitive reporting culture is required. Drug information resources must be available to ALL clinical staff — not just pharmacy.",
        criticalValues: [
          { label: "ADR reporting track 1", detail: "Immediate notification to attending physician" },
          { label: "ADR reporting track 2", detail: "Aggregate to QM for trending + corrective action" },
          { label: "Drug information access", detail: "All staff involved in medication management — not pharmacy-only" },
        ],
      },
    ],
    quickReference: [
      { fact: "High-alert medication safeguards", detail: "Written list + distinctive labeling + separate storage + double-check" },
      { fact: "After-hours removal documentation", detail: "Type AND quantity at time of removal" },
      { fact: "After-hours review", detail: "Pharmacist routinely reviews all removals against current orders" },
      { fact: "ADR immediate action", detail: "Notify attending physician immediately" },
      { fact: "ADR aggregate action", detail: "Report to QM for trending and corrective action" },
      { fact: "Verbal orders", detail: "Urgent situations only — authenticate within 48 hours" },
    ],
  },
  {
    levelId: "dnv_ot",
    title: "Surgical & Anesthesia Services (OT/AS)",
    overview:
      "DNV's Surgical and Anesthesia Services standards require organized, adequately staffed, and well-equipped operating theatres under qualified supervision. Six specific items of emergency equipment must be immediately available to each theatre. The OR register must contain 10 required data elements and be kept current. Pre-anesthesia evaluation must occur within 48 hours before the first anesthesia dose. Post-anesthesia evaluation with seven specific elements must be documented within 48 hours after surgery. Wrong-site prevention processes are required.",
    sections: [
      {
        heading: "OT.1/OT.2/OT.3 — OR Organization, Staffing, and Equipment",
        content:
          "Surgical services must be supervised by a qualified RN, ODP, or physician with surgical services experience. All OR staff require specialized training; observers must be supervised. Six equipment items must be immediately available to each theatre: emergency call system, cardiac monitor, AMBU-bag/resuscitator, defibrillator, suction equipment, and provisions for emergency airway intervention. A tracheotomy set is also required — a cricothyroidotomy set is NOT an acceptable substitute.",
        criticalValues: [
          { label: "6 required equipment items", detail: "Emergency call, cardiac monitor, AMBU-bag, defibrillator, suction, emergency airway" },
          { label: "Also required", detail: "Tracheotomy set — cricothyroidotomy set is NOT a substitute" },
          { label: "Equipment maintenance", detail: "Biomedical engineering PM program — presence alone insufficient" },
        ],
      },
      {
        heading: "OT.4/OT.5/OT.6 — OR Register, Recovery, and Documentation",
        content:
          "OR register must be complete and current with 10 elements: patient name, DOB, patient ID, date/time of operation, surgeon and assistants, scrub and circulating staff, anesthesia type and provider, procedure in full, pre/post-op diagnosis. Recovery must occur in a dedicated area separate from the OR — direct-to-room recovery requires RN direct observation providing comparable care. An operative report is required immediately after surgery and before transfer; if delayed, an immediate post-op note with all required elements must be written.",
        criticalValues: [
          { label: "OR register elements", detail: "10 specific elements — missing any = non-compliant" },
          { label: "Operative report timing", detail: "Written/dictated immediately after surgery, before transfer" },
          { label: "If report delayed", detail: "Immediate post-op note with required elements before transfer" },
        ],
      },
      {
        heading: "AS.1/AS.3 — Anesthesia Services and Evaluation",
        content:
          "Anesthesia services must be directed by a qualified physician responsible for all anesthesia throughout the organization. Each provider requires specific privileges delineating what they may administer and whether supervision is required. Pre-anesthesia evaluation within 48 hours before first medication dose — includes medical history, patient interview/exam, documented airway assessment, anesthesia risk assessment, and drug/allergy history. Post-anesthesia evaluation within 48 hours after surgery with 7 required elements: respiratory function, cardiovascular function, mental status, temperature, pain, nausea/vomiting, and hydration.",
        thinkAboutIt:
          "If the pre-anesthesia evaluation was done on Monday and surgery is Thursday — that's 72+ hours, which exceeds the 48-hour window. Non-compliant even if the patient's condition didn't change.",
      },
    ],
    quickReference: [
      { fact: "Pre-anesthesia eval timing", detail: "Within 48 hours before first anesthesia dose" },
      { fact: "Post-anesthesia eval timing", detail: "Within 48 hours after surgery — even with early discharge" },
      { fact: "Post-anesthesia eval elements", detail: "Respiratory, cardiovascular, mental status, temperature, pain, nausea, hydration" },
      { fact: "OR register required elements", detail: "10 elements — all required, register must be current" },
      { fact: "Tracheotomy set", detail: "Required — cricothyroidotomy set is NOT a substitute" },
      { fact: "Wrong-site prevention", detail: "WHO Surgical Safety Checklist or equivalent — required" },
    ],
  },
  {
    levelId: "dnv_ic",
    title: "Infection Prevention & Control (IC)",
    overview:
      "DNV's Infection Control standards require a comprehensive, organization-wide IPC program led by a designated Infection Control Officer (ICO) with a written scope of responsibilities. The program must cover all staff and patients in all locations. Active surveillance for HAIs (SSI, CLABSI, CAUTI, VAP, MDROs) is required. IPC data must be reported to the Infection Control Committee at minimum quarterly and integrated with the quality management system.",
    sections: [
      {
        heading: "IC.1 — IPC Program Organization",
        content:
          "The IPC program must be organization-wide, covering all departments, all patient care and support areas, and all personnel (employees, contractors, students, volunteers). The ICO must have a written, defined scope of responsibilities. All new personnel must receive IPC orientation. The program must include written policies and procedures for all IPC activities.",
        thinkAboutIt:
          "Does your IPC program cover the dietary kitchen? The central supply storage area? The ice machines? If the answer is no, you have scope gaps that DNV will find during environmental tour.",
      },
      {
        heading: "IC.2/IC.3 — HAI Prevention and Surveillance",
        content:
          "Seven specific HAI categories require documented prevention strategies: SSI (including antibiotic prophylaxis protocols with appropriate discontinuation), CLABSI bundle, CAUTI prevention, VAP prevention, hand hygiene promotion, MDRO control (MRSA, C. diff, VRE, MDRO gram-negatives), and isolation protocols. Active surveillance must extend beyond patient care areas to food service, refrigerators, ice machines, air handlers, autoclave rooms, and central supply.",
        criticalValues: [
          { label: "7 HAI prevention categories", detail: "SSI, CLABSI, CAUTI, VAP, hand hygiene, MDROs, isolation" },
          { label: "Surveillance scope", detail: "All areas — including food service, ice machines, air handlers" },
          { label: "SSI prophylaxis", detail: "Protocol for administration AND appropriate discontinuation" },
        ],
      },
      {
        heading: "IC.4/IC.5 — Reporting and QM Integration",
        content:
          "The infection log must cover ALL persons (patients, staff, contractors, volunteers) and be maintained securely with access limited to authorized personnel. IPC data must be reported to the IPC oversight group at minimum quarterly. IPC findings must be reported to both the medical staff and organizational leadership — not just the Infection Control Committee. The IPC program must be integrated with the QMS and coordinate with public health authorities for outbreaks and communicable disease threats.",
        criticalValues: [
          { label: "IPC Committee reporting", detail: "Minimum quarterly" },
          { label: "Reporting recipients", detail: "IPC Committee + medical staff + organizational leadership" },
          { label: "Infection log scope", detail: "All persons — patients AND all categories of staff" },
        ],
      },
    ],
    quickReference: [
      { fact: "ICO scope", detail: "Must be formally defined in writing" },
      { fact: "IPC program scope", detail: "Organization-wide — all locations, all staff categories" },
      { fact: "New personnel orientation", detail: "Required — includes contractors, students, volunteers" },
      { fact: "HAI categories requiring prevention strategies", detail: "7 specific categories" },
      { fact: "IPC Committee reporting frequency", detail: "Minimum quarterly" },
      { fact: "Infection log scope", detail: "Patients AND all staff categories — secured, coded for privacy" },
    ],
  },
  {
    levelId: "dnv_mr",
    title: "Medical Records (MR)",
    overview:
      "DNV's Medical Records standards require complete, accurate, confidential, and promptly completed medical records for every patient evaluated or treated anywhere in the organization. All entries must be legible, dated, timed, and authenticated. Verbal orders are for urgent situations only and must be authenticated within 48 hours. Records are retained for minimum 5 years. Confidentiality requires access controls and written patient authorization for external releases. The coding and indexing system must enable retrieval by diagnosis and procedure.",
    sections: [
      {
        heading: "MR.1/MR.2/MR.3 — Organization, Completeness, and Retention",
        content:
          "Medical records must be maintained for every individual evaluated or treated in any part of the organization. The completion process must have defined timeframes. Records must be retained for minimum 5 years (longer if required by law) and must be stored protected from flood, fire, and other damage with access limited to authorized staff. A coding and indexing system must allow retrieval by diagnosis AND procedure to support clinical audit.",
        criticalValues: [
          { label: "Record scope", detail: "Every patient evaluated or treated — no minimum thresholds" },
          { label: "Retention minimum", detail: "5 years — or longer per applicable law" },
          { label: "Retrieval capability", detail: "By diagnosis AND procedure — not just patient name" },
        ],
      },
      {
        heading: "MR.4/MR.5 — Confidentiality and Entry Requirements",
        content:
          "Access is limited to individuals designated by law, regulation, and policy. Original records released only per law, court order, or legal subpoena — written patient authorization required for routine external releases. All entries must be legible, dated, timed, and authenticated. Pre-printed order sets: practitioner dates, times, and authenticates the LAST page identifying total number of pages. Internal changes (deletions, additions) must be initialed.",
        thinkAboutIt:
          "Signing only the first page of a 3-page pre-printed order set is non-compliant. DNV specifically requires authentication of the LAST page with total page count identified.",
      },
      {
        heading: "MR.5/MR.6 — Verbal Orders and Authorship",
        content:
          "Verbal orders must be used infrequently (urgent situations only) and accepted only by personnel authorized by the medical staff. Authentication required within 48 hours. A system must exist to identify the author of each entry — only individuals specified in policy may document in the medical record. Rubber stamps permitted only with a signed statement in administrative offices confirming sole use of the stamp.",
        criticalValues: [
          { label: "Verbal order use", detail: "Urgent situations only — routine use is non-compliant" },
          { label: "Verbal order authentication", detail: "Within 48 hours" },
          { label: "Verbal order recipients", detail: "Only personnel authorized by the medical staff" },
        ],
      },
    ],
    quickReference: [
      { fact: "Medical record scope", detail: "Every patient evaluated or treated in any part of the organization" },
      { fact: "Retention minimum", detail: "5 years (or per applicable law if longer)" },
      { fact: "Entry requirements", detail: "Legible, dated, timed, authenticated — all 4 elements" },
      { fact: "Verbal order authentication", detail: "Within 48 hours — urgent use only" },
      { fact: "Pre-printed order set authentication", detail: "Date, time, authenticate LAST page with total page count" },
      { fact: "External record release", detail: "Written patient authorization or court order/subpoena required" },
    ],
  },
  {
    levelId: "dnv_pe",
    title: "Physical Environment & Safety (PE/RM)",
    overview:
      "DNV's Physical Environment and Risk Management standards require hospitals to maintain safe, functional physical environments through regular inspections, proactive hazard correction, and documented utility system maintenance. Life safety code compliance is mandatory. Risk management must be integrated with quality management with non-punitive incident reporting and pattern analysis. The Emergency Operations Plan must be based on a Hazard Vulnerability Analysis and exercised at defined intervals.",
    sections: [
      {
        heading: "RM.1/RM.2 — Risk Management Program",
        content:
          "A comprehensive risk management program with non-punitive incident reporting from all departments is required. Risk data must be analyzed for patterns and trends — not just individual investigation. CAPA must be tracked to verified effectiveness. The risk management program must be integrated with the quality management system. The program must receive input from all departments including environmental services, dietary, and maintenance.",
        thinkAboutIt:
          "Environmental services identifying a wet floor hazard should be reporting to a system that captures, analyzes, and acts on that risk — not just having it verbally corrected with no documentation.",
      },
      {
        heading: "PE.1/PE.2 — Physical Environment and Utility Systems",
        content:
          "Regular inspections must proactively identify and correct physical environment hazards — when immediate correction is impossible, interim measures are required. All utility systems (electrical, medical gas, water, HVAC, emergency power) must have documented PM programs, regular testing at defined intervals, inspection records, and contingency plans for failures. Medical gas systems require installer performance testing, third-party verification testing, and routine maintenance. OR HVAC requires documented air pressure, temperature, and humidity testing.",
        criticalValues: [
          { label: "Emergency generator testing", detail: "At defined intervals — monthly load tests, annual extended tests" },
          { label: "Medical gas testing", detail: "Installer performance + third-party verification + routine maintenance" },
          { label: "OR HVAC testing", detail: "Air pressure, temperature, humidity — documented at defined intervals" },
        ],
      },
      {
        heading: "PE.3/PE.4 — Life Safety and Emergency Preparedness",
        content:
          "Fire drills must be conducted at required frequencies with documented post-drill critiques. Fire detection and suppression systems must be maintained, tested, and inspected. Construction requires Interim Life Safety Measures (ILSM). Life safety deficiencies must be corrected within defined timeframes — extended uncorrected deficiencies are non-compliant. The EOP must be based on an HVA and exercised at defined intervals with documented after-action reviews addressing utility failures, building damage, patient evacuation, and community coordination.",
        criticalValues: [
          { label: "Fire drill documentation", detail: "Required — includes post-drill critique" },
          { label: "Construction life safety", detail: "ILSM required — fire watch when systems impaired" },
          { label: "EOP basis", detail: "Hazard Vulnerability Analysis (HVA)" },
          { label: "EOP exercises", detail: "At defined intervals with after-action reviews" },
        ],
      },
    ],
    quickReference: [
      { fact: "Physical environment inspections", detail: "Regular, proactive — not reactive only" },
      { fact: "Hazard correction", detail: "Promptly — if delayed, interim measures required" },
      { fact: "Generator testing", detail: "At defined intervals — documented results required" },
      { fact: "Medical gas testing", detail: "Installer + third-party verification + routine maintenance" },
      { fact: "Fire drills", detail: "Required frequency with documented post-drill critiques" },
      { fact: "EOP basis", detail: "Hazard Vulnerability Analysis — exercised at defined intervals" },
    ],
  },
  {
    levelId: "dnv_sp",
    title: "Specialty Clinical Services (SP)",
    overview:
      "DNV's Specialty Services standards cover obstetrics, laboratory, blood management, medical imaging, nuclear medicine, rehabilitation, emergency department, dietary, organ procurement, and restraint/seclusion. Each specialty must be organized, staffed, and operated under a qualified director/manager following recognized standards for that specialty. Common themes include director qualifications, staff competency, documentation, and QM integration. Restraint/seclusion has specific rights, ordering, monitoring, and training requirements.",
    sections: [
      {
        heading: "Laboratory, Blood, and Imaging Services",
        content:
          "Laboratory services must be available 24 hours, performed in a CLIA-certified laboratory, with scope documented and available to medical staff. A pathologist must determine tissue examination requirements. Blood products require quality-assured screening for HIV, Hep B, Hep C, syphilis, and relevant others — blood records retained 10 years. Medical imaging requires qualified physician oversight, authenticated reports, radiation safety programs, and 5-year record retention. Nuclear medicine requires a physician director qualified in nuclear medicine with annual equipment calibration.",
        criticalValues: [
          { label: "Blood records retention", detail: "10 years — longer than standard 5-year medical record retention" },
          { label: "Blood screening minimum", detail: "HIV, Hep B, Hep C, syphilis — plus applicable others" },
          { label: "Nuclear medicine equipment calibration", detail: "At least annually by qualified personnel" },
        ],
      },
      {
        heading: "Emergency, Dietary, and Rehabilitation Services",
        content:
          "Emergency departments require 24-hour physician medical staff supervision and qualified nursing with qualified triage at patient presentation. Dietary requires a qualified dietitian for nutritional oversight with documented nutritional assessments for at-risk patients (artificial nutrition, malabsorption diagnoses, nutrition-impacted conditions). Therapeutic diet manual must be approved by the dietitian and organization. Rehabilitation treatment plans must include practitioner orders, type/frequency/duration, measurable goals, results, and revisions — all in the medical record.",
        thinkAboutIt:
          "A patient on TPN for 2 weeks with no documented nutritional assessment is a DNV dietary deficiency. The dietitian must assess and document for ALL artificial nutrition patients.",
      },
      {
        heading: "Restraint and Seclusion Standards",
        content:
          "Restraint/seclusion requires a physician order and can never be used for staff convenience, discipline, or retaliation. For violent/self-destructive behavior: 1-hour face-to-face evaluation (physical AND behavioral) required; orders are time-limited (1-4 hours per patient age/type); face-to-face physician assessment required before renewal after 24 hours. Simultaneous restraint AND seclusion requires continual monitoring (face-to-face or video+audio). Staff must be trained before applying restraints. All restraint/seclusion use must be monitored in the QMS.",
        criticalValues: [
          { label: "1-hour face-to-face", detail: "For violent behavior — both physical AND behavioral assessment" },
          { label: "24-hour renewal", detail: "Face-to-face physician assessment required before renewing order" },
          { label: "Simultaneous R+S monitoring", detail: "Continual — face-to-face or video+audio" },
          { label: "Staff training", detail: "Required before applying restraints — qualified trainer" },
        ],
      },
    ],
    quickReference: [
      { fact: "Blood records retention", detail: "10 years from disposition date" },
      { fact: "Lab certification", detail: "CLIA certified — required for all lab services" },
      { fact: "ED physician supervision", detail: "24 hours on premises" },
      { fact: "Nutritional assessment trigger", detail: "All artificial nutrition patients + other at-risk criteria" },
      { fact: "Restraint 1-hour evaluation", detail: "Face-to-face for violent behavior — physical AND behavioral" },
      { fact: "Restraint 24-hour renewal", detail: "Physician face-to-face assessment required before new order" },
    ],
  },
];
