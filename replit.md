# Hospital Standards Challenge - Joint Commission Compliance Training Game

## Overview
Gamified SaaS learning app for Joint Commission compliance training. Duolingo-style streaks, XP, and levels for healthcare professionals. Licensed per facility; deployed at accreditationready.ai.

## Run & Operate
- `npm run dev` — starts Express + Vite on port 5000
- Required env vars: `DATABASE_URL`, Anthropic API key (via Replit AI Integrations)
- DB schema: `shared/schema.ts` → Drizzle ORM → PostgreSQL (`server/storage.ts`)

## Stack
React 18 + TypeScript, Vite, Tailwind CSS, Framer Motion, wouter, TanStack Query v5, shadcn/ui, Express.js, Drizzle ORM, PostgreSQL, Passport.js (local strategy), Anthropic Claude Haiku (Replit AI Integration).

## Where things live
- `shared/schema.ts` — Drizzle tables + Zod insert schemas (source of truth)
- `shared/facility-roles.ts` — facility RBAC types + permission maps
- `shared/roles.ts` — training roles (Hospital / ASC domain roles)
- `server/storage.ts` — IStorage interface + DB migrations in `ensureTablesExist`
- `server/routes.ts` — all Express routes; middleware: `requireAuth`, `requireAdmin`, `requireLeadershipRole`
- `client/src/App.tsx` — wouter routes; `ProtectedRoute` and `LeadershipRoute` components
- `client/src/lib/facility-auth.ts` — `useFacilityAuth()` hook; derives facility permissions from real `leadershipRole`
- `client/src/pages/` — page components

## Architecture decisions
- **Dual RBAC**: two orthogonal role axes. (1) `leadershipRole` (`learner|educator|director|admin|super_admin`) stored in `users.leadership_role`, controls access to leadership features server-side via `requireLeadershipRole(minRole)` middleware. (2) Facility role (`staff|manager|ceo|admin|super_admin`) derived from `leadershipRole` in `useFacilityAuth()`, used for facility-scoping of Executive Report & CAP data. No more mock personas.
- **Server-side enforcement**: `/api/admin/stats`, `/api/admin/ai-insights`, `/api/admin/lesson-plan/generate` require director+ at the route level; `/api/admin/users/:id/leadership-role` requires admin+.
- **Frontend gate**: `LeadershipRoute` component in App.tsx wraps director+ pages (`/admin`, `/corrective-actions`, `/executive-report`) with an access-denied wall for lower roles.
- **Module separation**: Hospital vs ASC modules have distinct content, leaderboard, and stats scopes.
- **Bypass accounts**: usernames `akshaysaluja` and `rsaluja` always receive `super_admin` effective rank.
- `darkMode: ["class"]` — light mode enforced via inline script in `index.html` + `useEffect` in `App.tsx`.

## Product
- Quiz gameplay: 11 levels × 20 questions per level; persistent sessions; XP + streaks
- Flashcard SR (Anki-style): Again/Hard/Good buttons; reviews scheduled in `flashcard_reviews` table
- Compliance Handbook: 11 chapters, searchable, AI-powered Q&A
- Admin dashboard: user list with leadershipRole management (admin+ can assign roles up to their own rank)
- Executive Readiness Report: facility-scoped CAP tracking, CSV/PDF export, audit log
- AI features: Tutor (3-depth explanations), Micro-Debriefs, Handbook Search, Leadership Coach (director+)
- Assessments: Diagnostic Quiz (pre-test) + Final Assessment (mastery exam)
- ASC module: 11 published chapters (165 questions, AAAHC standards)

## User Preferences
Iterative development; ask before significant architectural changes. Detailed explanations for AI integrations and DB interactions.

## Gotchas
- `leadershipRole` defaults to `'learner'`; `isAdmin=true` users get effective rank of `admin` via `getEffectiveLeadershipRole` in `server/routes.ts`.
- Array columns in Drizzle: use `.array()` as method, not wrapper: `text().array()` not `array(text())`.
- TanStack Query v5: object form only — `useQuery({ queryKey: [...] })`.
- Frontend env vars must be prefixed `VITE_`; access via `import.meta.env.VITE_*`.
- Do NOT modify `vite.config.ts` or `drizzle.config.ts`.

## Pointers
- shadcn component rules: `.local/skills/fullstack-js/references/shadcn_component_rules.md`
- Layout/spacing: `.local/skills/fullstack-js/references/layout_and_spacing.md`
