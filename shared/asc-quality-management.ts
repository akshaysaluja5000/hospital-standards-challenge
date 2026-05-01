import type { Level } from "./schema";

export const ascQualityManagementLevel: Level = {
  id: "asc_quality_management",
  module: "asc",
  name: "Quality Management (QAPI)",
  description:
    "How an ASC measures, learns from, and improves its own performance — and proves to surveyors that the program is real, not paper.",
  icon: "TrendingUp",
  color: "hsl(35, 90%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Quality Assessment and Performance Improvement (QAPI)",
    plainLanguageSummary:
      "QAPI is the engine that detects problems, drives improvement, and feeds the governing body the information it needs to govern. A real QAPI program has written priorities tied to the patient population the ASC serves, ongoing data collection on those priorities, performance improvement projects (PIPs) when data identifies opportunities, adverse event tracking with root-cause analysis, and a feedback loop to the governing body that produces actual decisions. Surveyors see paper QAPI all the time: a binder, a dashboard, a quarterly report — and no evidence that anyone acts on the data. They look for evidence of cycles: data identifies a problem, a project is launched, an intervention is implemented, follow-up data shows whether the intervention worked, and the program adjusts. That cycle, repeated, is what compliance looks like.",
    keyOperationalExpectations: [
      "QAPI program is in writing, approved by the governing body, and reviewed annually.",
      "QAPI priorities reflect the actual procedure mix, patient population, and known risk areas of the ASC.",
      "Data is collected continuously on priority indicators (infections, complications, returns to OR, transfers, patient experience, sterilization metrics, medication errors, falls).",
      "At least one performance improvement project (PIP) is active at any time, with defined scope, measurable goals, intervention, and follow-up measurement.",
      "Adverse events trigger root-cause analysis (RCA) within a defined timeframe, with corrective actions tracked to closure.",
      "QAPI reports are presented to the governing body at every meeting, with documented discussion and direction.",
    ],
    commonRiskPoints: [
      "QAPI plan that is generic — copied from a template — and does not reflect the specific procedures done at the ASC.",
      "Indicators tracked but no thresholds or targets defined; data goes up and down with no response.",
      "PIPs that are 'in progress' for years with no measurable end state.",
      "Adverse events logged but no documented root-cause analysis, or RCAs that conclude 'human error' without examining system contributors.",
      "QAPI report to the governing body that summarizes data without identifying issues or proposing action.",
      "Patient experience data collected but never reviewed or acted on.",
    ],
    cmsTags: [
      "42 CFR 416.43",
      "Q-0061 series (QAPI)",
    ],
  },
  studyMaterial: [
    {
      title: "QAPI is data plus action",
      content:
        "Data alone is not QAPI; data plus action is. Surveyors look for the cycle: a measurement identifies a gap, a project is designed, an intervention is implemented, a follow-up measurement shows whether the gap closed, and the program adjusts. A dashboard with no PIPs, or PIPs that don't connect to the data, is half a program.",
      keyPoint:
        "Show the cycle. Data → identified opportunity → intervention → re-measurement → next step.",
    },
    {
      title: "Priorities reflect this ASC, not a template",
      content:
        "QAPI priorities should be specific to the ASC's procedure mix and patient population. An ASC that does primarily ophthalmology cases should prioritize endophthalmitis surveillance and intraocular pressure metrics. An orthopedic ASC should prioritize SSI rates by procedure category, return-to-OR rates, and DVT events. A generic priority list that could apply to any facility is a red flag for surveyors.",
      keyPoint:
        "If your QAPI priorities don't name your specific procedures and risks, they aren't yours.",
    },
    {
      title: "Performance improvement projects (PIPs)",
      content:
        "A PIP has a defined problem statement, a measurable baseline, a target, an intervention, a timeline, and a planned re-measurement. A PIP without a target is just a project. A PIP without a re-measurement is just an intervention. The PIP cycle is what produces evidence of improvement and is what surveyors track from launch to closeout.",
      keyPoint:
        "Every PIP has a baseline number, a target number, and a date when you'll measure again.",
    },
    {
      title: "Root-cause analysis (RCA) for adverse events",
      content:
        "When an adverse event occurs — wrong-site surgery, sentinel event, unexpected transfer, medication error with harm — the QAPI program triggers an RCA. The RCA digs past the proximate cause ('the surgeon marked the wrong knee') to the system contributors ('site-marking policy doesn't require pre-induction confirmation in the OR, the time-out script doesn't require the marked site to be visible'). Corrective actions address system causes, not just the individual.",
      keyPoint:
        "RCA asks 'why' five times. If your conclusion is 'human error,' you stopped too early.",
    },
    {
      title: "The governing body feedback loop",
      content:
        "QAPI reports go to the governing body at every meeting — not as data dumps, but as decision packages. Each report identifies what's working, what's not, what's been done about it, and what the governing body needs to decide or fund. The governing body's response is documented in minutes. Without that loop, QAPI is paperwork; with it, QAPI is governance. 42 CFR 416.43(e) puts the implementation responsibility squarely on the governing body, not the QAPI chair.",
      keyPoint:
        "Every QAPI report ends with: 'Decisions requested:' and the governing body answers in writing.",
    },
    {
      title: "The written QI program is its own deliverable",
      content:
        "Beyond the QAPI plan, surveyors expect a written quality improvement program document that names the responsible committee(s) and individuals, describes the full scope of services covered, identifies at least one physician (or dentist) participant, defines purpose and objectives, describes data collection processes, and explains how peer review, risk management, and infection prevention integrate into QAPI. The program has to be evaluated annually for effectiveness — was the design sound, did it meet its objectives, what gets adjusted next year. A QAPI plan that doesn't name the committee, the physician participant, or the integration points is a documentation gap regardless of how much data is being collected.",
      keyPoint:
        "If a surveyor asks 'show me your written QI program,' the answer is a single document, not a stack of dashboards.",
    },
    {
      title: "Peer review feeds QAPI and credentialing — both",
      content:
        "Peer review is one of the strongest data sources QAPI has, and 42 CFR 416.43 expects QAPI to integrate it. Findings flow two ways: de-identified system themes go to QAPI for process improvement, and clinician-specific findings go into OPPE/FPPE for credentialing and reappointment decisions. Filing peer review reports without action — or running peer review in a silo separate from QAPI — defeats the purpose and creates a documentation gap. The deliberative process is confidential; the outputs are not exempt from action.",
      keyPoint:
        "Peer review confidentiality protects the discussion, not the obligation to act on the findings.",
    },
    {
      title: "Infection prevention and NHSN data live inside QAPI",
      content:
        "Infection prevention is not a parallel program — it is one of QAPI's required data inputs under 42 CFR 416.43(a)(2). Surveillance data (SSI, endophthalmitis, bloodstream, GI scope-related infections), hand hygiene audits, sterilization metrics, and NHSN-derived rates and SIRs should appear on the QAPI agenda with discussion and decisions documented. Submitting to NHSN and then summarizing it as 'data submitted, no concerns' wastes the external benchmarking value. The QAPI committee should review the SIR, the trend, peer comparisons, and any procedure-specific signal each cycle.",
      keyPoint:
        "If NHSN data isn't discussed in QAPI minutes, the integration is broken even if the submission is on time.",
    },
    {
      title: "Risk management policies that surveyors actually open",
      content:
        "The risk management subchapter requires written policies covering several specific scenarios: how a patient may be dismissed or refused care, what happens if a clinician becomes incapacitated mid-procedure, how an impaired clinician is addressed, after-hours coverage and clinical advice documentation, restrictions on observers in patient care areas, and consent for any non-staff present in clinical space. Add the operational policies: encouraging near-miss reporting, communicating reportable events as required by law, periodic litigation review, complaints/grievances response times, timely notice to the liability carrier, and periodic clinical record review. Missing any one of these is a standard-level finding even if the underlying scenario has never occurred.",
      keyPoint:
        "The risk management binder has to exist before the event, not get written after one.",
    },
    {
      title: "Adverse event and near-miss definitions drive what gets analyzed",
      content:
        "Risk management policy has to define both 'incident' and 'adverse event' — and crucially, the definition of incident has to include near-miss events (anything that could have caused harm but didn't). Adverse events include unexpected death or serious injury, process variations that carry significant risk of recurrence, breaches in care or administrative procedures, and reactions to drugs and materials. All of these get reviewed; near-misses and adverse events both get analyzed for causal factors, with system improvements implemented where indicated. A program that only tracks events with documented harm misses the warning signals.",
      keyPoint:
        "Near-misses are gifts — they show you the system failure without the patient injury. Track them like the real thing.",
    },
    {
      title: "Prioritize by high-risk, high-volume, problem-prone",
      content:
        "42 CFR 416.43(c)(1) tells the ASC to set QAPI priorities based on three buckets: high-risk activities (anesthesia events, sentinel-level outcomes), high-volume procedures (whatever dominates the case mix — cataracts, colonoscopy, joint injections), and problem-prone areas (anything with elevated complications in the past 12 months). Priorities also have to consider incidence, prevalence, and severity, and they have to connect to health outcomes, patient safety, and quality of care. A QAPI plan that ignores the procedure that is 60% of the schedule is misaligned with the actual practice — surveyors notice that mismatch immediately.",
      keyPoint:
        "If your top procedure isn't named in the QAPI plan, your priorities don't reflect your facility.",
    },
    {
      title: "External benchmarking with valid comparators",
      content:
        "QAPI requires comparison to external benchmarks based on valid local, state, national, or published data — NHSN, AAAHC peer data, specialty society registries, or ASC Quality Collaboration measures all qualify. Pick measures that are actually relevant to the procedures performed, collect data on them on an ongoing basis, compare internal performance, and feed the results back into QAPI improvement work and into governing body reports. 'We are above average' is not a finding-proof statement on its own — surveyors want to see the comparison data, the trend, and what the program did with it.",
      keyPoint:
        "Benchmarking without action is research; benchmarking that drives a PIP is QAPI.",
    },
    {
      title: "Quality improvement studies and the PDSA cycle",
      content:
        "Standard G expects ongoing QI studies that follow a recognized improvement methodology — PDSA (Plan-Do-Study-Act) is the most common, but Six Sigma DMAIC and Lean A3 also work. At least one current study has to demonstrate that improvement occurred and was sustained. 'Current' means within the accreditation term (or within the past 12 months for an initial survey). The study documentation has to include the reason it was launched, the methods, the results, and the dissemination of findings to the governing body and throughout the organization. A 'study' that has no methodology, no measurable outcome, or no sustained result is not a study.",
      keyPoint:
        "Surveyors will ask: 'Show me one QI study from this year that produced sustained improvement.' Have one ready.",
    },
    {
      title: "Don't drown the program in indicators",
      content:
        "A QAPI program with 40+ indicators tracked monthly tends to produce monitoring without action — every indicator gets a brief mention, no PIP gets driven to closure, and the committee never digs deep enough to design a real intervention. The defensible structure is tiered: 5–10 priority indicators tied to active PIPs reviewed monthly, 10–15 standing indicators reviewed quarterly, broader surveillance reviewed annually. Each indicator has to justify its place: linked PIP, regulatory requirement, sentinel-event surveillance, or known risk monitoring. Prune the list every year.",
      keyPoint:
        "Tracking everything is the same as prioritizing nothing — focus is the QAPI design choice.",
    },
  ],
  questions: [
    {
      id: "asc_qm_01",
      question:
        "An ASC's QAPI plan was written 6 years ago using a generic template provided by a consultant. The plan lists 'patient satisfaction,' 'infection control,' and 'safety' as priorities, with no specific indicators or targets. The plan has not been reviewed since adoption. Does this meet the requirement?",
      options: [
        "Yes — having a written QAPI plan satisfies the requirement",
        "No — the QAPI plan must reflect the ASC's specific procedures, identify measurable indicators with targets, and be reviewed and updated regularly",
        "Yes — only if the plan is signed by the governing body",
        "No — only if no data is being collected",
      ],
      correctIndex: 1,
      explanation:
        "A QAPI plan that doesn't reflect the actual ASC isn't actually a QAPI plan. The priorities have to be specific to the procedures done and risks present, the indicators have to be measurable, the targets have to be defined, and the plan has to be alive — reviewed and updated as the practice changes. A 6-year-old generic template is a paper exercise.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "Surveyors evaluate whether the QAPI plan reflects what the ASC actually does. A plan that names 'patient satisfaction' without defining indicators, targets, or data sources cannot drive action. A plan that has not been touched in 6 years cannot reflect current practice. Both are findings.",
        whyWrong: {
          A: "A piece of paper called a QAPI plan is not a QAPI plan; the substance has to match.",
          C: "Signature on a defective document does not cure the defect.",
          D: "Data collection without a guiding plan is undirected work; the plan is a separate requirement.",
        },
        operationalContext:
          "Annual QAPI plan review is on the governing body's calendar. Each year the plan is updated to reflect: current procedure mix, new risks identified in the prior year, new indicators added, retired indicators that are no longer informative, and the year's PIP focus areas. The plan is signed and dated.",
      },
    },
    {
      id: "asc_qm_02",
      question:
        "An ASC tracks SSI rates monthly. The rate has been stable at 1.2% for 18 months, slightly above the published benchmark of 0.8%. There is no PIP, no intervention, and no plan to address it. What does this signal to a surveyor?",
      options: [
        "The data is being tracked — that satisfies QAPI",
        "Data without action is monitoring, not QAPI; a sustained gap above benchmark warrants a PIP with intervention and re-measurement",
        "The rate is low enough that no action is needed",
        "QAPI requires action only when the rate doubles",
      ],
      correctIndex: 1,
      explanation:
        "Tracking is the input to QAPI; action is the output. A sustained rate above benchmark is exactly the kind of opportunity QAPI is designed to identify and address. Eighteen months of unaddressed gap is evidence the QAPI program does not close loops, which is the most common citation pattern in this chapter.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "QAPI's purpose is to take data and convert it into improvement. Identifying a gap and not acting on it tells a surveyor that the program is monitoring, not improving. The defensible response is to launch a PIP: define the problem (SSI rate above benchmark), establish a baseline (1.2%), set a target (0.8% or below), design an intervention (skin prep audit, antibiotic timing review, hair removal practice review), implement, and re-measure.",
        whyWrong: {
          A: "Tracking is necessary but not sufficient.",
          C: "Above-benchmark performance is exactly the trigger for a PIP.",
          D: "QAPI doesn't have a 'doubling' threshold — sustained gaps are sufficient.",
        },
        operationalContext:
          "Set 'PIP triggers' in the QAPI plan: any indicator above benchmark for 3 consecutive months, any sentinel event, any cluster of similar events, any patient-experience metric below target. When a trigger fires, the QAPI committee initiates a PIP within 30 days.",
      },
    },
    {
      id: "asc_qm_03",
      question:
        "An ASC had a wrong-site surgery event 4 months ago. The chart was reviewed by the surgeon, an apology was made to the patient, and the case was closed. There is no documented RCA. A surveyor finds out about the event during a tracer. What is the issue?",
      options: [
        "No issue — the case was clinically resolved",
        "A wrong-site event requires a documented root-cause analysis and corrective action plan; absence of RCA is a major QAPI failure that must be reported and remediated",
        "RCA is optional in ASCs",
        "The surgeon's review is the RCA",
      ],
      correctIndex: 1,
      explanation:
        "Wrong-site surgery is a sentinel-level event that triggers RCA without exception. The RCA is a structured, multi-disciplinary review that identifies system contributors and produces corrective actions tracked to closure. A surgeon's individual review is not an RCA; closing the case without RCA leaves the system unchanged and exposes the next patient to the same conditions.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(b))",
      tutor: {
        whyCorrect:
          "RCAs follow a defined methodology: assemble a multi-disciplinary team within 72 hours, reconstruct the timeline, ask 'why' systematically until the analysis reaches system contributors, identify corrective actions for each contributor, assign owners and dates, and re-measure to confirm the actions worked. Wrong-site surgery is the canonical RCA event.",
        whyWrong: {
          A: "Clinical resolution for the patient does not address the system risk for future patients.",
          C: "Sentinel-level events explicitly trigger RCA in any meaningful QAPI framework.",
          D: "Individual reflection is not the same as a structured multi-disciplinary RCA.",
        },
        operationalContext:
          "Maintain a sentinel event policy that lists triggering events (wrong site, wrong patient, wrong procedure, unexpected death, retained foreign object, fire) and defines the RCA timeline (team assembled within 72 hours, draft RCA in 30 days, corrective actions assigned, re-measurement at 90 days). Every event is logged regardless of harm.",
      },
    },
    {
      id: "asc_qm_04",
      question:
        "An ASC's QAPI committee meets monthly. The minutes are detailed: indicators reviewed, trends noted, concerns raised. But the minutes never end with a decision or assigned action. Concerns appear month after month with no closure. How will a surveyor read this?",
      options: [
        "Detailed minutes are themselves evidence of compliance",
        "Documentation of discussion without documented decisions or assigned actions is evidence the QAPI committee deliberates but does not act, which undermines the program's purpose",
        "Decisions are only required for sentinel events",
        "Minutes need only show attendance",
      ],
      correctIndex: 1,
      explanation:
        "Discussion that doesn't produce decisions is process without product. Each QAPI meeting should end with assigned actions: 'Issue X — owner, deadline, follow-up date.' Concerns that recur month after month with no resolution tell a surveyor the QAPI committee is a forum but not a decision body. The minutes need both the discussion and the decisions.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "Effective minutes use a decision log format: each agenda item has a discussion summary, a decision (or 'continued for further data'), an owner, and a follow-up date. The next meeting opens with the decision log from the prior meeting. This format makes accountability visible.",
        whyWrong: {
          A: "Detail without decisions documents activity without progress.",
          C: "Decisions are required across the board, not just for sentinel events.",
          D: "Attendance is the floor; substance is the standard.",
        },
        operationalContext:
          "Standardize the QAPI meeting agenda: review prior decision log (status of every open action), review priority indicators (with thresholds), discuss any new events or concerns, decide on actions (owner, deadline), assign follow-up. Print and sign the decision log; carry it forward to the next meeting.",
      },
    },
    {
      id: "asc_qm_05",
      question:
        "An ASC's only PIP is titled 'Improve Patient Experience.' Its scope, baseline, target, intervention, and timeline are not documented. The PIP has been 'in progress' for 14 months. What is the issue?",
      options: [
        "No issue — patient experience is a reasonable focus",
        "A PIP must have a defined problem statement, measurable baseline, specific target, defined intervention, and timeline; 'Improve Patient Experience' as a 14-month open-ended project is not a PIP",
        "No issue if patient satisfaction surveys are being collected",
        "Issue only if patient satisfaction is declining",
      ],
      correctIndex: 1,
      explanation:
        "A PIP needs structure: a specific problem (e.g., 'wait times in pre-op exceed 30 minutes for 35% of patients'), a measurable baseline, a target ('reduce to under 15%'), an intervention, and a timeline for re-measurement. 'Improve patient experience' is a goal, not a project. After 14 months it is also evidence that the QAPI program does not know how to design or close projects.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "Surveyors expect to see PIP charters. A charter is a one-page document: problem statement, baseline metric, target metric, owner, sponsor, intervention plan, timeline, re-measurement date, closeout criteria. Open-ended 'improvement' work without a charter is what surveyors call 'process theater.'",
        whyWrong: {
          A: "The topic is reasonable; the absence of structure is not.",
          C: "Survey collection without a defined PIP using the data is data without a project.",
          D: "Active PIPs are not contingent on declining performance — they can also be aimed at improving good performance further.",
        },
        operationalContext:
          "Adopt a PIP charter template. Every PIP gets a charter signed by the QAPI chair and the project owner. The charter is reviewed monthly until closeout. PIPs older than 12 months without progress are formally closed with a written 'lessons learned' summary, and a new PIP is launched if appropriate.",
      },
    },
    {
      id: "asc_qm_06",
      question:
        "An ASC's adverse event log shows 4 medication errors in the past quarter. The log entries say 'Patient given wrong dose,' 'Wrong route,' 'Wrong patient,' 'Wrong drug.' There are no RCAs. The QAPI report to the governing body lists the events as 'Medication errors: 4.' Does this meet the requirement?",
      options: [
        "Yes — events are being tracked and reported",
        "No — medication errors with patient impact require RCA, and QAPI reports must convey enough information for the governing body to make decisions, not just counts",
        "Yes — only if no patients were harmed",
        "Yes — only if the medication errors were caught before reaching the patient",
      ],
      correctIndex: 1,
      explanation:
        "Tracking event counts is the bare minimum. Medication errors involving wrong dose, wrong route, wrong patient, or wrong drug are exactly the events that warrant RCA — each one points at a different system failure. Reporting raw counts to the governing body without analysis or proposed action gives the governing body no basis to govern.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(b))",
      tutor: {
        whyCorrect:
          "The QAPI report to the governing body should identify the issue, present the root causes, summarize the corrective actions, and request any decisions or resources needed. Counts are inputs; analysis and proposed action are the deliverable. Surveyors look for both in QAPI reports.",
        whyWrong: {
          A: "Tracking is the floor, not the ceiling.",
          C: "Patient harm threshold is irrelevant — wrong drug, wrong dose, wrong patient all warrant RCA regardless of outcome because the system failed.",
          D: "Near-misses are exactly the events that should trigger RCAs because the system failed and the only thing preventing harm was luck.",
        },
        operationalContext:
          "Define a medication-event RCA trigger: any wrong drug, wrong dose, wrong route, wrong patient, or wrong time event that reaches or nearly reaches the patient gets a 30-minute structured huddle within 24 hours and a documented action plan within 7 days. Track to closure.",
      },
    },
    {
      id: "asc_qm_07",
      question:
        "Patient experience surveys are mailed to every ASC patient post-discharge. Response rate is 12%. Aggregated scores are reviewed by the QAPI committee and filed. No patient comments are read individually; no themes are identified; no actions are taken. What is the gap?",
      options: [
        "No gap — survey collection is sufficient",
        "Patient experience data must be analyzed for themes and actionable findings, and the QAPI program must respond to identified opportunities",
        "Gap only if response rate is below 25%",
        "Gap only if scores are below benchmark",
      ],
      correctIndex: 1,
      explanation:
        "Patient experience data is a QAPI input, not an end product. Comments often surface specific issues (long pre-op waits, cold rooms, pain control gaps, communication gaps) that aggregated scores hide. The expectation is theme analysis, identification of actionable opportunities, and integration into the QAPI cycle. Filing surveys without analysis is data collection without QAPI.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "Reading comments is where the actionable insights live. A monthly review of the past month's open-ended comments, tagged by theme, will surface trends faster than aggregated scores. Themes that recur become candidate PIPs.",
        whyWrong: {
          A: "Collection without analysis is incomplete.",
          C: "Response rate is a separate methodological question; even a 12% response can yield actionable themes.",
          D: "Above-benchmark scores can still hide actionable issues; the analysis is required regardless.",
        },
        operationalContext:
          "QAPI reviews patient experience data monthly: aggregate scores by domain, themed analysis of comments, comparison to prior period, identification of emerging issues, action items. Add patient experience as a standing agenda item with a 5-minute slot.",
      },
    },
    {
      id: "asc_qm_08",
      question:
        "An ASC closes a PIP after 6 months because the target was met (post-op pain scores improved from 4.8 to 3.1). Six months later, the QAPI committee reviews the indicator and finds it has drifted back to 4.5. What does effective QAPI require?",
      options: [
        "Nothing — PIPs are time-limited and don't carry forward",
        "Sustainability monitoring is part of QAPI; when an improvement reverts, the indicator returns to active monitoring and a new intervention may be required",
        "Re-launch the same PIP unchanged",
        "Move on to the next PIP — past wins don't need follow-up",
      ],
      correctIndex: 1,
      explanation:
        "Improvements that don't sustain are not improvements. A defensible QAPI program tracks indicators after PIP closeout to ensure the gain holds. When data reverts, the indicator returns to active monitoring and the QAPI committee analyzes why (was the intervention abandoned? did staff turnover dilute the training? did volume change?) and designs a new intervention as needed.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "PIP closeout should include a sustainability plan: which indicator will be monitored, at what frequency, with what threshold for re-opening the project. Surveyors look at PIPs that closed 6–12 months ago to see whether the improvement held — and whether the program noticed if it didn't.",
        whyWrong: {
          A: "PIPs are not 'fire and forget' — sustainability is part of the QAPI cycle.",
          C: "Re-launching unchanged is repeating an intervention that no longer works.",
          D: "Past gains require monitoring; without it, the gains are not real long-term.",
        },
        operationalContext:
          "PIP closeout template: target met (Y/N), date of closeout, sustainability monitoring plan (indicator, frequency, threshold, owner), re-open trigger. Add closed PIPs to a 'sustainability watch' list reviewed quarterly.",
      },
    },
    {
      id: "asc_qm_09",
      question:
        "An ASC contracts with a peer review organization to conduct external peer review on a sample of cases each quarter. The peer review organization sends recommendations. The medical director files them but does not bring them to the QAPI committee or the medical staff committee. What is the issue?",
      options: [
        "No issue — peer review is confidential and is appropriately filed",
        "Peer review findings inform QAPI and credentialing; failure to integrate them into both processes wastes the review and creates a documentation gap",
        "Peer review is optional and findings can be discarded",
        "Issue only if findings indicate a problem",
      ],
      correctIndex: 1,
      explanation:
        "Peer review is one of the strongest data sources QAPI has, because it brings external clinical eyes to specific cases. Findings need to flow into both QAPI (system improvements) and credentialing (individual performance review for OPPE). Filing them in a folder without action defeats the purpose of paying for the review.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "Peer review confidentiality protects the deliberative process; it does not exempt findings from action. Anonymized themes inform QAPI improvements; clinician-specific findings inform OPPE and reappointment decisions. The integration is what gives peer review value.",
        whyWrong: {
          A: "Confidentiality is a process protection, not a free pass to ignore findings.",
          C: "Peer review may be required by bylaws and is essential to OPPE.",
          D: "Findings inform process even when no individual problem is identified.",
        },
        operationalContext:
          "Build a peer review workflow: external reviewer sends findings, medical director reviews and de-identifies system themes for QAPI, clinician-specific findings go to MSC for OPPE integration, all findings logged with action assigned and tracked to closure. Quarterly summary to the governing body.",
      },
    },
    {
      id: "asc_qm_10",
      question:
        "An ASC is accredited by AAAHC. The administrator says, 'Our accreditation report from 18 months ago is our QAPI program.' What is the issue?",
      options: [
        "No issue — the accreditation review is comprehensive",
        "Accreditation is a snapshot; QAPI is an ongoing program. The accreditation report informs QAPI but does not substitute for ongoing data collection, PIPs, and continuous improvement",
        "No issue if the accreditation is current",
        "Issue only if the report identified deficiencies",
      ],
      correctIndex: 1,
      explanation:
        "Accreditation surveys are periodic snapshots that evaluate the QAPI program at a point in time. They are not the program itself. QAPI is continuous — data collection, PIPs, RCAs, governing body reporting — and runs every day between surveys. Substituting an old accreditation report for an ongoing program is a category error that surveyors recognize immediately.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "QAPI is operational. The accreditation report provides external validation and identifies gaps; the QAPI program executes continuously. They are complementary, not substitutes. A surveyor looking for ongoing QAPI activity is looking at meeting minutes, PIP status, RCA logs, and indicator dashboards from the past 30 days — not an old report.",
        whyWrong: {
          A: "Comprehensive does not mean continuous.",
          C: "Even current accreditation does not substitute for ongoing program activity.",
          D: "QAPI gaps exist regardless of what the prior report said.",
        },
        operationalContext:
          "Use the accreditation report as a 1-year roadmap for QAPI priorities. Each finding becomes a tracked corrective action with an owner, deadline, and re-measurement plan. The roadmap supplements — not replaces — the standing QAPI workplan.",
      },
    },
    {
      id: "asc_qm_11",
      question:
        "The QAPI committee identifies that medication reconciliation at admission is incomplete in 22% of charts. They launch a PIP. The intervention is 'remind staff at the morning huddle.' The re-measurement at 90 days shows the rate is now 18%. The PIP is closed as 'successful.' How would a thoughtful reviewer assess this PIP?",
      options: [
        "Successful — incomplete rate decreased",
        "Marginal at best — a 4-percentage-point change with a generic intervention does not demonstrate meaningful improvement; the PIP closeout should reflect a more rigorous evaluation",
        "Successful — any decrease counts",
        "Successful if the team feels positive about it",
      ],
      correctIndex: 1,
      explanation:
        "PIP rigor matters. Reminders at huddle are not a structural intervention — they're a hope. A 4-percentage-point change might be noise. A defensible PIP closeout would either show a more substantial improvement, or honestly conclude the intervention was insufficient and design a stronger intervention (workflow redesign, EHR hard stops, accountability assignments) for the next cycle.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "A meaningful PIP improves the underlying system. 'Remind people' interventions tend to produce small, non-durable changes. Surveyors look for evidence the program understands the difference between a real fix and a paper fix. Honest closeout that says 'intervention insufficient, next intervention is X' is stronger than declaring victory at 4 points.",
        whyWrong: {
          A: "Direction is right; magnitude is unconvincing and the intervention was weak.",
          C: "Any decrease is not the standard; meaningful improvement is.",
          D: "Team sentiment is not a QAPI metric.",
        },
        operationalContext:
          "Define PIP closeout criteria: target hit (closed successfully), target not hit + intervention insufficient (close, redesign, re-launch), target not hit + intervention sufficient + external factors (close with documented context). Don't allow 'declaration of victory' on weak data.",
      },
    },
    {
      id: "asc_qm_12",
      question:
        "An ASC's QAPI plan includes a section on 'high-risk, high-volume, problem-prone' procedures. Cataract surgery accounts for 60% of cases. The plan does not mention cataract surgery anywhere. What is the issue?",
      options: [
        "No issue — cataracts are routine",
        "High-volume procedures are a defined QAPI priority category; a 60% case mix that is invisible in the QAPI plan is a major plan defect",
        "Routine procedures don't require QAPI focus",
        "Issue only if cataract complications occur",
      ],
      correctIndex: 1,
      explanation:
        "QAPI prioritization is supposed to focus attention on high-volume, high-risk, and problem-prone areas. A procedure that represents 60% of cases is by definition high-volume and warrants explicit indicators and ongoing review. A QAPI plan that ignores it is misaligned with the actual practice.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "The 'high-risk, high-volume, problem-prone' framing is standard QAPI taxonomy. High-volume procedures matter because small problem rates produce many events at scale. Cataract-specific indicators (endophthalmitis surveillance, posterior capsule rupture rate, IOP control) belong in the plan when cataracts dominate the case mix.",
        whyWrong: {
          A: "'Routine' does not exempt a procedure from QAPI focus, especially at high volume.",
          C: "Routine high-volume procedures are exactly where small problems matter most at scale.",
          D: "Action precedes complications; the plan defines the watch.",
        },
        operationalContext:
          "Classify the procedure mix annually: high-volume (>10% of cases), high-risk (defined risk categories), and problem-prone (any with elevated complications in past 12 months). Each category gets named indicators in the QAPI plan.",
      },
    },
    {
      id: "asc_qm_13",
      question:
        "An ASC reports infection data through NHSN. The infection preventionist reviews the NHSN data quarterly. The QAPI committee receives a 1-line summary: 'NHSN data submitted, no concerns.' How would a surveyor evaluate this integration?",
      options: [
        "Acceptable — submitting to NHSN is the requirement",
        "Submission is one piece; the QAPI program must integrate the NHSN-derived rates and benchmarks into its own analysis and respond to any signal in the data",
        "Acceptable if NHSN submission is timely",
        "Acceptable if no SSIs were reported",
      ],
      correctIndex: 1,
      explanation:
        "NHSN submission produces national benchmarks and standardized rates that should drive QAPI conversation. A 1-line summary doesn't engage with the data — does the SIR exceed 1.0? Have rates been climbing? Are specific procedures driving the rate? Surveyors look for evidence the QAPI committee actually reviewed and discussed the rates, not just acknowledged the submission.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "NHSN data is a gift for QAPI: external validation, national benchmarks, standardized definitions. The QAPI committee should review the rates, the SIR, the comparison to peer facilities, the trend over time, and any procedure-specific signals — and document discussion and decisions. A 1-line summary throws away the value.",
        whyWrong: {
          A: "Submission is the input; integration into QAPI is the value.",
          C: "Timeliness of submission is necessary but not sufficient.",
          D: "Zero events still warrant review of process indicators (compliance with bundle elements, surveillance methodology, etc.).",
        },
        operationalContext:
          "Standing quarterly QAPI agenda item: 'NHSN data review.' Present the rates, the SIR, the trend, peer comparisons, and any actionable signals. Document the discussion and decisions in the minutes. Surveyors will pull the minutes and the corresponding NHSN report to confirm alignment.",
      },
    },
    {
      id: "asc_qm_14",
      question:
        "The governing body has not received a QAPI report in 6 months. The QAPI committee is meeting and producing dashboards, but the chair has not been forwarding them. The administrator says, 'They get a lot of email.' What is the governance and QAPI issue?",
      options: [
        "No issue — the QAPI committee is functioning",
        "QAPI must report to the governing body, with documented receipt and discussion; failure to do so means the governing body cannot fulfill its oversight role and the QAPI program is operating without governance",
        "No issue if the committee is meeting regularly",
        "Issue only if a sentinel event occurred during the gap",
      ],
      correctIndex: 1,
      explanation:
        "QAPI without governance reporting is QAPI in a vacuum. The governing body is legally responsible for the quality of care; that responsibility cannot be discharged without information. The reporting flow is QAPI committee → governing body, with documented receipt, review, and decisions in the minutes. Six months of non-reporting is a serious finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044, Q-0061 (42 CFR 416.41 and 416.43)",
      tutor: {
        whyCorrect:
          "The QAPI-to-governance bridge is a defined obligation. The governing body has to receive the data, discuss it, and act on it. The chair's responsibility is to deliver the report; the governing body's responsibility is to engage with it. Email volume is not an excuse — establish a structured delivery (formal meeting agenda item, calendar invite, signed acknowledgment).",
        whyWrong: {
          A: "Committee function is necessary but not sufficient — the loop closes at governance.",
          C: "Meeting cadence and reporting are separate requirements; both must be met.",
          D: "The reporting failure exists independent of any single event during the gap.",
        },
        operationalContext:
          "Schedule QAPI as a standing agenda item at every governing body meeting. The QAPI chair (or designee) presents in person or by written report. The governing body's discussion and decisions are recorded in minutes. Distribution lists are confirmed annually.",
      },
    },
    {
      id: "asc_qm_15",
      question:
        "An ASC's QAPI program tracks 47 indicators monthly. The QAPI committee meeting agenda regularly runs over time and most indicators receive only a brief mention. The committee has not closed a PIP in 14 months. What might be wrong with the program design?",
      options: [
        "Nothing — comprehensive tracking is rigorous",
        "Tracking too many indicators dilutes attention; an effective QAPI program prioritizes a smaller number of focused indicators tied to current improvement projects, with broader indicators monitored at lower frequency",
        "The committee just needs longer meetings",
        "Add more indicators",
      ],
      correctIndex: 1,
      explanation:
        "Indicator overload is a common pathology. With 47 indicators, no single one gets enough attention to drive a project to closure. Effective QAPI programs use a tiered approach: a small number of priority indicators tied to active PIPs (5–10), a moderate number of standing indicators reviewed quarterly (10–15), and broader surveillance reviewed annually. Focus produces improvement; spread produces monitoring.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43(a))",
      tutor: {
        whyCorrect:
          "Indicator selection is itself a QAPI design decision. The plan should explicitly tier indicators by priority, frequency of review, and connection to current PIPs. Surveyors evaluate whether the indicator portfolio is intentional or accumulated.",
        whyWrong: {
          A: "Comprehensive measurement without action is monitoring, not improvement.",
          C: "Time pressure is a symptom; the design problem is indicator overload.",
          D: "Adding more indicators worsens the problem.",
        },
        operationalContext:
          "Annual QAPI plan review prunes the indicator list. Each indicator must justify its place: linked PIP, regulatory requirement, sentinel-event surveillance, or known risk monitoring. Indicators without active use move to annual review or are retired.",
      },
    },
  ],
};
