import type { Level } from "./schema";

export const ascQualityOfCareLevel: Level = {
  id: "asc_quality_of_care",
  module: "asc",
  name: "Quality of Care Provided",
  description:
    "Direct patient care quality: scope of practice, lab specimen handling, patient education, and emergency transfer to hospital.",
  icon: "HeartPulse",
  color: "hsl(340, 70%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Quality of Care Provided",
    plainLanguageSummary:
      "This chapter is about what actually happens at the bedside and at the moment a patient needs help your ASC cannot give. Every clinician has to practice within their license and their granted privileges — drift outside that scope is one of the easiest things for a surveyor to spot in a chart. Specimens have to be labeled, logged, and tracked from the moment they leave the patient until results come back, with biological products handled per manufacturer instructions. Patients have to be educated about their condition and about preventive measures, in language they understand, and the education has to be documented. And when a patient needs more than the ASC can deliver, the transfer to a hospital has to be effective, immediate, and supported by either a current written transfer agreement with a Medicare-participating hospital or documented hospital admitting privileges for every physician working in the ASC. The ASC must also periodically send the local hospital written notice of its operations and patient population. Surveyors look hardest at the transfer machinery because that is where ASC patients die when it fails.",
    keyOperationalExpectations: [
      "Every clinician practices within the scope of their license, certification, and granted privileges, with supervision documented where required.",
      "Lab specimen identification, logging, transport, and result tracking close the loop so no result is lost between collection and the ordering professional.",
      "Biological products are handled, stored, and transported per manufacturer instructions and applicable regulatory requirements.",
      "Patient education about diagnosis, treatment, and preventive measures (including post-op infection, VTE, and PE prevention in surgical settings) is documented in the chart.",
      "The ASC has an effective procedure for the immediate transfer to a hospital of patients requiring emergency care beyond ASC capability — and the receiving hospital is Medicare-participating (or meets 42 CFR 482.2 emergency-services payment requirements).",
      "The ASC periodically provides the local hospital with written notice of its operations and patient population served, and keeps proof of delivery on file.",
      "Specialty consultation and referral arrangements are made in advance, communicated clearly to the patient, and arranged with the accepting professional — not left for the patient to figure out.",
    ],
    commonRiskPoints: [
      "Expired transfer agreement with no documented hospital admitting-privileges fallback for every physician on staff.",
      "Specimens hand-carried with no log, no chain-of-custody documentation, and no closed-loop confirmation that results returned to the chart.",
      "Patient education recorded as 'patient verbalized understanding' with no description of what was actually taught.",
      "Receiving hospital named in the transfer agreement is not Medicare-participating and does not meet 42 CFR 482.2 emergency-services payment criteria.",
      "No written notice ever sent to the local hospital — surveyors ask for the dated letter and proof of delivery.",
    ],
    cmsTags: [
      "42 CFR 416.41(b)(1) — immediate transfer to hospital",
      "42 CFR 416.41(b)(2) — Medicare-participating receiving hospital",
      "42 CFR 416.41(b)(3) — written notice to local hospital",
      "Q-0042 (transfer arrangements)",
    ],
  },
  studyMaterial: [
    {
      title: "What Happens When a Clinician Performs a Procedure Not on Their Privilege List?",
      content:
        "Every clinician at the ASC — physician, anesthesiologist, CRNA, RN, surgical tech — has to practice within their license, their certification, and the privileges granted by the governing body. Surveyors confirm this by tracing a chart against the clinician's signed privilege list. A surgeon performing a procedure that is not on their delineation-of-privileges sheet, even once, is a finding. A nurse documenting an assessment a CMA performed is a finding. The chart is the evidence.",
      keyPoint:
        "If it isn't on the privilege list, it shouldn't be in the chart. Surveyors will compare the two side by side.",
    },
    {
      title: "What Must an ASC Track From Specimen Collection to Result in the Chart?",
      content:
        "From the moment a specimen leaves the patient, the ASC owns it: correct labeling at the point of collection, a log entry, defined transport conditions, a defined receiving lab with current CLIA, and a documented confirmation that the result returned to the ordering professional and to the chart. Biological products (vaccines, blood derivatives) follow manufacturer instructions for storage and transport. A specimen that vanishes between OR and lab is the ASC's failure to track, not the courier's.",
      keyPoint:
        "If you cannot show how a specimen got from the patient to a result in the chart, the loop is open and the surveyor will write it up.",
    },
    {
      title: "What Must Patient Education Documentation Actually Show?",
      content:
        "Patients must be educated about their condition, treatment, and preventive measures. In surgical settings, that explicitly includes post-operative infection prevention, VTE, and PE awareness when clinically relevant. Documentation must show what was taught — not a checkbox saying 'taught.' Materials should be in a language and at a literacy level the patient can understand, and interpreter services have to be offered when needed.",
      keyPoint:
        "A chart entry that says 'education provided, patient verbalized understanding' with nothing about what was taught is a half-met requirement at best.",
    },
    {
      title: "What Are the Two Ways an ASC Can Satisfy the Hospital Transfer Requirement?",
      content:
        "Either (a) the ASC has a current written transfer agreement with a Medicare-participating hospital (or one that meets 42 CFR 482.2 emergency-services payment requirements), or (b) every physician performing procedures in the ASC has documented admitting privileges at such a hospital. There is no third option, no informal pathway, and no exception for low-acuity facilities. When a patient deteriorates, the transfer has to be immediate and effective — an expired agreement at that moment is a patient-safety failure as well as a survey finding.",
      keyPoint:
        "Verify the transfer agreement date and the receiving hospital's Medicare status every quarter. The day a patient needs transfer is the wrong day to discover the gap.",
    },
    {
      title: "What Is the Written Notice Obligation to the Local Hospital Under 42 CFR 416.41(b)(3)?",
      content:
        "42 CFR 416.41(b)(3) requires the ASC to periodically provide the local hospital with written notice of its operations and patient population served. This is so the receiving hospital knows what to expect when it accepts your transfers. Most ASCs sign a transfer agreement and stop there, then can't produce a single dated notice letter when a surveyor asks. Send it annually, on the same date, with proof of delivery, and file the copy in the survey-ready binder.",
      keyPoint:
        "The transfer agreement and the periodic written notice are two different requirements — and the notice is the one ASCs forget.",
    },
    {
      title: "What Three Documents Must Be in the Chart Before Any Procedure?",
      content:
        "Before any procedure, the chart has to show a current history and physical, an informed consent that names the actual procedure being performed, and a documented medication reconciliation. Standard E (high-quality health care provided) wants surveyors to see that the diagnosis, the planned treatment, and the patient's full medication list line up — including supplements, OTC drugs, and anything the patient stopped taking pre-op. A consent that says 'right knee arthroscopy' when the op note says 'left knee' is a wrong-site setup. A med rec that lists only prescription drugs misses the warfarin, the ginkgo, and the GLP-1 the patient forgot to mention until pre-op.",
      keyPoint:
        "If a surveyor asks 'show me the H&P, the consent, and the med rec for this case,' all three should be in the chart, dated before the case, and consistent with each other.",
    },
    {
      title: "What Must Happen When a Vaccine or Biological Product Has a Temperature Excursion?",
      content:
        "Standard D extends beyond specimens to cover biological products: vaccines, blood derivatives, biologic injectables. Storage and transport have to follow the manufacturer's package insert and any applicable program rules (CDC's Vaccine Storage and Handling Toolkit, VFC if you're a VFC site). The trap is the overnight temperature excursion: staff see the alarm, return the fridge to range, and keep using the product. That is not the standard. The product gets quarantined, the manufacturer (and VFC coordinator) gets called, the disposition gets documented, and only then does the product return to inventory or get discarded.",
      keyPoint:
        "A temperature excursion is a triggering event for an investigation, not a self-resolving alarm. The surveyor will ask for the excursion log and the disposition note.",
    },
    {
      title: "What Must Be Documented When a Procedure Is Started and Then Abandoned?",
      content:
        "Standard E and the surgical-services standards together require a documented post-anesthesia assessment by a qualified provider before the patient moves out of Phase I recovery, and a separate discharge assessment before the patient leaves the ASC. Vital signs, level of consciousness, pain, nausea, and any complications all have to be captured by the named clinician at named times. When a procedure is started and abandoned (case canceled mid-procedure for clinical or equipment reasons), the chart has to document why it was stopped, what was done before stopping, the patient's condition at the time, who made the decision, and what the follow-up plan is — these are not 'incomplete' charts; they are complete charts of a case that ended early.",
      keyPoint:
        "If a surveyor asks 'who assessed this patient post-op and when,' you should be able to point to a named provider, a timestamp, and a documented set of assessment elements — not 'the nurse signed off.'",
    },
    {
      title: "What Does It Mean for an ASC to Practice in Accordance With Professional and Ethical Conduct?",
      content:
        "Chapter 4 opens with the principle that the ASC provides care in accordance with professional practice and ethical conduct. Operationally that means: no dual-relationship conflicts (a surgeon cannot be the proceduralist and the sole anesthesia provider on a case requiring sedation), no procedures performed for financial reasons that aren't clinically indicated, no privileging shortcuts, and a culture where staff can raise concerns without retaliation. Surveyors look for the policy, but they also look at the chart and the schedule for patterns — high volumes of marginally indicated cases, repeated scope drift, or single-provider days where roles overlap improperly all read as ethical-floor problems.",
      keyPoint:
        "Standards of care, prevailing laws, and ethical conduct (Standard B / Std. A) are the floor — when they crack, every other Chapter 4 standard becomes vulnerable.",
    },
  ],
  questions: [
    {
      id: "asc_qoc_01",
      question:
        "A surgeon's delineation of privileges at the ASC lists laparoscopic cholecystectomy and hernia repair. During a chart audit, the surveyor finds two recent breast biopsies performed by this surgeon. The medical director says, 'He's done dozens of these elsewhere, no complications.' What is the regulatory issue?",
      options: [
        "No issue — outside experience supports the surgeon's competency",
        "Standard-level — he just needs to add the procedure to his privilege list retroactively",
        "Condition-level — the surgeon practiced outside his granted privileges; the procedures were performed without legal authority at this ASC",
        "No issue — breast biopsy is a minor procedure that does not require specific privileging",
      ],
      correctIndex: 2,
      explanation:
        "Privileges are facility-specific and procedure-specific. Experience at another facility does not extend to your ASC. The two breast biopsies were performed without granted authority at this site, which is both a scope-of-practice finding and a governing-body credentialing failure. Retroactive privileging does not erase the gap.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "42 CFR 416.42 (Surgical services - scope) / AAAHC Ch.4 Std. B",
      tutor: {
        whyCorrect:
          "Health care professionals must practice in accordance with standards of care, prevailing laws and regulations, and — at the facility level — the privileges granted by that facility's governing body. Two procedures done outside the granted set are two events of unauthorized practice, regardless of skill or outcome.",
        whyWrong: {
          A: "Outside experience may inform a privileging decision but does not substitute for one at your ASC.",
          B: "Retroactive privileging treats the symptom (paperwork) and ignores the finding (unauthorized practice already occurred).",
          D: "Every procedure performed in an ASC must be covered by the surgeon's delineated privileges. There is no 'minor procedure' carve-out.",
        },
        operationalContext:
          "Build a pre-op checklist that pulls the surgeon's privilege list and matches the scheduled CPT codes against it. The schedule clerk should not be able to book a case that isn't on the list without a documented temporary or emergency privilege.",
      },
    },
    {
      id: "asc_qoc_02",
      question:
        "An ASC sends pathology specimens out daily by courier. The pre-op nurse labels the container at the bedside and drops it at the OR desk. There is no specimen log, no temperature requirement noted, and the next time anyone hears about a specimen is when results return — except when they don't. Two specimens have gone missing in 6 months. Where is the gap?",
      options: [
        "The courier is at fault — the ASC has no specimen-tracking obligation once it leaves the building",
        "The ASC has no closed-loop tracking system — labeling, logging, transport conditions, and result-receipt confirmation all need to be documented",
        "Specimen tracking is the lab's responsibility once the courier picks up",
        "There is no issue — two missing specimens out of hundreds is within acceptable variance",
      ],
      correctIndex: 1,
      explanation:
        "Standard D requires policies and procedures for identifying, storing, and transporting laboratory specimens, with logging and tracking that ensures every result is obtained and reported to the ordering professional in a timely manner. A drop-off-and-hope workflow has no log, no transport-condition control, and no closed loop, so missing specimens have nowhere to be discovered until the chart is incomplete.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. D (specimen handling)",
      tutor: {
        whyCorrect:
          "The ASC owns the specimen from collection until the result is filed in the chart. That requires a log entry at collection, a confirmed handoff to transport, transport conditions appropriate to the specimen, a defined receiving lab with verified CLIA, and a confirmation that the result returned. If any link is missing, the loop is open.",
        whyWrong: {
          A: "The courier is a contracted vendor; the ASC retains responsibility for the patient's specimen and result.",
          C: "The lab handles the specimen once it arrives, but the tracking obligation begins at the patient, not at the courier handoff.",
          D: "Missing specimens are never within acceptable variance — each one is a patient who may need to repeat a procedure or be undertreated.",
        },
        operationalContext:
          "Implement a specimen log (paper or electronic) that captures: patient identifier, specimen type, collection time, collector initials, transport conditions, courier signature, lab receipt confirmation, and result-return date. Audit weekly for unclosed entries.",
      },
    },
    {
      id: "asc_qoc_03",
      question:
        "An RN documents 'pre-op education provided. Patient verbalized understanding.' on every pre-op chart in the audit sample. The chart contains no description of what was taught, no patient-specific risk discussion, and no preventive measures. What will the surveyor likely conclude?",
      options: [
        "Compliant — 'verbalized understanding' is the standard documentation phrase",
        "Education is documented but the documentation does not show what was actually taught, including preventive measures relevant to the procedure (e.g., post-op infection, VTE)",
        "Not applicable — patient education is a recommendation, not a requirement",
        "Compliant — patient education is the surgeon's responsibility, not nursing's",
      ],
      correctIndex: 1,
      explanation:
        "Under AAAHC Chapter 4 Standard F (and CMS 42 CFR 416.50 notice/rights requirements), patients must be educated regarding their condition and appropriate preventive measures. Documentation must show what was actually taught — generic phrases tell the surveyor nothing about whether substantive education occurred. In surgical settings, post-operative care instructions, infection recognition, and relevant preventive topics should be documented specifically. VTE/PE prevention education is best practice and may be required by facility policy or accreditation standard; the key principle is that education must be documented with substance, not just acknowledged.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. F (patient education)",
      tutor: {
        whyCorrect:
          "Patient education is a substantive requirement. The chart entry has to demonstrate the substance: topics covered, materials given, language and literacy considerations, and patient-specific risks. 'Verbalized understanding' alone is the documentation equivalent of 'received and accepted' in governing-body minutes — acknowledgment without substance.",
        whyWrong: {
          A: "It is a phrase, not a record. Surveyors look behind the phrase for evidence of actual content.",
          C: "Patient education is required and is part of routine clinical care; it is not optional.",
          D: "Education is a shared responsibility. Nursing routinely delivers and documents pre- and post-op education; saying it is the surgeon's job does not satisfy the requirement.",
        },
        operationalContext:
          "Adopt an education template that lists the topics for the procedure (incision care, signs of infection, VTE prevention, when to call, follow-up appointment) with checkboxes per topic and a free-text field for patient-specific issues. The phrase 'verbalized understanding' is allowed only after the topics are documented as taught.",
      },
    },
    {
      id: "asc_qoc_04",
      question:
        "A patient at the ASC develops an unexpected finding mid-procedure that requires specialty consultation. The surgeon tells the patient, 'You'll need to see a cardiologist — go find one.' No referral is made, no consult arranged, and no documentation is placed in the chart. What standard is at issue?",
      options: [
        "None — referral logistics are the patient's responsibility once the diagnosis is communicated",
        "Standard G is at issue — adequate specialty consultation services must be available by prior arrangement, and the referral must be clearly outlined to the patient and arranged with the accepting professional",
        "Standard G is satisfied because the patient was informed verbally",
        "The surgeon is correct — ASCs do not arrange outside referrals",
      ],
      correctIndex: 1,
      explanation:
        "AAAHC Chapter 4 Standard G requires that adequate specialty consultation services be available by prior arrangement and that referrals be clearly outlined to the patient and arranged with the accepting health care professional. Under CMS, continuity of care requirements flow from 42 CFR 416.52(c) (post-surgical assessment and discharge planning). 'Go find one' is neither prior arrangement nor an arranged referral — it is abandonment of continuity of care and will be cited under quality of care standards.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. G (transfer of care between professionals)",
      tutor: {
        whyCorrect:
          "Continuity of care is the ASC's obligation, not the patient's. The expectation is that the ASC has identified specialty resources in advance, makes the actual referral (call, fax, EHR order), confirms the accepting professional, and documents all of it in the chart so the patient has a real path forward.",
        whyWrong: {
          A: "The ASC owns the handoff, not the patient.",
          C: "Verbal information without arranged follow-up is not a referral; it is a recommendation the ASC has not acted on.",
          D: "ASCs are explicitly required to assist patients with the transfer of care from one professional to another when the need arises.",
        },
        operationalContext:
          "Maintain a current specialty referral list with phone numbers, intake processes, and turnaround expectations. Build a referral order set that requires a confirmed accepting provider before the chart can be closed.",
      },
    },
    {
      id: "asc_qoc_05",
      question:
        "An ASC's transfer agreement with the local Medicare-participating hospital expired 9 months ago. The administrator says, 'Two of our four surgeons have admitting privileges at that hospital, and the other two have privileges at a different hospital across town.' Does the ASC meet the immediate-transfer requirement?",
      options: [
        "Yes — partial physician privileges at the hospital satisfy the requirement",
        "Yes — the relationship is informal but functional",
        "No — the requirement is either a current written transfer agreement OR documented admitting privileges at a Medicare-participating hospital for ALL physicians performing procedures at the ASC, and only two of four meet the privileges fallback",
        "Yes — only one physician needs admitting privileges to satisfy the rule",
      ],
      correctIndex: 2,
      explanation:
        "42 CFR 416.41(b)(1) requires an effective procedure for the immediate transfer of patients to a hospital. Compliance is achieved by either (1) a current written transfer agreement with a Medicare-participating hospital, or (2) documented admitting privileges for ALL physicians performing procedures at the ASC. Two of four does not satisfy the privileges pathway, and the agreement is expired — both pathways fail.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0042 (42 CFR 416.41(b)(1))",
      tutor: {
        whyCorrect:
          "The 'all physicians' requirement is the trap most ASCs miss. As soon as one physician on the schedule does not have admitting privileges at the receiving hospital, the privileges pathway fails for the whole facility and a current written agreement is the only remaining option. An expired agreement plus partial privileges is a citation on day one.",
        whyWrong: {
          A: "Partial privileges are not the rule; ALL physicians must have them for the privileges pathway to satisfy compliance.",
          B: "Informal relationships have no regulatory weight. The receiving hospital can change ownership, leadership, or policy without warning.",
          D: "There is no 'one physician is enough' shortcut. The privileges pathway is all-or-nothing.",
        },
        operationalContext:
          "Set a tickler 90 days before the transfer agreement expires. Maintain a parallel folder of every physician's hospital admitting-privilege letter as a documented backup. Do both — never rely on one alone.",
      },
    },
    {
      id: "asc_qoc_06",
      question:
        "An ASC's transfer agreement names a hospital that is local and convenient — but the hospital does not participate in Medicare and does not meet the 42 CFR 482.2 requirements for payment of emergency services. Does the agreement satisfy the regulation?",
      options: [
        "Yes — the regulation only requires that the hospital be local",
        "Yes — Medicare participation is preferred but not required",
        "No — the receiving hospital must be a Medicare-participating hospital, or a non-participating hospital that meets the 42 CFR 482.2 requirements for payment of emergency services",
        "Yes — Medicare participation is irrelevant to the transfer requirement",
      ],
      correctIndex: 2,
      explanation:
        "42 CFR 416.41(b)(2) (Q-0042) requires the receiving hospital to be a local Medicare-participating hospital, or a local non-participating hospital that meets the requirements for payment for emergency services under 42 CFR 482.2. A signed agreement with a hospital that satisfies neither is a non-compliant agreement, even if it looks like one on paper.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0042 (42 CFR 416.41(b)(2))",
      tutor: {
        whyCorrect:
          "Medicare needs to know that a transferred ASC patient will be received by a hospital where the federal payment and EMTALA framework apply. A non-participating hospital that does not meet 42 CFR 482.2 leaves the patient and the ASC in a regulatory gap.",
        whyWrong: {
          A: "Local is necessary but not sufficient; Medicare status is a separate, hard requirement.",
          B: "Medicare participation (or 482.2 compliance) is required, not preferred.",
          D: "Medicare participation is the entire point of the receiving-hospital criterion.",
        },
        operationalContext:
          "Confirm the receiving hospital's CCN (CMS Certification Number) and Medicare status when you sign and at every renewal. Keep a printed Medicare-participation lookup screenshot in the survey-ready binder dated within the last quarter.",
      },
    },
    {
      id: "asc_qoc_07",
      question:
        "A surveyor reviews an ASC's hospital transfer documentation and finds that the ASC has no written transfer agreement with any hospital. The administrator explains that all physicians performing procedures have admitting privileges at County General, which is a Medicare-certified hospital. Is the ASC compliant under 42 CFR 416.41(b)?",
      options: [
        "No — all ASCs must have a formal written transfer agreement regardless of physician privileges",
        "No — the surveyor would require both a written agreement and admitting privileges as independent safeguards",
        "Yes — 42 CFR 416.41(b)(1) allows either a written transfer agreement with a qualifying hospital or physicians who have admitting privileges at a Medicare-certified hospital; this ASC satisfies the requirement through admitting privileges",
        "Yes — as long as transfers have gone smoothly historically, no formal documentation is required",
      ],
      correctIndex: 2,
      explanation:
        "42 CFR 416.41(b)(1) requires that an ASC have a written transfer agreement with a hospital that meets specified conditions, OR that the physicians performing surgery at the ASC have admitting privileges at such a hospital. This is an either/or provision — a written agreement is one path, physician admitting privileges are the other. The hospital must be Medicare-certified and meet the other criteria in 416.41(b)(2). Many ASCs satisfy this requirement through admitting privileges rather than a formal written agreement.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0039 / Q-0040 (42 CFR 416.41(b)(1)–(b)(2))",
      tutor: {
        whyCorrect:
          "The regulation explicitly offers two paths: a transfer agreement or admitting privileges. Understanding this either/or structure is critical — surveyors sometimes incorrectly pressure ASCs without written agreements, but if admitting privileges at a qualifying hospital are documented, the requirement is met.",
        whyWrong: {
          A: "Incorrect — the regulation explicitly allows admitting privileges as an alternative to a written agreement.",
          B: "Incorrect — both are not required simultaneously; the regulation specifies 'or,' not 'and.'",
          D: "Historical smooth operations are not a substitute for meeting the regulatory standard — the standard is about having the structural relationship, not about outcomes.",
        },
        operationalContext:
          "Maintain a current list of all physicians performing procedures, their hospital privileges (with documentation of the hospital's Medicare certification), and renewal dates. If using admitting privileges as your compliance path, audit annually to ensure no surgeon's hospital privileges have lapsed — a lapse creates a gap in the ASC's 416.41(b) compliance.",
      },
    },
    {
      id: "asc_qoc_08",
      question:
        "A surveyor observes a surgical tech performing pre-procedure patient assessments — taking history, documenting medications, and signing off on consent verification. The state nurse practice act and the ASC's job description both reserve these tasks for licensed nursing staff. What is the finding?",
      options: [
        "No finding — surgical techs commonly perform these tasks",
        "Standard-level finding — scope of practice has drifted; assessment tasks reserved for licensed nursing staff are being performed by an unlicensed role",
        "No finding — the medical director can verbally authorize role expansion",
        "No finding — as long as a nurse co-signs, the work is compliant",
      ],
      correctIndex: 1,
      explanation:
        "Standard B requires health care professionals to practice in accordance with standards of care and prevailing laws and regulations. State scope-of-practice statutes and the ASC's own job descriptions are part of that framework. A surgical tech performing licensed-nursing assessments is practicing outside their authorized scope, regardless of competence.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. B / Std. C (scope and supervision)",
      tutor: {
        whyCorrect:
          "Scope drift is the most common quiet finding in ASCs because it grows by accident — short staffing, helpful staff, no one objecting. Surveyors find it by observation and by comparing job descriptions to actual chart entries.",
        whyWrong: {
          A: "Common practice elsewhere is not a defense if it violates the state nurse practice act or facility job descriptions.",
          C: "The medical director cannot expand a role beyond what the state practice act and the facility's documented scope allow.",
          D: "A co-signature does not retroactively bring an unauthorized act into scope.",
        },
        operationalContext:
          "Audit your job descriptions against actual workflows annually. If staff are doing work that isn't in their description and isn't in their scope, either change the workflow or — if state law allows — change the description and provide documented competency training before the work continues.",
      },
    },
    {
      id: "asc_qoc_09",
      question:
        "A small ASC has one anesthesiologist on staff. On a busy day, the anesthesiologist provides anesthesia for the morning case and then performs a pain-management injection on the next patient as the proceduralist. What is the most defensible regulatory position?",
      options: [
        "No issue — physicians can perform multiple roles in the same shift",
        "Standard-level concern — the anesthesiologist must be privileged for the procedure they are performing as the proceduralist, and a separate qualified provider must be responsible for any anesthesia care that patient receives during the procedure",
        "Standard-level concern only — the anesthesiologist can do both as long as no sedation is involved",
        "No issue — the medical director's verbal approval is sufficient",
      ],
      correctIndex: 1,
      explanation:
        "Two scope-of-practice issues converge. First, the anesthesiologist must hold facility privileges for whatever procedure they perform as proceduralist — anesthesia privileges do not automatically include pain-procedure privileges. Second, if the procedure requires sedation or monitored anesthesia, an independent qualified anesthesia provider should be responsible for that care; one provider cannot simultaneously function as both proceduralist and anesthesia provider when both roles are clinically required.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. B / Std. C (qualifications, supervision, scope)",
      tutor: {
        whyCorrect:
          "Each role at the bedside has to be filled by someone privileged to do it. Wearing two hats is operationally tempting in a small ASC but creates two simultaneous risks: the procedural privilege gap and the divided-attention risk to the patient. Surveyors look at this carefully when they see a single-provider day.",
        whyWrong: {
          A: "Multiple roles are allowed in principle, but each role still requires the right privileges and the right separation when sedation or monitored anesthesia is involved.",
          C: "The sedation question matters, but the privileging question stands on its own — the anesthesiologist must be privileged for the procedure regardless.",
          D: "A medical director's verbal approval cannot grant clinical privileges; only the governing body can.",
        },
        operationalContext:
          "If you operate a small ASC with overlapping roles, document each provider's privileges for every role they perform and define in policy the situations in which a second qualified provider is required (any procedure requiring sedation/MAC, any procedure where the proceduralist's attention cannot reasonably be divided).",
      },
    },
    {
      id: "asc_qoc_10",
      question:
        "An ASC contracts with an outside reference lab for cytology. The contract is signed and current. The administrator cannot produce a copy of the lab's CLIA certificate or any documentation that the certificate was verified within the last two years. What is the gap?",
      options: [
        "No gap — a signed contract is sufficient",
        "The ASC is responsible for verifying that contracted laboratory services are appropriately certified (CLIA) and for documenting the verification on a defined cadence",
        "The lab is responsible for sending its CLIA certificate; the ASC has no obligation",
        "CLIA verification applies only to in-house labs, not contracted services",
      ],
      correctIndex: 1,
      explanation:
        "Contracted lab services have to be verified — having an active, appropriate CLIA certificate is a precondition for the lab to legally produce the results the ASC relies on. The ASC cannot defer this to the vendor; if the lab loses CLIA status, the ASC is the entity using uncertified results, and that is the citation.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. C / Std. D (qualified personnel, specimen handling)",
      tutor: {
        whyCorrect:
          "The ASC is using lab results to make clinical decisions for its patients. The lab's certification is the floor of confidence in those results. Verifying it (and documenting the verification annually) is how the ASC discharges its quality obligation for contracted services.",
        whyWrong: {
          A: "A signed contract creates the relationship; verification confirms the relationship is with a qualified entity.",
          C: "The vendor may send the certificate, but the ASC has the obligation to verify and document.",
          D: "CLIA applies wherever clinical lab testing happens — including contracted labs whose results enter the ASC chart.",
        },
        operationalContext:
          "Maintain a contract log line for each lab: vendor name, CLIA number, certificate type, expiration date, last verification date, next verification due. Verify annually at the same governing-body meeting so it never slips.",
      },
    },
    {
      id: "asc_qoc_11",
      question:
        "A vaccine refrigerator at the ASC shows a temperature excursion overnight. Staff record the temperature, return the fridge to range, and continue using the vaccines the next day without contacting the manufacturer or VFC coordinator. What is the issue?",
      options: [
        "No issue — brief excursions do not affect vaccine viability",
        "Biological products must be handled, stored, and transported in accordance with manufacturer instructions and applicable regulatory requirements; an excursion requires investigation, manufacturer/VFC consultation, and documented disposition before continued use",
        "No issue — the temperature was returned to range so the vaccines are safe",
        "The fridge alarm is the issue, not the vaccines",
      ],
      correctIndex: 1,
      explanation:
        "Standard D explicitly requires biological products to be handled per manufacturer instructions and regulatory requirements. A temperature excursion is the trigger for an investigation, not for assumed safety. Manufacturer guidance (and VFC program rules where applicable) determine whether the affected vaccines remain viable, must be quarantined, or must be discarded — and the disposition has to be documented.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. D (biological products)",
      tutor: {
        whyCorrect:
          "The viability of the biological product after an excursion is not a guess. The manufacturer publishes time/temperature tolerances, and CDC's Vaccine Storage and Handling Toolkit defines the response. Skipping the consultation step means the next dose drawn could be a clinically inert injection given to a patient.",
        whyWrong: {
          A: "Brief excursions can render some vaccines inactive; the answer depends on the product and the magnitude.",
          C: "Returning to range fixes the storage condition going forward; it does not retroactively repair vaccines that were out of range.",
          D: "Both matter — fix the alarm and investigate the affected product.",
        },
        operationalContext:
          "Have a written excursion SOP: quarantine affected stock, document time-out-of-range and minimum/maximum temperatures, contact the manufacturer (and VFC program if a VFC site), record the disposition decision, and only return stock to inventory after written clearance. File the excursion report in the QAPI binder.",
      },
    },
    {
      id: "asc_qoc_12",
      question:
        "A patient who speaks limited English is given a pre-op teaching pamphlet in English and signs a consent in English. The chart shows 'patient verbalized understanding.' No interpreter was offered, no translated materials were provided, and no documentation of language services exists. Which standard is most directly implicated?",
      options: [
        "No standard is implicated — verbal understanding is sufficient",
        "Standard F (patient education) is implicated — education must be delivered in a way the patient can understand, with interpreter services or translated materials when needed, and the language-services step has to be documented",
        "Patient rights, not quality of care, is the only relevant chapter",
        "Federal law does not require interpreter services in outpatient settings",
      ],
      correctIndex: 1,
      explanation:
        "Standard F requires effective patient education. Education delivered in a language the patient does not adequately understand is not effective education — and 'verbalized understanding' from a limited-English-proficiency patient handed an English document is a documentation pattern surveyors recognize immediately. Interpreter services or translated materials must be offered, used, and documented. (Patient rights and federal civil-rights obligations also apply, but Standard F is the most direct quality-of-care anchor.)",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. F (patient education)",
      tutor: {
        whyCorrect:
          "Quality of care includes whether the patient can act on the education provided. If the patient cannot read the discharge instructions in their own language, the standard is not met no matter what the chart says. The fix is interpreter services (in-person, phone, or video) and translated written materials, with documentation of which was used.",
        whyWrong: {
          A: "'Verbalized understanding' from an LEP patient given English-only materials is a hollow chart entry.",
          C: "Patient rights overlaps, but Standard F directly governs the educational content and its effectiveness.",
          D: "Federal civil-rights and language-access obligations do apply to outpatient settings receiving federal funds, including most ASCs.",
        },
        operationalContext:
          "Maintain access to a 24/7 interpreter service (phone or video). Document every encounter where language services were offered, whether they were used, and the interpreter's identifier. Stock translated versions of the most-used patient education materials.",
      },
    },
    {
      id: "asc_qoc_13",
      question:
        "A patient at the ASC needs cardiology follow-up. The discharge nurse hands the patient a sticky note with the name of a cardiology group and tells them to call. Does this satisfy Standard G's requirement for assistance with transfer of care?",
      options: [
        "Yes — the patient was given the cardiology group's name",
        "No — Standard G requires that the referral be both clearly outlined to the patient AND arranged with the accepting health care professional; handing over a name does neither",
        "Yes — outpatient referrals do not require ASC arrangement",
        "Yes — only inpatient transfers must be arranged in advance",
      ],
      correctIndex: 1,
      explanation:
        "Standard G has two elements: clearly outline the referral to the patient (what specialty, why, what to expect) and arrange it with the accepting professional (call, appointment, faxed records). A sticky note satisfies neither and leaves the patient to navigate the system alone — which is the failure mode the standard is designed to prevent.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. G (transfer of care between professionals)",
      tutor: {
        whyCorrect:
          "Continuity of care depends on the ASC actually completing the handoff. The accepting professional needs to know who is coming, why, and with what records. The patient needs to know the appointment, the address, and the prep. Both have to be done, and both have to be documented.",
        whyWrong: {
          A: "A name is not a referral; it is the start of one.",
          C: "Outpatient referrals are explicitly within Standard G's scope — they are the most common kind of referral the ASC arranges.",
          D: "The standard applies to any transfer of a patient's care from one professional to another, inpatient or outpatient.",
        },
        operationalContext:
          "Build a discharge workflow that requires the referral to be confirmed (accepting provider name, appointment date or scheduling number, records sent) before the patient is discharged. Print the confirmation for the patient and file a copy in the chart.",
      },
    },
    {
      id: "asc_qoc_14",
      question:
        "A patient at the ASC has a serious post-procedure event. The transfer to the receiving hospital is delayed because the EMS crew is en route to another call. The OR holds the patient for 35 minutes with the surgeon and anesthesia provider at bedside. After transfer, the chart contains a brief note that says 'transferred to hospital.' What should the documentation show?",
      options: [
        "Nothing more — 'transferred to hospital' is sufficient",
        "Detailed documentation of the clinical condition, monitoring during the delay, interventions provided, communication with the receiving hospital, EMS handoff, and the timeline of decisions and events",
        "Only the diagnosis at the time of transfer",
        "Only the receiving hospital's name",
      ],
      correctIndex: 1,
      explanation:
        "An emergency transfer is one of the highest-acuity events at an ASC and produces one of the most-scrutinized chart entries. The documentation must show what happened, what was done, when, by whom, what was communicated to the receiving hospital, and how the EMS handoff occurred. A one-line note leaves the surveyor (and any future legal review) unable to reconstruct the care, which is itself a quality-of-care finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. I (immediate transfer) / Q-0042",
      tutor: {
        whyCorrect:
          "The transfer chart is a contemporaneous record of an emergency. Every minute, every intervention, every call to the receiving hospital is part of the patient's care and the ASC's defense. Surveyors and risk reviewers read these notes carefully precisely because the consequences of the event are large.",
        whyWrong: {
          A: "Three words cannot document an emergency.",
          C: "Diagnosis is one element among many; monitoring, interventions, and timeline are equally required.",
          D: "Receiving-hospital name is necessary but nowhere near sufficient.",
        },
        operationalContext:
          "Build a transfer documentation template: clinical condition, vital-sign trend, interventions during delay, time of EMS notification, time of EMS arrival, time of departure, receiving hospital and unit, accepting physician name, records and images sent. Train staff to complete it during the event, not after.",
      },
    },
    {
      id: "asc_qoc_15",
      question:
        "A surveyor pulls 10 charts from patients transferred to a hospital in the past 12 months. Three charts have no documentation of the receiving hospital, the accepting provider, or the records sent. The administrator says, 'EMS handled it — we don't have to document the hospital side.' Is that defensible?",
      options: [
        "Yes — once EMS takes the patient, documentation responsibility transfers",
        "No — the ASC owns the patient's clinical record at the moment of transfer; the receiving hospital, accepting provider, records sent, and time of transfer must be in the ASC chart",
        "Yes — only the discharge summary needs to mention the transfer",
        "Yes — transfer documentation is an EMS regulatory obligation, not an ASC one",
      ],
      correctIndex: 1,
      explanation:
        "The ASC is the sending facility and owns its chart. The chart must document where the patient was transferred, who accepted them, what records traveled with the patient, and the time of transfer. EMS documents its side (transport vital signs, interventions en route); the ASC documents its side (decision, communication, handoff). Three of ten charts missing this is a pattern finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Ch. 4 Std. I (immediate transfer) / Q-0042",
      tutor: {
        whyCorrect:
          "The transfer line in the ASC chart closes the patient's record at the ASC and starts the trace at the receiving hospital. Without it, the chart has a hole at the most critical clinical moment of the encounter, and the ASC cannot prove it discharged its responsibility.",
        whyWrong: {
          A: "EMS documentation is parallel, not substitutive. Both records must exist.",
          C: "A discharge summary at a later date is not the same as a contemporaneous transfer note.",
          D: "Transfer documentation in the ASC chart is an ASC obligation. EMS regulations cover EMS documentation only.",
        },
        operationalContext:
          "Add a hard stop in the EHR (or paper form) that prevents chart closure on a transfer encounter without: receiving hospital, accepting provider name, time of EMS arrival, time of departure, and a checklist of records sent (face sheet, op note, anesthesia record, medication list, vitals).",
      },
    },
  ],
};
