import type { Level } from "./schema";

export const ascPathologyLevel: Level = {
  id: "asc_pathology_services",
  module: "asc",
  name: "Pathology & Lab Services",
  description:
    "CLIA compliance, specimen handling, qualified personnel, quality control, and result reporting for ASC laboratory services.",
  icon: "FlaskConical",
  color: "hsl(200, 65%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Pathology and Medical Laboratory Services",
    plainLanguageSummary:
      "Chapter 12 applies to any ASC that performs laboratory services covered by the Clinical Laboratory Improvement Amendments (CLIA) of 1988. Whether the ASC runs a full in-house lab or only performs waived testing like point-of-care glucose checks, it must hold the correct CLIA certificate, designate qualified laboratory leadership, ensure personnel are trained and competent, maintain written procedures for every test performed, run quality controls per manufacturer instructions, and report results accurately and on time. ASCs that do not perform any lab work must still have documented procedures for referring patients to a certified outside laboratory. Surveyors check for the CLIA certificate on the wall, walk the lab or point-of-care area looking for quality control logs, and ask staff to demonstrate knowledge of specimen collection and rejection criteria. The most common findings are missing or expired CLIA certificates, QC logs with initials but no reviewed data, and results that were never acknowledged in writing by the ordering provider.",
    keyOperationalExpectations: [
      "The correct CLIA certificate (Certificate of Waiver, PPM, or Compliance/Accreditation) must be current, posted, and matched to the complexity of testing actually performed.",
      "A pathologist, physician, or other CLIA-qualified individual must be formally designated to direct laboratory services whenever the ASC holds a PPM or higher certificate.",
      "All staff with laboratory responsibilities must have documented competency evaluations appropriate to the tests they perform.",
      "Quality control procedures must be performed per manufacturer instructions, with results documented and available for surveyor review.",
      "Every laboratory test result must be reviewed and acknowledged in writing — manually or electronically — by the ordering provider or a qualified designee.",
      "Written procedures for specimen collection, identification, storage, and transport must exist and be accessible to all staff with lab responsibilities.",
    ],
    commonRiskPoints: [
      "CLIA Certificate of Waiver expired or posted for a complexity level that does not match the tests being performed.",
      "Quality control logs that have daily initials but no actual recorded QC values — or QC values recorded but no documented corrective action when they are out of range.",
      "Test results released to the clinical record with no evidence that the ordering provider reviewed or acknowledged them.",
      "Staff performing waived or moderate complexity tests who have no documented training or competency on file.",
      "No written procedure for obtaining emergency laboratory services when the ASC's in-house capabilities are exceeded.",
    ],
    cmsTags: [
      "42 CFR 416.49",
      "42 CFR Part 493 (CLIA)",
      "Q-0200 (CfC — Laboratory and Radiologic Services)",
      "Q-0201 (CLIA certification and referral lab requirements)",
    ],
  },
  studyMaterial: [
    {
      title: "What CLIA Certificate Does an ASC Need if It Only Performs Waived Testing?",
      content:
        "An ASC that performs only waived tests (e.g., glucometers, urine dipsticks, rapid strep tests) must hold a current CLIA Certificate of Waiver. Waived tests are simple tests cleared by the FDA that have a low risk of error. The certificate must be current, posted at the testing site, and matched to the test complexity actually performed. Performing tests beyond the waiver level without the appropriate certificate is a Condition-level finding.",
      keyPoint:
        "Certificate of Waiver = waived tests only. If you're doing more, you need the right certificate to match.",
      category: "rule",
    },
    {
      title: "Who Must Direct Lab Services When an ASC Holds a CLIA Certificate for Provider-Performed Microscopy or Higher?",
      content:
        "If the ASC has obtained a CLIA Certificate for Provider-Performed Microscopy (PPM), Certificate of Registration, Compliance, or Accreditation, services must be directed by a pathologist, physician, or other individual qualified under CLIA. The governing body must formally designate this person. A Certificate of Waiver has its own, less restrictive director requirement based on state law — if the state has no requirements, the organization defines the qualifications.",
      keyPoint:
        "PPM or higher certificate = pathologist, physician, or CLIA-qualified director required. Document the governing body designation.",
      category: "rule",
    },
    {
      title: "What Must Happen After a Laboratory Test Result Is Generated?",
      content:
        "Test results must be made available to the ordering provider in a timely manner, documented in the patient's medical record per organizational policy, and acknowledged in writing (manually or electronically) by the ordering provider or a qualified designee. The written acknowledgment is Standard K — surveyors pull charts and look for the provider's sign-off on lab values, especially pre-operative labs.",
      keyPoint:
        "Results must be: timely, in the chart, and acknowledged in writing by the ordering provider. All three.",
      category: "rule",
    },
    {
      title: "What Elements Must Quality Control Procedures Include?",
      content:
        "Quality control for laboratory services must include: (1) QC performed per manufacturer instructions, (2) QC results documented, (3) equipment calibrated per manufacturer instructions, and (4) validation tests run on new equipment per manufacturer instructions. Elements 3 and 4 apply only when moderate or complex testing is performed. A log that has initials but no QC values — or out-of-range values with no corrective action — fails Standard L.",
      keyPoint:
        "QC = run per manufacturer + document results + calibrate equipment + validate new equipment (moderate/complex).",
      category: "number",
    },
    {
      title: "What Must Written Laboratory Procedures Cover at Minimum?",
      content:
        "Standard N requires written procedures for obtaining, identifying, storing, and transporting specimens at minimum. Full written test descriptions (Standard O) must also include: patient preparation, specimen requirements and rejection criteria, reagents, calibration, QC steps, step-by-step test performance instructions, result reporting, critical value reporting, and reference ranges. These must be available to all staff with lab responsibilities.",
      keyPoint:
        "Written procedures must cover at least: obtaining, identifying, storing, and transporting specimens. Full descriptions go further.",
      category: "rule",
    },
    {
      title: "When Is Proficiency Testing Required for an ASC Lab?",
      content:
        "Proficiency testing is required when mandated by CLIA, the CLIA accrediting body, the state, or the organization's own policies. For moderate and high complexity testing, CLIA requires enrollment in an approved proficiency testing program. Waived testing is exempt from CLIA-mandated proficiency testing, but organizational policy may still require it. Standard M applies where required — the absence of enrollment documentation when it is required is a citation.",
      keyPoint:
        "Moderate/high complexity = proficiency testing required by CLIA. Check state law and org policy for waived testing.",
      category: "rule",
    },
    {
      title: "What Must an ASC Do if It Does Not Provide Its Own Laboratory Services?",
      content:
        "An ASC that does not perform in-house laboratory services must have documented procedures for obtaining both routine and emergency laboratory services from a certified outside laboratory. The referral laboratory must be CLIA-certified in the appropriate specialties for the tests referred. Standard C — surveyors ask to see the contract or procedure document and verify the outside lab's CLIA certification. 'We just call the hospital' without a documented process is a finding.",
      keyPoint:
        "No in-house lab = documented referral procedures + CLIA-certified outside lab confirmed. Both required.",
      category: "rule",
    },
    {
      title: "What Does 'Qualified Personnel' Mean for Laboratory Services Under Standard I?",
      content:
        "Standard I requires that laboratory services be conducted by qualified personnel, demonstrated by two evidence points: (1) documented competency tests showing staff with lab responsibilities are appropriately trained for their roles, and (2) observation and interviews confirm that a sufficient number of trained and experienced personnel are available to supervise and conduct the work. A single competency checklist at hire is not sufficient if it was never updated or if the person now performs a test not covered in their training.",
      keyPoint:
        "Qualified = documented competency for specific tests performed + sufficient trained staff confirmed by observation.",
      category: "rule",
    },
  ],
  questions: [
    {
      id: "asc_path_01",
      question:
        "An ASC performs point-of-care glucose testing and urine dipsticks. During a survey, the CLIA Certificate of Waiver on the wall expired eight months ago. The administrator says the renewal is 'in process.' What is the correct characterization?",
      options: [
        "No finding — renewals in process are granted a 90-day grace period by CLIA",
        "Standard-level finding — the certificate must be current; operating with an expired certificate is non-compliant",
        "No finding — point-of-care testing is exempt from CLIA certificate requirements",
        "Advisory only — surveyors note expired certificates but do not cite unless tests were performed incorrectly",
      ],
      correctIndex: 1,
      explanation:
        "A CLIA Certificate of Waiver must be current and posted at the testing site. Operating laboratory services under an expired certificate is non-compliant under Standard D (42 CFR Part 493). There is no grace period for a lapsed certificate — the certificate must be renewed before the expiration date to maintain continuous compliance.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0201 (42 CFR 416.49(a))",
      tutor: {
        whyCorrect:
          "CLIA certification is the foundational requirement for performing laboratory testing. An expired certificate means the ASC has no current legal authority to perform tests, regardless of how skilled the staff are or how good their QC logs look.",
        whyWrong: {
          A: "No such grace period exists under CLIA regulations for an expired certificate.",
          C: "Point-of-care testing is not exempt — it is the most common type of waived testing and is squarely within CLIA's scope.",
          D: "Surveyors cite expired CLIA certificates. It is a direct regulatory requirement, not an advisory.",
        },
        operationalContext:
          "Set a calendar reminder 90 days before the CLIA certificate expiration date. Assign a single named person responsible for renewal. Keep the confirmation receipt from CMS in the same binder as the certificate so you can demonstrate you applied before expiration.",
      },
    },
    {
      id: "asc_path_02",
      question:
        "An ASC holds a CLIA Certificate for Provider-Performed Microscopy. A surveyor asks who directs the laboratory services. The administrator points to the medical director and says, 'The surgeons do their own thing.' What is the most likely finding?",
      options: [
        "No finding — the medical director automatically covers laboratory direction at an ASC",
        "Standard-level finding — a pathologist or physician must be formally designated by the governing body to direct PPM-level services",
        "No finding — PPM-level services are exempt from director requirements",
        "Standard-level finding — but only if the medical director is not a surgeon",
      ],
      correctIndex: 1,
      explanation:
        "Standard E requires that PPM, moderate-complexity, or high-complexity laboratory services be directed by a pathologist, physician, or other CLIA-qualified individual — and that designation must be formal (governing body appointment, documented). 'The surgeons do their own thing' without a designated, documented director is a citation because there is no accountable person for the quality and safety of the laboratory program.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0201 (42 CFR 416.49(a))",
      tutor: {
        whyCorrect:
          "CLIA and AAAHC require formal, documented designation. A verbal assumption ('it's the medical director') is not the same as a governing body appointment letter describing the role's scope.",
        whyWrong: {
          A: "Medical director and laboratory director are distinct roles. The appointment must specifically cover laboratory services.",
          C: "PPM-level services are explicitly subject to director requirements under Standard E.",
          D: "The specialty of the physician is not the issue — the absence of formal designation is.",
        },
        operationalContext:
          "If a surgeon or physician already performs PPM services, issue a one-page governing body letter designating them as laboratory services director, describing their responsibilities (QC review, competency oversight, procedure approval). Confirm it in governing body minutes.",
      },
    },
    {
      id: "asc_path_03",
      question:
        "A surveyor pulls five pre-operative lab result reports from the clinical records. All five show results documented in the chart, but none show a provider signature, initials, or electronic acknowledgment. The ordering provider says, 'I review them — I just don't sign them.' What is the finding?",
      options: [
        "No finding — verbal attestation of review is sufficient under Standard K",
        "Standard-level finding — Standard K requires written acknowledgment (manual or electronic) of laboratory results by the ordering provider or qualified designee",
        "No finding — electronic orders automatically satisfy the acknowledgment requirement",
        "Standard-level finding — but only if the results were abnormal",
      ],
      correctIndex: 1,
      explanation:
        "Standard K is explicit: laboratory test results must be reviewed and acknowledged in writing — manually or electronically — by the ordering provider or a qualified designee. Verbal review without a documented signature, initials, or electronic flag is not compliant. The standard does not distinguish between normal and abnormal results.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0201 (42 CFR 416.49(a))",
      tutor: {
        whyCorrect:
          "Written acknowledgment creates an audit trail showing the provider saw the result and made a clinical decision (or confirmed no action was needed). Verbal review with no documentation is equivalent to no review from a compliance standpoint.",
        whyWrong: {
          A: "Verbal attestation has no audit trail and is not accepted under Standard K.",
          C: "Placing an electronic order does not satisfy the result-acknowledgment requirement — they are separate steps.",
          D: "Standard K applies to all lab results, not just abnormal ones.",
        },
        operationalContext:
          "Configure the EMR or paper chart flow so that lab results cannot be marked 'reviewed' without a provider signature or electronic acknowledgment. Audit 10 charts monthly to confirm compliance.",
      },
    },
    {
      id: "asc_path_04",
      question:
        "During a tracer, a surveyor reviews the ASC's glucometer quality control log. The log shows QC was run daily, but the recorded values are always exactly within range, and there is no documentation of any corrective action over the past year. What concern does this raise?",
      options: [
        "No concern — consistent in-range QC values indicate excellent laboratory practices",
        "The log pattern suggests QC values may be fabricated or recorded without actual performance; real QC over a year always produces some borderline or out-of-range values requiring documentation",
        "No concern — corrective action documentation is only required for high-complexity testing",
        "No concern — the standard only requires that QC be performed, not that corrective action be documented",
      ],
      correctIndex: 1,
      explanation:
        "Standard L requires that QC be performed per manufacturer instructions and that results be documented. Real quality control results have natural variation — a year of perfectly in-range values with zero corrective action events raises a strong credibility concern that QC is being recorded as performed without actual testing. Surveyors may request to observe QC being run and compare fresh results to the log.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0201 (42 CFR 416.49(a))",
      tutor: {
        whyCorrect:
          "Fabricated QC logs are one of the most serious laboratory findings because they indicate staff are signing off on safety checks that were never performed. Even excellent QC processes produce some out-of-range results over a year — their absence is a red flag.",
        whyWrong: {
          A: "Perfectly consistent in-range values across a full year are statistically implausible and raise documentation integrity concerns, not praise.",
          C: "Corrective action documentation is expected whenever QC results are out of range, regardless of test complexity.",
          D: "The standard requires both performance and documentation — and documentation of any corrective action taken when values are out of range.",
        },
        operationalContext:
          "Verify QC run time against the log timestamp at random intervals. Keep the QC result printout (where the device produces one) stapled to the log page. Corrective action documentation — even a note saying 'repeat QC confirmed in range, instrument functioning normally' — demonstrates the process is real.",
      },
    },
    {
      id: "asc_path_05",
      question:
        "An ASC does not perform any in-house laboratory services. A patient scheduled for a joint replacement requires pre-operative labs. The charge nurse says, 'We just send patients to the hospital lab — we don't have anything written down.' What is the compliance issue?",
      options: [
        "No issue — referring all lab work to an outside lab is a recognized alternative to in-house testing and requires no documentation",
        "Standard-level finding — Standard C requires documented procedures for obtaining both routine and emergency lab services from a certified outside laboratory",
        "Advisory only — lack of written procedures is a recommendation, not a citation, when a relationship with a referral lab exists",
        "No issue — CLIA does not apply to ASCs that perform no in-house testing",
      ],
      correctIndex: 1,
      explanation:
        "Standard C requires written procedures for obtaining routine and emergency laboratory services from a certified laboratory when the ASC does not provide its own lab services. The referral lab must be CLIA-certified in the appropriate specialties. 'We just send them to the hospital' without a written procedure or verification of the hospital lab's certification is a Standard-level finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0201 (42 CFR 416.49(a))",
      tutor: {
        whyCorrect:
          "The written procedure requirement protects patients — it ensures there is a defined, verified pathway for getting emergency lab results when the patient is in the ASC and needs them quickly. An undocumented informal arrangement may fail exactly when it is needed most.",
        whyWrong: {
          A: "Referral is an accepted approach, but it must be documented and the referral lab must be CLIA-certified.",
          C: "Written procedures for lab referral are a compliance requirement under Standard C, not a recommendation.",
          D: "Even ASCs that perform no in-house testing are subject to Chapter 12 for their referral lab procedures.",
        },
        operationalContext:
          "Create a one-page 'Laboratory Referral Procedure' document that names the referral laboratory, confirms its CLIA certification, describes who sends specimens and how results are received, and identifies who to call for emergency lab results outside normal hours. Review annually to confirm the lab's certification is still current.",
      },
    },
  ],
};
