// ── Facility Auth Hook ─────────────────────────────────────────────────────
// Wraps useAuth() to add facility-scoped role and permissions.
//
// In production: facilityRole will come from the DB (a new column on users).
// For now: controlled by MOCK_PERSONA below. Change it to test different roles.
//
// ── HOW TO SWITCH TEST PERSONAS ───────────────────────────────────────────
//
//   CEO of Midwest Orthopedic Specialty Hospital (facility_mosh):
//     const MOCK_PERSONA: MockPersona = { role: "ceo", facilityId: "facility_mosh" };
//
//   CEO of Orthopedic Hospital of Wisconsin (facility_ohw):
//     const MOCK_PERSONA: MockPersona = { role: "ceo", facilityId: "facility_ohw" };
//
//   Facility Admin of MOSH:
//     const MOCK_PERSONA: MockPersona = { role: "admin", facilityId: "facility_mosh" };
//
//   Super Admin (sees all facilities):
//     const MOCK_PERSONA: MockPersona = { role: "super_admin", facilityId: null };
//
//   No mock — derive from real auth (isAdmin → super_admin, else staff):
//     const MOCK_PERSONA: MockPersona | null = null;
//
// ──────────────────────────────────────────────────────────────────────────

import { useAuth } from "./auth";
import { getRoleConfig } from "@shared/roles";
import {
  type FacilityRole,
  type FacilityPermissions,
  FACILITY_ROLE_PERMISSIONS,
  MOCK_FACILITIES,
  getFacilityName,
} from "@shared/facility-roles";

export type { FacilityRole };

interface MockPersona {
  role: FacilityRole;
  facilityId: string | null;
}

// ── Change this line to switch test personas ───────────────────────────────
const MOCK_PERSONA: MockPersona = { role: "ceo", facilityId: "facility_mosh" };
// ──────────────────────────────────────────────────────────────────────────

export interface FacilityAuthContext {
  user: ReturnType<typeof useAuth>["user"];
  facilityId: string | null;
  facilityName: string;
  facilityRole: FacilityRole;
  permissions: FacilityPermissions;
  isSuperAdmin: boolean;
}

export function useFacilityAuth(): FacilityAuthContext {
  const { user } = useAuth();

  // ── Mock persona override ────────────────────────────────────────────────
  if (MOCK_PERSONA) {
    const facilityId = MOCK_PERSONA.facilityId;
    const facilityName = facilityId
      ? (MOCK_FACILITIES.find((f) => f.id === facilityId)?.name ?? facilityId)
      : "All Facilities";
    return {
      user,
      facilityId,
      facilityName,
      facilityRole: MOCK_PERSONA.role,
      permissions: FACILITY_ROLE_PERMISSIONS[MOCK_PERSONA.role],
      isSuperAdmin: MOCK_PERSONA.role === "super_admin",
    };
  }

  // ── Derive from real auth ────────────────────────────────────────────────
  if (!user) {
    return {
      user: null,
      facilityId: null,
      facilityName: "Unknown Facility",
      facilityRole: "staff",
      permissions: FACILITY_ROLE_PERMISSIONS.staff,
      isSuperAdmin: false,
    };
  }

  if (user.isAdmin) {
    return {
      user,
      facilityId: null,
      facilityName: "All Facilities",
      facilityRole: "super_admin",
      permissions: FACILITY_ROLE_PERMISSIONS.super_admin,
      isSuperAdmin: true,
    };
  }

  // Map training reportingScope → facility role
  const roleConfig = getRoleConfig(user.roleId ?? null);
  let facilityRole: FacilityRole = "staff";
  if (roleConfig?.reportingScope === "enterprise") facilityRole = "admin";
  else if (roleConfig?.reportingScope === "own_plus_all") facilityRole = "manager";

  // The DB stores facilityId as an integer; we use string IDs in mock data.
  // When real data is connected, replace this mapping with an API lookup.
  const facilityId = user.facilityId ? `facility_${user.facilityId}` : null;
  const facilityName = getFacilityName(facilityId);

  return {
    user,
    facilityId,
    facilityName,
    facilityRole,
    permissions: FACILITY_ROLE_PERMISSIONS[facilityRole],
    isSuperAdmin: false,
  };
}
