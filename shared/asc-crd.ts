import type { Level } from "./schema";

export const ascCrdLevel: Level = {
  id: "asc_crd",
  module: "asc",
  name: "Credentialing",
  description: "AAAHC v44 CRD — verification of health care professional credentials, primary source verification, and ongoing credential maintenance.",
  icon: "BadgeCheck",
  color: "hsl(200, 65%, 42%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "CRD: Credentialing",
    plainLanguageSummary:
      "The CRD category establishes requirements for verifying the credentials of health care professionals who provide services at the ASC. Credentials must be verified through primary sources — not simply collected as self-reported documents. All licensed professionals must have their education, training, licensure, and relevant experience verified before they begin providing services. Ongoing credential maintenance requires re-verification at defined intervals and when significant changes occur.",
    keyOperationalExpectations: [
      "All health care professionals providing services have their credentials verified through primary source verification before credentialing.",
      "Credentials files contain: education/training verification, primary source license verification, malpractice history query, NPDB query, reference letters (for initial appointments), and a signed application.",
      "Credentials are re-verified at defined intervals (typically every two years).",
      "Licensed professionals who have a break in service of more than six months undergo re-credentialing.",
      "The credentialing process is completed before the health care professional begins providing services.",
      "Credentials files are maintained for all practitioners — employed, contracted, and telemedicine providers.",
    ],
    commonRiskPoints: [
      "Licenses are collected but primary source verification is not documented — copies alone are not sufficient.",
      "NPDB queries are conducted at initial appointment but not at reappointment.",
      "Telemedicine providers are exempt from the same credentialing rigor as in-person providers.",
      "A practitioner began seeing patients before the credentialing process was completed.",
    ],
    aaahcStandards: ["CRD.100", "CRD.110", "CRD.120", "CRD.130", "CRD.140"],
  },
  studyMaterial: [
    {
      title: "CRD.100 — Who Must Be Credentialed",
      content:
        "All health care professionals who provide services at or on behalf of the organization must have their credentials verified. This includes employed staff, contractors, locum tenens providers, and telemedicine/telehealth providers. The credentialing requirement applies to physicians, dentists, advanced practice registered nurses (APRNs), physician assistants, podiatrists, psychologists, and any other licensed independent practitioner who provides direct patient care. The credential verification must be completed before the provider begins providing services.",
      keyPoint:
        "All licensed independent practitioners — employed, contracted, locum, or telemedicine — must be credentialed before providing care. Telemedicine providers receive no exemption.",
    },
    {
      title: "CRD.110 / CRD.120 — Primary Source Verification of Credentials",
      content:
        "AAAHC requires primary source verification (PSV) for each credentialed provider. This means verifying information directly with the source that issued or holds the credential — for example, calling or using the online lookup tool of the state licensing board to verify licensure (not accepting a copy of the license). Required PSV elements include: education and/or training (medical school, residency); state licensure (current, valid, and in good standing); board certification (if claimed); clinical privileges at other institutions (when applicable); and malpractice history.",
      keyPoint:
        "Primary source means going directly to the issuing authority — not accepting copies. Every required credential element must be independently verified, not just collected.",
    },
    {
      title: "CRD.130 — NPDB Query",
      content:
        "The National Practitioner Data Bank (NPDB) must be queried for each practitioner at initial appointment and at re-appointment (typically every two years). The NPDB query reveals: malpractice payment history, adverse privileging actions, DEA sanctions, state licensure actions, and other adverse actions. The query results must be reviewed as part of the credentialing process and documented in the credentials file. A negative NPDB report (no reports found) is still a document that must be filed.",
      keyPoint:
        "NPDB query is required at initial appointment AND at every reappointment — not just at initial hire. File both positive and negative query results.",
    },
    {
      title: "CRD.140 — Reappointment and Ongoing Credential Maintenance",
      content:
        "Credentials must be re-verified at the organization's defined reappointment interval — typically every two to three years, but as required by AAAHC. At reappointment, all primary source verifications must be updated: current license, current board certification (if applicable), updated NPDB query, updated malpractice history, and peer review results. Providers who have a break in service exceeding the organization's defined period (often six months) must be re-credentialed as if new. The credentials committee or equivalent body must review and recommend reappointment, with final approval by the governing body.",
      keyPoint:
        "Reappointment is a full re-credentialing, not a rubber stamp. All primary sources must be re-verified, NPDB queried again, and peer review results incorporated. Governing body approves.",
    },
    {
      title: "CRD — Credentials File Contents",
      content:
        "A complete credentials file for a health care professional should contain: a signed, dated application; proof of education/training (medical school diploma, residency completion certificate, with primary source verification); current valid license with primary source verification documentation; board certification (if applicable, with primary source verification); NPDB query results; malpractice history and current insurance verification; peer references (for initial appointment); clinical performance data at reappointment; signed attestation of no pending investigations or sanctions; and a delineation of privileges form.",
      keyPoint:
        "Credentials files must be complete before the governing body can approve appointment. Incomplete files = incomplete credentialing = compliance deficiency.",
    },
  ],
  questions: [
    {
      id: "asc_crd_01",
      question:
        "A new surgeon submits a copy of her state medical license to the ASC credentialing coordinator. The coordinator files the copy in the credentials file. What credentialing requirement has not been met?",
      options: [
        "The copy is sufficient — the coordinator has the license on file",
        "Primary source verification requires confirming the license directly with the state licensing board, not simply filing a copy",
        "Licenses must be notarized before filing",
        "Only the NPDB query is required at initial appointment — license verification is optional",
      ],
      correctIndex: 1,
      explanation:
        "CRD requires primary source verification (PSV) for licensure. This means confirming the license status, validity, and good standing directly with the state licensing board — not relying on a copy provided by the practitioner, which could be outdated or altered.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 'primary source' is the issuing authority — in this case, the state medical board. Most states offer free online license verification. The organization must document that this verification was conducted and the result.",
        whyWrong: {
          A: "A copy is not PSV. The practitioner controls what they copy — an expired or restricted license could be presented as current.",
          C: "Notarization is not required — PSV is.",
          D: "License verification is required independently of the NPDB query.",
        },
        operationalContext:
          "Use the state licensing board's online lookup portal. Print and date the verification result page. File this with the credentials application — it is your PSV documentation. Repeat at each reappointment.",
      },
    },
    {
      id: "asc_crd_02",
      question:
        "Under CRD, must the NPDB be queried at provider reappointment (not just at initial appointment)?",
      options: [
        "No — the NPDB is only queried once at initial appointment",
        "Yes — the NPDB must be queried at both initial appointment and at each reappointment",
        "Only if the provider has had a malpractice claim since the last appointment",
        "Only for providers who also work at a hospital",
      ],
      correctIndex: 1,
      explanation:
        "CRD requires the NPDB to be queried at initial appointment and at reappointment. Any adverse reports that occurred since the last query — malpractice payments, license actions, privilege revocations — will only be revealed at reappointment if the query is repeated.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Providers can acquire NPDB reports between appointments. Without querying at reappointment, the ASC would be unaware of malpractice payments, state board sanctions, or privilege revocations that occurred since the initial appointment.",
        whyWrong: {
          A: "A one-time initial query misses adverse events that occur during the appointment period.",
          C: "The NPDB is queried as a routine matter at reappointment, not only when claims are suspected.",
          D: "NPDB query requirements apply to all privileged practitioners regardless of their hospital affiliations.",
        },
        operationalContext:
          "Build the NPDB query into the reappointment checklist. Set a reminder 90 days before each practitioner's reappointment date to initiate the query through the federal NPDB website (www.npdb.hrsa.gov).",
      },
    },
    {
      id: "asc_crd_03",
      question:
        "A contracted anesthesiologist provides services at the ASC. The administrator says contracted providers are credentialed by the anesthesia group they work for — the ASC does not credential them separately. Is this acceptable?",
      options: [
        "Yes — the anesthesia group's credentialing satisfies the ASC's requirements",
        "No — all health care professionals who provide services at the ASC must have credentials verified by the ASC, regardless of employment arrangement",
        "Yes — only employed practitioners require ASC-specific credentialing",
        "Only if the anesthesia group is accredited by a recognized credentialing organization",
      ],
      correctIndex: 1,
      explanation:
        "CRD requirements apply to all health care professionals providing services at the organization — employed, contracted, or otherwise. The ASC cannot delegate its credentialing obligation to a contracting group and must maintain its own verified credentials file for each practitioner.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The AAAHC holds each accredited organization responsible for verifying the credentials of every provider who delivers care under its auspices. A contractor relationship does not transfer this responsibility.",
        whyWrong: {
          A: "The contracting group's credentialing is a separate process — the ASC must conduct its own independent verification.",
          C: "CRD does not distinguish between employed and contracted providers.",
          D: "Even if the contracting group is itself credentialing-accredited, the ASC must maintain its own credentials file.",
        },
        operationalContext:
          "For contracted providers, the ASC may request credential documentation from the contractor (as a courtesy) but must independently verify each required element through primary sources. Maintain a separate credentials file for each contracted provider.",
      },
    },
    {
      id: "asc_crd_04",
      question:
        "A surgeon's credentials file includes a copy of their board certification certificate. What additional step is required to satisfy CRD primary source verification for board certification?",
      options: [
        "Having the surgeon re-sign the certificate in the presence of the credentialing coordinator",
        "Verifying board certification status directly with the certifying specialty board",
        "Board certification is self-reported and does not require primary source verification",
        "Only the NPDB query is needed to confirm board certification",
      ],
      correctIndex: 1,
      explanation:
        "Primary source verification for board certification means confirming current certification status directly with the relevant specialty board (e.g., the American Board of Surgery). Specialty boards maintain online verification portals for this purpose.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Board certification can lapse, be revoked, or expire if Maintenance of Certification (MOC) requirements are not met. A certificate issued years ago may not reflect current status — only PSV confirms current standing.",
        whyWrong: {
          A: "Re-signing a copy does not verify current certification status.",
          C: "Board certification is not exempt from PSV requirements — if claimed, it must be verified.",
          D: "The NPDB may reflect board sanctions but does not provide confirmation of current board certification status.",
        },
        operationalContext:
          "Use the specialty board's online lookup tool (e.g., Certificationmatters.org for ABMS boards) to verify current certification. Print and date the result. File with the credentials application.",
      },
    },
    {
      id: "asc_crd_05",
      question:
        "A locum tenens physician is filling in for two weeks at the ASC. Does the CRD credentialing requirement apply?",
      options: [
        "No — locum tenens physicians are exempt from credentialing for stays under 30 days",
        "Yes — all health care professionals providing services must be credentialed, including locum tenens providers",
        "Only if the locum tenens physician is a specialist, not a general practitioner",
        "Only if the locum tenens physician is credentialed at a hospital — then reciprocity applies",
      ],
      correctIndex: 1,
      explanation:
        "CRD applies to all health care professionals providing services — including locum tenens providers regardless of the duration of their engagement. A two-week locum must be credentialed before providing care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "From a patient safety perspective, a two-week locum presents the same risks as a permanent employee. AAAHC does not provide a duration exemption from credentialing requirements.",
        whyWrong: {
          A: "There is no 30-day exemption for locum tenens credentialing in AAAHC standards.",
          C: "The requirement applies to all practitioners regardless of specialty.",
          D: "Hospital credentialing is a separate process — AAAHC does not recognize automatic reciprocity without the ASC's own verification.",
        },
        operationalContext:
          "Develop an expedited credentialing checklist for locum tenens providers. Key elements that can be quickly verified: current license (online PSV), NPDB query, current malpractice insurance verification, and completed application. Build this into a 48–72-hour turnaround process.",
      },
    },
    {
      id: "asc_crd_06",
      question:
        "At reappointment, the credentials committee reviews a surgeon's updated license verification and NPDB query but does not incorporate any peer review data. What CRD-related standard is missing?",
      options: [
        "Peer review data is reviewed separately by the QA committee — it does not belong in credentialing",
        "QUA.150 requires that peer review results are used as part of the process for granting continuation of clinical privileges",
        "Peer review data is only required for new appointments, not reappointments",
        "The credentials committee may waive peer review review if the surgeon has had no complaints",
      ],
      correctIndex: 1,
      explanation:
        "QUA.150 specifically requires that peer review results are used as part of the process for granting continuation of clinical privileges at reappointment. Credentials files and peer review must be connected — not maintained in separate silos.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "QUA.150 closes the loop between quality and credentialing. If peer review identified concerns about a surgeon's performance during the appointment period, the credentials committee must know this before recommending privilege continuation.",
        whyWrong: {
          A: "QA/peer review data is specifically required to inform reappointment decisions — the two processes must intersect.",
          C: "Peer review integration at reappointment is a specific requirement, not limited to initial appointments.",
          D: "No complaint history does not exempt the credentials committee from reviewing peer review data — absence of complaints is different from documented review of clinical performance.",
        },
        operationalContext:
          "Create a reappointment packet template that includes a mandatory peer review summary section. The quality/peer review committee must sign off on the section before the credentials committee can complete the reappointment recommendation.",
      },
    },
    {
      id: "asc_crd_07",
      question:
        "A nurse practitioner provides telemedicine pre-operative consultations for the ASC. Does the CRD credentialing requirement apply to this provider?",
      options: [
        "No — telemedicine providers are not physically present and are exempt from on-site credentialing",
        "Yes — credentialing requirements apply to all health care professionals who provide services at or on behalf of the organization, including telemedicine providers",
        "Only if the telemedicine provider is prescribing controlled substances",
        "Only if the telemedicine provider is located in a different state",
      ],
      correctIndex: 1,
      explanation:
        "CRD applies to all health care professionals providing services at or on behalf of the organization — including telemedicine providers. The physical delivery method does not exempt a provider from credentialing requirements.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Patients receiving care from a telemedicine provider deserve the same credential verification assurance as patients seen in person. AAAHC's credentialing standards extend to all care delivered under the organization's auspices.",
        whyWrong: {
          A: "Physical presence is not a qualifying criterion — the service delivery relationship to the organization is.",
          C: "The scope of services provided does not determine whether credentialing is required — it is required for all licensed independent practitioners.",
          D: "Interstate telemedicine introduces additional licensure considerations but does not change whether credentialing is required.",
        },
        operationalContext:
          "Build telemedicine provider credentials into the main credentialing system. Verify the state license(s) appropriate to where both the provider and patient are located. Note: some states have telemedicine-specific license reciprocity provisions.",
      },
    },
    {
      id: "asc_crd_08",
      question:
        "An anesthesiologist's reappointment is due, but a complete set of updated primary source verifications has not been obtained. The credentials committee schedules the governing body vote for next month. May the anesthesiologist continue practicing in the interim?",
      options: [
        "Yes — continuing practice during the reappointment review period is standard",
        "This depends on the organization's policy — temporary privileges may be granted to prevent patient care gaps, but clear documentation is required",
        "No — the anesthesiologist must stop practicing until the governing body votes",
        "Yes — physicians may always continue practicing while credentialing is pending",
      ],
      correctIndex: 1,
      explanation:
        "Organizations may grant temporary privileges during the reappointment review period by written policy, but this must be governed by clear criteria and documented authorization. Continuation of practice without a governing policy or documentation is a credentialing gap.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Temporary privileges during reappointment transition are a recognized practice, but they require a written policy, defined conditions, and documented authorization — not an informal assumption that the provider simply continues.",
        whyWrong: {
          A: "Without a written policy governing interim practice, continuation during reappointment is undocumented and non-compliant.",
          C: "Immediate cessation is not always required — temporary privileges may be granted per policy.",
          D: "Practice continuation without documentation or policy is not automatically permissible.",
        },
        operationalContext:
          "Develop a 'Temporary Privileges During Reappointment' policy that defines: the conditions under which temporary privileges are granted, the maximum duration, the required minimum credential verification to be completed before granting temporary privileges, and the governing body officer who authorizes them.",
      },
    },
    {
      id: "asc_crd_09",
      question:
        "A practitioner's credentials file contains their signed application and license copy, but no reference letters. At what point in the credentialing process are peer references typically required?",
      options: [
        "References are required at every reappointment",
        "Peer references are typically required for initial appointment — not necessarily at reappointment, when clinical performance data is used instead",
        "References are never required under AAAHC standards",
        "Only specialist physicians require references — generalists do not",
      ],
      correctIndex: 1,
      explanation:
        "Peer references are a standard credentialing requirement at initial appointment to obtain information about the practitioner's clinical competence, professional behavior, and work ethic from individuals who have directly observed them. At reappointment, peer review results and clinical performance data from the organization's own experience typically replace the initial reference requirement.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "At initial appointment, the organization has no direct experience with the practitioner — references provide independent evidence of competence. At reappointment, the organization's own peer review and performance data serves this role.",
        whyWrong: {
          A: "References at every reappointment would be redundant when the organization has its own performance data — they are primarily an initial appointment tool.",
          C: "Peer references are a recognized and expected element of initial credentialing under AAAHC.",
          D: "The reference requirement is not limited by specialty.",
        },
        operationalContext:
          "Require two to three peer reference letters (from physicians who can attest to the applicant's clinical skills) as part of the initial credentials application. At reappointment, substitute a peer review summary and clinical performance metrics.",
      },
    },
    {
      id: "asc_crd_10",
      question:
        "Under CRD, what does the credentialing process verify about a practitioner's malpractice history?",
      options: [
        "Only claims that resulted in plaintiff verdicts are verified",
        "Malpractice payment history is verified through the NPDB and may also include direct inquiry to the practitioner or malpractice insurer",
        "Malpractice history is verified only if the practitioner is a surgeon",
        "Only malpractice claims from the past two years are relevant",
      ],
      correctIndex: 1,
      explanation:
        "CRD requires verification of malpractice history, which includes NPDB querying (which captures all reported malpractice payments) as well as potential inquiry to the practitioner about pending claims and verification of current malpractice insurance coverage.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The NPDB captures malpractice payments made on behalf of practitioners. Additionally, the credentialing application typically asks practitioners to self-report pending claims and provides a basis for insurance verification.",
        whyWrong: {
          A: "The NPDB reports all malpractice payments — not just those resulting from plaintiff verdicts. Settlements are also reported.",
          C: "Malpractice verification applies to all health care professionals, not just surgeons.",
          D: "The NPDB and malpractice history inquiry cover the practitioner's entire career history, not just the past two years.",
        },
        operationalContext:
          "Include on the credentials application: (1) a disclosure question about pending or settled malpractice claims, (2) current malpractice insurance certificate (with limits and coverage period), and (3) the NPDB query result. Review all three together.",
      },
    },
    {
      id: "asc_crd_11",
      question:
        "A physician assistant has been on medical leave for nine months and is returning to practice at the ASC. What must happen before they resume patient care?",
      options: [
        "They may return immediately — credentials don't expire during medical leave",
        "They must complete a return-to-practice assessment and the organization's policy for break in service (re-credentialing) must be followed",
        "Only their supervisor needs to authorize their return",
        "A 30-day probationary period is automatically required",
      ],
      correctIndex: 1,
      explanation:
        "A break in service longer than the organization's defined threshold (commonly six months) triggers a re-credentialing process — including updated primary source verifications, a new NPDB query, and any required competency demonstration before returning to independent practice.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "A nine-month break is significant. Licenses may have been in jeopardy, competencies may need refreshing, and any adverse events during the period need to be captured. Re-credentialing protects patients.",
        whyWrong: {
          A: "Credentials can lapse or be restricted during extended leaves — the organization cannot assume status remained unchanged.",
          C: "Supervisor authorization alone is not a substitute for documented re-credentialing.",
          D: "A probationary period may be clinically appropriate but it does not substitute for the re-credentialing process itself.",
        },
        operationalContext:
          "Establish a 'Return from Extended Absence' policy defining the break threshold (e.g., six months) that triggers re-credentialing. Include: updated license verification, NPDB query, competency assessment, and governing body approval before return.",
      },
    },
    {
      id: "asc_crd_12",
      question:
        "What is the primary purpose of requiring a signed, dated application as part of the credentials file?",
      options: [
        "It establishes the practitioner's legal relationship with the organization",
        "It documents the practitioner's own attestation of the accuracy of provided information and disclosure of any sanctions or adverse actions",
        "It is required by the DEA for controlled substance prescribing authorization",
        "It serves as the practitioner's employment contract",
      ],
      correctIndex: 1,
      explanation:
        "The signed credentials application includes the practitioner's attestation that all information provided is complete, accurate, and truthful. It also typically includes a self-disclosure of any pending investigations, sanctions, license restrictions, or adverse actions. This creates a documented accountability basis.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The signed application is both a data-gathering tool and a legal attestation. Any false statement on a credentialing application can be grounds for immediate privilege revocation and, in some jurisdictions, criminal prosecution.",
        whyWrong: {
          A: "The legal relationship is established by the employment or contractor agreement — not the credentialing application.",
          C: "DEA prescribing authorization is governed by DEA registration, not the credentialing application.",
          D: "Employment contracts are separate legal documents from credentialing applications.",
        },
        operationalContext:
          "Include on the credentials application: attestation of accuracy, disclosure questions about sanctions/restrictions/investigations, and an authorization for the organization to conduct verifications. Have an attorney review the form for legal sufficiency in your jurisdiction.",
      },
    },
    {
      id: "asc_crd_13",
      question:
        "A new CRNA is joining the anesthesia team. Which organization's primary source would be used to verify their nursing license?",
      options: [
        "The American Association of Nurse Anesthetists (AANA)",
        "The state board of nursing that issued the license",
        "The National Board of Certification and Recertification for Nurse Anesthetists (NBCRNA) — they maintain the license registry",
        "The state department of health where the ASC is located",
      ],
      correctIndex: 1,
      explanation:
        "For nursing licenses (including CRNAs), the primary source is the state board of nursing that issued the license. Most states offer online license verification portals. The NBCRNA verifies CRNA certification (a separate credential), not the underlying nursing license.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 'primary source' for any license is the licensing authority — in this case, the state board of nursing. For a CRNA, you would separately verify the CRNA certification through the NBCRNA and the advanced practice registered nurse (APRN) authorization (if required) through the state board.",
        whyWrong: {
          A: "AANA is a professional association — it does not issue or maintain licenses.",
          C: "NBCRNA issues and maintains CRNA certification, not the nursing license itself.",
          D: "State departments of health oversee facility licensing, not individual practitioner licenses.",
        },
        operationalContext:
          "For a CRNA, verify three credentials through their respective primary sources: (1) RN license via state nursing board, (2) CRNA certification via NBCRNA, and (3) APRN authorization via state nursing board (where required). Each requires a separate PSV step.",
      },
    },
    {
      id: "asc_crd_14",
      question:
        "How does the credentialing process relate to the delineation of clinical privileges (CPV)?",
      options: [
        "Credentialing and privileges are completely separate processes with no connection",
        "Credentialing verifies qualifications; privileging determines which specific services the practitioner may provide based on those qualifications",
        "Privileges are granted automatically once credentialing is complete",
        "Credentialing is for employed staff; privileging is only for contractors",
      ],
      correctIndex: 1,
      explanation:
        "Credentialing (CRD) verifies that the practitioner has the education, training, experience, and licensure to practice their profession. Privileging (CPV) uses those verified credentials to determine the specific services the practitioner is authorized to provide at this specific organization. One flows from the other, but they are distinct processes.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Credentialing = who are you and are you qualified? Privileging = what are you authorized to do here? A surgeon may be credentialed as a general surgeon but only privileged for specific procedures that the ASC has determined it can safely support.",
        whyWrong: {
          A: "Credentialing and privileging are deeply connected — verified credentials are the foundation for privilege determination.",
          C: "Privileges are granted based on credentials — but they are not automatic. The credentials committee and governing body review the specific privileges requested against the verified competencies.",
          D: "Both processes apply to all practitioners regardless of employment arrangement.",
        },
        operationalContext:
          "The credentials file drives the privileges decision: verified subspecialty training in laparoscopic surgery → eligible to request laparoscopic privileges. The governing body approves the specific procedures listed on the delineation of privileges form.",
      },
    },
    {
      id: "asc_crd_15",
      question:
        "An ASC's credentialing committee discovers a physician's license has a past restriction for substance use disorder that was resolved five years ago. How should this information be handled?",
      options: [
        "The restriction must result in automatic denial of credentials",
        "The information must be reviewed as part of the credentialing process and the committee makes a determination based on the full picture, including resolution of the restriction",
        "Past restrictions are irrelevant once resolved — they need not be reviewed",
        "Only current restrictions affect credentialing — past restrictions may be disregarded",
      ],
      correctIndex: 1,
      explanation:
        "A past license restriction must be reviewed by the credentials committee in the context of the full credentialing picture. This includes the nature of the restriction, how it was resolved, any monitoring or conditions imposed, and the practitioner's performance since resolution. The committee makes a judgment — not an automatic determination.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Credentialing is a contextual, judgment-based process. A resolved substance use disorder with demonstrated recovery and monitoring compliance may not be disqualifying — but it must be reviewed, understood, and documented. Ignoring it is a credentialing failure.",
        whyWrong: {
          A: "Automatic denial without review is not compliant with fair and thorough credentialing practices.",
          C: "Resolved issues must still be reviewed — they provide context for the current risk assessment.",
          D: "The committee has an obligation to review the full history, not just current status.",
        },
        operationalContext:
          "When the NPDB or licensing board reveals past adverse actions, request a written explanation from the practitioner. Review the explanation and supporting documentation in committee. Document the committee's analysis and rationale for its credentialing recommendation.",
      },
    },
    {
      id: "asc_crd_16",
      question:
        "A credentials file is complete and verified. Who must give final approval for the practitioner's appointment?",
      options: [
        "The medical director",
        "The credentials committee",
        "The governing body",
        "The ASC administrator",
      ],
      correctIndex: 2,
      explanation:
        "The governing body has ultimate responsibility for the appointment of health care professionals (GOV.190.10). The credentials committee reviews and recommends — but the governing body gives final approval. This may be delegated to a governing body subcommittee but cannot be delegated to staff.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "GOV.190.10 specifically makes the governing body responsible for the employment or contracting of health care professionals. Final appointment approval is a governance function — the medical director and credentials committee make recommendations, but the governing body decides.",
        whyWrong: {
          A: "The medical director may co-chair the credentials committee or make a recommendation, but does not give final approval.",
          B: "The credentials committee recommends — it does not approve. Approval authority rests with the governing body.",
          D: "The administrator manages operations but does not have credentialing appointment authority.",
        },
        operationalContext:
          "Document governing body appointment approval in board meeting minutes. For time-sensitive situations, a governing body officer or subcommittee may be authorized to approve temporary privileges — with ratification at the next full board meeting.",
      },
    },
    {
      id: "asc_crd_17",
      question:
        "Under CRD, what must be done when a practitioner's credentials file reveals they have current malpractice insurance but the policy has a lower limit than the organization requires?",
      options: [
        "The practitioner may be credentialed with the understanding that insurance limits are a personal matter",
        "The organization must make a credentialing decision consistent with its written credentialing policy — which should include minimum insurance coverage requirements",
        "Malpractice insurance limits are never part of the credentialing process",
        "The credentialing committee may waive insurance requirements at its discretion",
      ],
      correctIndex: 1,
      explanation:
        "Organizations should establish minimum malpractice insurance coverage requirements in their credentialing policy. When a practitioner's coverage does not meet those minimums, the credentials committee must make a decision consistent with the policy — which may include denial, conditional appointment pending coverage upgrade, or a governance-approved exception.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Minimum insurance requirements protect the organization and patients in the event of a negligence claim. Having a written policy and applying it consistently is the compliance requirement.",
        whyWrong: {
          A: "Insurance limits are a governance-level concern — the organization has a legitimate interest in ensuring practitioners carry adequate coverage.",
          C: "Insurance verification is a standard credentials file element — limits are a credentialing policy matter.",
          D: "Waivers may be possible but must be documented, policy-consistent, and governing-body-authorized.",
        },
        operationalContext:
          "Establish minimum malpractice coverage requirements in the credentialing policy (e.g., $1M per occurrence/$3M aggregate). Include coverage verification in the credentials checklist and the reappointment checklist.",
      },
    },
    {
      id: "asc_crd_18",
      question:
        "An ASC decides to use a credentialing verification organization (CVO) to conduct primary source verifications on its behalf. Does this satisfy CRD requirements?",
      options: [
        "No — primary source verification must be performed directly by ASC staff",
        "Yes — a CVO may conduct PSV on the organization's behalf, and the organization reviews and uses the CVO's verified results",
        "Only if the CVO is NCQA-certified",
        "CVOs are only permitted for initial credentialing — not for reappointments",
      ],
      correctIndex: 1,
      explanation:
        "Credentialing verification organizations (CVOs) may conduct primary source verifications on behalf of the organization. The organization is responsible for reviewing the verified results and making the credentialing decision. The use of a CVO does not reduce the organization's accountability for the credentialing outcome.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "CVOs are a legitimate mechanism for outsourcing the verification work. The key is that the organization reviews the results, maintains the credentials file, and makes the credentialing decision — these cannot be outsourced.",
        whyWrong: {
          A: "PSV may be conducted by a CVO — direct staff verification is not required.",
          C: "While NCQA-accredited CVOs may offer additional quality assurance, NCQA accreditation is not an AAAHC requirement for CVO use.",
          D: "CVOs may be used for both initial credentialing and reappointments.",
        },
        operationalContext:
          "If using a CVO, ensure your contract specifies: PSV standards used, turnaround time, documentation provided, and the CVO's liability for verification errors. Review all CVO reports before making credentialing recommendations.",
      },
    },
    {
      id: "asc_crd_19",
      question:
        "A practitioner's NPDB query reveals a malpractice payment was made on their behalf five years ago for an obstetrics case. The ASC does not perform OB procedures. How should this information be handled?",
      options: [
        "The malpractice report is irrelevant because OB is not in the ASC's scope — it may be disregarded",
        "The NPDB report must be reviewed by the credentials committee, which considers the nature and context of the claim relative to the privileges requested",
        "Any NPDB report automatically disqualifies a practitioner from credentialing",
        "Malpractice reports more than three years old are automatically excluded from credentialing review",
      ],
      correctIndex: 1,
      explanation:
        "All NPDB reports must be reviewed by the credentials committee. The committee evaluates the relevance, severity, and context of the report — a prior OB malpractice claim does not automatically disqualify a practitioner from non-OB privileges, but it must be reviewed and documented.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The credentials committee must review all NPDB findings and document its analysis. A malpractice payment in an unrelated specialty may be minimally relevant to the privileges being requested — but 'may be minimally relevant' requires documented review, not dismissal.",
        whyWrong: {
          A: "NPDB findings cannot simply be disregarded — all must be reviewed and the analysis documented.",
          C: "Automatic disqualification for any NPDB report is neither fair nor consistent with thorough credentialing practice.",
          D: "There is no three-year exclusion rule for NPDB reports in CRD standards.",
        },
        operationalContext:
          "Create a standard NPDB review worksheet for the credentials committee: report date, nature of claim, specialty involved, settlement/judgment amount, practitioner's explanation, and committee's assessment of relevance to the privileges being requested.",
      },
    },
    {
      id: "asc_crd_20",
      question:
        "A physician applies for initial credentialing and requests privileges for a new surgical technique not previously performed at the ASC. What must the credentials committee evaluate?",
      options: [
        "Only whether the physician is board certified in their specialty",
        "Whether the physician has the training, experience, and competency specifically for the requested technique, AND whether the ASC has the facilities and support to safely support it",
        "Only whether the governing body has approved the technique as part of the surgical scope",
        "New techniques are automatically approved for credentialed surgeons without additional review",
      ],
      correctIndex: 1,
      explanation:
        "Privilege requests for new or specific techniques require evaluation of: the physician's specific training and documented experience with the technique, clinical outcomes (case logs), and whether the ASC's facilities, equipment, staffing, and support services can safely support the technique.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Privileges must be specific and competency-based. A general surgeon may be credentialed but not necessarily competent in a specific new laparoscopic technique. The credentials committee must evaluate training and experience, and the governing body must also determine whether the organization can safely support the new service.",
        whyWrong: {
          A: "Board certification establishes specialty competency generally — not competency in a specific technique.",
          C: "Governing body approval of the service scope and credentials committee review of individual competency are both required.",
          D: "New techniques always require specific review — there is no automatic approval for credentialed surgeons.",
        },
        operationalContext:
          "Create a new privilege request form requiring: specific case volume logs (last 24 months), training documentation (fellowship, course completion, preceptorship), letters of reference attesting to the specific technique, and a clinical quality assessment. Present to credentials committee and governing body for approval.",
      },
    },
  ],
};
