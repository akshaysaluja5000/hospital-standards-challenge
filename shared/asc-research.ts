import type { Level } from "./schema";

export const ascResearchLevel: Level = {
  id: "asc_research_activities",
  module: "asc",
  name: "Research Activities",
  description:
    "IRB oversight, governing body review, written research protocols, patient rights, and informed consent requirements for ASC research.",
  icon: "Search",
  color: "hsl(260, 60%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Research Activities",
    plainLanguageSummary:
      "Chapter 19 applies to any ASC that conducts research — defined broadly to include clinical drug trials, device studies, investigational procedures, and any technique that is new, experimental, innovative, or not yet accepted as standard practice. If the ASC has no research activities, the chapter does not apply. But if any surgeon is using an investigational device, running a drug study, or using a novel technique that falls outside established practice, Chapter 19 applies. The requirements center on three principles: research must be conducted ethically and legally (IRB review, governing body oversight), according to written protocols approved by legal and medical review, and with full protection of patient rights including voluntary informed consent and the right to refuse without affecting their care. Surveyors ask whether the governing body annually reviews all current research, whether IRB documentation is present, and whether research patients have a separate research medical record with all required elements.",
    keyOperationalExpectations: [
      "All research must be appropriate for the organization's provider expertise and resource capabilities.",
      "The governing body must review IRB documentation for any clinical research study and must review all current research at least annually.",
      "Written protocols for all research must be present and approved by the governing body or its designee after medical and legal review.",
      "Patients must be informed of their right to refuse research participation — this refusal must not affect the quality of their clinical care.",
      "Informed consent must be obtained in the patient's primary language or manner of communication before research participation begins.",
      "A separate research medical record must be maintained for each research participant, including informed consent, study name, start date, and other pertinent information.",
    ],
    commonRiskPoints: [
      "A surgeon is using an investigational device or novel technique without any governing body awareness that it constitutes research under the AAAHC definition.",
      "IRB documentation exists but was never reviewed or formally accepted by the governing body — the approval was treated as the IRB's job alone.",
      "The governing body annual review of all current research is missing from meeting minutes.",
      "Research patients are consented using a standard surgical consent form — there is no separate research informed consent document, and the research medical record does not exist.",
      "The written research protocol exists but was never submitted for legal review.",
    ],
    cmsTags: [
      "AAAHC Chapter 19 (Selective Standard — applies when research activities are present)",
      "No specific CFR citation — AAAHC accreditation standard only",
      "45 CFR Part 46 (Common Rule — federal research ethics framework, context)",
    ],
  },
  studyMaterial: [
    {
      title: "What Counts as a 'Research Activity' Under AAAHC Chapter 19?",
      content:
        "AAAHC defines research activities broadly: clinical trials of drugs and biologicals, use of devices or implants classified as investigational or experimental, and use of techniques that are new, experimental, innovative, or not yet accepted as standard medical or dental practice. This means a surgeon trialing a new stapling technique or using an off-label device in a systematic way may be conducting research — even without a formal IRB study. The governing body must make a determination when novel techniques are proposed.",
      keyPoint:
        "Research includes investigational drugs, devices, and non-standard techniques. When in doubt, the governing body must evaluate whether an activity constitutes research.",
      category: "rule",
    },
    {
      title: "What Must the Governing Body Do Before Approving Clinical Research?",
      content:
        "Standard A element 3 requires the governing body to review any IRB review completed for a clinical research study — to ensure appropriate steps are taken to protect patient rights and welfare. The governing body is not simply rubber-stamping the IRB approval; it must actively review the IRB documentation and confirm the study is consistent with the ASC's capabilities. This review must be documented in governing body minutes.",
      keyPoint:
        "Governing body must review IRB documentation before approving research — not just acknowledge it. Document the review in meeting minutes.",
      category: "rule",
    },
    {
      title: "How Often Must the Governing Body Review All Current Research?",
      content:
        "Standard A element 4 requires the governing body to review all current research at least annually. This means a standing agenda item in governing body meetings — not just when a new study is started. The annual review should confirm each active study's status, ongoing IRB approval, patient enrollment, any adverse events, and compliance with protocol. Absence of this review from annual meeting minutes is a direct citation.",
      keyPoint:
        "All current research must be reviewed by the governing body at least annually. This must appear in meeting minutes.",
      category: "rule",
    },
    {
      title: "What Must Written Research Protocols Include and Who Must Approve Them?",
      content:
        "Standard B requires: (1) written protocols for each research study must be present, (2) those protocols must be approved by the governing body or its designee after both medical and legal review. Medical review confirms the protocol is clinically sound and within the ASC's capabilities; legal review addresses consent language, HIPAA compliance, liability, and regulatory alignment. A protocol approved only by the IRB — without separate governing body approval after medical and legal review — does not satisfy Standard B.",
      keyPoint:
        "Research protocols need governing body approval after BOTH medical AND legal review — IRB approval alone is not sufficient.",
      category: "rule",
    },
    {
      title: "What Must a Research Medical Record Contain at Minimum?",
      content:
        "Standard C element 3 requires a separate research medical record for each patient participating in research, containing at minimum: (a) evidence that the patient has provided informed consent, (b) the name of the study, (c) the start date of the study, and (d) other pertinent information as applicable to the study. The research medical record is separate from the standard clinical record — a note in the clinical chart saying 'patient enrolled in study X' does not substitute for a complete research record.",
      keyPoint:
        "Research medical record must include: consent evidence, study name, start date, and other pertinent information. Separate from the clinical record.",
      category: "number",
    },
    {
      title: "What Patient Rights Must Be Protected When Research Is Conducted?",
      content:
        "Standard C protects three patient rights in research: (1) Patients and staff must have access to information about the patient's right to refuse research participation, (2) informed consent must be obtained in the language or manner primarily used by the patient — interpreted, translated, or communicated appropriately, and (3) a research medical record with the required elements must be maintained. Crucially, the right to refuse must be communicated in a way that makes clear that refusal will not affect the quality of clinical care the patient receives.",
      keyPoint:
        "Research patients: right to refuse (must not affect care) + informed consent in their language + research medical record. All three.",
      category: "rule",
    },
  ],
  questions: [
    {
      id: "asc_res_01",
      question:
        "A surgeon at an ASC is systematically using an FDA-approved device in a way not described in its labeling (off-label use) and is collecting outcome data to publish. The governing body has never been notified. Under Chapter 19, what is the most likely compliance issue?",
      options: [
        "No issue — FDA-approved devices used off-label are not research under AAAHC standards",
        "Standard-level finding — systematic collection of outcome data from an innovative or non-standard technique meets the AAAHC definition of research; the governing body must be aware and provide oversight",
        "No issue — off-label device use is the physician's clinical judgment, not an ASC governance matter",
        "No issue — research oversight is the IRB's responsibility, not the governing body's",
      ],
      correctIndex: 1,
      explanation:
        "AAAHC defines research to include 'techniques that are new, experimental, innovative, or otherwise not yet accepted as standard medical or dental practice.' Systematic off-label device use with data collection for publication fits this definition. The governing body must be informed, must review any IRB documentation, and must ensure Chapter 19 requirements are met — including written protocols and patient informed consent.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 19, Standard A",
      tutor: {
        whyCorrect:
          "The breadth of the AAAHC research definition is intentional — it prevents an ASC from systematically applying novel or experimental techniques on patients without governance oversight by calling it 'just clinical practice.'",
        whyWrong: {
          A: "FDA approval of a device does not mean off-label systematic use with outcome tracking is outside the research definition.",
          C: "Off-label device use with systematic data collection is squarely a governance matter under Chapter 19.",
          D: "The governing body has independent responsibility under Standard A — IRB review is a prerequisite the governing body reviews, not a substitute for governing body oversight.",
        },
        operationalContext:
          "Add a standing agenda item to governing body meetings asking physicians to disclose any novel techniques, off-label device use, or systematic data collection. Create a simple one-page 'Research Activity Disclosure Form' for physicians to complete when they believe a technique may qualify.",
      },
    },
    {
      id: "asc_res_02",
      question:
        "An ASC has an active clinical drug trial. The governing body approved the study two years ago after reviewing the IRB documentation. There is no evidence that current research has been reviewed since the initial approval. A surveyor asks about annual review. The administrator says, 'We reviewed it when we started.' What is the finding?",
      options: [
        "No finding — initial governing body approval satisfies the review requirement for the life of the study",
        "Standard-level finding — Standard A requires the governing body to review all current research at least annually; a one-time approval at the start of the study does not fulfill the annual review requirement",
        "No finding — annual review is required only when the study protocol changes",
        "No finding — annual review is the IRB's responsibility, not the governing body's",
      ],
      correctIndex: 1,
      explanation:
        "Standard A element 4 explicitly requires the governing body to review all current research at least annually. The initial approval is a separate requirement (element 3). Annual review ensures ongoing compliance, patient safety, and protocol adherence throughout the study's active period. A study approved two years ago with no subsequent annual review documented in meeting minutes is a direct citation.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 19, Standard A",
      tutor: {
        whyCorrect:
          "Research conditions change — enrollment rates, adverse events, protocol amendments, and IRB renewal dates all require ongoing governing body awareness. The annual review requirement exists to prevent set-it-and-forget-it research oversight.",
        whyWrong: {
          A: "Initial approval satisfies element 3. Annual review is a separate, recurring obligation under element 4.",
          C: "Annual review is required on a calendar basis, not only when protocols change.",
          D: "The governing body has its own annual review obligation distinct from the IRB's ongoing oversight role.",
        },
        operationalContext:
          "Add 'Active Research Review' as a standing annual agenda item. Prepare a one-page status summary for each active study: current IRB approval dates, enrollment status, adverse events since last review, and anticipated completion. Document the review and any governing body actions in meeting minutes.",
      },
    },
    {
      id: "asc_res_03",
      question:
        "A patient enrolled in a clinical drug trial at an ASC later declines to continue participating. The study coordinator tells the patient that withdrawal from the study means the surgeon will 'refer you elsewhere for your procedure.' Is this compliant with Chapter 19?",
      options: [
        "Compliant — the ASC may require study participation as a condition of service",
        "Non-compliant — Standard C requires that patients be informed of their right to refuse research participation; research refusal must not affect the quality of their clinical care",
        "Compliant — the study coordinator's statement is protected under the clinical trial's consent agreement",
        "Non-compliant — but only if the patient's refusal was documented in the research record",
      ],
      correctIndex: 1,
      explanation:
        "Standard C protects patients' right to refuse research participation, and that refusal must not affect the quality of care they receive. Telling a patient that withdrawing from a study will result in referral elsewhere directly links research refusal to care access — this is coercive and directly violates the standard. The patient must be able to withdraw from the study and continue receiving care at the ASC.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 19, Standard C",
      tutor: {
        whyCorrect:
          "The principle of voluntary participation is foundational to research ethics. Conditioning clinical care on research participation invalidates the voluntariness of consent and violates both AAAHC standards and federal research ethics principles.",
        whyWrong: {
          A: "No ASC may condition clinical care on research participation. This would nullify the voluntariness of consent.",
          C: "The consent agreement cannot override the patient's fundamental right to withdraw without care consequences.",
          D: "The violation is the coercive statement itself — documentation of refusal is required regardless.",
        },
        operationalContext:
          "Include explicit language in both the research consent form and the study coordinator's script: 'Your participation is voluntary. Declining or withdrawing from this study will not affect the care you receive at this facility.' Train all study personnel on this language annually.",
      },
    },
    {
      id: "asc_res_04",
      question:
        "An ASC has a research protocol that was reviewed by the IRB and approved by the governing body, but the administrator cannot produce evidence that a legal review was conducted before governing body approval. What is the finding?",
      options: [
        "No finding — IRB review serves as the combined medical and legal review for AAAHC purposes",
        "Standard-level finding — Standard B requires written protocols to be approved by the governing body after both medical and legal review; the absence of documented legal review is non-compliant",
        "No finding — legal review is optional if the IRB has already approved the protocol",
        "No finding — legal review is only required for studies involving investigational drugs, not device studies",
      ],
      correctIndex: 1,
      explanation:
        "Standard B element 2 requires written research protocols to be approved by the governing body or its designee after medical (or dental) and legal review. The IRB performs an independent ethics and safety review, but it does not substitute for the separate legal review AAAHC requires. Legal review addresses consent validity, liability, HIPAA compliance, and state-specific regulatory requirements — distinct from the IRB's focus.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 19, Standard B",
      tutor: {
        whyCorrect:
          "IRB review and legal review serve different purposes. The IRB protects human subjects' rights and safety; legal review protects the organization's legal compliance and the consent document's enforceability. AAAHC requires both.",
        whyWrong: {
          A: "IRB review does not substitute for legal review under Standard B.",
          C: "Legal review is required regardless of whether the IRB has already approved the protocol.",
          D: "Standard B applies to all research activities, not only drug studies.",
        },
        operationalContext:
          "Build legal review into the research approval workflow before governing body consideration. Use the ASC's healthcare attorney or legal counsel to review the consent form, the protocol's HIPAA compliance, and any liability implications. Document the legal review with a written opinion or approval memo.",
      },
    },
    {
      id: "asc_res_05",
      question:
        "A patient participating in a clinical trial at an ASC signs a standard surgical consent form that includes a line: 'I agree to participate in ASC research activities.' The study coordinator considers this sufficient for research informed consent. What is the compliance issue?",
      options: [
        "No issue — the consent form includes the patient's agreement to research participation",
        "Standard-level finding — Standard C requires informed consent obtained in the patient's language or manner; a blanket generic line on a surgical consent does not constitute informed consent for a specific research study, and a separate research medical record must exist",
        "No issue — any written agreement to research participation satisfies the requirement",
        "No issue — the standard only requires consent if the research involves experimental drugs",
      ],
      correctIndex: 1,
      explanation:
        "Standard C requires informed consent obtained in the language or manner primarily used by the patient — this means specific, study-specific informed consent explaining the research purpose, risks, benefits, alternatives, and the right to withdraw. A generic check-box line on a surgical consent does not constitute informed consent for a research study. Additionally, a separate research medical record must be maintained with evidence of the consent, study name, and start date.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 19, Standard C",
      tutor: {
        whyCorrect:
          "Informed consent for research requires specific, meaningful disclosure about the study — not a generic blanket clause buried in a surgical consent form. The patient must understand what they are agreeing to participate in.",
        whyWrong: {
          A: "A generic line on a surgical consent form does not constitute informed consent for a specific research study.",
          C: "Informed consent must be study-specific and meaningful — not any written statement.",
          D: "Standard C applies to all research activities, not only drug trials.",
        },
        operationalContext:
          "Use a study-specific informed consent document for each research protocol — separate from the surgical consent form. The document should include the study name, principal investigator, purpose, procedures, risks, benefits, alternatives, confidentiality protections, and the right to withdraw. Obtain the patient's signature on this document before any research procedures begin.",
      },
    },
  ],
};
