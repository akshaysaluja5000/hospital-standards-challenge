import type { Level } from "./schema";

export const ascImagingLevel: Level = {
  id: "asc_imaging_services",
  module: "asc",
  name: "Diagnostic Imaging Services",
  description:
    "Qualified direction, radiation safety, imaging documentation, equipment policies, and MRI warning requirements for ASC imaging.",
  icon: "Scan",
  color: "hsl(25, 70%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Diagnostic and Other Imaging Services",
    plainLanguageSummary:
      "Chapter 13 applies to any ASC that uses imaging — fluoroscopy in the OR, C-arm guidance for orthopedic procedures, ultrasound for nerve blocks, or a dedicated diagnostic imaging suite. Whether the imaging is peri-operative or diagnostic, the ASC must have a governing-body-appointed qualified director, written safety and hazard-management policies, trained and credentialed personnel, and systems that produce authenticated, documented, and retained imaging reports and images. If the ASC provides diagnostic (non-peri-operative) imaging, additional requirements apply: a physician or dentist must direct the service, tests must be ordered before they are performed, reports must be authenticated by a radiologist or privileged specialist, and images must be retained per policy and law. MRI, if used, requires four specific categories of warning signs. Surveyors walk the imaging area and look at policies, credentials files, equipment maintenance logs, and whether warning signs are physically posted.",
    keyOperationalExpectations: [
      "The governing body must formally appoint a qualified individual (per state law and ASC policy) to be responsible for all radiologic services.",
      "Only personnel designated as qualified by the medical staff may operate radiologic equipment and administer procedures.",
      "Copies of reports and printouts must be maintained for at least five years; films, scans, and other image records must also be retained at least five years.",
      "Written policies must address safety precautions for electrical, mechanical, magnetic, radiation, and other hazards, including calibration schedules and protective equipment testing.",
      "For diagnostic imaging (non-peri-operative), tests must be ordered by a health care professional with the reason documented, and authenticated reports must be placed in the patient's clinical record.",
      "When MRI is used, four categories of warning signs must be physically posted.",
    ],
    commonRiskPoints: [
      "The governing body has never formally appointed a radiology director — there is a de facto person but no documentation of the designation.",
      "C-arm or fluoroscopy equipment has no maintenance or calibration log, or the log shows calibration is overdue.",
      "Radiation exposure is monitored for some personnel but dosimetry records are incomplete or have gaps.",
      "MRI warning signs are posted but do not cover all four required patient/personnel categories.",
      "Diagnostic imaging reports are in the chart but lack a radiologist or specialist authentication signature.",
    ],
    cmsTags: [
      "42 CFR 416.49",
      "42 CFR 416.49(b)(1)",
      "42 CFR 416.49(b)(2)",
      "Q-0200 (CfC — Laboratory and Radiologic Services)",
      "Q-0202, Q-0203, Q-0204",
    ],
  },
  studyMaterial: [
    {
      title: "Who Must the Governing Body Appoint to Be Responsible for Radiologic Services?",
      content:
        "Standard B (42 CFR 416.49(b)(2)) requires the governing body to appoint an individual qualified in accordance with state law and ASC policies who is responsible for ensuring all radiologic services are provided in compliance with this section. This must be a formal appointment — documented in governing body minutes or a designation letter — not an informal assumption that the radiologist on call 'covers it.' The appointed individual is accountable for policy compliance, personnel qualifications, and equipment safety.",
      keyPoint:
        "Governing body must formally appoint a qualified, documented radiology director. Informal assumptions do not satisfy Standard B.",
      category: "rule",
    },
    {
      title: "How Long Must Radiologic Reports and Images Be Retained?",
      content:
        "Under Standard D (42 CFR 416.49(b)(1) cross-referencing CMS Hospital CoP 482.26): copies of reports and printouts must be maintained for at least five years, and films, scans, and other image records must also be maintained for at least five years. State law may require longer retention. A policy must address both storage location and retention period, and images must be readily accessible for the required retention period.",
      keyPoint:
        "Reports and images: minimum 5-year retention. State law may be longer. Policy must address storage and accessibility.",
      category: "number",
    },
    {
      title: "What Must Written Safety Policies for Imaging Services Address?",
      content:
        "Standard G requires written policies that address: (1) precautions to safeguard against electrical, mechanical, magnetic, radiation, and other potential hazards, and (2) periodic evaluation by qualified personnel of energy sources and all safety measures, including equipment calibration and testing of personal protective devices, in compliance with federal, state, and local laws. Standard H adds policies for hazardous energy source management, shielding requirements, accidental exposure procedures, and radiation exposure monitoring records.",
      keyPoint:
        "Safety policies must cover all hazard types (electrical, mechanical, magnetic, radiation) plus periodic evaluation, calibration, and PPE testing.",
      category: "rule",
    },
    {
      title: "What Warning Signs Are Required When MRI Is Conducted?",
      content:
        "Standard N requires four categories of warning signs when MRI is used: (1) Signs warning patients and personnel with metal implants. (2) Signs warning those with magnetically inscribed credit cards, ID cards, or similar items. (3) Signs warning those wearing metallic objects capable of potentially dangerous motion. (4) Signs warning those with pacemakers, internal defibrillators, cochlear implants, cardiac stents, insulin pumps, or nerve stimulators. All four categories must be addressed — a general 'No Metal' sign does not satisfy the specificity requirement.",
      keyPoint:
        "MRI warning signs must cover 4 categories: metal implants, magnetic cards, metallic objects in motion, and electronic implanted devices.",
      category: "number",
    },
    {
      title: "What Are the Documentation Requirements for Diagnostic Imaging Tests?",
      content:
        "Standard L applies to diagnostic (non-peri-operative) imaging: (1) tests must be ordered by a health care professional, (2) the order must include the reason for the examination, (3) a radiologist must authenticate all examination reports — or the governing body may designate specialist physicians or dentists to authenticate specific procedures for which they have been granted privileges, and (4) authenticated, dated reports must be filed in the patient's clinical record. An undated, unauthenticated image in the chart is a direct citation.",
      keyPoint:
        "Diagnostic imaging: order with reason + radiologist or privileged physician authentication + dated report in chart. All four.",
      category: "rule",
    },
    {
      title: "What Credentials and Privileges Are Required for Imaging Personnel?",
      content:
        "Standard E requires that health care professionals providing imaging services or interpreting results be appropriately trained and privileged, evidenced by: (1) credentials files documenting training and credentials, (2) evidence of granted privileges for imaging services or job descriptions containing those duties, and (3) completed appropriate safety training. Observing someone perform fluoroscopy without checking for documented credentials and privileges is itself a finding waiting to happen.",
      keyPoint:
        "Imaging personnel: documented credentials + granted privileges (or job description) + safety training. All three in the file.",
      category: "rule",
    },
    {
      title: "What Happens When Radiation Exposure Is Not Monitored?",
      content:
        "Standard H addresses radiation exposure monitoring: if radiation exposure is monitored, appropriate exposure records must be maintained. If exposure is not monitored, there must be documentation within the organization supporting that decision. The decision not to monitor requires a defensible rationale — typically a radiation safety officer or qualified physicist's assessment that the type and volume of procedures does not warrant monitoring. 'We never thought about it' is not sufficient justification.",
      keyPoint:
        "Monitor radiation and keep records, OR document the reasoned decision not to monitor. Either way, something must be on file.",
      category: "rule",
    },
    {
      title: "What Is Required Regarding Patient Involvement in Imaging Site Identification?",
      content:
        "Standard J requires documentation that patients are involved in identifying the correct site to be imaged. This parallels the surgical site marking requirement — before an imaging procedure that has laterality or site-specificity (e.g., right knee MRI, left shoulder X-ray), the patient must be involved in confirming the correct site, and that involvement must be documented. This applies to diagnostic imaging services, not routine peri-operative imaging where the surgical site is already marked.",
      keyPoint:
        "Document patient participation in imaging site identification — parallels the surgical site marking process for imaging.",
      category: "rule",
    },
  ],
  questions: [
    {
      id: "asc_imag_01",
      question:
        "An ASC uses a C-arm for fluoroscopic guidance during orthopedic procedures. A surveyor asks to see the governing body appointment for the radiology director. The administrator says, 'The orthopedic surgeon handles all of that — it's always been understood.' Is there a finding?",
      options: [
        "No finding — the surgeon's active use of the C-arm constitutes implied appointment",
        "Standard-level finding — Standard B requires the governing body to formally appoint a qualified, documented radiology director; an informal understanding does not comply",
        "No finding — peri-operative fluoroscopy is exempt from the director appointment requirement",
        "No finding — the standard only applies to ASCs with dedicated diagnostic imaging suites",
      ],
      correctIndex: 1,
      explanation:
        "42 CFR 416.49(b)(2) and Standard B require a formal governing body appointment of a qualified individual responsible for radiologic services. Informal assumptions — even when the person is highly capable — do not constitute the required formal designation. The appointment must be documented, and the designated individual must have defined responsibilities.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Q-0204 (42 CFR 416.49(b)(2))",
      tutor: {
        whyCorrect:
          "Formal governing body appointment creates accountability. Without it, there is no defined responsible party when something goes wrong — which is exactly the gap the standard is designed to close.",
        whyWrong: {
          A: "Using equipment is not the same as being formally designated to ensure the entire radiology program complies with regulations.",
          C: "The standard applies to all radiologic services used by the ASC, including peri-operative fluoroscopy.",
          D: "The standard applies when any radiologic service is utilized, not only when a dedicated suite is present.",
        },
        operationalContext:
          "Issue a one-paragraph governing body letter designating the responsible physician, describing the scope (policy oversight, staff qualification review, equipment safety), signed by the governing body chair, and filed in both the physician's credentials file and the governance records.",
      },
    },
    {
      id: "asc_imag_02",
      question:
        "An ASC performs diagnostic MRI. During the survey, the surveyor examines the warning signs posted at the MRI suite entrance. Signs are present for patients with metal implants, those with magnetically inscribed cards, and those wearing metallic objects. No sign addresses patients with pacemakers, cochlear implants, or other electronic devices. What is the finding?",
      options: [
        "No finding — the three posted signs substantially cover the main hazards",
        "Standard-level finding — Standard N requires all four specified categories of warning signs; the missing category for electronic implanted devices is a citation",
        "Advisory only — the fourth sign is recommended but not required if the intake process screens for devices",
        "No finding — the requirement for electronic device signs only applies to facilities performing cardiac MRI",
      ],
      correctIndex: 1,
      explanation:
        "Standard N specifies four distinct categories of required warning signs when MRI is conducted. All four must be present: metal implants, magnetically inscribed items, metallic objects capable of dangerous motion, and electronic implanted devices (pacemakers, defibrillators, cochlear implants, cardiac stents, insulin pumps, nerve stimulators). Missing even one category is a finding.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 13, Standard N",
      tutor: {
        whyCorrect:
          "Standard N lists four categories explicitly because each represents a distinct type of hazard. The electronic device category is critical — patients with pacemakers in an MRI field face a life-threatening risk, and the warning sign is the first line of defense.",
        whyWrong: {
          A: "Three of four is not full compliance — the standard lists four categories, all required.",
          C: "The warning signs are not a substitute for screening; they are a required posting regardless of intake processes.",
          D: "The requirement applies to all ASCs conducting MRI, not just cardiac imaging centers.",
        },
        operationalContext:
          "Walk the MRI zone entrance before every survey and verify all four sign categories are posted, visible, and legible. Use a laminated checklist on the door to confirm each category is covered.",
      },
    },
    {
      id: "asc_imag_03",
      question:
        "An ASC provides diagnostic X-ray services. A surveyor reviews five imaging reports in the clinical records. All five reports are in the chart, but none are signed or initialed by a radiologist or physician. The imaging tech says, 'The ordering surgeon reviews them verbally.' What is the compliance issue?",
      options: [
        "No issue — surgeons reviewing their own imaging orders satisfies Standard L",
        "Standard-level finding — Standard L requires authenticated, dated reports from a radiologist or governing-body-privileged physician placed in the clinical record; verbal review does not satisfy this",
        "No issue — authentication is only required for MRI and CT reports",
        "No issue — the standard allows the imaging tech to authenticate reports when the ordering provider is not available",
      ],
      correctIndex: 1,
      explanation:
        "Standard L requires that diagnostic imaging reports be authenticated — either by a radiologist, or by a specialist physician or dentist specifically granted privileges by the governing body for that purpose — and the authenticated, dated report must be placed in the patient's clinical record. Verbal review by the ordering surgeon without a documented authentication signature does not satisfy this requirement.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 13, Standard L",
      tutor: {
        whyCorrect:
          "Authentication creates the formal interpretive record. Without an authenticated report, there is no documented clinical interpretation — only an image with no accountable professional interpretation on file.",
        whyWrong: {
          A: "The ordering surgeon reviewing their own image verbally does not produce the authenticated, dated report required by Standard L.",
          C: "Standard L applies to diagnostic imaging generally, not only specific modalities.",
          D: "Imaging technicians are not authorized to authenticate diagnostic imaging reports.",
        },
        operationalContext:
          "Establish a turnaround time standard for radiology reads (e.g., 24–48 hours) and build a workflow that gets the authenticated report back into the chart within that window. Configure the EMR to flag imaging records with no authentication after the target period.",
      },
    },
    {
      id: "asc_imag_04",
      question:
        "An ASC uses a mobile fluoroscopy unit. A surveyor reviews the equipment file and finds no calibration records for the past 18 months. The biomed technician says, 'The unit seems to be working fine.' What is the finding under Standard G?",
      options: [
        "No finding — calibration is only required when equipment malfunction is suspected",
        "Standard-level finding — Standard G requires periodic evaluation and calibration of imaging equipment by qualified personnel, with documentation; absence of calibration records is non-compliant",
        "No finding — mobile units are exempt from calibration requirements",
        "Advisory only — surveyors note calibration gaps but only cite if a patient was harmed",
      ],
      correctIndex: 1,
      explanation:
        "Standard G requires written policies mandating periodic evaluation by qualified personnel of energy sources and all safety measures, including calibration of equipment. The absence of calibration records for 18 months — regardless of whether the unit 'seems fine' — is direct evidence that the required evaluation is not occurring. Functional appearance is not a substitute for documented, scheduled calibration.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 13, Standard G",
      tutor: {
        whyCorrect:
          "Calibration records are both a patient safety safeguard (ensuring the unit delivers accurate dose and correct image) and a regulatory requirement. 'It seems fine' is anecdotal; periodic calibration by qualified personnel is the standard.",
        whyWrong: {
          A: "Calibration is required on a defined schedule, not only when problems are suspected.",
          C: "Mobile units are subject to the same calibration and safety standards as fixed units.",
          D: "Patient harm is not the threshold for a citation under Standard G.",
        },
        operationalContext:
          "Establish a preventive maintenance schedule for all imaging equipment with a biomed or vendor service agreement. Keep the calibration certificates in the equipment file. Add calibration due dates to your facility's PM sticker and tracking system.",
      },
    },
    {
      id: "asc_imag_05",
      question:
        "An ASC performs diagnostic ultrasound for vascular imaging. A technologist who has been performing the studies for two years is found to have no documented credentials, no privileging record, and no evidence of safety training in her personnel file. What is the finding?",
      options: [
        "No finding — experience is sufficient evidence of competency",
        "Standard-level finding — Standard E requires credentials files with documented training, evidence of granted privileges or job description covering the duties, and documented safety training for imaging personnel",
        "No finding — credentials requirements apply only to physicians, not technologists",
        "No finding — standard only applies if the technologist interprets results, not just performs studies",
      ],
      correctIndex: 1,
      explanation:
        "Standard E requires all health care professionals providing imaging services — including technologists — to have three things documented: (1) credentials and training documented in a personnel or credentials file, (2) evidence of granted privileges or a job description covering imaging duties, and (3) completion of appropriate safety training. Two years of undocumented experience does not satisfy any of these three requirements.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "Chapter 13, Standard E",
      tutor: {
        whyCorrect:
          "Standard E explicitly covers personnel who 'provide imaging services' — not just those who interpret results. Technologists performing ultrasound are directly within scope.",
        whyWrong: {
          A: "Experience without documentation is invisible to a surveyor. Only documented credentials and training satisfy the standard.",
          C: "Standard E covers all health care professionals providing imaging services, including technologists.",
          D: "The standard covers both performance and interpretation of imaging services.",
        },
        operationalContext:
          "Build a personnel file checklist for imaging staff that requires: licensure/certification documents, training records, privileging or job description, and safety training completion. Complete a file audit for all imaging staff before your next survey.",
      },
    },
  ],
};
