import type { Level } from "./schema";

export const ascTeachingLevel: Level = {
  id: "asc_teaching_activities",
  module: "asc",
  name: "Teaching & Publication",
  description:
    "Written teaching agreements, student supervision policies, patient consent for trainees, and publication approval requirements.",
  icon: "GraduationCap",
  color: "hsl(160, 55%, 40%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "Teaching and Publication Activities",
    plainLanguageSummary:
      "Chapter 18 applies only to ASCs that have formal teaching arrangements with training institutions or whose staff engage in publishing activities related to patient care. The chapter is selective — if the ASC has no students, no residents, no fellows, and no publications, it does not apply. But if even one nursing school student rotates through the ASC for clinical hours, the full requirements of Standards A and B kick in: there must be a current, fully executed written agreement with the training institution covering six specific elements, and written policies must address how student identity is confirmed, orientation requirements, what 'close and adequate supervision' means in your setting, and how patients consent to student participation. Standard C applies separately when staff publish about cases or research — a written policy must specify what approvals are needed before a publication can be attributed to the ASC. Surveyors ask to see the agreement and the policies; they also check whether the patient consent form specifically references student or trainee involvement.",
    keyOperationalExpectations: [
      "A current, fully executed written agreement must exist with every training institution that sends students or trainees, covering all six required elements.",
      "Written policies must define how student identity is confirmed on arrival, orientation requirements, the standard for close and adequate supervision, and the patient consent process for student participation.",
      "Patient consent must specifically address trainee or student participation in or observation of care before that care begins.",
      "If staff publish clinical content, a written policy must specify what organizational approvals are required before publication.",
      "The agreement must specify HIPAA/FERPA training responsibilities and OSHA bloodborne pathogen training responsibilities for each party.",
      "Each student or trainee must sign an addendum to the teaching agreement accepting its terms.",
    ],
    commonRiskPoints: [
      "The written teaching agreement with the nursing school or residency program expired two years ago and was never renewed.",
      "The agreement covers the types of trainees and patient care involvement but does not address HIPAA/FERPA training responsibilities between the ASC and the school.",
      "The standard patient consent form does not mention student or trainee participation — patients are not being told a student will observe or assist.",
      "No written policy defines what 'close and adequate supervision' means in the ASC's OR or procedure areas.",
      "Staff publish case reports attributed to the ASC without any organizational review or approval process.",
    ],
    cmsTags: [
      "AAAHC Chapter 18 (Selective Standard — applies when teaching or publication activities are present)",
      "No specific CFR citation — AAAHC accreditation standard only",
    ],
  },
  studyMaterial: [
    {
      title: "What 6 Elements Must Every Teaching Agreement With a Training Institution Include?",
      content:
        "Standard A requires each teaching agreement to include: (1) a description of the types of students and/or postgraduate trainees eligible for the teaching experience, (2) a description of the extent of trainee involvement in patient care activities, (3) expectations regarding adherence to organizational policies and regulations, (4) whether liability coverage is required and if so the minimum amounts, (5) responsibilities of each party for HIPAA/FERPA training and OSHA bloodborne pathogen training, and (6) a requirement that each student or trainee signs an addendum accepting the agreement's terms.",
      keyPoint:
        "6 required elements in every teaching agreement: trainee types, care involvement, policy adherence, liability, HIPAA/OSHA training responsibilities, trainee addendum.",
      category: "number",
    },
    {
      title: "What Must Written Policies for Teaching Activities Address?",
      content:
        "Standard B requires written policies covering: (1) how the identity of the person arriving for training is confirmed, (2) orientation and other training requirements, (3) a definition of 'close and adequate supervision' for student/trainee health care activities, and (4) the process for obtaining patient consent for student or trainee participation in or observation of care. All four elements must be covered — a general orientation checklist without a supervision definition or consent process does not satisfy the standard.",
      keyPoint:
        "Teaching policies must address 4 things: identity confirmation, orientation, supervision definition, and patient consent process.",
      category: "number",
    },
    {
      title: "What Does 'Close and Adequate Supervision' Mean in the Context of Teaching?",
      content:
        "The AAAHC standards require the ASC's written policies to define what 'close and adequate supervision' means in their specific setting. This is not a nationally standardized definition — the ASC must operationalize it: who must be physically present during a trainee's patient care activities, what the trainee may not do without direct oversight, and how supervision is documented. Vague language like 'supervisory staff are present' without specific parameters does not satisfy the requirement for a definition.",
      keyPoint:
        "Your written policy must define 'close and adequate supervision' — specific, not vague. Who must be present, what trainee may and may not do.",
      category: "rule",
    },
    {
      title: "What Must Patients Be Told Before a Student or Trainee Is Involved in Their Care?",
      content:
        "Standard B requires a documented process for obtaining patient consent for student or trainee participation in or observation of patient care. This means the standard consent form — or a separate addendum — must specifically disclose that a student or trainee will participate or observe, and the patient must agree before care begins. Generic 'I consent to treatment' language does not cover student involvement. If a patient declines, the trainee may not participate in that patient's care.",
      keyPoint:
        "Patient consent must specifically address trainee participation or observation — before care begins. Generic consent is not sufficient.",
      category: "rule",
    },
    {
      title: "When Is a Publication Approval Policy Required?",
      content:
        "Standard C requires a written policy specifying what approvals are needed, if any, for publications attributed to or resulting from care provided by the ASC — whenever staff are involved in publishing. This applies to case reports, journal articles, book chapters, presentations, and similar materials. The policy must name the approval authority (governing body, medical director, legal review, etc.) and the process. If the ASC's staff never publish, the standard does not apply — but the ASC must be able to confirm that with certainty.",
      keyPoint:
        "If staff publish content from patient care, a written policy is required naming the approval authority and process.",
      category: "rule",
    },
    {
      title: "Who Must Sign an Addendum to the Teaching Agreement and What Does It Cover?",
      content:
        "Standard A element 6 requires that each individual student or postgraduate trainee sign an addendum to the teaching agreement accepting its terms and conditions. The addendum is not the same as an orientation checklist or a general policy acknowledgment — it is a binding acceptance of the teaching agreement itself. The signed addendum must be on file. A class-level or cohort-level signature does not satisfy the individual-level requirement.",
      keyPoint:
        "Every individual student and trainee must sign their own addendum to the teaching agreement — not a class list or group acknowledgment.",
      category: "rule",
    },
  ],
  questions: [
    {
      id: "asc_teach_01",
      question:
        "An ASC has a clinical rotation agreement with a local nursing school. A surveyor asks to see the written agreement. The administrator produces a document signed two years ago that covers trainee types and patient care involvement but has no mention of HIPAA/FERPA training responsibilities or OSHA bloodborne pathogen training responsibilities. What is the finding?",
      options: [
        "No finding — HIPAA training is the school's responsibility by law; the agreement does not need to address it",
        "Standard-level finding — Standard A requires each teaching agreement to address responsibilities for HIPAA/FERPA training and OSHA bloodborne pathogen training; their absence is a citation",
        "No finding — the two elements present are sufficient for substantial compliance",
        "Advisory only — HIPAA/OSHA elements are recommended but not required by AAAHC",
      ],
      correctIndex: 1,
      explanation:
        "Standard A specifies six required elements for teaching agreements, including element 5: responsibilities of each party for HIPAA/FERPA training and OSHA bloodborne pathogen training. An agreement missing this element is incomplete and non-compliant regardless of how many other elements are present. The standard requires all six elements — not a majority.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 18, Standard A",
      tutor: {
        whyCorrect:
          "The six elements in Standard A are a checklist — all are required. Missing training responsibility language creates ambiguity about whether students receive required HIPAA and bloodborne pathogen training before entering the clinical environment.",
        whyWrong: {
          A: "While HIPAA training may be the school's responsibility, the agreement must document that allocation of responsibility explicitly.",
          C: "Substantial compliance is not the standard — all six elements must be present.",
          D: "HIPAA/OSHA training responsibilities are explicitly required elements under Standard A, not recommendations.",
        },
        operationalContext:
          "Use a teaching agreement template that has all six Standard A elements as labeled sections. Review every active agreement annually against the template and require reexecution when any required element is missing or the agreement expires.",
      },
    },
    {
      id: "asc_teach_02",
      question:
        "A surgical nursing student is rotating through an ASC. A surveyor reviews the consent form signed by the first patient of the day. The form covers surgical risks, anesthesia, and privacy rights, but does not mention student or trainee participation. The student observed the procedure. What is the compliance issue?",
      options: [
        "No issue — general surgical consent covers all personnel in the operating room",
        "Standard-level finding — Standard B requires the patient consent process to specifically address trainee participation or observation; a general surgical consent form does not satisfy this requirement",
        "No issue — nursing students observing (not participating in) procedures are exempt from consent requirements",
        "No issue — the patient had the right to ask who was in the room; that satisfies the disclosure requirement",
      ],
      correctIndex: 1,
      explanation:
        "Standard B element 4 requires a documented process for obtaining patient consent specifically for student or trainee participation in or observation of care. Generic surgical consent does not satisfy this — patients must be explicitly informed of and consent to trainee involvement before care begins. The standard applies to both participation and observation.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 18, Standard B",
      tutor: {
        whyCorrect:
          "Informed consent for trainee involvement is a distinct patient right. Patients have the right to know who is present and participating in their care and to decline trainee involvement without affecting the quality of their treatment.",
        whyWrong: {
          A: "General surgical consent covers the procedure and risks — it does not, by implication, cover trainee participation.",
          C: "The standard applies to both participation and observation.",
          D: "Placing the burden of discovery on the patient ('they could have asked') inverts the informed consent process.",
        },
        operationalContext:
          "Add a trainee disclosure section to the consent form or create a one-sentence addendum: 'A [student/resident] may be present to observe or assist under direct supervision. I may decline this without affecting my care.' Obtain the patient's signature on this element separately.",
      },
    },
    {
      id: "asc_teach_03",
      question:
        "An ASC's written teaching policy states: 'All students are supervised by clinical staff at all times.' A surveyor asks the director of nursing what 'close and adequate supervision' means specifically in the OR during a procedure. The director says, 'It means a staff member is there.' What is the issue?",
      options: [
        "No issue — the policy and the answer confirm supervision is maintained",
        "Standard-level finding — Standard B requires written policies to include a definition of 'close and adequate supervision'; 'a staff member is there' is not a definition — it is a presence statement",
        "No issue — supervision definitions are determined by the training institution, not the ASC",
        "No issue — the standard only requires a supervision definition for physician residents, not nursing students",
      ],
      correctIndex: 1,
      explanation:
        "Standard B element 3 requires written policies addressing the provision of health care by students or trainees to include a definition of 'close and adequate supervision.' A definition specifies parameters — who must be physically present, what the trainee may and may not do independently, how supervision is documented. 'A staff member is there' is a presence requirement, not a supervision definition.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 18, Standard B",
      tutor: {
        whyCorrect:
          "The supervision definition must be operational — specific enough that any staff member reading it knows exactly what is required. Vague presence language leaves too much to interpretation and fails to protect patients.",
        whyWrong: {
          A: "The policy and the verbal answer describe presence, not supervision parameters. A definition requires specificity.",
          C: "The ASC is responsible for defining supervision in its own setting, not the training institution.",
          D: "Standard B applies to all students and postgraduate trainees — not only physician residents.",
        },
        operationalContext:
          "Define 'close and adequate supervision' in your policy as: the supervising licensed [RN/physician] must be physically present in the same room during any patient care activity by the trainee, may not delegate without being present, and must co-sign any clinical documentation by the trainee.",
      },
    },
    {
      id: "asc_teach_04",
      question:
        "A physician at an ASC publishes a case report in a surgical journal about a procedure performed at the facility. The ASC has no written policy on publication approvals. The physician says, 'I published it independently — it has nothing to do with the ASC.' Is there a compliance issue?",
      options: [
        "No issue — independently published case reports by physicians are personal academic activities outside the ASC's scope",
        "Standard-level finding — Standard C requires a written policy specifying publication approvals when staff publish content attributed to or resulting from care provided by the ASC; a case report from an ASC procedure is within scope",
        "No issue — Standard C only applies to research publications, not case reports",
        "No issue — publication policies are required only if the governing body chooses to adopt one",
      ],
      correctIndex: 1,
      explanation:
        "Standard C applies when staff publish content 'attributed to or resulting from care provided by the organization.' A case report about a procedure performed at the ASC directly results from care provided there — regardless of how the physician characterizes the independence of the work. The ASC must have a written policy specifying what organizational approvals (if any) are required. The policy may conclude no approval is needed, but that determination must be documented.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 18, Standard C",
      tutor: {
        whyCorrect:
          "A case report documenting a procedure performed at the ASC involves patient information, the ASC's environment, and the ASC's clinical practices — it is exactly what Standard C is designed to address, even when the physician frames it as an independent academic activity.",
        whyWrong: {
          A: "The publication's subject matter — care provided at the ASC — brings it within Standard C's scope regardless of the physician's intent.",
          C: "Standard C applies to publications generally, not only research publications.",
          D: "Standard C is a compliance requirement, not an optional governance choice.",
        },
        operationalContext:
          "Adopt a one-page publication policy that names the approval authority (e.g., medical director review, governing body notification), specifies HIPAA de-identification requirements, and requires a legal review for any publication involving identifiable patient data.",
      },
    },
    {
      id: "asc_teach_05",
      question:
        "A nursing school sends eight students for a semester-long rotation. The ASC has a signed teaching agreement with the school. A surveyor asks to see the individual student addenda signed by each student accepting the agreement's terms. The administrator produces the class roster with one faculty signature. What is the finding?",
      options: [
        "No finding — the faculty signature on the class roster represents the student cohort and satisfies the requirement",
        "Standard-level finding — Standard A element 6 requires each individual student to sign an addendum to the teaching agreement; a group or faculty signature does not satisfy the individual-level requirement",
        "No finding — addenda are the training institution's responsibility, not the ASC's",
        "No finding — addenda are only required for postgraduate trainees (residents, fellows), not undergraduate students",
      ],
      correctIndex: 1,
      explanation:
        "Standard A element 6 specifically states that 'each student or postgraduate trainee' must sign an addendum to the teaching agreement accepting its terms. The requirement is individual — every person who rotates must have a signed addendum on file. A class roster with a single faculty signature does not constitute individual acceptance by each student.",
      xpReward: 15,
      isSwipe: false,
      cmsTag: "AAAHC Chapter 18, Standard A",
      tutor: {
        whyCorrect:
          "Individual addenda create individual accountability — each student has personally agreed to abide by ASC policies, confidentiality requirements, and supervision expectations. A group signature has no individual accountability.",
        whyWrong: {
          A: "A faculty signature on a class roster is not the same as an individual student signing a legal addendum to the agreement.",
          C: "The responsibility for collecting signed addenda falls to the ASC, which must have them on file for survey.",
          D: "The standard says 'each student or postgraduate trainee' — both categories are covered.",
        },
        operationalContext:
          "Before a rotation begins, send each student the addendum electronically and require a signed return before their first day. Keep the signed addenda in a rotation file associated with the teaching agreement and the semester. Audit the file before the rotation ends to confirm all eight signatures are present.",
      },
    },
  ],
};
