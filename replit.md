# Hospital Standards Challenge - Joint Commission Compliance Training Game

## Overview
A gamified SaaS learning app that turns Joint Commission compliance audits into an engaging game. Built with a Duolingo-inspired design featuring streaks, XP, levels, and swipeable cards. Designed for per-facility licensing to hospitals. Deployed to accreditationready.ai.

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
- 11 levels based on Joint Commission audit domains (20 questions each, 220 total) — ALL unlocked from start (no sequential gating)
- No pass/fail threshold — every completion is recorded, with tiered feedback (Excellent 80%+, Good 50%+, Keep Studying)
- Study Mode with key concepts before each level (5 study cards per level)
- Multiple choice questions (4 options) + Yes/No swipe cards (2 options)
- Quiz session persistence: users can leave mid-level and resume where they left off (question order, answers, XP all preserved)
- Quit dialog during gameplay: Save & Exit, Start Over (new question order), Quit Without Saving, Continue Playing
- Dashboard level cards show "In Progress" badge with Continue/Start Over buttons when a saved session exists
- Questions are shuffled each playthrough (randomized order); shuffle note displayed on dashboard and completion screen
- Compliance Handbook: searchable reference guide with 11 chapters, expandable sections, critical values tables, "Think About It" scenarios, and quick reference view
- Leaderboard: all logged-in users can see rankings by XP, accuracy, levels completed, streaks — scoped by facility
- Streak system with animated flame icon
- XP/leveling system
- Daily goals with progress tracking (reminders toggle is UI-only, no emails sent)
- Activity calendar
- Admin dashboard for user tracking (facility-scoped)
- Terms of Use / Privacy / Disclaimer page (public, no auth required)
- "Not affiliated with The Joint Commission" disclaimer on dashboard and landing page
- **Deep Dive Tracer**: Branching follow-up question mode — answer a base question correctly to unlock a deeper expert-level follow-up. Earns "Expert XP" for deeper knowledge. Full game flow with shuffled questions, session save/restore, save-and-exit, quit dialog (Save & Exit, Start Over, Quit Without Saving, Continue Playing), and pick-up-where-you-left-off. ALL 11 sections covered (20 questions each, 220 total): Transport of Instruments, Environment & Surfaces, Clean/Dirty Segregation, Sterile Storage & Handling, Instruments & Inspection, Facility Safety & Equipment, SPD & Decontamination, OR & Sterile Technique, Surgical Safety & Consent, Patient Care & Documentation, EOC & Safety Compliance. Questions randomized each playthrough.
- **Visual refresh**: Vivid Professional palette — more saturated primary greens, deeper purples, real shadows (not zero), game-card styling with hover effects, gradient progress bars
- **AI Tutor**: Anthropic-powered (Claude Haiku) multi-depth explanations for quiz questions (regular quiz, Deep Dive Tracer). "Ask AI Tutor" button appears after answering any question. 3 progressive depth levels: Level 1 (practical explanation, 7-8 sentences), Level 2 "Go Deeper" (regulatory history, surveyor evaluation, common citations), Level 3 "Go Even Deeper" (expert masterclass — sentinel events, best practices, leadership dimensions). Each level has a text-to-speech speaker button (Web Speech API). Rate-limited to 30 calls/user/hour shared across all AI features. Uses Replit AI Integrations (no external API key needed).
- **AI Micro-Debriefs**: After completing a 20-question level, managers can generate an AI debrief summarizing strengths/weaknesses, a suggested huddle topic, and sample huddle questions. "Generate Manager Micro-Debrief" button on completion screen.
- **AI Handbook Search**: "Ask About Standards" search box on the Handbook page. Users type a question, AI searches curated handbook content and answers with inline references to handbook sections. For education and preparation only.
- **AI Leadership Coach**: Admin-only feature on the Admin Dashboard. Aggregates per-level quiz performance across all facility staff and generates AI-powered leadership insights: unit readiness snapshot, priority focus areas, recommended actions (in-services, practice assignments), and engagement insights. Facility-scoped (only shows data for admin's facility). Uses shared 30 calls/user/hour rate limit.

- **Diagnostic Quiz**: 55-question pre-test (5 per section, all 11 topics). No correct/incorrect feedback during quiz — just pick and move on. Score and section breakdown shown at end. Encourages new users to take it first. Dashboard CTA shown to users who haven't taken it yet. Different teal/cyan color scheme. Supports back-navigation (change previous answers), explicit Next button, Save & Exit with resume on return.
- **Final Assessment (Mastery Exam)**: 55-question post-test (5 per section, all 11 topics). No per-question feedback — results shown only at end. Requires completing at least 10 questions per section to unlock (admin bypass for akshaysaluja and rsaluja). Dashboard CTA shown when eligible. Different amber/orange color scheme. Supports back-navigation, Save & Exit with resume on return.

## Database Tables
- `facilities` - Hospital/facility registry (name, unique code)
- `users` - Auth and profile data, with facilityId foreign key
- `user_progress` - Level completion and scores
- `user_streaks` - Current/longest streaks and total XP
- `quiz_sessions` - In-progress quiz state (question order, answers, current position) per user per level
- `daily_activity` - Daily question/answer tracking
- `diagnostic_results` - Diagnostic quiz attempts (score, total, answers JSON, timestamp)
- `mastery_results` - Mastery exam attempts (score, total, answers JSON, timestamp)
- `diagnostic_sessions` - In-progress diagnostic quiz state (question order, answers, current position) per user
- `mastery_sessions` - In-progress final assessment state (question order, answers, current position) per user

## File Structure
- `shared/schema.ts` - Database schemas and TypeScript types
- `shared/questions.ts` - Question bank organized by levels
- `server/routes.ts` - API endpoints with auth middleware
- `server/storage.ts` - Database CRUD operations
- `client/src/pages/` - Landing, Auth, Dashboard, Play, Study, Profile, Admin, Leaderboard, Handbook, Terms, DeepDiveSelect, DeepDive, DiagnosticQuiz, MasteryExam pages
- `shared/handbook.ts` - Compliance Handbook content (11 chapters with sections, critical values, scenarios)
- `shared/deep-dive-questions.ts` - Deep Dive consolidation file (imports and re-exports all 11 sections)
- `shared/deep-dive-questions-*.ts` - Deep Dive branching question content split across multiple files (transport, sterile, part1, part2, part3a-d)
- `client/src/components/` - SwipeCard, QuizCard, AiTutorBox, StreakFlame, XpBar, LevelCard, DailyCalendar
- `server/replit_integrations/` - Anthropic AI integration (chat routes, batch processing utilities)
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
- `/deep-dive` - Deep Dive topic selection (auth required)
- `/deep-dive/:levelId` - Deep Dive gameplay with branching questions (auth required)
- `/leaderboard` - Rankings (auth required)
- `/profile` - User profile & settings (auth required)
- `/admin` - Admin dashboard (admin only)
- `/diagnostic` - Diagnostic Quiz pre-test (auth required)
- `/mastery` - Mastery Exam post-test (auth required, eligibility-gated)
