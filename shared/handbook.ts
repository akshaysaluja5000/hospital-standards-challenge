import type { HandbookChapter } from "./schema";

export const handbook: HandbookChapter[] = [
  {
    levelId: "transport",
    title: "Transport of Instruments",
    overview: "Safe transport of surgical instruments from the OR to Sterile Processing (SPD) is one of the most critical steps in preventing healthcare-associated infections. This chapter covers every step from point-of-use treatment through corridor transport to the soiled utility room. Failure at any point in this chain can lead to dried bioburden, cross-contamination, staff exposure, and ultimately patient harm. Joint Commission surveyors closely inspect transport practices during tracers.",
    sections: [
      {
        heading: "Point-of-Use Treatment",
        content: "The moment a surgical case ends, the clock starts. Gross bioburden — blood, tissue, bone fragments — must be removed from instruments immediately at the point of use. This is not optional and cannot be deferred to SPD. When organic material dries on instrument surfaces, it becomes exponentially harder to remove during decontamination, and standard cleaning processes may fail to reach it. The process involves: (1) wipe off visible debris, (2) spray all surfaces with enzymatic pre-cleaner solution, (3) ensure solution contacts all crevices, box locks, and lumens. Pre-cleaner solution must always be available in the soiled utility room and stocked near the OR. Enzymatic sprays break down proteins and prevent bioburden from adhering during transport.",
        criticalValues: [
          { label: "When to treat", value: "Immediately after case ends — never allow bioburden to dry" },
          { label: "Solution", value: "Enzymatic pre-cleaner spray" },
          { label: "Target areas", value: "All surfaces, box locks, jaws, lumens, and crevices" }
        ],
        thinkAboutIt: "A scrub tech finishes a long orthopedic case and is running late for the next setup. They decide to just put instruments in the bin without spraying enzymatic cleaner first. What risks does this create for the decontamination process downstream?"
      },
      {
        heading: "Instrument Positioning for Transport",
        content: "All hinged instruments — scissors, clamps, hemostats, needle holders — must be placed in the open or unhinged position before transport. This is essential because box locks (the hinged joint mechanism) trap bioburden when locked. If instruments arrive at SPD in the closed position, the cleaning process cannot effectively reach those hidden surfaces. Additionally, heavy instruments must be placed on the bottom of the transport tray to prevent crushing or damaging lighter, more delicate instruments above them. Improper stacking leads to bent tips, misaligned jaws, and premature instrument failure.",
        criticalValues: [
          { label: "Hinged instruments", value: "Must be open/unhinged — never locked closed" },
          { label: "Heavy instruments", value: "Bottom of the tray" },
          { label: "Delicate instruments", value: "Top of the tray, protected from crushing" }
        ],
        thinkAboutIt: "You're helping break down an instrument tray and notice several hemostats are still clamped shut with tissue in the jaws. What's the correct action before placing them in the transport container?"
      },
      {
        heading: "Containment Requirements",
        content: "Soiled instruments must be transported in rigid, leak-proof containers with secure lids. At Midwest Orthopedic, these are the red rigid bins with lids. The lid must be firmly secured AFTER enzymatic spray has been applied. This serves two purposes: (1) it prevents splashing and aerosolization of contaminated fluids during transport, and (2) it keeps the enzymatic solution in contact with instruments. Biohazard bags may also be used but must be sealed. Containers must never be overfilled to the point where the lid cannot close properly. Clean red bins/rigid containers, when not in use, must be stored in the clean supply room — never in the soiled utility room where they could become contaminated.",
        criticalValues: [
          { label: "Container type", value: "Red rigid bins with lids (leak-proof)" },
          { label: "Lid timing", value: "Secured AFTER enzymatic spray applied" },
          { label: "Clean bin storage", value: "Clean supply room only — never in soiled areas" }
        ]
      },
      {
        heading: "PPE Requirements for Handling",
        content: "Anyone handling contaminated instruments must wear full Personal Protective Equipment. This is not discretionary — it's a safety requirement enforced by OSHA's Bloodborne Pathogens Standard and Joint Commission standards. Full PPE includes: (1) gloves appropriate for the task, (2) fluid-resistant gown, (3) face shield or goggles for splash protection, (4) surgical mask. PPE must be readily available in the soiled utility room at all times. Staff should don PPE before handling any contaminated items and doff it properly after, following the correct sequence to avoid self-contamination. Applying enzymatic spray without gloves is a safety violation.",
        criticalValues: [
          { label: "Required PPE", value: "Gloves, gown, face shield/goggles, mask" },
          { label: "Availability", value: "Must be stocked and accessible in soiled utility room" },
          { label: "When to wear", value: "Before ANY contact with contaminated instruments" }
        ]
      },
      {
        heading: "Transport Pathways & Traffic Patterns",
        content: "Soiled instruments must travel through designated soiled corridors only. They must never pass through clean cores, sterile storage areas, or patient care areas. This one-way traffic flow is a fundamental principle of infection prevention — keeping contaminated items separated from clean environments at all times. Most facilities have clearly marked soiled and clean corridors. If your facility uses color-coded pathways or signage, follow them without exception. Even if a soiled corridor route is longer, it must be used. Taking shortcuts through clean areas creates cross-contamination risk and is a direct Joint Commission finding.",
        thinkAboutIt: "The soiled corridor is temporarily blocked by a construction barrier. A tech decides to take the instruments through the clean core 'just this once' since it's faster. What should you do if you witness this?"
      },
      {
        heading: "Soiled Utility Room Standards",
        content: "The soiled utility room is the staging area for contaminated instruments before transport to SPD. It must be properly equipped at all times with: pre-cleaner/enzymatic solution, full PPE supplies, waste receptacles, sharps containers, hand hygiene stations, and biohazard bags. The room must be maintained in a clean and orderly condition despite handling soiled items. The workflow in this room follows a specific sequence: (1) receive soiled instruments, (2) remove remaining gross bioburden, (3) open all hinged instruments, (4) apply enzymatic spray, (5) place in container/biohazard bag, (6) secure lid, (7) stage for transport to SPD via soiled corridor.",
        criticalValues: [
          { label: "Required supplies", value: "PPE, pre-cleaner, waste receptacles, sharps containers, hand hygiene" },
          { label: "Clean bins", value: "Stored in clean supply room, NOT soiled utility room" },
          { label: "Workflow", value: "Debride → Open instruments → Spray → Contain → Seal → Transport" }
        ]
      }
    ],
    quickReference: [
      { fact: "Point-of-use treatment", detail: "Enzymatic spray immediately — never let bioburden dry" },
      { fact: "Instrument position", detail: "Open/unhinged, heavy on bottom, delicate on top" },
      { fact: "Transport container", detail: "Red rigid bin with secured lid" },
      { fact: "Clean bin storage", detail: "Clean supply room only" },
      { fact: "Required PPE", detail: "Gloves, gown, face shield/goggles, mask" },
      { fact: "Transport route", detail: "Soiled corridors only — never through clean areas" },
      { fact: "Soiled utility room", detail: "Must have PPE, pre-cleaner, waste, sharps, hygiene stations" }
    ]
  },
  {
    levelId: "environment",
    title: "Environment & Surfaces",
    overview: "Environmental surfaces in healthcare settings can harbor dangerous pathogens if not properly maintained. Joint Commission surveyors conduct Environment of Care (EOC) rounds specifically looking for infection prevention hazards on walls, ceilings, floors, countertops, and overhead surfaces. Understanding what constitutes a compliant environment versus a finding helps you identify and report issues before they become patient safety problems.",
    sections: [
      {
        heading: "Wall & Countertop Integrity",
        content: "Every wall, countertop, and work surface in clinical areas must be intact and impervious — meaning it can be properly cleaned and disinfected. The moment a surface develops a crack, hole, chip, or area of peeling paint, it can no longer be effectively disinfected. Biofilm and pathogens can colonize these damaged areas and resist standard cleaning. Tape residue is one of the most common findings during EOC rounds. When tape is applied directly to walls (for signage, tubing, etc.) and later removed, the sticky residue left behind traps dust and microorganisms. This makes the surface non-impervious. All tape residue must be removed, and staff should use approved mounting methods instead of tape on walls.",
        criticalValues: [
          { label: "Surface standard", value: "Intact, smooth, impervious (cleanable)" },
          { label: "Common violations", value: "Tape residue, holes, cracks, chips, peeling paint" },
          { label: "Action required", value: "Report immediately for repair" }
        ],
        thinkAboutIt: "During a walkthrough, you notice someone has taped a holiday card to the wall in a pre-op area. The card looks nice but the tape will leave residue. What's the appropriate response?"
      },
      {
        heading: "Ceiling Tile Requirements",
        content: "Ceiling tiles in all clinical areas must be intact, unstained, properly seated in the grid, and free of damage. This is one of the highest-priority items during EOC rounds. Cracked or damaged tiles can harbor mold, dust, and pathogens in their porous surfaces. Stained tiles are especially concerning because they often indicate water damage or active leaks from plumbing above the ceiling. Water damage above ceiling tiles creates conditions for mold growth, which can spread spores into patient care areas. Missing or displaced tiles expose the plenum space above, which is not a clean environment. Any ceiling tile issue must be reported immediately — never cover it with tape or ignore it.",
        criticalValues: [
          { label: "Tile standard", value: "Intact, unstained, properly seated in grid" },
          { label: "Stained tiles", value: "May indicate water leak — report immediately" },
          { label: "Missing/displaced tiles", value: "Expose unclean plenum — critical finding" }
        ]
      },
      {
        heading: "Dust & Overhead Surface Management",
        content: "All overhead surfaces must be free of visible dust. This includes light fixtures, surgical booms, shelving units, air vents/diffusers, picture frames, monitor arms, and the tops of crash carts and supply cabinets. Dust is not merely a housekeeping issue — it harbors microorganisms that can become airborne and settle into sterile fields, wound sites, or respiratory equipment. Regular cleaning schedules must include both high-touch surfaces and overhead surfaces. Many facilities use a documented schedule for overhead cleaning that includes monthly or quarterly deep cleaning of all elevated surfaces. If you can see dust on any overhead surface in a clinical area, it's a finding.",
        thinkAboutIt: "You pull down a piece of equipment from an overhead boom and notice a visible layer of dust on its surface. The equipment is needed for the next case. What do you do before using it?"
      },
      {
        heading: "Environment of Care (EOC) Rounds",
        content: "EOC rounds are systematic inspections conducted regularly to identify infection prevention and safety hazards. During these rounds, inspectors look for: tape residue on walls, visible dust on fixtures and overhead surfaces, damaged or stained ceiling tiles, holes in walls or countertops, improperly stored supplies, furniture with torn or cracked coverings (non-impervious), rust on metal equipment or fixtures, improper waste segregation, and blocked safety equipment. What is NOT typically flagged: minor floor scuffs from normal foot traffic and wheeled equipment are considered normal wear and are not infection prevention hazards. However, damaged cove base, standing water, or significant floor damage would be flagged.",
        criticalValues: [
          { label: "Flagged items", value: "Tape residue, dust, damaged tiles, holes, torn furniture, rust" },
          { label: "NOT flagged", value: "Minor floor scuffs from normal wear" },
          { label: "Frequency", value: "Regular scheduled rounds with documentation" }
        ]
      },
      {
        heading: "Floor & Baseboard Standards",
        content: "Floors must be clean, dry, and in good repair. Cove base (baseboards) must be intact and properly sealed to the wall and floor. Damaged cove base is a significant finding because it allows water, cleaning solutions, and contaminants to seep behind the wall, creating hidden moisture conditions ideal for mold growth. Standing water on floors is never acceptable in clinical areas. Floors should be free of debris and trip hazards. While minor scuff marks from normal use are acceptable, any damage that compromises the integrity of the floor surface (cracks, gaps, missing sections) must be reported and repaired.",
        criticalValues: [
          { label: "Floor standard", value: "Clean, dry, intact, free of standing water" },
          { label: "Cove base", value: "Intact and sealed — prevents moisture infiltration" },
          { label: "Damaged cove base", value: "Report immediately — mold risk" }
        ]
      },
      {
        heading: "Furniture & Equipment Surfaces",
        content: "All furniture in clinical areas — chairs, exam tables, stretchers, recliners — must have intact, non-porous, impervious coverings. Torn, cracked, or worn vinyl/upholstery creates surfaces that cannot be properly disinfected. Exposed foam or fabric absorbs body fluids and harbors pathogens. Any furniture with compromised covering must be removed from service and either reupholstered or replaced. Metal equipment must be free of rust, which indicates corrosion that cannot be effectively cleaned. Equipment with rust must be evaluated and potentially removed from service.",
        thinkAboutIt: "A favorite recliner in the recovery area has a small tear in the vinyl. Staff say it's comfortable and patients like it. Why can't you just put tape over the tear?"
      }
    ],
    quickReference: [
      { fact: "Wall surfaces", detail: "Intact, impervious, no tape residue, holes, or cracks" },
      { fact: "Ceiling tiles", detail: "Intact, unstained, properly seated — stains = possible water leak" },
      { fact: "Overhead surfaces", detail: "Must be free of visible dust" },
      { fact: "Floor scuffs", detail: "Minor scuffs OK — damaged cove base, standing water NOT OK" },
      { fact: "Furniture", detail: "No torn, cracked, or worn coverings — must be impervious" },
      { fact: "Rust on equipment", detail: "Remove from service for evaluation" },
      { fact: "EOC rounds focus", detail: "Infection prevention hazards, not cosmetic wear" }
    ]
  },
  {
    levelId: "segregation",
    title: "Clean/Dirty Segregation",
    overview: "The separation of clean and soiled items is a foundational principle of infection prevention. Joint Commission standards require that clean supplies, sterile instruments, and soiled/contaminated materials never share the same space, storage area, sink, or transport path. This chapter covers the rules for clean/dirty segregation in utility rooms, sinks, storage areas, and clinical spaces. Violations in this area are among the most commonly cited Joint Commission findings.",
    sections: [
      {
        heading: "The Clean/Dirty Separation Principle",
        content: "At its core, this principle is simple: clean and soiled items must never occupy the same space at the same time. This applies to every aspect of healthcare operations — from instrument transport to supply storage to patient care. Clean items include sterile supplies, medications, clean linens, and prepared patient care items. Soiled items include used instruments, contaminated linens, waste, and any item that has been exposed to body fluids. The separation must be maintained in storage rooms, on transport carts, in sinks, and during procedures. Cross-contamination can occur through direct contact, shared surfaces, airborne particles, or splash/spray.",
        thinkAboutIt: "A nurse places a bag of clean linens on a counter next to a basin of soiled wound dressings. Even though the items aren't touching, why is this a problem?"
      },
      {
        heading: "Utility Room Requirements",
        content: "Facilities must have separate clean utility rooms and soiled utility rooms. These rooms serve distinctly different purposes and their contents must never be mixed. The clean utility room stores: clean supplies, prepared medications, clean equipment, clean transport containers. The soiled utility room contains: soiled linen hampers, waste receptacles, contaminated equipment staging, instrument pre-treatment supplies, and hand hygiene stations. Items from a soiled utility room must never be stored in or pass through the clean utility room, and vice versa. Each room should be clearly labeled and staff must be trained on the appropriate use of each room.",
        criticalValues: [
          { label: "Clean utility room", value: "Clean supplies, meds, equipment, transport containers" },
          { label: "Soiled utility room", value: "Soiled linens, waste, contaminated equipment staging" },
          { label: "Golden rule", value: "Never mix contents or purposes of clean and soiled rooms" }
        ]
      },
      {
        heading: "Sink Designation & Use",
        content: "Sinks in clinical areas are designated for specific purposes and those designations must be followed without exception. A sink designated for handwashing must only be used for handwashing. A sink designated for instrument cleaning must only be used for instrument cleaning. A sink designated for patient care (such as filling water pitchers) must never be used for disposing of body fluids. Using a handwashing sink to rinse contaminated items contaminates the sink and creates cross-infection risk. Sink designations should be clearly posted. If a sink is not labeled, staff should know its designated purpose based on its location and training.",
        criticalValues: [
          { label: "Handwashing sinks", value: "Handwashing ONLY — no instrument rinsing, no disposal" },
          { label: "Instrument sinks", value: "Instrument processing only" },
          { label: "Labeling", value: "All sinks should have clear purpose designation" }
        ],
        thinkAboutIt: "You need to quickly rinse a bedpan but the designated hopper is being used. The handwashing sink nearby is available. Why can't you use it 'just this once'?"
      },
      {
        heading: "Storage Height & Floor Clearance",
        content: "Supplies must never be stored directly on the floor. All items must be stored at least 6-8 inches off the floor on shelving or carts. This clearance is necessary for: (1) allowing proper floor cleaning underneath, (2) preventing contamination from floor-cleaning solutions and splash, (3) facilitating pest control inspections, and (4) keeping supplies above any standing water in the event of a spill or flood. Additionally, nothing should ever be stored under sinks. The area under sinks is prone to moisture, condensation, and potential leaks — all of which can contaminate stored supplies. Items stored under sinks is one of the most common Joint Commission findings.",
        criticalValues: [
          { label: "Floor clearance", value: "6-8 inches minimum" },
          { label: "Under sinks", value: "NEVER store anything under sinks" },
          { label: "Why clearance matters", value: "Floor cleaning, splash protection, pest control" }
        ]
      },
      {
        heading: "Food & Beverage Restrictions",
        content: "Food and beverages are strictly prohibited in all clinical areas, medication rooms, labs, and anywhere patient care occurs. This includes: staff personal drinks (even with lids), food containers, and any eating or drinking. Food and beverages may only be consumed in designated break rooms or cafeteria areas. The reason is twofold: (1) food and drink containers can become contaminated with pathogens present in clinical areas, putting staff at risk of ingestion exposure, and (2) food particles attract pests and create surfaces that harbor bacteria. Even a water bottle with a sealed lid in a med room is a finding because it normalizes having personal items in clinical spaces.",
        thinkAboutIt: "A colleague argues that their sealed water bottle on the nursing station counter is fine because it has a lid. What would you tell them about why this is still a violation?"
      },
      {
        heading: "Linen & Supply Transport Separation",
        content: "Clean and soiled linens must be transported separately and must never be on the same cart at the same time. Clean linen carts must be covered or enclosed during transport to prevent contamination from airborne particles. Soiled linen hampers must be covered and transported via soiled corridors when possible. The same cart should not be used for both clean and soiled transport without thorough cleaning and disinfection between uses. Clean supplies being transported should be covered or wrapped to prevent contamination. Multi-use supply carts in patient care areas must be regularly cleaned and disinfected.",
        criticalValues: [
          { label: "Clean linen transport", value: "Covered/enclosed carts, clean corridors" },
          { label: "Soiled linen transport", value: "Covered hampers, soiled corridors" },
          { label: "Same cart for both?", value: "Only after thorough cleaning/disinfection between uses" }
        ]
      }
    ],
    quickReference: [
      { fact: "Core principle", detail: "Clean and soiled items NEVER share space, sinks, or transport" },
      { fact: "Floor storage", detail: "Nothing on the floor — 6-8 inch clearance required" },
      { fact: "Under sinks", detail: "NEVER store anything under sinks" },
      { fact: "Sink designation", detail: "Use sinks only for their designated purpose" },
      { fact: "Food/drinks", detail: "Prohibited in ALL clinical areas — break rooms only" },
      { fact: "Clean utility room", detail: "Clean supplies only — never soiled items" },
      { fact: "Soiled utility room", detail: "Soiled items, PPE, pre-cleaner, waste only" }
    ]
  },
  {
    levelId: "sterile_storage",
    title: "Sterile Storage & Handling",
    overview: "Sterile storage is where processed instruments and supplies await their next use. This area must maintain strict environmental controls and organizational standards to ensure that items remain sterile until the moment they're needed. Joint Commission standards for sterile storage cover everything from shelving requirements and package labeling to temperature/humidity monitoring and stock rotation. A single failure in sterile storage can result in a patient receiving a non-sterile item, leading to surgical site infection.",
    sections: [
      {
        heading: "Event-Related Sterility",
        content: "Modern sterile storage follows the event-related sterility principle: items remain sterile until an event compromises the packaging. Unlike the old practice of assigning expiration dates to sterile packs, event-related sterility recognizes that a properly packaged and stored item stays sterile indefinitely — unless something happens to damage the barrier. Events that compromise sterility include: torn or punctured packaging, moisture exposure, dropping the package, crush damage, seal failure, or environmental contamination. However, items stored for extended periods (over 1 year) should be re-inspected before use to verify package integrity, as long storage increases the chance of unnoticed damage.",
        criticalValues: [
          { label: "Sterility principle", value: "Event-related — sterile until packaging is compromised" },
          { label: "Compromising events", value: "Tears, moisture, drops, crush, seal failure" },
          { label: "Long storage", value: "Re-inspect items stored over 1 year" }
        ],
        thinkAboutIt: "A sterile pack has been on the shelf for 8 months with no expiration date printed on it. A colleague says it must be expired. How would you explain event-related sterility to them?"
      },
      {
        heading: "Prohibited Materials: Corrugated Cardboard",
        content: "Corrugated cardboard is strictly prohibited in sterile storage areas, OR suites, and SPD clean areas. This is an absolute rule with no exceptions. Corrugated cardboard cannot be properly cleaned or disinfected due to its porous, layered structure. It harbors dust, insects, mold spores, and bacteria between its layers. Even 'clean-looking' cardboard can contain contaminants. Shipping boxes must be broken down and removed in a receiving/staging area before supplies enter sterile storage. Items must be transferred to approved shelving or storage containers. Smooth-surfaced rigid containers and plastic bins are acceptable alternatives.",
        criticalValues: [
          { label: "Corrugated cardboard", value: "NEVER allowed in sterile storage, OR, or SPD clean areas" },
          { label: "Why prohibited", value: "Porous, harbors dust/insects/mold, cannot be disinfected" },
          { label: "Alternative", value: "Remove from cardboard in staging area, use approved containers" }
        ]
      },
      {
        heading: "Shelving & Physical Requirements",
        content: "Sterile storage areas must use wire shelving (which allows air circulation and visibility for cleaning). The bottom shelf must have a solid surface (shelf liner or solid shelf) to prevent items from contacting dust that settles on the floor below. Items must be stored 8-10 inches off the floor on the lowest shelf. The top of stored items must be at least 18 inches below ceiling-mounted sprinkler heads — this clearance is required by fire code to allow sprinkler spray patterns to function properly. Shelving must be clean and in good repair. Peel packs must be stored standing upright or stacked no more than 2 high to prevent crushing seal integrity.",
        criticalValues: [
          { label: "Shelving type", value: "Wire shelving with solid bottom shelf" },
          { label: "Floor clearance", value: "8-10 inches from floor" },
          { label: "Sprinkler clearance", value: "18 inches below sprinkler heads" },
          { label: "Peel pack stacking", value: "Maximum 2 high" }
        ]
      },
      {
        heading: "Environmental Controls",
        content: "Sterile storage areas require specific environmental conditions that must be monitored and documented. Temperature must be maintained between 68-75°F (20-24°C). Relative humidity must be kept between 20-60%. These ranges prevent condensation (which can wet and compromise sterile packaging), inhibit microbial growth, and maintain packaging material integrity. Temperature and humidity must be checked and logged daily (or continuously monitored with an automated system). If conditions fall outside these ranges, a corrective action plan must be implemented. Excessive humidity is particularly dangerous because moisture can wick through packaging materials and compromise sterility.",
        criticalValues: [
          { label: "Temperature", value: "68-75°F (20-24°C)" },
          { label: "Humidity", value: "20-60% relative humidity" },
          { label: "Monitoring", value: "Daily checks with documentation" },
          { label: "Humidity risk", value: "Moisture wicks through packaging, breaks sterile barrier" }
        ]
      },
      {
        heading: "Package Labeling Requirements",
        content: "Every sterile pack processed in-house must be labeled with three critical pieces of information: (1) the sterilizer identification number (which sterilizer was used), (2) the load number (which cycle/load within that sterilizer), and (3) the date of sterilization. This labeling enables traceability — if a sterilizer's biological indicator (BI) test later shows a failure, staff can identify every item from that specific load and pull them from service. Without proper labeling, a BI failure could mean pulling ALL sterile inventory because you can't determine which items were in the affected load. Labels must be clearly legible. Chemical indicators (CI) must also be present showing exposure to sterilization conditions.",
        criticalValues: [
          { label: "Required label info", value: "Sterilizer ID + Load number + Date" },
          { label: "Purpose", value: "Traceability for BI failure recalls" },
          { label: "Chemical indicator", value: "Must be present and show exposure" }
        ],
        thinkAboutIt: "A biological indicator test comes back positive 48 hours after the load was processed. Without load numbers on the packs, what would the facility have to do? Why does proper labeling save time, money, and patient safety?"
      },
      {
        heading: "Stock Rotation (FIFO)",
        content: "Sterile storage must follow FIFO — First In, First Out — rotation. When new sterile items are added to shelves, they go to the back, and older items are moved to the front. This ensures that items with the longest storage time are used first, reducing the chance that packages sit for extended periods and develop unnoticed damage. Items that have been stored for more than 1 year should be re-inspected for packaging integrity before use (verify seals, check for moisture damage, ensure chemical indicators are intact). FIFO rotation should be a documented practice with regular audits to verify compliance.",
        criticalValues: [
          { label: "Rotation method", value: "FIFO — First In, First Out" },
          { label: "New stock placement", value: "Goes to the BACK of the shelf" },
          { label: "Items over 1 year", value: "Re-inspect before use" }
        ]
      }
    ],
    quickReference: [
      { fact: "Sterility principle", detail: "Event-related — sterile until an event compromises the package" },
      { fact: "Corrugated cardboard", detail: "NEVER allowed in sterile storage, OR, or SPD" },
      { fact: "Temperature range", detail: "68-75°F (20-24°C)" },
      { fact: "Humidity range", detail: "20-60% relative humidity" },
      { fact: "Floor clearance", detail: "8-10 inches on bottom shelf" },
      { fact: "Sprinkler clearance", detail: "18 inches below sprinkler heads" },
      { fact: "Peel packs", detail: "Maximum 2 high" },
      { fact: "Pack labeling", detail: "Sterilizer ID + Load number + Date" },
      { fact: "Stock rotation", detail: "FIFO — First In, First Out" },
      { fact: "Shelving", detail: "Wire shelving, solid bottom shelf" }
    ]
  },
  {
    levelId: "instruments",
    title: "Instruments & Inspection",
    overview: "Every surgical instrument must be thoroughly inspected before packaging and sterilization. Damaged, corroded, or malfunctioning instruments can fail during surgery, harbor pathogens that survive sterilization, or compromise sterile packaging. This chapter covers visual inspection standards, rust and corrosion identification, peel pack requirements, and FDA compliance for instrument sourcing.",
    sections: [
      {
        heading: "Visual Inspection Standards",
        content: "Every instrument must be visually inspected after cleaning and before packaging for sterilization. Inspection must check for: residual bioburden, rust or corrosion (any orange/brown discoloration), proper function (scissors cut, clamps hold, ratchets lock at each position), alignment (jaw tips meet properly), surface damage, and cleanliness of all surfaces. Lighted magnification must be available and used at the assembly/inspection station. This is not optional — the human eye cannot detect fine residual bioburden or micro-damage without magnification. Inspection should follow a systematic approach: check the entire instrument from tip to handle, including box locks, serrations, and lumens.",
        criticalValues: [
          { label: "Inspection timing", value: "After cleaning, before packaging" },
          { label: "Required tool", value: "Lighted magnification at inspection station" },
          { label: "Check points", value: "Bioburden, rust, function, alignment, surface condition" }
        ],
        thinkAboutIt: "An inspector finds a hemostat where the jaws don't align perfectly at the tips — they're off by about 1mm. The ratchets still lock. Should this instrument be used or removed from service?"
      },
      {
        heading: "Rust & Corrosion Identification",
        content: "Rust is identified by any orange, brown, or reddish-brown discoloration on metal instrument surfaces. Rust is a form of corrosion that creates a porous, irregular surface texture. This porous surface cannot be effectively sterilized because microorganisms can hide within the surface pits and crevices where sterilant cannot reach. ANY instrument with rust must be immediately removed from service. There is no acceptable level of rust on surgical instruments. The instrument should be tagged, documented, and sent for evaluation. Surface rust sometimes appears after exposure to certain tap water minerals or incompatible cleaning chemicals. Using treated water (RO, DI, or distilled) for final rinse helps prevent this.",
        criticalValues: [
          { label: "Rust identification", value: "Any orange/brown/reddish-brown discoloration" },
          { label: "Action", value: "Remove from service IMMEDIATELY" },
          { label: "Why critical", value: "Porous surface cannot be sterilized — harbors pathogens" },
          { label: "Prevention", value: "Use treated water for final rinse (RO/DI/distilled)" }
        ]
      },
      {
        heading: "Surface Etching & Chemical Damage",
        content: "Etching appears as a dulling, frosting, or pitting of the instrument surface. Unlike rust which is biological corrosion, etching is typically caused by chemical damage from improper detergent concentrations, incompatible cleaning chemicals, prolonged exposure to disinfectants, or using chlorine-based cleaners on stainless steel. Etched surfaces are permanently damaged — the smooth, passivated surface layer of the stainless steel has been destroyed. Like rust, etched surfaces create micro-pits that can harbor microorganisms and resist sterilization. Instruments with etching must be removed from service and sent for evaluation. Prevention includes following IFU (Instructions for Use) for all cleaning chemicals exactly.",
        criticalValues: [
          { label: "Etching appearance", value: "Dulling, frosting, or pitting of metal surface" },
          { label: "Cause", value: "Chemical damage from improper detergent/disinfectant use" },
          { label: "Action", value: "Remove from service for evaluation" },
          { label: "Prevention", value: "Follow chemical IFU exactly — correct dilution, time, temperature" }
        ]
      },
      {
        heading: "Peel Pack Standards",
        content: "Peel packs (also called peel pouches) are the transparent/paper packaging used for individual instruments or small sets. Inspection of peel packs before use must verify: (1) the seal is intact and continuous with no channels or gaps, (2) the chemical indicator has changed color appropriately (showing exposure to sterilization conditions), (3) the instrument is positioned correctly inside (not touching the seal area, not puncturing the pack), and (4) the instrument itself is in good condition. Peel packs must be stored flat or standing upright, stacked no more than 2 high. Using sharp-edged instrument racks that could puncture packs during storage is not acceptable.",
        criticalValues: [
          { label: "Seal", value: "Intact, continuous, no channels or gaps" },
          { label: "Chemical indicator", value: "Must show appropriate color change" },
          { label: "Instrument position", value: "Not touching seal, not puncturing pack" },
          { label: "Storage", value: "Max 2 high, no sharp-edged racks" }
        ]
      },
      {
        heading: "FDA Compliance & Single-Use Instruments",
        content: "All surgical instruments used in the facility must be FDA-cleared for their intended use. This means the manufacturer has demonstrated the instrument's safety and effectiveness to the FDA. Instruments marked with a Pakistan origin stamp or that lack FDA clearance documentation are considered single-use only and must never be reprocessed (cleaned and re-sterilized for another patient). Using non-FDA-cleared instruments as reusable devices is a serious regulatory violation. Additionally, single-use devices (marked with a '2' with a line through it symbol) must be discarded after one use — they cannot be reprocessed even if they appear undamaged.",
        criticalValues: [
          { label: "FDA requirement", value: "ALL instruments must be FDA-cleared" },
          { label: "Pakistan-marked instruments", value: "Single-use ONLY — do not reprocess" },
          { label: "Single-use symbol", value: "'2' with line through it = discard after one use" },
          { label: "Peel pack eligibility", value: "Only FDA-cleared reusable instruments" }
        ],
        thinkAboutIt: "A new shipment of instruments arrives and some are labeled 'Made in Pakistan' with no FDA clearance documentation. A surgeon wants to use them repeatedly because they look identical to the FDA-cleared version. What's the correct response?"
      }
    ],
    quickReference: [
      { fact: "Inspection tool", detail: "Lighted magnification required at assembly station" },
      { fact: "Rust", detail: "Any orange/brown staining = remove from service immediately" },
      { fact: "Etching", detail: "Dulling/frosting of surface = chemical damage, remove from service" },
      { fact: "Peel pack storage", detail: "Maximum 2 high, no sharp-edged racks" },
      { fact: "Peel pack seal", detail: "Must be intact, continuous, no channels" },
      { fact: "Chemical indicator", detail: "Must show proper color change" },
      { fact: "FDA compliance", detail: "ALL instruments must be FDA-cleared" },
      { fact: "Pakistan instruments", detail: "Single-use only — never reprocess" }
    ]
  },
  {
    levelId: "facilities",
    title: "Facility Safety & Equipment",
    overview: "Healthcare facility safety encompasses warming equipment, gas cylinder management, electrical systems, fire safety, emergency equipment, and clinical device management. Joint Commission surveys examine these areas intensively because failures can directly cause patient injury, fire, or death. This chapter covers the specific temperature limits, clearance requirements, and safety protocols that every staff member must know.",
    sections: [
      {
        heading: "Blanket & Fluid Warmers",
        content: "Warming cabinets are among the most frequently cited items in Joint Commission surveys because their misuse creates direct patient safety risks. Blanket warmers must be set to a maximum of 130°F. ONLY blankets may be stored in blanket warmers — no IV fluids, irrigation solutions, or any liquids. Placing fluids in a blanket warmer risks overheating them beyond safe infusion/irrigation temperatures and can cause thermal burns. Fluid warmers are separate devices set to a maximum of 110°F. Only fluids may be placed in fluid warmers. All fluids in warmers must be dated when placed inside and must be used before their expiration date (check manufacturer's IFU for specific time limits after warming). Expired or undated fluids must be removed and discarded.",
        criticalValues: [
          { label: "Blanket warmer max", value: "130°F — blankets ONLY, no fluids" },
          { label: "Fluid warmer max", value: "110°F — fluids ONLY, must be dated" },
          { label: "Dated fluids", value: "Must have date placed in warmer + check expiration" },
          { label: "Expired/undated", value: "Remove and discard immediately" }
        ],
        thinkAboutIt: "A nurse places a bag of IV normal saline in the blanket warmer because the fluid warmer is full. 'It's just for a few minutes,' they say. Why is this dangerous?"
      },
      {
        heading: "Oxygen Cylinder Safety",
        content: "Compressed oxygen is an oxidizer that dramatically accelerates combustion. Oxygen cylinders require specific storage and handling protocols. Full (green cap/tag) cylinders must be segregated from partially full and empty cylinders — they should not be stored together. A maximum of 12 full-size oxygen cylinders may be stored in non-hazardous (non-patient care) areas outside of approved cylinder storage rooms. Cylinders must be secured in approved stands, racks, or chained to prevent falling. They must be stored away from heat sources and combustible materials. Empty cylinders should be clearly marked as empty and returned to the supplier promptly.",
        criticalValues: [
          { label: "Max cylinders", value: "12 full-size in non-hazardous areas" },
          { label: "Segregation", value: "Full cylinders separated from partial/empty" },
          { label: "Security", value: "Must be secured in stands/racks or chained" },
          { label: "Hazard", value: "Oxidizer — accelerates combustion" }
        ]
      },
      {
        heading: "Electrical Panel & Fire Equipment Clearances",
        content: "Three-foot clearance is one of the most important numbers in facility safety. Electrical panels must have 3 feet of clear, unobstructed space in front of them at all times. This clearance allows maintenance personnel and emergency responders to quickly access panels to shut off power during emergencies. Electrical panels must also be kept locked to prevent unauthorized access. The same 3-foot clearance applies to fire extinguishers, fire alarm pull stations, and medical gas shut-off panels. Items stored in front of this equipment — even temporarily — can delay emergency response and are a critical Joint Commission finding. Storage of any items within the 3-foot zone is never acceptable.",
        criticalValues: [
          { label: "Required clearance", value: "3 feet for electrical panels, fire pulls, extinguishers, gas panels" },
          { label: "Electrical panels", value: "Must be LOCKED and have 3-ft clearance" },
          { label: "Sprinkler clearance", value: "18 inches below all sprinkler heads" }
        ]
      },
      {
        heading: "Code Cart & Emergency Equipment",
        content: "Code carts (crash carts) must be maintained in a state of constant readiness. They must be plugged into red (emergency power) outlets so that the defibrillator battery stays charged even during a power outage. Documentation checks must be current — this typically means daily checks verifying the cart is sealed/locked, all supplies are present, and the defibrillator is functional. Expired supplies on a code cart are a critical finding. Call cords (nurse call devices) in patient areas must be accessible to patients — they must hang no more than 6 inches from the floor so a patient who has fallen can still reach them. Call cords must never be wrapped up or tied out of reach.",
        criticalValues: [
          { label: "Code cart outlet", value: "RED (emergency power) outlets only" },
          { label: "Documentation", value: "Daily checks required" },
          { label: "Call cord position", value: "Within 6 inches of the floor" },
          { label: "Call cord rule", value: "Never wrapped up or tied out of reach" }
        ]
      },
      {
        heading: "Clinical Device Management",
        content: "Clinical devices require specific cleaning protocols and dating. Glucometers must be cleaned between each patient use with the correct disinfectant and contact time: Yellow Top Bleach requires 4 minutes of wet contact time, while PDI Sani-Cloth germicidal wipes require 1 minute of wet contact time. Using the wrong contact time means the device is not properly disinfected and could transmit infections between patients. Ultrasound gel must be dated when opened and discarded 28 days after opening (single-patient use gel is exempt). Multi-dose vials must be dated when opened and used per manufacturer's guidelines. All medications, supplies, and solutions must be checked for expiration dates before use.",
        criticalValues: [
          { label: "Glucometer + Yellow Top Bleach", value: "4 minutes wet contact time" },
          { label: "Glucometer + PDI Sani-Cloth", value: "1 minute wet contact time" },
          { label: "Ultrasound gel", value: "28 days after opening" },
          { label: "All supplies", value: "Must be within expiration date" }
        ],
        thinkAboutIt: "After checking a patient's blood glucose, you wipe the glucometer with a PDI Sani-Cloth and move to the next patient 30 seconds later. What did you do wrong?"
      },
      {
        heading: "Temperature Monitoring",
        content: "Refrigerators containing medications or biological specimens must have temperature checks documented daily. Temperatures must remain within the specified range for the contents (typically 36-46°F for medication refrigerators). Out-of-range temperatures require corrective action documentation and potentially discarding affected contents. Food refrigerators in patient nutrition areas also require daily temperature checks. Warming cabinets (blanket and fluid) should also have regular temperature verification to ensure they haven't drifted above maximum limits.",
        criticalValues: [
          { label: "Medication fridge", value: "Daily temperature checks documented" },
          { label: "Typical range", value: "36-46°F (check specific requirements)" },
          { label: "Out of range", value: "Corrective action required, contents may need to be discarded" }
        ]
      }
    ],
    quickReference: [
      { fact: "Blanket warmer", detail: "≤130°F, blankets ONLY, no fluids ever" },
      { fact: "Fluid warmer", detail: "≤110°F, fluids ONLY, must be dated" },
      { fact: "O₂ cylinders", detail: "Max 12 in non-hazardous areas, full separated from empty" },
      { fact: "Electrical panels", detail: "3-ft clearance, must be locked" },
      { fact: "Fire equipment", detail: "3-ft clearance for pulls, extinguishers, gas panels" },
      { fact: "Sprinkler clearance", detail: "18 inches below heads" },
      { fact: "Code carts", detail: "Red outlets, daily checks, no expired supplies" },
      { fact: "Call cords", detail: "≤6 inches from floor, never wrapped up" },
      { fact: "Glucometer cleaning", detail: "Yellow Top Bleach = 4 min, PDI Sani-Cloth = 1 min" },
      { fact: "Ultrasound gel", detail: "28 days after opening" },
      { fact: "Fridge checks", detail: "Daily temperature documentation" }
    ]
  },
  {
    levelId: "spd_decontam",
    title: "SPD & Decontamination",
    overview: "Sterile Processing Department (SPD) decontamination is where contaminated instruments are transformed back into sterile, patient-ready tools. This is one of the most heavily regulated areas in healthcare. Every step — from the decontamination room environment to enzymatic cleaning, automated processing, sterilization controls, and packaging — must follow strict protocols. Failures here can lead to surgical site infections, patient harm, and facility closure.",
    sections: [
      {
        heading: "Decontamination Room Environment",
        content: "The decontamination room must maintain negative air pressure relative to surrounding areas. This means air flows INTO the decon room, not OUT — preventing aerosolized contaminants from escaping into clean areas. You can verify negative pressure with a tissue test: hold a tissue at the bottom of the closed door — it should pull toward the decon room. If it pushes away or doesn't move, the HVAC system needs immediate attention. Full PPE is required at ALL times in the decon room: fluid-resistant gown, gloves, face shield or goggles, mask, and often shoe covers. The decon room should have emergency eyewash stations accessible within 10 seconds of travel. Temperature and humidity should be monitored for staff comfort and safety.",
        criticalValues: [
          { label: "Air pressure", value: "NEGATIVE pressure (air flows IN)" },
          { label: "Pressure test", value: "Tissue at door bottom — should pull toward decon room" },
          { label: "PPE required", value: "Gown, gloves, face shield/goggles, mask — ALL times" },
          { label: "Eyewash", value: "Within 10 seconds of travel" }
        ],
        thinkAboutIt: "You perform a tissue test at the decon room door and the tissue doesn't move. What does this indicate and what should you do?"
      },
      {
        heading: "Enzymatic Cleaning & IFU Compliance",
        content: "Enzymatic detergent is the primary cleaning agent for breaking down organic material on instruments. However, it must be used exactly according to the manufacturer's Instructions for Use (IFU). The IFU specifies: correct dilution ratio (too concentrated can damage instruments, too dilute is ineffective), correct water temperature (typically lukewarm — hot water can cook proteins onto surfaces), required soak time, how often to change the solution, and compatibility with instrument materials. Deviating from the IFU in any way is a compliance violation. Solution must be changed at the frequency specified — reusing enzymatic solution beyond its effective life means instruments are not being properly cleaned. Manual cleaning with brushes appropriate for the instrument type must precede automated processing for complex instruments.",
        criticalValues: [
          { label: "IFU compliance", value: "Follow EXACTLY — dilution, temp, soak time, change frequency" },
          { label: "Water temperature", value: "Per IFU (typically lukewarm — hot cooks proteins)" },
          { label: "Solution changes", value: "At manufacturer-specified frequency" },
          { label: "Manual cleaning", value: "Required for complex instruments before automated processing" }
        ]
      },
      {
        heading: "Automated Processing & Water Quality",
        content: "Automated washers and ultrasonic cleaners must be quality-tested daily before processing begins. Tests verify that mechanical action, temperature, and chemical delivery are functioning correctly. Records of these daily tests must be maintained. Water quality is critical: the final rinse in instrument processing must use treated water — reverse osmosis (RO), deionized (DI), or distilled water. Untreated tap water contains minerals that deposit on instrument surfaces, causing spotting, staining, and accelerated corrosion. Treated water prevents mineral deposits and ensures a residue-free final rinse. Water quality testing should be documented. Ultrasonic cleaners must be tested with aluminum foil or commercial test strips to verify cavitation.",
        criticalValues: [
          { label: "Daily testing", value: "Quality tests on ALL automated equipment before use" },
          { label: "Final rinse water", value: "Treated only — RO, DI, or distilled" },
          { label: "Tap water risk", value: "Mineral deposits cause spotting/staining/corrosion" },
          { label: "Ultrasonic testing", value: "Foil or commercial test to verify cavitation" }
        ]
      },
      {
        heading: "Sterilization Process Controls",
        content: "Sterilization is verified through three types of indicators: mechanical (reading the sterilizer gauges for correct temperature, pressure, and time), chemical (indicators that change color when exposed to sterilization conditions), and biological (BI — live spore tests that verify the sterilizer actually killed microorganisms). The Bowie-Dick test must be run daily on dynamic air removal (prevacuum) steam sterilizers — it verifies proper air removal from the chamber. Biological Indicators (BIs) must be run in EVERY load. If a BI comes back positive (spores survived), all items from that load must be recalled. Sterilizer logs must be current, complete, and include all three indicator results for every load.",
        criticalValues: [
          { label: "Bowie-Dick test", value: "Daily on prevacuum steam sterilizers" },
          { label: "Biological Indicators", value: "EVERY load — no exceptions" },
          { label: "Positive BI", value: "Recall ALL items from that load" },
          { label: "Sterilizer logs", value: "Must be current and complete — all 3 indicator types" }
        ],
        thinkAboutIt: "The sterilizer tech runs the Bowie-Dick test and it passes. They decide to skip BIs for the first few loads since 'the machine is obviously working.' Why is this unacceptable?"
      },
      {
        heading: "Packaging, Drying & Assembly",
        content: "Instruments must be completely dry before packaging. Moisture inside a sterile pack creates a pathway for microorganisms to wick through the packaging material (wet strike-through), compromising sterility. After cleaning, instruments should be dried using lint-free towels or a drying cabinet. Assembly and packaging takes place in the clean side of SPD. Lighted magnification must be available at the assembly station for instrument inspection. Instrument sets must not exceed 25 pounds — heavier sets can compromise packaging integrity and create ergonomic hazards. All packs must be labeled with sterilizer ID, load number, and date. Packaging materials must be appropriate for the sterilization method being used.",
        criticalValues: [
          { label: "Before packaging", value: "Instruments must be completely DRY" },
          { label: "Wet packs", value: "Moisture = wet strike-through = sterility compromised" },
          { label: "Max set weight", value: "25 pounds" },
          { label: "Assembly tools", value: "Lighted magnification required" },
          { label: "Pack labeling", value: "Sterilizer ID + Load number + Date" }
        ]
      }
    ],
    quickReference: [
      { fact: "Decon room pressure", detail: "Negative pressure — tissue test at door" },
      { fact: "Decon PPE", detail: "Full PPE at ALL times — gown, gloves, face shield, mask" },
      { fact: "Enzymatic cleaning", detail: "Follow IFU exactly — dilution, temp, soak time" },
      { fact: "Final rinse water", detail: "Treated water only — RO, DI, or distilled" },
      { fact: "Bowie-Dick test", detail: "Daily on prevacuum sterilizers" },
      { fact: "Biological indicators", detail: "EVERY load — recall if positive" },
      { fact: "Instruments before packaging", detail: "Must be completely dry" },
      { fact: "Max set weight", detail: "25 pounds" },
      { fact: "Assembly station", detail: "Lighted magnification required" },
      { fact: "Daily quality testing", detail: "All automated washers/ultrasonics before use" }
    ]
  },
  {
    levelId: "or_sterile_field",
    title: "OR & Sterile Technique",
    overview: "The operating room requires the highest level of infection prevention discipline. From attire standards to sterile field management, every action in the OR either protects or threatens the patient. This chapter covers OR attire requirements, sterile field integrity, surgical scrub procedures, skin preparation, draping, and medication safety in the surgical setting.",
    sections: [
      {
        heading: "Sterile Field Integrity",
        content: "The sterile field is the sacred zone around the surgical site where only sterile items may exist. Key rules: (1) Only sterile items may be placed on a sterile field. (2) Sterile team members face the sterile field at all times — turning your back to the field risks contamination. (3) Never reach over a sterile field. (4) If there's any doubt about sterility, consider the item contaminated. (5) Sterile fields should be set up as close to the time of use as possible and must be continuously monitored. (6) The edges of any sterile wrapper or drape are considered non-sterile (typically 1 inch from the edge). (7) If a sterile field is left unattended, it must be considered contaminated and re-established.",
        criticalValues: [
          { label: "Items on field", value: "ONLY sterile items" },
          { label: "Sterile team orientation", value: "Always face the sterile field" },
          { label: "Reaching", value: "NEVER reach over a sterile field" },
          { label: "Doubt", value: "If in doubt = contaminated" },
          { label: "Unattended field", value: "Considered contaminated" }
        ]
      },
      {
        heading: "OR Attire Standards",
        content: "OR attire serves as a barrier between the surgical team and the patient. Requirements include: freshly laundered facility-provided scrubs (not worn from home), surgical cap or hood that covers ALL hair (including sideburns, neckline hair, and facial hair), surgical mask worn over both mouth AND nose at all times in restricted areas, shoe covers as required by facility policy. Jewelry must not be worn in the OR — rings, bracelets, and watches harbor bacteria and can puncture sterile gloves. If earrings cannot be removed, they must be fully covered by the surgical cap. Skull caps that leave hair exposed at the sides and back are non-compliant — a bouffant cap or hood that covers all hair must be used.",
        criticalValues: [
          { label: "Scrubs", value: "Facility-provided, freshly laundered" },
          { label: "Head covering", value: "Cap/hood covering ALL hair including sideburns and neckline" },
          { label: "Mask", value: "Over mouth AND nose in restricted areas" },
          { label: "Jewelry", value: "No rings, bracelets, watches — earrings must be covered" }
        ],
        thinkAboutIt: "A surgeon prefers a skull cap that only covers the top of their head. Their sideburns and neckline hair are exposed. Why does this matter for infection prevention?"
      },
      {
        heading: "Surgical Scrub & Gowning",
        content: "The surgical hand scrub is the last line of defense before gloving. Two methods are acceptable: (1) traditional scrub with antimicrobial soap and water using a standardized technique (typically 3-5 minutes), or (2) alcohol-based surgical hand rub (following manufacturer's IFU for application technique and drying time). After scrubbing, hands must be dried with a sterile towel. Gowning and gloving takes place in the OR. The gown is considered sterile only in the front from chest to waist level and on the sleeves from 2 inches above the elbow to the cuff. The back of the gown is NOT sterile. Traffic in and out of the OR should be minimized — every door opening disrupts air pressure differentials and increases particulate counts in the room.",
        criticalValues: [
          { label: "Scrub methods", value: "Antimicrobial soap/water OR alcohol-based rub per IFU" },
          { label: "Hand drying", value: "Sterile towel only" },
          { label: "Sterile gown zones", value: "Front chest-to-waist, sleeves elbow-to-cuff" },
          { label: "OR traffic", value: "Minimize — each opening disrupts air pressure" }
        ]
      },
      {
        heading: "Skin Preparation & Draping",
        content: "Surgical skin prep must be applied to the operative site and allowed to FULLY DRY before draping. This is a critical safety requirement because many skin prep solutions contain alcohol. If the prep is still wet when electrosurgery (cautery) is used, the alcohol vapors can ignite, causing a surgical fire. The prep solution must not pool under the patient — pooling creates an additional fire risk and can cause chemical burns. Drapes must be applied in a manner that maintains the sterile field. Once drapes are placed, they should not be repositioned — moving a drape can draw contamination from non-sterile areas onto the sterile field.",
        criticalValues: [
          { label: "Skin prep drying", value: "Must be FULLY DRY before draping" },
          { label: "Fire risk", value: "Wet alcohol prep + electrosurgery = fire" },
          { label: "Pooling", value: "Prevent pooling — fire risk and chemical burn risk" },
          { label: "Drape repositioning", value: "Do NOT reposition once placed" }
        ]
      },
      {
        heading: "Medication Labeling in the OR",
        content: "ALL medications and solutions on and off the sterile field must be labeled with the medication name and strength/concentration. This applies to every syringe, basin, cup, and container. The only exception is if a medication is immediately administered by the same person who prepared it and there is only one medication being used. In practice, this exception rarely applies in the OR where multiple medications are typically present. Labels must be applied at the time of preparation. Anesthesia work surfaces must be cleaned and disinfected between every patient — this includes the anesthesia machine, monitors, IV poles, and all surfaces the anesthesia team touches during a case.",
        criticalValues: [
          { label: "Labeling rule", value: "ALL meds/solutions labeled with name + strength" },
          { label: "On sterile field", value: "Every syringe, basin, cup labeled" },
          { label: "Off sterile field", value: "Every container labeled" },
          { label: "Anesthesia surfaces", value: "Clean and disinfect between EVERY patient" }
        ]
      }
    ],
    quickReference: [
      { fact: "Sterile field items", detail: "Only sterile items — if in doubt, it's contaminated" },
      { fact: "Sterile team", detail: "Always face the field, never reach over it" },
      { fact: "Head covering", detail: "Must cover ALL hair — bouffant/hood, not skull cap alone" },
      { fact: "Mask", detail: "Over mouth AND nose in restricted areas" },
      { fact: "Jewelry in OR", detail: "Not allowed — earrings must be covered" },
      { fact: "Skin prep", detail: "Must be fully DRY before draping — fire risk" },
      { fact: "Drapes", detail: "Do not reposition once placed" },
      { fact: "Medication labels", detail: "ALL meds on and off field: name + strength" },
      { fact: "Anesthesia", detail: "Clean all surfaces between every patient" },
      { fact: "OR traffic", detail: "Minimize — disrupts air pressure and increases contamination" }
    ]
  },
  {
    levelId: "universal_protocol",
    title: "Surgical Safety & Consent",
    overview: "The Universal Protocol was developed to prevent wrong-site, wrong-procedure, and wrong-patient surgery — catastrophic events that are entirely preventable. This chapter covers the three components of the Universal Protocol (pre-procedure verification, site marking, and Time-Out), informed consent requirements, H&P documentation, and patient identification standards. These are among the most scrutinized areas during Joint Commission surveys.",
    sections: [
      {
        heading: "Universal Protocol & Time-Out",
        content: "The Time-Out is the final verification step before a procedure begins. During a Time-Out: ALL activity in the room STOPS. Every team member actively participates — this is not a passive process. The Time-Out verifies: correct patient identity (using two unique identifiers), correct procedure, correct site/side, correct position, availability of correct implants/equipment, and relevant safety concerns (allergies, antibiotics given, etc.). If ANY team member has a concern, the procedure does not proceed until the concern is resolved. The Time-Out is performed at the location where the procedure will take place, immediately before the start. It cannot be done in advance in a different location.",
        criticalValues: [
          { label: "During Time-Out", value: "ALL activity stops — no exceptions" },
          { label: "Participation", value: "EVERY team member actively participates" },
          { label: "Verifies", value: "Patient, procedure, site, position, implants, safety info" },
          { label: "Concerns", value: "Any concern = procedure stops until resolved" }
        ],
        thinkAboutIt: "During a Time-Out, the circulating nurse notices the consent form says 'right knee' but the site marking is on the left knee. The surgeon says 'I know which knee it is, let's go.' What should happen next?"
      },
      {
        heading: "Surgical Site Marking",
        content: "The operative site must be marked before the patient enters the procedure room. The patient must actively participate in the site marking process whenever possible — this is their opportunity to confirm the correct site. The mark must be made at or near the incision site, must be unambiguous (typically the surgeon's initials), and must remain visible after prepping and draping. Two unique patient identifiers must be used to verify the patient's identity before marking. Site marking is required for procedures involving laterality (left/right), multiple structures (e.g., fingers, toes), or multiple levels (e.g., spine). The mark should be made by the licensed practitioner performing the procedure or a licensed individual to whom they have delegated the task.",
        criticalValues: [
          { label: "Patient role", value: "Must participate in site marking" },
          { label: "Mark visibility", value: "Must remain visible after prep and draping" },
          { label: "Identifiers", value: "Two unique patient identifiers required" },
          { label: "Who marks", value: "Licensed practitioner performing the procedure" }
        ]
      },
      {
        heading: "Informed Consent",
        content: "Informed consent is a legal and ethical requirement ensuring patients understand and agree to their procedure. The consent form must include: the patient's full name, the complete procedure name (using full terminology — NO abbreviations), the specific site/side, the surgeon's name, and the patient's signature. The form must be signed, dated, AND timed. Using abbreviations for the procedure name is never acceptable on a consent form — 'L TKA' is not acceptable; it must read 'Left Total Knee Arthroplasty.' The consent discussion must cover: the procedure, risks, benefits, alternatives, and what to expect. Consent must be obtained before the patient is sedated.",
        criticalValues: [
          { label: "Required elements", value: "Patient name, full procedure name, site/side, surgeon, signature" },
          { label: "Form requirements", value: "Signed, dated, AND timed" },
          { label: "Abbreviations", value: "NO abbreviations for procedure names — spell it out" },
          { label: "Timing", value: "Must be obtained BEFORE sedation" }
        ]
      },
      {
        heading: "H&P and Pre-Operative Requirements",
        content: "A History & Physical (H&P) examination must be completed within 30 days prior to the procedure. If the H&P was performed more than 24 hours before the procedure, an update must be documented within 24 hours of the procedure (or before the procedure begins). The update verifies that the patient's condition has not significantly changed since the original H&P. A pre-anesthesia assessment must also be completed. Pre-operative requirements at this facility include: pre-operative pregnancy testing for applicable patients, medication reconciliation, allergy verification, NPO status verification, and pre-operative nursing assessment.",
        criticalValues: [
          { label: "H&P timing", value: "Within 30 days of procedure" },
          { label: "H&P update", value: "Within 24 hours if H&P is >24 hours old" },
          { label: "Pre-anesthesia", value: "Assessment required before anesthesia" },
          { label: "Pre-op checks", value: "Pregnancy test, med reconciliation, allergies, NPO status" }
        ]
      },
      {
        heading: "Patient Identification & Safety Screening",
        content: "Patient identification using two unique identifiers is required before every interaction involving medications, procedures, treatments, or specimen collection. Acceptable identifiers include: patient's full legal name and date of birth, patient's full legal name and medical record number, or other facility-approved combinations. Room number is NEVER an acceptable identifier. For total hip arthroplasty (THA) and total knee arthroplasty (TKA) patients, opioid use screening must be completed pre-operatively. Pain management goals must be discussed and documented prior to surgery. All patients should have their pain goal documented (the level of pain they consider acceptable for recovery).",
        criticalValues: [
          { label: "Identifiers", value: "Two unique identifiers — NEVER room number" },
          { label: "Examples", value: "Name + DOB, Name + MRN" },
          { label: "THA/TKA patients", value: "Opioid use screening required pre-op" },
          { label: "Pain management", value: "Pain goal documented before surgery" }
        ]
      }
    ],
    quickReference: [
      { fact: "Time-Out", detail: "ALL activity stops, every team member participates" },
      { fact: "Site marking", detail: "Patient participates, mark visible after draping" },
      { fact: "Identifiers", detail: "Two unique identifiers — room number is NEVER acceptable" },
      { fact: "Consent form", detail: "Signed, dated, timed — NO abbreviations for procedure" },
      { fact: "H&P timing", detail: "Within 30 days; update within 24 hours if H&P >24 hrs old" },
      { fact: "Pre-anesthesia", detail: "Assessment required before anesthesia" },
      { fact: "THA/TKA", detail: "Opioid screening required, pain goal documented" },
      { fact: "Consent timing", detail: "Before sedation" }
    ]
  },
  {
    levelId: "patient_care_docs",
    title: "Patient Care & Documentation",
    overview: "Comprehensive patient care documentation ensures continuity, safety, and regulatory compliance. This chapter covers post-anesthesia care, pain assessment protocols, medication safety, fall risk management, suicide screening, tissue tracking, and clinical record requirements. Proper documentation is both a patient safety tool and a legal record — if it wasn't documented, it didn't happen.",
    sections: [
      {
        heading: "Post-Anesthesia & Post-Op Documentation",
        content: "A post-anesthesia evaluation must be completed within 48 hours of the procedure. This evaluation must document seven required elements: respiratory function, cardiovascular function, mental status, temperature, pain level, nausea/vomiting assessment, and hydration status. The post-operative note must be documented by the surgeon and include: the name of the surgeon who performed the procedure, the procedure performed, findings, specimens removed, estimated blood loss (EBL), and the post-operative diagnosis. This note should be completed as soon as reasonably possible after the procedure and must be in the medical record before the patient is discharged.",
        criticalValues: [
          { label: "Post-anesthesia eval", value: "Within 48 hours, 7 required elements" },
          { label: "7 elements", value: "Respiratory, CV, mental status, temp, pain, N/V, hydration" },
          { label: "Post-op note", value: "Surgeon, procedure, findings, specimens, EBL, diagnosis" }
        ]
      },
      {
        heading: "Pain Assessment & Reassessment",
        content: "Pain must be assessed a minimum of 2 times within every 24-hour period for all patients. After interventions, pain must be reassessed at specific intervals: within 1 hour after IV medications, within 2 hours after oral medications, and within 4 hours after non-pharmacological interventions. Level of consciousness must be assessed before AND after administration of any opioid medication. This dual assessment helps detect over-sedation, which is a leading cause of opioid-related respiratory depression. Pain assessment tools must be appropriate for the patient population (numeric scale, FACES scale, behavioral scales for non-verbal patients).",
        criticalValues: [
          { label: "Minimum assessments", value: "2 times per 24 hours" },
          { label: "After IV meds", value: "Reassess within 1 hour" },
          { label: "After oral meds", value: "Reassess within 2 hours" },
          { label: "After non-pharm", value: "Reassess within 4 hours" },
          { label: "Opioid safety", value: "LOC assessed before AND after opioid administration" }
        ],
        thinkAboutIt: "A patient received IV morphine at 2:00 PM. The nurse documents pain reassessment at 4:30 PM. What's wrong with this timing?"
      },
      {
        heading: "Medication Safety",
        content: "Medication reconciliation must occur at admission and at discharge. This means comparing all medications the patient takes at home with what is ordered in the facility, identifying any discrepancies, and resolving them. All medications in the facility must be securely stored — medication carts locked when unattended, automated dispensing cabinets secured, and controlled substances double-locked. PRN (as needed) orders must include an indication — the specific reason the medication would be given. A PRN order without an indication is incomplete and cannot be administered. Look-alike/sound-alike medications must be stored separately and clearly labeled to prevent medication errors.",
        criticalValues: [
          { label: "Med reconciliation", value: "At admission AND discharge" },
          { label: "Medication storage", value: "All meds secured — carts locked, cabinets secured" },
          { label: "PRN orders", value: "Must include indication (reason for use)" },
          { label: "Look-alike/sound-alike", value: "Store separately, label clearly" }
        ]
      },
      {
        heading: "Fall Risk & Suicide Screening",
        content: "Every patient must be assessed for fall risk with appropriate interventions implemented based on the assessment level. Fall risk interventions may include: non-skid footwear, bed in low position, call light within reach, toileting schedule, gait belt use, and high-risk fall precautions signage. Suicide screening is required using validated tools. The Columbia Suicide Severity Rating Scale (C-SSRS) is used for initial screening. If positive, the SAFE-T (Suicide Assessment Five-step Evaluation and Triage) assessment is completed. The 988 Suicide & Crisis Lifeline information must be provided to patients who screen positive. All suicide assessment results must be documented with the care plan.",
        criticalValues: [
          { label: "Fall risk", value: "Assess every patient, implement interventions" },
          { label: "Suicide screening", value: "C-SSRS for initial screen" },
          { label: "Positive screen", value: "SAFE-T assessment completed" },
          { label: "988 Lifeline", value: "Information provided to patients who screen positive" }
        ]
      },
      {
        heading: "Tissue Tracking & Specialty Records",
        content: "Human tissue products (allografts, bone grafts, skin grafts) require rigorous tracking from supplier to patient. All tissue must come from FDA-registered suppliers. Records must be maintained for 10 years and must enable tracing tissue from donor to recipient and recipient back to donor. Tissue storage must have 24/7 temperature monitoring with alarms that alert staff to out-of-range conditions. Intake and Output (I&O) records must be documented every 8 hours for patients with I&O orders. Restraint use requires: documentation of less restrictive alternatives attempted first, physician order, patient assessment, and monitoring per policy. Restraints are always a last resort.",
        criticalValues: [
          { label: "Tissue suppliers", value: "FDA-registered only" },
          { label: "Record retention", value: "10 years" },
          { label: "Temperature monitoring", value: "24/7 with alarms" },
          { label: "I&O documentation", value: "Every 8 hours" },
          { label: "Restraints", value: "Last resort — document alternatives tried first" }
        ]
      }
    ],
    quickReference: [
      { fact: "Post-anesthesia eval", detail: "Within 48 hours, 7 elements" },
      { fact: "Post-op note", detail: "Surgeon, procedure, findings, specimens, EBL, diagnosis" },
      { fact: "Pain assessment", detail: "Minimum 2x per 24 hours" },
      { fact: "Pain reassess: IV", detail: "Within 1 hour" },
      { fact: "Pain reassess: oral", detail: "Within 2 hours" },
      { fact: "Pain reassess: non-pharm", detail: "Within 4 hours" },
      { fact: "Opioid LOC check", detail: "Before AND after administration" },
      { fact: "Med reconciliation", detail: "At admission AND discharge" },
      { fact: "PRN orders", detail: "Must include indication" },
      { fact: "Suicide screening", detail: "C-SSRS screen → SAFE-T if positive → 988 info" },
      { fact: "Tissue tracking", detail: "FDA suppliers, 10-year records, 24/7 alarms" },
      { fact: "I&O records", detail: "Every 8 hours" }
    ]
  },
  {
    levelId: "eoc_safety",
    title: "EOC & Safety Compliance",
    overview: "Environment of Care (EOC) safety encompasses the facility-wide systems and practices that protect patients, staff, and visitors. This chapter covers sharps safety, vendor compliance, patient privacy (HIPAA), EMTALA requirements, fire safety equipment, eyewash station maintenance, and specialized equipment standards. These items are checked during both scheduled EOC rounds and unannounced Joint Commission surveys.",
    sections: [
      {
        heading: "Sharps Safety & Disposal",
        content: "Sharps containers must be securely mounted, maintained below the fill line, and located near the point of use — not across the room. An overfilled sharps container is a needlestick injury waiting to happen. Sharps containers should be replaced when they reach the fill line, not when they're overflowing. Mobile sharps carts (used for phlebotomy rounds or vaccination clinics) must be locked when the healthcare worker steps away — even briefly. This prevents unauthorized access and accidental needlestick injuries. Used sharps must never be recapped (unless using a one-handed recapping technique in specific situations), bent, broken, or removed from disposable syringes before disposal. All sharps go directly into the sharps container immediately after use.",
        criticalValues: [
          { label: "Container location", value: "Near point of use, securely mounted" },
          { label: "Fill level", value: "Replace at fill line — never overfill" },
          { label: "Mobile carts", value: "Must be LOCKED when unattended" },
          { label: "Used sharps", value: "Never recap, bend, or break — dispose immediately" }
        ]
      },
      {
        heading: "Vendor & Staff Compliance",
        content: "Vendor representatives (sales reps, equipment technicians, consultants) who enter clinical areas must wear visible identification badges at all times. Their access should be documented and their presence in clinical areas should be authorized. Any equipment brought in by vendors for trial or demonstration must be inspected, tested, and approved by biomedical engineering before use on patients. This ensures the equipment meets safety standards, is properly calibrated, and is compatible with facility systems. Environmental Services (EVS) closets must be kept locked when unattended. EVS closets contain chemicals that could harm patients if accessed inappropriately, and the room itself must be maintained in a clean, organized condition.",
        criticalValues: [
          { label: "Vendor ID", value: "Visible identification badges required at all times" },
          { label: "Vendor equipment", value: "Must be tested/approved by biomed before patient use" },
          { label: "EVS closets", value: "LOCKED when unattended" }
        ],
        thinkAboutIt: "A vendor arrives with a new surgical power tool for a surgeon to try during a case. They say it's 'FDA approved and ready to go.' What must happen before this equipment can be used on a patient?"
      },
      {
        heading: "Patient Privacy & EMTALA",
        content: "Protected Health Information (PHI) must be secured from public view at all times. Computer screens showing patient information must face away from public areas or use privacy screens. Patient charts, lab results, and any documents containing PHI must not be left visible in public areas. Visual and auditory privacy must be maintained during patient care — curtains drawn, doors closed, voices lowered when discussing patient information. EMTALA (Emergency Medical Treatment and Labor Act) requires that signs informing patients of their right to emergency medical treatment must be posted in the Emergency Department (ED) and Obstetrics (OB) department. These signs must be visible and in the languages commonly spoken by the patient population.",
        criticalValues: [
          { label: "PHI security", value: "Secured from public view at all times" },
          { label: "Computer screens", value: "Face away from public or use privacy screens" },
          { label: "Patient privacy", value: "Visual AND auditory privacy maintained" },
          { label: "EMTALA signs", value: "Posted in ED and OB — visible and multi-language" }
        ]
      },
      {
        heading: "Eyewash, Fire Safety & Emergency Access",
        content: "Eyewash stations must be unobstructed and accessible within 10 seconds of travel from any location where splash hazards exist. They must be tested weekly with documentation. No items should be placed in front of or blocking eyewash stations. Fire safety equipment requires 3-foot clearance: fire extinguishers, fire alarm pull stations, medical gas shut-off panels, and electrical panels. This clearance must be maintained 24/7 — not just during business hours. Electrical panels must also be locked. Staff must know the location of the nearest fire extinguisher, pull station, and exit on their unit. RACE (Rescue, Alarm, Contain, Extinguish) and PASS (Pull, Aim, Squeeze, Sweep) mnemonics should be known by all staff.",
        criticalValues: [
          { label: "Eyewash access", value: "Unobstructed, within 10 seconds of splash hazard" },
          { label: "Eyewash testing", value: "Weekly with documentation" },
          { label: "Fire equipment clearance", value: "3 feet — extinguishers, pulls, gas panels" },
          { label: "Electrical panels", value: "Locked + 3-foot clearance" },
          { label: "Fire mnemonics", value: "RACE and PASS" }
        ]
      },
      {
        heading: "Specialized Equipment & Supplies",
        content: "All clinical supplies must be within their expiration dates. Expired supplies — even if unopened — must be removed from service. This includes medications, sterile supplies, test strips, reagents, and any item with an expiration date. Pill cutters used for splitting medications must be cleaned between patients to prevent cross-contamination of medication residue. Glucose testing supplies must be dated when opened and used within the manufacturer's specified timeframe. Equipment must be in good repair — cracked housings, frayed cords, damaged connectors, and non-functional alarms all constitute compliance findings. Biomedical equipment must have current preventive maintenance stickers showing the last inspection date and next due date.",
        criticalValues: [
          { label: "Expired supplies", value: "Remove from service — no exceptions" },
          { label: "Pill cutters", value: "Clean between patients" },
          { label: "Glucose supplies", value: "Dated when opened, within manufacturer timeframe" },
          { label: "Equipment condition", value: "Good repair — no cracks, frays, or damage" },
          { label: "Biomed stickers", value: "Current PM sticker with dates" }
        ],
        thinkAboutIt: "During a supply check, you find a box of sterile gloves with an expiration date of last month. The gloves look fine and the box is sealed. Can they still be used?"
      }
    ],
    quickReference: [
      { fact: "Sharps containers", detail: "Below fill line, near point of use, secured" },
      { fact: "Sharps carts", detail: "Locked when unattended" },
      { fact: "Vendor badges", detail: "Visible ID at all times in clinical areas" },
      { fact: "Vendor equipment", detail: "Biomed testing before patient use" },
      { fact: "EVS closets", detail: "Locked when unattended" },
      { fact: "PHI", detail: "Secured from view, screens face away from public" },
      { fact: "EMTALA signs", detail: "ED and OB departments" },
      { fact: "Eyewash", detail: "Unobstructed, weekly testing, within 10 sec of hazard" },
      { fact: "Fire equipment", detail: "3-ft clearance — pulls, extinguishers, gas panels" },
      { fact: "Electrical panels", detail: "Locked + 3-ft clearance" },
      { fact: "Expired supplies", detail: "Remove from service — even if sealed" },
      { fact: "Pill cutters", detail: "Clean between patients" },
      { fact: "Fire response", detail: "RACE (Rescue, Alarm, Contain, Extinguish) + PASS" }
    ]
  }
];
