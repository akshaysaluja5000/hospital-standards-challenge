import type { DeepDiveLevel } from "./schema";

export const deepDiveLevels: DeepDiveLevel[] = [
  {
    id: "dd-sterile-storage",
    name: "Sterile Storage Deep Dive",
    description: "Master the nuances of sterile storage compliance with branching follow-up questions that test expert-level knowledge.",
    icon: "Microscope",
    color: "hsl(262, 70%, 50%)",
    baseLevelId: "sterile-storage",
    questions: [
      {
        id: "dd-ss1",
        baseQuestion: "A surveyor finds sterile peel packs stored on a shelf 6 inches from the floor. Is this compliant?",
        baseOptions: ["Compliant — peel packs just need to be off the floor", "Non-compliant — sterile items must be stored 8-10 inches off the floor"],
        baseCorrectIndex: 1,
        baseExplanation: "Sterile items must be stored 8-10 inches off the floor to prevent splash contamination during cleaning and to allow proper air circulation underneath.",
        baseXp: 15,
        followUp: {
          question: "The facility argues they recently mopped and the floor is clean. A surveyor responds that the 8-10 inch rule still applies. Why does floor cleanliness NOT affect this requirement?",
          options: [
            "The rule is based on preventing splash contamination during future cleaning, not current floor cleanliness",
            "The rule is arbitrary and simply a number the Joint Commission chose",
            "Clean floors still have bacteria that float upward exactly 7 inches",
            "The rule only applies to wet floors, so the surveyor is wrong"
          ],
          correctIndex: 0,
          explanation: "The 8-10 inch off-floor requirement exists because mopping and floor cleaning create splash that can reach items stored too low. Current floor cleanliness is irrelevant — the standard protects against contamination during routine cleaning activities.",
          expertXp: 25
        }
      },
      {
        id: "dd-ss2",
        baseQuestion: "Rigid sterilization containers are stacked 3 high on a shelf. Each container weighs 9 lbs. Is this arrangement compliant?",
        baseOptions: ["Compliant — the weight per container is under 25 lbs", "Non-compliant — rigid containers should not be stacked more than 2 high"],
        baseCorrectIndex: 1,
        baseExplanation: "Rigid containers should be stacked no more than 2 high regardless of individual weight to prevent damage to seals and to allow safe handling.",
        baseXp: 15,
        followUp: {
          question: "A tech needs to move a 22-lb rigid container from the top of a 2-high stack. She lifts it overhead to clear the shelf above. What additional compliance concern does this introduce?",
          options: [
            "Containers over 25 lbs cannot be moved without a cart",
            "Lifting heavy containers overhead increases drop risk and potential sterility compromise — containers should be at accessible heights",
            "There is no concern since 22 lbs is under the 25 lb max",
            "She needs to wear sterile gloves to touch the container"
          ],
          correctIndex: 1,
          explanation: "While the container is under the 25 lb max, storing heavy containers where they require overhead lifting creates an ergonomic hazard and increases the risk of dropping, which could compromise the sterile seal. Storage should allow safe, ergonomic access.",
          expertXp: 25
        }
      },
      {
        id: "dd-ss3",
        baseQuestion: "Sterile supplies are stored 20 inches below the ceiling sprinkler heads. Is this compliant?",
        baseOptions: ["Compliant — items must be at least 18 inches below sprinklers", "Non-compliant — the minimum distance is 24 inches"],
        baseCorrectIndex: 0,
        baseExplanation: "Sterile items must be stored at least 18 inches below sprinkler heads to ensure proper sprinkler spray pattern coverage in case of fire. At 20 inches, this is compliant.",
        baseXp: 15,
        followUp: {
          question: "During a tracer, a surveyor notices that while sterile supplies are 18+ inches below sprinklers, a tall cardboard shipping box (empty, used for returns) is leaning against the shelf and reaches within 12 inches of the sprinkler. Is this a finding?",
          options: [
            "No — only sterile supplies need the 18-inch clearance",
            "No — cardboard is not a stored item",
            "Yes — ALL items must maintain 18-inch clearance below sprinklers, not just sterile supplies",
            "Yes — but only because cardboard is a fire hazard"
          ],
          correctIndex: 2,
          explanation: "The 18-inch clearance rule below sprinkler heads applies to ALL items, not just sterile supplies. This is a fire safety requirement ensuring proper sprinkler spray distribution. Any object — sterile or not — that violates this clearance is a finding.",
          expertXp: 25
        }
      },
      {
        id: "dd-ss4",
        baseQuestion: "A sterile processing tech notices that event-related sterile packages in storage show no signs of damage, moisture, or contamination but have no expiration dates printed on them. Should she pull them from service?",
        baseOptions: ["Yes — all sterile items must have an expiration date", "No — event-related sterility means packages remain sterile until the integrity of the packaging is compromised"],
        baseCorrectIndex: 1,
        baseExplanation: "Under event-related sterility, items remain sterile until an event compromises package integrity (moisture, tears, soil, etc.). No expiration date is needed — the package integrity is what matters.",
        baseXp: 15,
        followUp: {
          question: "A surgeon insists that a peel pack he sees on the shelf 'looks old' and wants it discarded. The pack integrity is intact, no moisture or tears. The OR manager says it's fine under event-related sterility. Who is correct, and what should happen?",
          options: [
            "The surgeon is correct — if it looks old, it should be discarded",
            "The OR manager is correct — intact packaging = sterile; however, the surgeon's concern should be documented and addressed through proper channels",
            "Neither — a biological indicator test should be run on the pack",
            "The surgeon outranks the OR manager and the pack must be discarded"
          ],
          correctIndex: 1,
          explanation: "Event-related sterility means intact packaging = sterile regardless of age. The OR manager is scientifically correct. However, a surgeon's concern should never be dismissed — it should be documented and addressed through education and proper communication channels. Patient care team concerns always merit a professional response.",
          expertXp: 30
        }
      },
      {
        id: "dd-ss5",
        baseQuestion: "Sterile storage room temperature reads 76°F and humidity is 55%. Are these within acceptable parameters?",
        baseOptions: ["Both are acceptable", "Temperature is too high — must be 68-75°F", "Humidity is too high — must be below 50%", "Temperature is too high and humidity is acceptable"],
        baseCorrectIndex: 1,
        baseExplanation: "Sterile storage temperature must be 68-75°F. At 76°F, the temperature exceeds the upper limit. Humidity of 55% is within the acceptable 20-60% range.",
        baseXp: 15,
        followUp: {
          question: "The facility corrects the temperature to 74°F but notes that over the weekend (when no staff was present), the temperature log shows it spiked to 82°F for 6 hours before the HVAC self-corrected. Sterile items were stored throughout. What action is required?",
          options: [
            "No action needed — the HVAC corrected itself and current temp is fine",
            "Document the excursion, assess all sterile items stored during the spike for potential compromise, and implement HVAC monitoring/alerting for off-hours",
            "Discard all sterile items in the room regardless of packaging integrity",
            "Only items opened during that period need to be re-sterilized"
          ],
          correctIndex: 1,
          explanation: "A 6-hour temperature excursion to 82°F requires: (1) documentation of the event, (2) assessment of stored sterile items — prolonged heat can weaken packaging adhesives and seals, (3) implementation of off-hours monitoring or temperature alerting systems. Wholesale discard isn't necessary if packaging integrity is confirmed, but the risk assessment must be documented.",
          expertXp: 30
        }
      },
      {
        id: "dd-ss6",
        baseQuestion: "A Bowie-Dick test was not performed this morning before the first sterilization load. The first load has already been run and is sitting in the sterile storage area. What should happen?",
        baseOptions: ["Run the Bowie-Dick test now and if it passes, the load is fine", "The load must be recalled — Bowie-Dick must be run daily BEFORE the first load", "Bowie-Dick tests are only required weekly"],
        baseCorrectIndex: 1,
        baseExplanation: "Bowie-Dick tests must be run daily before the first sterilization load. They verify proper air removal and steam penetration in prevacuum sterilizers. A load run without a prior passing Bowie-Dick must be recalled.",
        baseXp: 15,
        followUp: {
          question: "The recalled load contains implantable devices (orthopedic screws). The Bowie-Dick is now run and passes. The biological indicator from the original load also passes. Can the implants be released for use?",
          options: [
            "Yes — both the Bowie-Dick and BI passed, so the load is verified",
            "No — implantable items require the BI result BEFORE the load is used, and the procedural violation of skipping the Bowie-Dick means the entire process must be repeated",
            "Yes — but only after a 24-hour quarantine period",
            "No — implants can never be re-sterilized once recalled"
          ],
          correctIndex: 1,
          explanation: "For implantable devices, biological indicator results must be obtained BEFORE the items are released for use (unless there's an urgent patient need documented by a surgeon). The Bowie-Dick skip was a process failure that invalidates confidence in the cycle. The implants must be re-processed with proper Bowie-Dick → load → BI sequence.",
          expertXp: 35
        }
      },
      {
        id: "dd-ss7",
        baseQuestion: "Blue-wrapped instrument trays are stored on open wire shelving in the sterile storage room. The wrapping is intact and there are dust covers on the shelves. Is this acceptable?",
        baseOptions: ["Acceptable — dust covers protect the wrapping", "Not acceptable — wrapped trays must be stored in closed cabinets only"],
        baseCorrectIndex: 0,
        baseExplanation: "Open wire shelving is acceptable for sterile storage as long as items are properly wrapped and dust covers are used to protect packaging from environmental contamination. Closed cabinets are preferred but not strictly required.",
        baseXp: 15,
        followUp: {
          question: "A new tech removes a dust cover to retrieve a tray and sets the cover on top of an adjacent stack of sterile peel packs while she works. She replaces it 10 minutes later. Has she potentially compromised anything?",
          options: [
            "No — 10 minutes of dust exposure is negligible",
            "No — the peel packs are individually sealed so a cover on top doesn't matter",
            "Yes — placing a used dust cover (which collects environmental contaminants) directly on sterile peel packs could transfer contamination to the packaging",
            "Yes — but only if the room ventilation was off during those 10 minutes"
          ],
          correctIndex: 2,
          explanation: "Dust covers accumulate environmental contaminants by design — that's their purpose. Placing a used dust cover directly on sterile peel packs transfers those contaminants to packaging surfaces. Staff should be trained to handle dust covers carefully and never place them on or against sterile items.",
          expertXp: 25
        }
      },
      {
        id: "dd-ss8",
        baseQuestion: "A surveyor asks to see the sterile storage area's environmental monitoring log. The facility shows daily temperature and humidity readings taken at 7 AM. Is once-daily monitoring sufficient?",
        baseOptions: ["Yes — daily monitoring meets the standard", "No — monitoring must be continuous or at minimum twice daily"],
        baseCorrectIndex: 0,
        baseExplanation: "Daily monitoring of temperature and humidity in sterile storage areas meets Joint Commission requirements. The readings should be documented and any out-of-range values acted upon promptly.",
        baseXp: 15,
        followUp: {
          question: "The log shows readings consistently taken at 7:00 AM — always within range. A surveyor asks: 'How do you know conditions are maintained during the overnight hours when no one is here?' The facility has no answer. What should they implement?",
          options: [
            "Nothing — once-daily readings are compliant and overnight isn't their responsibility",
            "Hire overnight staff to take readings every 4 hours",
            "Install continuous electronic temperature/humidity monitoring with automated alerting for out-of-range conditions",
            "Take a second reading at 5 PM before leaving"
          ],
          correctIndex: 2,
          explanation: "While once-daily manual readings technically meet minimum requirements, best practice (and a surveyor's recommendation) is continuous electronic monitoring with automated alerts. This ensures out-of-range conditions during off-hours are detected and addressed before sterile items are compromised. A second daily reading at 5 PM is better than once daily but still leaves overnight unmonitored.",
          expertXp: 25
        }
      },
      {
        id: "dd-ss9",
        baseQuestion: "Chemical indicators (internal and external) on a sterilized tray have changed color appropriately. Can the tray be considered sterile?",
        baseOptions: ["Yes — chemical indicator color change confirms sterility", "No — chemical indicators only confirm exposure to sterilization conditions, not actual sterility"],
        baseCorrectIndex: 1,
        baseExplanation: "Chemical indicators only verify that items were exposed to one or more sterilization parameters (time, temperature, steam). They do NOT confirm sterility. Biological indicators are the gold standard for confirming sterilization effectiveness.",
        baseXp: 15,
        followUp: {
          question: "A tech argues: 'We have passing chemical indicators AND a passing biological indicator from this load. So these instruments are definitely sterile.' Is this statement fully accurate?",
          options: [
            "Yes — passing CI + BI = confirmed sterility",
            "Almost — but sterility also depends on packaging integrity during storage, handling, and transport; CI + BI only confirm the sterilization process worked",
            "No — you also need a Bowie-Dick test for every load",
            "No — biological indicators have a 20% false-negative rate"
          ],
          correctIndex: 1,
          explanation: "Passing CIs and BIs confirm the sterilization PROCESS was effective. However, sterility is maintained only if packaging integrity is preserved through storage, handling, and transport. A perfectly sterilized item can become non-sterile through package compromise. Sterility is a chain — processing is one link.",
          expertXp: 30
        }
      },
      {
        id: "dd-ss10",
        baseQuestion: "During a tracer, a surveyor notices that the sterile storage room door is propped open. Staff say they do this during busy periods for easier access. Is this acceptable?",
        baseOptions: ["Acceptable — it improves workflow efficiency", "Not acceptable — sterile storage doors must remain closed to maintain environmental controls"],
        baseCorrectIndex: 1,
        baseExplanation: "Sterile storage room doors must remain closed to maintain proper temperature, humidity, and positive air pressure. Propping doors open introduces uncontrolled air, dust, and temperature fluctuations that can compromise sterile items.",
        baseXp: 15,
        followUp: {
          question: "The manager installs an automatic door closer. However, during the tracer the surveyor notices the room has positive pressure (air flows OUT when the door opens). The manager says this proves the room is protected even when briefly open. Is the manager's reasoning correct?",
          options: [
            "Yes — positive pressure means contaminants can't enter even with the door open",
            "Partially — positive pressure does help prevent contamination ingress during brief door openings, but prolonged or frequent openings can overwhelm the pressure differential and allow environmental shifts",
            "No — positive pressure has nothing to do with sterile storage",
            "No — sterile storage should have negative pressure"
          ],
          correctIndex: 1,
          explanation: "The manager is partially correct. Positive pressure in sterile storage is a design feature that pushes clean air out when doors open, preventing contaminated corridor air from entering. However, this protection works for brief openings. Prolonged or very frequent door openings can overwhelm the HVAC system's ability to maintain the pressure differential, allowing temperature, humidity, and particulate shifts.",
          expertXp: 30
        }
      }
    ]
  },
  {
    id: "dd-transport",
    name: "Transport & Decontam Deep Dive",
    description: "Go deeper on instrument transport, decontamination procedures, and point-of-use treatment with expert-level branching questions.",
    icon: "Truck",
    color: "hsl(217, 95%, 50%)",
    baseLevelId: "transport",
    questions: [
      {
        id: "dd-tr1",
        baseQuestion: "A scrub tech applies enzymatic spray to instruments, places them in a closed container, and transports via the soiled corridor. Is this correct?",
        baseOptions: ["Correct — proper point-of-use treatment and transport", "Incorrect — instruments should be dry-transported"],
        baseCorrectIndex: 0,
        baseExplanation: "This is correct procedure: enzymatic spray at point of use, closed container, soiled corridor transport.",
        baseXp: 15,
        followUp: {
          question: "The same scrub tech transported the container 15 minutes after the case ended. During those 15 minutes, the instruments sat open on the back table with no enzymatic spray. Does the eventual correct transport make up for the delay?",
          options: [
            "Yes — as long as enzymatic spray is applied before transport, timing doesn't matter",
            "No — bioburden begins drying within minutes; delayed point-of-use treatment means harder decontamination and potential instrument damage from dried-on organic material",
            "It depends on room temperature — cold ORs slow drying",
            "15 minutes is within the acceptable window"
          ],
          correctIndex: 1,
          explanation: "Point-of-use treatment must happen immediately after the case. Blood, tissue, and bone fragments begin drying on instruments within minutes, making later removal significantly harder and potentially damaging delicate instrument surfaces. There is no 'acceptable window' — sooner is always better.",
          expertXp: 25
        }
      },
      {
        id: "dd-tr2",
        baseQuestion: "A circulator transports soiled instruments through the main patient corridor because the soiled corridor is temporarily blocked by construction. Is this acceptable?",
        baseOptions: ["Acceptable — it's a temporary situation", "Not acceptable — soiled instruments must never travel through clean/patient areas"],
        baseCorrectIndex: 1,
        baseExplanation: "Soiled instruments must never be transported through clean cores or patient care areas regardless of circumstances. Alternative soiled pathways must be established during construction.",
        baseXp: 15,
        followUp: {
          question: "The facility says they filed an ICRA (Infection Control Risk Assessment) for the construction project but it didn't address alternative soiled transport pathways. What does this reveal about their ICRA process?",
          options: [
            "The ICRA is fine — transport pathways are a facilities issue, not infection control",
            "The ICRA is incomplete — it should have identified the disruption to soiled transport flow and established alternative pathways before construction began",
            "ICRAs only cover patient areas, not back-of-house corridors",
            "The ICRA team should have halted the construction project"
          ],
          correctIndex: 1,
          explanation: "An ICRA must assess ALL infection control impacts of construction, including disruption to established traffic patterns for soiled and clean materials. Alternative pathways must be planned BEFORE construction begins. An ICRA that misses this is incomplete and represents a systemic gap in the facility's infection prevention planning.",
          expertXp: 30
        }
      },
      {
        id: "dd-tr3",
        baseQuestion: "A tech in the decontamination area is wearing gloves and a gown but no face protection. She is manually cleaning instruments under water. Is her PPE adequate?",
        baseOptions: ["Yes — gloves and gown are sufficient for manual cleaning", "No — face protection (mask + eye protection or face shield) is required when manually cleaning instruments"],
        baseCorrectIndex: 1,
        baseExplanation: "Full PPE including face protection is required during manual cleaning of instruments due to splash and aerosol risk from contaminated water.",
        baseXp: 15,
        followUp: {
          question: "The tech argues she's cleaning under water level so there's no splash risk. Her supervisor agrees. A surveyor observes and disagrees. Who is correct and why?",
          options: [
            "The tech and supervisor — submerged cleaning eliminates splash",
            "The surveyor — even submerged cleaning creates aerosols when instruments are lifted, brushes break the surface, and water streams can splash; PPE requirements are not based on individual risk assessment but on standard precautions",
            "The surveyor — but only because the tech might forget and lift instruments above water",
            "All three are partially correct — it depends on the instrument type"
          ],
          correctIndex: 1,
          explanation: "The surveyor is correct. Standard precautions require full PPE during instrument decontamination regardless of technique. Even submerged cleaning produces aerosols and splash when instruments are moved, brushes agitate water, and items enter/exit the basin. PPE requirements are based on the activity classification, not individual judgment of splash likelihood.",
          expertXp: 30
        }
      },
      {
        id: "dd-tr4",
        baseQuestion: "Instruments are received in SPD and the tech notices a hemostat is still clamped shut. What should she document?",
        baseOptions: [
          "Nothing — just open it and clean it",
          "Document the receiving condition and notify the OR about the process deviation"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "Instruments received in the locked/closed position represent a process deviation that should be documented and communicated back to the OR for corrective action.",
        baseXp: 15,
        followUp: {
          question: "This is the third time this week instruments from OR 4 have arrived with locked hemostats. The SPD manager has sent emails to the OR charge nurse each time. What systematic approach should replace individual notifications?",
          options: [
            "Send the emails to the OR director instead of the charge nurse",
            "Implement a formal nonconformance tracking system, trend the data by OR room/team, present findings at the perioperative quality committee, and develop targeted re-education",
            "Stop accepting instruments from OR 4 until they fix the problem",
            "Add a checklist to the transport container"
          ],
          correctIndex: 1,
          explanation: "Recurring process deviations require systematic quality improvement, not just repeated notifications. Formal nonconformance tracking allows trending by room, shift, and team. Presenting data at the perioperative quality committee creates accountability and enables targeted education. A checklist (option D) could be part of the solution but alone doesn't address the quality loop.",
          expertXp: 30
        }
      },
      {
        id: "dd-tr5",
        baseQuestion: "An OR tech places sharps (blades, needles) loose in the transport container with the other instruments. Is this correct?",
        baseOptions: [
          "Yes — all instruments go in the same container for transport",
          "No — sharps must be segregated in a puncture-resistant container or sharps holder before transport"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "Sharps must be segregated in puncture-resistant containers to prevent needlestick/sharps injuries to SPD staff during decontamination. Loose sharps in transport bins are a safety violation.",
        baseXp: 15,
        followUp: {
          question: "SPD reports 2 needlestick injuries in the past quarter from loose sharps in transport containers. The safety officer implements a new policy requiring OR teams to use sharps holders. After 1 month, compliance is 60%. What's the next step?",
          options: [
            "Terminate non-compliant staff",
            "Accept 60% as a reasonable starting point and wait for improvement",
            "Conduct a root cause analysis of the non-compliance, identify barriers (availability of holders, workflow integration, education gaps), address barriers, and re-measure in 30 days",
            "Switch to a different sharps holder brand"
          ],
          correctIndex: 2,
          explanation: "60% compliance on a safety-critical process requires immediate root cause analysis. Common barriers: sharps holders not readily available in every OR, workflow not integrated into end-of-case routine, lack of hands-on training. Address barriers, provide education, and re-measure. The goal is sustained high compliance, not punishment.",
          expertXp: 25
        }
      }
    ]
  }
];
