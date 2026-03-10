import type { DeepDiveLevel } from "./schema";

export const ddEocLevel: DeepDiveLevel = {
  id: "dd-eoc",
  name: "EOC & Safety Compliance Deep Dive",
  description: "Go deeper on environment of care, life safety, hazardous materials, and emergency management with expert-level branching questions.",
  icon: "Microscope",
  color: "hsl(210, 70%, 50%)",
  baseLevelId: "eoc_safety",
  questions: [
    {
      id: "dd-eoc1",
      baseQuestion: "During an Environment of Care round on a medical-surgical unit, you discover a storage room with boxes stacked within 18 inches of the ceiling-mounted sprinkler deflector. What is the MOST appropriate immediate action?",
      baseOptions: [
        "Document the finding and submit a work order for rearrangement within 30 days",
        "Immediately move items to maintain the required 18-inch clearance below sprinkler deflectors",
        "Contact the fire marshal to inspect the room before taking any action",
        "Close the storage room and prohibit access until facilities management responds"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NFPA 25 and Joint Commission EC.02.03.05 require a minimum 18-inch clearance below sprinkler deflectors to ensure proper spray pattern. Items encroaching on this clearance must be corrected immediately as this is a direct life safety hazard that could impair sprinkler function during a fire.",
      baseXp: 15,
      followUp: {
        question: "During your follow-up review, you find that this same storage room has had repeated sprinkler clearance violations documented on 3 of the last 4 quarterly EOC rounds. What systemic action should the EOC Committee take?",
        options: [
          "Assign a dedicated staff member to monitor the room daily",
          "Conduct a root cause analysis and implement a storage space management plan with accountability measures",
          "Lock the room and restrict all access to supervisors only",
          "Install additional sprinkler heads to compensate for potential obstruction"
        ],
        correctIndex: 1,
        explanation: "Repeated findings indicate a systemic issue requiring root cause analysis per the Joint Commission's leadership standards (LD.03.02.01). The EOC Committee should analyze why recurrence is happening, which may involve inadequate storage space, lack of staff education, or unclear ownership, and implement sustainable corrective actions with assigned accountability.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc2",
      baseQuestion: "A tracer surveyor asks to see your facility's deficiency tracking system for EOC rounds. Which element is MOST critical for demonstrating an effective program?",
      baseOptions: [
        "Color-coded spreadsheets showing open vs. closed items",
        "Evidence of timely resolution with documented follow-up and trend analysis of recurring findings",
        "A comprehensive list of every finding from the past five years",
        "Photographs of all deficiencies taken during rounds"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard EC.04.01.01 requires organizations to monitor conditions in the environment through a systematic process. The most critical element is demonstrating a closed-loop system where deficiencies are tracked to resolution with evidence of trend analysis to identify systemic issues and drive improvement.",
      baseXp: 15,
      followUp: {
        question: "Your trend analysis reveals that 40% of EOC deficiency findings are related to blocked electrical panels. What is the BEST approach to address this trend?",
        options: [
          "Paint floor markings with 36-inch clearance zones around all electrical panels and conduct staff education",
          "Issue disciplinary action to department managers where violations occur",
          "Add more electrical panels throughout the facility to reduce congestion",
          "Increase EOC round frequency from quarterly to monthly in affected areas"
        ],
        correctIndex: 0,
        explanation: "NFPA 70 (National Electrical Code) requires a minimum 36-inch clearance in front of electrical panels. Implementing visual cues such as floor markings combined with staff education addresses both awareness and compliance. This proactive approach is consistent with Joint Commission expectations for sustainable corrective actions rather than solely punitive or surveillance-based measures.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc3",
      baseQuestion: "While conducting a life safety code inspection, you notice an exit sign above a door in the emergency department is not illuminated. What is the regulatory requirement for exit sign illumination?",
      baseOptions: [
        "Exit signs must be illuminated at all times and visible from the exit access corridor",
        "Exit signs only need to be illuminated during nighttime hours",
        "Exit signs must be illuminated only during emergency conditions when main power fails",
        "Exit signs are required only in inpatient areas and can be unlit in the ED"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Per NFPA 101 Life Safety Code Section 7.10, exit signs must be continuously illuminated and visible from the direction of exit access. In healthcare occupancies, both internally illuminated and externally illuminated signs must maintain a minimum illumination of 5 foot-candles on the face of the sign. An unlit exit sign is an immediate life safety deficiency.",
      baseXp: 15,
      followUp: {
        question: "Upon further investigation, you discover the exit sign battery backup has failed and the sign only works when connected to normal power. The exit leads to a required means of egress. What is the correct course of action?",
        options: [
          "Place a temporary battery-powered exit sign and submit a work order for repair within 72 hours",
          "Post a staff member at the exit to direct people during any power outage until repair is complete",
          "Immediately replace or repair the sign, implement interim life safety measures, and document the deficiency in the life safety system",
          "Shut down the exit and redirect traffic to an alternate exit until the sign is repaired"
        ],
        correctIndex: 2,
        explanation: "Per Joint Commission standard EC.02.03.05, when a life safety code deficiency is identified, the organization must implement interim life safety measures (ILSM) until the condition is corrected. The sign must be repaired or replaced promptly, and the interim measures must be documented. Simply posting staff or closing a required exit does not meet the regulatory requirement for maintaining means of egress.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc4",
      baseQuestion: "A Joint Commission surveyor asks a nurse on a med-surg unit where the Safety Data Sheets (SDS) for chemicals used in the department are located. What is the BEST response that demonstrates compliance?",
      baseOptions: [
        "The SDS binder is kept locked in the charge nurse's office for security",
        "SDS information is available electronically through our hospital intranet and can be accessed from any computer on the unit at any time",
        "The SDS sheets are filed in the pharmacy department since they manage all chemicals",
        "We do not use any hazardous chemicals on this unit so SDS are not required"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "OSHA's Hazard Communication Standard (29 CFR 1910.1200) and Joint Commission standard EC.02.02.01 require that SDS be readily accessible to employees during their work shifts. Electronic access is acceptable as long as there are no barriers to immediate access, backup systems are available, and employees are trained on how to retrieve them. Locking SDS away or claiming no chemicals are used would be non-compliant.",
      baseXp: 15,
      followUp: {
        question: "The surveyor then asks what would happen if the computer system went down and staff needed to access SDS information during a chemical spill emergency. How should your facility address this?",
        options: [
          "Staff should call the Poison Control Center for chemical information during system outages",
          "A backup plan such as a physical SDS binder or offline access must be maintained and staff must know the location and how to use it",
          "The IT department is on-call 24/7 and can restore access within minutes",
          "Chemical spill kits contain all necessary information so SDS access is not critical during emergencies"
        ],
        correctIndex: 1,
        explanation: "OSHA requires that SDS be accessible at all times, including during electronic system failures. Joint Commission expects a contingency plan for SDS access, which typically includes maintaining physical backup binders in accessible locations. Staff must be trained on the backup process as part of the Hazard Communication program. Relying solely on external resources or IT response times does not meet the immediate accessibility requirement.",
        expertXp: 35
      }
    },
    {
      id: "dd-eoc5",
      baseQuestion: "Your facility's Emergency Management Committee is reviewing the annual drill schedule. Per Joint Commission requirements, how many emergency management exercises must a hospital conduct per year?",
      baseOptions: [
        "One tabletop exercise per year is sufficient",
        "Two per year, with one being a community-wide or functional exercise",
        "Four exercises per year, one per quarter",
        "Two full-scale exercises per year involving all departments"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard EM.03.01.03 requires hospitals to conduct two emergency management exercises per year. These exercises must be spaced appropriately and should test various aspects of the Emergency Operations Plan. At least one should be a community-based exercise or a functional exercise that includes an influx of simulated patients. If the organization activates its EOP in response to a real emergency, that activation may substitute for one of the required exercises.",
      baseXp: 15,
      followUp: {
        question: "Your hospital experienced a real mass casualty incident 4 months ago and activated the Emergency Operations Plan. The Emergency Management Committee wants to count this as one of the two required annual exercises. What additional requirements must be met?",
        options: [
          "The real event automatically counts; no additional documentation is needed beyond the incident report",
          "The event can count only if a formal after-action report is completed that evaluates the EOP's effectiveness and identifies areas for improvement",
          "Real events cannot count toward the exercise requirement; two separate drills must still be conducted",
          "The event counts only if it involved a federally declared disaster"
        ],
        correctIndex: 1,
        explanation: "Per Joint Commission EM.03.01.03, an actual emergency can count as one of the two required annual exercises, but only if the organization conducts a thorough post-incident critique (after-action report) that evaluates the response, identifies improvement opportunities, and modifies the EOP accordingly. The key is the learning and improvement cycle, not just the activation itself.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc6",
      baseQuestion: "A surveyor asks about your facility's fire drill documentation. In a healthcare occupancy with inpatients, how frequently must fire drills be conducted per shift?",
      baseOptions: [
        "Monthly on each shift, for a total of 12 drills per shift per year",
        "Quarterly per shift, totaling 4 drills per shift per year",
        "Once per shift per quarter, totaling 12 total drills per year across all shifts",
        "Semi-annually per shift with at least one unannounced"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Per NFPA 101 Section 18.7.1.2, healthcare occupancies require fire drills to be conducted quarterly on each shift, resulting in a minimum of 12 drills per year (4 per shift across 3 shifts). At least 50% of drills should be unannounced to test actual staff response. Documentation must include date, time, shift, participants, scenario, and any identified deficiencies.",
      baseXp: 15,
      followUp: {
        question: "During a fire drill review, the surveyor notices that all drills on the night shift for the past year were announced in advance and conducted in the same nursing unit. What deficiency should be cited?",
        options: [
          "No deficiency; consistency in drill location ensures staff familiarity with procedures",
          "Drills should vary in location and scenario, and a significant portion must be unannounced to accurately assess staff preparedness",
          "The only issue is that drills need to be on different units; announced vs. unannounced is not specified",
          "Night shift drills are optional since fewer patients are awake during those hours"
        ],
        correctIndex: 1,
        explanation: "Joint Commission and NFPA 101 expect fire drills to realistically test staff response capabilities. Conducting all drills in the same location and announcing them in advance defeats the purpose of assessing actual preparedness. Drills should rotate through different areas, use varied scenarios, and be unannounced at least 50% of the time to provide meaningful evaluation of the organization's fire response program.",
        expertXp: 25
      }
    },
    {
      id: "dd-eoc7",
      baseQuestion: "Your facility is developing its Utility Management Plan. Which of the following components is REQUIRED per Joint Commission standards?",
      baseOptions: [
        "A plan covering only electrical and water systems since these are the most critical utilities",
        "A comprehensive plan addressing all utility systems including electrical, water, vertical transport, HVAC, plumbing, boiler, and medical gas/vacuum systems",
        "A plan that addresses utility systems only in patient care areas",
        "A plan developed solely by the facilities management department without clinical input"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard EC.02.05.01 requires a comprehensive utility management plan that addresses all utility systems critical to patient care and safety. This includes electrical distribution, emergency power, water supply, HVAC, medical gas and vacuum, plumbing, boiler/steam, and vertical transport (elevators). The plan must be developed with input from clinical staff who understand how utility failures impact patient care.",
      baseXp: 15,
      followUp: {
        question: "During a utility system risk assessment, your team identifies that the medical gas alarm panel in the OR suite has been intermittently malfunctioning. The alarm activates but sometimes delays by 30 seconds. What is the appropriate response?",
        options: [
          "Monitor the alarm panel for one more week to determine if the delay is worsening before taking action",
          "Immediately implement manual monitoring procedures, notify anesthesia and surgical staff, initiate repair, and document interim measures",
          "Switch to portable oxygen cylinders in the OR until the panel is replaced next quarter",
          "The 30-second delay is within acceptable tolerance and does not require action"
        ],
        correctIndex: 1,
        explanation: "Medical gas alarm systems are critical life safety systems governed by NFPA 99. Any malfunction in alarm notification must be addressed immediately with interim measures to ensure continuous monitoring of medical gas pressures. This includes notifying affected clinical staff, implementing manual monitoring protocols, expediting repair, and documenting all interim measures per EC.02.05.01.",
        expertXp: 35
      }
    },
    {
      id: "dd-eoc8",
      baseQuestion: "A construction project is being planned on the third floor adjacent to an active inpatient oncology unit. What is the FIRST step the organization must take before construction begins?",
      baseOptions: [
        "Notify patients on the unit that construction will begin soon",
        "Conduct a pre-construction Infection Control Risk Assessment (ICRA) to determine the level of risk and required barriers",
        "Begin construction during night shifts to minimize patient disruption",
        "Install HEPA filtration in the oncology unit as a precautionary measure"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard IC.02.02.01 requires a pre-construction Infection Control Risk Assessment (ICRA) before any construction, renovation, or demolition project. The ICRA evaluates the type of construction activity, the patient population at risk (oncology patients are high-risk/immunocompromised), and determines the appropriate class of precautions (Class I through IV) including barriers, negative pressure, HEPA filtration, and monitoring requirements.",
      baseXp: 15,
      followUp: {
        question: "The ICRA determines that Class IV precautions are needed due to the adjacent immunocompromised patient population. Which of the following is a Class IV requirement?",
        options: [
          "Wet mopping of construction area at the end of each work day",
          "Hard barriers floor to ceiling with sealed seams, negative pressure with HEPA-filtered exhaust, anteroom for construction workers, and continuous air monitoring",
          "Posting construction warning signs and limiting construction to business hours only",
          "Standard dust barriers with periodic HEPA vacuuming of the construction area"
        ],
        correctIndex: 1,
        explanation: "Class IV ICRA precautions are required for major construction/demolition near high-risk patient populations such as oncology, NICU, and transplant units. Requirements include hard barriers sealed from floor to deck (not ceiling tiles), negative air pressure within the construction zone, HEPA-filtered air exhausted outside or through the HVAC system, an anteroom/vestibule for worker entry/exit, and continuous monitoring of air quality. These measures prevent Aspergillus and other airborne pathogens from reaching vulnerable patients.",
        expertXp: 35
      }
    },
    {
      id: "dd-eoc9",
      baseQuestion: "During a tracer in the surgical suite, a surveyor notices that a fire door in the corridor is propped open with a rubber doorstop. Staff state they keep it open for convenience because they frequently transport patients through it. What is the correct finding?",
      baseOptions: [
        "This is acceptable if the door is in a non-patient care corridor",
        "Fire doors in healthcare occupancies must never be propped open; they must be self-closing or held open only by devices that release upon fire alarm activation",
        "This is acceptable as long as the door is closed during fire drills",
        "Staff convenience justifies the practice if the door is within sight of the nurses' station"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Per NFPA 101 Section 18.2.2.2.2 and Joint Commission EC.02.03.05, fire-rated doors in healthcare occupancies must be self-closing and latching. They may only be held open by devices connected to the fire alarm system that automatically release the door upon alarm activation. Propping fire doors open with doorstops, wedges, or other unapproved devices is a serious life safety code violation that compromises smoke compartmentalization.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks the facility to demonstrate that all corridor fire doors close and latch properly. During testing, three doors are found that close but do not fully latch. What interim life safety measure (ILSM) is appropriate?",
        options: [
          "Post signs reminding staff to manually pull doors closed during a fire emergency",
          "Implement fire watch in the affected areas, assign staff to close and monitor the doors, initiate immediate repair, and document the ILSM until corrections are complete",
          "Disable the fire alarm connections to those doors until the latches are repaired",
          "Remove the doors entirely since non-latching doors provide a false sense of security"
        ],
        correctIndex: 1,
        explanation: "When a life safety feature is impaired, Joint Commission standard EC.02.03.05 requires implementation of interim life safety measures. For non-latching fire doors, this includes assigning staff to monitor and manually close the doors during any fire alarm, implementing fire watch patrols in affected smoke compartments, expediting repair, and maintaining documentation of all interim measures. The ILSM must remain in effect until the deficiency is fully corrected.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc10",
      baseQuestion: "A surveyor reviews the medical equipment management program and asks how the organization determines which medical devices are included in the program. What is the PRIMARY basis for inclusion?",
      baseOptions: [
        "All medical devices in the facility must be included regardless of risk level",
        "Only devices that cost more than $5,000 are included in the management program",
        "Equipment is included based on a risk assessment considering function, clinical application, maintenance requirements, and incident history",
        "Only devices identified by the FDA as Class III are included in the program"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Joint Commission standard EC.02.04.01 requires organizations to manage medical equipment risks by maintaining a written inventory based on criteria that include equipment function (therapeutic, diagnostic, monitoring), physical risk including patient and staff safety, maintenance requirements, and equipment incident history. This risk-based approach ensures that high-risk, high-priority equipment receives appropriate attention without requiring identical management of all devices.",
      baseXp: 15,
      followUp: {
        question: "Your clinical engineering department reports that 15% of high-risk medical equipment has overdue preventive maintenance (PM). The Joint Commission surveyor asks how you will address this. What is the expected response?",
        options: [
          "High-risk equipment PM can be deferred up to 30 days past the scheduled date without concern",
          "Immediately prioritize completion of overdue PMs, conduct a risk assessment for equipment currently in use with overdue PM, and implement a corrective action plan to prevent recurrence",
          "Remove all equipment with overdue PM from service until maintenance is completed",
          "Transfer the PM responsibilities to the nursing department to increase compliance rates"
        ],
        correctIndex: 1,
        explanation: "Joint Commission expects organizations to maintain medical equipment per their defined PM schedule. When overdue PMs are identified, the organization must prioritize based on risk, assess whether equipment currently in use poses safety concerns, complete the overdue PMs expeditiously, and develop a corrective action plan addressing root causes such as staffing, scheduling, or parts availability. A blanket removal of all equipment could compromise patient care, while ignoring the issue is non-compliant.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc11",
      baseQuestion: "During a tracer through the laboratory, a surveyor observes a red biohazard bag in a regular trash receptacle. What regulatory standard is being violated?",
      baseOptions: [
        "OSHA Bloodborne Pathogen Standard requiring segregation of regulated medical waste from regular waste",
        "EPA Clean Air Act requirements for medical waste incineration",
        "CMS Conditions of Participation for laboratory waste management",
        "State fire code requirements for combustible material storage"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "OSHA's Bloodborne Pathogen Standard (29 CFR 1910.1030) and Joint Commission standard EC.02.02.01 require that regulated medical waste (biohazardous waste) be segregated from regular waste using color-coded containers (red bags or containers with the biohazard symbol). Placing biohazard waste in regular trash creates exposure risks for housekeeping, waste handlers, and the public, and represents a serious regulatory violation.",
      baseXp: 15,
      followUp: {
        question: "Further investigation reveals that housekeeping staff in three departments have not received annual refresher training on regulated medical waste segregation. What corrective action is required?",
        options: [
          "Provide training within the next annual training cycle since it is only slightly overdue",
          "Immediately retrain affected staff, document completion, conduct competency verification, and audit waste segregation practices in the affected departments",
          "Send an email reminder about proper waste segregation procedures",
          "Assign a waste management liaison to each department to sort waste on behalf of housekeeping"
        ],
        correctIndex: 1,
        explanation: "OSHA requires initial and annual refresher training on bloodborne pathogens and regulated medical waste handling for all employees with potential occupational exposure. When a training gap is identified, immediate retraining with documented competency assessment is required. The organization should also audit current practices to determine if the training gap resulted in actual non-compliant waste handling and implement measures to prevent future lapses in the training schedule.",
        expertXp: 25
      }
    },
    {
      id: "dd-eoc12",
      baseQuestion: "A surveyor asks about your facility's security management plan. Which of the following is a REQUIRED component per Joint Commission standards?",
      baseOptions: [
        "Armed security officers at every entrance 24/7",
        "A security risk assessment that identifies risks to patients, staff, and visitors, with strategies to minimize those risks",
        "Metal detectors at all public entrances",
        "Closed-circuit television monitoring of all patient rooms"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard EC.02.01.01 requires organizations to manage safety and security risks in the environment of care. This includes conducting a proactive security risk assessment to identify vulnerabilities, implementing strategies to mitigate identified risks, and having a plan that addresses security-sensitive areas such as the ED, nursery/pediatrics, pharmacy, and behavioral health units. The specific security measures (armed guards, metal detectors, cameras) are determined by the risk assessment, not prescribed uniformly.",
      baseXp: 15,
      followUp: {
        question: "Your security risk assessment identifies the emergency department as the highest-risk area for workplace violence. Staff report three verbal threats and one physical assault in the past quarter. What does the Joint Commission expect?",
        options: [
          "Install bulletproof glass at the triage window and hire additional security guards",
          "Implement a comprehensive workplace violence prevention program including de-escalation training, environmental design modifications, reporting mechanisms, and post-incident support",
          "Restrict the number of visitors allowed in the ED to reduce the potential for violence",
          "Transfer aggressive patients to other facilities to reduce the risk to staff"
        ],
        correctIndex: 1,
        explanation: "Joint Commission standard EC.02.01.01 and the Sentinel Event Alert on workplace violence require a comprehensive approach including staff training in de-escalation and behavioral emergency response, environmental modifications such as safe rooms and panic alarms, clear reporting and investigation processes, post-incident debriefing and support, and data-driven analysis to identify patterns. A single physical or environmental control is insufficient to address the multifaceted nature of workplace violence.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc13",
      baseQuestion: "During an EOC round, you observe a patient smoking in a designated outdoor area that is only 10 feet from a building air intake vent. What is the primary concern?",
      baseOptions: [
        "The patient is violating the facility's no-smoking policy",
        "Secondhand smoke can enter the building through the air intake, creating an indoor air quality hazard for patients and staff",
        "The smoking area must be at least 50 feet from any structure per federal law",
        "Smoking is prohibited on all hospital property without exception per Joint Commission"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "While Joint Commission standard EC.02.06.01 addresses smoking risks and many facilities are smoke-free campuses, the primary concern here is the proximity to the air intake vent. Secondhand smoke entering the HVAC system affects indoor air quality and poses health risks to patients and staff inside the building. Most codes and standards require smoking areas to be a minimum of 25 feet from air intakes, operable windows, and building entrances.",
      baseXp: 15,
      followUp: {
        question: "Your facility has a smoke-free campus policy, but staff report that patients frequently smoke near the main entrance despite posted signage. What is the MOST effective multifaceted approach?",
        options: [
          "Remove all ashtrays and smoking receptacles from the property and increase fines for violators",
          "Implement a comprehensive tobacco cessation program with nicotine replacement therapy, staff education on patient counseling, environmental design to discourage smoking near entrances, and consistent enforcement procedures",
          "Install motion-activated speakers that announce the smoking policy when someone lights up",
          "Assign security officers to patrol the entrance and confiscate cigarettes"
        ],
        correctIndex: 1,
        explanation: "Joint Commission expects a comprehensive approach to smoking policy compliance that includes offering tobacco cessation support (nicotine replacement, counseling referrals), educating staff on patient communication techniques, using environmental design to redirect smokers away from high-traffic areas, and maintaining consistent enforcement. Simply punitive or technological approaches alone are insufficient and do not address the underlying behavioral and addiction components.",
        expertXp: 25
      }
    },
    {
      id: "dd-eoc14",
      baseQuestion: "A contractor needs to perform work above the ceiling tiles on a patient care unit. What must be obtained BEFORE any ceiling tiles are displaced?",
      baseOptions: [
        "Written permission from the unit manager is sufficient",
        "An above-ceiling permit that addresses infection control, fire safety, and utility shutoff requirements",
        "A verbal approval from the facilities director",
        "No special permit is required as long as the work is completed within one shift"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard EC.02.06.05 and infection control standards require an above-ceiling permit before displacing any ceiling tiles in patient care areas. The permit process ensures that infection control precautions are in place (dust containment, HEPA filtration if needed), fire safety features above the ceiling are not compromised, utility systems are identified and protected, and the area is properly restored when work is complete.",
      baseXp: 15,
      followUp: {
        question: "During an emergency plumbing repair, a maintenance worker removes ceiling tiles on a hematology-oncology unit without obtaining an above-ceiling permit due to urgency. Water is actively leaking onto the floor. How should this situation be managed?",
        options: [
          "The emergency justifies bypassing the permit process entirely; document the repair after completion",
          "Immediately implement infection control precautions including containment barriers, notify infection prevention, complete the emergency repair, and retroactively complete the permit documentation with a note explaining the emergency circumstances",
          "Stop the repair and complete the full permit process before proceeding, regardless of the active leak",
          "Evacuate all patients from the unit until the permit is obtained and the repair is completed"
        ],
        correctIndex: 1,
        explanation: "Emergency situations may require immediate action, but infection control precautions must still be implemented as quickly as possible, especially on units with immunocompromised patients. The organization should deploy containment measures simultaneously with the repair, notify infection prevention for guidance, and document the emergency circumstances with a retroactive permit. This demonstrates compliance with the intent of the standard while addressing the immediate patient safety concern.",
        expertXp: 35
      }
    },
    {
      id: "dd-eoc15",
      baseQuestion: "A surveyor inspects a fire extinguisher in a procedural area and checks the inspection tag. What is the MINIMUM required frequency for visual inspections of portable fire extinguishers?",
      baseOptions: [
        "Annually by a certified fire protection specialist",
        "Monthly visual inspections with documented annual maintenance inspections",
        "Quarterly visual inspections with semi-annual professional servicing",
        "Weekly inspections in patient care areas and monthly in non-patient areas"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NFPA 10 (Standard for Portable Fire Extinguishers) requires monthly visual inspections to verify extinguishers are in designated locations, accessible, charged (gauge in green zone), have intact seals and tamper indicators, and show no visible damage. Annual maintenance inspections by a trained professional are also required, along with internal examination or hydrostatic testing at specified intervals depending on extinguisher type.",
      baseXp: 15,
      followUp: {
        question: "During your monthly inspection, you discover a fire extinguisher with a pressure gauge reading in the red (undercharged) zone. The extinguisher is in the PACU. What is the correct immediate action?",
        options: [
          "Tag the extinguisher as defective and schedule replacement within 30 days",
          "Immediately remove the undercharged extinguisher from service, replace it with a fully charged unit, and send the defective unit for recharging or replacement",
          "Note the finding on the inspection tag and recheck in one week",
          "Notify the fire department and request an emergency inspection of all extinguishers"
        ],
        correctIndex: 1,
        explanation: "An undercharged fire extinguisher cannot be relied upon to function properly during a fire emergency. Per NFPA 10, defective extinguishers must be immediately removed from service and replaced with fully charged, appropriate-type units. This is especially critical in high-risk areas like the PACU where patients may not be able to self-evacuate. The removed unit should be recharged or replaced through the normal maintenance process.",
        expertXp: 25
      }
    },
    {
      id: "dd-eoc16",
      baseQuestion: "Your facility is required to test the emergency power supply system (EPSS). Per Joint Commission and NFPA 110, what is the required frequency for testing the emergency generator under load?",
      baseOptions: [
        "Annually with a full facility power transfer",
        "Monthly for a minimum of 30 minutes under load conditions",
        "Quarterly with a 15-minute load bank test",
        "Semi-annually with a 4-hour load test"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NFPA 110 (Standard for Emergency and Standby Power Systems) requires monthly testing of the emergency generator under load for a minimum of 30 continuous minutes. The generator must reach at least 30% of nameplate rating unless a load bank test is performed. Additionally, Joint Commission standard EC.02.05.07 requires that the EPSS be tested and maintained to ensure reliable operation during actual power failures.",
      baseXp: 15,
      followUp: {
        question: "During the monthly generator test, the automatic transfer switch (ATS) fails to transfer within 10 seconds as required. Power restoration to the life safety branch took 14 seconds. What action is required?",
        options: [
          "A 4-second delay beyond the 10-second requirement is within acceptable tolerance",
          "Immediately initiate repair of the ATS, conduct a root cause analysis, implement interim power backup measures, and notify all affected departments of potential delayed transfer until repair is verified",
          "Schedule ATS repair during the next quarterly maintenance window",
          "Replace the generator since the ATS delay indicates overall system deterioration"
        ],
        correctIndex: 1,
        explanation: "NFPA 110 and NFPA 99 require the life safety branch of the emergency electrical system to restore power within 10 seconds of normal power loss. A failure to meet this requirement is a critical deficiency. The ATS must be repaired immediately, a root cause analysis conducted, affected departments notified, and interim measures implemented such as ensuring battery-powered backup lighting and equipment are functional until the ATS transfer time is verified at 10 seconds or less.",
        expertXp: 35
      }
    },
    {
      id: "dd-eoc17",
      baseQuestion: "During a construction project on the second floor, the fire alarm system in the affected zone must be temporarily impaired. What is REQUIRED before the system can be taken offline?",
      baseOptions: [
        "Notify the local fire department by email and proceed with construction",
        "Implement a complete interim life safety measures (ILSM) assessment, establish fire watch, notify the fire department, and post signage indicating impaired fire protection",
        "Simply ensure the construction crew has fire extinguishers available in the work area",
        "Only management notification is needed if the impairment will last less than 4 hours"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard EC.02.03.05 requires that when any fire protection system is impaired, the organization must implement interim life safety measures including conducting an ILSM assessment, establishing fire watch patrols in the affected area, notifying the local fire department (AHJ), posting signage alerting staff and occupants, and maintaining documentation. These measures must remain in place for the entire duration of the impairment regardless of expected length.",
      baseXp: 15,
      followUp: {
        question: "The construction project is expected to last 6 weeks, and the fire alarm impairment will persist throughout. After 2 weeks, you discover that fire watch documentation has not been consistently maintained. What must happen?",
        options: [
          "Since no fire occurred during the gap, the documentation lapse is not critical",
          "Immediately resume consistent fire watch documentation, conduct a retrospective review to identify the gap period, implement corrective actions to ensure compliance for the remaining project duration, and report the lapse to the EOC Committee",
          "Increase fire watch frequency to compensate for the documentation gap",
          "Halt construction until a new ILSM plan is developed and approved"
        ],
        correctIndex: 1,
        explanation: "Fire watch documentation gaps represent a significant compliance risk and potential life safety concern. The organization must immediately correct the documentation process, investigate why the lapse occurred, implement safeguards to prevent recurrence, and report the issue to the EOC Committee for oversight. The fact that no fire occurred does not mitigate the regulatory requirement for continuous documentation of interim life safety measures throughout any fire protection system impairment.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc18",
      baseQuestion: "A Joint Commission surveyor traces a hazardous chemical through the facility and asks to see the chemical inventory. What MUST the hazardous materials inventory include?",
      baseOptions: [
        "Only chemicals classified as toxic or flammable need to be listed",
        "A list of all hazardous chemicals present in the workplace with corresponding SDS for each, including quantities, locations, and proper storage requirements",
        "Only chemicals purchased within the current fiscal year",
        "A list maintained by the purchasing department of chemicals ordered but not necessarily received"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "OSHA's Hazard Communication Standard and Joint Commission standard EC.02.02.01 require a comprehensive inventory of all hazardous chemicals in the workplace. The inventory must include chemical identification, quantities, storage locations, associated SDS, and proper handling requirements. The list must be current and accessible, and must include all hazardous chemicals regardless of quantity or classification.",
      baseXp: 15,
      followUp: {
        question: "The surveyor discovers that a laboratory has 3 chemicals in use that do not appear on the facility's hazardous chemical inventory. Lab staff state the chemicals were donated by a research partner. How should this be addressed?",
        options: [
          "Donated chemicals are exempt from OSHA inventory requirements if they are used in small quantities",
          "Immediately quarantine the chemicals, obtain SDS for each, add them to the inventory, conduct a risk assessment, and ensure staff have received appropriate training on these specific chemicals",
          "Return the chemicals to the research partner since they were not procured through proper channels",
          "Add the chemicals to the inventory and continue using them as long as staff have general hazmat training"
        ],
        correctIndex: 1,
        explanation: "All hazardous chemicals present in the workplace must be on the hazardous materials inventory with corresponding SDS, regardless of how they were obtained. Donated, sample, or trial chemicals are not exempt. The chemicals must be quarantined until SDS are obtained and reviewed, a risk assessment is completed, the inventory is updated, and staff receive chemical-specific training on safe handling, storage, and emergency procedures per OSHA 29 CFR 1910.1200.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc19",
      baseQuestion: "Your organization is conducting its annual evaluation of the Environment of Care management plans. How many EC management plans does Joint Commission require hospitals to maintain?",
      baseOptions: [
        "Three plans: safety, security, and fire prevention",
        "A minimum of seven plans covering safety, security, hazardous materials, fire safety, medical equipment, utilities, and infection prevention",
        "One comprehensive environment of care plan that covers all areas",
        "Five plans: safety, fire, utilities, medical equipment, and emergency management"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission requires hospitals to maintain management plans in at least seven key areas under the Environment of Care chapter: safety management, security management, hazardous materials and waste management, fire safety management, medical equipment management, utility systems management, and in coordination with infection prevention. Each plan must include scope, objectives, performance standards, and an annual evaluation process demonstrating program effectiveness.",
      baseXp: 15,
      followUp: {
        question: "During the annual evaluation, the EOC Committee identifies that the hazardous materials management plan has not been updated in 3 years despite significant changes in chemicals used and regulatory requirements. What is the expected corrective approach?",
        options: [
          "Update the plan during the next routine planning cycle to avoid disruption",
          "Immediately revise the plan to reflect current chemicals, processes, and regulatory requirements; conduct a gap analysis to identify any compliance deficiencies that may have resulted from the outdated plan; and implement corrective actions",
          "Assign the task to a consultant to ensure accuracy and objectivity",
          "Adopt a neighboring hospital's hazardous materials plan as a template and customize it"
        ],
        correctIndex: 1,
        explanation: "Joint Commission standard EC.04.01.01 requires annual evaluation and updates to all EC management plans. A 3-year gap in updates is a significant compliance deficiency. The organization must immediately revise the plan, conduct a gap analysis to identify any risks or compliance failures that resulted from the outdated plan, implement corrective actions for any identified gaps, and establish a process to ensure timely annual review going forward.",
        expertXp: 30
      }
    },
    {
      id: "dd-eoc20",
      baseQuestion: "A surveyor observes that a corridor in a hospital's diagnostic imaging department has furniture, a portable X-ray machine, and a linen cart partially obstructing the hallway. The corridor is a required means of egress. What is the Life Safety Code violation?",
      baseOptions: [
        "Corridors may be used for temporary storage as long as items do not reduce the width below 6 feet",
        "Required means of egress corridors must remain clear of all obstructions that reduce the required minimum width; equipment and furnishings must not impede egress",
        "Portable medical equipment is exempt from corridor obstruction rules during business hours",
        "Linen carts are permitted in corridors if they are on wheels and can be moved quickly"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NFPA 101 Section 18.2.3.4 requires that corridors used as means of egress in healthcare occupancies maintain the minimum required clear width at all times. While the Life Safety Code permits certain items in corridors (such as wheeled equipment in use that does not reduce corridor width below the minimum), persistent storage of equipment, furniture, and carts that reduces the clear width is a violation. The corridor must allow unobstructed passage for patient evacuation including beds and stretchers.",
      baseXp: 15,
      followUp: {
        question: "The department manager explains that the corridor storage is necessary because the department lacks adequate storage space. This has been an ongoing issue raised in multiple EOC rounds. What should the organization do?",
        options: [
          "Allow the corridor storage to continue with staff education on keeping one side clear",
          "Conduct a space utilization study, develop a plan to provide adequate storage, implement interim corridor management procedures that maintain egress clearance, and present findings to leadership for resource allocation",
          "Reduce the department's equipment inventory to match available storage space",
          "Apply to the local authority having jurisdiction for a corridor storage variance"
        ],
        correctIndex: 1,
        explanation: "Chronic corridor obstruction indicates a systemic space management issue that requires organizational attention. Joint Commission expects the organization to address root causes rather than accept non-compliant conditions. This includes conducting a formal space assessment, developing short-term and long-term solutions, implementing interim measures that maintain life safety compliance, and escalating the resource need to leadership per LD.03.02.01 for appropriate allocation of space and funding.",
        expertXp: 30
      }
    }
  ]
};
