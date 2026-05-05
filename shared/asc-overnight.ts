import type { Level } from "./schema";

export const ascOvernightLevel: Level = {
  id: "asc_overnight_care",
  module: "asc",
  name: "Overnight Care Services",
  description:
    "Staffing requirements, qualified personnel, written policies, clinical records, and quality oversight for ASC overnight care.",
  icon: "Moon",
  color: "hsl(220, 55%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Overnight Care and Services",
    plainLanguageSummary:
      "Chapter 20 applies to the rare ASC that keeps patients overnight — beyond the same-day discharge that defines standard ASC operations. The CMS definition of an ASC includes language that services should not exceed 24 hours, so an ASC providing overnight care is operating at the edge of what defines an ASC. AAAHC permits this when patients recovering from surgery need observation but do not require the full services of an acute care hospital. When overnight care is provided, the ASC must obtain any required state license, have qualified physicians and at minimum one registered nurse on duty at all times patients are present, define and communicate the scope and limitations of the service, maintain comprehensive written policies, create clinical records that document overnight care, provide appropriate food services, and integrate overnight care into the quality management program. Surveyors verify that a physician is present or immediately available by telephone, that an RN is on duty, and that all policies and records reflect what the ASC actually does.",
    keyOperationalExpectations: [
      "Any state-required license for overnight care operations must be current and posted.",
      "The governing body must appoint one or more qualified physicians to supervise overnight care; admission and discharge require a physician order.",
      "At least one physician must be present or immediately available by telephone whenever patients are present overnight.",
      "At least one registered nurse must be on duty at all times patients are present.",
      "Written policies must address at least six defined areas: admission criteria, clinical responsibilities, emergency services, transfer arrangements, staffing, and isolation procedures.",
      "Overnight care must be reviewed as part of the ASC's quality management and improvement program.",
    ],
    commonRiskPoints: [
      "The ASC provides overnight care without having obtained a required state license for that activity.",
      "No governing body appointment exists for a physician to supervise overnight care — it is informally 'whoever did the surgery.'",
      "Written policies address admission and staffing but omit isolation procedures for patients with communicable diseases.",
      "Clinical records for overnight patients lack nursing notes, treatment orders, or follow-up instructions.",
      "Overnight care outcomes and events are not presented to the governing body as part of the quality management program.",
    ],
    cmsTags: [
      "AAAHC Chapter 20 (Selective Standard — applies when overnight care is provided)",
      "42 CFR 416.2 (ASC definition — 'not expected to exceed 24 hours')",
      "No specific overnight-care CFR citation — AAAHC accreditation standard governs",
    ],
  },
  studyMaterial: [
    {
      title: "What Staffing Must Be Present at All Times When Overnight Care Patients Are in the ASC?",
      content:
        "Standard B elements 5 and 6 set two non-negotiable staffing floors for overnight care: (1) at least one physician must be present or immediately available by telephone whenever patients are present, and (2) at least one registered nurse must be on duty whenever patients are present. These requirements apply continuously — not only during business hours. A facility that has overnight patients with only an LPN and on-call telephone coverage without an RN on duty is non-compliant.",
      keyPoint:
        "Overnight care: physician present or available by phone + at least one RN on duty — both, continuously, while patients are present.",
      category: "rule",
    },
    {
      title: "Who May Admit or Discharge a Patient From Overnight Care?",
      content:
        "Standard B element 2 requires that a patient be admitted or discharged only upon the order of a physician who is responsible for the medical care of that patient. This means nursing staff cannot independently decide to admit a patient to overnight status or discharge them the next morning without a physician order. The physician responsible for the patient — not just any available physician — must issue those orders.",
      keyPoint:
        "Overnight admissions and discharges require a physician order from the patient's responsible physician — nursing cannot do this independently.",
      category: "rule",
    },
    {
      title: "What 6 Areas Must Written Overnight Care Policies Cover?",
      content:
        "Standard D requires written policies and procedures addressing: (1) clinical criteria for determining eligibility for admission, (2) clinical responsibilities for each patient during their stay, (3) provisions for emergency services, (4) arrangements for transfer to other health care services when needed, (5) staffing requirements to ensure RNs and other professionals are available in sufficient numbers, and (6) isolation procedures for patients admitted with a suspected or confirmed communicable disease. All six must be addressed — a policy missing isolation procedures is incomplete.",
      keyPoint:
        "Overnight care policies must cover 6 areas: admission criteria, clinical responsibilities, emergency services, transfer, staffing, and isolation.",
      category: "number",
    },
    {
      title: "What Must Clinical Records for Overnight Patients Include?",
      content:
        "Standard F requires that clinical record entries for overnight care include at minimum: (1) a current history and physical examination, (2) treatment orders, (3) nursing notes, and (4) follow-up instructions to patients. These are distinct from the surgical operative record — the overnight care record documents the ongoing clinical management during the stay. Missing nursing notes (e.g., vital sign entries, assessment findings) or the absence of discharge follow-up instructions are both direct citations.",
      keyPoint:
        "Overnight records must include: H&P, treatment orders, nursing notes, and follow-up instructions. All four required.",
      category: "number",
    },
    {
      title: "How Must the Scope and Limitations of Overnight Care Be Communicated?",
      content:
        "Standard C requires documentation of the scope and limitations of overnight care services and evidence that this documentation is communicated to: (a) physicians who refer and admit patients, (b) staff who provide care, (c) potential patients in advance of their referral, and (d) other health care professionals and relevant community agencies. Scope and limitations might include: the types of patients eligible, the maximum length of stay, what conditions would require transfer, and what services are not available overnight.",
      keyPoint:
        "Scope and limitations must be documented and communicated to 4 audiences: referring physicians, staff, patients, and community agencies.",
      category: "number",
    },
    {
      title: "What Food Service Requirements Apply to Overnight Care?",
      content:
        "Standard G requires that food service and refreshments meet patient needs, with three evidential elements: (1) compliance with local, state, and federal food preparation and storage guidelines, (2) personnel providing food services meet local health department requirements, and (3) special dietary requirements for patient care are met. An ASC keeping patients overnight that provides only vending machine access or food not meeting special dietary needs (e.g., diabetic diets) does not satisfy this standard.",
      keyPoint:
        "Overnight food service: must comply with food safety regulations + staff meet health department requirements + special diets accommodated.",
      category: "rule",
    },
    {
      title: "How Must Overnight Care Be Integrated Into the Quality Program?",
      content:
        "Standard I requires evidence that overnight care and services are reviewed as part of the ASC's quality management and improvement program. This means overnight care outcomes, adverse events, near-misses, and compliance with overnight care standards must appear in quality data presented to the governing body. It is not sufficient to have a separate overnight care quality report that never reaches the governing body — the integration must be demonstrated in governing body quality meeting minutes.",
      keyPoint:
        "Overnight care outcomes must appear in the ASC's quality program and be reviewed by the governing body — not just tracked internally.",
      category: "rule",
    },
    {
      title: "Who Must the Governing Body Appoint to Supervise Overnight Care?",
      content:
        "Standard B element 1 requires the governing body to appoint one or more qualified physicians to supervise overnight care and services. Additionally, Standard B element 3 requires that providers admitting patients to the overnight program be licensed to treat patients in this setting and have been granted privileges by the governing body for overnight care — consistent with AAAHC credentialing standards. Informal arrangements ('whoever did the surgery stays involved') do not satisfy formal governing body appointment.",
      keyPoint:
        "Governing body must formally appoint qualified physician(s) to supervise overnight care. Admitting providers need specific overnight care privileges.",
      category: "rule",
    },
  ],
  questions: [
    {
      id: "asc_over_01",
      question:
        "An ASC keeps post-surgical patients overnight for observation when same-day discharge is not safe. The ASC's state requires a license for overnight care. A surveyor asks to see the license. The administrator says, 'We're in the process of applying.' Is there a compliance issue?",
      options: [
        "No issue — applications in progress demonstrate good faith compliance",
        "Standard-level finding — Standard A requires the overnight care unit to have obtained any state-required license to operate; providing overnight care without the required license is non-compliant regardless of application status",
        "No issue — state licensure is a state matter and is not reviewed in AAAHC surveys",
        "No issue — the standard only applies if the ASC has been keeping patients overnight for more than 90 days",
      ],
      correctIndex: 1,
      explanation:
        "Standard A requires that if the state requires a license for overnight care, the unit must have obtained it. Providing overnight care services while an application is 'in process' means operating without the required authorization — the license requirement is current, not retrospective. AAAHC surveys do review compliance with applicable state licensure requirements.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 20, Standard A",
      tutor: {
        whyCorrect:
          "State licensure is a baseline operating requirement. Providing services that require a license before obtaining it exposes patients to a gap in regulatory oversight and the ASC to legal liability.",
        whyWrong: {
          A: "Good faith is not the standard — compliance requires the license to be in hand, not in process.",
          C: "AAAHC accreditation reviews compliance with applicable laws and regulations, including state licensure requirements.",
          D: "There is no grace period or duration threshold before the standard applies.",
        },
        operationalContext:
          "Before initiating overnight care services, confirm with your state health department whether a separate license is required and obtain it before the first patient is kept overnight. File the license with the CLIA certificate and other regulatory documents.",
      },
    },
    {
      id: "asc_over_02",
      question:
        "An ASC keeps a patient overnight after a complex orthopedic procedure. At 2:00 AM, a licensed practical nurse (LPN) is the only clinical staff present. The operating surgeon is available by phone. Is this compliant with Chapter 20?",
      options: [
        "Compliant — the LPN's presence plus physician phone availability satisfies both overnight staffing requirements",
        "Non-compliant — Standard B requires at least one registered nurse on duty whenever overnight care patients are present; an LPN does not fulfill the RN requirement",
        "Compliant — LPNs may fulfill the RN requirement when a physician is available by phone",
        "Compliant — the staffing requirement applies only during daytime hours",
      ],
      correctIndex: 1,
      explanation:
        "Standard B element 6 specifically requires at least one registered nurse on duty whenever patients are present in overnight care — not just a licensed nurse. An LPN does not satisfy this requirement. The physician availability requirement (element 5) is a separate, additional requirement — meeting one does not compensate for failing the other.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 20, Standard B",
      tutor: {
        whyCorrect:
          "The RN requirement reflects the higher assessment and independent clinical judgment capabilities of registered nurses — especially important overnight when physician response times may be longer and patient status changes more subtle.",
        whyWrong: {
          A: "The two requirements are additive — both an RN on duty AND physician availability are required. LPN + physician phone does not fulfill both.",
          C: "The standard specifies registered nurse. LPNs are not interchangeable with RNs for this requirement.",
          D: "The staffing requirement applies continuously — 24 hours a day — whenever patients are present.",
        },
        operationalContext:
          "Build your overnight staffing schedule to ensure RN coverage is never broken. If your RN pool is limited, consider a shared staffing agreement with a nearby facility. Document the overnight staffing assignments and log the RN on duty each night patients are present.",
      },
    },
    {
      id: "asc_over_03",
      question:
        "An ASC's written overnight care policy covers admission criteria, clinical responsibilities, emergency services, transfer arrangements, and staffing requirements. A surveyor asks about isolation procedures for patients admitted with a communicable disease. The administrator says, 'We haven't put that in writing — we'd just call the surgeon.' What is the finding?",
      options: [
        "No finding — verbal protocols for rare events are acceptable when documented in clinical practice",
        "Standard-level finding — Standard D requires written policies addressing isolation procedures for patients with suspected or diagnosed communicable diseases; the absence of this written policy is a citation even if other policy elements are present",
        "No finding — isolation procedures are covered under the infection prevention chapter and do not need to be restated in overnight care policies",
        "No finding — the standard only requires isolation policies if the ASC has previously admitted a patient with a communicable disease",
      ],
      correctIndex: 1,
      explanation:
        "Standard D lists six required areas for overnight care written policies, and isolation procedures for communicable diseases is one of them. All six must be addressed in writing. The fact that five of the six are covered does not excuse the sixth. 'We'd call the surgeon' is a verbal plan, not a written policy.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 20, Standard D",
      tutor: {
        whyCorrect:
          "Isolation procedures must be defined before an event occurs — not improvised in the moment when a patient presents with a communicable illness overnight. Written policies ensure all overnight staff know what to do without waiting for physician direction.",
        whyWrong: {
          A: "Verbal protocols do not constitute written policies. Standard D requires written policies.",
          C: "Each chapter's requirements are independent. The overnight care chapter requires isolation policies specific to the overnight setting.",
          D: "Written policies must exist prospectively — before events occur. Experience is not a prerequisite.",
        },
        operationalContext:
          "Add an isolation section to your overnight care policies covering: which rooms or areas would be used for isolation, PPE requirements for overnight staff, who to notify, when to consider transfer, and how the clinical record will document the isolation decision.",
      },
    },
    {
      id: "asc_over_04",
      question:
        "An ASC nurse is reviewing an overnight patient's chart the morning after surgery. The chart has the operative note, anesthesia record, and PACU record, but no nursing notes from the overnight period and no discharge follow-up instructions. The nurse says, 'The patient was stable — nothing happened.' What is the finding?",
      options: [
        "No finding — the absence of overnight events supports that nursing notes were not necessary",
        "Standard-level finding — Standard F requires clinical records for overnight patients to include nursing notes and follow-up instructions; stable patients still require documentation of assessments and discharge planning",
        "No finding — nursing notes are required only when a clinical event occurs overnight",
        "No finding — the operative and PACU records cover the clinical record requirement for overnight patients",
      ],
      correctIndex: 1,
      explanation:
        "Standard F requires overnight care clinical records to include nursing notes and follow-up instructions — in addition to H&P and treatment orders. 'Nothing happened' is not documented anywhere if there are no nursing notes. Nursing notes document that assessments were performed and the patient was monitored, not only that something went wrong. Follow-up instructions are required at discharge regardless of how uneventful the night was.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 20, Standard F",
      tutor: {
        whyCorrect:
          "Nursing notes in overnight care serve two purposes: they document active monitoring (vital signs, pain, neurovascular status) and they create a legal record that the patient was observed. 'Stable' must be documented — it cannot be assumed from the absence of notes.",
        whyWrong: {
          A: "The standard requires nursing notes regardless of patient stability. Their absence means monitoring cannot be demonstrated.",
          C: "Nursing notes are required as a routine component of overnight care documentation — not only when events occur.",
          D: "The operative and PACU records document the surgical episode. Overnight care requires its own separate clinical documentation.",
        },
        operationalContext:
          "Create an overnight care nursing documentation form with timed assessment entries (e.g., every 2 hours) for vital signs, pain, fluid status, and overall condition. Pre-print discharge instruction sheets for overnight care patients and require completion before discharge with a copy in the chart.",
      },
    },
    {
      id: "asc_over_05",
      question:
        "An ASC provides overnight care and tracks patient outcomes internally in a quality log maintained by the director of nursing. The governing body has never seen overnight care data — the director considers it an operational matter. What is the compliance issue?",
      options: [
        "No issue — operational quality data is appropriately managed at the director level without governing body involvement",
        "Standard-level finding — Standard I requires evidence that overnight care is reviewed as part of the ASC's quality management and improvement program, which includes governing body review",
        "No issue — Standard I only requires overnight care to be reviewed annually, and the log satisfies that requirement",
        "No issue — governing body review of overnight care data is recommended but not required by Standard I",
      ],
      correctIndex: 1,
      explanation:
        "Standard I requires evidence that overnight care and services are reviewed as part of the organization's quality management and improvement program. In AAAHC's model, the quality management program reports to the governing body. Data that never reaches the governing body is not part of the QM program for compliance purposes — it is operational information siloed at the management level.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 20, Standard I",
      tutor: {
        whyCorrect:
          "Quality management programs in AAAHC accreditation are defined by governing body oversight. Data that the governing body never sees cannot be said to be reviewed as part of the quality program — review requires the data to reach the decision-making body.",
        whyWrong: {
          A: "The AAAHC quality program model is not operational — it is governance-based. Governing body oversight is required.",
          C: "The standard requires integration into the quality management program, which means governing body presentation — not just internal tracking.",
          D: "Standard I is a compliance requirement, not a recommendation.",
        },
        operationalContext:
          "Create a quarterly overnight care quality summary (patient volume, adverse events, near-misses, compliance with staffing standards) and present it as a standing agenda item in governing body quality meetings. Document in meeting minutes that overnight care was reviewed and any actions taken.",
      },
    },
  ],
};
