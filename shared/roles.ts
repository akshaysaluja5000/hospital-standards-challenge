import type { ModuleId } from "./schema";

export type RoleScope = "DEPT" | "DEPT_PLUS_ALL" | "FULL";
export type ReportingScope = "own_department" | "own_plus_all" | "enterprise";
export type FacilityType = ModuleId;

export interface RoleConfig {
  id: string;
  facilityType: FacilityType;
  department: string;
  title: string;
  description: string;
  scope: RoleScope;
  destinationRoute: string;
  firstModuleId: string;
  reportingScope: ReportingScope;
  chapters: string[];
}

const ASC_ALL_CHAPTERS = [
  "asc_governance",
  "asc_clinical_records",
  "asc_credentialing",
  "asc_quality_management",
  "asc_patient_rights",
  "asc_infection_prevention_safety",
];

export const ROLE_CONFIGS: RoleConfig[] = [
  // ==========================================================================
  // HOSPITAL ROLES (Joint Commission / hospital module)
  // ==========================================================================
  {
    id: "or_circulating_nurse",
    facilityType: "hospital",
    department: "Operating Room",
    title: "OR Circulating Nurse",
    description: "OR safety, time-outs, patient care documentation",
    scope: "DEPT",
    destinationRoute: "/play/or_sterile_field",
    firstModuleId: "or_sterile_field",
    reportingScope: "own_department",
    chapters: ["or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety", "facilities"],
  },
  {
    id: "or_manager",
    facilityType: "hospital",
    department: "Operating Room",
    title: "OR Manager / Charge Nurse",
    description: "OR operations leadership across all chapters",
    scope: "DEPT_PLUS_ALL",
    destinationRoute: "/play/or_sterile_field",
    firstModuleId: "or_sterile_field",
    reportingScope: "own_plus_all",
    chapters: ["transport", "environment", "segregation", "sterile_storage", "instruments", "facilities", "spd_decontam", "or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety"],
  },
  {
    id: "scrub_tech",
    facilityType: "hospital",
    department: "Operating Room",
    title: "Scrub Tech / Surgical Tech",
    description: "Sterile field, instruments, OR protocol",
    scope: "DEPT",
    destinationRoute: "/play/or_sterile_field",
    firstModuleId: "or_sterile_field",
    reportingScope: "own_department",
    chapters: ["transport", "or_sterile_field", "instruments", "universal_protocol", "spd_decontam"],
  },
  {
    id: "surgical_ortho_assistant",
    facilityType: "hospital",
    department: "Operating Room",
    title: "Surgical/Orthopedic Assistant",
    description: "Patient positioning, room flow, instruments, perioperative support",
    scope: "DEPT",
    destinationRoute: "/play/or_sterile_field",
    firstModuleId: "or_sterile_field",
    reportingScope: "own_department",
    chapters: ["or_sterile_field", "universal_protocol", "instruments", "patient_care_docs", "eoc_safety"],
  },
  {
    id: "spd_tech",
    facilityType: "hospital",
    department: "Sterile Processing",
    title: "SPD Technician",
    description: "Decontamination, sterilization, instrument processing",
    scope: "DEPT",
    destinationRoute: "/play/spd_decontam",
    firstModuleId: "spd_decontam",
    reportingScope: "own_department",
    chapters: ["transport", "spd_decontam", "segregation", "sterile_storage", "instruments"],
  },
  {
    id: "pacu_nurse",
    facilityType: "hospital",
    department: "PACU & Floor",
    title: "PACU / Floor Nurse",
    description: "Recovery care, monitoring, patient documentation",
    scope: "DEPT",
    destinationRoute: "/play/patient_care_docs",
    firstModuleId: "patient_care_docs",
    reportingScope: "own_department",
    chapters: ["patient_care_docs", "eoc_safety", "universal_protocol"],
  },
  {
    id: "evs",
    facilityType: "hospital",
    department: "Environmental Services",
    title: "Environmental Services",
    description: "Environmental cleaning, waste segregation, EOC safety",
    scope: "DEPT",
    destinationRoute: "/play/environment",
    firstModuleId: "environment",
    reportingScope: "own_department",
    chapters: ["environment", "segregation", "eoc_safety"],
  },
  {
    id: "facilities_maint",
    facilityType: "hospital",
    department: "Facilities & Maintenance",
    title: "Facilities / Maintenance",
    description: "Building systems, life safety, environment of care",
    scope: "DEPT",
    destinationRoute: "/play/facilities",
    firstModuleId: "facilities",
    reportingScope: "own_department",
    chapters: ["facilities", "eoc_safety", "environment"],
  },
  {
    id: "compliance_officer",
    facilityType: "hospital",
    department: "Leadership & Compliance",
    title: "Compliance Officer / CNO",
    description: "Full survey readiness across every standard",
    scope: "FULL",
    destinationRoute: "/diagnostic",
    firstModuleId: "diagnostic",
    reportingScope: "enterprise",
    chapters: ["transport", "environment", "segregation", "sterile_storage", "instruments", "facilities", "spd_decontam", "or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety"],
  },
  {
    id: "nurse_educator",
    facilityType: "hospital",
    department: "Leadership & Compliance",
    title: "Nurse Educator / Staff Development",
    description: "Staff training and competency across all areas",
    scope: "DEPT_PLUS_ALL",
    destinationRoute: "/diagnostic",
    firstModuleId: "diagnostic",
    reportingScope: "own_plus_all",
    chapters: ["transport", "environment", "segregation", "sterile_storage", "instruments", "facilities", "spd_decontam", "or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety"],
  },

  // ==========================================================================
  // ASC ROLES (AAAHC v42 / Ambulatory Surgery Center module)
  // One role per published chapter. Users can pick a single chapter focus or
  // use "Select all roles" to unlock the full standards set.
  // ==========================================================================
  {
    id: "asc_governance_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Governance",
    description: "Governing body authority, oversight, contracts, compliance program",
    scope: "DEPT",
    destinationRoute: "/play/asc_governance",
    firstModuleId: "asc_governance",
    reportingScope: "own_department",
    chapters: ["asc_governance"],
  },
  {
    id: "asc_patient_rights_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Patient Rights",
    description: "Informed consent, privacy, advance directives, complaints, non-discrimination",
    scope: "DEPT",
    destinationRoute: "/play/asc_patient_rights",
    firstModuleId: "asc_patient_rights",
    reportingScope: "own_department",
    chapters: ["asc_patient_rights"],
  },
  {
    id: "asc_clinical_records_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Clinical Records",
    description: "H&P timing, op note content, consent, ID/authentication, retention, HIPAA",
    scope: "DEPT",
    destinationRoute: "/play/asc_clinical_records",
    firstModuleId: "asc_clinical_records",
    reportingScope: "own_department",
    chapters: ["asc_clinical_records"],
  },
  {
    id: "asc_credentialing_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Credentialing & Privileging",
    description: "Appointment, primary source verification, OPPE/FPPE, reappointment, expirables",
    scope: "DEPT",
    destinationRoute: "/play/asc_credentialing",
    firstModuleId: "asc_credentialing",
    reportingScope: "own_department",
    chapters: ["asc_credentialing"],
  },
  {
    id: "asc_quality_management_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Quality Management (QAPI)",
    description: "QAPI program, performance improvement, adverse event tracking, peer review",
    scope: "DEPT",
    destinationRoute: "/play/asc_quality_management",
    firstModuleId: "asc_quality_management",
    reportingScope: "own_department",
    chapters: ["asc_quality_management"],
  },
  {
    id: "asc_infection_prevention_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Infection Prevention & Safety",
    description: "IP program, sterilization, environment of care, employee health, safety",
    scope: "DEPT",
    destinationRoute: "/play/asc_infection_prevention_safety",
    firstModuleId: "asc_infection_prevention_safety",
    reportingScope: "own_department",
    chapters: ["asc_infection_prevention_safety"],
  },
];

