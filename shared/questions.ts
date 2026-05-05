import type { Level } from "./schema";

const hospitalLevelsRaw: Level[] = [
  {
    id: "transport",
    name: "Transport of Instruments",
    description: "Master the proper handling and transport of surgical instruments from OR to sterile processing.",
    icon: "Truck",
    color: "hsl(152, 82%, 39%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Transport of Instruments",
      plainLanguageSummary: "Instruments must be handled safely from the moment a case ends to the moment they reach SPD decontamination. Gross bioburden must be removed at the point of use, hinged instruments must be open, containers must be sealed, and transport must follow designated soiled pathways.",
      keyOperationalExpectations: [
        "Remove gross bioburden (blood, tissue) at the point of use before transport.",
        "Place all hinged instruments in the open/unhinged position.",
        "Transport in closed, leak-proof containers with secured lids.",
        "Use designated soiled corridors — never clean corridors or patient care areas.",
        "Wear full PPE (gloves, gown, face shield/goggles, mask) when handling soiled instruments.",
      ],
      commonRiskPoints: [
        "Gross bioburden left on instruments — dried-on tissue and blood makes SPD decontamination significantly less effective.",
        "Hinged instruments locked closed during transport, blocking cleaning solution from reaching box locks and jaw areas.",
        "Lids left unsecured on transport containers, creating splash and contamination risk in soiled corridors.",
        "Transport through clean corridors or shared elevators with clean supply carts.",
        "Clean red bins stored in the soiled utility room instead of the clean supply room.",
      ],
      cmsTags: ["IC.02.02.01", "ST79"],
    },
    studyMaterial: [
      {
        title: "What Must Be Done at the Point of Use Before Transporting Instruments?",
        content: "Gross bioburden — blood, tissue, and bone fragments — must be removed from instruments at the point of use immediately after the case ends. Use enzymatic spray or a pre-soak solution. Don't wait for SPD to handle it: dried bioburden is far harder to remove and makes decontamination less effective.",
        keyPoint: "Remove gross bioburden at the point of use before transport. Never leave it for SPD.",
        category: "rule",
      },
      {
        title: "What Does Enzymatic Spray Actually Do?",
        content: "Enzymatic spray prevents bioburden from drying and hardening onto instrument surfaces during transport. It is NOT a disinfectant or sterilant — it does not kill microorganisms. Actual disinfection and sterilization happen at SPD during reprocessing.",
        keyPoint: "Enzymatic spray prevents drying only. It does NOT disinfect or sterilize.",
        category: "definition",
      },
      {
        title: "How Must Hinged Instruments Be Positioned for Transport?",
        content: "All hinged instruments — scissors, clamps, hemostats — must be in the open, unhinged position before transport. This allows cleaning solution to reach box locks and jaw areas where bioburden accumulates. Heavy instruments go on the bottom of the tray; delicate instruments on top.",
        keyPoint: "Open/unhinged for transport. Heavy on bottom, delicate on top.",
        category: "rule",
      },
      {
        title: "What Are the 4 Required PPE Elements When Handling Soiled Instruments?",
        content: "Full PPE is required when handling soiled instruments at the point of use and in the soiled utility room: gloves, fluid-resistant gown, face shield or goggles, AND a mask. Missing any one element is incomplete PPE and a compliance finding.",
        keyPoint: "All 4 required: gloves + gown + eye protection (face shield or goggles) + mask.",
        category: "number",
      },
      {
        title: "When Must the Soiled Instrument Container Lid Be Secured?",
        content: "Soiled instruments must be transported in rigid, leak-proof containers with the lid secured before transport begins. An unsecured lid creates splash and contamination risk in soiled corridors. Applying enzymatic spray and then leaving the lid off is non-compliant.",
        keyPoint: "Lid must be fully secured before the container leaves the OR.",
        category: "rule",
      },
      {
        title: "Can Soiled Instruments Ever Be Transported Through a Clean Corridor?",
        content: "Soiled instruments must travel exclusively through designated soiled corridors. Distance and convenience never justify using a clean corridor or patient care area. Even 20 feet is too far — if there's a clean-area shortcut, it cannot be used.",
        keyPoint: "Soiled corridor only. No shortcuts through clean areas, ever, regardless of distance.",
        category: "rule",
      },
      {
        title: "What 4 Elements Must Every Soiled Utility Room Have?",
        content: "A soiled utility room must have all four of the following: (1) pre-cleaner or enzymatic solution, (2) full PPE — gloves, gown, eye protection, mask, (3) proper waste receptacles, and (4) a hand hygiene station. Missing any single element is a finding.",
        keyPoint: "Pre-cleaner + PPE + waste receptacles + hand hygiene station. All 4 required.",
        category: "number",
      },
      {
        title: "Where Do Clean Bins Get Stored?",
        content: "Clean red bins and rigid transport containers must be stored in the clean supply room when not in use. Storing clean containers in the soiled utility room creates cross-contamination risk. This is a common finding surveyors specifically look for.",
        keyPoint: "Clean bins go in the clean supply room — not the soiled utility room.",
        category: "scenario",
      },
      {
        title: "Who Is Responsible for Point-of-Use Prep?",
        content: "OR staff at the point of use are responsible for all preparation steps: removing gross bioburden, opening instruments to the unhinged position, applying enzymatic spray, and securing the lid. SPD technicians receive the prepared containers — they do not perform point-of-use preparation.",
        keyPoint: "OR staff prep at point of use. SPD staff receive, not prepare.",
        category: "definition",
      },
      {
        title: "Why Must Instruments Be Transported Promptly After a Case Ends?",
        content: "Once a surgical case ends, instruments should be prepared and transported to SPD promptly. Leaving soiled instruments sitting on the back table allows bioburden to dry, significantly reducing the effectiveness of decontamination. Delay is the primary risk.",
        keyPoint: "Transport promptly. Dried bioburden is the main consequence of delay.",
        category: "scenario",
      },
      {
        title: "A Common Mistake Is Instruments Being Locked During Transport. Why Is This a Problem?",
        content: "Locking instruments prevents cleaning solution from reaching box locks and jaw areas during decontamination.",
        keyPoint: "Locked/closed instruments during transport = finding. All hinged = open position.",
        category: "mistake",
        extraInfo: "A surveyor observing hemostats and clamps locked in the closed position inside a transport bin is a finding. Surveyors will look into open transport containers for this.",
      },
      {
        title: "Is Wearing Gloves, Gown, and Goggles Without a Mask Compliant PPE?",
        content: "A tech wearing gloves, gown, and goggles but no mask is non-compliant. All four PPE elements are always required together when handling soiled instruments. Partial PPE — regardless of which element is missing — does not satisfy the standard.",
        keyPoint: "Partial PPE is not acceptable. All 4 elements every time.",
        category: "mistake",
      },
    ],
    questions: [
      {
        id: "t1",
        question: "A surveyor watches a scrub tech spray enzymatic pre-cleaner on instruments, close the container lid, and transport it via the soiled corridor. Is this compliant?",
        options: [
          "Compliant — the tech correctly applied enzymatic spray, secured the lid, and used the designated soiled corridor",
          "Non-Compliant — instruments must be rinsed with sterile water before enzymatic spray is applied at point of use",
          "Non-Compliant — enzymatic spray should only be applied by SPD staff in the decontamination area, not by OR techs",
          "Non-Compliant — the lid should remain open during transport to allow the enzymatic spray to off-gas properly"
        ],
        correctIndex: 0,
        explanation: "This IS compliant. The tech correctly applied enzymatic spray, secured the lid, and used the designated soiled corridor for transport.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t2",
        question: "A surveyor observes hemostats and clamps locked in the closed position inside a transport bin headed to SPD. What is the concern?",
        options: [
          "The instruments should be in the open/unhinged position so all surfaces can be cleaned",
          "Locked instruments are preferred for transport to prevent jaw damage and maintain alignment during movement",
          "The instruments should be separated and individually wrapped to protect delicate tips during transport",
          "The instruments need to be rinsed with sterile water and dried before transport to SPD"
        ],
        correctIndex: 0,
        explanation: "Hinged instruments must be open/unhinged for transport so cleaning solution can reach box locks and jaw areas where bioburden accumulates.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t3",
        question: "After a case, the circulator places clean red bins with lids in the soiled utility room for storage. Is this the correct storage location?",
        options: [
          "Bins used for soiled instruments should be staged in the soiled utility room for workflow efficiency",
          "Storing them in the soiled utility room keeps them accessible for immediate use after cases",
          "Clean bins must be stored in the clean supply room to prevent cross-contamination before use",
          "Clean bins should be stored in the OR sub-sterile corridor for fastest access during turnover"
        ],
        correctIndex: 2,
        explanation: "Clean red bins/rigid containers with lids must be stored in the clean supply room when not in use — never in the soiled utility room.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t4",
        question: "A surveyor asks a tech what PPE the soiled utility room should have available. Which answer demonstrates full compliance?",
        options: [
          "Gloves, mask, and face shield or goggles — gowns are not required for soiled utility room access",
          "Gloves, gown, and a mask — eye protection is only required during active decontamination procedures",
          "Gloves, gown, and eye protection — masks are only mandated when aerosol-generating tasks are performed",
          "Gloves, gown, face shield or goggles, and mask"
        ],
        correctIndex: 3,
        explanation: "Full PPE for soiled instrument handling includes gloves, gown, face shield or goggles, AND mask. Missing any element is incomplete.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t5",
        question: "A scrub tech removes gross bioburden, applies enzymatic spray, but leaves the lid off during transport to allow ventilation. Is this acceptable?",
        options: [
          "Acceptable — open containers allow visual confirmation that instruments remain submerged in enzymatic solution",
          "Not Acceptable — the lid must be secured before transport to prevent contamination and splashing during movement",
          "Acceptable — as long as enzymatic spray was applied, the lid is optional during short transport distances",
          "Acceptable — ventilation prevents buildup of enzymatic fumes and reduces anaerobic conditions inside the container"
        ],
        correctIndex: 1,
        explanation: "The lid must be secured before transport. Open containers risk contamination and splashing during movement through corridors.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t6",
        question: "The OR is 20 feet from SPD. A tech takes soiled instruments through the clean core because it's faster. The soiled corridor would take 3 minutes longer. Is the shortcut acceptable?",
        options: [
          "Facility policy allows clean core transport when the soiled corridor adds more than 2 minutes to transit time",
          "Soiled instruments must always use the soiled corridor regardless of distance or convenience",
          "As long as the tech wears full PPE and the container is sealed, any corridor may be used",
          "The short distance and sealed container minimize any meaningful cross-contamination risk"
        ],
        correctIndex: 1,
        explanation: "Distance and convenience never justify transporting soiled instruments through clean areas. Designated soiled corridors must always be used.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t7",
        question: "During a tracer, a surveyor notes that a surgical case ended 10 minutes ago and instruments are sitting untreated on the back table. What is the primary risk?",
        options: [
          "Residual moisture will cause corrosion on the instrument surfaces within minutes",
          "The enzymatic spray window will expire, requiring the instruments to be fully soaked at SPD",
          "Bioburden will dry on the instruments, making decontamination less effective",
          "Airborne contaminants will colonize the exposed instruments, requiring extended sterilization cycles"
        ],
        correctIndex: 2,
        explanation: "The primary concern is bioburden drying on instrument surfaces. Dried-on tissue and blood is much harder for SPD to remove during decontamination.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t8",
        question: "A surveyor sees heavy retractors placed on top of microsurgical instruments in a transport tray. Is this a concern?",
        options: [
          "Retractors and microsurgical instruments are routinely transported together without separation requirements",
          "Heavy instruments must go on the bottom to prevent damage to delicate instruments",
          "Instrument placement within the tray does not matter as long as the lid is properly secured",
          "The enzymatic spray solution cushions instruments during transport, preventing contact damage"
        ],
        correctIndex: 1,
        explanation: "Heavy instruments must be placed on the bottom of the tray. Stacking heavy items on top of delicate instruments causes damage.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t9",
        question: "Pre-cleaner solution is available in the soiled utility room, PPE is stocked, and waste receptacles are present. Is this room compliant?",
        options: [
          "The room also needs an eyewash station, which is required in all areas where chemicals are stored",
          "Pre-cleaner, PPE, and waste receptacles fulfill all regulatory requirements for soiled utility rooms",
          "The room also needs a hand hygiene station to meet full compliance requirements",
          "Hand hygiene stations are only required at room exits, not inside the soiled utility room itself"
        ],
        correctIndex: 2,
        explanation: "The soiled utility room requires pre-cleaner, full PPE, waste receptacles, AND hand hygiene stations. All four elements are required.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t10",
        question: "What is the purpose of enzymatic spray applied at the point of use?",
        options: [
          "To begin high-level disinfection of instruments before they arrive at SPD",
          "To fully break down bioburden so instruments arrive pre-cleaned at SPD",
          "To prevent bioburden from drying on instrument surfaces",
          "To lubricate instrument joints and hinges for easier decontamination in SPD"
        ],
        correctIndex: 2,
        explanation: "Enzymatic spray prevents bioburden from drying and hardening on instrument surfaces. It does NOT sterilize or disinfect — that happens during reprocessing in SPD.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t11",
        question: "A surveyor asks: 'Who is responsible for point-of-use preparation of instruments after a surgical case?' What is the correct answer?",
        options: [
          "The surgeon or proceduralist who performed the case",
          "The OR staff at the point of use",
          "The SPD technician who receives the tray at the decontamination window",
          "The perioperative services coordinator or unit charge nurse"
        ],
        correctIndex: 1,
        explanation: "OR staff at the point of use are responsible for removing bioburden, opening instruments, applying enzymatic spray, and securing containers for transport.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t12",
        question: "A tech applies enzymatic spray while wearing gloves, gown, and goggles but no mask. Is the PPE adequate?",
        options: [
          "Goggles provide sufficient facial protection when applying enzymatic spray at point of use",
          "Masks are recommended but not mandatory for enzymatic spray application outside the decon area",
          "Full PPE including a mask is required when handling contaminated instruments due to aerosolization risk",
          "A mask is only required in the SPD decontamination room where aerosolization risk is higher"
        ],
        correctIndex: 2,
        explanation: "Full PPE including a mask is required when handling contaminated instruments. Aerosolized bioburden and chemical splashes pose respiratory risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t13",
        question: "Sharps in the transport bin are separated from delicate instruments using a protective mat. Is this acceptable?",
        options: [
          "Protective mats are not an approved barrier method; only rigid dividers meet separation requirements",
          "Sharps should be disposed of in a sharps container immediately and never transported to SPD",
          "Separating sharps from delicate instruments with a protective mat prevents injury and instrument damage",
          "Sharps must always be placed in a separate dedicated sharps container, never in the same bin as instruments"
        ],
        correctIndex: 2,
        explanation: "This IS acceptable. Sharps and delicate instruments must be separated or protected during transport to prevent injury and instrument damage.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t14",
        question: "A surveyor follows a soiled instrument tray from OR to SPD. The tech uses the soiled elevator, soiled corridor, and enters SPD through the decontamination room door. Is this pathway correct?",
        options: [
          "Incorrect — instruments should enter through the clean side of SPD for logging before moving to decontamination",
          "Incorrect — soiled instruments should enter through the SPD receiving window, not the decontamination room door",
          "Correct — this follows the designated soiled pathway from OR through decontamination entry into SPD",
          "Incorrect — the soiled elevator should not be used when a dedicated instrument dumbwaiter is available"
        ],
        correctIndex: 2,
        explanation: "This IS correct. Soiled instruments must enter SPD through the decontamination side, following designated soiled pathways throughout.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t15",
        question: "A scrub tech applies enzymatic pre-cleaner, opens all hinged instruments, secures the lid, and places the container on the soiled corridor floor while she goes to get the transport cart. The container sits on the floor for 2 minutes. What is the compliance concern?",
        options: [
          "The transport cart should have been staged before the case ended, but the container handling itself is acceptable",
          "The enzymatic spray was applied before opening the instruments — the order is wrong",
          "Enzymatic spray loses effectiveness after 60 seconds of lid closure, requiring reapplication before transport",
          "Placing the container on the floor, even temporarily, creates a contamination risk and violates transport protocol"
        ],
        correctIndex: 3,
        explanation: "Containers must not be placed on the floor during transport staging. Even with a secured lid, floor contact introduces contamination to the container exterior, which staff will then handle. The transport cart should be brought first.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t16",
        question: "Two surgical cases end simultaneously in adjacent ORs. One tech uses enzymatic spray; the other uses sterile water to keep instruments moist. Both secure lids and use the soiled corridor. Which tech is non-compliant?",
        options: [
          "The tech using enzymatic spray — enzymatic solutions should only be applied by trained SPD personnel in the decontamination area",
          "The tech using sterile water — the standard requires enzymatic pre-cleaner, not sterile water, at point of use",
          "Both are non-compliant — instruments should be transported dry to prevent dilution of SPD cleaning solutions",
          "Both are compliant — the key requirement is keeping instruments moist during transport, regardless of solution type"
        ],
        correctIndex: 1,
        explanation: "Enzymatic pre-cleaner is required at the point of use, not just any moisture source. Sterile water keeps instruments moist but does not begin the enzymatic breakdown of bioburden. The enzymatic spray tech is compliant; the sterile water tech is not.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "t17",
        question: "A surveyor asks a tech to describe the correct sequence of steps for point-of-use preparation. Which sequence is correct?",
        options: [
          "Apply enzymatic spray → remove loosened bioburden → open instruments → secure lid → transport via soiled corridor",
          "Remove bioburden → open instruments → spray enzymatic → secure lid → transport via soiled corridor",
          "Open instruments → remove bioburden → spray enzymatic → secure lid → transport via soiled corridor",
          "Remove bioburden → spray enzymatic → open instruments → secure lid → transport via soiled corridor"
        ],
        correctIndex: 1,
        explanation: "The correct sequence is: (1) remove gross bioburden, (2) open/unhinge all instruments, (3) spray with enzymatic pre-cleaner, (4) secure the container lid, (5) transport via the soiled corridor. Bioburden removal comes first, then instruments are opened for solution access.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "t18",
        question: "A tech transports instruments in a sealed red container via the soiled corridor. Midway, she realizes she forgot to apply enzymatic spray. She opens the container in the corridor, sprays the instruments, and re-secures the lid. What is the primary concern?",
        options: [
          "The instruments must be returned to the OR for proper enzymatic spray application under controlled conditions before re-transport",
          "This is acceptable as long as she was wearing full PPE when she opened the container in the corridor",
          "Opening a soiled container in the corridor creates an exposure risk and should never be done outside the OR or decon area",
          "Enzymatic spray loses its effectiveness once the container has been sealed due to temperature changes inside the closed container"
        ],
        correctIndex: 2,
        explanation: "Opening soiled instrument containers in the corridor creates an aerosolization and splash risk in a non-controlled environment. If enzymatic spray was missed, the container should continue to SPD where it can be opened safely under proper conditions with full PPE.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "t19",
        question: "A facility has one elevator shared by clean and soiled transport. A tech waits for the elevator with a soiled instrument container. A clean supply cart arrives at the same time. Can they share the elevator?",
        options: [
          "Shared elevators are permitted if the soiled container is placed on the opposite side from clean supplies",
          "Clean and soiled items must never share the same transport conveyance simultaneously",
          "A sealed soiled container poses no cross-contamination risk to clean supplies in the same elevator",
          "Shared transport is acceptable as long as the soiled items are loaded last and unloaded first"
        ],
        correctIndex: 1,
        explanation: "Clean and soiled items must be transported separately. Even with a secured lid, placing soiled containers in the same elevator as clean supplies creates cross-contamination risk. One must wait for a separate trip.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t20",
        question: "During a complex 6-hour case, the scrub tech applied enzymatic spray to instruments at the point of use but did not remove visible bone fragments and tissue first because the case was rushed. The container was properly sealed and transported via the soiled corridor. Is this compliant?",
        options: [
          "Enzymatic spray is specifically designed to dissolve bone and tissue fragments during transport to SPD",
          "In time-critical situations, enzymatic spray alone is sufficient and SPD will handle remaining bioburden",
          "Gross bioburden must be manually removed before enzymatic spray is applied, regardless of time pressure",
          "The sealed container and soiled corridor transport compensate for the missed bioburden removal step"
        ],
        correctIndex: 2,
        explanation: "Enzymatic spray prevents bioburden from drying but cannot substitute for manual removal of gross bioburden (bone fragments, tissue). These must be physically removed first. Time pressure and case complexity do not excuse skipping this step.",
        xpReward: 20,
        isSwipe: false,
      },
    ],
  },
  {
    id: "environment",
    name: "Environment & Surfaces",
    description: "Identify infection prevention issues related to walls, ceilings, and environmental surfaces.",
    icon: "Building2",
    color: "hsl(217, 91%, 52%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "Environment & Surfaces",
      plainLanguageSummary: "All clinical surfaces must be intact, impervious, and free of visible dust. Stained ceiling tiles, cracked walls, tape residue, and dust on overhead surfaces are common Joint Commission citations during Environment of Care rounds.",
      keyOperationalExpectations: [
        "Walls, countertops, and floors must be intact and impervious — cracks, holes, and peeling surfaces are citation risks.",
        "Ceiling tiles must be intact, unstained, and properly seated — staining indicates water damage above.",
        "All overhead surfaces (lights, booms, vents, shelves) must be free of visible dust.",
        "Cove base must be intact and sealed to prevent moisture infiltration and mold.",
        "EOC rounds must include overhead and hard-to-reach surfaces, not just floor-level inspection.",
      ],
      commonRiskPoints: [
        "Stained ceiling tiles dismissed as 'cosmetic' — surveyors treat any stain as evidence of a potential active water leak or mold risk.",
        "Tape residue on clinical walls creating surfaces that cannot be effectively disinfected.",
        "Visible dust on overhead lights, boom arms, IV poles, and ventilation grilles.",
        "Damaged or unsealed cove base at floor-wall junctions allowing moisture infiltration behind walls.",
        "EOC rounds that focus only on obvious floor-level items and miss overhead and behind-equipment surfaces.",
      ],
      cmsTags: ["EC.02.06.01", "IC.02.02.01"],
    },
    studyMaterial: [
      {
        title: "What Makes a Clinical Surface 'Intact and Impervious'?",
        content: "All walls, countertops, and surfaces in clinical areas must be intact and impervious — meaning they can be properly cleaned and disinfected. Tape residue, holes, cracks, and peeling paint create surfaces that cannot be effectively disinfected and may harbor pathogens.",
        keyPoint: "Intact and impervious. Tape residue, holes, and cracks are all compliance findings.",
        category: "rule",
      },
      {
        title: "What Does 'Impervious' Mean?",
        content: "A surface is impervious if it is non-porous and can be properly cleaned and disinfected without absorbing moisture or microorganisms. Cracked plastic, untreated wood, torn upholstery, and damaged cove base are not impervious. Smooth, coated, and intact surfaces generally are.",
        keyPoint: "Impervious = non-porous, intact, and cleanable. Cracked or porous = not impervious.",
        category: "definition",
      },
      {
        title: "What Does a Stained Ceiling Tile Indicate?",
        content: "Ceiling tiles must be intact, unstained, and properly seated in the grid. A stained tile often signals water damage or a leak above — which is a more serious concern than the tile itself. Missing or displaced tiles expose the plenum, which is not clean air space.",
        keyPoint: "Stained tile = possible water damage above. Damaged or displaced = report immediately.",
        category: "rule",
      },
      {
        title: "Which Overhead Surfaces Must Be Free of Visible Dust?",
        content: "All overhead surfaces — lights, boom arms, shelves, vents, picture frames, crash cart tops, and ledges — must be free of visible dust. Dust harbors microorganisms that can fall into sterile fields or wound sites. These surfaces are easy to miss in routine cleaning and are specifically checked during surveys.",
        keyPoint: "No visible dust on any overhead surface in clinical areas — ever.",
        category: "rule",
      },
      {
        title: "What Do Surveyors Flag During Environment of Care Rounds?",
        content: "Environment of Care (EOC) rounds identify infection prevention hazards. Surveyors flag: tape residue on walls, dust on fixtures, damaged ceiling tiles, holes in surfaces, improperly stored supplies, torn furniture upholstery, and rust on equipment. Minor floor scuffs from normal wear are generally NOT flagged.",
        keyPoint: "EOC = infection prevention focus. Cosmetic wear (scuffs) is typically not cited.",
        category: "definition",
      },
      {
        title: "Why Must Cove Base Be Intact and Sealed?",
        content: "Floors must be clean and in good repair. Cove base (baseboards) must be intact and sealed to the floor to prevent moisture infiltration behind the wall. Damaged or separated cove base creates conditions for mold growth and is a common EOC finding.",
        keyPoint: "Intact, sealed cove base prevents moisture and mold. Damaged = finding.",
        category: "rule",
      },
      {
        title: "Why Must All Patient Care Area Furniture Be Intact?",
        content: "All furniture and upholstery in patient care areas must be intact — no tears, cracks, or peeling. Damaged surfaces cannot be effectively disinfected between patients. IV poles, beds, chairs, and carts must also be in good repair and free of rust.",
        keyPoint: "Torn or cracked upholstery cannot be disinfected. Repair or remove from service.",
        category: "rule",
      },
      {
        title: "Why Is Tape Residue on Clinical Walls a Compliance Finding?",
        content: "Tape residue left on walls and surfaces is one of the most common EOC findings. Even after the tape is removed, sticky residue creates an uneven surface that cannot be properly disinfected. It also traps dust and debris. Tape should not be used on walls — use appropriate label holders or fasteners.",
        keyPoint: "Tape residue = non-compliant surface, even after the tape is removed.",
        category: "mistake",
      },
      {
        title: "Which Overhead Locations Do Surveyors Specifically Check for Dust?",
        content: "Surveyors specifically check overhead areas staff often overlook: tops of supply bins and lockers, light handles and boom arms, ceiling fan blades, air vent grilles, tops of crash carts, picture frame ledges, and surfaces above sinks. These areas must be included in cleaning schedules.",
        keyPoint: "Check tops of carts, light handles, vents, boom arms — surveyors will.",
        category: "tip",
      },
      {
        title: "What Is the Difference Between a Cosmetic Finding and a Compliance Finding?",
        content: "There's an important distinction between cosmetic wear and a compliance finding. Minor scuff marks on floors from normal equipment movement are typically not cited. But a crack in a countertop, a hole in a wall, or a stained ceiling tile — even if small — are compliance findings because the surface is no longer impervious.",
        keyPoint: "Scuffs = cosmetic (not cited). Cracks, holes, stains = compliance findings.",
        category: "mistake",
      },
    ],
    questions: [
      {
        id: "e1",
        question: "During a tracer, a surveyor notices minor scuff marks on the floor in a patient hallway. Is this a finding?",
        options: [
          "Scuff marks compromise the floor's impervious surface and harbor pathogens in the grooves",
          "Minor floor scuffs from normal wear are not typically flagged during EOC rounds",
          "All surface damage in patient areas must be documented and reported for repair",
          "Floor scuffs indicate inadequate cleaning protocols and require an EVS process review"
        ],
        correctIndex: 1,
        explanation: "Minor floor scuffs are considered normal wear and are NOT typically flagged during EOC rounds. Infection prevention focuses on surfaces that cannot be disinfected.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e2",
        question: "A surveyor sees a brown stain on a ceiling tile in the pre-op area. The staff says it's been there for months and is just a 'cosmetic issue.' What is the surveyor's primary concern?",
        options: [
          "The stain suggests inadequate cleaning by EVS staff and requires a cleaning protocol review",
          "The stain indicates the tile has exceeded its replacement lifecycle and needs routine replacement",
          "Stained tiles are only a concern if they are directly above a sterile field or patient bed",
          "The stain likely indicates water damage or an active leak above the ceiling"
        ],
        correctIndex: 3,
        explanation: "Stained ceiling tiles often indicate water damage or leaks above, which can lead to mold growth. This is an active infection prevention concern regardless of how long it has been present.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e3",
        question: "A surveyor examines walls, ceiling tiles, countertops, and baseboards in a procedure room. Everything is intact, clean, and in good repair. Is this room compliant?",
        options: [
          "The surveyor still needs to check overhead surfaces such as lights, booms, and vents for dust",
          "The surveyor also needs to verify that the room temperature and humidity are within acceptable ranges",
          "If all structural surfaces are intact and clean, the room meets environmental compliance standards",
          "Walls, ceiling tiles, countertops, and baseboards represent a complete environmental assessment"
        ],
        correctIndex: 0,
        explanation: "A complete environmental assessment also requires checking overhead surfaces (lights, booms, vents) for visible dust. Intact surfaces alone don't guarantee compliance.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e4",
        question: "Staff placed approved signage on the wall using adhesive hooks instead of tape. Is this approach compliant?",
        options: [
          "All signage in clinical areas must use magnetic or suction-based mounting to avoid any wall contact",
          "Only facility-installed mounting hardware is permitted on clinical walls to maintain surface integrity",
          "If the mounting method leaves no residue and the wall surface remains intact and cleanable",
          "Adhesive hooks still damage paint over time and should only be used in non-clinical administrative areas"
        ],
        correctIndex: 2,
        explanation: "The concern with tape is the residue it leaves, creating surfaces that cannot be properly disinfected. Approved mounting methods that keep walls intact are acceptable.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e5",
        question: "A displaced ceiling tile exposes the space above. A staff member pushes it back into the grid. Is the issue resolved?",
        options: [
          "Displaced tiles must be inspected for damage and the cause of displacement must be investigated",
          "As long as no visible debris fell from the plenum space, reseating the tile is sufficient",
          "Once the tile is properly seated in the grid, the barrier is restored and the issue is resolved",
          "Staff should reseat displaced tiles promptly to minimize plenum exposure time"
        ],
        correctIndex: 0,
        explanation: "Simply pushing a tile back doesn't address why it was displaced. The tile needs inspection for cracks or contamination, and the cause must be investigated to prevent recurrence.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e6",
        question: "During an EOC round, which of these findings would be the MOST serious infection prevention concern?",
        options: [
          "Tape residue on the wall near a hand hygiene dispenser",
          "Visible dust accumulation on an overhead surgical light in an unoccupied OR",
          "A cracked ceiling tile above the sterile field in the OR",
          "A minor chip in countertop laminate near the scrub sink"
        ],
        correctIndex: 2,
        explanation: "A cracked ceiling tile above a sterile field is the most serious — it can release dust, mold spores, and debris directly into the surgical field, risking patient infection.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "e7",
        question: "A surveyor notices peeling paint above a patient bed. The charge nurse says maintenance has been notified and a work order is pending. Is the room acceptable for patient use?",
        options: [
          "A documented work order demonstrates the facility is actively addressing the issue",
          "Peeling paint above the bed is a maintenance concern but does not pose an infection risk",
          "Peeling paint creates particles that can fall onto patients and the surface cannot be disinfected",
          "The room is acceptable as long as the bed is repositioned away from the affected area"
        ],
        correctIndex: 2,
        explanation: "Peeling paint in a patient care area is an active infection risk. The surface cannot be disinfected and particles can fall. The room should be addressed before patient use when possible.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e8",
        question: "Why must cove base (baseboards) in procedure rooms be intact and sealed?",
        options: [
          "To provide a sealed transition that meets OSHA 29 CFR 1910.141 bloodborne pathogen surface containment standards",
          "To prevent pest entry through gaps at the floor-wall junction per AORN Guideline for a Safe Environment of Care",
          "To prevent moisture from floor cleaning from seeping behind walls, which promotes mold growth",
          "To maintain a fully impervious surface transition zone for terminal cleaning and high-level disinfection of the room"
        ],
        correctIndex: 2,
        explanation: "Damaged cove base allows water from mopping and floor cleaning to seep behind walls, creating hidden moisture that promotes mold growth and structural damage.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e9",
        question: "A surveyor finds visible dust on ventilation grilles in a medication room. Staff says the grilles were cleaned last week. Is this compliant?",
        options: [
          "Dust on ventilation grilles is expected between cleanings and is not an infection prevention finding",
          "Weekly cleaning of ventilation grilles meets the standard cleaning frequency for medication rooms",
          "Visible dust on ventilation grilles is never acceptable regardless of the documented cleaning schedule",
          "As long as the cleaning log shows the grilles were cleaned within the past 7 days, this is compliant"
        ],
        correctIndex: 2,
        explanation: "The standard is that visible dust must not be present. If dust has accumulated since the last cleaning, the cleaning frequency needs to increase. Visible dust = non-compliant.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e10",
        question: "A surveyor examines an OR and finds: walls intact, ceiling tiles clean and seated, no dust on lights, cove base sealed, floor clean. The countertop has a small chip exposing the substrate. Is the room compliant?",
        options: [
          "Minor countertop chips are considered cosmetic wear and are addressed during routine maintenance",
          "A single small chip is within acceptable tolerance if the rest of the room meets standards",
          "The chip can be sealed temporarily with approved epoxy until scheduled maintenance is performed",
          "The countertop surface is no longer intact and impervious, requiring repair before the room is compliant"
        ],
        correctIndex: 3,
        explanation: "All surfaces must be intact and impervious. A chip exposes porous substrate that cannot be properly disinfected and may harbor pathogens. It must be repaired regardless of size.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e11",
        question: "A chair in the waiting area has torn vinyl upholstery. Is this an infection prevention concern or just cosmetic?",
        options: [
          "Infection prevention — torn upholstery exposes material that cannot be properly disinfected and harbors contaminants",
          "Just cosmetic — waiting areas are non-clinical spaces with lower environmental standards than patient care areas",
          "Just cosmetic — the chair should be replaced for patient comfort but does not pose an infection risk",
          "Just cosmetic — vinyl tears affect appearance but the underlying foam is still cleanable with hospital-grade disinfectant"
        ],
        correctIndex: 0,
        explanation: "Torn furniture coverings cannot be properly disinfected. The exposed material harbors contaminants. This is an infection prevention concern even in waiting areas.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e12",
        question: "Standing water is found near a sink in a procedure room. The water appears clean. Is this acceptable?",
        options: [
          "Standing water is both a slip hazard and a potential source of microbial growth regardless of appearance",
          "Clear standing water near a sink is expected and does not pose an infection or safety concern",
          "Minor water accumulation near sinks is normal and will evaporate without intervention",
          "As long as the water is visibly clean and does not contain biological material, it is acceptable"
        ],
        correctIndex: 0,
        explanation: "Standing water is never acceptable regardless of appearance. It's a slip hazard and promotes microbial growth. The source must be investigated and the water cleaned immediately.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e13",
        question: "A surveyor sees a rust-free, properly functioning IV pole with some paint wear on its base. Is this a compliance finding?",
        options: [
          "Minor cosmetic wear on equipment is acceptable if the surface underneath is intact and rust-free",
          "Any paint wear on patient care equipment must be documented and the equipment removed from service",
          "Paint wear creates rough surfaces that cannot be effectively disinfected with standard hospital cleaners",
          "Exposed metal under worn paint will eventually corrode and must be repainted before further use"
        ],
        correctIndex: 0,
        explanation: "Minor paint wear on equipment is acceptable as long as the underlying surface is intact, rust-free, and can still be properly disinfected. Rust would be the concern, not cosmetic wear.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e14",
        question: "A surveyor inspects an OR and finds: intact walls, clean ceiling tiles, no dust on lights, sealed cove base, and a clean floor. However, there is a 2-inch area of grout missing between two floor tiles near the scrub sink. Staff says it's been reported. How many findings are present?",
        options: [
          "Two — the missing grout and its proximity to a water source are classified as separate findings requiring independent corrective work orders",
          "Zero — grout gaps under 3 inches are classified as routine facility maintenance items and are not considered active infection prevention concerns",
          "One — missing grout creates a non-impervious surface that cannot be properly cleaned and may harbor moisture and pathogens",
          "One — but only because it falls within the 3-foot splash zone of a water source, which escalates severity classification under EOC guidelines"
        ],
        correctIndex: 2,
        explanation: "Missing grout creates a gap that traps moisture and microorganisms, making the surface non-impervious. This is an infection prevention concern regardless of location. The work order status does not resolve the active finding.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "e15",
        question: "During EOC rounding, a surveyor finds a procedure room with: (1) a clean intact ceiling tile that is slightly lighter in color than surrounding tiles, (2) a small rust spot on a stainless steel cabinet handle, and (3) tape residue on the wall near the light switch. Which items are findings?",
        options: [
          "Only the tape residue — minor surface rust on stainless steel hardware is considered normal wear in humid environments",
          "All three — any visible change in surface appearance in a procedure room must be documented and corrected",
          "Only the rust spot and tape residue — the lighter ceiling tile is likely a recent replacement and not a concern",
          "Only the rust spot — tape residue on painted surfaces is cosmetic if the underlying wall is undamaged"
        ],
        correctIndex: 2,
        explanation: "The rust spot (compromised surface that can't be sterilized) and tape residue (surface can't be properly disinfected) are both findings. A lighter ceiling tile that is intact and clean is likely a recent replacement — color variation is cosmetic, not an infection risk.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "e16",
        question: "A surveyor notices a small hole in the wall behind a mounted hand sanitizer dispenser — only visible when the dispenser is pulled forward slightly. Staff didn't know about it. Is this a finding?",
        options: [
          "Concealed holes behind permanently mounted fixtures are not assessed during routine EOC rounds and do not affect the room's compliance status or cleanability",
          "Mounted equipment creates a sealed barrier against the wall surface that prevents any underlying defects from impacting the clinical environment or pathogen exposure",
          "Holes in walls are findings regardless of visibility because they compromise the impervious barrier and may indicate pest entry points",
          "The dispenser provides adequate wall coverage per Joint Commission EC.02.06.01, and removing mounted fixtures for minor repairs risks greater surface damage"
        ],
        correctIndex: 2,
        explanation: "Any hole in a clinical wall compromises the impervious surface barrier. Hidden holes can harbor pests and pathogens and indicate structural issues. The hole must be repaired regardless of visibility.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e17",
        question: "A pre-op room has wallpaper instead of painted walls. The wallpaper is intact with no peeling edges, tears, or staining. A surveyor evaluates this. What is the concern?",
        options: [
          "Intact wallpaper with sealed edges provides an acceptable impervious surface for clinical areas per OSHA healthcare facility surface standards",
          "Wallpaper seams and edges can trap moisture and harbor pathogens even when intact — painted, sealed surfaces are preferred in clinical areas",
          "Modern healthcare-grade vinyl wallpaper meets CDC infection prevention surface requirements and is approved for clinical patient care areas",
          "Wallpaper is equivalent to paint for infection prevention purposes when properly maintained, as both provide an impervious cleanable surface"
        ],
        correctIndex: 1,
        explanation: "Wallpaper is generally not recommended in clinical areas because seams can trap moisture and harbor microorganisms even when the surface appears intact. Painted, sealed surfaces are preferred because they provide a truly impervious, cleanable barrier.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e18",
        question: "Three ceiling tiles in a medication room show the following: Tile A has a small brown water stain. Tile B is slightly displaced from the grid by about 1/4 inch. Tile C has a hairline crack. Rank these from MOST to LEAST serious.",
        options: [
          "A (water stain) > C (crack) > B (displaced)",
          "B (displaced) > A (water stain) > C (crack)",
          "A (water stain) > B (displaced) > C (crack)",
          "C (crack) > A (water stain) > B (displaced)"
        ],
        correctIndex: 2,
        explanation: "The water stain is most serious because it indicates an active or recent leak above the ceiling — potential mold growth and structural damage. A displaced tile exposes the plenum. A crack can harbor dust but is less immediately dangerous. All three require action, but the water stain demands urgent investigation.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "e19",
        question: "A newly renovated patient room has fabric-covered acoustic panels on the walls for noise reduction. The panels are securely mounted and appear clean. Is this compliant for a clinical area?",
        options: [
          "Fabric panels are acceptable in patient rooms as long as they are included in the routine cleaning schedule",
          "Securely mounted acoustic panels that appear clean meet environmental surface requirements",
          "Fabric surfaces in clinical areas cannot be properly disinfected and may harbor pathogens despite appearing clean",
          "Acoustic panels are classified as non-contact surfaces and are exempt from impervious surface requirements"
        ],
        correctIndex: 2,
        explanation: "Fabric surfaces cannot be properly disinfected using standard hospital-grade cleaners. Even when visually clean, fabric harbors microorganisms in its fibers. All surfaces in clinical areas must be impervious and cleanable.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e20",
        question: "A surveyor runs a finger along the top edge of an OR light boom and finds a thin layer of dust. The housekeeping log shows the boom was cleaned yesterday. Staff says a construction project in an adjacent corridor is generating extra dust. Who is responsible for the finding?",
        options: [
          "The cleaning log from yesterday demonstrates compliance with the facility EVS schedule, and construction-related re-accumulation is an excused variance",
          "The construction contractor — per ICRA Class III protocols, they are responsible for dust mitigation and containment during adjacent projects, making this their finding",
          "Construction-related dust is classified as an uncontrollable external factor per ICRA environmental assessment guidelines and the cleaning log confirms compliance",
          "The finding stands regardless of the cause — visible dust is never acceptable and cleaning frequency must increase to match conditions"
        ],
        correctIndex: 3,
        explanation: "The standard is that visible dust must not be present on overhead surfaces in clinical areas. The cause of the dust is irrelevant to the compliance finding. When environmental conditions change (construction, renovation), cleaning frequency must increase to maintain the standard.",
        xpReward: 15,
        isSwipe: false,
      },
    ],
  },
  {
    id: "segregation",
    name: "Clean vs. Dirty",
    description: "Master the principles of clean and dirty segregation in clinical environments.",
    icon: "ArrowLeftRight",
    color: "hsl(270, 60%, 55%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "Clean vs. Dirty Segregation",
      plainLanguageSummary: "Clean and soiled items must never share the same pathways, storage areas, or transport conveyances. This applies to corridors, elevators, utility rooms, and how staff handle items after touching soiled materials.",
      keyOperationalExpectations: [
        "Clean and soiled items must be physically separated — different corridors, rooms, and transport trips.",
        "Soiled utility rooms are for soiled items only — clean supplies must never be stored or staged there.",
        "Clean supply rooms are for clean items only — soiled items must never enter.",
        "Staff must change gloves and perform hand hygiene after handling soiled items before touching clean supplies.",
        "Clean and soiled items must never share the same elevator trip simultaneously.",
      ],
      commonRiskPoints: [
        "Clean supplies stored in or passed through soiled utility rooms during workflow shortcuts.",
        "Staff handling soiled items and then touching clean supply packaging without changing gloves.",
        "Clean and soiled carts sharing the same elevator simultaneously.",
        "Soiled instrument containers staged temporarily in clean corridors while waiting for transport.",
        "Soiled utility rooms used for both soiled disposal and clean supply staging due to space constraints.",
      ],
      cmsTags: ["IC.02.02.01", "EC.02.06.01"],
    },
    studyMaterial: [
      {
        title: "What Is the Core Clean/Dirty Separation Principle?",
        content: "The core principle: clean and soiled items must be strictly separated at all times, in all locations — storage rooms, sinks, transport pathways, and workflows. Clean items must never pass through soiled areas, and soiled items must never enter clean spaces.",
        keyPoint: "Clean and soiled must NEVER share space, sinks, or pathways. This is absolute.",
        category: "definition",
      },
      {
        title: "What Is the Minimum Height for All Stored Items Off the Floor?",
        content: "Nothing may be stored directly on the floor. All items must be on shelves or racks at least 6–8 inches off the floor. This allows proper mopping and floor cleaning underneath and prevents contact with floor contamination.",
        keyPoint: "Minimum 6–8 inches off the floor for all stored items.",
        category: "number",
      },
      {
        title: "What May Be Stored Under Sinks in Clinical Areas?",
        content: "Nothing should be stored under sinks — not patient supplies, not cleaning products, nothing. Pipe leaks and splash contamination affect anything stored underneath. This rule applies in all clinical areas: medication rooms, procedure rooms, utility rooms.",
        keyPoint: "Nothing under sinks — ever. Leaks contaminate anything stored there.",
        category: "rule",
      },
      {
        title: "Can a Handwashing Sink Ever Be Used for Instrument Cleaning?",
        content: "Each sink has a designated purpose that cannot change or be shared. Handwashing sinks = hand hygiene only. Instrument cleaning sinks = instruments only. Clean and soiled items can never share a sink, even if the sink is disinfected between uses. All sinks must be labeled with their designated purpose.",
        keyPoint: "Handwashing sinks are for hands only. Sink designations are fixed and cannot be changed.",
        category: "rule",
      },
      {
        title: "How Far Must Patient Care Items Be Stored From Any Sink?",
        content: "Patient care items must be stored at least 3 feet from any sink, or have a splash barrier physically in place. Compliance is assessed at the time of observation — a planned future installation does not satisfy the current requirement.",
        keyPoint: "3 feet from sinks OR a splash barrier physically in place right now.",
        category: "number",
      },
      {
        title: "Are Sealed Staff Beverages Permitted in Clinical or Patient Care Areas?",
        content: "Staff food and beverages are strictly prohibited in all clinical and patient care areas — including nurses' stations, medication rooms, and procedure areas. Sealed containers with lids do not change this rule. Staff food belongs only in designated break rooms.",
        keyPoint: "No food or drinks in clinical areas. Sealed lids don't make it compliant.",
        category: "rule",
      },
      {
        title: "Can Staff Food Be Stored in a Medication Refrigerator?",
        content: "Patient food and medications must be in separate, designated refrigerators. Staff personal food must never be stored in a medication or specimen refrigerator — labeling and physical separation do not make it acceptable. Both types of refrigerators require documented temperature logs.",
        keyPoint: "Separate fridges for meds and patient food. Staff food never in clinical fridges.",
        category: "rule",
      },
      {
        title: "What Is the Difference Between a Clean and Soiled Utility Room?",
        content: "Clean utility rooms store only clean supplies and patient care items — never soiled items, waste, or cleaning equipment. Soiled utility rooms handle contaminated items and waste, and must have PPE and a hand hygiene station. Rooms must be clearly designated, cannot be used interchangeably, and doors must stay closed.",
        keyPoint: "Clean room = clean items only. Soiled room = contaminated only. Doors closed.",
        category: "definition",
      },
      {
        title: "How Must Soiled Linen Be Stored?",
        content: "Soiled linen must be stored in covered hampers in designated soiled areas. Clean linen must be in a clean room or on covered carts in clean areas. Soiled and clean linen must never be in the same area or storage space.",
        keyPoint: "Covered hampers in soiled areas for dirty linen. Clean linen in clean rooms only.",
        category: "rule",
      },
      {
        title: "Can a Clean Supply Cart Be Parked Adjacent to a Soiled Linen Hamper?",
        content: "A clean supply cart parked directly next to a soiled linen hamper in a hallway violates the clean/dirty separation principle — even if both are covered, even if the placement is temporary. Physical separation between clean and soiled is required in all locations at all times.",
        keyPoint: "Clean and soiled can't be adjacent — even in hallways, even if both are covered.",
        category: "scenario",
      },
      {
        title: "Is Staff Food in the Designated Break Room Refrigerator Compliant?",
        content: "Staff food in a clearly labeled personal container in the designated break room refrigerator IS compliant. The restriction applies to clinical areas and clinical refrigerators — not to designated break rooms. Break room = acceptable for staff food.",
        keyPoint: "Break room fridge = OK for staff food. Clinical fridges = never, regardless of labeling.",
        category: "scenario",
      },
      {
        title: "Does Cleaning Equipment Belong in the Clean Utility Room?",
        content: "A mop, bucket, or cleaning equipment found in the clean utility room is a finding. Cleaning equipment belongs in a designated housekeeping closet — not in a room where clean patient care supplies are stored. This is a surprisingly common EOC finding.",
        keyPoint: "Cleaning equipment does not belong in the clean utility room. Housekeeping closet only.",
        category: "mistake",
      },
    ],
    questions: [
      {
        id: "s1",
        question: "A surveyor observes patient supplies stored on shelving 8 inches off the floor in the clean utility room. Is this compliant?",
        options: [
          "Compliant — 8 inches meets the 6-8 inch minimum clearance required for proper floor cleaning underneath",
          "Non-Compliant — only sealed containers may be stored below 10 inches; open shelving requires higher placement",
          "Non-Compliant — supplies in clean utility rooms require a minimum of 12 inches off the floor to meet sterile storage standards",
          "Non-Compliant — shelving must be wire-rack style with impervious bottom shelves, regardless of height"
        ],
        correctIndex: 0,
        explanation: "This IS compliant. Items must be stored at least 6-8 inches off the floor for proper floor cleaning. Eight inches meets this standard.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s2",
        question: "A nurse rinses a bedpan in the handwashing sink because the hopper is temporarily out of service. She disinfects the sink afterward. Is this acceptable?",
        options: [
          "Proper disinfection with hospital-grade cleaner restores the sink to its designated function",
          "Handwashing sinks are designated solely for hand hygiene, regardless of post-use cleaning",
          "Temporary use of handwashing sinks for equipment is permitted during equipment outages if documented",
          "As long as the nurse performs hand hygiene at a different sink before resuming patient care"
        ],
        correctIndex: 1,
        explanation: "Handwashing sinks are designated exclusively for hand hygiene. They cannot be used for equipment cleaning even if cleaned afterward. Sink designation is absolute.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s3",
        question: "Patient care supplies are stored 2 feet from a sink with a splash barrier in place. Is this compliant?",
        options: [
          "Splash barriers only reduce the required distance to 2.5 feet, so 2 feet is still non-compliant",
          "A splash barrier compensates for the reduced distance, satisfying the storage requirement",
          "Supplies must always be at least 3 feet from sinks regardless of any barriers installed",
          "Splash barriers are only approved for medication storage areas, not general patient care supplies"
        ],
        correctIndex: 1,
        explanation: "Patient care items must be stored at least 3 feet from sinks OR have a splash barrier in place. With a barrier, the 3-foot requirement is satisfied.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s4",
        question: "A surveyor finds a staff member's water bottle with a sealed lid at the nurses' station in a patient care area. Is this compliant?",
        options: [
          "Hydration exceptions allow sealed personal beverages at workstations if kept below counter level",
          "All staff food and beverages are prohibited in clinical/patient care areas regardless of container type",
          "Sealed containers with lids are permitted at nurses' stations as they prevent contamination",
          "As long as the beverage is not within arm's reach of medication storage or patient charts"
        ],
        correctIndex: 1,
        explanation: "Staff food and beverages are strictly prohibited in ALL clinical and patient care areas, including nurses' stations. Sealed containers do not change this rule.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s5",
        question: "Soiled linen is in a covered hamper in a designated soiled area. Clean linen is in a covered cart in the clean supply room. Is this setup compliant?",
        options: [
          "Non-Compliant — clean linen carts must be stored in a dedicated linen closet, not the general clean supply room",
          "Non-Compliant — soiled linen hampers must be in the soiled utility room, not just a designated soiled area",
          "Non-Compliant — covered carts are not an approved storage method for clean linen; only enclosed shelving is acceptable",
          "Compliant — soiled linen is properly contained in a covered hamper and clean linen is stored in the appropriate clean area"
        ],
        correctIndex: 3,
        explanation: "This IS compliant. Soiled linen must be in covered hampers in soiled areas, and clean linen must be in clean rooms or covered carts. Both requirements are met.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s6",
        question: "A surveyor opens the clean utility room and finds a covered biohazard waste container in the corner. Staff says it's only for overflow from the soiled room. Is this acceptable?",
        options: [
          "Biohazard waste has no place in a clean utility room under any circumstance",
          "Overflow protocols allow temporary placement for up to 24 hours if the container is properly labeled",
          "As long as the container is sealed and does not come into contact with clean supplies on adjacent shelving",
          "Covered biohazard containers are permitted temporarily if the soiled room has reached capacity"
        ],
        correctIndex: 0,
        explanation: "Clean utility rooms are exclusively for clean supplies and patient care items. Biohazard waste containers — even if covered — are never permitted, regardless of the reason.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s7",
        question: "What is the minimum distance items must be stored off the floor?",
        options: [
          "12 inches",
          "6-8 inches",
          "4-6 inches",
          "8-10 inches"
        ],
        correctIndex: 1,
        explanation: "Items must be stored at least 6-8 inches off the floor to allow proper floor cleaning and mopping underneath. This prevents contamination from floor-level moisture.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s8",
        question: "A surveyor notices the soiled utility room door propped open. The tech says it improves airflow and reduces odors. Is this acceptable?",
        options: [
          "Propping the door open is acceptable during staffed hours as long as it is closed overnight",
          "Improved ventilation reduces airborne pathogen concentration and is encouraged during active use",
          "Soiled utility room doors must be kept closed to prevent airborne cross-contamination",
          "As long as the room has negative pressure ventilation, the open door does not affect containment"
        ],
        correctIndex: 2,
        explanation: "Soiled utility room doors must be kept closed to prevent contaminated air from spreading. Propping doors open for airflow defeats the purpose of separation.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s9",
        question: "A clean supply cart is parked directly next to a soiled linen hamper in the hallway outside a patient room. Is this compliant?",
        options: [
          "Compliant — the soiled linen hamper has a cover, which provides sufficient barrier protection",
          "Non-Compliant — clean supplies must be physically separated from soiled items to prevent cross-contamination",
          "Compliant — as long as both the cart and hamper are covered, proximity in hallways is acceptable",
          "Compliant — hallway placement is temporary and does not require the same separation standards as storage rooms"
        ],
        correctIndex: 1,
        explanation: "Clean supplies must be physically separated from soiled items. Parking a clean supply cart directly next to a soiled linen hamper violates the clean/dirty separation principle and creates cross-contamination risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s10",
        question: "Without a splash barrier, how far must patient care items be stored from sinks?",
        options: [
          "4 feet",
          "2 feet",
          "3 feet",
          "18 inches"
        ],
        correctIndex: 2,
        explanation: "Patient care items must be stored at least 3 feet from sinks when no splash barrier is in place, to prevent water contamination.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s11",
        question: "A surveyor checks under a sink in the medication room and finds cleaning supplies stored there. Is this compliant?",
        options: [
          "Nothing should be stored under sinks due to potential leaks and contamination",
          "Cleaning supplies are non-sterile items and may be stored under sinks in sealed containers",
          "As long as the cleaning supplies are in a secondary containment tray to catch any drips",
          "Under-sink storage is acceptable for non-patient-care items like cleaning products"
        ],
        correctIndex: 0,
        explanation: "Nothing should be stored under sinks — not patient supplies, not cleaning supplies, nothing. Potential leaks and splash contamination affect anything stored underneath.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s12",
        question: "A surveyor asks a tech where patient food refrigerators should be located relative to medication refrigerators. What is the key principle?",
        options: [
          "Patient food can be stored in any clean refrigerator as long as it is in sealed containers",
          "They can share the same refrigerator if items are clearly labeled and separated by designated shelves",
          "Both refrigerators require monitoring, but only medication refrigerators need daily temperature logs",
          "They must be in separate designated refrigerators with documented temperature logs"
        ],
        correctIndex: 3,
        explanation: "Patient food and medications must have separate designated refrigerators. Both require documented temperature logs — medication fridges checked daily (36-46°F).",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s13",
        question: "Staff food is found in a clearly labeled personal container in the staff break room refrigerator. Is this a concern?",
        options: [
          "Staff food in the designated break room refrigerator is compliant with food and beverage policies",
          "Staff food in any hospital refrigerator creates cross-contamination risk regardless of location",
          "All personal food items must be stored in personal coolers, not hospital-owned refrigerators",
          "Personal food containers require daily removal; storage beyond a single shift is non-compliant"
        ],
        correctIndex: 0,
        explanation: "Staff food in the designated break room IS compliant. The restriction is against staff food in clinical areas and clinical refrigerators, not break rooms.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s14",
        question: "The clean utility room has supplies on shelving 5 inches off the floor. The soiled utility room across the hall has properly stored items on shelving 8 inches off the floor and PPE available. Which room has the compliance issue?",
        options: [
          "Both rooms have issues — clean room shelving is too low and soiled room needs a hand hygiene station",
          "Neither room has issues — 5 inches meets the minimum clearance for floor-level storage",
          "The soiled utility room — it is missing a hand hygiene station, which is required",
          "The clean utility room — items are below the 6-8 inch minimum"
        ],
        correctIndex: 3,
        explanation: "The clean utility room is non-compliant: supplies are only 5 inches off the floor, below the 6-8 inch minimum. The soiled utility room meets requirements.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s15",
        question: "A surveyor finds a nurse washing a reusable emesis basin in a handwashing sink, then cleaning the sink with hospital-grade disinfectant, then washing her hands in the same sink. She followed disinfectant dwell time. How many violations occurred?",
        options: [
          "Two — the emesis basin was improperly cleaned AND she should have used a separate sink to wash hands afterward",
          "Three — basin in wrong sink, she should have used alcohol-based hand rub instead of the contaminated sink, and the hopper issue should have been escalated",
          "None — proper disinfection with adequate dwell time between uses restores the sink's designated function",
          "One — the emesis basin should not be washed in a handwashing sink"
        ],
        correctIndex: 3,
        explanation: "One violation: handwashing sinks are designated exclusively for hand hygiene. Disinfecting after improper use does not restore the designation or make the initial use acceptable. However, washing her hands afterward in the same (designated handwashing) sink is still correct — that's its purpose.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "s16",
        question: "A clean utility room contains: IV supplies on shelving 7 inches off the floor, a wall-mounted hand sanitizer, a clean linen cart, and a medication refrigerator at 42°F with daily logs. A surveyor also finds a mop and bucket in the corner. What is the finding?",
        options: [
          "The mop and bucket — cleaning equipment does not belong in a clean utility room",
          "The medication refrigerator at 42°F exceeds the 40°F maximum for safe medication storage",
          "The shelving height at 7 inches is below the required 8-inch minimum for clean utility rooms",
          "All items are appropriate for a clean utility room and meet storage requirements"
        ],
        correctIndex: 0,
        explanation: "Cleaning equipment (mop and bucket) does not belong in a clean utility room — it should be in a designated housekeeping closet. The shelving at 7 inches meets the 6-8 inch general standard, and the fridge at 42°F is within the 36-46°F range.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "s17",
        question: "Patient supplies are stored 2.5 feet from a sink. No splash barrier is installed. Staff says they'll install one next week. Is the current setup compliant?",
        options: [
          "Per AORN Guideline for a Safe Environment, the 3-foot rule applies only to sterile supplies; general patient care supplies may be stored at 2 feet",
          "Without a splash barrier currently in place, supplies must be at least 3 feet from the sink; planned installation doesn't count",
          "2.5 feet falls within the acceptable 10% tolerance of the 3-foot requirement that Joint Commission allows for standard clinical storage areas",
          "A documented corrective action plan with a scheduled installation date demonstrates good faith compliance and satisfies the standard at time of survey"
        ],
        correctIndex: 1,
        explanation: "Compliance is assessed at the time of observation. Without a splash barrier in place NOW, supplies must be at least 3 feet from the sink. A planned future installation does not satisfy the current requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s18",
        question: "A surveyor opens a medication refrigerator in the clean utility room and finds: properly stored medications, daily temperature logs at 38°F, and a clearly labeled staff lunch bag with an ice pack. What is the finding?",
        options: [
          "The lunch is clearly labeled and physically separated from medications on a different shelf",
          "The ice pack keeps the lunch at safe temperature and the labeling prevents medication errors",
          "Personal items in sealed containers are permitted in medication refrigerators during the staff member's shift",
          "Staff food cannot be stored in a medication refrigerator under any circumstances, regardless of labeling or separation"
        ],
        correctIndex: 3,
        explanation: "Staff food must never be stored in clinical refrigerators (medication or specimen). A labeled lunch bag doesn't change this rule. Staff food belongs only in designated break room refrigerators.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s19",
        question: "During a tracer, a surveyor identifies three sinks in a procedure area: Sink A is labeled 'Handwashing Only,' Sink B is labeled 'Instrument Cleaning,' and Sink C has no label. A tech says Sink C is used for both handwashing and rinsing equipment depending on what's needed. What should the surveyor cite?",
        options: [
          "Only Sink C — unlabeled and dual-use sinks violate sink designation requirements",
          "All three sinks — each sink needs documented daily cleaning logs and usage tracking to verify compliance",
          "Only Sink B — instrument cleaning should only occur in the decontamination area, not in a procedure room sink",
          "Sinks A and C — Sink A's handwashing-only designation is too restrictive, and Sink C needs a label"
        ],
        correctIndex: 0,
        explanation: "Sink C is non-compliant for two reasons: no designation label and dual use. Sinks must have designated purposes and cannot be used interchangeably. Sinks A and B are properly designated and labeled.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "s20",
        question: "A soiled utility room has: PPE available (gloves, gowns, eye protection), covered waste containers, a closed door, and items stored 8 inches off the floor. A surveyor asks: 'What's missing?' What is the correct answer?",
        options: [
          "A hand hygiene station",
          "A biohazard spill kit",
          "Nothing — PPE, waste receptacles, closed door, and proper shelving meet all soiled utility room standards",
          "A negative-pressure ventilation system"
        ],
        correctIndex: 0,
        explanation: "Soiled utility rooms require PPE, waste receptacles, AND hand hygiene stations. While gloves, gowns, eye protection, covered waste, closed door, and proper shelving height are all present, the question doesn't mention a hand hygiene station, which is a required element.",
        xpReward: 15,
        isSwipe: false,
      },
    ],
  },
  {
    id: "sterile_storage",
    name: "Sterile Storage",
    description: "Learn the standards for proper sterile supply storage and event-related sterility.",
    icon: "Package",
    color: "hsl(32, 95%, 55%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "Sterile Storage",
      plainLanguageSummary: "Sterile supplies must be stored in conditions that maintain sterility until point of use. Packages must be inspected on receipt and before use. Event-related sterility means any package that is compromised — torn, wet, crushed, or expired — must be removed from service immediately.",
      keyOperationalExpectations: [
        "Sterile packages must be stored off the floor, away from walls, below ceiling sprinklers, and in areas with controlled temperature and humidity.",
        "All sterile packages must be inspected on receipt and again before use — any compromise removes the package from service.",
        "Event-related sterility: a package is sterile until an event (tear, moisture, expiration, compression) compromises it.",
        "FIFO (First In, First Out) rotation must be followed to prevent outdated items from accumulating.",
        "Expired or compromised items must be clearly quarantined and removed from circulation immediately.",
      ],
      commonRiskPoints: [
        "Sterile packages stored on the floor or directly against exterior walls where moisture and temperature fluctuations compromise sterility.",
        "Compressed or crushed peel pack corners used anyway because the item 'looks fine inside' — compression compromises seal integrity.",
        "No documented inspection process on receipt — items placed directly into sterile storage without condition review.",
        "Outdated items remaining on shelves mixed with current stock because FIFO rotation is not enforced.",
        "Sterile packages stored in rooms without monitored temperature or humidity, particularly in OR sub-sterile corridors.",
      ],
      cmsTags: ["IC.02.02.01", "ST79", "EC.02.06.01"],
    },
    studyMaterial: [
      {
        title: "What Does 'Event-Related Sterility' Mean?",
        content: "Modern sterility is 'event-related,' not time-based. A properly packaged sterile item remains sterile until an event compromises it — a tear, moisture, contamination, compression, or improper handling. Items stored over 1 year must be re-inspected before use.",
        keyPoint: "Sterile until an EVENT compromises the package. Re-inspect if stored over 1 year.",
        category: "definition",
      },
      {
        title: "What Events Remove a Package From Sterile Status?",
        content: "Any of these events removes a package from sterile status: moisture exposure (wet package), a tear or hole, physical compression or crush, the package falling onto an unsterile surface, a chemical indicator that did not change, or a package left open. One event is enough — no exceptions.",
        keyPoint: "Moisture, tear, crush, fall, failed CI, open package = no longer sterile.",
        category: "definition",
      },
      {
        title: "Is Cardboard Ever Permitted in Sterile Storage Areas?",
        content: "Cardboard shipping boxes and corrugated cardboard are strictly prohibited in sterile storage areas. Cardboard sheds fibers, harbors dust, insects, and moisture, and cannot be properly cleaned. Items must be removed from shipping cartons before entering sterile storage.",
        keyPoint: "No cardboard — ever — in sterile storage. Remove items from shipping boxes first.",
        category: "rule",
      },
      {
        title: "What Are the Shelving Requirements for Sterile Storage?",
        content: "Sterile storage requires wire shelving with a solid (impervious) bottom shelf. The bottom shelf must be at least 8–10 inches off the floor. Sterile items must not touch exterior walls. Peel packs and wrapped sets must be stacked no more than 2 high to prevent compression.",
        keyPoint: "Wire shelves, solid bottom shelf, 8–10\" off floor, no wall contact, max 2 high stacking.",
        category: "number",
      },
      {
        title: "What Temperature and Humidity Must Sterile Storage Maintain?",
        content: "Sterile storage rooms must maintain temperature between 68–75°F and relative humidity between 20–60%. These ranges prevent condensation and environmental degradation that could compromise package integrity. Monitoring must be documented.",
        keyPoint: "Sterile storage: 68–75°F temp, 20–60% humidity. Monitored and documented.",
        category: "number",
      },
      {
        title: "How Far Below Sprinkler Deflectors Must Stored Items Be?",
        content: "Sterile supplies and all stored items must be at least 18 inches below sprinkler deflectors. This ensures sprinklers can distribute water effectively in a fire emergency. Items stacked too high blocking sprinkler coverage is both a fire safety and sterile storage finding.",
        keyPoint: "18 inches below sprinkler deflectors — applies to all stored items.",
        category: "number",
      },
      {
        title: "What Must Every Sterile Package Label Include?",
        content: "Before use, every sterile package must be inspected for: seal integrity, chemical indicator color change, moisture, and overall condition. Sterile packs must be labeled with: sterilizer used, cycle/load number, and date of sterilization. Any compromised package must be immediately removed and returned for reprocessing.",
        keyPoint: "Packs labeled with sterilizer ID, load number, and date. Always inspect before use.",
        category: "rule",
      },
      {
        title: "What Stock Rotation Method Is Required for Sterile Supplies?",
        content: "Sterile supplies must follow First In, First Out (FIFO) rotation. When new stock arrives, place it behind existing stock so older items are used first. Items stored more than 1 year must be re-inspected before use.",
        keyPoint: "First In, First Out — newer stock goes to the back. Oldest items used first.",
        category: "rule",
      },
      {
        title: "What Must Be Done With a Torn, Wet, or Crushed Sterile Package?",
        content: "Any sterile package that is torn, wet, crushed, has a failed chemical indicator, or was left open must be immediately removed from service and sent for re-sterilization. 'It looks fine inside' is never acceptable justification for using a compromised package.",
        keyPoint: "Any compromise = out of service immediately. No exceptions, regardless of appearance.",
        category: "scenario",
      },
      {
        title: "What Is the Difference Between a Chemical and Biological Indicator?",
        content: "Chemical indicators (CI) change color when exposed to sterilization conditions — they confirm the package was exposed but do NOT confirm sterilization was achieved. Biological indicators (BI) contain actual spores and are needed to confirm sterilization effectiveness. Both are required.",
        keyPoint: "CIs confirm exposure. BIs confirm sterilization. Both are required — they serve different purposes.",
        category: "definition",
      },
      {
        title: "What Must Happen When Expired Sterile Items Are Found in Active Stock?",
        content: "Expired or compromised sterile items mixed into active supply shelves is a common and serious finding. They must be clearly quarantined and removed immediately — not simply moved to a different shelf location. Surveyors specifically check active sterile supply areas for expired items.",
        keyPoint: "Expired items = quarantine and remove immediately. Never leave in active stock.",
        category: "mistake",
      },
    ],
    questions: [
      {
        id: "ss1",
        question: "A sterile pack has been stored for 11 months in intact packaging with no signs of damage. Is it considered sterile?",
        options: [
          "Per AAMI ST79 Section 10.5.2, items stored beyond 9 months require biological indicator testing before clinical use",
          "Under event-related sterility, intact packaging maintains sterility until a compromise event occurs",
          "Event-related sterility as defined by AAMI ST79 only applies to rigid sterilization containers, not wrapped or peel-pack items",
          "Sterile items must be reprocessed after 6 months of storage regardless of packaging condition per Joint Commission IC.02.02.01"
        ],
        correctIndex: 1,
        explanation: "Under event-related sterility, items remain sterile as long as the packaging is intact. Re-inspection is only required after 1 year. At 11 months with intact packaging, this item is sterile.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss2",
        question: "A surveyor checks the sterile storage room thermometer. It reads 76°F with humidity at 55%. Is this compliant?",
        options: [
          "The temperature exceeds the 68-75°F requirement for sterile storage areas",
          "A 1-degree variance above range is within acceptable tolerance if humidity is compliant",
          "The humidity at 55% exceeds the 50% maximum for sterile storage environments",
          "Both readings fall within the acceptable 65-80°F temperature and 20-60% humidity ranges"
        ],
        correctIndex: 0,
        explanation: "Sterile storage must maintain 68-75°F and 20-60% humidity. While the humidity (55%) is within range, the temperature (76°F) exceeds the 75°F maximum.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss3",
        question: "A surveyor finds sterile supplies on wire shelving with a solid (impervious) bottom shelf, 9 inches off the floor, stored 20 inches below sprinkler heads, and not touching walls. Is this setup compliant?",
        options: [
          "Per NFPA 25 Section 5.2.1, supplies must be at least 24 inches below sprinkler deflectors to maintain proper spray distribution",
          "All storage requirements are met including shelving type, height, sprinkler clearance, and wall distance",
          "AAMI ST79 requires the bottom shelf to be at least 12 inches off the floor in all sterile storage areas for proper floor maintenance",
          "Wire shelving is not permitted in sterile storage per AAMI ST79 Section 10.3; solid closed shelving is required for particulate control"
        ],
        correctIndex: 1,
        explanation: "This IS compliant. Wire shelving with solid bottom shelf (correct), 9 inches off floor (meets 8-10 inch minimum), 20 inches below sprinklers (exceeds 18-inch minimum), not touching walls.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ss4",
        question: "Staff removed items from cardboard shipping boxes before placing them in sterile storage, but left the empty flattened boxes in the corner of the sterile storage room for recycling pickup. Is this compliant?",
        options: [
          "As long as the flattened boxes are placed on an impervious surface away from sterile supplies",
          "Empty flattened boxes are acceptable for temporary storage if recycling pickup occurs within 24 hours",
          "The items were properly removed from the boxes and flattened cardboard poses minimal fiber risk",
          "Cardboard in any form is never permitted in sterile storage areas"
        ],
        correctIndex: 3,
        explanation: "Corrugated cardboard is NEVER permitted in sterile storage — including empty, flattened boxes. Cardboard sheds fibers and harbors dust and insects even when empty.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss5",
        question: "Peel packs on a shelf are stacked 3 high. Is this acceptable?",
        options: [
          "Peel packs should be stacked no more than 2 high to prevent compression damage",
          "Stacking up to 5 high is acceptable on wire shelving where airflow reduces moisture buildup",
          "Peel packs may be stacked up to 4 high as long as heavier items are on the bottom",
          "3 high is within the acceptable range if the packs contain lightweight instruments"
        ],
        correctIndex: 0,
        explanation: "Blue wraps and peel packs should be stacked no more than 2 high to prevent compression damage to packaging and maintain seal integrity.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss6",
        question: "A sterile pack has a label showing the sterilizer number and load number, but no date. Is this label complete?",
        options: [
          "Sterilizer and load number are sufficient for full traceability and recall capability",
          "The label must also include the date of sterilization as one of three required elements",
          "The date is only required for items expected to be stored longer than 6 months",
          "The load number contains an embedded date code, so a separate date field is redundant"
        ],
        correctIndex: 1,
        explanation: "Every sterile pack must be labeled with three elements: sterilizer used, cycle/load number, AND date of sterilization. Missing any element is incomplete.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss7",
        question: "A surveyor picks up a sterile pack and notices a small area of condensation (moisture) on the outside. The seal appears intact. Can this item be used?",
        options: [
          "Surface moisture from humidity changes is normal and does not affect sterility if the seal holds",
          "As long as the pack is dried thoroughly before opening, the sterility is not compromised",
          "Moisture is a strike-through contamination event regardless of seal integrity",
          "The seal is intact and external condensation does not penetrate properly sealed packaging"
        ],
        correctIndex: 2,
        explanation: "Moisture is a strike-through contamination event. Moisture can wick bacteria through packaging material even without breaking the seal. The item must be reprocessed.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss8",
        question: "What is the minimum distance the bottom shelf in sterile storage must be from the floor?",
        options: [
          "4-6 inches",
          "6-8 inches",
          "8-10 inches",
          "10-12 inches"
        ],
        correctIndex: 2,
        explanation: "The bottom shelf in sterile storage must be at least 8-10 inches off the floor — note this is higher than the general 6-8 inch requirement for non-sterile supply areas.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss9",
        question: "Sterile supplies are stored on solid metal shelving (no wire). The bottom shelf is solid. Is the shelving type compliant?",
        options: [
          "Solid metal shelving provides superior protection against dust and particle contamination",
          "Any non-porous metal shelving meets sterile storage requirements regardless of design",
          "Solid shelving is preferred because it prevents peel packs from sagging through wire gaps",
          "Sterile storage requires wire shelving with only the bottom shelf being solid/impervious"
        ],
        correctIndex: 3,
        explanation: "Sterile storage requires wire shelving for airflow, with only the bottom shelf being solid (impervious). All-solid shelving restricts air circulation needed for proper storage conditions.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss10",
        question: "New stock arrives. A tech places the new items in front of existing stock on the shelf. Is this proper stock rotation?",
        options: [
          "Placing new stock in front is acceptable under event-related sterility since items don't expire",
          "Newer items should be used first to ensure they are at peak sterility assurance",
          "Stock rotation order is not required as long as all packages are inspected before use",
          "FIFO requires newer items to go behind existing stock so older items are used first"
        ],
        correctIndex: 3,
        explanation: "First In, First Out (FIFO) requires placing newer items behind existing stock. Older items at the front get used first, preventing extended storage times.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss11",
        question: "A sterile item has been stored for 14 months in intact packaging. A tech pulls it for use without additional inspection. Is this correct?",
        options: [
          "Re-inspection is only triggered by a documented environmental event, not by time elapsed",
          "The standard pre-use visual check at the point of use satisfies inspection requirements at any storage duration",
          "Items stored over 1 year must be re-inspected and potentially reprocessed before use",
          "Event-related sterility means intact packages remain sterile indefinitely without re-inspection"
        ],
        correctIndex: 2,
        explanation: "While event-related sterility does not set a fixed expiration, items stored longer than 1 year must be re-inspected. At 14 months, re-inspection before use is required.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss12",
        question: "The sterile storage room reads 72°F and 45% humidity. Is this within acceptable parameters?",
        options: [
          "While temperature is acceptable, humidity must be kept below 35% to prevent moisture damage",
          "Both temperature and humidity are within the acceptable ranges for sterile storage",
          "The humidity at 45% exceeds the 40% maximum required for sterile storage environments",
          "The temperature should be maintained between 60-68°F for optimal sterile storage conditions"
        ],
        correctIndex: 1,
        explanation: "Both readings are within acceptable parameters: temperature 68-75°F (72°F is compliant) and humidity 20-60% (45% is compliant).",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss13",
        question: "A chemical indicator inside a sterile pack has NOT changed color. What does this indicate?",
        options: [
          "The indicator is a slow-reacting type that requires a 24-hour waiting period before reading the final color",
          "The indicator type does not match the sterilization method used, so the color result is not relevant",
          "The indicator may have been placed on the wrong side of the packaging, preventing proper sterilant contact",
          "The item was not properly exposed to the sterilization process and must not be used"
        ],
        correctIndex: 3,
        explanation: "An unchanged chemical indicator means the package was NOT properly exposed to the sterilization process. The item must not be used and should be reported immediately.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss14",
        question: "Sterile supplies are stored 16 inches below a sprinkler head. Is this compliant?",
        options: [
          "16 inches exceeds the standard 12-inch clearance requirement for sprinkler heads",
          "Supplies must be at least 18 inches below sprinkler heads to maintain fire suppression coverage",
          "The 18-inch rule only applies to flammable storage areas, not sterile supply rooms",
          "Sterile storage rooms with automatic suppression systems have a reduced 15-inch clearance requirement"
        ],
        correctIndex: 1,
        explanation: "Supplies must be stored at least 18 inches below sprinkler deflectors. At 16 inches, these supplies are too close and would interfere with fire suppression coverage.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss15",
        question: "A sterile storage room has: wire shelving with solid bottom shelves 9 inches off the floor, supplies 19 inches below sprinklers, temperature 73°F, humidity 62%, and no cardboard. How many parameters are out of compliance?",
        options: [
          "One — the temperature at 73°F exceeds the 72°F maximum for sterile storage",
          "Zero — all parameters including humidity are within the acceptable 20-65% range",
          "One — the humidity exceeds the 20-60% maximum",
          "Two — the humidity exceeds the maximum and the 19-inch sprinkler clearance does not meet the 24-inch requirement"
        ],
        correctIndex: 2,
        explanation: "The humidity at 62% exceeds the 20-60% acceptable range. Everything else is compliant: wire shelving with solid bottom (correct), 9 inches off floor (meets 8-10 inch minimum), 19 inches below sprinklers (exceeds 18-inch minimum), 73°F (within 68-75°F), no cardboard.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ss16",
        question: "A sterile pack's chemical indicator has changed color, the seal appears intact, and labeling is complete. However, when the tech picks it up, she hears something rattling inside — suggesting the instrument has shifted and may have contacted the seal area. Should she use it?",
        options: [
          "An instrument shifting inside the pack may have compromised the seal from the inside; the pack should be inspected more carefully or reprocessed",
          "A changed chemical indicator confirms full sterilant exposure per AAMI ST79 Section 10.7, and the externally intact seal satisfies all sterility verification criteria",
          "Minor instrument shifting within sealed packaging is expected during normal handling per AORN guidelines and does not compromise seal integrity or sterility",
          "The pack can be used if opened with aseptic no-touch technique and the instrument passes a visual inspection under lighted magnification before contacting the field"
        ],
        correctIndex: 0,
        explanation: "An instrument shifting inside a peel pack can stress the seal from within, creating micro-breaches not visible externally. When there's any doubt about package integrity, the pack should be more carefully inspected or returned for reprocessing. When in doubt, don't use it.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ss17",
        question: "A surveyor finds sterile supplies stored on wire shelving that is touching the back wall. The bottom shelf is solid and 10 inches off the floor. Temperature is 70°F and humidity is 45%. What is the finding?",
        options: [
          "The humidity at 45% is below the minimum 50% threshold for sterile storage environments",
          "Items stored touching the wall — supplies must not touch walls in sterile storage",
          "Wire shelving with solid bottom shelf, proper height, and controlled climate meet all requirements",
          "The bottom shelf at 10 inches exceeds the 8-9 inch maximum height for sterile storage shelving"
        ],
        correctIndex: 1,
        explanation: "Sterile supplies must not touch walls. Contact with walls can cause moisture wicking and physical damage to packaging. All other parameters are within acceptable ranges.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss18",
        question: "A surveyor finds two issues in sterile storage: (1) a corrugated cardboard divider being used to separate different tray types on a shelf, and (2) peel packs stacked 2 high. Which is the finding?",
        options: [
          "Only the cardboard divider — corrugated cardboard in any form is prohibited in sterile storage; peel packs at 2 high are compliant",
          "Only the peel packs — per AAMI ST79 Section 10.5, stacking any peel packs creates compression force that may compromise seal integrity over time",
          "Neither — plastic-coated corrugated dividers meet AAMI ST79 requirements for sterile storage, and 2-high stacking is within acceptable stacking limits",
          "Both — corrugated cardboard is prohibited per AAMI ST79 and peel packs must be stored vertically on edge per AORN Guideline 12.5, not stacked flat"
        ],
        correctIndex: 0,
        explanation: "Corrugated cardboard in ANY form is prohibited in sterile storage — including as dividers. Peel packs stacked 2 high are within the maximum stacking allowance.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss19",
        question: "A sterile pack was sterilized 13 months ago. The packaging is completely intact with no visible damage, moisture, or contamination. A tech inspects it, documents the re-inspection, and places it back on the shelf for use. Is this process correct?",
        options: [
          "Event-related sterility only applies for the first 12 months; after that, time-based expiration takes effect",
          "Re-inspection and documentation of intact packaging satisfies the over-1-year requirement",
          "Any item stored over 12 months must be automatically reprocessed, not just re-inspected",
          "But only if the item is returned to SPD for biological indicator testing before it can be released for use"
        ],
        correctIndex: 1,
        explanation: "Under event-related sterility, items over 1 year must be re-inspected. If the packaging remains intact with no compromise events, re-inspection with documentation is sufficient. Automatic reprocessing is not required if the package passes inspection.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ss20",
        question: "The sterile storage room thermometer shows 74°F and 58% humidity. A tech says both are 'borderline but fine.' A surveyor asks what would happen if the temperature rose 2 degrees. What is the correct response?",
        options: [
          "At 76°F, the room would exceed the 75°F maximum, requiring immediate corrective action and notification",
          "The humidity would need to be reduced below 50% to compensate for the temperature increase",
          "Nothing — the acceptable range extends to 78°F for sterile storage areas",
          "A 2-degree rise would be documented in the temperature log but would not require corrective action unless it persisted for over 4 hours"
        ],
        correctIndex: 0,
        explanation: "The acceptable temperature range for sterile storage is 68-75°F. At 74°F, the room is within range. A 2-degree rise to 76°F would exceed the 75°F maximum, triggering a need for immediate corrective action. The tech should recognize how close they are to the limit.",
        xpReward: 20,
        isSwipe: false,
      },
    ],
  },
  {
    id: "instruments",
    name: "Instrument Integrity",
    description: "Inspect instruments for damage, rust, and packaging issues in peel packs.",
    icon: "Wrench",
    color: "hsl(340, 82%, 50%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "Instrument Integrity",
      plainLanguageSummary: "Instruments with visible rust, pitting, broken tips, or compromised packaging must be removed from service immediately. Surveyors inspect peel packs at the point of opening and instrument trays before use. A single rusted or damaged instrument in a tray is a citation.",
      keyOperationalExpectations: [
        "Instruments must be visually inspected after each reprocessing cycle before packaging and before use.",
        "Rust, pitting, cracks, broken tips, or misaligned jaws require immediate removal from service.",
        "Peel packs must show intact seals on all edges — any peel-away or broken seal makes the item non-sterile.",
        "Instruments packaged in peel packs must not exceed half the pack's thickness to maintain seal integrity.",
        "Chemical indicator (CI) must be present and have changed color inside every sealed package.",
      ],
      commonRiskPoints: [
        "Instruments with visible rust or pitting returned to service because 'a little rust is normal' — any visible rust is a citation and a patient safety issue.",
        "Peel packs with one partially open seal used anyway because the other three edges are intact.",
        "Multiple instrument sets double-pouched too tightly, compressing the pack and breaking seal integrity.",
        "No internal chemical indicator inside peel packs, so there is no evidence that sterilization conditions were reached.",
        "Inspection performed only before packaging, not again at point of use immediately before the case.",
      ],
      cmsTags: ["IC.02.02.01", "ST79", "AAMI ST79"],
    },
    studyMaterial: [
      {
        title: "What Should You Look For During Visual Instrument Inspection?",
        content: "Every instrument must be visually inspected before use and at assembly. Look for: rust (orange or brown staining), corrosion, pitting, cracks, bent tips, dull cutting edges, and stiff joints. Lighted magnification must be available at assembly and inspection stations. Any defect = remove from service.",
        keyPoint: "Inspect every instrument. Lighted magnification required at assembly. Defect = out of service.",
        category: "rule",
      },
      {
        title: "What Does Orange or Brown Staining on an Instrument Indicate?",
        content: "Orange or brown staining on instruments indicates rust or corrosion. A rusted instrument's surface is permanently compromised — microscopic pits harbor bacteria even after sterilization cycles. These instruments must be immediately removed from service. This standard also applies to metal equipment: IV poles, linen carts, and transport carts must be rust-free.",
        keyPoint: "Orange or brown staining = rust. Remove from service immediately. Applies to all metal equipment.",
        category: "definition",
      },
      {
        title: "What Is Surface Etching and What Causes It?",
        content: "Surface etching appears as rough, dull, or frosted patches on instrument surfaces. It is caused by incompatible cleaning chemicals, wrong concentrations, or prolonged chemical exposure. Etched surfaces harbor bacteria in microscopic irregularities and cannot be sterilized reliably.",
        keyPoint: "Etching = chemical damage. Rough or frosted surface = instrument must be evaluated.",
        category: "definition",
      },
      {
        title: "What Are the 6 Checks Required Before Opening a Peel Pack?",
        content: "Before opening a peel pack, verify all six: (1) seal integrity — no peeling or gaps, (2) chemical indicator changed color, (3) instrument is open and unhinged, (4) no tears or moisture on the package, (5) package is not compressed or crushed, (6) not stacked more than 2 high.",
        keyPoint: "Six checks before opening: seal, CI color, open position, condition, no crush, max 2 high.",
        category: "number",
      },
      {
        title: "Can Single-Use Instruments Be Reprocessed In-House?",
        content: "All instruments must have proper FDA clearance. 'Pakistan-marked' instruments are single-use only and must never be placed in peel packs for reprocessing. Single-use items can only be reprocessed by FDA-registered third-party reprocessors — never in-house.",
        keyPoint: "Pakistan-marked = single use only. Never in peel packs. No in-house reprocessing of disposables.",
        category: "rule",
      },
      {
        title: "Why Is Lighted Magnification Required at Assembly Stations?",
        content: "Lighted magnification must be available and used at instrument assembly and inspection stations. It enables detection of rust, etching, pitting, and micro-cracks invisible to the naked eye. The absence of lighted magnification at an inspection station is itself a compliance finding.",
        keyPoint: "Lighted magnification = required at assembly. Its absence is a finding.",
        category: "rule",
      },
      {
        title: "How Is an Instrument's Functionality Tested Before Release?",
        content: "An instrument with a stiff, binding, or misaligned joint must be removed from service. Functionality means the instrument opens, closes, locks, and releases smoothly. A hemostat that won't lock or scissors that won't cut cleanly are patient safety issues — not minor cosmetic concerns.",
        keyPoint: "Stiff, binding, or misfiring joints = out of service. Functionality must be fully verified.",
        category: "scenario",
      },
      {
        title: "What Does Visible Residue on an Instrument After Cleaning Indicate?",
        content: "If visible organic material — blood, tissue — remains on an instrument after decontamination, the cleaning process has failed. The instrument must not be packaged, sterilized, or used. It must be reprocessed from the beginning.",
        keyPoint: "Visible residue after cleaning = reprocess from scratch. Never package a dirty instrument.",
        category: "mistake",
      },
      {
        title: "How Must Instrument Defects Be Documented?",
        content: "Instrument defects found during inspection must be documented and reported — not just set aside. The instrument must be tagged out of service. Documentation enables pattern tracking and preventive maintenance planning. Simply placing a defective instrument aside without tagging and recording it is non-compliant.",
        keyPoint: "Defects: document + tag + remove. Setting aside without documentation is not acceptable.",
        category: "rule",
      },
      {
        title: "Is Any Instrument Defect Ever 'Just Cosmetic'?",
        content: "A common mistake is assuming a defect is 'just cosmetic' and using the instrument anyway. Rust, etching, and cracks are never cosmetic — they create surfaces that cannot be properly sterilized. If there is any doubt about an instrument's integrity, it must be removed from service.",
        keyPoint: "No defect is 'just cosmetic.' Any rust, etching, or crack = out of service.",
        category: "mistake",
      },
    ],
    questions: [
      {
        id: "i1",
        question: "A surveyor inspects a hemostat from a peel pack and finds the instrument in the closed/locked position with a properly changed chemical indicator. Is this compliant?",
        options: [
          "As long as the seal is intact and the indicator changed, instrument positioning is a secondary consideration",
          "Closed positioning protects delicate instrument tips during storage and does not affect sterilization efficacy",
          "The changed chemical indicator confirms sterilant penetration, which is the definitive measure of sterility",
          "The instrument must be in the open position inside a peel pack, even though the indicator changed"
        ],
        correctIndex: 3,
        explanation: "Instruments in peel packs must be in the open/unhinged position to ensure sterilant contact with all surfaces, especially hinged areas. A changed indicator doesn't compensate for improper positioning.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i2",
        question: "A surveyor sees light gray discoloration on a stainless steel instrument. The surface is smooth and not rough to the touch. Is this a compliance concern?",
        options: [
          "Discoloration of any kind must be documented and the instrument quarantined for metallurgical testing",
          "Light gray toning without roughness is normal patina, not rust or etching",
          "Gray discoloration suggests chemical residue from improper detergent rinsing during reprocessing",
          "Any discoloration indicates the protective finish has degraded and the instrument cannot be reliably sterilized"
        ],
        correctIndex: 1,
        explanation: "Normal patina (light gray toning) on stainless steel is acceptable if the surface is smooth. The concerns are orange/brown staining (rust), rough/frosted areas (etching), or pitting.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i3",
        question: "What does surface etching on an instrument indicate, and how does it appear?",
        options: [
          "Bioburden staining — appears as persistent discoloration from inadequate point-of-use cleaning",
          "Chemical damage — appears as rough, dull, or frosted areas",
          "Sterilization wear — appears as smooth, thinned areas from repeated autoclave cycles",
          "Mineral deposit buildup — appears as white or chalky residue from hard water exposure"
        ],
        correctIndex: 1,
        explanation: "Surface etching indicates chemical damage from improper cleaning solutions. It appears as rough, dull, or frosted areas where bacteria can hide in microscopic irregularities.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i4",
        question: "A tech finds an instrument marked 'Made in Pakistan' in a peel pack ready for a surgical case. What should be done?",
        options: [
          "Remove it — Pakistan-marked instruments are single-use and must never be in peel packs for reuse",
          "Flag it for review — the instrument can be used for this case but must be evaluated before the next reprocessing cycle",
          "Use it — if it's in a peel pack with a changed indicator, it was processed and sterilized correctly",
          "Use it — country of origin does not affect instrument eligibility as long as the facility's SPD validated the reprocessing cycle"
        ],
        correctIndex: 0,
        explanation: "Pakistan-marked instruments are single-use only and lack FDA clearance for reprocessing. Finding one in a peel pack is a serious finding — it must be removed immediately.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i5",
        question: "A surveyor inspects a peel pack and finds: intact seal, changed chemical indicator, instrument in open position, no tears or moisture, and a label showing sterilizer ID, load number, and date. Is this pack acceptable for use?",
        options: [
          "The biological indicator results for the corresponding load must be confirmed before any pack from that load can be used",
          "All inspection and labeling criteria are met",
          "The pack must also display the technician's initials who assembled and loaded the instrument",
          "Peel packs also require a second external chemical indicator strip on the outside of the package"
        ],
        correctIndex: 1,
        explanation: "This pack meets ALL criteria: seal integrity, indicator color change, proper instrument position, good package condition, and complete labeling (sterilizer, load, date). It is acceptable for use.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i6",
        question: "An instrument has brown discoloration specifically in the box lock (hinge) area. The rest of the instrument looks clean. Is this acceptable?",
        options: [
          "Localized discoloration in hinge areas is a normal result of heat exposure during autoclave cycles",
          "Box lock discoloration is expected from normal friction and wear during repeated use",
          "Brown discoloration in the box lock often indicates trapped bioburden or early corrosion",
          "As long as the instrument opens and closes smoothly, minor hinge discoloration is not a sterility concern"
        ],
        correctIndex: 2,
        explanation: "Brown discoloration in the box lock area is a red flag for trapped bioburden or corrosion. The instrument needs thorough inspection and cleaning — bioburden in hinges prevents proper sterilization.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i7",
        question: "A scissor's cutting edge is dull but otherwise undamaged — no rust, pitting, or bent tips. Should it remain in service?",
        options: [
          "Dull edges can be addressed by the surgeon intraoperatively using a sharpening stone on the sterile field",
          "Dull cutting edges are a defect requiring removal from service for sharpening or replacement",
          "As long as the instrument passes the tissue test at the point of use, it may continue in service",
          "Dullness is a normal wear pattern and does not affect the instrument's sterility or safety"
        ],
        correctIndex: 1,
        explanation: "Dull cutting edges are considered a functional defect. Instruments with dull edges must be removed from service for professional sharpening or replacement — using dull instruments risks patient harm.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i8",
        question: "A single-use device needs reprocessing. The facility wants to handle it in-house to save time. Is this acceptable?",
        options: [
          "In-house reprocessing is permitted for single-use devices classified as non-critical or semi-critical",
          "Only FDA-registered third-party reprocessors are authorized to reprocess single-use devices",
          "If the SPD follows the manufacturer's IFU and documents the reprocessing steps taken",
          "Facilities with validated sterilization programs may reprocess single-use devices up to three times"
        ],
        correctIndex: 1,
        explanation: "Single-use instruments must NEVER be reprocessed in-house. Only FDA-registered third-party reprocessors have the validated processes and oversight required for safe reprocessing.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i9",
        question: "Peel packs are stored 2 high on wire shelving with smooth edges. Is this storage compliant?",
        options: [
          "Max 2 high on non-sharp shelving is correct",
          "Peel packs should be stored on solid shelving only, and stacking of any kind compromises seal integrity",
          "Peel packs must always be stored individually in separate bins to prevent cross-contamination between packages",
          "Wire shelving is never appropriate for peel packs due to the risk of snagging and puncturing the packaging"
        ],
        correctIndex: 0,
        explanation: "This IS compliant. Peel packs can be stacked up to 2 high, and shelving should NOT have sharp edges that could puncture packaging. Wire shelving with smooth edges is appropriate.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i10",
        question: "A surveyor asks what tool must be available at instrument assembly and inspection workstations. What is the correct answer?",
        options: [
          "A UV inspection light",
          "Lighted magnification",
          "An endoscope camera",
          "A standard magnifying glass"
        ],
        correctIndex: 1,
        explanation: "Lighted magnification must be available at assembly/inspection stations. This allows technicians to detect fine defects, residual bioburden, and damage that may not be visible to the naked eye.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i11",
        question: "An instrument has visible pitting — small cavities in the surface. A tech says the instrument still functions properly. Should it remain in service?",
        options: [
          "Pitting creates cavities where bacteria hide and cannot be sterilized effectively",
          "Pitted instruments can remain in service if they pass a visual bioburden check after sterilization",
          "Minor surface pitting is expected with instrument age and is addressed through routine lubrication",
          "Pitting is cosmetic and does not affect sterilization as long as the instrument functions correctly"
        ],
        correctIndex: 0,
        explanation: "Pitting creates microscopic cavities that harbor bacteria and cannot be reached by the sterilization process. Function does not equal sterility — pitted instruments must be removed from service.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i12",
        question: "A frayed piece of chemical indicator tape is found on a sterile package. The seal underneath appears intact. Is this a concern?",
        options: [
          "The chemical indicator tape is only for visual confirmation of sterilant exposure and does not affect seal integrity",
          "If the seal underneath is intact and the indicator changed color, the frayed tape is cosmetic only",
          "Frayed tape suggests the seal may be compromised and requires investigation",
          "Frayed tape is common after normal handling and transport and does not indicate package compromise"
        ],
        correctIndex: 2,
        explanation: "Frayed indicator tape is a concern because it suggests the package may have been handled roughly or the seal stressed. The package should be thoroughly inspected and potentially reprocessed.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i13",
        question: "A hemostat's joints are stiff and difficult to operate. What is the most likely cause?",
        options: [
          "Dried bioburden in the box lock area or inadequate lubrication",
          "The instrument was stored in the closed position, causing the hinge mechanism to set in a fixed position",
          "The instrument was exposed to excessive autoclave temperatures, causing metal expansion in the hinge",
          "Normal wear from repeated sterilization cycles requiring scheduled replacement per manufacturer lifecycle guidance"
        ],
        correctIndex: 0,
        explanation: "Stiff joints are most commonly caused by dried-on bioburden accumulating in the box lock area or by inadequate lubrication during reprocessing. This indicates a cleaning or maintenance problem.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i14",
        question: "A tech inspects a Kerrison rongeur and finds the jaws close properly but there is a tiny area of pitting on the inner jaw surface. The instrument is otherwise functional. Should it remain in service?",
        options: [
          "The instrument can remain in service if the pitted area is polished smooth by the SPD team before the next cycle",
          "Pitting creates microscopic crevices that harbor bacteria and prevent effective sterilization; the instrument must be removed",
          "Pitting on the inner jaw does not affect sterilization because steam contacts the exterior surfaces during autoclaving",
          "Minor pitting on an otherwise functional instrument is acceptable and within normal wear tolerances"
        ],
        correctIndex: 1,
        explanation: "Pitting creates microscopic surface irregularities where bacteria can hide, even after sterilization. Unlike smooth patina, pitting compromises the instrument's ability to be sterilized. It must be removed from service regardless of functionality.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i15",
        question: "A surveyor examines three instruments from peel packs: Instrument A has a changed indicator and is open. Instrument B has a changed indicator but is closed. Instrument C has an unchanged indicator and is open. Which can be used?",
        options: [
          "None — peel pack instruments from the same lot should all be treated as compromised if any instrument fails criteria",
          "A and B — both have changed indicators confirming sterilant exposure, which is the primary sterility verification",
          "Only A — the only one meeting all criteria",
          "A and C — both are in the proper open position ensuring sterilant reached all surfaces during processing"
        ],
        correctIndex: 2,
        explanation: "Only Instrument A meets all requirements: chemical indicator changed (confirming sterilant exposure) AND instrument in the open position (ensuring sterilant reached all surfaces). B fails on position, C fails on indicator. Both B and C must be returned for reprocessing.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i16",
        question: "A scrub tech reports that a scissor from a just-opened peel pack has a 'sticky' feel at the hinge. No visible rust, corrosion, or discoloration. What should be done?",
        options: [
          "Work the hinge back and forth several times to loosen the joint — per AAMI ST79, this is a normal result of prolonged storage in a peel pack and does not indicate contamination",
          "Apply sterile instrument lubricant at the point of use and proceed with the case — stiff joints are a lubrication maintenance issue, not an indicator of sterility compromise",
          "Use it for this case and document the stiff joint so it is flagged for enhanced ultrasonic cleaning and inspection during the next reprocessing cycle in SPD",
          "Remove from service — a stiff joint may indicate residual bioburden in the box lock that was not fully removed during reprocessing"
        ],
        correctIndex: 3,
        explanation: "A stiff or 'sticky' joint on a sterilized instrument suggests residual bioburden trapped in the box lock area, meaning decontamination was incomplete. The instrument must be removed and returned to SPD, not simply lubricated at the point of use.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i17",
        question: "A facility receives instruments from a vendor marked 'Made in Germany' without FDA clearance markings. The vendor says German instruments don't need FDA clearance. Can these be used on patients?",
        options: [
          "German-made surgical instruments are exempt from FDA requirements due to international trade agreements",
          "As long as the facility's value analysis committee has approved the vendor and instrument specifications",
          "ALL instruments used on patients in the US must have FDA clearance regardless of country of origin",
          "Instruments from EU countries with CE marking are recognized as equivalent to FDA clearance in the US"
        ],
        correctIndex: 2,
        explanation: "FDA clearance is required for all instruments used on patients in the United States regardless of manufacturing origin. Country of manufacture does not substitute for FDA regulatory compliance.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i18",
        question: "During assembly, a tech notices a faint circular mark on a scalpel handle — a water spot. The mark is flat and smooth, not raised or rough. Should the instrument be removed from service?",
        options: [
          "Any mark or discoloration indicates a compromised surface that cannot be reliably sterilized",
          "A flat, smooth water spot is a mineral deposit from rinse water and is not a defect if the surface is otherwise intact",
          "Water spots indicate the rinse cycle was inadequate, meaning residual detergent may remain on the instrument",
          "Circular marks suggest localized corrosion beneath the surface that will worsen with repeated sterilization"
        ],
        correctIndex: 1,
        explanation: "Water spots (mineral deposits) are flat and smooth — cosmetic, not structural. Unlike rust (orange/brown, rough), corrosion (pitting), or etching (frosted texture), water spots don't compromise the instrument surface.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i19",
        question: "A peel pack is properly sealed with a changed indicator. However, the paper side is facing down on the shelf instead of up. Is this a concern?",
        options: [
          "Storage orientation is a facility preference, not a regulatory or best-practice requirement",
          "Orientation does not affect sterility as long as the seal and indicator are intact",
          "Peel packs should be stored paper side up for visual inspection without unnecessary handling",
          "Paper side down actually protects the peel side from accidental punctures on the shelf surface"
        ],
        correctIndex: 2,
        explanation: "Peel packs should be stored with the paper (transparent) side up so the instrument and chemical indicator can be visually inspected without picking up and manipulating the package, which reduces the risk of package compromise.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i20",
        question: "A tray from SPD contains both single-use (disposable) and reusable instruments processed together. The single-use items are marked for reuse. What is the most serious concern?",
        options: [
          "Mixing single-use and reusable instruments in the same sterilization load compromises cycle validation",
          "Single-use instruments being reprocessed for reuse in-house — they cannot be reprocessed in-house under any circumstances",
          "Single-use instruments require different sterilization parameters than reusable instruments, potentially compromising the cycle",
          "Single-use instruments processed through standard sterilization cycles may release toxic residues not intended for reprocessing"
        ],
        correctIndex: 1,
        explanation: "The most serious issue is in-house reprocessing of single-use instruments for reuse. Only FDA-registered third-party reprocessors may reprocess single-use devices. This is a regulatory violation that puts patients at risk.",
        xpReward: 20,
        isSwipe: false,
      },
    ],
  },
  {
    id: "facilities",
    name: "Facilities & Equipment",
    description: "Ensure warmers, refrigerators, oxygen, electrical panels, and facility equipment meet compliance standards.",
    icon: "Thermometer",
    color: "hsl(195, 80%, 45%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "Facilities & Equipment",
      plainLanguageSummary: "Equipment used in patient care must be monitored, maintained, and documented. Temperature logs for warmers and refrigerators must show not just readings but what happened when readings were out of range. Oxygen tanks and electrical equipment must meet specific safety requirements.",
      keyOperationalExpectations: [
        "Blanket and fluid warmer temperatures must be logged continuously and stay within the manufacturer's validated range.",
        "Medication refrigerator temperature logs must include documented action taken on any out-of-range reading — not just the reading itself.",
        "Oxygen cylinders must be secured upright with chains or brackets and stored separately from flammable materials.",
        "Extension cords must not be used as permanent wiring — only surge-protected power strips approved for clinical use.",
        "All patient care equipment must have documented preventive maintenance on schedule.",
      ],
      commonRiskPoints: [
        "Temperature logs showing only check marks with no documented corrective action when an excursion occurred.",
        "Blanket warmers set above the manufacturer's maximum temperature limit, creating burn risk.",
        "Oxygen cylinders stored unsecured against a wall or laying horizontal without chain or bracket.",
        "Extension cords used as permanent wiring for patient care equipment — a fire and electrical safety citation.",
        "Preventive maintenance stickers missing or expired on patient care equipment still in active use.",
      ],
      cmsTags: ["EC.02.04.01", "EC.02.05.01", "EC.02.06.01"],
    },
    studyMaterial: [
      {
        title: "What Is the Temperature Limit for Blanket Warmers?",
        content: "Blanket warmers must never exceed 130°F. No fluids or solutions may ever be stored inside a blanket warmer — only blankets and warming items. Temperature logs must be maintained and current.",
        keyPoint: "Blanket warmers ≤130°F. No fluids inside — blankets only.",
        category: "number",
      },
      {
        title: "What Are the Temperature and Dating Requirements for Fluid Warmers?",
        content: "Fluid warmers must never exceed 110°F. All fluids inside must be dated when placed in the warmer and must not be expired. Temperature logs must be maintained. Blanket warmers and fluid warmers are separate devices with different temperature limits.",
        keyPoint: "Fluid warmers ≤110°F. Fluids dated when placed in. No expired fluids.",
        category: "number",
      },
      {
        title: "How Must Oxygen Cylinders Be Stored and Segregated?",
        content: "Full oxygen cylinders must be segregated from empty or partially full cylinders — clearly labeled and stored separately. A maximum of 12 cylinders may be stored in any non-hazardous area. All cylinders must be properly secured to prevent tipping.",
        keyPoint: "Full O₂ segregated from non-full. Max 12 in non-hazardous rooms. Secured against tipping.",
        category: "number",
      },
      {
        title: "What Requires 3 Feet of Clearance in Front?",
        content: "The following must all have 3 feet of clearance in front: electrical panels (which must also be locked), fire extinguishers, fire pull stations, and medical gas shut-off panels. These clearances must never be blocked by equipment, carts, or furniture.",
        keyPoint: "3-foot clearance: electrical panels (locked), fire extinguishers, fire pulls, gas panels.",
        category: "number",
      },
      {
        title: "What Are the Requirements for Code Carts?",
        content: "Code carts must have current checks documented per hospital policy. Code carts and defibrillators must be plugged into emergency (red) electrical outlets. Laryngoscope blades must be stored separately — even on crash carts. Overdue code cart checks are an immediate finding.",
        keyPoint: "Code carts: current checks, plugged into red outlets, laryngoscope blades stored separately.",
        category: "rule",
      },
      {
        title: "How Low Must Emergency Call Cords Hang?",
        content: "Emergency call light pull cords must hang to within 6 inches of the floor so a fallen patient can reach them. They must not be wrapped around handrails, looped up, or placed on the floor. A call cord that can't be reached from the floor defeats its purpose.",
        keyPoint: "Call cords must hang within 6 inches of the floor. Never wrapped around rails.",
        category: "rule",
      },
      {
        title: "How Often Must Medication Refrigerators Be Checked and What Is the Acceptable Range?",
        content: "Medication refrigerators must be checked daily with temperatures documented. The acceptable range is 36–46°F. Patient food refrigerators also require temperature logs. Ice machines must have current cleaning logs and temperature monitoring. All require daily monitoring — not weekly.",
        keyPoint: "Medication fridges: daily checks, 36–46°F range. Food fridges and ice machines: also daily logs.",
        category: "number",
      },
      {
        title: "What Dwell Times Apply When Cleaning Glucometers?",
        content: "Glucometers must be visibly clean with no blood residue. Two approved cleaning protocols: Yellow Top Bleach Wipes require a 4-minute dwell time. PDI Sani-Cloth Prime requires a 1-minute dwell time. Using the wrong product or insufficient dwell time is non-compliant.",
        keyPoint: "Glucometer: Yellow Bleach Wipes = 4 min dwell. PDI Sani-Cloth Prime = 1 min dwell.",
        category: "number",
      },
      {
        title: "When Does Opened Ultrasound Gel Expire?",
        content: "Open ultrasound gel expires 28 days after opening. All open bottles must be dated with the date opened. Undated gel must be treated as expired and discarded. This applies to all gel bottles regardless of how much remains in the container.",
        keyPoint: "Ultrasound gel: 28 days after opening. Date it when you open it. Undated = expired.",
        category: "number",
      },
      {
        title: "Can Fluids Ever Be Stored in Blanket Warmers?",
        content: "A common finding is IV fluids or irrigation solutions stored inside blanket warmers. This is never acceptable — fluids may not be stored in blanket warmers regardless of the reason. Fluid warmers are the designated device for warming fluids, with their own lower temperature limit of 110°F.",
        keyPoint: "Fluids in blanket warmers = finding. Fluid warmers are separate devices.",
        category: "mistake",
      },
    ],
    questions: [
      {
        id: "f1",
        question: "A surveyor checks a blanket warmer showing 128°F with only blankets inside and a current temperature log. Is this compliant?",
        options: [
          "Blanket warmers must display both the current temperature and the max recorded temperature for the shift",
          "Blanket warmers require hourly temperature logs, and a single current log is insufficient documentation",
          "Temperature is within range, contents are appropriate, and logs are current",
          "Blanket warmers must be kept below 120°F to prevent thermal injury to patients"
        ],
        correctIndex: 2,
        explanation: "This IS compliant. Blanket warmers must not exceed 130°F (128°F is within range), only blankets are permitted inside (no fluids), and temperature logs are maintained.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f2",
        question: "A surveyor finds IV fluids stored inside a blanket warmer at 125°F. Staff says fluids are often placed here for convenience. Is this acceptable?",
        options: [
          "Fluids and solutions must never be stored in blanket warmers regardless of temperature",
          "As long as the fluids are dated and the temperature log is current, co-storage with blankets is permitted",
          "125°F is well below the 130°F blanket warmer limit, so fluids are safe at this temperature",
          "Fluids may be temporarily stored in blanket warmers for up to 4 hours if the temperature stays below 130°F"
        ],
        correctIndex: 0,
        explanation: "No fluids or solutions may be stored in blanket warmers — period. Fluids must go in designated fluid warmers at ≤110°F. Temperature compliance doesn't change this rule.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f3",
        question: "A fluid warmer is set to 108°F. Inside, fluids are dated and unexpired. The temperature log is current. Is this compliant?",
        options: [
          "All fluid warmer requirements are met",
          "Fluid warmers require continuous electronic temperature monitoring, not manual logs",
          "Fluid warmers must not exceed 100°F to prevent protein denaturation in IV solutions",
          "Fluids must be rotated every 24 hours regardless of expiration date when stored in a warmer"
        ],
        correctIndex: 0,
        explanation: "This IS compliant. Fluid warmer temperature is ≤110°F (108°F), fluids are dated when placed and not expired, and temperature logs are maintained.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f4",
        question: "A surveyor counts 10 full O₂ cylinders and 4 partially full cylinders all stored together in a supply room. What are the compliance issues?",
        options: [
          "Both — the total exceeds 12 AND full must be segregated from partially full cylinders",
          "The 12-cylinder limit applies only to flammable gas cylinders, not medical oxygen",
          "Only the total count — 14 cylinders exceeds the 12-cylinder maximum; segregation is recommended but not required",
          "Only the mixing — full and partially full cylinders must be segregated, but the total of 14 is within the 15-cylinder limit"
        ],
        correctIndex: 0,
        explanation: "Two violations: (1) Total of 14 exceeds the 12-cylinder maximum for non-hazardous rooms, and (2) full cylinders must be segregated from empty or partially full cylinders.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "f5",
        question: "A code cart is plugged into a red outlet with current documentation checks. Laryngoscope blades are stored in a separate compartment within the cart. Is this compliant?",
        options: [
          "Code carts must be plugged into dedicated code cart outlets, not standard red emergency outlets",
          "Laryngoscope blades must be stored completely separately from the crash cart in a dedicated airway kit",
          "Laryngoscope blades must be individually sealed in sterile packaging within the cart compartment",
          "All code cart requirements are met"
        ],
        correctIndex: 3,
        explanation: "This IS compliant. The code cart is on a red (emergency) outlet, checks are current, and laryngoscope blades are stored separately within the cart as required.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f6",
        question: "A surveyor finds equipment stored 2 feet in front of an unlocked electrical panel. How many compliance issues are present?",
        options: [
          "One — the panel must be locked, but 2 feet of clearance meets the standard for non-emergency electrical panels",
          "Two — insufficient clearance AND the panel must be locked",
          "None — 2 feet meets the minimum clearance requirement and electrical panels only need to be locked in patient care areas",
          "One — the clearance is insufficient at 2 feet; electrical panels require 3 feet but are not required to be locked if in a restricted area"
        ],
        correctIndex: 1,
        explanation: "Two issues: (1) Electrical panels require 3 feet of clearance, not 2 feet, and (2) electrical panels must be kept locked.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f7",
        question: "An emergency call light pull cord hangs 8 inches from the floor. Is this compliant?",
        options: [
          "Call cords must touch the floor to ensure accessibility for patients in any position",
          "The standard requires cords to hang within 12 inches of the floor, so 8 inches exceeds the requirement",
          "Call cords must hang to within 6 inches of the floor",
          "The cord is close enough to the floor that a patient on the ground could reasonably reach it"
        ],
        correctIndex: 2,
        explanation: "Emergency call light pull cords must hang to within 6 inches of the floor. At 8 inches, the cord is too high — a patient who has fallen may not be able to reach it.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f8",
        question: "A surveyor checks a medication refrigerator at 40°F with daily temperature logs. Is this compliant?",
        options: [
          "Medication refrigerators require continuous digital monitoring, not manual daily logs",
          "40°F is within the 36-46°F range and logs are daily",
          "Medication refrigerators must be kept at 35°F or below to maintain drug stability",
          "The acceptable range is 33-38°F, and 40°F exceeds the upper limit for medication storage"
        ],
        correctIndex: 1,
        explanation: "This IS compliant. Medication refrigerator acceptable range is 36-46°F (40°F is within range), and daily temperature checks are being documented.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f9",
        question: "A tech cleans a NovaStat glucometer with PDI Sani-Cloth Prime wipes, allowing a 1-minute dwell time. Is this the correct procedure?",
        options: [
          "PDI Sani-Cloth Prime requires 1-minute dwell time for glucometers",
          "PDI Sani-Cloth Prime requires a 2-minute dwell time for point-of-care testing devices",
          "Glucometers must be cleaned with alcohol-based wipes only, not quaternary ammonium-based products",
          "All glucometer cleaning requires a minimum 4-minute dwell time regardless of the disinfectant used"
        ],
        correctIndex: 0,
        explanation: "This IS correct. PDI Sani-Cloth Prime requires only a 1-minute dwell time for glucometer disinfection. The 4-minute dwell time applies to Yellow Top Bleach Wipes specifically.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f10",
        question: "A glucometer is cleaned with Yellow Top Bleach Wipes. After 2 minutes, the tech wipes it dry and begins using it. Is this adequate disinfection?",
        options: [
          "Yellow Top Bleach Wipes require a full 4-minute dwell time on glucometers",
          "The key requirement is visible wetness during contact, and 2 minutes of wet contact meets the standard",
          "Yellow Top Bleach Wipes require a 10-minute dwell time for any blood-contacting device",
          "2 minutes is sufficient for bleach-based disinfectants on non-critical patient care devices"
        ],
        correctIndex: 0,
        explanation: "Yellow Top Bleach Wipes require a full 4-minute wet contact (dwell) time for proper glucometer disinfection. Wiping dry at 2 minutes is inadequate.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f11",
        question: "Ultrasound gel was opened and dated 25 days ago. Is it still acceptable for use?",
        options: [
          "Ultrasound gel expires 14 days after opening to prevent bacterial contamination",
          "Ultrasound gel expires 21 days after opening, making this bottle 4 days past expiration",
          "Ultrasound gel must be discarded after 7 days once opened, per infection prevention guidelines",
          "Ultrasound gel is good for 28 days after opening"
        ],
        correctIndex: 3,
        explanation: "Ultrasound gel expires 28 days after opening. At 25 days, the gel is still within its acceptable use window.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f12",
        question: "A call light cord is found wrapped neatly around the bedrail to keep it out of the way. Is this acceptable?",
        options: [
          "Securing the cord to the rail is preferred to prevent it from dragging on the floor",
          "Wrapping the cord prevents tripping hazards and keeps the patient area tidy",
          "As long as the call light button on the cord is still within the patient's reach from the bed",
          "Call cords must hang freely to within 6 inches of the floor, never wrapped around rails"
        ],
        correctIndex: 3,
        explanation: "Call cords must never be wrapped around rails, tied up, or placed on the floor. They must hang freely so patients can reach them from any position, including after a fall.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f13",
        question: "What is the maximum number of oxygen cylinders allowed in a non-hazardous storage room?",
        options: [
          "8",
          "10",
          "12",
          "15"
        ],
        correctIndex: 2,
        explanation: "A maximum of 12 oxygen cylinders may be stored in any non-hazardous room to limit fire and explosion risk.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f14",
        question: "A surveyor sees a defibrillator plugged into a standard white wall outlet next to an available red emergency outlet. Is this acceptable?",
        options: [
          "Defibrillators have internal batteries, so the outlet color is irrelevant for emergency readiness",
          "Any functional outlet is acceptable as long as the defibrillator maintains a full charge",
          "White outlets are acceptable if a red outlet is available as backup within 10 feet",
          "Defibrillators must be plugged into emergency (red) outlets to maintain power during outages"
        ],
        correctIndex: 3,
        explanation: "Code carts and defibrillators must be plugged into emergency (red) outlets. During a power outage, standard white outlets lose power — red outlets stay on via backup generators.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f15",
        question: "A surveyor checks a blanket warmer reading 131°F. Staff immediately adjusts it to 129°F. The temperature log shows the last 5 readings were all between 128-130°F. Is the current situation compliant?",
        options: [
          "A 1°F variance above the limit falls within acceptable calibration tolerance for warming equipment",
          "The warmer was observed at 131°F, exceeding the 130°F maximum; the immediate reading is the finding regardless of historical data",
          "The temperature was corrected immediately and the historical log demonstrates consistent compliance",
          "Immediate correction by staff demonstrates an effective monitoring and response system, which is what surveyors evaluate"
        ],
        correctIndex: 1,
        explanation: "Compliance is assessed at the time of observation. The blanket warmer was at 131°F — exceeding the 130°F maximum. Historical readings within range don't erase the current non-compliance. The finding stands and must be documented.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "f16",
        question: "A surveyor finds a fluid warmer at 109°F with dated fluids. One IV bag has a handwritten date of 3 days ago, but no expiration date is written — just the placement date. The manufacturer expiration is 6 months away. Is this compliant?",
        options: [
          "Fluids in warmers must be removed and replaced every 24 hours regardless of manufacturer expiration dates",
          "Both the placement date AND a calculated warmer-specific expiration must be written on fluids in warmers",
          "Only the manufacturer expiration date matters; the placement date is optional documentation",
          "The fluid is dated when placed and within manufacturer expiration"
        ],
        correctIndex: 3,
        explanation: "Fluids in warmers must be dated when placed and not expired. The manufacturer expiration (6 months away) is valid, and the placement date (3 days ago) shows the fluid was dated when placed. Facilities may have additional policies about warmer duration, but the core requirement is met.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f17",
        question: "A surveyor finds a supply room with: 11 full O₂ cylinders properly secured on one rack, and 3 empty cylinders on a separate rack across the room. Is this compliant?",
        options: [
          "The 12-cylinder limit applies only to full cylinders; empty cylinders are not counted toward the maximum",
          "Empty cylinders must be stored in a separate designated room, not just on a separate rack in the same room",
          "Full and empty are properly segregated on separate racks, and the 12-cylinder limit applies to each category independently",
          "The total of 14 cylinders exceeds the 12-cylinder maximum for non-hazardous rooms"
        ],
        correctIndex: 3,
        explanation: "The 12-cylinder maximum applies to the total number of cylinders in a non-hazardous room, not just full ones. While full and empty are properly segregated (correct), the total of 14 exceeds the maximum of 12.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "f18",
        question: "A code cart is found with: current documentation, plugged into a red outlet, laryngoscope blades stored in a separate compartment. However, the code cart's wheels are not locked and it is slowly rolling away from the wall. Is this a finding?",
        options: [
          "The code cart meets all required standards for documentation, power source, and blade storage",
          "Unlocked wheels are preferred so the cart can be quickly mobilized during a code event",
          "Code cart wheels should be locked to prevent movement and ensure the cart is immediately accessible at its designated location",
          "Wheel locking is a facility preference, not a regulatory requirement, as long as the cart remains plugged in"
        ],
        correctIndex: 2,
        explanation: "Code carts must be secured at their designated locations. Unlocked wheels allow the cart to drift from its designated position, potentially making it harder to find in an emergency. Equipment must be properly secured.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f19",
        question: "A nurse cleans a NovaStat glucometer using Yellow Top Bleach Wipes. She applies the wipe, waits 4 minutes, then wipes it dry with a paper towel. Before the 4-minute dwell time, she notices dried blood on the test strip port. She uses a second wipe on just that area. Is the cleaning adequate?",
        options: [
          "She used the correct wipe with the correct dwell time and applied a second wipe to address the visible blood",
          "Visible blood must be removed FIRST with mechanical cleaning before the disinfection step; disinfectant wipes alone may not penetrate dried blood",
          "The 4-minute bleach dwell time is sufficient to disinfect through dried blood without additional mechanical cleaning",
          "Applying a second wipe to the affected area provides a double disinfection that compensates for any blood barrier"
        ],
        correctIndex: 1,
        explanation: "Dried blood or visible contamination must be mechanically removed before applying disinfectant. Disinfectant wipes may not penetrate through dried blood to the surface beneath. The correct process is: clean first (remove visible soil), then disinfect with proper dwell time.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "f20",
        question: "An OR has: a blanket warmer at 129°F (blankets only), a fluid warmer at 111°F (dated fluids), medication fridge at 40°F (daily logs), and a code cart on a red outlet. How many findings are present?",
        options: [
          "One — the fluid warmer exceeds 110°F",
          "One — the medication refrigerator at 40°F is above the 38°F maximum for medication storage",
          "Two — the fluid warmer exceeds 110°F and the blanket warmer at 129°F requires immediate adjustment to maintain a safety margin",
          "Zero — all equipment temperatures are within their respective acceptable ranges"
        ],
        correctIndex: 0,
        explanation: "One finding: the fluid warmer at 111°F exceeds the 110°F maximum. The blanket warmer at 129°F is within the ≤130°F limit (close but compliant). The medication fridge at 40°F is within 36-46°F. The code cart is properly on a red outlet.",
        xpReward: 20,
        isSwipe: false,
      },
    ],
  },
  {
    id: "spd_decontam",
    name: "SPD & Decontamination",
    description: "Master sterile processing department procedures — decontamination, sterilization, and quality testing.",
    icon: "FlaskConical",
    color: "hsl(45, 90%, 50%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "SPD & Decontamination",
      plainLanguageSummary: "Sterile processing is one of the highest-scrutiny areas in a Joint Commission survey. Surveyors verify that decontamination follows manufacturer IFU, that biological and chemical indicators are used correctly, that personnel follow the one-way dirty-to-clean workflow, and that implants are held until biological indicator results are confirmed.",
      keyOperationalExpectations: [
        "All instrument reprocessing must follow the manufacturer's IFU — deviations are a citation regardless of whether they seem minor.",
        "Biological indicators (BIs) must be run with every load containing implants; results must be confirmed before implant release.",
        "Chemical indicators (CIs) must be placed inside every package and checked on load review.",
        "Decontamination room personnel must not cross to the clean side without changing PPE and performing hand hygiene.",
        "Sterilizer load records must be retained and traceable to specific loads and specific patient cases.",
      ],
      commonRiskPoints: [
        "Personnel crossing from the dirty side of SPD to the clean side without removing soiled PPE — a one-way workflow violation.",
        "Implants released before biological indicator results are confirmed, because the BI was run but results weren't waited for.",
        "Instruments reprocessed using a cleaning cycle shorter than the manufacturer IFU requires ('we've always done it this way').",
        "BI results logged but not reviewed by a qualified person before load release — documentation without oversight.",
        "Sterilizer load logs incomplete or missing the load number, content description, or cycle parameters.",
      ],
      cmsTags: ["IC.02.02.01", "ST79", "AAMI ST79"],
    },
    studyMaterial: [
      {
        title: "What Air Pressure Must the Decontamination Room Maintain?",
        content: "The decontamination room must maintain negative air pressure relative to adjacent areas. Air flows INTO the room, preventing contaminated air from escaping. This is verified with a tissue test at the bottom of the door — the tissue should pull inward toward the decon room.",
        keyPoint: "Decon room = negative pressure. Tissue at door pulls inward to confirm.",
        category: "rule",
      },
      {
        title: "What PPE Is Required at All Times in the Decontamination Room?",
        content: "Full PPE is required at all times in the decontamination room — for every person in the room, regardless of whether they are actively handling instruments: surgical scrubs, fluid-resistant gown, gloves, mask, and eye protection. This is not optional and applies to all personnel.",
        keyPoint: "Decon room: scrubs + fluid-resistant gown + gloves + mask + eye protection. Everyone.",
        category: "number",
      },
      {
        title: "How Must Enzymatic Detergent Be Used to Stay Compliant?",
        content: "Enzymatic detergent must be used exactly per the manufacturer's IFU: correct dilution ratio, water temperature, soak time, and how frequently the solution is changed. Deviating from any parameter is non-compliant. All instrument reprocessing must also follow the device manufacturer's own IFU.",
        keyPoint: "Follow enzymatic IFU exactly: dilution, temperature, soak time, change frequency all matter.",
        category: "rule",
      },
      {
        title: "How Often Must Reusable Cleaning Brushes Be Reprocessed?",
        content: "Reusable cleaning brushes must be run through the washer/disinfector daily — not just when visibly soiled. Brushes that are frayed or damaged must be discarded immediately. Brushes used in decontamination are themselves contaminated and require daily reprocessing.",
        keyPoint: "Multi-use brushes: washer daily. Frayed = discard. Daily, not weekly.",
        category: "rule",
      },
      {
        title: "How Often Must Automated Washers and Ultrasonics Be Quality Tested?",
        content: "Automated washers, disinfectors, and ultrasonic cleaners must have daily quality testing documented. Ultrasonic cleaning fluid must be changed at manufacturer-specified intervals. Failure to document daily testing is a finding regardless of whether the equipment appeared to function correctly.",
        keyPoint: "Washers and ultrasonics: daily quality testing documented. Not just when issues occur.",
        category: "rule",
      },
      {
        title: "What Water Quality Is Required for the Final Instrument Rinse?",
        content: "Final rinse water for instrument decontamination must meet quality standards per AAMI TIR34 — either RO (reverse osmosis), DI (deionized), or distilled water. Regular tap water is not acceptable for the final rinse of surgical instruments.",
        keyPoint: "Final rinse = RO, DI, or distilled water only. Tap water is not acceptable.",
        category: "rule",
      },
      {
        title: "When Must the Bowie-Dick Test Be Run and Why?",
        content: "A Bowie-Dick test must be run daily on every dynamic air-removal (pre-vacuum) sterilizer, before the first patient load of the day. It tests air removal efficiency — not sterilization effectiveness. It must be run before any patient loads, not skipped as a 'warm-up' cycle.",
        keyPoint: "Bowie-Dick: daily, before first patient load, on all pre-vacuum sterilizers.",
        category: "rule",
      },
      {
        title: "Where Must Biological Indicators Be Placed in Every Sterilization Load?",
        content: "A biological indicator must be included in every sterilization load, placed at the most challenging location — typically the bottom front of the chamber, inside the heaviest or most complex set. BI results must be documented with the matching lot number and read within the manufacturer's timeframe.",
        keyPoint: "BIs in EVERY load. At most challenging location. Document with lot number.",
        category: "rule",
      },
      {
        title: "Why Must Instruments Be Fully Dry Before Packaging?",
        content: "Instruments must be thoroughly dried and visually inspected before packaging. Wet packaging creates conditions for microbial growth and compromises seal integrity. Early release from the sterilizer requires specific documentation and a minimum 30-minute cool-down time.",
        keyPoint: "Instruments dry before packaging. Early release = document + 30 min cool-down.",
        category: "rule",
      },
      {
        title: "What Are the Key Rules for Peel Pack Packaging?",
        content: "Peel packs must be positioned paper side up, with instruments in the open/unhinged position. Instruments must not be folded inside a peel pack. Double peel packing requires manufacturer validation. Rigid containerized instrument sets have a maximum weight of 25 pounds.",
        keyPoint: "Peel packs: paper up, instruments open and not folded. Rigid sets max 25 lbs.",
        category: "rule",
      },
      {
        title: "What Must Every Sterilizer Cycle Log Include?",
        content: "Every sterilizer cycle must be logged with: load number, date and time, cycle parameters (temperature, time, pressure), and contents. Missing even one cycle log — or an incomplete entry — is a finding. 'We always do it right' is not a substitute for documented evidence.",
        keyPoint: "Every cycle logged: number, date, parameters, contents. Incomplete logs = finding.",
        category: "mistake",
      },
    ],
    questions: [
      {
        id: "spd1",
        question: "A surveyor holds a tissue at the bottom of the decontamination room door. The tissue pushes outward (away from the room). What does this indicate?",
        options: [
          "Inconclusive — tissue tests must be performed at the top of the door frame where pressure differentials are more accurately measured",
          "Incorrect — the room has positive pressure, meaning contaminated air is escaping into clean areas",
          "Correct negative pressure — the outward movement confirms air is cycling properly through the HEPA filtration exhaust system",
          "Correct negative pressure — tissue movement in any direction confirms the ventilation system is functioning and maintaining air exchanges"
        ],
        correctIndex: 1,
        explanation: "In negative pressure, air flows INTO the room (tissue pulls inward). If the tissue pushes outward, the room has positive pressure — contaminated air is escaping, which is a serious finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd2",
        question: "A tech in the decontamination room is wearing scrubs, gown, gloves, and eye protection, but no mask. Is the PPE complete?",
        options: [
          "Full PPE requires scrubs, gown, gloves, mask, AND eye protection",
          "The tech is also missing shoe covers, which are required in all wet decontamination environments",
          "Masks are only required during manual scrubbing of lumened instruments where aerosol generation is highest",
          "A mask is optional in decontamination if eye protection is worn since goggles provide adequate splash and aerosol protection"
        ],
        correctIndex: 0,
        explanation: "Full PPE for the decontamination room includes ALL five elements: scrubs, fluid-resistant gown, gloves, mask, AND eye protection. Missing any single element is non-compliant.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd3",
        question: "Bowie-Dick test was run on the pre-vacuum sterilizer at 10 AM — after two loads had already been processed. Is this timing compliant?",
        options: [
          "As long as it's done daily, the timing doesn't matter since it validates the sterilizer's overall daily performance",
          "The Bowie-Dick test must be run twice daily, once before the first load and once at the midpoint of operations",
          "The Bowie-Dick test can be run at any point during the shift as long as all loads are held until results are reviewed",
          "The Bowie-Dick test must be run before the first load of the day"
        ],
        correctIndex: 3,
        explanation: "Bowie-Dick tests must be run daily BEFORE the first load on dynamic air-removal (pre-vacuum) sterilizers. Running it after loads have already processed defeats its purpose of verifying proper air removal.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd4",
        question: "A surveyor asks how often biological indicators (BIs) should be included in sterilization loads. What is the correct answer?",
        options: [
          "In the first load of each day and in any load containing implants",
          "Only in loads containing implants or critical devices",
          "In every sterilization load",
          "Daily, placed in a designated test pack run separately from patient loads"
        ],
        correctIndex: 2,
        explanation: "Biological indicators must be included in EVERY sterilization load, placed at the most challenging location. This is not limited to implant loads or specific time intervals.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd5",
        question: "Enzymatic detergent is diluted and used per the manufacturer's IFU. The solution has been in use for 3 hours. The IFU specifies a 4-hour change interval. Is the solution still compliant?",
        options: [
          "The solution is within the manufacturer's specified change interval",
          "Enzymatic solutions must be changed every 2 hours regardless of IFU to maintain cleaning efficacy",
          "Enzymatic solutions remain effective for up to 8 hours as long as the water temperature is maintained",
          "After processing more than 5 instrument sets, the solution must be changed regardless of time elapsed"
        ],
        correctIndex: 0,
        explanation: "Enzymatic detergent must be used per the manufacturer's IFU. At 3 hours into a 4-hour specified interval, the solution is still within compliant parameters.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd6",
        question: "A cleaning brush has slightly splayed bristles but is not visibly frayed. Should it continue to be used?",
        options: [
          "Per AAMI ST79 Section 7 guidelines, all cleaning brushes must be replaced after each individual use to prevent cross-contamination between instrument sets",
          "Brushes only need replacement when bristles are visibly missing or the wire core is exposed, as specified in the brush manufacturer's IFU replacement criteria",
          "Splayed bristles still clean effectively and actually provide broader surface contact for improved bioburden removal from instrument channels and crevices",
          "Splayed bristles indicate wear and the brush should be inspected more carefully for fraying and replaced if compromised"
        ],
        correctIndex: 3,
        explanation: "Cleaning brushes must be inspected regularly. Splayed bristles are an early sign of wear that progresses to fraying. The brush needs closer inspection and likely replacement.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd7",
        question: "The final rinse water in the instrument washer uses tap water filtered through a standard carbon filter. Is this acceptable?",
        options: [
          "Final rinse must use treated water: RO, DI, or distilled per AAMI TIR34",
          "Final rinse water must be sterile water, not just treated or filtered water",
          "Filtered tap water meets the minimum standard as long as total dissolved solids are within municipal limits",
          "Carbon filtration removes chlorine and impurities, making tap water suitable for final rinse applications"
        ],
        correctIndex: 0,
        explanation: "Final rinse water must meet AAMI TIR34 quality standards — reverse osmosis (RO), deionized (DI), or distilled water. Carbon-filtered tap water does not meet these specifications.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd8",
        question: "A rigid containerized instrument set weighs 28 lbs. A tech says it has always been processed at this weight. Is this acceptable?",
        options: [
          "Rigid containers can handle up to 30 lbs as long as the container filter and gasket are rated for the weight",
          "If the sterilizer validation was performed with sets at this weight, it qualifies as established practice",
          "Rigid containerized sets must not exceed 25 lbs regardless of past practice",
          "Rigid containerized sets must not exceed 20 lbs to ensure ergonomic safety and adequate sterilant penetration"
        ],
        correctIndex: 2,
        explanation: "Rigid containerized instrument sets have a maximum weight of 25 lbs. At 28 lbs, sterilant penetration may be compromised and safe handling is at risk. Past practice doesn't override the standard.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd9",
        question: "An instrument is released from the sterilizer for immediate use (early release). The tech allows a 20-minute cool-down period and documents the early release. Is this procedure compliant?",
        options: [
          "Early release cool-down time is determined by the instrument manufacturer's IFU, not a fixed standard",
          "20 minutes is sufficient if properly documented and the biological indicator shows a preliminary negative result",
          "Early release requires a minimum 45-minute cool-down time and supervisor sign-off before instruments can be used",
          "Early release requires a minimum 30-minute cool-down time"
        ],
        correctIndex: 3,
        explanation: "Early release from the sterilizer requires documentation AND a minimum 30-minute cool-down time. Twenty minutes is insufficient, regardless of documentation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd10",
        question: "Multi-use cleaning brushes were last processed through the washer 2 days ago due to a staffing shortage. Is this acceptable?",
        options: [
          "Multi-use cleaning brushes must be run through the washer daily",
          "Multi-use brushes only require weekly processing if they are rinsed and air-dried between uses",
          "Multi-use brushes must be processed after every individual use, not on a daily schedule",
          "Processing every other day is reasonable during staffing challenges as long as brushes are rinsed after each use"
        ],
        correctIndex: 0,
        explanation: "Multi-use cleaning brushes must be processed through the automated washer daily. Staffing challenges do not excuse skipping daily brush decontamination.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd11",
        question: "Instruments are still slightly damp when a tech begins packaging them for sterilization. Is this acceptable if the packaging material can absorb the moisture?",
        options: [
          "Instruments must be thoroughly dried before packaging regardless of packaging material",
          "Slight dampness actually aids sterilant penetration during the steam sterilization cycle",
          "Damp instruments must be returned to the ultrasonic cleaner for an additional rinse and dry cycle",
          "Some residual moisture is normal and modern packaging materials are designed to absorb and wick away small amounts"
        ],
        correctIndex: 0,
        explanation: "Instruments must be thoroughly dried AND visually inspected before packaging. Residual moisture creates wet packs after sterilization, which compromises sterility.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd12",
        question: "A double peel pack contains an inner peel pack that is not folded and the process has been validated by the packaging manufacturer. Is this compliant?",
        options: [
          "Unfolded inner pack with manufacturer validation meets the requirement",
          "Double peel packing is never permitted because it impedes sterilant penetration to the instrument surface",
          "Double peel packing is always acceptable as long as the outer seal is intact, regardless of inner pack orientation",
          "Double peel packing is only permitted for implantable devices, not general instrumentation"
        ],
        correctIndex: 0,
        explanation: "Double peel packing IS allowed when: (1) the inner pack is NOT folded, and (2) the double-packing process has been validated by the manufacturer. Both conditions are met here.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd13",
        question: "Automated washer quality testing was last documented 3 days ago. Daily logs show a gap. Is this a concern?",
        options: [
          "Automated washers and disinfectors require daily quality testing documentation",
          "Testing every few days is sufficient for automated equipment that has passed its annual validation",
          "Automated washers require quality testing before and after every load, making a 3-day gap a critical violation",
          "Automated washers are self-monitoring and only require manual quality testing when error codes appear"
        ],
        correctIndex: 0,
        explanation: "Automated washers/disinfectors must have daily quality testing documented. A 3-day gap means any loads processed during that time cannot be verified as properly decontaminated.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd14",
        question: "A surveyor asks where biological indicators should be placed within a sterilization load. What is the correct placement?",
        options: [
          "At the most challenging location within the load",
          "At the top of the load for easy retrieval and timely incubation",
          "Inside the largest and densest package in the load",
          "In the geometric center of the load where sterilant concentration is most uniform"
        ],
        correctIndex: 0,
        explanation: "BIs must be placed at the most challenging location within the load — the area hardest for sterilant to penetrate. This validates that even the most difficult areas achieved sterilization.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd15",
        question: "A surveyor reviews sterilizer logs and finds: Bowie-Dick test passed at 6:00 AM, first patient load started at 6:15 AM, BI placed in every load, all cycle parameters documented. However, the BI read time for the 6:15 AM load was documented 5 hours after incubation started, though the manufacturer specifies a 3-hour read time. Is this compliant?",
        options: [
          "BI results must be read within 1 hour of the manufacturer's specified timeframe; a 2-hour overage requires the entire load to be recalled",
          "BI results must be read within the manufacturer's specified timeframe; a 5-hour read on a 3-hour BI compromises the validity of the result",
          "Exceeding the read time provides a more thorough incubation period, increasing confidence in the negative result",
          "The BI was eventually read and documented, and delayed readings are acceptable as long as the result is negative"
        ],
        correctIndex: 1,
        explanation: "Biological indicator results must be read within the manufacturer's specified timeframe. Reading a 3-hour BI at 5 hours means the result may not be accurate — false negatives are possible. This compromises the validation of the entire load.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "spd16",
        question: "A tech in SPD uses enzymatic detergent at 2x the manufacturer's recommended concentration because 'stronger is better for cleaning.' The water temperature and soak time follow the IFU. Is this acceptable?",
        options: [
          "Enzymatic detergent must be used at the exact concentration specified in the IFU; over-concentration can damage instruments and leave residue",
          "Higher concentration ensures better cleaning and faster bioburden breakdown during the soak cycle, per the principle that more enzyme equals more active cleaning",
          "Enzymatic detergent concentration must be verified with test strips before each use, and 2x would exceed the acceptable range on the verification strip",
          "Doubling the concentration is an acceptable practice when processing heavily soiled instruments from complex surgical cases to ensure complete bioburden removal"
        ],
        correctIndex: 0,
        explanation: "Enzymatic detergent IFU must be followed exactly — including concentration. Over-concentration does not improve cleaning; it can damage instrument surfaces, leave chemical residue, and invalidate the validated cleaning process.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd17",
        question: "A surveyor observes a tech assembling instrument trays at a workstation. The workstation has a standard desk lamp and a regular magnifying glass. No other inspection aids are present. What is missing?",
        options: [
          "Lighted magnification — assembly and inspection stations must have integrated lighted magnification, not separate lamp and magnifier",
          "Nothing — a desk lamp and magnifying glass together provide adequate illumination and magnification per the minimum requirements for visual inspection",
          "Nothing is missing — lighted magnification is only required for microsurgical instrument inspection, not for general assembly workstations per AAMI guidelines",
          "A UV inspection light — ultraviolet illumination is required per AAMI TIR30 to detect residual bioburden invisible under standard lighting conditions"
        ],
        correctIndex: 0,
        explanation: "Assembly and inspection stations require lighted magnification — meaning illuminated magnification equipment, not a separate desk lamp and handheld magnifier. Lighted magnification provides consistent, hands-free illuminated inspection capability.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd18",
        question: "A rigid containerized instrument set weighs 24 lbs. A new instrument is added to the set, bringing the total to 26 lbs. The set has been processed at this weight before without issues. Should it be processed?",
        options: [
          "26 lbs is close to the limit and prior successful processing validates the configuration for continued use in clinical practice",
          "The set exceeds the 25 lb maximum for rigid containers; the additional instrument must be removed or the set must be split",
          "The 25 lb weight limit applies to the instruments only, not the total combined weight including the rigid container and internal organizing tray",
          "Any modification to a validated set requires a 3-load qualification test before the new configuration can be used on patients"
        ],
        correctIndex: 1,
        explanation: "Rigid containerized sets must not exceed 25 lbs. At 26 lbs, sterilant penetration may be compromised and safe handling is at risk. Past success doesn't validate exceeding the weight limit — the instrument must be removed or the set split.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd19",
        question: "During a power outage, the decontamination room's ventilation system shuts down temporarily. The room is currently processing instruments. What is the immediate concern?",
        options: [
          "The automated washers will not function without power, requiring all instruments to be manually cleaned until power is restored",
          "Chemical fumes from enzymatic detergents will accumulate in the room, creating an occupational health hazard for staff",
          "Without negative pressure, contaminated air may escape into adjacent clean areas, creating a cross-contamination hazard",
          "The instruments may not be cleaned properly without ventilation since airflow assists in drying and temperature regulation of cleaning solutions"
        ],
        correctIndex: 2,
        explanation: "The decontamination room must maintain negative pressure to prevent contaminated air from escaping. Without ventilation, the room loses negative pressure, allowing potentially contaminated air to flow into clean areas. Processing should stop until ventilation is restored.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "spd20",
        question: "A surveyor reviews SPD quality documentation and finds: daily Bowie-Dick tests, BIs in every load, daily washer testing, and ultrasonic cleaner fluid changed per IFU. However, the water treatment system's preventive maintenance was last performed 14 months ago (policy requires annual PM). What is the finding?",
        options: [
          "The ultrasonic cleaner fluid change frequency should be verified independently — the water treatment PM is a minor documentation gap",
          "The water treatment system PM is overdue — this means the quality of the final rinse water cannot be verified as meeting AAMI TIR34 standards",
          "All sterilization-related testing is current and water treatment PM is a facilities responsibility, not an SPD finding",
          "Water treatment systems only require PM every 18 months per AAMI guidelines, so 14 months is within the acceptable window"
        ],
        correctIndex: 1,
        explanation: "Water treatment systems require current preventive maintenance and quality control. At 14 months without PM (annual policy), the system's output cannot be verified as meeting AAMI TIR34 standards for final rinse water quality. This affects every instrument processed since the PM lapsed.",
        xpReward: 20,
        isSwipe: false,
      },
    ],
  },
  {
    id: "or_sterile_field",
    name: "OR & Sterile Technique",
    description: "Master sterile field integrity, surgical attire, skin prep, and OR environment requirements.",
    icon: "HeartPulse",
    color: "hsl(0, 75%, 55%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "OR & Sterile Technique",
      plainLanguageSummary: "The sterile field must be maintained from creation through case completion. Surveyors observe attire compliance, sterile field behavior, and skin prep technique. Any break in sterile technique — even if caught — must be corrected before the case proceeds.",
      keyOperationalExpectations: [
        "Surgical attire (mask, hair covering, shoe covers) must be worn correctly in all restricted OR zones — masks fully covering mouth and nose, hair completely covered.",
        "The sterile field must never be left unattended; if a sterile field must be left, it must be covered.",
        "Personnel must not walk between two sterile fields or reach across a sterile field.",
        "Skin prep must dry fully before draping — pooling of prep solution under drapes is a fire and chemical burn risk.",
        "Non-sterile personnel must maintain the correct distance and never reach over the sterile field.",
      ],
      commonRiskPoints: [
        "Surgical masks worn below the nose — one of the most frequently cited OR attire violations.",
        "Sterile field left uncovered and unattended during a brief pause or room changeover.",
        "Personnel walking between two sterile fields, passing through the sterile zone.",
        "Skin prep solution pooling under the patient before draping — a fire risk with electrocautery.",
        "Non-sterile circulator reaching over or into the sterile field to hand items directly to the scrub tech.",
      ],
      cmsTags: ["IC.02.02.01", "RC.02.01.01", "NPSG.07.05.01"],
    },
    studyMaterial: [
      {
        title: "What Rules Govern Sterile Field Integrity?",
        content: "The sterile field must be maintained throughout the entire procedure. Only sterile items may be placed on or contact the sterile field. Sterile team members must face the field at all times. Any break in sterile technique — regardless of how minor — requires immediate correction.",
        keyPoint: "Only sterile items on the field. Sterile team always faces the field.",
        category: "rule",
      },
      {
        title: "What Hair Must Be Covered in Semi-Restricted and Restricted OR Areas?",
        content: "In semi-restricted and restricted areas, ALL head and facial hair must be covered — including sideburns and neckline hair. Surgical caps or hoods must fully cover all hair. A cap that leaves sideburns or neckline hair exposed is non-compliant.",
        keyPoint: "ALL hair covered — sideburns and neckline included. No visible hair in restricted areas.",
        category: "rule",
      },
      {
        title: "How Must a Surgical Mask Be Worn in the OR?",
        content: "Surgical masks must fully cover both the mouth AND nose in restricted areas where open sterile supplies are present. A mask worn below the nose is a compliance finding. Masks must be properly tied — not just looped — to maintain a seal.",
        keyPoint: "Mask over mouth AND nose. Below the nose = finding. Tied, not just looped.",
        category: "rule",
      },
      {
        title: "Is Jewelry Permitted in Surgical and Procedure Areas?",
        content: "Jewelry is not permitted in surgical and procedure areas. This includes rings, bracelets, earrings, and facial piercings. Earrings must be covered or removed. Jewelry harbors microorganisms and creates sterile field contamination risk.",
        keyPoint: "No jewelry in the OR. Earrings must be covered or removed.",
        category: "rule",
      },
      {
        title: "What Are the Requirements for the Surgical Scrub and Gowning Process?",
        content: "Surgical hand scrub must use an approved antimicrobial agent or FDA-approved alcohol-based hand rub. After scrubbing, hands and arms must be dried with a sterile towel. Gowning and gloving must occur inside the operating room. OR traffic must be minimized.",
        keyPoint: "Antimicrobial scrub or approved alcohol rub. Sterile towel to dry. Gown/glove in OR.",
        category: "rule",
      },
      {
        title: "Why Must Skin Prep Be Fully Dry Before Draping?",
        content: "Surgical skin prep must be completely dry before draping. Alcohol-based preps are flammable — wet prep trapped under drapes can ignite with electrosurgical equipment. 'Dry enough' is not sufficient: the prep must be visibly and fully dry.",
        keyPoint: "Skin prep FULLY dry before draping. Wet prep + electrosurgery = fire risk.",
        category: "rule",
      },
      {
        title: "What Must Be on Every Medication Label on the Sterile Field?",
        content: "ALL medications on the sterile field must be labeled with at minimum the drug name and strength or concentration. This applies even if only one medication is present. Unlabeled syringes or cups on the sterile field are a patient safety violation and a compliance finding.",
        keyPoint: "ALL sterile field medications labeled: name + strength. Even a single med, no exceptions.",
        category: "rule",
      },
      {
        title: "Why Must OR Door Traffic Be Minimized?",
        content: "OR traffic must be minimized — only essential personnel should be present during a procedure. Each time the OR door opens, air turbulence can introduce particulates and microorganisms. Unnecessary door openings are specifically observed during surgical tracers.",
        keyPoint: "Minimize OR door openings. Each opening introduces contamination risk.",
        category: "rule",
      },
      {
        title: "When Must Anesthesia Equipment Surfaces Be Cleaned?",
        content: "Anesthesia equipment surfaces — machine, medication trays, and workstation — must be cleaned and disinfected between every patient. Aerosol-generating procedures require full PPE: gown, eye protection, gloves, and mask.",
        keyPoint: "Anesthesia surfaces cleaned between every patient. Full PPE for aerosol procedures.",
        category: "rule",
      },
      {
        title: "What Must a Non-Sterile Circulator Never Do at the Sterile Field?",
        content: "A non-sterile circulator must never reach over or across the sterile field to hand items directly to the scrub tech. Non-sterile persons must maintain safe distance and pass items to the field by other means — dropped from above or opened from packaging.",
        keyPoint: "Non-sterile circulator must NEVER reach over the sterile field.",
        category: "mistake",
      },
    ],
    questions: [
      {
        id: "or1",
        question: "A circulating nurse needs to hand a supply to the scrub tech. She walks around the sterile field and presents the item without reaching over it. Is this technique correct?",
        options: [
          "Only scrubbed team members can handle items near the sterile field under any circumstances",
          "But only if the circulator is wearing sterile gloves when presenting the item to the scrub tech",
          "The circulator must place items on a designated transfer table rather than presenting them directly",
          "Walking around and not reaching over the field is proper technique"
        ],
        correctIndex: 3,
        explanation: "This IS correct. Unsterile persons may present items to the sterile team as long as they maintain safe distance and never reach over the sterile field.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or2",
        question: "A scrub nurse has a properly fitted mask that covers the mouth and nose, a bouffant cap covering all hair, earrings removed, and no jewelry. She enters the restricted OR. Is her attire compliant?",
        options: [
          "But only if she has also completed the surgical hand scrub before entering the restricted area",
          "All surgical attire requirements are met",
          "Shoe covers are also required in restricted OR areas and were not mentioned",
          "Bouffant caps do not adequately cover sideburns and neckline hair; a surgical hood is always required in restricted areas"
        ],
        correctIndex: 1,
        explanation: "With mask covering mouth AND nose, cap covering all hair, earrings removed, and no jewelry, all attire requirements are met. (Note: if sideburns/neckline hair were visible, a hood would be needed instead.)",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or3",
        question: "A surgeon enters the semi-restricted area wearing a surgical cap but with sideburns visible below the cap. He states he'll put on his mask before entering the OR. Is his current attire compliant for the semi-restricted area?",
        options: [
          "Sideburns are considered facial hair and only need to be covered when scrubbing in for a procedure",
          "Caps or hoods must cover ALL head and facial hair including sideburns, even in semi-restricted areas",
          "Sideburns must be shaved or trimmed to fit under standard surgical caps before entering any perioperative area",
          "Masks are only required in restricted areas with open sterile supplies, and hair coverage requirements are less strict in semi-restricted zones"
        ],
        correctIndex: 1,
        explanation: "Surgical caps or hoods must cover ALL head and facial hair, including sideburns and neckline, in both semi-restricted AND restricted areas. Visible sideburns require a hood or larger cap.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or4",
        question: "During a procedure, the skin prep was applied and appears wet and shiny. The surgeon asks to begin draping. Should draping proceed?",
        options: [
          "The prep must dry and then a second application must be applied before draping to ensure adequate antimicrobial coverage",
          "The skin prep must be fully dry before draping to prevent fire risk with electrosurgery",
          "As long as the prep was applied with the correct technique and dwell time has started, draping over wet prep is acceptable",
          "The prep is applied and the antiseptic begins working on contact, so draping can proceed immediately"
        ],
        correctIndex: 1,
        explanation: "Alcohol-based skin preps are flammable. Draping over wet prep can create pooled alcohol under drapes, which is a serious fire risk when electrosurgery is used.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or5",
        question: "A surveyor sees two labeled syringes on the sterile field: one marked 'Lidocaine 1%' and one marked 'Marcaine 0.25%.' Both labels show drug name and concentration. Is the labeling compliant?",
        options: [
          "Labels must also include the patient's name and the time drawn up to meet labeling standards",
          "Labels must include the drug name, concentration, date, time prepared, and the preparer's initials",
          "Both syringes are labeled with the required minimum: drug name and strength/concentration",
          "But the labels should also include an expiration time since medications on the sterile field expire after 1 hour"
        ],
        correctIndex: 2,
        explanation: "The minimum labeling requirement for medications on the sterile field is drug name and strength/concentration. Both syringes meet this requirement.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or6",
        question: "Anesthesia equipment was cleaned between patients using approved disinfectant wipes. The tech wiped all surfaces of the anesthesia machine, monitors, and cart. Is this adequate between-patient care?",
        options: [
          "But the tech should also replace all disposable circuits and tubing even if they appear clean",
          "Anesthesia equipment requires full terminal cleaning with liquid disinfectant, not just surface wipes",
          "Anesthesia equipment only needs terminal cleaning at the end of the day, not between cases",
          "All anesthesia equipment surfaces must be cleaned and disinfected between every patient"
        ],
        correctIndex: 3,
        explanation: "Anesthesia equipment surfaces must be cleaned and disinfected between EVERY patient, not just at the end of the day. This prevents cross-contamination between surgical patients.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or7",
        question: "A sterile team member briefly turns their back to the sterile field to ask the circulator a question. Is this a break in technique?",
        options: [
          "Sterile team members must face the sterile field at all times",
          "A brief turn is acceptable for necessary communication as long as the team member does not leave the immediate area",
          "But only if the team member's hands drop below waist level during the turn",
          "The back of the sterile gown is considered sterile down to the waist, so brief turns do not compromise the field"
        ],
        correctIndex: 0,
        explanation: "Sterile team members must face the sterile field at ALL times. Turning away — even briefly — increases the risk of contamination from the non-sterile back of the gown.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or8",
        question: "After a surgical hand scrub, a surgeon dries his hands and arms with a clean cloth towel from the linen cart. Is this correct?",
        options: [
          "Any clean towel is acceptable after the surgical scrub since the antimicrobial agent has already been applied",
          "Clean cloth towels are preferred over paper towels because they are more absorbent and reduce lint",
          "Hands and arms must be dried with a sterile towel after the surgical scrub",
          "Hands and arms must be air-dried to maintain the antimicrobial residue from the surgical scrub agent"
        ],
        correctIndex: 2,
        explanation: "After the surgical scrub, hands and arms must be dried with a STERILE towel — not a clean cloth towel. This maintains the aseptic chain before gowning and gloving.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or9",
        question: "A surveyor counts 8 people in an OR during a routine knee arthroscopy — surgeon, assistant, scrub tech, circulator, anesthesiologist, and 3 observers. Is the traffic level a concern?",
        options: [
          "Observers are never permitted in the OR during active procedures due to infection control regulations",
          "Up to 10 personnel are permitted in a standard OR as long as everyone follows proper attire requirements",
          "All personnel have a reason to be present and are properly attired for the restricted area",
          "OR traffic must be minimized to only essential personnel; 3 observers may be excessive"
        ],
        correctIndex: 3,
        explanation: "OR traffic must be minimized with only essential personnel present. Three observers during a routine procedure creates unnecessary traffic and increased airborne contamination risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or10",
        question: "A medication basin on the back table contains clear fluid but has no label. The scrub tech says everyone knows it's saline. Is this compliant?",
        options: [
          "Verbal identification by the scrub tech is an acceptable alternative to labeling for commonly used solutions",
          "Only the circulator can verify and label solutions on the sterile field; the scrub tech cannot self-identify contents",
          "ALL medications and solutions on the sterile field must be labeled with drug name and strength",
          "Saline is a standard solution that doesn't require labeling when it is the only clear fluid on the field"
        ],
        correctIndex: 2,
        explanation: "ALL medications and solutions on the sterile field must be labeled, including saline. Verbal identification is never acceptable — it creates medication error risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or11",
        question: "An aerosol-generating procedure is planned. Staff have gowns, gloves, and masks, but no eye protection. Is the PPE adequate?",
        options: [
          "Aerosol-generating procedures also require a powered air-purifying respirator instead of a standard mask",
          "Aerosol-generating procedures require gown, eye protection, gloves, AND mask",
          "Masks provide sufficient respiratory and splash protection for aerosol-generating procedures",
          "Eye protection is only required when there is a risk of blood or body fluid splash, not for aerosols"
        ],
        correctIndex: 1,
        explanation: "Aerosol-generating procedures require full PPE: gown, eye protection, gloves, AND mask. All four elements are required — eye protection cannot be omitted.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or12",
        question: "Medications prepared off the sterile field (on the anesthesia cart) are in labeled syringes. A surveyor asks if off-field medications also require labeling. What is the correct answer?",
        options: [
          "Off-field medications only require labels if more than one medication is drawn up at the same time",
          "Both on-field and off-field medications must be labeled",
          "Only medications on the sterile field require labels — off-field medications are under direct control of the provider",
          "Off-field medications are exempt from labeling if they remain in the original manufacturer packaging"
        ],
        correctIndex: 1,
        explanation: "Medications both ON and OFF the sterile field must be labeled. This applies to all syringes, cups, basins, and containers used during procedures.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or13",
        question: "A nurse wearing stud earrings covered by a surgical cap enters the restricted OR. Is this compliant?",
        options: [
          "Earrings that are covered by the surgical cap are acceptable",
          "But only stud earrings smaller than 5mm are permitted under surgical caps in restricted areas",
          "All jewelry must be removed in restricted areas regardless of coverage since metal can harbor bacteria",
          "Only clip-on earrings are permitted in restricted areas; pierced earrings must always be removed"
        ],
        correctIndex: 0,
        explanation: "Earrings must be covered or removed in surgical/procedure areas. Stud earrings fully covered by the surgical cap meet the 'covered' requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or14",
        question: "A surgeon's bouffant cap covers the top of his head but sideburns and neckline hair are visible. He is in the restricted OR where open sterile supplies are present. Is his surgical attire compliant?",
        options: [
          "The surgeon must wear both a bouffant cap and a separate beard cover to address the sideburn exposure",
          "Sideburns and neckline hair are only required to be covered during procedures involving implants or joint replacements",
          "Surgical caps or hoods must cover ALL head and facial hair including sideburns and neckline in restricted areas",
          "The bouffant cap covers the required scalp area and sideburns are considered minimal exposure"
        ],
        correctIndex: 2,
        explanation: "Caps or hoods must cover ALL head and facial hair — including sideburns and neckline. A bouffant cap that doesn't cover these areas is insufficient. A hood or larger cap is needed.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or15",
        question: "During a hip replacement, the circulator drops an item and needs to pick it up from the floor near the sterile field. She picks it up while keeping her body below the level of the sterile back table. Is this acceptable?",
        options: [
          "Unsterile personnel should never reach or bend near the sterile field; another team member away from the field should retrieve the item",
          "The item must be left on the floor until the procedure is complete to avoid any disruption to the sterile environment and noted for post-case cleanup",
          "As long as the circulator does not touch any sterile surfaces while bending down, this is an acceptable technique per AORN recommended practices for the circulating role",
          "Staying below the sterile field level prevents contamination since per AORN guidelines sterile zones begin at table height and contamination risk only exists above that plane"
        ],
        correctIndex: 0,
        explanation: "Unsterile personnel must maintain safe distance from the sterile field and never reach near it, even at a lower level. Movement near the field creates air currents and contamination risk. Items near the field should be retrieved by personnel positioned away from it.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "or16",
        question: "Skin prep is applied generously to the surgical site and allowed to dry. Excess pooled prep solution is visible under the drape at the patient's side. What is the specific risk?",
        options: [
          "Chemical burn risk — prolonged alcohol-based prep contact with skin under occlusive draping causes tissue damage",
          "Fire hazard — pooled alcohol-based prep under drapes near electrocautery creates a surgical fire risk",
          "Excess prep solution wicking through the drapes creates a wet strike-through that contaminates the sterile field",
          "The pooled prep will compromise the sterile drape adhesion and create a break in the sterile barrier"
        ],
        correctIndex: 1,
        explanation: "Pooled alcohol-based skin prep under drapes is a serious fire hazard, especially when electrocautery is used. The prep must be allowed to fully dry and any pooling must be addressed before draping to prevent surgical fires.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "or17",
        question: "An OR has a back table with labeled syringes of Lidocaine 1% and normal saline. An unlabeled medicine cup contains clear fluid. The scrub tech says 'it's just irrigation saline — everyone knows that.' A surveyor observes this. What is the finding?",
        options: [
          "Per TJC standard MM.05.01.07, irrigation saline is exempt from sterile field labeling requirements because it is classified as a supply item rather than a medication",
          "The unlabeled cup is a medication safety violation — ALL solutions on the sterile field must be labeled with name and concentration, regardless of how 'obvious' the contents are",
          "Minor documentation gap — the scrub tech should verbally announce the contents at the start of each case, but a physical label is not required for irrigation fluids",
          "Since the other syringes on the sterile field are properly labeled with drug name and concentration, the remaining unlabeled cup can be safely identified by process of elimination"
        ],
        correctIndex: 1,
        explanation: "ALL medications and solutions on the sterile field must be labeled with drug name and concentration — no exceptions. Verbal identification or assumed knowledge is never acceptable. An unlabeled container of clear fluid is a medication error waiting to happen.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or18",
        question: "A surgical case is delayed 3 hours after the sterile field was set up. No contamination events have occurred, the room has been secured, and a staff member has been present at all times. Should the field be considered sterile?",
        options: [
          "It depends on facility policy — there is no absolute time limit on a sterile field if it has been continuously monitored with no compromise events",
          "AAMI standards require a sterile field to be broken down and re-established if the case is delayed beyond 1 hour",
          "Sterile fields must be used within 2 hours of setup per AORN recommended practices",
          "As long as the room's positive-pressure ventilation is functioning, the sterile field is maintained indefinitely without monitoring"
        ],
        correctIndex: 0,
        explanation: "There is no absolute time limit specified for a sterile field. The key factors are continuous monitoring, no contamination events, and room security. Facility policy should address prolonged open sterile fields, but if properly monitored with no compromise, the field can remain sterile.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "or19",
        question: "A surgeon's mask is pulled down below the nose while talking to the patient in the OR before the case begins. Open sterile supplies are on the back table. Is this acceptable?",
        options: [
          "Masks must fully cover both mouth AND nose whenever open sterile supplies are present in the restricted area",
          "Masks must be removed entirely during patient communication and replaced with a fresh mask before the case begins",
          "The case hasn't started yet, so full mask coverage isn't required until the incision is made",
          "Mask coverage below the nose is acceptable during patient communication to improve verbal clarity"
        ],
        correctIndex: 0,
        explanation: "In restricted areas where open sterile supplies are present, masks must fully cover both mouth and nose — regardless of whether the procedure has started. The standard is based on the presence of open sterile supplies, not the procedure timeline.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or20",
        question: "During a knee arthroscopy, the OR door opens and closes 12 times in 30 minutes for various personnel entering and leaving. All personnel are properly attired. What is the concern?",
        options: [
          "Excessive door opening increases air changes and disrupts the positive-pressure laminar airflow pattern, raising airborne contamination risk near the surgical site",
          "Door traffic is only a finding if personnel are improperly attired or enter without authorization",
          "The concern is noise disruption — frequent door openings distract the surgical team and increase the risk of procedural errors",
          "All personnel are properly attired and the OR ventilation system compensates for door openings automatically"
        ],
        correctIndex: 0,
        explanation: "Each door opening disrupts the OR's positive-pressure environment and laminar airflow designed to direct contaminants away from the surgical site. Excessive traffic, even by properly attired personnel, increases airborne particle counts and infection risk. OR traffic must be minimized.",
        xpReward: 20,
        isSwipe: false,
      },
    ],
  },
  {
    id: "universal_protocol",
    name: "Surgical Safety & Consent",
    description: "Master the Universal Protocol, Time-Out procedure, surgical site marking, and informed consent.",
    icon: "ClipboardCheck",
    color: "hsl(160, 70%, 40%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "Surgical Safety & Consent",
      plainLanguageSummary: "The Universal Protocol (pre-procedure verification, site marking, and time-out) is one of the Joint Commission's National Patient Safety Goals. Surveyors trace time-out documentation in charts, observe actual time-outs, and verify site marking policies. Any step skipped or done after the wrong point is a citation.",
      keyOperationalExpectations: [
        "Pre-procedure verification must confirm correct patient, procedure, and site before the patient enters the OR.",
        "Surgical site must be marked by the operating surgeon with the patient awake and involved — not by nursing alone.",
        "Time-Out must be performed immediately before incision, with all team members participating and stopping other tasks.",
        "Time-Out must be documented in the medical record, including who participated and what was verified.",
        "Consent must be obtained before any sedating medication is administered.",
      ],
      commonRiskPoints: [
        "Time-Out performed while the team continues prepping the patient rather than pausing all activity.",
        "Time-Out not documented in the chart — verbal time-out done but no written record created.",
        "Site marking delegated to nursing or a resident without the attending surgeon's direct involvement.",
        "Consent signed after pre-op benzodiazepine was administered, making the consent presumptively defective.",
        "Time-Out done after incision has started ('we do it while we're starting') — the universal protocol requires immediately before incision.",
      ],
      cmsTags: ["NPSG.01.01.01", "UP.01.01.01", "UP.01.02.01", "UP.01.03.01"],
    },
    studyMaterial: [
      {
        title: "When Exactly Must the Time-Out Occur?",
        content: "The Time-Out must occur immediately before the first incision. All activity in the room stops completely. Every team member must actively participate — not just passively acknowledge. A Time-Out done during or after the incision has begun is non-compliant.",
        keyPoint: "Time-Out immediately before incision. ALL activity stops. Active participation required.",
        category: "rule",
      },
      {
        title: "What Elements Must Be Verbally Confirmed During the Time-Out?",
        content: "Time-Out elements that must be verbally confirmed: patient identity, correct site marked and visible, procedure and consent verified and read aloud, provider who marked the site is present, antibiotics discussed, implants confirmed, equipment concerns addressed, X-ray images confirmed, fire risk score shared.",
        keyPoint: "9 elements. Site marked AND visible. Consent read aloud. Everyone participates.",
        category: "number",
      },
      {
        title: "Who Must Mark the Surgical Site and When?",
        content: "The surgical site must be marked with the patient awake and actively participating. The provider who will perform the procedure marks the site. The mark must be consistent, at or near the incision line, and visible after prep and draping.",
        keyPoint: "Patient participates in marking. The performing provider marks their own site. Visible after draping.",
        category: "rule",
      },
      {
        title: "What Are Acceptable Unique Patient Identifiers?",
        content: "Every patient must be identified using two unique identifiers every time care is provided. Acceptable: name + date of birth, or name + MRN. Not acceptable: room number, bed number, or location. This applies before every procedure, medication, and intervention.",
        keyPoint: "Two identifiers: name + DOB, or name + MRN. Room number is never an identifier.",
        category: "rule",
      },
      {
        title: "What Must Be Included in a Compliant Consent Form?",
        content: "The consent form must include: date, time, patient or surrogate signature, witness signature, the full procedure name with no abbreviations, and notation of sedation if required. The form must be legible. Abbreviated procedure names on a consent form are non-compliant.",
        keyPoint: "Consent: date, time, signatures, FULL procedure name — no abbreviations ever.",
        category: "number",
      },
      {
        title: "What Are the Timing Requirements for a History and Physical?",
        content: "A History & Physical must be completed within 30 days prior to surgery. If completed more than 24 hours before registration, an updated assessment must be performed within 24 hours of registration or before the procedure. Pre-anesthesia assessment must occur before anesthesia is administered.",
        keyPoint: "H&P within 30 days. Update within 24 hours if H&P is more than 24 hrs old.",
        category: "number",
      },
      {
        title: "What Four Elements Must Every H&P Include?",
        content: "A compliant H&P must include all four: chief complaint or reason for admission, health history, physical examination findings, and provisional diagnosis. All four must be documented. A discharge summary or nurse's note does not substitute.",
        keyPoint: "H&P needs all 4: chief complaint, health history, physical exam, provisional diagnosis.",
        category: "number",
      },
      {
        title: "What Must Be Done Regarding Advance Directives for Every Patient?",
        content: "Advance directives must be addressed for all patients. If a patient does not have one, staff must offer assistance in completing an advance directive. The presence or absence of an advance directive must be documented in the medical record.",
        keyPoint: "Ask about advance directives. If none: offer help completing one. Document either way.",
        category: "rule",
      },
      {
        title: "When Is Opioid Screening Required Before a Procedure?",
        content: "For Total Hip (THA) and Total Knee (TKA) patients, opioid screening must be documented before the procedure. If pain screening is positive at admission, pain management goals must be explicitly documented — pain level alone is not sufficient.",
        keyPoint: "THA/TKA: opioid screening documented. Positive pain screen = document management goals.",
        category: "rule",
      },
      {
        title: "Must a Bilateral Procedure Still Have a Specific Side Marked?",
        content: "For procedures involving bilateral structures, the specific side must still be marked. 'We always do both sides' is not a substitute for proper site marking. Even when a procedure is always bilateral, the specific site must be identified and marked.",
        keyPoint: "Mark the specific side even for bilateral procedures — 'always bilateral' is not sufficient.",
        category: "scenario",
      },
    ],
    questions: [
      {
        id: "up1",
        question: "During the Time-Out, the surgeon continues reviewing the X-ray while the circulator reads the checklist aloud. The surgeon says 'I'm listening.' Is this an acceptable Time-Out?",
        options: [
          "ALL activity must stop during the Time-Out and every team member must actively participate",
          "The surgeon reviewing imaging during Time-Out demonstrates preparation and situational awareness",
          "Multitasking is acceptable as long as the surgeon acknowledges each checklist item verbally",
          "The surgeon confirmed verbal attention, which satisfies the active participation requirement during Time-Out"
        ],
        correctIndex: 0,
        explanation: "ALL activity must stop during the Time-Out. Passive listening is not active participation. Every team member must stop what they're doing and actively engage in the verification process.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up2",
        question: "A consent form lists the procedure as 'L TKA' — the left knee is marked, and the patient verbally confirms the correct side. Is the consent form compliant?",
        options: [
          "The abbreviation is universally recognized in orthopedic surgery and patient verbal confirmation validates the intent",
          "Standard medical abbreviations are acceptable on consent forms when the patient can confirm understanding",
          "Consent forms must use the full procedure name with no abbreviations",
          "The site marking and patient confirmation together serve as redundant safeguards that compensate for any abbreviation"
        ],
        correctIndex: 2,
        explanation: "Consent forms must use the full procedure name with NO abbreviations. 'L TKA' must be written out (e.g., 'Left Total Knee Arthroplasty'). Patient verbal confirmation does not compensate for documentation deficiencies.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up3",
        question: "A patient's H&P was completed 20 days ago. Surgery is tomorrow. Is any additional documentation required?",
        options: [
          "Since the H&P is more than 24 hours old, a follow-up assessment is required within 24 hours of registration",
          "A follow-up assessment is only required if the H&P was completed more than 25 days ago",
          "A completely new H&P must be performed because 20 days exceeds the pre-surgical documentation window",
          "The H&P is within the 30-day requirement and no further documentation is needed"
        ],
        correctIndex: 0,
        explanation: "While the H&P is within 30 days (compliant), it's more than 24 hours old. A follow-up assessment examining the patient and noting any changes must be done within 24 hours of registration or before surgery.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up4",
        question: "The surgical site is marked by the surgeon with the patient awake and actively participating. The mark is at the incision line. After draping, the mark is covered and not visible. Is this compliant?",
        options: [
          "The mark location at the incision line is correct; visibility after draping is a preference, not a requirement",
          "The patient participated and the mark was correctly placed at the incision line, fulfilling the marking requirement",
          "The site mark must be visible after the patient is prepped and draped",
          "As long as the Time-Out was completed before draping, the mark does not need to remain visible"
        ],
        correctIndex: 2,
        explanation: "The site mark must remain visible after prepping and draping. If it's covered, it cannot serve its verification purpose during the Time-Out. The mark needs to be placed where it will remain visible.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up5",
        question: "A patient is identified using their full name and room number before a procedure. Is this adequate patient identification?",
        options: [
          "Name and room number together provide two distinct identifiers linked to the patient's current admission",
          "When combined with the patient's verbal confirmation, name and room number meet the two-identifier standard",
          "Room number is facility-assigned and unique during the patient's stay, making it a valid second identifier",
          "Room number is not a unique patient identifier; use name and DOB, or name and MRN"
        ],
        correctIndex: 3,
        explanation: "Room numbers change and are NOT unique to patients. Two unique patient identifiers must be used — such as name and date of birth, or name and medical record number (MRN).",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up6",
        question: "A patient scheduled for Total Hip Arthroplasty (THA) has opioid screening documented, advance directives addressed, H&P within 30 days with a 24-hour update, and a properly completed consent. A surveyor asks: 'What else is required before anesthesia?' What is the correct answer?",
        options: [
          "A pre-anesthesia assessment must be completed and documented before anesthesia services are provided",
          "A fall risk assessment must be completed before anesthesia, as it is separate from the H&P requirements",
          "A medication reconciliation review by the anesthesiologist is needed, but the pre-anesthesia assessment is included in the H&P",
          "Nothing — all pre-operative requirements are met and the case may proceed as planned"
        ],
        correctIndex: 0,
        explanation: "A pre-anesthesia assessment must be completed and documented before anesthesia can be administered. This is a separate requirement from the H&P and other pre-operative checks.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up7",
        question: "During the Time-Out, which of the following is NOT a required verification element?",
        options: [
          "Fire risk assessment score",
          "The patient's insurance status",
          "Prophylactic antibiotic timing confirmed",
          "Implant availability and specifications discussed"
        ],
        correctIndex: 1,
        explanation: "Insurance status is NOT a Time-Out element. Required elements include: patient identity, correct site, consent, antibiotics, implants, equipment, X-rays, fire risk score, and special needs.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "up8",
        question: "A patient scheduled for TKA has no opioid screening documented. The surgeon says the patient is not on opioids so screening isn't needed. Is this correct?",
        options: [
          "Opioid screening is a recommended best practice but not a mandatory requirement for TKA patients",
          "Opioid screening is only needed if the patient is currently taking opioids or has a documented history of substance use",
          "Opioid screening must be documented for all THA and TKA patients regardless of current opioid use",
          "The surgeon's clinical assessment that the patient is not on opioids serves as an equivalent to formal screening"
        ],
        correctIndex: 2,
        explanation: "Opioid screening must be documented for ALL Total Hip (THA) and Total Knee (TKA) arthroplasty patients. Current opioid use is irrelevant — the screening is required regardless.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up9",
        question: "An H&P was performed 32 days before the scheduled surgery date. Is this H&P valid?",
        options: [
          "The H&P must be completed within 30 days prior to surgery; at 32 days, a new H&P is required",
          "As long as a 24-hour update note is completed, the original H&P remains valid regardless of age",
          "The 30-day window has a standard 72-hour grace period for scheduling flexibility",
          "32 days is close enough to the 30-day requirement and a follow-up assessment bridges the gap"
        ],
        correctIndex: 0,
        explanation: "The H&P must be completed within 30 days prior to surgery. At 32 days, it is out of compliance and must be redone — there is no grace period.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up10",
        question: "A resident (not the attending surgeon performing the procedure) marks the surgical site because the attending is running late. The patient participates in the marking. Is this acceptable?",
        options: [
          "The provider who will perform the procedure must be the one to mark the site",
          "A resident acting under the attending's direction is considered an extension of the attending's authority for site marking",
          "Any credentialed physician on the surgical team can mark the site when the patient participates and confirms",
          "Patient participation in the marking process is the critical safeguard, not which provider applies the mark"
        ],
        correctIndex: 0,
        explanation: "The provider who will perform the procedure must mark the site. Having a different provider mark it defeats the purpose of the verification process, regardless of patient participation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up11",
        question: "A patient has no advance directive. Staff informs the patient about advance directives and offers assistance creating one. The patient declines. Is this compliant?",
        options: [
          "The patient must create an advance directive before any procedure involving anesthesia",
          "The staff offered assistance, which fulfills the requirement even if the patient declines",
          "The patient's refusal must be documented with a witness signature to be compliant",
          "But only if the offer and refusal are documented using a facility-specific advance directive waiver form"
        ],
        correctIndex: 1,
        explanation: "The requirement is to offer assistance with advance directives when none exist. Patients are not required to create one — the obligation is to inform and offer help. Declining is the patient's right.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "up12",
        question: "A consent form has the patient's signature but is missing the witness signature. The time and date are present and the full procedure name is written out. Is this consent complete?",
        options: [
          "The patient's signature is the most important element and the witness signature is optional for routine procedures",
          "A witness signature is only required for high-risk or invasive procedures, not for all consents",
          "The surgeon's signature on the operative report serves as the witness verification",
          "The consent requires both the patient (or surrogate) AND witness signatures"
        ],
        correctIndex: 3,
        explanation: "A complete consent form must include: time, date, patient or surrogate signature, witness signature, full procedure name (no abbreviations), and sedation if required. Missing the witness signature makes it incomplete.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "up13",
        question: "The provider who marked the surgical site is called away for an emergency and is not present during the Time-Out. A different surgeon is performing the case. Should the Time-Out proceed?",
        options: [
          "Any attending surgeon present can verify the site and complete the Time-Out as long as the mark is visible",
          "The original mark is valid documentation of site verification and the replacing surgeon can proceed",
          "The provider who marked the site must be present during the Time-Out",
          "The circulating nurse can verify the mark against the consent form, which is sufficient for the Time-Out"
        ],
        correctIndex: 2,
        explanation: "The provider who marked the surgical site must be present during the Time-Out to confirm correct site identification. If that provider is unavailable, the site may need to be re-verified and re-marked.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up14",
        question: "A consent form reads: 'Right Total Knee Arthroplasty.' The patient's right knee is marked. During the Time-Out, the circulator reads the consent aloud as 'right TKA' to save time. Is this acceptable?",
        options: [
          "The consent itself uses the full name, and abbreviating during verbal read-back is acceptable for efficiency",
          "The written consent is the legal document; the verbal read-back is a courtesy and does not require exact wording",
          "The consent must be read aloud exactly as written; abbreviating during the Time-Out undermines the verification process",
          "All team members understand standard orthopedic abbreviations, so the verbal shorthand is functionally equivalent"
        ],
        correctIndex: 2,
        explanation: "The Time-Out requires the consent to be read aloud for verification by all team members. Abbreviating during verbal read-back could cause confusion and defeats the purpose of the cross-check. The full procedure name should be stated.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up15",
        question: "An H&P was completed 28 days ago. A follow-up assessment was done 36 hours before surgery and documented in the chart. Is all documentation current?",
        options: [
          "The follow-up assessment timing is flexible as long as it occurs after the original H&P and before surgery",
          "A 36-hour follow-up is within the 48-hour acceptable window for pre-surgical updates",
          "The H&P is within 30 days and a follow-up assessment was performed and documented",
          "The follow-up assessment must be within 24 hours of registration, not 36 hours before surgery"
        ],
        correctIndex: 3,
        explanation: "While the H&P is within the 30-day window, the follow-up assessment must be performed within 24 hours of registration or before surgery. A 36-hour-old follow-up does not meet the 24-hour recency requirement.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "up16",
        question: "During a Time-Out for a bilateral knee injection, the surgeon states: 'We're doing bilateral knee injections — both sides.' The circulator confirms the consent and both knees are marked. A surveyor asks if anything was missed during this Time-Out. What is the correct answer?",
        options: [
          "Only patient identification was missed — all other Time-Out elements are optional for minor injection procedures",
          "Nothing was missed — the Time-Out covered the procedure, bilateral sites, and consent verification",
          "Nothing was missed — bilateral procedures only require site and consent verification since the procedure is the same on both sides",
          "The Time-Out must also address: antibiotics, implants, equipment concerns, fire risk score, and special needs — not just the procedure and site"
        ],
        correctIndex: 3,
        explanation: "The Time-Out requires verification of ALL elements: patient ID, correct site, consent, provider present, antibiotics, implants discussed, equipment concerns, X-rays, fire risk score, and special needs. Simply confirming the procedure and sites is an incomplete Time-Out.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "up17",
        question: "A patient undergoing Total Hip Arthroplasty arrives with: signed consent (full procedure name, timed, dated, patient and witness signatures), H&P from 10 days ago with a 12-hour-old follow-up, opioid screening documented, advance directives addressed, and site marked by the attending with patient participation. Pre-anesthesia assessment is not yet done. Can the case proceed?",
        options: [
          "The anesthesiologist can perform the assessment concurrently during induction to avoid surgical delays",
          "The H&P with follow-up serves as the pre-anesthesia assessment when completed within 24 hours",
          "All other requirements are met and pre-anesthesia can be done after induction while the patient is monitored",
          "The pre-anesthesia assessment must be completed and documented BEFORE anesthesia is administered"
        ],
        correctIndex: 3,
        explanation: "Pre-anesthesia assessment must be done before anesthesia is administered — it cannot be deferred. All other pre-operative requirements are met in this scenario, but the case cannot proceed until the pre-anesthesia assessment is completed.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "up18",
        question: "A consent form has: patient signature, witness signature, date, and full procedure name. However, the time is missing. The surgeon says the time can be added later from the nursing documentation. Is this consent complete?",
        options: [
          "The time can be cross-referenced from nursing documentation and added to the consent retroactively",
          "The date is sufficient for consent validity; the time is a supplemental documentation element",
          "The consent form must include the time at the point of signature; retrospective time addition is not acceptable",
          "As long as the time is added before the patient enters the operating room, the consent remains valid"
        ],
        correctIndex: 2,
        explanation: "Consent forms must include time, date, signatures, and full procedure name at the time they are signed. A missing time field makes the consent incomplete. Retroactive additions to consent documents are not acceptable.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up19",
        question: "A patient is identified using their name and medical record number (MRN) printed on their wristband. The wristband also has a barcode that was scanned. A surveyor asks if identification was adequate. What is the correct answer?",
        options: [
          "Name and MRN must be verbally confirmed by the patient, not just read from the wristband",
          "Barcode scanning alone is the required identification method; visual confirmation of name and MRN is outdated",
          "Name and MRN are two unique patient identifiers, and barcode scanning adds an extra layer",
          "Three unique identifiers are required for surgical patients: name, MRN, and date of birth"
        ],
        correctIndex: 2,
        explanation: "Name and MRN (medical record number) are two unique patient identifiers — this meets the requirement. Barcode scanning is an excellent additional verification method but does not replace the need for two unique identifiers.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "up20",
        question: "A surgical site mark is placed by the attending surgeon with patient participation. The mark uses an 'X' over the incision site. Another surgeon in the practice uses an arrow, and a third uses initials. A surveyor asks about the marking method. What is the concern?",
        options: [
          "Any visible mark that the patient and surgeon agree on is acceptable as long as it is clearly visible",
          "Individual surgeon preference for marking style is acceptable as long as the mark is at or near the incision site",
          "The variety of marks actually provides additional identification since each surgeon's mark is unique to them",
          "The marking method must be consistent — the facility should use the same type of mark each time to avoid confusion"
        ],
        correctIndex: 3,
        explanation: "Surgical site marking must be consistent — the same type of mark should be used each time to prevent ambiguity. Different surgeons using different marking methods (X, arrow, initials) creates potential confusion and undermines the safety purpose of site marking.",
        xpReward: 15,
        isSwipe: false,
      },
    ],
  },
  {
    id: "patient_care_docs",
    name: "Patient Care & Documentation",
    description: "Master post-operative care, pain management, medication safety, and clinical documentation standards.",
    icon: "FileText",
    color: "hsl(280, 65%, 55%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "Patient Care & Documentation",
      plainLanguageSummary: "Post-operative care must be documented completely and contemporaneously. Surveyors trace the chart from consent through discharge — looking for post-anesthesia evaluation, pain assessment, discharge criteria, medication documentation, and patient education. Gaps in the chart are treated as gaps in care.",
      keyOperationalExpectations: [
        "Post-anesthesia evaluation by a qualified provider must be documented before discharge — not just a nursing note.",
        "Pain must be assessed and documented at defined intervals post-procedure.",
        "Discharge criteria must be met and documented — the reason for discharge readiness must be in the chart.",
        "Discharge instructions must be patient-specific and documented as given to the patient or designee.",
        "Medication errors and near-misses must be reported through the event reporting system.",
      ],
      commonRiskPoints: [
        "Post-anesthesia evaluation not documented by a qualified provider — nursing discharge assessment alone does not satisfy the requirement.",
        "Pain assessment documented only once on admission with no repeat documentation during PACU stay.",
        "Discharge instructions the same generic printout for every patient, without individualization for the specific procedure or patient needs.",
        "Medication given without a current order documented in the chart ('verbal order, to be followed by written order' never completed).",
        "Adverse medication events documented in nursing notes but not entered into the event reporting system for QAPI review.",
      ],
      cmsTags: ["RC.02.01.01", "PC.04.02.01", "MM.04.01.01"],
    },
    studyMaterial: [
      {
        title: "What Must the Post-Anesthesia Evaluation Include and When Must It Be Completed?",
        content: "A post-anesthesia evaluation must be completed within 48 hours of the procedure. It must document all 7 elements: respiratory function, cardiovascular function, mental status, temperature, pain, nausea/vomiting, and post-operative hydration status.",
        keyPoint: "Post-anesthesia eval within 48 hours. All 7 elements required.",
        category: "number",
      },
      {
        title: "What Elements Are Required in the Immediate Post-Op Note?",
        content: "The immediate post-operative note must include: surgeon name, assistant names, procedure findings, procedures performed, specimens removed and their disposition, estimated blood loss (EBL), post-operative diagnosis, and authentication (signed, dated, and timed). All elements must be present.",
        keyPoint: "Post-op note: surgeon, assistants, findings, specimens, EBL, post-op diagnosis, authentication.",
        category: "number",
      },
      {
        title: "How Often Must Pain Be Assessed and When Must It Be Reassessed After Intervention?",
        content: "Pain must be assessed a minimum of 2 times per 24 hours. After any pain intervention: parenteral (IV) = reassess within 1 hour, enteral (oral) = within 2 hours, non-pharmacologic = within 4 hours. Pain management goals must be documented.",
        keyPoint: "Pain 2x/24hrs. Reassess: IV=1hr, oral=2hr, non-pharm=4hr.",
        category: "number",
      },
      {
        title: "What Must Be Assessed Before and After Every Opioid Dose?",
        content: "Sedation level and level of consciousness must be assessed before AND after every opioid administration. This is a patient safety requirement. PRN opioid orders must include a documented clinical indication — not just 'pain.'",
        keyPoint: "LOC assessed before AND after every opioid dose. PRN orders need a clinical indication.",
        category: "rule",
      },
      {
        title: "When Must Medication Reconciliation Occur?",
        content: "Medication reconciliation must be performed at two specific points: admission and discharge. All medications in all locations must be secured (locked) — including PACU medications. The After Visit Summary (AVS) must include medication information.",
        keyPoint: "Med reconciliation at admission AND discharge. All meds secured. AVS includes medications.",
        category: "rule",
      },
      {
        title: "What Makes a Fall Risk Assessment Compliant?",
        content: "Fall risk must be assessed using a validated tool with specific interventions implemented based on the identified risk level. Interventions must be matched to the risk and documented. A generic 'fall prevention' notation without specific interventions is insufficient.",
        keyPoint: "Validated fall risk tool + matched, documented interventions. Not just a checkbox.",
        category: "rule",
      },
      {
        title: "What Steps Are Required After a Positive Suicide Screen?",
        content: "For patients at risk, use the C-SSRS validated tool (for patients age 12 and older). A positive screen requires: SAFE-T risk assessment, suicide precaution orders that match the risk level, documented safety checks, and provision of 988 Crisis Lifeline information.",
        keyPoint: "C-SSRS screen (age 12+). Positive = SAFE-T + matched orders + safety checks + 988 number.",
        category: "number",
      },
      {
        title: "What Are the Requirements for Tissue Storage and Tracking?",
        content: "Tissue storage equipment must have functional alarms 24/7 with documented emergency backup plans. Tissue suppliers must be verified as FDA-registered annually. Tissue records must be retained a minimum of 10 years with full chain of custody — donor to recipient and back.",
        keyPoint: "Tissue: 24/7 alarms, FDA-registered suppliers (annual verification), 10-year records.",
        category: "number",
      },
      {
        title: "How Often Must Intake and Output Be Documented?",
        content: "Intake and output (I&O) must be documented at minimum every 8 hours. Restraint use requires: assessment, flowsheet documentation, and documented evidence that less restrictive alternatives were attempted first before restraints were applied.",
        keyPoint: "I&O every 8 hours. Restraints: document alternatives tried first.",
        category: "number",
      },
      {
        title: "What Must Discharge Instructions Include?",
        content: "Discharge instructions must be appropriate to the specific procedure performed and the type of anesthesia used. Instructions must be given at an appropriate reading level, with opportunity for the patient to ask questions. A copy must be retained in the medical record.",
        keyPoint: "Discharge instructions: procedure-specific, anesthesia-appropriate, copy retained in chart.",
        category: "rule",
      },
    ],
    questions: [
      {
        id: "pc1",
        question: "A patient received IV morphine 45 minutes ago. The nurse reassesses pain at 1 hour and documents the result. Is the reassessment timing correct for IV (parenteral) medication?",
        options: [
          "Reassessment must occur at exactly 45 minutes for parenteral medications per evidence-based guidelines",
          "IV medication reassessment is required within 1 hour",
          "IV medication requires reassessment within 30 minutes to capture peak effect",
          "IV opioid reassessment requires a 2-hour window to allow for full therapeutic effect"
        ],
        correctIndex: 1,
        explanation: "Parenteral (IV) pain medication reassessment is required within 1 hour. Reassessing at 1 hour meets this requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc2",
        question: "A patient received oral pain medication. The nurse reassesses at 1 hour and documents 'no change.' Is this reassessment timing appropriate?",
        options: [
          "Reassessing too early produces inaccurate data and should be repeated at the 2-hour mark",
          "Oral medication reassessment should occur at exactly 2 hours when peak therapeutic effect is expected",
          "Oral medication reassessment at 1 hour is premature and the documented result is not clinically valid",
          "Earlier reassessment is always acceptable"
        ],
        correctIndex: 3,
        explanation: "The requirement is reassessment within 2 hours for oral medication. Reassessing at 1 hour is earlier than required, which is acceptable — the 2-hour mark is the maximum, not the minimum.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc3",
        question: "A nurse applies a non-pharmacologic pain intervention (ice pack). When should she reassess pain?",
        options: [
          "3 hours",
          "2 hours",
          "4 hours",
          "1 hour"
        ],
        correctIndex: 2,
        explanation: "Non-pharmacologic intervention reassessment is at 4 hours. This is longer than IV (1 hour) or oral (2 hours) because non-pharmacologic interventions may take longer to produce effects.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc4",
        question: "A patient's chart shows pain assessed once in a 24-hour period. The nurse says the patient denied pain during the second assessment window, so she didn't document it. Is this compliant?",
        options: [
          "Pain denial eliminates the need for a second assessment as long as the first assessment is documented",
          "A single assessment with a denial noted verbally meets the pain management documentation standard",
          "If the patient denies pain, no formal assessment documentation is needed since there is nothing to report",
          "Pain must be assessed and documented a minimum of 2 times per 24 hours regardless of patient report"
        ],
        correctIndex: 3,
        explanation: "Pain must be assessed AND documented a minimum of 2 times every 24 hours, even if the patient denies pain. The assessment itself (including denial) must be recorded.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc5",
        question: "Before administering opioids, a nurse assesses the patient's sedation level. After administration, she documents the patient's pain score but not the post-administration sedation level. Is this adequate documentation?",
        options: [
          "Documenting the pain score implicitly captures the sedation status since pain and sedation are inversely related",
          "The post-administration pain score is the critical assessment and sedation monitoring is only needed for high-dose opioids",
          "Sedation level and LOC must be assessed BOTH before AND after every opioid administration",
          "Pre-administration sedation assessment is sufficient since it establishes the baseline for safety monitoring"
        ],
        correctIndex: 2,
        explanation: "Sedation level and level of consciousness must be assessed both before AND after every opioid administration. Pain scores alone are insufficient — post-opioid sedation monitoring is essential for detecting respiratory depression.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc6",
        question: "A surveyor reviews PACU medication storage. Medications are in a locked automated dispensing cabinet with access control. Is this compliant?",
        options: [
          "Controlled substances in the PACU require a separate locked compartment from non-controlled medications",
          "Medications are secured in a locked system",
          "PACU medications require additional double-lock verification beyond automated dispensing cabinet controls",
          "PACU medications must be stored in a separate locked room, not in an automated dispensing cabinet"
        ],
        correctIndex: 1,
        explanation: "This IS compliant. All medications in all locations — including the PACU — must be secured. A locked automated dispensing cabinet meets this requirement.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc7",
        question: "A PRN order reads 'Ondansetron 4mg IV PRN.' Is this order complete?",
        options: [
          "The indication is only required for controlled substances, not for standard PRN medications like ondansetron",
          "The clinical indication is implied by the medication itself since ondansetron is universally known as an antiemetic",
          "PRN orders must include the clinical indication (e.g., 'for nausea')",
          "Drug name, dose, route, and PRN designation are specified, which meets the minimum order requirements"
        ],
        correctIndex: 2,
        explanation: "PRN medication orders must include the clinical indication — the reason for administering the medication. 'PRN' alone without 'for nausea' or another indication is incomplete.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc8",
        question: "A post-anesthesia evaluation was completed 50 hours after the procedure. Is this within the required timeframe?",
        options: [
          "The 48-hour guideline allows a reasonable grace period for weekends and staffing constraints",
          "The evaluation was completed within 3 calendar days, which meets the intent of the requirement",
          "The evaluation was completed within the standard 72-hour window for post-anesthesia assessments",
          "The post-anesthesia evaluation must be completed within 48 hours"
        ],
        correctIndex: 3,
        explanation: "The post-anesthesia evaluation must be completed within 48 hours of the procedure. At 50 hours, it exceeds the 48-hour requirement.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc9",
        question: "A post-op note includes: surgeon name, assistants, findings, procedures performed, specimens, EBL, and post-op diagnosis. It is signed and dated but has no time. Is this note complete?",
        options: [
          "Authentication requires signed, dated, AND timed",
          "The time of the procedure is documented elsewhere in the operative record, so it need not be on the post-op note",
          "The time is a supplemental element that can be added retrospectively from the anesthesia record",
          "Signed and dated is sufficient authentication for immediate post-op notes"
        ],
        correctIndex: 0,
        explanation: "The post-op note must be authenticated with signature, date, AND time. Missing any element of authentication makes the note incomplete.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc10",
        question: "Tissue tracking records are retained for 7 years with full donor-to-recipient traceability. Is this retention period adequate?",
        options: [
          "Tissue records must be retained for a minimum of 10 years",
          "7 years exceeds the 5-year FDA minimum for tissue documentation retention",
          "Tissue records follow the same retention schedule as general surgical records, which is 7 years",
          "7 years meets the standard medical records retention period and applies equally to tissue tracking"
        ],
        correctIndex: 0,
        explanation: "Tissue records must be retained for a minimum of 10 years with full traceability from donor to recipient and back. Seven years is insufficient.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc11",
        question: "A patient screens positive on the C-SSRS suicide screening. The nurse documents the positive screen and notifies the physician. Is anything else required?",
        options: [
          "The physician notification triggers an automatic psychiatric consult, which fulfills the follow-up requirement",
          "The C-SSRS screening itself is the comprehensive assessment tool and does not require additional evaluation",
          "Positive screen documentation and physician notification is sufficient for initial management",
          "A SAFE-T risk assessment must follow, documenting thoughts, method, plan, behaviors, and intent"
        ],
        correctIndex: 3,
        explanation: "A positive suicide screen requires a SAFE-T risk assessment documenting: thoughts, method, plan, behaviors, and intent. The 988 Crisis Lifeline information must also be provided to the patient.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc12",
        question: "Restraints were applied to a combative patient. Documentation shows the physician order, time of application, and patient assessment. Is this documentation complete?",
        options: [
          "Documentation must also show that less restrictive alternatives were tried and were ineffective",
          "Physician order, time of application, and patient assessment are the required documentation elements",
          "The physician order itself serves as implicit documentation that alternatives were considered and deemed insufficient",
          "Combative behavior justifies immediate restraint application without requiring documentation of alternatives"
        ],
        correctIndex: 0,
        explanation: "Restraint documentation must include proof that less restrictive alternatives were attempted first and were ineffective. Restraints are a last resort and this must be documented.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc13",
        question: "How often must intake and output (I&O) be documented at minimum?",
        options: [
          "Every 8 hours",
          "Once per shift, documented at shift change",
          "Every 4 hours",
          "Every 12 hours"
        ],
        correctIndex: 0,
        explanation: "Intake and output must be documented at a minimum of every 8 hours per documentation standards.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc14",
        question: "A tissue supplier's FDA registration was verified 15 months ago. Tissue continues to be received from this supplier. Is this acceptable?",
        options: [
          "FDA registration verification is required every 2 years, so 15 months is within the acceptable window",
          "Tissue suppliers must be verified as FDA-registered annually",
          "As long as the supplier provides a current FDA registration certificate with each shipment, independent verification is not required",
          "FDA registration only needs to be verified at initial contracting and during contract renewal periods"
        ],
        correctIndex: 1,
        explanation: "Tissue suppliers must be verified as FDA-registered on an annual basis. At 15 months since last verification, this is overdue.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc15",
        question: "A patient received IV Dilaudid at 2:00 PM. At 2:45 PM, the nurse documents the pain score but does not document the patient's level of consciousness or sedation level. At 3:00 PM she documents the LOC. How many documentation deficiencies are present?",
        options: [
          "None — the 2:45 PM pain score documentation implicitly includes sedation assessment since the nurse must observe the patient",
          "One — the only deficiency is the delayed LOC documentation at 3:00 PM; pre-administration assessment is not required for subsequent doses",
          "None — LOC was documented within an hour and the pain score was assessed at an appropriate interval",
          "One — sedation level and LOC must be assessed BOTH before AND after opioid administration"
        ],
        correctIndex: 3,
        explanation: "Sedation and LOC must be assessed before AND after every opioid administration. The pre-administration assessment is missing entirely, and the post-administration LOC at 60 minutes (for IV medication that requires 1-hour reassessment) is at the outer limit. Both pre- and post-assessments must be timely and documented.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc16",
        question: "A post-anesthesia evaluation documents: respiratory function, cardiovascular function, mental status, pain, nausea/vomiting, and hydration status. It was completed 40 hours after surgery. What is missing or incorrect?",
        options: [
          "The 40-hour timeframe exceeds the 24-hour maximum for post-anesthesia evaluations",
          "The evaluation is missing temperature assessment — all 7 required elements must be documented",
          "The evaluation must be completed within the PACU discharge timeframe, not 40 hours post-procedure",
          "Nothing — the six documented elements represent a complete post-anesthesia evaluation within the required timeframe"
        ],
        correctIndex: 1,
        explanation: "The post-anesthesia evaluation requires 7 elements: respiratory function, cardiovascular function, mental status, TEMPERATURE, pain, nausea/vomiting, and hydration. Temperature is missing. The 40-hour timeframe is within the 48-hour requirement.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc17",
        question: "A PRN order reads: 'Morphine 2-4mg IV PRN for pain, every 4 hours.' A nurse gives 4mg when the patient reports pain of 3/10. Another nurse gives 2mg when a different patient reports pain of 8/10. Is the prescribing and administration appropriate?",
        options: [
          "Range orders allow nurses to use their professional discretion, and factors beyond pain score (weight, tolerance, history) inform dosing",
          "The range order itself may be acceptable per policy, but the administration pattern is concerning",
          "As long as both doses fall within the prescribed range and the 4-hour interval is maintained, the administration is compliant",
          "Both are within the range order and based on individual clinical judgment at the bedside"
        ],
        correctIndex: 1,
        explanation: "While range orders may be permitted by policy, giving the maximum dose for mild pain (3/10) and the minimum for severe pain (8/10) suggests a lack of individualized assessment. Range orders require clinical judgment that matches the dose to the patient's actual pain level and clinical status.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc18",
        question: "An immediate post-op note includes: surgeon name, findings, procedures performed, specimens removed, and post-op diagnosis. It is signed and dated. What required element is missing?",
        options: [
          "The time of authentication only — assistant names are included in the operative report separately",
          "Assistant names only — all other required elements are present",
          "Estimated blood loss (EBL) only — assistants are optional on immediate post-op notes",
          "Both assistants and EBL and time"
        ],
        correctIndex: 3,
        explanation: "The immediate post-op note requires: surgeon name, assistants, findings, procedures, specimens AND disposition, EBL, post-op diagnosis, and authentication (signed, DATED, AND TIMED). Missing: assistant names, EBL, specimen disposition, and time of authentication.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc19",
        question: "A patient screens positive on the C-SSRS (Columbia Suicide Severity Rating Scale). Staff documents the positive screen and places the patient on 1:1 observation. What additional steps are required?",
        options: [
          "Additional steps — a positive screen with 1:1 observation is the maximum required intervention until psychiatric consultation",
          "SAFE-T risk assessment, suicide precaution orders matching risk level, safety checks documented, ligature-resistant garments if high-risk",
          "Additional steps — 1:1 observation is the highest level of precaution and encompasses all required safety measures",
          "Only a psychiatric consultation referral is needed — the 1:1 observation and documented screen satisfy all other requirements"
        ],
        correctIndex: 1,
        explanation: "A positive C-SSRS screen triggers a cascade of required actions: SAFE-T risk assessment (thoughts, method, plan, behaviors, intent), matched precaution orders, documented safety checks, ligature-resistant garments for high-risk patients, and providing 988 Crisis Lifeline information.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc20",
        question: "A patient has been in restraints for 6 hours. Documentation shows: initial restraint order, initial assessment, and a note that 'less restrictive alternatives were attempted.' However, the restraint flowsheet has not been updated in 4 hours. Is the documentation adequate?",
        options: [
          "Restraint reassessment is only required when the restraint order is renewed, not on a continuous basis",
          "The initial order, assessment, and less-restrictive alternatives documentation are sufficient for a 6-hour restraint period",
          "A 4-hour documentation gap is within acceptable limits as long as the patient is being visually monitored",
          "Restraints require ongoing flowsheet documentation with regular reassessments, not just an initial assessment"
        ],
        correctIndex: 3,
        explanation: "Restraint use requires ongoing documentation: regular reassessments on the flowsheet, continued monitoring, and proof that less restrictive alternatives were tried. A 4-hour gap in flowsheet documentation for a restrained patient is a significant finding.",
        xpReward: 15,
        isSwipe: false,
      },
    ],
  },
  {
    id: "eoc_safety",
    name: "EOC & Safety Compliance",
    description: "Master Environment of Care safety standards: sharps, vendors, privacy, emergency equipment, and more.",
    icon: "ShieldCheck",
    color: "hsl(210, 70%, 50%)",
    requiredScore: 60,
    chapterSummary: {
      chapterTitle: "EOC & Safety Compliance",
      plainLanguageSummary: "Environment of Care safety covers sharps disposal, vendor access, emergency equipment readiness, patient privacy, and hazardous materials management. Surveyors walk the facility looking for overfilled sharps containers, unescorted vendors in clinical areas, crash carts without check logs, and OSHA labeling gaps.",
      keyOperationalExpectations: [
        "Sharps containers must be puncture-resistant, mounted at the correct height, and replaced at the manufacturer's fill line — never overfilled.",
        "Vendor representatives must be badged, escorted, and documented when in clinical areas.",
        "Crash carts and defibrillators must have documented daily or shift checks with logs available for surveyor review.",
        "All hazardous materials must be labeled per OSHA HazCom standards — secondary containers require labels, not just the original manufacturer container.",
        "Patient privacy must be protected in waiting areas, check-in, and clinical spaces — conversations and records must not be overheard or visible to unauthorized persons.",
      ],
      commonRiskPoints: [
        "Sharps containers overfilled past the fill line because staff wait until sharps are visibly protruding before requesting replacement.",
        "Vendor representatives accessing procedure rooms or sterile storage areas without escort or facility badge.",
        "Crash cart check logs with gaps — days missing documentation because the check was done verbally but not recorded.",
        "Secondary containers (spray bottles, transfer containers) of hazardous chemicals without facility labels — only the original manufacturer bottle is labeled.",
        "Patient check-in and registration conducted where other waiting patients can hear the conversation, creating privacy violations.",
      ],
      cmsTags: ["EC.02.02.01", "EC.02.04.01", "EC.02.06.01", "RI.01.02.01"],
    },
    studyMaterial: [
      {
        title: "What Are the Placement and Condition Requirements for Sharps Containers?",
        content: "Sharps containers must be secured and not in danger of tipping, with contents below the fill line, and placed as close as feasible to the point of use. Overfilled or improperly positioned containers are immediate findings. Sharps carts must be locked and secure when unattended.",
        keyPoint: "Sharps: secured, below fill line, near point of use. Sharps carts locked when unattended.",
        category: "rule",
      },
      {
        title: "What Must Vendors Do When Inside the Facility?",
        content: "All vendors and contracted staff must display their identification badges at all times while in the facility. Vendor-owned equipment must be safety-tested before it is used on patients. Staff personal property must be secured per hospital policy.",
        keyPoint: "Vendors: ID badge visible at all times. Their equipment tested before patient use.",
        category: "rule",
      },
      {
        title: "How Must Protected Health Information Be Secured From Unauthorized View?",
        content: "Protected Health Information must be secured from unauthorized view at all times. No patient information should be visible on screens, charts, or whiteboards in areas where unauthorized persons could see it. Visual and auditory privacy must be maintained during patient care conversations.",
        keyPoint: "PHI must not be visible to unauthorized persons — screens, charts, and whiteboards included.",
        category: "rule",
      },
      {
        title: "Where Must EMTALA Signage Be Posted?",
        content: "EMTALA signage must be posted in the Emergency Department and OB areas. This signage informs patients of their right to receive emergency care regardless of ability to pay. Its absence is a regulatory finding. Signs must be visible and not covered or obscured.",
        keyPoint: "EMTALA signs required in ED and OB. Missing signs = regulatory finding.",
        category: "rule",
      },
      {
        title: "What Must Always Be True of Eyewash Station Access?",
        content: "Eyewash stations must be immediately accessible and completely unobstructed at all times. Common violation: supplies stored in front of or on top of the eyewash station, or furniture positioned so it must be moved to access the station.",
        keyPoint: "Eyewash must be unobstructed and immediately accessible. Nothing in front of it.",
        category: "rule",
      },
      {
        title: "When Must EVS Closets and Carts Be Locked?",
        content: "EVS closets and housekeeping carts must be locked when not actively in use. This prevents unauthorized access to cleaning chemicals. All chemical containers must be properly labeled with the full chemical name — abbreviations are not sufficient.",
        keyPoint: "EVS closets and carts locked when unattended. All chemicals properly and fully labeled.",
        category: "rule",
      },
      {
        title: "What Do Expired PM Stickers on Equipment Indicate?",
        content: "All medical equipment in active use must have current preventive maintenance stickers. Expired PM stickers indicate the equipment may not have been inspected per schedule. Surveyors check PM sticker dates on all medical equipment during equipment and environment tracers.",
        keyPoint: "All equipment: current PM stickers required. Expired = potential finding.",
        category: "rule",
      },
      {
        title: "How Must Pill Cutters, Crushers, and Glucometers Be Maintained After Each Use?",
        content: "Pill cutters and crushers must be visibly clean and free of any medication residue after each use. Residue from one medication creates cross-contamination risk for the next patient. Glucometers must also be clean with no visible blood residue.",
        keyPoint: "Pill cutters, crushers, glucometers: no visible residue after each use.",
        category: "rule",
      },
      {
        title: "What Must Be Done When Supplies Are Opened?",
        content: "All opened supplies must be dated when opened and must not be used past their expiration date. This includes glucose testing strips, ultrasound gel (28 days after opening), electrode packets, and any opened consumable. Undated items must be treated as expired.",
        keyPoint: "Date all opened supplies. Undated = expired. Ultrasound gel = 28 days after opening.",
        category: "rule",
      },
      {
        title: "What Are the Required OR Temperature and Humidity Ranges?",
        content: "Operating room temperature must be maintained at 68–73°F. OR humidity must be maintained between 20–60%. Both must be monitored and documented continuously. Out-of-range readings require documented corrective action. These ranges apply during and between cases.",
        keyPoint: "OR temp 68–73°F, humidity 20–60%. Monitored, documented, corrective action if out of range.",
        category: "number",
      },
    ],
    questions: [
      {
        id: "eoc1",
        question: "A sharps container is mounted on the wall near the point of use, secured, and contents are below the fill line. Is this compliant?",
        options: [
          "All sharps container requirements are met",
          "Wall-mounted sharps containers must also have a locking mechanism to prevent unauthorized access",
          "Sharps containers must be at counter height for accessibility, not mounted above the work surface",
          "Sharps containers must be on a mobile cart for portability, not permanently wall-mounted"
        ],
        correctIndex: 0,
        explanation: "This IS compliant. Sharps containers must be secured (wall-mounted qualifies), contents below the fill line, and as close as feasible to the point of use.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc2",
        question: "A vendor representative is providing in-service training in the OR. She is wearing her company ID badge on a lanyard. She brought demonstration equipment. Before the equipment can be used on patients, what must happen?",
        options: [
          "The equipment must be tested for safety by the hospital before patient use",
          "The vendor must provide a certificate of calibration from the manufacturer, which substitutes for hospital testing",
          "Nothing — the vendor's equipment is pre-tested and certified by the manufacturer before delivery",
          "Nothing — vendor demonstration equipment is exempt from hospital testing as it remains under vendor supervision"
        ],
        correctIndex: 0,
        explanation: "Vendor equipment must be tested for safety by the hospital before use on patients, regardless of manufacturer testing. The vendor's ID badge display is compliant.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc3",
        question: "A surveyor walks past a workstation and sees a patient's chart open on the counter. The computer screen is locked, but the paper chart has the patient's name, DOB, and diagnosis visible. No staff are present. Is this a concern?",
        options: [
          "The computer screen is locked, which satisfies the electronic PHI security requirement for the workstation",
          "As long as the workstation is in a restricted clinical area, paper charts do not need to be concealed",
          "Paper charts in clinical areas are considered incidental exposure and are not subject to the same standards as electronic PHI",
          "PHI on the paper chart is visible to unauthorized persons at an unmanned workstation"
        ],
        correctIndex: 3,
        explanation: "PHI must be secured from unauthorized viewing in ALL forms — both electronic AND paper. A visible paper chart at an unmanned workstation is a privacy violation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc4",
        question: "EMTALA signage is posted in the Emergency Department but not in the OB department. Is this compliant?",
        options: [
          "EMTALA signage is only required in the ED since it is the primary point of emergency patient contact",
          "OB departments are covered by the ED signage as long as they are within the same facility",
          "EMTALA signage must be posted in both the ED and OB areas",
          "EMTALA requirements for OB are satisfied through admission consent forms rather than posted signage"
        ],
        correctIndex: 2,
        explanation: "EMTALA signage must be posted in BOTH the Emergency Department AND OB areas, informing patients of their right to emergency medical screening and treatment.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc5",
        question: "An EVS closet is locked. The housekeeping cart is in the hallway, locked with all chemical bottles secured. The EVS worker stepped away to respond to a spill. Is this setup compliant?",
        options: [
          "Chemical bottles must be stored inside the locked EVS closet, not on a cart in the hallway regardless of lock status",
          "Housekeeping carts must be returned to the locked closet whenever the EVS worker leaves the immediate area",
          "Housekeeping carts in hallways must have a staff member within line-of-sight at all times per corridor safety standards",
          "Both the closet and cart are locked and secured"
        ],
        correctIndex: 3,
        explanation: "This IS compliant. EVS closets must be locked when unattended (it is), and housekeeping carts must be locked and secure when not in use (it is, with chemicals secured).",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc6",
        question: "A surveyor checks a piece of medical equipment and finds the preventive maintenance (PM) sticker shows it was due for inspection 2 months ago. The equipment appears to function normally. Is it acceptable to keep using it?",
        options: [
          "PM stickers are administrative tracking tools; clinical staff can verify equipment function through daily safety checks",
          "Equipment with expired PM stickers must be removed from service until PM is completed",
          "If the equipment functions normally and passes a quick visual inspection, the expired PM is a low-priority issue",
          "A 2-month lapse is within the acceptable grace period for non-critical medical equipment"
        ],
        correctIndex: 1,
        explanation: "Preventive maintenance stickers must be current. Equipment with expired PM has not been verified as safe and functional — it must be removed from service regardless of apparent function.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc7",
        question: "A fire extinguisher has 3 feet of clearance in front, but a chair is positioned 2.5 feet to the side. Is the clearance adequate?",
        options: [
          "Fire extinguishers require a 360-degree clearance zone to allow access from any approach angle",
          "3-foot clearance is required in all directions around fire safety equipment per NFPA standards",
          "Items within 3 feet on any side could obstruct emergency retrieval and must be relocated",
          "The 3-foot clearance requirement applies to the access path in front"
        ],
        correctIndex: 3,
        explanation: "The 3-foot clearance requirement focuses on maintaining clear access to fire safety equipment. The chair to the side does not block the access path in front.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc8",
        question: "A pill cutter has no visible medication residue and appears clean. When was the last time it should have been cleaned?",
        options: [
          "After every 5 uses or at the end of the shift, whichever comes first",
          "Once daily during medication room cleaning per EVS protocol",
          "Between each use — pill cutters must be clean and free of residue between patients",
          "At the beginning of each shift and documented on the cleaning log"
        ],
        correctIndex: 2,
        explanation: "Pill cutters and crushers must be cleaned and free of medication residue between uses to prevent cross-contamination between different patients' medications.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc9",
        question: "Open glucose test strips have a date written on the container showing they were opened 2 weeks ago. The manufacturer states a 90-day open expiration. Are these test strips acceptable?",
        options: [
          "They are dated and within the manufacturer's open expiration",
          "All glucose test strips expire 14 days after opening regardless of manufacturer specifications",
          "The open date alone is insufficient; strips must also have a calculated expiration date written on the container",
          "Glucose test strips must be individually packaged and used within 24 hours of opening per point-of-care testing standards"
        ],
        correctIndex: 0,
        explanation: "The test strips ARE acceptable. They are properly dated when opened and within the manufacturer's specified 90-day open expiration. The key is they must be dated AND within the stated expiration.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc10",
        question: "A patient room door is closed and a curtain is drawn during a physician-patient conversation about the diagnosis. Is privacy adequately maintained?",
        options: [
          "Both visual and auditory privacy measures are in place",
          "A white noise machine or sound-masking system is also required for conversations involving sensitive diagnoses",
          "The physician must also verify that no other patients or visitors are present in adjacent beds before discussing the diagnosis",
          "A closed door alone does not prevent auditory breaches; a private consultation room should be used instead"
        ],
        correctIndex: 0,
        explanation: "This IS compliant. Both visual privacy (curtain drawn) and auditory privacy (door closed) are maintained during the sensitive conversation.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc11",
        question: "Contaminated reusable sharps are placed in a designated container immediately after the procedure. The container is appropriately labeled. Is this handled correctly?",
        options: [
          "Reusable sharps must be neutralized with disinfectant solution before being placed in any container",
          "Contaminated reusable sharps were properly contained immediately after use",
          "All contaminated sharps must go in red sharps disposal containers regardless of whether they are reusable",
          "Reusable sharps require individual protective sheaths before placement in a shared transport container"
        ],
        correctIndex: 1,
        explanation: "This IS correct. Contaminated REUSABLE sharps must be placed in appropriate containers immediately after use. These go in designated reprocessing containers, not disposal sharps containers.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc12",
        question: "An eyewash station has a small supply caddy mounted on the wall 6 inches to the left but doesn't block access to the eyewash itself. Is this acceptable?",
        options: [
          "Any item within arm's reach of an eyewash station creates a potential obstruction during an emergency",
          "The supply caddy could interfere with the water stream trajectory and must be relocated per ANSI standards",
          "Nothing should be mounted within 12 inches of an eyewash station to ensure unimpeded emergency access",
          "The eyewash station remains accessible and unobstructed"
        ],
        correctIndex: 3,
        explanation: "The requirement is that eyewash stations must be accessible and unobstructed. A small caddy that doesn't block access to the eyewash itself does not violate this requirement.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc13",
        question: "Electrodes were opened from their package 3 days ago and left on the shelf. A nurse picks them up to use on a patient. Should she use them?",
        options: [
          "As long as the electrodes are within the manufacturer's printed expiration date, the open date is irrelevant",
          "Electrodes can be used for up to 7 days after opening if stored in a temperature-controlled environment",
          "Electrodes must be discarded after the package is opened per policy",
          "3 days is within acceptable limits for opened electrodes as long as they appear moist and adhesive"
        ],
        correctIndex: 2,
        explanation: "Electrodes must be discarded after the package is opened per policy. Opened electrodes dry out and lose adhesion and conductivity, making them unreliable for patient monitoring.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc14",
        question: "A sharps container is located across the room from where injections are given — about 15 feet away. Contents are below the fill line and the container is secured. Is this placement compliant?",
        options: [
          "The container meets all physical requirements and 15 feet is within the acceptable distance for a clinical room",
          "Sharps containers must be as close as feasible to the point of use; 15 feet away increases needlestick risk",
          "As long as the nurse carries the sharp with the safety cap engaged, distance to the container is not regulated",
          "Sharps placement requirements only apply to operating rooms and procedure suites, not general clinical spaces"
        ],
        correctIndex: 1,
        explanation: "While the container itself is compliant (secured, below fill line), its placement is not. Sharps containers must be as close as feasible to the point of use. Carrying sharps 15 feet increases needlestick injury risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc15",
        question: "A vendor representative enters the OR without an ID badge but is wearing surgical scrubs and a cap provided by the facility. OR staff recognize him by name. Is this compliant?",
        options: [
          "In the OR, sterile attire compliance takes precedence over badge display requirements for infection control reasons",
          "Wearing facility-provided surgical attire indicates the vendor has been cleared through the credentialing process",
          "Staff recognition by name serves as personal verification equivalent to badge identification in restricted areas",
          "All vendors must display identification badges while in the facility, regardless of familiarity or attire"
        ],
        correctIndex: 3,
        explanation: "All vendors and contracted staff must display identification badges at all times while in the facility. Personal recognition by staff does not substitute for proper identification. This is a security and accountability requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc16",
        question: "A surveyor checks a sharps container and finds: it is wall-mounted and secured, located at the point of use, but the contents appear to be right at the fill line. A tech says she'll replace it after the current patient. Is this acceptable?",
        options: [
          "As long as the tech documents the plan to replace it, a brief delay to finish the current patient is acceptable",
          "The container is still functional and replacing it mid-patient would disrupt care continuity",
          "The fill line is a guideline, and containers can safely hold additional sharps up to the closure line",
          "A sharps container at or above the fill line must be replaced immediately, not after the next patient"
        ],
        correctIndex: 3,
        explanation: "Sharps containers must have contents below the fill line at all times. At or above the fill line, the container must be replaced immediately — not deferred. Continuing to use an at-capacity sharps container forces sharps into a full container, greatly increasing injury risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc17",
        question: "A surveyor finds a patient room with: the computer screen locked, patient whiteboard turned away from the door, and the door closed. However, a printed patient discharge summary with full PHI is sitting on the bedside table, visible to anyone entering. Is privacy maintained?",
        options: [
          "The printed discharge summary with visible PHI on the bedside table is accessible to unauthorized persons entering the room",
          "The closed door limits access to authorized personnel, and the whiteboard is appropriately positioned",
          "The door being closed creates a reasonable expectation of privacy, making the document placement acceptable",
          "Discharge summaries are patient property and their placement in the patient's own room is not a privacy violation"
        ],
        correctIndex: 0,
        explanation: "PHI must be secured in ALL forms. A printed document with full PHI left visible on a bedside table is a privacy violation, even with other privacy measures in place. Paper documents must be face-down, in a folder, or secured from view.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc18",
        question: "Medical gas shut-off panels have a clear 3-foot access zone marked on the floor. However, a mobile computer workstation is parked 2.5 feet from the panel. There is no one at the workstation. Is this a finding?",
        options: [
          "The 3-foot zone is a guideline, and the mobile workstation can be easily moved in an emergency",
          "The 2.5-foot distance is within the acceptable variance for mobile equipment near gas shut-off panels",
          "Mobile equipment is exempt from clearance requirements since it can be repositioned by any staff member quickly",
          "Medical gas shut-off panels require 3-foot clearance at all times; the workstation violates this even though it's mobile"
        ],
        correctIndex: 3,
        explanation: "Medical gas shut-off panels require 3 feet of clearance at all times for emergency access. A mobile workstation at 2.5 feet is within the required clearance zone and must be moved. In an emergency, every second counts — clearance requirements are not flexible.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc19",
        question: "A pill cutter is visibly clean with no medication residue. A nurse used it 2 hours ago and cleaned it after use. She is about to use it for a different patient's medication. Should she clean it again?",
        options: [
          "Pill cutters must be cleaned between EACH use regardless of appearance or time elapsed since last cleaning",
          "Pill cutters only require cleaning at the end of each medication pass, not between individual patients",
          "It was cleaned after the last use and still appears clean, so re-cleaning is unnecessary",
          "A visual inspection confirming no residue is sufficient between uses of the same class of medication"
        ],
        correctIndex: 0,
        explanation: "Pill cutters and crushers must be cleaned between each use to prevent cross-contamination between different patients' medications. Appearance and time since last cleaning are irrelevant — the standard is between each patient use.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc20",
        question: "A surveyor identifies the following in an ED: (1) EMTALA signage posted at the entrance, (2) a sharps container above the fill line, (3) an eyewash station with a box partially blocking access, (4) a fire extinguisher with 3-foot clearance, and (5) a locked EVS closet. How many findings are present?",
        options: [
          "One — only the sharps container above the fill line; the box near the eyewash does not fully block access",
          "Two — the sharps container and the fire extinguisher, which requires clearance verification beyond the front 3 feet",
          "Three — the sharps container, blocked eyewash, and EMTALA signage is incomplete because it must also be posted in OB areas",
          "Two — the sharps container and the blocked eyewash"
        ],
        correctIndex: 3,
        explanation: "Two findings: (1) sharps container above the fill line must be replaced immediately, and (2) the eyewash station must be accessible and unobstructed. The EMTALA signage, fire extinguisher clearance, and locked EVS closet are all compliant.",
        xpReward: 20,
        isSwipe: false,
      },
    ],
  },
];

export const levels: Level[] = hospitalLevelsRaw.map((level) => ({
  ...level,
  module: "hospital",
  questions: level.questions.map((q) => ({ ...q, module: "hospital" })),
}));

export const hospitalLevels: Level[] = levels;
