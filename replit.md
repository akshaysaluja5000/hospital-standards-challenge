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
- Username-based password reset (forgot password flow)
- 6 levels based on Joint Commission audit domains
- Multiple choice questions + swipe cards for yes/no questions
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
- `client/src/pages/` - Auth, Dashboard, Play, Profile, Admin pages
- `client/src/components/` - SwipeCard, QuizCard, StreakFlame, XpBar, LevelCard, DailyCalendar
- `client/src/lib/auth.tsx` - Auth context provider

## Theme
- Primary: Vibrant green (Duolingo-inspired)
- Font: Nunito (rounded, friendly)
- Color-coded levels: green, blue, purple, orange, pink, teal

## Levels
1. Transport of Instruments
2. Environment & Surfaces
3. Clean vs. Dirty
4. Sterile Storage
5. Instrument Integrity
6. Facilities & Equipment

## Admin
First registered user automatically becomes admin with access to /admin dashboard.
