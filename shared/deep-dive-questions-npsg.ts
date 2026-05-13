import type { DeepDiveLevel } from "./schema";

export const ddNpsgLevel: DeepDiveLevel = {
  id: "dd-npsg",
  name: "National Performance Goals (NPGs) Deep Dive",
  description: "Expert-level scenarios on patient identification failures, alarm fatigue, anticoagulant safety, suicide risk screening, and systemic handoff failures. Effective Jan 1, 2026, NPSGs are now National Performance Goals (NPGs).",
  icon: "Microscope",
  color: "hsl(271, 76%, 53%)",
  baseLevelId: "npsg",
  questions: [
    {
      id: "dd-npsg1",
      baseQuestion: "A wrong-patient medication event is analyzed. The root cause: two patients with similar last names were in adjacent rooms. The nurse scanned the correct medication barcode but never scanned the patient's wristband. The barcode medication administration system allowed administration without the patient scan because the patient scan step had been disabled by IT to 'reduce alert fatigue.' What systemic failure does this reveal?",
      baseOptions: [
        "Individual nurse failure — the scan sequence is a nursing responsibility and the nurse should have followed the correct order regardless of system configuration",
        "A systemic failure in which a patient safety technology (barcode MAR) was deliberately configured to bypass a required safety step, eliminating a primary defense against wrong-patient errors",
        "An IT configuration error that is secondary to the primary cause — the nurse's failure to manually verify patient identity",
        "No systemic failure — wrong-patient events occur even with functioning barcode systems and the event was statistically expected"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Disabling the patient scan step in a barcode medication administration system eliminates the primary technology-based patient identification safeguard. This is a systemic failure — a safety technology was deliberately modified to reduce alerts in a way that created a direct patient harm pathway. The individual nurse's action occurred within a system that had removed a protective barrier.",
      baseXp: 20,
      followUps: [
        {
          question: "Following the event, the quality team discovers that 12 other hospitals in the system have also disabled the patient wristband scan step in their barcode MAR systems for the same reason. Leadership wants to re-enable the step system-wide but nursing directors warn it will increase alert burden by approximately 400 additional alerts per shift per unit. How should leadership balance the competing concerns?",
          options: [
            "Restore the patient scan requirement across all facilities — alert burden must be managed through education and compliance enforcement, not through disabling safety features",
            "The immediate action is to restore the patient scan requirement system-wide and simultaneously form an interprofessional team to address the root cause of alert fatigue through alert optimization — reducing non-actionable alerts, improving wristband readability, and streamlining the scan workflow rather than disabling the safety step",
            "Allow each hospital to decide independently based on their error rate and nursing preference",
            "Keep the patient scan disabled but implement a manual two-identifier policy that compensates for the missing technology step"
          ],
          correctIndex: 1,
          explanation: "Restoring the safety requirement is non-negotiable — the scan step is a primary defense against wrong-patient medication errors and cannot remain disabled. However, the alert fatigue concern is real and valid. The solution is to fix the underlying cause of the alert burden: wristband readability, scanner calibration, workflow design, and alert optimization. The two actions must happen simultaneously — restore the safety step immediately, and in parallel fix what was causing the burden that led to the unsafe configuration change.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg2",
      baseQuestion: "A cardiac unit's alarm management audit reveals 387 monitor alarms per patient per day, with nursing response occurring for fewer than 12% of alarms. Staff have developed a pattern of silencing alarms without patient assessment. Three weeks later, a patient dies after a fatal arrhythmia went undetected for 6 minutes while the alarm was silenced. What does NPG 1 / formerly NPSG.06.01.01 require the facility to do after this event?",
      baseOptions: [
        "Discipline the staff members who silenced the alarm without assessing the patient",
        "Conduct a sentinel event review, analyze the alarm management system as a root cause, implement individualized alarm parameter policies, and establish ongoing alarm response metrics with leadership reporting",
        "Replace the monitor equipment with a newer system that cannot be silenced without entering a clinical justification",
        "Implement a policy requiring two-nurse cosign to silence any cardiac monitor alarm"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A patient death potentially related to alarm fatigue is a sentinel event. NPG 1 / formerly NPSG.06.01.01 requires not just individual accountability but systemic response: root cause analysis of the alarm environment, individualized parameter setting, improved alarm response protocols, and ongoing monitoring of alarm response metrics. 387 alarms per patient per day is a system-level problem requiring a system-level solution.",
      baseXp: 20,
      followUps: [
        {
          question: "The unit implements individualized alarm parameters for all patients. Three months later, a quality audit shows the average alarms per patient per day dropped to 94 — but nursing response to alarms remained at 18%, still well below expectations. What does this persistent gap indicate and what additional intervention is needed?",
          options: [
            "A 75% reduction in alarm volume is a success — 18% response rate is an acceptable outcome when alarm volume is reduced",
            "The persistent low response rate despite lower alarm volume indicates that alarm fatigue has created a deeply embedded behavioral pattern — individualized parameters alone are insufficient; additional interventions needed include role clarity for alarm response, real-time monitoring of response rates, leadership accountability structures, and potentially cultural change work addressing the normalization of ignoring alarms",
            "Reducing alarms further to below 50 per patient per day will drive response rates above 50% automatically — additional behavioral interventions are not needed",
            "The 18% response rate suggests the remaining alarms are predominantly non-actionable — further alarm reduction is the only needed intervention"
          ],
          correctIndex: 1,
          explanation: "Alarm fatigue creates conditioned behavioral responses — staff have learned over time that alarms do not require response. Parameter optimization removes non-actionable alarms but does not automatically reverse deeply embedded behavioral habits. Sustained improvement requires multiple simultaneous interventions: clear role definitions for who responds to which alarm, real-time feedback loops, leadership visibility into response data, simulation training on high-priority alarm recognition, and culture work that re-establishes alarm response as a non-negotiable professional expectation.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg3",
      baseQuestion: "A hospital screens all inpatients for suicide risk using the Columbia Suicide Severity Rating Scale. A medical-surgical patient screens positive with recent ideation and a prior attempt. The nurse notifies the physician, who orders a one-to-one sitter. No environmental modifications are made to the room. Three days later, the patient uses a ligature point in the bathroom. What NPG 8 / formerly NPSG.15.01.01 requirement was not fully implemented?",
      baseOptions: [
        "The sitter should have been positioned inside the bathroom during all bathroom use",
        "Environmental safety modifications — removing ligature risks from the patient's room and bathroom — are a required component of the NPSG suicide risk response, not just a one-to-one sitter",
        "A psychiatric consult was required before any safety measures were implemented",
        "The screening tool was administered incorrectly — a positive screen in a medical-surgical patient should be repeated before safety measures are initiated"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NPG 8 / formerly NPSG.15.01.01 requires three responses to a positive suicide screen: safety assessment, care plan, and environmental modifications. Environmental modifications include removing or securing potential ligature points — shower curtain rods, IV pole hooks, door handles, call light cords. A sitter without environmental modifications leaves available means in the patient's immediate environment.",
      baseXp: 20,
      followUps: [
        {
          question: "After the event, the quality team learns that the medical-surgical unit has never performed a formal environmental risk assessment for ligature points. The unit director argues that a full ligature-risk environmental mitigation is only required in behavioral health units, not in medical-surgical rooms. Is this reasoning correct, and what does JC require?",
          options: [
            "Correct — ligature-risk assessments and mitigations are explicitly limited to behavioral health environments under NPG 8",
            "Incorrect — NPG 8 / formerly NPSG.15.01.01 applies to all hospital patients who screen positive for suicide risk, regardless of unit type. Medical-surgical units must be able to perform environmental modifications for high-risk patients, even if they cannot achieve the full mitigation standard of a dedicated behavioral health unit. A formal environmental assessment of all patient care areas for mitigation options is required",
            "Partially correct — medical-surgical units only need to address ligature risks in bathrooms, not in the main patient room",
            "Incorrect — but ligature risk remediation in medical-surgical rooms is only required during active psychiatric holds, not for voluntary patients who screen positive on a screening tool"
          ],
          correctIndex: 1,
          explanation: "NPG 8 / formerly NPSG.15.01.01 does not limit its scope to psychiatric units. All hospital patients who screen positive for suicide risk must receive appropriate safety measures, including feasible environmental modifications. JC recognizes that medical-surgical units cannot achieve the full environmental safety standard of a locked behavioral health unit, but they must conduct a formal environmental risk assessment and implement all feasible modifications — removing unnecessary hooks, securing IV poles, replacing breakaway shower rods — for patients identified as high risk.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg4",
      baseQuestion: "A quality improvement team analyzes medication reconciliation data and finds that 67% of patients admitted through the emergency department have incomplete reconciliation — missing medications, incorrect doses, or undocumented changes from their home regimen. The team proposes training emergency nurses on reconciliation. What else does this data suggest about the reconciliation system?",
      baseOptions: [
        "Training alone is likely sufficient — a 67% failure rate reflects widespread knowledge gaps that education will correct",
        "A 67% failure rate in a consistent population (ED admissions) indicates a systemic process problem, not just a knowledge gap — the workflow, tools, resources, and role clarity for ED reconciliation require evaluation alongside education",
        "The data is expected — ED environments are too chaotic for accurate reconciliation and a 67% completion rate is operationally normal",
        "The finding should be reported to pharmacy leadership who bears primary reconciliation responsibility in the ED setting"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A 67% failure rate across an entire population is a process and system indicator, not just a training indicator. If nearly two-thirds of all ED admissions have reconciliation failures, the workflow itself needs examination — does the ED have reliable access to medication histories, adequate time and tools for reconciliation, clear role responsibility, and EHR support? Training addresses knowledge; process redesign addresses the system conditions that make reconciliation difficult or impractical.",
      baseXp: 15,
      followUps: [
        {
          question: "The team's root cause analysis reveals three contributing factors: (1) patients arrive without medication lists and cannot accurately recall home medications; (2) the EHR does not integrate with outpatient pharmacy records; (3) there is no defined timeline for completing ED reconciliation before admission orders are written. Which of these factors is most directly addressable through a JC-compliant process improvement within 90 days?",
          options: [
            "Factor 1 — patient recall can be improved through a standardized patient intake questionnaire administered at triage that prompts specific medication classes",
            "Factor 3 — defining a clear timeline and role responsibility for reconciliation completion before admission orders are written is a process design change that can be implemented rapidly and directly reduces the window during which unreconciled medications generate incorrect admission orders",
            "Factor 2 — EHR integration with outpatient pharmacies is the highest-leverage solution and should be prioritized over process changes",
            "All three factors require simultaneous action and cannot be prioritized"
          ],
          correctIndex: 1,
          explanation: "Factor 3 — the absence of a defined timeline — is the most immediately actionable process design change. Without a defined point at which reconciliation must be completed before admission orders are written, there is no structural incentive for timely completion. Establishing the requirement ('reconciliation must be complete before admission orders are co-signed by the admitting physician') creates a process gate. Factor 1 can be addressed concurrently. Factor 2 (EHR integration) typically requires significant resources and a longer timeline — it cannot be the 90-day solution.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg5",
      baseQuestion: "During a survey tracer, the surveyor follows a nurse who performs a structured handoff using SBAR at shift change. The handoff includes diagnosis, current status, recent events, and pending tasks. The receiving nurse asks about the patient's fall risk status — the outgoing nurse is unsure. The receiving nurse asks about a critical lab result from 3 hours ago — the outgoing nurse was unaware of it. What does this scenario reveal about the handoff process?",
      baseOptions: [
        "The handoff was functional — no handoff process can guarantee 100% information transfer and the gaps are expected",
        "The structured format (SBAR) was used but the handoff content was incomplete — critical information including safety risk status and critical results was not reliably communicated, suggesting the SBAR template itself does not capture all required elements or was not used with sufficient rigor",
        "The failure is the receiving nurse's — they should proactively review the chart rather than relying on handoff communication",
        "The critical lab result gap is a separate laboratory notification failure unrelated to the handoff process"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Using a structured format is necessary but not sufficient. The handoff must also ensure completeness of critical content. A fall risk status gap suggests the SBAR template does not include safety risk as a required element. An unknown critical lab result 3 hours later suggests a breakdown in the critical value notification and documentation process that creates handoff gaps. Both are process failures.",
      baseXp: 15,
      followUps: [
        {
          question: "The facility's SBAR template is reviewed and found to include: diagnosis, current vitals, recent medications, and pending orders — but not fall risk, pressure injury risk, current safety precautions, or critical pending results. What process redesign does this require?",
          options: [
            "No redesign — nurses should supplement the template with any additional relevant information they think of at the time",
            "The SBAR template must be revised to include patient safety status elements as required fields: fall risk score and active precautions, pressure injury risk and prevention measures, pending critical results, and active safety orders. Required fields prevent omission by making safety communication a structured expectation, not an optional addition",
            "A separate safety-focused handoff should be conducted after the SBAR, requiring nurses to complete two separate handoff processes per patient",
            "The template is sufficient — the failures identified were individual nurse performance issues, not template design issues"
          ],
          correctIndex: 1,
          explanation: "JC's handoff requirement is for a standardized process that reliably communicates all critical information. If the template systematically omits patient safety information — fall risk, pressure injury status, active safety orders — those elements will be omitted in most handoffs because they require providers to deviate from the structure. Building safety elements into required template fields ensures consistent communication. The goal is one complete handoff, not two separate processes.",
          expertXp: 25
        }
      ]
    }
  ]
};
