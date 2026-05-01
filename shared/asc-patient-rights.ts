import type { Level } from "./schema";

export const ascPatientRightsLevel: Level = {
  id: "asc_patient_rights",
  module: "asc",
  name: "Patient Rights",
  description: "ASC patient rights and responsibilities — informed consent, privacy, advance directives, grievances, and the CMS-required notice of rights.",
  icon: "ScrollText",
  color: "hsl(210, 82%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Patient Rights and Responsibilities",
    plainLanguageSummary:
      "This chapter governs how an ASC treats every patient who walks through the door — from the way staff protect dignity and privacy, to how the facility hands over a written notice of rights before surgery, to how grievances get logged, investigated, and answered in writing. It also covers the patient's responsibilities (giving accurate health information, arranging a ride home, behaving respectfully) and the rules around advance directives. Operationally, it shows up in registration packets, signage in the waiting room, the consent process, and the way front-desk and clinical staff handle complaints in real time.",
    keyOperationalExpectations: [
      "Verbal AND written notice of rights is delivered before the procedure starts, in language the patient or representative actually understands.",
      "Notice of rights includes the state agency complaint contact and the Medicare Beneficiary Ombudsman website.",
      "Physician financial-interest disclosure (for owner-physicians) is provided in writing prior to the procedure.",
      "A written notice of rights is posted in waiting/registration areas where patients and families will see it.",
      "Advance directive policy is shared in writing, and the chart documents whether the patient has executed one.",
      "Grievances are logged, immediately reported to a person in authority, investigated within defined timeframes, and resolved with a written response naming a contact person, the steps taken, the result, and the date completed.",
    ],
    commonRiskPoints: [
      "Notice of rights is delivered only after the patient is already in pre-op (too late — must be 'prior to the surgical procedure').",
      "The complaint pathway lists only an internal phone number — missing the state agency and the Medicare Ombudsman website.",
      "Verbal complaints are 'handled' but never documented, so there is no grievance log to show a surveyor.",
      "Owner-physicians' financial interest is mentioned verbally but not provided to the patient in writing.",
    ],
    cmsTags: [
      "42 CFR 416.50",
      "Q-0219",
      "Q-0220",
      "Q-0221",
      "Q-0223",
      "Q-0224",
      "Q-0225",
      "Q-0226",
      "Q-0227",
      "Q-0228",
      "Q-0229",
      "Q-0230",
      "Q-0231",
      "Q-0232",
      "Q-0233",
    ],
  },
  studyMaterial: [
    {
      title: "Notice of Rights — Timing and Content",
      content:
        "The CMS Conditions for Coverage require an ASC to give the patient (or their representative or surrogate) verbal AND written notice of patient rights before the surgical procedure begins. The notice must be delivered in a language and manner the patient actually understands, and it must include the state agency contact for complaints plus the website for the Office of the Medicare Beneficiary Ombudsman. The same notice must also be posted in places where patients in the waiting area will see it.",
      keyPoint:
        "Before the procedure starts: verbal + written notice in language the patient understands, with state agency and Medicare Ombudsman info — and the notice posted in the waiting area.",
    },
    {
      title: "Physician Financial-Interest Disclosure",
      content:
        "When physicians have an ownership or financial interest in the ASC, the facility must disclose that fact to the patient in writing, in accordance with 42 CFR Part 420. Verbal disclosure alone is not sufficient. The written disclosure must be delivered before care is provided.",
      keyPoint:
        "Owner-physician disclosure must be in writing and delivered before the procedure — not just mentioned in conversation.",
    },
    {
      title: "Advance Directives",
      content:
        "Patients (or their representatives) must receive written information about the ASC's advance directive policy, including a description of the relevant state laws and, on request, the state's official advance directive forms. The medical record must document — in a prominent place — whether or not the patient has executed an advance directive. The ASC may, by policy, decline to honor advance directives during surgery, but that decision and its rationale must be communicated up front.",
      keyPoint:
        "Provide written advance directive info, document existence (yes/no) prominently in the chart, and disclose any ASC policy that limits when directives are honored.",
    },
    {
      title: "Grievance Process",
      content:
        "An ASC must have a formal grievance procedure that documents the existence, submission, investigation, and disposition of every written or verbal grievance. Allegations of mistreatment, neglect, or any form of abuse must be fully documented and immediately reported to a person in authority at the ASC. Only substantiated allegations are forwarded to state or local authorities. The process must specify timeframes and produce a written response that names a contact person, lists the investigative steps, states the result, and gives the completion date.",
      keyPoint:
        "Every grievance — verbal or written — gets logged, reported up immediately, investigated to a defined timeframe, and answered in writing with contact, steps, result, and date.",
    },
    {
      title: "Patient Responsibilities",
      content:
        "Patients are informed up front of their responsibilities: giving complete and accurate health information (including OTC products, supplements, and allergies), following the agreed-upon plan of care, arranging a responsible adult for transportation home and post-op support, accepting financial responsibility for amounts not covered by insurance (limited to deductible and coinsurance for Medicare-certified ASCs), and behaving respectfully toward staff, other patients, and visitors.",
      keyPoint:
        "Responsibilities cover honest history, plan adherence, a ride and adult support, financial responsibility (CMS limits this for Medicare patients), and respectful behavior.",
    },
    {
      title: "Privacy, Dignity, and Communication",
      content:
        "Patients have the right to personal privacy at check-in and in evaluation/treatment areas, to interpretation services, and to information about their diagnosis, evaluation, treatment, and prognosis. They also have the right to participate in decisions about their care unless that participation is medically contraindicated. When information cannot be given to the patient directly for medical reasons, it goes to a designated representative or legally authorized person.",
      keyPoint:
        "Privacy at check-in and in treatment areas, real interpretation services (not just family), and shared decision-making — with a defined fallback when the patient cannot receive information directly.",
    },
    {
      title: "Freedom from Discrimination and Reprisal",
      content:
        "Under 42 CFR 416.50(e)(1)(i) every patient has the right to receive care free of discrimination and free of any retaliation for exercising their rights — including filing a grievance. Surveyors look for a non-discrimination statement embedded in the notice of rights, a policy that explicitly prohibits reprisal against patients who complain, and staff who can articulate that nobody loses access to care or gets treated differently because they spoke up. The grievance log is the single best place to demonstrate this: a patient who filed a complaint and then returned for a follow-up visit shows the no-reprisal policy is real.",
      keyPoint:
        "Q-0227 hits when staff treat a complaining patient differently or when the rights notice has no anti-discrimination/anti-reprisal language.",
    },
    {
      title: "Safe Setting and Freedom from Abuse/Harassment",
      content:
        "42 CFR 416.50(f)(2) and (f)(3) — Q-0232 and Q-0233 — require the ASC to provide care in a physically safe environment and to keep patients free from abuse, neglect, mistreatment, and harassment of any kind. Operationally this shows up in pre-employment screening (background checks, OIG/SAM exclusion checks), staff training on recognizing and reporting abuse, a confidential reporting pathway, and immediate escalation of any allegation to a person in authority. Substantiated allegations have to be reported to the appropriate state or local authority — not just handled internally.",
      keyPoint:
        "If a surveyor asks 'how do you keep patients safe from harm here?' you should be able to point to background checks, abuse-recognition training, and a documented escalation/reporting path — not just say 'our staff are good people.'",
    },
    {
      title: "Posting the Written Notice — Q-0220 in the Waiting Room",
      content:
        "The notice of rights doesn't only travel in the registration packet. A copy of the written notice has to be physically posted in places where patients waiting for treatment, or their representatives, will actually see it. Q-0220 is the standard-level finding that catches ASCs whose only 'posting' is a binder behind the front desk or a folder a patient has to ask for. The fix is a framed copy at adult eye level in the waiting area, plus copies in pre-op bays and at any check-in kiosk.",
      keyPoint:
        "Q-0220 is the 'is it actually on the wall?' tag. Available on request is not the same as posted in plain view.",
    },
    {
      title: "Informed Consent as a Substantive Right (Q-0229)",
      content:
        "42 CFR 416.50(e)(1)(iii) gives the patient the right to be fully informed about the procedure and expected outcome before it happens. The signed consent form is documentation of a conversation, not a substitute for one. Surveyors look for evidence that the operating practitioner — not pre-op nursing — discussed the nature of the procedure, the expected outcome, the material risks, the benefits, and the reasonable alternatives, and that the discussion happened with enough lead time for the patient to actually deliberate. A patient signing in pre-op ten minutes before incision, with no prior office-based consent conversation, is a Q-0229 problem regardless of how clean the form looks.",
      keyPoint:
        "The signed form proves the conversation happened — it does not replace it. The surgeon owns the consent discussion.",
    },
    {
      title: "Organization Information — Credentials, Fees, Malpractice",
      content:
        "Standard I of the Patient Rights chapter requires the ASC to make practical information about itself available to patients: the services offered, after-hours and emergency arrangements, fees for services, payment policies, the credentials of the health care professionals who will provide care, and — if applicable — the absence of malpractice coverage. Surveyors check the registration packet, the website, and the posted disclosures for these items. Vague answers like 'patients can ask the front desk' don't satisfy the standard; the information has to be available without the patient having to push for it.",
      keyPoint:
        "If a patient asks who the surgeon is, what they're licensed to do, what they'll be charged, and whether the practitioner carries malpractice — the ASC should already have those answers documented and accessible.",
    },
    {
      title: "Exercise of Rights by Representative or Guardian (Q-0230)",
      content:
        "42 CFR 416.50(e)(2) and (e)(3) cover what happens when the patient cannot exercise their own rights. If a court of proper jurisdiction has adjudicated the patient incompetent, the rights are exercised by the person appointed under state law — typically a court-appointed guardian, with the order on file. If there is no court adjudication, any legal representative or surrogate the patient designated under state law (healthcare power of attorney, advance directive proxy) may exercise the patient's rights to the extent state law allows. Defaulting to 'the adult child in the waiting room' is not compliant — the ASC has to verify and document the legal authority before consent.",
      keyPoint:
        "Before consent, verify and copy the guardianship order or POA. Q-0230 hits when the chart shows a family member 'consented' with no documented legal authority.",
    },
  ],
  questions: [
    {
      id: "asc_pr_1",
      question:
        "A patient arrives for a screening colonoscopy. The pre-op nurse hands them a written notice of rights and asks them to sign it after they are already changed into a gown and on the stretcher in the pre-op bay. Does this meet the CMS requirement?",
      options: [
        "Yes — the notice was provided before the procedure began",
        "Yes — written notice alone meets the CMS requirement",
        "No — verbal AND written notice must be delivered before the patient is prepared for the procedure",
        "No — only the surgeon may deliver the notice of rights",
      ],
      correctIndex: 2,
      explanation:
        "CMS requires both verbal and written notice of rights, delivered before the surgical procedure, in a manner the patient can meaningfully understand. Once a patient is gowned and on a stretcher, surveyors view the consent moment as coercive and after-the-fact.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0221 (42 CFR 416.50(a))",
      tutor: {
        whyCorrect:
          "The CMS Condition for Coverage requires both verbal AND written notice of rights, in a language and manner the patient understands, prior to the start of the surgical procedure. Handing it over once the patient is already gowned in pre-op is functionally too late — the patient cannot meaningfully decline care or ask questions at that point. Best practice is delivery during registration or scheduling.",
        whyWrong: {
          A: "'Before the procedure began' is too narrow a reading. Surveyors expect the notice to be delivered at a point when the patient still has time and capacity to read it, ask questions, and act on it. A patient on a stretcher in pre-op has neither.",
          B: "Written notice alone does not satisfy the CMS requirement. The rule explicitly requires both verbal and written delivery so the facility can confirm comprehension.",
          D: "The CMS requirement does not specify who must deliver the notice. It is typically registration or pre-op nursing — not the surgeon. The problem here is timing, not role.",
        },
        operationalContext:
          "Most ASCs build this into the pre-registration packet mailed or e-signed days before surgery, with a verbal walk-through completed at check-in by registration staff. That gives the patient real time with the document.",
      },
    },
    {
      id: "asc_pr_2",
      question:
        "During a survey, the surveyor asks to see the ASC's posted notice of patient rights. The administrator points to a binder at the registration desk that contains the notice. The waiting room has no posted notice. Does this meet the requirement?",
      options: [
        "Yes — the notice is available on request, which meets the requirement",
        "No — the written notice must be posted in places likely to be noticed by patients in the waiting area",
        "Yes — posting is recommended but not required",
        "No — the notice must be posted in every patient room, not just the waiting area",
      ],
      correctIndex: 1,
      explanation:
        "The CMS Condition for Coverage requires the written notice of patient rights to be posted in places within the ASC that patients waiting for treatment (or their representatives) are likely to see. A binder behind the desk does not meet the posting requirement.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0220 (42 CFR 416.50)",
      tutor: {
        whyCorrect:
          "The rule is explicit: the written notice must be posted in places likely to be noticed by patients waiting for treatment, or by their representatives. A binder kept behind the registration desk fails the 'likely to be noticed' test. CMS has flagged that posting deficiencies, while serious, are typically scored at the standard level (Q-0220) rather than the condition level.",
        whyWrong: {
          A: "Available on request is not the same as posted. The Conditions for Coverage require visible, passive posting — the patient should not have to ask.",
          C: "Posting is required, not recommended. It is a separately enumerated element of compliance under Q-0220.",
          D: "The requirement is for the waiting area and other places visible to patients/representatives, not 'every patient room.' Pre-op and recovery bays are appropriate locations as well, but the waiting room is the primary expectation.",
        },
        operationalContext:
          "The simplest fix is a framed laminated copy in the registration/waiting area at adult eye level, plus a copy in each pre-op bay or check-in kiosk if used.",
      },
    },
    {
      id: "asc_pr_3",
      question:
        "A patient submits a verbal complaint to a recovery nurse about a rude interaction with the anesthesiologist. The nurse listens, apologizes, and tells the patient she'll mention it to the manager. No written record is created. Two months later the patient calls the state. What is the most significant compliance failure?",
      options: [
        "The recovery nurse should have referred the patient directly to the state agency",
        "The complaint was not documented as a grievance, so there is no record of submission, investigation, or disposition",
        "The recovery nurse was not authorized to receive the complaint — only the administrator can",
        "Verbal complaints are not considered grievances and require no documentation",
      ],
      correctIndex: 1,
      explanation:
        "The grievance procedure must document the existence, submission, investigation, and disposition of every grievance — verbal or written. Listening sympathetically without creating a record fails the documentation standard and leaves the ASC unable to demonstrate any response to the surveyor.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0225, Q-0226 (42 CFR 416.50(d))",
      tutor: {
        whyCorrect:
          "Under the CMS rule, the ASC must document the existence, submission, investigation, and disposition of every patient grievance — verbal or written. The kind nurse interaction described is not a grievance process; it is a polite conversation with no audit trail. When the patient escalated to the state, the ASC had no record to demonstrate the complaint was acknowledged, investigated, or answered.",
        whyWrong: {
          A: "Patients always retain the right to contact the state, but the ASC's first obligation is to log and investigate the complaint internally. Sending patients straight to the state would actually reduce the facility's ability to address concerns.",
          C: "Any staff member can receive a complaint; the rule does not restrict intake to the administrator. The failure is documentation and escalation, not the receiver's role.",
          D: "Verbal complaints absolutely count. The Condition for Coverage explicitly covers 'written or verbal' grievances.",
        },
        operationalContext:
          "Build a simple grievance log (date, patient name, intake staff, summary, person in authority notified, investigative steps, written response date, contact person). Train every clinical staff member that 'I'll mention it' is not enough — the grievance form must be opened in real time.",
      },
    },
    {
      id: "asc_pr_4",
      question:
        "An owner-physician of a single-specialty ASC tells the patient during the pre-op consult, \"Just so you know, I'm a part owner here.\" The chart documents that the disclosure was made verbally. Is this sufficient under the CMS Conditions for Coverage?",
      options: [
        "Yes — verbal disclosure with chart documentation satisfies the requirement",
        "Yes — only ASCs with more than five physician-owners are required to disclose",
        "No — financial interest disclosure must be provided to the patient in writing",
        "No — financial interest disclosure must be made by the administrator, not the surgeon",
      ],
      correctIndex: 2,
      explanation:
        "The Condition for Coverage at 42 CFR 416.50(b), referencing 42 CFR Part 420, requires that any disclosure of physician financial interest or ownership in the ASC be made to the patient in writing. Verbal disclosure with a chart note does not meet the requirement.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0223 (42 CFR 416.50(b))",
      tutor: {
        whyCorrect:
          "The disclosure rule for physician ownership/financial interest in an ASC requires written notice to the patient. The intent is that patients have a tangible document they can take home and refer to, not a passing comment in a busy consent visit.",
        whyWrong: {
          A: "Chart documentation that 'verbal disclosure was made' does not satisfy the rule. The patient must receive a written disclosure.",
          B: "There is no five-owner threshold. The disclosure obligation applies whenever any physician on staff has a financial interest or ownership in the ASC.",
          D: "The rule does not specify who delivers the disclosure — only that it must be in writing. The surgeon, registration staff, or administrator may distribute it; the format is what matters.",
        },
        operationalContext:
          "Most ASCs include a separate one-page 'Physician Financial Interest Disclosure' as part of the pre-registration packet, listing every owner-physician on staff. Patient signs an acknowledgment that goes into the chart.",
      },
    },
    {
      id: "asc_pr_5",
      question:
        "A patient who speaks limited English brings her adult daughter to translate during the consent discussion. The surgeon proceeds, with the daughter interpreting. What is the compliance concern?",
      options: [
        "There is no concern — family interpretation is acceptable when the family member is an adult",
        "The ASC must use a qualified interpreter (in person, telephonic, or video); using a family member as the sole interpreter risks both consent validity and the interpretation-services standard",
        "The concern is HIPAA only — the daughter must sign a separate confidentiality form",
        "The concern is logistical only — the surgeon should slow down so the daughter can keep up",
      ],
      correctIndex: 1,
      explanation:
        "Patients have the right to interpretation services. Using a family member — especially for clinical content like informed consent — risks inaccurate translation, omitted information, and confidentiality issues. ASCs are expected to provide qualified interpretation, which can be in-person, telephonic, or video.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0231 (42 CFR 416.50(f)(1))",
      tutor: {
        whyCorrect:
          "Interpretation services are an enumerated element of compliance under the patient rights chapter. Family interpretation, especially for informed consent, is widely discouraged because relatives often soften, omit, or reinterpret clinical information, and the patient may withhold sensitive history in front of family. CMS and AAAHC expect ASCs to have a qualified interpretation pathway available — phone-based services are the most common.",
        whyWrong: {
          A: "Adult family members are not, by virtue of being adults, qualified medical interpreters. They are still subject to the same accuracy and confidentiality concerns.",
          C: "HIPAA is a real consideration, but the primary issue is the validity of informed consent and the patient's right to professional interpretation.",
          D: "Pacing helps, but it does not solve interpretation accuracy. A trained interpreter understands clinical terminology and is bound by confidentiality and accuracy standards a family member is not.",
        },
        operationalContext:
          "Most ASCs contract with a phone-based language line service (e.g., LanguageLine, Cyracom). Train pre-op staff to dial the service before consent rather than defaulting to family. Document interpreter ID/vendor and language in the chart.",
      },
    },
    {
      id: "asc_pr_6",
      question:
        "A patient asks to see her own medical record from her cataract procedure. The front desk says she'll need to file a written request and pay a fee, and that records take 30 days. The patient is upset. From a patient-rights standpoint, what is the most important consideration?",
      options: [
        "Patients do not have a right to access their own ASC records",
        "Patients have the right to access their own health information; the ASC must follow HIPAA timelines and may charge only a reasonable cost-based fee",
        "ASCs may charge whatever fee they choose because they are not hospitals",
        "The 30-day timeline is fine, but no fee may be charged",
      ],
      correctIndex: 1,
      explanation:
        "Patients have the right to access their own protected health information under HIPAA. ASCs must comply with HIPAA's access timeline (generally 30 days, with one 30-day extension if needed) and may charge only a reasonable, cost-based fee — not a flat retrieval fee designed to discourage access.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "HIPAA's right of access (45 CFR 164.524) gives patients access to their designated record set, including ASC records, within 30 days (with one 30-day extension if needed and the patient is notified). Fees must be limited to actual labor for copying, supplies, and postage — not a punitive flat fee.",
        whyWrong: {
          A: "Patients have an affirmative right to access their own health information under HIPAA, regardless of the care setting.",
          C: "The fee is constrained by HIPAA's reasonable cost-based standard. ASCs are covered entities and must comply.",
          D: "A reasonable cost-based fee is permitted; the rule constrains the amount, not the existence of any fee.",
        },
        operationalContext:
          "Have a written records request form, a posted fee schedule that reflects only actual labor and materials, and a logged 30-day turnaround clock. Train front desk that 'I want my records' is a HIPAA access request, not a complaint.",
      },
    },
    {
      id: "asc_pr_7",
      question:
        "A patient with dementia arrives for a procedure with her court-appointed guardian. Who exercises the patient's rights under the Conditions for Coverage?",
      options: [
        "The patient — patient rights are non-transferable",
        "The guardian — when a patient is adjudged incompetent by a court, the rights of the patient are exercised by the person appointed under state law",
        "The surgeon, on the patient's behalf",
        "The patient's adult child, by default",
      ],
      correctIndex: 1,
      explanation:
        "When a patient has been adjudged incompetent by a court of proper jurisdiction, the patient's rights are exercised by the person appointed under state law to act on the patient's behalf — in this case, the court-appointed guardian.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0230 (42 CFR 416.50(e)(2))",
      tutor: {
        whyCorrect:
          "The rule is specific: a court-appointed guardian or person designated by state law exercises the patient's rights when the patient has been formally adjudged incompetent. The ASC should verify the guardianship order and document it in the chart.",
        whyWrong: {
          A: "Patient rights are not 'non-transferable.' They are exercisable by a legal representative when the patient has been judged incompetent or has otherwise designated a representative consistent with state law.",
          C: "The surgeon is not a legal representative and cannot exercise patient rights. The surgeon may need to engage the guardian for consent.",
          D: "An adult child is not automatically the legal decision-maker. State law and any guardianship/POA documents control who is.",
        },
        operationalContext:
          "Pre-op should request and copy the guardianship order before consent. If the patient has only a healthcare power of attorney without formal incompetency adjudication, that document — not adult-child default — controls.",
      },
    },
    {
      id: "asc_pr_8",
      question:
        "An ASC's grievance policy says: \"Verbal complaints are tracked informally; written grievances are logged and answered in writing within 45 days.\" A surveyor reviews the policy. Does this meet the requirement?",
      options: [
        "Yes — the policy distinguishes verbal from written, which CMS allows",
        "No — the grievance documentation requirement applies equally to verbal and written grievances",
        "Yes — 45 days is within the CMS-mandated maximum response time",
        "No — only because 45 days is too long; verbal grievances may be tracked informally",
      ],
      correctIndex: 1,
      explanation:
        "The Condition for Coverage requires that the existence, submission, investigation, and disposition of every grievance be documented — whether the grievance was verbal or written. 'Tracked informally' fails that documentation standard.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0225 (42 CFR 416.50(d))",
      tutor: {
        whyCorrect:
          "The grievance Condition for Coverage applies to verbal and written grievances equally. A policy that allows verbal grievances to be tracked 'informally' does not produce the documentation surveyors expect to see — patient identifier, complaint summary, person in authority notified, investigation steps, resolution, and date completed.",
        whyWrong: {
          A: "CMS does not allow a verbal/written distinction in the documentation requirement. The same documentation rules apply to both.",
          C: "CMS does not set a single fixed maximum response time; the ASC sets the timeframe in its policy. The problem is the verbal/informal carve-out, not the 45-day clock.",
          D: "The verbal carve-out is the actual problem, not the duration. The duration is for the ASC to set within its policy.",
        },
        operationalContext:
          "Replace 'tracked informally' with one process that opens a grievance record for every complaint regardless of channel, with the same fields and the same response timeline.",
      },
    },
    {
      id: "asc_pr_9",
      question:
        "During pre-op, a patient asks the nurse, \"Will my advance directive be followed if something goes wrong?\" The ASC has a policy stating that, during the surgical episode, full resuscitation will be attempted regardless of any DNR on file. How should this be handled?",
      options: [
        "The nurse should reassure the patient that all advance directives are always honored",
        "The ASC's policy on advance directives — including any limitation during surgery — must be disclosed to the patient in writing prior to the procedure",
        "The patient must rescind their advance directive in writing before surgery",
        "Only the surgeon may discuss the advance directive policy with the patient",
      ],
      correctIndex: 1,
      explanation:
        "ASCs may, by policy, limit when advance directives are honored during a surgical episode, but that policy must be disclosed to the patient in writing prior to care so the patient can make an informed decision.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0224 (42 CFR 416.50(c))",
      tutor: {
        whyCorrect:
          "The advance directive Condition for Coverage requires written information about the ASC's policies on advance directives, including any policy that limits when those directives are honored. If an ASC has a 'required full resuscitation during the surgical episode' policy, that must be disclosed up front so the patient can decide whether to proceed.",
        whyWrong: {
          A: "Reassuring the patient that all directives are 'always honored' is inaccurate if the ASC has a surgical-episode exception, and could expose the facility to a patient-rights violation if a code occurs.",
          C: "Patients are not required to rescind a directive to have surgery. They must, however, be informed of any ASC policy that limits when the directive applies.",
          D: "The discussion does not have to be limited to the surgeon. Pre-op nurses, registration staff, or the administrator can deliver the written information; the document and timing matter, not the role.",
        },
        operationalContext:
          "Most ASCs have a one-page advance directive policy summary in the pre-registration packet, with a signature line acknowledging receipt. The chart should also have a clear yes/no marker for 'Patient has executed an advance directive.'",
      },
    },
    {
      id: "asc_pr_10",
      question:
        "A patient files a grievance alleging that a tech made an inappropriate comment during prep. The ASC investigates, finds the allegation substantiated, and disciplines the tech. The ASC closes the loop with a verbal phone call to the patient. What is missing?",
      options: [
        "Nothing — verbal closure is acceptable for substantiated grievances",
        "A written response naming a contact person, the steps taken to investigate, the result, and the date the grievance process was completed",
        "An apology letter from the tech",
        "Notification to the patient's primary care physician",
      ],
      correctIndex: 1,
      explanation:
        "The Condition for Coverage requires that the ASC provide written notice of its decision to the patient, including the name of an ASC contact person, the steps taken to investigate, the result, and the date the process was completed. A phone call alone does not satisfy this.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0225 (42 CFR 416.50(d)(6))",
      tutor: {
        whyCorrect:
          "The grievance closure rule is explicit: written notice to the patient with four elements — contact person at the ASC, investigative steps, result, and completion date. Verbal closure is friendly but not compliant.",
        whyWrong: {
          A: "Verbal closure is not acceptable as the sole communication; the rule requires a written decision.",
          C: "An apology may be appropriate but is not required. The required elements are contact, steps, result, and date.",
          D: "PCP notification is not part of the CMS grievance closure rule. The closure communication is between the ASC and the patient/representative.",
        },
        operationalContext:
          "Build a simple grievance closure letter template with the four required fields prefilled. Sign it from the administrator or quality director, and mail or hand-deliver it. File a copy in the grievance log.",
      },
    },
    {
      id: "asc_pr_11",
      question:
        "A patient signs an informed consent form in the pre-op bay 10 minutes before the procedure. The surgeon has not personally discussed risks, benefits, or alternatives with the patient. What is the primary patient-rights concern?",
      options: [
        "There is no concern — consent forms are administrative documents",
        "The patient has the right to be fully informed about a treatment or procedure and the expected outcome before it is performed; signing a form is not a substitute for that disclosure",
        "The concern is timing only — 30 minutes would be acceptable",
        "The concern is signature placement on the form",
      ],
      correctIndex: 1,
      explanation:
        "The patient has the right to be fully informed about the treatment or procedure and the expected outcome before it is performed. The signed form is evidence of that conversation; it is not the conversation itself. A surgeon-led discussion of risks, benefits, and alternatives is the substantive requirement.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0229 (42 CFR 416.50(e)(1)(iii))",
      tutor: {
        whyCorrect:
          "Informed consent is a substantive right, not a paperwork event. The patient's right to be 'fully informed' requires a real conversation with the practitioner who will perform the procedure, covering the nature of the procedure, expected outcome, risks, benefits, and reasonable alternatives. The signed form documents that — it is not a substitute for it.",
        whyWrong: {
          A: "Consent forms are not merely administrative; they document a clinically required disclosure conversation.",
          C: "Adding 20 minutes does not fix the underlying problem: the surgeon never had the conversation with the patient.",
          D: "Signature placement is not the issue; the absence of a real informed-consent conversation is.",
        },
        operationalContext:
          "Many ASCs require the surgeon to document the consent conversation in the office days before the procedure, with a separate same-day verbal reconfirmation in pre-op. The pre-op nurse should not 'consent' the patient on behalf of the surgeon.",
      },
    },
    {
      id: "asc_pr_12",
      question:
        "An ASC's notice of patient rights, distributed at registration, lists only an internal patient-experience phone number for complaints. What is missing?",
      options: [
        "Nothing — the internal number is the most important channel",
        "The address and telephone number of the state agency to which patients may report complaints, and the website for the Office of the Medicare Beneficiary Ombudsman",
        "An email address for the ASC's CEO",
        "The CMS National Hotline number",
      ],
      correctIndex: 1,
      explanation:
        "The CMS Condition for Coverage explicitly requires that the notice of rights include the address and telephone number of the state agency for complaints, plus the website for the Office of the Medicare Beneficiary Ombudsman. An internal number alone is not enough.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0221 (42 CFR 416.50(a))",
      tutor: {
        whyCorrect:
          "The notice of rights must include both the state agency contact (where patients can complain externally) and the Medicare Beneficiary Ombudsman website. CMS wants patients to know they have an external escalation path that does not depend on the ASC cooperating.",
        whyWrong: {
          A: "An internal number is fine to include, but it cannot be the only complaint contact. The external state agency and Ombudsman pathways are required.",
          C: "An email for the CEO is not required by the rule.",
          D: "A 'CMS National Hotline' is not the specific element required; the Medicare Beneficiary Ombudsman website is.",
        },
        operationalContext:
          "Look up your state's ASC complaint contact (often the state Department of Health, Bureau of Facility Standards or equivalent) and include it on the notice along with the Ombudsman URL (https://www.cms.gov/center/ombudsman).",
      },
    },
    {
      id: "asc_pr_13",
      question:
        "A patient asks the front desk what happens if she disagrees with the surgeon's plan and wants a different surgeon. The staff member says, \"You signed up with us, you have to use our surgeons.\" Is this consistent with the patient rights standards?",
      options: [
        "Yes — patients commit to the surgeon they scheduled with",
        "No — patients have the right to be informed that they may change providers if other qualified providers are available",
        "Yes — only inpatient hospitals must inform patients of provider changes",
        "No — only the medical director may discuss surgeon changes",
      ],
      correctIndex: 1,
      explanation:
        "An element of compliance under the patient rights chapter is that patients and staff are informed of the patient's right to change providers if other qualified providers are available. Telling a patient they 'have to' use the assigned surgeon misrepresents that right.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Patient Rights — Standard G, element 4",
      tutor: {
        whyCorrect:
          "Among the elements of compliance for the 'patients are informed of their rights' standard is the right to change providers if other qualified providers are available. Front-desk language that closes that door is a patient-rights problem, even if logistically the practice is single-surgeon.",
        whyWrong: {
          A: "Scheduling does not waive the right to change providers if alternatives exist.",
          C: "The provider-change right is part of the AAAHC patient rights chapter for ambulatory care, not a hospital-only standard.",
          D: "Any staff member can convey the right; the rule does not restrict the conversation to a specific role.",
        },
        operationalContext:
          "If your ASC has only one surgeon for a given procedure, the honest answer is: 'We currently have one credentialed surgeon for this procedure here; if you'd like to be seen elsewhere, here's how to transfer your records.' Capture that pathway in policy.",
      },
    },
    {
      id: "asc_pr_14",
      question:
        "During a tracer, a surveyor reviews a chart and sees no documentation of whether the patient has executed an advance directive. The patient told the pre-op nurse verbally that she has one. What is the deficiency?",
      options: [
        "There is no deficiency — verbal disclosure is acceptable",
        "The chart must document, in a prominent part of the patient's current medical record, whether the patient has executed an advance directive",
        "The deficiency is that the directive itself was not copied into the chart",
        "The deficiency is that the patient should have been required to bring the directive in writing",
      ],
      correctIndex: 1,
      explanation:
        "The CMS Condition for Coverage requires that documentation in a prominent part of the patient's current medical record indicate whether or not the individual has executed an advance directive. The yes/no must be visible in the chart, not just in a verbal exchange.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0224 (42 CFR 416.50(c)(3))",
      tutor: {
        whyCorrect:
          "The rule does not require the ASC to file the actual directive in the chart, but it does require a prominently documented yes/no marker so any clinician can see at a glance whether the patient has one.",
        whyWrong: {
          A: "Verbal disclosure does not satisfy the documentation rule. The chart must show the yes/no.",
          C: "Filing the directive itself is good practice but not required by the rule. The required artifact is the yes/no documentation.",
          D: "There is no requirement that patients produce the directive document at the ASC. The ASC simply must record whether one exists.",
        },
        operationalContext:
          "Most ASC EHRs have a discrete advance directive yes/no field on the pre-op form. If yours uses a free-text field, audit it monthly to make sure pre-op nurses are completing it.",
      },
    },
    {
      id: "asc_pr_15",
      question:
        "A 68-year-old patient who speaks only Mandarin arrives for cataract surgery. The pre-op nurse needs the patient to sign the surgical consent. The patient's adult son, who is fluent in English and Mandarin, is in the waiting room and offers to translate. What is the most defensible action under the ASC patient rights Condition for Coverage?",
      options: [
        "Use a qualified medical interpreter (in-person, video, or telephonic) and document the interpreter's identity and method in the chart",
        "Have the son translate and document that a family member assisted",
        "Proceed with the standard English consent form and have the patient sign — language barriers are not the ASC's responsibility",
        "Cancel the case and reschedule for a day when the surgeon's bilingual MA is on the schedule",
      ],
      correctIndex: 0,
      explanation:
        "Under 42 CFR 416.50(a), the ASC must provide notice of patient rights and obtain consent in a manner the patient can meaningfully understand. Using a qualified medical interpreter — and documenting which interpreter and which method was used — is the surveyor-defensible standard. Family members are not preferred interpreters because they may not be neutral, may filter or summarize, and may not understand medical terminology.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0221, Q-0224 (42 CFR 416.50(a) and (c))",
      tutor: {
        whyCorrect:
          "The Condition for Coverage requires that information be provided 'in a manner the patient understands.' A qualified medical interpreter — phone, video remote, or in-person — preserves accuracy, neutrality, and an audit trail. Charting the interpreter's name or vendor ID, the language, and the method (phone/video/in-person) is what surveyors look for during a tracer.",
        whyWrong: {
          B: "Family interpreters are discouraged in nearly every interpretation policy and accreditation standard. They may shield the patient from bad news, lack medical vocabulary, or have a conflict of interest. A surveyor citing this would write up the consent and the patient-rights notice.",
          C: "The CFR explicitly requires meaningful understanding. Handing a non-English speaker an English consent form does not meet that standard and is a textbook citation under Q-0221.",
          D: "Cancelling for a language reason when remote interpreter services are available within minutes is not appropriate. ASCs are expected to have interpreter access on demand, not to depend on staff coverage.",
        },
        operationalContext:
          "Most ASCs contract with a phone or video remote interpreting (VRI) vendor that provides on-demand access in 200+ languages within 60 seconds. Pre-op staff should know how to dial in, where the dual-handset phone or VRI cart lives, and what to chart. The chart entry should read like: 'Interpreter [Name/ID #], [Language], [phone/VRI/in-person], used for consent and pre-op education.'",
      },
    },
  ],
};
