# Content History — Accreditation Ready

This file documents all significant content transitions: manual updates, standard version changes,
and content removals. Each entry should be added before or immediately after the change is applied.

---

## Versioning Protocol (apply for every future update)

1. **Document first** — add an entry to this file before touching any content files.
2. **Snapshot the outgoing version** — export or save a copy outside the project (Google Drive / Innovans LLC folder / email) before overwriting.
3. **Apply the update** — replace handbook content, question files, and standard code references.
4. **Verify** — confirm the new version label appears in the handbook page, all standard codes match the new edition, and no code imports the old content.
5. **Commit** — ensure the transition is captured in Replit version history so the removal itself is timestamped.

---

## Change Log

### 2026-05-15 — AAAHC v42 → v44 (2025/2026 edition)

| Field | Detail |
|---|---|
| **Standard body** | AAAHC (Accreditation Association for Ambulatory Health Care) |
| **Outgoing version** | v42 (prior edition) |
| **Incoming version** | v44 — AAAHC Accreditation Handbook for Ambulatory Health Care (©2025 AAAHC) |
| **Scope** | ASC module — all handbook chapters, question files, and UI version labels |
| **Files updated** | `shared/asc-handbook.ts`, `shared/asc-gov.ts`, `shared/asc-med.ts`, `shared/asc-saf.ts`, and all `shared/asc-*.ts` question files; `client/src/pages/handbook-page.tsx` (version label) |
| **Old manual status** | Content superseded in-platform. v42 manual is no longer operative. A copy should be retained offline (Google Drive / Innovans LLC folder) for reference if ever needed. |
| **Reason for update** | v44 is now the operative AAAHC standard. v42 content is no longer current and was removed from the platform to prevent staff from training on outdated standards. |
| **Removed by** | Akshay Saluja |
| **Verified by** | Code audit confirmed: all standard codes use v44 GOV/MED/SAF/etc. prefix structure; no legacy "Standard 2.II.K" or chapter-numeric citations remain in active question files; handbook page displays "v44" to all ASC users. |

---

## Pending / Upcoming

| Date | Action | Status |
|---|---|---|
| TBD | DNV NIAHO 25-1 content review — confirm all 11 chapters match published NIAHO 25-1 (2025) | Pending |
| TBD | Joint Commission content review — verify against current CAMH edition | Pending |

---

*Maintained by: Innovans LLC development team. Update this file with every content version transition.*
