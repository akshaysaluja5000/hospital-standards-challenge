import type { DeepDiveLevel } from "./schema";

export const dnvDeepDiveLevels: DeepDiveLevel[] = [
  {
    id: "dd-dnv-qm",
    name: "DNV Quality Management Deep Dive",
    description: "Expert-level tracer questions on DNV DIAS QM standards — QAPI programs, performance improvement cycles, adverse event analysis, and survey readiness documentation.",
    icon: "BarChart3",
    color: "hsl(221, 83%, 53%)",
    baseLevelId: "dnv_qm",
    questions: [
      {
        id: "dd-dnv-qm-1",
        baseQuestion: "A DNV surveyor asks to review your hospital's QAPI program. Which element is the single most critical indicator that your QAPI program meets DNV QM.1 requirements?",
        baseOptions: [
          "A written QAPI plan signed by the CEO and posted on the intranet within the past 12 months",
          "Documented evidence of completed performance improvement projects with measurable outcomes tied to organizational priorities",
          "Attendance records showing all department heads participated in at least four QAPI committee meetings per year",
          "A dashboard displaying real-time quality metrics accessible to all clinical staff via the EHR"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV QM.1 requires an ongoing QAPI program with demonstrated improvement projects producing measurable outcomes. A plan document alone or meeting attendance is insufficient — the surveyor looks for evidence that the PI cycle (Plan-Do-Study-Act or equivalent) actually ran to completion with data showing improvement.",
        baseXp: 15,
        followUps: [
          {
            question: "The surveyor finds three completed PI projects but notes that none of the project teams included frontline nursing staff. The CNO argues that department directors led the projects and reported findings to frontline staff at unit meetings. Does this satisfy DNV QM standards?",
            options: [
              "Yes — DNV QM standards designate department directors as the accountable party for PI projects, and their authority to represent frontline staff in PI teams is established in the medical staff bylaws and the QAPI governance charter",
              "No — DNV QAPI standards require interprofessional teams that include frontline clinical staff as active participants, not just as recipients of information, because improvement must be driven by those who perform the work",
              "Yes — as long as the unit meeting minutes document that frontline staff received the PI project results and had an opportunity to ask questions, the participation standard is met under the DNV definition of 'organizational involvement'",
              "It depends on project scope — projects affecting nursing workflow require frontline nurse involvement, but projects addressing physician documentation or pharmacy processes can be led exclusively by supervisory staff per QM.1 footnote 3"
            ],
            correctIndex: 1,
            explanation: "DNV QAPI standards emphasize interprofessional participation and frontline engagement in improvement work. Staff who perform the work must be part of designing and testing changes — not just informed of results. Surveyor findings on this point are common and frequently cited as QM deficiencies.",
            expertXp: 25
          },
          {
            question: "Your PI project showed a 22% improvement in hand hygiene compliance but rates have since regressed to near-baseline. The surveyor asks what your sustain strategy was. What response best demonstrates compliance with DNV QM.3 sustainability requirements?",
            options: [
              "Explain that the improvement was sustained for the six-month project measurement period per the project charter timeline, and that re-initiation of the project as a new PI cycle demonstrates organizational commitment to continuous improvement per the PDSA framework",
              "Describe an ongoing monitoring plan with defined control limits, built-in escalation triggers when rates fall below threshold, integration of hand hygiene compliance into unit leader scorecards, and a documented cycle-back to Plan when regression is detected",
              "Present documentation showing the PI project was formally closed, improvement was accepted by the QAPI committee as meeting the stated goal, and the hospital's overall hand hygiene rate remains above the national benchmark median despite the regression at the unit level",
              "Reference the hospital's infection control program which independently monitors hand hygiene and would trigger a corrective action plan if hospital-wide rates fell below the threshold set by the infection prevention committee in accordance with IC.1 requirements"
            ],
            correctIndex: 1,
            explanation: "DNV QM.3 requires that improvements be sustained through ongoing monitoring with defined response mechanisms. A project that shows improvement and then closes without a sustain plan is a PI failure. Surveyors specifically probe for control charts, ongoing measurement, and escalation protocols — evidence that improvement is hardwired, not episodic.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-qm-2",
        baseQuestion: "Under DNV QM standards, when must a hospital conduct a Root Cause Analysis (RCA)?",
        baseOptions: [
          "Only for events that result in patient death or permanent harm",
          "For all adverse events and near-misses reported through the incident reporting system",
          "For serious adverse events, sentinel events, and near-misses with high potential for serious harm — with a documented corrective action plan",
          "Only when required by state law or when a patient or family files a formal complaint"
        ],
        baseCorrectIndex: 2,
        baseExplanation: "DNV DIAS requires RCA for serious adverse events, sentinel events, and significant near-misses. An RCA alone is insufficient — DNV also requires a documented corrective action plan (CAP) with timelines, responsible parties, and evidence of implementation and re-measurement.",
        baseXp: 15,
        followUps: [
          {
            question: "An RCA team identifies a contributing factor of 'staffing shortage' for a medication error event. The corrective action plan states: 'Nursing leadership will review staffing levels monthly.' A DNV surveyor reviews this CAP. What is the surveyor most likely to cite?",
            options: [
              "Nothing — identifying a system-level contributing factor and assigning ongoing monitoring to a responsible leader meets DNV CAP requirements for corrective action specificity",
              "The corrective action is too vague — it lacks SMART criteria (specific, measurable, achievable, relevant, time-bound), does not describe how the staffing gap will actually be corrected, and contains no re-measurement date to verify the action was effective",
              "The corrective action inappropriately assigns individual accountability to nursing leadership rather than distributing responsibility across the interprofessional team per DNV's non-punitive safety culture requirements",
              "The CAP should not reference staffing shortage as a root cause because staffing is a resource constraint, not a process deficiency, and DNV QM standards require RCAs to identify only process-level system failures amenable to process redesign"
            ],
            correctIndex: 1,
            explanation: "DNV surveyors routinely reject vague corrective action statements. 'Will review monthly' does not tell surveyors what specific change was made, by when, and how effectiveness will be measured. SMART action items with verification dates are required. Surveyors pull prior CAPs during tracers and check whether the stated actions were actually implemented.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-qm-3",
        baseQuestion: "DNV requires hospitals to have a formal process for analyzing quality data and reporting to governance. Which reporting chain is correct under DIAS QM standards?",
        baseOptions: [
          "Frontline staff → Department Manager → Medical Staff Committee → Governing Board",
          "Department PI teams → QAPI Committee → Senior Leadership → Governing Board",
          "Infection Control Nurse → Risk Manager → CEO → State Health Department",
          "Quality Director → Medical Executive Committee → Joint Conference Committee → Community Advisory Board"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV DIAS requires that quality data flow from operational PI teams through a QAPI committee (or equivalent structure) to senior leadership and ultimately to the governing board. The governing board must receive quality data and demonstrate accountability — not just awareness — of the hospital's performance.",
        baseXp: 15,
        followUps: [
          {
            question: "The governing board receives a monthly quality dashboard but board meeting minutes show only a 5-minute 'quality update' with no documented board discussion, questions, or actions. A DNV surveyor reviews board minutes for the past year. What standard is most likely being cited?",
            options: [
              "GB.1 — the governing board is responsible for quality oversight and must demonstrate active engagement with quality data, not passive receipt; minutes showing no substantive discussion suggest the board is not fulfilling its oversight function",
              "QM.1 — the QAPI committee is responsible for ensuring board engagement and must escalate quality concerns directly to individual board members when aggregate meeting time for quality is below 15 minutes per meeting",
              "MS.1 — medical staff leadership has primary accountability for quality data presentation to the board and must certify in writing that board members understood the implications of each metric reported in the monthly dashboard",
              "No standard is cited — DNV does not prescribe the minimum duration or depth of board quality discussions; the standard only requires that quality reports be formally transmitted to the governing body through a documented administrative channel"
            ],
            correctIndex: 0,
            explanation: "DNV GB standards require active governing board oversight of quality, not passive receipt of reports. Surveyors examine board minutes for evidence of substantive discussion — questions asked, concerns raised, actions directed. A five-minute agenda item with no documented discussion across multiple meetings is a pattern that triggers GB.1 findings.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-qm-4",
        baseQuestion: "A surveyor conducting a DNV patient tracer on a quality outcome asks to see evidence that your hospital benchmarks its performance data against external comparators. What is the minimum DNV DIAS requirement?",
        baseOptions: [
          "Hospitals must report to at least one CMS quality program and post results on a public-facing website",
          "Benchmarking against any nationally recognized database or peer group is required, with documented evidence that leaders use comparative data to set improvement targets",
          "External benchmarking is recommended but not required; hospitals may use internal year-over-year trending as the sole comparator for all quality metrics",
          "Only metrics tied to DNV Conditions of Participation must be benchmarked; all other quality indicators can use internal targets only"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV DIAS requires that hospitals compare their performance to external benchmarks — peer hospitals, national databases, or accreditation body data. The comparison must be documented and must actually inform target-setting. A hospital that only measures against itself cannot demonstrate what 'good' looks like relative to industry performance.",
        baseXp: 15,
        followUps: [
          {
            question: "Your hospital benchmarks CAUTI rates against NHSN national data and consistently performs at the 50th percentile. The surveyor asks how your hospital uses this benchmark to drive improvement. The Quality Director responds: 'We're at the median, which shows we're average — we're working to move to the 25th percentile.' Is this approach compliant with DNV QAPI expectations?",
            options: [
              "No — DNV DIAS requires all hospitals to achieve top-quartile performance (25th percentile or better for adverse events) within 18 months of initial accreditation and maintain that position at every subsequent annual survey cycle",
              "Yes — documenting that the hospital has a target to improve below the median and has active PI projects working toward that target demonstrates the continuous improvement cycle required by QM standards",
              "No — median performance for CAUTI rates means the hospital is not meeting the DNV definition of 'safe patient care' under PC standards, which requires demonstrated performance above national benchmarks for all healthcare-associated infection metrics regardless of improvement trajectory",
              "Yes, but only if the improvement target is submitted to DNV's quality database as a formal commitment, because QM.5 requires that external benchmarking targets be registered with the accreditation body to create accountability for public reporting"
            ],
            correctIndex: 1,
            explanation: "DNV does not mandate a specific percentile target — it requires evidence of continuous improvement with data-driven targets. A hospital at the 50th percentile with a documented goal to reach the 25th, active projects underway, and measurement in progress demonstrates a functioning QAPI program. The surveyor is looking for a cycle of improvement, not a specific benchmark threshold.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-qm-5",
        baseQuestion: "During a DNV survey, a surveyor asks to speak with the hospital's patient safety officer. The patient safety officer is unavailable. Which response best demonstrates compliance with DNV QM patient safety standards?",
        baseOptions: [
          "Have the Quality Director meet with the surveyor instead — DNV standards do not require a dedicated patient safety officer as a separate role from the quality director",
          "Reschedule the surveyor interview for when the patient safety officer returns — patient safety officer interviews are elective and can be moved to a mutually convenient time without affecting survey findings",
          "Provide the surveyor with the patient safety officer's written reports and action plans, and offer an alternate qualified leader who can speak to the patient safety program's structure, current priorities, and recent outcomes",
          "Notify the surveyor that the patient safety officer role is filled by a committee rather than an individual, and that the committee chair will meet in their place as the designated representative of the patient safety governance structure"
        ],
        baseCorrectIndex: 2,
        baseExplanation: "DNV does not require the patient safety officer specifically to be present, but the surveyor must be able to evaluate the patient safety program through someone with direct knowledge of it. Providing documentation plus a knowledgeable leader who can answer detailed questions about program structure, priorities, and outcomes satisfies the surveyor's evaluation need.",
        baseXp: 15,
        followUps: [
          {
            question: "The surveyor asks the alternate leader: 'Walk me through your hospital's process when a staff member reports a near-miss.' The leader describes the incident reporting system but cannot say what percentage of near-miss reports receive a follow-up response within 30 days. How significant is this gap to DNV patient safety standards?",
            options: [
              "Minor — DNV QM standards require a near-miss reporting system and documented response to serious near-misses, but do not require hospitals to track response time metrics or report response rates to any internal governance body",
              "Significant — DNV requires that near-miss reports receive timely feedback to reporters as part of a just culture and psychological safety program; inability to report the feedback rate suggests the hospital may not be closing the loop with reporters, which undermines the reporting culture and is a QM finding",
              "Critical — DNV DIAS Revision 26 added a specific mandatory metric requiring hospitals to achieve 100% response to all near-miss reports within 14 calendar days, and failure to track this metric triggers an immediate Immediate Jeopardy classification under QM.7",
              "Not applicable — near-miss response time metrics are a CMS Conditions of Participation requirement, not a DNV DIAS standard; DNV patient safety standards focus exclusively on serious adverse events and sentinel events as defined in QM.2"
            ],
            correctIndex: 1,
            explanation: "DNV patient safety culture standards require closing the feedback loop with staff who report near-misses. If staff never hear what happened with their report, reporting rates drop. Inability to describe or measure the response rate is evidence that the feedback loop may be broken — which is a patient safety culture concern, not just an administrative gap.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-gb",
    name: "DNV Governing Body Deep Dive",
    description: "Expert tracer questions on DNV DIAS GB standards — board accountability, medical staff credentialing oversight, quality reporting to governance, and leadership responsibility.",
    icon: "Landmark",
    color: "hsl(243, 75%, 59%)",
    baseLevelId: "dnv_gb",
    questions: [
      {
        id: "dd-dnv-gb-1",
        baseQuestion: "Under DNV DIAS GB standards, which action must the governing board take regarding the medical staff bylaws?",
        baseOptions: [
          "Review and approve medical staff bylaws at least every three years, with documentation in board meeting minutes",
          "Delegate full authority over medical staff bylaws to the Medical Executive Committee with no required board approval",
          "Approve the medical staff bylaws and any amendments, retaining ultimate authority over the medical staff structure",
          "Accept medical staff bylaws as drafted by legal counsel without substantive review, as bylaws are a legal document outside board governance scope"
        ],
        baseCorrectIndex: 2,
        baseExplanation: "DNV GB standards require the governing board to approve medical staff bylaws and any amendments. The board retains ultimate authority over the medical staff's organizational structure. Delegation of this approval authority to the MEC without board action would be a GB standards violation.",
        baseXp: 15,
        followUps: [
          {
            question: "The medical staff bylaws were last approved by the board four years ago and amended twice since then — but the amendments were approved only by the MEC. A surveyor discovers this during document review. What is the compliance status?",
            options: [
              "Non-compliant — all amendments to medical staff bylaws require governing board approval; MEC-only approval of amendments is not recognized under DNV GB standards regardless of what the bylaws themselves say about the amendment process",
              "Compliant — if the bylaws themselves contain a provision allowing the MEC to approve non-substantive amendments without full board review, that provision was itself approved by the board and therefore constitutes delegated board authority within the framework of the original board-approved document",
              "Compliant — DNV distinguishes between bylaws and rules-and-regulations; only the core bylaws document requires board approval and amendments to procedural rules are within MEC authority",
              "Non-compliant only if the amendments changed credentialing criteria, scope of practice definitions, or disciplinary procedures; administrative amendments such as meeting frequency or committee structure fall within MEC delegated authority per DNV GB.2 footnote"
            ],
            correctIndex: 0,
            explanation: "DNV GB standards require board approval of all bylaw amendments. A provision in the bylaws delegating amendment authority to the MEC does not override the board's non-delegable responsibility to approve the governing document for the organized medical staff. This is a common finding and frequently results in a required action during DNV surveys.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-gb-2",
        baseQuestion: "A DNV surveyor asks the CEO how the governing board holds the hospital accountable for quality outcomes. The CEO describes the monthly quality dashboard presented at board meetings. What additional element is essential to demonstrate GB compliance?",
        baseOptions: [
          "The board must employ at least one physician board member to ensure clinical credibility in quality oversight decisions",
          "The board must have a standing Quality Committee of the board with documented charter, authority, and minutes showing independent analysis separate from administration's presented materials",
          "Evidence that board members have completed a quality literacy education program enabling them to critically evaluate quality metrics without relying solely on administration's interpretation",
          "Documentation that the board has exercised authority to direct specific quality improvement priorities, not just received information — including examples where the board directed or modified the hospital's quality agenda"
        ],
        baseCorrectIndex: 3,
        baseExplanation: "DNV GB standards require active board oversight, not passive receipt of quality reports. Surveyors look for evidence that the board exercises real authority — directing priorities, requesting follow-up, modifying timelines, or escalating concerns. A board that receives monthly dashboards without acting on them is not demonstrating the oversight GB standards require.",
        baseXp: 15,
        followUps: [
          {
            question: "Board minutes show that 8 months ago the board directed leadership to develop a plan to reduce sepsis mortality by 15% within 12 months. The surveyor asks to see what happened with this directive. The Quality Director provides a PI project charter dated 6 months ago. Is this sufficient evidence of board oversight?",
            options: [
              "Yes — the board issued a directive and administration responded by launching a formal PI project within a reasonable timeframe; the 6-month gap reflects the time required to conduct a thorough root cause analysis before initiating improvement work",
              "No — the surveyor will want to see subsequent board minutes showing that leadership reported back to the board on the PI project's progress, the board asked follow-up questions, and the board confirmed the 12-month target is still achievable — demonstrating a closed loop between board direction and executive accountability",
              "Yes, with one condition — the PI project charter must be co-signed by the board chair to demonstrate that the project was formally accepted as the response to the board directive, establishing a documented chain of governance accountability from board resolution to operational response",
              "No — a 6-month delay between a board directive and a PI project charter launch indicates a breakdown in the governance accountability chain that constitutes a separate GB citation independent of the original quality concern that prompted the board directive"
            ],
            correctIndex: 1,
            explanation: "Board oversight requires a closed loop — the board directs, administration acts, and the board receives a report on what happened. Without subsequent board minutes showing progress reports and board engagement on the sepsis initiative, the original directive appears to have been forgotten, not followed. DNV surveyors trace the full governance chain from directive to outcome.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-gb-3",
        baseQuestion: "Under DNV DIAS GB standards, who has the authority to grant initial clinical privileges to physicians?",
        baseOptions: [
          "The Chief Medical Officer, who may act on behalf of the governing board between board meetings for time-sensitive credentialing decisions",
          "The Medical Executive Committee, which has full delegated authority for all credentialing decisions as the elected representative body of the organized medical staff",
          "The governing board, based on recommendations from the medical staff through the credentialing committee — the board cannot delegate final privilege-granting authority",
          "The credentialing coordinator and CMO jointly, using an expedited administrative process for physicians who have active privileges at an affiliated network hospital"
        ],
        baseCorrectIndex: 2,
        baseExplanation: "Under DNV DIAS GB standards (consistent with CMS Conditions of Participation), only the governing board may grant, deny, or restrict clinical privileges. The board acts on medical staff recommendations but cannot delegate final privilege-granting authority to any other body, including the MEC or CMO.",
        baseXp: 15,
        followUps: [
          {
            question: "The hospital has a policy allowing the CMO to grant temporary privileges for up to 30 days when urgent clinical need exists and the credentialing process has not been completed. A surveyor asks to see the supporting documentation for this policy. What must be present to demonstrate DNV compliance?",
            options: [
              "A board resolution formally authorizing the CMO to act in the board's place for temporary privilege grants, with defined criteria for what constitutes 'urgent clinical need,' a maximum time limit, and a required subsequent ratification by the full board at its next regular meeting",
              "A medical staff bylaws provision authorizing temporary privileges and a CMO attestation letter for each temporary privilege grant — DNV recognizes CMO attestation as equivalent to board action for provisional credentialing under the expedited pathway framework",
              "Governing board minutes explicitly prohibiting temporary CMO-issued privileges except when the board is not in session, combined with a notification system ensuring all board members are informed of any temporary privilege grant within 72 hours via the board's electronic communication platform",
              "A Joint Commission-equivalent temporary privilege policy is automatically accepted by DNV surveyors as satisfying GB credentialing standards because DNV and Joint Commission hold deemed status under the same CMS regulatory framework for physician credentialing"
            ],
            correctIndex: 0,
            explanation: "DNV allows temporary privileges under defined emergency circumstances, but the board must have formally authorized the mechanism, defined the criteria, set a time limit, and established a ratification process. CMO action without this board-authorized framework constitutes unauthorized privilege-granting and is a GB deficiency.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-gb-4",
        baseQuestion: "DNV DIAS requires the governing board to establish the hospital's mission and strategic direction. During a survey, a surveyor asks how the governing board ensures the mission is reflected in operational decisions. What is the strongest evidence of compliance?",
        baseOptions: [
          "A framed mission statement posted in the board room and referenced in the annual report distributed to community stakeholders",
          "Documentation that the board uses mission alignment as a criterion when reviewing capital expenditure requests, strategic partnerships, and service line additions — with examples in board minutes",
          "An annual board retreat agenda showing that the mission statement was reviewed and reaffirmed by board vote at the most recent strategic planning session",
          "The CEO's employment contract includes a clause requiring alignment of all administrative decisions with the board-approved mission statement, creating contractual accountability"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV GB standards require the mission to be operationally integrated, not merely posted. Surveyors look for evidence that the board actually uses the mission as a decision-making lens — applying it when reviewing capital requests, partnerships, and service changes — not just that the mission exists as a document.",
        baseXp: 15,
        followUps: [
          {
            question: "A board is considering closing the hospital's behavioral health unit due to financial losses, but the mission statement includes a commitment to 'serving the whole health of our community including mental and behavioral health needs.' The CFO presents a business case for closure. What governance process best demonstrates DNV GB compliance?",
            options: [
              "The board should vote immediately on the CFO's financial recommendation since governing boards are responsible for financial viability and the mission statement cannot override fiduciary duty to maintain a solvent institution capable of serving any patients at all",
              "The board should table the decision until the next fiscal year when updated community health needs data is available, since major service line decisions that potentially conflict with the mission require a full community health needs assessment cycle before the board can act in good faith",
              "The board should conduct a formal mission impact analysis, engage the community and medical staff in the decision, document the discussion of mission implications in board minutes, and ensure the final decision — whatever it is — reflects deliberate consideration of mission alongside financial factors",
              "The board should delegate the decision to the CEO since it is an operational matter and the board's role is strategic governance, not management of individual service lines or clinical programs"
            ],
            correctIndex: 2,
            explanation: "DNV GB standards do not prevent boards from closing services for financial reasons, but they require that the mission be genuinely weighed in consequential decisions. The governance record must show the board considered mission impact — not that mission always wins. Boards that make decisions with no evidence of mission deliberation in high-stakes situations face GB findings.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-gb-5",
        baseQuestion: "Under DNV DIAS, how must the governing board respond when it receives the hospital's annual DNV survey report containing required actions (RAs)?",
        baseOptions: [
          "The CEO reviews RAs and develops corrective action plans independently; the board is informed of closure when all RAs are resolved",
          "The board must formally accept the survey findings, review the corrective action plans developed by leadership, and maintain oversight of RA closure — with board-level documentation of this process",
          "RAs are administrative matters handled exclusively by the Quality Department; board involvement is required only for Immediate Jeopardy findings",
          "The board votes to accept or appeal each RA individually, based on their own independent assessment of whether the surveyor's findings are clinically valid"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV expects governing board engagement in the survey response process. The board must formally acknowledge survey findings, review corrective action plans, and track RA closure — this is a key component of board quality oversight. Boards that delegate the entire survey response to administration without documented engagement are not meeting GB oversight requirements.",
        baseXp: 15,
        followUps: [
          {
            question: "A hospital received three Required Actions from its annual DNV survey. The Quality Director prepared CAPs for all three and submitted them to DNV within the required timeframe. Board meeting minutes from the following month show no mention of the survey findings. Is this a GB compliance concern?",
            options: [
              "No — the Quality Director's timely CAP submission to DNV demonstrates that the hospital's quality management system functioned correctly; DNV does not require that the governing body be individually notified of each survey finding or that board meeting agendas include a survey response agenda item",
              "Yes — the governing board is responsible for quality oversight, and a survey producing required actions is a significant quality event that must be reported to and acknowledged by the board; absence from board minutes suggests the board was not fulfilling its oversight role for this consequential quality event",
              "No — as long as the board chair was personally briefed by the CEO, the notification requirement is satisfied; DNV GB standards recognize informal leadership communication as equivalent to formal board meeting documentation for time-sensitive survey response matters",
              "Yes, but only if any of the three RAs were related to patient safety or medical staff standards; administrative RAs related to documentation, recordkeeping, or organizational policies do not rise to the level requiring governing board notification per DNV's RAs tiering framework"
            ],
            correctIndex: 1,
            explanation: "DNV survey Required Actions are quality findings that require governing board awareness. Board minutes with no mention of the survey response indicate the board did not fulfill its oversight function for a material quality event. This is a GB deficiency — the board must demonstrate it reviewed, discussed, and tracked the hospital's response to survey findings.",
            expertXp: 25
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-ms",
    name: "DNV Medical Staff Deep Dive",
    description: "Expert tracer questions on DNV DIAS MS standards — credentialing, privileging, peer review, medical staff bylaws, and practitioner performance evaluation.",
    icon: "Stethoscope",
    color: "hsl(160, 60%, 45%)",
    baseLevelId: "dnv_ms",
    questions: [
      {
        id: "dd-dnv-ms-1",
        baseQuestion: "A surgeon applies for privileges to perform robotic-assisted prostatectomy — a procedure not currently offered at your hospital. Under DNV MS standards, what is the required process?",
        baseOptions: [
          "The CMO may grant the privilege immediately if the surgeon provides documentation of fellowship training in robotic surgery and board certification in urology",
          "The Medical Executive Committee must define new privilege criteria, the credentialing committee must verify the surgeon meets those criteria, and the governing board must grant the privilege — with evidence that the hospital has the infrastructure to support the procedure safely",
          "The privilege cannot be granted until the hospital has performed at least 25 robotic prostatectomy procedures using borrowed equipment to establish a local outcomes baseline before extending privileges to independent practitioners",
          "Robotic surgery privileges fall under the FDA device approval framework, not hospital credentialing standards, so DNV MS requirements are superseded by the FDA's indication labeling for the robotic system being used"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MS standards require that new privileges be defined through a formal process: criteria must be established (training, case volume, outcomes), the applicant must be verified against those criteria, and the governing board must grant the privilege. Additionally, the hospital must have demonstrated capacity to support the procedure safely — equipment, staff training, and backup resources.",
        baseXp: 15,
        followUps: [
          {
            question: "The surgeon's robotic prostatectomy privileges are granted. Six months later, the surgeon has performed 3 cases with one conversion to open surgery and no adverse outcomes. During proctoring review, the proctor notes the surgeon's case times are 40% longer than expected. Under DNV Ongoing Professional Practice Evaluation (OPPE) standards, what should happen?",
            options: [
              "Nothing — three cases is an insufficient sample size to draw meaningful conclusions about performance; OPPE review should wait until the surgeon has completed a minimum of 25 proctored cases before any performance evaluation is conducted",
              "The prolonged case times should be flagged in the OPPE record, trended over subsequent cases, and discussed with the surgeon; if the trend continues, it should trigger a Focused Professional Practice Evaluation (FPPE) to assess competency",
              "Privileges should be immediately suspended pending completion of FPPE, because prolonged operative times are a patient safety indicator that requires action before the surgeon is allowed to perform additional independent cases",
              "The open conversion should trigger automatic privilege restriction to open prostatectomy only, because any conversion during proctored cases demonstrates that the surgeon has not yet achieved independent competency in the robotic technique per MS.4 proctoring standards"
            ],
            correctIndex: 1,
            explanation: "DNV OPPE standards require ongoing monitoring of practitioner performance indicators. Prolonged case times are a performance signal that should be documented, trended, and discussed with the physician — not ignored, but also not grounds for immediate suspension absent patient safety concerns. If the trend continues, FPPE is the appropriate next step, not punitive action on a small case series.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ms-2",
        baseQuestion: "Under DNV MS standards, how must peer review be structured to satisfy requirements for practitioner performance evaluation?",
        baseOptions: [
          "Peer review must be conducted by a physician outside the hospital with no prior professional relationship to the practitioner under review",
          "Peer review must be conducted by a qualified physician of the same specialty, with documented criteria for case selection, structured evaluation methodology, and findings reported to the credentialing committee",
          "Peer review is required only when a patient complaint is filed or an adverse outcome triggers a quality review referral from the risk management department",
          "Peer review conclusions must be disclosed to the practitioner under review within 48 hours and the practitioner must be given an opportunity to respond before any finding is recorded in the credentialing file"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MS peer review requires same-specialty physician review, defined case selection criteria, structured evaluation methodology, and formal reporting to the credentialing structure. Ad hoc or complaint-driven peer review alone does not satisfy the ongoing surveillance requirement that DNV standards establish.",
        baseXp: 15,
        followUps: [
          {
            question: "Your hospital's peer review process uses a single physician reviewer who evaluates cases selected at random by the Quality Department. The reviewer uses a 5-point scoring rubric developed internally. A surveyor asks how the hospital ensures reviewer consistency and bias mitigation. What response best demonstrates DNV compliance?",
            options: [
              "The Quality Department selects cases randomly, which eliminates selection bias; random selection combined with a structured scoring rubric is sufficient to meet DNV peer review methodology requirements regardless of whether reviewer calibration is documented",
              "Describe a process including: calibration sessions where reviewers apply the rubric to identical cases to assess scoring consistency, regular review of outlier scores, use of multiple reviewers for complex cases, and periodic external benchmarking of the hospital's peer review process against national standards",
              "The hospital uses a single-reviewer model because DNV MS standards do not specify a minimum number of reviewers per case; the structured rubric ensures consistency within the single-reviewer model without requiring additional process complexity",
              "The physician reviewer is a department chief with 20 years of clinical experience, which DNV accepts as a sufficient qualification to conduct independent peer review without additional calibration mechanisms, since expertise and experience are the primary bias-mitigation factors in physician peer review"
            ],
            correctIndex: 1,
            explanation: "DNV peer review standards require more than a random case sample and a scoring form. Surveyors probe for consistency measures — how does the hospital know the rubric is being applied the same way each time? Calibration, multi-reviewer approaches for complex cases, and periodic external review of the peer review process demonstrate a mature, defensible system.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-ms-3",
        baseQuestion: "A physician's hospital privileges lapse because the credentialing office missed the re-credentialing deadline. The physician continues seeing patients for two weeks before the gap is discovered. Under DNV MS standards, what must occur?",
        baseOptions: [
          "The physician must retroactively sign an attestation confirming all care provided during the lapse period was within their normal scope of practice, which restores the legal validity of that care under the medical staff bylaws",
          "All care provided during the lapse period must be reviewed through peer review, an incident report must be filed, the credentialing process must be immediately completed, and the event must be analyzed as a system failure with corrective action",
          "The physician must stop seeing patients immediately and cannot return until the credentialing committee meets at its next scheduled monthly meeting to formally re-approve the credentials",
          "The lapse is automatically corrected by completing the credentialing paperwork retroactively dated to the expiration date, because credentialing is an administrative process and retroactive correction is permitted when the gap results from administrative error rather than clinical concerns"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "A privilege lapse is a serious patient safety and compliance event. DNV MS standards require: peer review of care delivered without valid privileges, incident reporting, immediate correction of the credentialing status, and root cause analysis of the system failure. Retroactive dating or attestation letters do not eliminate the compliance obligation.",
        baseXp: 15,
        followUps: [
          {
            question: "Investigation reveals the credentialing office uses a paper-based re-credentialing tracking system with no automated alerts. The two-week lapse went undetected because the tracking sheet was misfiled. As the CMO, what systemic corrective action will a DNV surveyor expect to see?",
            options: [
              "Discipline the credentialing coordinator who misfiled the tracking sheet through the HR progressive discipline process, and add a second-check step requiring the credentialing director to review all tracking sheets monthly — the human error was the root cause and human oversight is the appropriate corrective mechanism",
              "Implement a credentialing management system with automated expiration alerts, hard stops preventing scheduling of physicians with lapsed privileges, and a redundant escalation pathway that notifies the CMO when credentials are within 90 days of expiration — eliminating dependence on manual tracking for time-critical compliance functions",
              "Transition all credentialing to the system's affiliated health network's centralized credentialing office, because centralization eliminates single-point-of-failure risks inherent in hospital-level credentialing operations and DNV accepts network credentialing as equivalent to hospital-level privileging under the virtual hospital standards",
              "Add a monthly credentialing audit to the Quality Director's responsibilities, designating the Quality Department as the backup monitoring system for credential expiration dates — creating a two-department safety net that compensates for the limitations of the paper-based tracking system"
            ],
            correctIndex: 1,
            explanation: "DNV expects system-level corrective actions that eliminate the failure mode, not human workarounds. A paper-based system with no automated alerts is a design vulnerability. The surveyor will want to see technology solutions that make privilege lapses structurally impossible — hard stops in scheduling systems, automated alerts, and escalation pathways — not just additional manual checks on a broken process.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ms-4",
        baseQuestion: "Under DNV DIAS MS standards, what is the purpose of Focused Professional Practice Evaluation (FPPE)?",
        baseOptions: [
          "FPPE is the initial evaluation period for all newly privileged practitioners, lasting a minimum of six months and including proctored cases for every procedure within their privilege set",
          "FPPE is a time-limited, focused evaluation triggered by a specific concern about a practitioner's competency, performance, or behavior — with defined evaluation criteria, monitoring methods, and a clear endpoint",
          "FPPE is a punitive process that must be disclosed to state licensing boards and malpractice insurers as a reportable action under National Practitioner Data Bank requirements",
          "FPPE applies only to physicians in their first year after completing residency training and is not applicable to experienced practitioners with established hospital privilege histories"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "FPPE under DNV MS standards is a focused, time-limited evaluation process triggered by a specific concern — an adverse event, pattern of performance issues, behavioral concerns, or a privilege request outside established competency. It requires defined criteria, a monitoring methodology, and a clear decision point. It is not inherently punitive and is not automatically reportable to the NPDB.",
        baseXp: 15,
        followUps: [
          {
            question: "An FPPE is initiated for a hospitalist physician after three medication order errors in one month. The FPPE plan requires the department chief to review all of the physician's orders for 30 days. At day 30, no additional errors are found. Can FPPE be closed?",
            options: [
              "Yes — the 30-day monitoring period specified in the FPPE plan has been completed with no additional errors, which constitutes successful completion of the evaluation; the credentialing committee may formally close the FPPE and return the physician to standard OPPE monitoring",
              "No — DNV requires a minimum 90-day FPPE period for medication safety concerns because one error-free month is statistically insufficient to rule out competency concerns given normal variation in prescribing volume",
              "Yes, but only after the department chief signs an attestation confirming the physician demonstrated competency, and the physician signs an acknowledgment that future medication errors within 12 months will trigger automatic privilege restriction per the medical staff bylaws corrective action policy",
              "It depends on whether the root cause of the three errors was physician-related or system-related; if pharmacy or EHR system factors contributed, FPPE closure requires documentation that the system issues have been independently corrected, even if the physician demonstrated no subsequent individual errors"
            ],
            correctIndex: 0,
            explanation: "FPPE closure is a medical staff decision based on whether the defined evaluation criteria have been met. If the FPPE plan specified 30 days of order review with no additional errors as the endpoint, and that criterion was met, the credentialing committee may close FPPE. DNV does not mandate a minimum FPPE duration — the plan's criteria govern closure, not a fixed calendar period.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ms-5",
        baseQuestion: "A DNV surveyor asks to review your hospital's process for verifying primary source credentials for a newly appointed physician. Which elements must be present to demonstrate DNV MS compliance?",
        baseOptions: [
          "A signed attestation from the applicant confirming the accuracy of all credentials listed in the application, countersigned by the department chief",
          "Primary source verification of medical education, training, board certification, state licensure, DEA registration, and query of the National Practitioner Data Bank — all documented before privileges are granted",
          "Verification of state licensure and malpractice insurance only — additional elements are required only for high-risk specialties such as surgery, obstetrics, and emergency medicine",
          "A copy of the physician's curriculum vitae verified against hospital records from any prior affiliation within the same health system within the past five years"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MS standards require primary source verification — direct confirmation with the issuing institution or body — for medical education, training (residency/fellowship), board certification, licensure, DEA registration, and an NPDB query. Self-reported credentials and CVs do not satisfy primary source verification requirements.",
        baseXp: 15,
        followUps: [
          {
            question: "During document review, the surveyor finds that a surgeon's board certification lapse six months ago and the credentialing file shows no follow-up action. The surgeon's privileges were not modified. How must the credentialing committee respond?",
            options: [
              "Immediately suspend all surgical privileges pending completion of the board recertification process — board certification lapse constitutes automatic privilege revocation because certification status is a condition of privilege maintenance under DNV MS.1",
              "Review whether board certification is a defined eligibility criterion for the surgeon's privileges, determine whether there is a grace period or alternative competency demonstration allowed in the bylaws, notify the surgeon, and document the committee's action — including whether privileges will be modified, placed under FPPE, or maintained with additional oversight",
              "Send the surgeon a written notice requiring board recertification within 90 days, with the understanding that privileges automatically continue unchanged during the recertification period since the surgeon's prior certification demonstrates baseline competency and recertification is an administrative renewal rather than a new competency assessment",
              "No action is required because board certification is a voluntary credential and DNV MS standards only require verification of licensure and DEA registration as mandatory ongoing credentialing elements; board certification lapses are a quality indicator but not a credentialing compliance requirement"
            ],
            correctIndex: 1,
            explanation: "The credentialing committee must determine whether board certification was a defined privilege criterion. If it was, the lapse requires action — FPPE, privilege modification, or a defined grace period within the bylaws. Automatic suspension without review may not be required, but ignoring the lapse entirely is not acceptable. The committee's documented deliberation and action is what the surveyor evaluates.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-ns",
    name: "DNV Nursing Services Deep Dive",
    description: "Expert tracer questions on DNV DIAS NS standards — nurse staffing, scope of practice, nursing leadership, competency validation, and patient care delegation.",
    icon: "Heart",
    color: "hsl(340, 75%, 55%)",
    baseLevelId: "dnv_ns",
    questions: [
      {
        id: "dd-dnv-ns-1",
        baseQuestion: "Under DNV DIAS NS standards, who bears ultimate responsibility for nursing services throughout the hospital?",
        baseOptions: [
          "The charge nurse of each unit, who is accountable for all nursing care delivered during their shift",
          "A qualified registered nurse executive (CNO or equivalent) who is responsible for the overall nursing program hospital-wide",
          "The Medical Executive Committee, which oversees all clinical departments including nursing through the interdisciplinary quality structure",
          "Each individual RN, who bears independent professional and legal accountability for their own scope of practice under state nursing law"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV NS standards require a qualified nurse executive — typically the Chief Nursing Officer or equivalent — with organization-wide authority and accountability for nursing services. This person must have the authority to establish and enforce nursing standards, staffing models, and competency requirements across all units and shifts.",
        baseXp: 15,
        followUps: [
          {
            question: "The hospital has a CNO who reports to the CFO rather than the CEO. The CNO does not have a seat at the senior leadership table and is not included in strategic planning discussions. A DNV surveyor explores this structure during an NS tracer. What concern is the surveyor likely raising?",
            options: [
              "No compliance concern — organizational reporting structures are within the hospital's authority to determine, and DNV NS standards specify the CNO's clinical authority but do not prescribe reporting relationships or require inclusion in strategic planning processes",
              "The reporting structure may compromise the CNO's ability to advocate effectively for nursing resources and standards at the executive level; DNV NS standards require the nurse executive to have organizational authority commensurate with the scope of their responsibility, which a subordinate reporting line to the CFO may undermine",
              "The surveyor is verifying compliance with the nurse executive salary benchmarking requirement under NS.2, which requires CNO compensation to be peer-comparable as a condition of maintaining organizational authority status under DIAS standards",
              "The concern is with CFO oversight of nursing, which creates a conflict of interest between financial stewardship and nurse staffing decisions; DNV requires structural separation between nursing leadership and finance leadership through a formal governance firewall"
            ],
            correctIndex: 1,
            explanation: "DNV NS standards require the nurse executive to have genuine organizational authority — not just a title. A CNO who reports to the CFO, lacks a strategic voice, and is excluded from planning discussions may not have the structural authority to protect nursing standards, staffing, and quality. Surveyors look for evidence that the CNO can and does influence organizational decisions affecting nursing.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ns-2",
        baseQuestion: "A DNV surveyor on a nursing floor tracer asks the charge nurse how staffing levels are determined for the unit. What answer best demonstrates compliance with DNV NS staffing standards?",
        baseOptions: [
          "Staffing is determined by the house supervisor based on census at the start of each shift using a fixed nurse-to-patient ratio set by state regulation",
          "Staffing is determined using an evidence-based staffing methodology that accounts for patient acuity, care complexity, staff competencies, and available support — with documented rationale when staffing falls below the plan",
          "The hospital uses a staffing agency for any gaps and maintains minimum staffing by ensuring at least one RN per 8 patients on medical-surgical units, which meets the DNV baseline requirement",
          "The charge nurse has complete discretion to set staffing based on their clinical judgment of the unit's needs at any given time, without reference to an administrative staffing plan or grid"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV NS standards require an evidence-based staffing process that considers acuity, complexity, and support resources — not just fixed ratios or census-based headcounts. The hospital must also document its reasoning when staffing falls short of the plan, demonstrating that deviations from the staffing methodology are recognized and managed rather than invisible.",
        baseXp: 15,
        followUps: [
          {
            question: "The surveyor reviews staffing records and finds that the unit was short one RN for 12 of the past 30 shifts, but no documentation exists showing the charge nurse or house supervisor acknowledged or addressed the shortfall. What standard is most likely being cited?",
            options: [
              "NS.2 — the absence of documentation for 40% of shifts shows a systemic pattern of unrecognized staffing shortfalls; DNV requires that staffing deviations from the patient care plan be documented, escalated per the chain of command, and reported to nursing leadership for trending and corrective action",
              "PC.1 — staffing shortfalls are a patient care standard violation because they directly compromise the hospital's ability to provide safe nursing care as defined in the nursing care plan for each admitted patient",
              "QM.1 — staffing shortfalls constitute a reportable adverse event under QAPI standards because they represent a near-miss for patient harm, and 12 undocumented shortfalls in a single month require RCA under the hospital's serious safety event reporting policy",
              "No standard is cited — DNV NS standards establish staffing methodology requirements but do not require documentation of individual shift-level staffing variations unless a patient harm event resulted directly from the staffing shortfall"
            ],
            correctIndex: 0,
            explanation: "DNV NS standards require documentation of staffing deviations and a chain-of-command response when staffing falls below plan. Twelve undocumented shortfalls suggest the hospital either doesn't know it's understaffed or knows and isn't responding — both are compliance failures. Trending of staffing shortfalls must reach nursing leadership for corrective action.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-ns-3",
        baseQuestion: "Under DNV DIAS NS standards, what must a hospital demonstrate regarding nursing competency?",
        baseOptions: [
          "All RNs must complete ACLS certification annually regardless of unit assignment or patient population served",
          "Nursing staff must demonstrate competency specific to the patient population they serve, with competency assessment occurring at hire, annually, and when new equipment or procedures are introduced",
          "A hospital attestation signed by the CNO annually confirms that all nursing staff meet competency requirements; individual competency records are required only for nurses in high-risk specialties such as ICU and OR",
          "Nursing competency is verified through the state licensing process; hospitals need not independently validate competency if nurses maintain a current RN license in good standing"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV NS standards require population-specific competency validation — an ICU nurse and a psychiatric unit nurse have entirely different competency requirements. Assessment must occur at hire, annually, and when new procedures or equipment change the care delivery environment. Licensing is a floor, not a ceiling — it does not substitute for organization-specific competency validation.",
        baseXp: 15,
        followUps: [
          {
            question: "The hospital hires a contract RN with 10 years of experience in adult medical-surgical care to fill a temporary gap in the pediatric oncology unit. The staffing coordinator assigns the nurse directly to the unit without competency assessment, citing the nurse's experience. A surveyor discovers this during a unit tracer. What is the compliance issue?",
            options: [
              "No compliance issue — experienced RNs with multi-year clinical backgrounds have demonstrated professional competency that transfers across adult and pediatric settings; DNV NS competency requirements are designed for new graduates and inexperienced nurses, not seasoned clinicians",
              "Minor documentation gap — the nurse should have signed a competency acknowledgment form, but experience-based competency transfer is recognized by DNV for temporary staff assignments of less than 30 days under the contract staff expedited onboarding standard",
              "Significant NS violation — pediatric oncology is a specialized population requiring competency validation even for experienced RNs, because adult medical-surgical experience does not ensure competency in pediatric dosing, developmental assessment, chemotherapy administration, or family-centered care dynamics",
              "The compliance issue is with the staffing coordinator, not the nurse — DNV assigns accountability for competency validation failures to the individual who made the assignment decision, and the staffing coordinator should be counseled on the hospital's competency policy as the corrective action"
            ],
            correctIndex: 2,
            explanation: "Pediatric oncology is a highly specialized environment. Adult medical-surgical experience does not automatically transfer to pediatric chemotherapy administration, weight-based dosing, developmental assessment, or managing pediatric oncology emergencies. DNV requires population-specific competency validation — the nurse's years of experience in a different population does not substitute for this.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ns-4",
        baseQuestion: "A DNV tracer follows a delegated nursing task — an RN has delegated catheter care to an unlicensed nursing assistant. Under DNV NS delegation standards, what must the RN have verified before delegating?",
        baseOptions: [
          "That the nursing assistant has been employed at the hospital for at least six months and has received department orientation",
          "That the task is within the nursing assistant's documented competency, permitted under state nurse practice act delegation rules, and that the RN will maintain supervisory responsibility for the delegated task",
          "That the nursing assistant's supervisor has approved the delegation in writing, since DNV NS standards require supervisor authorization for any task involving direct patient contact by unlicensed personnel",
          "That the patient or patient's family has verbally consented to having an unlicensed nursing assistant perform the catheter care task in lieu of a registered nurse"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV NS delegation standards align with professional nursing practice: delegation is appropriate only when the task is within the delegate's verified competency, the state nurse practice act permits delegation of this task to this category of worker, and the RN maintains supervisory accountability for the delegated task and its outcomes.",
        baseXp: 15,
        followUps: [
          {
            question: "The nursing assistant performs the delegated catheter care and reports to the RN that the patient was uncomfortable during the procedure. The RN acknowledges the report but does not assess the patient, document the complaint, or follow up with the patient before end of shift. A CAUTI develops two days later. What DNV NS principle does this scenario illustrate?",
            options: [
              "The CAUTI is attributed to the nursing assistant's technique since the care was delegated and the nursing assistant was the direct caregiver; the RN fulfilled the delegation requirement by assigning the task and receiving the verbal report at shift end",
              "Delegation does not transfer accountability — the RN who delegated the task remained responsible for patient assessment and follow-up when the nursing assistant reported a problem; failing to assess the patient after a reported complaint represents a breakdown in supervisory accountability under NS delegation principles",
              "The CAUTI is an infection control event governed by IC standards rather than an NS delegation finding; the appropriate response is an IC root cause analysis with corrective actions focused on catheter care technique rather than nursing delegation process",
              "The nursing assistant bears primary accountability for the outcome since they performed the care and reported the patient's discomfort — the report constituted an appropriate clinical handoff, and the RN's receipt of the report completed the nurse's supervisory obligation under delegation law"
            ],
            correctIndex: 1,
            explanation: "Delegation does not transfer the RN's professional accountability. When a nursing assistant reports a patient concern, the supervising RN must assess, document, and follow up — the report triggers, not completes, the RN's supervisory responsibility. Failing to act on a patient's reported discomfort following a delegated procedure is a NS delegation failure, not the nursing assistant's accountability.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-ns-5",
        baseQuestion: "Under DNV DIAS NS standards, the nursing care plan must be individualized to the patient. A surveyor reviews a medical-surgical patient's nursing care plan and finds it is an unmodified default template with no patient-specific additions. What standard is being assessed?",
        baseOptions: [
          "NS.4 — nursing care plans must be individualized based on assessment findings; a default template with no patient-specific modifications does not meet the individualization requirement",
          "MR.3 — nursing care plan documentation requirements are governed by the medical records standard, not the nursing services standard, since the care plan is a medical record component",
          "PC.2 — the individualization requirement applies to the overall plan of care, not specifically to the nursing care plan; nursing documentation within an interdisciplinary care plan satisfies individualization standards if any team member added patient-specific content",
          "No standard is violated — nursing care plan templates are pre-approved documentation tools; their use without modification is standard industry practice and DNV accepts template-based documentation as individualized when it is specific to the patient's diagnosis group"
        ],
        baseCorrectIndex: 0,
        baseExplanation: "DNV NS standards require nursing care plans to be individualized to the specific patient based on nursing assessment findings. A default template with no modifications does not demonstrate that the nurse assessed the patient and planned care in response to those findings. This is a frequent nursing services finding during DNV tracers.",
        baseXp: 15,
        followUps: [
          {
            question: "The nursing unit uses an EHR that auto-populates care plan goals based on the admission diagnosis. The nurse added two patient-specific goals related to the patient's fall risk and pain management preferences. The auto-populated goals include generic entries like 'Patient will maintain adequate oxygenation.' Is this care plan compliant with DNV NS standards?",
            options: [
              "Yes — the presence of two nurse-generated patient-specific goals demonstrates individualization; auto-populated goals serve as a clinical safety net ensuring no standard care element is omitted, and their presence alongside individualized goals satisfies the NS individualization standard",
              "Partially — the two patient-specific additions are positive, but the nurse should review and modify or remove the auto-populated goals that don't apply to this patient; leaving irrelevant generic goals in the plan suggests the nurse did not critically review the full care plan",
              "No — DNV NS standards prohibit auto-population of care plan goals as an EHR feature because auto-population violates the individualization standard by generating content the nurse did not create based on assessment; the EHR vendor must be notified to disable the auto-population feature",
              "Yes — EHR auto-population is specifically endorsed by DNV as an innovation that improves care plan completeness without replacing individualization; the hybrid approach of auto-populated baseline goals plus nurse-added specific goals represents the preferred care plan methodology under NS.4"
            ],
            correctIndex: 1,
            explanation: "A hybrid care plan can be compliant if the nurse engages critically with all entries. Patient-specific additions are good — but leaving auto-populated generic goals that may not apply to this patient suggests the nurse treated the template as the plan rather than a starting point. DNV surveyors will ask nurses to explain each care plan goal — if the nurse can't explain why a goal applies to this patient, it wasn't individualized.",
            expertXp: 25
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-pc",
    name: "DNV Patient Care Deep Dive",
    description: "Expert tracer questions on DNV DIAS PC standards — assessment, care planning, pain management, patient rights, informed consent, and discharge planning.",
    icon: "ClipboardList",
    color: "hsl(25, 85%, 55%)",
    baseLevelId: "dnv_pc",
    questions: [
      {
        id: "dd-dnv-pc-1",
        baseQuestion: "A DNV surveyor conducting a patient tracer asks to review the initial nursing assessment for a newly admitted patient. The assessment was completed 10 hours after admission. Under DNV PC standards, what is the compliance concern?",
        baseOptions: [
          "No concern — DNV PC standards require the initial nursing assessment within 24 hours of admission; 10 hours is well within the required timeframe",
          "Minor concern — the assessment should have been completed within 8 hours, and a 2-hour delay requires documentation of extenuating circumstances such as patient unavailability or a competing emergency",
          "Significant concern if the hospital's own policy requires a shorter timeframe — DNV requires that assessments be completed within the hospital-defined timeframe, which must itself be clinically appropriate for the patient population",
          "Critical violation — DNV PC standards require nursing assessments within 4 hours of admission for all inpatients regardless of acuity, and 10 hours constitutes an immediate jeopardy threshold breach for assessment compliance"
        ],
        baseCorrectIndex: 2,
        baseExplanation: "DNV PC standards require that initial assessments be completed within a timeframe that is clinically appropriate and within the hospital's own defined policy. Surveyors evaluate whether the hospital met its own stated standard. If the policy says 8 hours and the assessment took 10, that is a policy violation — and policy violations are DNV violations.",
        baseXp: 15,
        followUps: [
          {
            question: "The surveyor asks the nurse to walk through the elements captured in the initial assessment. The nurse describes collecting vital signs, chief complaint, and medication reconciliation — but cannot recall whether a fall risk assessment or nutritional screening was documented. The surveyor pulls the chart and finds both are missing. What is the compliance status?",
            options: [
              "Non-compliant — DNV PC assessment standards require a comprehensive initial assessment that includes fall risk, nutritional screening, pain assessment, functional status, psychosocial needs, and discharge planning considerations; missing two elements constitutes an incomplete assessment",
              "Compliant — fall risk assessment and nutritional screening are nursing quality improvement indicators, not required elements of the DNV initial assessment; their absence from the chart does not constitute a PC standard violation",
              "Non-compliant only if the patient experienced a fall or nutritional complication during the admission, because DNV holds hospitals accountable for assessment gaps only when a direct causal connection to adverse outcomes can be demonstrated during the survey tracer",
              "Compliant — the nurse identified the missing elements when asked, which demonstrates awareness of the policy; the documentation gap is an administrative error rather than an assessment failure and can be corrected with a late entry in the medical record"
            ],
            correctIndex: 0,
            explanation: "DNV PC standards require a comprehensive initial assessment with multiple defined elements. Fall risk and nutritional screening are required components. Missing them is not an administrative gap — it means the clinical team did not have the information needed to develop a safe, complete care plan. Late documentation entries do not satisfy the standard when the care requiring those assessments was already delivered without the information.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-pc-2",
        baseQuestion: "Under DNV DIAS PC standards, informed consent for a surgical procedure must include which elements?",
        baseOptions: [
          "The procedure name and the surgeon's name — additional elements are negotiated between the patient and surgeon based on clinical judgment",
          "Description of the procedure, material risks, benefits, alternatives including no treatment, and an opportunity for the patient to ask questions — documented before the procedure begins",
          "Signature on a pre-printed consent form containing the procedure name, which creates a legally rebuttable presumption that informed consent was obtained in the absence of contrary evidence from the patient",
          "Verbal consent documented in the nursing notes is sufficient; written consent is required only for procedures performed under general anesthesia"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV PC informed consent standards require a genuine consent process — not just a signed form. The patient must receive a description of the procedure, material risks, benefits, alternatives (including doing nothing), and a real opportunity to ask questions. All of this must be documented before the procedure, and documentation must reflect that the discussion occurred — not just that a form was signed.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient signs a consent form for a laparoscopic cholecystectomy. Intraoperatively, the surgeon discovers extensive adhesions and converts to an open procedure. No new consent was obtained. Under DNV PC standards, was this appropriate?",
            options: [
              "Yes — intraoperative conversion to an open approach is a reasonably foreseeable extension of the laparoscopic procedure; if the original consent form included language about potential conversion, no additional consent is required since the surgeon exercised clinical judgment within the authorized procedure",
              "No — any change from a laparoscopic to an open procedure constitutes a separate procedure requiring its own informed consent discussion, and surgeons must pause the procedure to obtain new consent from the patient or their surrogate even mid-operation if clinical circumstances change",
              "Yes — in an emergency where stopping the procedure would harm the patient more than proceeding, the surgeon may extend the scope of the procedure; for non-emergency conversions, whether new consent is needed depends on whether conversion was discussed during the original consent process",
              "No — conversion to open surgery changes the risk profile so substantially that DNV requires automatic disclosure to the patient post-operatively and filing of a consent deviation incident report, even if the conversion itself was medically appropriate"
            ],
            correctIndex: 2,
            explanation: "DNV PC consent standards recognize that intraoperative decisions must sometimes be made without the ability to pause for consent. If conversion was discussed in the original consent conversation and the patient understood this possibility, and the conversion was clinically necessary, no additional intraoperative consent is required. If conversion was not discussed and the patient is under anesthesia, the surgeon may proceed only if stopping would harm the patient more — a true extension of consent doctrine.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-pc-3",
        baseQuestion: "Under DNV DIAS PC standards, what must a hospital's discharge planning process include for all patients?",
        baseOptions: [
          "A social work consultation ordered by the attending physician within 48 hours of any admission longer than three days",
          "Assessment of discharge needs beginning at or near admission, with an individualized discharge plan that addresses the patient's clinical, functional, and social needs — developed with patient and family participation",
          "A standardized discharge checklist signed by the patient at discharge confirming they received discharge instructions and medication education",
          "Coordination with the patient's primary care provider at least 24 hours before discharge to ensure continuity of care and prevent post-discharge readmission"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV PC discharge planning standards require early assessment of discharge needs — not a checklist at the door. The plan must be individualized, address clinical and social needs, and be developed collaboratively with the patient and family. A checklist signed at discharge is an output of the process, not the process itself.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient being discharged after a hip replacement has no support at home, lives in a two-story house, and has expressed concern about managing stairs. The discharge plan states 'physical therapy consult completed' and 'discharge instructions given.' No mention of home environment barriers, home health referral, or follow-up for functional status. A surveyor reviews this chart. What finding is likely?",
            options: [
              "No finding — the physical therapy consult and discharge instructions demonstrate that the hospital addressed the patient's functional needs within the scope of the inpatient episode; post-discharge home environment barriers are the responsibility of the patient and their outpatient care team",
              "PC finding — the discharge plan does not reflect individualization to this patient's specific circumstances; the patient expressed a concrete concern (stairs, no support) that was not addressed in the plan, suggesting the discharge process was not collaborative or comprehensive",
              "NS finding — the physical therapist bears primary accountability for documenting home environment barriers and generating a home health referral, and the absence of this documentation indicates a nursing assessment gap rather than a discharge planning process failure",
              "MR finding — the plan's documentation is insufficient to meet medical records standards under DNV MR.3, which requires that all patient-reported concerns be explicitly addressed in the medical record regardless of whether the clinical team determined the concern required intervention"
            ],
            correctIndex: 1,
            explanation: "Discharge planning that ignores a patient-identified barrier — living alone, no support, stairs — is not individualized. DNV PC surveyors trace whether the discharge plan addressed what the patient actually needed to go home safely. A patient who expressed concerns about managing at home and received generic discharge instructions is a discharge planning failure, regardless of what boxes were checked.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-pc-4",
        baseQuestion: "Under DNV DIAS PC standards, how must pain be managed in hospitalized patients?",
        baseOptions: [
          "All patients must receive a numeric pain scale assessment every four hours and analgesics must be ordered for any pain score above 4 out of 10",
          "Pain must be assessed using a validated tool appropriate to the patient's cognitive status, reassessed after interventions, and managed according to an individualized plan that reflects the patient's goals and preferences",
          "Pharmacological pain management is required as a first-line intervention for any reported pain; non-pharmacological approaches may supplement but cannot replace medication-based treatment",
          "Pain management is the physician's exclusive domain; nursing's role is limited to assessment and reporting — nurses may not initiate pain management interventions without a specific physician order for each episode of pain"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV PC pain standards require validated assessment tools appropriate to the patient (including cognitively impaired patients), reassessment after interventions to evaluate effectiveness, and management aligned with the patient's individualized goals and preferences — including their preferences regarding opioid use. No specific score threshold mandates intervention; the patient's goals govern the plan.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient rates their pain as 7/10 but states they are comfortable and do not want any additional medication. The nurse documents the pain score and moves on. A surveyor reviews this scenario. Is the nursing approach compliant?",
            options: [
              "Non-compliant — a pain score of 7/10 requires mandatory pharmacological intervention per DNV PC standards; patient refusal of treatment must be escalated to the attending physician for a medical override order",
              "Compliant — DNV PC pain standards respect patient autonomy; if the patient is comfortable despite a numerical score and declines treatment, the nurse has appropriately assessed pain, offered treatment, and respected the patient's informed refusal — which should be documented along with the patient's stated rationale",
              "Compliant only if the patient signs a pain management refusal form acknowledging the risks of undertreated pain and releasing the hospital from liability for outcomes related to the patient's decision to decline pain treatment",
              "Non-compliant — the nurse should have explored non-pharmacological alternatives before accepting the patient's refusal of medication; DNV requires documentation that at least two alternative pain management interventions were offered and declined before accepting a patient's treatment refusal"
            ],
            correctIndex: 1,
            explanation: "DNV PC pain standards are patient-centered, not score-driven. A patient who rates pain as 7/10 but states they are comfortable has given the clinical team the most important information — their own experience and preference. Patient autonomy includes the right to decline treatment. The nurse should document the assessment, the offer of treatment, the patient's stated preference, and the plan to reassess. This is compliant care.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-pc-5",
        baseQuestion: "DNV DIAS PC standards address patient rights. Which right, if violated, is most likely to result in an immediate jeopardy finding during a DNV survey?",
        baseOptions: [
          "The right to receive written notice of the hospital's visitor policy within 24 hours of admission",
          "The right to be free from restraints or seclusion used as a means of coercion, discipline, convenience, or retaliation",
          "The right to request a same-sex nursing care provider for personal hygiene procedures",
          "The right to receive itemized billing statements within 30 days of discharge upon written request"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "The right to be free from inappropriate restraints and seclusion is one of the most serious patient rights protections in DNV DIAS standards. Restraints used for staff convenience, discipline, or punishment — rather than patient safety — can cause physical and psychological harm and are among the most common triggers for immediate jeopardy findings. This right connects directly to patient safety and dignity.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient with dementia is pulling at their urinary catheter. The nursing staff applies soft wrist restraints to prevent catheter removal. The order is written as 'restraints for catheter protection.' Under DNV PC standards, what elements must be present in the medical record?",
            options: [
              "A physician order for restraints with the specific type of restraint, a nursing assessment of alternatives tried before restraint, the clinical justification for restraint, a defined time limit, and documented reassessment at least every two hours for physical and psychological effects",
              "A physician order for restraints is the only required element; all other documentation is performed by nursing at the nurse's clinical discretion and is not required as a DNV standard element in the medical record",
              "Family consent for restraint use, because dementia patients cannot provide informed consent and the restraint decision requires surrogate authorization before the order is written",
              "A restraint care plan developed by the interdisciplinary team within 12 hours of restraint initiation, with documented goals for restraint removal and a projected discontinuation date"
            ],
            correctIndex: 0,
            explanation: "DNV PC restraint standards require a physician order, documented evidence that alternatives were tried first, clinical justification for the restraint, a time-limited order, and documented reassessment of the patient's physical and psychological condition at least every two hours. Restraints for 'catheter protection' must be justified by failed alternatives — not just ordered reflexively because a patient is pulling at a line.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-mm",
    name: "DNV Medication Management Deep Dive",
    description: "Expert tracer questions on DNV DIAS MM standards — medication ordering, storage, high-alert drugs, pharmacy oversight, reconciliation, and safe administration.",
    icon: "Pill",
    color: "hsl(280, 65%, 52%)",
    baseLevelId: "dnv_mm",
    questions: [
      {
        id: "dd-dnv-mm-1",
        baseQuestion: "A DNV surveyor checks medication storage on a medical-surgical unit. The nurse's station pyxis contains a vial of concentrated potassium chloride (KCl) 2 mEq/mL that is not diluted and is stored alongside routine medications. Under DNV MM standards, what is the compliance concern?",
        baseOptions: [
          "No concern — concentrated KCl is a standard emergency medication that must be immediately accessible on all units capable of treating hypokalemia",
          "Immediate Jeopardy concern — concentrated electrolytes including KCl are prohibited from storage on patient care units under DNV MM and CMS high-alert drug standards; their presence represents a direct patient safety risk from potential undiluted IV administration",
          "Minor labeling concern — concentrated KCl must be labeled 'CONCENTRATED — MUST DILUTE' in red; storage location is acceptable if the labeling requirement is satisfied",
          "Documentation concern only — the unit must maintain a log of concentrated medications stored on the floor and the log was not present; the storage itself is permitted for units with documented critical care capability"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MM standards, aligned with ISMP and CMS requirements, prohibit concentrated potassium chloride (and other concentrated electrolytes) from storage on patient care units. Inadvertent undiluted IV administration of concentrated KCl can cause fatal cardiac arrhythmias. This is a classic Immediate Jeopardy finding because the risk is direct, immediate, and serious.",
        baseXp: 15,
        followUps: [
          {
            question: "The surveyor asks the nurse manager how frequently unit-level medication storage is audited for high-alert medications. The manager states 'pharmacy audits us quarterly.' The surveyor then asks what happens when a prohibited medication is found during an audit. The manager cannot describe the corrective action process. What is the surveyor assessing?",
            options: [
              "Whether the corrective action process involves regulatory reporting, because DNV MM standards require hospitals to report high-alert medication storage violations to the state pharmacy board within 72 hours of discovery",
              "Whether the hospital has a functioning medication safety system — audits without a documented corrective action process and evidence of loop closure are surveillance theater; the surveyor wants to see that findings trigger specific, tracked, and verified corrective actions",
              "Whether the pharmacy department is conducting audits with sufficient frequency; DNV MM requires monthly medication storage audits for all patient care units and quarterly audits are insufficient to meet the standard",
              "Whether the nurse manager is the appropriate person to answer medication safety questions; DNV requires that medication safety questions during tracers be answered by a pharmacist or pharmacy director, not nursing leadership"
            ],
            correctIndex: 1,
            explanation: "Audits only add value if findings drive correction. The surveyor is evaluating whether the hospital's medication safety audit system is functional — not just whether audits happen. A quarterly audit that finds prohibited medications without triggering documented corrective action, verification of correction, and trending of repeat findings is an incomplete system. Loop closure is the key.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-mm-2",
        baseQuestion: "Under DNV DIAS MM standards, what must occur at every care transition involving a patient taking regular medications?",
        baseOptions: [
          "The receiving provider must call the sending provider to verbally verify all medication orders before the patient arrives",
          "A complete medication reconciliation must occur — comparing the patient's current medication list against new orders to identify and resolve discrepancies at every transition point",
          "The patient's family must sign a medication list verification form confirming the accuracy of all medications before any transition to a new level of care",
          "The pharmacy must review and reorder all medications from scratch at each transition, because standing orders from the prior care setting do not carry forward under DNV MM standards"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MM medication reconciliation standards require a complete, documented comparison of the patient's medication list against new orders at every transition — admission, transfer between units, and discharge. Discrepancies must be identified and resolved, with documentation of who resolved them and how.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient transfers from the ICU to a step-down unit. The ICU reconciliation list includes a beta-blocker that was held during the ICU stay for hemodynamic reasons. The step-down nurse restarts it without reviewing the ICU hold rationale. The patient develops symptomatic bradycardia. From a DNV MM perspective, what system failure does this represent?",
            options: [
              "An NS failure — the step-down nurse failed to review the prior unit's nursing notes before restarting a previously held medication, which is a nursing competency gap rather than a medication management system failure",
              "A MM reconciliation failure — the transition from ICU to step-down is a care handoff that requires reconciliation of all held medications with documented rationale for continuation or discontinuation; restarting a held medication without reviewing the hold reason is precisely the type of error reconciliation is designed to prevent",
              "A physician failure — medication restart decisions are exclusively within the physician's scope, and the nurse should not have restarted any medication without a new physician order; the physician who wrote the step-down orders without specifying 'restart beta-blocker' bears sole accountability",
              "A PC failure — the care transition from ICU to step-down did not include adequate handoff communication per the SBAR standard, and the bradycardia resulted from a communication failure rather than a medication management process failure"
            ],
            correctIndex: 1,
            explanation: "This is a textbook medication reconciliation failure at a care transition. Medications held in the ICU for clinical reasons must have their hold status explicitly addressed during reconciliation — not automatically restarted just because they appear on the prior medication list. DNV MM reconciliation standards exist precisely to catch this type of error before it reaches the patient.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-mm-3",
        baseQuestion: "Under DNV DIAS MM standards, which scenario represents a compliant pharmacy oversight process for medication orders?",
        baseOptions: [
          "All medication orders are entered by nurses directly into the pyxis without pharmacy review for orders written during evening and weekend shifts when pharmacy is unstaffed",
          "All medication orders receive pharmacist review before dispensing — with a documented exception process for urgent situations that includes subsequent pharmacist review",
          "Physicians verify their own medication orders through the EHR double-check feature, which the hospital uses as a substitute for pharmacist review on orders entered between midnight and 6 AM",
          "Pharmacy reviews orders only for high-alert medications such as anticoagulants, insulin, and chemotherapy; routine medications are dispensed directly to units based on provider order without pharmacist review"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MM standards require pharmacist review of medication orders before dispensing. Exceptions for urgent clinical situations are permitted, but must be defined, limited, and followed by prompt pharmacist review. Gaps in pharmacist coverage that result in consistent bypass of pharmacist review are a DNV MM finding — not an accepted operational accommodation.",
        baseXp: 15,
        followUps: [
          {
            question: "The hospital's pharmacist staffing ends at 10 PM. Between 10 PM and 6 AM, nurses override the pyxis for all medication orders without pharmacist review. This practice has been ongoing for three years. A DNV surveyor discovers it during a medication management tracer. What must the hospital do to achieve compliance?",
            options: [
              "Document the practice as a hospital-approved exception to pharmacist review, because DNV MM standards recognize overnight staffing limitations as a valid operational constraint and approve of nurse-override protocols as long as the practice is formally codified in the pharmacy policy",
              "Implement 24-hour pharmacist coverage, telepharmacy services, or a remote pharmacist review model that ensures all medication orders receive pharmacist review — and develop a transition plan with DNV that demonstrates the hospital's commitment to closing the overnight coverage gap",
              "Restrict pyxis override to the charge nurse only and implement a second-nurse verification process for all overridden medications — DNV accepts peer nurse verification as an equivalent substitute for pharmacist review when pharmacy staffing is unavailable due to resource constraints",
              "File an appeal with DNV citing the regional pharmacist shortage as an environmental barrier that prevents compliance; DNV grants automatic temporary waivers for medication management standards when the hospital demonstrates good-faith compliance efforts despite documented market supply constraints"
            ],
            correctIndex: 1,
            explanation: "A three-year practice of overnight medication dispensing without pharmacist review is a serious, systemic MM violation. DNV does not accept resource constraints as a permanent exception — the hospital must develop a compliant model, whether 24-hour on-site pharmacy, telepharmacy, or remote review. The surveyor will want a concrete corrective action plan with a realistic implementation timeline.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-mm-4",
        baseQuestion: "A nurse is preparing to administer IV heparin to a patient. Under DNV MM safe administration standards, what verification must occur before administration?",
        baseOptions: [
          "The nurse must check the patient's armband name and date of birth only — for a high-risk medication like heparin, the two-identifier check is the sole required verification step",
          "Independent double-check by a second nurse of the drug, dose, rate, route, patient identity, and pump programming — prior to administration of this high-alert medication",
          "The nurse must call the pharmacy to verbally confirm the heparin order before administering, because verbal confirmation is the gold standard for high-alert medication verification per ISMP guidelines",
          "The nurse checks the five rights and reviews the patient's weight-based dosing calculation; no additional verification is required if the order was entered by the physician rather than verbally communicated"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "Heparin is universally recognized as a high-alert medication. DNV MM standards (aligned with ISMP) require an independent double-check — a second nurse independently calculates and verifies the dose, rate, route, patient identity, and pump programming before administration, without being influenced by the first nurse's calculation. This is a hard stop, not a suggestion.",
        baseXp: 15,
        followUps: [
          {
            question: "During observation, a surveyor watches two nurses perform the double-check by standing next to each other. Nurse A reads the pump setting aloud while Nurse B looks at the same screen and says 'looks right.' Is this an acceptable independent double-check?",
            options: [
              "Yes — two nurses reviewing the same information simultaneously constitutes an independent double-check under DNV MM standards; the physical presence of both nurses at the pump is the required verification element",
              "No — an independent double-check requires each nurse to calculate or verify the information independently before comparing results; when Nurse B relies on Nurse A's spoken calculation without performing their own independent verification, the check is not independent and loses its error-catching function",
              "Yes, with one exception — the independent double-check requirement applies only when the pump rate differs from the standard weight-based protocol; if both nurses confirm the pump matches the standard dosing table, no further independence of verification is required",
              "It depends on hospital policy — if the hospital's documented double-check procedure permits simultaneous review at the bedside, DNV MM standards accept the hospital's own defined process as compliant regardless of whether the check was technically independent"
            ],
            correctIndex: 1,
            explanation: "The key word in 'independent double-check' is independent. When Nurse B simply validates what Nurse A stated rather than performing their own calculation, cognitive bias and peer pressure eliminate the safety function of the check. An independent double-check requires each person to reach their own answer before comparing — the comparison reveals discrepancies that would otherwise be missed.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-mm-5",
        baseQuestion: "Under DNV DIAS MM standards, what must a hospital do when a medication error occurs that causes patient harm?",
        baseOptions: [
          "File an internal incident report within 24 hours and retain the report in the quality department — no patient or family disclosure is required unless the patient or family specifically asks",
          "Disclose the error to the patient and family, provide appropriate medical treatment for harm caused, report through the internal incident reporting system, conduct a root cause analysis, and implement corrective actions — with documentation throughout",
          "Immediately report the error to the FDA MedWatch program and the state pharmacy board, because medication errors causing harm are externally reportable events under federal pharmacy law regardless of the severity of harm",
          "Suspend the nurse who administered the medication pending HR investigation, because individual accountability is the first corrective action required by DNV MM standards when a medication error results in patient harm"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MM error response standards require: transparent patient/family disclosure, appropriate treatment of any harm caused, internal incident reporting, root cause analysis to identify system failures, and corrective action. The DNV approach emphasizes system improvement, not individual punishment. Disclosure is required — it is both ethically and regulatory mandated.",
        baseXp: 15,
        followUps: [
          {
            question: "During RCA of a heparin overdose event, the team identifies that the order was entered correctly, pharmacy verified it correctly, but the nurse misread the concentration on the vial. The team concludes 'nurse error' and plans to re-educate the nurse. A DNV MM surveyor reviews this RCA. What is likely to be cited?",
            options: [
              "Nothing — the RCA correctly identified the human error source, assigned accountability to the individual responsible, and proposed a remediation action; this is an appropriate RCA conclusion for a skills-based error",
              "The RCA stopped too early — 'misread the vial' is a symptom, not a root cause; the team must ask why the nurse misread the vial: Were two concentrations stored together? Was labeling unclear? Did the nurse skip double-check? What system conditions enabled the error? Re-educating one nurse does not prevent the next one from making the same mistake",
              "The RCA failed to identify the pharmacy as a contributing factor, because pharmacy is accountable for providing medications in the safest possible form and should have dispensed a unit-dose preparation rather than a multi-dose vial requiring concentration interpretation",
              "The RCA did not include the patient and family as participants in the review process; DNV MM standards require that patients harmed by medication errors be invited to participate in the root cause analysis as partners in the investigation"
            ],
            correctIndex: 1,
            explanation: "RCAs that conclude 'human error' without asking what system conditions created the opportunity for that error are not genuine root cause analyses — they are event descriptions. 'Nurse misread the vial' is a description of what happened, not why. DNV expects RCAs to identify upstream system factors — vial similarity, concentration variety, labeling design, double-check compliance — that can be changed to prevent recurrence.",
            expertXp: 25
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-ic",
    name: "DNV Infection Control Deep Dive",
    description: "Expert tracer questions on DNV DIAS IC standards — HAI prevention, surveillance, isolation protocols, hand hygiene, and infection control program oversight.",
    icon: "Shield",
    color: "hsl(142, 60%, 40%)",
    baseLevelId: "dnv_ic",
    questions: [
      {
        id: "dd-dnv-ic-1",
        baseQuestion: "Under DNV DIAS IC standards, what must a hospital's infection control program include beyond basic HAI surveillance?",
        baseOptions: [
          "Monthly environmental cultures from all patient care areas and a dedicated infection control physician who rounds daily on all isolation patients",
          "A systematic surveillance program, analysis of surveillance data to identify trends, evidence-based interventions for prevention, staff education, and regular reporting to leadership and governance with documented action taken on findings",
          "Compliance with at least three voluntary infection reporting programs such as NHSN, Leapfrog, and the CDC's COVID tracking system — public reporting is the primary accountability mechanism under DNV IC standards",
          "A full-time infection preventionist (IP) with CIC certification for every 250 beds, because DNV IC staffing standards mandate IP-to-bed ratios as a minimum program infrastructure requirement"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV IC standards require a comprehensive infection control program — not just surveillance data collection. The program must analyze trends, implement evidence-based prevention interventions, educate staff, and report to leadership and governance with documented follow-through on findings. Passive surveillance without action does not meet DNV IC requirements.",
        baseXp: 15,
        followUps: [
          {
            question: "The hospital's CAUTI rate has been rising for four consecutive quarters. The infection preventionist presented the trend data to the QAPI committee. The QAPI committee noted the trend and moved to the next agenda item with no action taken. A surveyor reviews six months of QAPI meeting minutes. What finding is most likely?",
            options: [
              "IC finding — the infection control program identified a trend but the hospital's quality governance structure failed to close the loop between surveillance findings and improvement action; presenting data without triggering action is a program failure at the governance level",
              "QM finding only — the QAPI committee is accountable for the failure to act on the trend data; the infection control program fulfilled its obligation by presenting data to the committee and cannot be cited for the committee's failure to direct a corrective action",
              "No finding — QAPI committees have discretion to prioritize competing patient safety concerns; declining to act on a CAUTI trend in one quarter does not constitute a DNV violation as long as the committee addresses it within six months",
              "NS finding — CAUTI prevention is primarily a nursing responsibility and the failure to act on the trend should be cited against the CNO's quality oversight accountability rather than against the infection control program"
            ],
            correctIndex: 0,
            explanation: "Infection control programs must demonstrate not just that data was reported, but that the hospital acted on it. A rising CAUTI trend presented without resulting in an action plan, project, or directive is a system failure — the surveillance-to-action loop is broken. DNV will cite the IC program for failure to drive improvement, even if the IP presented the data correctly.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ic-2",
        baseQuestion: "A DNV surveyor observes a nurse enter a contact precaution room without donning gloves or gown. When asked why, the nurse says 'I was just dropping off a meal tray — I wasn't going to touch the patient.' Under DNV IC standards, is this acceptable?",
        baseOptions: [
          "Yes — contact precautions require PPE for direct patient contact only; entering a patient room briefly to deliver a tray without touching the patient or the patient's immediate environment does not trigger the gown and glove requirement",
          "No — contact precautions require PPE upon room entry regardless of whether direct patient contact is anticipated; the room environment itself is contaminated and the nurse cannot predict whether any contact will occur during the visit",
          "It depends on the organism — for MRSA and VRE, PPE is required for all room entries; for C. difficile, PPE is required only when handling potentially contaminated material; tray delivery for MRSA/VRE patients requires gown and gloves but tray delivery for C. diff patients requires only gloves",
          "Yes, with one qualification — the nurse must don gloves after delivering the tray and perform hand hygiene before leaving the room, but the gown is not required for brief non-contact entries per CDC 2007 isolation guidelines which DNV adopts by reference"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "Contact precautions require PPE before entering the room — not just before touching the patient. The room environment (bedrails, call light, tray table) is contaminated with the target organism. Brief entries without anticipated direct patient contact are not exceptions to PPE requirements. The nurse's reasoning — 'I'm just dropping off a tray' — is the most common rationalization for PPE bypass.",
        baseXp: 15,
        followUps: [
          {
            question: "The nurse manager states this is a widespread practice on the unit — staff routinely enter contact precaution rooms for brief tasks without full PPE. The infection preventionist was unaware. Under DNV IC standards, what does this reveal about the hospital's infection control program?",
            options: [
              "An education gap that can be corrected with targeted retraining; since no patient harm has been documented as a direct result of the practice, DNV will treat this as a low-priority IC finding requiring documentation of the retraining but no further corrective action",
              "A systemic program failure — the IC program's surveillance should have identified PPE compliance gaps through direct observation; the infection preventionist's lack of awareness suggests that PPE compliance monitoring is not occurring with sufficient frequency or methodology to detect real-world practice",
              "A management accountability issue — the nurse manager is responsible for unit-level policy compliance and should be cited individually for allowing a non-compliant practice to become routine; the infection control program itself is not accountable for individual unit managers' failure to enforce protocols",
              "An isolated event that does not reflect on the IC program — a single surveyor observation of a non-compliant practice does not establish a pattern; DNV citation requires documentation of repeated violations across multiple observation events or months of audit data"
            ],
            correctIndex: 1,
            explanation: "A widespread, undetected practice of PPE bypass reveals that the infection control surveillance program is not catching real-world compliance gaps. Observation-based audits — walking units, watching staff in real time — should identify this. The infection preventionist's unawareness is the signal that the surveillance methodology is inadequate. One nurse's behavior is a training issue; a unit-wide pattern the IP doesn't know about is a program failure.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-ic-3",
        baseQuestion: "Under DNV DIAS IC standards, what must a hospital's hand hygiene program include beyond posting reminder signs?",
        baseOptions: [
          "Hand hygiene signage must be laminated and posted at 60-inch eye level at every sink and alcohol-based hand rub dispenser throughout the hospital",
          "An ongoing monitoring program with direct observation or electronic measurement, feedback of results to staff and unit leaders, goal-setting, and evidence that monitoring data drives improvement actions",
          "Achievement of at least 80% hand hygiene compliance as measured by direct observation before the hospital can receive or maintain DNV accreditation",
          "A physician hand hygiene champion program where at least one physician per department signs a public pledge committing to hand hygiene compliance"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV IC hand hygiene standards require more than signage and education — they require active monitoring, feedback, and demonstrated improvement. The program must measure compliance (by observation, electronic sensors, or another validated method), report results to staff and leaders, set targets, and show that data drives corrective action when compliance is low.",
        baseXp: 15,
        followUps: [
          {
            question: "The hospital reports 94% hand hygiene compliance based on peer observation data collected by unit charge nurses. A surveyor notes that the observers are the direct supervisors of the staff being observed. What validity concern is the surveyor raising?",
            options: [
              "No validity concern — supervisor observation is the gold standard for compliance monitoring because supervisors have the greatest knowledge of expected behavior and the most contextual understanding of what constitutes a hand hygiene opportunity in their specific unit environment",
              "Observer bias — staff may perform hand hygiene differently when observed by their supervisor than in routine practice, inflating the reported compliance rate; and supervisors may under-record non-compliance for their own staff; the reported 94% may not reflect actual compliance",
              "Only a concern if the supervisors are not trained observers; DNV IC standards require that hand hygiene observers complete a standardized observation training program before conducting compliance monitoring, regardless of their supervisory relationship to the observed staff",
              "A documentation concern — supervisor-conducted observations must be countersigned by the infection preventionist before being counted in the compliance database; observations without IP countersignature are inadmissible as compliance data under DNV IC methodology requirements"
            ],
            correctIndex: 1,
            explanation: "Supervisor-observed hand hygiene compliance is prone to the Hawthorne effect (staff performing differently when watched) and supervisor leniency bias (reluctance to record non-compliance for their own staff). A 94% rate collected this way likely overstates actual compliance. DNV IC surveyors will probe the data collection methodology precisely because inflated compliance numbers give false confidence about a program whose real performance may be much lower.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ic-4",
        baseQuestion: "A patient develops a CLABSI 5 days after central line insertion. Under DNV IC standards, what must the hospital do?",
        baseOptions: [
          "Report the CLABSI to NHSN, conduct a case review to determine if insertion or maintenance bundle adherence was a factor, and implement corrective actions based on the review findings",
          "Immediately remove the central line and notify the state health department within 24 hours, because CLABSI is a mandatory externally reportable event under federal law for all CMS-participating hospitals",
          "Attribute the infection to community acquisition if the patient had any outpatient IV access in the prior 30 days, which exempts the event from the hospital's internal HAI reporting requirements",
          "Complete a full sentinel event review under the serious safety event framework, which DNV classifies CLABSI as a category A sentinel event requiring mandatory RCA with a 45-day completion deadline"
        ],
        baseCorrectIndex: 0,
        baseExplanation: "DNV IC standards require NHSN reporting for CLABSI, case review to assess bundle adherence, and corrective action based on findings. CLABSI is not automatically a sentinel event — it is a HAI that requires surveillance, investigation, and prevention response. The hospital must examine whether insertion or maintenance bundle steps were missed and implement targeted corrections.",
        baseXp: 15,
        followUps: [
          {
            question: "The case review finds that the central line dressing was not changed on day 7 per protocol — it was noted as 'intact and clean' by the nurse and left in place for day 12. A surveyor asks what corrective action was taken. The manager responds 'we re-educated the nurse.' Is this an adequate response?",
            options: [
              "Yes — identifying the specific nurse whose practice deviation contributed to the CLABSI and providing targeted re-education to that individual is the appropriate corrective action for a practice-based error per DNV MM and IC standard requirements",
              "No — re-educating one nurse does not address why the protocol deviation occurred or whether it is happening with other nurses; the corrective action should include an audit of dressing change documentation across the unit to determine whether this is an isolated event or a systemic compliance gap",
              "Yes, provided the re-education included return demonstration of the correct dressing change procedure and was documented in the nurse's competency file — demonstrated competency reassessment is the gold standard for practice-based corrective actions",
              "No — dressing change protocol deviations require a physician order to extend the dressing change interval beyond 7 days; the nurse's action was practicing outside scope and must be referred to the nursing board as an unprofessional conduct matter independent of the infection control corrective action"
            ],
            correctIndex: 1,
            explanation: "Re-educating one nurse after a CLABSI addresses a symptom, not the system. The critical question is whether this practice gap is isolated or widespread — an audit of dressing change documentation will reveal if other nurses are also extending dressing intervals beyond protocol. If the audit finds a pattern, re-educating one nurse accomplished nothing. Corrective actions must match the scope of the problem.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-ic-5",
        baseQuestion: "Under DNV DIAS IC standards, how must a hospital manage construction and renovation projects that may generate dust or disturb areas near patient care zones?",
        baseOptions: [
          "Construction projects require contractor sign-in logs and hard hat compliance monitoring — DNV IC standards for construction do not extend beyond contractor accountability and site safety practices",
          "An Infection Control Risk Assessment (ICRA) must be completed before work begins, with barrier measures, negative pressure isolation, HEPA filtration, and traffic flow controls implemented based on the risk level — with ongoing monitoring during the project",
          "Construction near patient care areas is permitted without additional infection control measures if the general contractor provides a state-issued health department construction permit confirming the project scope",
          "DNV delegates construction infection control entirely to the Environment of Care standards and does not include construction-related IC requirements within the IC chapter"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV IC standards require an ICRA before any construction or renovation that could disturb dust or debris near patient care areas. The ICRA defines risk level and required controls — barriers, negative pressure, HEPA filtration, traffic patterns — and the hospital must actively monitor compliance during the project. Construction-related aspergillosis outbreaks are a well-documented risk for immunocompromised patients.",
        baseXp: 15,
        followUps: [
          {
            question: "An ICRA was completed before a project began. Two weeks into the project, the scope expands significantly due to unexpected structural findings. No updated ICRA was performed. A DNV surveyor discovers this during an IC tracer. What is the compliance concern?",
            options: [
              "No compliance concern — the original ICRA covers the project in its entirety because the ICRA is based on the patient care area location, not the project scope; scope changes within the same physical footprint do not trigger a new ICRA requirement",
              "Documentation concern only — the hospital must retroactively update the ICRA to reflect the expanded scope, but since the original barriers remain in place the patient safety risk has not materially changed",
              "Significant IC finding — an expanded project scope changes the risk profile (more dust, longer duration, potentially new pathogen exposure zones) and requires an updated ICRA to ensure controls remain adequate for the actual risk level; an ICRA for the original scope may not address risks created by the expansion",
              "Minor finding — DNV requires notification to the infection preventionist within 72 hours of any scope change, but an updated ICRA is not required unless the project expansion crosses into a new infection risk category as defined in the ICRA scoring matrix"
            ],
            correctIndex: 2,
            explanation: "An ICRA is specific to a defined project scope and risk level. If the scope expands significantly — more demolition, longer duration, proximity to different patient care areas — the risk profile changes and the original ICRA may no longer be adequate. DNV IC standards require that controls match the actual risk. An ICRA for a minor renovation that has become a major project is like wearing a mask rated for N95 when the actual exposure requires PAPR.",
            expertXp: 25
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-mr",
    name: "DNV Medical Records Deep Dive",
    description: "Expert tracer questions on DNV DIAS MR standards — medical record content, authentication, timeliness, retention, and record integrity.",
    icon: "FileText",
    color: "hsl(198, 70%, 48%)",
    baseLevelId: "dnv_mr",
    questions: [
      {
        id: "dd-dnv-mr-1",
        baseQuestion: "Under DNV DIAS MR standards, within what timeframe must a physician complete the final discharge summary after a patient is discharged?",
        baseOptions: [
          "24 hours",
          "48 hours",
          "Within the hospital's own defined policy timeframe, which must be clinically appropriate — DNV defers to hospital policy and then holds the hospital accountable to its own standard",
          "30 days, consistent with CMS Conditions of Participation for medical record completion"
        ],
        baseCorrectIndex: 2,
        baseExplanation: "DNV MR standards require hospitals to define their own medical record completion timeframes and then be held to those standards. If a hospital policy requires discharge summaries within 24 hours, DNV will cite the hospital when summaries are completed at 48 hours — even though 48 hours would be compliant at a hospital with a longer policy timeframe. Know your own policy.",
        baseXp: 15,
        followUps: [
          {
            question: "The hospital's policy requires discharge summaries within 30 days. An audit finds that 30% of discharge summaries are completed after 30 days. The HIM director presents the audit to the medical staff committee. The committee takes no action. A DNV surveyor reviews this data. What is the most likely citation?",
            options: [
              "MR citation only — the medical records department is accountable for summary completion rates and must implement a corrective action plan; the medical staff committee's failure to act is an internal governance issue that does not elevate to a DNV standard",
              "Both MR and MS citations — the hospital failed to enforce its own medical record completion policy (MR), and the medical staff's failure to act on a known compliance problem presented at the committee level demonstrates inadequate medical staff oversight (MS)",
              "QM citation only — delinquent medical record rates are a quality indicator that must be included in the QAPI program; the root cause of 30% delinquency rates is a quality management failure rather than a records management failure",
              "No citation — 30% delinquency at 30 days is within acceptable industry variation for community hospitals; DNV uses a 50% delinquency threshold as the citation trigger for medical record completion"
            ],
            correctIndex: 1,
            explanation: "DNV MR standards hold hospitals to their own policies. A 30% delinquency rate against the hospital's own 30-day standard, presented to the medical staff committee with no action taken, represents failures in both MR (records policy enforcement) and MS (medical staff oversight of member practice obligations). The committee's non-response compounds the MR finding.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-mr-2",
        baseQuestion: "Under DNV DIAS MR standards, what must be present in a medical record for a verbal order given during a clinical emergency?",
        baseOptions: [
          "The verbal order must be documented in the record by the nurse who received it and authenticated by the ordering physician within the hospital's policy-defined timeframe",
          "Verbal orders are prohibited under DNV MR standards in all circumstances; all orders must be entered directly into the EHR by the ordering physician regardless of the clinical situation",
          "Verbal orders are automatically valid for 24 hours and require no physician authentication as long as the receiving nurse documents the order and the patient's condition at the time it was given",
          "Verbal orders in emergencies are exempt from authentication requirements; only verbal orders given in non-emergency situations require physician signature within the policy timeframe"
        ],
        baseCorrectIndex: 0,
        baseExplanation: "DNV MR standards permit verbal orders in appropriate clinical circumstances (including emergencies) but require that they be documented promptly and authenticated by the ordering physician within the hospital's defined timeframe. The record must show who gave the order, who received it, what the order was, and that the ordering physician authenticated it.",
        baseXp: 15,
        followUps: [
          {
            question: "A physician routinely gives verbal orders by text message to the nursing unit. Nurses transcribe the text messages as verbal orders in the EHR. The physician does not sign the orders. When asked, the physician states 'the text message is my signature.' Is this approach compliant with DNV MR standards?",
            options: [
              "Yes — text messages constitute a written order, not a verbal order, because they are a written communication from the physician; written physician orders do not require additional authentication since the message itself is a direct physician communication",
              "No — text message orders are not recognized as authenticated physician orders under DNV or CMS medical record standards; they are neither compliant verbal orders (which require voice communication) nor authenticated written orders (which require electronic or handwritten signature in the approved record system)",
              "Yes, if the hospital's IT department has certified the text messaging platform as HIPAA-compliant; platform compliance with privacy law satisfies the authentication requirement because authenticated communication through a secure channel constitutes physician order authentication",
              "It depends on whether the text messages are automatically imported into the EHR as a physician note — if the hospital's EHR captures text messages as a physician communication entry, they may be treated as authenticated physician orders under the hospital's CPOE policy"
            ],
            correctIndex: 1,
            explanation: "Text message orders are not compliant with DNV MR standards. They are not authenticated verbal orders (verbal orders require voice communication and nurse documentation) and they are not authenticated written orders (which require physician signature in the approved medical record system). Text messaging for clinical orders also creates HIPAA risks. The physician must authenticate orders in the EHR.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-mr-3",
        baseQuestion: "Under DNV DIAS MR standards, what information must a medical record contain to document that informed consent was properly obtained?",
        baseOptions: [
          "A signed consent form with the patient's name and the procedure name — the form itself is evidence of the consent conversation",
          "Documentation of the consent discussion including what was explained (procedure, risks, benefits, alternatives), that the patient's questions were answered, and that consent was given voluntarily — not just a signed form",
          "A note in the physician's pre-procedure documentation stating 'consent obtained and on file' — this note activates the legal presumption that consent was properly obtained",
          "The signed consent form plus a two-witness verification that the patient's signature was not obtained under duress, which is required for all procedures involving sedation or anesthesia"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MR standards require documentation of the consent process — not just evidence that a form was signed. The record should reflect what the patient was told, that questions were answered, and that consent was freely given. A signed form without any process documentation does not prove that informed consent actually occurred.",
        baseXp: 15,
        followUps: [
          {
            question: "A nurse documented 'consent obtained by Dr. Smith, consent form signed' in the nursing notes. Dr. Smith has no documentation in the medical record of the consent discussion. A surveyor asks Dr. Smith about the consent conversation for the patient — the physician cannot recall the specific discussion. Is the informed consent documentation adequate?",
            options: [
              "Yes — the nurse's documentation that consent was obtained by the physician, combined with the signed consent form in the chart, satisfies the medical record documentation standard; physician-specific documentation of the consent conversation is not required when the nurse's note attests to the physician's completion of the process",
              "No — the physician who obtains consent must document the consent discussion, including what was explained; a nurse's note that 'consent was obtained' by the physician does not substitute for the physician's own documentation of the discussion they personally conducted",
              "Yes, because DNV MR standards place the documentation obligation on the hospital, not on individual physicians; as long as the consent form is signed and the nursing notes confirm the process occurred, the hospital's medical record is complete and compliant",
              "It depends on whether the consent form itself contains a pre-printed attestation clause stating that the risks, benefits, and alternatives were explained — if the form includes this language and the patient signed it, the physician's documentation gap is a minor administrative omission, not a standards violation"
            ],
            correctIndex: 1,
            explanation: "The physician who obtained consent must document the consent discussion. A nursing note attesting that the physician obtained consent is second-hand documentation of a clinical process the physician is required to personally document. If the physician cannot recall the conversation and has no documentation, there is no evidence that meaningful informed consent occurred — the signed form alone is insufficient.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-mr-4",
        baseQuestion: "A DNV surveyor discovers that a physician is correcting medical record documentation by striking through the original entry, writing the correction above it, and adding initials — but not adding the date, time, or reason for the correction. Under DNV MR standards, what is missing?",
        baseOptions: [
          "Nothing — the strike-through, correction, and initials constitute a compliant medical record amendment under standard medical record documentation practices",
          "The date, time, and reason for the correction must be documented alongside the initials; medical record amendments must be traceable — when the correction was made, by whom, and why",
          "The correction is non-compliant because medical records must never be altered after the original documentation; any error requires a supplemental addendum note rather than any modification to the original entry",
          "The correction must be countersigned by the charge nurse or department manager as an independent witness, confirming that the original entry was in error and the correction accurately reflects the clinical event"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MR standards require that corrections to medical records include the date, time, and reason for the amendment alongside the identifier of who made the correction. Without this information, the record cannot be audited for when or why the change was made — creating a documentation integrity gap that is significant in both compliance and legal contexts.",
        baseXp: 15,
        followUps: [
          {
            question: "In an EHR, a physician deletes a medication order rather than canceling it. The deletion removes all trace of the original order from the system. Under DNV MR standards, what is the concern?",
            options: [
              "No concern — EHR systems maintain system-level audit logs that preserve all deletions; system audit logs satisfy DNV MR record integrity requirements regardless of what is visible to users in the patient-facing chart view",
              "Significant concern — medical records must maintain a complete, auditable history of all entries and changes; deletion that removes the original entry (even if system logs exist) creates a record integrity problem because the patient-facing chart does not reflect the complete clinical history",
              "Minor concern only if the deleted order was for a controlled substance, because DEA regulations independently require complete medication order histories for Schedule II-IV drugs; deletion of non-controlled medication orders is within physician discretion",
              "The EHR vendor is responsible for the deletion capability; if the system allows deletion, the vendor has certified that the function meets healthcare documentation standards, and the hospital cannot be cited for using a vendor-certified EHR feature"
            ],
            correctIndex: 1,
            explanation: "DNV MR standards require complete, auditable medical records. EHR configurations that allow true deletion — removing the order from the clinical view — create a record that no longer reflects the complete patient care history. System audit logs visible only to IT do not substitute for a complete clinical record. EHRs should be configured to cancel or discontinue orders, not delete them.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-mr-5",
        baseQuestion: "Under DNV DIAS MR standards, what is required when a patient requests access to their own medical record?",
        baseOptions: [
          "The hospital may take up to 60 days to provide a copy, consistent with HIPAA's maximum response timeline for records requests",
          "The hospital must provide access within 30 days (with one 30-day extension if the patient is notified), and may charge only reasonable, cost-based fees — HIPAA's right of access requirements are the minimum standard DNV adopts",
          "Patients may be denied access to any portion of the record that contains information about another patient or that a physician determines could be harmful to the patient's treatment",
          "Medical records must be provided in paper form only; electronic records are provided only to patients who have completed a digital identity verification process through the hospital's patient portal"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV MR standards adopt HIPAA's right of access requirements as the minimum. Patients have the right to access their records within 30 days, cost-based fees must be reasonable, and records must be provided in the format the patient requests if readily producible. DNV may hold hospitals to even stronger standards if their own policy is more protective than HIPAA's floor.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient requests their complete medical record. The HIM department responds 10 days later with a bill for $1.25 per page × 400 pages = $500. The patient cannot afford the fee and requests a fee waiver. Under DNV MR and HIPAA right of access standards, how must the hospital respond?",
            options: [
              "The hospital may maintain the $500 fee — HIPAA allows cost-based fee recovery for medical records and does not require hospitals to provide fee waivers for patients citing financial hardship",
              "The hospital must provide a partial fee waiver reducing the cost by at least 50% for patients who demonstrate financial hardship through submission of income documentation that falls below the hospital's charity care eligibility threshold",
              "The hospital should review whether the fee is truly cost-based — HIPAA limits fees to the actual cost of copying and transmitting records; $1.25 per page for electronic records that can be exported as a PDF may exceed the permissible cost-based fee, and if so the fee must be reduced to reflect actual cost",
              "The hospital must waive all fees for any patient who provides written documentation of financial hardship, because HIPAA's right of access provisions prohibit fee collection from patients in financial distress regardless of the volume of records requested"
            ],
            correctIndex: 2,
            explanation: "HIPAA's right of access rule limits fees to the actual cost of labor to copy, supplies, and postage — not a flat per-page rate. For electronic records, the cost should reflect the actual labor to export and transmit a file, which is typically very low. A $1.25 per-page fee for a PDF export likely exceeds permissible cost-based fees. DNV MR surveyors will probe whether the hospital's fee schedule reflects actual costs or is a barrier to access.",
            expertXp: 25
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-ot",
    name: "DNV Operative Care Deep Dive",
    description: "Expert tracer questions on DNV DIAS OT standards — surgical safety, pre-op assessment, time-out procedures, anesthesia care, and post-operative monitoring.",
    icon: "Scissors",
    color: "hsl(45, 90%, 48%)",
    baseLevelId: "dnv_ot",
    questions: [
      {
        id: "dd-dnv-ot-1",
        baseQuestion: "Under DNV DIAS OT standards, what must occur immediately before a surgical incision is made?",
        baseOptions: [
          "The scrub tech confirms that all instruments are counted and the sterile field is intact",
          "A Universal Protocol time-out is conducted — confirming patient identity, procedure, site/side/level, patient position, and relevant implants or special requirements — with all team members participating and attentive",
          "The anesthesia provider confirms the patient's pre-operative vital signs are within acceptable parameters for proceeding with surgery",
          "The surgeon reviews the operative consent form one final time to confirm the planned procedure matches the consent"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV OT standards (consistent with Universal Protocol requirements) mandate a pre-incision time-out confirming patient identity, procedure, surgical site/side/level, patient positioning, and relevant special requirements. All team members must actively participate — not merely be present. A time-out where one person speaks while others continue working is not a compliant time-out.",
        baseXp: 15,
        followUps: [
          {
            question: "During an observed time-out, the circulating nurse reads from the checklist while the surgeon is positioning a retractor and the anesthesia provider is adjusting the ventilator. Neither acknowledges the time-out. The scrub tech nods. The procedure begins. Under DNV OT standards, was this a compliant time-out?",
            options: [
              "Yes — the time-out was conducted at the correct moment (pre-incision), the required elements were verbalized by the circulating nurse, and the scrub tech's acknowledgment represents team confirmation; not every team member is required to provide an individual verbal confirmation",
              "No — a compliant time-out requires all team members to stop what they are doing, actively listen, confirm their agreement or raise any concerns, and be documented before the procedure begins; a time-out where key team members are occupied with other tasks and do not acknowledge is not a real pause",
              "Yes, provided the time-out was documented in the intraoperative record by the circulating nurse as 'time-out completed — all team members present'; documentation of the time-out is the primary compliance element, not the quality of the team's participation",
              "It depends on whether the OR team's time-out policy requires individual verbal confirmation from each team member; hospitals with policies requiring only one verbal acknowledgment satisfy DNV OT standards as long as the policy-defined acknowledgment is documented"
            ],
            correctIndex: 1,
            explanation: "A time-out where team members continue working and don't actively engage is not a genuine pause — it is a performed safety ritual that does not function as a safety mechanism. The purpose of the time-out is to create a moment where every team member can raise a concern before an irreversible action occurs. DNV OT surveyors observe time-outs in real time and cite hospitals when they observe this exact scenario.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ot-2",
        baseQuestion: "Under DNV DIAS OT standards, what must be documented in the pre-operative assessment for elective surgery?",
        baseOptions: [
          "Vital signs and allergy verification — these are the two required pre-operative documentation elements under DNV OT standards",
          "A complete history and physical examination conducted within 30 days, updated within 24 hours of the procedure if the H&P was done more than 24 hours prior, plus NPO status, anesthesia risk assessment, and any relevant pre-operative testing results",
          "Physician certification that the patient is medically cleared for surgery — a brief note in the EHR stating 'patient cleared for anesthesia' satisfies the DNV pre-operative assessment requirement",
          "Pre-operative labs including CBC, CMP, coagulation studies, and an EKG for patients over 50 — these required testing elements must be reviewed and documented before any elective procedure"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV OT standards require a complete H&P within 30 days and an update/review within 24 hours of the procedure if more than 24 hours have elapsed since the H&P. The update must document any interval changes that could affect anesthesia or surgical risk. NPO status, anesthesia risk assessment, and any required pre-operative testing must also be documented.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient's H&P was completed 28 days ago for a procedure scheduled today. The surgeon reviewed the H&P in the morning but documented only 'H&P reviewed — no interval change.' At 2 PM the procedure begins. Is the pre-operative documentation compliant?",
            options: [
              "Yes — 'H&P reviewed — no interval change' is a recognized and sufficient update note that satisfies the DNV OT 24-hour update requirement; the surgeon's attestation that there are no changes is equivalent to documenting what the update revealed",
              "Partially — the update note is acceptable if the surgeon actually interviewed the patient about interval changes; if the note was written without patient contact (e.g., the surgeon simply read the chart and signed), the update does not meet the standard because the interval change assessment requires patient contact",
              "No — H&P updates must be at least two sentences to constitute a sufficient update note under DNV OT documentation requirements; single-line attestations are considered insufficient documentation of the required assessment",
              "No — because the H&P is 28 days old, a new H&P must be completed, not just an update note; update notes are only acceptable when the H&P was completed within 14 days of the procedure date"
            ],
            correctIndex: 1,
            explanation: "The DNV OT requirement for an H&P update within 24 hours requires actual patient assessment — not just chart review. 'No interval change' is only meaningful if the physician talked to the patient about symptoms, medications, or health changes since the original H&P. An update note written after chart review only, without patient contact, does not meet the standard because it doesn't capture what the patient might report if asked.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-ot-3",
        baseQuestion: "Under DNV DIAS OT standards, what are the minimum monitoring requirements during moderate (conscious) sedation administered by a non-anesthesiologist?",
        baseOptions: [
          "Pulse oximetry only — respiratory status is adequately monitored by oxygen saturation in patients receiving moderate sedation for diagnostic and minor procedures",
          "Continuous monitoring of oxygen saturation, heart rate, blood pressure at regular intervals, respiratory rate, and level of consciousness — with documentation throughout the procedure by a qualified individual dedicated to patient monitoring",
          "Vital signs at the start and end of the procedure — intermediate monitoring is at the provider's discretion based on clinical judgment about the patient's stability during the procedure",
          "Moderate sedation monitoring standards are set by the hospital's anesthesia department and may vary by specialty; DNV OT standards defer to the specialty society guidelines adopted by each department"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV OT moderate sedation standards require continuous monitoring of oxygen saturation, heart rate, respiratory rate, blood pressure at regular intervals, and level of consciousness — with a qualified individual dedicated solely to patient monitoring. This person cannot also be performing the procedure. Documentation must reflect continuous monitoring, not just beginning and end values.",
        baseXp: 15,
        followUps: [
          {
            question: "A gastroenterologist performs upper endoscopy with moderate sedation. The GI nurse assists with the procedure and also monitors the patient. There is no dedicated sedation monitor. During the procedure, a brief desaturation event occurs and resolves before anyone notices, and it is not documented. Under DNV OT standards, what findings are present?",
            options: [
              "Two findings — the nurse performed dual roles (procedure assist and patient monitor), which violates the requirement for a dedicated patient monitor; and the undocumented desaturation event represents a monitoring documentation failure that may also trigger an incident report requirement",
              "One finding only — dual nursing roles in GI endoscopy are accepted industry practice and not a DNV OT violation; the documentation gap for the desaturation event is the sole finding",
              "No finding — brief self-resolving desaturation events during endoscopy are common and expected physiological events that do not require documentation as long as no intervention was needed",
              "The desaturation is a PC finding related to pain management, not an OT finding, because oxygen saturation changes during endoscopy are attributable to airway positioning rather than sedation management"
            ],
            correctIndex: 0,
            explanation: "DNV OT moderate sedation standards require a dedicated patient monitor — someone whose only role is to monitor the patient's condition and communicate changes to the proceduralist. Dual-role nursing (both assisting the procedure and monitoring the patient) violates this requirement. Additionally, a documented desaturation event that went unnoticed demonstrates that monitoring was not truly continuous — which is precisely the safety gap the dedicated monitor requirement is designed to prevent.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-ot-4",
        baseQuestion: "A sponge count discrepancy is discovered at wound closure. Under DNV OT standards, what must occur?",
        baseOptions: [
          "The surgeon may close the wound and order an X-ray in the PACU — retained surgical item X-rays are the accepted DNV standard for resolving count discrepancies when the surgeon's clinical judgment concludes the item is likely outside the body",
          "The count must be reconciled before wound closure — an intraoperative X-ray must be obtained, the wound must remain open until the discrepancy is explained, and if the item is retained it must be removed; the event must be reported as a serious safety event",
          "The OR charge nurse has authority to waive the discrepancy if the circulating nurse and scrub tech agree that the missing item was most likely removed from the field during the case",
          "A count discrepancy triggers automatic OR closure pending a full inventory of all supplies in the room, which may take up to 2 hours, after which the procedure may resume if no additional discrepancies are found"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV OT standards require that count discrepancies be resolved before wound closure. An intraoperative X-ray must be obtained if the item cannot be found. The wound stays open until the discrepancy is explained. If a retained surgical item is found, it must be removed. The event must be reported as a serious safety event (retained foreign body is a never event). Closing the wound with an unresolved count discrepancy is never acceptable.",
        baseXp: 15,
        followUps: [
          {
            question: "An intraoperative X-ray is obtained and is read as 'no radiopaque foreign body identified.' The surgeon closes the wound. Post-operatively, the patient complains of abdominal pain and a CT scan reveals a retained sponge. The sponge was radiopaque but was missed on the intraoperative film. What does this scenario reveal about the DNV OT count process?",
            options: [
              "The radiology department failed in its reading of the intraoperative film; once the surgeon obtained and acted on a negative X-ray report, the OT standard was satisfied and the retained item is a radiology quality failure rather than an OT standard failure",
              "The hospital's retained surgical item process relied solely on X-ray as the verification method, which is insufficient — X-ray misses are documented, and a robust RSI prevention program includes physical search of the wound, reconciliation of all tagged items, and technology-assisted counting systems to provide redundant verification beyond radiology interpretation alone",
              "The retained sponge constitutes an immediate jeopardy finding only because it caused post-operative symptoms; if the retained sponge had been asymptomatic, the finding would be classified as a serious but non-immediate jeopardy event under DNV's harm classification matrix",
              "This event requires mandatory reporting to the DNV accreditation body within 24 hours, because retained surgical items are a category A sentinel event that DNV tracks in its national accreditation database for benchmarking and standards revision purposes"
            ],
            correctIndex: 1,
            explanation: "X-ray alone is not a foolproof retained surgical item detection method. Misread films, overlapping anatomy, and positioning artifacts cause misses. DNV OT standards expect hospitals to understand this limitation and build RSI prevention programs with redundant safety checks — not just a single X-ray. This event reveals over-reliance on a single verification modality that is known to have a miss rate.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-ot-5",
        baseQuestion: "Under DNV DIAS OT standards, what must the post-anesthesia care unit (PACU) discharge criteria include?",
        baseOptions: [
          "A minimum PACU stay of two hours for all patients who received general anesthesia, regardless of clinical status at the two-hour mark",
          "Objective, evidence-based discharge criteria (such as a validated scoring tool like Aldrete or PADSS) applied consistently to all patients, with documentation that criteria were met before transfer or discharge",
          "Verbal authorization from the anesthesia provider based on their clinical assessment — objective scoring tools are recommended but not required under DNV OT standards",
          "Discharge from PACU is the attending surgeon's decision and occurs when the surgeon documents 'patient cleared for floor/discharge' in the medical record"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV OT PACU standards require documented, objective discharge criteria — typically a validated scoring tool. The criteria must be applied consistently and documented. Time-based discharge (e.g., 'must stay 2 hours') without objective criteria assessment is not compliant, nor is unilateral clinical assessment without documentation against defined criteria.",
        baseXp: 15,
        followUps: [
          {
            question: "A PACU nurse discharges a patient to the floor based on an Aldrete score of 8. The hospital's policy requires an Aldrete score of 9 for floor transfer. The nurse documented 'patient ready for transfer per clinical assessment.' A surveyor reviews the record. What is the compliance concern?",
            options: [
              "The nurse used clinical judgment appropriately — bedside nursing assessment may override a scoring tool when the nurse determines the patient is clinically ready; documentation of clinical assessment is equivalent to documentation of scoring criteria under DNV OT standards",
              "Double violation — the nurse discharged a patient below the policy-required score (OT standards violation for not meeting the hospital's own discharge criteria) and documented misleadingly ('clinical assessment') without recording the Aldrete score that was actually calculated (MR documentation violation)",
              "Minor documentation gap — the Aldrete score should be recorded but 'clinical assessment' language is acceptable as a discharge basis when the nurse's judgment is clearly documented; the OT standard is satisfied because the nurse assessed and documented the patient's readiness",
              "The violation is with the policy, not the nurse — a 9-point Aldrete threshold is stricter than DNV's minimum requirement, and the hospital should update its policy to reflect a more clinically appropriate threshold that aligns with the patient population's typical recovery trajectory"
            ],
            correctIndex: 1,
            explanation: "Two problems exist here. First, the hospital's own policy requires an Aldrete score of 9 — the patient scored 8 and was discharged anyway, violating the hospital's defined discharge standard (which DNV holds the hospital to). Second, the documentation of 'clinical assessment' without the actual score is misleading — the record hides the policy deviation rather than documenting it transparently. This is both an OT and an MR finding.",
            expertXp: 25
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-pe",
    name: "DNV Patient Education Deep Dive",
    description: "Expert tracer questions on DNV DIAS PE standards — health literacy, patient-specific education, teach-back, and documentation of learning.",
    icon: "GraduationCap",
    color: "hsl(168, 55%, 42%)",
    baseLevelId: "dnv_pe",
    questions: [
      {
        id: "dd-dnv-pe-1",
        baseQuestion: "Under DNV DIAS PE standards, what must a hospital assess before providing patient education?",
        baseOptions: [
          "The patient's insurance coverage and ability to afford follow-up medications — financial barriers are the primary determinant of education effectiveness and must be assessed first",
          "The patient's literacy level, language preference, learning barriers, motivation to learn, and any physical or cognitive limitations that affect education delivery",
          "Whether the patient has completed the mandatory pre-admission education module on the hospital's patient portal — portal completion exempts the patient from additional bedside education under the digital health literacy provision",
          "The education needs assessment is the physician's responsibility and must be documented in the physician's note; nursing may supplement physician-directed education but may not independently assess or document patient education needs"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV PE standards require a needs assessment before education is provided — covering health literacy, language, learning barriers, motivation, and physical/cognitive limitations. Education that ignores these factors may be delivered but not understood or retained. The assessment drives the education approach, format, and verification method.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient's chart shows a literacy assessment completed at admission. The assessment identified low health literacy. The nurse provided discharge education using the standard printed discharge instructions — a six-page document written at an 8th-grade reading level. Is this approach compliant with DNV PE standards?",
            options: [
              "Yes — completing the literacy assessment satisfies the DNV assessment requirement; the choice of education material is within the nurse's clinical discretion and standard printed materials are approved by the hospital for use with all patients",
              "No — assessing for low health literacy obligates the team to modify the education approach; providing complex printed materials to a patient identified as having low health literacy defeats the purpose of the assessment and represents a failure to individualize education based on identified needs",
              "Yes — hospitals are not required to maintain multiple versions of discharge instructions at different reading levels; the literacy assessment informs counseling but does not obligate the hospital to provide alternative-format materials for every patient with identified literacy limitations",
              "No, but only if the patient expressed confusion during the education session; if the patient appeared to understand the materials and signed the discharge education acknowledgment, the education is presumed effective regardless of the reading level discrepancy"
            ],
            correctIndex: 1,
            explanation: "Assessing for low health literacy and then proceeding with high-literacy materials is a failure to act on the assessment finding. DNV PE standards require individualized education — identifying a barrier obligates the team to address it. Low health literacy patients need plain language, pictures, teach-back verification, and simplified materials. Checking the assessment box without changing the approach is compliance theater.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-pe-2",
        baseQuestion: "Under DNV DIAS PE standards, how must a hospital verify that patient education was effective?",
        baseOptions: [
          "The patient's signature on a form stating 'I received and understand my discharge instructions' constitutes evidence of effective education",
          "Teach-back — asking the patient to explain in their own words what they learned, with documentation of what was taught, the patient's response, and any additional teaching required",
          "A score of 80% or higher on a post-education multiple choice quiz administered via the hospital's patient education software platform",
          "Visual observation by the nurse that the patient was attentive during the education session, combined with a nurse attestation that the information was clearly communicated"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV PE standards require verification of learning — teach-back is the evidence-based gold standard. The patient explains back what they understood; if the explanation reveals gaps, additional teaching occurs. Documentation must reflect what was taught, the teach-back response, and any re-teaching. A signature on a receipt acknowledges that information was given, not that it was understood.",
        baseXp: 15,
        followUps: [
          {
            question: "A nurse documents 'patient verbalized understanding of discharge instructions including wound care and signs of infection.' The surveyor asks the patient to describe how to care for the wound. The patient cannot describe the correct technique. What does this reveal about the education documentation?",
            options: [
              "The patient forgot the instructions after discharge education — this is an expected outcome in healthcare and does not indicate a documentation problem; patient retention of education content declines rapidly after discharge and this is a known limitation of any education approach",
              "The nursing documentation was inaccurate — 'verbalized understanding' documented without the patient actually demonstrating understanding suggests the nurse documented a successful teach-back that either did not occur or was not genuinely assessed; this is both a PE documentation failure and a medical record integrity concern",
              "The patient is being uncooperative with the surveyor — patients who understood education at discharge may decline to demonstrate knowledge to a surveyor out of discomfort with the evaluation context; surveyor patient interviews cannot be used to assess the adequacy of prior nursing education",
              "The nurse used the wrong verification method — 'verbalized understanding' is a documentation phrase appropriate only for patients who completed a formal written quiz; for wound care education, return demonstration is the required verification method and verbal attestation is insufficient"
            ],
            correctIndex: 1,
            explanation: "When a surveyor asks a patient to demonstrate knowledge documented as 'verbalized understanding' and the patient cannot — this is direct evidence that the teach-back either did not occur or was superficial. Documentation that overstates the patient's demonstrated understanding is a medical record integrity problem. DNV PE surveyors specifically ask patients about their education to verify whether documented education actually occurred.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-pe-3",
        baseQuestion: "A patient who speaks only Punjabi is admitted for a hip replacement. Under DNV PE standards, how must patient education be provided?",
        baseOptions: [
          "The hospital may use a bilingual family member as interpreter for education since family members are presumed to understand the patient's medical history and cultural context better than professional interpreters",
          "A qualified medical interpreter must be used — professional, trained, and either in-person, telephonic, or video — with education materials in the patient's language when available; family members may not substitute for qualified interpreters for clinical communication",
          "Education may be provided in English only if the nurse speaks slowly, uses simple words, and confirms the patient is nodding at appropriate times during the explanation",
          "The hospital may defer education until discharge when a family member who speaks English can receive the instructions and translate them to the patient at home"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV PE standards require that language barriers be addressed with qualified medical interpreters — not family members, not bilingual staff untrained in medical interpretation, and not gestures or slow English. Materials in the patient's language must be used when available. Family interpreter use for clinical communication creates risks of omission, distortion, and privacy violations that qualified interpretation eliminates.",
        baseXp: 15,
        followUps: [
          {
            question: "A qualified telephonic Punjabi interpreter is used for the hip replacement education. The nurse reads the discharge instructions to the interpreter, who translates to the patient. The patient provides teach-back through the interpreter, correctly describing weight-bearing restrictions. The interpreter session is documented. Is this compliant?",
            options: [
              "Yes — using a qualified telephonic interpreter, conducting teach-back through the interpreter, documenting the session, and verifying patient understanding through interpreted teach-back satisfies all DNV PE education requirements for a patient with a language barrier",
              "No — telephonic interpretation is considered lower quality than in-person interpretation by DNV PE standards; all hip replacement discharge education must use in-person interpretation because the complexity of orthopedic home care instructions requires face-to-face communication for adequate learning verification",
              "Partially — the education is compliant but the documentation must also record the interpreter's name and certification credentials to satisfy DNV PE standards for interpreter-assisted education sessions",
              "No — teach-back through an interpreter is not considered valid verification because the interpreter may simplify or paraphrase the patient's response; valid DNV PE teach-back requires the patient to speak in a language the nurse directly understands without interpretation"
            ],
            correctIndex: 0,
            explanation: "This is a fully compliant education session. A qualified telephonic interpreter is an accepted modality. Teach-back conducted through the interpreter — where the patient explains back the key points in their own language, and the interpreter translates that explanation to the nurse — is valid verification. Documentation of the interpreter session completes the record. This is the DNV PE standard applied correctly.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-pe-4",
        baseQuestion: "Under DNV DIAS PE standards, patient education must be provided for which of the following topics at minimum before hospital discharge?",
        baseOptions: [
          "Only the patient's primary diagnosis — education on other topics is optional and determined by the patient's stated preferences",
          "Medications, diet, activity restrictions, follow-up appointments, what symptoms to watch for, and when to seek emergency care — with documentation that each topic was addressed",
          "Medications only — medication education is the single required education element under DNV PE standards; all other discharge education topics are driven by patient and family request",
          "A DNV-approved standardized discharge education curriculum covering 12 defined topics; hospitals may not add or remove topics from the approved curriculum without submitting a curriculum modification request to DNV"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV PE discharge education standards require that patients receive education covering medications, diet, activity, follow-up care, signs and symptoms requiring medical attention, and when to call or go to the emergency room. All topics must be documented as addressed. Discharge education is one of the highest-yield areas for PE findings during DNV surveys.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient being discharged after an MI tells the nurse they 'already know' about their medications and don't need education. The nurse documents 'patient declined medication education.' Is this documentation sufficient under DNV PE standards?",
            options: [
              "Yes — patient autonomy includes the right to decline education; documenting the refusal satisfies the DNV PE education offer requirement and the nurse has no further obligation to attempt education on a topic the patient explicitly declined",
              "No — the nurse should explore why the patient declined (fear, prior knowledge, health literacy concerns), assess whether the patient's stated knowledge is accurate, provide a brief teach-back on at least the most critical medication information, and document the attempt and the patient's response — a flat refusal of education should not be accepted without assessment and exploration",
              "Yes, provided the nurse also documents that the patient's family member or caregiver was offered and received the medication education in the patient's place; DNV PE standards accept caregiver education as a substitute when the patient declines",
              "It depends on whether the patient has a primary care provider who will provide medication counseling at the first post-discharge appointment; if a follow-up appointment is documented within 7 days, medication education at discharge is waived per the care coordination provision of DNV PE.2"
            ],
            correctIndex: 1,
            explanation: "Documenting 'patient declined' without exploration is a passive response to an active education need. DNV PE standards require the hospital to genuinely attempt education — which includes exploring the basis for the refusal, assessing actual patient knowledge through teach-back, and documenting the attempt. A patient who 'already knows' their medications should be able to demonstrate that knowledge. The nurse's role is to verify, not accept the claim at face value.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-pe-5",
        baseQuestion: "A DNV surveyor reviews a patient's chart and finds that the nursing documentation for all six education topics was completed simultaneously 20 minutes before discharge. The patient had been in the hospital for four days. Under DNV PE standards, what concern does this raise?",
        baseOptions: [
          "No concern — discharge education is appropriately consolidated at the end of the admission so all information is fresh in the patient's memory; DNV PE standards support delivering all education at the time of discharge to maximize relevance",
          "Documentation timing concern — education provided all at once immediately before discharge suggests either that education was not provided throughout the hospitalization as appropriate, or that it was documented retrospectively without occurring; both scenarios raise PE and medical record integrity concerns",
          "The concern is with documentation format — DNV PE standards require that education documentation reference specific time intervals such as Day 1 orientation, Day 2 disease education, Day 3 medication education; a single documentation entry covering all topics does not satisfy the standard regardless of when the education occurred",
          "The concern is minor — consolidating education documentation at discharge is a common nursing workflow practice, and DNV PE surveyors evaluate education quality by patient interview rather than documentation timestamps"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV PE standards expect education to occur throughout the hospitalization as the patient's condition allows — not as a single rushed session at the door. Documentation entered simultaneously for all six topics 20 minutes before discharge raises two concerns: either the education didn't happen across the admission (PE failure), or the documentation was completed as a checklist without the education occurring (MR integrity issue). Surveyors will ask the patient what education they received during the stay.",
        baseXp: 15,
        followUps: [
          {
            question: "The surveyor asks the patient when they received their medication education. The patient says 'the nurse just went over it with me when she was getting ready to discharge me.' Does this confirm or refute the documentation concern?",
            options: [
              "Confirms — the patient's account is consistent with all education being delivered at discharge rather than throughout the stay; for a four-day hospitalization, medication education on day four only suggests missed opportunities for reinforcement that is required by DNV PE standards",
              "Refutes — the patient's ability to describe the medication education confirms that effective education occurred; DNV PE standards focus on whether education was received and understood, not on whether it was distributed across multiple days",
              "Neither — patient recall of when education occurred is unreliable; the patient may have received education earlier in the stay but only remembered the most recent conversation; surveyor conclusions about timing cannot be based solely on patient self-report without corroborating documentation review",
              "Confirms the documentation is accurate, since the patient confirms education occurred at the time documented — the surveyor's concern about documentation timing is resolved by the patient's corroborating account of when education was provided"
            ],
            correctIndex: 0,
            explanation: "The patient's account confirms what the documentation suggested — all education was delivered at discharge. For a patient hospitalized four days after an MI, medication education delivered only on day four represents a significant missed opportunity. Each care day should have included education building the patient's knowledge progressively. Last-minute information delivery before discharge is less effective for retention and does not meet the DNV expectation for education as an ongoing process throughout the hospitalization.",
            expertXp: 25
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-sp",
    name: "DNV Special Populations Deep Dive",
    description: "Expert tracer questions on DNV DIAS SP standards — pediatric, geriatric, behavioral health, substance use, and other special patient population care requirements.",
    icon: "Users",
    color: "hsl(300, 55%, 52%)",
    baseLevelId: "dnv_sp",
    questions: [
      {
        id: "dd-dnv-sp-1",
        baseQuestion: "Under DNV DIAS SP standards, what specific assessment must be completed for all patients age 65 and older within 24 hours of hospital admission?",
        baseOptions: [
          "A complete cardiac risk assessment, because cardiovascular disease is the leading cause of hospitalization in the geriatric population",
          "A geriatric-specific functional assessment including cognitive status, fall risk, delirium risk, mobility, nutritional status, and frailty — with care planning that addresses identified vulnerabilities",
          "An occupational therapy evaluation to assess activities of daily living and determine whether a skilled nursing facility placement will be required at discharge",
          "A geriatric psychiatric consultation to screen for depression and anxiety, which are underdiagnosed in the hospital setting and contribute to increased readmission rates in the 65+ population"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV SP geriatric standards require a comprehensive functional assessment for patients 65+, covering cognitive status, delirium risk, fall risk, mobility, nutrition, and frailty. This assessment drives care planning — not just documentation. A hospitalized older adult with unrecognized delirium risk, fall hazards, or malnutrition faces preventable harm without identification and proactive management.",
        baseXp: 15,
        followUps: [
          {
            question: "An 82-year-old patient is admitted for pneumonia. The nursing assessment identifies high delirium risk factors: age, infection, sleep disruption, and unfamiliar environment. The assessment is documented but the care plan contains no delirium prevention interventions. A surveyor reviews this patient during a geriatric tracer. What finding is likely?",
            options: [
              "SP finding — identifying delirium risk without implementing evidence-based prevention interventions (reorientation, sleep hygiene, early mobility, sensory aids, medication review) represents a failure to act on the assessment; the SP standard requires that assessment findings drive care planning",
              "NS finding — delirium prevention is a nursing competency issue; if the nurse identified the risk but did not implement interventions, the finding is against nursing services standards rather than the special populations standard",
              "QM finding — delirium prevention in high-risk geriatric patients is a hospital-wide quality indicator that should be tracked through the QAPI program; a single patient without a delirium prevention plan is a quality data point, not an SP standard violation",
              "No finding — delirium prevention interventions are not mandated by DNV SP standards; DNV requires identification of high-risk patients but does not specify required interventions, leaving prevention strategies to each hospital's clinical decision-making authority"
            ],
            correctIndex: 0,
            explanation: "DNV SP standards require that assessments drive care planning. Identifying high delirium risk without implementing prevention strategies is the definition of a non-functional assessment — you collected the information but didn't use it. Evidence-based delirium prevention bundles are expected as the care plan response to identified risk. Documentation of risk without a prevention plan is a SP finding.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-sp-2",
        baseQuestion: "Under DNV DIAS SP standards, a patient admitted with suicidal ideation requires which environmental safety precaution?",
        baseOptions: [
          "The patient must be placed in physical restraints until a psychiatric evaluation is completed, because restraints prevent self-harm during the evaluation period",
          "The patient's room must be assessed and ligature risks mitigated — removing or securing items that could be used for self-harm, with 1:1 monitoring ordered by the treatment team based on assessed risk level",
          "The patient must be transferred to an inpatient psychiatric facility within 4 hours because medical hospitals are not equipped to safely manage patients with active suicidal ideation under DNV SP standards",
          "Family members must be asked to remain with the patient continuously until psychiatric consultation occurs because family presence is the primary suicide prevention intervention in non-psychiatric hospital settings"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV SP behavioral health standards require environmental safety assessment and ligature risk mitigation for patients with suicidal ideation. Rooms must be assessed and modified to reduce self-harm opportunity. Monitoring level (1:1, arm's length, or line-of-sight) must be ordered based on clinical risk assessment. Medical hospitals are expected to provide a safe environment while maintaining the patient medically.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient who expressed suicidal ideation in the ED is admitted to a medical floor. The room has an overhead curtain rod, bathroom door hinges, IV pole, and bedside table with a breakaway leg. A nursing staff assessment documents 'room checked — safe.' A surveyor conducts a ligature risk room inspection and identifies three ligature points. What is the compliance concern?",
            options: [
              "NS finding — the nursing assessment was inadequate; nurses are responsible for room safety assessments and the failure to identify three visible ligature points demonstrates a competency gap requiring corrective education",
              "SP finding — the nursing assessment documented safety when the room was not safe; this reveals either that staff did not know what to look for (training gap), that the assessment tool was insufficient, or that the documentation did not reflect the actual assessment; all three scenarios represent systemic SP compliance failures",
              "EC finding — ligature risks are an environment of care issue, not a special populations issue; the hospital's EC committee is accountable for identifying and mitigating ligature risks hospital-wide, and nursing staff are not expected to conduct independent ligature risk assessments",
              "No finding — ligature risk mitigation is required in dedicated behavioral health units but not in general medical-surgical rooms; medical floors are not subject to the environmental modification standards that apply to inpatient psychiatric facilities"
            ],
            correctIndex: 1,
            explanation: "DNV SP standards require that hospitals that care for behavioral health patients — even on medical floors — conduct and act on ligature risk assessments. A documented 'safe' assessment that misses three visible ligature points reveals a system failure — inadequate training on what constitutes a ligature risk, an insufficient assessment tool, or documentation without genuine assessment. This is a patient safety failure with direct, immediate harm potential.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-sp-3",
        baseQuestion: "Under DNV DIAS SP standards, what must a hospital provide for pediatric patients that differs from adult care standards?",
        baseOptions: [
          "Pediatric patients require only weight-based medication dosing; all other clinical standards are identical to adult care and no separate pediatric-specific standards apply",
          "Age-appropriate and developmentally appropriate assessment tools, weight-based medication dosing, pediatric-trained staff, family-centered care practices, and age-appropriate education for both the child and family",
          "Pediatric patients must be admitted only to designated pediatric units; mixed adult-pediatric unit care is prohibited under DNV SP standards regardless of bed availability",
          "A board-certified pediatrician must see all pediatric inpatients within 8 hours of admission, because pediatric care under DNV SP standards requires physician oversight by a pediatric specialist rather than a hospitalist or internist"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV SP pediatric standards require age-appropriate and developmentally appropriate care across all domains — assessment tools that fit the patient's age and development, weight-based dosing, staff competent in pediatric care, family-centered care practices, and education appropriate to the child's developmental stage and the family's needs. Adult-focused tools and approaches applied to children are a SP finding.",
        baseXp: 15,
        followUps: [
          {
            question: "A 7-year-old is admitted to a primarily adult medical-surgical unit. The nurse uses a numeric pain scale (0-10) to assess pain. The child points to '8.' The nurse documents 8/10 pain and administers a weight-based analgesic. A surveyor asks whether this pain scale is developmentally appropriate for a 7-year-old. What is the correct response?",
            options: [
              "Yes — the 0-10 numeric scale is appropriate for children age 6 and older who can understand numerical concepts; a 7-year-old has sufficient cognitive development to use a numeric scale reliably",
              "Not necessarily — research suggests the Faces Pain Scale-Revised or Wong-Baker FACES scale is more developmentally appropriate and reliable for children ages 4-12; a numeric scale validated in adults may not accurately capture pain intensity in a 7-year-old who may report what they think the nurse wants to hear",
              "Yes — any pain scale is acceptable for a 7-year-old because the child's verbal ability and school-age cognitive development enable valid use of any standardized pain assessment instrument regardless of the scale's original validation population",
              "The pediatric pain scale standard applies only to children under age 5; DNV SP requires age-appropriate tools for patients ages 0-4, and standard adult tools are acceptable for children 5 and older"
            ],
            correctIndex: 1,
            explanation: "DNV SP standards require age-appropriate assessment tools. For pediatric pain, validated pediatric tools (FACES, Faces Pain Scale-Revised, FLACC for younger children) are the evidence-based standard. A 7-year-old may use a numeric scale but validated pediatric scales perform better in this age group. The nurse should be able to justify the tool choice based on the child's developmental level — not just assume adult tools work for children.",
            expertXp: 25
          }
        ]
      },
      {
        id: "dd-dnv-sp-4",
        baseQuestion: "Under DNV DIAS SP standards, what must a hospital provide for patients with substance use disorders who are admitted for medical reasons?",
        baseOptions: [
          "Immediate transfer to a substance use treatment facility, because medical hospitals are not equipped to provide concurrent substance use and medical care under DNV SP standards",
          "Assessment for substance use history, screening for withdrawal risk, medically supervised withdrawal management if indicated, and access to substance use counseling or referral — integrated with the medical plan of care",
          "Substance use disorder management is the patient's responsibility; medical hospitals are required only to treat the presenting medical condition and may decline to provide substance use-related services outside of emergent withdrawal management",
          "An automatic social work referral to arrange post-discharge substance use treatment — social work involvement is the sole DNV SP requirement for hospitalized patients with known substance use disorders"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "DNV SP standards for substance use disorders require comprehensive, integrated care — screening for history and withdrawal risk, medically supervised withdrawal management when clinically indicated, and linkage to counseling or treatment resources. The substance use disorder must be addressed as part of the patient's care, not ignored because the patient was admitted for another reason.",
        baseXp: 15,
        followUps: [
          {
            question: "A patient admitted for cellulitis reports daily alcohol use (approximately 12 drinks/day). The admitting physician orders antibiotics but does not assess or address alcohol withdrawal risk. By day two, the patient develops tremors, diaphoresis, and confusion. Under DNV SP standards, what system failure does this represent?",
            options: [
              "SP failure — the admission assessment and care planning failed to identify and address a predictable complication of the patient's disclosed substance use; alcohol withdrawal is a life-threatening, medically preventable event when risk factors are identified at admission",
              "PC failure only — the failure to assess and manage alcohol withdrawal risk is a patient care assessment failure under PC standards; the SP standard for substance use disorders applies to long-term treatment planning, not acute withdrawal risk identification",
              "NS failure — the admitting nurse should have flagged the reported 12 drinks per day in the nursing assessment and prompted the physician to address withdrawal risk; the primary accountability for withdrawal management is with nursing assessment and escalation",
              "The clinical outcome does not indicate a DNV violation — alcohol withdrawal is a common, expected complication of inpatient admission in patients with heavy alcohol use; facilities cannot be cited for physiological events that occur despite competent care"
            ],
            correctIndex: 0,
            explanation: "A patient reporting 12 alcoholic drinks daily is at high risk for clinically significant alcohol withdrawal. This is a known, predictable, and preventable complication. Failure to assess withdrawal risk, initiate a validated withdrawal monitoring protocol (like CIWA-Ar), and implement prophylactic or therapeutic management is a SP failure — the substance use history was obtained and ignored in care planning. Alcohol withdrawal can be fatal; this is a serious safety event.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-sp-5",
        baseQuestion: "Under DNV DIAS SP standards, which of the following patients requires a specially adapted care approach that addresses unique vulnerability factors?",
        baseOptions: [
          "A 45-year-old admitted for elective knee replacement with no comorbidities and no identified social determinants of health",
          "All patients — DNV SP standards require individualized care assessment for every patient regardless of age, diagnosis, or social history",
          "A 72-year-old with dementia, limited English proficiency, and a history of intimate partner violence admitted for a hip fracture",
          "A 35-year-old with Type 1 diabetes admitted for poorly controlled blood glucose — diabetes requires the same care adaptations as special populations under the SP standard"
        ],
        baseCorrectIndex: 2,
        baseExplanation: "DNV SP standards identify specific vulnerable populations whose care requires additional, specialized approaches — including older adults with cognitive impairment, patients with language barriers, patients with trauma histories (including intimate partner violence), and patients with complex psychosocial vulnerabilities. The 72-year-old with dementia, LEP, and IPV history has multiple SP considerations requiring individualized assessment and care adaptation.",
        baseXp: 15,
        followUps: [
          {
            question: "For the 72-year-old patient with dementia, limited English proficiency, and IPV history: the care team identifies the language barrier and arranges an interpreter, but does not screen for IPV (citing the dementia as a barrier to reliable self-report) and does not address the patient's dementia in the care plan. A surveyor reviews this case. What gaps are present?",
            options: [
              "No gaps — the language barrier was appropriately addressed; the team's clinical decision to defer IPV screening due to cognitive impairment is defensible, and dementia management is an NS issue rather than an SP issue",
              "Two gaps — IPV screening should have occurred using a validated cognitive-appropriate method or through collateral sources when direct patient screening is unreliable; and the dementia must be addressed in the care plan with delirium prevention, orientation support, and communication adaptations specific to the patient's cognitive status",
              "One gap only — the dementia care plan omission is the sole SP finding; IPV screening is not required for patients who are unable to reliably self-report, and the team's documented clinical rationale for deferring screening constitutes compliant decision-making",
              "The SP standard for IPV screening requires routine screening of all patients age 18-60 only; patients over 60 are not included in DNV's IPV screening requirement because elder abuse and IPV have separate assessment frameworks that apply independently"
            ],
            correctIndex: 1,
            explanation: "Both gaps are DNV SP findings. For IPV: cognitive impairment does not eliminate the screening obligation — it changes the method (collateral sources, observation for physical signs, caregiver interaction assessment). For dementia: it must be explicitly addressed in the care plan with cognitive support interventions — not just noted in the nursing assessment. A patient with three special population vulnerabilities deserves care planning that addresses all three, not just the one that was easiest to accommodate.",
            expertXp: 25
          }
        ]
      }
    ]
  }
];
