import type { HandbookChapter } from "./schema";

// AAAHC v42 chapter structure for ASC users.
// Source: AAAHC Accreditation Handbook for Medicare Deemed Status, v42 (©2022 AAAHC).
// Chapter titles, numbers, and standard letters match the published handbook exactly.

export type AscHandbookCategory = "Universal Standards" | "Selective Standards";

export type AscHandbookChapter = HandbookChapter & {
  chapterNumber: number;
  category: AscHandbookCategory;
};

export const ascHandbook: AscHandbookChapter[] = [
  {
    levelId: "asc_hb_patient_rights",
    chapterNumber: 1,
    category: "Universal Standards",
    title: "Chapter 1: Patient Rights and Responsibilities",
    overview: "An accreditable ASC recognizes the basic human rights of patients. In order to meet AAAHC/Medicare Deemed Status requirements, an ASC must meet the Standards of this chapter and the Condition for Coverage (CfC). In addition to complying with the Standards below, the Medicare CfC requires that the ASC inform the patient or the patient’s representative or surrogate of the patient’s rights and must protect and promote the exercise of these rights as set forth in Title 42 CFR 416.50. The ASC must also post the written notice of patient rights in a place or places within the ASC likely to be noticed by patients waiting for treatment or by the patient’s representative or surrogate, if applicable. [§416.50; Q-0219] Note: CMS has indicated that the posting of the written notice, if cited, may be considered a standard level finding at Q-0220.",
    sections: [
      {
        heading: "A. Patients are treated with respect, consideration, and dignity.",
        content: "Elements of compliance — (1) The patient has the right to personal privacy. [416.50(f)(1)] Q-0231 (2) Patients are provided appropriate privacy:; a. At check-in.; b. In evaluation and treatment areas. (3) Interpretation services are available. (4) To the degree that it is known, patients are provided with information concerning their diagnosis, evaluation, treatment, and prognosis. When it is medically inadvisable to give such information to a patient, the information is provided to a person designated by the patient or to a legally authorized person. (5) Patients are given the opportunity to participate in decisions involving their health care, except when such participation is contraindicated for medical reasons. Compliant Compliant present present present present present",
      },
      {
        heading: "B. The patient has the right to be free from any act of discrimination or reprisal. [416.50(e)(1)(i)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 1. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0227" }],
      },
      {
        heading: "C. The patient has the right to receive care in a safe setting. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 1. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0232" }, { label: "CFR Reference", value: "416.50(f)(2)" }],
      },
      {
        heading: "D. The patient has the right to be free from all forms of abuse or harassment. [416.50(f)(3)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 1. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0233" }],
      },
      {
        heading: "E. The ASC must inform the patient or the patient's representative of the patient's rights and must protect and promote the exercise of these rights, as set forth in this section. [416.50] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 1. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0219" }],
      },
      {
        heading: "F. The ASC must also post the written notice of patient rights in a place or places within the ASC likely to be noticed by patients waiting for treatment or by the patient's representative or surrogate, if applicable. [416.50]",
        content: "Elements of compliance — (1) An ASC must, prior to the start of the surgical procedure, provide the patient, or the Q-0221 patient's representative, or the patient's surrogate with verbal and written notice of the patient's rights in a language and manner that ensures the patient, the representative, or the surrogate understand all of the patient's rights as set forth in Title 42 CFR 416.50. The ASC's notice of rights must include the address and telephone number of the state agency to which patients may report complaints, as well as the website for the Office of the Medicare Beneficiary Ombudsman. [416.50(a)] (2) The ASC must disclose, in accordance with Title 42 CFR Part 420 and, where Q-0223 applicable, provide a list of physicians who have financial interest or ownership in the ASC facility. Disclosure of information must be in writing. [416.50(b)] 26 Accreditation Handbook for Medicare Deemed Status, v42 Compliant Compliant CMS Tag YES NO NA",
        criticalValues: [{ label: "CMS Tag", value: "Q-0220" }],
      },
      {
        heading: "G. Prior to receiving care, patients are informed of their rights. —",
        content: "Elements of compliance — (1) Patients and staff are informed of patient rights. (2) Patients and staff are informed of how to voice grievances regarding treatment or care. (3) Patients and staff are informed of methods for providing feedback, including complaints. (4) Patients and staff are informed of the patient's right to change providers if other qualified providers are available. (5) Patients and staff are informed about advance directives, as required by prevailing laws and regulations. References / Notes • For information about patient rights, refer to Standards related to patient respect, consideration, and dignity. Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present CMS Tag YES NO NA",
      },
      {
        heading: "H. Prior to receiving care, patients are informed of their responsibilities. —",
        content: "Elements of compliance — (1) Patients are informed of the responsibility to provide complete and accurate information to the best of their ability about their health, any medications taken, including over-the-counter products and dietary supplements, and any allergies or sensitivities. (2) Patients are informed of the responsibility to follow the agreed-upon treatment plan prescribed by their provider and participate in their care. (3) Patients are informed of the responsibility to provide a responsible adult to provide transportation home and to remain with him/her as directed by the provider or as indicated on discharge instructions. (4) Patients are informed of the need to accept personal financial responsibility for any charges not covered by insurance. (5) Patients are informed of the responsibility to behave respectfully toward all health care professionals and staff, as well as other patients and visitors. References / Notes • CMS limits what an ASC may charge its patients for the facility fee. An ASC may charge its patients the coinsurance and deductible, if applicable. For Medicare-certified facilities, the responsibility of the patient outlined in element 4 is therefore limited to any applicable deductible and coinsurance. Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present CMS Tag YES NO NA",
      },
      {
        heading: "I. Information about the organization is available to patients. —",
        content: "Elements of compliance — (1) Information about services provided by the organization is available. (2) Information about provisions for after-hours and emergency care is available. (3) Information about fees for services is available. (4) Information about payment policies is available. (5) Information about the credentials of health care professionals is available. (6) Information about the absence of malpractice coverage is available. 28 Accreditation Handbook for Medicare Deemed Status, v42 Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present",
      },
      {
        heading: "J. The patient has the right to be fully informed about a treatment or procedure and the expected outcome before it is performed. [416.50(e)(1)(iii)]",
        content: "Elements of compliance — (1) If a patient is adjudged incompetent under applicable state laws by a court of proper Q-0230 jurisdiction, the rights of the patient are exercised by the person appointed under state law to act on the patient's behalf. [416.50(e)(2)] (2) If a state court has not adjudged a patient incompetent, any legal representative or Q-0230 surrogate designated by the patient in accordance with state law may exercise the patient's rights to the extent allowed by state law. [416.50(e)(3)] Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0229" }],
      },
      {
        heading: "K. The ASC must comply with the following requirements for advance directives. [416.50(c)]",
        content: "Elements of compliance — (1) The patient or, as appropriate, the patient's representative is provided written Q-0224 information concerning the ASC's policies on advance directives, including a description of applicable state health and safety laws and, if requested, official State advance directive forms. [416.50(c)(1)] (2) The patient or, as appropriate, the patient's representative is informed of the patient's Q-0224 right to make informed decisions regarding the patient's care. [416.50(c)(2)] (3) Documentation in a prominent part of the patient's current medical record indicates Q-0224 whether or not the individual has executed an advance directive. [416.50(c)(3)] Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0224" }],
      },
      {
        heading: "L. The patient has the right to voice grievances regarding treatment or care that is (or fails to be) furnished. [416.50(e)(1)(ii)] Compliant Compliant 30 Accreditation Handbook for Medicare Deemed Status, v42",
        content: "This is a Standard-level requirement under Chapter 1. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0228" }],
      },
      {
        heading: "M. The ASC must establish a grievance procedure for documenting the existence submission, investigation, and disposition of a patient's written or verbal grievance to the ASC. [416.50(d)]",
        content: "Elements of compliance — (1) All alleged violations/grievances relating, but not limited to, mistreatment, neglect, Q-0226 verbal, mental, sexual, or physical abuse, must be fully documented. [416.50(d)(1)] (2) All allegations must be immediately reported to a person in authority in the ASC. Q-0226 [416.50(d)(2)] (3) Only substantiated allegations must be reported to the state authority or the local Q-0226 authority, or both. [416.50(d)(3)] (4) The grievance process must specify timeframes for review of the grievance and the Q-0225 provision of a response. [416.50(d)(4)] (5) The ASC, in responding to the grievance, must investigate all grievances made by a Q-0225 patient or the patient's representative, or the patient's surrogate, regarding treatment or care that is (or fails to be) furnished. [416.50(d)(5)] (6) The ASC documents how the grievance was addressed, as well as provide the Q-0225 patient, the patient's representative, or the patient's surrogate with written notice of its decision. The decision must contain the name of an ASC contact person, the steps taken to investigate the grievance, the results of the grievance process, and the date the grievance process was completed. [416.50(d)(6)] Compliant Compliant 32 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 2",
        criticalValues: [{ label: "CMS Tag", value: "Q-0225" }],
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Patients are treated with respect, consideration, and dignity." },
      { fact: "Standard B", detail: "The patient has the right to be free from any act of discrimination or reprisal. [416.50(e)(1)(i)] Compliant Compliant" },
      { fact: "Standard C", detail: "The patient has the right to receive care in a safe setting. Compliant Compliant" },
      { fact: "Standard D", detail: "The patient has the right to be free from all forms of abuse or harassment. [416.50(f)(3)] Compliant Compliant" },
      { fact: "Standard E", detail: "The ASC must inform the patient or the patient's representative of the patient's rights and must protect and promote the exercise of these rights, as set for..." },
      { fact: "Standard F", detail: "The ASC must also post the written notice of patient rights in a place or places within the ASC likely to be noticed by patients waiting for treatment or by ..." },
      { fact: "Standard G", detail: "Prior to receiving care, patients are informed of their rights. —" },
      { fact: "Standard H", detail: "Prior to receiving care, patients are informed of their responsibilities. —" },
      { fact: "Standard I", detail: "Information about the organization is available to patients. —" },
      { fact: "Standard J", detail: "The patient has the right to be fully informed about a treatment or procedure and the expected outcome before it is performed. [416.50(e)(1)(iii)]" },
      { fact: "Standard K", detail: "The ASC must comply with the following requirements for advance directives. [416.50(c)]" },
      { fact: "Standard L", detail: "The patient has the right to voice grievances regarding treatment or care that is (or fails to be) furnished. [416.50(e)(1)(ii)] Compliant Compliant 30 Accre..." },
      { fact: "Standard M", detail: "The ASC must establish a grievance procedure for documenting the existence submission, investigation, and disposition of a patient's written or verbal grieva..." },
    ],
  },
  {
    levelId: "asc_hb_governance",
    chapterNumber: 2,
    category: "Universal Standards",
    title: "Chapter 2: Governance",
    overview: "An accreditable organization has a governing body that sets policy and is responsible for the organization. Such an organization meets the following Standards. Subchapter I – General Requirements: This subchapter describes general requirements for an organization and its governing body.",
    sections: [
      {
        heading: "A. The ASC must have an agreement with CMS to participate in Medicare as an ASC, and must meet the conditions set forth in Title 42 CFR Part 416, Subparts B - General Conditions and Requirements and C - Specific Conditions for Coverage of Title 42 CFR 416. Participation as an ASC is limited to facilities that: Meet the definition in Title 42 CFR 416.2, AND have in effect an agreement obtained in accordance with Title 421 CFR Part 416, Subpart B - General Conditions and Requirement. [416.25] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0001" }],
      },
      {
        heading: "B. The ASC is a distinct entity that operates exclusively for the purpose of providing surgical services to patients not requiring hospitalization and in which the expected duration of services would not exceed twenty-four (24) hours following admission. [416.2] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0002" }],
      },
      {
        heading: "C. The organization is a legally constituted entity, or an organized sub-unit of a — legally constituted entity, or is a sole proprietorship in the state(s) in which it is located and provides services, as documented by at least one of the following: articles of organization, articles of incorporation, partnership agreement, operating agreement, legislative or executive act, or bylaws, unless the organization is a sole proprietorship. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "D. The ASC must comply with state licensure requirements. Compliant Compliant CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0020" }, { label: "CFR Reference", value: "416.40" }],
      },
      {
        heading: "E. The ASC must have a governing body that assumes full legal responsibility for determining, implementing, and monitoring policies governing the ASC's total operation. [416.41]",
        content: "Elements of compliance — (1) The governing body has oversight and accountability for the quality assessment and Q-0040 performance improvement (QAPI) program. [416.41] (2) The governing body has oversight and accountability for ensuring that facility policies Q-0040 and programs are administered so as to provide quality health care in a safe environment. [416.41] (3) The governing body has oversight and accountability for developing and maintaining Q-0040 a disaster preparedness plan. [416.41] (4) When services are provided through a contract with an outside resource, the ASC Q-0041 must assure that these services are provided in a safe and effective manner. [416.41(a)] Compliant Compliant 34 Accreditation Handbook for Medicare Deemed Status, v42",
        criticalValues: [{ label: "CMS Tag", value: "Q-0040" }],
      },
      {
        heading: "F. The governing body is responsible for establishing strategic direction and — supporting its accomplishment.",
        content: "Elements of compliance — (1) The governing body determines the mission, goals, and objectives of the organization. (2) The governing body formulates long-range plans in accordance with the mission, goals, and objectives of the organization. (3) The governing body ensures that facilities and personnel are adequate and appropriate to carry out the mission. Compliant Compliant present present present CMS Tag YES NO NA",
      },
      {
        heading: "G. The governing body addresses and is fully and legally responsible, either — directly or by appropriate professional delegation, for the operation and performance of the organization.",
        content: "Elements of compliance — (1) The governing body establishes an organizational structure and specifies functional relationships among various components of the organization. (2) The governing body adopts bylaws or similar rules and regulations for the orderly development and management of the organization. (3) The governing body adopts policies and procedures necessary for the orderly conduct of the organization, including the organization's scope of clinical activities. (4) The governing body establishes a system of financial management and accountability appropriate to the organization. (5) The governing body ensures fulfillment of all applicable obligations under prevailing laws and regulations, such as those addressing disabilities, medical privacy, grievances, fraud and abuse, self-referral, anti-trust, reporting to the National Practitioner Data Bank, etc. (6) The governing body oversees compliance with applicable AAAHC Standards. (7) The governing body approves products sold to patients. References / Notes • For information on the National Practitioner Data Bank, see https://www.npdb.hrsa.gov. Compliance Rating: if 7 elements apply Compliant Compliant present present are present are present present Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present CMS Tag YES NO NA",
      },
      {
        heading: "H. The governing body addresses and is fully and legally responsible, either — directly or by appropriate professional delegation, for the clinical operations and performance of the organization.",
        content: "Elements of compliance — (1) The governing body is responsible for the employment or contracting of health care professionals. (2) The governing body establishes and maintains a policy on the rights and responsibilities of patients. (3) The governing body establishes and maintains a written policy regarding the care of pediatric patients. (4) The governing body ensures that the quality of care is evaluated and that identified problems are appropriately addressed. (5) The governing body establishes, implements and oversees a risk management program appropriate to the organization that includes review of risk management activities. (6) The governing body establishes, implements and oversees the organization's infection control and safety programs to ensure a safe environment of care. (7) The governing body establishes policies on patient education and continuing education for staff. Compliance Rating: if 7 elements apply Compliant Compliant present present are present are present present Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present 36 Accreditation Handbook for Medicare Deemed Status, v42 CMS Tag YES NO NA",
      },
      {
        heading: "I. The governing body is responsible for approving and ensuring compliance of — all major contracts or arrangements affecting the medical and/or dental care provided under its auspices.",
        content: "Elements of compliance — (1) The governing body approves and ensures compliance with contracts or arrangements for the provision of external services, such as those for radiology, pathology, medical laboratory, and housekeeping services. (2) The governing body approves and ensures compliance with contracts or arrangements for provision of education to students and postgraduate trainees. (3) The governing body approves and ensures compliance with contracts or arrangements for the provision of after-hours patient information or telephone triage services, including the review of protocols. (4) The governing body approves and ensures compliance with contracts or arrangements with The Centers for Medicare & Medicaid Services (CMS) requirements, if the organization participates in the Medicare/Medicaid program. (5) The governing body approves and ensures compliance with contracts or arrangements for activities or services delegated to another entity. Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present Compliance Rating: if 2 elements apply Compliant Compliant present present present Compliance Rating: if 1 element applies Compliant Compliant",
      },
      {
        heading: "J. The governing body is responsible for ensuring appropriate communication — within and on behalf of the organization.",
        content: "Elements of compliance — (1) The governing body reviews all legal and ethical matters concerning the organization and its staff, and responds appropriately when necessary. (2) The governing body ensures maintenance of effective communication throughout the organization, including ensuring links between quality management and improvement activities and other management functions of the organization. (3) The governing body ensures that marketing, advertising and other statements regarding the competence and capabilities of the organization are not misleading. (4) Evidence is present that policies, procedures, and other information are communicated throughout the organization, as documented in staff meeting minutes, emails, intranet, manuals, and other forms of communication. (5) Evidence is present of organizational procedures to permit appropriate responses to inquiries from entities such as, but not limited to, government agencies, attorneys, consumer advocate groups, and the media. Compliant Compliant present present present present present",
      },
      {
        heading: "K. The governing body meets at least annually, or more frequently as determined — by the governing body, as evidenced by minutes or other records kept as necessary for the orderly conduct of the organization. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "L. Within 15 calendar days of significant organizational, ownership, operational, — or quality of care events, the organization notifies AAAHC of the event in writing. References / Notes • See the AAAHC policies and procedures for additional information regarding events that must be reported to AAAHC. Compliant Compliant 38 Accreditation Handbook for Medicare Deemed Status, v42",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "M. Representation of accreditation to the public accurately reflects the AAAHC- — accredited entity. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "N. Documentation demonstrates at least annual governing body review of AAAHC accreditation requirements.",
        content: "Elements of compliance — (1) Patients’ rights are reviewed. (2) Delegated administrative responsibilities are reviewed. (3) Key programs are reviewed:; a. The quality management and improvement program is reviewed.; b. The infection prevention and control program is reviewed.; c. The safety program is reviewed. (4) The organization's policies and procedures are reviewed. (5) The appointment and reappointment processes are reviewed. (6) The scope of procedures performed, and/or services provided, by the organization is Q-0122 reviewed. [416.45(b)] (7) Revisions are made as needed to maintain compliance. Compliant Compliant present present are present are present present",
      },
      {
        heading: "O. The authority, responsibility and functions of officers and administrators — elected, appointed, or employed to carry out governing body directives are clearly defined by the governing body. Compliant Compliant Subchapter II – Credentialing and Privileging: This subchapter describes the requirements for credentialing and privileging of health care professionals to provide patient care in an accreditable organization. Organizations may find the Tools section located in the back of this handbook helpful in creating medical staff applications. Credentialing is a three-phase process of assessing and validating the qualifications of an individual to provide services. The objective of credentialing is to establish that the applicant has the specialized professional background that he or she claims and that the position requires. An accreditable organization: 1) establishes minimum training, experience, and other requirements (i.e., credentials) for physicians and other health care professionals; 2) establishes a process to review, assess, and validate an individual’s qualifications, including education, training, experience, certification, licensure, and any other competence- enhancing activities against the organization’s established minimum requirements; and 3) carries out the review, assessment, and validation as outlined in the organization’s description of the process.",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "A. The medical staff of the ASC must be accountable to the governing body. [416.45]",
        content: "Elements of compliance — (1) The governing body has defined specific criteria for the initial appointment and Q-0121 reappointment of medical staff. [416.45(a)] (2) The criteria for initial appointment and reappointment are uniformly applied. (3) Applications for clinical privileges are processed according to timeframes specified in bylaws and/or policies. (4) The organization has its own independent process of credentialing and privileging. References / Notes • Credentials may not be approved, nor privileges granted without further review, solely on the basis that another organization, such as a hospital, approved credentials or granted privileges. Such status at another organization may be included in the governing body’s consideration of the application. Compliant Compliant 40 Accreditation Handbook for Medicare Deemed Status, v42 CMS Tag YES NO NA",
        criticalValues: [{ label: "CMS Tag", value: "Q-0120" }],
      },
      {
        heading: "B. The governing body has approved processes for credentialing, privileging and — reappointment of the medical and/or dental staff.",
        content: "Elements of compliance — (1) A process for credentialing has been approved. (2) A process for initial appointment has been approved. (3) A process for reappointment has been approved. (4) A process for granting clinical privileges has been approved. (5) A process for suspending or terminating clinical privileges has been approved. (6) A process for the appeal of decisions to suspend or terminate privileges has been approved. (7) Processes for initial appointment, reappointment, and assignment or curtailment of clinical privileges of medical staff members are consistent with state law, if applicable. Compliance Rating: if 7 elements apply Compliant Compliant present present are present are present present Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present CMS Tag YES NO NA",
      },
      {
        heading: "C. On a formal application for initial staff privileges, the applicant is required to — provide sufficient evidence of training, experience, and current documented competence in performance of the procedures for which privileges are requested.",
        content: "Elements of compliance — (1) Information regarding relevant education, training, and experience is obtained. (2) Peer references are obtained to document current competence. (3) A current state license is obtained. (4) Information is obtained from the National Practitioner Data Bank (NPDB). (5) Drug Enforcement Administration (DEA) registration information is obtained, if applicable. (6) Proof of current medical liability coverage meeting governing body requirements, if any, is obtained. References / Notes • NPDB Continuous Query is an acceptable option for meeting this requirement. For information on the National Practitioner Data Bank, see https://www.npdb.hrsa.gov/. Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present",
      },
      {
        heading: "D. The application for initial staff privileges includes written attestation from the — applicant addressing other information pertinent to the appointment and privileging processes.",
        content: "Elements of compliance — (1) The application includes professional liability information:; a. Claims history.; b. Refusal or cancellation of professional liability coverage. (2) The application includes information on licensure revocation, suspension, voluntary relinquishment, licensure probationary status, or other licensure conditions or limitations. (3) The application includes information about complaints or adverse action reports filed against the applicant with a local, state, or national professional society or licensure board. (4) The application includes information about denial, suspension, limitation, termination, or nonrenewal of professional privileges at any hospital, health plan, medical group, or other health care entity. (5) The application includes information about federal actions or sanctions including DEA and Medicare/Medicaid. (6) The application includes information about conviction of a criminal offense (other than minor traffic violations). (7) The application includes information about current physical, behavioral health, or chemical dependency problems that would interfere with the ability to provide high- quality patient care and professional services. Compliant Compliant present present are present are present present 42 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "E. The application for initial staff privileges is accurate and complete. —",
        content: "Elements of compliance — (1) The application includes a formal statement releasing the organization from any liability in connection with credentialing decisions. (2) The application includes the applicant's attestation to the accuracy and completeness of the application and additional information provided. (3) The application includes the applicant's dated signature. Compliant Compliant present present present",
      },
      {
        heading: "F. Upon receipt of a completed and signed initial application, primary or — secondary source verification of credentials is conducted in accordance with the organization's written procedures for credentialing.",
        content: "Elements of compliance — (1) Written procedures are present. (2) Credentials are verified using primary and/or secondary sources. References / Notes • Refer to the Glossary for definitions of primary and secondary source verification. • An accreditable organization may use information provided by a Credentials Verification Organization (CVO) after proper assessment of the capability and quality of the CVO. A CVO may demonstrate such capability and quality by becoming accredited or certified by a nationally recognized accreditation organization. Accredited organizations are required to conduct primary or secondary source verification of the items listed on the formal application for initial staff privileges, unless a CVO, or other organization performing primary source verification that is accredited or certified by a nationally recognized body, is used. If the organization uses a CVO or another organization to verify credentials, those entities must perform primary source verification unless such sources do not exist or are impossible to verify. Compliant Compliant present present present CMS Tag YES NO NA",
      },
      {
        heading: "G. The governing body makes appointment and reappointment decisions — following review of the applications, or based on recommendations from an internal delegate.",
        content: "Elements of compliance — (1) Applications are reviewed by the governing body or its delegate. (2) If the governing body delegates responsibility for reviewing the applications, documentation of the delegation is present. (3) Peer references and/or peer review activities and results, completed in accordance with AAAHC Standards for peer review, are incorporated into the decision process. (4) Appointment and reappointment decisions made by the governing body are documented. References / Notes • In this context, “delegate” refers to an internal reviewer or reviewers, e.g., the Medical Director or a Committee that provides recommendations for appointment and reappointment to the governing body. The governing body remains responsible for making appointment and reappointment decisions. Such delegation is not an option for solo providers because a separate Standard requires review by an outside provider. Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present",
      },
      {
        heading: "H. Members of the medical and/or dental staff apply for reappointment every three years, or more frequently if prevailing laws and regulations, or organizational policies, so stipulate. [416.45(b)]",
        content: "Elements of compliance — (1) Applicants are required to complete a formal reappointment application. (2) The reappointment application includes, at minimum:; a. Updated personal information.; b. Completed attestation questions.; c. Dated signature of the applicant. 44 Accreditation Handbook for Medicare Deemed Status, v42 References / Notes • For more information about attestation questions, reference Standards for the application for initial staff privileges. Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0122" }],
      },
      {
        heading: "I. Upon receipt of the completed reappointment application, primary or — secondary source verification is conducted. References / Notes • Items requiring primary and secondary source verification are the same as the formal application for initial staff privileges (e.g., current state license, NPDB report). Refer to those Standards for more information. Compliant Compliant CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "J. The currency of date-sensitive credentialing and privileging information is — monitored and documented on an ongoing basis (at minimum, at expiration, appointment, and re-appointment).",
        content: "Elements of compliance — (1) Ongoing monitoring of licensure is documented. (2) Ongoing monitoring of DEA registrations is documented. (3) Ongoing monitoring of Board certifications, as applicable, is documented. (4) Ongoing monitoring of professional liability insurance (if required) is documented. Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present",
      },
      {
        heading: "K. Solo providers adhere to appropriate credentialing, initial appointment and — reappointment procedures.",
        content: "Elements of compliance — (1) The provider is required to complete an application or reapplication, and the documentation is present in the credentials file. (2) Documentation in the credentials file includes a list of procedures that may be performed, or services that may be provided, by the provider in the organization/practice setting. (3) To ensure currency, accuracy, and completeness of credentials, the provider's credentials file is reviewed by an outside physician (for a medical practice) or an outside dentist (for a dental practice) at least every three years, or more frequently if state law or organizational policies so stipulate. (4) An outside physician (for medical practices) or dentist (for dental practices) has reviewed the granting of privileges and provided documentation of his/her recommendation. (5) Applications for privileges submitted by other providers are processed in the same manner. References / Notes • For documentation required in the credentials file refer to Standards for the formal application for initial staff privileges. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present present are present are present are present apply Privileging is a three-phase process. The objective of privileging is to determine the specific procedures and treatments that a health care professional may perform. An accreditable organization: 1) determines the clinical procedures and treatments that are offered to patients; 2) determines the qualifications related to training and experience that are required to authorize an applicant to obtain each privilege; and 3) establishes a process for evaluating the applicant’s qualifications using appropriate criteria and approving, modifying, or denying any or...",
      },
      {
        heading: "L. Privileges to carry out specified procedures are granted to legally and professionally qualified applicants.",
        content: "Elements of compliance — (1) Privileges are granted based on:; a. The applicant's written request for privileges.; b. Qualifications for the services provided by the organization.; c. Recommendations from qualified medical personnel. [416.45(a)] Q-0121 (2) Privileges are granted to the health care professional to practice for a specified period of time. 46 Accreditation Handbook for Medicare Deemed Status, v42 Compliant Compliant present present present",
      },
      {
        heading: "M. The governing body provides a process for the initial appointment, — reappointment, and assignment or curtailment of privileges and practice for allied health care professionals.",
        content: "Elements of compliance — (1) The process is consistent with state law. (2) The process includes verification of education, training, experience, and current competence. (3) The process includes primary or secondary source verification of licensure or certification, as applicable. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present are present apply",
      },
      {
        heading: "N. Surgical procedures must be performed in a safe manner by qualified physicians who have been granted clinical privileges by the governing body of the ASC in accordance with approved policies and procedures of the ASC. [416.42] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0060" }],
      },
      {
        heading: "O. If the ASC assigns patient care responsibilities to practitioners other than physicians, it must have established policies and procedures, approved by the governing body, for overseeing and evaluating their clinical activities. [416.45(c)] Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply Subchapter III – Peer Review: An accreditable organization maintains an active and organized process for peer review that is integrated into the quality management and improvement program. Accredited organizations may determine which health care professionals can peer review each other, within the following guidelines: 1) differently licensed practitioners reviewing each other must be privileged to provide similar services to similar patients; and 2) prevailing laws must permit peer review by differently licensed practitioners.",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0123" }],
      },
      {
        heading: "A. Each physician, dentist or health care professional is reviewed by at least one — similarly privileged and/or similarly licensed peer. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "B. In organizations with solo practitioners, an outside peer provides peer review. — Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "C. Privileged health care professionals participate in the development and — application of peer review criteria.",
        content: "Elements of compliance — (1) Privileged health care professionals participate in the development and application of the peer review criteria used to evaluate the care they provide. (2) Clinical care is selected for review on an ongoing basis. (3) The selection process for care to be reviewed applies to all similarly privileged health care professionals. (4) All clinical incidents are reviewed in accordance with the organization's peer review policies and procedures. (5) All privileged health care professionals are reviewed at least annually by a peer or supervising health care professional. References / Notes • Examples of peer review criteria include but are not limited to date of care; compliance with disease management guidelines; following treatment protocols; complications during surgery; post-operative infections; wrong-site surgery. • See glossary for the definition of “Incident.” 48 Accreditation Handbook for Medicare Deemed Status, v42 Compliant Compliant present present present present present",
      },
      {
        heading: "D. Ongoing monitoring of important aspects of the care provided by physicians, — dentists, and other health care professionals is conducted.",
        content: "Elements of compliance — (1) Data are collected in an ongoing manner. (2) The data are periodically evaluated to identify trends or occurrences that affect patient outcomes. (3) The data are used to establish internal benchmarks against which performance is compared to identify areas in which improvement is needed. Compliant Compliant present present present",
      },
      {
        heading: "E. The results of peer review activities are reported to the governing body. — Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "F. The results of peer review are used as part of the process for granting — continuation of clinical privileges. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 2. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "G. Ongoing professional development and the improvement of staff performance — are supported.",
        content: "Elements of compliance — (1) Convenient access to reliable, up-to-date information pertinent to the organization's clinical, educational, administrative, and research services is provided. (2) As demonstrated in the organization's policies or procedures, health care professionals are encouraged to participate in internal or external educational programs and activities, consistent with the organization's mission, goals, and objectives. Compliant Compliant present present present 50 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 3",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "The ASC must have an agreement with CMS to participate in Medicare as an ASC, and must meet the conditions set forth in Title 42 CFR Part 416, Subparts B - G..." },
      { fact: "Standard B", detail: "The ASC is a distinct entity that operates exclusively for the purpose of providing surgical services to patients not requiring hospitalization and in which ..." },
      { fact: "Standard C", detail: "The organization is a legally constituted entity, or an organized sub-unit of a — legally constituted entity, or is a sole proprietorship in the state(s) in ..." },
      { fact: "Standard D", detail: "The ASC must comply with state licensure requirements. Compliant Compliant CMS Tag YES NO NA" },
      { fact: "Standard E", detail: "The ASC must have a governing body that assumes full legal responsibility for determining, implementing, and monitoring policies governing the ASC's total op..." },
      { fact: "Standard F", detail: "The governing body is responsible for establishing strategic direction and — supporting its accomplishment." },
      { fact: "Standard G", detail: "The governing body addresses and is fully and legally responsible, either — directly or by appropriate professional delegation, for the operation and perform..." },
      { fact: "Standard H", detail: "The governing body addresses and is fully and legally responsible, either — directly or by appropriate professional delegation, for the clinical operations a..." },
      { fact: "Standard I", detail: "The governing body is responsible for approving and ensuring compliance of — all major contracts or arrangements affecting the medical and/or dental care pro..." },
      { fact: "Standard J", detail: "The governing body is responsible for ensuring appropriate communication — within and on behalf of the organization." },
      { fact: "Standard K", detail: "The governing body meets at least annually, or more frequently as determined — by the governing body, as evidenced by minutes or other records kept as necess..." },
      { fact: "Standard L", detail: "Within 15 calendar days of significant organizational, ownership, operational, — or quality of care events, the organization notifies AAAHC of the event in w..." },
      { fact: "Standard M", detail: "Representation of accreditation to the public accurately reflects the AAAHC- — accredited entity. Compliant Compliant" },
      { fact: "Standard N", detail: "Documentation demonstrates at least annual governing body review of AAAHC accreditation requirements." },
    ],
  },
  {
    levelId: "asc_hb_administration",
    chapterNumber: 3,
    category: "Universal Standards",
    title: "Chapter 3: Administration",
    overview: "An accreditable organization is administered in a manner that ensures the provision of high-quality health services and that fulfills the organization’s mission, goals, and objectives. Organizations may find it helpful to use the Personnel Records Worksheet, found in the Tools section, to evaluate compliance with some Standards found in this chapter.",
    sections: [
      {
        heading: "A. Administrative policies, procedures, and controls adopted by the governing — body are implemented to ensure the orderly and efficient management of the organization.",
        content: "Elements of compliance — (1) All policies adopted by the governing body are appropriate for the organization given the services provided and the patients served. (2) As evidenced by the personnel files, all staff employed possess at least the minimum qualifications, experience, competencies, and licensure and/or certification required for their positions. (3) Written job descriptions define and delineate functional responsibilities, authority, and qualifications including licensure and/or certification. (4) Written policies and procedures, as well as other documentation such as (but not limited to) meeting minutes and educational materials, indicate that all reasonable steps are taken to comply with applicable laws and regulations. (5) Evidence is present that official organizational documents such as governing body Q-0246 meeting minutes, corporate organizational documents, bylaws, and other similar records are properly filed, secured, and safeguarded. [416.51(c)(3)(iv), 416.51(c)(3)(v), 416.51(c)(3)(vii), 416.51(c)(3)(ix)] Compliant Compliant present present present present present CMS Tag YES NO NA",
      },
      {
        heading: "B. Fiscal controls are in place to protect the assets of the organization. —",
        content: "Elements of compliance — (1) Appropriate and adequate policies and procedures are in place to provide accounting controls over assets, liabilities, revenues, and expenses. (2) Written policies and procedures are in place for controlling accounts receivable and accounts payable. (3) Written policies and procedures are in place to control cash payments and credit arrangements. (4) Written policies and procedures are in place to manage unpaid accounts and accounts being considered for transfer to a collection agency. (5) Written policies and procedures are in place to manage the purchase, receipt, distribution, maintenance, and security of supplies, equipment, and facilities. Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present CMS Tag YES NO NA",
      },
      {
        heading: "C. Written personnel policies are established and implemented to facilitate — attainment of the mission, goals, and objectives of the organization.",
        content: "Elements of compliance — (1) Written policies specify privileges and responsibilities of employment, including compliance with an incident and adverse event reporting system. (2) Written policies require periodic appraisal of each person's job performance, including current competence. (3) Written policies describe incentives and rewards, if any exist. (4) Written policies are made known to employees at the time of employment. (5) Written policies comply with prevailing laws and regulations regarding verification of eligibility for employment (I-9 form), and visas as required. (6) Written policies define the status of students and postgraduate trainees, if present, in the organization. References / Notes • Refer to the risk management program Standards defining incidents and adverse events. 52 Accreditation Handbook for Medicare Deemed Status, v42 Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present",
      },
      {
        heading: "D. Orientation and training addressing safety and privacy are provided. —",
        content: "Elements of compliance — (1) Orientation and training address the fire safety and the disaster preparedness plan. (2) Orientation and training address the use of emergency, safety and fire extinguishing equipment. (3) Orientation and training address the infection prevention and control program, including bloodborne pathogen and other training required by OSHA. (4) Orientation and training address the safety program, including exposure control training and sharps injury prevention. (5) Orientation and training address the risk management program, including training in the reporting of incidents and adverse events. (6) Orientation and training address confidentiality and privacy (e.g., HIPAA, FERPA). Compliant Compliant present present are present present present",
      },
      {
        heading: "E. Orientation and training according to position description are provided to all — staff.",
        content: "Elements of compliance — (1) Documented orientation and training are completed within 30 days of employment. (2) The training is provided annually thereafter. (3) The training is provided when there is an identified need. (4) The delivery of all training is documented. References / Notes • Training provided annually and when there is an identified need should include the safety and privacy orientation and training Standard requirements. Compliant Compliant present are present present",
      },
      {
        heading: "F. Patient satisfaction with services and facilities provided is periodically — assessed.",
        content: "Elements of compliance — (1) Patient satisfaction surveys are conducted on an ongoing basis. (2) Survey results are analyzed on an ongoing basis. (3) The governing body reviews the survey results. (4) Corrective actions are taken as needed. Compliant Compliant present are present present",
      },
      {
        heading: "G. The nursing services of the ASC must be directed and staffed to assure that the nursing needs of all patients are met. [416.46]",
        content: "Elements of compliance — (1) Nursing services of the Ambulatory Surgery Center is directed under the leadership Q-0140 of a Registered Nurse. [416.46] (2) The ASC must have documentation that it has designated a Registered Nurse to Q-0140 direct nursing services. [416.46] 54 Accreditation Handbook for Medicare Deemed Status, v42 Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0140" }],
      },
      {
        heading: "H. Patient care responsibilities must be delineated for all nursing service personnel. [416.46(a)]",
        content: "Elements of compliance — (1) The assignments must be in writing. [416.46(a)] Q-0141 (2) Nursing services must be provided in accordance with recognized standards of Q-0141 practice. [416.46(a)] (3) There must be a registered nurse available for emergency treatment whenever there Q-0141 is a patient in the ASC. [416.46(a)] Compliant Compliant 56 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 4",
        criticalValues: [{ label: "CMS Tag", value: "Q-0141" }],
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Administrative policies, procedures, and controls adopted by the governing — body are implemented to ensure the orderly and efficient management of the organ..." },
      { fact: "Standard B", detail: "Fiscal controls are in place to protect the assets of the organization. —" },
      { fact: "Standard C", detail: "Written personnel policies are established and implemented to facilitate — attainment of the mission, goals, and objectives of the organization." },
      { fact: "Standard D", detail: "Orientation and training addressing safety and privacy are provided. —" },
      { fact: "Standard E", detail: "Orientation and training according to position description are provided to all — staff." },
      { fact: "Standard F", detail: "Patient satisfaction with services and facilities provided is periodically — assessed." },
      { fact: "Standard G", detail: "The nursing services of the ASC must be directed and staffed to assure that the nursing needs of all patients are met. [416.46]" },
      { fact: "Standard H", detail: "Patient care responsibilities must be delineated for all nursing service personnel. [416.46(a)]" },
    ],
  },
  {
    levelId: "asc_hb_quality_of_care",
    chapterNumber: 4,
    category: "Universal Standards",
    title: "Chapter 4: Quality of Care Provided",
    overview: "An accreditable organization provides high-quality health care services in accordance with the principles of professional practice and ethical conduct, and with concern for the costs of care and for improving the community’s health status. Such an organization meets the following Standards.",
    sections: [
      {
        heading: "B. Health care professionals practice their professions in accordance with — standards of care and prevailing laws and regulations. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 4. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "C. All personnel assisting in the provision of health care services are — appropriately qualified and supervised and are available in sufficient numbers for the care provided.",
        content: "Elements of compliance — (1) Evidence of the following is present:; a. Such personnel are appropriately qualified.; b. Such personnel are appropriately supervised. (2) Interviews and observation confirm that such personnel are available in sufficient numbers for the care provided. Compliant Compliant present present present",
      },
      {
        heading: "D. The organization has policies and procedures for identifying, storing, and — transporting laboratory specimens and biological products.",
        content: "Elements of compliance — (1) Logging and tracking procedures ensure that results for each specimen are obtained. (2) Results for each specimen are reported to the ordering health care professional in a timely manner. (3) Biological products are handled, stored and transported in accordance with manufacturer's instructions and/or regulatory requirements, as applicable. References / Notes • For a definition of biological products, see https://www.fda.gov/files/drugs/published/Biological-Product- Definitions.pdf. Compliant Compliant present present present",
      },
      {
        heading: "E. High-quality health care is provided. —",
        content: "Elements of compliance — (1) Health care provided is consistent with the standard of care. (2) Appropriate and timely diagnoses are made based on findings of the current history and physical examination. (3) Medication reconciliation is performed. (4) Treatment provided is consistent with clinical impression or working diagnosis. (5) Appropriate and timely consultation and referrals are made. (6) When clinically indicated, patients are contacted as quickly as possible for follow-up regarding significant problems and/or abnormal findings. (7) Continuity of care and patient follow-up occurs. Compliant Compliant present present are present are present present 58 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "F. Patients are educated regarding their condition or illness. —",
        content: "Elements of compliance — (1) Patients are educated regarding the diagnosis and treatment of their condition or illness. (2) Patients are educated regarding appropriate preventive measures. References / Notes • In surgical settings, education may include preventive measures such as, for example, avoiding post-operative infections, venous thromboembolism, and/or pulmonary embolism. Compliant Compliant present present present",
      },
      {
        heading: "G. When the need arises, the organization assists patients with the transfer of — their care from one health care professional to another.",
        content: "Elements of compliance — (1) Adequate specialty consultation services are available by prior arrangement. (2) Referral to another health care professional is clearly outlined to the patient and arranged with the accepting health care professional. Compliant Compliant present present present",
      },
      {
        heading: "I. The ASC must have an effective procedure for the immediate transfer, to a hospital, of patients requiring emergency medical care beyond the capabilities of the ASC. [416.41(b)(1)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 4. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0042" }],
      },
      {
        heading: "J. This hospital must be a local, Medicare participating hospital or a local nonparticipating hospital that meets the requirements for payment for emergency services under Title 42 CFR 482.2. [416.41(b)(2)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 4. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0042" }],
      },
      {
        heading: "K. The ASC must periodically provide the local hospital with written notice of its operations and patient population served. [416.41(b)(3)] Compliant Compliant 60 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 5",
        content: "This is a Standard-level requirement under Chapter 4. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0042" }],
      },
    ],
    quickReference: [
      { fact: "Standard B", detail: "Health care professionals practice their professions in accordance with — standards of care and prevailing laws and regulations. Compliant Compliant" },
      { fact: "Standard C", detail: "All personnel assisting in the provision of health care services are — appropriately qualified and supervised and are available in sufficient numbers for the..." },
      { fact: "Standard D", detail: "The organization has policies and procedures for identifying, storing, and — transporting laboratory specimens and biological products." },
      { fact: "Standard E", detail: "High-quality health care is provided. —" },
      { fact: "Standard F", detail: "Patients are educated regarding their condition or illness. —" },
      { fact: "Standard G", detail: "When the need arises, the organization assists patients with the transfer of — their care from one health care professional to another." },
      { fact: "Standard I", detail: "The ASC must have an effective procedure for the immediate transfer, to a hospital, of patients requiring emergency medical care beyond the capabilities of t..." },
      { fact: "Standard J", detail: "This hospital must be a local, Medicare participating hospital or a local nonparticipating hospital that meets the requirements for payment for emergency ser..." },
      { fact: "Standard K", detail: "The ASC must periodically provide the local hospital with written notice of its operations and patient population served. [416.41(b)(3)] Compliant Compliant ..." },
    ],
  },
  {
    levelId: "asc_hb_quality_mgmt",
    chapterNumber: 5,
    category: "Universal Standards",
    title: "Chapter 5: Quality Management and Improvement",
    overview: "In striving to improve the quality of care and to promote more effective and efficient use of facilities and services, an accreditable organization maintains a quality management and improvement program that links peer review, quality improvement activities, infection prevention and safety, and risk management in an organized, systematic way. Organizations may also find it useful to refer to Developing Meaningful Quality Improvement Studies in the Tools section of this Handbook. Note: The intent of this chapter is that administrative and clinical personnel are involved in the quality management and improvement activities of the organization. Subchapter I – Quality Improvement Program: An accreditable organization maintains an active, integrated, organized, ongoing, data-driven, and peer-based quality improvement (QI) program that meets the following Standards.",
    sections: [
      {
        heading: "A. The ASC must develop, implement and maintain an ongoing, data-driven quality assessment and performance improvement (QAPI) program. [416.43]",
        content: "Elements of compliance — (1) The program must include, but not be limited to, an ongoing program that Q-0081 demonstrates measurable improvement in patient health outcomes, and improves patient safety by using quality indicators or performance measures associated with improved health outcomes and by the identification and reduction of medical errors. [416.43(a)(1)] (2) The ASC must measure, analyze, and track quality indicators, adverse events, Q-0081 infection control and other aspects of performance that includes care and services furnished in the ASC. [416.43(a)(2)] (3) The ASC must set priorities for its performance improvement activities. [416.43(c)(1)] Q-0081 (4) Priorities focus on high risk, high volume, and problem-prone areas. [416.43(c)(1)(i)] Q-0081 (5) Priorities consider incidence, prevalence and severity of problems in those areas. Q-0081 [416.43(c)(1)(ii)] (6) Priorities affect health outcomes, patient safety, and quality of care. [416.43(c)(1)(iii)] Q-0081 Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0080" }],
      },
      {
        heading: "B. The organization has a written quality improvement program. —",
        content: "Elements of compliance — (1) The program addresses the full scope of the organization's health care delivery services and describes how these services are assessed for quality. (2) The specific committee(s) or individual(s) responsible for development, implementation, and oversight of the program are identified. (3) The program includes participation by health care professionals, one or more of whom is a physician or dentist. (4) The purpose of the program and specific objectives to be achieved are identified. (5) The program describes the ongoing data collection processes used to measure quality and identify quality-related problems or concerns. (6) The program describes how the organization integrates quality improvement activities, peer review, and the risk management and infection prevention and control programs. (7) The program is evaluated at least annually for effectiveness and to determine if the program's purposes and objectives continue to be met. References / Notes • “Full scope” includes clinical, administrative, and cost-of-care performance issues, as well as actual patient outcomes, i.e., results of care, including safety of patients. • In organizations where a physician or a dentist is not on the provider staff, and the organization is therefore led by an advanced practice registered nurse or a physician assistant, or in a behavioral health setting led by a licensed clinical behavioral health professional, one or more of such similarly-licensed health care providers is a participant. • Refer to the Standard for ongoing data collection processes for information on the requirements for measuring quality and identifying concerns. Compliant Compliant present present are present are present present",
      },
      {
        heading: "C. The quality improvement program includes processes to ensure — communication of the results of quality improvement activities.",
        content: "Elements of compliance — (1) The program includes processes to ensure that the results of quality improvement activities are reported to the governing body. (2) The program includes processes to ensure that the results of quality improvement activities are reported throughout the organization, as appropriate. (3) The program includes processes to ensure that the results of the annual program evaluation are reported to the governing body. (4) The program includes processes to ensure that the results of the annual program evaluation are reported throughout the organization, as appropriate. 62 Accreditation Handbook for Medicare Deemed Status, v42 Compliant Compliant present are present present",
      },
      {
        heading: "D. Ongoing data collection processes are in place to measure quality and to — identify quality-related problems or concerns.",
        content: "Elements of compliance — (1) Processes include analysis of the results of peer review activities. (2) Periodic audits of critical processes are conducted, as appropriate for the services provided. (See \"audit\" in the Glossary.) (3) Ongoing monitoring of important processes and outcomes of care is conducted, as appropriate for the services provided. (See \"quality monitoring\" in the Glossary.) (4) The organization's performance is compared to internal and external benchmarks. (5) Processes include methods to systematically collect information from other pertinent sources. (6) The information and data obtained through the data collection processes is evaluated on an ongoing basis to identify the existence of unacceptable variation or results that require improvement. References / Notes • Examples of other pertinent sources include, but are not limited to, patient satisfaction surveys, financial data, medical/legal issues, and outcomes data. Compliant Compliant present present are present present present",
      },
      {
        heading: "E. The governing body must ensure that the QAPI program is implemented. [416.43(e)]",
        content: "Elements of compliance — (1) The governing body must ensure that the QAPI program is defined, implemented, Q-0084 and maintained by the ASC. [416.43(e)(1)] (2) The governing body must ensure that the QAPI program addresses the ASC’s Q-0084 priorities and that all improvements are evaluated for effectiveness. [416.43(e)(2)] (3) The governing body must ensure that the QAPI program specifies data collection Q-0084 methods, frequency, and details. [416.43(e)(3)] (4) The governing body must ensure that the QAPI program clearly establishes its Q-0084 expectations for safety. [416.43(e)(4)] (5) The governing body must ensure that the QAPI program adequately allocates Q-0084 sufficient staff, time, information systems, and training to implement the program. [416.43(e)(5)] Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0084" }],
      },
      {
        heading: "F. The program must incorporate quality indicator data, including patient care and other relevant data regarding services furnished in the ASC. [416.43(b)(1)]",
        content: "Elements of compliance — (1) The ASC uses the data collected to monitor the effectiveness and safety of its Q-0082 services, and quality of its care. [416.43(b)(2)(i)] (2) The ASC uses the data collected to identify opportunities that could lead to Q-0082 improvements and changes in its patient care. [416.43(b)(2)(ii)] (3) Performance improvement activities must track adverse events, examine their Q-0082 causes, implement improvements, and ensure that improvements are sustained over time. [416.43(c)(2)] (4) The ASC must implement preventive strategies throughout the facility targeting Q-0082 adverse events and ensure that all staff are familiar with these strategies. [416.43(c)(3)] Compliant Compliant 64 Accreditation Handbook for Medicare Deemed Status, v42",
        criticalValues: [{ label: "CMS Tag", value: "Q-0082" }],
      },
      {
        heading: "G. The organization demonstrates that continuous improvement is occurring by — conducting quality improvement studies when the data collection processes indicate that improvement is or may be warranted.",
        content: "Elements of compliance — (1) As evidenced by documentation of quality improvement studies conducted, the studies include the applicable components of the quality improvement process. (2) At least one current quality improvement study demonstrates that improvement occurred and has been sustained. (3) As documented in committee and/or staff meeting minutes, and/or in records of educational activities, the findings of quality improvement activities are communicated:; a. To the governing body.; b. Throughout the organization, as appropriate. References / Notes • See “Developing Meaningful Quality Improvement Studies” in the Tools section of the Handbook for the components of the quality improvement process. • “Current” is defined as within the current accreditation term, or within the last twelve months for initial surveys. • Refer to the Standard for ongoing data collection processes for information on the requirements for measuring quality and identifying concerns. Compliant Compliant present present present",
      },
      {
        heading: "H. The number and scope of distinct improvement projects conducted annually must reflect the scope and complexity of the ASC’s services and operations. [416.43(d)(1)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 5. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0083" }],
      },
      {
        heading: "I. The ASC must document the projects that are being conducted. The documentation, at a minimum, must include the reason(s) for implementing the project, and a description of the project’s results. [416.43(d)(2)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 5. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0083" }],
      },
      {
        heading: "J. The organization participates in external benchmarking activities that compare — key performance measures with other similar organizations, with recognized best practices, and/or with national or professional targets or goals.",
        content: "Elements of compliance — (1) External benchmarking activities include the selection and use of performance measures that are appropriate for improving the processes or outcomes of care relevant to the patients served. (2) External benchmarking activities include collecting and analyzing data related to the selected performance measures on an ongoing basis. (3) External benchmarking activities include comparing internal performance to external benchmarks that are based on valid and reliable local, state, national, or published data. (4) External benchmarking activities include tracking changes in the organization's performance on the selected performance measures. (5) The results of benchmarking activities are incorporated into other quality improvement activities of the organization. (6) As documented in meeting minutes and/or records of educational activities, the results of benchmarking activities are reported:; a. To the governing body.; b. Throughout the organization, as appropriate. Compliant Compliant present present are present present present 66 Accreditation Handbook for Medicare Deemed Status, v42 Subchapter II – Risk Management: An accreditable organization develops and maintains a program of risk management appropriate to the organization, designed to protect the life and welfare of the organization’s patients and employees. Such an organization meets the following Standards. CMS Tag YES NO NA",
      },
      {
        heading: "A. The risk management program includes written policies. —",
        content: "Elements of compliance — (1) The policies include methods by which a patient may be dismissed from care or refused care. (2) The policies include methods for managing a situation in which a health care professional becomes incapacitated during a medical or surgical procedure. (3) The policies include methods of addressing a situation involving an impaired health care professional. (4) The policies require documentation of responsibility for coverage after normal working hours. (5) The policies require documentation of clinical advice provided after normal working hours. (6) The policies define restrictions on observers in patient care areas. (7) The policies include requirements for evidence of patient consent for all persons permitted in patient care areas who are not authorized staff. References / Notes • Examples of unauthorized persons include students, visiting physicians, health care industry representatives, surveyors, maintenance workers, vendors, etc. Compliance Rating: if 7 elements apply Compliant Compliant present present are present are present present Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present CMS Tag YES NO NA",
      },
      {
        heading: "B. The risk management policies address ongoing processes regarding patient — safety and other important issues.",
        content: "Elements of compliance — (1) Policies address encouraging the reporting of near-miss events. (2) Policies address the communication of reportable events as required by law and regulation. (3) Policies address the periodic review of all litigation involving the organization and its staff and health care professionals. (4) Policies address the ongoing review of patient complaints and grievances and includes defined response times, as required by law and regulation. (5) Policies address the documentation of timely notification to the professional liability insurance carrier, in accordance with organization or carrier policy, when adverse or reportable events occur. (6) Policies address the periodic review of clinical records and clinical record policies. (7) Policies address other state or federal risk management requirements. Compliance Rating: if 7 elements apply Compliant Compliant present present are present are present present Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present 68 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "C. The organization's risk management program and/or policies define incidents — and adverse events.",
        content: "Elements of compliance — (1) The definition of an incident includes any clinical or non-clinical occurrence that is not consistent with the routine care or operation of the organization. Incidents may involve patients, visitors, employees, and medical or dental staff members and include circumstances or events that could have resulted in an adverse event but did not result in harm (i.e., near miss events). (2) The definition of an adverse event includes:; a. An unexpected occurrence during a health care encounter involving patient death or serious physical or psychological injury or illness, including loss of limb or function, not related to the natural course of the patient's illness or underlying condition.; b. Any process variation for which a recurrence carries a significant chance of a serious adverse outcome.; c. Events such as actual breaches in medical care, administrative procedures, or other events resulting in an outcome that is not associated with the standard of care or acceptable risks associated with the provision of care and service for a patient.; d. Events involving reactions to drugs and materials. Compliant Compliant present present present",
      },
      {
        heading: "D. Incidents and adverse events are reviewed and corrective actions are taken as — needed.",
        content: "Elements of compliance — (1) All incidents and adverse events are reviewed. (2) When appropriate, incidents are acted upon. (3) All adverse events and incidents that could have resulted in an adverse event (i.e., near miss events) are analyzed to identify the basic or causal factors underlying the incident and potential improvements in processes or systems, if any exist, to reduce the likelihood of such incidents in the future. (4) Improvements that reduce the likelihood of future adverse events are implemented, when indicated. Compliant Compliant present are present present 70 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 6",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "The ASC must develop, implement and maintain an ongoing, data-driven quality assessment and performance improvement (QAPI) program. [416.43]" },
      { fact: "Standard B", detail: "The organization has a written quality improvement program. —" },
      { fact: "Standard C", detail: "The quality improvement program includes processes to ensure — communication of the results of quality improvement activities." },
      { fact: "Standard D", detail: "Ongoing data collection processes are in place to measure quality and to — identify quality-related problems or concerns." },
      { fact: "Standard E", detail: "The governing body must ensure that the QAPI program is implemented. [416.43(e)]" },
      { fact: "Standard F", detail: "The program must incorporate quality indicator data, including patient care and other relevant data regarding services furnished in the ASC. [416.43(b)(1)]" },
      { fact: "Standard G", detail: "The organization demonstrates that continuous improvement is occurring by — conducting quality improvement studies when the data collection processes indicat..." },
      { fact: "Standard H", detail: "The number and scope of distinct improvement projects conducted annually must reflect the scope and complexity of the ASC’s services and operations. [416.43(..." },
      { fact: "Standard I", detail: "The ASC must document the projects that are being conducted. The documentation, at a minimum, must include the reason(s) for implementing the project, and a ..." },
      { fact: "Standard J", detail: "The organization participates in external benchmarking activities that compare — key performance measures with other similar organizations, with recognized b..." },
      { fact: "Standard A", detail: "The risk management program includes written policies. —" },
      { fact: "Standard B", detail: "The risk management policies address ongoing processes regarding patient — safety and other important issues." },
      { fact: "Standard C", detail: "The organization's risk management program and/or policies define incidents — and adverse events." },
      { fact: "Standard D", detail: "Incidents and adverse events are reviewed and corrective actions are taken as — needed." },
    ],
  },
  {
    levelId: "asc_hb_clinical_records",
    chapterNumber: 6,
    category: "Universal Standards",
    title: "Chapter 6: Clinical Records and Health Information",
    overview: "An accreditable organization maintains electronic and/or paper clinical records and a health information system. Such an organization meets the following Standards. The Clinical Records Worksheet, found in the Tools section, may be useful in assessing your organization’s compliance with Chapter 6 Standards.",
    sections: [
      {
        heading: "A. The ASC must maintain complete, comprehensive, and accurate medical records to ensure adequate patient care. [416.47] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 6. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0160" }],
      },
      {
        heading: "B. The ASC must develop and maintain a system for the proper collection storage, and use of patient records. [416.47(a)]",
        content: "Elements of compliance — (1) A designated person is in charge of clinical records. (2) A designated person is in charge of the health information system. (3) The system includes measures to ensure adherence to written policies and procedures. (4) The system is monitored on a regular basis. Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0161" }],
      },
      {
        heading: "C. Written policies for clinical records are present. —",
        content: "Elements of compliance — (1) The policies address the security of information, including accountability for editing, deletion, and access of clinical record content. (2) The policies address the release of patient records. (3) The policies address the protection of records from damage or loss, including back- up systems for electronic records. (4) The policies address methods of deterring unauthorized access to clinical records. (5) The policies ensure timely access to individual records. (6) The policies address the retention of active records. (7) The policies address the retirement of inactive records. Compliant Compliant present present are present are present present",
      },
      {
        heading: "D. Clinical records are maintained in a manner that facilitates the provision of — safe care.",
        content: "Elements of compliance — (1) Except when otherwise required by law, the content and format of clinical records, including the sequence of information, are organized in a consistent manner. (2) Clinical record entries are legible, including items that are scanned into an electronic record. (3) Clinical record entries are easily accessible within the record by authorized personnel. (4) All clinical information relevant to a patient is readily available to authorized personnel any time the organization is open to patients. (5) Patients are given the opportunity to approve or refuse release of records, except when release is permitted or required by law. Compliant Compliant present present present present present 72 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "E. The ASC must comply with the Department’s rules for the privacy and security of individually identifiable health information, as specified at 45 CFR Parts 160 and 164. [416.50(g)] References / Notes • Deficiencies cited at the Standards for clinical record maintenance and/or clinical record confidentiality may indicate that a deficiency is also appropriate at this Standard. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 6. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0234" }],
      },
      {
        heading: "F. Except when otherwise required by law, any record that contains clinical, — social, financial, or other data about a patient is treated as strictly confidential.",
        content: "Elements of compliance — (1) Written policies require strict confidentiality of information in the clinical record. (2) Interviews and observation confirm that patient data is handled confidentially. Compliant Compliant present present present CMS Tag YES NO NA",
      },
      {
        heading: "G. An individual clinical record is maintained for each person receiving care. Every record must be accurate, legible, and promptly completed. Medical records include at least the following items. [416.47(b)]",
        content: "Elements of compliance — (1) Each record includes patient identification, including name and date of birth. Q-0162 [416.47(b)(1)] (2) Each record includes an identification number, if used in the organization's system. (3) Each record includes patient gender. (4) Each record includes a responsible party. (5) Each record includes entries related to anesthesia administration. [416.47(b)(6)] Q-0162 (6) Each record includes documentation of properly executed informed consent. Q-0162 [416.47(b)(7)] Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0162" }],
      },
      {
        heading: "H. Clinical record entries are consistent across records.",
        content: "Elements of compliance — (1) Entries include date (and department, if departmentalized). (2) Entries include significant medical history and results of physical examination. Q-0162 [416.47(b)(2)] (3) Entries include pre-operative diagnostic studies, entered into the medical record Q-0162 before surgery, if performed. [416.47(b)(3)] (4) Clinical records include findings and techniques of the operation including a Q-0162 pathologist’s report on all tissues removed during surgery, except those exempted by the governing body. [416.47(b)(4)] (5) Entries consistently include any changes in prescription and non-prescription medication with name and dosage, when available. (6) Entries consistently include discharge diagnosis or impression, and disposition, Q-0162 recommendations and instructions given to the patient. [416.47(b)(8)] (7) Entries consistently include signature of, or authentication by, the health care professional on the clinical record entries. Compliant Compliant present present are present are present present 74 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "I. The presence or absence of allergies, sensitivities and other reactions to drugs, materials, food, and environmental factors is recorded in a prominent and consistently defined location in all clinical records. [416.47(b)(5)]",
        content: "Elements of compliance — (1) Clinical records document that patients are asked to provide information about allergies and sensitivities at each encounter. (2) Clinical records document that patients reporting allergies and sensitivities describe their reaction(s) to the allergen or irritant. (3) Information about allergies, sensitivities and reactions is recorded in a prominent and Q-0162 consistently defined location in all clinical records. [416.47(b)(5)] (4) Such information is verified at each patient encounter and updated when changes are reported. Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0162" }],
      },
      {
        heading: "J. Reports, histories and physicals, progress notes, and other patient information — such as laboratory reports, x-ray readings, operative reports, and consultations, are reviewed and incorporated into the record, as required by the organization's policies.",
        content: "Elements of compliance — (1) There is evidence that such items were reviewed in accordance with policy prior to incorporation into the record. (2) Such items have been incorporated into the clinical record. Compliant Compliant present present present",
      },
      {
        heading: "K. Clinical records document discussions with the patient concerning the — necessity, appropriateness, and risks of the proposed care, surgery, or procedure, as well as discussions of treatment alternatives, as applicable. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 6. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "L. Any notation in a patient's clinical record indicating diagnostic or therapeutic — intervention as part of clinical research is clearly contrasted with entries regarding the provision of non-research related care. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 6. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "M. Clinical records demonstrate that the organization ensures continuity of care — for its patients.",
        content: "Elements of compliance — (1) Clinical records include documentation regarding missed and canceled appointments, if any. (2) Clinical records include documentation of medical advice given to a patient by text, e- mail, or telephone, including medical advice provided after-hours, if any. (3) If a patient has had three or more visits/admissions, or if a clinical record is complex and lengthy, a summary of past and current diagnoses or problems, including past procedures, is present in the record to facilitate the continuity of care. Compliance Rating: if 3 elements apply Compliant Compliant present present present Compliance Rating: if 2 elements apply Compliant Compliant present present present CMS Tag YES NO NA",
      },
      {
        heading: "N. If a patient's primary or specialty care provider(s) or health care organization is — elsewhere, timely summaries or pertinent records necessary for continuity of patient care are available.",
        content: "Elements of compliance — (1) Summaries or records are obtained from the external provider(s) or organization. (2) Summaries or records are incorporated into the clinical record. (3) Summaries or records are provided to the external health care professional as appropriate. 76 Accreditation Handbook for Medicare Deemed Status, v42 References / Notes • Surgical organizations may choose to maintain such records in a file other than the clinical record. • Records provided to external heath care professionals should meet the Standard requirements for patient confidentiality, as applicable. Compliance Rating: if 3 elements apply Compliant Compliant present present present Compliance Rating: if 2 elements apply Compliant Compliant present present present 78 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 7",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "The ASC must maintain complete, comprehensive, and accurate medical records to ensure adequate patient care. [416.47] Compliant Compliant" },
      { fact: "Standard B", detail: "The ASC must develop and maintain a system for the proper collection storage, and use of patient records. [416.47(a)]" },
      { fact: "Standard C", detail: "Written policies for clinical records are present. —" },
      { fact: "Standard D", detail: "Clinical records are maintained in a manner that facilitates the provision of — safe care." },
      { fact: "Standard E", detail: "The ASC must comply with the Department’s rules for the privacy and security of individually identifiable health information, as specified at 45 CFR Parts 16..." },
      { fact: "Standard F", detail: "Except when otherwise required by law, any record that contains clinical, — social, financial, or other data about a patient is treated as strictly confident..." },
      { fact: "Standard G", detail: "An individual clinical record is maintained for each person receiving care. Every record must be accurate, legible, and promptly completed. Medical records i..." },
      { fact: "Standard H", detail: "Clinical record entries are consistent across records." },
      { fact: "Standard I", detail: "The presence or absence of allergies, sensitivities and other reactions to drugs, materials, food, and environmental factors is recorded in a prominent and c..." },
      { fact: "Standard J", detail: "Reports, histories and physicals, progress notes, and other patient information — such as laboratory reports, x-ray readings, operative reports, and consulta..." },
      { fact: "Standard K", detail: "Clinical records document discussions with the patient concerning the — necessity, appropriateness, and risks of the proposed care, surgery, or procedure, as..." },
      { fact: "Standard L", detail: "Any notation in a patient's clinical record indicating diagnostic or therapeutic — intervention as part of clinical research is clearly contrasted with entri..." },
      { fact: "Standard M", detail: "Clinical records demonstrate that the organization ensures continuity of care — for its patients." },
      { fact: "Standard N", detail: "If a patient's primary or specialty care provider(s) or health care organization is — elsewhere, timely summaries or pertinent records necessary for continui..." },
    ],
  },
  {
    levelId: "asc_hb_infection_prevention",
    chapterNumber: 7,
    category: "Universal Standards",
    title: "Chapter 7: Infection Prevention and Control and Safety",
    overview: "An accreditable organization provides health care services while adhering to safe practices for patients, staff, and all others. The organization maintains ongoing programs designed to (1) prevent and control infections and communicable diseases, and (2) provide a safe and sanitary environment of care. Surveyors conducting a Medicare Deemed Status Survey are required by CMS to complete the ASC Infection Control Surveyor Worksheet. AAAHC strongly recommends that ASCs in the Deemed Status Program use this worksheet to perform a pre-survey self-assessment. The document can be accessed at https://www.cms.gov/Regulations-and- Guidance/Guidance/Manuals/downloads/som107_exhibit_351.pdf Subchapter I — Infection Prevention and Control: An accreditable organization maintains an active and ongoing infection prevention and control program as evidenced by the following characteristics. [416.51 Condition for Coverage — Infection control] The ASC must maintain an infection control program that seeks to minimize infections and communicable diseases.",
    sections: [
      {
        heading: "A. The ASC must maintain a written infection prevention and control program that seeks to minimize infections and communicable diseases. [416.51]",
        content: "Elements of compliance — (1) The program is approved by the governing body. (2) The program is relevant to the organization as demonstrated by a formal, documented infection prevention risk assessment. (3) The infection control and prevention program must include documentation that the Q-0242 ASC’s governing body has considered, selected, and implemented nationally recognized infection control guidelines. [416.51(b)] (4) The infection control program is an integral part of the ASC’s quality improvement Q-0244 program as demonstrated by applicable policies and procedures, and by surveillance and monitoring activities. [416.51(b)(2)] (5) The written infection prevention and control program is in compliance with all Q-0246 applicable state, federal and/or tribal requirements including, but not limited to, OSHA. [416.51(c)] (6) The program must provide a functional and sanitary environment for the provision of Q-0241 surgical services by adhering to professionally acceptable standards of practice. [416.51(a)] Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0240" }],
      },
      {
        heading: "B. The ASC maintains an ongoing, written program designed to prevent, control identify, investigate, and manage infections and communicable diseases. [416.51(b)]",
        content: "Elements of compliance — (1) The infection control program is responsible for providing a plan of action for Q-0245 preventing, identifying, and managing infections and transmission of communicable diseases and for immediately implementing corrective and preventive measures that result in improvement. [416.51(b)(3)] (2) To reduce the risk of health care-acquired infection, the program requires education and active surveillance consistent with:; a. WHO, CDC, or other nationally recognized guidelines for hand hygiene.; b. CDC or other nationally recognized guidelines for safe injection practices. (3) A written policy outlines appropriate hand hygiene using products according to the product manufacturer's instructions for use. Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0242" }],
      },
      {
        heading: "C. The infection control program is under the direction of a designated and qualified professional who has training in infection control. [416.51(b)(1)]",
        content: "Elements of compliance — (1) The governing body or its designee has assigned a qualified health care professional to direct the program. (2) There is documented evidence that the assigned person:; a. Has obtained training in infection prevention and control.; b. Demonstrates current competence in infection prevention and control. Compliant Compliant 80 Accreditation Handbook for Medicare Deemed Status, v42 CMS Tag YES NO NA",
        criticalValues: [{ label: "CMS Tag", value: "Q-0243" }],
      },
      {
        heading: "D. Safe processes are used for the cleaning, decontamination, high-level — disinfection, and sterilization of instruments, equipment, supplies, and implants.",
        content: "Elements of compliance — (1) Sterilization equipment is available, if needed. (2) Internal and external indicators, including biological indicators, are used with items undergoing sterilization. (3) A written policy addresses the identification and processing of medical equipment and instruments that fail to meet high-level disinfection or sterilization parameters. (4) Cleaning, decontamination, high-level disinfection, and sterilization processes adhere to:; a. Nationally recognized guidelines.; b. Manufacturer's instructions for use.; c. State and federal guidelines. (5) A written policy is in place for monitoring and documenting the cleaning, decontamination, high-level disinfection, and sterilization of medical equipment, accessories, instruments, and implants. (6) Observation confirms that sterile packs of equipment and instruments are handled and stored to maintain their sterility. Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present",
      },
      {
        heading: "E. A written sharps injury prevention program is present in the organization. —",
        content: "Elements of compliance — (1) The program requires disposal of intact needles and syringes into appropriate puncture-resistant sharps containers, in accordance with current state and federal guidelines. (2) The program requires placement of sharps containers in appropriate care areas, secured from tampering. (3) The program requires replacement of sharps containers when the fill line is reached. (4) The program requires handling, storage, and disposal of filled sharps containers in accordance with applicable regulations. Compliant Compliant present are present present",
      },
      {
        heading: "F. Safeguards are in place to protect patients and others from cross-infection. —",
        content: "Elements of compliance — (1) Written policies and procedures for patients with communicable diseases require appropriate referral of care. (2) Written policies and procedure require that public health authorities are notified of reportable conditions. (3) Written policies and procedures require adequate surveillance to minimize the sources and transmission of infections. (4) Written policies identify people authorized to be in patient care areas. Compliant Compliant present are present present 82 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "G. Resources are sufficient to protect patients and others from cross-infection. —",
        content: "Elements of compliance — (1) Space is sufficient. (2) Equipment is sufficient. (3) Supplies are sufficient. (4) Personnel are sufficient. Compliant Compliant present are present present",
      },
      {
        heading: "H. Written policies address the cleaning of patient treatment and care areas. —",
        content: "Elements of compliance — (1) Policies address cleaning before use. (2) Policies address cleaning between patients. (3) Policies address terminal cleaning frequency based upon use of the area. (4) Policies address requirements for using cleaning products according to the manufacturer's instructions for use. Compliant Compliant present are present present",
      },
      {
        heading: "I. Medical devices for use with multiple patients are processed between patients — according to the manufacturer's instructions or nationally recognized guidelines, whichever are more stringent.",
        content: "Elements of compliance — (1) Policies provide direction for how such devices are processed or cleaned. (2) Manufacturer's instructions and/or nationally recognized guidelines are available to appropriate staff. (3) There is documented evidence of training and competency assurance of staff responsible for processing or cleaning these devices. Compliant Compliant present present present Subchapter II – Safety: An accreditable organization adheres to safe practices for patients, staff, and others and meets the following Standards. CMS YES NO NA Tag",
      },
      {
        heading: "A. A written safety program addresses the environment of care, the safety of — patients, staff, and others, and meets or exceeds local, state, or federal safety requirements.",
        content: "Elements of compliance — (1) The governing body has approved the written safety program. (2) The program includes processes for managing identified hazards, potential threats, near misses, and other safety concerns. (3) The program includes processes to reduce and avoid medication errors. (4) The program includes practices employed to prevent falls and other physical injuries, and to ensure the accurate and timely reporting of such events. (5) The program includes practices employed to prevent skin and tissue injury from chemicals, cleaning solutions, and other hazardous exposure. (6) The program includes methods of ensuring that food and drink for patient use is stored, prepared, served, and disposed of in compliance with local, state, and federal guidelines. References / Notes • Examples related to element 2 include ergonomic exposures, violence in the workplace, and external physical threats, such as terrorism. 84 Accreditation Handbook for Medicare Deemed Status, v42 Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present",
      },
      {
        heading: "B. The safety program requires performance of a proactive, documented risk — assessment before commencing demolition, construction or renovation while the facility is occupied.",
        content: "Elements of compliance — (1) The risk assessment identifies potential risks to occupant health and/or safety. (2) The risk assessment identifies actions necessary to eliminate or adequately mitigate such risks. (3) The risk assessment identifies provisions for monitoring and mitigating risks during the process, and for updating or expanding the risk assessment, if necessary, to ensure continued protection of all occupants. Compliant Compliant present present present",
      },
      {
        heading: "C. Documentation demonstrates that the risk assessment was conducted or is — underway in accordance with the requirements of the organization's safety program. References / Notes • For initial surveys, apply the NA rating. May also be rated NA on reaccreditation surveys if no facility updating or expanding has occurred in the last three years, or no such project is anticipated. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 7. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "D. Personnel trained in basic life support (BLS) and the use of cardiac and all other emergency equipment and supplies are present in the facility when patients are present. [416.44(e)]",
        content: "Elements of compliance — (1) Personnel files include documentation of current BLS training. (2) There is documentation of training in the use of cardiac and all other emergency equipment and supplies. (3) A policy requires the presence of trained and currently certified personnel when patients are present. Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0110" }],
      },
      {
        heading: "E. A written policy and process addresses the recall of items including drugs and — vaccines, blood and blood products, medical devices, equipment and supplies, and food products.",
        content: "Elements of compliance — (1) The policy addresses sources of recall information (FDA, CDC, manufacturers, and other local, state, or federal sources). (2) The policy addresses how applicable staff members are notified. (3) The policy addresses how the organization determines if a recalled product is present or has been given or administered to patients. (4) The policy addresses the response to recalled products. (5) The policy addresses the disposition or return of recalled items. (6) The policy addresses patient notification, as appropriate. Compliant Compliant present present are present present present 86 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "F. All products, including medications, reagents, solutions, and supplies that — have a manufacturer's printed expiration date are monitored and disposed of in compliance with facility policy and manufacturers' guidelines.",
        content: "Elements of compliance — (1) A written policy for the monitoring and disposal of products with expiration dates is present. (2) The policy describes the process for ensuring that products with a manufacturer's printed expiration date are monitored for currency. (3) The policy for disposal or return of expired items complies with prevailing laws and regulations, and manufacturer guidelines. Compliant Compliant present present present",
      },
      {
        heading: "G. A system exists for the proper identification, management, handling, transport, — and disposal of hazardous materials and wastes, whether solid, liquid, or gas.",
        content: "Elements of compliance — (1) Hazardous materials and waste are properly labeled. (2) Hazardous materials and waste are managed and disposed of in accordance with prevailing laws and regulations. (3) Staff responsible for hazardous waste management and disposal demonstrate knowledge of prevailing laws and regulations. Compliant Compliant present present present",
      },
      {
        heading: "H. The temperature of items that are frozen, refrigerated, and/or heated is — continuously monitored to ensure that the product manufacturer's recommended temperature range is maintained.",
        content: "Elements of compliance — (1) A mechanism is present for continuously measuring the temperature of frozen, refrigerated, and/or heated items. (2) Logs or other documentation demonstrate that temperature monitoring occurs. (3) Recommended temperature ranges are readily available to staff performing the monitoring function. (4) Documentation and/or interviews confirm that staff performing the monitoring function have been trained what to do if the temperature falls outside of the recommended range. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present elements are are present apply",
      },
      {
        heading: "I. A written policy requires documentation of the pre-cleaning, transport, and — handling of medical devices intended for external vendor reprocessing, inspection, or repair. Compliant Compliant CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 7. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "J. Reprocessing of manufacturer-labeled single-use devices complies with FDA — regulation and is limited to devices approved for reprocessing in accordance with FDA 510(k) clearance.",
        content: "Elements of compliance — (1) Documentation demonstrates that reprocessed single-use devices have been approved for reprocessing in accordance with FDA 510(k) clearance. (2) If a third-party reprocessor is used, documentation demonstrates that the reprocessor is FDA-registered. (3) If reprocessing is conducted in-house, documentation demonstrates that the organization is FDA-registered. 88 Accreditation Handbook for Medicare Deemed Status, v42 Compliance Rating: if 3 elements apply Compliant Compliant present present present Compliance Rating: if 2 elements apply or Standard does not apply Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply",
      },
      {
        heading: "K. If medical devices are provided to patients, instructions to the patients — regarding use of the devices are documented. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 7. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "L. Prior to use, appropriate education is provided to intended operators of newly — acquired devices or products to be used in the care of patients.",
        content: "Elements of compliance — (1) A designated person is responsible for ensuring that clinical education occurs prior to the use of the devices or products. (2) Vendor representatives are not used as the sole source for clinical education. Compliant Compliant present present present",
      },
      {
        heading: "M. Fire prevention and safety are addressed in the written safety program. —",
        content: "Elements of compliance — (1) Policies and procedures to educate medical staff members, employees, volunteers, and other providers and personnel in fire prevention and fire hazard reduction are followed. (2) The safety program requires that fire safety, fire prevention, and fire drills are included in the surveillance activities of personnel responsible for safety and risk management. Compliant Compliant present present present",
      },
      {
        heading: "N. Health care workers are protected from biologic hazards, consistent with — prevailing laws and regulations and nationally recognized guidelines.",
        content: "Elements of compliance — (1) The governing body has approved and implemented policies that comply with all Q-0246 applicable occupational health and safety regulations for health care workers designed to eliminate and/or minimize exposures. [416.51(c)(3), 416.51(c)(3)(i), 416.51(c)(3)(ii), 416.51(c)(3)(iii)] (2) A written exposure control plan is reviewed and updated at least annually, including an evaluation of the availability of safer medical devices and changes in technology. (3) An immunization program offered to all staff includes vaccinations for infectious Q-0246 agents of risk to staff and patients as indicated by the infection prevention risk assessment. [416.51(c)(1), 416.51(c)(1)(i), 416.51(c)(1)(ii), 416.51(c)(1)(iii), 416.51(c)(1)(iv), 416.51(c)(2), 416.51(c)(2)(i), 416.51(c)(2)(ii), 416.51(c)(3)(iv), 416.51(c)(3)(v), 416.51(c)(3)(vi), 416.51(c)(3)(vii), 416.51(c)(3)(viii),416.51(c)(3)(viii)(A), 416.51(c)(3)(viii)(B), 416.51(c)(3)(ix) 416.51(c)(3)(x)] (4) A tuberculosis detection and protection plan is in place and follows requirements of prevailing health authorities. If no such requirements exist, nationally recognized guidelines for tuberculosis detection and prevention in health care are followed. (5) Programs that address other relevant biological hazards as indicated by the infection prevention risk assessment, such as bioterrorism, are provided as needed for safety and health. Compliant Compliant present present present present present 90 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "O. Procedures addressing bloodborne pathogens are in place. —",
        content: "Elements of compliance — (1) The procedures include a Hepatitis B vaccination program. (2) The procedures include post-exposure evaluation and treatment. (3) The procedures include appropriate training in and communication of hazards to health care workers. (4) The procedures include appropriate record keeping and management. Compliant Compliant present are present present",
      },
      {
        heading: "P. A program is maintained to assess and reduce risks associated with — occupational chemical exposures.",
        content: "Elements of compliance — (1) The program includes a hazard assessment of chemicals used in the workplace, conducted at least annually and as new products are added. (2) The program includes engineering measures to reduce the risk of chemical exposure. (3) The program includes worker training programs, as documented in personnel files, meeting minutes, or in another manner. Compliant Compliant present present present",
      },
      {
        heading: "Q. Work injuries and illnesses are appropriately documented and investigated — with records maintained as applicable.",
        content: "Elements of compliance — (1) Work injury and illness records are documented and maintained in accordance with state and federal reporting requirements and any other insurance requirements. (2) Work injury and illness records detail the issue and any investigation of the occurrence. (3) Work injury and illness health records are maintained in compliance with state and federal confidentiality and security standards (e.g., OSHA). Compliant Compliant present present present 92 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 8",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "The ASC must maintain a written infection prevention and control program that seeks to minimize infections and communicable diseases. [416.51]" },
      { fact: "Standard B", detail: "The ASC maintains an ongoing, written program designed to prevent, control identify, investigate, and manage infections and communicable diseases. [416.51(b)]" },
      { fact: "Standard C", detail: "The infection control program is under the direction of a designated and qualified professional who has training in infection control. [416.51(b)(1)]" },
      { fact: "Standard D", detail: "Safe processes are used for the cleaning, decontamination, high-level — disinfection, and sterilization of instruments, equipment, supplies, and implants." },
      { fact: "Standard E", detail: "A written sharps injury prevention program is present in the organization. —" },
      { fact: "Standard F", detail: "Safeguards are in place to protect patients and others from cross-infection. —" },
      { fact: "Standard G", detail: "Resources are sufficient to protect patients and others from cross-infection. —" },
      { fact: "Standard H", detail: "Written policies address the cleaning of patient treatment and care areas. —" },
      { fact: "Standard I", detail: "Medical devices for use with multiple patients are processed between patients — according to the manufacturer's instructions or nationally recognized guideli..." },
      { fact: "Standard A", detail: "A written safety program addresses the environment of care, the safety of — patients, staff, and others, and meets or exceeds local, state, or federal safety..." },
      { fact: "Standard B", detail: "The safety program requires performance of a proactive, documented risk — assessment before commencing demolition, construction or renovation while the facil..." },
      { fact: "Standard C", detail: "Documentation demonstrates that the risk assessment was conducted or is — underway in accordance with the requirements of the organization's safety program. ..." },
      { fact: "Standard D", detail: "Personnel trained in basic life support (BLS) and the use of cardiac and all other emergency equipment and supplies are present in the facility when patients..." },
      { fact: "Standard E", detail: "A written policy and process addresses the recall of items including drugs and — vaccines, blood and blood products, medical devices, equipment and supplies,..." },
    ],
  },
  {
    levelId: "asc_hb_facilities_environment",
    chapterNumber: 8,
    category: "Universal Standards",
    title: "Chapter 8: Facilities and Environment",
    overview: "An accreditable organization provides a functionally safe and sanitary environment for its patients, personnel, and visitors, as demonstrated by meeting the following Standards. Subchapter I – Facilities.",
    sections: [
      {
        heading: "A. Documentation demonstrates that the facility complies with applicable building — codes and regulations. References / Notes • Examples of such documentation include an occupancy permit, a report or letter from a relevant fire authority, and/or a report or letter from the relevant building approval authority. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 8. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "B. The facility is operated in a safe and secure manner. —",
        content: "Elements of compliance — (1) Written policies addressing safety and security practices are present. (2) Observation and/or interviews confirm that security practices are followed. Compliant Compliant present present present",
      },
      {
        heading: "C. The physical environment supports patient comfort and privacy. —",
        content: "Elements of compliance — (1) Reception areas and restroom facilities are appropriate for patient and visitor volume. (2) Examination rooms, dressing rooms, and reception areas are constructed and maintained to ensure patient privacy during interviews, examinations, treatment, and consultation. (3) Smoking is prohibited within the facility. (4) Provisions are made to reasonably accommodate disabled individuals. (5) Adequate lighting and ventilation are provided in all areas. (6) Observation and interviews confirm that the space allocated for a particular function or service is adequate for the activities performed therein. Compliant Compliant present present are present present present",
      },
      {
        heading: "D. Facilities are clean and properly maintained. — References / Notes • Elements of “clean and properly maintained” include but are not limited to: Surfaces are free of dust and visible soil; wall finishes are smooth, uniform and easy to clean; lack of mold and rust in the facility; plumbing, window and door hardware, and HVAC systems are in working order; there is no visible damage or wear on electrical receptacles and light switches. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 8. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "E. There are no visible hazards that might lead to slipping, falling, electrical — shock, burns, poisoning, or other trauma. Compliant Compliant 94 Accreditation Handbook for Medicare Deemed Status, v42",
        content: "This is a Standard-level requirement under Chapter 8. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "F. The ASC must have a safe and sanitary environment, properly constructed equipped, and maintained to protect the health and safety of patients. [416.44]",
        content: "Elements of compliance — (1) The ASC must provide a functional and sanitary environment for the provision of Q-0101 surgical services. [416.44(a)] (2) Each operating room must be designed and equipped so that the types of surgery Q-0101 conducted can be performed in a manner that protects the lives and assures the physical safety of all individuals in the area. [416.44(a)(1)] (3) The ASC must have a separate recovery room and waiting area. [416.44(a)(2)] Q-0102 Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0100" }],
      },
      {
        heading: "G. Except as otherwise provided in this section, the ASC must meet the provisions applicable to Ambulatory Health Care Occupancies, regardless of the number of patients served, and must proceed in accordance with the Life Safety Code (NFPA 101 and Tentative Interim Amendments TIA 12-1, TIA 12-2, TIA 12-3, and TIA 12-4). [416.44(b)(1)] References / Notes • 416.44(b)(2) In consideration of a recommendation by the State survey agency or Accrediting Organization or at the discretion of the Secretary, may waive, for periods deemed appropriate, specific provisions of the Life Safety Code, which would result in unreasonable hardship upon an ASC, but only if the waiver will not adversely affect the health and safety of the patients. 416.44(b)(3) The provisions of the Life Safety Code do not apply in a state if CMS finds that a fire and safety code imposed by state law adequately protects patients in an ASC. (1) National Fire Protection Association, 1 Batterymarch Park, Quincy, MA 02169, www.nfpa.org, 1.617.770.3000. i. NFPA 99, Standards for Health Care Facilities Code of the National Fire Protection Association 99, 2012 edition, issued August 11, 2011. ii. TIA 12-2 to NFPA 99, issued August 11, 2011. iii. TIA 12-3 to NFPA 99, issued August 9, 2012. iv. TIA 12-4 to NFPA 99, issued March 7, 2013. v. TIA 12-5 to NFPA 99, issued August 1, 2013. vi. TIA 12-6 to NFPA 99, issued March 3, 2014. vii. NFPA 101, Life Safety Code, 2012 edition, issued August 11, 2011. viii. TIA 12-1 to NFPA 101, issued August 11, 2011. ix. TIA 12-2 to NFPA 101, issued October 30, 2012. x. TIA 12-3 to NFPA 101, issued October 22, 2013. xi. TIA 12-4 to NFPA 101, issued October 22, 2013. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 8. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0104" }],
      },
      {
        heading: "H. Except as otherwise provided in this section, the ASC must meet the applicable provisions and must proceed in accordance with the 2012 edition of the Health Care Facilities Code (NFPA 99, and Tentative Interim Amendments TIA 12-2, TIA 12-3, TIA 12-4, TIA 12-5 and TIA 12-6). [416.44(c)] References / Notes • 416.44(c)(2) If application of the Health Care Facilities Code required under paragraph (c) of this section would result in unreasonable hardship for the ASC, CMS may waive specific provisions of the Health Care Facilities Code, but only if the waiver does not adversely affect the health and safety of patients. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 8. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0108" }],
      },
      {
        heading: "I. Beginning July 5, 2017, an ASC must be in compliance with NFPA 101 Life Safety Code Chapter 21.3.2.1, Doors to hazardous areas. [416.44(b)(6)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 8. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0107" }],
      },
      {
        heading: "J. An ASC may place alcohol-based hand rub dispensers in its facility if the dispensers are installed in a manner that adequately protects against inappropriate access. [416.44(b)(4)] Compliant Compliant 96 Accreditation Handbook for Medicare Deemed Status, v42 CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 8. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0105" }],
      },
      {
        heading: "K. When a sprinkler system is shut down for more than 10 hours, the ASC must implement one of the following procedures. [416.44(b)(5)]",
        content: "Elements of compliance — (1) Evacuate the building or portion of the building affected by the system outage until Q-0106 the system is back in service, OR [416.44(b)(5)(i)] (2) Establish a fire watch until the system is back in service. [416.44(b)(5)(ii)] Q-0106 Compliant Compliant CMS Tag YES NO NA",
        criticalValues: [{ label: "CMS Tag", value: "Q-0106" }],
      },
      {
        heading: "L. Medical equipment is appropriately maintained. —",
        content: "Elements of compliance — (1) Written policies and procedures for equipment maintenance are present. (2) At minimum, the policies address:; a. Standardized use of the equipment.; b. Requirements for periodic calibration according to manufacturer's specifications (if equipment requiring calibration is used).; c. Requirements for periodic testing and preventive maintenance according to manufacturer specifications. (3) Documentation of periodic calibration according to manufacturer's specifications is present (if equipment requiring calibration is used). (4) Documentation of preventive maintenance according to manufacturer's instructions is present. Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present",
      },
      {
        heading: "M. The ASC medical staff and governing body of the ASC coordinates, develops and revises ASC policies and procedures to specify the types of emergency equipment required for use in the ASC’s operating room. [416.44(d)]",
        content: "Elements of compliance — (1) The equipment must be immediately available for use during emergency situations. Q-0109 [416.44(d)(1)] (2) The equipment must be appropriate for the facility's patient population. [416.44(d)(2)] Q-0109 (3) The equipment must be maintained by appropriate personnel. [416.44(d)(3)] Q-0109 (4) Observation and interviews confirm that the required emergency equipment and supplies are maintained. (5) Emergency equipment and supplies are readily accessible to all areas of each patient care service site. Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0109" }],
      },
      {
        heading: "N. Scenario-based drills of the internal and external emergency and disaster — preparedness plan are conducted.",
        content: "Elements of compliance — (1) All drills are scenario-based. (2) At least one drill is conducted each calendar quarter. (3) A cardiopulmonary resuscitation (CPR) technique drill, as appropriate to the organization is conducted annually. (4) At least one drill based on the organization’s emergency disaster plan, is conducted annually. (5) A written evaluation of each drill is completed. (6) Any needed corrections or modifications to the emergency plan are implemented promptly. Compliant Compliant present present are present present present 98 Accreditation Handbook for Medicare Deemed Status, v42 Subchapter II – Emergency Preparedness.",
      },
      {
        heading: "A. The Ambulatory Surgical Center (ASC) must comply with all applicable Federal, E-0001 State, and local emergency preparedness requirements. The ASC must establish and maintain an emergency preparedness program that meets the requirements of this section. [416.54]",
        content: "Elements of compliance — (1) The ASC must develop and maintain an emergency preparedness plan that must be E-0004 reviewed and updated at least every two years. [416.54(a)] (2) The plan must be based on and include a documented, facility-based and E-0006 community-based risk assessment, utilizing an all-hazards approach. [416.54(a)(1)] (3) The plan must include strategies for addressing emergency events identified by the E-0006 risk assessment. [416.54(a)(2)] (4) The plan must address patient population, including, but not limited to, the type of E-0007 services the ASC has the ability to provide in an emergency; and continuity of operations, including delegations of authority and succession plans. [416.54(a)(3)] (5) The plan must include a process for cooperation and collaboration with local, tribal, E-0009 regional, State, and Federal emergency preparedness officials' efforts to maintain an integrated response during a disaster or emergency situation. [416.54(a)(4)] Compliant Compliant",
      },
      {
        heading: "B. The ASC must develop and implement emergency preparedness policies and E-0013 procedures, based on the emergency plan set forth in paragraph (a) of this section, risk assessment at paragraph (a)(1) of this section, and the communication plan at paragraph (c) of this section. The policies and procedures must be reviewed and updated at least every two years. At a minimum, the policies and procedures must address the following: [416.54(b)]",
        content: "Elements of compliance — (1) The policies and procedures must address a system to track the location of on-duty E-0018 staff and sheltered patients in the ASC's care during an emergency. If on-duty staff or sheltered patients are relocated during the emergency, the ASC must document the specific name and location of the receiving facility or other location. [416.54(b)(1)] (2) The policies and procedures must address safe evacuation from the ASC, which E-0020 includes the following: [416.54(b)(2)]; a. Consideration of care and treatment needs of evacuees. [416.54(b)(2)(i)] E-0020; b. Staff responsibilities. [416.54(b)(2)(ii)] E-0020; c. Transportation. [416.54(b)(2)(iii)] E-0020; d. Identification of evacuation location(s). [416.54(b)(2)(iv)] E-0020; e. Primary and alternate means of communication with external sources of E-0020 assistance. [416.54(b)(2)(v)] Compliant Compliant",
      },
      {
        heading: "C. The policies and procedures must address a means to shelter in place for E-0022 patients, staff, and volunteers who remain in the ASC. [416.54(b)(3)]",
        content: "Elements of compliance — (1) The policies and procedures must address a system of medical documentation that E-0023 does the following: [416.54(b)(4)]; a. Preserves patient information. [416.54(b)(4)(i)] E-0023; b. Protects confidentiality of patient information. [416.54(b)(4)(ii)] E-0023; c. Secures and maintains the availability of records. [416.54(b)(4)(iii)] E-0023 (2) The policies and procedures must address the use of volunteers in an emergency E-0024 and other staffing strategies, including the process and role of integration of State and Federally designated heath care professionals to address surge needs during an emergency. [416.54(b)(5)] (3) The policies and procedures must address the role of the ASC under a waiver E-0026 declared by the Secretary, in accordance with section 1135 of the Act, in the provision of care and treatment at an alternate care site identified by emergency management officials. [416.54(b)(6)] Compliant Compliant",
      },
      {
        heading: "D. The ASC must develop and maintain an emergency preparedness E-0029 communication plan that complies with Federal, State, and local laws and must be reviewed and updated at least every two years. [416.54(c)]",
        content: "Elements of compliance — (1) The communication plan must include names and contact information for the E-0030 following: [416.54(c)(1)]; a. Staff. [416.54(c)(1)(i)] E-0030; b. Entities providing services under arrangement. [416.54(c)(1)(ii)] E-0030; c. Patients' physicians. [416.54(c)(1)(iii)] E-0030; d. Volunteers. [416.54(c)(1)(iv)] E-0030 (2) The communication plan must include contact information for the following: E-0031 [416.54(c)(2)]; a. Federal, State, tribal, regional, and local emergency preparedness staff. E-0031 [416.54(c)(2)(i)]; b. Other sources of assistance. [416.54(c)(2)(ii)] E-0031 100 Accreditation Handbook for Medicare Deemed Status, v42 Compliant Compliant",
      },
      {
        heading: "E. The communication plan must also include primary and alternate means for E-0032 communicating with the following: [416.54(c)(3)]",
        content: "Elements of compliance — (1) ASC staff. [416.54(c)(3)(i)] E-0032 (2) Federal, State, tribal, regional, and local emergency management agencies. E-0032 [416.54(c)(3)(ii)] (3) The communication plan must include a method of sharing information and medical E-0033 documentation for patients under the ASC's care, as necessary, with other health care providers to maintain the continuity of care. [416.54(c)(4)] (4) The communication plan must include a means, in the event of an evacuation, to E-0033 release patient information as permitted under 45 CFR 164.510(b)(1)(ii). [416.54(c)(5)] (5) The communication plan must include a means of providing information about the E-0033 general condition and location of patients under the facility's care as permitted under 45 CFR 164.510(b)(4). [416.54(c)(6)] (6) The communication plan must include a means of providing information about the E-0034 ASC's needs, and its ability to provide assistance, to the authority having jurisdiction, the Incident Command Center, or designee. [416.54(c)(7)] Compliant Compliant",
      },
      {
        heading: "F. The ASC must develop and maintain an emergency preparedness training and E-0036 testing program that is based on the emergency plan set forth in paragraph (a) of this section, risk assessment at paragraph (a)(1) of this section, policies and procedures at paragraph (b) of this section, and the communication plan at paragraph (c) of this section. The ASC must do all of the following: [416.54(d)]",
        content: "Elements of compliance — (1) Review and update the training and testing program at least every two years. E-0036 [416.54(d)] (2) Provide initial training in emergency preparedness policies and procedures to all new E-0037 and existing staff, individuals providing onsite services under arrangement, and volunteers, consistent with their expected roles. [416.54(d)(1)(i)] (3) Provide emergency preparedness training at least annually. [416.54(d)(1)(ii)] E-0037 (4) Maintain documentation of all emergency preparedness training. [416.54(d)(1)(iii)] E-0037 (5) Demonstrate staff knowledge of emergency procedures. [416.54(d)(1)(iv)] E-0037 (6) If the emergency preparedness policies and procedures are significantly updated, the E-0037 ASC must conduct training on the updated policies and procedures. [416.54(d)(1)(v)] Compliant Compliant",
      },
      {
        heading: "G. The ASC must conduct exercises to test the emergency plan at least annually. E-0039 [416.54(d)(2)]",
        content: "Elements of compliance — (1) The ASC must do the following: [416.54(d)(2)] E-0039; a. The ASC must participate in an annual full-scale exercise that is community- E-0039 based; or [416.54(d)(2)(i)]; b. When a community-based exercise is not accessible, conduct a facility- E-0039 based functional exercise annually; or [416.54(d)(2)(i)(A)]; c. If the ASC experiences an actual natural or man-made emergency that E-0039 requires activation of the emergency plan, the ASC is exempt from engaging in one community-based or individual, facility-based functional exercise for one year following the onset of the emergency event. [416.54(d)(2)(i)(B)] (2) Conduct an additional annual exercise that may include but is not limited to the E-0039 following: [416.54(d)(2)(ii)]; a. A second full-scale exercise that is community-based, or an individual, E-0039 facility-based functional exercise; or [416.54(d)(2)(ii)(A)]; b. A mock disaster drill; or [416.54(d)(2)(ii)(B)] E-0039; c. A tabletop exercise or workshop that is led by a facilitator and includes a E-0039 group discussion using a narrated, clinically relevant emergency scenario, and a set of problem statements, directed messages, or prepared questions designed to challenge an emergency plan. [416.54(d)(2)(ii)(C)] 102 Accreditation Handbook for Medicare Deemed Status, v42 Compliant Compliant",
      },
      {
        heading: "H. The ASC must analyze its response to and maintain documentation of all drills, E-0039 tabletop exercises, and emergency events and revise the ASC's emergency plan, as needed. [416.54(d)(2)(iii)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 8. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "I. The emergency preparedness plan, policies, and procedures must be reviewed E-0004 and updated at least every two years. [416.54(a)]",
        content: "Elements of compliance — (1) The emergency preparedness policies and procedures must be reviewed and updated at least every two years. (2) The communication plan must be reviewed and updated at least every two years. E-0029 [416.54(c)] (3) The training and testing program must be reviewed and updated at least annually. Compliant Compliant CMS Tag YES NO NA",
      },
      {
        heading: "J. If an ASC is part of a healthcare system consisting of multiple separately E-0042 certified healthcare facilities that elects to have a unified and integrated emergency preparedness program, the ASC may choose to participate in the healthcare system's coordinated emergency preparedness program. If elected, the unified and integrated emergency preparedness program must: [416.54(e)]",
        content: "Elements of compliance — (1) Demonstrate that each separately certified facility within the system actively E-0042 participated in the development of the unified and integrated emergency preparedness program. [416.54(e)(1)] (2) Be developed and maintained in a manner that takes into account each separately E-0042 certified facility's unique circumstances, patient populations, and services offered. [416.54(e)(2)] (3) Demonstrate that each separately certified facility is capable of actively using the E-0042 unified and integrated emergency preparedness program and is in compliance. [416.54(e)(3)] (4) Include a unified and integrated emergency plan that meets the requirements of E-0042 paragraphs (a)(2), (3), and (4) of this section. The unified and integrated emergency plan must also be based on and include the following: [416.54(e)(4)]; a. A documented community-based risk assessment, utilizing an all-hazards E-0042 approach. [416.54(e)(4)(i)]; b. A documented individual facility-based risk assessment for each separately E-0042 certified facility within the health system, utilizing an all-hazards approach. [416.54(e)(4)(ii)] (5) Include integrated policies and procedures that meet the requirements set forth in E-0042 paragraph (b) of this section, a coordinated communication plan and training and testing programs that meet the requirements of paragraphs (c) and (d) of this section, respectively. [416.54(e)(5)] Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply 104 Accreditation Handbook for Medicare Deemed Status, v42 Selective Standards Selective chapters will be applied based on the services provided by the organization seeking accreditation. Selective Standards IN THIS SECTION (6) Anesthesia Care...",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Documentation demonstrates that the facility complies with applicable building — codes and regulations. References / Notes • Examples of such documentation i..." },
      { fact: "Standard B", detail: "The facility is operated in a safe and secure manner. —" },
      { fact: "Standard C", detail: "The physical environment supports patient comfort and privacy. —" },
      { fact: "Standard D", detail: "Facilities are clean and properly maintained. — References / Notes • Elements of “clean and properly maintained” include but are not limited to: Surfaces are..." },
      { fact: "Standard E", detail: "There are no visible hazards that might lead to slipping, falling, electrical — shock, burns, poisoning, or other trauma. Compliant Compliant 94 Accreditatio..." },
      { fact: "Standard F", detail: "The ASC must have a safe and sanitary environment, properly constructed equipped, and maintained to protect the health and safety of patients. [416.44]" },
      { fact: "Standard G", detail: "Except as otherwise provided in this section, the ASC must meet the provisions applicable to Ambulatory Health Care Occupancies, regardless of the number of ..." },
      { fact: "Standard H", detail: "Except as otherwise provided in this section, the ASC must meet the applicable provisions and must proceed in accordance with the 2012 edition of the Health ..." },
      { fact: "Standard I", detail: "Beginning July 5, 2017, an ASC must be in compliance with NFPA 101 Life Safety Code Chapter 21.3.2.1, Doors to hazardous areas. [416.44(b)(6)] Compliant Comp..." },
      { fact: "Standard J", detail: "An ASC may place alcohol-based hand rub dispensers in its facility if the dispensers are installed in a manner that adequately protects against inappropriate..." },
      { fact: "Standard K", detail: "When a sprinkler system is shut down for more than 10 hours, the ASC must implement one of the following procedures. [416.44(b)(5)]" },
      { fact: "Standard L", detail: "Medical equipment is appropriately maintained. —" },
      { fact: "Standard M", detail: "The ASC medical staff and governing body of the ASC coordinates, develops and revises ASC policies and procedures to specify the types of emergency equipment..." },
      { fact: "Standard N", detail: "Scenario-based drills of the internal and external emergency and disaster — preparedness plan are conducted." },
    ],
  },
  {
    levelId: "asc_hb_anesthesia",
    chapterNumber: 9,
    category: "Selective Standards",
    title: "Chapter 9: Anesthesia Care Services",
    overview: "In an accreditable organization, qualified health care professionals provide anesthesia care services in a safe and sanitary environment. Such an organization meets the following Standards. The provisions of this chapter apply to all care involving the administration of sedation and anesthesia in all ambulatory settings. The following definitions are used in determining how the Standards of this chapter are applied based on the level of anesthesia and sedation administered by an organization. Definitions Standards A through G of this chapter apply Regional anesthesia is the application of to all organizations, regardless of level(s) of anesthetic medication around the nerve or nerves anesthesia administered. in a major region of the body, which supply the area that is targeted for the abolition of painful Local or topical anesthesia is the application of neural impulses. No interventions are required to local anesthetic agents, in appropriate doses maintain a patent airway, and spontaneous adjusted for weight. ventilation is adequate. Cardiovascular function is usually maintained. Minimal sedation (anxiolysis) is a drug-induced state during which patients respond normally to Deep sedation/analgesia is a drug-induced verbal commands. Although cognitive function depression of consciousness during which and coordination may be impaired, ventilatory patients cannot be easily aroused but respond and cardiovascular functions are unaffected. purposefully following repeated or painful Inhaled nitrous oxide in low concentrations that stimulation. (Note that reflex withdrawal from a would not reasonably be expected to result in painful stimulus is NOT considered a purposeful loss of the patient’s life-preserving protective response.) The ability to independently maintain refle...",
    sections: [
      {
        heading: "A. Anesthesia services provided by the organization are limited to those — techniques that have been approved by the governing body upon the recommendation of qualified professional personnel. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 9. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "B. The governing body has appointed one or more qualified physicians or — dentists to supervise the anesthesia service. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 9. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "C. Anesthesia is only administered by health care professionals approved by the governing body to administer anesthesia in accordance with AAAHC Standards for credentialing and privileging. [416.42(b)]",
        content: "Elements of compliance — (1) Anesthetics must be administered by only: A qualified anesthesiologist; OR Q-0063 [416.42(b)(1)] (2) Anesthetics must be administered by only: A physician qualified to administer Q-0063 anesthesia, a certified registered nurse anesthetist (CRNA) or an anesthesiologist’s assistant as defined in § 410.69(b) of this chapter, or a supervised trainee in an approved educational program. [416.42(b)(2)] References / Notes • [416.42(c)(1)] An ASC may be exempted from the requirement for physician supervision of CRNAs as described in 42 CFR 416.42 (b)(2), if the State in which the ASC is located submits a letter to CMS signed by the Governor, following consultation with the State’s Boards of Medicine and Nursing, requesting exemption from physician supervision of CRNAs. The letter from the Governor must attest that he or she has consulted with State Boards of Medicine and Nursing about issues related to access to and the quality of anesthesia services in the State and has concluded that it is in the best interests of the State’s citizens to opt-out of the current physician supervision requirement, and that the opt-out is consistent with State law. • [416.46(c)(2)] The request for exemption and recognition of State laws, and the withdrawal of the request may be submitted at any time, and are effective upon submission. • [416.42(b)] [416.42(b)(2)] In those cases in which a non-physician administers the anesthesia, unless exempted in accordance with paragraph (c) of this section, the anesthetist must be under the supervision of the operating physician, and in the case of an anesthesiologist’s assistant, under the supervision of an anesthesiologist. 108 Accreditation Handbook for Medicare Deemed Status, v42 • Note: §410.69(b) Definitions. For purposes ...",
        criticalValues: [{ label: "CMS Tag", value: "Q-0063" }],
      },
      {
        heading: "D. Written policies and procedures for anesthesia services are present. —",
        content: "Elements of compliance — (1) Written policies and procedures address education, training, and supervision of personnel. (2) Written policies and procedures address responsibilities of non-physician anesthetists. (3) Written policies and procedures address responsibilities of supervising physicians and dentists. Compliance Rating: if 3 elements apply Compliant Compliant present present present Compliance Rating: if 2 elements apply Compliant Compliant present present present Compliance Rating: if 1 element applies Compliant Compliant",
      },
      {
        heading: "E. The informed consent of the patient or of the patient’s representative, if — applicable, is obtained before the procedure is performed. References / Notes • One consent form may be used to satisfy the Standard requirements for the anesthesia and surgical consents. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 9. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "F. Resuscitation equipment is available. —",
        content: "Elements of compliance — (1) Oxygen is available. (2) A device such as a self-inflating hand resuscitator bag capable of administering at least 90% oxygen is available. (3) Appropriate emergency drugs, supplies, and equipment are available. (4) A manual defibrillator, or an automated external defibrillator (AED), is available. Compliant Compliant present are present present",
      },
      {
        heading: "G. Immediately before surgery, a physician or anesthetist (as defined at §410.69(b)) on the surgical team must examine the patient to evaluate the risk of anesthesia. [416.42(a)(1)(ii)] References / Notes • A CRNA is defined in §410.69(b) as a “registered nurse who:",
        content: "Elements of compliance — (1) Is licensed as a registered professional nurse by the State in which the nurse practices; (2) Meets any licensure requirements the State imposes with respect to non-physician anesthetists; (3) Has graduated from a nurse anesthesia educational program that meets the standards of the Council on Accreditation of Nurse Anesthesia Programs, or such other accreditation organization as may be designated by the Secretary; and (4) Meets the following criteria:; i. Has passed a certification examination of the Council on Certification of Nurse Anesthetists, the Council on Recertification of Nurse Anesthetists, or any other certification organization that may be designated by the Secretary; or ii. Is a graduate of a program described in paragraph (3) of this definition and within 24 months after that graduation meets the requirements of paragraph (4)(i) of this definition.” 110 Accreditation Handbook for Medicare Deemed Status, v42 • An anesthesiologist’s assistant is defined at §410.69(b) as a “person who- (5) Works under the direction of an anesthesiologist; (6) Is in compliance with all applicable requirements of State law, including any licensure requirements the State imposes on nonphysician anesthetists; and (7) Is a graduate of a medical school-based anesthesiologist’s assistant education program that –; i. Is accredited by the Committee on Allied Health Education and Accreditation; and ii. Includes approximately two years of specialized basic science and clinical education in anesthesia at a level that builds on a premedical undergraduate science background.” Compliant Compliant The following Chapter 9 Standards apply based on anesthesia level provided by the organization: Standards S and T apply to organizations that provide children with a...",
        criticalValues: [{ label: "CMS Tag", value: "Q-0061" }],
      },
      {
        heading: "H. Clinical records reflect the administration of anesthesia.",
        content: "Elements of compliance — (1) Clinical record entries include: [416.47(b)(6)] Q-0162; a. A pre-anesthesia assessment/evaluation. Q-0162; b. A plan for anesthetic administration. Q-0162; c. A chronologic record reflecting the anesthetic administered and the clinical Q-0162 status of the patient.; d. A post-anesthesia assessment/evaluation. Q-0162 (2) Medical discharge criteria were met. (3) Patients are discharged in the company of a responsible adult except those patients exempted by the attending physician. Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0162" }, { label: "CFR Reference", value: "416.47(b)(6)" }],
      },
      {
        heading: "I. Before discharge from the ASC, each patient must be evaluated by a physician or by an anesthetist as defined in Title 42 CFR 410.69(b) of this chapter, in accordance with applicable State health and safety laws, standards of practice, and ASC policy, for proper anesthesia recovery. [416.42(a)(2)] Compliant Compliant CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 9. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0062" }],
      },
      {
        heading: "J. The oxygenation, ventilation, and circulation of the patient is continually — evaluated and documented.",
        content: "Elements of compliance — (1) Continuous intra-operative physiologic monitoring includes:; a. Use of a pulse oximeter.; b. Blood pressure determination at frequent intervals.; c. Electrocardiogram (ECG) monitoring. (2) The presence of exhaled CO2 is monitored during the administration of deep sedation/analgesia. (3) End-tidal CO2 is monitored during the administration of general anesthesia. (4) A means of measuring body temperature is readily available during the administration of general anesthesia. Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present Compliance Rating: if 2 elements apply Compliant Compliant present present present Compliance Rating: if 1 element applies or Standard does not apply Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply 112 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "K. A written policy regarding the assessment and management of acute pain has — been adopted. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply L Patients are observed and monitored in a post-anesthesia care unit, or in an — area that provides equivalent care, by methods appropriate to each patient's medical condition and sedation/analgesia or anesthesia.",
        content: "Elements of compliance — (1) Patients are observed and monitored in a post-anesthesia care unit or in an area that provides equivalent care. (2) Observation methods are appropriate for each patient's medical condition and sedation/analgesia or anesthesia. (3) Appropriate monitoring equipment is present for the level(s) of anesthesia provided. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present are present apply",
      },
      {
        heading: "M. A written policy requires the presence of a physician, dentist, or other — delegated, qualified health care professional supervised by a physician or dentist until the medical discharge of the patient following clinical recovery from the surgery/procedure and anesthesia. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 9. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "N. At least one health care professional with current training in advanced cardiac — life support (ACLS) is present to provide advanced resuscitative techniques until all patients operated on that day have been physically discharged.",
        content: "Elements of compliance — (1) Documentation of current ACLS training is present. (2) Initial ACLS training and subsequent retraining is obtained from the American Heart Association or other vendor that includes \"hands-on\" training and skills demonstration of airway management and automated external defibrillator (AED) use. (3) A policy requires that health care professionals with ACLS training are present until that day's patients have been physically discharged. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present are present apply",
      },
      {
        heading: "O. If anesthetic and resuscitative agents known to trigger malignant hyperthermia — are available in the facility, staff are prepared to respond to an episode of malignant hyperthermia.",
        content: "Elements of compliance — (1) Written treatment protocols based on current, nationally recognized guidelines have been adopted. (2) The protocols include:; a. The administration of dantrolene and other medications.; b. Readily available methods of continuous cooling and temperature monitoring.; c. Initiation of an emergency transfer protocol. (3) The protocols are posted and/or immediately available in each area where triggering agents might be used. (4) Documentation demonstrates that all appropriate staff have been educated and trained in the recognition and treatment of malignant hyperthermia. (5) At least annually, a malignant hyperthermia drill is conducted and documented. References / Notes • An example is the Malignant Hyperthermia Association of the United States (MHAUS) protocol. See https://www.mhaus.org/ Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present present are present are present are present apply 114 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "P. A written policy prohibits the administration of moderate or deep sedation or — general anesthesia unless a physician, dentist, or other qualified individual supervised by a physician or dentist, in addition to the one performing the surgery, is present to monitor the patient.",
        content: "Elements of compliance — (1) A written policy is present. (2) Clinical records demonstrate that the policy is followed. References / Notes • Not all states require physician supervision of CRNAs. The operating physician or dentist may be the supervising physician or dentist. During moderate sedation, the additional individual may assist with minor, interruptible tasks. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply",
      },
      {
        heading: "Q. If anesthesia is provided by other than an anesthesiologist, oral and — maxillofacial surgeon, certified registered nurse anesthetist, or an anesthesiologist assistant within his/her scope of practice, the governing body has granted such personnel privileges to administer sedative, hypnotic, or analgesic drugs that do not have an antagonist medication (for example, propofol), if these drugs are used. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 9. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "R. If anesthesia is provided by other than an anesthesiologist, oral and — maxillofacial surgeon, certified registered nurse anesthetist, or an anesthesiologist assistant within his/her scope of practice, a written protocol defines how the organization will respond in the event that a deeper-than- intended level of sedation occurs. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply Standards S and T apply to organizations that provide children with any level of anesthesia higher than local/topical.",
        content: "This is a Standard-level requirement under Chapter 9. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "S. If pediatric patients are served, health care professionals with current training — in pediatric advanced life support (PALS) and age- and size-appropriate resuscitative equipment are available at all times until pediatric patients operated on that day have been physically discharged.",
        content: "Elements of compliance — (1) Documentation of current PALS training and certification is present. (2) Initial PALS training and subsequent retraining is obtained from the American Heart Association or another vendor that includes \"hands-on\" training and skills demonstration of airway management and automated external defibrillator (AED) use. (3) Documentation of training in age- and size-appropriate resuscitative equipment is present. (4) A policy requires that health care professionals with training in PALS and pediatric resuscitative equipment are present until that day's patients have been physically discharged. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present elements are are present apply",
      },
      {
        heading: "T. If pediatric patients are served, the equipment, medication, and resuscitative — capabilities required for pediatric patients are present.",
        content: "Elements of compliance — (1) Age- and size-appropriate anesthesia equipment is present. (2) Medications in appropriate concentrations are present. (3) Age- and size-appropriate resuscitative equipment is present. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present are present apply 116 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 10",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Anesthesia services provided by the organization are limited to those — techniques that have been approved by the governing body upon the recommendation of q..." },
      { fact: "Standard B", detail: "The governing body has appointed one or more qualified physicians or — dentists to supervise the anesthesia service. Compliant Compliant" },
      { fact: "Standard C", detail: "Anesthesia is only administered by health care professionals approved by the governing body to administer anesthesia in accordance with AAAHC Standards for c..." },
      { fact: "Standard D", detail: "Written policies and procedures for anesthesia services are present. —" },
      { fact: "Standard E", detail: "The informed consent of the patient or of the patient’s representative, if — applicable, is obtained before the procedure is performed. References / Notes • ..." },
      { fact: "Standard F", detail: "Resuscitation equipment is available. —" },
      { fact: "Standard G", detail: "Immediately before surgery, a physician or anesthetist (as defined at §410.69(b)) on the surgical team must examine the patient to evaluate the risk of anest..." },
      { fact: "Standard H", detail: "Clinical records reflect the administration of anesthesia." },
      { fact: "Standard I", detail: "Before discharge from the ASC, each patient must be evaluated by a physician or by an anesthetist as defined in Title 42 CFR 410.69(b) of this chapter, in ac..." },
      { fact: "Standard J", detail: "The oxygenation, ventilation, and circulation of the patient is continually — evaluated and documented." },
      { fact: "Standard K", detail: "A written policy regarding the assessment and management of acute pain has — been adopted. Fully Substantially Partially Minimally Non- Not Applicable Compli..." },
      { fact: "Standard M", detail: "A written policy requires the presence of a physician, dentist, or other — delegated, qualified health care professional supervised by a physician or dentist..." },
      { fact: "Standard N", detail: "At least one health care professional with current training in advanced cardiac — life support (ACLS) is present to provide advanced resuscitative techniques..." },
      { fact: "Standard O", detail: "If anesthetic and resuscitative agents known to trigger malignant hyperthermia — are available in the facility, staff are prepared to respond to an episode o..." },
    ],
  },
  {
    levelId: "asc_hb_surgical_services",
    chapterNumber: 10,
    category: "Selective Standards",
    title: "Chapter 10: Surgical and Related Services",
    overview: "Surgical and related services in an accreditable organization are performed in a safe and sanitary environment by qualified health care professionals to whom the governing body has granted privileges to perform procedures. The Standards in this chapter apply to organizations that perform any invasive procedures, such as pain management, endoscopy procedures, cardiac catheterization, lithotripsy, and in- vitro fertilization, as well as surgery. In this chapter and throughout this Handbook, the terms “surgery,” “procedure,” and “operation” are used interchangeably. The use of any of these terms is to reference any such skill, method, or technique that involves cutting, abrading, suturing, lasering, or otherwise physically entering or changing body tissues and organs, including invasive pain management procedures. Note: Some Standards may not apply to organizations that only perform minor, superficial procedures without anesthesia or under local or topical anesthesia. Subchapter I – General Requirements: This subchapter describes general requirements for an organization that provides surgical and related services.",
    sections: [
      {
        heading: "A. Surgical procedures must be performed in a safe manner by qualified physicians who have been granted clinical privileges by the governing body of the ASC in accordance with approved policies and procedures of the ASC. [416.42] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0060" }],
      },
      {
        heading: "B. Surgical procedures performed are limited to those approved by the governing — body upon the recommendation of qualified medical staff. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "C. The governing body has appointed one or more qualified physicians, dentists, — or other qualified practitioners to supervise surgical services. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "D. The organization must develop and maintain a policy regarding the requirement for medical history and physical examination prior to surgery. [416.52(a)(1)]",
        content: "Elements of compliance — (1) The written policy must include the requirement and timeframe for completion of a Q-0261 medical history and physical examination prior to surgery. [416.52(a)(1)(i)] (2) The policy must address, but is not limited to, the following factors: patient age, Q-0261 diagnosis, the type and number of procedures scheduled to be performed on the same surgery date, known comorbidities, and the planned anesthesia level. [416.52(a)(1)(ii)] (3) The policy must be based on any applicable nationally recognized standards of Q-0261 practice and guidelines, and any applicable state and local health and safety laws. [416.52(a)(1)(iii)] Compliant Compliant 118 Accreditation Handbook for Medicare Deemed Status, v42 CMS YES NO Tag",
        criticalValues: [{ label: "CMS Tag", value: "Q-0261" }],
      },
      {
        heading: "E. The ASC must ensure each patient has the appropriate pre-surgical and post- surgical assessments completed and that all elements of the discharge requirements are completed. [416.52]",
        content: "Elements of compliance — (1) Upon admission, each patient must have a pre-surgical assessment completed by a Q-0262 physician who will be performing the procedure or other qualified practitioner in accordance with applicable State health and safety laws, standards of practice, and ASC policy. [416.52(a)(2)] (2) The pre-surgical assessment must include documentation of any allergies to drugs Q-0262 and biologicals. [416.52(a)(3)] (3) The patient’s medical history and physical assessment must be placed in the Q-0263 patient’s medical record prior to the surgical procedure. [416.52(a)(4)] Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0260" }],
      },
      {
        heading: "F. Informed consent for the proposed procedure is obtained. —",
        content: "Elements of compliance — (1) Documentation is present to demonstrate that the following have been discussed with the patient:; a. The necessity or appropriateness of the proposed procedure or surgery.; b. Alternative treatment techniques. (2) The clinical record demonstrates that the patient's written consent, or that of the patient's representative, was obtained before the surgery or procedure was performed. Compliant Compliant present present present",
      },
      {
        heading: "G. Immediately before surgery, a physician on the surgical team must examine the patient to evaluate the risk of the procedure to be performed. [416.42(a)(1)(i)] Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0061" }],
      },
      {
        heading: "H. A written policy requires that, whenever patients are present in the facility, at — least one physician, dentist, or other practitioner qualified to address medical emergencies and authorized by the governing body is present or immediately available by telephone. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "I. The organization has written policies regarding the procedures and treatments — offered to patients.",
        content: "Elements of compliance — (1) The written policies address the criteria for patient selection. (2) The written policies address the need for anesthesia support. (3) The written policies address post-procedural care. (4) The written policies address staffing requirements to ensure that registered nurse(s) or other health care professionals assisting in the provision of surgical services are available in sufficient numbers for the surgical care provided. Compliant Compliant present are present present 120 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "J. If procedures performed pose the risk that blood loss may require blood — replacement, the organization has written policies and procedures to address this situation. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "K. If applicable, protocols for the handling, maintenance, and storage of blood or — blood products for transfusion, and/or human cells or tissues for transplantation, are present.",
        content: "Elements of compliance — (1) Written protocols for handling, maintaining and storing blood or blood products for transfusion are present. (2) Written protocols for handling, maintaining and storing human cells for transplantation are present. (3) The written protocols are consistent with those of a nationally recognized authority, such as the American Association of Tissue Banks (AATB) or the U.S. Food and Drug Administration (FDA). Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present are present apply",
      },
      {
        heading: "L. A written policy is in place for assessing the risk of, and implementing — practices to prevent, deep vein thrombosis when appropriate for the patient. References / Notes • May not apply depending on services provided by the organization. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "M. If pediatric patients are served, written policies define appropriate care. —",
        content: "Elements of compliance — (1) Policies address criteria for treatment as a pediatric patient. (2) Policies address requirements for the appropriate pediatric:; a. Equipment.; b. Supplies.; c. Medications. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply",
      },
      {
        heading: "N. Attire contaminated with blood or body fluid is laundered by an approved — laundry.",
        content: "Elements of compliance — (1) The laundry adheres to nationally recognized guidelines. (2) The laundry has been approved by the organization. Compliant Compliant present present present 122 Accreditation Handbook for Medicare Deemed Status, v42 CMS Tag YES NO NA",
      },
      {
        heading: "O. The surgical environment contains safeguards to protect patients and others — from cross-infection.",
        content: "Elements of compliance — (1) Written policies define the proper attire of all persons entering operating or procedure rooms. 2 Written policies address acceptable aseptic techniques to be used by all persons in the surgical area. (2) Written policies address the removal or covering of patient clothing prior to the patient's entry into a surgical area, as needed to minimize the potential contamination of the surgical environment and surgical staff. (3) Written policies require freshly laundered attire to be donned in an area inside of the organization prior to entry into areas designated as restricted. (4) Written policies address appropriate and timely surgical hand antisepsis (scrub) using either an antimicrobial soap or an alcohol-based hand rub according to product manufacturer's recommended guidelines. (5) Written policies address pre-procedure site antisepsis, as appropriate to service(s) provided and patient requirements and needs. (6) Environmental controls adopted by the organization for temperature, humidity and air pressure following nationally recognized guidelines. References / Notes • Elements 3-7 may be NA if only non-sterile procedures are conducted (e.g., endoscopy). Compliance Rating: if 7 elements apply Compliant Compliant present present are present are present present Compliance Rating: if 2 elements apply Compliant Compliant present present present",
      },
      {
        heading: "P. If procedures requiring counts of sponges, sharps, and instruments are — performed, a written policy, based on nationally recognized guidelines for conducting counts is present.",
        content: "Elements of compliance — (1) The policy addresses the types of procedures requiring counts of sponges, sharps, and instruments. (2) The policy requires a count before the start of the procedure and before skin closure. (3) The policy addresses how start and end counts are reported to the surgeon. (4) The policy requires documentation of the counts in the patient's record. (5) The policy includes actions to be taken if the count is not correct. (6) Observation and interviews confirm that the policy is followed. References / Notes • An example of nationally recognized guidelines includes the World Health Organization (WHO) Surgical Safety Checklist. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present present elements are are present are present apply",
      },
      {
        heading: "Q. Prior to the surgery or procedure, the intended procedure is verified. —",
        content: "Elements of compliance — (1) A written verification policy based on nationally recognized guidelines is present. (2) The patient or their authorized representative is involved in the verification process. (3) Clinical records contain documentation of procedure verification. References / Notes • An example of nationally recognized guidelines includes the World Health Organization (WHO) Surgical Safety Checklist. Compliant Compliant present present present 124 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "R. Prior to a surgery or procedure involving level or laterality, the site is marked. —",
        content: "Elements of compliance — (1) A written site marking policy is present. (2) The policy includes the organization’s definition of “surgical team.” (3) The patient or their authorized representative is involved in the site marking process prior to the administration of anesthesia. (4) The site is marked by the person performing the procedure, or by their designated member of the surgical team who will be present during the time-out. (5) Clinical records contain documentation of site marking. References / Notes • Standard does not apply if no procedures involving level or laterality are performed. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present present are present are present are present apply",
      },
      {
        heading: "S. A time-out is conducted immediately prior to beginning a procedure. —",
        content: "Elements of compliance — (1) The provider performing the procedure assumes responsibility for the time-out. (2) The entire team is engaged in the time-out. (3) During the time-out, the following items are verified:; a. Patient identification.; b. Intended procedure.; c. Correct surgical/procedural site.; d. All equipment necessary for performing the scheduled procedure is immediately available and functional in the operating/procedure room.; e. Any implantable devices intended for use during the procedure were prepared before the procedure and are available. Compliant Compliant present present present CMS Tag YES NO NA",
      },
      {
        heading: "T. The findings and techniques of a procedure are accurately and completely — documented immediately after the procedure.",
        content: "Elements of compliance — (1) The health care professional who performed the procedure documents the findings and techniques. (2) The documentation is immediately available for patient care. (3) The documentation is incorporated into the patient's clinical record. (4) When pre-operative antibiotics are ordered, the antibiotic and time of administration are documented in the patient's clinical record. (5) If tissues are removed during surgery:; a. A pathologist examines the tissues, except for those exempted in writing by the governing body after medical review.; b. The signed report of the pathologist is incorporated into the patient's clinical record. Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present 126 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "U. Written guidelines for the transition of care from one provider to another are — present.",
        content: "Elements of compliance — (1) The guidelines address information to be transferred about a patient's care including, at minimum:; a. Treatment/services.; b. Current condition.; c. Any recent or anticipated changes. (2) The guidelines address how the information will be communicated among members of the health care team. Compliant Compliant present present present",
      },
      {
        heading: "V. The patient’s post-surgical condition must be assessed and documented in the medical record by a physician, other qualified practitioner, or a registered nurse with, at a minimum, post-operative care experience in accordance with applicable State health and safety laws, standards of practice, and ASC policy. [416.52(b)(1)] References / Notes • Other qualified health care professionals are qualified by virtue of education, experience, competence, professional licensure, and state laws, rules, and regulations. Other health care professionals must be approved for the administration of anesthesia by the governing body in alignment with the AAAHC Standards for credentialing and privileging. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0264" }],
      },
      {
        heading: "W. The ASC must provide each patient with written discharge instructions and overnight supplies. When appropriate, make a follow-up appointment with the physician, and ensure that all patients are informed, either in advance of their surgical procedure or prior to leaving the ASC, of their prescriptions, post- operative instructions and physician contact information for follow-up care. [416.52(c)(1)]",
        content: "Elements of compliance — (1) Post-surgical needs must be addressed and included in the discharge notes. Q-0264 [416.52(b)(2)] (2) The ASC must ensure each patient has a discharge order, signed by the physician Q-0266 who performed the surgery or procedure in accordance with applicable State health and safety laws, standards of practice, and ASC policy. [416.52(c)(2)] (3) The ASC must ensure all patients are discharged in the company of a responsible Q-0267 adult, except those patients exempted by the attending physician. [416.52(c)(3)] Compliant Compliant Subchapter II — Laser, Light-Based Technologies, and Other Energy-Emitting Equipment: This subchapter addresses surgery or procedures that involve lasers, light-based technologies, or other energy-emitting equipment.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0265" }],
      },
      {
        heading: "A. The governing body has granted each provider privileges for each energy- — emitting device that he or she uses. Compliant Compliant 128 Accreditation Handbook for Medicare Deemed Status, v42",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "B. Written policies and procedures for each device are present. —",
        content: "Elements of compliance — (1) The policies and procedures include a list of each type of laser used in the facility. (2) The policies and procedures require a laser safety program.; a. The program is supervised by an individual delegated the responsibility and authority to serve as Medical Laser Safety Officer (MLSO).; b. The MLSO has the requisite education and training applicable to each type of laser used in the facility, including knowledge of laser-specific information (e.g., wave lengths, pulse shapes, modes, power/energy classification, controlled areas).; c. The policies and procedures require that laser operators have no competing responsibilities that would leave the laser unattended during active use. (3) The policies and procedures include a requirement for all personnel working with these devices to be adequately trained in the safety and use of each type of device used. (4) The policies and procedures require safe practices to be followed.; a. All procedures are performed in accordance with the device manufacturer's guidelines.; b. All procedures are performed consistent with the current version of the ANSI Standard for Safe Use of Lasers in Health Care Facilities. Compliant Compliant present are present present CMS Tag YES NO NA",
      },
      {
        heading: "C. Safety measures for the laser(s) used are in place. —",
        content: "Elements of compliance — (1) Safety measures include the use of door and window coverings, where appropriate. (2) Safety measures include prominently displayed warning signs at the entrance to treatment areas during procedures, specific to the type of laser in use. (3) Safety measures include a requirement for personnel in treatment areas to use protective eyewear as recommended by the device manufacturer. (4) Safety measures include the use of smoke evacuators and other devices to control tissue debris. (5) Safety measures include the use of high filtration masks and/or wall suction with filters to minimize laser plume inhalation, when appropriate. (6) Safety measures include appropriate disinfection or sterilization of components that have direct patient contact. (7) Safety measures include inspection and testing of the devices according to the manufacturer's instructions, as documented by maintenance logs. Compliance Rating: if 7 elements apply Compliant Compliant present present are present are present present Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present CMS Tag YES NO NA",
      },
      {
        heading: "D. Fire protection measures for lasers are in place. —",
        content: "Elements of compliance — (1) Fire protection measures include the immediate availability of electrical-rated fire extinguishers for equipment fires. (2) Fire protection measures include the maintenance of a wet environment around the operative field. (3) Fire protection measures include the immediate availability of an open container of saline or water where ignition of flammable materials is possible. (4) Fire protection measures include the adoption of nationally recognized safety guidelines for the use of laser equipment. (5) Fire protection measures include the use of noncombustible materials, supplies, and solutions as appropriate. (6) Fire protection measures include procedures for ensuring that nothing is in front of the laser other than the tissue being lasered. Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present 130 Accreditation Handbook for Medicare Deemed Status, v42 Compliance Rating: if 4 elements apply Compliant Compliant present are present present",
      },
      {
        heading: "E. Safeguards are in place to ensure patient safety when lasers are used. —",
        content: "Elements of compliance — (1) Patient safety measures include protection of the patient's eyes, skin, hair, and other exposed areas. (2) Patient safety measures include the use of non-reflective surgical instruments and supplies, when available. (3) Patient safety measures include educating patients regarding procedure risks and potential complications, as documented by the informed consent. Compliant Compliant present present present Subchapter III — Renal Lithotripsy Services: Renal lithotripsy services provided by the organization meet the needs of the patients and are provided in accordance with ethical and professional practices as well as legal requirements.",
      },
      {
        heading: "A. The governing body has designated one or more qualified urologists to — oversee lithotripsy services. Compliant Compliant CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 10. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "B. Allied health care personnel assisting in the provision of lithotripsy services — are appropriately qualified and trained.",
        content: "Elements of compliance — (1) If the allied health care personnel are organization staff members:; a. All such personnel meet state and federal licensure requirements for the operation of radiation equipment.; b. Documentation of staff education, including orientation to equipment, is present. (2) If outside providers of lithotripsy services are used, the vendor provides the accredited organization with documentation of the following for its personnel providing services:; a. Appropriate training and licensure.; b. Ongoing education.; c. Annual competency evaluation. Compliance Rating: if 2 elements apply Compliant Compliant present present present Compliance Rating: if 1 element applies Compliant Compliant",
      },
      {
        heading: "C. Equipment, adequate supplies, and written policies and procedures for — providing appropriate lithotripsy treatment are present.",
        content: "Elements of compliance — (1) Observation and interviews confirm that the following are adequate to provide treatment in accordance with manufacturer's guidelines:; a. Equipment.; b. Supplies. (2) The written guidelines address the following in accordance with manufacturer's instructions:; a. Indications.; b. Contraindications.; c. Maximum power setting.; d. Maximum number of shocks.; e. Position of patient.; f. Patient size and weight.; g. Utilization of equipment. 132 Accreditation Handbook for Medicare Deemed Status, v42 Compliant Compliant present present present",
      },
      {
        heading: "D. Written policies for the provision of lithotripsy services are present. —",
        content: "Elements of compliance — (1) Policies include a recognized methodology for diagnosis and treatment, including pre-procedure evaluation (lab work, x-rays, etc.). (2) Policies include the requirement that a provider shall perform the treatment and be present during treatment. (3) Policies include criteria for patient selection. (4) Policies include the administration of anesthesia/medication. (5) Policies address the correction of medication-related and other medical conditions contributing to coagulopathy and the relationship to lithotripsy. (6) Policies address pre- and post-procedure teaching. References / Notes • A wide choice of anesthetic methods is available and appropriate. Successful lithotripsy requires the appropriate administration of anesthesia/medication for patient comfort and compliance. A patient’s health, habits, and history must be such that he/she can safely undergo anesthesia/analgesia for lithotripsy. Compliant Compliant present present are present present present CMS Tag YES NO NA",
      },
      {
        heading: "E. Written policies addressing the safety aspects of lithotripsy treatment are — present.",
        content: "Elements of compliance — (1) The policies require daily logging of lithotripter calibration/equipment checks on days when lithotripsy is provided. (2) The policies require preventive maintenance logs. (3) The policies require maintenance records, including current documentation from the service contract provider that any malfunctions have been corrected. (4) If outside providers of lithotripsy services are used, the policies require that equipment maintenance records are available to the accredited organization when the equipment is onsite. (5) The policies require documentation from contracted vendors performing equipment calibration and preventive maintenance that work has been completed according to the contract. Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present 134 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "F. Clinical records include entries specific to lithotripsy services provided. —",
        content: "Elements of compliance — (1) Clinical record entries include a history and physical indicating presence, location, and size of kidney stone. (2) Clinical record entries include documentation of the patient's symptoms. (3) Clinical record entries include method of determining location. (4) Clinical record entries include confirmation of presence of stone immediately prior to treatment. (5) Clinical record entries include the operative treatment record:; a. Selection of treatment modality.; b. Number of shocks.; c. Energy level.; d. Radiation exposure time. References / Notes • These entries must be present, in addition to the requirements of the Clinical Records Standards. Compliant Compliant present present present present present 136 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 11",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Surgical procedures must be performed in a safe manner by qualified physicians who have been granted clinical privileges by the governing body of the ASC in ..." },
      { fact: "Standard B", detail: "Surgical procedures performed are limited to those approved by the governing — body upon the recommendation of qualified medical staff. Compliant Compliant" },
      { fact: "Standard C", detail: "The governing body has appointed one or more qualified physicians, dentists, — or other qualified practitioners to supervise surgical services. Fully Substan..." },
      { fact: "Standard D", detail: "The organization must develop and maintain a policy regarding the requirement for medical history and physical examination prior to surgery. [416.52(a)(1)]" },
      { fact: "Standard E", detail: "The ASC must ensure each patient has the appropriate pre-surgical and post- surgical assessments completed and that all elements of the discharge requirement..." },
      { fact: "Standard F", detail: "Informed consent for the proposed procedure is obtained. —" },
      { fact: "Standard G", detail: "Immediately before surgery, a physician on the surgical team must examine the patient to evaluate the risk of the procedure to be performed. [416.42(a)(1)(i)..." },
      { fact: "Standard H", detail: "A written policy requires that, whenever patients are present in the facility, at — least one physician, dentist, or other practitioner qualified to address ..." },
      { fact: "Standard I", detail: "The organization has written policies regarding the procedures and treatments — offered to patients." },
      { fact: "Standard J", detail: "If procedures performed pose the risk that blood loss may require blood — replacement, the organization has written policies and procedures to address this s..." },
      { fact: "Standard K", detail: "If applicable, protocols for the handling, maintenance, and storage of blood or — blood products for transfusion, and/or human cells or tissues for transplan..." },
      { fact: "Standard L", detail: "A written policy is in place for assessing the risk of, and implementing — practices to prevent, deep vein thrombosis when appropriate for the patient. Refer..." },
      { fact: "Standard M", detail: "If pediatric patients are served, written policies define appropriate care. —" },
      { fact: "Standard N", detail: "Attire contaminated with blood or body fluid is laundered by an approved — laundry." },
    ],
  },
  {
    levelId: "asc_hb_pharmaceutical",
    chapterNumber: 11,
    category: "Selective Standards",
    title: "Chapter 11: Pharmaceutical Services",
    overview: "Pharmaceutical services provided by an accreditable organization meet the needs of the patients and are provided in accordance with ethical and professional practices and legal requirements. Note: This chapter applies to any organization that uses drugs or pharmaceutical medical supplies, regardless of the presence or absence of an onsite pharmacy.",
    sections: [
      {
        heading: "A. Pharmaceutical services are directed by a qualified licensed provider. — Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 11. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "B. If the organization owns or operates a pharmacy, it is supervised by a licensed — pharmacist. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 11. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "C. Documentation is present to demonstrate that patients are not required to use — a pharmacy owned or operated by the organization. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 11. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "D. Pharmaceutical services are provided in accordance with standards of care — and prevailing laws and regulations.",
        content: "Elements of compliance — (1) If state licensure is required, a current license is posted. (2) When controlled substances are present, current DEA certification is maintained onsite and readily retrievable by authorized personnel. (3) Through interviews, staff demonstrates knowledge of prevailing pharmaceutical laws and regulations. (4) Direct access to current drug information and other decision support resources is available to all relevant staff. Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present Compliance Rating: if 2 elements apply Compliant Compliant present present present",
      },
      {
        heading: "E. The ASC must provide drugs and biologicals in a safe and effective manner, in accordance with accepted professional practice, and under the direction of an individual designated responsible for pharmaceutical services. [416.48] Compliant Compliant 138 Accreditation Handbook for Medicare Deemed Status, v42",
        content: "This is a Standard-level requirement under Chapter 11. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0180" }],
      },
      {
        heading: "F. Drugs must be prepared and administered according to established policies and acceptable standards of practice. [416.48(a)]",
        content: "Elements of compliance — (1) Adverse reactions must be reported to the physician responsible for the patient and Q-0182 must be documented in the record. [416.48(a)(1)] (2) Blood and blood products must be administered only by physicians or registered Q-0183 nurses. [416.48(a)(2)] (3) Orders given orally for drugs and biologicals must be followed by a written order and Q-0184 signed by the prescribing physician. [416.48(a)(3)] Compliant Compliant",
        criticalValues: [{ label: "CMS Tag", value: "Q-0181" }],
      },
      {
        heading: "G. Pharmaceutical services made available through a contractual agreement are — provided in accordance with the same professional practices and legal requirements required if such services were provided directly by the organization.",
        content: "Elements of compliance — (1) A current contract is in place. (2) Documentation is present demonstrating that the pharmacy contractor is appropriately licensed and/or certified. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply",
      },
      {
        heading: "H. The medication inventory is monitored to track the presence or absence of — high-alert medications and medications with confused drug names.",
        content: "Elements of compliance — (1) A written policy describes the monitoring process and responsibility(ies) for its implementation. (2) Documentation demonstrates that relevant staff have been trained on the policy. (3) Monitoring activities are documented. Compliant Compliant present present present",
      },
      {
        heading: "I. Procedures are in place to prevent errors from high-alert medications. —",
        content: "Elements of compliance — (1) A list of high-alert medications currently present in the facility is maintained. (2) Processes are in place to prevent errors from administration of these medications, in accordance with nationally recognized guidelines. References / Notes • For a list of high-alert medications, see https://www.ismp.org/sites/default/files/attachments/2017- 11/highAlert-community.pdf Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply",
      },
      {
        heading: "J. Procedures are in place to prevent errors from medications with confused drug — names.",
        content: "Elements of compliance — (1) A list of medications with confused drug names currently present in the facility is present. (2) Processes are in place to prevent errors from administration of these medications, in accordance with nationally recognized guidelines. References / Notes • “Confused drug names” refers to drugs that were previously called \"look-alike, sound-alike\" medications. For a list of such drugs, see https://www.ismp.org/recommendations/confused-drug-names-list Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply 140 Accreditation Handbook for Medicare Deemed Status, v42 CMS Tag YES NO NA",
      },
      {
        heading: "K. Drug storage and security, including recordkeeping, are maintained to ensure — the control and safe dispensing of drugs (including samples), to minimize medication errors, and to prevent diversion in compliance with prevailing laws and regulations.",
        content: "Elements of compliance — (1) Procedures are in place to ensure that prescription pads, if used, are controlled and secured from unauthorized access. (2) Pre-signed and/or post-dated prescriptions are prohibited by written policy. (3) Procedures are in place to ensure that electronic prescribing systems, if used, are controlled and secured from unauthorized access. (4) Medications are segregated into organized, labeled storage areas designed to minimize drug selection errors. (5) If a high-alert medication is present for which there is an antidote, rescue, or reversal agent, the agent is stocked in the same area as the medication along with appropriate directions for use. (6) Medications are stored and managed in accordance with manufacturer requirements, and state and/or CDC guidelines. Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present",
      },
      {
        heading: "L. Interviews with staff, and/or observations of patient interaction, confirm that — patients are provided with information concerning the safe and effective use of medications consistent with legal requirements and patient needs. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 11. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "M. If not administered immediately, all medications (injectable, oral, etc.) removed — from the original container or packaging are labeled in a standard format in accordance with law, regulation and standards of practice.",
        content: "Elements of compliance — (1) A written policy addresses the labeling of such medications. (2) At minimum, the policy requires that labels include:; a. Drug name(s).; b. Drug strength(s).; c. Amount(s) or volume(s) if not apparent from the container or packaging.; d. Expiration date and time.; e. Name or initials of person transferring the drug(s). References / Notes • Immediate administration is when the person who prepares or transfers the drug(s) in a new container completely administers (or directly witnesses the administration of the drug(s) to the patient without any break in the process, and administers some amount of the medication within 1 hour of preparation or transfer. • “Original container or packaging” includes syringes, basins, bottles, bags, etc. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply 142 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "N. A written policy is present addressing the disposal or return of expired, — damaged, and recalled medications in accordance with prevailing laws and regulations and accepted guidelines.",
        content: "Elements of compliance — (1) A written policy is present. (2) The policy includes the monitoring of all medications, including vaccines and samples, for expiration dates on a regular basis. (3) The policy includes expired, damaged and recalled drugs to be removed are segregated from drugs available for active use. (4) The policy includes such drugs are disposed of or returned in a safe manner that prevents unauthorized access and diversion. Compliant Compliant present are present present",
      },
      {
        heading: "O. Procedures are in place for the maintenance, cleaning, distribution, and use of — devices such as nebulizer units, intravenous infusion pumps, or other mechanical device used in the medication delivery process.",
        content: "Elements of compliance — (1) Procedures adhere to manufacturers' instructions. (2) Documentation is present to demonstrate that relevant staff has been trained in the procedures. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply",
      },
      {
        heading: "P. Nationally recognized guidelines for vaccine storage and handling are — followed.",
        content: "Elements of compliance — (1) Nationally recognized guidelines have been adopted by the governing body. (2) Written policies and procedures are present for routine storage and handling. (3) Written policies and procedures are present for storage, handling and transport in case of emergency (e.g., equipment failure, power outage, natural disasters). (4) Documentation demonstrates that staff who receive, handle and/or administer vaccines have been trained on the policies and procedures. (5) The vaccine storage unit is equipped with a temperature monitoring device in accordance with the adopted guidelines. (6) Staff demonstrate knowledge of procedures to follow if vaccines are exposed to a temperature excursion. References / Notes • For an example, see www.cdc.gov/vaccines/hcp/admin/storage/toolkit/storage-handling-toolkit.pdf. This Standard applies to all organizations that store and handle vaccines for administration to patients and/or staff. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present present elements are are present are present apply 144 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 12",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Pharmaceutical services are directed by a qualified licensed provider. — Compliant Compliant" },
      { fact: "Standard B", detail: "If the organization owns or operates a pharmacy, it is supervised by a licensed — pharmacist. Fully Substantially Partially Minimally Non- Not Applicable Com..." },
      { fact: "Standard C", detail: "Documentation is present to demonstrate that patients are not required to use — a pharmacy owned or operated by the organization. Fully Substantially Partial..." },
      { fact: "Standard D", detail: "Pharmaceutical services are provided in accordance with standards of care — and prevailing laws and regulations." },
      { fact: "Standard E", detail: "The ASC must provide drugs and biologicals in a safe and effective manner, in accordance with accepted professional practice, and under the direction of an i..." },
      { fact: "Standard F", detail: "Drugs must be prepared and administered according to established policies and acceptable standards of practice. [416.48(a)]" },
      { fact: "Standard G", detail: "Pharmaceutical services made available through a contractual agreement are — provided in accordance with the same professional practices and legal requiremen..." },
      { fact: "Standard H", detail: "The medication inventory is monitored to track the presence or absence of — high-alert medications and medications with confused drug names." },
      { fact: "Standard I", detail: "Procedures are in place to prevent errors from high-alert medications. —" },
      { fact: "Standard J", detail: "Procedures are in place to prevent errors from medications with confused drug — names." },
      { fact: "Standard K", detail: "Drug storage and security, including recordkeeping, are maintained to ensure — the control and safe dispensing of drugs (including samples), to minimize medi..." },
      { fact: "Standard L", detail: "Interviews with staff, and/or observations of patient interaction, confirm that — patients are provided with information concerning the safe and effective us..." },
      { fact: "Standard M", detail: "If not administered immediately, all medications (injectable, oral, etc.) removed — from the original container or packaging are labeled in a standard format..." },
      { fact: "Standard N", detail: "A written policy is present addressing the disposal or return of expired, — damaged, and recalled medications in accordance with prevailing laws and regulati..." },
    ],
  },
  {
    levelId: "asc_hb_pathology",
    chapterNumber: 12,
    category: "Selective Standards",
    title: "Chapter 12: Pathology and Medical Laboratory Services",
    overview: "Laboratory services provided by an accreditable organization meet the needs of the patients and are provided in accordance with ethical and professional practices and legal requirements. Such an organization has the following characteristics. This chapter apples to ASCs providing services that meet the Clinical Laboratory improvement Amendments (CLIA) of 1988.",
    sections: [
      {
        heading: "A. Condition for Coverage - Laboratory and radiologic services. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0200" }, { label: "CFR Reference", value: "416.49" }],
      },
      {
        heading: "B. If the ASC performs laboratory services, it must meet the requirements of Title 42 CFR Part 493. [416.49(a)] Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0201" }],
      },
      {
        heading: "C. If the ASC does not provide its own laboratory services, it must have procedures for obtaining routine and emergency laboratory services from a certified laboratory in accordance with Title 42 CFR Part 493. The referral laboratory must be certified in the appropriate specialties and subspecialties of service to perform the referred tests in accordance with the requirements of Title 42 CFR Part 493. [416.49(a)] Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0201" }],
      },
      {
        heading: "D. As appropriate for the laboratory services performed, a current CLIA Certificate of Waiver, and/or a current Certificate for Provider Performed Microscopy Procedures (PPMP), and/or a current Certificate of Registration, Compliance or Accreditation is present. [416.49(a)] References / Notes • Standard does not apply if the State licensure or certification program is exempt from CLIA program requirements. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0201" }],
      },
      {
        heading: "E. If the organization has obtained a CLIA Certificate for Provider Performed — Microscopy Procedures, or a CLIA Certificate of Registration, Compliance or Accreditation, services are provided under the direction of a pathologist, other physician, or other qualified individual as delineated under CLIA. References / Notes • Standard does not apply if the State licensure or certification program is exempt from CLIA program requirements. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "F. A current state medical laboratory license or certificate appropriate for the — level of testing performed is present. References / Notes • Standard applies if State licensure program is exempt from CLIA program requirements, or if State and CLIA certification are both required. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply 146 Accreditation Handbook for Medicare Deemed Status, v42",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "G. Provider-performed microscopy, moderate complexity testing and high — complexity testing are provided under the direction of a pathologist, other physician, or other qualified individual as specified by the state for the level of testing performed. References /Notes • Standard applies if these services are provided and State licensure program is exempt from CLIA program requirements, or if State and CLIA certification are both required. Standard does not apply if these services are not provided. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "H. If the organization has obtained a CLIA Certificate of Waiver or a state license — or certificate to perform waived testing, services are provided under the direction of an individual holding the qualifications required by the state, if any, for this position. If the state does not have qualification requirements, services are provided under the direction of a person holding the qualifications required by the organization for this position. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "I. Laboratory services are conducted by qualified personnel. —",
        content: "Elements of compliance — (1) Staff members with laboratory responsibilities are appropriately trained for their roles, as demonstrated by documented competency tests. (2) Observation and interviews confirm that a sufficient number of trained and experienced personnel are available to supervise and conduct the work of the laboratory. Compliant Compliant present present present",
      },
      {
        heading: "J. Pathology and medical laboratory services provided adequately support the — organization's clinical capabilities.",
        content: "Elements of compliance — (1) Tests are performed in a timely manner, as defined by the organization's policies. (2) Test results are made available to the ordering provider. (3) Test results are documented in the patient's medical record in accordance with the organization's policies. Compliant Compliant present present present",
      },
      {
        heading: "K. Laboratory test results are reviewed and acknowledged in writing (manually or — electronically) by the ordering provider or qualified designee. Compliant Compliant CMS Tag YES NO NA",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "L. Laboratory quality control procedures are performed. —",
        content: "Elements of compliance — (1) Quality controls are performed in accordance with manufacturer instructions. (2) The results of quality control procedures are documented. (3) Equipment is calibrated in accordance with manufacturer instructions. (4) Validation tests for new equipment are performed in accordance with manufacturer instructions. References /Notes • Elements 3 and 4 apply only if moderate or complex testing is performed. 148 Accreditation Handbook for Medicare Deemed Status, v42 Compliance Rating: if 4 elements apply Compliant Compliant present are present present Compliance Rating: if 3 elements apply Compliant Compliant present present present Compliance Rating: if 2 elements apply Compliant Compliant present present present",
      },
      {
        heading: "M. Proficiency testing is performed if required by CLIA, the CLIA accrediting body, — the state, and/or the organization's policies. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "N. Established laboratory procedures are followed. —",
        content: "Elements of compliance — (1) At minimum, procedures are established for obtaining, identifying, storing, and transporting specimens. (2) Staff members with laboratory responsibilities demonstrate understanding of the established procedures. (3) Procedures are in place to obtain routine and emergency laboratory services outside of the organization's capabilities from a hospital or licensed medical or clinical laboratory. Compliant Compliant present present present",
      },
      {
        heading: "O. Complete written descriptions of each test procedure performed are available — to staff with laboratory responsibilities. References / Notes • As applicable for each test, such descriptions include information about patient preparation, specimen requirements and criteria for specimen rejection, reagents, calibration procedures, quality control, step-by-step instructions for performance of the test, result reporting, reporting of critical values, and reference ranges. Compliant Compliant",
        content: "This is a Standard-level requirement under Chapter 12. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "P. Laboratory work is performed with optimal accuracy, precision, efficiency, and — safety.",
        content: "Elements of compliance — (1) All test kits, laboratory devices and supporting supplies are FDA approved for use under the type of CLIA or state certificate obtained. (2) Observation and interviews confirm that the following are sufficient:; a. Space.; b. Equipment.; c. Supplies. References / Notes • Not all “supporting supplies” must be FDA approved, e.g., cotton balls. Compliant Compliant present present present 150 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 13",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Condition for Coverage - Laboratory and radiologic services. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compli..." },
      { fact: "Standard B", detail: "If the ASC performs laboratory services, it must meet the requirements of Title 42 CFR Part 493. [416.49(a)] Fully Substantially Partially Minimally Non- Not..." },
      { fact: "Standard C", detail: "If the ASC does not provide its own laboratory services, it must have procedures for obtaining routine and emergency laboratory services from a certified lab..." },
      { fact: "Standard D", detail: "As appropriate for the laboratory services performed, a current CLIA Certificate of Waiver, and/or a current Certificate for Provider Performed Microscopy Pr..." },
      { fact: "Standard E", detail: "If the organization has obtained a CLIA Certificate for Provider Performed — Microscopy Procedures, or a CLIA Certificate of Registration, Compliance or Accr..." },
      { fact: "Standard F", detail: "A current state medical laboratory license or certificate appropriate for the — level of testing performed is present. References / Notes • Standard applies ..." },
      { fact: "Standard G", detail: "Provider-performed microscopy, moderate complexity testing and high — complexity testing are provided under the direction of a pathologist, other physician, ..." },
      { fact: "Standard H", detail: "If the organization has obtained a CLIA Certificate of Waiver or a state license — or certificate to perform waived testing, services are provided under the ..." },
      { fact: "Standard I", detail: "Laboratory services are conducted by qualified personnel. —" },
      { fact: "Standard J", detail: "Pathology and medical laboratory services provided adequately support the — organization's clinical capabilities." },
      { fact: "Standard K", detail: "Laboratory test results are reviewed and acknowledged in writing (manually or — electronically) by the ordering provider or qualified designee. Compliant Com..." },
      { fact: "Standard L", detail: "Laboratory quality control procedures are performed. —" },
      { fact: "Standard M", detail: "Proficiency testing is performed if required by CLIA, the CLIA accrediting body, — the state, and/or the organization's policies. Fully Substantially Partial..." },
      { fact: "Standard N", detail: "Established laboratory procedures are followed. —" },
    ],
  },
  {
    levelId: "asc_hb_imaging",
    chapterNumber: 13,
    category: "Selective Standards",
    title: "Chapter 13: Diagnostic and Other Imaging Services",
    overview: "Imaging services within an accreditable organization, including those used for screening, diagnosing, monitoring, or assisting with procedures provided, meet the needs of the patients and are provided in accordance with ethical and professional practices and legal requirements. Imaging services may include, but are not limited to radiographic, fluoroscopic, magnetic resonance, and/or ultrasonic imaging. Such an organization meets the following Standards. All Standards apply to organizations that provide imaging services for screening, diagnosing, monitoring, or assisting with procedures. Standards 13.K, L, M and N do not apply if the organization only provides peri-operative imaging services.",
    sections: [
      {
        heading: "A. Condition for Coverage - Laboratory and radiologic services. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 13. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0200" }, { label: "CFR Reference", value: "416.49" }],
      },
      {
        heading: "B. If radiologic services are utilized, the governing body must appoint an individual qualified in accordance with State law and ASC policies who is responsible for assuring all radiologic services are provided in accordance with the requirements of this section. [416.49(b)(2)] Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 13. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0204" }],
      },
      {
        heading: "C. Radiologic services may only be provided when integral to procedures offered by the ASC. [416.49(b)(1)] Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 13. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
        criticalValues: [{ label: "CMS Tag", value: "Q-0202" }],
      },
      {
        heading: "D. The radiologic services must meet the requirements specified in Parts 482.26(b), (c)(2), and (d)(2) of CMS Hospital Conditions of Participation. [416.49(b)(1)]",
        content: "Elements of compliance — (1) The radiologic services, particularly ionizing radiology procedures, must be free from Q-0203 hazards for patients and personnel. [416.49(b)(1)] (2) Only personnel designated as qualified by the medical staff may use the radiologic Q-0203 equipment and administer procedures. [416.49(b)(1)] (3) Copies of reports and printouts are maintained for at least five years. [416.49(b)(1)] Q-0203 (4) Films, scans, and other image records, as appropriate, are maintained for at least Q-0203 five years. [416.49(b)(1)] References / Notes • Parts 482.26(b), (c)(2), and (d)(2) of CMS Hospital Conditions of Participation are indicated at Standard 13.D.1-4. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        criticalValues: [{ label: "CMS Tag", value: "Q-0203" }],
      },
      {
        heading: "E. Health care professionals providing imaging services and/or interpreting — results are appropriately trained and privileged.",
        content: "Elements of compliance — (1) Personnel and/or credentials files document appropriate training and credentials. (2) There is evidence that such personnel have been granted privileges to provide these services or have job descriptions containing these duties. (3) There is evidence that such personnel have completed appropriate safety training. Compliant Compliant present present present 152 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "F. Imaging services provided are appropriate to the needs of patients and support — the organization's clinical capabilities.",
        content: "Elements of compliance — (1) Image interpretation is appropriately documented in a timely manner. (2) Records or reports of services provided are maintained. (3) Observation and interviews indicate that the following are sufficient to ensure the provision of quality services:; a. Space.; b. Supplies.; c. Equipment. Compliant Compliant present present present",
      },
      {
        heading: "G. Written policies and procedures addressing safety aspects of imaging services — are present.",
        content: "Elements of compliance — (1) Written policies and procedures address precautions to safeguard against electrical, mechanical, magnetic, radiation, and other potential hazards. (2) Written policies and procedures require periodic evaluation by qualified personnel of energy sources and of all safety measures followed, including calibration of equipment and testing the integrity of personal protective devices in compliance with federal, state, and local laws and regulations. Compliant Compliant present present present CMS Tag YES NO NA",
      },
      {
        heading: "H. Written policies and procedures address the management of potentially — hazardous energy sources.",
        content: "Elements of compliance — (1) Written policies and procedures comply with prevailing laws and regulations for the use, removal, handling, and storage of potentially hazardous materials. (2) Written policies and procedures require proper shielding where radiation and other potentially hazardous energy sources are used. (3) Written policies and procedures include instructions for dealing with accidental hazardous energy exposure. (4) If radiation exposure is monitored, appropriate exposure records are maintained. (5) If radiation exposure is not monitored, documentation exists within the organization to support this decision. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present elements are are present apply",
      },
      {
        heading: "I. Proper warning signs are in place alerting pregnant females to the presence of — hazardous energy fields. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 13. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "J. Documentation demonstrates that patients are involved in identification of the — correct site to be imaged. Compliant Compliant 154 Accreditation Handbook for Medicare Deemed Status, v42 Standards 13.K, L, M and N do not apply if the organization only provides peri-operative imaging services.",
        content: "This is a Standard-level requirement under Chapter 13. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "K. Diagnostic imaging services are directed by a qualified physician or dentist. —",
        content: "Elements of compliance — (1) Documentation of qualifications is present in the credentials file. (2) There is evidence that the physician or dentist has been designated by the governing body to hold this responsibility. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply CMS Tag YES NO NA",
      },
      {
        heading: "L. Diagnostic imaging tests are performed, authenticated, and documented — appropriately.",
        content: "Elements of compliance — (1) Diagnostic imaging tests are performed only upon the order of a health care professional. (2) The order includes the reason for the examination. (3) A radiologist authenticates all examination reports. (4) If a radiologist does not authenticate all examination reports:; a. The governing body has determined that specialist physicians or dentists may authenticate reports of specific procedures.; b. Such physicians or dentists have been granted privileges by the governing body or its designee to authenticate these reports. (5) Authenticated, dated reports of all examinations performed are made a part of the patient's clinical record. References / Notes • Element 3 does not apply to organizations that function in accordance with Element 4. • Element 4 does not apply to organizations that function in accordance with Element 3. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present elements are are present apply",
      },
      {
        heading: "M. Diagnostic images are accessible and appropriately retained and stored. —",
        content: "Elements of compliance — (1) A policy addresses:; a. The storage of diagnostic images.; b. The retention of diagnostic images. (2) Diagnostic images are maintained in a readily accessible location for the time required by policy and by any applicable laws. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present are present present apply",
      },
      {
        heading: "N. If magnetic resonance imaging is conducted, proper warning signs are in — place.",
        content: "Elements of compliance — (1) Signs warn patients and other personnel with metal implants. (2) Signs warn patients and other personnel with magnetically inscribed credit cards, identification cards, and similar items. (3) Signs warn patients and other personnel wearing metallic objects capable of potentially dangerous motion. (4) Signs warn patients and other personnel with pacemakers, internal defibrillators, cochlear implants, cardiac stents, insulin pumps, or nerve stimulators. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present elements are are present apply 156 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 18",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Condition for Coverage - Laboratory and radiologic services. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compli..." },
      { fact: "Standard B", detail: "If radiologic services are utilized, the governing body must appoint an individual qualified in accordance with State law and ASC policies who is responsible..." },
      { fact: "Standard C", detail: "Radiologic services may only be provided when integral to procedures offered by the ASC. [416.49(b)(1)] Fully Substantially Partially Minimally Non- Not Appl..." },
      { fact: "Standard D", detail: "The radiologic services must meet the requirements specified in Parts 482.26(b), (c)(2), and (d)(2) of CMS Hospital Conditions of Participation. [416.49(b)(1)]" },
      { fact: "Standard E", detail: "Health care professionals providing imaging services and/or interpreting — results are appropriately trained and privileged." },
      { fact: "Standard F", detail: "Imaging services provided are appropriate to the needs of patients and support — the organization's clinical capabilities." },
      { fact: "Standard G", detail: "Written policies and procedures addressing safety aspects of imaging services — are present." },
      { fact: "Standard H", detail: "Written policies and procedures address the management of potentially — hazardous energy sources." },
      { fact: "Standard I", detail: "Proper warning signs are in place alerting pregnant females to the presence of — hazardous energy fields. Fully Substantially Partially Minimally Non- Not Ap..." },
      { fact: "Standard J", detail: "Documentation demonstrates that patients are involved in identification of the — correct site to be imaged. Compliant Compliant 154 Accreditation Handbook fo..." },
      { fact: "Standard K", detail: "Diagnostic imaging services are directed by a qualified physician or dentist. —" },
      { fact: "Standard L", detail: "Diagnostic imaging tests are performed, authenticated, and documented — appropriately." },
      { fact: "Standard M", detail: "Diagnostic images are accessible and appropriately retained and stored. —" },
      { fact: "Standard N", detail: "If magnetic resonance imaging is conducted, proper warning signs are in — place." },
    ],
  },
  {
    levelId: "asc_hb_teaching",
    chapterNumber: 18,
    category: "Selective Standards",
    title: "Chapter 18: Teaching and Publication Activities",
    overview: "If staff is involved in teaching or publishing, an accreditable organization has policies governing those activities that are consistent with its mission, goals, and objectives. Such an organization meets the following Standards. Standards A and B of this chapter apply to organizations with formal teaching agreements with training institutions.",
    sections: [
      {
        heading: "A. A current, fully executed written agreement with each training institution is — present.",
        content: "Elements of compliance — (1) Each agreement includes a description of the types of students and/or postgraduate trainees eligible for the teaching experience. (2) Each agreement describes the extent to which students and postgraduate trainees are involved in patient care activities. (3) Each agreement includes expectations of students and postgraduate trainees regarding adherence to organizational policies and other regulations. (4) Each agreement indicates whether liability coverage is required and, if so, minimum amounts required. (5) Each agreement describes responsibilities of each party for:; a. HIPAA/FERPA training.; b. OSHA training related to bloodborne pathogens. (6) Each agreement includes a requirement that each student or postgraduate trainee signs an addendum to the teaching agreement accepting its terms and conditions. References / Notes • Depending on the level of involvement in patient care, credentialing of residents and fellows, as described in the AAAHC Standards for credentialing, may be appropriate. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present present elements are are present are present apply",
      },
      {
        heading: "B. Written policies concerning teaching activities have been adopted. —",
        content: "Elements of compliance — (1) Written policies address how the identity of the person arriving for training is confirmed. (2) Written policies address requirements for orientation and other training. (3) Written policies addressing the provision of health care by personnel with student or postgraduate trainee status include a definition of \"close and adequate supervision\" of these individuals. (4) Written policies addressing the provision of health care by personnel with student or postgraduate trainee status include the process for obtaining patient consent for student/trainee participation in or observation of the patient's care. Fully Substantially Partially Minimally Non-Compliant Not Applicable Compliant Compliant Compliant Compliant present elements are are present apply",
      },
      {
        heading: "C. If staff is involved in publishing, a written policy specifies approvals needed, if — any, of publications attributed to or resulting from care provided by the organization. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply 158 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 19",
        content: "This is a Standard-level requirement under Chapter 18. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "A current, fully executed written agreement with each training institution is — present." },
      { fact: "Standard B", detail: "Written policies concerning teaching activities have been adopted. —" },
      { fact: "Standard C", detail: "If staff is involved in publishing, a written policy specifies approvals needed, if — any, of publications attributed to or resulting from care provided by t..." },
    ],
  },
  {
    levelId: "asc_hb_research",
    chapterNumber: 19,
    category: "Selective Standards",
    title: "Chapter 19: Research Activities",
    overview: "If research is conducted, an accreditable organization establishes and implements policies governing research that are consistent with its mission, goals, and objectives and with its clinical capabilities. Such an organization meets the following Standards.",
    sections: [
      {
        heading: "A. Research activities are performed in accordance with ethical and professional — practices and legal requirements.",
        content: "Elements of compliance — (1) All research is appropriate for the expertise of the organization's providers and staff. (2) Available resources are appropriate for the research conducted. (3) Documentation demonstrates that, when reviewing and approving clinical research studies, the governing body reviews any Institutional Review Board (IRB) review completed to ensure that appropriate steps are taken to protect the rights and welfare of patients and others participating as subjects in a research study. (4) Documentation demonstrates that the governing body reviews all current research at least annually. References / Notes • Research activities include, but are not limited to, clinical trials of drugs and other biologicals; the use of devices, implants, or instruments that are classified as investigational or experimental; and the use of techniques that are new, experimental, innovative, or otherwise not yet accepted as standard medical or dental practice. Compliant Compliant present are present present",
      },
      {
        heading: "B. Research is conducted in accordance with established written protocols. —",
        content: "Elements of compliance — (1) Written protocols for conducting research are present. (2) The written protocols for conducting research were approved by the governing body or its designee after medical (or dental) and legal review. (3) There is evidence that professionals involved in research activities are aware of and follow the organization's research protocols. Compliant Compliant present present present",
      },
      {
        heading: "C. The rights and welfare of all patients participating in research are protected. —",
        content: "Elements of compliance — (1) Information is available to patients and staff concerning a patient's right to refuse to participate in research. (2) The informed consent of each patient is obtained in the language or manner primarily used by him or her. (3) A research medical record is maintained for each patient participating in research which contains, at minimum:; a. Evidence that the patient has provided informed consent.; b. Name of the study.; c. Start date of the study.; d. Other pertinent information, as applicable to the study. Compliant Compliant present present present 160 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 20",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "Research activities are performed in accordance with ethical and professional — practices and legal requirements." },
      { fact: "Standard B", detail: "Research is conducted in accordance with established written protocols. —" },
      { fact: "Standard C", detail: "The rights and welfare of all patients participating in research are protected. —" },
    ],
  },
  {
    levelId: "asc_hb_overnight_care",
    chapterNumber: 20,
    category: "Selective Standards",
    title: "Chapter 20: Overnight Care and Services",
    overview: "If an accreditable ASC in the AAAHC Medicare Deemed Status Program provides overnight care (i.e., has patients that are not discharged from the facility on the same day they were admitted to the facility) and related services, such care and services meet the needs of the patients served and are provided in accordance with ethical and professional practices and legal requirements. The definition of an ASC listed under Title 42 CFR §416.2 includes the language that “Ambulatory surgical center or ASC means any distinct entity that operates exclusively for the purpose of providing surgical services to patients not requiring hospitalization and in which the expected duration of services would not exceed 24 hours following an admission…”. NOTE: This chapter applies to an ASC that may in a rare circumstance provide care, including overnight accommodations, for patients who do not require the full range of services of an acute care hospital. Such patients may be recovering from surgery and require observation by medical personnel, may be receiving treatment for non-critical illnesses, or may need only short-term or custodial care.",
    sections: [
      {
        heading: "A. If required by the state, the overnight care unit has obtained a license to — operate. Fully Substantially Partially Minimally Non- Not Applicable Compliant Compliant Compliant Compliant Compliant met apply",
        content: "This is a Standard-level requirement under Chapter 20. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
      {
        heading: "B. Overnight care and services are provided by qualified personnel. —",
        content: "Elements of compliance — (1) The governing body has appointed one or more qualified physicians to supervise overnight care and services. (2) A patient is admitted or discharged only upon the order of a physician who is responsible for the medical care of that patient. (3) Providers may admit patients to this program if they:; a. Are licensed to treat patients or supervise care and services in this setting.; b. Have been granted such privileges by the governing body of the organization, in accordance with AAAHC Standards for credentialing and privileging. (4) There is documented evidence that registered nurses and other health care professionals are appropriately trained. (5) At least one physician is present or immediately available by telephone whenever patients are present. (6) At least one registered nurse is on duty whenever patients are present. Compliant Compliant present present are present present present",
      },
      {
        heading: "C. The scope and limitations of overnight care and services are clearly defined. —",
        content: "Elements of compliance — (1) Documentation of the scope and limitations of services is present. (2) Evidence is present that the scope and limitations of services is communicated to:; a. Physicians who refer and admit patients to the program; b. Staff who provide the care and services.; c. Potential patients in advance of their referral to the program.; d. Other health care professionals and relevant community agencies. Compliant Compliant present present present 162 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "D. Written policies and procedures for overnight care are present. —",
        content: "Elements of compliance — (1) Policies and procedures address clinical criteria for determining eligibility for admission. (2) Policies and procedures address clinical responsibilities for each patient during his/her stay. (3) Policies and procedures address provisions for emergency services. (4) Policies and procedures address arrangements for transfer to other health care services as needed. (5) Policies and procedures address staffing requirements to ensure that registered nurses and other health care professionals are available in sufficient numbers to meet patient needs. (6) Policies and procedures address isolation procedures to be followed when any patient is admitted with a suspected or diagnosed communicable disease. Compliant Compliant present present are present present present",
      },
      {
        heading: "F. Clinical record entries reflect the provision of overnight care. —",
        content: "Elements of compliance — (1) Clinical record entries include a current history and physical examination. (2) Clinical record entries include treatment orders. (3) Clinical record entries include nursing notes. (4) Clinical record entries include follow-up instructions to patients. Compliant Compliant present are present present",
      },
      {
        heading: "G. Food service and refreshments are provided to meet the needs of patients. —",
        content: "Elements of compliance — (1) Evidence of compliance with local, state, and federal guidelines is present with regard to preparing, serving, disposing of, and storing food and drink for patient use. (2) Evidence is present that personnel providing food services meet local health department requirements. (3) Evidence is present that special dietary requirements for patient care are met. Compliant Compliant present present present",
      },
      {
        heading: "H. Provisions are made for patient privacy and safety. —",
        content: "Elements of compliance — (1) Treatment rooms are provided to meet patient needs and physician requirements. (2) Emergency power appropriate for the size of the unit is available. Compliant Compliant present present present",
      },
      {
        heading: "I. There is evidence that overnight care and services are reviewed as part of the — organization's quality management and improvement program. Compliant Compliant 164 Accreditation Handbook for Medicare Deemed Status, v42 Chapter 24",
        content: "This is a Standard-level requirement under Chapter 20. See the AAAHC Handbook for the full requirement text and CMS Conditions for Coverage cross-reference.",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "If required by the state, the overnight care unit has obtained a license to — operate. Fully Substantially Partially Minimally Non- Not Applicable Compliant ..." },
      { fact: "Standard B", detail: "Overnight care and services are provided by qualified personnel. —" },
      { fact: "Standard C", detail: "The scope and limitations of overnight care and services are clearly defined. —" },
      { fact: "Standard D", detail: "Written policies and procedures for overnight care are present. —" },
      { fact: "Standard F", detail: "Clinical record entries reflect the provision of overnight care. —" },
      { fact: "Standard G", detail: "Food service and refreshments are provided to meet the needs of patients. —" },
      { fact: "Standard H", detail: "Provisions are made for patient privacy and safety. —" },
      { fact: "Standard I", detail: "There is evidence that overnight care and services are reviewed as part of the — organization's quality management and improvement program. Compliant Complia..." },
    ],
  },
  {
    levelId: "asc_hb_radiation_oncology",
    chapterNumber: 24,
    category: "Selective Standards",
    title: "Chapter 24: Radiation Oncology Treatment Services",
    overview: "Radiation oncology treatment services provided by an accreditable organization meet the needs of the patients and are provided in accordance with ethical and professional practices and legal requirements. Such an organization meets the following Standards.",
    sections: [
      {
        heading: "A. The governing body has appointed qualified personnel to direct and oversee — radiation oncology services.",
        content: "Elements of compliance — (1) The governing body has appointed at least one physician to direct the service. (2) The directing physician(s) has been credentialed and privileged to provide radiation oncology services in accordance with AAAHC Standards for credentialing and privileging. (3) The governing body has appointed a radiation safety officer. (4) A radiation safety committee meets periodically to review safety issues, policies, etc. (5) Documentation is present to demonstrate that a qualified medical physicist conducts at least an annual review of the safety and quality control policies and procedures. Compliant Compliant present present present present present",
      },
      {
        heading: "B. The radiation oncology treatment service employs trained and qualified health — care professionals to supervise and perform the services provided.",
        content: "Elements of compliance — (1) Staff includes a radiation technologist certified by the American Registry of Radiologic Technologists (ARRT) or a state-licensed technologist. (2) Staff includes a dosimetrist. (3) Staff includes a qualified radiation physicist. (4) Staff includes other appropriately trained health care professionals as may be in keeping with local practice and legal requirements, such as oncology nurses, nutritionists, and medical social workers. (5) Observation and interviews confirm that the number of staff is sufficient for the services provided. Compliant Compliant present present present present present CMS Tag YES NO NA",
      },
      {
        heading: "C. The governing body has adopted written policies addressing the quality of care — for radiation oncology.",
        content: "Elements of compliance — (1) Methodologies for diagnosis and treatment are limited to those approved by the governing body. (2) Therapeutic services are performed only upon the written order of a radiation oncologist. (3) A policy for staffing requirements during treatment includes:; a. A requirement that a physician be present or immediately available during treatment.; b. A requirement for the presence of qualified support personnel during treatment when a physician is not present. (4) A signed consent form is present in the clinical record prior to treatment. (5) Chart and port film for ongoing therapies are reviewed on a weekly basis. (6) Treatment setups are documented with photographs. (7) Emergency treatment is accessible when needed. Compliance Rating: if 7 elements apply Compliant Compliant present present are present are present present Compliance Rating: if 6 elements apply Compliant Compliant present present are present present present Compliance Rating: if 5 elements apply Compliant Compliant present present present present present 166 Accreditation Handbook for Medicare Deemed Status, v42",
      },
      {
        heading: "D. Radiation safety processes are followed. —",
        content: "Elements of compliance — (1) Personnel exposure records are maintained. (2) Potentially hazardous materials are acquired, stored, used, handled, and removed in accordance with prevailing laws and regulations. Compliant Compliant present present present",
      },
      {
        heading: "E. Comprehensive radiation oncology services are provided. —",
        content: "Elements of compliance — (1) The following services are provided:; a. Consultation services.; b. Simulation of treatment.; c. Treatment planning.; d. Clinical treatment management including, but not limited to, the use of teletherapy and/or brachytherapy.; e. Maintenance of reports of services and radiographic images appropriate to the therapy, as required by applicable laws and organization policy.; f. Appropriate follow-up care of all patients. (2) Support services, including diagnostic laboratories and imaging facilities, are accessible as needed. Compliant Compliant present present present",
      },
      {
        heading: "F. Clinical record entries reflect the provision of radiation oncology treatment. —",
        content: "Elements of compliance — (1) Clinical record entries include the following:; a. Confirmation of the presence of malignancy by histopathology or a statement of benign condition.; b. Definition of tumor location, extent, and stage.; c. Definition of treatment volume.; d. Selection of dose.; e. Selection of treatment modality.; f. Selection of treatment technique.; g. Dosimetry calculations. (2) Supervision of treatment and record of patient progress and tolerance is documented. (3) A summary of completion and statement of follow-up plan is present. Compliant Compliant",
      },
    ],
    quickReference: [
      { fact: "Standard A", detail: "The governing body has appointed qualified personnel to direct and oversee — radiation oncology services." },
      { fact: "Standard B", detail: "The radiation oncology treatment service employs trained and qualified health — care professionals to supervise and perform the services provided." },
      { fact: "Standard C", detail: "The governing body has adopted written policies addressing the quality of care — for radiation oncology." },
      { fact: "Standard D", detail: "Radiation safety processes are followed. —" },
      { fact: "Standard E", detail: "Comprehensive radiation oncology services are provided. —" },
      { fact: "Standard F", detail: "Clinical record entries reflect the provision of radiation oncology treatment. —" },
    ],
  },
];

export const ASC_HANDBOOK_CATEGORY_ORDER: AscHandbookCategory[] = ["Universal Standards", "Selective Standards"];
