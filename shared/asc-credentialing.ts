import type { Level } from "./schema";

export const ascCredentialingLevel: Level = {
  id: "asc_credentialing",
  module: "asc",
  name: "Credentialing and Privileging",
  description:
    "How physicians and other licensed practitioners earn — and keep — the legal authority to practice in your ASC. Primary source verification, privilege specificity, OPPE/FPPE, and reappointment cycles.",
  icon: "BadgeCheck",
  color: "hsl(195, 75%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Credentialing and Privileging",
    plainLanguageSummary:
      "Credentialing is verifying that a clinician is who they say they are and has the training they claim. Privileging is granting the specific procedures they are allowed to perform in your ASC. Surveyors expect to see a credentials file for every clinician with primary source verification of license, DEA, board certification, malpractice history, education, and current competency. They expect privileges to be specific (not 'general surgery' but 'laparoscopic cholecystectomy, open inguinal hernia repair, etc.'), tied to evidence of training and recent experience, and time-limited. They also expect ongoing performance evaluation (OPPE), focused review for new privileges (FPPE), and a reappointment cycle that the ASC actually enforces. The most common failures: expired licenses, expired DEAs, expired malpractice insurance, privileges that don't match what the clinician is actually doing, and reappointments that quietly slip past the deadline.",
    keyOperationalExpectations: [
      "Each clinician has a credentialing file with primary source verification (PSV) of license, education, board certification, work history, DEA, NPDB query, and malpractice history.",
      "Privileges are specific to procedures, granted by the governing body, and time-limited (typically 2 years).",
      "New privileges trigger Focused Professional Practice Evaluation (FPPE) — proctoring or focused review of initial cases.",
      "Ongoing Professional Practice Evaluation (OPPE) reviews every clinician's performance at a defined interval (typically every 6 months).",
      "Expirables (license, DEA, malpractice insurance, board certification, BLS/ACLS) are tracked and monitored, with auto-suspension procedures when they lapse.",
      "Reappointment occurs at defined intervals with a complete refresh of the credentials packet, including current verification of all elements.",
    ],
    commonRiskPoints: [
      "License or DEA expired and not caught — clinician operating without current legal authority.",
      "Malpractice insurance certificate expired or below the ASC's required minimum.",
      "Privileges granted in vague categories ('general surgery') rather than specific procedures.",
      "FPPE for new privileges never closed out — proctoring assigned but no final review documented.",
      "OPPE done as a pencil-whip with no real data; all clinicians scored identically.",
      "Reappointment file with PSV done at original appointment but never refreshed.",
      "Locum, temporary, or telemedicine clinicians slipped through with abbreviated credentials.",
    ],
    cmsTags: [
      "42 CFR 416.45",
      "Q-0091 series (Medical staff)",
      "AAAHC credentialing standards",
    ],
  },
  studyMaterial: [
    {
      title: "Primary source verification (PSV)",
      content:
        "PSV means going directly to the issuing source — state medical board, DEA, ABMS, residency program — to confirm the credential. A photocopy of a license that the physician brings in is not PSV; the actual license verification must come from the state board's primary database (often electronic, with a printed or saved confirmation). Every required element gets PSV at appointment, and license/DEA/malpractice get re-verified at reappointment and on expiration.",
      keyPoint:
        "Go to the source. A copy from the clinician's file is not PSV. Document the source, date, and verifier on every PSV.",
    },
    {
      title: "Privileges are specific, not general",
      content:
        "Privileges describe what a clinician can do at your ASC. 'General surgery' is too broad to be defensible — privileges should list specific procedures or procedure categories with criteria (training, recent volume, outcomes). A surgeon credentialed to do laparoscopic cholecystectomy is not automatically privileged for robotic prostatectomy, even if both fall under 'general surgery' in some old taxonomy.",
      keyPoint:
        "If the privilege list doesn't say a clinician can do a specific procedure, they can't do it. List what is allowed; deny by silence.",
    },
    {
      title: "FPPE: trust but verify the new",
      content:
        "Focused Professional Practice Evaluation applies whenever a clinician is granted a new privilege — whether at initial appointment, after a request to add a procedure, or after returning from a long leave. FPPE is proctoring or focused review of a defined number of cases, with a documented closeout decision. New privileges without FPPE is a citation; FPPE that never closes out is also a citation.",
      keyPoint:
        "New privileges = FPPE = a defined number of cases reviewed = a documented closeout signed by the medical director.",
    },
    {
      title: "OPPE: continuous performance review",
      content:
        "Ongoing Professional Practice Evaluation is the regular review of every clinician's performance — typically every 6 months. OPPE pulls data from quality reports, complications, infections, returns to OR, peer review findings, patient complaints, and reappointment-relevant items. Surveyors look for OPPE that reflects real data and real differences between clinicians, not template summaries that say 'no concerns' for everyone.",
      keyPoint:
        "OPPE is data-driven, individual, and ongoing. Not a checkbox; not the same for everyone.",
    },
    {
      title: "Expirables: track or perish",
      content:
        "Licenses, DEAs, malpractice certificates, board certifications, and ACLS/BLS cards all have expiration dates. The ASC must have a tracking system (spreadsheet, credentialing software, EHR module) that alerts well before expiration and triggers an auto-suspension if the credential is not renewed by the expiration date. Auto-suspension is uncomfortable but it is the protective mechanism that prevents an uncredentialed clinician from operating.",
      keyPoint:
        "If you don't have an expirables tracker that auto-suspends, you have a citation waiting to happen.",
    },
    {
      title: "Reappointment every 2 years is a re-verification, not a refile",
      content:
        "Privileges are time-limited — typically every 2 years (42 CFR 416.45(b)) — and reappointment is the moment the ASC confirms that everything in the file is still true today. That means a fresh primary source license check, a new DEA verification, a current ABMS or specialty board check, a new NPDB query, an updated malpractice certificate of insurance, refreshed peer references, and a current OPPE summary that drives the privilege decision. Photocopying the original packet from two years ago is one of the fastest ways to lose a credentialing finding under Q-0091. Surveyors specifically look at the verification dates on the reappointment file — anything older than ~30 days from the medical staff committee meeting is suspect.",
      keyPoint:
        "If a surveyor asks 'when was this license re-verified for reappointment?' the answer needs to be a recent date with a saved verification, not 'we already had it on file.'",
    },
    {
      title: "Allied health & non-physician practitioners are privileged too",
      content:
        "CRNAs, NPs, PAs, podiatrists, dentists, oral surgeons, and any other independent licensed practitioner providing patient care at the ASC must go through the same credentialing and privileging process as physicians — application, primary source verification, NPDB query, peer references, defined privilege list, governing body grant, FPPE, OPPE, and reappointment. A job description is an HR document; it does not authorize patient care. The privilege list has to be specific to that role: which anesthesia techniques the CRNA is authorized to deliver, which procedures the PA may perform or assist on, which sedation level the NP may administer. A clean file for a CRNA looks structurally identical to a clean file for a surgeon.",
      keyPoint:
        "If a non-physician practitioner is putting hands on patients in your ASC, they need a governing-body-granted privilege list — not just a job description.",
    },
    {
      title: "Temporary, emergency, locum, and telemedicine privileges still go through the process",
      content:
        "There is no time-based or volume-based exemption from credentialing in 42 CFR 416.45. Locum tenens, temporary, emergency, and telemedicine clinicians all need PSV, NPDB query, malpractice verification, and a governing body privilege grant before they put hands (or a video link) on a patient. Most ASCs handle this through credentialing-by-proxy with a vetted locum agency or a distant-site telemedicine hospital under a written agreement that defines what verification each side performs — but the ASC's governing body still has to formally accept those privileges. For telemedicine specifically, the clinician must hold an active license in the state where the patient is physically located, not just their home state. 'We didn't have time for a full file' is not a defense surveyors accept.",
      keyPoint:
        "Short engagement, emergency coverage, or video visit — every clinician touching your patients needs a governing-body privilege grant. Credentialing-by-proxy is allowed; skipping is not.",
    },
  ],
  questions: [
    {
      id: "asc_cred_01",
      question:
        "A new orthopedic surgeon submits a credentialing application. The medical staff coordinator reviews the application, verifies that the photocopied license, DEA certificate, and board certification are present in the file, and forwards to the medical staff committee. Is this primary source verification?",
      options: [
        "Yes — copies of the certificates are sufficient evidence",
        "No — PSV requires verification directly from the issuing source (state board, DEA database, ABMS), not from copies provided by the applicant",
        "Yes — the applicant's signature attests to authenticity",
        "Yes — the medical staff committee will catch any issues",
      ],
      correctIndex: 1,
      explanation:
        "Primary source verification means the verification comes from the issuing entity — the state medical board for the license, the DEA database for the DEA, ABMS or the certifying board for board certification. Photocopies of certificates can be forged, lapsed, or revoked without the applicant disclosing it. PSV is the only way to know the credential is currently valid.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "PSV closes the loophole where an applicant could submit a license that has been suspended, revoked, or surrendered. Every state medical board has a free public verification site. The DEA has a paid verification service. ABMS and AOA verify board certification. Every PSV must be documented with the source, date, verifier name, and a saved screenshot or printed verification.",
        whyWrong: {
          A: "Copies are not PSV; the chain of trust starts with the applicant, who is exactly the person whose claims are being verified.",
          C: "Self-attestation does not satisfy PSV.",
          D: "The MSC reviews verified files; it does not verify them.",
        },
        operationalContext:
          "Build a PSV checklist for every credentialing file: state medical license (state board), DEA (DEA verification), board certification (ABMS or AOA), education (medical school directly), residency (residency program directly), work history (each employer for past 5 years), NPDB query, malpractice history (carriers and NPDB). Save a print or screenshot of each verification dated within 30 days of file completion.",
      },
    },
    {
      id: "asc_cred_02",
      question:
        "A surgeon is granted privileges for 'general orthopedic surgery' at your ASC. He performs his first robotic-assisted total knee arthroplasty using a new robotic system the ASC just acquired. The case goes well. What is the credentialing problem?",
      options: [
        "No problem — robotic TKA falls within general orthopedic surgery",
        "Privileges must be specific; robotic-assisted TKA is a new technique that requires its own privilege grant with documented training and FPPE",
        "No problem — the case went well",
        "No problem if the surgeon is board-certified",
      ],
      correctIndex: 1,
      explanation:
        "Robotic-assisted procedures require their own privilege grant because they involve distinct training and a different skill set. 'General orthopedic surgery' is too broad to authorize a new technology. The surgeon needed a documented training certificate from the robot manufacturer (or from a recognized training program), evaluation of the proposed privilege, governing body approval, and FPPE for the first cases — none of which appear to have happened.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "Privileges must be specific enough to define what the clinician is actually allowed to do. New technologies, new approaches, and new procedure categories each require explicit privilege requests, criteria-based evaluation, and FPPE. The fact that the case went well doesn't retroactively grant the privilege — it just means we got lucky that there was no harm.",
        whyWrong: {
          A: "Specificity is the standard. Broad categories don't authorize new techniques.",
          C: "Outcome doesn't validate process. The privilege grant has to precede the procedure.",
          D: "Board certification alone does not authorize a specific new technology.",
        },
        operationalContext:
          "Maintain a privilege catalog by procedure or procedure family. When a new technology arrives, the medical staff committee adds the privilege to the catalog with criteria (training certification, observed cases, FPPE plan), and any clinician wanting to use the new technology submits a request that maps to the criteria.",
      },
    },
    {
      id: "asc_cred_03",
      question:
        "An ASC's expirables tracker shows that a surgeon's medical license expired 3 days ago. He is scheduled to operate this morning. The medical staff coordinator says, 'He always renews — he just forgot to send us the new certificate. He's good for it.' What is the correct action?",
      options: [
        "Let him operate today and chase the certificate later",
        "Auto-suspend privileges effective immediately until verified license renewal is in the file; reschedule today's cases",
        "Have the medical director sign a one-day waiver",
        "Operate today and document the issue in the next QAPI report",
      ],
      correctIndex: 1,
      explanation:
        "An expired license means no legal authority to practice medicine, regardless of the surgeon's intent or the renewal status he claims. Operating without an active license exposes the patient to a non-credentialed clinician, exposes the ASC to a Condition-level finding, and may invalidate malpractice coverage. Auto-suspension until verified renewal is the only defensible response.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "Auto-suspension is uncomfortable in the moment and is the protective mechanism every credentialing program needs. It removes individual judgment from the equation — the system stops the clinician until the system can confirm the credential is current. If the surgeon really did renew, verification takes 5 minutes on the state board's website.",
        whyWrong: {
          A: "Operating without a current license is unauthorized practice of medicine in most jurisdictions.",
          C: "The medical director cannot waive a regulatory requirement that applies to all licensed clinicians.",
          D: "QAPI reporting is after-the-fact documentation; it does not authorize the action in the moment.",
        },
        operationalContext:
          "Build the auto-suspension policy with explicit triggers: expired license, expired DEA, expired malpractice, expired board certification (if required), expired ACLS/BLS where required. Hard-stop scheduling on auto-suspended clinicians at the OR scheduler level. Document each suspension and reinstatement.",
      },
    },
    {
      id: "asc_cred_04",
      question:
        "A surgeon was granted a new privilege (laparoscopic adrenalectomy) 8 months ago. Five cases have been performed. The proctor's evaluation forms for cases 1, 2, and 3 are in the file with positive comments. Cases 4 and 5 have no proctor evaluation. The privilege is in the active list. What is the gap?",
      options: [
        "No gap — three positive evaluations are sufficient to close FPPE",
        "FPPE plan must define the number of cases required, all required cases must be reviewed, and a final closeout decision must be documented before unrestricted privilege is confirmed",
        "No gap — the proctor stopped attending because the surgeon is performing well",
        "Gap only if the cases had complications",
      ],
      correctIndex: 1,
      explanation:
        "FPPE has to be planned (number of cases, criteria for evaluation, who proctors, what is reviewed), executed for all required cases, and formally closed. An open FPPE with three reviewed cases and two un-reviewed cases is incomplete — the privilege should not have been confirmed as unrestricted until the plan was completed and a closeout decision signed.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "FPPE plans must be specific: 'First 5 cases of laparoscopic adrenalectomy will be proctored by Dr. X using the standard proctor evaluation form. After all 5 cases are reviewed, Dr. Medical Director will issue a written FPPE closeout: continue privilege, modify privilege, or revoke privilege.' Anything less is an incomplete process.",
        whyWrong: {
          A: "Three is not five. The plan defines the number; the number must be met.",
          C: "Proctor 'opt-out' based on impression is not a substitute for documented evaluation of the required cases.",
          D: "Complications are not the trigger; the plan completion is.",
        },
        operationalContext:
          "Build an FPPE template that requires fields: privilege name, number of cases required, proctor name, evaluation criteria, case 1 evaluation, case 2, ..., case N, closeout decision, medical director signature, date of closeout. The privilege stays in 'FPPE' status in the EHR until the closeout is filed.",
      },
    },
    {
      id: "asc_cred_05",
      question:
        "An OPPE report for the ASC's 22 active medical staff members shows every clinician scored as 'No concerns' on every metric for the last 12 months. The medical director says 'we don't have any problem clinicians, so the reports are accurate.' What is the surveyor likely to conclude?",
      options: [
        "The OPPE program is well-functioning",
        "Uniform 'no concerns' across all clinicians on all metrics suggests OPPE is being completed as a template rather than driven by individual clinical data, which is a process failure",
        "The medical director is correct — uniform results are normal",
        "OPPE is not required if no clinicians have issues",
      ],
      correctIndex: 1,
      explanation:
        "Statistically, an active medical staff of 22 over 12 months will generate variation: someone has a lower volume month, someone has a return to OR, someone has a wound infection, someone has a patient complaint. Uniform 'no concerns' across all metrics for all clinicians signals that the data is not actually being reviewed individually. Surveyors specifically look for this pattern.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(b))",
      tutor: {
        whyCorrect:
          "Real OPPE reports show variation. Even excellent clinicians have an off month, a complication, or a metric trending in the wrong direction. The surveyor is not looking for problem clinicians; they are looking for evidence the process is real. Uniform reports are the signal of a paper exercise.",
        whyWrong: {
          A: "Uniformly perfect reports are the diagnostic of a broken OPPE process, not a working one.",
          C: "Variation is normal in any population; uniform metrics indicate template responses.",
          D: "OPPE is required regardless of whether 'problems' exist; it is the mechanism that detects problems.",
        },
        operationalContext:
          "Pull the OPPE source data: case volume, returns to OR, infections, complications, patient complaints, peer review findings, attendance at required meetings. Set a defined review cadence (every 6 months), individualize each clinician's report, and have the medical director sign each one with a brief written comment specific to that clinician.",
      },
    },
    {
      id: "asc_cred_06",
      question:
        "A locum surgeon is brought in to cover one weekend. The medical staff coordinator says, 'We don't have time for a full credentialing packet — he's only here for two days.' How is locum credentialing handled?",
      options: [
        "Skip credentialing — locums are exempt because they are temporary",
        "A locum requires a full credentialing process, which can be expedited but not skipped; commonly handled via a credentialing-by-proxy arrangement with a vetted locum agency under a written agreement",
        "Only the license needs to be verified for locums",
        "The medical director can vouch for the locum",
      ],
      correctIndex: 1,
      explanation:
        "Locum tenens clinicians are subject to the same credentialing standards as employed or appointed staff. The process can be expedited (some agencies provide a credentialing-by-proxy packet that the ASC reviews, verifies, and accepts), but it cannot be skipped. The governing body still must grant privileges, even if temporarily.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "Credentialing is about patient safety. The locum is operating on your patients in your facility under your provider agreement. The standards do not relax because the engagement is short. Most locum agencies maintain credentialing files that the ASC can accept under an agreement that defines what verification has been done — but the ASC still has to confirm and grant temporary privileges.",
        whyWrong: {
          A: "There is no time-based exemption in the CFR.",
          C: "License alone is not enough; DEA, malpractice, NPDB, work history, and competency for the specific procedures all matter.",
          D: "Vouching is not credentialing.",
        },
        operationalContext:
          "Establish credentialing-by-proxy agreements with one or two reputable locum agencies. Define what the agency provides (license, DEA, malpractice, NPDB, board certification, work history, references). Require the agency to provide a complete file 7 days before the locum's first shift. Run your own verification on at least the license and DEA.",
      },
    },
    {
      id: "asc_cred_07",
      question:
        "An anesthesiologist's malpractice insurance certificate on file expired 45 days ago. The anesthesiologist is at the ASC today and is about to start his case list. The medical staff coordinator just discovered the lapse. What should happen now?",
      options: [
        "Allow today's cases — the insurance carrier will likely backdate coverage",
        "Stop the cases until current malpractice coverage is verified in writing; if not promptly verified, suspend privileges and reassign cases",
        "Allow today's cases and follow up with the carrier tomorrow",
        "Have the anesthesiologist sign a personal indemnification letter",
      ],
      correctIndex: 1,
      explanation:
        "Operating without verified malpractice coverage exposes both the clinician and the ASC. The 45-day gap may or may not have actual coverage behind it — the answer is to stop and verify, not to assume. If verification is not promptly available, suspension is the protective response. Personal indemnification or carrier backdating are not substitutes for proof of current coverage.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "The required action is verification before procedure, not after. The carrier or broker can usually email a current certificate of insurance within 30 minutes if the policy is in force. If they can't, that's the answer to whether the policy is in force.",
        whyWrong: {
          A: "Backdating is not a reliable assumption and may not extend to acts performed before the new policy was bound.",
          C: "Tomorrow is too late if a complication occurs today.",
          D: "Personal indemnification by an individual clinician does not substitute for malpractice insurance.",
        },
        operationalContext:
          "Set automated alerts at 60 days and 30 days before any expirable expires. At 14 days, escalate to the medical director. At expiration, auto-suspend. Maintain the auto-suspension list at the OR scheduling desk so a suspended clinician cannot be assigned cases.",
      },
    },
    {
      id: "asc_cred_08",
      question:
        "The ASC participates in a telemedicine arrangement where remote anesthesiologists provide pre-operative evaluations from another state. The medical staff coordinator says, 'They're licensed in their state and they have malpractice coverage — that's sufficient.' What is the credentialing concern?",
      options: [
        "No concern — telemedicine providers are credentialed by their home state only",
        "Telemedicine providers must hold an active license in the state where the patient is receiving care, and must be credentialed and privileged at the ASC just like an on-site clinician (with credentialing-by-proxy permitted under defined conditions)",
        "Concern only if the patient is over state lines",
        "Concern only if the telemedicine provider issues prescriptions",
      ],
      correctIndex: 1,
      explanation:
        "Licensing follows the patient: the clinician must be licensed in the state where the patient is physically located. The ASC must also credential and privilege the clinician; credentialing-by-proxy via the distant-site facility is permitted under specific written arrangements. 'Licensed in their state with malpractice' does not satisfy either requirement.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45)",
      tutor: {
        whyCorrect:
          "Telemedicine credentialing has two layers: (1) the clinician must be licensed where the patient is, and (2) the originating-site facility (the ASC) must privilege the clinician. CMS allows credentialing-by-proxy under a written agreement with the distant site, but the ASC must accept the privileges through its governing body. Skipping either layer is a finding.",
        whyWrong: {
          A: "Home-state licensure does not authorize practice in another state.",
          C: "State lines are exactly when this matters most.",
          D: "Prescriptive authority requires DEA in the state of practice, but the credentialing concern is broader and applies to all telemedicine encounters.",
        },
        operationalContext:
          "Before launching any telemedicine service, write the credentialing-by-proxy agreement with the distant site, verify each provider's licensure in your state, document the privileging decision through the governing body, and maintain proxy credentialing files locally even if the distant site is the primary verifier.",
      },
    },
    {
      id: "asc_cred_09",
      question:
        "A surgeon's reappointment packet is due in 60 days. The medical staff coordinator photocopies the original credentialing file from 2 years ago and presents it to the medical staff committee. What is the issue?",
      options: [
        "No issue — the original file was complete",
        "Reappointment requires a fresh primary source verification of license, DEA, board certification, and malpractice; new NPDB query; updated work and competency information; current OPPE summary",
        "Reappointment is a paperwork formality",
        "No issue if the surgeon hasn't moved",
      ],
      correctIndex: 1,
      explanation:
        "Reappointment is a real verification cycle, not a refile. The license must be re-verified (renewals happen, suspensions happen). The DEA must be re-verified. NPDB query must be current. Malpractice insurance must be current. OPPE data from the past cycle must inform the decision. A photocopy of the original is documentary fraud, not reappointment.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(b))",
      tutor: {
        whyCorrect:
          "Reappointment is the moment to confirm everything is still true. Two years can include license discipline, malpractice claims, board certification expiration, leaves of absence, and changes in scope of practice. The packet must reflect current reality, not historical reality.",
        whyWrong: {
          A: "The original file documented past truth; reappointment confirms current truth.",
          C: "It is a real verification, not a formality.",
          D: "Movement is one of many possible changes; the verification is required regardless.",
        },
        operationalContext:
          "Build a reappointment template: new state board verification, new DEA verification, new ABMS check, new NPDB query, new malpractice COI, work history update, OPPE summary, FPPE history, peer references, application narrative for any new privileges, attestation by the clinician. The whole packet is dated within 30 days of the medical staff committee meeting.",
      },
    },
    {
      id: "asc_cred_10",
      question:
        "A National Practitioner Data Bank (NPDB) query during a reappointment shows that the clinician had a malpractice settlement reported 8 months ago that was not disclosed in the application. What is the correct action?",
      options: [
        "Reappoint anyway — settlements happen",
        "Pause the reappointment, conduct a focused review of the underlying case and the failure to disclose, and bring the matter to the medical staff committee and governing body for a deliberate decision",
        "Reappoint and add the matter to the next QAPI report",
        "Refer the disclosure failure to legal but proceed with reappointment",
      ],
      correctIndex: 1,
      explanation:
        "An undisclosed NPDB settlement triggers two distinct concerns: (1) the underlying clinical event, which deserves focused review for patient safety implications, and (2) the failure to disclose, which is a candor and integrity matter. Both go to the medical staff committee and the governing body for a deliberate decision before any reappointment is granted.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(b))",
      tutor: {
        whyCorrect:
          "Credentialing depends on truthful self-disclosure. When a clinician fails to disclose, the credentialing body needs to know why (oversight, misunderstanding, deliberate concealment) and what it means for ongoing privileges. The decision is the governing body's, informed by a focused review.",
        whyWrong: {
          A: "Settlement events are exactly the kind of information the credentialing process is designed to capture and evaluate.",
          C: "QAPI reporting is downstream; the immediate action is in the credentialing process.",
          D: "Legal review is appropriate but does not substitute for the credentialing-process decision.",
        },
        operationalContext:
          "Treat every NPDB query result that includes a previously undisclosed event as a stop-the-line moment. Document the discrepancy, request a written explanation from the clinician, request the underlying case file, perform a focused peer review, and present the matter to the MSC with a recommendation.",
      },
    },
    {
      id: "asc_cred_11",
      question:
        "A new physician requests privileges for endoscopy. The applicant's training included gastroenterology fellowship 12 years ago, but the applicant has been practicing exclusively in pain management for the past 8 years. What is the credentialing question?",
      options: [
        "Grant the privilege based on the fellowship training",
        "Recent activity is part of competency assessment; the credentialing committee should evaluate whether the applicant has maintained skills and consider FPPE, observed cases, or proctored experience before granting the privilege",
        "Deny outright — anyone who hasn't done a procedure in 8 years cannot be re-privileged",
        "Grant for one year only",
      ],
      correctIndex: 1,
      explanation:
        "Training is necessary but not sufficient. Recent activity (often defined as the past 12–24 months) is part of every competency assessment. An 8-year gap in endoscopy practice does not necessarily disqualify the applicant, but it requires evaluation: how does the applicant propose to demonstrate current competency? Observed cases? Proctored cases? Recertification training? The decision is criteria-based, not formulaic.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "Credentialing committees use 'criteria for privileges' that include training AND recent experience AND outcomes. When recent experience is missing, the committee imposes additional requirements: observed cases at another institution, formal proctorship for an extended FPPE period, or refresher training with documentation. The privilege is granted (or modified) only after the criteria are met.",
        whyWrong: {
          A: "Training alone does not address skill maintenance.",
          C: "Outright denial without considering remediation pathways is not the standard approach.",
          D: "Time-limited grants without an underlying competency demonstration just defer the question.",
        },
        operationalContext:
          "Maintain 'criteria for privileges' for each procedure category that explicitly include recent activity thresholds (e.g., 'minimum 25 cases in past 24 months OR completion of approved refresher program AND extended FPPE'). Apply uniformly.",
      },
    },
    {
      id: "asc_cred_12",
      question:
        "A surgeon resigns from the medical staff effective immediately. He has 3 cases scheduled in the next two weeks. What credentialing actions must occur?",
      options: [
        "Allow him to complete the 3 scheduled cases since they were already scheduled",
        "Privileges end at the effective resignation date; remove him from the active list, reassign or cancel his scheduled cases, and notify the OR scheduler and the MAR system to prevent any further activity",
        "Privileges end after a 30-day notice period regardless",
        "Privileges continue until the next governing body meeting",
      ],
      correctIndex: 1,
      explanation:
        "Privileges end when they end. A resignation effective immediately means the surgeon is no longer privileged at the ASC; any scheduled cases must be reassigned or cancelled. The OR scheduler, the medication administration system, and any other access controls must be updated immediately. Allowing 'just these few last cases' is operating without privileges.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(c))",
      tutor: {
        whyCorrect:
          "Privileges are a binary state: granted or not. Once a resignation is effective, the clinician has no authority to perform procedures at the ASC. The administrative cleanup (scheduling, EHR access, badge access) has to follow within hours, not weeks.",
        whyWrong: {
          A: "Convenience for the schedule does not extend privileges past their end date.",
          C: "There is no automatic 30-day extension; the resignation is effective when it is effective.",
          D: "Governing body meetings are not the trigger; the resignation date is.",
        },
        operationalContext:
          "Build a resignation/termination workflow: medical staff coordinator notifies OR scheduler, EHR admin, billing, badge access, parking, lab access, pharmacy, and the medical director within 1 business day. Reassign or cancel scheduled cases within 24 hours. Document the effective date and the access removals.",
      },
    },
    {
      id: "asc_cred_13",
      question:
        "An ASC has a written 'criteria for privileges' for cataract surgery requiring residency training, board certification or eligibility, and 50 cataract cases in the past 24 months. A new applicant has all elements EXCEPT she only documents 32 cases in the past 24 months. The MSC chair says, 'She's a great surgeon, let's grant the privilege anyway.' What is the issue?",
      options: [
        "No issue — the chair has discretion to override criteria",
        "Criteria for privileges, once adopted, must be applied uniformly; granting privileges that don't meet the criteria invalidates the criteria for everyone",
        "No issue if the applicant agrees to extra FPPE",
        "Issue only if the applicant is denied",
      ],
      correctIndex: 1,
      explanation:
        "Criteria for privileges are the standard the ASC has set for itself. If the criteria can be waived for one applicant, they have no force for any applicant. The defensible approach is either (1) hold the applicant to the 50-case standard with appropriate remediation pathway, or (2) formally amend the criteria through the medical staff committee and governing body to a defensible new threshold and apply uniformly.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "Criteria are how privileging defends itself against discrimination claims, against citation, and against patient harm. The chair's individual judgment cannot override criteria the medical staff and governing body have adopted. Either follow the criteria or change them through the process.",
        whyWrong: {
          A: "There is no individual override authority over written criteria.",
          C: "Extra FPPE may be appropriate but doesn't substitute for the volume threshold.",
          D: "The issue exists at the moment of granting the under-criteria privilege, not only at denial.",
        },
        operationalContext:
          "Print the 'criteria for privileges' for each procedure category and attach to every application. The MSC checks each criterion; any 'no' triggers a defined remediation pathway or a denial recommendation, not a discretionary waiver.",
      },
    },
    {
      id: "asc_cred_14",
      question:
        "A non-physician practitioner (CRNA) provides anesthesia services at the ASC. The CRNA's credentialing file has license, DEA, malpractice, education verification, and a job description on file. There is no documented privilege list. What is the gap?",
      options: [
        "No gap — CRNAs operate under a job description, not a privilege list",
        "All independent licensed practitioners (including CRNAs and other non-physician practitioners providing patient care) require a privilege list defining what they are authorized to do at the ASC, granted by the governing body",
        "No gap — anesthesia privileges are inherent in the CRNA license",
        "Gap only if the state requires physician supervision",
      ],
      correctIndex: 1,
      explanation:
        "Non-physician practitioners providing patient care at an ASC are subject to credentialing and privileging just like physicians. The privilege list defines what procedures and what scope of practice they are authorized to perform — anesthesia type, regional blocks, sedation supervision, monitored anesthesia care, etc. A job description is an HR document; it is not a privilege grant.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(a))",
      tutor: {
        whyCorrect:
          "Privileging applies to all independent licensed practitioners who provide patient care: physicians, dentists, oral surgeons, podiatrists, CRNAs, NPs, PAs, optometrists where applicable. The list defines the boundary of authorized practice at the ASC, granted by the governing body, and time-limited like physician privileges.",
        whyWrong: {
          A: "Job descriptions describe employment terms, not patient-care authorization.",
          C: "Licensure permits the practice generally; privileging authorizes the practice at this facility.",
          D: "State supervision rules and ASC privileging are independent issues. Both must be addressed.",
        },
        operationalContext:
          "Maintain a separate privilege catalog for non-physician practitioners by role (CRNA, NP, PA, etc.) with criteria specific to that role. Process applications, grant privileges through the governing body, and re-credential on the same cycle as physicians.",
      },
    },
    {
      id: "asc_cred_15",
      question:
        "The medical director identifies a clinician whose OPPE shows a sustained pattern of complications above the medical staff median. The medical director recommends focused review. The MSC declines, citing that the clinician brings high case volume and revenue. What is the governance and credentialing concern?",
      options: [
        "No concern — high-volume clinicians are valuable assets",
        "Patient safety concerns identified through OPPE must drive credentialing actions independent of revenue considerations; declining focused review for non-clinical reasons is a serious governance failure",
        "No concern if the complications are within national benchmarks",
        "Concern only if a patient files a complaint",
      ],
      correctIndex: 1,
      explanation:
        "OPPE exists to identify patterns that warrant focused attention. When the medical director identifies a pattern and recommends focused review, the MSC cannot decline on revenue grounds — that subordinates patient safety to financial interest, which is a fiduciary failure for the governing body and a credentialing process failure for the medical staff. The focused review must happen.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0091 (42 CFR 416.45(b))",
      tutor: {
        whyCorrect:
          "Credentialing processes have to be insulated from revenue pressure. The structure typically separates the credentialing committee from the financial committees of the governing body, and the bylaws explicitly authorize the MSC and medical director to act on patient safety information. When this firewall fails, the survey finding is significant and the legal exposure is large.",
        whyWrong: {
          A: "Volume and value do not insulate any clinician from review.",
          C: "Even within benchmarks, an internal pattern shift can warrant focused review.",
          D: "Patient complaints are one input; OPPE data is sufficient on its own.",
        },
        operationalContext:
          "Write the bylaws to require the MSC to act on medical director recommendations for focused review. Set a defined timeline (e.g., focused review must commence within 30 days of recommendation). Document every decision — to act or not act — with clinical reasoning, not financial reasoning.",
      },
    },
  ],
};
