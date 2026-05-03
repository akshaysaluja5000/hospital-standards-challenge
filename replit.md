# Hospital Standards Challenge - Joint Commission Compliance Training Game

## Overview
This project is a gamified SaaS learning application designed to transform Joint Commission compliance audits into an engaging educational experience. Inspired by Duolingo, it incorporates features like streaks, XP, levels, and swipeable cards to enhance user engagement. The application is licensed per facility to hospitals and is deployed at accreditationready.ai. The business vision is to provide an intuitive and effective platform for healthcare professionals to master compliance standards, ultimately improving patient safety and operational excellence within healthcare facilities. The market potential lies in offering a scalable and user-friendly solution to a critical and often dry aspect of hospital administration.

## User Preferences
I prefer iterative development with clear communication on major architectural decisions. When making changes, please ask for confirmation before proceeding with significant modifications to the codebase or feature set. I value detailed explanations of complex functionalities, especially concerning AI integrations and database interactions.

## System Architecture
The application is built with a modern web stack. The **Frontend** uses React, TypeScript, Tailwind CSS for styling, and Framer Motion for animations, providing a dynamic and visually appealing user interface. The **Backend** is powered by Express.js, handling API requests and session-based authentication via `passport-local`. **PostgreSQL** serves as the database, managed with Drizzle ORM for type-safe database interactions. Routing is handled by `wouter`, and state management leverages TanStack React Query for efficient data fetching and caching.

**Core Features & Design:**
- **Authentication**: Username/password authentication with facility-based isolation ensuring data segregation.
- **Gamification**: 11 levels based on Joint Commission audit domains, each with 20 questions, and a "Deep Dive Tracer" mode for advanced learning. Features streaks, XP, and leveling systems.
- **Study & Practice**: "Study Mode" with a Quizlet-beating flip-card experience. Cards have front (prompt) + back (answer + key rule) with animated transitions. Category badges color-code each card as Rule/Definition/Scenario/Mistake/Number/Tip. "Got It" (emerald) / "Review Again" (orange) buttons track session progress. Session complete screen shows known vs. review counts with "Run Again" and "Review Marked" actions. Keyboard shortcuts: Space=flip, →=Got It, ←=Back. All 11 hospital levels have been expanded from 5 to 10–12 focused flashcards each. Multiple-choice questions and Yes/No swipe cards also available. Quiz sessions are persistent, allowing users to resume gameplay.
- **Compliance Handbook**: A searchable reference guide with 11 chapters, expandable sections, and critical value tables.
- **Leaderboard & Analytics**: Facility-scoped leaderboards, daily goals, activity calendar, and an admin dashboard for user tracking.
- **AI Integrations**:
    - **AI Tutor (Anthropic Claude Haiku)**: Provides multi-depth explanations for quiz questions (Level 1: practical, Level 2: regulatory/common citations, Level 3: expert masterclass). Includes text-to-speech functionality.
    - **AI Micro-Debriefs**: Summarizes level performance for managers, suggesting huddle topics and questions.
    - **AI Handbook Search**: Allows users to query the handbook content with AI-powered answers and inline references.
    - **AI Leadership Coach (Admin-only)**: Generates leadership insights based on staff performance, identifying focus areas and recommended actions.
- **Assessments**:
    - **Diagnostic Quiz**: A pre-test to assess initial knowledge across all topics, providing a score breakdown without in-quiz feedback.
    - **Final Assessment (Mastery Exam)**: A post-test requiring completion of certain content to unlock, evaluating mastery without per-question feedback.
- **UI/UX**: Features a "Vivid Professional" color palette with saturated greens, deep purples, and real shadows. Uses the Nunito font for a friendly appearance.
- **Module Separation**: Supports both "Hospital" and "ASC" (Ambulatory Surgical Center) modules with distinct content, user roles, and segregated data on leaderboards and statistics. A role-selection wizard guides users to choose their facility type and specific roles.
- **ASC Module Coverage (May 2026)**: 11 published ASC chapter quizzes (165 questions total): Patient Rights, Governance, Credentialing, Administration, Quality of Care, Quality Management (QAPI), Clinical Records, Infection Prevention, Facilities & Environment, Anesthesia & Surgical Services (covers AAAHC Ch 9 + Ch 10), and Pharmaceutical Services. Elective chapters intentionally Reading-only: Pathology (Ch 12), Imaging (Ch 13), Teaching (Ch 18), Research (Ch 19), Overnight Care (Ch 20), Radiation Oncology (Ch 24). Chapter numbers follow AAAHC's official handbook; gaps (Ch 14–17, 21–23) are non-ASC adjunct standards.

