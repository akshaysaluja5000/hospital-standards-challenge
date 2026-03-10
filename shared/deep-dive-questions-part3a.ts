import type { DeepDiveLevel } from "./schema";

export const ddOrLevel: DeepDiveLevel = {
  id: "dd-or",
  name: "OR & Sterile Technique Deep Dive",
  description: "Master OR sterile technique, gowning/gloving, draping, and counting procedures with expert-level branching questions.",
  icon: "Microscope",
  color: "hsl(0, 75%, 55%)",
  baseLevelId: "or_sterile_field",
  questions: [
    {
      id: "dd-or1",
      baseQuestion: "During a Joint Commission tracer, the surveyor observes the scrub technologist setting up the back table. Which practice demonstrates correct sterile field setup?",
      baseOptions: [
        "Opening the sterile drape toward yourself first, then away",
        "Opening the sterile drape away from yourself first, then toward yourself",
        "Opening both sides of the drape simultaneously",
        "Having the circulator open the drape while the scrub tech holds the edges"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "When creating a sterile field, the first fold of the sterile drape should be opened away from the body to prevent reaching over the sterile surface. This is a fundamental AORN-recommended practice to maintain sterility during back table setup.",
      baseXp: 15,
      followUp: {
        question: "The surveyor then asks: once the back table is set up, what is the minimum height the sterile field drape must hang over the table edges?",
        options: [
          "The drape only needs to cover the top surface",
          "The drape must hang at least 6 inches below the table edge on all sides",
          "The drape must hang to the floor on all sides",
          "The drape must extend 12 inches past the table on the instrument side only"
        ],
        correctIndex: 0,
        explanation: "The sterile field extends only to the level of the table surface. The drape hanging below the table edge is considered unsterile. Only the top surface of the draped table is considered sterile; items falling below the table level are considered contaminated.",
        expertXp: 30
      }
    },
    {
      id: "dd-or2",
      baseQuestion: "A tracer scenario: the circulator is preparing to assist the surgeon with gowning. After the surgeon performs a surgical hand scrub, what is the correct sequence for gowning and gloving?",
      baseOptions: [
        "Glove first using open technique, then don the gown",
        "Don the gown first, then use closed gloving technique",
        "Don the gown and gloves simultaneously",
        "Don the gown first, then use open gloving technique"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The standard OR protocol requires donning the sterile gown first, followed by closed gloving technique. Closed gloving prevents bare skin from contacting the outside of the sterile gloves, reducing contamination risk. This is the AORN recommended practice for surgical team members.",
      baseXp: 15,
      followUp: {
        question: "During the gowning process, which area of the surgical gown is considered sterile?",
        options: [
          "The entire gown from neck to hem",
          "The front of the gown from chest to the level of the sterile field, and the sleeves from 2 inches above the elbow to the cuff",
          "Only the sleeves from shoulder to cuff",
          "The front and back of the gown from waist up"
        ],
        correctIndex: 1,
        explanation: "Per AORN guidelines, the sterile area of a surgical gown includes the front from chest to the level of the sterile field and the sleeves from 2 inches above the elbow to the stockinette cuff. The back, neckline, shoulders, and area below the waist are considered unsterile because they cannot be directly observed by the wearer.",
        expertXp: 30
      }
    },
    {
      id: "dd-or3",
      baseQuestion: "A Joint Commission surveyor observes a laparoscopic cholecystectomy. The surgeon requests an instrument that was not included in the original case setup and needs immediate sterilization. Under what circumstances is IUSS (Immediate Use Steam Sterilization) appropriate?",
      baseOptions: [
        "Whenever the surgeon requests it to save time between cases",
        "Only when the item is needed for an emergency or urgent patient situation and no other sterile item is available",
        "For all implantable devices as a standard practice",
        "Whenever the central sterile processing department is backed up"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "IUSS (formerly called flash sterilization) should only be used when an item is needed urgently for patient care and no other properly sterilized item is available. It should never be used for convenience, to compensate for insufficient instrument inventory, or as a routine practice. Joint Commission standards and AORN guidelines restrict IUSS to emergency situations.",
      baseXp: 15,
      followUp: {
        question: "When IUSS is performed, which documentation elements are required per Joint Commission standards?",
        options: [
          "Only the item name and sterilization time",
          "Patient name, item description, reason for IUSS, cycle parameters, biological indicator results, operator name, and date/time",
          "Just the surgeon's verbal order and the circulator's initials",
          "The item name and the patient's medical record number only"
        ],
        correctIndex: 1,
        explanation: "Joint Commission requires comprehensive documentation for every IUSS cycle including: patient identification, description of the item sterilized, reason IUSS was necessary, cycle parameters (time, temperature, pressure), biological indicator results (if applicable), name of person who performed the sterilization, and date/time. This documentation supports traceability and quality monitoring.",
        expertXp: 35
      }
    },
    {
      id: "dd-or4",
      baseQuestion: "During a tracer round, the surveyor asks about surgical draping. A circulator is preparing to drape a patient for an abdominal procedure. What is the correct draping principle?",
      baseOptions: [
        "Drape from the non-sterile area toward the sterile area (far to near)",
        "Drape from the operative site outward to the periphery (near to far, clean to dirty)",
        "Drape from head to toe in a single motion",
        "Have the surgeon place all drapes since only surgeons can drape"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Surgical draping is performed from the operative site (cleanest area) outward to the periphery. This 'clean to dirty' principle prevents contamination of the surgical site by avoiding passing materials over the prepared incision area. Drapes are placed by any sterile team member, not exclusively the surgeon.",
      baseXp: 15,
      followUp: {
        question: "Once a surgical drape has been placed, the surgeon notices it is slightly misaligned. What is the correct action?",
        options: [
          "Remove the drape entirely and replace it with a new sterile drape",
          "The drape may be shifted toward the operative site but never away from it; if significantly misplaced, cover with an additional drape",
          "Pull the drape in any direction to reposition it correctly",
          "Leave it as is and proceed since repositioning is never allowed"
        ],
        correctIndex: 1,
        explanation: "Once a sterile drape is placed, it should not be repositioned toward an unsterile area because this could drag contaminants toward the surgical site. The drape may only be shifted closer to the operative site. If significantly misplaced, an additional drape should be placed on top. Removing and replacing would risk contaminating the prepared surgical field.",
        expertXp: 25
      }
    },
    {
      id: "dd-or5",
      baseQuestion: "A surveyor is evaluating implant sterilization practices. A scrub nurse is about to open a sterilized orthopedic implant tray. What must be verified regarding biological indicators before the implant can be used?",
      baseOptions: [
        "Biological indicator results are not required for implants",
        "The biological indicator results from the sterilization load must be negative (no growth) before the implant is released for use",
        "Only chemical indicator results need to be checked",
        "Biological indicators are checked only once per week for implant loads"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Per Joint Commission standards and AAMI guidelines, biological indicator (BI) results must show no growth before implantable devices are released for patient use. A biological indicator containing Geobacillus stearothermophilus spores must be included in every load containing implants, and results must be available before the implant is used.",
      baseXp: 15,
      followUp: {
        question: "The BI incubation results for an implant load are not yet available, but the surgeon insists the implant is needed immediately for an emergency case. What is the appropriate action?",
        options: [
          "Refuse to release the implant under any circumstances",
          "The implant may be released with documented informed consent from the surgeon and notification to the infection preventionist, with BI results followed up",
          "Release the implant without any additional steps since the chemical indicator passed",
          "Contact the manufacturer for authorization to use the implant"
        ],
        correctIndex: 1,
        explanation: "In a documented emergency when BI results are unavailable, the implant may be released if the surgeon accepts responsibility with informed consent, and the infection preventionist is notified. All chemical indicators must have passed. The BI results must still be followed up and documented, and if the BI later shows growth, the surgeon and patient must be notified for appropriate follow-up.",
        expertXp: 35
      }
    },
    {
      id: "dd-or6",
      baseQuestion: "A Joint Commission surveyor observes OR traffic during an active surgical procedure. Which finding would be cited as non-compliant?",
      baseOptions: [
        "The circulating nurse leaving the room once during the case to retrieve supplies",
        "Multiple staff members entering and exiting the OR repeatedly with the door propped open",
        "An anesthesia provider entering through the substerile corridor",
        "A single visitor entering the OR before the incision with proper attire"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Excessive OR traffic and door openings significantly increase airborne contamination and surgical site infection risk. Propping doors open violates positive-pressure ventilation requirements. Joint Commission standards require limiting OR door openings and traffic to essential personnel only. Studies show each door opening increases bacterial colony counts in the surgical field.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks about the OR ventilation standard that makes door management critical. What are the minimum air exchange requirements for an operating room?",
        options: [
          "10 total air exchanges per hour with 2 fresh air exchanges",
          "20 total air exchanges per hour with 4 fresh (outside) air exchanges",
          "15 total air exchanges per hour with 3 fresh air exchanges",
          "25 total air exchanges per hour with 5 fresh air exchanges"
        ],
        correctIndex: 2,
        explanation: "Per ASHRAE and the FGI Guidelines for Design and Construction of Hospitals, operating rooms require a minimum of 15 total air exchanges per hour with at least 3 of those being fresh (outside) air exchanges. The OR must maintain positive pressure relative to adjacent corridors to prevent contaminated air from entering when doors are opened.",
        expertXp: 30
      }
    },
    {
      id: "dd-or7",
      baseQuestion: "During a perioperative tracer, the surveyor asks a scrub technologist about surgical attire requirements. Which statement about surgical caps/hoods is compliant with Joint Commission and AORN standards?",
      baseOptions: [
        "Cloth skull caps that leave the sides and back of the head exposed are acceptable",
        "All head and facial hair must be completely covered by a surgical cap or hood",
        "Surgical caps are only required for the surgeon and scrub tech",
        "Caps are optional if the staff member will not be near the sterile field"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "AORN guidelines and Joint Commission standards require that all head and facial hair, including sideburns and the nape of the neck, be completely covered when in the semi-restricted and restricted areas of the surgical suite. This applies to all personnel entering these areas, not just scrubbed team members.",
      baseXp: 15,
      followUp: {
        question: "The surveyor also inquires about surgical mask requirements. When must a surgical mask be worn in the OR suite?",
        options: [
          "Only when the patient is immunocompromised",
          "Masks must be worn in the restricted area (OR) when sterile supplies are open or scrubbed persons are present",
          "Masks are only required by the surgeon and first assistant",
          "Masks are required only during procedures lasting longer than one hour"
        ],
        correctIndex: 1,
        explanation: "Surgical masks must be worn in the restricted area whenever sterile supplies are opened or scrubbed team members are present. The mask must fully cover the nose and mouth and be secured to prevent venting. This requirement applies to all personnel in the room, including observers, anesthesia staff, and sales representatives.",
        expertXp: 25
      }
    },
    {
      id: "dd-or8",
      baseQuestion: "A tracer scenario: the circulator and scrub tech are preparing to perform the initial surgical count before a total knee replacement. Which items must be included in the surgical count?",
      baseOptions: [
        "Only radiopaque sponges",
        "Sponges, sharps (needles/blades), instruments, and miscellaneous small items (vessel loops, bulldogs, etc.)",
        "Only sponges and instruments",
        "Only items that are radiopaque"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Per AORN guidelines and Joint Commission requirements, surgical counts must include all sponges (radiopaque), sharps (suture needles, blades, safety pins), instruments, and miscellaneous small items such as vessel loops, bulldog clamps, and cottonoids. Counts must be performed audibly and concurrently by the scrub person and circulating nurse.",
      baseXp: 15,
      followUp: {
        question: "During the closing count, the scrub tech and circulator discover a sponge count discrepancy. What is the correct sequence of actions?",
        options: [
          "Immediately notify the surgeon, recount, search the field and floor, and if unresolved obtain an intraoperative X-ray before wound closure",
          "Complete the closure and obtain a postoperative X-ray",
          "Recount three times and if still incorrect, document the discrepancy and close",
          "Notify risk management before taking any action"
        ],
        correctIndex: 0,
        explanation: "When a count discrepancy occurs, the immediate sequence per AORN guidelines is: (1) notify the surgeon immediately, (2) repeat the count, (3) conduct a thorough search of the surgical field, drapes, floor, linen, and trash, (4) if the item is still unaccounted for, an intraoperative X-ray must be obtained before wound closure. An incident report must be filed and the event documented in the patient record.",
        expertXp: 35
      }
    },
    {
      id: "dd-or9",
      baseQuestion: "A surveyor observes a break in sterile technique during a procedure. The surgeon's gown sleeve contacts the IV pole adjacent to the sterile field. What should happen next?",
      baseOptions: [
        "Continue the procedure since the IV pole is within the sterile field boundary",
        "The contaminated gown sleeve must be covered with a sterile sleeve cover or the surgeon must re-gown and re-glove",
        "Wipe the sleeve with an alcohol prep pad and continue",
        "Only document the break and continue without intervention"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Any contact between a sterile gown and an unsterile surface constitutes a break in sterility and must be corrected immediately. The contaminated area must either be covered with an impervious sterile drape/sleeve or the team member must change the gown and re-glove. Failure to address breaks in technique is a serious patient safety concern and Joint Commission compliance issue.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks: who is responsible for identifying and calling out a break in sterile technique during a surgical procedure?",
        options: [
          "Only the circulating nurse",
          "Only the charge nurse or OR manager",
          "Every member of the surgical team has the responsibility to identify and immediately communicate any observed break in sterile technique",
          "Only the infection preventionist who monitors via camera"
        ],
        correctIndex: 2,
        explanation: "All surgical team members share the responsibility for maintaining sterile technique and must speak up immediately when a contamination event occurs. This is consistent with Joint Commission patient safety goals regarding communication and a culture of safety. No hierarchy should prevent any team member from reporting a break in sterility.",
        expertXp: 25
      }
    },
    {
      id: "dd-or10",
      baseQuestion: "The circulator needs to open a sterile instrument tray onto the back table. Which technique is correct per AORN standards?",
      baseOptions: [
        "Open the wrapper toward yourself first, then open the far side",
        "Open the far flap first, then the side flaps, and the near flap last, without reaching over the sterile contents",
        "Remove the tray from the wrapper and place it on the table bare",
        "Have the scrub tech open the tray since only scrubbed personnel can handle sterile items"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "When opening a wrapped sterile package, the circulator opens the far flap first (away from body), then each side flap, and finally the near flap (toward body) last. This sequence prevents the circulator from reaching over the sterile contents at any point, maintaining sterility. The outer wrapper serves as the sterile table cover.",
      baseXp: 15,
      followUp: {
        question: "When opening peel-pack sterile supplies to deliver to the scrub tech, what is the correct method?",
        options: [
          "Tear the package open and drop the contents onto the sterile field from a height of 12 inches",
          "Peel the package open, expose the contents, and present the item to the scrub tech or gently flip it onto the sterile field without reaching over the field",
          "Open the package and hand the item directly to the scrub tech touching the item with bare hands",
          "Open the package and place it on the sterile field with the packaging still attached"
        ],
        correctIndex: 1,
        explanation: "Peel-pack items should be opened by peeling back the edges of the packaging, exposing the sterile contents, and either presenting them to the scrub person to grasp or gently flipping them onto the sterile field without reaching over the sterile area. The circulator must not touch the sterile contents or allow the unsterile packaging edges to contact the sterile field.",
        expertXp: 25
      }
    },
    {
      id: "dd-or11",
      baseQuestion: "A surveyor asks about splash basin management during a procedure. What is the current AORN recommendation regarding splash basins on the sterile field?",
      baseOptions: [
        "Splash basins should be filled at the start of the case and refilled as needed",
        "Splash basins should be filled immediately before use and the fluid discarded after each use to minimize bacterial contamination",
        "Splash basins are no longer recommended and should not be used in any procedure",
        "Splash basins should contain an antiseptic solution to remain sterile throughout the case"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "AORN recommends that splash basins be filled with sterile fluid immediately before use and the contents discarded after each use. Allowing warm fluid to remain standing in an open basin creates an environment conducive to bacterial growth. Solutions should not be left standing on the sterile field for extended periods.",
      baseXp: 15,
      followUp: {
        question: "When pouring sterile solutions onto the sterile field, which practice is correct?",
        options: [
          "Pour from a height of at least 12 inches to prevent splash-back",
          "Pour the full container at once since recapping is not allowed",
          "Pour gently with the label facing up, from a sufficient height to prevent contact between the bottle and the sterile container, without splashing",
          "Allow the scrub tech to hold the container while the circulator pours"
        ],
        correctIndex: 2,
        explanation: "Sterile solutions should be poured gently with the label facing up (to protect the label and allow identification) from a height sufficient to prevent the unsterile bottle from contacting the sterile receiving container. Splashing must be minimized as strike-through moisture can compromise the sterile barrier. The entire contents should be used or the remainder discarded; opened bottles should not be recapped for later use.",
        expertXp: 25
      }
    },
    {
      id: "dd-or12",
      baseQuestion: "During a tracer, a surveyor evaluates back table organization. What is the primary purpose of organizing the back table in a standardized manner?",
      baseOptions: [
        "To make the setup look neat for inspections",
        "To ensure efficiency, reduce errors, and allow any scrub person to quickly locate instruments during critical moments of the procedure",
        "To minimize the number of instruments needed",
        "To reduce the time needed for turnover between cases"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Standardized back table organization is a patient safety practice that ensures any scrub team member can quickly locate needed instruments, especially during emergencies. Consistent setup reduces the risk of retained surgical items, facilitates accurate surgical counts, and supports efficient instrument handoff during critical procedural moments.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks about the mayo stand. What is the correct positioning and management of the mayo stand during a procedure?",
        options: [
          "The mayo stand should be positioned at the foot of the bed and remain stationary throughout the case",
          "The mayo stand should be positioned over the patient at a height that allows the surgeon easy access to frequently used instruments, and its drape should extend below the tray on all sides",
          "The mayo stand is optional and only used for orthopedic procedures",
          "The mayo stand should be covered with a clear plastic drape for visibility"
        ],
        correctIndex: 1,
        explanation: "The mayo stand is positioned over the operative site to hold the most frequently used instruments for immediate access. It is set at a height that does not impede the surgeon's view or movement. The sterile mayo stand cover drapes over the tray and extends below on all sides. Only the top surface is considered sterile. The scrub person manages instruments on the mayo stand throughout the procedure.",
        expertXp: 30
      }
    },
    {
      id: "dd-or13",
      baseQuestion: "A Joint Commission surveyor checks the OR thermostat during a procedure. The room temperature reads 78 degrees F. What is the compliance concern?",
      baseOptions: [
        "There is no concern; OR temperature has no regulatory standard",
        "The temperature exceeds the recommended OR range of 68-75 degrees F, which can increase microbial growth and affect staff performance",
        "The temperature is too low for patient comfort",
        "The temperature is only a concern if the patient complains"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Per ASHRAE, FGI Guidelines, and Joint Commission standards, the recommended OR temperature range is 68-75 degrees F (20-24 degrees C). Temperatures above this range promote microbial proliferation, increase surgical site infection risk, and can cause discomfort and fatigue for the surgical team, affecting performance and patient safety.",
      baseXp: 15,
      followUp: {
        question: "The surveyor also checks the humidity level in the OR and finds it at 15%. What is the compliance concern?",
        options: [
          "Low humidity is preferred in the OR for instrument preservation",
          "The humidity is below the recommended range of 20-60%, which increases the risk of electrostatic discharge and can dry mucous membranes",
          "Humidity is not a regulated parameter in the OR",
          "Low humidity only matters in the sterile processing department"
        ],
        correctIndex: 1,
        explanation: "The recommended OR relative humidity range is 20-60% per ASHRAE and FGI Guidelines. Humidity below 20% increases the risk of electrostatic discharge (which can ignite flammable anesthetic agents or cause equipment malfunction), dries mucous membranes of patients and staff, and can affect the integrity of some sterile packaging materials. Humidity above 60% promotes microbial growth and condensation.",
        expertXp: 30
      }
    },
    {
      id: "dd-or14",
      baseQuestion: "A surveyor observes a surgical technologist who has been scrubbed and is standing at the sterile field. The tech steps away from the table to answer a question from the circulator across the room. What is the concern?",
      baseOptions: [
        "There is no concern as long as the tech does not touch anything unsterile",
        "The scrubbed person should remain within the sterile field; wandering away from the sterile area compromises the sterile boundary and increases contamination risk",
        "The tech should remove gloves before walking away",
        "This is acceptable if the tech keeps hands above waist level"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Scrubbed personnel must remain within the sterile field throughout the procedure. Stepping away from the sterile area increases the risk of inadvertent contamination of the gown and gloves by contact with unsterile surfaces or objects. If a scrubbed person must leave the sterile field, they should re-gown and re-glove upon return.",
      baseXp: 15,
      followUp: {
        question: "If two scrubbed team members need to pass each other at the sterile field, what is the correct movement?",
        options: [
          "They should pass back to back or front to front (sterile to sterile)",
          "They should pass with one person turning sideways",
          "One person should step out of the sterile area to let the other pass",
          "They should pass as quickly as possible in any orientation"
        ],
        correctIndex: 0,
        explanation: "When two scrubbed persons must pass each other, they should pass back to back (unsterile to unsterile) or front to front (sterile to sterile). This principle ensures that sterile surfaces face sterile surfaces and unsterile surfaces face unsterile surfaces, minimizing the risk of cross-contamination. A scrubbed person should never turn their back toward the sterile field.",
        expertXp: 25
      }
    },
    {
      id: "dd-or15",
      baseQuestion: "During a tracer, the surveyor asks the circulator about shoe cover requirements in the OR. Which statement reflects current evidence-based practice?",
      baseOptions: [
        "Shoe covers are mandatory for all personnel entering the OR at all times",
        "Shoe covers are not required by AORN for infection prevention but may be used for personal protection against blood/fluid exposure; dedicated OR shoes are an acceptable alternative",
        "Shoe covers must be changed between every case",
        "Shoe covers are only needed during orthopedic procedures"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Current AORN guidelines indicate that shoe covers have not been shown to reduce surgical site infection rates. They are primarily used as personal protective equipment (PPE) to protect the healthcare worker's shoes from blood and body fluid contamination. Clean, dedicated OR shoes are an acceptable alternative. Facilities should follow their institutional policy based on current evidence.",
      baseXp: 15,
      followUp: {
        question: "The surveyor follows up by asking when shoe covers ARE specifically required in the perioperative setting?",
        options: [
          "During all surgical procedures without exception",
          "When gross contamination with blood or body fluids is anticipated or when entering areas with specific infection control requirements",
          "Only during cardiac and transplant procedures",
          "Only when the patient has a known bloodborne pathogen"
        ],
        correctIndex: 1,
        explanation: "Shoe covers are specifically indicated as PPE when gross contamination with blood or body fluids is anticipated (Standard Precautions), and in specific infection control situations such as entering protective environment rooms. The decision should be based on risk assessment and Standard Precautions rather than a blanket policy for all cases.",
        expertXp: 25
      }
    },
    {
      id: "dd-or16",
      baseQuestion: "A surveyor reviews the count policy during a cesarean section. The initial sponge count was performed and documented. At what additional points during the procedure must counts be performed?",
      baseOptions: [
        "Only at the initial setup and final closing count",
        "At initial setup, before closure of a cavity within a cavity (uterus), before wound closure begins, at skin closure, and at any time there is a change in scrub personnel",
        "At the beginning and end of the case only, plus whenever the surgeon requests it",
        "Counts are not required for cesarean sections"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Per AORN guidelines, surgical counts must be performed: (1) before the procedure begins, (2) before closure of a cavity within a cavity (e.g., uterus during C-section), (3) before wound closure begins, (4) at skin closure or end of procedure, and (5) at the time of permanent relief of either the scrub person or circulator. Additional counts may be performed at the surgeon's request or any time a discrepancy is suspected.",
      baseXp: 15,
      followUp: {
        question: "Who is ultimately accountable for ensuring the count is correct before the wound is closed?",
        options: [
          "The scrub technologist alone",
          "The circulating nurse alone",
          "The surgeon bears ultimate responsibility for wound closure with a correct count, while the scrub person and circulator share responsibility for performing accurate counts",
          "The charge nurse who oversees the department"
        ],
        correctIndex: 2,
        explanation: "While the scrub person and circulating nurse are jointly responsible for performing and verifying surgical counts, the surgeon bears the ultimate responsibility for ensuring no retained items at wound closure. The surgeon should not close until counts are reconciled. All three roles share accountability for patient safety, and this shared responsibility must be documented per Joint Commission standards.",
        expertXp: 30
      }
    },
    {
      id: "dd-or17",
      baseQuestion: "A surveyor observes the circulator opening a basin set. The outer wrapper integrity indicator has changed color, but the circulator notices a small tear in the inner wrapper. What should the circulator do?",
      baseOptions: [
        "Use the basin set since the integrity indicator shows sterilization occurred",
        "Reject the package; any compromise in packaging integrity means the contents cannot be considered sterile regardless of indicator results",
        "Tape over the tear and use the set",
        "Open only the basins that are not near the tear"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A tear, hole, or any compromise in sterile packaging integrity renders the contents unsterile regardless of chemical indicator results. The package must be rejected and returned to sterile processing for reprocessing. Event-related sterility means that the sterility of an item is maintained until the packaging is compromised by an event such as a tear, moisture, or other breach.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks about event-related sterility. Which factors can compromise the sterility of a properly sterilized package during storage?",
        options: [
          "Only the expiration date on the package",
          "Moisture, tears/punctures, excessive handling, improper storage conditions (dust, compression), and broken seals",
          "Only direct contact with a contaminated surface",
          "Sterile packages remain sterile indefinitely once processed"
        ],
        correctIndex: 1,
        explanation: "Event-related sterility recognizes that items remain sterile until a specific event compromises the packaging. Events that can break sterility include: moisture contamination (strike-through), tears or punctures, excessive handling that degrades packaging, improper storage (dust exposure, compression from overstacking), broken heat seals, and environmental contamination. Properly maintained packages with intact barriers remain sterile indefinitely.",
        expertXp: 30
      }
    },
    {
      id: "dd-or18",
      baseQuestion: "During a procedure, the scrub technologist notices a small hole in their right glove. They are currently holding a retractor for the surgeon. What is the correct immediate action?",
      baseOptions: [
        "Finish holding the retractor and change gloves at the next convenient opportunity",
        "Alert the team, step back from the field, and immediately change the compromised glove using a sterile technique; if the outer gown cuff is contaminated, the gown must also be changed",
        "Apply a second glove over the compromised one",
        "Apply skin adhesive over the hole and continue"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A glove perforation is an immediate break in the sterile barrier and must be corrected as soon as it is identified. The scrubbed person must alert the team, step back from the sterile field, and have the contaminated glove removed and replaced with a new sterile glove. If the gown cuff is potentially contaminated, the gown must also be changed. Double gloving is recommended to reduce perforation exposure risk.",
      baseXp: 15,
      followUp: {
        question: "What does current evidence suggest about double gloving in the OR?",
        options: [
          "Double gloving is unnecessary and reduces tactile sensation without benefit",
          "Double gloving significantly reduces the risk of inner glove perforation and blood exposure; it is recommended by AORN for all invasive procedures, especially those involving sharp instruments or bone",
          "Double gloving is only required for HIV-positive patients",
          "Double gloving is required only by the surgeon, not the scrub tech"
        ],
        correctIndex: 1,
        explanation: "Evidence demonstrates that double gloving reduces the risk of inner glove perforation by up to 87% and significantly decreases blood contact with the surgical team's skin. AORN recommends double gloving for all surgical procedures, particularly those involving sharp instruments, orthopedic hardware, or prolonged cases. Indicator glove systems (colored inner glove) facilitate early detection of outer glove perforation.",
        expertXp: 30
      }
    },
    {
      id: "dd-or19",
      baseQuestion: "A Joint Commission surveyor reviews the OR schedule and notes that a room is being turned over for the next case. The environmental services (EVS) staff has completed terminal cleaning. What temperature should the OR be brought to before the next patient enters?",
      baseOptions: [
        "Any temperature the surgeon prefers",
        "Between 68-75 degrees F (20-24 degrees C) per ASHRAE and facility standards, with adjustments per patient population as needed",
        "The room should be as cold as possible to reduce bacterial growth",
        "Temperature only matters during the procedure, not during setup"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The OR temperature should be within the 68-75 degrees F (20-24 degrees C) range per ASHRAE standards before the next case begins. Temperature may be adjusted for specific patient populations (e.g., pediatric or burn patients may require warmer settings). The room must be at the appropriate temperature before sterile supplies are opened and the patient enters, as temperature affects both sterility and patient normothermia.",
      baseXp: 15,
      followUp: {
        question: "What are the key environmental parameters that must be verified and documented before setting up for the next surgical case?",
        options: [
          "Only room cleanliness",
          "Temperature (68-75 degrees F), humidity (20-60%), positive pressure relative to corridor, minimum air exchanges (15/hour with 3 fresh), and terminal cleaning completion",
          "Only temperature and humidity",
          "Only cleaning verification and instrument availability"
        ],
        correctIndex: 1,
        explanation: "Before setting up for the next case, all environmental parameters must be within specification: temperature (68-75 degrees F), relative humidity (20-60%), positive pressure relationship maintained, minimum 15 air exchanges per hour with 3 fresh air exchanges, and confirmation that terminal cleaning has been completed. These parameters must be monitored, documented, and any out-of-range readings must trigger corrective action per Joint Commission standards.",
        expertXp: 35
      }
    },
    {
      id: "dd-or20",
      baseQuestion: "A surveyor asks about the management of sharps during a procedure. During a tracer, the circulator is observed recapping a used suture needle with her fingers before placing it in the sharps counter. What is the compliance issue?",
      baseOptions: [
        "There is no compliance issue; recapping needles is standard practice",
        "Used needles and sharps must never be recapped by hand; they should be handled with instruments (needle holders) and placed directly into a designated sharps container or counted on a needle counter/foam pad using a hands-free technique",
        "Only the scrub tech can handle sharps",
        "The needle should be broken before disposal"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "OSHA Bloodborne Pathogen Standard prohibits recapping needles by hand due to the high risk of needlestick injury. In the OR, sharps must be managed using a hands-free passing technique (neutral zone) and handled with instruments rather than fingers. Used needles should be placed on a magnetic needle counter pad or in a designated sharps container for counting purposes.",
      baseXp: 15,
      followUp: {
        question: "The surveyor asks about the neutral zone or hands-free technique for sharps transfer. What does this practice involve?",
        options: [
          "The surgeon verbally announces when passing a sharp instrument",
          "A designated safe zone (basin, magnetic mat, or designated area on the mayo stand) where sharps are placed by one team member and picked up by another, eliminating hand-to-hand transfer of sharp instruments",
          "The scrub tech always holds the sharp end when passing to the surgeon",
          "Sharps are only passed during designated pause points in the procedure"
        ],
        correctIndex: 1,
        explanation: "The neutral zone (also called hands-free technique or safe zone) is a designated area on the sterile field where sharp instruments are placed by one person and picked up by another, eliminating simultaneous hand-to-hand contact with sharp instruments. This AORN-recommended practice significantly reduces percutaneous injuries among surgical team members. The neutral zone should be established at the beginning of each procedure and consistently used throughout.",
        expertXp: 30
      }
    }
  ]
};
