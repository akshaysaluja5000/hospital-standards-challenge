import type { Level } from "./schema";

export const ascPharmaceuticalLevel: Level = {
  id: "asc_pharmaceutical_services",
  module: "asc",
  name: "Pharmaceutical Services",
  description:
    "Medication management: storage, security, sterile compounding, vaccine handling, and prevention of medication errors.",
  icon: "Pill",
  color: "hsl(280, 60%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Pharmaceutical Services",
    plainLanguageSummary:
      "Pharmaceutical services in an ASC cover every drug and biological that touches a patient — from the saline you draw into a syringe to the controlled fentanyl in the anesthesia cart, the vaccines in the fridge, and the antibiotic you compound at the bedside. The Conditions for Coverage require that those medications be prepared, stored, secured, dispensed, and administered safely under the direction of a qualified licensed provider, even when the ASC does not have an onsite pharmacy. Surveyors look for a named pharmacy director, accurate controlled substance counts with no unexplained gaps, dated multi-dose vials, segregated expired and recalled drugs, vaccine fridge temperature logs that someone actually reads, and a culture that treats high-alert and look-alike drugs as the failure points they really are. The most damaging citations in this chapter are not always the dramatic ones — they are the boring ones: an undated open vial, a temp log initialed but unread, a recall notice in someone's email that never reached the medication room.",
    keyOperationalExpectations: [
      "A qualified licensed provider is formally designated as responsible for pharmaceutical services, even when there is no onsite pharmacy.",
      "Controlled substances are inventoried, witnessed, and reconciled with documented chain-of-custody from receipt through administration and waste.",
      "Multi-dose vials are dated when first punctured and discarded per manufacturer or USP guidance; single-dose vials are never reused across patients.",
      "Vaccines and temperature-sensitive drugs are stored per CDC toolkit guidance with a dedicated, calibrated monitoring device and documented response to excursions.",
      "Expired, damaged, and recalled medications are physically segregated from active stock and disposed of through a documented process that prevents diversion.",
      "High-alert medications and look-alike/sound-alike drugs are identified on a current list, with separation, labeling, and double-check procedures based on ISMP guidance.",
    ],
    commonRiskPoints: [
      "An open multi-dose vial in active use with no date written on the label — surveyors treat this as both an infection risk and a medication management failure.",
      "Controlled substance counts that 'always reconcile' on paper but lack witness signatures or have whited-out entries.",
      "Vaccine fridge temperature logs initialed daily but with documented out-of-range readings that were never investigated or escalated.",
      "Recall notices delivered to a single email inbox with no defined workflow into the medication room or to the responsible pharmacy provider.",
      "Sterile compounding (drawing antibiotics, mixing irrigation solutions) performed without USP 797 beyond-use dating or a documented hood/practice standard.",
    ],
    cmsTags: [
      "42 CFR 416.48",
      "42 CFR 416.48(a)",
      "Q-0180 series (Pharmaceutical services)",
      "Q-0181 through Q-0184 (Drug preparation, administration, ordering)",
    ],
  },
  studyMaterial: [
    {
      title: "Who Must Direct Pharmaceutical Services at an ASC With No Onsite Pharmacy?",
      content:
        "Even an ASC with no onsite pharmacy must have a qualified licensed provider — typically a physician or pharmacist — formally designated as responsible for pharmaceutical services. The designation has to be documented (governing body appointment letter, job description) and the person actually has to perform the role: approving the formulary, reviewing medication errors, signing off on storage and security policies, and overseeing controlled substance practices.",
      keyPoint:
        "If a surveyor asks 'who directs your pharmacy services?' and the answer is a shrug or 'the surgeon I guess,' that's a Condition-level finding.",
    },
    {
      title: "What Must Be Done When a Multi-Dose Vial Is First Punctured?",
      content:
        "Once a multi-dose vial is punctured, the clock starts. Most multi-dose vials must be discarded 28 days after first puncture (or sooner if the manufacturer says so), and the date of first puncture must be written on the label. Single-dose vials are exactly that — single dose, single patient — and may not be re-entered or held for the next case, even if there is medication left.",
      keyPoint:
        "An undated open vial is both an infection control finding and a pharmacy finding. Date when you puncture, every time.",
    },
    {
      title: "What Does a Compliant Controlled Substance Process Require?",
      content:
        "Controlled substances require a closed loop: receipt is logged, secured storage is double-locked, dispensing is tied to a specific patient and provider, waste is witnessed and documented, and counts are reconciled at defined intervals (typically shift change or end-of-day). Any discrepancy — even one tablet — has to be investigated, documented, and escalated. 'Always reconciles' with no witness signatures is itself a red flag.",
      keyPoint:
        "Surveyors and DEA inspectors don't look for a perfect count — they look for a credible reconciliation process when the count is off.",
    },
    {
      title: "What Standard Governs Vaccine Storage and Temperature Monitoring?",
      content:
        "Vaccines are uniquely fragile and uniquely regulated. The CDC vaccine storage and handling toolkit is the de facto national standard: dedicated storage unit, calibrated digital data logger with current calibration certificate, twice-daily temperature checks, and a written excursion procedure that includes contacting the manufacturer or state vaccine program before discarding or administering affected vaccine. A temperature excursion that wasn't investigated is worse than one that was — silence implies the doses were given anyway.",
      keyPoint:
        "Temperature logs are not a checklist — they're a record of patient safety decisions. Initials without readings, or readings without action, are both findings.",
    },
    {
      title: "What Must Happen Immediately When a Drug Is Recalled or Expires?",
      content:
        "When a recall hits or a drug expires, it has to come out of active stock immediately and go into a clearly labeled, physically separate quarantine area pending return or destruction. Mixing recalled and active stock 'until pickup' is a top-five medication management citation because it is exactly how an expired or recalled drug gets administered to a patient. The disposal process itself must be documented and must prevent diversion (witnessed destruction, DEA Form 41 for controlled substances). Standard N requires a written policy that names who monitors expiration dates, how recall notices are received, and how disposal or return is documented.",
      keyPoint:
        "Active stock and quarantined stock should never be in the same bin. Physical separation is the simplest, most visible defense against the worst error in this chapter.",
    },
    {
      title: "What Must an ASC Do About High-Alert and LASA Medications Beyond Maintaining a List?",
      content:
        "Standards H, I, and J require the ASC to maintain a current list of high-alert medications and a current list of confused drug names (the new term for look-alike/sound-alike), and to have written processes — aligned with ISMP guidance — that prevent selection errors. Surveyors don't just want to see the lists; they walk the medication room and look for evidence the lists are actually applied: separation between heparin concentrations, color-coded auxiliary labels, segregated bins, tall-man lettering on labels, and rescue/reversal agents stocked next to the high-alert drug they treat. A current ISMP list with no observable storage discipline is a finding waiting to happen.",
      keyPoint:
        "If a surveyor asks 'show me your high-alert list,' you should also be able to walk them to the shelf and point to the safeguards that list drove.",
    },
    {
      title: "What Five Elements Must Be on Any Medication Label Off Its Original Container?",
      content:
        "Any medication moved out of its original container — syringe, basin, IV bag, irrigation bottle — that will not be administered immediately must carry a label with five elements: drug name, strength, amount or volume (when not obvious from the container), expiration date and time, and the initials of the person who prepared it. 'Immediate use' means the same person who drew it administers it (or directly witnesses administration) within one hour, with no break in the process. Anesthesia syringes labeled with drug name only are the most common Standard M citation in ASC surveys.",
      keyPoint:
        "Drug name on a syringe is not labeling — it's a partial label, and a partial label is a finding.",
    },
    {
      title: "What Governs Sterile Compounding at an ASC That Does Not Have a Hood?",
      content:
        "Drawing antibiotics, mixing irrigation solutions, or reconstituting injectables in the OR is sterile compounding under USP 797. Without an ISO 5 hood, the ASC must rely on the USP 797 immediate-use provision: simple compounds, qualified personnel, strict aseptic technique, and administration within one hour. The provision is not a blanket pass — it has to be operationalized in a written policy that defines who may compound, what may be compounded, the time limit, and the labeling required. USP 795 covers non-sterile compounding and applies in the rare ASC that mixes oral suspensions or topical preparations.",
      keyPoint:
        "Saying 'we just do immediate-use' is fine — but only if there's a written policy behind it that names the criteria.",
    },
    {
      title: "What Does Standard F Require After a Verbal Drug Order Is Given?",
      content:
        "Standard F (and Q-0182, Q-0183, Q-0184 under 42 CFR 416.48(a)) covers three things people get wrong: adverse drug reactions must be reported to the responsible physician and documented in the record; blood and blood products may only be administered by a physician or RN; and verbal orders for any drug must be followed by a written order signed by the prescribing physician on a timely basis. Procedural urgency does not erase the written-order requirement — it just shifts the signature to after the event. Sloppy verbal orders ('one of midazolam') also create their own dose-clarity findings.",
      keyPoint:
        "Verbal orders are real orders. They close the loop with a written, signed entry — within 24–48 hours, not 'eventually.'",
    },
    {
      title: "How Often Must Competency Be Reassessed for High-Risk Medication Tasks?",
      content:
        "Initial orientation competency is the floor, not the ceiling. For high-risk medication tasks — controlled substance handling, multi-dose vial dating, recall workflow, emergency drug retrieval, anesthesia drug labeling — the ASC has to define a reassessment cadence (typically annual) and document it with a skill-checklist sign-off by an evaluator. When a surveyor's tracer reveals that a staff member can't actually perform a task, the orientation paperwork doesn't save the finding — the demonstrated skill gap is the finding. Tie reassessment to the staff member's anniversary date so it cannot drift.",
      keyPoint:
        "Surveyors test the system by testing a person. 'I trained at orientation' is not a defense if today the staff member can't do the task.",
    },
    {
      title: "How Must Prescription Pads, Drug Samples, and E-Prescribing Access Be Controlled?",
      content:
        "Standard K covers the boring side of pharmacy that ends careers: prescription pads must be controlled and secured from unauthorized access, pre-signed and post-dated prescriptions are prohibited by written policy, electronic prescribing access is restricted and audited, and sample drugs are tracked and stored under the same security and expiration rules as commercial stock. If an ASC accepts samples from manufacturer reps, those samples need a log (drug, lot, expiration, who received them, where stored) and they need to be cycled through the same expiration check and recall process. 'Samples don't count' is the wrong answer.",
      keyPoint:
        "Samples are inventory. If you can't show the log, you can't show the chain of custody.",
    },
    {
      title: "What Must Happen When a Medication Error or Adverse Drug Reaction Occurs?",
      content:
        "Standard F requires that adverse drug reactions be reported to the patient's responsible physician and documented in the medical record. Beyond that, the ASC's quality program is expected to capture medication errors (including near-misses), trend them, present them to the governing body, and act on the trend. A medication error log that only contains harmful events is itself a red flag — the absence of near-miss reports tells the surveyor that staff don't trust the reporting system or that the threshold is set too high. Closed-loop error review is the difference between a quality program and a paperwork file.",
      keyPoint:
        "If your error log has zero near-misses for a year, the problem is your reporting culture, not your error rate.",
    },
  ],
  questions: [
    {
      id: "asc_pharm_01",
      question:
        "An ASC with no onsite pharmacy is asked during a survey, 'Who directs your pharmaceutical services?' The administrator says, 'We don't have a pharmacist — the surgeons handle their own meds and we use a contracted distributor for ordering.' What is the most likely finding?",
      options: [
        "No finding — ASCs without an onsite pharmacy are exempt from designating a pharmacy director",
        "Standard-level finding — the contract distributor can be retroactively named as the responsible party",
        "Condition-level finding — a qualified licensed provider must be formally designated as responsible for pharmaceutical services regardless of whether there is an onsite pharmacy",
        "No finding — the medical director automatically fulfills this role",
      ],
      correctIndex: 2,
      explanation:
        "Chapter 11 applies to any ASC that uses drugs or pharmaceutical supplies, regardless of whether there is an onsite pharmacy. A qualified licensed provider — physician or pharmacist — must be formally designated, with documented governing body appointment, and must actually direct the program (formulary, error review, storage policy, controlled substance oversight).",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0180 (42 CFR 416.48)",
      tutor: {
        whyCorrect:
          "The CFR ties pharmaceutical services to a designated, qualified, licensed individual. Without that designation in writing, every downstream policy (storage, controlled substances, recalls) has no accountable owner — and surveyors immediately escalate to a Condition-level finding because the entire program lacks direction.",
        whyWrong: {
          A: "There is no exemption based on the absence of an onsite pharmacy. The standard explicitly applies to any organization that uses drugs.",
          B: "A contracted distributor handles supply chain, not clinical pharmacy direction. Retroactive renaming would not satisfy the requirement.",
          D: "The medical director role is separate. Pharmacy direction must be specifically assigned, with the named individual qualified for the role.",
        },
        operationalContext:
          "Issue a one-page appointment letter naming the pharmacy services director (often a consultant pharmacist or the medical director if appropriately qualified), describing scope (formulary, controlled substances, recalls, storage), and signed by the governing body chair. Re-confirm annually in minutes.",
      },
    },
    {
      id: "asc_pharm_02",
      question:
        "During a tracer, a surveyor opens the anesthesia cart and finds an opened multi-dose vial of lidocaine with no date written on the label. The CRNA says, 'I just opened it this morning.' What is the most accurate characterization of the finding?",
      options: [
        "No finding if the CRNA verbally confirms the date — vials are not required to be dated",
        "Citation for both medication management and infection control — multi-dose vials must be dated when first punctured so the beyond-use date is verifiable",
        "Standard-level finding only if the vial is more than 28 days old",
        "No finding — only single-dose vials require dating",
      ],
      correctIndex: 1,
      explanation:
        "Multi-dose vials must be dated when first punctured because the beyond-use date (typically 28 days, or the manufacturer's stated period if shorter) cannot be verified without it. An undated open vial is treated as expired and gets cited under both medication management and infection control. Verbal claims do not substitute for a written date.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48(a))",
      tutor: {
        whyCorrect:
          "Surveyors cannot verify beyond-use dates from memory. The standard is a written, visible date on the label — applied at the moment of first puncture. Without it, the vial is non-compliant on its face regardless of when it was actually opened.",
        whyWrong: {
          A: "Verbal confirmation has no audit trail and is not accepted in any AAAHC or CMS interpretive guidance.",
          C: "The vial does not have to be 'old' to be cited — the absence of the date is the finding.",
          D: "Single-dose vials are not dated because they are not re-entered. Multi-dose vials are explicitly the ones that require the date.",
        },
        operationalContext:
          "Place a fine-tip marker in every drug drawer and cart. Train every clinical staff member: puncture, date, initial, in that order. Audit anesthesia carts weekly and document the audit — that audit log is itself a survey-defense artifact.",
      },
    },
    {
      id: "asc_pharm_03",
      question:
        "An ASC's narcotic count log shows perfect reconciliation every shift for the past 90 days, with no documented discrepancies and no witness signatures on the wasted-drug column. A surveyor asks the charge nurse how a discrepancy would be handled. The nurse says, 'We've never had one.' What is the surveyor most likely to infer?",
      options: [
        "Strong compliance — the absence of discrepancies indicates an effective controlled substance program",
        "The reconciliation process is likely not being performed credibly; the absence of any variance over 90 days, combined with missing witness signatures, suggests counts are being signed off without actual verification",
        "No finding — DEA does not require witness signatures on wastage",
        "Standard-level finding only if a diversion has occurred",
      ],
      correctIndex: 1,
      explanation:
        "Real controlled substance programs always have minor reconciliation events — broken vials, partial doses, transcription corrections. Ninety days of perfect counts with no witness signatures on waste tells a surveyor the count is being performed as a paperwork exercise rather than a true two-person reconciliation. That is a diversion red flag and a citation regardless of whether actual diversion is found.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48)",
      tutor: {
        whyCorrect:
          "Surveyors look for the texture of a real process: occasional documented discrepancies with documented investigation, witness signatures on every waste event, and a closed-loop trail. 'Perfect, with no witnesses' is mathematically improbable and is the single most common diversion-precursor pattern surveyors encounter.",
        whyWrong: {
          A: "Perfect counts without witness signatures are evidence the process is not running, not that it is running well.",
          C: "Witness signatures on controlled substance waste are required by both DEA expectations and accepted nursing/pharmacy standards.",
          D: "The finding is the absence of a credible process — actual diversion is not the threshold for a citation.",
        },
        operationalContext:
          "Require two-signature waste documentation, with both signatures present at the time of waste. Audit randomly: pull 10 waste records monthly and have the named witness verbally confirm the event. A single 'I don't remember signing that' triggers a full investigation.",
      },
    },
    {
      id: "asc_pharm_04",
      question:
        "An ASC receives an FDA Class II recall on a high-volume injectable that is currently stocked in three medication rooms. The pharmacy director's policy says recalled drugs must be removed within 24 hours and physically segregated. Two days later, a surveyor finds three vials of the recalled drug in the active stock bin. What is the issue?",
      options: [
        "No issue — Class II recalls are voluntary and do not require segregation",
        "Standard-level finding — the segregation policy was not followed and recalled drugs remained accessible for patient administration",
        "No issue if the medication has not yet been administered",
        "Standard-level finding only if a patient has been harmed",
      ],
      correctIndex: 1,
      explanation:
        "Recalled drugs must be physically segregated from active stock immediately upon notification, regardless of recall class. Leaving three vials in the active bin two days after a documented recall means a clinician could pull and administer the recalled drug — that is the entire reason segregation is required. The finding is the gap between policy and practice, not the patient outcome.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0184 (42 CFR 416.48(a))",
      tutor: {
        whyCorrect:
          "The standard requires the policy AND the practice. A written policy that says '24 hours' is the floor the ASC committed to. When practice diverges, the surveyor cites both the missed deadline and the active risk of a patient receiving the recalled drug.",
        whyWrong: {
          A: "All recall classes require removal from active patient use. Class II is in the middle of the FDA severity scale, not exempt.",
          C: "The risk of administration is the harm being prevented. Findings do not require an actual administration to be triggered.",
          D: "Patient harm is not the threshold. Failure to segregate is the citation on its own.",
        },
        operationalContext:
          "Build a recall workflow: (1) named recipient inbox monitored daily, (2) within 4 hours, walk every storage location and pull, (3) place in a clearly labeled red 'RECALLED — DO NOT USE' bin, (4) document the pull on a recall log, (5) notify the pharmacy director, (6) document the eventual return or destruction. Drill the workflow quarterly with a fake recall.",
      },
    },
    {
      id: "asc_pharm_05",
      question:
        "An ASC's vaccine refrigerator data logger shows a 6-hour temperature excursion last Tuesday — the fridge reached 12°C overnight. The temperature log is initialed for that day. There is no documented action, no manufacturer contact, and the affected vaccines were administered the following morning. What is the most serious finding?",
      options: [
        "No finding — vaccines tolerate brief excursions",
        "Standard-level finding — the staff member should have logged the excursion",
        "Condition-level concern — the excursion was not investigated, the manufacturer was not contacted, vaccine viability was not assessed, and potentially compromised doses were administered to patients",
        "Standard-level finding only — recordkeeping gap",
      ],
      correctIndex: 2,
      explanation:
        "A documented temperature excursion triggers a defined response: contact the manufacturer or state vaccine program, quarantine the affected vaccine, assess viability before further administration, and document the entire chain. Initialing the log without investigating, then administering the affected vaccine, exposes patients to potentially compromised doses — a serious patient safety failure that often rises to the Condition level.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48)",
      tutor: {
        whyCorrect:
          "The CDC vaccine storage and handling toolkit (referenced in Standard P) is explicit: excursions require investigation, manufacturer consultation, and a documented viability decision before any further use. Skipping that and administering the doses puts the ASC in the worst possible position — known excursion, known administration, no documented justification.",
        whyWrong: {
          A: "12°C for 6 hours is a meaningful excursion outside the 2-8°C target range and well beyond what is considered tolerable for most vaccines.",
          B: "The log was initialed — the gap is not recordkeeping. The gap is the missing action.",
          D: "The patient impact and procedural failure together exceed a simple recordkeeping citation.",
        },
        operationalContext:
          "Adopt a written excursion algorithm posted on the fridge: (1) document time and temperature, (2) move vaccine to backup unit, (3) contact manufacturer or state program, (4) wait for viability determination, (5) document outcome. Train every staff member who touches vaccines on the algorithm and audit log review weekly.",
      },
    },
    {
      id: "asc_pharm_06",
      question:
        "In the medication room, look-alike vials of heparin 10,000 units/mL and heparin 10 units/mL are stored next to each other on the same shelf, with no dividers, no warning labels, and identical-color caps. What is the most appropriate finding?",
      options: [
        "No finding — both are heparin, so storage proximity is acceptable",
        "Standard-level finding — high-alert and look-alike medications require physical separation, distinct labeling, or other ISMP-aligned safeguards to prevent selection error",
        "No finding — the labels on the vials are the responsibility of the manufacturer",
        "Standard-level finding only if a wrong-concentration error has occurred",
      ],
      correctIndex: 1,
      explanation:
        "Heparin is on every published high-alert medication list precisely because of catastrophic concentration-confusion errors. ISMP guidance and Standards H, I, and J of Chapter 11 require active safeguards: physical separation, auxiliary warning labels, segregated bins, or barcoding. Storing two concentrations of heparin side-by-side with identical packaging is one of the most-cited setup errors in pharmaceutical surveys.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48(a))",
      tutor: {
        whyCorrect:
          "The standard requires the ASC to maintain a current high-alert medication list AND have processes in place to prevent errors. Adjacent storage of two concentrations of the same high-alert drug, with no visual differentiation, is evidence the process is not in place.",
        whyWrong: {
          A: "Same drug name with very different concentrations is the highest-risk look-alike scenario. Proximity multiplies the risk.",
          C: "The ASC owns its storage configuration even if it does not own the manufacturer's label. Differentiation is the ASC's responsibility.",
          D: "An actual error is not the threshold. The high-risk setup is the finding.",
        },
        operationalContext:
          "Maintain a current ISMP high-alert and confused-drug-name list as part of the formulary. Use color-coded auxiliary labels, separate shelves, locked overrides on automated dispensing for higher concentrations, and a periodic medication-room walkthrough by the pharmacy director with a checklist.",
      },
    },
    {
      id: "asc_pharm_07",
      question:
        "After a knee arthroscopy, a CRNA draws fentanyl from an opened single-dose vial, administers a portion, and saves the remaining 1 mL in a labeled syringe for the next patient on the schedule. What is wrong with this practice?",
      options: [
        "Nothing — single-dose vials may be reused if labeled and refrigerated",
        "Single-dose vials may not be reused across patients regardless of remaining volume; doing so is a medication management and infection control violation, and the unused portion must be wasted with witness documentation",
        "The CRNA should have used a multi-dose vial instead",
        "Single-dose vials may be reused only within the same OR session",
      ],
      correctIndex: 1,
      explanation:
        "Single-dose vials are designed and labeled for one patient, one use. Saving leftover medication for another patient violates both pharmaceutical practice (single-dose means single-dose) and infection control (cross-contamination risk). Any unused controlled substance from a single-dose vial must be wasted and witnessed.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48(a))",
      tutor: {
        whyCorrect:
          "The single-dose designation is a manufacturing decision: no preservatives, single-patient packaging. Re-use across patients is a clear violation cited in both pharmacy and infection control standards. For controlled substances, the additional issue is that unwasted excess opens a diversion pathway.",
        whyWrong: {
          A: "Refrigeration does not change the single-dose designation. The vial is single-dose by definition.",
          C: "The choice of vial size is a practice question, not a justification for re-use. If smaller vials are available, those should be stocked.",
          D: "There is no within-session exception. Single-dose is single-patient.",
        },
        operationalContext:
          "Stock vial sizes that match typical doses to minimize waste. For controlled substance leftovers, require immediate two-person waste documentation in the EHR or paper log before the syringe is discarded. Audit anesthesia waste monthly against case volume.",
      },
    },
    {
      id: "asc_pharm_08",
      question:
        "An ASC's pharmacy director rounds the medication room and finds two boxes of expired epinephrine auto-injectors on the same shelf as active stock, with no separation. The pharmacy tech says, 'They're going back to the manufacturer next week — we just haven't moved them yet.' What is the immediate concern?",
      options: [
        "No concern — pending return is an acceptable interim status",
        "The expired stock must be physically segregated from active stock immediately to prevent inadvertent administration to a patient; mixing the two is a citable medication safety failure",
        "Concern only if the expiration is more than 30 days past",
        "The expired auto-injectors should be returned to the supplier within 24 hours of expiration",
      ],
      correctIndex: 1,
      explanation:
        "Expired and active stock cannot share a shelf. Standard N requires that expired, damaged, and recalled medications be segregated from active stock pending disposal or return. The risk being prevented is exactly what could happen here: in a real emergency, someone reaches for the closest auto-injector and grabs the expired one.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48)",
      tutor: {
        whyCorrect:
          "Segregation is the operational safeguard. The reason is exactly the scenario the ASC is one bad day away from: an expired epinephrine pulled in a true anaphylaxis event. The tech's intent does not matter — the configuration creates the risk and the citation.",
        whyWrong: {
          A: "Pending return does not justify continued shelf-sharing with active stock.",
          C: "Expiration is binary. One day past is the same as 30 days past for the purpose of segregation.",
          D: "Return timing is a procurement issue. Segregation is required as soon as the drug is identified as expired.",
        },
        operationalContext:
          "Designate a clearly labeled 'QUARANTINE — DO NOT USE' bin or locked drawer in every medication storage area. Train every clinical staff member that expired stock goes there immediately upon discovery, even if it will be picked up the same day. Audit monthly.",
      },
    },
    {
      id: "asc_pharm_09",
      question:
        "An ASC's anesthesia provider draws up a syringe of propofol and four other medications at the start of the day, labels the syringes with drug name only (no concentration, no expiration date and time, no initials), and uses them throughout four cases. What is wrong with the labeling practice?",
      options: [
        "Nothing — drug name alone is sufficient labeling for syringes",
        "Standard M requires that medications removed from original containers and not immediately administered be labeled with drug name, strength, amount/volume if not apparent, expiration date and time, and the initials of the person who prepared the syringe",
        "Standard M only applies to oral medications, not injectables",
        "The labels are sufficient if the anesthesia provider stays in the same OR all day",
      ],
      correctIndex: 1,
      explanation:
        "Standard M is explicit: any medication transferred to a new container that will not be administered immediately requires drug name, strength, amount/volume if not apparent, expiration date and time, and preparer's initials. Drug name alone leaves a labeled syringe with no way to verify concentration, age, or accountability — a major medication error vector.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48(a))",
      tutor: {
        whyCorrect:
          "The labeling rule exists because labeled-but-incomplete syringes are the highest-risk medication artifact in any procedural setting. The five required label elements are non-negotiable in the AAAHC handbook standard and align with The Joint Commission's National Patient Safety Goal on labeling.",
        whyWrong: {
          A: "Drug name alone is the most common citation under Standard M. Strength and time are essential for safe re-use.",
          C: "Standard M applies to all medications removed from original containers — injectable, oral, IV, irrigation.",
          D: "The location of the provider does not change the labeling requirement. The standard applies regardless of who is in the room.",
        },
        operationalContext:
          "Pre-print color-coded anesthesia drug labels with all required fields and a blank for time and initials. Train all proceduralists and anesthesia providers. Audit OR carts weekly during turnover.",
      },
    },
    {
      id: "asc_pharm_10",
      question:
        "An ASC compounds antibiotic irrigation solutions in the OR by drawing from a sterile bag and adding a vial of antibiotic. The compound is used within 30 minutes. There is no USP 797 hood, no documented beyond-use dating policy, and no formal sterile compounding procedure. The pharmacy director says, 'It's immediate-use, USP 797 doesn't apply.' Is the director correct?",
      options: [
        "No — USP 797 always requires a sterile compounding hood regardless of timing",
        "Partially correct — the USP 797 immediate-use provision can apply, but the ASC must still have a written policy defining what qualifies as immediate-use, who may compound, the maximum time window (typically 1 hour), and required aseptic technique",
        "Yes — immediate-use compounding is fully exempt from any documented policy or procedure",
        "No — antibiotic irrigation cannot be compounded outside a USP 797 cleanroom under any circumstances",
      ],
      correctIndex: 1,
      explanation:
        "USP 797 includes an immediate-use provision for compounded sterile preparations administered within 1 hour of preparation, but the ASC must still have a written policy defining the scope, the qualified personnel, the time limit, and the aseptic technique required. 'It's immediate-use, so we don't need anything in writing' is a misreading of the standard and is citable.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48(a))",
      tutor: {
        whyCorrect:
          "The immediate-use provision exists, but it is a defined provision with criteria — not a blanket exemption. Surveyors expect to see a written policy that describes what qualifies, the time window, and the aseptic technique. Without that, the ASC is operating on the provider's interpretation rather than a documented standard.",
        whyWrong: {
          A: "USP 797 has documented immediate-use criteria that allow compounding outside an ISO 5 environment when conditions are met.",
          C: "There is no exemption from documentation. The provision itself requires defined criteria in writing.",
          D: "Immediate-use compounding is allowed when criteria are met. The blanket prohibition is incorrect.",
        },
        operationalContext:
          "Write a one-page sterile compounding policy citing USP 797: who may compound, what may be compounded, the 1-hour rule, required aseptic technique, prohibited compounds (e.g., anything requiring more than 3 sterile products), and labeling requirements. Train and document.",
      },
    },
    {
      id: "asc_pharm_11",
      question:
        "An ASC's vaccine fridge has a temperature monitoring device, but the calibration certificate expired 8 months ago. The temperature logs continue to show in-range readings. What is the surveyor's likely conclusion?",
      options: [
        "No finding — the readings are in range, so the calibration status is irrelevant",
        "The temperature data is not defensible because the monitoring device is no longer demonstrably accurate; readings must come from a device with a current calibration certificate, typically renewed every 1-2 years per CDC guidance",
        "Calibration is the manufacturer's responsibility, not the ASC's",
        "Standard-level finding only if a vaccine has been compromised",
      ],
      correctIndex: 1,
      explanation:
        "The CDC vaccine storage toolkit and Standard P together require a calibrated temperature monitoring device, typically with a current certificate of calibration testing renewed at the manufacturer's specified interval (commonly 1-2 years). Readings from an out-of-calibration device cannot be trusted, regardless of what they show. The finding is that the entire temperature record for the past 8 months is unreliable.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48)",
      tutor: {
        whyCorrect:
          "The validity of the entire vaccine storage program rests on the device being demonstrably accurate. An expired calibration means there is no evidence the recorded temperatures are real — and that retroactively undermines every vaccine administered during the period.",
        whyWrong: {
          A: "In-range readings from an unverified device are not equivalent to in-range readings from a verified device. The calibration is what makes the readings defensible.",
          C: "The ASC must maintain calibration on its monitoring devices, including paying for periodic recalibration or device replacement.",
          D: "The unreliability of the data is the finding on its own.",
        },
        operationalContext:
          "Tracker the calibration expiration on a tickler 90 days out. Use a digital data logger with a printable certificate, file the certificate with the SOP, and have a backup logger ready for the swap window. Document the swap.",
      },
    },
    {
      id: "asc_pharm_12",
      question:
        "An ASC posts a job description for the medication room nurse that includes 'verifies controlled substance inventory daily.' During a tracer, the surveyor asks who actually does this and is told 'whoever's here at end of day — could be the medical assistant if no nurse is around.' What is the issue?",
      options: [
        "No issue — task delegation is at the discretion of the daily team",
        "The job description and Conditions for Coverage scope-of-practice rules require a qualified, licensed individual to verify controlled substance inventory; delegating to an unlicensed medical assistant is both a scope and a controlled substance security violation",
        "Issue only if the medical assistant has not had training",
        "No issue if the medical assistant is supervised by phone",
      ],
      correctIndex: 1,
      explanation:
        "Controlled substance verification is a licensed function. The ASC's own job description names the responsibility to a nurse, and DEA / nursing scope rules limit who may handle and reconcile controlled substances. Delegating to an unlicensed medical assistant violates both the ASC's documented practice and the legal scope expectation.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48)",
      tutor: {
        whyCorrect:
          "Surveyors hold the ASC to its own job descriptions and to the legal scope of practice. When a controlled substance task is being done by someone outside both, the finding is automatic — and the deeper concern is that the chain of custody for controlled substances now has a hole in it.",
        whyWrong: {
          A: "Daily team discretion does not override scope of practice or the ASC's own written job description.",
          C: "Training cannot extend a scope of practice beyond what licensure allows.",
          D: "Phone supervision does not change who is physically performing a licensed function.",
        },
        operationalContext:
          "Build the schedule so that a licensed nurse is always available to perform end-of-day controlled substance verification, with a defined backup. If staffing is uncertain, define the workflow as a two-person sign-off by two licensed staff and audit weekly.",
      },
    },
    {
      id: "asc_pharm_13",
      question:
        "An anesthesiologist instructs the circulating nurse to give 'one of midazolam' verbally during a procedure. The nurse administers it and documents it. The anesthesiologist signs the record three days later. Is this acceptable under Standard F?",
      options: [
        "Yes — verbal orders during procedures are exempt from written-order requirements",
        "Verbal orders for drugs and biologicals must be followed by a written order signed by the prescribing physician; the practice itself is acceptable in time-critical procedural settings, but the post-event written order and timely signature are required",
        "No — verbal medication orders are categorically prohibited",
        "Yes — verbal orders are valid for 30 days before signature is required",
      ],
      correctIndex: 1,
      explanation:
        "Standard F (and Q-0184) explicitly require that orally given drug orders be followed by a written order signed by the prescribing physician. The procedural setting is allowed, but the written order with signature is mandatory and should be timely — not an open-ended back-fill. The 'one of midazolam' phrasing also raises concentration-clarity concerns separately.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0184 (42 CFR 416.48(a)(3))",
      tutor: {
        whyCorrect:
          "The standard codifies that verbal orders are real orders but must close the loop in writing. Procedural urgency does not eliminate the written record — it just defines the timing as 'after the event' rather than 'before administration.'",
        whyWrong: {
          A: "There is no exemption from the written-order follow-up requirement.",
          C: "Verbal orders are explicitly contemplated in 416.48(a)(3) and are not categorically prohibited.",
          D: "Thirty days is not a recognized window. Timely signature is the standard, typically interpreted as within 24-48 hours.",
        },
        operationalContext:
          "Build a procedural-orders form with checkboxes for drug, dose, concentration, route, and time, with a signature line for the physician. Train all anesthesia and procedural staff to require dose specificity ('2 mg of midazolam') rather than ambiguous shorthand.",
      },
    },
    {
      id: "asc_pharm_14",
      question:
        "Six months ago, a new RN started in the medication room. Her competency on controlled substance handling was checked off on her orientation packet. Since then, no one has reassessed it. During a tracer, she misidentifies the documentation step for waste. What is the survey concern?",
      options: [
        "No concern — initial competency at orientation satisfies the requirement",
        "Concern — competency on controlled substance handling and other high-risk medication tasks must be reassessed at a defined interval, and the inability to perform the task is itself evidence the orientation check did not produce sustained competency",
        "Concern only if she has had a recent error",
        "No concern — the pharmacy director can verbally re-verify her competency on the spot",
      ],
      correctIndex: 1,
      explanation:
        "Initial orientation competency is the start, not the end. ASCs are expected to define a competency reassessment cadence (typically annual for high-risk tasks like controlled substance handling) and to document it. When a tracer reveals the staff member cannot perform the task, that is direct evidence the competency program is not maintaining the skill — a citable gap.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0181 (42 CFR 416.48)",
      tutor: {
        whyCorrect:
          "Surveyors test the system by testing a person. If a person cannot perform the task, the question is no longer 'did orientation happen?' but 'did the competency program produce a competent staff member today?' The answer in this scenario is no, and that produces a finding regardless of orientation paperwork.",
        whyWrong: {
          A: "Orientation is foundational. Sustained competency requires periodic reassessment.",
          C: "An error is not the threshold. The demonstrated skill gap during a tracer is enough.",
          D: "On-the-spot verbal verification does not satisfy a documented competency program.",
        },
        operationalContext:
          "Define an annual competency assessment for medication room and anesthesia staff covering controlled substance handling, waste documentation, multi-dose vial dating, recall workflow, and emergency drug retrieval. Document with skill-checklist sign-offs by an evaluator. Tie reassessment to the anniversary date.",
      },
    },
    {
      id: "asc_pharm_15",
      question:
        "An ASC's pharmacy director is asked, 'Who is permitted to administer medications in the OR?' What is the most defensible answer aligned with Chapter 11 and accepted scope of practice?",
      options: [
        "Any clinical staff member present in the OR may administer medications under the supervision of the surgeon",
        "Medications may be administered only by individuals authorized by their license, the ASC's policies, and applicable scope of practice — typically physicians, anesthesia providers, and registered nurses (and for blood products specifically, only physicians or RNs per 416.48(a)(2))",
        "Only the anesthesia provider may administer any OR medication",
        "Medical assistants may administer medications in the OR if the surgeon witnesses the administration",
      ],
      correctIndex: 1,
      explanation:
        "Medication administration is a scope-of-practice function. Standard F and 416.48(a)(2) specifically restrict blood and blood product administration to physicians or registered nurses. More broadly, every administration must be by an individual authorized by license, by the ASC's policies, and by applicable state scope-of-practice rules. 'Anyone in the OR' is wrong; 'only anesthesia' is too narrow; medical assistants cannot administer in the OR.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0183 (42 CFR 416.48(a)(2))",
      tutor: {
        whyCorrect:
          "The CFR explicitly carves out blood products to physicians and RNs. For other medications, the principle is that administration is a licensed function whose scope is set by license, policy, and state law. The pharmacy director should be able to articulate that hierarchy on demand.",
        whyWrong: {
          A: "Surgeon supervision does not extend administration authority to unlicensed staff.",
          C: "RNs and physicians (not just anesthesia) routinely administer medications in the OR within their scope.",
          D: "Medical assistants generally cannot administer medications in an OR setting; their scope is much narrower.",
        },
        operationalContext:
          "Maintain a one-page scope-of-administration matrix posted in the medication room: by drug class (oral, IV push, IV piggyback, blood products, controlled substances) and by role (physician, anesthesia provider, RN, LPN where allowed by state, medical assistant). Update annually and on any state scope change.",
      },
    },
  ],
};
