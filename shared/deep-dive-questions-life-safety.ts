import type { DeepDiveLevel } from "./schema";

export const ddLifeSafetyLevel: DeepDiveLevel = {
  id: "dd-life-safety",
  name: "Life Safety Deep Dive",
  description: "Expert-level scenarios on fire compartmentalization failures, ILSM requirements, egress compliance, alarm response, and systemic life safety program gaps.",
  icon: "Microscope",
  color: "hsl(0, 72%, 45%)",
  baseLevelId: "life_safety",
  questions: [
    {
      id: "dd-ls1",
      baseQuestion: "During a fire, staff on a medical-surgical unit attempt to evacuate non-ambulatory patients via the stairwell because the horizontal evacuation path has heavy smoke. Three patients in wheelchairs cannot be safely moved down the stairs. What is the correct protocol for non-ambulatory patients who cannot be evacuated vertically?",
      baseOptions: [
        "Leave the patients in their rooms with doors closed — the fire department will rescue them when they arrive",
        "Move patients to an area of refuge — a fire-rated enclosure such as a stairwell landing or corridor smoke compartment designed to protect occupants temporarily while awaiting rescue",
        "Attempt vertical evacuation regardless of patient mobility — any movement is safer than remaining on the affected floor",
        "Move patients to an interior room without windows to reduce heat and smoke exposure"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Areas of refuge — typically stairwell landings or designated smoke compartments — provide temporary fire-rated protection for patients who cannot be evacuated vertically. They are equipped with two-way communication systems to coordinate with the fire department. Leaving patients in rooms with closed doors is secondary to active area of refuge use when available.",
      baseXp: 20,
      followUps: [
        {
          question: "The unit's emergency plan does not identify areas of refuge or include any procedure for non-ambulatory patients who cannot use stairs. Fire department arrival was delayed by 9 minutes. What does this planning gap represent and what must the facility do?",
          options: [
            "The gap represents an unfortunate but operationally expected limitation — not all emergencies can be planned for in advance",
            "The gap represents a failure in the emergency operations plan. JC requires that evacuation plans specifically address non-ambulatory patients, identify areas of refuge, include procedures for staff-to-fire-department communication, and be tested during drills that include non-ambulatory patient scenarios. The plan must be revised and the revision tested in the next scheduled drill",
            "The fire department delay is the primary contributing factor — the planning gap is secondary and requires only documentation of the delay",
            "The plan should be updated but only requires input from nursing leadership — facilities management and fire department are not required participants in the plan revision"
          ],
          correctIndex: 1,
          explanation: "JC requires emergency operations plans to be comprehensive and tested. A plan that does not address the evacuation of non-ambulatory patients — who make up a substantial portion of any hospital census — is fundamentally incomplete. The plan must specifically include: identification of areas of refuge, staff roles in non-ambulatory patient management, communication with the fire department, and drill scenarios that test these procedures.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls2",
      baseQuestion: "A quarterly fire drill on the night shift is conducted at 3 AM. The nursing supervisor announces the drill 10 minutes in advance so staff can 'be prepared.' When the surveyor reviews the drill documentation, the pre-announcement is noted. What is the compliance concern?",
      baseOptions: [
        "No concern — pre-announcement improves drill participation quality by allowing staff to be in position for a more educational exercise",
        "The drill's value is significantly compromised — fire drills must be unannounced to test actual staff response. Pre-announced drills test whether staff can perform procedures when prepared, not whether they respond correctly under realistic surprise conditions",
        "Pre-announcement is permitted for night shift drills to minimize patient disruption",
        "The concern is the 3 AM timing only — pre-announcement is an acceptable practice for all shifts"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires fire drills to be unannounced to test actual response capability. A pre-announced drill produces compliance theater — staff perform correctly because they are ready, not because the response is embedded. The drill documentation noting the pre-announcement would be a survey finding. Night shift drills may be conducted with modifications to minimize patient disruption, but unannounced nature is a non-negotiable requirement.",
      baseXp: 15,
      followUps: [
        {
          question: "The nursing supervisor defends the pre-announcement saying 'we've had the same drill deficiencies for two years and announcing it is the only way to get staff to demonstrate the correct response.' What does this reasoning reveal about the fire safety training program and how should it be addressed?",
          options: [
            "The reasoning is pragmatic — if pre-announcement is the only way to get correct performance, it should be accepted as a reasonable accommodation",
            "The reasoning reveals that the fire safety education program is failing — if staff can only perform correctly when warned in advance, they have not internalized the knowledge and skills. The solution is to improve the training program (more frequent drills, scenario-based education, immediate corrective feedback, leadership reinforcement), not to compromise the drill's assessment validity",
            "The reasoning is valid for two years of repeated deficiencies — extended non-compliance justifies modified assessment methods",
            "The deficiencies after two years should be reported to JC as chronic non-compliance before implementing any program changes"
          ],
          correctIndex: 1,
          explanation: "Two years of repeated drill deficiencies is a serious indicator that the training program is not achieving behavioral competency. The response cannot be to make the assessment easier — it must be to fix the training program. This means examining: what specific behaviors are failing, what is preventing correct performance, whether the training modality is effective, and whether leadership reinforcement exists. Pre-announcing drills delays the reckoning while patient safety remains at risk.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls3",
      baseQuestion: "A multi-story hospital's main corridor has a fire door held open by an approved electromagnetic hold-open device that releases when the fire alarm activates. During a test, the fire alarm is activated and the door does not release — it remains held open. The facilities team says it will be repaired 'in a few weeks.' Is this acceptable?",
      baseOptions: [
        "Yes — the door can remain in this state temporarily since the alarm has been activated and the door is in a known state",
        "No — a malfunctioning fire door hold-open device represents a life safety system impairment requiring immediate ILSM implementation and urgent repair; 'a few weeks' is not acceptable for a deficiency that compromises fire compartmentalization",
        "Yes — as long as the door can be manually closed by staff during an actual fire event, the malfunction is acceptable temporarily",
        "No — the door must be replaced entirely, not repaired, since a repaired electromagnetic device may malfunction again"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A fire door that fails to close when the alarm activates is a direct life safety system impairment. The fire compartmentalization that the door provides is compromised. This requires immediate ILSM implementation (fire watch, staff notification) and urgent — not eventual — repair. 'A few weeks' is not an acceptable repair timeline for a safety-critical failure.",
      baseXp: 20,
      followUps: [
        {
          question: "The facilities director argues that they have two other fire doors on the same corridor that are functioning, so the compartmentalization is 'basically maintained.' Does the presence of other functional doors in the same corridor reduce the urgency of the malfunctioning door?",
          options: [
            "Yes — redundant fire doors in the same corridor provide compensatory protection that reduces the criticality of one door's malfunction",
            "No — each fire door is an independent component of the fire safety system. The compartmentalization design relies on all fire doors functioning correctly. A fire starting in the area between the functioning doors and the malfunctioning door could travel through the gap. The argument of 'basically maintained' does not satisfy NFPA 101 or JC life safety requirements",
            "Yes — NFPA 101 includes a recognized compensatory measure for single fire door failures when adjacent doors remain functional",
            "Partially — the urgency is reduced but not eliminated; a 30-day repair timeline would be acceptable in this context"
          ],
          correctIndex: 1,
          explanation: "Fire safety systems are not designed with 'basically functional' tolerances — each component serves a specific, defined purpose. A malfunctioning fire door means that specific compartment boundary is breached. Fire behavior is not predictable enough to rely on other doors compensating for a failure. NFPA 101 and JC do not include a provision for reduced urgency based on nearby functioning doors.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls4",
      baseQuestion: "A hospital renovation project runs 6 weeks behind schedule. During this time, a temporary plywood barrier — not fire-rated — has been used to separate the construction zone from patient areas. The contractor says upgrading to a fire-rated barrier would add 3 weeks to the schedule. What must the hospital do?",
      baseOptions: [
        "Accept the temporary non-fire-rated barrier and implement ILSM, including an enhanced fire watch",
        "Both: Implement immediate comprehensive ILSM (fire watch, increased extinguisher availability, daily staff briefings, additional fire drills) and require the contractor to install a fire-rated barrier or fire-rated sheeting as quickly as possible — schedule impact does not override life safety requirements for protecting patient areas from construction fire risk",
        "Accept the contractor's recommendation since they are the technical expert on construction safety",
        "The non-rated barrier is acceptable with a fire watch — NFPA 241 allows non-fire-rated barriers when a fire watch is in place"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Construction zones are a leading source of healthcare facility fires. A non-fire-rated barrier separating construction from patient areas does not provide the protection required. ILSM alone is not a permanent solution — the barrier must be upgraded. The contractor's schedule pressure does not change the safety requirement. Both actions are required: immediate ILSM and accelerated installation of appropriate fire-rated separation.",
      baseXp: 20,
      followUps: [
        {
          question: "The hospital's Environment of Care committee was informed about the non-rated barrier issue 4 weeks ago but the committee chair decided to 'monitor the situation' rather than require immediate action. The committee meets monthly and the next meeting is 2 weeks away. What does this governance failure represent?",
          options: [
            "A reasonable approach — the EC committee's authority includes deciding the urgency of safety findings and monitoring is an acceptable response",
            "A governance failure in which a known life safety deficiency affecting a patient care area was not escalated or acted upon within an appropriate timeframe. JC expects that identified life safety deficiencies trigger immediate action — not monitoring until the next scheduled committee meeting. This represents a culture of delayed safety response that leadership must correct",
            "The committee chair's clinical judgment should be respected — the 'monitor' decision was an informed professional assessment",
            "The failure is documentation-based — the committee should have formally documented the monitoring decision to create a defensible record"
          ],
          correctIndex: 1,
          explanation: "Known life safety deficiencies in active patient care areas require immediate action — not monitoring cycles. A four-week delay with the deficiency still unresolved when it reaches survey or causes harm represents a governance failure. JC's environment of care expectations include mechanisms for escalating urgent safety findings between scheduled meetings. A committee structure that cannot act on urgency between monthly meetings is inadequate for life safety management.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls5",
      baseQuestion: "A hospital's fire drill documentation for the past year shows: 4 drills on the day shift, 4 on the evening shift, and 2 on the night shift. The night shift supervisor reports that 2 drills were 'skipped due to high census.' What is the compliance status?",
      baseOptions: [
        "Partially compliant — 10 of 12 required drills were completed; 2 missed drills due to documented operational reasons may be acceptable",
        "Non-compliant — JC requires at least 4 drills per shift per year; the night shift has only 2 documented. High census is not an accepted reason to skip fire drills — modified drill approaches (door-only activation, limited simulation scope) can reduce patient disruption while maintaining compliance",
        "Compliant — 10 total drills exceeds the minimum of 4 annual drills across all shifts combined",
        "Non-compliant — but only if the 2 missed night drills occurred in the same quarter"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires at least one drill per quarter per shift — meaning 4 per shift annually, or a minimum of 12 total for a three-shift operation. Night shift has only 2. 'High census' is not an accepted waiver — it is actually an argument for more training, since high-census situations represent higher-risk evacuation scenarios. Drill design can be modified to minimize patient disruption without eliminating the drill entirely.",
      baseXp: 15,
      followUps: [
        {
          question: "The night shift supervisor proposes that, going forward, night shift fire safety training will be conducted as a tabletop exercise rather than an actual drill with alarm activation. The supervisor argues this is less disruptive to sleeping patients. Does a tabletop exercise satisfy the JC fire drill requirement?",
          options: [
            "Yes — tabletop exercises are a recognized and equivalent alternative to in-person fire drills for all shifts",
            "No — JC requires actual fire drills, not tabletop exercises, to satisfy the quarterly per-shift requirement. A tabletop may supplement drills as an educational tool, but it does not replace the behavioral rehearsal that an actual drill provides. Night shift drills must occur and can be designed to minimize patient disruption without activating the full building alarm",
            "Yes — tabletop exercises are equivalent for night shift specifically because live drills pose an unacceptable patient disturbance risk during sleeping hours",
            "Partially — tabletop exercises satisfy 50% of the drill requirement; 2 tabletops can substitute for 1 actual drill"
          ],
          correctIndex: 1,
          explanation: "JC's fire drill requirement specifies actual drills — behavioral rehearsal of the response process. Tabletop exercises test theoretical knowledge but do not build the muscle memory, spatial familiarity, and automatic response behaviors that actual drills develop. Night shift drills can be conducted without full building alarm activation — for example, simulating the alarm response in a contained section, using a phone-based notification, or activating the drill verbally — while still requiring staff to physically demonstrate RACE steps and patient evacuation procedures.",
          expertXp: 25
        }
      ]
    }
  ]
};
