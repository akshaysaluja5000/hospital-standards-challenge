// ── Facility Auth Hook ─────────────────────────────────────────────────────
// Wraps useAuth() to add facility-scoped role and permissions.
// Derives facilityRole from the real leadershipRole stored in the DB.
//
// leadershipRole → facilityRole mapping:
//   super_admin → super_admin (sees all facilities)
//   admin       → admin
//   director    → ceo
//   educator    → manager
//   learner     → staff
//
// ──────────────────────────────────────────────────────────────────────────

import { useAuth } from "./auth";
import {
  type FacilityRole,
  type FacilityPermissions,
  FACILITY_ROLE_PERMISSIONS,
  MOCK_FACILITIES,
  getFacilityName,
} from "@shared/facility-roles";

export type { FacilityRole };

export interface FacilityAuthContext {
  user: ReturnType<typeof useAuth>["user"];
  facilityId: string | null;
  facilityName: string;
  facilityRole: FacilityRole;
  permissions: FacilityPermissions;
  isSuperAdmin: boolean;
}

function leadershipToFacilityRole(lr: string | null | undefined, isAdmin: boolean): FacilityRole {
  if (isAdmin) return "super_admin";
  switch (lr) {
    case "super_admin": return "super_admin";
    case "admin":       return "admin";
    case "director":    return "ceo";
    case "educator":    return "manager";
    default:            return "staff";
  }
}

export function useFacilityAuth(): FacilityAuthContext {
  const { user } = useAuth();

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

  const facilityRole = leadershipToFacilityRole(
    user.leadershipRole as string | null | undefined,
    !!user.isAdmin,
  );
  const isSuperAdmin = facilityRole === "super_admin";

  const facilityId = isSuperAdmin
    ? null
    : user.facilityId
      ? `facility_${user.facilityId}`
      : null;

  const facilityName = isSuperAdmin
    ? "All Facilities"
    : getFacilityName(facilityId);

  return {
    user,
    facilityId,
    facilityName,
    facilityRole,
    permissions: FACILITY_ROLE_PERMISSIONS[facilityRole],
    isSuperAdmin,
  };
}
