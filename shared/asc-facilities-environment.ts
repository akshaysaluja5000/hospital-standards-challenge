import type { Level } from "./schema";

export const ascFacilitiesEnvironmentLevel: Level = {
  id: "asc_facilities_environment",
  module: "asc",
  name: "Facilities and Environment",
  description:
    "Physical plant safety, life safety code, hazardous materials, equipment maintenance, and emergency preparedness.",
  icon: "Building2",
  color: "hsl(35, 85%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Facilities and Environment",
    plainLanguageSummary:
      "Surveyors who walk a building can usually tell within ten minutes whether the facility is being run safely. Chapter 8 is about everything that supports patient and staff safety outside of the clinical procedure itself: the building permit, the fire authority sign-off, the sprinkler system, the smoke compartments, the generator, the medical gases, the emergency power, the hazardous materials inventory, the biomedical equipment PM cycle, the alcohol-based hand-rub dispensers, the evacuation routes, and the emergency preparedness plan with its quarterly drills. The Life Safety Code (NFPA 101, 2012 edition) and the Health Care Facilities Code (NFPA 99, 2012 edition) are the technical baselines, and the ASC has to be able to produce documents — not just attest verbally — for occupancy, fire authority approval, drills, equipment maintenance, generator testing, and the emergency preparedness program. The most common citations are silent ones: the missing letter, the expired permit, the drill that never happened, the PM that slipped, the sprinkler outage with no fire watch.",
    keyOperationalExpectations: [
      "Current occupancy permit and a fire authority letter or report are on file and produced on request.",
      "Emergency preparedness plan is reviewed and updated at least every two years; training and testing program reviewed annually with documented annual exercises.",
      "Scenario-based drills are conducted at least once per calendar quarter with written evaluations and follow-up actions.",
      "Biomedical equipment has a written PM and calibration program with documented per-manufacturer maintenance evidence on every regulated device.",
      "Sprinkler outages exceeding 10 hours trigger evacuation or a documented fire watch under 416.44(b)(5).",
      "Generator and emergency power systems are tested per NFPA 110 (typically weekly visual inspection and monthly load test) with logs.",
      "Hazardous materials inventory, SDS sheets, and disposal procedures are current and accessible to staff.",
    ],
    commonRiskPoints: [
      "Occupancy permit, fire-authority letter, or building-code documentation cannot be produced during the survey opening tour.",
      "Quarterly scenario-based drills are missed, undocumented, or have no written evaluation/follow-up.",
      "Biomedical PM stickers are expired on visible patient-care equipment (defibrillator, anesthesia machine, ESU, sterilizer).",
      "Generator log shows weekly visual inspections but no monthly load-bank test, or load tests with no run-time recorded.",
      "Smoke-compartment doors propped open with wedges, trash cans, or door stops during a tracer.",
      "Hazardous materials inventory does not match what is actually on the shelf, or SDS binder is out of date.",
      "Sprinkler system was offline for repairs and no fire watch was instituted or documented.",
    ],
    cmsTags: [
      "42 CFR 416.44 (Environment)",
      "42 CFR 416.54 (Emergency preparedness)",
      "Q-0100 / Q-0101 / Q-0102 (Sanitary environment, OR design, recovery room)",
      "Q-0104 through Q-0109 (Life Safety Code, NFPA 99/101, sprinkler outage, ABHR placement, emergency equipment)",
      "E-0001 through E-0042 (Emergency preparedness program elements)",
    ],
  },
  studyMaterial: [
    {
      title: "Documents you must be able to produce on day one",
      content:
        "An occupancy permit and a current fire-authority letter or report are the two foundational documents under Chapter 8 Standard A. If the surveyor opens the survey-ready binder and these are not in front of them within five minutes, the tone of the entire survey shifts. Keep originals (or signed copies) on-site, with a tickler tied to expiration dates, and never let the local fire-marshal letter age out without requesting a new inspection.",
      keyPoint:
        "If you cannot produce the occupancy permit and a current fire-authority report on demand, every other Chapter 8 finding is amplified.",
    },
    {
      title: "NFPA 101 and NFPA 99 are the floor, not the ceiling",
      content:
        "ASCs must comply with the 2012 editions of NFPA 101 (Life Safety Code) and NFPA 99 (Health Care Facilities Code), including the Tentative Interim Amendments listed in 416.44(b)(1) and 416.44(c). These codes drive smoke-compartment construction, exit signage, doors to hazardous areas, sprinkler requirements, medical-gas storage, and emergency power. CMS can waive specific provisions, but waivers are rare and require a formal process — assume you must comply unless you have a waiver letter in hand.",
      keyPoint:
        "NFPA 101 and NFPA 99 (2012 editions) are not optional reference material — they are the citation framework Chapter 8 is built on.",
    },
    {
      title: "Sprinkler shutdowns: 10 hours is the trigger",
      content:
        "Under 416.44(b)(5), if a sprinkler system is out of service for more than 10 hours in a 24-hour period, the ASC must either evacuate the affected area or institute a documented fire watch until the system is back in service. The fire watch is not optional supervision — it requires a person with eyes on the affected area, a log of patrols, and a defined relief schedule. A surveyor who learns of any recent sprinkler outage will ask immediately for the fire watch log.",
      keyPoint:
        "Sprinkler down >10 hours → evacuate or fire watch. No middle ground, no informal coverage.",
    },
    {
      title: "Drills are evidence; one missed quarter is a citation",
      content:
        "Chapter 8 Standard N requires scenario-based drills at least once per calendar quarter, plus an annual CPR drill and an annual emergency disaster drill. Every drill must have a written evaluation, identified gaps, and documented corrective action. A missed quarter, or a drill with no written evaluation, is one of the easiest findings a surveyor can write — it is a binary check.",
      keyPoint:
        "Quarterly drills + annual CPR + annual disaster drill, each with a written evaluation and documented follow-up, or you have a finding.",
    },
    {
      title: "Biomedical equipment maintenance must match manufacturer instructions",
      content:
        "Standard L requires written policies for equipment use, calibration, and preventive maintenance — and the PM and calibration must follow the manufacturer's specifications, not a generic schedule. Surveyors will pull stickers off a defibrillator, an anesthesia machine, and a sterilizer and ask to see the matching PM record. Stickers that are expired, missing, or contradicted by the underlying log are top-of-list findings because they are visible the moment the surveyor walks into the room.",
      keyPoint:
        "Every regulated patient-care device gets a PM cycle traced to the manufacturer's IFU, with a sticker and a matching log entry.",
    },
  ],
  questions: [
    {
      id: "asc_facenv_01",
      question:
        "On the opening tour of an ASC, the surveyor asks the administrator for the building occupancy permit and a current fire-authority letter. The administrator says, 'They're somewhere in the file room — I'll have them by tomorrow.' What is the most likely finding?",
      options: [
        "No finding — same-day production is acceptable",
        "Standard-level finding — the documents must be produced on demand at the time of the opening tour",
        "Condition-level finding only if the documents are ultimately missing",
        "No finding — the fire authority maintains these records, not the ASC",
      ],
      correctIndex: 1,
      explanation:
        "Under Chapter 8 Standard A, examples of compliant documentation include an occupancy permit and a fire-authority letter or report. Surveyors expect them to be readily available — not located, scanned, or recreated overnight. A 'come back tomorrow' answer signals that the survey-ready binder isn't actually ready, and a Standard-level finding for documentation accessibility is the typical outcome.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 Standard A (cross-ref Q-0100 series)",
      tutor: {
        whyCorrect:
          "Survey readiness means the documents are physically (or digitally) accessible during the opening tour. The fire-authority letter and occupancy permit are foundational — if these are loose in the file room, surveyors assume the rest of the documentation is similarly disorganized and broaden their sample.",
        whyWrong: {
          A: "Same-day-but-late production weakens credibility for the entire chapter; surveyors begin pulling additional documents as a cross-check.",
          C: "The finding does not depend on whether the document exists — it depends on accessibility at the time requested.",
          D: "The ASC owns its documentation. Calling the fire marshal during the survey to recreate a letter is not a defense.",
        },
        operationalContext:
          "Maintain a survey-ready binder (paper and digital) with a tabbed index: occupancy permit, fire-authority letter, NFPA inspection reports, sprinkler test logs, generator logs, drill evaluations, biomed PM summary, hazmat inventory, and emergency preparedness plan. Keep it within arm's reach of the administrator's desk — not in a file room.",
      },
    },
    {
      id: "asc_facenv_02",
      question:
        "An ASC's most recent fire-marshal inspection letter is dated 19 months ago. Local jurisdiction inspects annually. What is the regulatory issue?",
      options: [
        "No issue — fire-authority letters are valid until the next inspection occurs",
        "The ASC is operating outside the documented compliance window and must request a current inspection or letter from the fire authority",
        "The administrator can self-certify that the building remains in compliance",
        "Only relevant if a fire occurred since the last inspection",
      ],
      correctIndex: 1,
      explanation:
        "When the local jurisdiction's inspection cycle is annual, a 19-month-old letter is past due. The ASC has to request the next inspection, document the request, and produce the new letter as soon as it is issued. Allowing the inspection cycle to lapse without action is a documentation gap surveyors will cite under Chapter 8 Standard A.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 Standard A",
      tutor: {
        whyCorrect:
          "The fire-authority letter is meant to be current. Whether the local cycle is annual, biennial, or triennial, the ASC has to know the cycle and stay inside it. A documented request to the fire marshal (with no response) shows good faith; silence does not.",
        whyWrong: {
          A: "The validity window is the local jurisdiction's cycle, not 'until next inspection.'",
          C: "Fire compliance is not self-certified. The authority having jurisdiction (AHJ) issues the letter.",
          D: "A fire is not the trigger. The inspection cycle is the trigger.",
        },
        operationalContext:
          "Set a tickler 60 days before the local fire-authority inspection cycle expires. Email the fire marshal with a written request, save the email in the binder, and follow up monthly until the new letter is issued.",
      },
    },
    {
      id: "asc_facenv_03",
      question:
        "An ASC's drill log shows: Q1 — fire drill (evaluated); Q2 — bomb threat tabletop (evaluated); Q3 — none; Q4 — active shooter (evaluated). The administrator says Q3 was 'too busy with construction.' How does a surveyor view Q3?",
      options: [
        "Acceptable — three drills in four quarters meets the spirit of the requirement",
        "Acceptable — construction is a documented mitigating circumstance",
        "Citation — at least one scenario-based drill is required each calendar quarter regardless of operational pressures",
        "Citation only if a real emergency occurred during Q3",
      ],
      correctIndex: 2,
      explanation:
        "Chapter 8 Standard N is explicit: at least one scenario-based drill per calendar quarter. There is no 'busy quarter' exemption. Construction or staffing pressure is exactly when surveyors expect drills to continue, because risk is elevated. A missed quarter is a binary, easy-to-document finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 Standard N",
      tutor: {
        whyCorrect:
          "Quarterly cadence is the rule. The point of a recurring drill schedule is that it survives operational pressure — that is what makes it a drill program rather than a wishlist.",
        whyWrong: {
          A: "Three out of four is not the standard. Four out of four is the standard.",
          B: "Construction is not a recognized exemption. If anything, it requires an additional construction-risk drill or pre-construction risk assessment.",
          D: "The standard is process-based, not outcome-based. Missing the drill is the finding regardless of whether anything bad happened.",
        },
        operationalContext:
          "Build the drill calendar a year in advance, schedule a specific date and scenario each quarter, and assign a drill captain. If the planned date is impossible, reschedule within the quarter — never push to the next quarter.",
      },
    },
    {
      id: "asc_facenv_04",
      question:
        "A surveyor pulls the SDS binder for hazardous materials and finds an SDS for a surface disinfectant marked 'revised 2014' for a product the ASC stopped using two years ago. The currently used disinfectant has no SDS in the binder. What is the issue?",
      options: [
        "No issue — having any SDS binder satisfies the requirement",
        "The SDS inventory must reflect chemicals currently in use; missing SDS for an active product and stale SDS for a discontinued product is a documentation failure",
        "Issue only if a staff member was injured by the new product",
        "OSHA owns the SDS requirement, so AAAHC and CMS surveyors do not evaluate it",
      ],
      correctIndex: 1,
      explanation:
        "The hazardous materials inventory and SDS files have to match the chemicals actually in use. An SDS for a product that is no longer present is administrative debt; a missing SDS for an active product is a real safety gap because staff cannot look up exposure response. Both errors signal a stale program and a likely Chapter 8 finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 (Safety program; cross-ref OSHA HazCom)",
      tutor: {
        whyCorrect:
          "SDS access exists so that a staff member who is splashed, exposed, or asks a question can read the manufacturer's safety information immediately. If the binder is wrong, that purpose fails — even if no one has been hurt yet.",
        whyWrong: {
          A: "The binder has to be current and accurate. Volume is not a substitute for accuracy.",
          C: "The standard is about access and accuracy, not about whether harm has occurred.",
          D: "ASC surveyors do evaluate hazardous materials handling under the safety program standard, even though OSHA also has jurisdiction.",
        },
        operationalContext:
          "Audit the chemical inventory against the SDS binder twice a year. Whenever a product is added or discontinued, update the binder the same day and have the safety officer initial the change.",
      },
    },
    {
      id: "asc_facenv_05",
      question:
        "An ASC's emergency generator log shows weekly visual inspections (signed) but no monthly load test entries for the past 6 months. The biomed contractor says load testing is 'optional unless the system fails.' Is this defensible?",
      options: [
        "Yes — weekly visual inspections meet the requirement",
        "Yes — load testing is required only if the generator fails a visual inspection",
        "No — emergency generators serving health care occupancies require regular load testing per NFPA 110, and missing 6 months of records is a documented gap",
        "No — but only if the ASC actually lost power during that period",
      ],
      correctIndex: 2,
      explanation:
        "NFPA 110 (referenced through NFPA 99 and 416.44) requires routine maintenance and testing of emergency power systems, typically including weekly visual inspection and monthly load testing for Level 1 systems serving life-safety branches. Six missing months of load tests is a clear documentation gap that surveyors will write up under the Chapter 8 environment standard, regardless of whether a power loss occurred.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 / 42 CFR 416.44(c) (NFPA 99 / NFPA 110)",
      tutor: {
        whyCorrect:
          "The point of monthly load testing is to detect degradation before an actual emergency. A generator that runs fine in a visual inspection can fail under load — which is exactly what happens during a real outage.",
        whyWrong: {
          A: "Visual is necessary but not sufficient. Load test is the cardiovascular stress test for the generator.",
          B: "The cycle is preventive, not reactive. Waiting for a failure defeats the purpose.",
          D: "Outcome doesn't determine the citation. Documentation gap is the finding.",
        },
        operationalContext:
          "Put generator load testing on a recurring monthly calendar with a defined responsible owner. The log should record date, run-time, load %, fuel level before/after, and signature. Reconcile annually against the biomed contract scope.",
      },
    },
    {
      id: "asc_facenv_06",
      question:
        "During a tracer through the OR corridor, the surveyor sees a smoke-compartment door propped open with a doorstop. Staff says it was opened 'just for the case turnover so we could move the bed faster.' What does the surveyor cite?",
      options: [
        "No citation — temporary propping for operational efficiency is permitted",
        "Citation under NFPA 101 — smoke-compartment doors must remain closed or be held open only by approved automatic-release devices",
        "Citation only if smoke or fire was present",
        "No citation — smoke compartment requirements apply only to inpatient occupancies",
      ],
      correctIndex: 1,
      explanation:
        "Smoke-compartment doors are part of the life-safety design under NFPA 101 (2012) and the ASC's compliance with 416.44(b)(1). They must remain closed or be held open only by automatic-release hardware tied to the fire alarm. Wedges, door stops, and trash cans are common citations because the smoke compartment fails the moment those doors are open.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0104 (42 CFR 416.44(b)(1) / NFPA 101)",
      tutor: {
        whyCorrect:
          "Smoke compartments contain smoke and fire long enough for evacuation. A wedged door makes the compartment a fiction. Surveyors view this as one of the most preventable life-safety findings.",
        whyWrong: {
          A: "There is no operational-efficiency exemption. The hardware exists for the moments staff are not actively passing through.",
          C: "Citation is structural — propped doors are cited regardless of whether smoke is present.",
          D: "Ambulatory health care occupancies are subject to NFPA 101 smoke-compartment provisions through 416.44(b)(1).",
        },
        operationalContext:
          "Remove all doorstops, wedges, and rolling props from corridors and OR thresholds. If a door truly needs to stay open, install a magnetic hold-open device tied to the fire alarm panel. Educate turnover staff during onboarding.",
      },
    },
    {
      id: "asc_facenv_07",
      question:
        "A defibrillator in the PACU has a PM sticker that expired 4 months ago. The biomed company missed the visit and the ASC did not follow up. The defibrillator passes a self-test today. How serious is this?",
      options: [
        "Not serious — a passing self-test demonstrates current functionality",
        "Standard-level finding — preventive maintenance per manufacturer specifications is required and must be documented even if the device currently functions",
        "Not serious — defibrillators are exempt from PM cycles because they self-test",
        "Condition-level only if the defibrillator fails during use",
      ],
      correctIndex: 1,
      explanation:
        "Standard L requires PM and calibration per manufacturer specifications, with documentation. A self-test is not a substitute for the manufacturer's PM. An expired sticker on a high-acuity device is highly visible during a tracer and is an easy citation. The ASC must catch up on the PM and document why the cycle slipped.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 Standard L",
      tutor: {
        whyCorrect:
          "PM cycles exist to detect drift the device cannot detect about itself: battery age, paddle pad expiration, internal calibration, capacitor degradation. The sticker is the surveyor's quick check that the program is alive.",
        whyWrong: {
          A: "Self-test is a real-time check, not a substitute for periodic PM.",
          C: "There is no exemption. AEDs and clinical defibrillators both require manufacturer PM cycles.",
          D: "Failure during use would be a sentinel event; the missed PM is a citation regardless.",
        },
        operationalContext:
          "Maintain a biomed equipment registry with next-PM-due dates. Auto-generate a 30-day-out reminder. If the contractor misses a visit, escalate immediately and document the escalation in writing.",
      },
    },
    {
      id: "asc_facenv_08",
      question:
        "An ASC discovers its medication storage room door has been left unlocked twice in the past month — once overnight. The administrator is considering whether to report it as a finding internally. What is the regulatory concern?",
      options: [
        "No concern — medication rooms only need to be locked when staff are not in the building",
        "Medication storage areas (especially containing controlled substances) must be secured per facility policy and regulatory expectations; repeated unsecured incidents constitute a security and pharmaceutical-services failure",
        "Concern only if a controlled substance count is short",
        "No concern — overnight access is acceptable when no patients are present",
      ],
      correctIndex: 1,
      explanation:
        "Chapter 8 Standard B requires that the facility be operated in a safe and secure manner, with policies and observed practices both supporting security. Pharmaceutical Services standards independently require secured storage. Repeated unsecured medication rooms — especially overnight — combine a Chapter 8 security finding with a Chapter 11 pharmaceutical-services finding and create QAPI/governance follow-up obligations.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 Standard B (cross-ref Pharmaceutical Services)",
      tutor: {
        whyCorrect:
          "Medication security is one of the foundational expectations across multiple chapters. A pattern of unsecured access is treated more seriously than a single incident because it shows the system isn't catching the lapse.",
        whyWrong: {
          A: "Medication rooms are secured continuously, not selectively.",
          C: "The security failure is the finding; a missing count is an additional separate finding.",
          D: "Empty patient areas are not a defense for unsecured medications.",
        },
        operationalContext:
          "Install a mechanical or electronic door closer with audit logging. Audit the door monthly. Any unsecured incident gets logged, reported to QAPI and the governing body, and triggers re-education plus a closeout date.",
      },
    },
    {
      id: "asc_facenv_09",
      question:
        "An ASC's emergency preparedness plan was written 4 years ago and has not been updated since. Drills have continued quarterly. The communication plan is from the original document. What is wrong?",
      options: [
        "Nothing — drills meet the cadence, so the plan is current by extension",
        "The emergency preparedness plan, policies/procedures, and communication plan must be reviewed and updated at least every two years; the training and testing program must be reviewed annually",
        "The plan only needs to be updated when the building changes",
        "Updates are required only after a real emergency event",
      ],
      correctIndex: 1,
      explanation:
        "Under 416.54(a), (b), and (c) the emergency preparedness plan, the policies and procedures, and the communication plan must be reviewed and updated at least every two years. The training and testing program is reviewed annually. A 4-year-old plan with no documented review is an immediate Emergency Preparedness citation regardless of whether drills have continued.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "E-0004 / E-0029 (42 CFR 416.54(a), (c))",
      tutor: {
        whyCorrect:
          "The two-year and one-year review cadences are explicit. They exist because contact lists, partner agencies, building configurations, and patient populations change over time. A static document quickly becomes inaccurate.",
        whyWrong: {
          A: "Drilling does not satisfy the review and update obligation.",
          C: "Review is calendar-driven, not change-driven.",
          D: "An emergency triggers an after-action review, but the routine review cycle is independent.",
        },
        operationalContext:
          "Put the EP plan, P&P, and communication plan on a 2-year review tickler tied to a specific governing body meeting. Put the training and testing program on a 1-year review tickler. Document review even if no changes are made — 'reviewed, no changes required, signed [name/date]' is acceptable.",
      },
    },
    {
      id: "asc_facenv_10",
      question:
        "On a tracer through the OR suite, the surveyor sees no posted evacuation route diagram in the corridor. The administrator says, 'It's in the staff handbook.' What is the issue?",
      options: [
        "No issue — handbook documentation is sufficient",
        "Evacuation route information should be visibly posted in patient-care areas so staff and visitors can locate exits during an emergency",
        "Issue only if a fire occurred since the last drill",
        "Posted evacuation routes are required only in inpatient settings",
      ],
      correctIndex: 1,
      explanation:
        "The point of a posted route is real-time wayfinding under stress. Staff handbooks are valuable for training but cannot serve as the in-the-moment guide during an actual evacuation. Surveyors expect visible posted routes in corridors and patient areas; absent posting is typically cited under the safety and emergency preparedness standards.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 Standard B / 416.54(b)(2)",
      tutor: {
        whyCorrect:
          "During an evacuation, staff and visitors need a visual cue at decision points. A locked binder in the office or a paragraph in a handbook does not function in real time.",
        whyWrong: {
          A: "Handbook is supplemental, not primary, for evacuation wayfinding.",
          C: "The finding is preventive, not reactive.",
          D: "Ambulatory occupancies are also subject to evacuation planning and visible signage expectations.",
        },
        operationalContext:
          "Post evacuation diagrams at every decision point in the patient-care areas: OR corridor, PACU, pre-op, registration, and main exits. Verify diagrams reflect any recent renovations and that the 'You Are Here' marker is correct on each posting.",
      },
    },
    {
      id: "asc_facenv_11",
      question:
        "An ASC's sprinkler system was offline from 10 PM Friday to 2 PM Saturday (16 hours) for a leak repair. The maintenance crew completed the work, but no fire watch was instituted because 'the building was unoccupied.' Was the building actually unoccupied? The cleaning service was on-site overnight from 11 PM to 3 AM. Has the ASC met its obligation?",
      options: [
        "Yes — vendor staff do not require fire watch coverage",
        "No — the sprinkler outage exceeded 10 hours, occupants (cleaning staff) were present, and the ASC was required to either evacuate the affected area or institute a documented fire watch",
        "Yes — the system was repaired within 24 hours",
        "No — but only if a fire occurred during the outage",
      ],
      correctIndex: 1,
      explanation:
        "Under 416.44(b)(5), if a sprinkler system is shut down for more than 10 hours in a 24-hour period, the ASC must evacuate the affected area or institute a fire watch. Cleaning staff are occupants. The 16-hour outage with occupants present and no fire watch is a clear citation, and a serious one.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0106 (42 CFR 416.44(b)(5))",
      tutor: {
        whyCorrect:
          "The rule does not distinguish between patients, staff, vendors, or contractors — anyone in the building counts as an occupant. Once the 10-hour threshold is crossed with occupants present, fire watch or evacuation is mandatory.",
        whyWrong: {
          A: "There is no vendor exception.",
          C: "Repair time does not erase the obligation during the outage.",
          D: "The citation does not depend on a fire occurring.",
        },
        operationalContext:
          "Build a sprinkler-outage SOP: notify the administrator, log the start time, alert the local fire authority, and either clear the building or post a fire watcher with a written log (patrol time, area covered, observations, relief). Stop the clock and document only when the system is fully restored and tested.",
      },
    },
    {
      id: "asc_facenv_12",
      question:
        "OR humidity logs are missing for 11 of the last 30 days. Staff says the HVAC system 'shows green on the dashboard.' What is the citation risk?",
      options: [
        "No risk — a green HVAC dashboard satisfies documentation requirements",
        "Standard-level finding — HVAC parameters affecting OR safety (temperature, humidity, pressure relationships) must be documented per facility policy and applicable codes",
        "Risk only if a surgical site infection has been linked to humidity",
        "No risk — humidity is a comfort parameter, not a regulatory parameter",
      ],
      correctIndex: 1,
      explanation:
        "OR humidity (typically 20–60%, per ASHRAE 170 and accreditor guidance) is part of the controlled environment that supports patient safety, infection prevention, and combustible-anesthetic safety. Logs are required because the dashboard shows a snapshot, not a trend. Missing 11 of 30 days is a documentation gap that surveyors will cite under the Chapter 8 environment standard with cross-references to infection prevention.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 / 42 CFR 416.44 (Environment)",
      tutor: {
        whyCorrect:
          "Humidity, temperature, and air-exchange logs are the audit trail. A green dashboard is a real-time view; the log proves the parameters held over time.",
        whyWrong: {
          A: "Real-time monitoring without retention is not documentation.",
          C: "The citation is about the documentation gap, not the patient outcome.",
          D: "Humidity is a regulated environmental parameter in surgical suites.",
        },
        operationalContext:
          "Configure the building automation system to auto-log temperature, humidity, and pressure relationships every shift (or continuously). Have the OR charge nurse initial daily verification. Store logs for the survey-readiness binder retention window.",
      },
    },
    {
      id: "asc_facenv_13",
      question:
        "An ASC's sterilizer biological-indicator (BI) log shows three failures in the past 6 weeks. Staff have been re-running the cycles and using the affected loads after the second BI passes. Is this acceptable?",
      options: [
        "Yes — passing a re-run BI clears the load for use",
        "No — BI failures require a defined investigation, quarantine of the affected load until the failure is resolved, root-cause analysis, and reporting to QAPI; a pattern of three failures in 6 weeks is itself a finding",
        "Yes — biological indicators are a quality measure, not a release criterion",
        "No — but only if patient infections have been linked",
      ],
      correctIndex: 1,
      explanation:
        "BI failures are sentinel-class quality events. Each failure requires investigation, quarantine of the load, recall of any items released, root-cause analysis, and corrective action. A pattern of three failures in 6 weeks is a Chapter 8 environment / infection-control / sterile-processing finding that should already have triggered a QAPI deep dive and possibly a governing-body notification.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 8 / Infection Prevention / Sterile Processing standards",
      tutor: {
        whyCorrect:
          "BIs are the only direct test of whether a sterilization cycle achieved sterilization. Failure = unsterile load assumption until proven otherwise. 'Re-run until it passes' bypasses the entire investigation framework.",
        whyWrong: {
          A: "A passing re-run is not equivalent to a passing original cycle on the original load.",
          C: "BIs are explicit release criteria for many cycle types; they are not optional.",
          D: "Patient infection is the worst-case downstream indicator; the finding exists upstream the moment the failure goes uninvestigated.",
        },
        operationalContext:
          "Adopt a written BI-failure SOP: quarantine the load, identify all items, assess patient exposure (was the load used?), do mechanical and operator checks, retest after corrective action, document everything, and report monthly QAPI metrics to the governing body. Three failures in 6 weeks → escalate to the medical director immediately.",
      },
    },
    {
      id: "asc_facenv_14",
      question:
        "An ASC has stocked an alcohol-based hand-rub (ABHR) dispenser inside an operating room directly above an electrical outlet. Compliance staff says the dispenser was 'just convenient there.' What is the regulatory concern?",
      options: [
        "No concern — ABHR placement is not regulated",
        "Concern — ABHR dispensers must be installed per the conditions in 416.44(b)(4) and applicable Life Safety Code provisions, which include separation from ignition sources and quantity/spacing limits to manage fire risk",
        "Concern only if a fire has occurred",
        "No concern — operating rooms are exempt from ABHR placement rules",
      ],
      correctIndex: 1,
      explanation:
        "Under 416.44(b)(4) and the Life Safety Code provisions for ABHR, dispensers must be installed in a manner that adequately protects against inappropriate access and ignition. Placing a dispenser of flammable alcohol-based product directly above an electrical outlet creates an ignition-source proximity issue. Surveyors will cite this under the Chapter 8 safety and Life Safety Code standards.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0105 (42 CFR 416.44(b)(4))",
      tutor: {
        whyCorrect:
          "ABHR is alcohol — it burns. Code provisions exist to control quantity per corridor, separation from ignition sources, and spacing between dispensers. Convenience does not override the code.",
        whyWrong: {
          A: "ABHR placement is explicitly regulated by 416.44(b)(4) and NFPA references.",
          C: "Citation is preventive.",
          D: "ORs are not exempt from ignition-source separation; if anything, the ignition-source density in an OR raises the bar.",
        },
        operationalContext:
          "Walk the facility with the infection preventionist and the safety officer. Map every dispenser. Verify each placement: away from outlets, switches, and other ignition sources, with appropriate spacing per the LSC. Move any dispenser that is non-compliant.",
      },
    },
    {
      id: "asc_facenv_15",
      question:
        "An ASC participates in a unified emergency preparedness program through its parent health system. The administrator assumes the system handles everything. During a survey, what is the ASC still expected to demonstrate?",
      options: [
        "Nothing — the system program covers all requirements for participating facilities",
        "The ASC must demonstrate active participation in the unified program's development, that the program addresses the ASC's unique circumstances, and that the ASC is in compliance and capable of executing the program",
        "Only that the ASC's name appears in the system program document",
        "Only that the ASC pays a fee to the system",
      ],
      correctIndex: 1,
      explanation:
        "Under 416.54(e), an ASC participating in a unified and integrated emergency preparedness program must still demonstrate active participation in development, that the program reflects the ASC's unique circumstances and patient population, and that the ASC is independently capable of using and complying with the program. 'The system handles it' is not a defense.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "E-0042 (42 CFR 416.54(e))",
      tutor: {
        whyCorrect:
          "Participation is active, not passive. The ASC has to show its fingerprints on the unified plan: representation in development meetings, an ASC-specific risk assessment, ASC-specific training records, ASC-specific drill participation, and proof that the ASC could execute the plan without the system holding its hand.",
        whyWrong: {
          A: "The system program does not absolve the ASC of its individual compliance obligations.",
          C: "Listing the ASC by name is paperwork, not evidence of participation.",
          D: "Financial participation is unrelated to compliance.",
        },
        operationalContext:
          "Keep a binder of ASC-specific evidence even when the EP program is unified: ASC risk assessment, ASC drill rosters, ASC training logs, ASC representative on the system EP committee with meeting minutes, and a written attestation from the ASC administrator that the program addresses the ASC's specific circumstances.",
      },
    },
  ],
};
