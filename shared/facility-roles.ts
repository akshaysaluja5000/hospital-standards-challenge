// ── Facility-Scoped Role System ────────────────────────────────────────────
// These roles are orthogonal to the study/training roles in roles.ts.
// They govern what a logged-in user can see in the CAP and Executive Report.

export type FacilityRole = "staff" | "manager" | "admin" | "ceo" | "super_admin";

export interface FacilityPermissions {
  canViewExecutiveReport: boolean;
  canViewAllDepartments: boolean;
  canViewAllFacilities: boolean;
  canExportReports: boolean;
  canSwitchFacility: boolean;
  canCreateActions: boolean;
  canViewAuditLog: boolean;
}

export const FACILITY_ROLE_PERMISSIONS: Record<FacilityRole, FacilityPermissions> = {
  staff: {
    canViewExecutiveReport: false,
    canViewAllDepartments: false,
    canViewAllFacilities: false,
    canExportReports: false,
    canSwitchFacility: false,
    canCreateActions: false,
    canViewAuditLog: false,
  },
  manager: {
    canViewExecutiveReport: false,
    canViewAllDepartments: true,
    canViewAllFacilities: false,
    canExportReports: true,
    canSwitchFacility: false,
    canCreateActions: true,
    canViewAuditLog: false,
  },
  admin: {
    canViewExecutiveReport: true,
    canViewAllDepartments: true,
    canViewAllFacilities: false,
    canExportReports: true,
    canSwitchFacility: false,
    canCreateActions: true,
    canViewAuditLog: true,
  },
  ceo: {
    canViewExecutiveReport: true,
    canViewAllDepartments: true,
    canViewAllFacilities: false,
    canExportReports: true,
    canSwitchFacility: false,
    canCreateActions: false,
    canViewAuditLog: true,
  },
  super_admin: {
    canViewExecutiveReport: true,
    canViewAllDepartments: true,
    canViewAllFacilities: true,
    canExportReports: true,
    canSwitchFacility: true,
    canCreateActions: true,
    canViewAuditLog: true,
  },
};

// ── Mock Facility Catalog ──────────────────────────────────────────────────
// Two real facilities used for proving facility-scoped filtering.
// super_admin can see both; ceo/admin are locked to their own facilityId.

export interface MockFacility {
  id: string;
  name: string;
}

export const MOCK_FACILITIES: MockFacility[] = [
  { id: "facility_mosh",         name: "Midwest Orthopedic Specialty Hospital" },
  { id: "facility_ohw",          name: "Orthopedic Hospital of Wisconsin" },
  { id: "facility_ascension",    name: "Ascension SE Wisconsin" },
  { id: "facility_demo_hospital", name: "Demo Regional Medical Center" },
];

export function getFacilityName(facilityId: string | null): string {
  if (!facilityId) return "All Facilities";
  return MOCK_FACILITIES.find((f) => f.id === facilityId)?.name ?? facilityId;
}

// ── Role label helpers ─────────────────────────────────────────────────────

export const FACILITY_ROLE_LABELS: Record<FacilityRole, string> = {
  staff:       "Staff",
  manager:     "Manager",
  admin:       "Facility Admin",
  ceo:         "CEO / Executive",
  super_admin: "Super Admin",
};
