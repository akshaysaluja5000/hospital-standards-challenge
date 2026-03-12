--
-- Hospital Standards Challenge - Production Data Setup
-- For hospitalstandardschallenge.com (Render)
--
-- INSTRUCTIONS:
-- 1. First deploy the app to Render so the schema gets created (npm run db:push)
-- 2. Then run this against your Render PostgreSQL:
--    psql YOUR_RENDER_DATABASE_URL -f data_export.sql
--

-- 1. Facility
INSERT INTO facilities (id, name, code, created_at)
VALUES (1, 'Midwest Orthopedic Specialty Hospital', 'SITE486045', '2026-02-27 22:30:00.90299')
ON CONFLICT (id) DO NOTHING;

-- 2. Admin user (clean start - no test progress)
INSERT INTO users (id, username, password, is_admin, daily_goal, reminder_enabled, created_at, first_name, last_name, facility_id)
VALUES (4, 'akshaysaluja', '8e1ad9b3ec795b57fad2d3ac79ea97ec616f8ee404dd85c5ab0c41c18cd5fc978859189c2e9be251a162ae09bdd973ba39a2900f6df3c36d24bcaa93cef5217c.09cc1e65aa8ed06e0cdd9f8aa03c1dc3', true, 5, true, '2026-02-27 16:58:15.585615', '', '', 1)
ON CONFLICT (id) DO NOTHING;

-- 3. Clean streak entry (zero progress)
INSERT INTO user_streaks (id, user_id, current_streak, longest_streak, last_played_date, total_xp)
VALUES (4, 4, 0, 0, NULL, 0)
ON CONFLICT (id) DO NOTHING;

-- 4. Reset sequences
SELECT setval('facilities_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM facilities), 1));
SELECT setval('users_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM users), 4));
SELECT setval('user_progress_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM user_progress), 1));
SELECT setval('user_streaks_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM user_streaks), 4));
SELECT setval('quiz_sessions_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM quiz_sessions), 1));
SELECT setval('daily_activity_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM daily_activity), 1));
