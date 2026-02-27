# ComplianceQuest - Joint Commission Compliance Training Game

## Overview
A gamified SaaS learning app that turns Joint Commission compliance audits into an engaging game. Built with a Duolingo-inspired design featuring streaks, XP, levels, and swipeable cards. Designed for per-facility licensing to hospitals.

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Express.js with session-based auth (passport-local)
- **Database**: PostgreSQL (Drizzle ORM)
- **Routing**: wouter
- **State Management**: TanStack React Query

## Key Features
- Username/password authentication (no email required)
- Facility-based isolation: users register with a facility code, leaderboards and admin stats scoped per facility
- Public marketing landing page for unauthenticated visitors (no guest gameplay access)
- Username-based password reset (forgot password flow)
- Profile page with username/password change functionality
- 11 levels based on Joint Commission audit domains (~13-14 questions each) — ALL unlocked from start (no sequential gating)
- No pass/fail threshold — every completion is recorded, with tiered feedback (Excellent 80%+, Good 50%+, Keep Studying)
- Study Mode with key concepts before each level (5 study cards per level)
- Multiple choice questions + Yes/No button cards
- Quiz session persistence: registered users can leave mid-level and resume where they left off (question order, answers, XP all preserved)
- Compliance Handbook: searchable reference guide with 11 chapters, expandable sections, critical values tables, "Think About It" scenarios, and quick reference view
- Leaderboard: all logged-in users can see rankings by XP, accuracy, levels completed, streaks — scoped by facility
- Streak system with animated flame icon
- XP/leveling system
- Daily goals with progress tracking (reminders toggle is UI-only, no emails sent)
- Activity calendar
- Admin dashboard for user tracking (facility-scoped)
- Terms of Use / Privacy / Disclaimer page (public, no auth required)
- "Not affiliated with The Joint Commission" disclaimer on dashboard and landing page

## Database Tables
- `facilities` - Hospital/facility registry (name, unique code)
- `users` - Auth and profile data, with facilityId foreign key
- `user_progress` - Level completion and scores
- `user_streaks` - Current/longest streaks and total XP
- `quiz_sessions` - In-progress quiz state (question order, answers, current position) per user per level
- `daily_activity` - Daily question/answer tracking

## File Structure
- `shared/schema.ts` - Database schemas and TypeScript types
- `shared/questions.ts` - Question bank organized by levels
- `server/routes.ts` - API endpoints with auth middleware
- `server/storage.ts` - Database CRUD operations
- `client/src/pages/` - Landing, Auth, Dashboard, Play, Study, Profile, Admin, Leaderboard, Handbook, Terms pages
- `shared/handbook.ts` - Compliance Handbook content (11 chapters with sections, critical values, scenarios)
- `client/src/components/` - SwipeCard, QuizCard, StreakFlame, XpBar, LevelCard, DailyCalendar
- `client/src/lib/auth.tsx` - Auth context provider

## Theme
- Primary: Vibrant green (Duolingo-inspired)
- Font: Nunito (rounded, friendly)
- Color-coded levels: green, blue, purple, orange, pink, teal, yellow, red, emerald, indigo

## Facility System
- Default facility: "Midwest Orthopedic Specialty Hospital" (code: SITE486045)
- Users register with optional facility code to join a facility
- Leaderboard and admin stats are scoped to the user's facility
- Supports multi-hospital deployment with one codebase

## Admin
- First registered user automatically becomes admin with access to /admin dashboard
- Admin user: akshaysaluja (facilityId: 1, SITE486045)
- Admin sees only users from their own facility

## Routes
- `/` - Landing page (public) or Dashboard (authenticated)
- `/auth` - Login / Register
- `/terms` - Terms, Privacy, Disclaimer (public)
- `/play/:levelId` - Quiz gameplay (auth required)
- `/study/:levelId` - Study mode (auth required)
- `/handbook` - Compliance Handbook (auth required)
- `/leaderboard` - Rankings (auth required)
- `/profile` - User profile & settings (auth required)
- `/admin` - Admin dashboard (admin only)