export const DEPARTMENT_ORDER_BY_FACILITY: Record<FacilityType, string[]> = {
  hospital: [
    "Operating Room",
    "Sterile Processing",
    "PACU & Floor",
    "Environmental Services",
    "Facilities & Maintenance",
    "Leadership & Compliance",
  ],
  asc: [
    "AAAHC Standards",
  ],
};

// Backwards-compat: legacy export still used by older callers; reflects hospital order.
export const DEPARTMENT_ORDER = DEPARTMENT_ORDER_BY_FACILITY.hospital;

export const SCOPE_CHIP_LABELS: Record<RoleScope, string> = {
  DEPT: "DEPT. ACCESS",
  DEPT_PLUS_ALL: "DEPT + ALL",
  FULL: "FULL ACCESS",
};

export const SCOPE_CHIP_TOOLTIPS: Record<RoleScope, string> = {
  DEPT: "You'll see training and reporting for your department only.",
  DEPT_PLUS_ALL: "You'll see your department plus a view across all departments.",
  FULL: "You'll see training and reporting for the entire organization.",
};

export function getRoleConfig(id: string | null | undefined): RoleConfig | undefined {
  if (!id) return undefined;
  return ROLE_CONFIGS.find((r) => r.id === id);
}

export function rolesForFacility(facilityType: FacilityType | null | undefined): RoleConfig[] {
  if (!facilityType) return ROLE_CONFIGS;
  return ROLE_CONFIGS.filter((r) => r.facilityType === facilityType);
}

export function rolesByDepartment(facilityType?: FacilityType | null): Record<string, RoleConfig[]> {
  const source = facilityType ? rolesForFacility(facilityType) : ROLE_CONFIGS;
  const out: Record<string, RoleConfig[]> = {};
  for (const r of source) {
    (out[r.department] = out[r.department] || []).push(r);
  }
  return out;
}

export function reportingScopeFor(roleId: string | null | undefined): ReportingScope {
  return getRoleConfig(roleId)?.reportingScope ?? "own_department";
}
