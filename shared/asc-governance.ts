import type { Level } from "./schema";

export const ascGovernanceLevel: Level = {
  id: "asc_governance",
  module: "asc",
  name: "Governance",
  description:
    "Governing body responsibilities, oversight of medical staff, contracts, and the legal accountability that holds the ASC together.",
  icon: "Landmark",
  color: "hsl(255, 65%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Governance",
    plainLanguageSummary:
      "The governing body is the legally responsible owner of everything that happens in your ASC. Even when day-to-day work is delegated to a medical director, an administrator, or a committee, the governing body owns the decision and the outcome. Surveyors look for clear evidence that the governing body actually meets, sets policy, reviews quality data, oversees credentialing, and approves contracts — not just on paper. A governing body that signs minutes once a year and rubber-stamps everything is the most common citation in this chapter. Effective governance shows up as documented meeting minutes with discussion, signed approvals of quality reports and credentialing decisions, current contracts with performance review, and clear escalation paths when something goes wrong.",
    keyOperationalExpectations: [
      "Governing body composition, authority, and meeting cadence are documented in the bylaws and followed in practice.",
      "Governing body approves the QAPI program, reviews QAPI data at each meeting, and documents the discussion (not just attendance).",
      "Governing body grants and renews medical staff appointments and clinical privileges, with the credentialing decision and supporting evidence in the minutes.",
      "Every contracted service (laboratory, pathology, transfer agreement, anesthesia group, environmental services) has a current signed contract on file with annual performance review.",
      "A medical director or other physician is formally appointed and accountable for the medical care delivered in the ASC.",
      "Patient safety events, sentinel events, and adverse outcomes are reported to and acted on by the governing body in writing.",
    ],
    commonRiskPoints: [
      "Meeting minutes that show attendance only — no discussion of QAPI data, credentialing decisions, or safety events.",
      "Expired contracts (transfer agreement, lab, pathology, biomed) discovered during a tracer.",
      "Medical staff bylaws that conflict with how privileging actually happens (e.g., bylaws say 2-year cycle but charts show longer gaps).",
      "Policies signed by a former administrator that have not been reviewed or re-approved by the current governing body.",
      "No documented evidence that the governing body discussed a specific adverse event, recall, or near miss when one is known to have occurred.",
    ],
    cmsTags: [
      "42 CFR 416.41",
      "42 CFR 416.42",
      "Q-0040 series (Governing body)",
      "Q-0050 series (Contract services)",
    ],
  },
  studyMaterial: [
    {
      title: "Who is the governing body?",
      content:
        "The governing body is the legally accountable group at the top of the ASC. In a single-owner facility it may be the owner-physician; in a hospital-affiliated ASC it is often a board of directors or board of managers. Whoever they are, they are the entity that holds the Medicare provider agreement and is responsible for everything the ASC does or fails to do.",
      keyPoint:
        "If a surveyor asks 'who is responsible?' the answer always traces back to the governing body — even if the work was delegated.",
    },
    {
      title: "Delegation versus abdication",
      content:
        "The governing body can delegate work to a medical director, administrator, or QAPI committee, but it cannot delegate the responsibility. Delegation must be documented (who has what authority), and the governing body must receive regular reports back and act on them.",
      keyPoint:
        "Delegation without documented oversight is abdication — and it is a citation magnet.",
    },
    {
      title: "Minutes are the audit trail",
      content:
        "Surveyors will ask for governing body meeting minutes for the past year or two. They look for evidence of discussion, decisions, and follow-through — not just attendance. Minutes that say 'QAPI report reviewed and accepted' with no detail are weaker than minutes that record what was reviewed, what concerns were raised, and what action was taken.",
      keyPoint:
        "Write minutes the way you would want a surveyor to read them — show the work, not just the outcome.",
    },
    {
      title: "Contracts are governance, not paperwork",
      content:
        "Every contracted service the ASC depends on — lab, pathology, anesthesia, transfer agreement, biomed, environmental services — is a governing body responsibility. The contract must be current, signed, and accompanied by some form of performance review. An expired transfer agreement found during a tracer is a serious finding because it means a patient who needs to be transferred has no defined path.",
      keyPoint:
        "If the contract is expired, the governing body has a problem — not the vendor.",
    },
    {
      title: "Quality reporting flows up, not just down",
      content:
        "QAPI is run day-to-day by clinical leaders, but the data has to flow up to the governing body and the governing body has to act on it. If sterilization cycle failures are happening monthly, the minutes should show that the governing body knows, has an action plan, and is tracking whether the action plan is working.",
      keyPoint:
        "A QAPI program the governing body never sees is a paper program. Surveyors notice immediately.",
    },
  ],
  questions: [
    {
      id: "asc_gov_01",
      question:
        "A new ASC opens with a single owner-physician. The owner is the surgeon, the medical director, the chief privileging officer, and the QAPI chair. There are no governing body meetings on the calendar because 'it's just me.' During a survey, what is the most likely finding?",
      options: [
        "No finding — a single owner can hold all governance roles in a one-physician ASC",
        "Condition-level deficiency — the governing body must meet, deliberate, and document its decisions even if it has only one member",
        "Standard-level finding only — the owner just needs to add a co-signer",
        "Not applicable — governance requirements only apply to multi-physician ASCs",
      ],
      correctIndex: 1,
      explanation:
        "The Conditions for Coverage require a functioning governing body that deliberates and documents its decisions. A single owner can be the governing body, but the owner still has to hold formal governance meetings, write minutes, approve QAPI and credentialing, and document contract reviews. 'Just me, no meetings' is a top-of-the-survey finding because it means none of the downstream documentation exists.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0041 (42 CFR 416.41)",
      tutor: {
        whyCorrect:
          "Governance is a function, not a head count. Even a one-person governing body has to perform that function in writing: meeting agendas, minutes, signed approvals of QAPI reports, credentialing files, and contract reviews. Surveyors pull these documents on day one.",
        whyWrong: {
          A: "There is no exemption for solo-owner ASCs. The CFR applies the same way regardless of whether the governing body is one person or twelve.",
          C: "Adding a co-signer doesn't fix the problem if no actual deliberation or documentation is happening. The finding is the absence of governance activity.",
          D: "Governance is required for every Medicare-certified ASC.",
        },
        operationalContext:
          "Even in a one-physician ASC, schedule formal governing body meetings (quarterly is a defensible cadence), produce real agendas, and sign minutes. Keep a separate governance binder that is not co-mingled with daily operations or clinical files.",
      },
    },
    {
      id: "asc_gov_02",
      question:
        "Reviewing 12 months of governing body minutes during a survey, the surveyor sees: 'QAPI report received and accepted' on every set of minutes, with no other detail. The QAPI dashboard shows three sterilization failures in the same period. What is the surveyor most likely to conclude?",
      options: [
        "The governing body is fulfilling its oversight role because QAPI is on the agenda",
        "The minutes are insufficient — there is no evidence the governing body actually reviewed the data, discussed the failures, or directed any action",
        "QAPI is the responsibility of the medical director, so the governing body is correctly hands-off",
        "Sterilization issues should not appear in governing body minutes — they belong in the SPD log",
      ],
      correctIndex: 1,
      explanation:
        "The minutes have to demonstrate substance. 'Received and accepted' is acknowledgment, not oversight. If sterilization failures occurred, the minutes should reflect that the governing body was informed, what they discussed, and what action they directed. Pattern minutes that say nothing about a known event are themselves the finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044 (42 CFR 416.41(a))",
      tutor: {
        whyCorrect:
          "Minutes are evidence. Surveyors compare what the minutes say to what the QAPI data, occurrence reports, and incident logs show. When real events happened and the minutes are silent or boilerplate, the conclusion is that the governing body did not actually engage with the data — that is a governance failure, not a clerical one.",
        whyWrong: {
          A: "Putting an item on the agenda without recording the discussion or decision is not oversight. Surveyors specifically look for evidence of deliberation.",
          C: "QAPI data must reach the governing body. The governing body cannot be 'hands-off' because they hold legal accountability for the program.",
          D: "Sterilization failures are quality data and absolutely belong in front of the governing body when they recur or have patient impact.",
        },
        operationalContext:
          "Adopt a minutes template that forces detail: 'QAPI Data Reviewed:', 'Issues Discussed:', 'Action Directed:', 'Responsible Party:', 'Follow-up Date:'. If a known event isn't reflected in minutes, the chair has to add a corrective addendum before the next survey — not after.",
      },
    },
    {
      id: "asc_gov_03",
      question:
        "An ASC's transfer agreement with the local hospital expired 8 months ago. The administrator says, 'We've used the same hospital for 10 years, the relationship is solid, no patient has needed transfer in over a year.' Does the ASC meet the Conditions for Coverage on transfer arrangements?",
      options: [
        "Yes — informal long-standing relationships satisfy the transfer agreement requirement",
        "Yes — only if every physician on staff has hospital privileges at the receiving hospital",
        "No — a current written transfer agreement (or written documentation that all physicians have admitting privileges at the receiving hospital) is required",
        "Yes — transfer agreements are required only when the ASC performs higher-acuity procedures",
      ],
      correctIndex: 2,
      explanation:
        "The CFR requires either (1) a current written transfer agreement with a Medicare-participating hospital, or (2) documentation that all physicians performing procedures at the ASC have admitting privileges at a Medicare-participating hospital. An expired agreement with no physician-privileges fallback is a Condition-level finding because it leaves transfer arrangements unverified at the moment a patient needs them.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0080 (42 CFR 416.41(b))",
      tutor: {
        whyCorrect:
          "The rule is binary: current signed agreement OR documented hospital admitting privileges for every physician. Verbal or informal arrangements don't count. Surveyors will pull the agreement on day one and check the date.",
        whyWrong: {
          A: "Informal relationships have no legal standing if the receiving hospital changes ownership, leadership, or policy.",
          B: "This is the alternative pathway — but it has to be documented for every physician, not assumed. The administrator's statement doesn't show this.",
          D: "Transfer arrangement requirements apply to all Medicare-certified ASCs regardless of acuity.",
        },
        operationalContext:
          "Put the transfer agreement renewal date on a tickler 60 days before expiration. Keep a copy of the current signed agreement in the survey-ready binder, and a parallel folder of physician hospital-privilege letters as a backup pathway.",
      },
    },
    {
      id: "asc_gov_04",
      question:
        "During a survey, the credentialing files for three of eight physicians are missing the governing body's signed approval of clinical privileges. The medical staff committee approved them. What is the regulatory issue?",
      options: [
        "No issue — medical staff committee approval is sufficient",
        "Standard-level finding — the medical director can sign retroactively",
        "Condition-level finding — the governing body, not the medical staff, has the legal authority to grant clinical privileges",
        "No issue — credentialing is renewable, so the next cycle will fix it",
      ],
      correctIndex: 2,
      explanation:
        "The governing body holds the legal authority to grant clinical privileges. Medical staff committees can recommend, but the governing body must approve, and that approval must be documented and signed. Three out of eight physicians without governing body approval means three physicians are potentially operating without legal authority to do so — a serious finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044 (42 CFR 416.41(a)(2))",
      tutor: {
        whyCorrect:
          "Privileging is a delegation chain: medical staff recommends, governing body approves. If the governing body never signed, the privilege was never legally granted. Every case those physicians performed in that gap is exposure for the ASC.",
        whyWrong: {
          A: "Medical staff approval alone is insufficient. The governing body must sign.",
          B: "Retroactive signature does not erase the gap. The expectation is that the signature exists before the physician begins providing care under the new privilege set.",
          D: "The renewal cycle does not fix a current gap. Surveyors evaluate the present state.",
        },
        operationalContext:
          "Adopt a workflow where the medical staff recommendation packet is bundled with a governing body cover sheet that requires a chair signature and date before the file is filed as 'complete.' No signature, file is incomplete and the physician's start date is delayed.",
      },
    },
    {
      id: "asc_gov_05",
      question:
        "An ASC contracts with an outside laboratory for histology and cytology. The contract is current and signed, but no one at the ASC has reviewed the lab's CLIA certificate or its performance in the last two years. What is the gap?",
      options: [
        "No gap — a signed contract is sufficient documentation",
        "The ASC must verify the lab's CLIA status and document an annual performance review of the contracted service",
        "The lab is responsible for sending its CLIA certificate annually; the ASC has no obligation",
        "Performance review is required only for clinical contracts, not lab contracts",
      ],
      correctIndex: 1,
      explanation:
        "Contracted services have to be verified and reviewed. The ASC must document that the lab is appropriately certified (CLIA for clinical lab services) and must review the contractor's performance at a defined cadence — typically annually. A signed contract sitting in a drawer with no verification or review is a half-met requirement.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0050 (42 CFR 416.41(b)(2))",
      tutor: {
        whyCorrect:
          "The governing body owns the safety and quality of every service delivered to its patients, even when the service is contracted out. Verification of credentials (CLIA, state licensure, accreditation) and an annual performance review are how the governing body discharges that ownership.",
        whyWrong: {
          A: "Signed paper is the start, not the end. The contract creates the relationship; the review proves the oversight.",
          C: "The ASC, not the vendor, is responsible for verifying. If the lab loses CLIA status, the ASC is the one cited.",
          D: "Every contracted service requires performance review. Lab contracts are explicitly within scope because lab results drive clinical decisions.",
        },
        operationalContext:
          "Maintain a contract log: vendor name, service, contract start/end date, certificate type, certificate expiration, last performance review date, next review due date, reviewer signature. Review at the same governing body meeting each year so it never slips.",
      },
    },
    {
      id: "asc_gov_06",
      question:
        "An ASC's bylaws state that the medical director will be appointed by the governing body and will report to the governing body quarterly on medical staff activities. In practice, the role rotates informally among the partners and no medical director report has been delivered in 14 months. Does this meet the requirement?",
      options: [
        "Yes — informal rotation is a flexible governance model",
        "No — the bylaws are the binding standard the ASC has set for itself; failure to follow them is a citation",
        "Yes — only if the partners self-attest that they are jointly serving as medical director",
        "No — only if a patient was harmed",
      ],
      correctIndex: 1,
      explanation:
        "Surveyors hold the ASC to the standard the ASC wrote for itself. If the bylaws say the medical director is appointed and reports quarterly, then there must be an appointment letter and quarterly reports. Bylaws that the ASC ignores create a self-inflicted finding, often more damaging than not having bylaws at all.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044 (42 CFR 416.41(a)(2))",
      tutor: {
        whyCorrect:
          "The bylaws are evidence the ASC understands what good governance looks like and has committed to it. When practice diverges from bylaws, surveyors treat the bylaws as the floor and write up the gap. Either change the bylaws to match practice (with proper governing body approval) or change practice to match bylaws.",
        whyWrong: {
          A: "Informality is the opposite of governance. There is no recognized 'flexible' alternative to a documented appointment and report cycle.",
          C: "Self-attestation by partners doesn't substitute for a formal appointment by the governing body.",
          D: "Patient harm is not the threshold. Failure to operate per bylaws is the finding on its own.",
        },
        operationalContext:
          "Audit your bylaws once a year against actual practice. Either update the bylaws (with documented governing body approval) or correct the practice. The mismatch is the most common 'easy' citation in governance.",
      },
    },
    {
      id: "asc_gov_07",
      question:
        "A patient died in PACU after an outpatient procedure. The medical staff investigated, the case was discussed at the next staff meeting, and the chart was closed. The next governing body meeting is in 7 weeks. What is the most defensible governance response?",
      options: [
        "Wait for the regularly scheduled governing body meeting and present the case then",
        "Notify the governing body chair immediately, convene a special session if needed, and document the governing body's review and any action directed",
        "Refer the case to the medical staff bylaws committee — the governing body is not involved in clinical reviews",
        "Notify the state survey agency only; the governing body is informed through that channel",
      ],
      correctIndex: 1,
      explanation:
        "A patient death — especially an unexpected one — is a sentinel-level event that the governing body needs to know about immediately, not 7 weeks later. The expectation is rapid notification, a governance-level review (often a special meeting or written action), and documented follow-through on any directed corrective actions. Waiting for the next regular meeting can be cited as inadequate oversight if the gap is material.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044 (42 CFR 416.41(a))",
      tutor: {
        whyCorrect:
          "Governance accountability runs in real time, not on a meeting calendar. For sentinel-level events, the chair gets called, a written notification is filed, and the governing body's response is documented — even if that response is a written acknowledgment with a directive to investigate further by a date certain.",
        whyWrong: {
          A: "A 7-week delay between event and governing body review is hard to defend. Surveyors look for prompt notification.",
          C: "The bylaws committee is procedural; it does not own clinical event review. The governing body owns it.",
          D: "State agency notification is a separate (and often required) reporting obligation, not a substitute for internal governance review.",
        },
        operationalContext:
          "Have a written policy that defines 'reportable to governing body within 24 hours' events: unexpected deaths, transfers for higher level of care, wrong-site or wrong-procedure events, medication-related sentinel events, fires, and equipment failures with patient impact. Use email or a secure portal with documented receipt.",
      },
    },
    {
      id: "asc_gov_08",
      question:
        "An ASC receives a recall notice from a manufacturer for a high-volume implant used in 47 cases over the prior 6 months. The materials manager pulls the remaining stock and emails the surgeons. No mention is made in governing body minutes. Six months later a surveyor asks about the recall. What is the issue?",
      options: [
        "No issue — pulling stock and notifying surgeons is sufficient",
        "Standard-level finding — the recall should have been logged in the QAPI binder",
        "Condition-level finding — the recall affected patient safety, and the governing body must be informed and document its review and any directed action",
        "No issue — recalls are the manufacturer's responsibility, not the ASC's",
      ],
      correctIndex: 2,
      explanation:
        "A recall on an implant used in 47 patients is a patient safety event. The governing body needs to be informed, the action plan (notify affected patients, track follow-up, monitor for related complications) needs to be documented, and the response has to be visible in governance records. Pulling stock without governance-level engagement leaves no audit trail of patient follow-up.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044, Q-0061 (42 CFR 416.41 and 416.43)",
      tutor: {
        whyCorrect:
          "Recalls of patient-implanted devices trigger a governance-level response: patient notification plan, follow-up plan, complication monitoring, and a closeout report. All of that has to be visible in the minutes, not just in the materials manager's inbox.",
        whyWrong: {
          A: "Removing stock prevents future harm but does nothing for the 47 patients already implanted.",
          B: "QAPI logging is necessary but not sufficient — the governing body still needs to receive and act on the report.",
          D: "The ASC owns its patient relationships. Recall notification and follow-up are the ASC's responsibility.",
        },
        operationalContext:
          "Build a recall response SOP: log the recall, identify affected patients within 5 business days, generate a notification letter, track patient acknowledgments, escalate to governing body at the next meeting (or sooner if material), and close the loop with a written report when follow-up is complete.",
      },
    },
    {
      id: "asc_gov_09",
      question:
        "The governing body meets quarterly. The QAPI committee meets monthly. A surveyor asks how the governing body is informed of QAPI activity between its quarterly meetings when something material occurs. The administrator says 'we'll bring it up at the next quarterly.' Is that defensible?",
      options: [
        "Yes — quarterly governance reporting is the standard cadence",
        "Yes — the QAPI chair has authority to act on behalf of the governing body between meetings",
        "No — the governing body must have a defined mechanism for receiving and acting on material QAPI information between scheduled meetings",
        "No — governing body meetings must be monthly, matching QAPI",
      ],
      correctIndex: 2,
      explanation:
        "Quarterly meetings are an acceptable cadence in many ASCs, but the governing body still needs a mechanism for between-meeting awareness and action. That can be a chair-only escalation policy, an email distribution of monthly QAPI summaries with documented acknowledgment, or a special-meeting trigger. Saying 'we'll wait three months' for a material event is the finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0061 (42 CFR 416.43)",
      tutor: {
        whyCorrect:
          "A defensible QAPI-to-governance bridge has three pieces: monthly written reports to the chair, defined thresholds for immediate escalation (e.g., any sentinel event), and a documented record that the chair received and reviewed the report. Surveyors ask to see all three.",
        whyWrong: {
          A: "Quarterly is acceptable for routine matters, not material events.",
          B: "The QAPI chair can manage the program but cannot make governance decisions on the body's behalf without delegated authority that is documented.",
          D: "Monthly governing body meetings are not required by the CFR; the requirement is for a defined and followed cadence with appropriate escalation.",
        },
        operationalContext:
          "Define written escalation rules: 'Sentinel event = chair notified within 24 hours.' 'Sterilization failure trend = chair notified within 5 business days.' 'Recall affecting implanted devices = chair notified within 24 hours and special meeting within 7 days.' Document the receipt and the response.",
      },
    },
    {
      id: "asc_gov_10",
      question:
        "An ASC has a contract for biomedical equipment maintenance. The biomed vendor was acquired 6 months ago by a national company. No one at the ASC noticed, and the original contract is technically with a now-defunct entity. Equipment is still being serviced under the old terms. What is the governance concern?",
      options: [
        "No concern — service is continuous, so the contract is in effect by performance",
        "The contract is with a non-existent entity; the ASC needs a current contract with the surviving entity, evidence of credentials, and documented governing body acknowledgment",
        "Concern is limited to the legal department; governance is not implicated",
        "No concern as long as no equipment failed",
      ],
      correctIndex: 1,
      explanation:
        "Contracts are governance documents. A contract with a non-existent legal entity does not bind anyone and does not establish service expectations or insurance coverage. The ASC needs to formalize a new agreement with the acquiring company, confirm the acquired vendor's credentials carried over (or were re-established), and surface the change to the governing body with a documented review.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0050 (42 CFR 416.41(b)(2))",
      tutor: {
        whyCorrect:
          "Vendor M&A activity routinely creates orphaned contracts. The governance test is whether the ASC actively manages the contract portfolio, catches changes, and ensures the relationship is documented with the legal entity that is actually performing the work.",
        whyWrong: {
          A: "Performance-by-conduct does not satisfy the governance documentation requirement.",
          C: "Legal review and governance review intersect here — the governing body needs to know that a key service contract changed hands.",
          D: "The finding is documentary, not outcome-based.",
        },
        operationalContext:
          "Once a year, send a one-line confirmation request to every contracted vendor: 'Confirm that your legal entity name, address, certification, and insurance carrier remain as on file.' Archive the responses and surface any changes at the next governing body meeting.",
      },
    },
    {
      id: "asc_gov_11",
      question:
        "A new infection prevention coordinator presents a proposal to invest in a new sterilizer. The estimated cost is $85,000. The medical director approves verbally. The administrator places the order. No governing body action is documented. What is the governance issue?",
      options: [
        "No issue — clinical equipment purchases are operational, not governance",
        "Issue — capital expenditures of this magnitude typically require governing body approval per the bylaws and financial controls",
        "No issue — the medical director's verbal approval is sufficient",
        "Issue — sterilizer purchases require state agency approval before order",
      ],
      correctIndex: 1,
      explanation:
        "Most ASC bylaws and financial control policies require governing body approval for capital expenditures above a defined threshold. Bypassing that control on an $85,000 purchase undermines internal controls and creates an audit finding. The bylaws define the threshold; whatever it is, the ASC has to follow it.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044 (42 CFR 416.41(a))",
      tutor: {
        whyCorrect:
          "Capital approval thresholds are how the governing body retains financial oversight without micromanaging. Bypassing the threshold — even for a clinically defensible purchase — is a control failure that undermines the broader governance system. The fix is process, not the equipment itself.",
        whyWrong: {
          A: "Capital purchases of clinical equipment carry governance implications: budget, depreciation, vendor relationship, and downstream maintenance contracts.",
          C: "Verbal approval by any single individual does not equal governing body action.",
          D: "Sterilizer purchases do not require state agency pre-approval in most jurisdictions, but that is not the governance issue here.",
        },
        operationalContext:
          "Publish the capital approval matrix in the administrator's office: under $5K = administrator approval, $5K–$25K = medical director + administrator, above $25K = governing body. Stamp every purchase order with the approval level used.",
      },
    },
    {
      id: "asc_gov_12",
      question:
        "An ASC's policy and procedure manual was last comprehensively reviewed 4 years ago. The administrator has been adding new policies as needed but has not re-reviewed older ones. A surveyor asks for the date the governing body last approved the full manual. What is the most defensible answer?",
      options: [
        "We add policies as needed — comprehensive review is not required",
        "The policies are still in effect, so the original approval date is sufficient",
        "We have a defined review cycle — typically every 1 to 3 years — and here is the documented governing body approval of the most recent cycle",
        "The medical director can re-approve in lieu of the governing body",
      ],
      correctIndex: 2,
      explanation:
        "There is no fixed CFR-prescribed review interval, but the expectation is that policies are kept current and that the governing body periodically re-approves them. Most ASCs adopt a 1- to 3-year cycle and document each cycle's approval. A 4-year-old approval with no scheduled review is hard to defend.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044 (42 CFR 416.41(a))",
      tutor: {
        whyCorrect:
          "Policy currency is a marker of governance discipline. The defensible posture is a documented cycle (often annual for high-risk policies, biennial or triennial for the rest), with each cycle's review tracked in the policy header and confirmed by governing body minutes.",
        whyWrong: {
          A: "Adding policies without revisiting old ones causes drift between practice and what the manual says.",
          B: "Approval ages out as standards, regulations, and equipment change. An old approval does not insulate the ASC from a citation about an obsolete policy.",
          D: "The governing body cannot delegate the final policy approval to the medical director without explicit bylaws authority and documented oversight.",
        },
        operationalContext:
          "Use a policy header that records: original approval date, last reviewed date, reviewer, next review due date, governing body approval date. Sort the manual by next-review-due and run the review schedule like a maintenance schedule.",
      },
    },
    {
      id: "asc_gov_13",
      question:
        "An ASC's medical staff bylaws require a 2-year reappointment cycle. A chart audit shows 4 of 12 physicians on staff have a current credentialing file dated 2 years and 4 months ago. The medical staff coordinator says the surgeons are 'always too busy to fill out the packet.' How will a surveyor view this?",
      options: [
        "Acceptable — physician busyness is a recognized exception",
        "Standard-level finding only — the lapse is short and there is no patient harm",
        "Condition-level finding — physicians without a current reappointment lack legal authority to practice; the governing body must enforce the cycle defined in the bylaws",
        "Acceptable if the medical director vouches for them in writing",
      ],
      correctIndex: 2,
      explanation:
        "Reappointment lapses are serious because the underlying privilege grant has expired. The four physicians are practicing without current legal authority, which exposes the ASC to billing risk, malpractice coverage gaps, and a Condition-level citation. Bylaws set the standard the ASC chose; failure to enforce them is a governance failure.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044, Q-0091 (42 CFR 416.41 and 416.45)",
      tutor: {
        whyCorrect:
          "Privileges are time-bounded. Once the cycle expires, the privilege is gone unless and until the governing body reappoints. Surveyors look at the next-review date in every credentialing file and write up every expired one.",
        whyWrong: {
          A: "There is no such exception. The MSC, the medical director, and the governing body are responsible for enforcing the cycle.",
          B: "Lapses are not 'minor' even when no harm has occurred — the underlying authority is missing.",
          D: "The medical director cannot substitute personal vouching for the formal reappointment process.",
        },
        operationalContext:
          "Tickle reappointment packets 180 days before expiration. At 90 days, escalate to the medical director. At 60 days, the chief of staff calls the physician personally. At 30 days, schedule auto-suspension at expiration. Most ASCs find that a real auto-suspension policy fixes the busyness problem permanently.",
      },
    },
    {
      id: "asc_gov_14",
      question:
        "An ASC operates as a joint venture between a hospital system and a physician group. The bylaws designate a five-member governing board: three from the hospital, two from the physicians. At the most recent meeting, only two members attended (one hospital, one physician). They voted to approve five new privilege grants. Is this binding?",
      options: [
        "Yes — any meeting where business is discussed produces binding decisions",
        "Yes — privileging decisions are exempt from quorum rules",
        "No — without a quorum as defined in the bylaws, the meeting cannot transact business and any 'decisions' are non-binding",
        "Yes — the medical director can ratify after the fact",
      ],
      correctIndex: 2,
      explanation:
        "Bylaws define quorum, and decisions made without a quorum are not binding governance acts. Five privilege grants approved without a quorum did not legally happen. The fix is to convene a properly noticed meeting with quorum, present the same packet, and re-vote. Until that happens, those physicians are not properly privileged.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044 (42 CFR 416.41(a)(2))",
      tutor: {
        whyCorrect:
          "Corporate governance basics still apply here: quorum is the threshold below which the body cannot act. A surveyor reading the bylaws will check meeting attendance against the quorum definition and flag any decision that fails the test.",
        whyWrong: {
          A: "Discussion is not the same as binding action; binding action requires quorum.",
          B: "There are no quorum exemptions for privileging.",
          D: "Ratification is possible only by a properly convened meeting with a quorum, after the fact.",
        },
        operationalContext:
          "Print the quorum number on every meeting agenda. The chair confirms quorum on the record at the start of every meeting. If quorum fails, the meeting recesses and is rescheduled — no business is conducted, even if everyone is in the room.",
      },
    },
    {
      id: "asc_gov_15",
      question:
        "The governing body wants to delegate routine credentialing of low-risk privileges (e.g., minor extensions to existing privilege sets) to the medical director, reserving full appointments and reappointments for itself. What is required to make this delegation legally effective?",
      options: [
        "An informal email from the chair to the medical director is sufficient",
        "The delegation must be expressly authorized in the bylaws, defined in scope, documented in the minutes, and accompanied by a reporting-back requirement",
        "Delegation is not permitted — only the governing body can act on credentialing matters",
        "Delegation can be inferred from the medical director's job description",
      ],
      correctIndex: 1,
      explanation:
        "The governing body can delegate, but the delegation has to be express, scoped, documented, and accompanied by oversight (reporting back). Bylaws are the cleanest place to define it; a written policy approved by the governing body is also acceptable. Informal delegation is not delegation — it is unauthorized practice.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0044 (42 CFR 416.41(a))",
      tutor: {
        whyCorrect:
          "Surveyors test delegated authority against three criteria: written authorization, scope (what is and is not delegated), and a reporting loop back to the governing body. All three must be visible in writing for the delegation to hold up.",
        whyWrong: {
          A: "Email from the chair, without governing body action, is the chair's opinion, not a governance decision.",
          C: "Delegation is permitted as long as the responsibility is retained and the oversight is real.",
          D: "Job descriptions don't create delegated authority; they describe duties within authority that already exists.",
        },
        operationalContext:
          "Write a delegation matrix as an attachment to the bylaws. For each delegated authority, list: who, what, scope limits, reporting mechanism, and revocation procedure. Review the matrix annually as part of governing body self-assessment.",
      },
    },
  ],
};
