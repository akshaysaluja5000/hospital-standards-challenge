export type RoleScope = "DEPT" | "DEPT_PLUS_ALL" | "FULL";
export type ReportingScope = "own_department" | "own_plus_all" | "enterprise";

export interface RoleConfig {
  id: string;
  department: string;
  title: string;
  description: string;
  scope: RoleScope;
  destinationRoute: string;
  firstModuleId: string;
  reportingScope: ReportingScope;
  chapters: string[];
}

export const ROLE_CONFIGS: RoleConfig[] = [
  {
    id: "or_circulating_nurse",
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
    id: "spd_tech",
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
    department: "Leadership & Compliance",
    title: "Nurse Educator / Staff Development",
    description: "Staff training and competency across all areas",
    scope: "DEPT_PLUS_ALL",
    destinationRoute: "/diagnostic",
    firstModuleId: "diagnostic",
    reportingScope: "own_plus_all",
    chapters: ["transport", "environment", "segregation", "sterile_storage", "instruments", "facilities", "spd_decontam", "or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety"],
  },
];

export const DEPARTMENT_ORDER = [
  "Operating Room",
  "Sterile Processing",
  "PACU & Floor",
  "Environmental Services",
  "Facilities & Maintenance",
  "Leadership & Compliance",
];

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

export function rolesByDepartment(): Record<string, RoleConfig[]> {
  const out: Record<string, RoleConfig[]> = {};
  for (const r of ROLE_CONFIGS) {
    (out[r.department] = out[r.department] || []).push(r);
  }
  return out;
}

export function reportingScopeFor(roleId: string | null | undefined): ReportingScope {
  return getRoleConfig(roleId)?.reportingScope ?? "own_department";
}
