import type { Level } from "./schema";

export const ascAnesthesiaSurgeryLevel: Level = {
  id: "asc_anesthesia_surgery_services",
  module: "asc",
  name: "Anesthesia & Surgical Services",
  description:
    "Perioperative care: pre-anesthesia evaluation, intra-op monitoring, surgical safety (time-out), counts, and post-anesthesia recovery.",
  icon: "Syringe",
  color: "hsl(15, 80%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Anesthesia & Surgical Services",
    plainLanguageSummary:
      "This is the chapter that surveyors trace into the chart. Pre-anesthesia evaluation, an updated H&P, informed consent, a real time-out, continuous intra-op monitoring, accurate counts, post-anesthesia evaluation, and discharge by criteria — every step has to be documented in every record. Most ASCs do these steps in practice; the citations come from missing signatures, missed timeframes (H&P older than 30 days without a 24-hour update), shortcut time-outs, monitoring gaps in deep sedation, MH cart drugs that have expired, and discharge orders signed by someone other than the operating physician. Surveyors will pick five charts at random and walk every step. Anything missing in those five charts becomes a deficiency.",
    keyOperationalExpectations: [
      "Every surgical patient has an H&P completed within 30 days and updated within 24 hours of the procedure, in the chart before the patient enters the OR.",
      "A pre-anesthesia evaluation is performed immediately before surgery by a physician or qualified anesthetist (CRNA, AA) and is documented in the chart.",
      "A formal time-out is conducted immediately before incision with the entire team engaged; patient ID, procedure, site/laterality, equipment, and implants are verbally confirmed and documented.",
      "Continuous intra-op monitoring includes pulse oximetry, frequent BP, ECG; end-tidal CO2 is monitored during deep sedation and general anesthesia; temperature monitoring is available for general.",
      "Patients are observed in PACU until discharge criteria are met, evaluated by a physician or qualified anesthetist for proper anesthesia recovery, and discharged with a written order signed by the operating physician.",
      "If MH-triggering agents are stocked, written protocols, dantrolene, cooling supplies, and an annual MH drill are documented; ACLS coverage is present until the last patient is physically discharged.",
    ],
    commonRiskPoints: [
      "H&P older than 30 days with no 24-hour update note in the chart on the day of surgery.",
      "Time-out documented as a checkbox with no evidence the entire team paused and verbally confirmed each element.",
      "Deep sedation administered without continuous end-tidal CO2 monitoring, or general anesthesia documented without temperature monitoring availability.",
      "MH cart with expired dantrolene, missing cooling supplies, or no annual MH drill on file.",
      "Discharge order signed by the recovery nurse or covering provider rather than the operating physician.",
    ],
    cmsTags: [
      "42 CFR 416.42 (Surgical services)",
      "42 CFR 416.52 (Patient admission, assessment, discharge)",
      "Q-0061, Q-0062, Q-0063 (Anesthesia)",
      "Q-0260 through Q-0267 (H&P, pre-surgical assessment, discharge)",
    ],
  },
  studyMaterial: [
    {
      title: "Pre-anesthesia evaluation is its own event",
      content:
        "Immediately before the procedure, a physician or qualified anesthetist on the surgical team has to examine the patient and evaluate anesthesia risk. This is not the H&P, not the consent, not the pre-op nursing assessment — it is a discrete pre-anesthesia evaluation that documents airway, ASA class, anesthesia plan, allergies, NPO status, and any new findings since the H&P. Surveyors look for it as a stand-alone note on the day of surgery.",
      keyPoint:
        "If the chart has an H&P from last week and a pre-op nursing checklist but no pre-anesthesia evaluation note dated the day of surgery, you have a citation under Q-0061.",
    },
    {
      title: "The H&P 30/24 rule",
      content:
        "The H&P must be completed within 30 days before the procedure and updated within 24 hours of the procedure. The 24-hour update is a brief note confirming nothing has changed (or noting what has) and must be in the chart before the patient enters the OR. An H&P 31 days old, or an H&P 14 days old with no 24-hour update, both fail the rule.",
      keyPoint:
        "30-day H&P + 24-hour update note in the chart before entry to the OR. Two clocks, both have to be running.",
    },
    {
      title: "Time-out: the team stops, talks, and confirms",
      content:
        "Immediately before incision, the operator pauses and the entire team — surgeon, anesthetist, scrub, circulator, anyone in the room — verbally confirms patient ID, intended procedure, correct site/laterality, equipment availability and function, and any implants. The patient (or representative) is involved in pre-anesthesia site marking. A checkbox without a true team pause is the most common form of 'failed' time-out surveyors find.",
      keyPoint:
        "If anyone in the room is still doing other work during the time-out, it isn't a time-out — it's documentation theater.",
    },
    {
      title: "Continuous intra-op monitoring",
      content:
        "All anesthesia levels above local require continuous physiologic monitoring: pulse oximetry, frequent blood pressure, and ECG. Deep sedation and general anesthesia additionally require end-tidal CO2. General anesthesia requires a means to measure body temperature. The anesthesia record should reflect these continuously, not just at start and finish.",
      keyPoint:
        "EtCO2 during deep sedation is the single most-missed monitoring element when sedation is administered by non-anesthesia providers.",
    },
    {
      title: "Discharge: criteria met, order signed by the operating physician",
      content:
        "Patients are observed in PACU (or equivalent) until they meet documented discharge criteria. A physician or qualified anesthetist must evaluate the patient for proper anesthesia recovery before discharge. The discharge order itself must be signed by the physician who performed the surgery (or per applicable state law and ASC policy), and patients must leave in the company of a responsible adult unless the attending physician documents an exception.",
      keyPoint:
        "Three signatures matter: pre-anesthesia evaluation (before entry), recovery evaluation (in PACU), and the discharge order signed by the operating physician.",
    },
    {
      title: "MH cart readiness: dantrolene in date, supplies co-located, drill annually",
      content:
        "If the ASC stocks any malignant hyperthermia trigger (succinylcholine, inhaled volatiles), Standard 9.O treats the MH cart like a code cart. Surveyors check four things in parallel: dantrolene (or Ryanodex) is in date, cooling supplies (ice, NG tube, irrigation, refrigerated saline) are co-located in or directly next to the cart, every clinical staff member has documented MH training, and an MH drill has been conducted and documented within the past 12 months. Each missing element is its own finding because each represents a real failure point during a real event — and dantrolene reconstitution at 2 a.m. with scattered supplies is not a defensible clinical reality.",
      keyPoint:
        "If a surveyor asks 'show me the MH cart,' the answer is: in-date drug, co-located cooling, training roster, and last drill date — all on the spot.",
    },
    {
      title: "Counts: when the count is off, closure stops",
      content:
        "Standard 10.P requires a written count policy based on nationally recognized guidance (AORN/WHO) covering which procedures require counts of sponges, sharps, and instruments, when counts occur (before start, before closure), how counts are reported to the surgeon, where counts are documented, and — most importantly — what happens when a count is incorrect. The defensible response to an off count is non-negotiable: stop closure, recount, search the field/trash/floor, perform intra-op imaging if the item is not found, document each step, and report per policy. Hiding or deferring a discrepancy is both a clinical risk (retained foreign object is a sentinel event) and a documentation failure that QAPI cannot recover.",
      keyPoint:
        "An off count is a stop-the-line event. Continuing closure on an unresolved count is the textbook origin story of a sentinel event.",
    },
    {
      title: "ACLS coverage until the last patient is physically out the door",
      content:
        "Standard 9.N requires at least one health care professional with current ACLS training to be present until every patient operated on that day has been physically discharged — out the door, not just cleared by the nurse. The training must include hands-on airway and AED demonstration (AHA or equivalent), and the ASC has to be able to produce both the credential and a written policy that defines coverage. The most common citation pattern is the anesthesia provider leaving after the last case is over but while a patient is still in PACU recovering — that interval is non-compliant.",
      keyPoint:
        "ACLS-credentialed coverage starts with the first patient arrival and ends when the last patient walks out — not when the last case ends.",
    },
    {
      title: "Surgical site marking: by the operator, with the patient awake",
      content:
        "Standard 10.R requires that any procedure involving level or laterality be marked by the person performing the procedure (or a designated surgical-team member who will be present during the time-out) with the patient or representative involved before anesthesia. Pre-marking by a circulator who will not be operating and may not be in the room for the time-out fails the standard. The mark itself, the policy that defines surgical team, the patient's involvement, and the documentation in the clinical record are all separately reviewed.",
      keyPoint:
        "Site marking by the operator, with the patient awake, before sedation — every other workflow is a finding waiting to happen.",
    },
    {
      title: "Specimen handling: the path report has to land in the chart",
      content:
        "Standard 10.T requires that when tissue is removed, a pathologist examines it (unless explicitly exempted in writing by the governing body after medical review) and the signed report is incorporated into the patient's clinical record. 'Sent to pathology' in the op note plus a vendor portal nobody opens does not meet incorporation. Surveyors will sample charts with specimens, look for the pathology result inside the patient record (electronic or paper), and verify a tracking workflow exists so results don't sit unread.",
      keyPoint:
        "If the pathology report is not in the patient's chart, it does not exist for survey purposes — and the patient may not have been notified.",
    },
    {
      title: "Responsible adult escort: physician exception only, not patient choice",
      content:
        "Q-0267 (42 CFR 416.52(c)(3)) requires every patient to be discharged in the company of a responsible adult, except those patients exempted by the attending physician. The exception is a clinical judgment documented by the attending — it is not waived by the recovery nurse, satisfied by a rideshare driver, or overridden by the patient's autonomous request. Confirm the escort at scheduling, again on day-of-surgery before the case starts, and hold the patient if the escort falls through unless the attending physician specifically documents an exception.",
      keyPoint:
        "No documented attending-physician exception, no responsible adult, no discharge — the patient stays.",
    },
    {
      title: "Second qualified monitor for moderate/deep sedation and general anesthesia",
      content:
        "Standard 9.P requires a written policy prohibiting moderate sedation, deep sedation, or general anesthesia unless a qualified individual in addition to the operator is present whose primary job is monitoring the patient. During moderate sedation the second person may help with minor interruptible tasks, but their role is patient watcher, not assistant scrub. The clinical record has to reflect both the operator and the monitor in every sedated case, and Standard 9.Q adds that if anyone other than an anesthesiologist, OMFS, CRNA, or AA administers a drug without an antagonist (propofol is the classic example), the governing body must have specifically privileged that provider for it.",
      keyPoint:
        "An operator focused on the field cannot also be the monitor — the chart must name two people, and propofol-class privileges must be granted by name.",
    },
  ],
  questions: [
    {
      id: "asc_anes_01",
      question:
        "A patient arrives for a planned laparoscopic procedure. The H&P in the chart is dated 22 days ago. There is no separate update note from today. The circulator says, 'Nothing has changed, the surgeon spoke with her in the holding area.' Does this meet the H&P requirement?",
      options: [
        "Yes — the H&P is within 30 days, which is the only requirement",
        "No — an H&P within 30 days must also be updated in writing within 24 hours of the procedure, before the patient enters the OR",
        "Yes — verbal update by the surgeon in holding satisfies the rule",
        "No — the H&P must be redone in full within 24 hours of every procedure",
      ],
      correctIndex: 1,
      explanation:
        "The rule is two clocks: the H&P must be completed within 30 days before the procedure AND updated within 24 hours of the procedure. The update is a brief written note (often a single line: 'No interval change since H&P of [date]' with signature and time) and it must be in the chart before the patient enters the OR. Verbal update with no documentation fails the rule.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0263 (42 CFR 416.52(a)(4))",
      tutor: {
        whyCorrect:
          "Surveyors pull the chart and look for two specific items: a complete H&P dated within 30 days, and an update note within 24 hours of the procedure start. Both must be there. The update is meant to catch interval changes — a new symptom, a missed dose, a new medication — that could affect the anesthetic plan.",
        whyWrong: {
          A: "Within 30 days is necessary but not sufficient. The 24-hour update is a separate, required element.",
          C: "Verbal updates leave no audit trail. The surveyor's question is 'show me' — and unwritten conversations cannot be shown.",
          D: "A full re-do is not required. A brief, dated, signed update note attesting to no interval change (or noting any change) is sufficient.",
        },
        operationalContext:
          "Build the 24-hour update note into the day-of-surgery workflow. The surgeon or qualified provider signs a one-line note in pre-op holding: 'H&P of [date] reviewed; no interval change' (or describes the change). Hard-stop the OR transfer if the note is not present.",
      },
    },
    {
      id: "asc_anes_02",
      question:
        "An ASC performs procedures under deep sedation administered by a CRNA. Reviewing 10 anesthesia records, the surveyor finds pulse oximetry, BP, and ECG documented continuously, but end-tidal CO2 is documented in only 3 of 10 cases. What is the finding?",
      options: [
        "No finding — EtCO2 is required only for general anesthesia",
        "Standard-level finding — the ASC must document continuous EtCO2 monitoring during deep sedation in every case",
        "No finding — pulse oximetry is sufficient for deep sedation",
        "Standard-level finding — but only because 7 of 10 records were missing",
      ],
      correctIndex: 1,
      explanation:
        "End-tidal CO2 monitoring is required during the administration of deep sedation/analgesia (and during general anesthesia). It is the earliest indicator of respiratory compromise during sedation. Missing EtCO2 documentation in 7 of 10 cases is a pattern that supports a Standard-level finding, not an isolated lapse.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 9.J (continuous monitoring)",
      tutor: {
        whyCorrect:
          "EtCO2 detects apnea, airway obstruction, or hypoventilation seconds before pulse oximetry desaturation reflects them. That is exactly why the standard requires it during deep sedation — the level where loss of airway reflexes is most likely. Surveyors expect every deep sedation record to show continuous EtCO2 just like SpO2.",
        whyWrong: {
          A: "EtCO2 is required for both general anesthesia AND deep sedation/analgesia, not general only.",
          C: "Pulse oximetry is necessary but not sufficient for deep sedation. It lags ventilation by 30+ seconds in apneic patients on supplemental oxygen.",
          D: "Even one missing record can be cited if it represents a process gap. The pattern just makes the citation harder to defend.",
        },
        operationalContext:
          "Hard-wire EtCO2 into the deep-sedation workflow: the monitor is plugged in before induction, the waveform is on the screen, and the anesthesia record auto-captures the value at standard intervals. If the equipment is not present in every room where deep sedation occurs, that is the first thing to fix.",
      },
    },
    {
      id: "asc_anes_03",
      question:
        "During a tracer, the surveyor watches a time-out. The circulator reads the patient name and procedure aloud while the surgeon prepares the field, the scrub tech opens trays, and the anesthetist completes a chart entry. Documentation later shows 'time-out completed' with all checkboxes ticked. What is the surveyor likely to write?",
      options: [
        "No finding — the elements were verbalized and documented",
        "Standard-level finding — a true time-out requires the entire team to stop, engage, and verbally confirm each element",
        "No finding — modern time-outs allow parallel work to maintain efficiency",
        "Standard-level finding — but only because the surgeon did not lead the time-out",
      ],
      correctIndex: 1,
      explanation:
        "The time-out requires the entire team to be engaged. The provider performing the procedure assumes responsibility for the time-out, the team pauses, and each element (patient ID, intended procedure, correct site, equipment availability, implant readiness) is verbally verified. People doing other work is documentation theater, not a time-out.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 10.S (time-out)",
      tutor: {
        whyCorrect:
          "The point of a time-out is shared accountability. If half the team is reading and half is doing, no one is actually verifying. Surveyors will ask staff in interviews, 'walk me through your time-out' — and if descriptions diverge or staff describe parallel work, the documentation gets a credibility problem.",
        whyWrong: {
          A: "Verbalization without engagement is not the standard. The standard requires the team to engage, not just the circulator to read.",
          C: "There is no 'modern parallel time-out' standard. Efficiency does not exempt the team from pausing.",
          D: "The surgeon-led element matters, but the bigger problem here is the team not pausing.",
        },
        operationalContext:
          "Adopt a 'hands off, eyes on the team' rule for the time-out. The surgeon calls it, the room stops, and each role verbally confirms. Post a wall card with the verification elements and rotate audits so leadership occasionally observes a real time-out from the doorway.",
      },
    },
    {
      id: "asc_anes_04",
      question:
        "A patient is in PACU. The recovery nurse documents that the patient is awake, vital signs are stable, pain is controlled, and there is no nausea. The covering anesthesiologist (not the one who provided the anesthetic) writes a discharge order. The operating surgeon left for a clinic and is not available. Is this discharge process compliant?",
      options: [
        "Yes — any anesthesiologist can sign the discharge order",
        "Yes — discharge by the recovery nurse is sufficient when criteria are met",
        "No — the discharge order must be signed by the physician who performed the surgery (or per applicable State law and ASC policy)",
        "No — the patient must be discharged only by the original anesthesiologist",
      ],
      correctIndex: 2,
      explanation:
        "The CFR is specific: each patient must have a discharge order signed by the physician who performed the surgery or procedure, in accordance with applicable State health and safety laws, standards of practice, and ASC policy. A covering provider may not substitute unless ASC policy and state law explicitly allow it; the default rule is the operating physician signs.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0266 (42 CFR 416.52(c)(2))",
      tutor: {
        whyCorrect:
          "The operating physician is the one with the most complete picture of the procedure, intra-op events, and expected recovery course. Surveyors look for the operating physician's signature on the discharge order specifically. If your ASC uses covering providers, you need a written policy aligned with state law that authorizes it — and surveyors will read the policy.",
        whyWrong: {
          A: "Anesthesiologists evaluate for proper anesthesia recovery, but the discharge order itself goes to the operating physician under the CFR default.",
          B: "Recovery nurses confirm that discharge criteria are met, but the order must come from a physician.",
          D: "The CFR specifies the operating physician for the discharge order, not the original anesthesiologist (who handles the recovery evaluation).",
        },
        operationalContext:
          "Block the schedule so the operating physician is on-site through PACU discharge for elective cases. If state law and ASC policy permit a covering arrangement, document it in policy and ensure the covering physician reviews the operative note before signing — and document that review.",
      },
    },
    {
      id: "asc_anes_05",
      question:
        "An ASC stocks succinylcholine and inhaled volatile agents (MH triggers). The MH cart contains dantrolene that expired 4 months ago, the cooling supplies are in another supply room, and there is no documentation of an MH drill in the past 18 months. What is the finding category?",
      options: [
        "No finding — MH events are extremely rare and the cart is supplemental",
        "Multiple Standard-level findings — expired dantrolene, supplies not co-located, and missing annual MH drill",
        "Standard-level finding — only the missing drill matters",
        "No finding — as long as a written MH protocol exists",
      ],
      correctIndex: 1,
      explanation:
        "If MH-triggering agents are available, the ASC must (1) have written protocols including dantrolene administration and continuous cooling, (2) keep supplies posted and immediately available where triggers may be used, (3) document staff training, and (4) conduct and document an MH drill at least annually. Expired dantrolene, scattered cooling supplies, and an 18-month-old drill date all hit this Standard.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 9.O (malignant hyperthermia)",
      tutor: {
        whyCorrect:
          "MH is rare but lethal in minutes if dantrolene is delayed. Surveyors treat the MH cart like a code cart: drugs in date, supplies co-located, drill done annually, staff trained. Each missing element is its own finding because each represents a real failure point during a real event.",
        whyWrong: {
          A: "Rarity does not relax the standard. The standard exists precisely because the event is unsurvivable without immediate response.",
          C: "All four elements are independently required. The drill is one finding; the expired drug is another; the scattered supplies are a third.",
          D: "A protocol on paper means nothing if the drug is expired and the supplies are unreachable.",
        },
        operationalContext:
          "Put dantrolene expiration on a monthly MH cart check-sheet. Co-locate cooling ice, NG tubes, irrigation fluids, and refrigerated saline in the same cart or directly adjacent. Schedule the annual MH drill on the same calendar week each year and rotate roles so every clinical staff member participates over time.",
      },
    },
    {
      id: "asc_anes_06",
      question:
        "Reviewing a chart, the surveyor sees: H&P from 12 days ago (good), pre-op nursing assessment (good), anesthesia consent signed (good), and the anesthesia record begins with 'patient brought to OR, induction at 0735.' There is no separate pre-anesthesia evaluation note. What is the gap?",
      options: [
        "No gap — the H&P and consent satisfy the pre-anesthesia evaluation requirement",
        "A pre-anesthesia evaluation must be performed and documented immediately before the procedure by a physician or qualified anesthetist on the surgical team — separate from the H&P, consent, and intra-op record",
        "No gap — the pre-anesthesia evaluation is implied by the start of the anesthesia record",
        "A pre-anesthesia evaluation is only required for general anesthesia",
      ],
      correctIndex: 1,
      explanation:
        "Standard 9.G and Q-0061 require that immediately before surgery, a physician or anesthetist on the surgical team must examine the patient to evaluate the risk of anesthesia. This is a discrete, documented event that occurs day-of, separate from the H&P (which may be 30 days old) and the intra-op record. Without it, there is no evidence the anesthesia provider personally evaluated this patient before induction.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.42(a)(1)(ii))",
      tutor: {
        whyCorrect:
          "The pre-anesthesia evaluation captures airway exam, ASA class, anesthesia plan, allergies, NPO status, and any new findings since the H&P. It is the anesthesia provider's day-of attestation that they have evaluated the patient and accept the case. Surveyors look for it as a stand-alone note dated and timed before induction.",
        whyWrong: {
          A: "The H&P and consent are different documents with different purposes. Neither captures the day-of anesthesia risk evaluation.",
          C: "The induction time on the anesthesia record is not an evaluation. It documents an action, not an assessment.",
          D: "The requirement applies whenever anesthesia (above local) is administered, not just general.",
        },
        operationalContext:
          "Use a structured pre-anesthesia evaluation form (paper or template in the EMR) that prompts airway, ASA, NPO, allergies, plan, and risk discussion. The form is signed and timed by the anesthesia provider before the patient enters the OR. Do not let the chart leave pre-op without it.",
      },
    },
    {
      id: "asc_anes_07",
      question:
        "At the end of a laparoscopic case, the sponge count is off by one. The surgeon has already begun closing the trocar sites. What is the correct response?",
      options: [
        "Continue closing — the missing sponge will turn up in the laundry",
        "Stop closure, reconcile per policy (recount, search the field and trash, intra-op imaging if not found), document everything, and notify per policy",
        "Document the discrepancy and complete closure; reconcile after the patient leaves",
        "Recount silently; if still off, do not chart it to avoid creating a quality concern",
      ],
      correctIndex: 1,
      explanation:
        "The count policy must include actions when a count is incorrect. Standard practice: stop closure, recount, search the field/trash/floor, perform intra-op imaging if the item is not found, document every step including what was done and the outcome, and notify per policy. Hiding or deferring an off count is both a clinical risk (retained foreign body) and a documentation/QAPI failure.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 10.P (counts)",
      tutor: {
        whyCorrect:
          "Retained foreign objects are sentinel events. The count policy exists to prevent them, and the policy has to define exactly what happens when a count is wrong. Surveyors will ask to see the policy and walk through a recent off-count case. If the chart shows the policy was followed step-by-step, the case defends itself even if the item is found.",
        whyWrong: {
          A: "Continuing closure with a known discrepancy is the textbook example of how retained items happen.",
          C: "Deferring reconciliation after the patient has been moved is a major patient safety failure.",
          D: "Suppressing the discrepancy compounds the clinical risk with a documentation and integrity problem.",
        },
        operationalContext:
          "Post the count reconciliation algorithm in every OR. Train the entire team that 'stop closure on an incorrect count' is non-negotiable. Track every off-count event in QAPI with root-cause analysis, including those resolved by recount.",
      },
    },
    {
      id: "asc_anes_08",
      question:
        "An ASC's last patient of the day is in PACU recovering from general anesthesia. The CRNA has left for the day. The remaining clinical staff include an RN with current BLS only. Is the ASC compliant with ACLS coverage?",
      options: [
        "Yes — BLS is sufficient for PACU coverage",
        "Yes — ACLS coverage is only required intra-operatively",
        "No — at least one health care professional with current ACLS training must be present until all patients operated on that day have been physically discharged",
        "No — only an MD or DO can provide ACLS coverage in PACU",
      ],
      correctIndex: 2,
      explanation:
        "The standard requires at least one health care professional with current ACLS training to be present to provide advanced resuscitative techniques until all patients operated on that day have been physically discharged. 'Physically discharged' means out the door, not 'cleared by the nurse.' If the ACLS-credentialed provider leaves before the last patient is out, the ASC is non-compliant for that interval.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 9.N (ACLS coverage)",
      tutor: {
        whyCorrect:
          "Anesthesia complications can occur in PACU as well as the OR — laryngospasm, delayed respiratory depression, cardiac events. ACLS coverage exists to bridge from the moment of complication to definitive transfer. Letting the credential walk out the door before the patient does is a foreseeable, preventable gap.",
        whyWrong: {
          A: "BLS is foundational but does not include the advanced airway, drug, and rhythm interventions that ACLS covers.",
          B: "Coverage extends through PACU until physical discharge, not just intra-op. PACU complications (laryngospasm, delayed respiratory depression) are exactly when ACLS is needed.",
          D: "ACLS-credentialed staff need not be physicians. CRNAs, qualified RNs, and others may hold the credential.",
        },
        operationalContext:
          "Build the daily schedule so the ACLS-credentialed provider does not leave until the last patient walks out. Maintain a roster of ACLS-credentialed staff with expiration dates and audit monthly to prevent silent lapses.",
      },
    },
    {
      id: "asc_anes_09",
      question:
        "An anesthetist administers propofol for moderate sedation. The ASC's policy says only anesthesiologists, oral/maxillofacial surgeons, CRNAs, or AAs may administer drugs without an antagonist (like propofol). The anesthetist is a CRNA, but the governing body's privileges file shows no specific privilege to administer propofol. What is the issue?",
      options: [
        "No issue — CRNAs are blanket-credentialed for all anesthetic agents",
        "The governing body must specifically grant privileges for the administration of sedative, hypnotic, or analgesic drugs without an antagonist (e.g., propofol) when administered by other than the listed exempt providers; even where exempted, privileging records should reflect what each provider is authorized to do",
        "No issue — the policy is enough",
        "The anesthetist needs a separate state license endorsement for propofol",
      ],
      correctIndex: 1,
      explanation:
        "Standard 9.Q requires that if anesthesia is provided by other than an anesthesiologist, OMFS, CRNA, or AA within scope, the governing body has granted specific privileges to administer drugs without an antagonist (e.g., propofol). Beyond that strict trigger, surveyors expect privileging files to reflect what every provider is actually authorized to do. A general 'CRNA' designation without specifics weakens the file.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 9.Q",
      tutor: {
        whyCorrect:
          "Privileging is granular. The standard explicitly calls out drugs without antagonists because their reversal in a deeper-than-intended sedation episode requires airway intervention, not a reversal agent. Surveyors will read the privileges file and compare it to what each provider actually does.",
        whyWrong: {
          A: "There is no blanket credential. Privileging is by individual and by procedure or drug class.",
          C: "Policy describes what is allowed in general; the privileges file documents who specifically is approved.",
          D: "State licensure and facility privileging are separate. Both may apply.",
        },
        operationalContext:
          "Audit each anesthesia provider's privileges file against the drugs and depths they actually administer. Where the standard requires governing body action (Standard 9.Q), include an explicit privilege grant in the file rather than relying on the general license.",
      },
    },
    {
      id: "asc_anes_10",
      question:
        "An ASC uses a single anesthesia consent form that addresses both the anesthesia and the surgical procedure. Is this acceptable?",
      options: [
        "No — anesthesia and surgical consents must always be separate documents",
        "Yes — one consent form may be used to satisfy both anesthesia and surgical consent requirements as long as both elements are documented",
        "Yes — but only if the same physician performs both",
        "No — the patient must sign anesthesia consent in the OR",
      ],
      correctIndex: 1,
      explanation:
        "Per the AAAHC handbook reference under Standard 9.E, one consent form may be used to satisfy the Standard requirements for both anesthesia and surgical consents, provided the consent documents both the procedure and the anesthesia plan, including risks, benefits, and alternatives.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 9.E",
      tutor: {
        whyCorrect:
          "The substance is what matters: documentation that the patient was informed about the procedure AND the anesthesia, and that consent was obtained before the procedure. A single integrated form that addresses both is acceptable as long as both elements are clearly present.",
        whyWrong: {
          A: "Separate forms are not required by the standard.",
          C: "Who performs the anesthesia versus the procedure does not affect the form structure.",
          D: "Consent must be obtained before the procedure, not in the OR after sedation has begun.",
        },
        operationalContext:
          "If you use a combined consent, ensure the form has explicit anesthesia sections (type, risks, alternatives) so a surveyor can read it and find each element. If anesthesia is being added to a previously consented procedure (rare), document a separate anesthesia consent.",
      },
    },
    {
      id: "asc_anes_11",
      question:
        "An ASC removes a tissue specimen during a procedure. The surgeon writes 'specimen sent to pathology' in the op note but no signed pathology report is in the chart 30 days later. The administrator says, 'The lab posts to a portal — we just don't print them.' Is this acceptable?",
      options: [
        "Yes — electronic posting in a portal substitutes for incorporation into the chart",
        "No — the signed pathology report must be incorporated into the patient's clinical record (which can include accessible electronic incorporation, but a separate vendor portal alone is not sufficient)",
        "Yes — the operative note documenting the specimen is sufficient",
        "No — the specimen should not have been sent to pathology",
      ],
      correctIndex: 1,
      explanation:
        "Standard 10.T requires the signed pathology report to be incorporated into the patient's clinical record. A separate vendor portal that no one routinely accesses or prints is not 'incorporation.' The report has to be in the patient's record, electronically or on paper, where it is part of the durable, retrievable chart.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 10.T",
      tutor: {
        whyCorrect:
          "Pathology results can drive follow-up care, additional surgery, or patient notification. If the report is sitting in a portal no one checks, the result might never reach the patient. Surveyors will sample charts with specimens and verify the path report is in the record.",
        whyWrong: {
          A: "A vendor portal that requires extra steps to access is not part of the patient's clinical record.",
          C: "The op note documents what was sent. The pathology report documents what was found. Both belong in the chart.",
          D: "Sending the specimen is appropriate; the issue is incorporating the result.",
        },
        operationalContext:
          "Build a daily workflow: pathology reports posted to the portal are reviewed, downloaded, and attached to the patient's chart with a tracking log. Set a 7-business-day SLA from posting to chart incorporation, and audit weekly until the workflow is reliable.",
      },
    },
    {
      id: "asc_anes_12",
      question:
        "A patient is in PACU. The recovery RN documents stable vital signs and the patient is awake. The patient says she will Uber home alone because her ride canceled. The attending physician has not documented an exception. What should happen?",
      options: [
        "Discharge the patient — patient autonomy overrides the responsible-adult rule",
        "Hold the patient and arrange for a responsible adult escort, OR obtain documented attending physician exception per policy",
        "Discharge the patient — Uber qualifies as a responsible adult",
        "Document refusal of escort and discharge per patient request",
      ],
      correctIndex: 1,
      explanation:
        "All patients must be discharged in the company of a responsible adult, except those patients exempted by the attending physician. The exception must be documented by the attending physician — not waived by the recovery nurse, not satisfied by a rideshare driver, not satisfied by the patient's own request.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0267 (42 CFR 416.52(c)(3))",
      tutor: {
        whyCorrect:
          "Patients post-anesthesia have impaired judgment and reaction time for hours. The responsible-adult rule exists because of the risk profile of the post-op state. The exception pathway requires a physician to document a clinical judgment that this patient, this case, this circumstance does not require an escort.",
        whyWrong: {
          A: "Patient autonomy does not override safety standards in the immediate post-anesthesia period; the standard contemplates physician-documented exceptions, not patient-driven waivers.",
          C: "A rideshare driver is a transportation provider, not a responsible adult who can monitor the patient at home.",
          D: "Refusal of escort is not a documented physician exception; it is the patient declining a recommendation, which the standard does not allow as a discharge pathway.",
        },
        operationalContext:
          "Confirm the responsible-adult escort during scheduling and again on the day of surgery before the case starts. If the escort falls through during the case, the attending physician makes the exception decision and documents it; otherwise the patient stays until an escort arrives.",
      },
    },
    {
      id: "asc_anes_13",
      question:
        "An ASC performs procedures involving level and laterality (e.g., right knee, L4-L5). Reviewing 5 charts, the surveyor finds that the site was marked by the circulator before the surgeon arrived in 3 of 5 cases, with the surgeon co-signing later. What is the issue?",
      options: [
        "No issue — co-signature satisfies the marking requirement",
        "Standard-level finding — the site must be marked by the person performing the procedure, or by their designated member of the surgical team who will be present during the time-out",
        "Standard-level finding — but only if the patient was not involved in marking",
        "No issue — pre-marking by nursing speeds up turnover",
      ],
      correctIndex: 1,
      explanation:
        "Standard 10.R requires that the site be marked by the person performing the procedure, or by a designated surgical team member who will be present during the time-out. Pre-marking by a circulator who will not be the operator and may not be present for the time-out fails the standard. The patient (or representative) must also be involved in the marking process prior to anesthesia.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 10.R (site marking)",
      tutor: {
        whyCorrect:
          "Site marking is a shared accountability between the operator and the patient. The point is to verify with the patient awake that the right side is marked before anesthesia eliminates the patient as a check. The mark also has to come from someone with operative knowledge of the case, not someone setting up the room.",
        whyWrong: {
          A: "Co-signature is paperwork, not the verification the standard intends.",
          C: "Patient involvement is a separate required element. The marker-identity issue stands on its own.",
          D: "Speeding turnover by skipping a safety verification is the kind of trade-off that produces sentinel events.",
        },
        operationalContext:
          "Hard-wire site marking into the pre-op timeline: the operator (or designated team member who will be present) marks the site with the patient awake and engaged, before any sedating medication. Pre-op nursing prepares but does not mark.",
      },
    },
    {
      id: "asc_anes_14",
      question:
        "An ASC performs procedures only under moderate sedation administered by the operating physician. There is no second qualified individual in the room — the operator monitors the patient between surgical tasks. Is this compliant?",
      options: [
        "Yes — the operating physician can monitor and operate simultaneously during moderate sedation",
        "No — a written policy must prohibit administration of moderate or deep sedation or general anesthesia unless a qualified individual, in addition to the operator, is present to monitor the patient",
        "Yes — only deep sedation requires a separate monitor",
        "No — but only if the procedure exceeds 30 minutes",
      ],
      correctIndex: 1,
      explanation:
        "Standard 9.P requires a written policy prohibiting moderate or deep sedation or general anesthesia unless a physician, dentist, or other qualified individual supervised by a physician or dentist (in addition to the operator) is present to monitor the patient. During moderate sedation, the additional individual may assist with minor interruptible tasks, but their primary responsibility is monitoring.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Standard 9.P",
      tutor: {
        whyCorrect:
          "An operator focused on the surgical field cannot reliably monitor the patient at the same time. The standard requires a second qualified person whose attention is on the patient. The clinical record must reflect both roles in every sedated case.",
        whyWrong: {
          A: "The standard explicitly requires a second person specifically to monitor — operators cannot perform both roles.",
          C: "The standard applies to moderate sedation, deep sedation, and general anesthesia.",
          D: "Procedure duration is irrelevant; the monitoring requirement is per case, not per length.",
        },
        operationalContext:
          "Schedule an additional qualified monitor (RN, second physician, dentist, qualified provider) for every case that exceeds local/topical anesthesia. Document the monitor's name and role in the clinical record alongside the operator's.",
      },
    },
    {
      id: "asc_anes_15",
      question:
        "Before discharge, the recovery nurse documents that the patient meets all discharge criteria. The anesthesia provider has left the building. The operating surgeon has signed the discharge order. The recovery nurse documents discharge. Six hours later, the chart audit catches that no anesthesia provider documented a post-anesthesia recovery evaluation. What is the gap?",
      options: [
        "No gap — surgeon's discharge order covers anesthesia recovery",
        "Standard-level finding — before discharge, each patient must be evaluated by a physician or qualified anesthetist for proper anesthesia recovery, separate from the discharge order",
        "No gap — recovery RN evaluation satisfies the requirement",
        "Standard-level finding — but only because the anesthesia provider left",
      ],
      correctIndex: 1,
      explanation:
        "Standard 9.I and Q-0062 require that before discharge from the ASC, each patient must be evaluated by a physician or by an anesthetist (as defined in 42 CFR 410.69(b)) for proper anesthesia recovery. This is separate from the surgeon's discharge order and from the recovery nurse's criteria assessment. It is the anesthesia provider's day-of attestation that the patient has recovered safely from the anesthetic.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0062 (42 CFR 416.42(a)(2))",
      tutor: {
        whyCorrect:
          "Three discrete signatures bracket the anesthesia event: the pre-anesthesia evaluation before induction, the recovery evaluation before discharge, and the discharge order from the operating physician. Each one is its own element. Letting the anesthesia provider leave before the recovery evaluation is documented creates an unfixable gap in the record.",
        whyWrong: {
          A: "The surgeon's discharge order addresses the procedure recovery; the anesthesia recovery evaluation is a separate, distinct documentation requirement.",
          C: "The recovery nurse documents that criteria are met. The anesthesia provider documents that recovery from the anesthetic itself is complete. Different roles, different evaluations.",
          D: "The location of the provider is not the issue; the missing evaluation is. Even if they had stayed, if they did not document, the finding stands.",
        },
        operationalContext:
          "Build a hard-stop into the discharge workflow: the chart cannot close until the anesthesia provider's recovery evaluation note is present. The anesthesia provider does not leave the building until the last patient they cared for has the evaluation documented.",
      },
    },
  ],
};
