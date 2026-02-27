# ComplianceQuest - Joint Commission Compliance Training Game

## Overview
A gamified learning app that turns Joint Commission compliance audits into an engaging game. Built with a Duolingo-inspired design featuring streaks, XP, levels, and swipeable cards.

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Express.js with session-based auth (passport-local)
- **Database**: PostgreSQL (Drizzle ORM)
- **Routing**: wouter
- **State Management**: TanStack React Query

## Key Features
- Username/password authentication (no email required)
- Guest mode: play all levels without an account (progress/streaks/XP not saved)
- Username-based password reset (forgot password flow)
- 11 levels based on Joint Commission audit domains (~13-15 questions each, 153 total)
- Study Mode with key concepts before each level (5 study cards per level)
- Multiple choice questions + Yes/No button cards
- Compliance Handbook: searchable reference guide with 11 chapters, expandable sections, critical values tables, "Think About It" scenarios, and quick reference view
- Streak system with animated flame icon
- XP/leveling system
- Daily goals with progress tracking (reminders toggle is UI-only, no emails sent)
- Activity calendar
- Admin dashboard for user tracking

## Database Tables
- `users` - Auth and profile data
- `user_progress` - Level completion and scores
- `user_streaks` - Current/longest streaks and total XP
- `daily_activity` - Daily question/answer tracking

## File Structure
- `shared/schema.ts` - Database schemas and TypeScript types
- `shared/questions.ts` - Question bank organized by levels
- `server/routes.ts` - API endpoints with auth middleware
- `server/storage.ts` - Database CRUD operations
- `client/src/pages/` - Auth, Dashboard, Play, Study, Profile, Admin pages
- `shared/handbook.ts` - Compliance Handbook content (11 chapters with sections, critical values, scenarios)
- `client/src/pages/handbook-page.tsx` - Handbook UI with search, expandable sections, quick reference
- `client/src/components/` - SwipeCard, QuizCard, StreakFlame, XpBar, LevelCard, DailyCalendar
- `client/src/lib/auth.tsx` - Auth context provider

## Theme
- Primary: Vibrant green (Duolingo-inspired)
- Font: Nunito (rounded, friendly)
- Color-coded levels: green, blue, purple, orange, pink, teal, yellow, red, emerald, indigo

## Levels (10 total, covering all 7 source PDFs)
1. Transport of Instruments (14 questions)
2. Environment & Surfaces (14 questions)
3. Clean vs. Dirty (14 questions)
4. Sterile Storage (15 questions)
5. Instrument Integrity (13 questions)
6. Facilities & Equipment (15 questions)
7. SPD & Decontamination (14 questions)
8. OR & Sterile Technique (13 questions)
9. Surgical Safety & Consent (13 questions)
10. Patient Care & Documentation (14 questions)

## Source PDFs Covered
- Infection Prevention (11 pages)
- Sterile Processing (6 pages)
- EOC Rounding (15 pages)
- Regulatory Rounding Surgery (16 pages)
- Surgery Comprehensive Documentation (13 pages)
- Comprehensive Documentation (19 pages)
- Transport of Instruments (2 pages)

## Admin
First registered user automatically becomes admin with access to /admin dashboard.
