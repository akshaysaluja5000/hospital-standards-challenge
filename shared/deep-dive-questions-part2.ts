import type { DeepDiveLevel } from "./schema";

export const deepDiveLevelsPart2: DeepDiveLevel[] = [
  {
    id: "dd-instruments",
    name: "Instruments & Inspection Deep Dive",
    description: "Master instrument inspection, functionality testing, and processing compliance with expert-level tracer scenarios.",
    icon: "Microscope",
    color: "hsl(340, 82%, 50%)",
    baseLevelId: "instruments",
    questions: [
      {
        id: "dd-ins1",
        baseQuestion: "A surgical tech inspects a laparoscopic scissors before assembling a tray and notices the tips do not fully close when the handle is squeezed. She decides to include it in the tray anyway since it 'mostly works.' Is this acceptable?",
        baseOptions: ["Acceptable — minor tip misalignment does not affect function", "Not acceptable — instruments must pass full functionality testing before tray assembly"],
        baseCorrectIndex: 1,
        baseExplanation: "Every instrument must pass functionality testing before being placed on a tray. Scissors that do not fully close cannot cut tissue effectively and pose a patient safety risk. The instrument must be removed from service and sent for repair.",
        baseXp: 15,
        followUp: {
          question: "The tech removes the scissors but does not document the defect or tag the instrument. She simply places it in a 'to be fixed' bin. What critical step has she missed?",
          options: [
            "She should have thrown the instrument away",
            "She should have completed a repair/deficiency tag documenting the specific defect, date, and her initials so the issue is tracked through the repair process",
            "She should have asked a surgeon to evaluate it first",
            "No step was missed — placing it in the repair bin is sufficient"
          ],
          correctIndex: 1,
          explanation: "All defective instruments must be tagged with a repair/deficiency form documenting the specific problem, date identified, and identifier of the person who found it. This creates accountability and ensures proper tracking through the repair cycle. Simply placing instruments in a bin without documentation breaks the chain of traceability.",
          expertXp: 25
        }
      },
      {
        id: "dd-ins2",
        baseQuestion: "During post-use inspection, a tech finds brownish staining inside the lumen of a suction tip that does not come off with routine cleaning. What should be done?",
        baseOptions: ["Continue using the instrument — some staining is normal", "Remove from service for further evaluation — persistent staining inside lumens may indicate biofilm or corrosion"],
        baseCorrectIndex: 1,
        baseExplanation: "Persistent staining inside lumens that resists routine cleaning may indicate biofilm buildup, corrosion, or residual organic material. The instrument should be removed from service and evaluated with enhanced cleaning methods or sent for professional assessment.",
        baseXp: 15,
        followUp: {
          question: "The supervisor recommends using a lighted magnification device to inspect the lumen interior. What is the minimum standard for lumen inspection according to best practices?",
          options: [
            "Visual inspection with the naked eye is sufficient",
            "Lumened instruments should be inspected using illuminated magnification, and cleaning should be verified with a borescope or cleaning verification test when biofilm is suspected",
            "Lumens only need to be inspected if the instrument is visibly soiled",
            "A biological indicator run through the lumen is sufficient"
          ],
          correctIndex: 1,
          explanation: "Best practice for lumen inspection includes illuminated magnification to detect residual soil, biofilm, or corrosion that is invisible to the naked eye. When biofilm is suspected, a borescope (flexible camera) or ATP/protein cleaning verification tests should be used to confirm the lumen is free of organic residue before returning the instrument to service.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins3",
        baseQuestion: "A new SPD tech is assembling a major tray and notices that the count sheet lists 42 instruments but she can only find 41 in the tray. She adds a similar instrument from another set to make the count match. Is this acceptable?",
        baseOptions: ["Acceptable — as long as the total count is correct", "Not acceptable — substituting instruments without authorization compromises tray integrity and count sheet accuracy"],
        baseCorrectIndex: 1,
        baseExplanation: "Instrument count sheets are verified inventories specific to each tray set. Substituting instruments without proper authorization creates count discrepancies, may introduce incompatible instruments, and violates tray assembly protocols. The missing instrument must be investigated and documented.",
        baseXp: 15,
        followUp: {
          question: "The charge tech discovers the substitution during a spot-check. What systemic issue does this reveal, and what corrective action is needed?",
          options: [
            "The tech needs to be terminated immediately",
            "This reveals a training gap — the tech needs education on count sheet integrity, tray-specific instrument requirements, and the proper process for handling missing instruments including notification and documentation",
            "The tray should just be sent out since the instrument is similar enough",
            "Only the count sheet needs to be updated to reflect the new instrument"
          ],
          correctIndex: 1,
          explanation: "This reveals a competency and training gap. Corrective action should include re-education on count sheet integrity, the importance of tray-specific instrumentation, and the proper escalation process when instruments are missing (notify charge, document, provide alternative tray or delay). Disciplinary action alone does not fix the systemic issue.",
          expertXp: 25
        }
      },
      {
        id: "dd-ins4",
        baseQuestion: "An electrosurgical instrument (bovie pencil tip) is being inspected before sterilization. The tech checks the tip for debris but does not test the insulation. Is this inspection complete?",
        baseOptions: ["Yes — visual tip inspection is sufficient for electrosurgical instruments", "No — electrosurgical instruments require insulation integrity testing in addition to visual inspection"],
        baseCorrectIndex: 1,
        baseExplanation: "Electrosurgical instruments must have their insulation tested for cracks, pinholes, or defects that could cause unintended burns or electrical arcing. Visual tip inspection alone is insufficient. Insulation testing devices are used to verify the integrity of the insulating coating along the entire shaft.",
        baseXp: 15,
        followUp: {
          question: "The facility does not own an insulation testing device and relies solely on visual inspection of electrosurgical instruments. A surveyor identifies this during a tracer. What is the risk and required action?",
          options: [
            "Visual inspection is an acceptable alternative to insulation testing",
            "The facility must acquire insulation testing capability — microscopic insulation defects invisible to the naked eye can cause capacitive coupling, direct coupling burns, or electrical arcing injuries that are preventable with proper testing",
            "The facility can outsource insulation testing quarterly",
            "Only reusable electrosurgical instruments need insulation testing, not disposables"
          ],
          correctIndex: 1,
          explanation: "Microscopic insulation defects are invisible to the naked eye but can cause serious patient injuries including burns from capacitive coupling or direct current arcing. Facilities must have insulation testing capability for reusable electrosurgical instruments. This is a patient safety issue that a surveyor would cite as a finding requiring immediate corrective action.",
          expertXp: 35
        }
      },
      {
        id: "dd-ins5",
        baseQuestion: "A surgeon complains that a pair of Metzenbaum scissors 'doesn't cut well anymore.' The SPD tech tests the scissors by cutting through a thin latex glove and the scissors cut cleanly. Should the scissors be returned to service?",
        baseOptions: ["Yes — the scissors passed the cutting test", "No — the cutting test should use standardized test material, and the surgeon's concern warrants further evaluation"],
        baseCorrectIndex: 1,
        baseExplanation: "Sharpness testing should use standardized materials appropriate for the instrument type. Cutting a latex glove is not a validated sharpness test. The surgeon's clinical concern about cutting performance should be taken seriously and the instrument evaluated using proper testing methods or sent to an instrument repair specialist.",
        baseXp: 15,
        followUp: {
          question: "What is the proper method for testing scissors sharpness in SPD?",
          options: [
            "Cutting through gauze or paper towels",
            "Scissors should cut smoothly through designated test material (such as yellow test material/Teflon shims) along the entire blade length without snagging, folding, or requiring excessive pressure — tips should also cut without shredding",
            "Checking if the blades close completely is sufficient",
            "Only surgeons can evaluate sharpness — SPD cannot test for it"
          ],
          correctIndex: 1,
          explanation: "Proper scissors sharpness testing uses designated test materials and evaluates cutting performance along the entire blade length from pivot to tips. The scissors should cut cleanly without snagging, folding material between blades, or requiring excessive force. Tips should cut as cleanly as the mid-blade. This is a standardized, repeatable test that SPD techs should be trained to perform.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins6",
        baseQuestion: "Loaner instruments arrive at the facility the morning of surgery. The OR coordinator wants them brought directly to the OR for the 7:30 AM case. Is this acceptable?",
        baseOptions: ["Acceptable — loaner instruments can go directly to the OR if the vendor confirms they are sterile", "Not acceptable — all loaner instruments must go through SPD for decontamination, inspection, assembly, and sterilization regardless of vendor claims"],
        baseCorrectIndex: 1,
        baseExplanation: "All loaner instruments must be processed through the facility's SPD regardless of vendor sterility claims. This includes decontamination, inspection, functionality testing, assembly per instructions for use, and sterilization with appropriate biological monitoring. No exceptions exist for time pressure.",
        baseXp: 15,
        followUp: {
          question: "The surgeon insists the case cannot be delayed and the loaner instruments are needed. The vendor rep states the instruments were 'steam sterilized yesterday at another facility.' What is the correct response?",
          options: [
            "Accept the vendor's word and use the instruments since patient care comes first",
            "The instruments must still go through the facility's full reprocessing cycle — another facility's sterilization does not transfer; the case must be rescheduled or an alternative approach used if the instruments cannot be processed in time",
            "Use the instruments but run a flash sterilization cycle first",
            "Have the vendor sign a waiver and proceed"
          ],
          correctIndex: 1,
          explanation: "Each facility is independently responsible for ensuring instrument sterility. Another facility's processing does not transfer — there is no way to verify their processes, parameters, or biological monitoring results. The case must either be delayed until proper processing is complete, rescheduled, or an alternative surgical approach identified. Vendor waivers do not absolve the facility of liability.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins7",
        baseQuestion: "A tech notices that a ratcheted instrument (Kelly clamp) does not hold at the first ratchet position but locks at the second and third. Should this instrument be included in the tray?",
        baseOptions: ["Yes — it works at the second and third positions", "No — ratcheted instruments must hold securely at all ratchet positions to be considered functional"],
        baseCorrectIndex: 1,
        baseExplanation: "Ratcheted instruments must engage and hold at every ratchet position. Failure at the first position indicates worn ratchet teeth or misaligned jaws. This instrument could slip during a procedure, potentially losing a clamp on a vessel, and must be removed for repair.",
        baseXp: 15,
        followUp: {
          question: "The tech tests the ratchet by clicking it and shaking the instrument gently. Is this an adequate ratchet functionality test?",
          options: [
            "Yes — if it holds while shaking, the ratchet is functional",
            "The test should include engaging each ratchet position individually, applying moderate opening pressure at each position, and verifying the instrument does not spring open — a light shake does not simulate surgical use forces",
            "Ratchets only need to be tested annually during preventive maintenance",
            "Only the surgeon should test ratcheted instruments"
          ],
          correctIndex: 1,
          explanation: "Proper ratchet testing requires engaging each position individually and applying moderate opening pressure to verify the ratchet holds under force similar to surgical use. A gentle shake is insufficient as it does not test the holding strength that would be required when clamping tissue or vessels. Each position must be tested independently.",
          expertXp: 25
        }
      },
      {
        id: "dd-ins8",
        baseQuestion: "During a tray assembly, the tech notices a box lock (pivot point) on a hemostat has visible lateral play — the jaws wobble side to side when closed. The instrument still opens and closes smoothly. Can it be used?",
        baseOptions: ["Yes — smooth operation means it is functional", "No — lateral play at the box lock indicates a loose or worn pivot, which affects jaw alignment and clamping precision"],
        baseCorrectIndex: 1,
        baseExplanation: "Lateral play at the box lock means the pivot pin is worn or loose. This causes jaw misalignment, reducing clamping effectiveness and potentially allowing the instrument to slip off tissue or vessels during use. The instrument must be removed for repair.",
        baseXp: 15,
        followUp: {
          question: "A surgeon later reports that a hemostat slipped off a vessel during a case, causing brief uncontrolled bleeding. Investigation reveals the instrument had been flagged for box lock play 3 weeks ago but was returned to service without repair. What type of event is this?",
          options: [
            "A near miss that does not require reporting",
            "A sentinel event or adverse event requiring root cause analysis, incident reporting, and review of the instrument inspection and repair tracking process to identify how a flagged instrument was returned to service without repair",
            "Normal surgical variation that does not need investigation",
            "A vendor issue since the instrument was defective"
          ],
          correctIndex: 1,
          explanation: "An instrument that was known to be defective but returned to service represents a process failure that directly caused patient harm. This requires incident reporting, root cause analysis to determine how the tracking system failed, and corrective actions including review of the repair documentation process, staff accountability, and system safeguards to prevent recurrence.",
          expertXp: 35
        }
      },
      {
        id: "dd-ins9",
        baseQuestion: "A tech is inspecting a Kerrison rongeur and notices that the footplate (the piece that slides in and out) has a small nick on its cutting edge. The instrument still bites and cuts tissue test material. Should it be used?",
        baseOptions: ["Yes — it still cuts effectively", "No — any damage to cutting edges of instruments used near the spinal cord requires removal from service, as even small nicks can tear tissue or create bone fragments"],
        baseCorrectIndex: 1,
        baseExplanation: "Kerrison rongeurs are used in spinal surgery where precision is critical. A nicked cutting edge can tear dura, create bone fragments, or produce an uneven bite. Given the proximity to the spinal cord, any cutting edge defect requires removal from service for sharpening or replacement.",
        baseXp: 15,
        followUp: {
          question: "The neurosurgeon asks how often Kerrison rongeurs should be sharpened. What is the best practice?",
          options: [
            "Once per year during annual preventive maintenance",
            "Kerrison rongeurs should be inspected for sharpness and cutting edge integrity after every use and sharpened or replaced when any defect is found — there is no fixed time interval since wear depends on usage frequency and surgical application",
            "Every 50 uses based on a tracking log",
            "Only when the surgeon complains about performance"
          ],
          correctIndex: 1,
          explanation: "Kerrison rongeurs and similar precision cutting instruments should be inspected after every use for cutting edge integrity, spring tension, and footplate function. Sharpening intervals depend on usage — a rongeur used in 5 spine cases per week will dull faster than one used monthly. Usage-based inspection after every case is the standard, not arbitrary time or use-count intervals.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins10",
        baseQuestion: "A facility receives a manufacturer's urgent recall notice for a specific lot number of laparoscopic trocars due to a valve defect. The SPD manager checks inventory and finds 3 units from the recalled lot on the sterile storage shelf. What is the immediate action?",
        baseOptions: ["Continue using them until the replacement stock arrives", "Immediately remove all recalled units from inventory, quarantine them, and document the actions taken"],
        baseCorrectIndex: 1,
        baseExplanation: "Recalled instruments must be immediately removed from service and quarantined. Continued use of recalled devices is a serious patient safety violation. All actions must be documented including lot numbers, quantity removed, location, and date of removal.",
        baseXp: 15,
        followUp: {
          question: "Two of the recalled trocars have already been used in surgeries this week. What additional steps are required?",
          options: [
            "No action needed — the surgeries are already completed",
            "Notify risk management and the surgeons, document which patients were affected, determine if the valve defect could have caused harm, report to the FDA MedWatch system if applicable, and follow the facility's recall notification policy for patient follow-up",
            "Only notify the manufacturer that the units were used",
            "File the recall notice and monitor for patient complaints"
          ],
          correctIndex: 1,
          explanation: "When recalled devices have been used on patients, the facility must activate its recall response protocol: notify risk management, identify affected patients, assess potential harm, notify attending surgeons, report to FDA MedWatch if required by the recall classification, and determine if patient notification or follow-up care is needed. Documentation of all steps is essential for regulatory compliance.",
          expertXp: 35
        }
      },
      {
        id: "dd-ins11",
        baseQuestion: "An SPD tech is assembling a craniotomy tray and is unfamiliar with several instruments. She uses a picture book from another facility's tray as a reference. Is this acceptable?",
        baseOptions: ["Acceptable — any reference is better than guessing", "Not acceptable — tray assembly must follow the facility's own validated count sheets and assembly instructions specific to each tray configuration"],
        baseCorrectIndex: 1,
        baseExplanation: "Each facility has its own tray configurations validated with their surgical teams. Using another facility's references could result in wrong instruments, incorrect quantities, or missing specialty items. Assembly must follow the facility's own count sheets and tray-specific instructions.",
        baseXp: 15,
        followUp: {
          question: "The tech cannot find the facility's count sheet for the craniotomy tray. What is the proper course of action?",
          options: [
            "Assemble the tray from memory based on what she has seen before",
            "Stop assembly and notify the charge tech or supervisor — the tray cannot be assembled without the validated count sheet; locate the current version or have a competent tech who knows the tray verify the assembly",
            "Call the OR and ask a nurse what instruments they want",
            "Use the manufacturer's catalog to determine which instruments belong in the tray"
          ],
          correctIndex: 1,
          explanation: "Tray assembly without a validated count sheet is a process deviation that can result in incorrect or missing instruments. The tech must stop, notify supervision, and either locate the correct count sheet or have the tray assembled/verified by a competent tech familiar with that specific tray. Count sheets are controlled documents that ensure standardization and accuracy.",
          expertXp: 25
        }
      },
      {
        id: "dd-ins12",
        baseQuestion: "During instrument inspection, a tech notices a fine crack in the ceramic insert of a bipolar forceps tip. The forceps still conduct electricity when tested. Should it remain in service?",
        baseOptions: ["Yes — it still conducts properly", "No — cracked ceramic inserts can cause current leakage, unintended tissue damage, and unpredictable energy delivery"],
        baseCorrectIndex: 1,
        baseExplanation: "Ceramic inserts in bipolar forceps provide precise energy delivery to tissue. A cracked insert can alter current pathways, cause energy to leak to unintended areas, and result in unpredictable tissue effects. The instrument must be removed for repair or replacement regardless of basic conductivity testing.",
        baseXp: 15,
        followUp: {
          question: "The biomedical engineering department says they can repair the ceramic insert in-house. What must be verified before in-house repair of electrosurgical instruments?",
          options: [
            "Nothing — biomedical engineering can repair anything",
            "The facility must verify that in-house repair follows the manufacturer's IFU, uses OEM or validated replacement parts, and the repaired instrument undergoes the same inspection and testing protocols as a new instrument — including insulation and conductivity testing — before returning to service",
            "Only the surgeon needs to approve the repair",
            "A simple visual inspection after repair is sufficient"
          ],
          correctIndex: 1,
          explanation: "In-house repair of electrosurgical instruments must follow manufacturer IFU, use appropriate parts, and the repaired instrument must pass all inspection criteria including insulation testing and conductivity verification before returning to service. Repairs that deviate from manufacturer specifications can void warranties, alter device performance, and create patient safety hazards.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins13",
        baseQuestion: "A preventive maintenance (PM) schedule shows that microsurgical instruments are due for PM every 6 months. The last PM was completed 8 months ago. Is this a compliance concern?",
        baseOptions: ["No — a 2-month delay is within an acceptable grace period", "Yes — preventive maintenance must be performed on schedule; overdue PM is a compliance finding"],
        baseCorrectIndex: 1,
        baseExplanation: "Preventive maintenance schedules are based on manufacturer recommendations and risk assessment. Overdue PM means instruments have not been evaluated for wear, alignment, or function degradation within the validated interval. This is a compliance finding that could be cited during a survey.",
        baseXp: 15,
        followUp: {
          question: "The facility's PM completion rate for surgical instruments is 78% for the current quarter. What does Joint Commission expect for PM completion rates?",
          options: [
            "Joint Commission does not specify a PM completion rate",
            "Joint Commission expects 100% on-time completion of PM for critical medical equipment and instruments; a 78% rate indicates a systemic scheduling, staffing, or accountability issue that requires corrective action and process improvement",
            "80% is the minimum acceptable rate",
            "PM is optional if instruments pass daily visual inspection"
          ],
          correctIndex: 1,
          explanation: "Joint Commission expects all scheduled preventive maintenance to be completed on time, particularly for critical instruments and equipment. A 78% completion rate signals a systemic issue — whether staffing shortages, scheduling failures, or accountability gaps. The facility must implement corrective actions such as improved tracking, dedicated PM staff, or outsourced maintenance contracts to achieve 100% compliance.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins14",
        baseQuestion: "A tech discovers that a rigid laparoscope has internal fogging that does not clear after cleaning and drying. The scope still transmits an image. Can it be returned to service?",
        baseOptions: ["Yes — it still provides a usable image", "No — internal fogging indicates a seal failure that allows moisture ingress, which compromises optical performance and cannot be sterilized internally"],
        baseCorrectIndex: 1,
        baseExplanation: "Internal fogging in a rigid scope indicates the hermetic seal has failed, allowing moisture to enter the optical cavity. This moisture cannot be cleaned or sterilized between the internal lenses and will progressively worsen. The scope must be sent for professional repair.",
        baseXp: 15,
        followUp: {
          question: "The surgeon says the fogged scope is 'good enough' for an upcoming routine case and refuses to wait for a replacement. How should this be handled?",
          options: [
            "Accommodate the surgeon since they make the clinical decision",
            "The SPD manager or OR manager should explain that a scope with a compromised seal cannot be guaranteed sterile internally and represents a patient safety risk; the case should use an alternative scope, be delayed, or the surgeon should document accepting the risk — but the facility should not routinely release known-defective equipment",
            "Flash sterilize the scope to address the moisture concern",
            "Use the scope but document that the surgeon was warned"
          ],
          correctIndex: 1,
          explanation: "A scope with a compromised seal cannot be guaranteed sterile between the internal optical elements. While surgeons make clinical decisions, the facility has an obligation to not provide known-defective equipment. The proper response is to offer alternatives, explain the risk, and escalate if needed. Documenting that a surgeon was warned does not absolve the facility of responsibility for providing functional, sterile equipment.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins15",
        baseQuestion: "An instrument tracking system shows that a particular set of retractors has been processed 847 times over 3 years. There is no documented inspection beyond routine post-use checks. Is additional evaluation warranted?",
        baseOptions: ["No — routine inspection after each use is sufficient", "Yes — high-cycle instruments should undergo periodic comprehensive evaluation beyond routine inspection, as repeated processing can cause metal fatigue and subtle degradation"],
        baseCorrectIndex: 1,
        baseExplanation: "Instruments with high cycle counts accumulate stress from repeated sterilization, mechanical use, and chemical exposure. Beyond routine post-use inspection, periodic comprehensive evaluations should assess for metal fatigue, joint wear, surface pitting, and functional degradation that may not be apparent during quick routine checks.",
        baseXp: 15,
        followUp: {
          question: "The facility does not track instrument cycle counts and has no policy for end-of-life instrument evaluation. A surveyor asks how they determine when to replace instruments. What should the facility implement?",
          options: [
            "Replace instruments only when they visibly break",
            "Implement an instrument tracking system that monitors cycle counts, repair history, and usage patterns; establish criteria for comprehensive evaluation at defined intervals and end-of-life retirement based on manufacturer guidance, repair frequency, and functional assessment",
            "Replace all instruments every 5 years regardless of condition",
            "Let surgeons decide when instruments need replacement"
          ],
          correctIndex: 1,
          explanation: "A robust instrument management program tracks cycle counts, repair history, and usage data to make informed decisions about maintenance, evaluation, and retirement. Manufacturer guidance on expected lifespan, combined with repair frequency trends and functional assessments, should drive replacement decisions rather than waiting for catastrophic failure or arbitrary time intervals.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins16",
        baseQuestion: "A tech notices that the tip of a laparoscopic needle holder has a misaligned jaw — one side sits slightly higher than the other when closed. The instrument still grasps a needle. Should it be used?",
        baseOptions: ["Yes — it still holds a needle", "No — misaligned jaws on a needle holder can cause the needle to rotate or slip during suturing, creating a patient safety risk"],
        baseCorrectIndex: 1,
        baseExplanation: "Needle holder jaw alignment is critical for secure needle grasping during suturing. Misaligned jaws allow the needle to rotate or wobble, which can result in imprecise suturing, tissue damage, or a lost needle in a minimally invasive surgical field. The instrument must be sent for repair.",
        baseXp: 15,
        followUp: {
          question: "What specific tests should be performed on needle holders during inspection beyond jaw alignment?",
          options: [
            "Only jaw alignment needs to be checked",
            "Needle holders should be tested for jaw alignment, tungsten carbide insert wear or missing sections, ratchet holding at all positions, jaw surface grip pattern integrity, and the ability to hold a needle perpendicular to the jaws without rotation under moderate force",
            "A drop test to check overall durability",
            "Only ratchet function testing is needed"
          ],
          correctIndex: 1,
          explanation: "Comprehensive needle holder inspection includes: jaw alignment (closed tips should meet evenly), TC insert condition (no missing sections, chips, or smooth wear areas), ratchet function at all positions, grip pattern integrity (cross-hatch or diamond pattern should be distinct), and a functional test holding a suture needle perpendicular to the jaws without rotation when moderate downward force is applied.",
          expertXp: 25
        }
      },
      {
        id: "dd-ins17",
        baseQuestion: "A tray is returned from the OR with an instrument count discrepancy — the count sheet lists 28 instruments but only 27 are present. The circulating nurse states all instruments were accounted for during the surgical count. What should SPD do?",
        baseOptions: ["Accept the nurse's statement and update the count sheet to 27", "Initiate the facility's missing instrument protocol — document the discrepancy, notify the OR charge nurse, and investigate before modifying any count sheet"],
        baseCorrectIndex: 1,
        baseExplanation: "A count discrepancy between the tray and the count sheet is a serious concern. The missing instrument could be in the patient, in the OR, or lost in transport. SPD must initiate the missing instrument protocol and never modify count sheets without proper investigation and authorization.",
        baseXp: 15,
        followUp: {
          question: "Investigation reveals the missing instrument was left in the OR trash and was accidentally discarded. The OR manager says it is 'just a towel clip' and asks SPD to update the count sheet. Should the count sheet be changed?",
          options: [
            "Yes — update it to reflect the current inventory of 27",
            "The count sheet should only be updated through the facility's formal tray modification process, which requires surgical team input, documentation of the change reason, and management approval — and the discarded instrument should be replaced to restore the tray to its validated configuration",
            "Leave the count sheet at 28 and add a note that one was lost",
            "It depends on how expensive the instrument is"
          ],
          correctIndex: 1,
          explanation: "Count sheets are controlled documents that define the validated tray configuration. Changes must go through a formal modification process with input from the surgical team, documentation of rationale, and management approval. The proper action is to replace the discarded instrument and maintain the validated count, not reduce the count to match the loss. Informal count sheet modifications undermine instrument accountability.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins18",
        baseQuestion: "A powered surgical instrument (orthopedic drill) is being inspected. The tech checks that the battery holds a charge and the drill turns on. Is this inspection adequate?",
        baseOptions: ["Yes — confirming the device powers on and the battery holds charge is sufficient", "No — powered instrument inspection must also include chuck function, attachment security, oscillation/rotation modes, trigger response, and cord/connector integrity"],
        baseCorrectIndex: 1,
        baseExplanation: "Powered surgical instruments require comprehensive inspection beyond basic power-on testing. Chuck mechanisms must secure attachments properly, all operating modes must function correctly, triggers must respond proportionally, and all mechanical connections must be secure to prevent intraoperative failures.",
        baseXp: 15,
        followUp: {
          question: "The orthopedic drill's IFU states it must be lubricated with a specific manufacturer-recommended lubricant before each sterilization. The facility has been using a generic surgical instrument lubricant. What is the concern?",
          options: [
            "Generic lubricant works the same as manufacturer-specific lubricant",
            "Using non-manufacturer-recommended lubricant may void the warranty, cause component degradation, interfere with sterilization efficacy, or leave residues that affect device performance — the IFU must be followed precisely for powered instruments",
            "Lubrication before sterilization is optional",
            "Only the internal gears need the specific lubricant; external surfaces can use generic"
          ],
          correctIndex: 1,
          explanation: "Manufacturer IFU for powered instruments must be followed precisely. Non-recommended lubricants may contain chemicals that degrade seals, bearings, or internal components, may not be steam-compatible, or may leave residues that affect performance. Using the wrong lubricant can also void manufacturer support and has been linked to premature device failures. This would be cited as an IFU non-compliance finding.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins19",
        baseQuestion: "During inspection, a tech finds rust spots on the hinge of a stainless steel instrument. She cleans them off with a rust-removing solution and the instrument appears clean. Can it be returned to service?",
        baseOptions: ["Yes — the rust has been removed and the instrument is clean", "The instrument needs further evaluation — rust on stainless steel indicates the passive oxide layer has been compromised, possibly due to chemical exposure or manufacturing defect"],
        baseCorrectIndex: 1,
        baseExplanation: "Rust on stainless steel instruments indicates the protective chromium oxide layer has been breached. While surface rust can be removed, the underlying cause must be identified — chemical exposure, dissimilar metal contact, prolonged moisture, or manufacturing defect. The instrument should be evaluated by a repair specialist to determine if it can be safely returned to service.",
        baseXp: 15,
        followUp: {
          question: "Multiple instruments from the same sterilizer load show rust spots. What should be investigated?",
          options: [
            "Only the instruments need evaluation",
            "When multiple instruments from the same load show rust, investigate the water quality (dissolved minerals, pH, chloride levels) used in the sterilizer, the detergent concentration and type, whether dissimilar metals were processed together, and sterilizer maintenance records — this is likely a systemic processing issue, not individual instrument defects",
            "Replace all the instruments with new ones",
            "Switch to a different brand of instrument"
          ],
          correctIndex: 1,
          explanation: "Multiple instruments rusting in the same load points to a systemic cause. Investigation should include: water quality analysis (high chlorides or minerals attack stainless steel), detergent chemistry and concentration, whether dissimilar metals (steel and aluminum) were processed together creating galvanic corrosion, and sterilizer maintenance including boiler water treatment. Addressing individual instruments without finding the root cause will result in recurrence.",
          expertXp: 30
        }
      },
      {
        id: "dd-ins20",
        baseQuestion: "A surgical tech reports that a self-retaining retractor (Balfour) fails to hold its position and slowly closes during use. The SPD tech inspects it and confirms the ratchet bar is worn. Can it be repaired in-house by filing the ratchet teeth?",
        baseOptions: ["Yes — filing the teeth will restore function", "No — in-house filing of ratchet components can alter the tooth profile, create metal shavings, and is not a validated repair method; the instrument should be sent to a qualified repair vendor"],
        baseCorrectIndex: 1,
        baseExplanation: "In-house filing of ratchet teeth is not a validated repair method. It can alter the tooth profile geometry, create metal particles that contaminate the instrument, and result in unpredictable holding strength. Instrument repairs must be performed by qualified repair vendors who can restore components to manufacturer specifications.",
        baseXp: 15,
        followUp: {
          question: "The facility's instrument repair vendor returns the Balfour retractor with a repair report. What information should the repair report include for the facility's records?",
          options: [
            "Just a statement that the instrument was repaired",
            "The repair report should include: specific repairs performed, parts replaced, before/after functional testing results, confirmation of compliance with manufacturer specifications, repair technician identification, date of service, and any recommendations for ongoing monitoring — this documentation becomes part of the instrument's maintenance history",
            "Only the cost of the repair",
            "A pass/fail grade is sufficient"
          ],
          correctIndex: 1,
          explanation: "Comprehensive repair documentation should detail what was found, what was repaired or replaced, functional test results before and after repair, confirmation of manufacturer specification compliance, technician ID, and service date. This documentation integrates into the instrument's lifecycle record, supports compliance demonstration during surveys, and helps identify patterns that may indicate systemic issues or end-of-life approaching.",
          expertXp: 25
        }
      }
    ]
  },
  {
    id: "dd-facilities",
    name: "Facility Safety & Equipment Deep Dive",
    description: "Master facility safety, medical equipment management, and environmental compliance with expert-level tracer scenarios.",
    icon: "Microscope",
    color: "hsl(195, 80%, 45%)",
    baseLevelId: "facilities",
    questions: [
      {
        id: "dd-fac1",
        baseQuestion: "A blanket warmer in the PACU reads 135 degrees F. Staff say this is normal because patients prefer warmer blankets. Is this compliant?",
        baseOptions: ["Compliant — patient comfort is the priority", "Non-compliant — blanket warmers must not exceed 130 degrees F to prevent burn injuries"],
        baseCorrectIndex: 1,
        baseExplanation: "Blanket warmers must not exceed 130 degrees F per Joint Commission and ECRI guidelines. Temperatures above this threshold significantly increase the risk of contact burns, especially in patients who are sedated, have impaired sensation, or have compromised skin integrity.",
        baseXp: 15,
        followUp: {
          question: "The PACU manager lowers the warmer to 130 degrees F but asks: 'How often do we need to check and document the temperature?' What is the requirement?",
          options: [
            "Once per week is sufficient",
            "Blanket warmer temperatures must be checked and documented at least daily, with many facilities checking each shift; the log should include time, temperature reading, initials of the person checking, and any corrective actions if out of range",
            "Only when the warmer is first turned on in the morning",
            "Monthly during biomedical engineering rounds"
          ],
          correctIndex: 1,
          explanation: "Blanket warmer temperatures must be monitored and documented at least daily. Best practice is to check each shift to catch any thermostat malfunctions promptly. Logs should include the date, time, temperature reading, checker's initials, and corrective actions if the temperature is out of range. This documentation is frequently reviewed during Joint Commission surveys.",
          expertXp: 25
        }
      },
      {
        id: "dd-fac2",
        baseQuestion: "A fluid warmer in a perioperative area is set to warm IV fluids to 115 degrees F. Is this within acceptable limits?",
        baseOptions: ["Yes — warmed fluids improve patient comfort", "No — fluid warmers must not exceed 110 degrees F to prevent hemolysis and vascular damage"],
        baseCorrectIndex: 1,
        baseExplanation: "IV fluid warmers must not exceed 110 degrees F. Temperatures above this can cause hemolysis (destruction of red blood cells), vascular endothelial damage, and protein denaturation. This applies to all warmed IV fluids and irrigation solutions.",
        baseXp: 15,
        followUp: {
          question: "A surgeon requests that irrigation solution be warmed to 'body temperature — 98.6 degrees F' for a laparoscopic case. The fluid warmer only has settings for 100 degrees F or 110 degrees F. What is the appropriate action?",
          options: [
            "Set it to 100 degrees F — this is closest to the surgeon's request and within safe limits",
            "Use a microwave to heat the fluid to exactly 98.6 degrees F",
            "Set it to 110 degrees F and let it cool before use",
            "Tell the surgeon fluid warming is not available"
          ],
          correctIndex: 0,
          explanation: "Setting the warmer to 100 degrees F safely approximates the surgeon's request while staying within the approved temperature range. Microwaving fluids is strictly prohibited as it creates uneven heating with hotspots that can cause severe tissue damage. Warming cabinets and in-line warmers are the only approved methods for heating IV fluids and irrigation solutions.",
          expertXp: 25
        }
      },
      {
        id: "dd-fac3",
        baseQuestion: "During a facility tour, a surveyor notices that a medical equipment preventive maintenance sticker on an anesthesia machine shows PM was due 3 months ago. The machine is currently in use. What is the finding?",
        baseOptions: ["No finding — anesthesia machines are checked daily by anesthesia providers", "This is a finding — equipment with overdue PM should not be in clinical service until PM is completed and documented"],
        baseCorrectIndex: 1,
        baseExplanation: "Medical equipment with overdue preventive maintenance must not remain in clinical service. While daily anesthesia machine checks are important, they do not replace the comprehensive preventive maintenance required at manufacturer-specified intervals. Overdue PM is a significant Joint Commission finding.",
        baseXp: 15,
        followUp: {
          question: "The facility's clinical engineering director states that their PM completion rate is 85% and asks if this is acceptable. What does Joint Commission expect?",
          options: [
            "80% is the minimum acceptable PM completion rate",
            "Joint Commission expects facilities to achieve and maintain PM completion rates at or near 100% for all medical equipment, particularly life-support and high-risk devices; an 85% rate indicates a systemic program deficiency requiring a corrective action plan",
            "PM completion rates are not monitored by Joint Commission",
            "90% is acceptable for non-critical equipment"
          ],
          correctIndex: 1,
          explanation: "Joint Commission expects PM programs to achieve near-100% on-time completion, especially for life-support and high-risk equipment like anesthesia machines, ventilators, and defibrillators. An 85% rate means 15% of equipment is operating without verified safety and performance — this is a program-level deficiency requiring root cause analysis and corrective action.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac4",
        baseQuestion: "A nurse plugs a patient's personal cell phone charger into an electrical outlet in a perioperative holding area. Is this a concern?",
        baseOptions: ["No concern — personal chargers are low-voltage consumer electronics", "Yes — non-hospital-approved electrical devices must not be connected to hospital power in patient care areas without electrical safety testing"],
        baseCorrectIndex: 1,
        baseExplanation: "Non-hospital-approved electrical devices in patient care areas pose risks including ground fault hazards, electromagnetic interference with medical devices, and fire risk from non-tested power supplies. All electrical equipment in patient care areas must be inspected and approved by clinical engineering.",
        baseXp: 15,
        followUp: {
          question: "The patient argues that the phone charger has a UL listing and should be safe. How does hospital electrical safety differ from consumer UL listing?",
          options: [
            "UL listing is sufficient for hospital use",
            "Hospital electrical safety testing exceeds consumer UL standards because it verifies ground wire integrity, leakage current under patient-connected conditions, and compatibility with hospital-grade power systems — consumer UL listing tests normal household conditions, not the unique electrical environment of patient care areas where patients may have direct electrical pathways to the heart",
            "There is no difference — UL listing covers all environments",
            "Hospital testing only checks for fire risk, which UL already covers"
          ],
          correctIndex: 1,
          explanation: "Hospital electrical safety testing evaluates leakage current under conditions where patients may have direct electrical pathways (IV lines, catheters, pacing wires). Consumer UL testing verifies safety for healthy individuals in household settings. Even microamp-level leakage current that is safe for a healthy person can cause ventricular fibrillation in a patient with a direct cardiac pathway. This is why all electrical devices in patient care areas must pass hospital-grade safety testing.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac5",
        baseQuestion: "The OR suite HVAC system provides 15 air changes per hour with 3 of those being fresh outside air. Does this meet minimum requirements?",
        baseOptions: ["Yes — this meets the minimum of 15 total and 3 fresh air changes", "No — OR suites require a minimum of 20 total air changes per hour with at least 4 being fresh outside air"],
        baseCorrectIndex: 1,
        baseExplanation: "Operating rooms require a minimum of 20 total air changes per hour (ACH) with at least 4 being fresh outside air per ASHRAE 170 and FGI Guidelines. At 15 ACH with 3 fresh, this OR is significantly below minimum requirements for both total and fresh air changes.",
        baseXp: 15,
        followUp: {
          question: "The facilities director says the HVAC system was designed and installed 15 years ago and met the code requirements at the time of construction. Does the facility need to upgrade to current standards?",
          options: [
            "No — existing systems are grandfathered to the code in effect when installed",
            "While existing conditions may be grandfathered for some building codes, Joint Commission evaluates environmental conditions based on current standards for patient safety; if the current ventilation is inadequate to maintain proper infection control, the facility must develop a plan to achieve compliance, which may include HVAC modification, supplemental filtration, or operational modifications",
            "Yes — all systems must be upgraded within one year of new code adoption",
            "Only if the facility is doing a renovation that triggers code compliance"
          ],
          correctIndex: 1,
          explanation: "Joint Commission focuses on current conditions and patient safety outcomes rather than historical code compliance. While building codes may grandfather existing construction, inadequate ventilation that compromises infection control will be cited regardless of when the system was installed. The facility must assess the risk and develop a compliance plan, which may range from operational adjustments to system upgrades.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac6",
        baseQuestion: "During an emergency power system test, the generator starts within 10 seconds and reaches full load. The test is documented. Is this sufficient for Joint Commission compliance?",
        baseOptions: ["Yes — the generator started and reached load within the required time", "Additional information is needed — the test must verify that all life-safety and critical branch circuits transfer properly and generator testing must occur under specific conditions"],
        baseCorrectIndex: 1,
        baseExplanation: "Generator testing must verify not just startup time but also proper transfer of life-safety, critical, and equipment branch circuits. Tests must occur monthly for 30 minutes under load and annually for 4 continuous hours. Documentation must include all parameters, not just startup confirmation.",
        baseXp: 15,
        followUp: {
          question: "The facilities engineer reveals that monthly generator tests are run under building load but the load only reaches 25% of the generator's rated capacity. Is this adequate?",
          options: [
            "Yes — any load testing demonstrates the generator works",
            "NFPA 110 requires that generators be tested at a minimum of 30% of nameplate rating; if the facility's connected load does not reach 30%, supplemental load banking must be used to achieve the minimum load threshold and prevent wet stacking, which can damage the generator over time",
            "Load percentage does not matter for compliance",
            "50% load is the minimum requirement"
          ],
          correctIndex: 1,
          explanation: "NFPA 110 requires generator testing at a minimum of 30% of nameplate rating. Testing below this threshold fails to exercise the engine properly and leads to wet stacking — unburned fuel accumulation in the exhaust system that can damage the generator and cause it to fail when needed most. If building load is insufficient, portable load banks must be connected to achieve the minimum load during testing.",
          expertXp: 35
        }
      },
      {
        id: "dd-fac7",
        baseQuestion: "A fire extinguisher in the OR corridor has a current inspection tag but the pressure gauge reads in the yellow (low) zone. Staff say it was inspected last month. Is this acceptable?",
        baseOptions: ["Acceptable — the inspection tag is current", "Not acceptable — a fire extinguisher with low pressure is non-functional regardless of inspection tag currency and must be replaced or recharged immediately"],
        baseCorrectIndex: 1,
        baseExplanation: "A fire extinguisher with a pressure gauge reading in the yellow zone is not operational. Monthly inspections should catch this, but the current condition takes precedence over the inspection tag. The extinguisher must be removed from service and replaced with a charged unit immediately.",
        baseXp: 15,
        followUp: {
          question: "The OR director asks: 'What type of fire extinguisher should we have in the operating rooms, and why?' What is the correct answer?",
          options: [
            "Any ABC dry chemical extinguisher is appropriate",
            "ORs should have CO2 or clean agent (halogenated) extinguishers because dry chemical extinguishers discharge powder that can contaminate sterile fields, damage sensitive equipment, and create airborne particles harmful to open surgical wounds; water-based extinguishers are prohibited near electrical equipment",
            "Water-based extinguishers because they are safest for patients",
            "Only halon extinguishers are approved for ORs"
          ],
          correctIndex: 1,
          explanation: "Operating rooms require CO2 or clean agent extinguishers. ABC dry chemical extinguishers discharge corrosive powder that contaminates sterile fields, damages sensitive electronic equipment, and creates airborne particles dangerous to patients with open surgical wounds. Water-based extinguishers are prohibited near high-voltage equipment. CO2 and clean agents leave no residue, do not damage equipment, and are safe for use around patients.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac8",
        baseQuestion: "The sterile processing department's water system uses tap water for the final rinse cycle of the washer-disinfector. Is this acceptable?",
        baseOptions: ["Yes — municipal tap water meets safety standards", "No — the final rinse in washer-disinfectors should use treated water (critical water) to prevent mineral deposits, spotting, and potential endotoxin exposure on instruments"],
        baseCorrectIndex: 1,
        baseExplanation: "Final rinse water in washer-disinfectors should be treated (typically reverse osmosis, deionized, or distilled) to prevent mineral deposits that can interfere with sterilization, cause instrument staining, and introduce endotoxins. AAMI ST79 recommends critical water for the final rinse cycle.",
        baseXp: 15,
        followUp: {
          question: "The facility installs an RO water system for the final rinse. What ongoing monitoring is required for the water quality?",
          options: [
            "No monitoring needed — RO systems are maintenance-free",
            "RO water systems require regular monitoring of conductivity/resistivity, bacterial counts, endotoxin levels, pH, and total dissolved solids; filters and membranes must be replaced on schedule and the system must be validated to meet AAMI water quality standards for instrument reprocessing",
            "Annual water testing by the municipality is sufficient",
            "Only check the water if instruments appear spotted"
          ],
          correctIndex: 1,
          explanation: "RO water systems require ongoing monitoring including conductivity (measuring dissolved ions), bacterial cultures, endotoxin testing, pH, and total dissolved solids. Filters and RO membranes degrade over time and must be replaced per manufacturer schedule. AAMI ST108 defines critical water quality parameters that must be met and documented. A neglected RO system can produce water that is worse than tap water for instrument reprocessing.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac9",
        baseQuestion: "A surveyor notices that the medical gas zone valve for the OR suite is located inside one of the operating rooms. Is this placement appropriate?",
        baseOptions: ["Yes — as long as it is accessible", "No — medical gas zone valves should be located outside the area they serve so they can be accessed without entering the affected zone during an emergency"],
        baseCorrectIndex: 1,
        baseExplanation: "Medical gas zone valves must be located outside the area they control, typically in the corridor. Placing a zone valve inside the room it controls means staff would have to enter a potentially dangerous area (fire, gas leak) to shut off the supply. Valves must be accessible, clearly labeled, and in a location that does not require entering the affected zone.",
        baseXp: 15,
        followUp: {
          question: "A new surgical tech asks: 'If there's a medical gas emergency, who is authorized to shut off zone valves, and when should they be shut off?' What is the correct answer?",
          options: [
            "Only facilities engineering can shut off zone valves",
            "Authorized clinical staff should be trained to shut off zone valves in emergencies such as fire, gas leak, or when directed by the fire department — however, shutting off medical gases to an OR with a patient on anesthesia requires coordination with the anesthesia provider to ensure patient safety before gas supply is interrupted",
            "Zone valves should never be shut off while patients are in the building",
            "Automatic systems handle all gas shutoffs — staff should never touch zone valves"
          ],
          correctIndex: 1,
          explanation: "Trained clinical staff must know how to shut off medical gas zone valves in emergencies. However, shutting off oxygen or nitrous oxide to an operating room with an anesthetized patient can be immediately life-threatening. Emergency protocols must include coordination with anesthesia to ensure patients are safe (bag-mask ventilation, portable oxygen) before zone valves are closed. All perioperative staff should be trained on zone valve locations and emergency procedures.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac10",
        baseQuestion: "The temperature in the operating room is set to 65 degrees F because the surgical team prefers a cooler environment. Is this within compliance?",
        baseOptions: ["Yes — surgical team comfort is important", "No — OR temperature must be maintained between 68-75 degrees F per ASHRAE/FGI guidelines; 65 degrees F is below the minimum"],
        baseCorrectIndex: 1,
        baseExplanation: "Operating room temperature must be maintained between 68-75 degrees F per ASHRAE 170 and FGI Guidelines. Temperatures below 68 degrees F increase the risk of patient hypothermia, surgical site infection, and coagulopathy. Staff comfort preferences do not override patient safety requirements.",
        baseXp: 15,
        followUp: {
          question: "The orthopedic team argues that colder temperatures are needed to reduce infection risk in joint replacement surgery and cites a 2005 study. How should the infection preventionist respond?",
          options: [
            "Accept the request since the surgical team has the clinical authority",
            "Current evidence and Joint Commission standards do not support temperatures below 68 degrees F — in fact, patient hypothermia increases surgical site infection risk by impairing immune function; the infection preventionist should present current evidence-based guidelines and the facility must maintain temperatures within the approved 68-75 degrees F range",
            "Allow 65 degrees F only for joint replacement cases",
            "Ask the surgeon to bring a personal fan instead"
          ],
          correctIndex: 1,
          explanation: "Patient hypothermia is an independent risk factor for surgical site infection because it causes peripheral vasoconstriction, reduces oxygen delivery to the wound, and impairs immune cell function. Current evidence strongly supports maintaining normothermia (patient core temperature above 96.8 degrees F). OR temperatures below 68 degrees F increase hypothermia risk. The facility must follow current evidence-based standards, not outdated studies or team preferences.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac11",
        baseQuestion: "An equipment recall notice is received for a specific model of patient warming device. The biomed department checks and finds 2 units in the facility. One is in the OR; the other is in central supply. Only the central supply unit is removed. Is this adequate?",
        baseOptions: ["Yes — the OR unit is being actively monitored by staff", "No — all recalled units must be removed from service regardless of location or current use status"],
        baseCorrectIndex: 1,
        baseExplanation: "All units covered by a recall must be removed from service immediately, regardless of where they are or whether they are currently in use. Continued use of recalled equipment after notification is a serious compliance violation and patient safety risk.",
        baseXp: 15,
        followUp: {
          question: "The OR team protests removing the warming device mid-case, stating patient safety requires continued warming. What is the proper protocol?",
          options: [
            "Complete the current case using the recalled device, then remove it immediately after — document the decision, the clinical rationale, notify risk management, and ensure a replacement warming method is available for the next case",
            "Remove the device immediately regardless of patient status",
            "Continue using it until a replacement arrives, which may take weeks",
            "The recall does not apply to devices currently in use"
          ],
          correctIndex: 0,
          explanation: "If removing the recalled device mid-case would create greater patient risk than continuing use, the clinical team may complete the current case while implementing enhanced monitoring. This decision must be documented with clinical rationale, risk management must be notified, and the device must be removed immediately upon case completion. A replacement warming method must be available before the next case. This balances immediate patient safety with recall compliance.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac12",
        baseQuestion: "During a fire drill in the perioperative area, staff correctly identify the location of fire alarm pull stations but cannot locate the oxygen shut-off valve for their zone. Is this a compliance concern?",
        baseOptions: ["No — knowing fire alarm locations is sufficient", "Yes — perioperative staff must know the location of both fire alarm pull stations and medical gas shut-off valves as part of fire safety competency"],
        baseCorrectIndex: 1,
        baseExplanation: "Perioperative fire safety requires knowledge of RACE (Rescue, Alarm, Contain, Extinguish/Evacuate) procedures AND the location of medical gas shut-off valves. Oxygen supports combustion and must be shut off in fire emergencies. Staff inability to locate gas shut-offs is a significant fire safety deficiency.",
        baseXp: 15,
        followUp: {
          question: "A surveyor asks a scrub tech to describe the RACE procedure and the specific additional steps required for an OR fire versus a corridor fire. What is the key difference?",
          options: [
            "There is no difference — RACE is the same everywhere",
            "In addition to standard RACE, an OR fire requires shutting off medical gases and removing the drapes from the patient if they are on fire; for airway fires, the endotracheal tube must be removed, saline poured into the airway, and the patient re-intubated — the fire triangle in the OR includes unique fuel sources (drapes, prep solutions) and oxidizers (supplemental oxygen, nitrous oxide)",
            "The only difference is that OR fires require CO2 extinguishers",
            "OR fires should be fought by the surgeon while corridor fires are fought by maintenance"
          ],
          correctIndex: 1,
          explanation: "OR fires involve unique elements: an oxidizer-enriched atmosphere (supplemental oxygen, nitrous oxide), ignition sources (electrosurgery, lasers, fiber optics), and fuels (alcohol-based prep, drapes, sponges). OR fire response adds critical steps to RACE: shut off medical gases, remove burning drapes from the patient, flood the surgical site with saline. For airway fires specifically, disconnect the breathing circuit, remove the ETT, pour saline into the airway, and mask ventilate until re-intubation. All perioperative staff must know these additional steps.",
          expertXp: 35
        }
      },
      {
        id: "dd-fac13",
        baseQuestion: "The humidity in Operating Room 3 reads 28%. Staff say it has been in this range for several days. Is this acceptable?",
        baseOptions: ["Yes — there is no minimum humidity requirement for ORs", "No — OR humidity should be maintained between 20-60%, and while 28% is within range, very low humidity increases electrostatic discharge risk, especially around flammable anesthetic agents"],
        baseCorrectIndex: 1,
        baseExplanation: "While 28% falls within the 20-60% acceptable range, this is on the lower end. Very low humidity environments increase the risk of electrostatic discharge, which can ignite flammable gases or create sparks near oxygen-enriched atmospheres. The facility should investigate why humidity is consistently at the low end and consider whether HVAC adjustments are needed.",
        baseXp: 15,
        followUp: {
          question: "The facilities engineer explains that humidity control is difficult in winter months due to dry outside air. What environmental monitoring documentation does Joint Commission expect?",
          options: [
            "Monthly humidity readings are sufficient",
            "Daily environmental monitoring logs documenting temperature and humidity readings for each OR, with documented action plans when readings are out of range, evidence of HVAC corrective measures, and trending data that demonstrates the facility is actively managing seasonal variations rather than accepting them",
            "Joint Commission does not review environmental monitoring logs",
            "A statement from the HVAC contractor that the system is working properly"
          ],
          correctIndex: 1,
          explanation: "Joint Commission expects daily environmental monitoring with documented responses to out-of-range conditions. During surveys, they review trending data to determine if the facility is actively managing environmental conditions or passively accepting excursions. Seasonal challenges are understood but the facility must demonstrate mitigation efforts — supplemental humidification, HVAC adjustments, and action plans for persistent non-compliance.",
          expertXp: 25
        }
      },
      {
        id: "dd-fac14",
        baseQuestion: "A surge protector power strip is being used in an OR to power a personal speaker, a phone charger, and a laptop. All are plugged into a single hospital-grade outlet. Is this acceptable?",
        baseOptions: ["Acceptable — the surge protector provides protection", "Not acceptable — power strips and multi-outlet adapters are prohibited in patient care areas per NFPA 99; each device requires its own hospital-grade outlet"],
        baseCorrectIndex: 1,
        baseExplanation: "NFPA 99 prohibits the use of power strips, multi-outlet adapters, and extension cords in patient care areas. They create fire hazards, overload circuits, and can introduce ground fault pathways. Additionally, personal electronics should not be used in the OR without safety testing. Each approved device must be plugged into its own hospital-grade outlet.",
        baseXp: 15,
        followUp: {
          question: "A biomedical engineer points out that some approved medical-grade power strips (UL 1363A/UL 60601-1) are permitted in patient care areas. What distinguishes these from consumer power strips?",
          options: [
            "There is no real difference — they just cost more",
            "Medical-grade power strips meeting UL 1363A or UL 60601-1 standards are permanently attached to the building electrical system or equipment, have hospital-grade plugs, include individual circuit breakers, have enclosed and tamper-resistant connections, and are designed to prevent daisy-chaining — consumer power strips meet none of these safety requirements",
            "Medical-grade power strips have longer cords",
            "Medical-grade power strips are only allowed in non-patient-care areas"
          ],
          correctIndex: 1,
          explanation: "Medical-grade power strips (UL 1363A/UL 60601-1) are engineered for patient care environments with features including hospital-grade plugs, individual circuit protection, enclosed tamper-resistant connections, and permanent mounting to prevent tripping hazards. They undergo rigorous leakage current testing and are designed to prevent circuit overload. Consumer power strips lack all of these protections and are never appropriate for patient care areas.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac15",
        baseQuestion: "The sterile processing area maintains negative air pressure relative to the adjacent clean corridor. Is this the correct pressure relationship?",
        baseOptions: ["Yes — negative pressure prevents contaminants from leaving SPD", "No — the decontamination area should have negative pressure, but the clean/sterile processing areas should have positive pressure relative to adjacent spaces to prevent contaminated air from entering"],
        baseCorrectIndex: 1,
        baseExplanation: "Pressure relationships in SPD must follow the workflow from dirty to clean. The decontamination area should be under negative pressure (air flows in, containing contaminants). Clean/sterile areas should be under positive pressure (air flows out, preventing contaminated air from entering). This creates an airflow gradient that supports infection control.",
        baseXp: 15,
        followUp: {
          question: "A surveyor asks how the facility verifies and documents air pressure relationships in SPD. What is the expected response?",
          options: [
            "We check it when the HVAC system is serviced annually",
            "The facility should have permanent visual pressure monitors (ball-in-tube or digital differential pressure monitors) at the boundary between decontam and clean areas, with daily documented readings confirming proper pressure relationships, and a policy for immediate notification of facilities engineering when relationships are reversed",
            "We can feel the air flow when we open the door between areas",
            "The HVAC contractor provides a letter confirming proper setup"
          ],
          correctIndex: 1,
          explanation: "Permanent visual pressure monitoring devices should be installed at the boundaries between decontamination and clean areas. Staff should document daily readings confirming the proper pressure relationship. When pressure relationships are reversed, it means contaminated air may be flowing into clean areas — this requires immediate notification of facilities engineering and may require cessation of sterile processing until the issue is corrected.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac16",
        baseQuestion: "A portable X-ray machine is brought into the OR for an intraoperative scan. The machine's last electrical safety inspection was 14 months ago. The facility policy requires annual safety inspections. Should the machine be used?",
        baseOptions: ["Yes — a 2-month delay is negligible for diagnostic equipment", "No — equipment with expired safety inspections should not be used in patient care areas until reinspected and cleared"],
        baseCorrectIndex: 1,
        baseExplanation: "Equipment with expired safety inspections must not be used in patient care areas. Annual electrical safety inspection is a patient safety requirement, not a suggestion. Using equipment past its inspection interval violates both facility policy and Joint Commission standards for medical equipment management.",
        baseXp: 15,
        followUp: {
          question: "The radiology department says the X-ray machine 'passed its last inspection perfectly' and argues the 2-month delay is due to a staffing shortage in biomed. How should this be addressed?",
          options: [
            "Accept the argument and allow use with documentation of the staffing excuse",
            "The equipment must be inspected before use — staffing shortages do not exempt safety requirements; the facility should address the biomed staffing gap through overtime, contracted services, or prioritization of high-risk equipment inspections, and implement a tracking system that flags equipment approaching inspection deadlines",
            "Allow use in emergencies only",
            "Transfer responsibility for inspections from biomed to the using department"
          ],
          correctIndex: 1,
          explanation: "Staffing challenges do not exempt safety requirements. The facility must ensure adequate biomed resources through staffing, contracts, or prioritized scheduling. A proactive tracking system should flag equipment approaching inspection deadlines with escalation protocols when deadlines are at risk. Reactive responses to expired inspections indicate a program management failure that Joint Commission would cite.",
          expertXp: 25
        }
      },
      {
        id: "dd-fac17",
        baseQuestion: "A Legionella water management plan exists for the facility, but testing has not been performed in 8 months. The plan calls for quarterly testing. Is this acceptable?",
        baseOptions: ["Yes — having the plan is the primary requirement", "No — the plan must be actively implemented with testing performed on schedule; a plan without execution is non-compliant"],
        baseCorrectIndex: 1,
        baseExplanation: "Joint Commission requires not just a water management plan but active implementation. Legionella and other waterborne pathogen testing must occur on the schedule defined in the plan. A plan that exists only on paper without execution is a significant compliance failure.",
        baseXp: 15,
        followUp: {
          question: "Quarterly Legionella testing results come back positive for L. pneumophila at 2 of 15 sample points, both in low-flow areas. What immediate actions are required?",
          options: [
            "Retest in 3 months per the quarterly schedule",
            "Immediate remediation including thermal or chemical disinfection of the positive outlets and surrounding plumbing, increased monitoring frequency, review of the water management plan's risk assessment for low-flow areas, notification of the infection control committee, and assessment of whether any patients were exposed to affected water sources",
            "Shut down the entire water system for the building",
            "Only flush the affected outlets daily until the next quarterly test"
          ],
          correctIndex: 1,
          explanation: "Positive Legionella results require immediate action: remediate affected areas through thermal or chemical disinfection, increase testing frequency to verify remediation success, investigate whether patients or staff were exposed, review the water management plan for gaps in managing low-flow areas, and report to the infection control committee. Waiting for the next quarterly test would be negligent. Low-flow areas should have documented flushing protocols to prevent stagnation.",
          expertXp: 35
        }
      },
      {
        id: "dd-fac18",
        baseQuestion: "An anesthesia provider stores a personal desflurane vaporizer on top of the anesthesia machine between cases. The vaporizer is not secured. Is this a safety concern?",
        baseOptions: ["No — the vaporizer is not in use between cases", "Yes — unsecured equipment on top of the anesthesia machine could fall during patient transfer or bed movement, potentially injuring a patient or staff member and damaging the equipment"],
        baseCorrectIndex: 1,
        baseExplanation: "Unsecured equipment on top of anesthesia machines creates risks of falling objects during patient movement, bed adjustment, or room cleaning. All equipment must be properly secured or stored when not in active use. Additionally, equipment storage on anesthesia machines can obstruct access to controls during emergencies.",
        baseXp: 15,
        followUp: {
          question: "During a safety walkthrough, numerous items are found stored on top of equipment throughout the perioperative suite — boxes on monitors, supplies on ventilators, personal items on crash carts. What does this pattern indicate?",
          options: [
            "A shortage of storage space — simply add more shelving",
            "This pattern indicates a cultural issue with equipment safety and workspace organization; corrective action should include education on equipment safety standards, leadership accountability for enforcing clean equipment policies, adequate storage solutions, and regular safety walkthroughs with immediate correction — the pattern suggests that safety culture does not prioritize equipment management",
            "This is normal in busy clinical areas",
            "Only items on crash carts are a concern"
          ],
          correctIndex: 1,
          explanation: "A pattern of items stored on top of clinical equipment indicates a safety culture deficiency, not just a storage problem. While additional storage may help, the fundamental issue is that staff do not recognize or prioritize the hazards of unsecured items on medical equipment. Corrective action requires cultural change through education, leadership modeling, regular safety audits, and accountability — not just more shelving.",
          expertXp: 25
        }
      },
      {
        id: "dd-fac19",
        baseQuestion: "The facility performs monthly emergency generator tests but has not conducted the required annual 4-hour load test. The facilities director says monthly tests are sufficient to demonstrate reliability. Is this correct?",
        baseOptions: ["Correct — monthly testing demonstrates reliability", "Incorrect — NFPA 110 requires annual 4-hour continuous load testing in addition to monthly tests; monthly 30-minute tests do not substitute for the annual endurance test"],
        baseCorrectIndex: 1,
        baseExplanation: "NFPA 110 requires both monthly (30-minute) operational tests and annual (4-hour continuous) load tests. The annual test verifies the generator's ability to sustain load over extended periods, identifying fuel system, cooling system, and engine problems that short tests cannot detect.",
        baseXp: 15,
        followUp: {
          question: "During the annual 4-hour test, the generator develops a coolant leak at hour 3. It continues to run but coolant level is dropping. What should the facilities team do?",
          options: [
            "Stop the test immediately and repair the leak — the test is invalid",
            "Complete the full 4 hours since the generator is still running",
            "Stop the test, document the failure point and conditions, repair the leak, and then restart the 4-hour test from the beginning once repairs are verified — partial test completion does not satisfy the annual requirement, and the coolant leak itself is a finding that requires root cause analysis",
            "Add coolant and continue the test"
          ],
          correctIndex: 2,
          explanation: "The test must be stopped to prevent engine damage from coolant loss. The failure must be documented including time, conditions, and symptoms. After repair and verification, the full 4-hour test must be restarted — partial completion does not satisfy NFPA 110 requirements. The coolant leak itself requires root cause analysis and should be factored into the generator's maintenance program to prevent recurrence during an actual emergency.",
          expertXp: 30
        }
      },
      {
        id: "dd-fac20",
        baseQuestion: "A new MRI suite is being constructed adjacent to the OR. The construction crew has breached the infection control barrier separating the construction area from the active perioperative suite. Is an immediate response required?",
        baseOptions: ["No — brief barrier breaches during construction are unavoidable", "Yes — any breach of the ICRA barrier requires immediate response including barrier repair, environmental assessment, and potential air quality testing"],
        baseCorrectIndex: 1,
        baseExplanation: "Construction barrier breaches in perioperative areas are serious events. Construction dust contains Aspergillus spores and other pathogens dangerous to surgical patients. Immediate response includes stopping construction activity, repairing the barrier, assessing whether contaminants entered the perioperative area, and potentially testing air quality.",
        baseXp: 15,
        followUp: {
          question: "The ICRA risk assessment classified this project as Class IV (highest risk) due to proximity to the OR. What specific infection control measures should have been in place to prevent this breach?",
          options: [
            "Standard construction barriers are sufficient for all ICRA classes",
            "Class IV ICRA requires hard-wall barriers sealed floor to ceiling, negative pressure in the construction zone with HEPA-filtered exhaust, ante-rooms for worker entry/exit, continuous pressure monitoring, sealed penetrations around all utilities, designated construction traffic patterns avoiding patient care areas, and daily compliance monitoring — any breach of these measures requires incident investigation",
            "Class IV only applies to renovation of existing patient care areas",
            "ICRA classification does not affect barrier requirements"
          ],
          correctIndex: 1,
          explanation: "Class IV ICRA projects near high-risk patient areas require the most stringent controls: hard-wall barriers (not just plastic sheeting) sealed from floor to deck above, negative pressure maintained in the construction zone with HEPA-filtered exhaust to the building exterior, ante-rooms for worker transition, continuous pressure monitoring with alarming, sealed utility penetrations, and daily compliance inspections. The barrier breach suggests one or more of these measures failed, requiring investigation and corrective action.",
          expertXp: 35
        }
      }
    ]
  },
  {
    id: "dd-spd",
    name: "SPD & Decontamination Deep Dive",
    description: "Master decontamination procedures, cleaning validation, and SPD compliance with expert-level tracer scenarios.",
    icon: "Microscope",
    color: "hsl(45, 90%, 50%)",
    baseLevelId: "spd_decontam",
    questions: [
      {
        id: "dd-spd1",
        baseQuestion: "Contaminated instruments arrive in the decontamination area. A tech begins manually cleaning them without first applying enzymatic spray or foam. Is this a concern?",
        baseOptions: ["No — manual cleaning with water and detergent is sufficient", "Yes — point-of-use enzymatic treatment prevents bioburden from drying on instruments, making subsequent cleaning more effective"],
        baseCorrectIndex: 1,
        baseExplanation: "Point-of-use enzymatic treatment (spray, foam, or soaking) should be applied to instruments as soon as possible after use to prevent bioburden from drying. Dried bioburden is significantly harder to remove and can form biofilm that resists standard cleaning processes.",
        baseXp: 15,
        followUp: {
          question: "The OR staff argue that they cannot apply enzymatic spray at the point of use because it would 'slow down room turnover.' How should this be addressed?",
          options: [
            "Accept their reasoning — room turnover speed is important for efficiency",
            "Point-of-use treatment is a patient safety requirement, not optional; it takes less than 30 seconds to spray instruments, and the alternative — instruments with dried bioburden arriving in SPD — creates a much greater delay and safety risk during reprocessing; education on the clinical rationale and integration into the turnover workflow is needed",
            "Have SPD apply enzymatic spray when instruments arrive instead",
            "Use wet towels over instruments as an alternative"
          ],
          correctIndex: 1,
          explanation: "Point-of-use enzymatic treatment is a critical step in the decontamination chain. It takes minimal time but dramatically improves cleaning effectiveness. Dried bioburden that reaches SPD requires extended soaking, repeated cleaning cycles, and increases the risk of inadequate cleaning. The turnover workflow should be designed to include this step — education should emphasize that skipping it actually increases total reprocessing time and risk.",
          expertXp: 25
        }
      },
      {
        id: "dd-spd2",
        baseQuestion: "An SPD tech is manually cleaning a lumened instrument. She flushes the lumen with enzymatic solution, then rinses with tap water, and moves on to the next instrument. Has she completed the manual cleaning properly?",
        baseOptions: ["Yes — flushing with enzymatic solution and rinsing is adequate", "No — proper lumen cleaning requires brushing the entire lumen with an appropriately sized brush, enzymatic flushing, multiple rinses, and visual inspection"],
        baseCorrectIndex: 1,
        baseExplanation: "Manual cleaning of lumened instruments requires brushing the entire lumen length with a brush sized to contact the inner walls, followed by enzymatic solution flushing, thorough rinsing with treated water, and verification that the lumen is clean. Flushing alone does not remove adherent bioburden from lumen walls.",
        baseXp: 15,
        followUp: {
          question: "The tech uses the same cleaning brush for multiple different-diameter lumens. What is the concern?",
          options: [
            "No concern — one brush can clean any lumen",
            "Brushes must be sized to the specific lumen diameter — an undersized brush will not contact the lumen walls and will fail to remove bioburden; an oversized brush can damage the lumen interior; the brush must also be inspected for wear and replaced when bristles are bent or missing, as worn brushes are themselves a source of contamination",
            "Only the brush length matters, not the diameter",
            "Brushes only need to be sized for flexible endoscopes, not rigid lumens"
          ],
          correctIndex: 1,
          explanation: "Lumen cleaning brushes must be diameter-matched to ensure bristle contact with the entire inner surface. An undersized brush passes through without making wall contact, leaving bioburden in place. Brushes must also be inspected before each use — bent, missing, or worn bristles reduce cleaning effectiveness. Single-use brushes are preferred for consistency. Using one brush for all lumens is a significant cleaning efficacy failure.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd3",
        baseQuestion: "The ultrasonic cleaner in the SPD is running with visible bubbles on the surface during the cleaning cycle. A tech says this is normal cavitation. Is the observation correct?",
        baseOptions: ["Yes — bubbles indicate proper cavitation is occurring", "No — visible large bubbles on the surface may indicate degassing rather than proper cavitation; true ultrasonic cavitation produces microscopic implosion bubbles, not visible surface bubbles"],
        baseCorrectIndex: 1,
        baseExplanation: "Visible large bubbles on the surface of an ultrasonic cleaner typically indicate degassing (dissolved air being released from the solution) rather than effective cavitation. True ultrasonic cavitation involves microscopic bubble formation and implosion that creates the cleaning action. Degassing must be completed before effective cleaning begins.",
        baseXp: 15,
        followUp: {
          question: "How should the efficacy of the ultrasonic cleaner be verified?",
          options: [
            "Watching for bubbles on the surface is sufficient",
            "Ultrasonic cleaner efficacy should be verified using a cavitation verification test (aluminum foil test or commercial cavitation test) on a regular basis, which demonstrates that the ultrasonic energy is producing adequate cavitation throughout the tank; additionally, the solution temperature, concentration, and degassing period must be monitored",
            "Run a biological indicator through the ultrasonic cycle",
            "Clean instruments visually look clean after ultrasonics — no test needed"
          ],
          correctIndex: 1,
          explanation: "Ultrasonic cleaner efficacy is verified through cavitation tests — the aluminum foil test (foil placed in the tank shows uniform pitting from cavitation) or commercial cavitation verification devices. These tests should be performed regularly (per manufacturer IFU and facility policy) and whenever cleaning effectiveness is questioned. Additionally, solution temperature, enzymatic or detergent concentration, cycle time, and degassing period must be monitored and documented.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd4",
        baseQuestion: "A washer-disinfector cycle completes but the printout shows the final rinse temperature reached only 170 degrees F instead of the required 180 degrees F thermal disinfection temperature. Can the load be released?",
        baseOptions: ["Yes — 170 degrees F is close enough to achieve disinfection", "No — the cycle did not meet the minimum thermal disinfection parameters; the load must be reprocessed or the instruments must undergo alternative disinfection"],
        baseCorrectIndex: 1,
        baseExplanation: "Thermal disinfection in washer-disinfectors requires a minimum temperature (typically 180 degrees F/82 degrees C) for a specified contact time. Failure to reach this temperature means the disinfection cycle was incomplete. The load cannot be released and must be reprocessed after the machine is investigated and repaired.",
        baseXp: 15,
        followUp: {
          question: "This is the third time this week the washer-disinfector has failed to reach temperature. The tech has been reprocessing the loads through the same machine. What systemic issue needs to be addressed?",
          options: [
            "Keep reprocessing until the machine works correctly",
            "Repeated cycle failures indicate an equipment malfunction requiring immediate investigation — the machine should be taken out of service for repair, boiler capacity and supply should be evaluated, and all loads processed since the pattern began should be assessed for adequate disinfection; simply rerunning loads through a malfunctioning machine does not ensure they achieve proper disinfection",
            "Switch to a different detergent",
            "Run longer cycles to compensate for lower temperatures"
          ],
          correctIndex: 1,
          explanation: "Repeated thermal disinfection failures indicate an equipment problem — potentially boiler capacity, steam supply, thermostat failure, or heating element degradation. The machine must be removed from service and repaired. Retrospective assessment of loads processed during the failure pattern is needed because earlier failures may have gone undetected. Reprocessing through a known-malfunctioning machine does not guarantee adequate disinfection.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd5",
        baseQuestion: "An SPD tech prepares the enzymatic detergent solution by estimating the dilution ratio rather than using a measured dispensing system. She says she has been doing it this way for years. Is this acceptable?",
        baseOptions: ["Acceptable — experienced techs can estimate accurately", "Not acceptable — enzymatic detergent must be diluted to manufacturer-specified concentrations using measured dispensing systems"],
        baseCorrectIndex: 1,
        baseExplanation: "Enzymatic detergent dilution must be controlled using measured dispensing systems to ensure proper concentration. Under-dilution wastes product and may leave residues on instruments. Over-dilution results in inadequate cleaning. Estimation, regardless of experience, does not meet quality standards.",
        baseXp: 15,
        followUp: {
          question: "The facility installs automated dilution dispensers. What additional quality control is needed to verify proper dilution?",
          options: [
            "Automated dispensers are self-calibrating and need no additional verification",
            "Automated dispensers should be verified using chemical titration testing or test strips at regular intervals to confirm the dispensed concentration matches the manufacturer's recommended dilution; dispensers should also be calibrated per manufacturer schedule and checked whenever a new lot of detergent is introduced",
            "Check the dispenser once per year during PM",
            "If instruments look clean, the concentration is correct"
          ],
          correctIndex: 1,
          explanation: "Automated dispensers require regular verification through chemical titration or concentration test strips to confirm output accuracy. Dispensers can drift out of calibration due to wear, line pressure changes, or detergent viscosity variations between lots. Verification should occur at defined intervals, when new detergent lots are introduced, and whenever cleaning effectiveness concerns arise. Documentation of verification results is essential for quality assurance.",
          expertXp: 25
        }
      },
      {
        id: "dd-spd6",
        baseQuestion: "A new tech in the decontamination area is wearing a surgical mask, eye protection, and gloves but is not wearing a fluid-resistant gown. Is her PPE adequate?",
        baseOptions: ["Yes — mask, eye protection, and gloves provide adequate protection", "No — decontamination area PPE must include a fluid-resistant gown or coverall to protect against splashes of contaminated water, blood, and body fluids"],
        baseCorrectIndex: 1,
        baseExplanation: "Decontamination area PPE requirements include a fluid-resistant gown or coverall, gloves (heavy-duty utility gloves, not exam gloves), face protection (mask and eye protection or face shield), and in some cases hearing protection when operating ultrasonic cleaners. A fluid-resistant gown is essential to protect against splash exposure.",
        baseXp: 15,
        followUp: {
          question: "The tech is wearing latex examination gloves. Why are these inappropriate for the decontamination area?",
          options: [
            "Latex allergies are the only concern",
            "Examination gloves (latex or nitrile) are too thin for decontamination work — they provide inadequate puncture resistance against sharps mixed with contaminated instruments; heavy-duty utility gloves that are puncture-resistant, chemical-resistant, and long enough to protect the wrists are required in the decontam area; latex allergies are an additional but separate concern",
            "Any glove is acceptable as long as it is intact",
            "Examination gloves are fine for manual cleaning but not for machine loading"
          ],
          correctIndex: 1,
          explanation: "Decontamination area gloves must be heavy-duty utility gloves providing puncture resistance (sharps in instrument trays), chemical resistance (enzymatic detergents, disinfectants), and extended cuff length (splash protection). Thin examination gloves are easily punctured by instrument tips and do not resist chemicals. Latex allergies add an additional concern but are not the primary reason examination gloves are inappropriate for decontamination work.",
          expertXp: 25
        }
      },
      {
        id: "dd-spd7",
        baseQuestion: "Water quality testing in SPD shows elevated endotoxin levels in the purified water used for final rinse. Instruments processed with this water appear clean. Is there a concern?",
        baseOptions: ["No — if instruments are clean, the water quality is adequate", "Yes — elevated endotoxins in rinse water can deposit pyrogens on instruments that survive sterilization and cause pyrogenic reactions in patients"],
        baseCorrectIndex: 1,
        baseExplanation: "Endotoxins (pyrogens) are heat-stable lipopolysaccharides from gram-negative bacteria cell walls. They can survive standard steam sterilization and, if deposited on instruments from contaminated rinse water, can cause fever, inflammatory responses, and in severe cases, septic shock in patients. Water quality for final rinse must meet AAMI standards for endotoxin limits.",
        baseXp: 15,
        followUp: {
          question: "What is the clinical significance of pyrogens on surgical instruments, and at what point do endotoxin levels become clinically concerning?",
          options: [
            "Pyrogens are only a concern for IV solutions, not instruments",
            "Pyrogens on surgical instruments introduced into sterile body cavities can cause fever, systemic inflammatory response, and in severe cases organ dysfunction or death; AAMI ST108 specifies critical water endotoxin limits, and any elevation above these limits requires immediate corrective action including water system remediation, assessment of recently processed instruments, and notification of infection control",
            "Endotoxin levels are not measurable on instruments",
            "Only endotoxins on implantable devices are clinically significant"
          ],
          correctIndex: 1,
          explanation: "Pyrogens deposited on instruments from contaminated water are introduced directly into sterile body cavities during surgery, bypassing the body's normal defense mechanisms. Even small amounts can trigger fever, inflammatory cascade, and systemic responses. AAMI ST108 sets critical water quality standards including endotoxin limits. Any exceedance requires immediate water system investigation, remediation, assessment of instruments processed with the contaminated water, and infection control notification.",
          expertXp: 35
        }
      },
      {
        id: "dd-spd8",
        baseQuestion: "An SPD tech removes instruments from the washer-disinfector and notices white, chalky residue on several instruments. She wipes it off and proceeds to inspection. Is this appropriate?",
        baseOptions: ["Yes — the residue was easily removed so the instruments are clean", "No — white residue indicates a water quality or detergent issue that must be investigated; simply wiping it off does not address the root cause and the residue may affect sterilization"],
        baseCorrectIndex: 1,
        baseExplanation: "White chalky residue on instruments after washing indicates mineral deposits from hard water, detergent residue from improper rinsing, or incompatible detergent chemistry. These residues can interfere with steam penetration during sterilization, harbor microorganisms, and damage instrument surfaces over time. The root cause must be investigated.",
        baseXp: 15,
        followUp: {
          question: "Investigation reveals the facility's water softener has been offline for 2 weeks. What impact could this have had on instruments processed during this period?",
          options: [
            "No impact — instruments are sterilized after washing",
            "Hard water mineral deposits can accumulate in washer-disinfector chambers, spray jets, and on instruments; instruments processed during this period may have mineral residues that interfere with sterilization, and the washer-disinfectors themselves may have scale buildup affecting their performance — a comprehensive assessment of equipment and recently processed instruments is needed",
            "Only the appearance of instruments is affected",
            "The ultrasonic cleaner compensates for hard water issues"
          ],
          correctIndex: 1,
          explanation: "Two weeks of hard water exposure can cause significant mineral scale buildup in washer-disinfector chambers, spray arms, and heating elements, reducing equipment effectiveness. Instruments processed during this period may have mineral deposits that create a physical barrier to steam penetration during sterilization. The washer-disinfectors may need descaling, recently processed instruments should be assessed, and the water softener must be repaired and verified before resuming normal operations.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd9",
        baseQuestion: "The SPD uses a multi-enzyme detergent. A tech mixes the solution in the morning and continues using the same solution throughout the 12-hour shift. The manufacturer's IFU states the solution should be changed every 4 hours or when visibly soiled. Is the tech's practice compliant?",
        baseOptions: ["Yes — if the solution is not visibly soiled, it can be used all shift", "No — the manufacturer's IFU requires solution changes at minimum every 4 hours regardless of appearance; enzymatic activity diminishes over time"],
        baseCorrectIndex: 1,
        baseExplanation: "Enzymatic detergent solutions have limited active life — enzymes degrade over time, reducing cleaning effectiveness. The manufacturer's IFU specifying 4-hour solution changes must be followed regardless of visual appearance. Using degraded enzymatic solution results in inadequate cleaning that may not be visible.",
        baseXp: 15,
        followUp: {
          question: "A surveyor asks the tech to explain why enzymatic solutions lose effectiveness over time even when they do not appear soiled. What is the correct explanation?",
          options: [
            "The solution temperature drops, reducing effectiveness",
            "Enzymatic detergents contain biological catalysts (proteases, lipases, amylases) that are consumed as they break down organic soil and also naturally degrade through protein denaturation over time; as enzyme activity decreases, the solution's ability to break down bioburden diminishes even though the solution may appear clear — this is why time-based replacement is required, not just appearance-based",
            "Enzymes evaporate from the solution over time",
            "The pH changes make the solution acidic and ineffective"
          ],
          correctIndex: 1,
          explanation: "Enzymatic detergents work through biological catalysts — proteases break down proteins, lipases break down fats, and amylases break down starches. These enzymes are consumed (used up) as they catalyze reactions with organic soil. They also undergo natural protein denaturation over time, especially at warmer temperatures. The result is progressively decreasing cleaning capacity that is invisible to the eye. Time-based solution changes ensure consistently effective enzymatic activity.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd10",
        baseQuestion: "An instrument tracking system shows that a specific surgical tray was decontaminated but has no record of being inspected or assembled before sterilization. The tray was sterilized and is on the sterile storage shelf. Is this a concern?",
        baseOptions: ["No — the tray was sterilized so any cleaning issues are resolved", "Yes — sterilization does not clean instruments; if the inspection and assembly steps were bypassed, instruments may have residual bioburden, be incorrectly assembled, or have unidentified defects"],
        baseCorrectIndex: 1,
        baseExplanation: "Sterilization kills microorganisms but does not remove bioburden (organic soil, blood, tissue). If instruments were not properly inspected after cleaning, residual bioburden may still be present, which can shield microorganisms from the sterilization process. Additionally, uninspected instruments may have functional defects. The tray must be recalled.",
        baseXp: 15,
        followUp: {
          question: "The SPD manager reviews the tracking system and finds that 3 additional trays from the same shift also have gaps in their process documentation. What does this suggest?",
          options: [
            "The tracking system has a technical glitch",
            "While a system glitch is possible, multiple trays with documentation gaps from the same shift more likely indicates that a tech bypassed process steps or failed to scan at required checkpoints; investigation should include reviewing camera footage if available, interviewing the assigned tech, auditing all trays processed during that shift, and implementing corrective actions such as system-enforced process gates that prevent advancing to the next step without scanning",
            "Documentation gaps are normal during busy shifts",
            "Only the tracking system vendor can investigate this"
          ],
          correctIndex: 1,
          explanation: "Multiple documentation gaps from the same shift strongly suggest a human process failure rather than a system glitch. Investigation should determine whether steps were actually performed but not documented, or whether steps were truly bypassed. All trays from that shift should be audited. Corrective actions should include system-enforced gates that require scanning at each processing checkpoint before allowing advancement to the next step, making it impossible to skip steps without detection.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd11",
        baseQuestion: "A tech is performing manual cleaning on a complex instrument with multiple channels and lumens. She submerges it in detergent and uses a syringe to flush the channels. Is syringe flushing alone adequate?",
        baseOptions: ["Yes — syringe flushing pushes detergent through the channels effectively", "No — syringe flushing alone may not generate sufficient pressure or contact to remove adherent bioburden; the manufacturer's IFU must be followed, which typically requires specific brush sizes, flush volumes, and cleaning sequences"],
        baseCorrectIndex: 1,
        baseExplanation: "Syringe flushing may not generate adequate mechanical action to remove adherent bioburden from channel walls. Manufacturer IFU for complex instruments typically specify brushing with appropriately sized brushes, specific flush volumes and pressures, and defined cleaning sequences. Each step is validated to achieve adequate cleaning.",
        baseXp: 15,
        followUp: {
          question: "The instrument's IFU is 12 pages long with detailed cleaning steps for each channel. The tech says she 'does her best' but cannot memorize all the steps for every instrument. How should the facility address this?",
          options: [
            "Techs should memorize IFUs for all instruments they process",
            "The facility should make IFUs readily accessible at the point of use through digital IFU management systems, laminated quick-reference cards, or tablet-based access; complex instruments should have designated trained specialists who have demonstrated competency on those specific devices; the IFU must be followed exactly — not from memory — every time",
            "Only follow the IFU the first time cleaning a new instrument",
            "Simplify the IFU to a one-page summary and discard the rest"
          ],
          correctIndex: 1,
          explanation: "IFU compliance requires that instructions be accessible at the point of use — expecting memorization of complex, multi-page cleaning protocols is unrealistic and unsafe. Digital IFU management systems, laminated references, or tablet-based access allow techs to follow each step in real time. For highly complex instruments, designated specialists with documented competency should be assigned. IFUs cannot be simplified unilaterally — they represent the manufacturer's validated cleaning process.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd12",
        baseQuestion: "The SPD receives a flexible endoscope for reprocessing. A tech begins cleaning it using the standard rigid instrument cleaning protocol. Is this appropriate?",
        baseOptions: ["Yes — cleaning principles are the same for all instruments", "No — flexible endoscopes require specific reprocessing protocols that differ significantly from rigid instruments, including leak testing, channel-specific brushing, and high-level disinfection or sterilization per manufacturer IFU"],
        baseCorrectIndex: 1,
        baseExplanation: "Flexible endoscopes have unique reprocessing requirements including pre-cleaning at point of use, leak testing before immersion, channel-specific brushing with sized brushes, high-level disinfection or sterilization per IFU, and specific drying and storage protocols. Using rigid instrument protocols is inadequate and dangerous.",
        baseXp: 15,
        followUp: {
          question: "The tech has never been trained on endoscope reprocessing. She was assigned to cover for a colleague who called in sick. What does this situation reveal about the department's competency management?",
          options: [
            "This is a normal staffing challenge — the tech can learn on the job",
            "This reveals a critical competency management failure — staff should only perform tasks for which they have documented competency validation; inadequately reprocessed endoscopes are a leading cause of healthcare-associated infections; the facility must ensure adequate cross-trained staff coverage and should never assign untrained personnel to endoscope reprocessing regardless of staffing pressures",
            "The tech can watch a YouTube video on endoscope reprocessing",
            "As long as a supervisor is available by phone, the tech can proceed"
          ],
          correctIndex: 1,
          explanation: "Assigning untrained staff to endoscope reprocessing is a serious patient safety failure. Improperly reprocessed endoscopes have caused documented outbreaks of multi-drug-resistant organisms including CRE. Competency management requires documented training and validation before staff perform any reprocessing task. Staffing contingency plans must ensure trained personnel coverage for all processing areas. An untrained tech should never be assigned to endoscope reprocessing, and the endoscopes should be held until a trained processor is available.",
          expertXp: 35
        }
      },
      {
        id: "dd-spd13",
        baseQuestion: "The washer-disinfector validation was last performed 14 months ago. The facility's policy requires annual validation. Daily cycle monitoring has been normal. Is the overdue validation a concern?",
        baseOptions: ["No — daily cycle monitoring demonstrates adequate performance", "Yes — validation and daily monitoring serve different purposes; validation comprehensively tests the machine's ability to clean and disinfect under all operating conditions, which daily monitoring does not fully assess"],
        baseCorrectIndex: 1,
        baseExplanation: "Washer-disinfector validation is a comprehensive evaluation of cleaning and disinfection performance including temperature profiling, chemical residue testing, and soil removal verification. Daily cycle monitoring confirms basic parameters but does not replace the thorough assessment that validation provides. Overdue validation is a compliance finding.",
        baseXp: 15,
        followUp: {
          question: "A surveyor asks what parameters are included in a washer-disinfector validation versus daily monitoring. What is the correct comparison?",
          options: [
            "They test the same things — validation is just more thorough",
            "Validation includes: chamber temperature profiling at multiple points, thermal disinfection temperature verification over the full contact time, cleaning efficacy testing using standardized soil loads, rinse quality assessment, chemical residue testing, and cycle reproducibility across multiple runs; daily monitoring typically checks cycle parameters (time, temperature) from the machine's own sensors, which may not reflect actual conditions at every point in the chamber",
            "Validation only checks mechanical function, daily monitoring checks cleaning",
            "There is no standardized difference — each facility defines their own"
          ],
          correctIndex: 1,
          explanation: "Validation uses independent measurement tools to verify conditions throughout the chamber, not just the machine's own sensors. It tests with standardized soils to confirm cleaning efficacy, profiles temperatures at multiple points to ensure uniformity, and verifies that the complete cycle consistently achieves required parameters. Daily monitoring uses the machine's onboard sensors to confirm basic cycle completion. A machine can pass daily monitoring while having areas of inadequate temperature or cleaning due to sensor placement, spray pattern issues, or loading configuration problems that only validation testing reveals.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd14",
        baseQuestion: "An SPD tech uses compressed air to dry the internal channels of a lumened instrument after cleaning. Is this an acceptable drying method?",
        baseOptions: ["Yes — compressed air effectively dries internal channels", "It depends — medical-grade compressed air or instrument air can be used for drying if specified in the IFU, but unfiltered shop air containing oil, moisture, and particulates must never be used on medical instruments"],
        baseCorrectIndex: 1,
        baseExplanation: "The type of compressed air matters. Medical-grade or instrument-grade compressed air (filtered, oil-free, dry) can be used for instrument drying when specified in the manufacturer's IFU. Unfiltered shop or industrial compressed air contains oil residue, moisture, and particulates that can contaminate instruments. The air source must be verified.",
        baseXp: 15,
        followUp: {
          question: "The SPD uses a wall-mounted compressed air outlet for instrument drying. How should the facility verify this air supply is appropriate for instrument processing?",
          options: [
            "If it comes from the wall, it is medical-grade air",
            "The facility must verify the air supply source, confirm it is oil-free and filtered, test for particulate levels and moisture content, ensure the supply is from a medical air compressor or dedicated instrument air system (not the industrial shop air system), and maintain documentation of air quality testing and filter maintenance",
            "A visual check for oil or moisture in the air line is sufficient",
            "Only the facilities engineering team needs to know the air source"
          ],
          correctIndex: 1,
          explanation: "Wall-mounted air outlets may be connected to medical air, instrument air, or industrial compressed air systems depending on the building design. The facility must verify the specific source, confirm oil-free and particle-filtered output, and maintain documentation of air quality testing. Filter maintenance and replacement schedules must be followed. Using industrial compressed air on surgical instruments introduces contaminants that can cause patient harm and is a significant finding.",
          expertXp: 25
        }
      },
      {
        id: "dd-spd15",
        baseQuestion: "A new cleaning verification test (protein residue test) comes back positive on an instrument that visually appears clean after going through the washer-disinfector. What does this indicate?",
        baseOptions: ["The test is likely a false positive — the instrument looks clean", "Visual cleanliness does not guarantee actual cleanliness — the positive protein test indicates residual organic soil that is invisible to the naked eye, and the cleaning process must be evaluated"],
        baseCorrectIndex: 1,
        baseExplanation: "Cleaning verification tests detect organic residues (protein, hemoglobin, ATP) at levels below visual detection. A positive result on a visually clean instrument means the cleaning process is not achieving adequate bioburden removal. The washer-disinfector, detergent concentration, water quality, and loading practices must be evaluated.",
        baseXp: 15,
        followUp: {
          question: "How should cleaning verification testing be integrated into the SPD quality program?",
          options: [
            "Test only when there are visible cleaning failures",
            "Cleaning verification tests should be performed on a routine sampling basis across different instrument types, washer-disinfectors, and shifts; results should be trended to identify patterns (specific machines, instrument types, or operators with higher failure rates); immediate investigation is required for any positive result, and the data should inform process improvement and staff competency assessments",
            "Test every instrument after every cycle",
            "Annual testing during validation is sufficient"
          ],
          correctIndex: 1,
          explanation: "Cleaning verification should be a routine part of the quality program with systematic sampling across equipment, instrument types, shifts, and operators. Trending data reveals patterns that reactive testing cannot identify — such as a specific washer-disinfector with declining performance or an operator who consistently overloads machines. Results drive process improvement, equipment maintenance decisions, and competency assessments. Testing every instrument is impractical, but statistically meaningful sampling provides actionable quality data.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd16",
        baseQuestion: "Instruments arrive at the SPD decontamination window in a closed, rigid container with the lid latched. The OR staff placed a biohazard label on the outside. Is this transport method compliant?",
        baseOptions: ["Yes — closed, labeled containers meet transport requirements", "Partially — while closed containers with biohazard labels are correct for transport, the lid should not be latched airtight as this can cause bioburden to dry on instruments during transport; instruments should remain moist"],
        baseCorrectIndex: 1,
        baseExplanation: "Contaminated instruments should be transported in closed, labeled containers to prevent exposure during transport. However, instruments should remain moist during transport to prevent bioburden from drying. If a rigid container is used, a moist towel should cover instruments or enzymatic foam/spray should be applied before transport to prevent drying.",
        baseXp: 15,
        followUp: {
          question: "The transport container arrives at SPD but has been sitting at the decontam window for 45 minutes because the tech was on break. No enzymatic pretreatment was applied. What is the concern?",
          options: [
            "45 minutes is within acceptable limits for holding contaminated instruments",
            "Delays in beginning decontamination allow bioburden to dry further, making it significantly harder to remove; dried bioburden can form biofilm that resists standard cleaning processes; best practice requires that contaminated instruments be processed as soon as possible, and facilities should have defined maximum holding times with requirements for moisture maintenance during any delay",
            "The instruments will soak in the washer-disinfector anyway",
            "Only instruments used in orthopedic cases need immediate processing"
          ],
          correctIndex: 1,
          explanation: "Every minute of delay allows bioburden to dry further, progressively increasing the difficulty of removal. After 2 hours, dried blood and tissue form a proteinaceous layer that standard enzymatic soaking and mechanical cleaning may not fully remove. Facilities should define maximum acceptable transport-to-processing times and ensure that moisture maintenance (enzymatic spray, moist towels) is applied when any delay is anticipated. Staffing and break coverage must ensure decontam processing is continuous.",
          expertXp: 25
        }
      },
      {
        id: "dd-spd17",
        baseQuestion: "An SPD tech tests the pH of the detergent solution and finds it reads 11.5. The manufacturer's IFU states the working solution should have a pH between 9.0 and 10.5. Should the solution be used?",
        baseOptions: ["Yes — slightly higher pH means stronger cleaning", "No — pH outside the manufacturer's specified range can damage instruments, leave residues, and indicates improper dilution; the solution must be discarded and remade at the correct concentration"],
        baseCorrectIndex: 1,
        baseExplanation: "Using a detergent solution outside the manufacturer's specified pH range can cause instrument corrosion, anodized coating damage, rubber/plastic degradation, and inadequate rinsing. A pH of 11.5 when the maximum is 10.5 indicates over-concentration, which wastes product and can harm instruments. The solution must be discarded and properly prepared.",
        baseXp: 15,
        followUp: {
          question: "A pattern of over-concentrated detergent solutions is found across multiple shifts. What systemic causes should be investigated?",
          options: [
            "Some techs just prefer stronger solutions",
            "Investigate: automated dispenser calibration and function, manual measuring tools availability and accuracy, staff training on proper dilution procedures, whether product containers have changed size or concentration, water supply pressure or temperature changes that affect dilution, and whether there is a cultural belief that 'more is better' that needs to be addressed through education on the risks of over-concentration",
            "Switch to a different detergent brand",
            "Only check the dilution on day shift — night shift has fewer instruments"
          ],
          correctIndex: 1,
          explanation: "Systemic over-concentration has multiple potential causes: dispenser malfunction or miscalibration, unavailable or inaccurate measuring devices for manual mixing, inadequate training, product formulation changes, water supply variations, or a cultural misconception that stronger solutions clean better. Each must be investigated. Education should emphasize that over-concentrated solutions can damage instruments, leave residues that interfere with sterilization, and do not improve cleaning efficacy beyond the validated concentration.",
          expertXp: 25
        }
      },
      {
        id: "dd-spd18",
        baseQuestion: "The SPD has implemented an instrument tracking system that scans each tray at decontamination, assembly, and sterilization. A tech notices the system is down and begins processing trays without scanning. Is this acceptable?",
        baseOptions: ["Yes — processing cannot stop when the tracking system is down", "Processing should continue with a documented manual backup tracking process — but simply processing without any tracking is not acceptable"],
        baseCorrectIndex: 1,
        baseExplanation: "Instrument processing cannot stop when tracking systems are down, but facilities must have documented manual backup procedures. These include manual logs documenting tray IDs, processing steps, operator identification, and timestamps. Processing without any tracking eliminates traceability and accountability.",
        baseXp: 15,
        followUp: {
          question: "The tracking system has been intermittently failing for the past month. The IT department says a replacement is being ordered. What risk does this create?",
          options: [
            "No additional risk since manual backup procedures exist",
            "Chronic tracking system failures create cumulative traceability gaps, increase the risk of missed process steps when techs switch between electronic and manual tracking, reduce the quality of data available for process improvement and recall management, and may indicate the system is approaching complete failure — the facility needs an expedited replacement timeline and should consider whether the frequency of manual backup use is sustainable",
            "The tracking system is optional so there is no risk",
            "Only a risk if a recall occurs during the downtime"
          ],
          correctIndex: 1,
          explanation: "Intermittent tracking failures create a patchwork of electronic and manual records that is difficult to audit, increases the chance of process steps being missed during transitions, and degrades the facility's ability to trace instruments to specific patients in a recall scenario. Manual backup is designed for rare, brief outages — chronic use suggests the system needs urgent replacement. The facility should escalate the replacement timeline, ensure manual backup compliance is being verified, and assess whether instrument traceability has been compromised during the failure period.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd19",
        baseQuestion: "A tech is cleaning instruments in the decontamination sink and notices that the water temperature is 110 degrees F. The facility policy and IFU for the enzymatic detergent recommend a water temperature of 95-110 degrees F for optimal enzyme activity. Is the temperature acceptable?",
        baseOptions: ["Yes — 110 degrees F is at the upper limit of the recommended range", "The temperature is technically within range but at the upper boundary; enzymatic activity begins to decline above 110 degrees F due to protein denaturation, so the temperature should be monitored closely and ideally maintained in the middle of the range"],
        baseCorrectIndex: 1,
        baseExplanation: "While 110 degrees F is within the specified range, it is at the upper boundary where enzyme denaturation begins to accelerate. Best practice is to maintain the temperature in the optimal middle range (around 100-105 degrees F) to ensure peak enzymatic activity. Temperature monitoring should be ongoing throughout the soak period.",
        baseXp: 15,
        followUp: {
          question: "A new tech asks why hot water cannot be used instead of warm water with enzymes — arguing that hotter water should clean better. What is the correct explanation?",
          options: [
            "Hot water does clean better — it just costs more",
            "Hot water (above 110-120 degrees F) causes proteins in blood and tissue to coagulate and denature, essentially 'cooking' the bioburden onto instrument surfaces and making it much harder to remove; it also rapidly destroys enzymatic detergent activity through protein denaturation of the enzymes themselves; warm water keeps bioburden soluble and enzymes active for optimal cleaning",
            "Hot water damages instrument finishes",
            "There is no difference — water temperature does not matter"
          ],
          correctIndex: 1,
          explanation: "Hot water causes a dual problem: it denatures the enzymatic detergent (destroying the cleaning agents) and coagulates proteins in bioburden (making soil harder to remove). Blood proteins coagulate above approximately 130 degrees F, becoming fixed to surfaces similar to cooking an egg. This coagulated material is extremely difficult to remove and can harbor microorganisms. Warm water maintains enzyme activity and keeps organic soil in a soluble, removable state — which is why temperature control during enzymatic cleaning is critical.",
          expertXp: 30
        }
      },
      {
        id: "dd-spd20",
        baseQuestion: "The SPD department has no written policy for bioburden removal verification. The manager states that 'if instruments look clean after the washer-disinfector, they are clean.' Is this an adequate quality assurance approach?",
        baseOptions: ["Yes — visual inspection by trained SPD techs is a reliable method", "No — visual inspection alone cannot detect microscopic bioburden; a comprehensive bioburden removal verification program using cleaning indicators, protein tests, or ATP testing should be in place"],
        baseCorrectIndex: 1,
        baseExplanation: "Visual inspection is an important step but cannot detect microscopic organic residue. Studies have shown that instruments passing visual inspection can still have significant protein and hemoglobin residue. A comprehensive quality program must include objective verification methods such as cleaning indicators, protein residue tests, or ATP bioluminescence testing.",
        baseXp: 15,
        followUp: {
          question: "The SPD manager asks for a practical implementation plan for a cleaning verification program. What are the essential components?",
          options: [
            "Buy testing supplies and test every instrument",
            "A practical program includes: selecting validated cleaning verification tests appropriate for the instruments processed (ATP, protein, hemoglobin), establishing a risk-based sampling plan covering different instrument types and complexity levels, defining testing frequency per shift or per batch, setting acceptance criteria, creating a corrective action protocol for positive results, training staff on test procedures, trending results over time, and integrating findings into quality improvement and competency programs",
            "Hire an outside company to test monthly",
            "Only test instruments that have visible soil remaining after washing"
          ],
          correctIndex: 1,
          explanation: "An effective cleaning verification program balances thoroughness with practicality. Risk-based sampling focuses testing resources on high-risk instruments (complex, lumened, microsurgical) while including representative samples of standard instruments. Testing each shift provides real-time feedback. Trending data reveals patterns and drives improvement. Corrective action protocols ensure that positive results trigger immediate investigation — not just re-cleaning of the individual instrument but assessment of the process that allowed inadequate cleaning. The program should be documented and reviewed as part of the department's quality management system.",
          expertXp: 30
        }
      }
    ]
  }
];
