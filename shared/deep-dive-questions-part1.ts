import type { DeepDiveLevel } from "./schema";

export const deepDiveLevelsPart1: DeepDiveLevel[] = [
  {
    id: "dd-environment",
    name: "Environment & Surfaces Deep Dive",
    description: "Test your expert knowledge of environmental cleaning, surface disinfection, and infection prevention standards for clinical areas.",
    icon: "Microscope",
    color: "hsl(217, 91%, 52%)",
    baseLevelId: "environment",
    questions: [
      {
        id: "dd-env1",
        baseQuestion: "A surveyor notices that the OR environmental services team uses the same mop and bucket solution for three consecutive operating rooms without changing the solution. Is this acceptable?",
        baseOptions: ["Acceptable — the disinfectant is still active", "Not acceptable — mop solution must be changed between each room to prevent cross-contamination"],
        baseCorrectIndex: 1,
        baseExplanation: "Mop solution becomes contaminated after cleaning a room and must be changed between each room. Reusing contaminated solution effectively spreads bioburden from one room to the next rather than removing it.",
        baseXp: 15,
        followUp: {
          question: "The EVS manager argues that their EPA-registered disinfectant maintains kill concentration even after one room. Lab testing confirms the chemical concentration is still above the minimum effective level. Does this change the requirement?",
          options: [
            "Yes — if the chemical is still active, the solution is still effective",
            "No — even though the chemical may still be at effective concentration, the solution carries organic matter and bioburden from the previous room which can be deposited in the next room; fresh solution is required for each room",
            "Yes — but only if the rooms had the same type of procedure",
            "It depends on the volume of the mop bucket"
          ],
          correctIndex: 1,
          explanation: "Chemical concentration is only one factor in cleaning efficacy. Contaminated mop solution carries organic debris, blood, and microorganisms from the previous room. Even with adequate chemical concentration, the organic load in the solution reduces the disinfectant's effectiveness and deposits contaminants in the next room. Fresh solution for each room is a non-negotiable standard.",
          expertXp: 25
        }
      },
      {
        id: "dd-env2",
        baseQuestion: "During a tracer, a surveyor asks the EVS tech to demonstrate proper contact time for the surface disinfectant being used. The tech sprays the surface and immediately wipes it dry. Is this technique correct?",
        baseOptions: ["Correct — spraying and wiping is the standard technique", "Incorrect — the surface must remain wet for the full manufacturer-specified contact time before wiping"],
        baseCorrectIndex: 1,
        baseExplanation: "Every EPA-registered disinfectant has a specific contact time (dwell time) — the surface must remain visibly wet for that entire duration to achieve the claimed kill rate. Wiping immediately after spraying provides no disinfection.",
        baseXp: 15,
        followUp: {
          question: "The facility's disinfectant has a 3-minute contact time. The EVS manager switches to a product with a 1-minute contact time to improve compliance, but it costs 40% more. A budget committee member questions whether the old product can be used if staff are re-educated on contact time. What is the best response?",
          options: [
            "Return to the cheaper product with re-education — training solves the compliance gap",
            "The switch to the shorter contact time product is justified because studies consistently show that achieving full contact time with longer-dwell products has poor real-world compliance regardless of training intensity; shorter contact times lead to higher effective disinfection rates",
            "Use the cheaper product in low-risk areas and the expensive one in ORs only",
            "The cheapest option that meets EPA requirements is always the best choice"
          ],
          correctIndex: 1,
          explanation: "Real-world compliance with long contact times is consistently poor across healthcare facilities, even with intensive training. Switching to a shorter contact time product, while more expensive, results in higher actual disinfection rates because staff are more likely to allow the surface to remain wet for the required time. The increased cost is justified by improved infection prevention outcomes.",
          expertXp: 30
        }
      },
      {
        id: "dd-env3",
        baseQuestion: "A surveyor finds that an OR has been terminally cleaned at the end of the day, but the anesthesia cart drawers were not opened and their interiors were not wiped. Is the terminal cleaning complete?",
        baseOptions: ["Yes — terminal cleaning covers floors, walls, and surfaces; cart interiors are cleaned weekly", "No — terminal cleaning includes all surfaces in the room, including the interior of drawers, carts, and equipment"],
        baseCorrectIndex: 1,
        baseExplanation: "Terminal cleaning requires cleaning and disinfecting all surfaces in the room, including inside drawers, carts, and equipment. Anesthesia cart drawers are frequently touched during cases and can harbor pathogens.",
        baseXp: 15,
        followUp: {
          question: "The anesthesia department pushes back, stating that opening all drawers adds 15 minutes to terminal cleaning and delays the next day's first case. They propose cleaning cart interiors only on weekends. How should this be resolved?",
          options: [
            "Accept the weekend-only compromise — it's better than nothing",
            "Terminal cleaning standards are not negotiable; work with the anesthesia department and EVS to develop an efficient workflow that includes cart interior cleaning, potentially using pre-moistened disinfectant wipes for speed, and adjust the first-case start time if necessary",
            "Have anesthesia techs clean their own cart interiors during setup",
            "Only clean interiors of drawers that were opened during cases"
          ],
          correctIndex: 1,
          explanation: "Terminal cleaning standards cannot be reduced for convenience. The solution involves collaborative workflow design: efficient techniques (pre-moistened wipes), clear responsibility assignment, and potential schedule adjustments. Cleaning only drawers 'that were opened' is unreliable because no one tracks which drawers were accessed. Comprehensive terminal cleaning is a patient safety requirement.",
          expertXp: 25
        }
      },
      {
        id: "dd-env4",
        baseQuestion: "A blood spill occurs on the floor of a patient room. A nurse covers it with paper towels and calls EVS. The EVS tech arrives 10 minutes later. Was the nurse's initial response appropriate?",
        baseOptions: ["Yes — covering the spill and calling EVS is the correct first response", "No — the nurse should have immediately cleaned it up herself using the blood spill kit"],
        baseCorrectIndex: 1,
        baseExplanation: "Blood spills must be cleaned up immediately by available trained staff, not simply covered and left for EVS. All clinical staff should be trained on blood spill cleanup procedures. Delays in cleanup increase exposure risk to patients, staff, and visitors.",
        baseXp: 15,
        followUp: {
          question: "The nurse says she was never trained on blood spill cleanup and doesn't know where the spill kits are kept. She has worked on this unit for 2 years. What systemic failures does this reveal?",
          options: [
            "This is the nurse's fault for not seeking out the training",
            "Multiple failures: orientation training gaps (blood/body fluid spill cleanup is a core competency), annual competency verification gaps, lack of visible spill kit placement, and potentially inadequate signage indicating spill kit locations",
            "This is only an EVS training issue, not nursing",
            "Two years without a spill is good luck, not a training failure"
          ],
          correctIndex: 1,
          explanation: "A nurse unaware of spill cleanup procedures after 2 years indicates systemic failures: inadequate orientation training, missing annual competency verification, poor spill kit visibility/accessibility, and potentially missing signage. Blood/body fluid spill response is a universal competency for all clinical staff, not just EVS. Management must audit training records and correct all gaps.",
          expertXp: 30
        }
      },
      {
        id: "dd-env5",
        baseQuestion: "A surveyor observes that high-touch surfaces in patient rooms (bed rails, call buttons, light switches, door handles) are cleaned once per day during the morning shift. Is this frequency adequate?",
        baseOptions: ["Yes — daily cleaning of high-touch surfaces meets the standard", "It depends — high-touch surfaces in patient rooms may require more frequent cleaning, especially for patients on contact precautions"],
        baseCorrectIndex: 1,
        baseExplanation: "High-touch surface cleaning frequency should be risk-based. Standard patient rooms may require at minimum twice-daily cleaning of high-touch surfaces, while rooms with patients on contact precautions or with known multidrug-resistant organisms may require more frequent cleaning throughout the day.",
        baseXp: 15,
        followUp: {
          question: "The facility implements twice-daily high-touch surface cleaning. A surveyor asks how they verify that cleaning is actually being performed effectively — not just that staff reported doing it. What verification methods should be in place?",
          options: [
            "Staff sign-off sheets are sufficient verification",
            "A combination of methods: fluorescent marking systems (UV gel applied before cleaning and checked after), ATP bioluminescence monitoring, direct observation audits, and environmental cultures on a periodic basis",
            "Patient satisfaction surveys about room cleanliness",
            "Checking for visible dirt or stains"
          ],
          correctIndex: 1,
          explanation: "Effective cleaning verification requires objective measurement, not just self-reporting. Fluorescent markers (applied before cleaning, checked after with UV light) verify physical contact with surfaces. ATP bioluminescence measures organic matter removal. Direct observation audits assess technique. Environmental cultures provide microbiological data. Multiple methods used together provide comprehensive verification.",
          expertXp: 30
        }
      },
      {
        id: "dd-env6",
        baseQuestion: "A surveyor notices that the facility uses two different EPA-registered disinfectants — one in patient rooms and a different one in the OR. Is this acceptable?",
        baseOptions: ["Not acceptable — a single disinfectant should be used throughout the facility for consistency", "Acceptable — different areas may have different disinfection requirements, and using area-appropriate products is sound practice"],
        baseCorrectIndex: 1,
        baseExplanation: "Using different disinfectants for different areas can be appropriate if each product meets the specific requirements of that area. The OR may need a product with different kill claims or faster contact time than general patient care areas.",
        baseXp: 15,
        followUp: {
          question: "A float EVS tech normally works in patient rooms but is reassigned to the OR during a staff shortage. She uses the patient room disinfectant she is familiar with, not the OR-specific product. What risks does this introduce?",
          options: [
            "No risk — all EPA-registered disinfectants provide adequate disinfection",
            "The patient room product may not have the required kill claims for the OR (such as tuberculocidal or sporicidal activity), may have a different contact time the tech is unaware of, and the tech may not have been trained on OR-specific cleaning protocols",
            "The only risk is if the products are mixed together",
            "This is acceptable as long as the tech cleans thoroughly"
          ],
          correctIndex: 1,
          explanation: "Using the wrong disinfectant in the OR creates multiple risks: the product may lack required kill claims (tuberculocidal activity, efficacy against C. difficile spores), have different contact times, and the tech may not understand OR-specific cleaning sequences and terminal cleaning requirements. Cross-trained staff must be educated on area-specific products and protocols before being reassigned.",
          expertXp: 25
        }
      },
      {
        id: "dd-env7",
        baseQuestion: "During a renovation, a surveyor notices that an adjacent patient care area has visible drywall dust on surfaces despite an ICRA barrier being in place. Is the ICRA barrier functioning properly?",
        baseOptions: ["Yes — some dust migration is expected during renovation", "No — visible dust in the patient care area indicates the ICRA barrier has been breached or is inadequate"],
        baseCorrectIndex: 1,
        baseExplanation: "The purpose of ICRA barriers is to prevent construction dust, debris, and airborne contaminants from reaching patient care areas. Visible dust migration indicates the barrier is failing and must be immediately assessed and reinforced.",
        baseXp: 15,
        followUp: {
          question: "Investigation reveals the ICRA barrier is intact but construction workers have been using a patient corridor as a shortcut to access the construction zone, tracking dust through the barrier door each time they enter. How should this be addressed?",
          options: [
            "Post a sign reminding workers to use the designated construction entrance",
            "Immediately restrict construction worker access to the designated construction entrance only, add a sticky mat or shoe-covering station at the barrier entry point, assign a monitor during construction hours, and include corridor cleaning in the ICRA monitoring plan",
            "Clean the corridor more frequently to compensate",
            "Fine the construction company for the violation"
          ],
          correctIndex: 1,
          explanation: "ICRA compliance requires active enforcement, not just signage. Construction worker traffic patterns must be controlled with physical access restrictions, contamination reduction measures (sticky mats, shoe covers), monitoring, and enhanced cleaning. This violation should also trigger a review of the ICRA monitoring plan to ensure it addresses all potential breach points.",
          expertXp: 30
        }
      },
      {
        id: "dd-env8",
        baseQuestion: "A surveyor asks the EVS department for their policy on disinfecting electronic devices (keyboards, monitors, touch screens) in patient care areas. The staff says they avoid wiping electronics because they don't want to damage them. Is this acceptable?",
        baseOptions: ["Acceptable — electronics are delicate and cleaning is optional", "Not acceptable — electronic devices in patient care areas are high-touch surfaces that must be cleaned and disinfected using manufacturer-approved methods"],
        baseCorrectIndex: 1,
        baseExplanation: "Electronic devices in clinical areas are high-touch surfaces that can harbor pathogens. They must be cleaned and disinfected using methods compatible with the device. Manufacturers provide cleaning guidelines for their products. Skipping electronics creates significant infection control gaps.",
        baseXp: 15,
        followUp: {
          question: "The facility decides to use disinfectant wipes on all keyboards and touch screens. After 3 months, multiple keyboards have failed due to liquid damage. The IT department demands EVS stop wiping electronics. How should this be resolved?",
          options: [
            "Stop wiping electronics as IT requests — equipment damage is too costly",
            "Work with IT and infection prevention to identify compatible cleaning products (alcohol-based wipes, UV disinfection devices, or wipeable keyboard covers), implement device-specific cleaning protocols, and consider purchasing medical-grade peripherals designed for disinfection",
            "Only clean electronics after known infectious patients use them",
            "Cover all electronics with plastic wrap to avoid the issue entirely"
          ],
          correctIndex: 1,
          explanation: "The solution is collaborative: infection prevention requirements are non-negotiable, but cleaning methods must be compatible with equipment. Options include compatible cleaning products, UV disinfection devices, wipeable covers, and medical-grade peripherals designed to withstand regular disinfection. Plastic wrap is a reasonable interim measure but can tear, collect moisture underneath, and be difficult to clean itself.",
          expertXp: 25
        }
      },
      {
        id: "dd-env9",
        baseQuestion: "A surveyor observes environmental services performing a C. difficile room discharge cleaning using a quaternary ammonium disinfectant. Is this the appropriate disinfectant?",
        baseOptions: ["Yes — quaternary ammonium disinfectants are effective against C. difficile", "No — C. difficile requires a sporicidal agent such as sodium hypochlorite (bleach) because quaternary ammonium products do not kill C. difficile spores"],
        baseCorrectIndex: 1,
        baseExplanation: "C. difficile spores are resistant to most common disinfectants including quaternary ammonium compounds. Sporicidal agents such as sodium hypochlorite (bleach) at the appropriate concentration or EPA-registered products with C. difficile kill claims are required.",
        baseXp: 15,
        followUp: {
          question: "After switching to bleach for C. difficile rooms, staff complain about the strong odor, eye irritation, and corrosion of metal surfaces. The EVS manager is considering switching to a newer EPA-registered sporicidal product that is less corrosive. What criteria should guide this decision?",
          options: [
            "Any EPA-registered disinfectant is acceptable for C. difficile",
            "The new product must have a specific EPA-registered kill claim against C. difficile spores, the facility must verify it meets contact time requirements in their workflow, and staff must be trained on the new product's proper use, dilution, and PPE requirements",
            "Cost should be the primary deciding factor",
            "Stick with bleach because it's the gold standard regardless of side effects"
          ],
          correctIndex: 1,
          explanation: "Switching sporicidal products requires verification of the EPA-registered kill claim specifically against C. difficile spores (not just 'sporicidal' claims which may cover different organisms). Contact time feasibility in real-world workflows, staff training on proper use, dilution accuracy, required PPE, and surface compatibility must all be evaluated. Newer hydrogen peroxide-based sporicidal products may offer effective alternatives to bleach with fewer adverse effects.",
          expertXp: 30
        }
      },
      {
        id: "dd-env10",
        baseQuestion: "A surveyor notices that the facility uses UV-C disinfection robots as a supplement to manual cleaning in OR suites. Can UV-C technology replace manual cleaning?",
        baseOptions: ["Yes — UV-C robots are more effective than manual cleaning", "No — UV-C technology supplements but does not replace manual cleaning; surfaces must be physically cleaned to remove organic matter before UV-C can be effective"],
        baseCorrectIndex: 1,
        baseExplanation: "UV-C disinfection is an adjunct to, not a replacement for, manual cleaning. UV-C light is blocked by organic matter (soil, blood, body fluids) and only disinfects surfaces in direct line-of-sight. Physical cleaning must remove organic material first for UV-C to be effective against remaining microorganisms.",
        baseXp: 15,
        followUp: {
          question: "Staff begin relying on the UV-C robot and performing less thorough manual cleaning, reasoning that 'the robot will catch what we miss.' A fluorescent marker audit shows a 30% decline in manual cleaning thoroughness since the robot was introduced. What action is needed?",
          options: [
            "This is expected — the robot compensates for reduced manual effort",
            "Immediately address the behavioral change: re-educate staff that UV-C is supplemental only, reinstate rigorous manual cleaning standards, increase fluorescent marker auditing frequency, and consider temporarily suspending UV-C use until manual cleaning compliance recovers to baseline",
            "Increase the UV-C cycle time to compensate for reduced manual cleaning",
            "Accept the new workflow as an evolution in cleaning technology"
          ],
          correctIndex: 1,
          explanation: "The 'moral hazard' of supplemental technology reducing primary effort is a well-documented phenomenon. UV-C cannot compensate for poor manual cleaning because it requires clean surfaces to be effective. The facility must restore manual cleaning standards through re-education, increased monitoring, and potentially temporary suspension of UV-C to reset behavioral expectations. UV-C should only be reintroduced when manual cleaning compliance has recovered.",
          expertXp: 30
        }
      },
      {
        id: "dd-env11",
        baseQuestion: "A surveyor examines the EVS department's disinfectant preparation area and finds that the automatic dilution system has not been calibrated in 6 months. The manufacturer recommends quarterly calibration. Is this a finding?",
        baseOptions: ["No — the system still dispenses solution", "Yes — an uncalibrated dilution system may produce solutions at incorrect concentrations, compromising disinfection effectiveness"],
        baseCorrectIndex: 1,
        baseExplanation: "Automatic dilution systems must be calibrated per the manufacturer's recommended schedule. An uncalibrated system can produce solutions that are too dilute (ineffective) or too concentrated (wasteful, potentially harmful to surfaces and staff). Quarterly calibration is a minimum standard.",
        baseXp: 15,
        followUp: {
          question: "Testing reveals the dilution system has been dispensing at 60% of the recommended concentration for an unknown period. What are the immediate and follow-up actions?",
          options: [
            "Calibrate the system and move on — there's no way to know which surfaces were affected",
            "Immediately recalibrate the system, discard all pre-mixed solutions, re-clean all patient care areas with properly concentrated disinfectant, investigate how long the miscalibration persisted, review infection surveillance data for any correlation with HAI trends, and implement a calibration verification log with accountability",
            "Only re-clean areas where infections occurred",
            "Switch to pre-mixed disinfectant products to avoid dilution issues"
          ],
          correctIndex: 1,
          explanation: "A system dispensing at 60% of target concentration means disinfection has been suboptimal for an unknown period. Immediate actions include recalibration, discarding incorrect solutions, and re-cleaning all areas. Follow-up includes correlation analysis with healthcare-associated infection data, root cause investigation of the maintenance gap, and implementation of regular verification monitoring to prevent recurrence.",
          expertXp: 30
        }
      },
      {
        id: "dd-env12",
        baseQuestion: "A surveyor asks about the facility's process for cleaning and disinfecting shared patient equipment (blood pressure cuffs, pulse oximeters, thermometers) between patients. Staff say they wipe them when they 'look dirty.' Is this acceptable?",
        baseOptions: ["Acceptable — cleaning when visibly soiled is adequate for non-critical items", "Not acceptable — shared patient equipment must be cleaned and disinfected between every patient use, regardless of visible soiling"],
        baseCorrectIndex: 1,
        baseExplanation: "Shared patient care equipment must be cleaned and disinfected between every patient use. Visible soiling is not a reliable indicator of contamination — pathogens are invisible. This is a standard precautions requirement.",
        baseXp: 15,
        followUp: {
          question: "The facility implements between-patient cleaning but has no way to verify whether equipment has been cleaned before use on the next patient. A nurse picks up a blood pressure cuff from the hallway rack — she cannot tell if it was cleaned after the last patient. What system should be implemented?",
          options: [
            "Trust that staff follow the cleaning protocol",
            "Implement a clean/dirty indicator system: use color-coded tags, 'I am clean' flags, or designated clean and soiled equipment staging areas so staff can visually confirm disinfection status before use on the next patient",
            "Have one designated person clean all equipment",
            "Use disposable equipment for everything"
          ],
          correctIndex: 1,
          explanation: "A visual verification system eliminates ambiguity about equipment disinfection status. Options include color-coded tags (green = clean, red = soiled), 'I am clean' flags placed after disinfection, or separate staging areas for clean and soiled equipment. The system must be simple, visible, and integrated into workflow. This is a best practice recommended by infection prevention organizations.",
          expertXp: 25
        }
      },
      {
        id: "dd-env13",
        baseQuestion: "A surveyor sees that fabric curtains between patient beds in a semi-private room have no documented cleaning or change schedule. Staff say they change them 'when they get stained.' Is this compliant?",
        baseOptions: ["Compliant — curtains are low-touch surfaces and don't need scheduled changes", "Not compliant — privacy curtains are high-touch surfaces that require a documented change/cleaning schedule"],
        baseCorrectIndex: 1,
        baseExplanation: "Privacy curtains are frequently touched by staff, patients, and visitors, making them high-touch surfaces. Studies show they become contaminated with pathogens within hours of hanging. A documented change or cleaning schedule must be established.",
        baseXp: 15,
        followUp: {
          question: "The facility considers three options: (A) weekly fabric curtain changes, (B) antimicrobial-impregnated curtains changed monthly, or (C) disposable curtains changed with each patient discharge. Which approach best balances infection prevention with practicality?",
          options: [
            "Option A — weekly is the most frequent and therefore the best",
            "Option C — disposable curtains with each discharge provides the highest level of patient-specific infection prevention while being practical, though B is also acceptable if the antimicrobial efficacy is validated and the change schedule is based on evidence",
            "Option B — antimicrobial curtains eliminate the need for frequent changes",
            "Any option works as long as it's documented"
          ],
          correctIndex: 1,
          explanation: "Disposable curtains changed at discharge provide the best patient-specific protection and are increasingly cost-effective. Antimicrobial curtains are a valid option if their efficacy is independently validated and they are still changed on a schedule (antimicrobial activity diminishes over time and with soiling). Weekly changes of standard fabric curtains are labor-intensive and may not prevent transmission during the week. The choice should be evidence-based and documented.",
          expertXp: 25
        }
      },
      {
        id: "dd-env14",
        baseQuestion: "A surveyor asks the facility about their environmental monitoring process for construction areas adjacent to patient care. The facility shows a log of daily visual inspections of the ICRA barrier. Is this sufficient monitoring?",
        baseOptions: ["Yes — daily visual inspections of the barrier are adequate", "No — environmental monitoring during construction should include air quality monitoring (particle counts), pressure differential verification, and documentation beyond visual barrier inspection"],
        baseCorrectIndex: 1,
        baseExplanation: "Comprehensive ICRA monitoring includes air particle count monitoring, pressure differential measurement and documentation, barrier integrity inspection, and environmental surveillance. Visual inspection alone does not detect airborne particulate migration that can occur even with intact barriers.",
        baseXp: 15,
        followUp: {
          question: "Air particle counts in the adjacent ICU show elevated levels despite the ICRA barrier appearing intact. The construction manager insists the barrier is adequate because it's a Class IV ICRA barrier with negative pressure in the construction zone. What could explain the elevated particle counts?",
          options: [
            "The particle counter is malfunctioning",
            "Possible causes include: inadequate negative pressure magnitude, unsealed penetrations (HVAC, plumbing, electrical) allowing air bypass around the barrier, construction workers tracking dust through traffic paths, shared HVAC ductwork between construction and patient areas, or barrier material degradation not visible during inspection",
            "Some elevation in particle counts is normal during construction",
            "The ICU's HEPA filtration should handle the extra particles"
          ],
          correctIndex: 1,
          explanation: "Elevated particle counts with an apparently intact barrier indicate hidden pathways for contamination. Investigation must examine all potential bypass routes: HVAC duct connections between zones, unsealed utility penetrations through the barrier, traffic pattern contamination, pressure differential adequacy, and barrier material integrity at seams and floor/ceiling connections. Each potential pathway must be individually assessed and sealed.",
          expertXp: 30
        }
      },
      {
        id: "dd-env15",
        baseQuestion: "A water leak from a pipe above the ceiling has stained several ceiling tiles in a medication room. Maintenance replaces the tiles but does not address the leak because it is 'slow and intermittent.' Is this resolution adequate?",
        baseOptions: ["Yes — replacing the stained tiles resolves the environmental concern", "No — replacing tiles without repairing the leak ensures the problem will recur and may lead to mold growth in the plenum space"],
        baseCorrectIndex: 1,
        baseExplanation: "Replacing stained tiles is a cosmetic fix. The underlying leak must be repaired to prevent continued moisture intrusion, which promotes mold growth in the plenum space above the tiles. Mold in the plenum can release spores into patient care areas through tile gaps and HVAC systems.",
        baseXp: 15,
        followUp: {
          question: "Two weeks after tile replacement, a facilities tech discovers visible mold growth on the insulation around the leaking pipe above the ceiling. The medication room has been in continuous use. What actions are required?",
          options: [
            "Remove the moldy insulation and replace the tiles again",
            "Immediately close the room to patient use, conduct a professional mold assessment and remediation per institutional ICRA procedures, repair the leak, replace contaminated materials, perform clearance testing before returning the room to service, and notify infection prevention for surveillance of potentially exposed patients and staff",
            "Spray the mold with bleach and replace the insulation",
            "Only close the room if patients report respiratory symptoms"
          ],
          correctIndex: 1,
          explanation: "Mold discovery above a patient care area requires immediate room closure, professional assessment, and remediation following ICRA procedures. Mold exposure can cause respiratory infections, especially in immunocompromised patients. The underlying leak must be repaired, contaminated materials professionally removed, and clearance air quality testing conducted before the room returns to service. Infection prevention must be notified for patient and staff surveillance.",
          expertXp: 30
        }
      },
      {
        id: "dd-env16",
        baseQuestion: "A surveyor asks an EVS tech what the difference is between cleaning, disinfection, and sterilization. The tech says they are all the same thing. Is the tech correct?",
        baseOptions: ["Essentially correct — all three remove germs", "Incorrect — cleaning removes soil and organic matter, disinfection eliminates most pathogens on surfaces, and sterilization destroys all forms of microbial life including spores"],
        baseCorrectIndex: 1,
        baseExplanation: "These are three distinct processes: cleaning removes visible soil and organic matter; disinfection uses chemicals to kill most pathogens on surfaces; sterilization destroys all microbial life including bacterial spores. Each serves a specific purpose and cannot substitute for another.",
        baseXp: 15,
        followUp: {
          question: "A new EVS supervisor proposes skipping the cleaning step and going directly to disinfection to save time, arguing the disinfectant will 'clean and disinfect at the same time.' Why is this approach problematic?",
          options: [
            "It's actually fine — many modern disinfectants are cleaners too",
            "Organic matter (blood, body fluids, soil) inactivates disinfectants by creating a physical barrier that shields microorganisms and by chemically neutralizing the disinfectant; cleaning must precede disinfection to remove organic matter so the disinfectant can contact and kill microorganisms on the surface",
            "It only matters in the OR, not in general patient areas",
            "The problem is only that it looks unprofessional to skip cleaning"
          ],
          correctIndex: 1,
          explanation: "The 'clean before disinfect' sequence is critical because organic matter inactivates disinfectants through two mechanisms: it forms a physical barrier shielding microorganisms from chemical contact, and organic proteins chemically neutralize many disinfectant compounds. While some products are marketed as 'cleaner-disinfectants,' heavily soiled surfaces still require pre-cleaning to remove gross contamination before the disinfectant can be effective.",
          expertXp: 25
        }
      },
      {
        id: "dd-env17",
        baseQuestion: "A facility has recently had three cases of hospital-acquired MRSA on the same unit. The infection preventionist asks EVS to perform enhanced environmental cleaning. What does enhanced cleaning typically include?",
        baseOptions: ["Cleaning the rooms more quickly to reduce pathogen exposure time", "Increased frequency of high-touch surface cleaning, possible use of a different or more effective disinfectant, UV-C supplemental disinfection, cleaning verification audits, and potentially dedicated EVS staff for the affected unit"],
        baseCorrectIndex: 1,
        baseExplanation: "Enhanced environmental cleaning during an outbreak includes multiple intensified measures: increased cleaning frequency, potentially stronger or broader-spectrum disinfectants, supplemental disinfection technology, verification audits, and dedicated staffing to ensure consistent thoroughness on the affected unit.",
        baseXp: 15,
        followUp: {
          question: "Despite enhanced cleaning, a fourth MRSA case occurs. Environmental cultures taken from the room reveal MRSA on the bed frame, a surface that is wiped during cleaning. What does this finding suggest?",
          options: [
            "Environmental cleaning does not prevent MRSA transmission",
            "The cleaning product, technique, or contact time may be inadequate for this surface; investigation should include direct observation of cleaning technique, verification of disinfectant contact time on this specific surface type, assessment of whether the surface texture allows effective disinfection, and possibly testing the MRSA isolate against the disinfectant being used",
            "The bed should be replaced immediately",
            "MRSA on the bed frame is expected and not clinically significant"
          ],
          correctIndex: 1,
          explanation: "MRSA recovery from a cleaned surface indicates a failure in the disinfection process for that specific surface. Root cause analysis should examine: cleaning technique (adequate wiping pressure and coverage), contact time compliance on that surface, surface material and texture (porous or damaged surfaces are difficult to disinfect), and potentially testing the MRSA isolate's susceptibility to the disinfectant in use. Surface replacement may be necessary if the material cannot be effectively disinfected.",
          expertXp: 30
        }
      },
      {
        id: "dd-env18",
        baseQuestion: "A surveyor observes that used disinfectant wipes are being stored in an open container at the nursing station. The container has no lid. Is this storage acceptable?",
        baseOptions: ["Acceptable — easy access promotes use", "Not acceptable — disinfectant wipes must be stored in closed containers to prevent evaporation of the active ingredient, which reduces effectiveness"],
        baseCorrectIndex: 1,
        baseExplanation: "Disinfectant wipes stored in open or improperly sealed containers lose their active ingredient through evaporation. Studies show that wipes from open containers can become microbiologically contaminated and may spread rather than eliminate pathogens. Containers must remain closed when not in use.",
        baseXp: 15,
        followUp: {
          question: "Testing reveals that wipes from the open container have less than 30% of the original disinfectant concentration. Staff have been using these wipes on patient equipment for the past two weeks. What are the implications and required actions?",
          options: [
            "Minimal risk — the wipes still physically remove some contamination",
            "All equipment cleaned with degraded wipes during this period may not have been effectively disinfected; immediately discard the compromised wipes, re-clean all accessible patient equipment with properly stored wipes, audit all wipe storage locations facility-wide, implement education on proper wipe storage, and report the finding through the quality/safety event system",
            "Just close the container lid going forward",
            "Switch to spray bottles to avoid the wipe container issue"
          ],
          correctIndex: 1,
          explanation: "Wipes at 30% concentration provide false assurance of disinfection. Equipment cleaned with them may harbor viable pathogens. Immediate actions: discard compromised wipes, re-clean equipment, and conduct a facility-wide audit of wipe storage. This is a systemic issue that requires education, monitoring, and quality event reporting. The finding may also warrant review of infection surveillance data for the affected period.",
          expertXp: 25
        }
      },
      {
        id: "dd-env19",
        baseQuestion: "A surveyor notices that the operating room has a portable HEPA air filtration unit running in the corner. The OR has its own dedicated HVAC with HEPA filtration. Is the portable unit necessary?",
        baseOptions: ["Yes — extra filtration is always beneficial", "Not necessarily — if the OR HVAC system is properly maintained and provides the required air changes and filtration, a portable unit is not needed and may actually disrupt the engineered airflow patterns"],
        baseCorrectIndex: 1,
        baseExplanation: "OR HVAC systems are engineered to provide specific airflow patterns (laminar flow, positive pressure) and air change rates. Adding portable HEPA units can disrupt these engineered airflow patterns, potentially redirecting contaminated air across the sterile field rather than away from it.",
        baseXp: 15,
        followUp: {
          question: "The facilities engineer says the portable HEPA unit was placed because the OR HVAC is not achieving the required 20 air changes per hour — it's only reaching 15. The portable unit was a 'temporary fix' placed 6 months ago. What is the proper course of action?",
          options: [
            "The portable unit is an acceptable long-term solution if it makes up the deficit",
            "The HVAC system must be repaired to meet the required air change rate; a portable unit is not a validated substitute for engineered HVAC performance, may create unpredictable airflow patterns, and a 6-month 'temporary fix' indicates a maintenance failure; document the HVAC deficiency, develop a repair plan with timeline, consider restricting the OR to non-implant cases until repaired",
            "As long as total air changes from both sources equal 20, the combination is compliant",
            "15 air changes is close enough to 20 — the difference is negligible"
          ],
          correctIndex: 1,
          explanation: "A portable HEPA unit cannot substitute for an engineered HVAC system because it does not replicate the designed airflow patterns, pressure relationships, and filtration sequence. A 6-month unrepaired HVAC deficiency is a significant maintenance and compliance failure. The OR may need to be restricted to lower-risk procedures until the HVAC system is restored to full function. The repair must be prioritized and tracked.",
          expertXp: 30
        }
      },
      {
        id: "dd-env20",
        baseQuestion: "A surveyor asks the facility to describe their process for cleaning and disinfecting a room after a patient with active pulmonary tuberculosis is discharged. The staff describe standard discharge cleaning. Is this adequate?",
        baseOptions: ["Yes — standard discharge cleaning is sufficient for TB rooms", "No — TB rooms require additional measures including extended room vacancy time for adequate air changes to clear airborne droplet nuclei before staff enter for cleaning"],
        baseCorrectIndex: 1,
        baseExplanation: "Rooms housing patients with active pulmonary TB require airborne infection isolation room (AIIR) procedures after discharge: the room must remain vacant with the door closed for a calculated period (based on air changes per hour) to allow adequate clearance of airborne droplet nuclei before EVS enters for cleaning. Staff entering must wear N95 respirators.",
        baseXp: 15,
        followUp: {
          question: "The EVS tech assigned to clean the TB discharge room has not been fit-tested for an N95 respirator in 18 months. She says her last fit test was for a model the facility no longer stocks. Can she clean the room?",
          options: [
            "Yes — she had a prior fit test so she knows how to wear one",
            "No — she cannot enter the room until she is fit-tested on the currently available N95 model; fit testing must be repeated annually and whenever the respirator model changes; another fit-tested staff member must be assigned, or cleaning must be delayed until she completes a new fit test",
            "She can use a surgical mask instead",
            "She can use any available N95 as long as she performs a user seal check"
          ],
          correctIndex: 1,
          explanation: "N95 respirator fit testing is model-specific and must be repeated at least annually and whenever the respirator model changes. A fit test on a discontinued model does not validate the current model. The tech cannot enter the TB room until fit-tested on the available N95. A user seal check is performed each time a respirator is donned but does not replace formal fit testing. The room must wait for a fit-tested staff member.",
          expertXp: 30
        }
      }
    ]
  },
  {
    id: "dd-segregation",
    name: "Clean/Dirty Segregation Deep Dive",
    description: "Test your expert knowledge of clean and dirty traffic flow, contamination prevention, and proper segregation in healthcare facilities.",
    icon: "Microscope",
    color: "hsl(270, 60%, 55%)",
    baseLevelId: "segregation",
    questions: [
      {
        id: "dd-seg1",
        baseQuestion: "A surveyor observes that the facility's sterile processing department has a single corridor used by both clean and soiled traffic at different times of day. Is this arrangement compliant?",
        baseOptions: ["Compliant — time-based separation is an acceptable alternative to physical separation", "Not compliant — clean and soiled traffic must have physically separate pathways to prevent cross-contamination"],
        baseCorrectIndex: 1,
        baseExplanation: "Clean and soiled traffic flows must be physically separated, not just temporally separated. Time-based separation does not eliminate surface contamination left by soiled traffic that can contaminate clean items passing through later.",
        baseXp: 15,
        followUp: {
          question: "The facility argues that they thoroughly clean the corridor between soiled and clean traffic times. Environmental cultures taken from the corridor walls and floor after cleaning show no significant pathogen growth. Does this data support their time-separation approach?",
          options: [
            "Yes — negative cultures prove the corridor is safe for clean traffic",
            "No — point-in-time cultures do not guarantee ongoing cleanliness throughout the clean traffic period; surfaces can be re-contaminated by personnel, air currents, or residual moisture; physical separation is a systemic control that does not rely on the consistency of cleaning performance",
            "Yes — as long as they continue to culture and document",
            "The cultures are irrelevant — traffic separation is about workflow, not contamination"
          ],
          correctIndex: 1,
          explanation: "Environmental cultures provide only a snapshot in time and do not guarantee sustained cleanliness. Physical separation is an engineering control that provides consistent protection regardless of cleaning performance variability. The hierarchy of controls places engineering controls (physical separation) above administrative controls (scheduling and cleaning). Time-based separation introduces human error risk that physical separation eliminates.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg2",
        baseQuestion: "A surveyor follows the flow of sterile instruments from SPD to the OR. The instruments travel through a clean corridor, but the corridor also has access doors to soiled utility rooms along its length. Are these access points a concern?",
        baseOptions: ["No concern — the doors are closed", "Yes — soiled utility room doors opening into clean corridors can introduce contaminated air and create cross-traffic opportunities"],
        baseCorrectIndex: 1,
        baseExplanation: "Soiled utility room doors opening into clean corridors create opportunities for contaminated air release, cross-traffic between clean and soiled activities, and potential contact contamination on door handles and frames. Clean corridors should not have direct access to soiled utility rooms.",
        baseXp: 15,
        followUp: {
          question: "The facility cannot relocate the soiled utility rooms due to structural limitations. They propose installing self-closing doors with negative pressure in the soiled rooms. Is this an acceptable mitigation?",
          options: [
            "No — the soiled rooms must be physically relocated regardless of cost",
            "This is a reasonable mitigation if: the self-closing mechanism is reliable and regularly tested, negative pressure is continuously monitored and documented, doors have adequate seals, the corridor is not the primary clean transport route, and an ICRA evaluates the ongoing risk",
            "Yes — self-closing doors alone are sufficient",
            "Only if the doors are also equipped with airlocks"
          ],
          correctIndex: 1,
          explanation: "When physical relocation is not feasible, engineered controls can mitigate risk. Self-closing doors with negative pressure in soiled rooms reduce but do not eliminate cross-contamination risk. The mitigation's adequacy depends on reliable door mechanisms, continuous pressure monitoring, proper door seals, and corridor use patterns. An infection control risk assessment should evaluate whether the mitigation sufficiently reduces risk for the specific clinical context.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg3",
        baseQuestion: "A surveyor observes a clean instrument tray being transported on a cart through a corridor. A housekeeper is mopping the same corridor at the same time with a soiled mop bucket. Is this acceptable?",
        baseOptions: ["Acceptable — the instrument tray is covered", "Not acceptable — actively mopping with contaminated water creates aerosols and splash that can contaminate the covered tray and cart"],
        baseCorrectIndex: 1,
        baseExplanation: "Active mopping generates aerosols and splash from contaminated mop water that can settle on covered trays and transport carts. Clean instrument transport and active cleaning activities should not occur simultaneously in the same corridor.",
        baseXp: 15,
        followUp: {
          question: "The EVS department says coordinating mopping schedules with instrument transport is logistically impossible because transport happens continuously throughout the day. How should the facility manage this conflict?",
          options: [
            "Accept the risk since coordination is impractical",
            "Implement a communication and coordination system: establish priority right-of-way for clean instrument transport, train housekeepers to pause mopping and move wet areas when clean carts pass, use 'transport in progress' signals, and schedule heavy corridor cleaning during low-transport periods",
            "Only mop corridors at night when no transport occurs",
            "Switch to dry mopping methods exclusively"
          ],
          correctIndex: 1,
          explanation: "The solution requires a coordinated approach: clean instrument transport takes priority in shared corridors, EVS staff must be trained to recognize and yield to clean transport carts, communication systems (visual signals, radio) can coordinate timing, and heavy cleaning should be scheduled during known low-transport periods. The goal is to minimize simultaneous exposure, not achieve zero overlap.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg4",
        baseQuestion: "A surveyor visits the clean core of the SPD and notices a tech eating a snack at the assembly workstation. Is this acceptable?",
        baseOptions: ["Acceptable — the tech is on break and not handling instruments", "Not acceptable — no food or drink is allowed in the clean core or any instrument processing area"],
        baseCorrectIndex: 1,
        baseExplanation: "Food, drink, and personal items must not be present in clean instrument processing areas. Food particles attract pests, create contamination risk, and eating introduces oral flora to a controlled environment where instrument integrity must be maintained.",
        baseXp: 15,
        followUp: {
          question: "The tech says the break room is a 5-minute walk away and her 15-minute break doesn't allow time to get there and back. Several other techs admit to eating at workstations for the same reason. What systemic issue does this reveal?",
          options: [
            "The techs need to manage their time better",
            "The break room location creates a workflow barrier to compliance; the facility should provide a closer break area for SPD staff, adjust break time to account for travel, or consider satellite break stations near the processing area — compliance failures that are driven by facility design should be addressed with facility solutions, not disciplinary action alone",
            "Allow eating in the decontamination area since it's going to be cleaned anyway",
            "Provide snacks that can be eaten in under 2 minutes"
          ],
          correctIndex: 1,
          explanation: "When compliance failures are widespread and driven by facility design or scheduling constraints, the solution must address the root cause. A break room too far from the work area creates a predictable compliance barrier. Solutions include relocating or adding a break area, adjusting break duration, or creating compliant satellite break stations. Disciplinary action without addressing the root cause will not produce sustained compliance.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg5",
        baseQuestion: "A pass-through window between the decontamination room and the clean assembly area has both sides open simultaneously. A tech on the decontamination side is handing instruments through to a tech on the clean side. Is this acceptable?",
        baseOptions: ["Acceptable — pass-through windows are designed for transferring items between areas", "Not acceptable — pass-through windows must not have both sides open simultaneously; one side must close before the other opens to maintain the pressure barrier between clean and soiled zones"],
        baseCorrectIndex: 1,
        baseExplanation: "Pass-through windows function as barriers between clean and soiled zones. Both sides open simultaneously negates the barrier function, allowing contaminated air from decontamination to flow directly into the clean assembly area. One side must close before the other opens.",
        baseXp: 15,
        followUp: {
          question: "The pass-through window is not equipped with an interlock mechanism — both doors can physically be opened at the same time. The facility relies on staff training to ensure only one side is open. A surveyor observes this happening three times in one hour. What should be done?",
          options: [
            "Retrain the staff on proper pass-through use",
            "Install a mechanical or electronic interlock that physically prevents both sides from being open simultaneously — administrative controls (training) have clearly failed, and an engineering control (interlock) is needed to enforce the barrier; this is a higher-priority capital improvement that directly impacts infection prevention",
            "Lock the pass-through and use the door instead",
            "Post a sign on both sides reminding staff to close before opening"
          ],
          correctIndex: 1,
          explanation: "Three violations in one hour demonstrates that administrative controls (training, signage) are insufficient. Per the hierarchy of controls, an engineering control (mechanical or electronic interlock) is the appropriate solution when administrative controls fail. Interlocks physically prevent both sides from opening simultaneously, removing reliance on human compliance. This should be prioritized as a patient safety capital improvement.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg6",
        baseQuestion: "A surveyor observes that soiled linen bags from the OR are temporarily staged in the clean core hallway while waiting for the soiled linen cart. Is this staging location acceptable?",
        baseOptions: ["Acceptable — the bags are sealed and it's temporary", "Not acceptable — soiled linen must never be staged in clean areas, even temporarily"],
        baseCorrectIndex: 1,
        baseExplanation: "Soiled linen, regardless of how it is contained, must not be placed in clean areas. Even sealed bags can have external contamination from handling. Soiled materials must remain in designated soiled areas throughout the entire collection and transport process.",
        baseXp: 15,
        followUp: {
          question: "The OR staff say there is no soiled staging area on the floor and they have nowhere to put soiled linen bags between cases. The soiled linen cart is in the basement and only comes up twice a day. What changes are needed?",
          options: [
            "Allow staging in the clean hallway since there is no alternative",
            "Establish a designated soiled staging area on the OR floor (soiled utility room, dedicated alcove with appropriate ventilation), increase linen cart pickup frequency to match OR turnover needs, and ensure soiled holding areas have appropriate containment and are separate from all clean pathways",
            "Have OR staff take soiled linen to the basement themselves",
            "Use smaller linen bags that can fit in the OR room trash bins"
          ],
          correctIndex: 1,
          explanation: "The lack of a soiled staging area is a facility design deficiency that must be corrected. Solutions include designating a soiled holding area on the OR floor with appropriate ventilation and containment, increasing pickup frequency to prevent accumulation, and ensuring all soiled materials are processed through designated soiled pathways. The workflow gap explains the non-compliant behavior and must be addressed with facility and process solutions.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg7",
        baseQuestion: "A surveyor notices that clean supplies are being delivered to patient floors through the same elevator that transports soiled linen and trash at other times. Is this acceptable?",
        baseOptions: ["Acceptable — they are not transported at the same time", "It depends — shared elevator use requires a documented cleaning protocol between soiled and clean use, and ideally separate elevators should be designated for clean and soiled transport"],
        baseCorrectIndex: 1,
        baseExplanation: "While dedicated clean and soiled elevators are the ideal standard, many facilities must share elevator resources. When shared, a documented and enforced cleaning protocol must exist between soiled and clean uses to prevent cross-contamination of elevator surfaces that contact transport carts and containers.",
        baseXp: 15,
        followUp: {
          question: "The facility has only two elevators and cannot dedicate one to clean transport. They implement a cleaning protocol between uses, but compliance monitoring shows the elevator is cleaned between uses only 45% of the time during peak hours. What additional measures should be considered?",
          options: [
            "45% compliance is acceptable given the constraint",
            "Implement multiple strategies: consider automated elevator sanitization systems, add scheduling software to coordinate clean and soiled elevator requests, designate specific time blocks for clean vs. soiled transport, train transport staff to clean the elevator themselves if EVS is unavailable, and install easy-to-use cleaning supply stations at elevator landings",
            "Accept the risk since the facility has limited elevators",
            "Transport all clean supplies via the stairs"
          ],
          correctIndex: 1,
          explanation: "Low compliance with a cleaning protocol indicates the protocol is not feasible as designed. Solutions must make compliance easier: automated sanitization, scheduling coordination, time-blocked transport, empowering transport staff to clean, and accessible cleaning supplies. Multiple layered interventions typically improve compliance more than relying on a single process. The goal is to make the right behavior the easy behavior.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg8",
        baseQuestion: "A surveyor observes that the SPD decontamination room has a positive pressure relative to the adjacent clean assembly area. Is this the correct pressure relationship?",
        baseOptions: ["Correct — positive pressure in decontamination pushes contaminated air into the exhaust system", "Incorrect — the decontamination room must have negative pressure relative to adjacent clean areas to prevent contaminated air from flowing into clean zones"],
        baseCorrectIndex: 1,
        baseExplanation: "The decontamination room must maintain negative pressure relative to all adjacent clean areas. Negative pressure ensures air flows into the decontamination room from surrounding clean areas, preventing aerosolized contaminants from migrating outward.",
        baseXp: 15,
        followUp: {
          question: "After correcting the pressure relationship, a tech reports that when she opens the decontamination room door, she feels air rushing in from the clean side. However, when the adjacent clean assembly room door to the corridor is also open, she no longer feels the airflow. What does this indicate?",
          options: [
            "The system is working correctly — open doors naturally reduce airflow perception",
            "When the clean assembly room corridor door is open, the pressure differential between decontamination and clean assembly is disrupted because the clean room is now equalized with corridor pressure; this means the clean room must also maintain controlled access with doors closed to preserve the pressure cascade throughout the SPD suite",
            "The airflow feeling is subjective and not a reliable indicator",
            "The HVAC system needs more fan power"
          ],
          correctIndex: 1,
          explanation: "Pressure differentials work as a cascade — each room's pressure is relative to adjacent spaces. Opening the clean assembly room door to the corridor equalizes that room's pressure with the corridor, disrupting the pressure cascade that keeps decontamination negative relative to clean assembly. This demonstrates why all rooms in the pressure cascade must maintain controlled access with doors kept closed. The entire suite's pressure relationships must be considered as a system.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg9",
        baseQuestion: "A scrub tech in the OR opens a sterile instrument tray on the back table. She then walks to the soiled utility room to discard trash, re-enters the OR, and continues setting up the sterile field without re-gowning or re-gloving. Is this acceptable?",
        baseOptions: ["Acceptable — she didn't touch anything contaminated in the utility room", "Not acceptable — entering a soiled area and returning to a sterile field requires at minimum hand hygiene and fresh gloves; depending on contact exposure, a gown change may also be required"],
        baseCorrectIndex: 1,
        baseExplanation: "Transitioning between soiled and clean/sterile areas requires decontamination measures. The soiled utility room surfaces, door handles, and air are contaminated. Returning to a sterile field without at minimum performing hand hygiene and changing gloves introduces contamination risk.",
        baseXp: 15,
        followUp: {
          question: "The scrub tech says she used her elbow to open the utility room door and didn't touch any surfaces inside. She argues her gloves are still clean. A surveyor disagrees. What is the surveyor's rationale?",
          options: [
            "The surveyor is being overly cautious — elbow technique is a valid contamination avoidance method",
            "The soiled utility room environment itself (air, aerosols, settled particles) contaminates clothing and exposed surfaces upon entry; 'no-touch' door opening does not prevent airborne or settling contamination; standard practice requires treating any entry into a soiled zone as a contamination event requiring appropriate decontamination before returning to clean/sterile activities",
            "The surveyor's concern is only valid if the utility room had visibly dirty surfaces",
            "The elbow technique is fine as long as she also uses hand sanitizer"
          ],
          correctIndex: 1,
          explanation: "Contamination in soiled areas is not limited to surface contact. Airborne particles, aerosols from flushing hoppers, and settled contaminants in the soiled room can land on scrub attire, hair coverings, and gloves simply by being in the space. No-touch door opening is good practice but does not eliminate environmental exposure. Any entry into a soiled zone requires decontamination measures proportional to the contact risk before returning to clean or sterile activities.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg10",
        baseQuestion: "A surveyor examines the facility's one-way workflow in SPD. Instruments flow from decontamination to clean assembly to sterilization to sterile storage. However, the sterilizer loading area is accessible from both the clean assembly side and the sterile storage side. Is this a concern?",
        baseOptions: ["No concern — sterilizers naturally bridge the clean-to-sterile transition", "Yes — the sterilizer area must have controlled access to prevent unsterilized items from entering the sterile storage side and sterile items from being contaminated by traffic from the clean assembly area"],
        baseCorrectIndex: 1,
        baseExplanation: "While sterilizers do bridge the clean-to-sterile transition, access to the sterilizer area from both sides must be controlled to prevent workflow confusion, potential mixing of sterilized and unsterilized items, and traffic contamination from the clean assembly area reaching sterile storage.",
        baseXp: 15,
        followUp: {
          question: "The facility has pass-through sterilizers that load from the clean side and unload from the sterile side. A tech on the sterile side opens the sterilizer door, finds the load is still in its cooling phase, and closes the door. She then handles sterile items from the storage shelves with the same gloves. Is this sequence acceptable?",
          options: [
            "Yes — the sterilizer door is part of the sterile side equipment",
            "No — the sterilizer door handle on the sterile side can be contaminated by steam, condensation, and thermal residue from the sterilization process; touching the sterilizer and then handling stored sterile items without changing gloves can transfer contaminants to sterile packaging",
            "Yes — as long as the sterilizer load passed its chemical indicators",
            "Only a concern if the load was a wet pack"
          ],
          correctIndex: 1,
          explanation: "Sterilizer door handles and exterior surfaces are not sterile — they are exposed to steam, condensation, and environmental contaminants. Touching the sterilizer door and then handling sterile stored items without changing gloves transfers potential contaminants to sterile packaging. Staff must perform hand hygiene and change gloves between equipment handling and sterile item handling.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg11",
        baseQuestion: "A surveyor notices that in the OR suite, clean supplies are stored in a room that also contains the ice machine and staff personal belongings (purses, phones, jackets). Is this acceptable?",
        baseOptions: ["Acceptable — the room is on the clean side of the OR suite", "Not acceptable — clean supply storage must be a dedicated space free from personal items and non-supply equipment that can introduce outside contaminants"],
        baseCorrectIndex: 1,
        baseExplanation: "Clean supply rooms must be dedicated to supply storage. Personal belongings (bags, phones, outerwear) carry environmental contaminants from outside the healthcare facility. Mixing these with clean supplies creates contamination risk. The ice machine should also be in a separate, clean location.",
        baseXp: 15,
        followUp: {
          question: "Staff say there is no other space for personal belongings in the OR suite. The current locker room is being renovated and won't be available for 3 months. How should personal belongings be managed in the interim?",
          options: [
            "Continue using the supply room — it's only temporary",
            "Provide a temporary designated area for personal belongings that is separate from all clean supply and clinical areas: a portable locker unit in a non-clinical corridor, a designated section of a non-patient conference room, or covered bins in the staff break area — any solution that physically separates personal items from clinical supplies",
            "Have staff leave belongings in their cars",
            "Allow personal items if they are placed in sealed plastic bags"
          ],
          correctIndex: 1,
          explanation: "Even during renovation, clean supply integrity must be maintained. Temporary solutions for personal belongings include portable lockers in non-clinical areas, repurposed conference space, or designated containers in the break room. The key principle is physical separation of outside-contaminated personal items from clinical supplies. 'It's only temporary' does not justify compromising supply cleanliness — 3 months is a significant exposure period.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg12",
        baseQuestion: "A surveyor follows a surgical case from start to finish. At the end of the case, the circulating nurse bags the soiled instruments and places the bag in the clean corridor outside the OR while she finishes documentation. Is this acceptable?",
        baseOptions: ["Acceptable — the instruments are bagged and contained", "Not acceptable — soiled instruments, even when bagged, must not be placed in clean corridors; they must go directly to the soiled corridor or soiled utility room"],
        baseCorrectIndex: 1,
        baseExplanation: "Soiled instruments must travel through designated soiled pathways only. Placing soiled items — even bagged — in clean corridors introduces contamination to the clean environment through bag exterior contamination, potential leaks, and normalization of improper workflow.",
        baseXp: 15,
        followUp: {
          question: "The nurse argues that the soiled corridor access is on the opposite side of the OR room and the clean corridor was the faster route. She says the bag was sealed and only in the corridor for 3 minutes. How should this be addressed beyond individual correction?",
          options: [
            "Counsel the nurse and move on — it was a one-time shortcut",
            "Assess whether the OR suite layout creates a systemic barrier to compliance: if soiled corridor access is significantly less convenient than clean corridor access, the workflow creates predictable non-compliance; solutions may include adding soiled corridor access points, providing soiled transport carts in each OR room, or redesigning traffic flow during future renovation planning",
            "Lock the clean corridor doors to prevent exit with soiled items",
            "Accept that some cross-contamination is unavoidable in busy ORs"
          ],
          correctIndex: 1,
          explanation: "When layout creates a convenience differential between correct and incorrect behavior, predictable non-compliance results. The facility must assess whether the physical design creates barriers to compliant workflow and implement solutions that make proper soiled transport as convenient as the improper route. This may include additional soiled access points, in-room soiled staging, or future renovation planning to optimize traffic flow.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg13",
        baseQuestion: "A surveyor examines a multi-floor hospital and asks how clean and soiled materials are separated during vertical transport (elevator use). The facility says they use the same elevator for both but transport them at different times. Is this adequate?",
        baseOptions: ["Adequate — temporal separation provides sufficient protection", "Not adequate — without a cleaning protocol between soiled and clean uses, and ideally with dedicated elevators, temporal separation alone does not prevent surface cross-contamination"],
        baseCorrectIndex: 1,
        baseExplanation: "Temporal separation alone is insufficient because soiled materials contaminate elevator surfaces (walls, floors, buttons, handrails) that then contact clean materials and transport carts. Dedicated elevators are preferred; if shared, a validated cleaning protocol between soiled and clean uses is required.",
        baseXp: 15,
        followUp: {
          question: "The facility cannot afford dedicated elevators. They implement a cleaning protocol but discover that transport staff often don't know if the previous elevator use was clean or soiled. What system should be implemented?",
          options: [
            "Trust the cleaning staff to clean between every use regardless",
            "Implement a tracking and communication system: electronic log at each elevator tracking last use type (clean/soiled), visual indicator system (green/red card) displayed on the elevator door indicating current cleanliness status, and real-time communication capability between transport teams to coordinate elevator use",
            "Always assume the elevator is dirty and clean before every clean transport",
            "Only use the elevator for soiled transport and use the stairs for clean transport"
          ],
          correctIndex: 1,
          explanation: "A visual tracking system eliminates uncertainty about elevator contamination status. Options include electronic logging, color-coded status cards displayed at elevator doors, or integrated communication systems. 'Always clean before clean transport' (option C) is also reasonable as a policy but adds significant time; a tracking system allows targeted cleaning while maintaining workflow efficiency. The key is removing ambiguity about contamination status.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg14",
        baseQuestion: "A surveyor observes a soiled utility room on a patient care unit. The room contains: a hopper for liquid waste disposal, a soiled linen hamper, a dirty equipment staging area, and a hand hygiene sink. The door is propped open. Is this room compliant?",
        baseOptions: ["Compliant — all required elements are present", "Not compliant — the soiled utility room door must remain closed to contain contaminated air and odors and maintain negative pressure relative to the corridor"],
        baseCorrectIndex: 1,
        baseExplanation: "Soiled utility rooms must maintain closed doors to contain aerosolized contaminants generated by waste disposal activities and to maintain the negative pressure differential that prevents contaminated air from flowing into patient corridors.",
        baseXp: 15,
        followUp: {
          question: "Staff prop the door open because the room has no mechanical ventilation and becomes extremely hot and odorous during busy periods. The negative pressure is achieved only by the HVAC exhaust, which appears inadequate. What should be assessed?",
          options: [
            "Install an air freshener and instruct staff to keep the door closed",
            "The HVAC exhaust capacity must be evaluated and likely upgraded: inadequate ventilation in a soiled utility room creates occupational health concerns for staff, fails to contain contaminants, and results in predictable non-compliance (propped doors); the facility must ensure the room meets minimum ventilation requirements (typically 10 air changes per hour with all air exhausted directly outside)",
            "Move the hopper to a different location to reduce odor",
            "Add a fan to circulate air inside the room"
          ],
          correctIndex: 1,
          explanation: "Propped doors indicate an environmental deficiency, not a staff compliance problem. Soiled utility rooms require adequate exhaust ventilation (typically 10 air changes per hour, 100% exhausted to the outside) to maintain negative pressure, remove contaminants, and maintain tolerable working conditions. Insufficient ventilation must be remediated through HVAC upgrades. Adding a fan would recirculate contaminated air rather than removing it.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg15",
        baseQuestion: "A facility has a clean supply room and a soiled utility room on the same unit. A surveyor notices they share a common wall and a shared ventilation return duct. Is the shared ductwork a concern?",
        baseOptions: ["No — the duct system filters all air before recirculation", "Yes — shared return air ductwork between clean and soiled rooms can transfer airborne contaminants from the soiled room to the clean supply room, especially if the soiled room is at higher pressure"],
        baseCorrectIndex: 1,
        baseExplanation: "Shared return air ductwork between clean and soiled spaces creates a pathway for airborne contaminant transfer. The soiled utility room should have dedicated exhaust that is discharged directly to the outside, not recirculated through shared ductwork with clean supply areas.",
        baseXp: 15,
        followUp: {
          question: "The facilities engineer says separating the ductwork would require opening walls and ceilings and cost $50,000. He proposes installing a HEPA filter in the shared duct between the two rooms as a less expensive alternative. Is this an acceptable solution?",
          options: [
            "Yes — HEPA filtration removes 99.97% of particles",
            "A HEPA filter in the duct is an improvement but not a complete solution: it filters particulates but not gases and odors from the soiled room, it requires a maintenance and filter change schedule that must be strictly followed, and the ideal solution remains dedicated exhaust for the soiled room; the HEPA filter may be an acceptable interim measure if combined with monitoring and a long-term plan for duct separation",
            "No — only complete duct separation is acceptable",
            "Yes — but only if the filter is changed monthly"
          ],
          correctIndex: 1,
          explanation: "A HEPA filter addresses particulate contamination but not gaseous contaminants or odors. It introduces a maintenance dependency — if the filter is not changed on schedule, it can become a source of contamination itself. As an interim measure with documented monitoring and a long-term remediation plan, it may be acceptable. The permanent solution should include dedicated exhaust for the soiled room discharging directly to the outside.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg16",
        baseQuestion: "A surveyor observes an OR suite where sterile cases (instrument trays, implants) are brought into the OR through the same door that patients enter. Clean and soiled instruments also exit through this single door. Is a single-door OR acceptable?",
        baseOptions: ["Not acceptable — ORs must have separate clean and soiled entry/exit", "It can be acceptable — many modern OR designs use a single-door configuration with managed workflow; the key is traffic management, not necessarily separate doors"],
        baseCorrectIndex: 1,
        baseExplanation: "Modern OR design standards acknowledge that single-door ORs can be compliant if traffic flow is properly managed. The critical requirement is that clean and soiled items do not travel simultaneously and that workflow procedures prevent cross-contamination, not necessarily that separate doors exist.",
        baseXp: 15,
        followUp: {
          question: "In the single-door OR, a surveyor observes that during room turnover, soiled instruments are being removed through the door at the same time the EVS team is bringing in cleaning equipment. The incoming cleaning supplies pass within inches of the outgoing soiled instrument container. Is this managed workflow?",
          options: [
            "Yes — EVS equipment and soiled instruments are both 'dirty' so there is no conflict",
            "No — managed workflow in a single-door OR requires sequential, not simultaneous, traffic: all soiled items must be removed before clean items (including cleaning supplies) enter; simultaneous bidirectional traffic through a single door defeats the purpose of managed flow and creates direct cross-contamination risk",
            "Yes — as long as nothing touches",
            "This is acceptable during turnover because speed is important for case scheduling"
          ],
          correctIndex: 1,
          explanation: "Managed workflow in a single-door OR means strict sequential traffic: (1) all soiled items and waste exit, (2) the doorway and threshold are cleaned, (3) cleaning equipment and supplies enter, (4) after cleaning, fresh clean supplies and sterile instruments enter. Simultaneous bidirectional traffic — regardless of what is passing — negates the managed flow concept. Speed does not justify cross-contamination risk.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg17",
        baseQuestion: "A surveyor sees a nurse carrying a clean wound care supply kit into a patient room where contact precautions are in effect. She dons her PPE (gown and gloves) before entering. After dressing the wound, she exits the room still carrying unused clean supplies from the kit. Can these unused supplies be returned to the clean supply area?",
        baseOptions: ["Yes — they were sealed and unused", "No — any supplies that enter a contact precaution room, whether used or not, are considered contaminated and must be discarded or left in the room"],
        baseCorrectIndex: 1,
        baseExplanation: "All supplies that enter a contact precaution room are considered potentially contaminated, even if packaging appears intact and unused. They must not be returned to the clean supply area. Only the supplies needed for the procedure should be brought into the room.",
        baseXp: 15,
        followUp: {
          question: "The nurse says the facility's wound care kits are expensive and contain many items that aren't always needed. Discarding unopened items every visit is wasteful. How should this workflow be redesigned to reduce waste while maintaining infection prevention standards?",
          options: [
            "Allow sealed items to be returned if they are wiped with disinfectant",
            "Redesign the approach: create smaller, procedure-specific supply kits with only essential items; use a clean cart or supply caddy outside the room where the nurse can retrieve additional items as needed without bringing excess into the room; implement par-level stocking in isolation rooms for frequently used supplies",
            "Accept the waste as a cost of infection prevention",
            "Have a second nurse outside the room hand in additional supplies as needed"
          ],
          correctIndex: 1,
          explanation: "The solution addresses both infection prevention and waste reduction: smaller kits with essential items reduce the volume of supplies entering the room, a clean supply cart outside the door allows retrieval of additional items without contaminating excess, and in-room par-level stocking reduces the need to bring external supplies in at all. The two-nurse system (option D) works for specific procedures but isn't sustainable for routine care. Wiping and returning items (option A) is not acceptable.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg18",
        baseQuestion: "A facility is designing a new SPD layout. The architect's plan shows the decontamination room with a window to the clean assembly area for visual communication between staff. Is a window between these areas acceptable?",
        baseOptions: ["Acceptable — visual communication improves workflow", "Acceptable only if the window is permanently sealed and airtight; an operable window between decontamination and clean assembly would breach the contamination barrier"],
        baseCorrectIndex: 1,
        baseExplanation: "A permanently sealed, airtight window between decontamination and clean assembly can facilitate visual communication without breaching the contamination barrier. However, it must be truly hermetically sealed — any gap would allow contaminated air transfer from the negative-pressure decontamination room if the pressure differential is disrupted.",
        baseXp: 15,
        followUp: {
          question: "After installation, staff drill a small hole through the sealed window frame to pass a communication cable through to a two-way intercom. They seal the cable entry with silicone caulk. Is this modification acceptable?",
          options: [
            "Yes — the hole is sealed with caulk",
            "No — any penetration through the contamination barrier compromises its integrity: silicone caulk degrades over time, can crack or peel, and does not provide an airtight seal equivalent to the original barrier construction; the intercom cable should be routed through the ceiling or wall using proper sealed conduit, and the window penetration should be professionally repaired to restore the original barrier integrity",
            "Yes — as long as the caulk is reapplied annually",
            "Only if the hole is less than 1 inch in diameter"
          ],
          correctIndex: 1,
          explanation: "Field-applied sealants degrade over time and do not provide the same barrier integrity as engineered construction. Any penetration through a clean/soiled barrier must be properly engineered with sealed conduit designed for the purpose. The improvised caulked cable penetration should be removed, the window restored, and the cable rerouted through proper sealed conduit via the wall or ceiling structure.",
          expertXp: 30
        }
      },
      {
        id: "dd-seg19",
        baseQuestion: "A surveyor observes that the facility's loading dock is used for both receiving clean supplies and staging soiled waste for pickup. The same dock area handles both activities at different times. Is this acceptable?",
        baseOptions: ["Acceptable — temporal separation is sufficient at the loading dock level", "Not ideal — best practice is separate receiving and waste staging areas; if shared, there must be a thorough cleaning protocol between activities and clear scheduling to prevent overlap"],
        baseCorrectIndex: 1,
        baseExplanation: "Shared loading dock use requires careful management to prevent cross-contamination between clean receiving and soiled waste staging. While physical separation is ideal, managed shared use with cleaning protocols and scheduling can be acceptable if rigorously enforced.",
        baseXp: 15,
        followUp: {
          question: "A delivery of sterile supplies arrives while regulated medical waste containers are still staged on the dock awaiting pickup. The delivery driver begins unloading boxes of sterile supplies 10 feet from the waste containers. What should happen?",
          options: [
            "10 feet of separation is adequate — proceed with the delivery",
            "Halt the sterile supply delivery until the waste containers are removed from the dock area; sterile supplies must not be received, staged, or unpacked in proximity to regulated medical waste; the waste must be relocated or the delivery rescheduled; this incident should trigger a review of the dock scheduling system",
            "Cover the waste containers with tarps during the delivery",
            "The delivery driver should move the waste containers himself"
          ],
          correctIndex: 1,
          explanation: "Sterile supply receiving in proximity to regulated medical waste creates contamination risk through shared surfaces, airborne contaminants, and potential physical contact during handling. The delivery must be halted until waste is removed. This situation indicates a scheduling failure that must be corrected to prevent recurrence. Tarps (option C) do not prevent airborne or surface contamination from waste staging areas.",
          expertXp: 25
        }
      },
      {
        id: "dd-seg20",
        baseQuestion: "A surveyor asks a facilities engineer to demonstrate the pressure relationship between the OR suite, the central sterile corridor, and the adjacent patient care unit. The engineer shows that the OR suite has positive pressure relative to the corridor, but the corridor has equal pressure relative to the patient care unit. Is this adequate?",
        baseOptions: ["Yes — the OR positive pressure is the critical relationship", "Not ideal — a pressure cascade should exist: the OR suite should be most positive, the sterile corridor at intermediate pressure, and the general patient care unit at the lowest pressure to ensure air flows from cleanest to least clean areas"],
        baseCorrectIndex: 1,
        baseExplanation: "Pressure relationships should form a cascade from cleanest to least clean areas. The OR suite (highest positive pressure) should push air into the sterile corridor (intermediate pressure), which should push air into general patient areas (lowest pressure). Equal pressure between the corridor and patient unit means air can flow in either direction, potentially bringing contamination into the sterile corridor.",
        baseXp: 15,
        followUp: {
          question: "The facilities engineer says achieving a full pressure cascade would require significant HVAC modifications costing over $200,000. He proposes installing vestibule airlocks at the transition points between the sterile corridor and the patient care unit instead. Is this an acceptable alternative?",
          options: [
            "No — only a full pressure cascade is acceptable",
            "Vestibule airlocks can be an effective alternative if properly designed: they create a buffer zone that reduces direct air exchange between zones, but they must have their own ventilation, self-closing doors on both sides, and ideally positive pressure within the vestibule to prevent contamination flow in either direction; the design must be evaluated by infection prevention and validated with air quality testing",
            "Yes — airlocks are always superior to pressure cascades",
            "Just install HEPA filters in the corridor instead"
          ],
          correctIndex: 1,
          explanation: "Vestibule airlocks are a recognized engineering solution for creating zone separation when a continuous pressure cascade is not feasible. They must be properly designed with independent ventilation, self-closing doors (ideally interlocked), and appropriate pressure relative to both adjacent zones. The design should be developed collaboratively between facilities engineering, infection prevention, and potentially an HVAC consultant, with post-installation air quality validation.",
          expertXp: 30
        }
      }
    ]
  }
];
