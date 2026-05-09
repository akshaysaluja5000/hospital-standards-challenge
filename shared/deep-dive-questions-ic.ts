import type { DeepDiveLevel } from "./schema";

export const ddInfectionControlLevel: DeepDiveLevel = {
  id: "dd-infection-control",
  name: "Infection Prevention & Control Deep Dive",
  description: "Expert-level questions on HAI prevention bundles, isolation precaution gaps, PPE compliance failure patterns, MDRO management, and IC surveillance program requirements.",
  icon: "Microscope",
  color: "hsl(185, 70%, 38%)",
  baseLevelId: "infection_control",
  questions: [
    {
      id: "dd-ic1",
      baseQuestion: "A CLABSI rate audit reveals 3.8 infections per 1,000 catheter days on the medical ICU — significantly above the NHSN benchmark of 0.8. Chart reviews show the insertion bundle was documented as complete in 96% of cases. What does this discrepancy suggest?",
      baseOptions: [
        "The insertion bundle documentation is accurate and the elevated CLABSI rate is attributable to patient acuity factors rather than process failures",
        "High documented bundle compliance with elevated infection rates suggests that documentation is not reflecting actual practice — direct observation audits of insertion technique are needed to identify real-world compliance gaps",
        "The NHSN benchmark is based on lower-acuity ICUs and the comparison is not clinically valid for a high-acuity medical ICU",
        "The maintenance bundle is likely the primary driver — insertion bundle compliance is confirmed by the 96% documentation rate"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Near-perfect documented compliance with elevated infection rates is a classic sign that documentation does not reflect practice. Self-report or retrospective checkbox documentation frequently overstates actual compliance. Direct observation of insertion technique, maintenance practices, and hub access is required to identify where actual practice deviates from the documented protocol.",
      baseXp: 20,
      followUps: [
        {
          question: "Direct observation audits reveal that providers consistently use chlorhexidine skin prep but skip the drying step, do not maintain maximal barrier precautions (gown is not worn by one team member), and the catheter hub is accessed without a consistent 15-second friction scrub. These are all insertion and maintenance bundle elements that were being checked as 'compliant' in documentation. What does this reveal about the measurement system?",
          options: [
            "The measurement system is functional — the gaps are individual provider non-compliance events within an otherwise valid measurement process",
            "The measurement system is fundamentally flawed — checkboxes completed by the performing provider without direct observation validation produce data that reflects intention rather than behavior. The quality program must shift to observed audits conducted by a trained third party as the primary compliance measurement method",
            "The measurement problem is limited to the skin prep drying step — the other bundle elements are reliably self-reported",
            "The solution is to add more specific checkbox questions to the documentation form to capture each sub-step of the bundle elements"
          ],
          correctIndex: 1,
          explanation: "Self-completed checklists for one's own procedure systematically overestimate compliance because providers document intended practice rather than actual technique. Direct observation by a trained third party is the gold standard for bundle compliance measurement. The facility needs to redesign its measurement approach — not just add more checkboxes — to capture what is actually happening during insertions and maintenance activities.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic2",
      baseQuestion: "A patient in contact precautions for VRE is transported to radiology for a CT scan. The transport team wears gloves but not gowns. The radiology technologist who positions the patient wears no PPE. After the scan, the CT table is wiped with an alcohol-based wipe. What are the compliance failures in this scenario?",
      baseOptions: [
        "Only the transport team's PPE is deficient — the radiology technologist's PPE and table cleaning are appropriate",
        "Multiple failures: transport team requires gowns in addition to gloves for VRE contact precautions; radiology staff require gown and gloves when directly handling a contact precaution patient; and alcohol wipes are inadequate for VRE — an EPA-registered disinfectant effective against VRE must be used",
        "The only failure is the CT table cleaning method — transport and direct patient contact PPE for VRE requires only gloves",
        "No failures — contact precautions apply only in the patient's room; during transport, standard precautions are sufficient"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Contact precautions require gown AND gloves for all direct patient contact — not just in the patient's room but wherever the patient is physically handled. The radiology technologist who physically positioned the patient had direct contact without any PPE. Additionally, VRE can survive on surfaces — the CT table requires cleaning with a product proven effective against VRE, not just an alcohol wipe.",
      baseXp: 20,
      followUps: [
        {
          question: "After the event, the infection control team audits radiology and discovers that the department has no written protocol for receiving contact precaution patients. Staff say 'we do what transport tells us' and transport says 'radiology is responsible for their own PPE.' What systemic problem does this reveal and how should it be addressed?",
          options: [
            "This is an individual accountability gap — both teams need discipline and re-education on contact precaution requirements",
            "A systemic communication and accountability gap exists between departments for shared responsibility situations — resolution requires a cross-departmental protocol specifying PPE requirements for all contact precaution patient interactions in radiology, including who provides what equipment, how receiving staff are notified, and how the receiving area is cleaned. This must be owned jointly by nursing, infection prevention, and radiology leadership",
            "Radiology should be responsible for all aspects of contact precaution management for patients in their department — no cross-departmental protocol is needed",
            "The solution is to restrict all contact precaution patients to portable imaging only, eliminating the transport exposure issue"
          ],
          correctIndex: 1,
          explanation: "When two departments point at each other, the root cause is a systemic gap in cross-departmental protocols and accountability. The infection prevention program must develop a written standard that defines responsibility at each stage of a contact precaution patient's journey outside their room. Both transport and receiving departments must have clear, agreed-upon roles that are embedded in written protocol, staff education, and compliance monitoring.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic3",
      baseQuestion: "A patient returns from surgery with a freshly inserted central line. The post-op nurse accesses the line to draw labs without scrubbing the hub, hangs the ordered medications, and documents the access. The nurse says the line 'was just placed in a sterile field.' Does the sterile insertion environment eliminate the need for hub disinfection on first access in PACU?",
      baseOptions: [
        "Yes — a line placed in a sterile surgical environment remains sterile until it is first accessed; disinfection before the first access is redundant",
        "No — hub disinfection is required before every access regardless of how recently or under what conditions the line was placed; the hub surface may have been contaminated during connection of tubing, labeling, or transport",
        "Yes — the first access in the first 2 hours post-insertion is an accepted exception to the hub scrub requirement",
        "No — but only if the line is accessed for blood draws rather than medication administration"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Hub disinfection before every access is a non-negotiable maintenance bundle requirement. Even a freshly inserted line can have hub contamination from tubing connections, cap handling, or transport. The sterile insertion environment protects the insertion site, not the hub — these are two distinct potential contamination pathways.",
      baseXp: 15,
      followUps: [
        {
          question: "The PACU nurse manager argues that requiring hub scrubbing for every post-op access will slow recovery nursing in a high-volume PACU. They propose a modified protocol: scrub the hub only for blood draws and intermittent medication pushes, but not for checking line patency or flushing. Is this modification evidence-based and compliant?",
          options: [
            "The modification is evidence-based — contamination risk during flushing is lower than during medication infusion, making a tiered approach clinically logical",
            "The modification is not evidence-based or compliant — hub disinfection is required before every intravascular access event, including flushes. Any breach of the closed system — regardless of purpose — introduces contamination risk. The PACU volume concern must be addressed through workflow efficiency, not by eliminating safety steps",
            "The modification is acceptable if the PACU documents a departmental exception based on operational need",
            "The modification is compliant for flushing but not for blood draws — this distinction is supported by the CLABSI prevention literature"
          ],
          correctIndex: 1,
          explanation: "The catheter hub disinfection requirement applies to every access event — any time the closed system is breached, contamination can be introduced. There is no evidence-based exception for flushing. Workflow concerns in a high-volume PACU must be addressed through optimization — pre-positioning supplies at the bedside, using pre-flushed syringes, efficient tray setup — not by creating exceptions to a core safety practice.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic4",
      baseQuestion: "An infection control review of the past 12 months shows that CAUTI rates have remained elevated despite a catheter management bundle implementation 8 months ago. The bundle includes insertion checklist documentation and daily nursing assessments. What is likely missing from the improvement strategy?",
      baseOptions: [
        "The bundle needs more time — 8 months of implementation is insufficient to demonstrate a statistically significant CAUTI rate change",
        "A nurse-driven urinary catheter removal protocol — allowing nurses to remove catheters based on defined criteria without waiting for a physician order — is consistently the highest-impact CAUTI prevention intervention and is likely missing from the current bundle",
        "The documentation burden of the insertion checklist is causing nursing fatigue that undermines other bundle elements",
        "Urinary antiseptic additives should be added to the catheter care bundle to reduce bacterial colonization"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The single most effective CAUTI prevention intervention is early catheter removal. Nurse-driven removal protocols — which allow nurses to remove catheters based on defined criteria (post-surgery day, absence of specific indications) without a separate physician order — are associated with the largest CAUTI rate reductions in the literature. If the bundle focuses on insertion and maintenance but not removal criteria, it is missing the highest-leverage intervention.",
      baseXp: 20,
      followUps: [
        {
          question: "The medical staff resists implementing a nurse-driven removal protocol because physicians want to maintain order authority over catheter management decisions. How should the infection prevention program address this resistance within the hospital's governance structure?",
          options: [
            "Defer to physician authority — nurse-driven removal requires physician support and cannot be implemented without unanimous physician consensus",
            "Bring the evidence on nurse-driven protocols to the medical executive committee and patient safety committee with CAUTI data showing the current protocol's limitations, propose a pilot protocol with clear criteria, physician oversight built in, and defined evaluation metrics — regulatory and accreditation pressure on HAI rates creates leadership-level urgency that can accelerate physician engagement",
            "Implement the nurse-driven protocol through nursing policy only — physician order authority does not extend to nursing assessment-based interventions",
            "Report the physician resistance to JC as an obstruction to evidence-based practice"
          ],
          correctIndex: 1,
          explanation: "Physician resistance to nurse-driven protocols is best addressed through the medical governance structure using data, evidence, and shared accountability framing. Presenting the CAUTI data — including harm events, cost, and regulatory risk — alongside peer-reviewed evidence for nurse-driven removal at the medical executive committee level engages physicians as partners in solving a shared problem. Unilateral nursing implementation without medical staff engagement creates political conflict that undermines program sustainability.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic5",
      baseQuestion: "During a tracer, a surveyor enters an airborne precaution room (suspected TB) after donning an N95 respirator. Inside, the surveyor notices the patient's door was left ajar by the prior staff member who exited, the room air pressure monitor in the hallway reads positive (instead of negative), and the patient has no surgical mask on. How many compliance failures are present?",
      baseOptions: [
        "One — the door being left ajar is the only actionable finding",
        "Three — open door (positive pressure enters the room), positive room pressure (engineering failure that must be immediately reported and the room taken out of service for airborne isolation), and unmasked patient create compounded transmission risk",
        "Two — the open door and the unmasked patient; positive pressure in an airborne room is a maintenance issue, not a compliance finding",
        "One — the positive room pressure reading is the only finding requiring immediate action; the other observations are minor"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Three separate failures: (1) the door was left open — airborne rooms must have the door kept closed at all times to maintain negative pressure; (2) the room pressure monitor reads positive — this means the room is no longer functioning as an airborne isolation room and the failure must be reported immediately to engineering and the patient moved or the room taken out of service; (3) the patient is not wearing a surgical mask — patients in airborne precautions must wear a surgical mask when staff are present or during transport.",
      baseXp: 20,
      followUps: [
        {
          question: "The positive room pressure reading is traced to a failed air handling unit that has been malfunctioning for 3 days. Staff on the unit were aware the pressure alarm had been going off but assumed it was a sensor malfunction and did not report it. The suspected TB patient has been in the room for all 3 days. What immediate actions are required?",
          options: [
            "Repair the air handling unit and document the event — no further immediate action is required since the patient has not yet been confirmed as TB positive",
            "Immediately: relocate the patient to a functioning airborne isolation room or implement alternative isolation; report the engineering failure to facilities for emergency repair; conduct a contact exposure assessment for all staff, patients, and visitors who entered the unit or adjacent areas during the 3-day failure; initiate ILSM for the affected room; notify infection prevention and leadership; and conduct a root cause analysis on why a 3-day room pressure alarm was not reported",
            "Place the patient on droplet precautions temporarily until the airborne room is repaired",
            "Confirm TB positive status before taking any exposure assessment action — no confirmed exposure has occurred during the malfunction period"
          ],
          correctIndex: 1,
          explanation: "A 3-day failure of a critical airborne isolation room is a serious safety event requiring immediate, multi-pronged response. The patient must be moved to appropriate isolation. An exposure assessment is required for all potentially exposed individuals — TB exposure management follows public health protocols regardless of confirmation status. Engineering emergency repair, ILSM implementation, and root cause analysis of the 3-day reporting failure (alarm normalized, not escalated) are all required. Waiting for TB confirmation delays essential public health steps.",
          expertXp: 35
        }
      ]
    }
  ]
};