## Compliance Operations Layer (CAP + Executive Report)

### Facility-Scoped Role System (`shared/facility-roles.ts`)
Five facility roles orthogonal to the study/training roles: `staff`, `manager`, `admin`, `ceo`, `super_admin`. Each has a `FacilityPermissions` object controlling: `canViewExecutiveReport`, `canViewAllDepartments`, `canViewAllFacilities`, `canExportReports`, `canSwitchFacility`, `canCreateActions`, `canViewAuditLog`.

Mock facility catalog: `facility_mosh` (Midwest Orthopedic Specialty Hospital), `facility_ohw` (Orthopedic Hospital of Wisconsin), `facility_ascension` (Ascension SE Wisconsin).

### Facility Auth Hook (`client/src/lib/facility-auth.ts`)
`useFacilityAuth()` wraps `useAuth()` and returns `{ facilityId, facilityName, facilityRole, permissions, isSuperAdmin }`. Controlled by `MOCK_PERSONA` constant at the top of the file — change it to test different personas. When `MOCK_PERSONA` is null, derives role from real auth (`isAdmin` → super_admin, `reportingScope: enterprise` → admin, `own_plus_all` → manager).

### Audit Log Scaffold (`client/src/lib/audit-log.ts`)
`auditLog({ userId, role, facilityId, facilityName, action, meta? })` records sensitive events (report views, CSV/PDF exports, action creation) to an in-memory store and `console.info`. Has a TODO stub for the future POST to `/api/audit-log`. `getAuditLog()` returns the full in-memory log.

### Corrective Action Plan (`client/src/pages/corrective-action-page.tsx`)
All 10 mock actions now have `facilityId` + `facilityName`. 7 for `facility_mosh`, 3 for `facility_ohw`. Page uses `useFacilityAuth()`: non-super_admin users only see their own hospital's actions. Create Action dialog stamps new actions with the user's facilityId. Create button hidden for CEO role (`canCreateActions: false`). Facility name shown as a badge on each card when super_admin is viewing all.

### Executive Readiness Report (`client/src/pages/executive-report-page.tsx`)
- Header subtitle shows "for [Facility Name]" using `scopedFacilityName`
- Facility selector in filters only rendered for `isSuperAdmin`
- `filtered` useMemo pre-filters by `facilityId` before any user-applied filters
- Access gate uses `permissions.canViewExecutiveReport` (ceo, admin, super_admin pass)
- `useEffect` fires `auditLog("executive_report_viewed")` on mount
- CSV export fires `auditLog("executive_report_csv_export")` and stamps filename with facility name
- PDF print fires `auditLog("executive_report_pdf_export")`
- Narrative says "at [Facility Name]" for scoped users, "across N facilities" for super_admin
- Facility scope pill shown in Executive Summary signal pills when not super_admin

## External Dependencies
- **Anthropic (Claude Haiku)**: Integrated for AI Tutor, AI Micro-Debriefs, AI Handbook Search, and AI Leadership Coach functionalities via Replit AI Integrations.
- **PostgreSQL**: The primary database for storing all application data, managed through Drizzle ORM.
- **Express.js**: Used as the backend framework for handling API requests and server-side logic.
- **React**: The main library for building the user interface.
- **TypeScript**: Provides type safety across the frontend and backend.
- **Tailwind CSS**: Used for rapid UI development and styling.
- **Framer Motion**: Utilized for animations and interactive UI components.
- **TanStack React Query**: Manages server state and data fetching.
- **Passport.js (passport-local strategy)**: Handles user authentication.
- **wouter**: A minimalist routing library for the React frontend.