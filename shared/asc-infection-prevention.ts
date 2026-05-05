import type { Level } from "./schema";

export const ascInfectionPreventionLevel: Level = {
  id: "asc_infection_prevention_safety",
  module: "asc",
  name: "Infection Prevention and Safety",
  description: "ASC infection prevention and safety — written program, qualified IP director, sterilization processes, sharps, hazardous materials, BLS coverage, recalls, and the CMS Infection Control Surveyor Worksheet.",
  icon: "ShieldCheck",
  color: "hsl(152, 70%, 40%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Infection Prevention and Control and Safety",
    plainLanguageSummary:
      "This chapter covers two intertwined responsibilities: keeping infections from spreading, and keeping the building and the people in it safe. CMS surveyors arrive with the ASC Infection Control Surveyor Worksheet in hand and walk the facility looking for hand hygiene compliance, safe injection practice, sterilization workflows that match manufacturer instructions, properly placed and replaced sharps containers, accurate temperature monitoring of refrigerated drugs, BLS-certified staff present whenever patients are present, and a hazardous-materials program that actually controls labeling, storage, transport, and disposal. The whole program must be written, governing-body approved, risk-assessment driven, integrated with QI, and led by a designated and trained infection preventionist.",
    keyOperationalExpectations: [
      "Written infection prevention and control program is approved by the governing body, built on a documented risk assessment, and uses nationally recognized guidelines (e.g., CDC, WHO).",
      "A designated, qualified infection preventionist with documented training and current competence directs the program.",
      "Hand hygiene and safe injection practices are taught, audited, and enforced per CDC/WHO guidance and the manufacturer's IFU for hand hygiene products.",
      "Cleaning, decontamination, high-level disinfection, and sterilization follow manufacturer IFU and national standards; biological + chemical indicators are used; failed loads have a written process; sterile packs are stored to maintain sterility.",
      "Sharps containers are puncture-resistant, secured, in correct locations, and replaced at the manufacturer's fill line — never overfilled.",
      "Continuous temperature monitoring of refrigerated/frozen/heated items with logs and a clear out-of-range action plan known to the staff doing the monitoring.",
      "BLS-certified personnel present whenever patients are present, with current certifications on file and competency in cardiac/emergency equipment documented.",
      "Recall, expired-product, and hazardous-materials policies cover identification, notification, response, disposition, and (for recalls) patient notification when applicable.",
    ],
    commonRiskPoints: [
      "Single-dose vials being reused for multiple patients, or insulin pens shared across patients (a CDC outbreak driver and a frequent ASC citation).",
      "Sharps containers overfilled past the fill line, mounted at the wrong height, or not secured from tampering.",
      "Refrigerator temperature logs showing only 'in range' check marks with no documented action when an excursion happened.",
      "Sterile packs stored in a way that crushes wrappers or in rooms without controlled temperature/humidity, breaking the sterility assurance.",
      "Vendor reps providing the only training on a new device — accreditation standards and infection-prevention best practice expect a competent ASC staff trainer (often the IP nurse or educator) to validate competency, with the rep as a supplemental resource only.",
    ],
    cmsTags: [
      "42 CFR 416.51",
      "Q-0240",
      "Q-0241",
      "Q-0242",
      "Q-0243",
      "Q-0244",
      "Q-0245",
      "Q-0246",
      "Q-0110",
    ],
  },
  studyMaterial: [
    {
      title: "What Must an ASC's Written Infection Prevention and Control Program Include?",
      content:
        "An ASC must have a written infection prevention and control program that is approved by the governing body and is grounded in a documented infection prevention risk assessment specific to the facility. The program must adopt nationally recognized infection control guidelines (CDC is the most common reference), be integrated into the ASC's quality improvement program through surveillance and monitoring, and comply with all applicable state, federal, and tribal requirements (including OSHA bloodborne pathogen standards).",
      keyPoint:
        "Written + governing-body approved + risk-assessment driven + nationally recognized guidelines + integrated with QI + OSHA-compliant. Missing any of those is a citation risk.",
    },
    {
      title: "What Qualifications Must the Designated Infection Preventionist Have?",
      content:
        "The IPC program must be directed by a designated and qualified professional with training in infection control. The chart-of-record needs documentation that the assigned person has obtained IP training and demonstrates current competence — not just a job title. For most ASCs this is an RN with APIC training or equivalent; the role can be part-time but the documentation must be real.",
      keyPoint:
        "A designated person with documented IP training and current competence — title alone is not enough.",
    },
    {
      title: "What Standards Govern Hand Hygiene and Safe Injection Practices at an ASC?",
      content:
        "Education and active surveillance must follow CDC, WHO, or other nationally recognized guidelines for hand hygiene and CDC guidelines for safe injection practices. A written hand hygiene policy must specify use of products according to the manufacturer's IFU. Safe injection practice failures — single-dose vial reuse, shared insulin pens, IV bag spiking through a contaminated port — are among the most cited and most patient-harmful findings in ASC surveys.",
      keyPoint:
        "Hand hygiene per CDC/WHO and product IFU; safe injection per CDC. Single-dose means single patient. Insulin pens are patient-specific.",
    },
    {
      title: "What Must a Compliant Sterilization and Reprocessing Program Include?",
      content:
        "Cleaning, decontamination, high-level disinfection, and sterilization must adhere to nationally recognized guidelines, the manufacturer's IFU, and state/federal requirements. Internal/external chemical indicators and biological indicators must be used. There must be a written process for items that fail to meet HLD or sterilization parameters. Sterile packs must be handled and stored to maintain their sterility (controlled temperature/humidity, no crushing, no exposure to wet/dirty conditions). Reprocessing of single-use devices is allowed only under FDA 510(k) clearance, in-house only if the ASC is FDA-registered, otherwise via an FDA-registered third party.",
      keyPoint:
        "IFU + national guidelines + chemical and biological indicators + written failure process + sterility-preserving storage. Single-use reprocessing requires FDA 510(k).",
    },
    {
      title: "What Are the Requirements for Sharps Containers and Hazardous Materials Management?",
      content:
        "Intact needles and syringes must be disposed of in puncture-resistant sharps containers per state and federal guidelines. Containers must be in appropriate care areas, secured from tampering, replaced at the fill line, and handled, stored, and disposed of per regulation. Hazardous materials and waste — solid, liquid, gas — must be properly labeled, managed, and disposed of in accordance with prevailing law, and the staff responsible must be able to demonstrate they know those laws.",
      keyPoint:
        "Sharps: puncture-resistant, correct location, secured, replaced at fill line. Haz materials: labeled, managed per law, with staff who can speak to the rules.",
    },
    {
      title: "Who Must Be Present Whenever Patients Are in the ASC?",
      content:
        "Personnel trained in BLS and the use of cardiac and emergency equipment must be present in the facility whenever patients are present. Personnel files must document current BLS certification and training in the use of cardiac/emergency equipment. A written policy must require trained, currently certified personnel to be on site during patient care.",
      keyPoint:
        "Whenever patients are present, BLS-certified staff trained on emergency equipment must be on site — and the documentation must back it up.",
    },
    {
      title: "What Must a Written Recall Policy Cover?",
      content:
        "Written recall policy must cover sources of recall information (FDA, CDC, manufacturer), staff notification, identification of whether the recalled item is in stock or was administered to patients, response, disposition/return, and patient notification when applicable. Products with manufacturer expiration dates must be monitored and disposed of per facility policy and manufacturer guidance. Refrigerated, frozen, and heated items must have continuous temperature monitoring with logs, accessible recommended ranges, and trained staff who know what to do when temperatures fall out of range.",
      keyPoint:
        "Recalls: source → notify → identify exposure → respond → dispose → notify patients if needed. Temps: continuous monitoring + accessible ranges + trained out-of-range response.",
    },
    {
      title: "What Must Happen Before a New Device Is Used in Patient Care?",
      content:
        "Before a newly acquired device or product is used in patient care, appropriate clinical education must be provided to the intended operators. A designated person is responsible for ensuring this happens. Vendor representatives may participate, but vendor reps may NOT be the sole source of clinical education — the ASC must have its own internal clinical sign-off on competency.",
      keyPoint:
        "New device = pre-use training = designated owner. Vendor rep alone is not enough; the ASC must own the competency check.",
    },
    {
      title: "What Must Staff Do When a Patient Presents With a Possible Communicable Disease?",
      content:
        "Standard F under the IPC subchapter requires written policies that tell front-desk and clinical staff exactly what to do when a patient presents with a possible communicable disease — varicella vesicles in the waiting room, suspected active TB cough on intake, a febrile rash on a pediatric pre-op. The policy must define how the patient is isolated or referred for appropriate care, who notifies the surgeon and the IP director, and how reportable conditions are escalated to the state or local public health authority. There also has to be a written policy identifying who is authorized in patient care areas (no roaming vendors or family members in the OR core) and surveillance activities aimed at minimizing sources and transmission.",
      keyPoint:
        "If a surveyor asks 'show me what registration does when a patient walks in coughing blood,' you should hand over a one-page communicable disease triage SOP — not improvise.",
    },
    {
      title: "What Are the Four Cleaning Moments Required in Written Environmental Cleaning Policies?",
      content:
        "Written cleaning policies have to address four moments: cleaning before first use of the day, cleaning between every patient/case turnover, terminal cleaning at a frequency tied to how the area is used, and the requirement that EVS staff use the cleaning/disinfectant product per the manufacturer's IFU (correct dilution, correct contact/dwell time, correct surface). Surveyors will pull the SDS, look at the bottle, time the dwell, and watch a turnover. The most common citation is staff wiping surfaces dry before the contact time has elapsed, which means the disinfectant never actually killed anything.",
      keyPoint:
        "Cleaning compliance lives or dies on dwell time. If the wet-time on the label is 3 minutes, the surface stays visibly wet for 3 minutes — period.",
    },
    {
      title: "What OSHA Requirements Must the ASC's Safety Program Address?",
      content:
        "Standards N, O, P, and Q under the Safety subchapter pull together everything OSHA already requires for healthcare workers: a written exposure control plan reviewed and updated at least annually (including evaluation of safer engineered sharps), a Hepatitis B vaccination program offered to at-risk staff, post-exposure evaluation and treatment protocols, an immunization program tied back to the IP risk assessment, a TB detection and prevention plan that follows local public health authority requirements (or CDC if no local rule exists), and a documented investigation/recordkeeping process for any work injury or illness. The governing body has to approve these policies (Q-0246, 42 CFR 416.51(c)).",
      keyPoint:
        "OSHA + CDC + governing-body approval. Pull the exposure control plan and ask: when was it last reviewed, and did the review include safer-sharps evaluation? If the answer is 'three years ago,' you have a finding.",
    },
    {
      title: "Construction, Renovation, and the ICRA",
      content:
        "The Safety subchapter requires a proactive, documented risk assessment BEFORE any demolition, construction, or renovation while the facility is occupied — not just OR-area work. The assessment has to identify risks to occupant health and safety (dust migration, HVAC pressurization changes, water shutoffs affecting hand hygiene, noise, debris paths), the mitigation steps (barriers, negative pressure, HEPA, after-hours work), and the monitoring plan during the project, with an update mechanism if scope changes. This is also where the Infection Control Risk Assessment (ICRA) lives — the IP director, facilities lead, and safety officer should jointly sign the document before crews break ground.",
      keyPoint:
        "If construction is happening with patients in the building and there is no signed pre-construction/ICRA document, that is a Standard-level finding regardless of how 'isolated' the work area looks.",
    },
  ],
  questions: [
    {
      id: "asc_ip_1",
      question:
        "A surveyor reviews the ASC's infection prevention program and finds it is written, approved by the governing body, and references CDC guidelines. The risk assessment, however, is from the original 2018 build of the facility. The ASC has added two ORs and a GI suite since then. Does this meet the requirement?",
      options: [
        "Yes — the program is written, approved, and references nationally recognized guidelines",
        "No — the IPC program must be relevant to the current organization as demonstrated by a current, formal documented infection prevention risk assessment",
        "Yes — risk assessments are recommended but not required",
        "No — risk assessments must be performed every six months",
      ],
      correctIndex: 1,
      explanation:
        "An element of compliance under the IPC standard is that the program be 'relevant to the organization as demonstrated by a formal, documented infection prevention risk assessment.' A risk assessment that predates major service changes does not demonstrate relevance to the current operation.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0240 (42 CFR 416.51)",
      tutor: {
        whyCorrect:
          "The standard requires that the IPC program be relevant to the current organization, evidenced by a formal documented risk assessment. Adding ORs and a GI suite changes the risk profile (new instrument loads, new endoscope reprocessing, possibly different sterilization equipment), so the original assessment no longer covers the current state of the facility.",
        whyWrong: {
          A: "Three of the four required elements (written, governing-body approved, nationally recognized guidelines) are present, but the relevance/risk-assessment element is not. All elements are required.",
          C: "The risk assessment is required, not recommended — it is an enumerated element of compliance.",
          D: "The rule does not specify a six-month cadence. It requires that the risk assessment be relevant to the current operation, which generally means refresh after material service changes and periodically.",
        },
        operationalContext:
          "Refresh the IP risk assessment annually and after any material change (new service line, new device platform, construction, outbreak). Date the document and have the IP director and governing body sign it.",
      },
    },
    {
      id: "asc_ip_2",
      question:
        "An ASC's infection preventionist is the OR manager, who completed an APIC online introduction course in 2019 and has not done any IP-specific training since. What is the most defensible position to take with a surveyor?",
      options: [
        "The 2019 training is permanent and demonstrates competence indefinitely",
        "The IP director must have documented evidence of training AND demonstrated current competence in infection prevention and control",
        "Only an RN with a bachelor's degree may serve as IP director",
        "Vendor-provided device training counts as IP training",
      ],
      correctIndex: 1,
      explanation:
        "An element of compliance is that the assigned person has documented evidence of training in IP AND demonstrates current competence. A single course from years ago, without ongoing competency demonstration, will not satisfy the surveyor.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0243 (42 CFR 416.51(b)(1))",
      tutor: {
        whyCorrect:
          "The rule has two paired requirements: training obtained AND current competence demonstrated. Both must be on the chart of record. Annual refreshers, attending the APIC conference, completing CBIC modules, conducting audits, and authoring the IP risk assessment are all evidence the surveyor will accept.",
        whyWrong: {
          A: "The rule explicitly requires demonstration of current competence — it is not a one-time qualification.",
          C: "The rule does not specify a degree level or licensure type for the IP director, just qualified training and current competence.",
          D: "Vendor device training is product-specific and does not substitute for IP-specific training.",
        },
        operationalContext:
          "Build an annual IP director competency packet: dated training certificates, audit summaries authored, risk assessment authored, in-services delivered. Two pages of evidence beats a single 2019 certificate.",
      },
    },
    {
      id: "asc_ip_3",
      question:
        "A scrub tech draws up 4 mL of preservative-free lidocaine from a 5 mL single-dose vial for one patient, then sets the vial aside. Twenty minutes later, on the next case, she pulls the remaining 1 mL from that vial for a second patient. Is this acceptable practice?",
      options: [
        "Acceptable — single-dose vials may be used until empty if a new needle and syringe are used",
        "Acceptable if the vial is wiped with alcohol between draws",
        "Not acceptable — single-dose vials are intended for one patient and one procedure; CDC safe injection practice and the FDA labeling preclude reuse across patients",
        "Acceptable only if the vial is refrigerated between uses",
      ],
      correctIndex: 2,
      explanation:
        "Single-dose vials are labeled and intended for a single patient and a single procedure. CDC safe injection practice guidance, which the IPC program must adopt, explicitly prohibits using single-dose vials across patients. Multiple ASC outbreaks have been traced to this exact practice.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0242 (Safe Injection Practices)",
      tutor: {
        whyCorrect:
          "Single-dose vials lack preservatives and FDA-cleared microbial inhibitors. Once entered, they pose a contamination risk if used for a second patient — and the FDA labeling, USP <797>, and CDC One & Only Campaign all preclude that practice. This is one of the most common ASC citations and one of the documented sources of patient-to-patient hepatitis transmission in outpatient settings.",
        whyWrong: {
          A: "Changing the needle and syringe does not change the contamination risk to the contents of the vial. The vial itself is the issue.",
          B: "Alcohol on the stopper does not protect against contamination introduced into the contents of the vial.",
          D: "Refrigeration does not change the single-patient labeling. The vial is still single-use.",
        },
        operationalContext:
          "Stock smaller-volume single-dose vials when possible, and treat the leftover volume as wasted. Document waste consistent with controlled-substance and pharmacy policy. Audit OR med tray practice quarterly.",
      },
    },
    {
      id: "asc_ip_4",
      question:
        "A surveyor walks into a procedure room and sees a wall-mounted sharps container that is filled past the marked fill line, with an exposed needle protruding from the top. The container is mounted at adult eye level. What is the most significant problem?",
      options: [
        "The mounting height — sharps containers should be at waist height for ergonomic reasons",
        "The container must be replaced when the fill line is reached and must be secured from tampering — the protruding sharp is both a needlestick risk and a regulatory violation",
        "Sharps containers may be filled to the top as long as the lid will still close",
        "Only OSHA, not AAAHC, addresses sharps container fill levels",
      ],
      correctIndex: 1,
      explanation:
        "The sharps injury prevention standard requires replacement of containers when the fill line is reached and placement secured from tampering. A protruding sharp violates both elements and creates an immediate needlestick risk to staff and any patient who could reach the area.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Sharps Injury Prevention Program",
      tutor: {
        whyCorrect:
          "Two enumerated elements of the sharps injury prevention program are violated here: replacement at the fill line, and securing the container from tampering. A protruding sharp is also a direct OSHA needlestick concern under the Bloodborne Pathogen Standard. The mounting height itself is not the primary issue, but adult eye level can be a usability problem in pediatric-adjacent settings.",
        whyWrong: {
          A: "Mounting height has manufacturer recommendations (typically 52–56 inches to the top of the opening for adult settings) but the actual problem is the overfill and the protruding sharp.",
          C: "Sharps containers must be replaced at the manufacturer's marked fill line, not at the top. Compressing or overfilling them defeats the puncture-resistance and creates needlestick risk.",
          D: "Both OSHA and AAAHC address sharps. The AAAHC standard explicitly enumerates fill-line replacement.",
        },
        operationalContext:
          "Add a daily turnover-room walkthrough that includes a sharps container check. Train environmental services and clinical staff that the fill line means swap, not 'almost time to swap.'",
      },
    },
    {
      id: "asc_ip_5",
      question:
        "An ASC's medication refrigerator log shows daily temperature check marks for 90 consecutive days. On day 67, the morning temperature is logged at 47°F, well above the recommended 36–46°F range. The next day's log resumes normal readings. There is no entry describing what happened. What is the deficiency?",
      options: [
        "There is no deficiency — temperatures naturally fluctuate",
        "Temperature monitoring requires not only logs but documentation that staff knew and acted on what to do when readings fall outside the recommended range",
        "The refrigerator must be replaced if any single reading exceeds 46°F",
        "Temperatures only need to be monitored weekly",
      ],
      correctIndex: 1,
      explanation:
        "An element of compliance is that staff performing temperature monitoring have been trained on what to do if the temperature falls outside the recommended range. A logged excursion with no documented response shows the action plan was not followed and undermines confidence in the medication's stability.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Temperature Monitoring (Standard H)",
      tutor: {
        whyCorrect:
          "The temperature monitoring standard has four elements: a continuous monitoring mechanism, logs, accessible recommended ranges, and trained staff response to out-of-range readings. The 47°F reading triggered the response requirement, and the absence of any documented action shows that element is not being met. Surveyors reading the log will also question medication stability — were the meds quarantined? Pharmacy notified? Patients dosed from this stock?",
        whyWrong: {
          A: "Excursions are not 'natural fluctuation' — they trigger the documented action plan. Repeated unaddressed excursions are also a sign the equipment or environment is failing.",
          C: "The standard does not require equipment replacement on a single excursion. It requires a documented response per the facility's policy (often: quarantine, stability check with manufacturer, repair or replacement decision).",
          D: "Continuous monitoring is required. Daily checks are the minimum manual cadence and many ASCs use continuous data loggers to capture overnight excursions.",
        },
        operationalContext:
          "Switch to a continuous monitoring solution with text alerts for excursions. Build a one-page action SOP posted on the fridge: pull stock, contact pharmacy/IP, document, replace logger battery if relevant. Audit monthly.",
      },
    },
    {
      id: "asc_ip_6",
      question:
        "A sterilization load fails its biological indicator. The tech sets the load aside and notifies SPD. There is no written process describing how to handle a failed load. What is the compliance gap?",
      options: [
        "No gap — verbal notification and quarantine are sufficient",
        "A written policy must address the identification and processing of medical equipment and instruments that fail to meet high-level disinfection or sterilization parameters",
        "Failed loads should be reprocessed without notifying anyone — they are routine",
        "Biological indicators are not required in ASC sterilization",
      ],
      correctIndex: 1,
      explanation:
        "An element of compliance is that a written policy address identification and processing of items that fail to meet HLD or sterilization parameters. The actual response can vary, but it must be written, repeatable, and trainable.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Sterilization (Standard D, element 3)",
      tutor: {
        whyCorrect:
          "The rule explicitly requires a written policy for failed loads. It does not dictate the exact recall pathway, but it requires that the ASC have a documented, trainable process: quarantine the load, identify any items already used since the last passing BI, recall affected patients/instruments, document the failure, investigate root cause (operator error, equipment failure, BI defect), and clear before resuming.",
        whyWrong: {
          A: "Verbal notification and quarantine of one load is a one-time response. The standard requires a written policy that applies every time and is auditable.",
          C: "Failed BIs are not routine; they are sentinel events. They require investigation and (potentially) recall of items processed since the last passing BI.",
          D: "Biological indicators ARE required — the rule explicitly enumerates 'internal and external indicators, including biological indicators.'",
        },
        operationalContext:
          "Adopt or write a Failed Load SOP that includes: immediate quarantine, recall back to last passing BI, root-cause investigation (often the cycle parameters or the BI vial), written documentation, and a sign-off before reuse of the autoclave.",
      },
    },
    {
      id: "asc_ip_7",
      question:
        "Sterile packs are stored in an open shelving unit in a hallway adjacent to the OR. Hallway temperature and humidity are not monitored. Packs are stacked four-high with the bottom packs visibly compressed. What is the primary infection prevention concern?",
      options: [
        "There is no concern as long as the packs are wrapped",
        "Sterile packs must be handled and stored to maintain their sterility — uncontrolled environment and pack compression both compromise sterility assurance",
        "Open shelving is mandatory for air circulation",
        "Stacking four-high is the OSHA limit",
      ],
      correctIndex: 1,
      explanation:
        "An element of compliance is that observation confirms sterile packs of equipment and instruments are handled and stored to maintain their sterility. Compressed packs lose their wrap integrity, and uncontrolled environment risks moisture and contamination.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Sterilization (Standard D, element 6)",
      tutor: {
        whyCorrect:
          "Sterility maintenance has three components: physical handling (no compression, no dropping, no wet exposure), environment (controlled temperature/humidity, away from contaminating sources), and the wrap/container integrity (intact, labeled, dated, indicators visible). Compressed packs in an unmonitored hallway fail the first two and call the third into question.",
        whyWrong: {
          A: "Wrapping is necessary but not sufficient. A wrapped pack that has been crushed or exposed to humidity is no longer sterile.",
          C: "Open shelving is one option, but it does not eliminate the need for environmental control. Closed cabinets are also acceptable if ventilated and clean.",
          D: "There is no OSHA four-high rule. The compression observed here was the issue, not the count itself.",
        },
        operationalContext:
          "Move sterile storage into a controlled room with monitored T/RH (typically ≤75°F and 30–60% RH), use proper rack spacing, limit stack height per the wrap manufacturer's guidance, and rotate FIFO with date and load labels visible.",
      },
    },
    {
      id: "asc_ip_8",
      question:
        "An ASC schedules a half-day procedure block on a Saturday. The administrator decides to staff with a CRNA, surgeon, and a recovery RN. The recovery RN's BLS certification expired three weeks ago. Renewal is scheduled for the following Tuesday. May the case proceed?",
      options: [
        "Yes — only the surgeon needs current BLS",
        "Yes — a three-week lapse is within the grace period",
        "No — personnel trained in basic life support and the use of cardiac and emergency equipment must be present in the facility when patients are present, with current certifications documented",
        "Yes — the CRNA's ACLS substitutes for the RN's BLS",
      ],
      correctIndex: 2,
      explanation:
        "The CMS Condition for Coverage requires personnel trained in BLS and the use of cardiac and emergency equipment to be present when patients are present, with documented current certification. A lapsed certification does not satisfy the rule, regardless of the renewal schedule.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0110 (42 CFR 416.44(e))",
      tutor: {
        whyCorrect:
          "The rule requires current certification documented in the personnel file and a policy that requires currently certified staff to be present with patients. A three-week lapse is not 'current,' and surveyors will pull personnel files to verify dates. The right answer is to either get the recovery RN recertified before the case or substitute another currently certified RN.",
        whyWrong: {
          A: "All clinical staff present during patient care should have current BLS, not just the surgeon. Recovery RNs are often the first responders to PACU events.",
          B: "There is no formal grace period. The certification is either current or it is not.",
          D: "ACLS includes the BLS skill set, but the certifications are tracked separately and the requirement is that each individual's documented training is current — you cannot 'cover' someone else's lapse with your own ACLS.",
        },
        operationalContext:
          "Set BLS expiration alerts at 90, 60, and 30 days. Many ASCs require BLS renewal at 60 days out, before the cert lapses, so a missed class does not knock anyone off the schedule.",
      },
    },
    {
      id: "asc_ip_9",
      question:
        "The materials manager learns of a Class II FDA recall for a brand of surgical mesh that the ASC has used in the past 12 months. What does the recall policy need to address, at minimum?",
      options: [
        "Disposal only — recalls are handled by the manufacturer",
        "Notification of staff only — patient notification is the surgeon's choice",
        "Sources of recall information, staff notification, identification of whether the recalled item is in stock or was administered to patients, response, disposition/return, and patient notification as appropriate",
        "Only that the product is removed from inventory",
      ],
      correctIndex: 2,
      explanation:
        "The recall policy must address all six enumerated elements: sources of recall information (FDA, CDC, manufacturers, other), staff notification, identification of whether the product is in stock or has been administered/given, response, disposition/return, and patient notification as appropriate.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Recall Policy (Standard E)",
      tutor: {
        whyCorrect:
          "The recall standard explicitly enumerates these six elements. For an implanted device recall in particular, the patient-notification element is critical — there may be a population of patients who received the recalled mesh and need to be contacted for surveillance or, in serious cases, follow-up.",
        whyWrong: {
          A: "Disposal alone fails to address staff notification, patient identification (who got the device), response, and patient notification.",
          B: "Patient notification is part of the policy when appropriate — it is not entirely at the surgeon's discretion. The ASC has its own institutional obligation under the recall standard.",
          D: "Removal from inventory is a piece, but the rule covers the broader life cycle including patient identification and notification.",
        },
        operationalContext:
          "Subscribe to FDA MedWatch and ECRI alerts. Have a one-page recall response SOP that walks through the six elements with sign-offs. Maintain a patient registry by lot number for implantables so look-back is fast.",
      },
    },
    {
      id: "asc_ip_10",
      question:
        "A vendor representative comes to the ASC to introduce a new electrosurgical generator. The OR manager attends and signs off the staff as competent based on the rep's demonstration. No internal in-service is held. Is this acceptable?",
      options: [
        "Acceptable — vendor reps are the device experts",
        "Acceptable — as long as the rep's slides are filed",
        "Not acceptable — vendor representatives are not used as the sole source for clinical education; a designated person must ensure that clinical education occurs prior to use of new devices",
        "Acceptable if the vendor signs the sign-off form",
      ],
      correctIndex: 2,
      explanation:
        "An element of compliance is that vendor representatives are not used as the sole source for clinical education, and a designated person at the ASC must be responsible for ensuring clinical education occurs prior to use of new devices.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "New Device Education (Standard L)",
      tutor: {
        whyCorrect:
          "The rule has two specific elements: a designated owner of the pre-use education process, and a prohibition on relying on vendor reps as the sole source. Vendors typically do an excellent product demo, but ASC clinical leadership must own the competency check, the sign-off, and the integration with facility protocols (electrosurgical safety, fire risk, monopolar vs. bipolar default settings, dispersive pad placement).",
        whyWrong: {
          A: "Vendors are device experts but not the right party to sign off on staff competency in the ASC's own workflow.",
          B: "Filing slides does not satisfy the requirement for an internal designated owner and an internal competency sign-off.",
          D: "Vendor signature does not transfer the competency-assurance obligation away from the ASC's designated person.",
        },
        operationalContext:
          "Build an internal new-device checklist: vendor demo + clinical educator review + return-demo by each operator + signed competency record before first patient use.",
      },
    },
    {
      id: "asc_ip_11",
      question:
        "An ASC sends rigid endoscopes to a third-party reprocessor between cases when in-house reprocessing is backlogged. The materials manager has not verified the third party's FDA registration. What is the compliance issue?",
      options: [
        "There is no issue — third-party reprocessors are exempt from FDA oversight",
        "If a third-party reprocessor is used, documentation must demonstrate that the reprocessor is FDA-registered",
        "Third-party reprocessing is prohibited entirely",
        "The issue is timing only — turnaround should be under 24 hours",
      ],
      correctIndex: 1,
      explanation:
        "The reprocessing standard requires that, if a third-party reprocessor is used, documentation demonstrate the reprocessor is FDA-registered. This is a documentation requirement; surveyors will ask to see the registration on file.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Reprocessing (Standard J, element 2)",
      tutor: {
        whyCorrect:
          "The standard explicitly requires documentation that any third-party reprocessor is FDA-registered. The ASC must keep a copy of the registration on file and verify it is current, especially for reprocessing of single-use devices under FDA 510(k) clearance.",
        whyWrong: {
          A: "Third-party reprocessors are subject to FDA oversight, and the ASC has its own obligation to verify registration.",
          C: "Third-party reprocessing is allowed when the reprocessor is FDA-registered. It is not prohibited as a category.",
          D: "Turnaround time is operationally important but not the regulatory issue. The regulatory issue is the registration documentation.",
        },
        operationalContext:
          "Add the FDA registration certificate and the renewal date to the vendor file. Re-verify annually and at contract renewal.",
      },
    },
    {
      id: "asc_ip_12",
      question:
        "A staff member notices a patient with what appears to be active varicella (chickenpox) vesicles in the waiting room. There is no written policy for managing patients with communicable diseases. What is the gap?",
      options: [
        "No gap — varicella is rare and policy is unnecessary",
        "Written policies and procedures for patients with communicable diseases must require appropriate referral of care",
        "Only TB requires a written policy",
        "The patient should be ignored to avoid embarrassment",
      ],
      correctIndex: 1,
      explanation:
        "An element of compliance under the cross-infection safeguards standard is that written policies and procedures for patients with communicable diseases require appropriate referral of care. Without a policy, staff have no defined pathway for triage, isolation, or rescheduling.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Cross-Infection Safeguards (Standard F)",
      tutor: {
        whyCorrect:
          "The standard requires a written policy that addresses appropriate referral of care for patients with communicable diseases. The ASC must have a defined triage path: identify, isolate (separate room or send to a vehicle if appropriate), notify the IP and the surgeon, decide whether to proceed or reschedule, and document. The policy must also cover notification of public health authorities for reportable conditions.",
        whyWrong: {
          A: "Even rare presentations require a policy. The standard does not exempt low-incidence diseases.",
          C: "TB has its own specific guidance, but the communicable-disease policy is broader and includes varicella, measles, COVID-era pathogens, etc.",
          D: "Ignoring the patient creates direct exposure risk to other patients and staff and violates patient rights.",
        },
        operationalContext:
          "Have a one-page Communicable Disease Triage SOP at registration: red-flag symptoms, isolation protocol, surgeon contact, reschedule pathway, and reportable condition notification (state health department).",
      },
    },
    {
      id: "asc_ip_13",
      question:
        "An ASC decides to clean and reuse single-use disposable trocars to control costs. The administrator says, \"FDA allows reprocessing if we follow proper procedures.\" Is this defensible?",
      options: [
        "Yes — FDA allows reprocessing of any single-use device",
        "Reprocessing of manufacturer-labeled single-use devices is permitted only when the device has been approved for reprocessing under FDA 510(k) clearance, and the reprocessor (in-house or third-party) is FDA-registered",
        "Yes — single-use labeling is just a manufacturer suggestion",
        "Reprocessing of single-use devices is permitted only at hospitals, not ASCs",
      ],
      correctIndex: 1,
      explanation:
        "The standard requires that reprocessing of single-use devices comply with FDA regulation and be limited to devices approved for reprocessing in accordance with FDA 510(k) clearance. In-house reprocessing requires the ASC itself to be FDA-registered; otherwise an FDA-registered third party must be used.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Reprocessing (Standard J)",
      tutor: {
        whyCorrect:
          "FDA classifies reprocessors of single-use devices as device manufacturers. Only specific device types have 510(k) clearance for reprocessing, and the reprocessor (whether in-house or third-party) must be FDA-registered. 'We clean it carefully' is not a defense — the regulation is documentation- and clearance-based.",
        whyWrong: {
          A: "FDA does NOT allow reprocessing of any single-use device. Only specific cleared devices may be reprocessed, and only by registered reprocessors.",
          C: "Single-use labeling is FDA-cleared and binding. It is not a manufacturer suggestion.",
          D: "ASCs may participate in single-use reprocessing programs, but only through registered reprocessors and only for cleared devices.",
        },
        operationalContext:
          "If cost is the driver, evaluate whether the device has 510(k) clearance for reprocessing through a registered third party (e.g., Stryker Sustainability Solutions, Innovative Health). If not, do not reprocess.",
      },
    },
    {
      id: "asc_ip_14",
      question:
        "During a tracer of a hand hygiene observation, the IP director shows the surveyor the policy: alcohol-based hand rub with at least 70% alcohol used per manufacturer instructions, with soap-and-water for visible soiling and after C. diff exposure. The surveyor asks how the staff knows this. What documentation should be present?",
      options: [
        "None — the policy itself is sufficient",
        "Documented education and active surveillance consistent with WHO/CDC hand hygiene guidelines, with the policy specifying use per manufacturer IFU",
        "A signed statement from each employee that they will wash their hands",
        "Only the manufacturer IFU posted by the sink",
      ],
      correctIndex: 1,
      explanation:
        "The standard requires education and active surveillance consistent with WHO/CDC guidelines for hand hygiene, plus a written policy outlining hand hygiene with products used per the manufacturer's IFU. Both the documentation and the audit data are part of compliance.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Hand Hygiene (Standard B, element 2/3)",
      tutor: {
        whyCorrect:
          "Three things must be present: (1) a written policy citing CDC/WHO and the product IFU, (2) documented education for all staff, and (3) active surveillance — observed compliance audits with rates trended and tied to QI. Surveyors will ask for the audit logs.",
        whyWrong: {
          A: "A policy without education and surveillance does not satisfy the rule. Surveyors expect to see compliance data.",
          C: "A signed pledge does not demonstrate education or measure compliance. The rule requires active surveillance.",
          D: "Posted IFU is helpful but not sufficient — the standard requires education and active surveillance.",
        },
        operationalContext:
          "Run monthly hand hygiene audits (20–30 observations across roles and shifts), trend the rate, post results, and feed them into the QI program. Tie the rate to the IPC report to the governing body.",
      },
    },
    {
      id: "asc_ip_15",
      question:
        "Construction crews are renovating an unused part of the ASC building while the OR continues to operate. The administrator tells the IP director, \"It's outside the OR — we don't need a risk assessment.\" Is this position defensible?",
      options: [
        "Yes — only OR-area construction triggers a risk assessment",
        "No — the safety program requires a proactive, documented risk assessment before commencing demolition, construction, or renovation while the facility is occupied",
        "Yes — risk assessments are only required after construction, not before",
        "No — only the contractor is responsible for risk assessment",
      ],
      correctIndex: 1,
      explanation:
        "The safety standard requires a proactive, documented risk assessment before commencing demolition, construction, or renovation while the facility is occupied. The risk assessment must identify potential risks to occupant health and safety, mitigation steps, and ongoing monitoring during the project.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Construction Risk Assessment (Standard B)",
      tutor: {
        whyCorrect:
          "The rule requires a proactive, documented risk assessment for any construction or renovation done in an occupied facility, regardless of how 'isolated' the work area appears. Dust migration, HVAC pressurization changes, water shutoffs, and noise affecting patient experience are all real risks that the assessment must address. This is also where ICRA (Infection Control Risk Assessment) elements live.",
        whyWrong: {
          A: "The rule applies to any demolition, construction, or renovation while the facility is occupied — not just OR-area work.",
          C: "The risk assessment must be done before starting, not after.",
          D: "The contractor has obligations, but the ASC's safety program owns the risk assessment under this standard. Joint sign-off is common; the ASC cannot delegate the obligation away.",
        },
        operationalContext:
          "Use a Pre-Construction Risk Assessment (PCRA) and ICRA template. Sign off by the IP director, facilities lead, and safety officer. Re-assess if scope changes mid-project.",
      },
    },
  ],
};
