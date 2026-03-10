import type { DeepDiveLevel } from "./schema";

export const ddTransportLevel: DeepDiveLevel = {
  id: "dd-transport",
  name: "Transport of Instruments Deep Dive",
  description: "Go deeper on instrument transport procedures and point-of-use treatment with expert-level branching questions.",
  icon: "Truck",
  color: "hsl(152, 82%, 39%)",
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
    },
    {
      id: "dd-tr6",
      baseQuestion: "A decontamination tech uses a wire brush to scrub the lumen of a flexible endoscopic instrument. Is this the correct cleaning tool?",
      baseOptions: ["Yes — wire brushes are effective for lumen cleaning", "No — flexible endoscopic lumens require manufacturer-specified soft brushes sized to the lumen diameter"],
      baseCorrectIndex: 1,
      baseExplanation: "Wire brushes can damage the internal lining of flexible endoscopic lumens, creating scratches where biofilm can form. Manufacturer IFUs specify the correct brush type and diameter for each instrument's lumen.",
      baseXp: 15,
      followUp: {
        question: "The tech switches to the correct brush but uses it for three consecutive instruments without cleaning or replacing the brush between uses. What risk does this introduce?",
        options: [
          "No risk — the brush is being used in a decontamination environment anyway",
          "Cross-contamination between instruments — brushes must be cleaned or replaced between each use to prevent transferring bioburden from one instrument's lumen to another",
          "The brush will wear out faster but there is no contamination risk",
          "This is only a concern if the instruments are from different patients"
        ],
        correctIndex: 1,
        explanation: "Using the same brush on multiple instruments without cleaning transfers bioburden between instruments, defeating the purpose of individual decontamination. Brushes must be cleaned or replaced between each instrument, and brushes themselves must be single-use or undergo decontamination and sterilization if reusable.",
        expertXp: 25
      }
    },
    {
      id: "dd-tr7",
      baseQuestion: "The decontamination area has a single sink used for both manual cleaning and hand washing. Is this acceptable?",
      baseOptions: ["Yes — a sink is a sink regardless of use", "No — instrument decontamination sinks and hand washing sinks must be separate"],
      baseCorrectIndex: 1,
      baseExplanation: "Instrument decontamination sinks must be separate from hand washing sinks. Hand washing sinks must be readily accessible and dedicated to hand hygiene. Using a decontamination sink for hand washing creates a cross-contamination risk.",
      baseXp: 15,
      followUp: {
        question: "The facility installs a separate hand washing sink but places it inside the decontamination room, 3 feet from the instrument cleaning sinks. During manual cleaning, splash from instrument scrubbing can reach the hand washing sink. Is this arrangement adequate?",
        options: [
          "Yes — having a separate sink meets the requirement regardless of placement",
          "No — the hand washing sink must be positioned to avoid splash contamination from decontamination activities, or a splash guard must be installed between them",
          "Yes — splash only matters if it's visible to the eye",
          "No — the hand washing sink must be outside the decontamination room entirely"
        ],
        correctIndex: 1,
        explanation: "While separate sinks are required, placement matters. A hand washing sink within splash range of instrument decontamination activities can become contaminated, compromising hand hygiene. The sink should be relocated beyond splash range or a physical barrier installed between decontamination and hand hygiene areas.",
        expertXp: 25
      }
    },
    {
      id: "dd-tr8",
      baseQuestion: "An automated washer/disinfector in the decontamination area completes its cycle but the printout shows the final rinse temperature reached only 160°F instead of the required 180°F. The tech is busy and plans to run the instruments through again later. What should happen immediately?",
      baseOptions: ["The tech's plan to re-run is adequate", "The instruments must not be released from decontamination, the cycle failure must be documented, and the washer must be taken out of service for investigation before any more loads are run"],
      baseCorrectIndex: 1,
      baseExplanation: "A cycle that fails to reach required parameters means thermal disinfection was not achieved. The instruments must be held, the failure documented, and the washer investigated immediately — not after more loads are run through a potentially malfunctioning machine.",
      baseXp: 15,
      followUp: {
        question: "Investigation reveals the washer's heating element is degrading and inconsistently reaches target temperature. It passes 3 out of 4 test cycles. The maintenance team says it's 'mostly working' and replacement parts are on a 2-week backorder. What should the facility do?",
        options: [
          "Continue using the washer and manually verify temperature each cycle",
          "Remove the washer from service until repaired; implement manual cleaning and thermal disinfection procedures as a validated backup; document the contingency plan and all manually processed loads",
          "Use the washer for non-critical items only",
          "Run every load twice to ensure the temperature is reached at least once"
        ],
        correctIndex: 1,
        explanation: "An unreliable washer/disinfector must be removed from service. The facility must implement validated manual cleaning and disinfection procedures as a backup, document the contingency plan, track all loads processed manually, and expedite the repair. 'Mostly working' is not acceptable for medical device reprocessing equipment.",
        expertXp: 30
      }
    },
    {
      id: "dd-tr9",
      baseQuestion: "A tech in the decontamination area receives a tray of instruments from the OR. She notices a scalpel blade still attached to the handle. What should she do first?",
      baseOptions: ["Remove the blade with her gloved hand and place it in the sharps container", "Use a needle holder or blade remover to safely detach the blade and place it in the sharps container — never use fingers"],
      baseCorrectIndex: 1,
      baseExplanation: "Scalpel blades must be removed using a mechanical device (needle holder, blade remover, or forceps) — never with fingers, even gloved. This is a fundamental sharps safety practice to prevent needlestick/sharps injuries in SPD.",
      baseXp: 15,
      followUp: {
        question: "This is the fourth tray this month received with blades still attached. The SPD manager wants to address this with the OR. What data-driven approach should be used?",
        options: [
          "Send an angry email to the OR director listing every occurrence",
          "Track the occurrences by OR room number, surgical team, time of day, and case type; present the trending data at the perioperative safety committee with a proposed PDCA improvement cycle and measurable compliance targets",
          "Refuse to accept trays from the OR until blades are removed",
          "Post a sign in the OR reminding staff to remove blades"
        ],
        correctIndex: 1,
        explanation: "Effective quality improvement requires data collection (trending by variables), presentation to the appropriate committee, a structured improvement cycle (Plan-Do-Check-Act), and measurable targets. Single interventions like signs or emails rarely produce sustained behavior change. A collaborative, data-driven approach engages both departments.",
        expertXp: 25
      }
    },
    {
      id: "dd-tr10",
      baseQuestion: "The water temperature in the decontamination sink for manual instrument cleaning is set to 110°F. Is this within the acceptable range?",
      baseOptions: ["Yes — lukewarm water is acceptable for manual cleaning", "No — water temperature for manual instrument cleaning should not exceed 110°F but the enzymatic detergent manufacturer's IFU must be followed for optimal temperature"],
      baseCorrectIndex: 1,
      baseExplanation: "Water temperature for manual cleaning should follow the enzymatic detergent manufacturer's IFU, typically between 80-110°F. Water that is too hot can coagulate proteins, making bioburden harder to remove. Water that is too cold reduces enzymatic effectiveness.",
      baseXp: 15,
      followUp: {
        question: "A new tech uses hot tap water (approximately 140°F) to clean instruments because she believes hotter water cleans better. The instruments appear visually clean after scrubbing. Has she effectively decontaminated the instruments?",
        options: [
          "Yes — the instruments look clean and hot water kills bacteria",
          "No — hot water above 140°F coagulates blood proteins, baking them onto instrument surfaces; visually clean instruments may still have fixed protein residue that interferes with sterilization and creates a nidus for biofilm formation",
          "Yes — but only if she also used enzymatic detergent",
          "It depends on how long she scrubbed"
        ],
        correctIndex: 1,
        explanation: "Water above approximately 140°F coagulates (denatures) blood proteins, essentially baking them onto instrument surfaces. These fixed proteins may not be visible but create microscopic residue that harbors microorganisms and can interfere with sterilization. Visual cleanliness does not equal decontamination. Proper water temperature per the detergent IFU is essential.",
        expertXp: 30
      }
    },
    {
      id: "dd-tr11",
      baseQuestion: "A decontamination tech receives a set of powered surgical instruments (drill, saw) still assembled with blades attached. What must happen before these can be cleaned?",
      baseOptions: ["Clean them as received — disassembly is the OR's responsibility", "Disassemble according to the manufacturer's IFU before cleaning — all removable parts must be separated to allow proper cleaning of every surface"],
      baseCorrectIndex: 1,
      baseExplanation: "Powered instruments must be disassembled per manufacturer IFU before cleaning. Internal surfaces, chuck mechanisms, and blade attachment points harbor bioburden that cannot be reached when assembled. The decontamination tech must know how to properly disassemble each device.",
      baseXp: 15,
      followUp: {
        question: "The tech disassembles the power drill but realizes she has never seen this model before and cannot find the manufacturer IFU in the department's reference files. A colleague says 'just clean it like the other drills.' What is the correct action?",
        options: [
          "Follow the colleague's advice — most power drills clean the same way",
          "Stop processing the instrument, obtain the manufacturer's IFU (contact the manufacturer, check their website, or contact the vendor rep), and do not proceed until the correct reprocessing instructions are available",
          "Clean it to the best of her ability and sterilize it normally",
          "Return it to the OR and tell them to clean it themselves"
        ],
        correctIndex: 1,
        explanation: "Processing any instrument without the manufacturer's validated IFU is a compliance violation. Different models — even from the same manufacturer — may have different disassembly, cleaning, lubrication, and sterilization requirements. The instrument must be held until the correct IFU is obtained. 'Clean it like the others' is never an acceptable substitute for validated instructions.",
        expertXp: 30
      }
    },
    {
      id: "dd-tr12",
      baseQuestion: "During transport from the OR, a sealed soiled instrument container is accidentally dropped in the corridor. The lid remains secure and no visible spillage occurred. Can the container continue to SPD without any additional action?",
      baseOptions: ["Yes — the lid is secure and there was no spill", "No — the drop site must be inspected and cleaned, the container exterior examined for damage, and an incident report filed if the container integrity may be compromised"],
      baseCorrectIndex: 1,
      baseExplanation: "Even without visible spillage, a dropped container requires inspection of the drop site for any contamination, examination of the container for cracks or seal compromise, and documentation. The container can continue to SPD if integrity is confirmed, but the corridor area should be cleaned as a precaution.",
      baseXp: 15,
      followUp: {
        question: "Upon arrival at SPD, the decontamination tech opens the dropped container and finds that two delicate microsurgical instruments inside are visibly bent. The OR team says they were fine before transport. Who is responsible, and what should happen?",
        options: [
          "SPD is responsible since the damage happened during their transport",
          "The OR is responsible since they loaded the container",
          "Responsibility determination requires investigation, but the immediate actions are: document the damage with photos, remove damaged instruments from service, notify the OR and management, investigate root cause (improper loading, missing protective padding, container type), and implement corrective action to prevent recurrence",
          "File an insurance claim and order new instruments"
        ],
        correctIndex: 2,
        explanation: "Instrument damage investigation requires documentation, root cause analysis, and corrective action — not blame assignment. The investigation should examine loading technique (were instruments properly padded and secured?), container suitability, and transport procedures. Damaged instruments must be removed from service and evaluated for repair or replacement.",
        expertXp: 25
      }
    },
    {
      id: "dd-tr13",
      baseQuestion: "A facility uses reusable rigid sterilization containers for transport of soiled instruments from OR to SPD. After emptying the soiled instruments, the container itself must be:",
      baseOptions: ["Rinsed and returned to the OR for the next case", "Decontaminated, inspected (including gaskets and filters), and reprocessed through the full cleaning cycle before reuse"],
      baseCorrectIndex: 1,
      baseExplanation: "Rigid containers used for soiled transport become contaminated and must go through the full decontamination and inspection process. Gaskets and filters must be inspected for integrity, and the container must be clean and dry before being returned to service.",
      baseXp: 15,
      followUp: {
        question: "During inspection, a tech notices that the disposable filter on a rigid container has a small tear. She has no replacement filters in stock but has five cases waiting for containers. She considers using the container without a filter 'just this once.' What are the implications?",
        options: [
          "A single use without a filter is acceptable in an emergency",
          "Using a container with a damaged or missing filter means the contents cannot be considered sterile after sterilization — the filter is an integral part of the sterile barrier system; the container must not be used until a proper filter is installed",
          "She can tape over the tear as a temporary fix",
          "The filter is only important during steam sterilization, not during transport"
        ],
        correctIndex: 1,
        explanation: "The disposable filter in a rigid sterilization container is a critical component of the sterile barrier system. It allows steam penetration during sterilization while filtering out microorganisms during cooling and storage. A damaged or missing filter means the contents cannot achieve or maintain sterility. No workaround is acceptable — the container must have a proper filter.",
        expertXp: 30
      }
    },
    {
      id: "dd-tr14",
      baseQuestion: "A surveyor observes that the decontamination room in SPD has negative air pressure relative to the adjacent clean assembly area. Is this correct?",
      baseOptions: ["Yes — decontamination should have negative pressure to prevent contaminated air from flowing into clean areas", "No — both areas should have equal pressure"],
      baseCorrectIndex: 0,
      baseExplanation: "The decontamination area must maintain negative pressure relative to adjacent clean areas. This ensures that air flows FROM clean areas INTO the decontamination area, preventing aerosolized contaminants from migrating to clean assembly and sterile storage spaces.",
      baseXp: 15,
      followUp: {
        question: "The facility's SPD has a pass-through window between decontamination and the clean side for transferring instrument sets. A surveyor notices that when the window is opened, there is no perceptible airflow direction. What does this suggest?",
        options: [
          "The pass-through window is functioning correctly as a physical barrier",
          "The negative pressure differential may be insufficient — when the window opens, air should visibly flow from clean to dirty side; lack of directional airflow suggests the HVAC system may not be maintaining adequate pressure differential, risking contamination of the clean side",
          "Airflow through a small window is not detectable and this is normal",
          "The window should never be opened — only the pass-through doors should be used"
        ],
        correctIndex: 1,
        explanation: "When a barrier between the decontamination and clean areas is opened, the negative pressure differential should create perceptible airflow from clean to dirty. No detectable airflow suggests the pressure differential is inadequate, which means contaminated aerosols from decontamination could migrate to the clean side. HVAC evaluation and adjustment is needed.",
        expertXp: 30
      }
    },
    {
      id: "dd-tr15",
      baseQuestion: "After automated washing, a tech inspects instruments under a lighted magnifying glass and finds residual tissue in the box lock of a hemostat. What should she do?",
      baseOptions: ["Place it in the tray — the sterilizer will take care of it", "Return the instrument to manual cleaning — residual bioburden means the instrument is not ready for assembly, packaging, or sterilization"],
      baseCorrectIndex: 1,
      baseExplanation: "Sterilization does not replace cleaning. Residual bioburden on instruments shields microorganisms from the sterilant and can result in failed sterilization. The instrument must be returned for additional manual cleaning until visually clean under magnification.",
      baseXp: 15,
      followUp: {
        question: "This is the third consecutive load from the automated washer that has produced instruments with residual bioburden in box locks. Previous loads from last week were clean. What systematic issue should be investigated?",
        options: [
          "The tech's inspection standards are too strict",
          "The washer's cleaning efficacy has likely degraded — investigate detergent concentration, spray arm function, water temperature, cycle parameters, loading technique, and perform manufacturer-recommended performance verification testing",
          "Box locks always retain some bioburden and this is normal",
          "The OR is sending dirtier instruments than usual"
        ],
        correctIndex: 1,
        explanation: "A pattern of residual bioburden from the automated washer indicates a systematic equipment or process issue. Investigation should include: detergent concentration and expiration, spray arm rotation and nozzle blockage, water temperature verification, cycle parameter review, loading technique assessment, and performance verification testing per the washer manufacturer's guidelines.",
        expertXp: 30
      }
    },
    {
      id: "dd-tr16",
      baseQuestion: "A new SPD tech is told to prepare the enzymatic detergent solution for the manual cleaning sink. She fills the sink with water and adds double the recommended concentration of enzymatic detergent, thinking 'more is better.' Is this acceptable?",
      baseOptions: ["Yes — more detergent means better cleaning", "No — enzymatic detergent must be used at the manufacturer's recommended concentration; over-concentration can leave residue on instruments and does not improve efficacy"],
      baseCorrectIndex: 1,
      baseExplanation: "Enzymatic detergents are formulated to work at specific concentrations. Over-concentration wastes product, can leave residue on instruments that interferes with sterilization, and does not improve cleaning effectiveness. Under-concentration is equally problematic as it reduces efficacy.",
      baseXp: 15,
      followUp: {
        question: "The same tech has been making the solution by eye rather than using the measuring device provided. When asked, she says the experienced techs all do it that way. A quality check reveals solutions vary from 50% to 200% of recommended concentration. What corrective actions are needed?",
        options: [
          "No action — slight variations in concentration are expected",
          "Standardize the process: retrain ALL staff on proper dilution measurement, post dilution instructions at every sink, implement automated dilution dispensers if possible, and add solution concentration verification to the quality monitoring program",
          "Only retrain the new tech since she is the one making errors",
          "Switch to pre-mixed detergent solutions to eliminate measuring"
        ],
        correctIndex: 1,
        explanation: "A 50-200% concentration range represents a systemic process failure, not an individual training issue. Corrective action must address the process: standardized measurement tools, posted instructions, consideration of automated dispensers, staff competency re-evaluation for ALL staff (not just the new tech), and ongoing quality monitoring. If pre-mixed solutions are available and cost-effective, they can reduce variability.",
        expertXp: 25
      }
    },
    {
      id: "dd-tr17",
      baseQuestion: "A surveyor asks the decontamination staff how they verify that ultrasonic cleaners are working effectively. The staff shows daily Cavitation Verification Tests (aluminum foil test). Is this sufficient quality monitoring?",
      baseOptions: ["Yes — daily cavitation testing is adequate", "No — ultrasonic cleaners also require periodic efficacy testing and verification of degassing, temperature, and cycle time in addition to cavitation testing"],
      baseCorrectIndex: 1,
      baseExplanation: "Daily cavitation testing verifies that the ultrasonic cleaner produces adequate cavitation energy, but comprehensive quality monitoring also requires verification of degassing cycle completion, water temperature, cycle duration, and periodic cleaning efficacy testing using commercially available soil test devices.",
      baseXp: 15,
      followUp: {
        question: "The ultrasonic cleaner's cavitation test shows uneven foil erosion — one half of the foil is heavily eroded while the other half shows minimal effect. The cleaner still passes the manufacturer's minimum threshold overall. Should the unit remain in service?",
        options: [
          "Yes — it passes the minimum threshold",
          "No — uneven cavitation means the transducers may be failing asymmetrically, creating dead zones where instruments won't be adequately cleaned; the unit needs service even though it meets minimum overall threshold",
          "Yes — just rotate instruments halfway through the cycle",
          "Run the test again to see if results are consistent"
        ],
        correctIndex: 1,
        explanation: "Uneven cavitation indicates failing or malfunctioning transducers, creating zones within the tank where cleaning is inadequate. Instruments placed in dead zones won't receive proper ultrasonic cleaning. The unit should be serviced to restore uniform cavitation across the entire tank, even if the overall energy meets minimum thresholds.",
        expertXp: 30
      }
    },
    {
      id: "dd-tr18",
      baseQuestion: "A tech in the decontamination room removes her face shield to answer a phone call while instruments are soaking in the sink beside her. She is still wearing gloves and a gown. Is this acceptable?",
      baseOptions: ["Yes — she's not actively cleaning, just answering the phone", "No — full PPE must be worn at all times in the decontamination area, regardless of the specific activity being performed at that moment"],
      baseCorrectIndex: 1,
      baseExplanation: "PPE requirements in the decontamination area are based on the zone classification, not the specific task. As long as contaminated instruments are present and decontamination activities are ongoing, full PPE (including face protection) must be worn by all personnel in the area.",
      baseXp: 15,
      followUp: {
        question: "The SPD manager installs a wall-mounted phone outside the decontamination room so staff can step out to take calls. A surveyor notices that staff exit through the decontamination room door still wearing contaminated gloves to answer the phone, then re-enter. What is the concern?",
        options: [
          "No concern — they are just briefly stepping out",
          "Contaminated gloves touching the phone, door handles, and surfaces outside decontamination spread bioburden to clean areas; proper doffing and donning protocols must be followed when exiting and re-entering the decontamination zone",
          "The only concern is that they should use the speakerphone feature",
          "Staff should not be allowed to take phone calls during shifts"
        ],
        correctIndex: 1,
        explanation: "Exiting the decontamination zone with contaminated gloves transfers bioburden to door handles, phones, and other surfaces outside the controlled environment. Staff must follow proper doffing protocol (remove contaminated PPE) before exiting and don fresh PPE upon re-entering. This is a fundamental principle of contamination containment zones.",
        expertXp: 25
      }
    },
    {
      id: "dd-tr19",
      baseQuestion: "A facility's decontamination area processes both general surgical instruments and flexible endoscopes in the same room. Is this arrangement acceptable?",
      baseOptions: ["Yes — as long as separate sinks are used", "It depends — the facility must demonstrate that cross-contamination between device types is prevented through physical separation, dedicated equipment, and workflow design per manufacturer IFUs"],
      baseCorrectIndex: 1,
      baseExplanation: "Processing different device types in the same decontamination area is possible but requires careful workflow design. Flexible endoscope reprocessing has specific requirements that must be met, and cross-contamination between device types must be prevented through physical separation, dedicated sinks/equipment, and staff training.",
      baseXp: 15,
      followUp: {
        question: "A surveyor discovers that the facility's flexible endoscope reprocessing area shares rinse water supply lines with the general instrument washer. The endoscope manufacturer IFU requires bacteria-free final rinse water. The general instrument washer does not have the same water quality requirement. Is the shared water supply acceptable?",
        options: [
          "Yes — all water in a healthcare facility meets safety standards",
          "No — endoscope reprocessing may require specific water quality (filtered, treated, or sterile) for the final rinse that exceeds standard tap water quality; shared supply lines may not deliver the required water quality if the endoscope reprocessor's filtration is downstream of the shared line",
          "Yes — the endoscope reprocessor has its own internal filter",
          "It depends on the municipality's water quality report"
        ],
        correctIndex: 1,
        explanation: "Flexible endoscope reprocessing often requires bacteria-free final rinse water per manufacturer IFUs. Water quality requirements for endoscope reprocessing typically exceed those for general instrument washing. The facility must verify that the water supply to endoscope reprocessing equipment meets manufacturer specifications, including filtration, bacterial testing, and documentation of water quality monitoring.",
        expertXp: 30
      }
    },
    {
      id: "dd-tr20",
      baseQuestion: "An OR tech needs to transport a contaminated instrument tray to SPD but all designated soiled transport carts are in use. She places the sealed container on a clean supply cart 'just for transport.' Is this acceptable?",
      baseOptions: ["Yes — the container is sealed so the cart won't be contaminated", "No — soiled and clean items must use separate, dedicated transport equipment"],
      baseCorrectIndex: 1,
      baseExplanation: "Clean supply carts and soiled transport carts must be dedicated to their respective functions. Using a clean supply cart for soiled transport contaminates the cart, which will then contaminate clean supplies on its next use. Separate, dedicated transport equipment is required.",
      baseXp: 15,
      followUp: {
        question: "The facility has 4 soiled transport carts for 12 ORs. During peak turnover times, all carts are frequently in use, causing delays and leading to the workaround described above. The SPD manager requests 4 additional carts but administration says the budget doesn't allow it. How should this be escalated?",
        options: [
          "Accept the budget limitation and continue with workarounds",
          "Frame the request as a patient safety and regulatory compliance issue: document instances of clean/soiled transport mixing, quantify the regulatory risk and potential infection prevention implications, present to the infection prevention committee and hospital leadership as a compliance gap requiring resolution",
          "Have SPD staff come to the ORs to pick up instruments instead",
          "Use bags instead of carts for soiled transport during peak times"
        ],
        correctIndex: 1,
        explanation: "Equipment shortages that force workarounds compromising infection prevention must be escalated as safety and compliance issues, not budget requests. Documentation of workaround instances, regulatory citation risk, and potential patient safety implications creates a compelling case for leadership. Infection prevention committee involvement elevates the issue above departmental budget negotiations.",
        expertXp: 30
      }
    }
  ]
};
