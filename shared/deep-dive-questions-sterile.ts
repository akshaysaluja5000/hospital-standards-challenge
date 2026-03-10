import type { DeepDiveLevel } from "./schema";

export const ddSterileStorageLevel: DeepDiveLevel = {
  id: "dd-sterile-storage",
  name: "Sterile Storage & Handling Deep Dive",
  description: "Master the nuances of sterile storage compliance with branching follow-up questions that test expert-level knowledge.",
  icon: "Microscope",
  color: "hsl(32, 95%, 55%)",
  baseLevelId: "sterile_storage",
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
    },
    {
      id: "dd-ss11",
      baseQuestion: "A sterile processing tech notices a tiny pinhole in the corner of a peel pack containing a laparoscopic grasper. The rest of the packaging appears intact. Can this instrument be used?",
      baseOptions: ["Yes — the pinhole is too small to allow contamination", "No — any breach in packaging integrity means the item is no longer considered sterile"],
      baseCorrectIndex: 1,
      baseExplanation: "Under event-related sterility, any compromise to packaging integrity — no matter how small — renders the item non-sterile. A pinhole is a breach that allows microorganism entry.",
      baseXp: 15,
      followUp: {
        question: "The surgeon is scrubbed and waiting. The OR coordinator says they have no backup grasper and the vendor rep offers a loaner instrument that arrived today but has not been processed through SPD. What is the correct course of action?",
        options: [
          "Use the loaner instrument since the vendor packaged it in sterile packaging",
          "Use the peel pack with the pinhole since the risk is minimal",
          "Delay the case until the loaner can be properly decontaminated, inspected, and sterilized through SPD — loaner instruments must go through the facility's full reprocessing cycle",
          "Have the circulator wipe the loaner with a disinfectant wipe and use it"
        ],
        correctIndex: 2,
        explanation: "Loaner instruments must go through the facility's complete reprocessing cycle regardless of vendor packaging. Vendor-supplied 'sterile' packaging does not meet the facility's sterilization verification requirements. The case must be delayed or an alternative surgical approach discussed with the surgeon.",
        expertXp: 30
      }
    },
    {
      id: "dd-ss12",
      baseQuestion: "Sterile trays are stored on shelving in a hallway alcove outside the OR suite. The alcove has no door but is covered by a curtain. Is this an acceptable sterile storage location?",
      baseOptions: ["Acceptable — the curtain provides adequate protection", "Not acceptable — sterile storage areas must be enclosed with controlled access and environmental monitoring"],
      baseCorrectIndex: 1,
      baseExplanation: "Sterile storage requires an enclosed area with controlled temperature (68-75°F), humidity (20-60%), restricted access, and protection from environmental contamination. A curtained alcove does not meet these requirements.",
      baseXp: 15,
      followUp: {
        question: "The facility argues that the alcove was approved during their last renovation ICRA and that environmental monitoring shows acceptable temperature and humidity. Does the ICRA approval make the location compliant?",
        options: [
          "Yes — ICRA approval validates the location for sterile storage",
          "No — an ICRA evaluates construction risk, not whether a location meets sterile storage standards; the location must independently meet all Joint Commission storage requirements regardless of ICRA approval",
          "Yes — as long as the curtain is antimicrobial fabric",
          "It depends on how many trays are stored there"
        ],
        correctIndex: 1,
        explanation: "ICRA approval addresses infection control risks during construction and renovation. It does not certify that a location meets the ongoing operational standards for sterile storage. The storage location must independently satisfy requirements for enclosure, access control, environmental monitoring, and protection from contamination.",
        expertXp: 25
      }
    },
    {
      id: "dd-ss13",
      baseQuestion: "A tech removes a sterilized tray from the autoclave and notices a wet spot on the outside of the wrap. The chemical indicator inside has changed color appropriately. Can the tray be stored as sterile?",
      baseOptions: ["Yes — the chemical indicator confirms successful sterilization", "No — a wet pack is considered contaminated and must be re-processed"],
      baseCorrectIndex: 1,
      baseExplanation: "A wet pack is considered contaminated because moisture wicks bacteria through packaging material. Wet packs must be re-processed regardless of chemical indicator results. The cause of the wet pack (overloading, improper loading, sterilizer malfunction) must also be investigated.",
      baseXp: 15,
      followUp: {
        question: "Investigation reveals the wet pack was caused by the tech overloading the sterilizer chamber. The other 5 trays in the same load appear dry. Should the dry trays from the same load be released for storage?",
        options: [
          "Yes — the dry trays are fine since only the wet one was compromised",
          "No — the entire load must be reprocessed because overloading compromises steam penetration and air removal for all items in the chamber, even those that appear dry",
          "Yes — but only after running a biological indicator on one of the dry trays",
          "Release the dry trays but quarantine them until the BI from the load incubates"
        ],
        correctIndex: 1,
        explanation: "Overloading compromises the sterilization process for the entire load by impeding proper steam penetration and air removal. A wet pack is evidence that the sterilization conditions were not met uniformly throughout the chamber. All items in the load must be reprocessed, and the tech should receive education on proper loading techniques.",
        expertXp: 30
      }
    },
    {
      id: "dd-ss14",
      baseQuestion: "A facility uses color-coded labels on sterile packs: green for Monday, blue for Tuesday, etc. They rotate stock using these colors to ensure oldest items are used first. Is this a compliant practice?",
      baseOptions: ["Yes — FIFO (first in, first out) rotation is a best practice for sterile storage", "No — color-coded rotation implies time-related sterility, which contradicts event-related sterility principles"],
      baseCorrectIndex: 1,
      baseExplanation: "Under event-related sterility, items remain sterile based on packaging integrity, not age. Color-coded day-of-week rotation implies items have a shelf life, which contradicts event-related sterility. Stock rotation based on time is unnecessary and can create confusion.",
      baseXp: 15,
      followUp: {
        question: "The SPD manager argues that FIFO rotation reduces waste by ensuring older stock is used before newer stock, even under event-related sterility. Is there any valid reason to maintain stock rotation in an event-related sterility system?",
        options: [
          "No — event-related sterility eliminates any need for stock rotation",
          "Yes — while sterility is event-related, routine stock rotation helps identify items that may have unnoticed packaging damage from prolonged handling and shelf time, and ensures adhesive seals remain intact",
          "Yes — but only for items sterilized with ethylene oxide",
          "No — the FDA prohibits stock rotation for sterile items"
        ],
        correctIndex: 1,
        explanation: "While event-related sterility means items don't expire based on time, reasonable stock management is still prudent. Items stored longer have more opportunity for packaging damage from repeated handling, environmental exposure, and adhesive degradation. Rotation ensures items are periodically inspected and that the oldest packaging is used while integrity is most reliably intact.",
        expertXp: 30
      }
    },
    {
      id: "dd-ss15",
      baseQuestion: "A surveyor observes that sterile supplies are stored in the same room as cleaning chemicals and disinfectants. Is this acceptable?",
      baseOptions: ["Acceptable — as long as they are on separate shelves", "Not acceptable — sterile supplies must not be stored with chemicals that could compromise packaging or contaminate items"],
      baseCorrectIndex: 1,
      baseExplanation: "Cleaning chemicals and disinfectants must not be stored in sterile supply areas. Chemical fumes can degrade packaging materials, and spills can contaminate sterile items. Chemicals must be stored in a separate, designated area.",
      baseXp: 15,
      followUp: {
        question: "The facility separates the chemicals to another room. However, the sterile storage room shares a ventilation system with the adjacent housekeeping chemical storage closet. Is this arrangement acceptable?",
        options: [
          "Yes — the chemicals are now in a separate room",
          "No — shared ventilation can transfer chemical vapors into the sterile storage area, potentially degrading packaging materials; sterile storage requires independent or filtered ventilation",
          "Yes — modern HVAC systems filter chemical vapors",
          "It depends on the types of chemicals stored next door"
        ],
        correctIndex: 1,
        explanation: "Shared ventilation between chemical storage and sterile storage can transfer chemical vapors that degrade packaging adhesives, wrapping materials, and sterile barrier systems. Sterile storage areas should have independent ventilation or appropriate filtration to prevent chemical vapor migration from adjacent spaces.",
        expertXp: 25
      }
    },
    {
      id: "dd-ss16",
      baseQuestion: "A biological indicator (BI) from this morning's first sterilizer load comes back positive (showing microbial growth). What is the immediate action?",
      baseOptions: ["Re-run the BI test to confirm the result", "Recall all items from that load and remove the sterilizer from service until the cause is identified and resolved"],
      baseCorrectIndex: 1,
      baseExplanation: "A positive biological indicator means sterilization failed. All items from that load must be immediately recalled and the sterilizer taken out of service. The cause must be identified and the sterilizer must pass three consecutive empty-chamber BI tests before returning to service.",
      baseXp: 15,
      followUp: {
        question: "Two of the recalled trays from the positive BI load have already been opened and used in surgery. The cases are complete and patients are in recovery. What notifications and actions are required?",
        options: [
          "No action needed — the chemical indicators on those trays changed color, so they were sterile",
          "Notify the surgeon, infection preventionist, and risk management; document the exposure; initiate patient surveillance for surgical site infection; investigate root cause of sterilizer failure",
          "Only notify the surgeon if the patient develops an infection",
          "File an incident report but no patient notification is necessary"
        ],
        correctIndex: 1,
        explanation: "A positive BI with items already used in surgery is a serious event requiring immediate notification of the surgical team, infection prevention, and risk management. Patient surveillance for surgical site infection must be initiated. The root cause of sterilizer failure must be investigated. Chemical indicators only confirm exposure to sterilization conditions — they do not confirm sterility.",
        expertXp: 35
      }
    },
    {
      id: "dd-ss17",
      baseQuestion: "A surveyor asks to see the facility's written policy on handling manufacturer Instructions for Use (IFU) for reprocessing surgical instruments. The facility has IFUs on file but admits they haven't been reviewed in 3 years. Is this compliant?",
      baseOptions: ["Yes — having IFUs on file meets the requirement", "No — IFUs must be periodically reviewed and updated as manufacturers revise their reprocessing instructions"],
      baseCorrectIndex: 1,
      baseExplanation: "Facilities must not only have IFUs on file but must also have a process for periodically reviewing and updating them. Manufacturers frequently update reprocessing instructions, and using outdated IFUs may result in improper sterilization.",
      baseXp: 15,
      followUp: {
        question: "During the review, the facility discovers that the manufacturer updated the IFU for a commonly used instrument set 18 months ago, changing the required sterilization cycle from 4 minutes at 270°F to 10 minutes at 270°F. The facility has been using the old 4-minute cycle. What are the implications?",
        options: [
          "No implications — both cycles use the same temperature",
          "All instruments processed with the old cycle since the IFU change may not have been properly sterilized; a risk assessment must be conducted, the cycle must be updated immediately, and the issue must be reported through the facility's quality/safety event system",
          "Only future loads need to use the new cycle; past loads were processed in good faith",
          "The facility should contact the manufacturer to negotiate keeping the 4-minute cycle"
        ],
        correctIndex: 1,
        explanation: "Using an outdated sterilization cycle that doesn't match the current manufacturer IFU means instruments may not have been properly sterilized. This requires an immediate risk assessment of patient exposure, update of the sterilization parameters, staff re-education, a quality/safety event report, and potentially patient notification depending on the risk assessment findings.",
        expertXp: 35
      }
    },
    {
      id: "dd-ss18",
      baseQuestion: "A facility stores some sterile trays in closed cabinets and others on open shelving with dust covers. A surveyor asks why there are two different storage methods. The manager says it's due to space constraints. Is mixed storage methodology acceptable?",
      baseOptions: ["Yes — both closed cabinets and covered open shelving are acceptable methods for sterile storage", "No — a facility must choose one storage method and use it consistently"],
      baseCorrectIndex: 0,
      baseExplanation: "Both closed cabinets and covered open shelving are acceptable sterile storage methods. Using both in the same facility is permitted as long as each method meets all applicable standards for environmental protection.",
      baseXp: 15,
      followUp: {
        question: "The surveyor then notices that the open shelving with dust covers is located directly beneath an HVAC supply vent. The dust covers are in place. Is this arrangement acceptable?",
        options: [
          "Yes — the dust covers protect the items from airflow",
          "No — direct airflow from HVAC vents onto sterile items can dislodge dust covers, deposit particulates, and create localized temperature and humidity variations; sterile storage should not be directly beneath supply vents",
          "Yes — HVAC air is filtered and clean",
          "It depends on whether the vent has a HEPA filter"
        ],
        correctIndex: 1,
        explanation: "Sterile items should not be stored directly beneath HVAC supply vents. Even filtered air creates direct airflow that can dislodge dust covers, deposit particulates on packaging, and create localized temperature and humidity variations. Shelving should be repositioned away from direct vent airflow.",
        expertXp: 25
      }
    },
    {
      id: "dd-ss19",
      baseQuestion: "A sterile processing department uses a commercial tracking system that scans and logs every sterilized tray from processing through distribution and return. A surveyor asks if manual log books are still needed. What is the correct answer?",
      baseOptions: ["Yes — manual logs are always required as a backup", "No — an electronic tracking system that captures all required data elements can replace manual logs if it meets documentation requirements"],
      baseCorrectIndex: 1,
      baseExplanation: "Electronic tracking systems can replace manual logs if they capture all required data elements (sterilizer number, cycle number, load contents, date, operator, BI results, etc.) and provide reliable data retrieval. A backup/disaster recovery plan should exist.",
      baseXp: 15,
      followUp: {
        question: "The electronic tracking system goes down for 4 hours during a busy surgical day. Trays are still being processed and distributed. The department has no backup documentation procedure. What risks does this create?",
        options: [
          "No risk — the system will capture the data when it comes back online",
          "Minimal risk — staff can remember which trays they processed",
          "Significant risk — without documentation, there is no traceability of which items were sterilized in which loads, making recall impossible if a sterilizer malfunction is later discovered; manual backup procedures must be immediately implemented",
          "The department should stop processing until the system is restored"
        ],
        correctIndex: 2,
        explanation: "Loss of traceability means that if a sterilizer malfunction is discovered, the facility cannot identify which items were affected. Every SPD must have a documented manual backup procedure for system downtime that captures all required data elements. This must be implemented immediately when electronic systems fail — not after the fact.",
        expertXp: 30
      }
    },
    {
      id: "dd-ss20",
      baseQuestion: "A facility has a satellite sterile storage area in the OR suite that is restocked daily from the main SPD. The satellite area has no independent temperature or humidity monitoring — it relies on the OR suite's general HVAC system. Is this compliant?",
      baseOptions: ["Yes — the OR HVAC system maintains the same conditions", "No — satellite sterile storage areas must have independent environmental monitoring to verify storage conditions are maintained"],
      baseCorrectIndex: 1,
      baseExplanation: "Satellite sterile storage areas must have their own environmental monitoring (temperature and humidity) documented. Relying on the general OR suite HVAC system does not verify that the specific storage area maintains required conditions, especially since OR temperature is often set lower than sterile storage requirements.",
      baseXp: 15,
      followUp: {
        question: "After installing monitoring, the satellite storage area consistently reads 66°F — within OR comfort range but below the 68-75°F sterile storage requirement. The OR team resists raising the temperature because surgeons prefer cooler ORs. How should this be resolved?",
        options: [
          "The OR team's preference takes priority since they work in the space daily",
          "Install supplemental heating in the satellite storage area or relocate sterile storage to a separately zoned space that can maintain 68-75°F independently of OR temperature settings",
          "Document the variance and continue — 66°F is close enough to 68°F",
          "Only stock the satellite area with items needed for the next case to minimize exposure time"
        ],
        correctIndex: 1,
        explanation: "Sterile storage temperature requirements (68-75°F) are non-negotiable and exist to protect packaging integrity. The solution is engineering-based: either install supplemental heating for the storage area, create a separately HVAC-zoned storage space, or relocate the satellite storage. Surgeon comfort preferences for OR temperature cannot override sterile storage requirements.",
        expertXp: 30
      }
    }
  ]
};
