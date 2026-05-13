import type { Level } from "./schema";

export const ascCpvLevel: Level = {
  id: "asc_cpv",
  module: "asc",
  name: "Clinical Privileges",
  description: "AAAHC v44 CPV — delineation of clinical privileges, governing body approval, competency-based privileging, and scope of practice management.",
  icon: "ClipboardCheck",
  color: "hsl(220, 60%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "CPV: Clinical Privileges",
    plainLanguageSummary:
      "The CPV category establishes requirements for defining, granting, and managing the specific clinical activities that each health care professional is authorized to perform at the ASC. Privileges must be competency-based, individually tailored, and granted by the governing body. The scope of procedures a practitioner may perform is determined by their verified training, education, and demonstrated competence — not simply by their license or specialty designation.",
    keyOperationalExpectations: [
      "Each privileged practitioner has a delineation of privileges (DOP) specific to them and to this organization.",
      "Privileges are granted by the governing body based on verified competency — not by license alone.",
      "Privileges are procedure-specific and limited to what the organization can safely support.",
      "Temporary or provisional privileges follow a defined policy.",
      "Privileges are reviewed and renewed at the same interval as reappointment (typically every two years).",
      "Privilege modifications (restriction, suspension, revocation) have defined processes and are reported to NPDB when required.",
    ],
    commonRiskPoints: [
      "A practitioner performs a procedure not listed on their delineation of privileges.",
      "Privileges were granted as a blanket 'specialty privileges' rather than procedure-specific privileges.",
      "A practitioner performing a new technique has not been separately privileged for that technique.",
      "Temporary privileges were granted without a documented governing body process.",
    ],
    aaahcStandards: ["CPV.100", "CPV.110", "CPV.120", "CPV.130", "CPV.140", "CPV.150"],
  },
  studyMaterial: [
    {
      title: "CPV.100 / CPV.110 — What Clinical Privileges Are and Who Grants Them",
      content:
        "Clinical privileges define the specific health care services that each individual health care professional is authorized to provide at the organization. Privileges are separate from — and narrower than — a practitioner's professional license. The governing body grants privileges based on verified credentials, training, and demonstrated competence. CPV.100 requires that privileges are limited to those services the organization can safely support with its facilities, equipment, and staff. No practitioner may perform services beyond their granted privileges.",
      keyPoint:
        "Privileges = what you may do HERE, with THIS organization's capabilities. A license says you CAN do something professionally; a privilege says you MAY do it at this specific facility.",
    },
    {
      title: "CPV.120 — Competency-Based Delineation of Privileges",
      content:
        "Each privileged practitioner must have a delineation of privileges (DOP) — a specific list of procedures they are authorized to perform at the organization. The DOP is based on documented evidence of training, education, and demonstrated competence for each listed procedure. Blanket 'specialty privileges' without specific procedure listing are not sufficient. For practitioners who perform a new procedure or technique not previously included in their privileges, a separate privilege request and competency verification is required before they perform that procedure.",
      keyPoint:
        "A DOP must be procedure-specific. 'General surgery privileges' is not a compliant DOP — 'laparoscopic appendectomy,' 'open hernia repair,' 'laparoscopic cholecystectomy' are.",
    },
    {
      title: "CPV.130 — Temporary Privileges",
      content:
        "Organizations may grant temporary privileges in defined circumstances — for example, to a new practitioner while the full credentialing and privileging process is completed, or to cover a patient care emergency need. Temporary privileges must be granted through a defined, documented process with specific governing body authorization. They should have a defined duration and scope. The governing body or a designated authority (e.g., the governing body chair or medical director, per bylaws) must formally grant temporary privileges. A practitioner performing services with temporary privileges must still meet basic competency requirements for those privileges.",
      keyPoint:
        "Temporary privileges are not informal — they require a defined process, a defined scope, and documented governing body authorization. An informal 'you can start seeing patients while we finish your paperwork' is not compliant.",
    },
    {
      title: "CPV.140 — Privilege Restriction, Suspension, and Revocation",
      content:
        "When clinical performance concerns arise, the organization must have a defined process for modifying, restricting, suspending, or revoking a practitioner's clinical privileges. The process must include: due process protections (notice, opportunity to be heard), appropriate documentation, and — when required — reporting to the NPDB. Under NPDB reporting requirements, adverse privilege actions taken based on clinical performance (not resignation or administrative reasons) must be reported within 15 days. Failure to report required events to the NPDB is itself a compliance failure.",
      keyPoint:
        "Adverse privilege actions must follow due process AND — when clinical performance-based and meeting NPDB thresholds — be reported to the NPDB within 15 days. Voluntary resignation to avoid investigation must still be reported if the investigation was related to clinical competence.",
    },
    {
      title: "CPV.150 — Privileges for Advanced Practice Providers",
      content:
        "Physician assistants, advanced practice registered nurses (APRNs), and other advanced practice providers must be individually privileged in the same manner as physicians. Their privileges must reflect both their scope of practice under state law AND the specific procedures/services the organization can safely support. Supervisory or collaborative agreement requirements (where state law requires them) must be documented, and the supervising physician's privileges must be sufficient to support the services the APP performs under their supervision.",
      keyPoint:
        "APPs are individually privileged — not just supervised. Their DOP must be procedure-specific, and the supervising physician's privileges must encompass the APP's privileged services.",
    },
  ],
  questions: [
    {
      id: "asc_cpv_01",
      question:
        "An orthopedic surgeon's delineation of privileges lists 'orthopedic surgery.' The surgeon performs a total shoulder arthroplasty that is not explicitly listed. What is the compliance issue?",
      options: [
        "No issue — 'orthopedic surgery' encompasses all orthopedic procedures",
        "The procedure must be specifically listed on the delineation of privileges — blanket specialty descriptions are not sufficient",
        "The surgeon is licensed to perform orthopedic procedures, so no privilege specificity is needed",
        "Privileges are implicit for board-certified surgeons",
      ],
      correctIndex: 1,
      explanation:
        "CPV.120 requires procedure-specific delineation of privileges. A blanket 'orthopedic surgery' designation is not a specific privilege listing. Total shoulder arthroplasty must be listed as a specific procedure on the surgeon's DOP before it can be performed at the facility.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Procedure-specific privileges ensure that the organization has verified the surgeon's competence specifically for each procedure — not just for their specialty broadly. Total shoulder arthroplasty requires specific training and implant experience that a general orthopedic surgeon may not have.",
        whyWrong: {
          A: "Blanket specialty descriptions do not satisfy CPV.120 specificity requirements.",
          C: "Licensure authorizes practice at the professional level — privileges authorize specific procedures at a specific facility.",
          D: "Board certification indicates specialty training, not specific procedure competency at this facility.",
        },
        operationalContext:
          "Rebuild delineation of privileges forms to list specific procedures with CPT codes where possible. Require surgeons to request each procedure specifically, with supporting documentation of training and case volume.",
      },
    },
    {
      id: "asc_cpv_02",
      question:
        "Under CPV.100, what limits the privileges the governing body may grant to a practitioner?",
      options: [
        "Only the practitioner's professional license",
        "Both the practitioner's verified competence AND what the organization can safely support with its facilities, equipment, and staff",
        "Only what the practitioner requests on their privilege form",
        "The privileges granted at the practitioner's hospital affiliation",
      ],
      correctIndex: 1,
      explanation:
        "CPV.100 requires that privileges are limited to services the organization can safely support. A surgeon may be competent to perform thoracic surgery, but if the ASC lacks the necessary intensive care support, the privilege should not be granted regardless of the surgeon's competence.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Privilege granting is bidirectional: the practitioner must be competent AND the organization must be capable of supporting the service safely. Both conditions must be met before privileges are granted.",
        whyWrong: {
          A: "License alone is not sufficient — competency verification and organizational capability are also required.",
          C: "Practitioners may request more than the organization can support — the governing body must assess both dimensions.",
          D: "Privileges at a hospital reflect that hospital's capabilities — they do not automatically transfer to the ASC.",
        },
        operationalContext:
          "During privilege review, ask two questions: (1) Is the practitioner trained and competent for this procedure? (2) Can this facility safely support this procedure? Grant privileges only when both answers are yes.",
      },
    },
    {
      id: "asc_cpv_03",
      question:
        "A surgeon requests privileges for robotic-assisted laparoscopic surgery — a technique they recently completed training in but have limited independent case experience with. What should the credentials committee consider?",
      options: [
        "Approve the privilege based on the training completion certificate alone",
        "Evaluate case volume and competency documentation for robotic-assisted surgery specifically, and consider provisional privileges with mentored cases if experience is limited",
        "Deny the privilege until the surgeon has five years of experience",
        "Approve based on the surgeon's general laparoscopic surgery privileges",
      ],
      correctIndex: 1,
      explanation:
        "New techniques require specific competency evaluation. If experience is limited, provisional or conditional privileges — with proctored cases and a defined competency assessment pathway — protect patients while allowing the surgeon to develop the necessary experience.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Competency-based privileging means evaluating actual demonstrated ability — not just training completion. Provisional privileges with proctoring are a legitimate mechanism for new procedures when training is complete but independent case volume is limited.",
        whyWrong: {
          A: "Training certificates establish training but not independent competency — case volume and supervision records are needed.",
          C: "A blanket five-year requirement is not a competency-based standard.",
          D: "Robotic-assisted surgery requires specific training separate from open or conventional laparoscopic surgery.",
        },
        operationalContext:
          "Establish a new technique privilege pathway: (1) training documentation, (2) case log minimum (e.g., 10 proctored cases), (3) proctor assessment of competency, (4) credentials committee review, (5) governing body approval for independent privileges.",
      },
    },
    {
      id: "asc_cpv_04",
      question:
        "A new surgeon joins the ASC. The administrator grants immediate privileges so they can start seeing patients while the credentials committee meets next month. What CPV requirement is violated?",
      options: [
        "Nothing — the administrator has authority to grant temporary privileges",
        "Temporary privileges must be granted through a defined process with governing body authorization — administrator discretion alone is not compliant",
        "Temporary privileges may be granted by the administrator for up to 90 days",
        "Only credentialing is required before practice — privileges may be granted later",
      ],
      correctIndex: 1,
      explanation:
        "CPV.130 requires that temporary privileges are granted through a defined, documented process with specific governing body (or governing body-delegated authority) authorization. An administrator granting privileges unilaterally, without a governing body process, is not compliant.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Privilege granting — even temporary — is a governing body function. The bylaws may delegate emergency temporary privilege authority to the medical director or governing body chair, but this must be pre-established in writing.",
        whyWrong: {
          A: "The administrator has no authority to grant clinical privileges — that is a governing body function.",
          C: "90-day administrator authority is not established in CPV standards.",
          D: "Both credentialing AND privileging must be completed before the practitioner provides services.",
        },
        operationalContext:
          "Establish a temporary privilege policy in the bylaws that authorizes a specific officer (e.g., the governing body chair or medical director) to grant defined temporary privileges when: (1) a minimum credential threshold is verified, (2) a clinical need exists, and (3) formal governing body ratification will occur at the next meeting.",
      },
    },
    {
      id: "asc_cpv_05",
      question:
        "A physician assistant (PA) at the ASC assists with surgical procedures. Under CPV.150, what must be in place?",
      options: [
        "Only the supervising physician's privileges are required — the PA's privileges are covered by the supervisory agreement",
        "The PA must have their own individually delineated privileges, and the supervising physician's privileges must encompass the services the PA provides",
        "PAs are not required to be individually privileged if they work under direct supervision",
        "PA privileges are determined solely by state law — the governing body has no role",
      ],
      correctIndex: 1,
      explanation:
        "CPV.150 requires APPs including PAs to be individually privileged. The supervising physician's privileges must also encompass the PA's privileged services — ensuring the supervisory relationship is clinically appropriate.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Individual privileging of APPs ensures that the ASC has verified the PA's specific competencies — not just assumed them from the supervisory relationship. The supervising physician alignment requirement prevents a situation where the PA performs procedures the supervising physician cannot legally or clinically supervise.",
        whyWrong: {
          A: "Supervisory agreement alone does not constitute individual privileging for the PA.",
          C: "Direct supervision does not eliminate the individual privilege requirement.",
          D: "State law establishes the scope of practice — the governing body still determines what specific services the PA may provide at this facility within that scope.",
        },
        operationalContext:
          "Create a PA/APP-specific delineation of privileges form listing the procedures the APP may perform, assisted procedures, and any supervision requirements. Document the supervising physician's corresponding privileges for each APP privilege listed.",
      },
    },
    {
      id: "asc_cpv_06",
      question:
        "A surgeon's privileges are summarily suspended due to a patient safety concern. Under CPV.140, what two actions must occur?",
      options: [
        "The suspension is kept confidential and no reporting is required",
        "The practitioner must receive notice and an opportunity to be heard (due process), and — if the suspension meets NPDB reporting thresholds — it must be reported to the NPDB within 15 days",
        "The surgeon must be terminated immediately from all ASC relationships",
        "The state medical board must be notified before any suspension takes effect",
      ],
      correctIndex: 1,
      explanation:
        "CPV.140 requires due process protections for adverse privilege actions (notice + opportunity to be heard) AND NPDB reporting when required thresholds are met. Summary suspension for immediate patient safety protection is permissible, but due process must still follow, and NPDB reporting obligations apply.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Due process protects practitioners from arbitrary action. NPDB reporting protects future patients by ensuring the data bank has a complete record of clinical performance-based adverse actions. Both are independently required.",
        whyWrong: {
          A: "NPDB reporting obligations cannot be waived by keeping the suspension confidential.",
          C: "Termination may follow a suspension, but suspension and termination are separate actions with different due process and reporting requirements.",
          D: "State board notification may be required in some jurisdictions, but CPV.140 does not require prior state board notification before a summary suspension.",
        },
        operationalContext:
          "Maintain a privileging action policy that defines: grounds for summary suspension, immediate due process notification steps, the hearing process, the NPDB reporting review checklist (does this meet reporting thresholds?), and a 15-day reporting calendar from the date of action.",
      },
    },
    {
      id: "asc_cpv_07",
      question:
        "At reappointment, a surgeon's delineation of privileges lists several procedures they have not performed at the ASC in the past two years. What should the credentials committee do?",
      options: [
        "Automatically renew all listed privileges — the surgeon's license is still valid",
        "Review whether privileges for procedures not performed should be renewed or allowed to lapse — competency may be difficult to verify without recent case volume",
        "Expand privileges to include additional procedures the surgeon has not performed",
        "Renewal decisions are the medical director's responsibility, not the credentials committee's",
      ],
      correctIndex: 1,
      explanation:
        "Competency-based privileging requires ongoing verification of current competency. Privileges for procedures not performed in two or more years may reflect lost or diminished competency. The credentials committee should review case volume and consider whether to renew, allow to lapse, or require re-demonstration of competency.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The phrase 'use it or lose it' applies to procedural privileges. A surgeon who has not performed a procedure in two years may not be as safe as one who performs it regularly. The credentials committee must use judgment about current competency — not just about credentials at the time of initial granting.",
        whyWrong: {
          A: "License validity does not establish current procedural competency for specific techniques.",
          C: "Expanding privileges at reappointment without new competency documentation is the opposite of the required approach.",
          D: "Credentials committee responsibility — not medical director discretion alone — applies to reappointment decisions.",
        },
        operationalContext:
          "For each procedure on the DOP at reappointment, document the case volume during the appointment period. For privileges with zero or minimal utilization, request documentation of competency maintenance (continuing education, simulation, or cases at another facility). Allow privileges to lapse rather than renew them without evidence of current competency.",
      },
    },
    {
      id: "asc_cpv_08",
      question:
        "An anesthesiologist at the ASC wants to use a new regional nerve block technique. Must a separate privilege be granted?",
      options: [
        "No — anesthesia privileges cover all anesthesia techniques",
        "Yes — a new technique not previously included in the anesthesiologist's privileges requires a new privilege request with competency documentation",
        "Only if the technique involves controlled substances",
        "The governing body approves anesthesia techniques broadly — individual privilege requests are not needed",
      ],
      correctIndex: 1,
      explanation:
        "CPV.120 requires privileges for specific techniques. A new regional nerve block technique not previously listed in the anesthesiologist's DOP requires a new privilege request, competency verification (training, case log, or supervised case), and governing body approval before clinical use.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "'Anesthesia privileges' as a blanket term is not compliant with CPV.120 specificity requirements. Each technique — general anesthesia, spinal, epidural, specific nerve blocks — should be separately listed and individually verified.",
        whyWrong: {
          A: "Blanket 'anesthesia privileges' do not satisfy the specificity requirement of CPV.120.",
          C: "Controlled substance use is a DEA/regulatory matter — not the determinant of whether a technique privilege is needed.",
          D: "GOV.270 requires the governing body to approve anesthesia techniques generally, but CPV.120 requires individual practitioner privilege specificity.",
        },
        operationalContext:
          "Design the anesthesia DOP form to list specific techniques: general anesthesia (ETT, LMA), spinal anesthesia, epidural, specific nerve blocks (femoral, sciatic, brachial plexus, etc.), monitored anesthesia care, minimal sedation. Grant each individually with documented competency.",
      },
    },
    {
      id: "asc_cpv_09",
      question:
        "A surgeon who was voluntarily resigned their privileges while under quality review. Must the organization report this to the NPDB?",
      options: [
        "No — voluntary resignation is not a reportable event",
        "Yes — if the resignation occurred while under investigation related to clinical competence or professional conduct, it must be reported to the NPDB",
        "Reporting is optional if the resignation was amicable",
        "Only involuntary suspension or revocation requires NPDB reporting",
      ],
      correctIndex: 1,
      explanation:
        "NPDB regulations require reporting when a practitioner's clinical privileges are surrendered or allowed to lapse while under investigation, or in exchange for not conducting an investigation, when the investigation relates to professional competence or conduct. This prevents practitioners from evading the data bank by resigning.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The NPDB reporting trigger for resignation during investigation was established specifically to close the 'surrender loophole.' Organizations that allow practitioners to resign without reporting escape a reporting obligation the law requires.",
        whyWrong: {
          A: "Voluntary resignation during investigation is a reportable event — the key trigger is the investigation connection.",
          C: "Amicability of the resignation does not determine NPDB reporting requirements.",
          D: "Resignation under investigation is a separately enumerated reportable event — it is not limited to formal involuntary actions.",
        },
        operationalContext:
          "Before accepting a resignation from any practitioner who is under quality review, consult legal counsel to determine NPDB reporting obligations. Document the resignation circumstances and the reporting decision in the credentials file.",
      },
    },
    {
      id: "asc_cpv_10",
      question:
        "A practitioner's privileges are being reviewed for potential restriction due to performance concerns. The practitioner requests a hearing. What must the organization provide under CPV.140?",
      options: [
        "An apology and an opportunity to voluntarily resign",
        "Notice of the concerns, an opportunity to present their case, and a defined appeals process",
        "A hearing conducted by the state medical board on the organization's behalf",
        "Due process requirements apply only to revocations — not restrictions",
      ],
      correctIndex: 1,
      explanation:
        "CPV.140 requires due process for adverse privilege actions. This means: notice of the specific concerns and proposed action, an opportunity for the practitioner to present information and their perspective, and a defined appeals process. The exact mechanism must be described in the organization's bylaws.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Due process requirements exist to ensure adverse actions are fair, evidence-based, and free from arbitrary discrimination. They protect both practitioners and organizations from legal claims of procedural unfairness.",
        whyWrong: {
          A: "Apology and resignation offer are not due process.",
          C: "State medical boards conduct separate investigations — due process at the facility level is an internal obligation.",
          D: "Due process applies to all adverse privilege actions — restrictions, suspensions, and revocations.",
        },
        operationalContext:
          "Include a fair hearing and appeal procedures section in the medical staff bylaws. It should specify: how notice is given, who conducts the hearing, what evidence may be presented, the timeline, and how appeals are handled. Consult legal counsel to ensure the process meets state law requirements.",
      },
    },
    {
      id: "asc_cpv_11",
      question:
        "How do clinical privileges differ from a practitioner's license?",
      options: [
        "Licenses are broader; privileges are narrower and specific to the organization's capabilities",
        "Privileges are broader; licenses are limited to a single specialty",
        "They are equivalent — both define what a practitioner may do",
        "Licenses cover hospital settings; privileges cover ambulatory settings",
      ],
      correctIndex: 0,
      explanation:
        "A license grants the legal authority to practice a profession within the scope permitted by state law. Clinical privileges are narrower — they define what specific services a practitioner is authorized to provide at a specific organization, based on that organization's verified credentials review and capabilities.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The scope relationship is: license ≥ privileges. A practitioner's license may allow them to perform a broad range of procedures, but the ASC grants privileges only for those procedures it can safely support and for which the practitioner's competency is verified.",
        whyWrong: {
          B: "Privileges are narrower than licenses — not broader.",
          C: "They are not equivalent — the license is issued by the state; privileges are granted by the organization for specific services at that facility.",
          D: "Licenses and privileges operate in all healthcare settings — the distinction is scope, not setting.",
        },
        operationalContext:
          "When explaining privileges to practitioners, use this analogy: 'Your license is your driver's license — it authorizes you to drive. Our privileges are the keys to specific vehicles in our lot — they authorize you to operate specific procedures with our equipment and team.'",
      },
    },
    {
      id: "asc_cpv_12",
      question:
        "An APRN at the ASC performs pre-anesthesia assessments within their scope of practice. What must the ASC's privilege system document?",
      options: [
        "Only the supervising anesthesiologist's privileges — the APRN's work is covered by supervision",
        "The APRN's individually delineated privileges including pre-anesthesia assessment, and the supervising anesthesiologist's corresponding privileges",
        "APRNs performing assessments are exempt from privilege requirements if they hold a DNP degree",
        "State authorization for APRN practice is sufficient — no organizational privilege is needed",
      ],
      correctIndex: 1,
      explanation:
        "CPV.150 requires individual privileges for APRNs performing clinical services. The supervising physician's or anesthesiologist's privileges must also cover the activities being supervised. Both conditions — individual APP privilege and supervisor privilege alignment — must be met.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Individual APRN privileges ensure competency verification at the organizational level. Supervisor alignment ensures the supervisory relationship is clinically appropriate — a CRNA cannot supervise an APRN for services outside the CRNA's own competence and privileges.",
        whyWrong: {
          A: "Supervisory coverage does not substitute for individual APRN privileges.",
          C: "Advanced degrees do not exempt practitioners from privilege requirements.",
          D: "State authorization defines the legal scope — organizational privileges define the facility-specific scope.",
        },
        operationalContext:
          "Add all APRNs and PAs to the privileging system with their own DOP forms. At reappointment, confirm the supervising physician's DOP still covers each activity listed on the APP's DOP.",
      },
    },
    {
      id: "asc_cpv_13",
      question:
        "What is the governing body's role in the clinical privileging process?",
      options: [
        "The governing body monitors privileges but does not formally approve them",
        "The governing body grants or denies clinical privileges based on the credentials committee's recommendation",
        "Privileges are granted by the medical director on behalf of the governing body",
        "The governing body only reviews adverse privilege actions — routine privilege granting is delegated to the credentials committee",
      ],
      correctIndex: 1,
      explanation:
        "The governing body formally grants or denies clinical privileges. The credentials committee evaluates applications and makes recommendations — but the authority to grant privileges rests with the governing body as a governance function (GOV.190.10, CPV.110).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The governing body bears ultimate accountability for who provides care at the organization. Privilege granting is a governance function that cannot be fully delegated — the credentials committee may recommend, but the governing body decides.",
        whyWrong: {
          A: "The governing body formally grants privileges — monitoring alone is not sufficient.",
          C: "The medical director may recommend but does not have governing body authority for privilege granting.",
          D: "Routine privilege granting at appointment and reappointment is a governing body action — not only adverse actions.",
        },
        operationalContext:
          "Document governing body privilege approvals (initial appointment and reappointment) in board meeting minutes. Include the practitioner's name, privileges approved, and the vote. This creates the governing body's formal record of privilege granting.",
      },
    },
    {
      id: "asc_cpv_14",
      question:
        "Under CPV.130, what minimum elements must be verified before temporary privileges are granted to a new practitioner?",
      options: [
        "No verification is required for temporary privileges — that is why they are temporary",
        "A minimum set of verified credentials (e.g., current license in good standing, basic NPDB query, malpractice insurance verification) must be confirmed before temporary privileges are granted",
        "Only a phone call to the practitioner's previous employer is required",
        "Temporary privileges may be granted based solely on the practitioner's signed self-attestation",
      ],
      correctIndex: 1,
      explanation:
        "CPV.130 requires that even temporary privileges have a defined process with minimum credential verification. At minimum, the current license should be verified, a basic NPDB query completed, and malpractice insurance confirmed before a temporary privilege is granted.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Temporary privileges without any credential verification expose patients to unverified providers. The temporary privilege process must include a defined minimum verification threshold — even if it is expedited — to protect patients.",
        whyWrong: {
          A: "The 'temporary' nature of privileges does not eliminate the need for credential verification.",
          C: "An employer reference call is not the same as primary source verification of credentials.",
          D: "Self-attestation alone is never sufficient for privilege granting — it is the starting point, not the verification itself.",
        },
        operationalContext:
          "Define 'temporary privilege minimum verification' in your bylaws or privileging policy: current license PSV, NPDB query, current malpractice insurance verification. These three can typically be completed within 24-48 hours. Full credentialing is then completed within the defined temporary privilege period.",
      },
    },
    {
      id: "asc_cpv_15",
      question:
        "A surgeon is granted privileges for 'knee arthroscopy, shoulder arthroscopy, and carpal tunnel release.' The surgeon then requests permission to perform a complex total knee arthroplasty at the ASC. What CPV process must occur?",
      options: [
        "The existing privilege for 'knee arthroscopy' covers knee arthroplasty — no additional privilege is needed",
        "A new privilege request must be submitted, competency documentation reviewed, and the governing body must approve the new privilege before the procedure is performed",
        "The surgeon may perform the procedure once, then request the privilege retroactively",
        "Total knee arthroplasty requires only the governing body chair's verbal approval",
      ],
      correctIndex: 1,
      explanation:
        "Total knee arthroplasty is a fundamentally different procedure from knee arthroscopy — it requires different training, implants, and post-operative support. It is not covered by the existing arthroscopy privilege. A new privilege request with competency documentation and governing body approval is required.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Knee arthroscopy and total knee arthroplasty share an anatomical site but involve completely different technical skills, implant systems, and post-operative care requirements. Competency in one does not imply competency in the other.",
        whyWrong: {
          A: "Arthroscopy and arthroplasty are distinct procedures requiring separate privilege documentation.",
          C: "Performing a procedure before the privilege is granted violates CPV — there is no retroactive privilege process.",
          D: "Verbal approval does not constitute governing body action — formal written approval is required.",
        },
        operationalContext:
          "When a practitioner wants to add a new procedure, provide them with a privilege request form that requires: procedure name, CPT code, training documentation, case log, and supporting letters. Submit to credentials committee and then governing body for approval before the first case.",
      },
    },
    {
      id: "asc_cpv_16",
      question:
        "An ASC's bylaws state that privileges expire and must be renewed every two years. A surgeon's privileges expired six months ago and they have been continuing to practice. What must happen?",
      options: [
        "The expired privileges are automatically renewed if no adverse events occurred",
        "Practice with expired privileges is unauthorized — the practitioner must immediately cease performing procedures until privileges are formally renewed through the defined process",
        "The practitioner may continue practicing for up to one year past expiration while renewal is pending",
        "Expired privileges are only a documentation issue — they do not affect the practitioner's authority to practice",
      ],
      correctIndex: 1,
      explanation:
        "Privileges lapse when they expire. A practitioner whose privileges have expired has no organizational authorization to perform procedures, regardless of their competence or license status. This is a serious patient safety and organizational compliance issue requiring immediate action.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Expired privileges mean the governing body has not reviewed and renewed its authorization for the practitioner's clinical activities. Allowing practice on expired privileges reflects a complete breakdown in the privilege management system.",
        whyWrong: {
          A: "Privileges do not auto-renew — they require a formal reappointment and privilege renewal process.",
          C: "There is no grace period for expired privileges — the practitioner must cease procedures immediately.",
          D: "Expired privileges are a substantive clinical governance failure — not merely a documentation gap.",
        },
        operationalContext:
          "Implement a privilege expiration tracking system. Generate alerts 90, 60, and 30 days before expiration. If renewal is not completed before the expiration date, immediately notify the practitioner and the medical director that the practitioner must stop performing procedures until renewal is complete.",
      },
    },
    {
      id: "asc_cpv_17",
      question:
        "What is the key distinction between 'focused professional practice evaluation' (FPPE) and 'ongoing professional practice evaluation' (OPPE) in the context of CPV?",
      options: [
        "FPPE and OPPE are the same process with different names",
        "FPPE is triggered for specific concerns or for new privileges; OPPE is the ongoing periodic review of all privileged practitioners",
        "OPPE is triggered by adverse events; FPPE is the routine annual review",
        "FPPE applies only to new practitioners; OPPE applies only to established practitioners",
      ],
      correctIndex: 1,
      explanation:
        "FPPE is triggered-based: it occurs for new privileges, new practitioners, or when specific performance concerns arise and requires focused monitoring of a defined set of cases. OPPE is the routine, ongoing performance data collection and review for all privileged practitioners — it is continuous and leads into reappointment decisions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "FPPE and OPPE are complementary privilege oversight mechanisms. OPPE provides the baseline — if OPPE reveals concerns, FPPE is initiated for a more intense focused assessment. AAAHC's ongoing monitoring standards (QUA.120, QUA.130) reflect OPPE-type requirements.",
        whyWrong: {
          A: "They are distinct processes with different triggers and purposes.",
          C: "OPPE is routine and continuous — not triggered by adverse events. FPPE is triggered by concerns or new privileges.",
          D: "OPPE applies to all privileged practitioners, not just established ones.",
        },
        operationalContext:
          "Implement OPPE as a standing monthly/quarterly data collection: case volumes, complication rates, peer review outcomes, and patient satisfaction for each privileged provider. When OPPE data triggers concern, initiate FPPE: defined case review criteria, proctoring, and a defined timeline for assessment.",
      },
    },
    {
      id: "asc_cpv_18",
      question:
        "A practitioner's clinical privileges are restricted pending investigation of a patient safety event. The restriction is not reported to the NPDB because 'the investigation is still open.' Is this acceptable?",
      options: [
        "Yes — NPDB reporting is required only after a final decision is made",
        "It depends on the nature of the restriction — a restriction that limits or changes the practitioner's privileges while an investigation is ongoing may trigger reporting requirements",
        "Yes — restrictions pending investigation are always exempt from NPDB reporting",
        "All restrictions must be reported within 30 days regardless of investigation status",
      ],
      correctIndex: 1,
      explanation:
        "NPDB reporting requirements for restrictions depend on the nature and basis of the restriction. Summary restrictions or suspensions taken for immediate patient safety protection may trigger reporting even while an investigation is ongoing. Legal counsel review of each adverse action's reporting requirements is strongly recommended.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "NPDB regulations are nuanced — the reporting trigger is based on the type of action and its basis, not simply the procedural status of an investigation. Organizations that defer reporting during all investigations may violate NPDB timing requirements for specific action types.",
        whyWrong: {
          A: "Some NPDB reports are triggered by actions taken before final investigation decisions — legal review of each situation is required.",
          C: "There is no blanket exemption for restrictions pending investigation.",
          D: "30 days is not the universal timeframe — the NPDB requires reporting within 15 days for many adverse actions.",
        },
        operationalContext:
          "Engage legal counsel immediately whenever a privilege restriction, suspension, or revocation occurs. Have a standard NPDB reporting review checklist that legal counsel completes for each adverse action to determine: reportability, appropriate timeframe, and correct report format.",
      },
    },
    {
      id: "asc_cpv_19",
      question:
        "An ASC's credentialing committee approves a gastroenterologist's privileges for upper and lower endoscopy. The governing body later refuses to formally vote on the privilege recommendation. What is the effect on the practitioner's ability to practice?",
      options: [
        "Credentials committee approval is sufficient — governing body vote is a formality",
        "Without governing body approval, the practitioner does not have formally granted privileges and may not practice",
        "The practitioner may practice provisionally until the governing body votes",
        "The administrator may authorize practice while the governing body considers the matter",
      ],
      correctIndex: 1,
      explanation:
        "The credentials committee recommends — the governing body grants. Without governing body approval, no formal privilege exists. A credentials committee recommendation alone is not equivalent to granted privileges, and the practitioner may not perform procedures based solely on committee recommendation.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The governance structure is hierarchical: credentials committee → recommendation → governing body → formal grant. Bypassing the governing body vote eliminates the governance control the system is designed to provide.",
        whyWrong: {
          A: "Credentials committee approval is the recommendation step — governing body approval is the grant step. Both are required.",
          C: "Provisional practice based on committee recommendation alone is not established in CPV standards — formal approval or a defined temporary privilege process is required.",
          D: "The administrator does not have privilege-granting authority.",
        },
        operationalContext:
          "If the governing body has concerns about a credentials committee recommendation, those concerns should be raised and resolved before the practitioner begins practice — not left unresolved while the practitioner works without formal privilege authorization.",
      },
    },
    {
      id: "asc_cpv_20",
      question:
        "A dentist applies for privileges at an oral and maxillofacial surgery ASC. Which documents are most critical to verify for procedure-specific competency?",
      options: [
        "Dental license and state DEA registration",
        "Residency or fellowship training completion certificates and case logs showing specific oral surgery volumes",
        "Professional society memberships and conference attendance records",
        "The dentist's malpractice insurance premium amounts",
      ],
      correctIndex: 1,
      explanation:
        "Competency-based privileging requires evidence of specific training (residency/fellowship certificates) and demonstrated experience (case logs showing volume in the specific procedures requested). These directly establish procedure-specific competency.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "For a dentist requesting oral surgery privileges, the credentials committee needs to see: where and when they trained in oral surgery, the scope of their training, and what volume of the specific procedures they have performed. Case logs with procedure types and volumes are the most direct competency evidence.",
        whyWrong: {
          A: "License and DEA verify legal authorization — not competency for specific procedures.",
          C: "Professional memberships and conference attendance indicate engagement with the field but are not direct competency evidence.",
          D: "Insurance premiums reflect claims history — not procedure-specific competency.",
        },
        operationalContext:
          "For oral surgery privileges, require: oral and maxillofacial surgery residency certificate, case log showing cases in the last two years for each requested procedure type, and peer reference from a supervising or peer oral surgeon who can attest to procedure-specific competency.",
      },
    },
  ],
};
