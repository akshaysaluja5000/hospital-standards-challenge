// ── Audit Log Scaffold ─────────────────────────────────────────────────────
// Records sensitive access events (executive report views, exports) with
// userId, role, facilityId, action, and timestamp.
//
// Current implementation: in-memory store + console.info.
// When the backend is wired up, replace the TODO below with a POST to
// /api/audit-log to persist entries server-side.

export type AuditAction =
  | "executive_report_viewed"
  | "executive_report_csv_export"
  | "executive_report_pdf_export"
  | "corrective_action_plan_viewed"
  | "corrective_action_created";

export interface AuditEntry {
  userId: string | number | null;
  role: string;
  facilityId: string | null;
  facilityName: string | null;
  action: AuditAction;
  timestamp: string;
  meta?: Record<string, unknown>;
}

const AUDIT_LOG: AuditEntry[] = [];

export function auditLog(entry: Omit<AuditEntry, "timestamp">) {
  const full: AuditEntry = { ...entry, timestamp: new Date().toISOString() };
  AUDIT_LOG.push(full);
  console.info("[AUDIT]", full);
  // TODO: POST to /api/audit-log when backend endpoint is ready
  // apiRequest("POST", "/api/audit-log", full).catch(() => {});
}

export function getAuditLog(): AuditEntry[] {
  return [...AUDIT_LOG];
}
