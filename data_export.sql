--
-- Hospital Standards Challenge - Data Migration
-- From Replit to Render (hospitalstandardschallenge.com)
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

-- 2. Real user (admin)
INSERT INTO users (id, username, password, is_admin, daily_goal, reminder_enabled, created_at, first_name, last_name, facility_id)
VALUES (4, 'akshaysaluja', '8e1ad9b3ec795b57fad2d3ac79ea97ec616f8ee404dd85c5ab0c41c18cd5fc978859189c2e9be251a162ae09bdd973ba39a2900f6df3c36d24bcaa93cef5217c.09cc1e65aa8ed06e0cdd9f8aa03c1dc3', true, 5, true, '2026-02-27 16:58:15.585615', '', '', 1)
ON CONFLICT (id) DO NOTHING;

-- 3. User progress
INSERT INTO user_progress (id, user_id, level_id, score, total_questions, best_score, completed, completed_at)
VALUES (2, 4, 'environment', 2, 20, 2, true, '2026-03-04 20:16:40.901')
ON CONFLICT (id) DO NOTHING;

-- 4. User streaks
INSERT INTO user_streaks (id, user_id, current_streak, longest_streak, last_played_date, total_xp)
VALUES (4, 4, 0, 1, '2026-03-04', 30)
ON CONFLICT (id) DO NOTHING;

-- 5. Saved quiz sessions
INSERT INTO quiz_sessions (id, user_id, level_id, question_order, answers, current_question, correct_answers, xp_earned, updated_at)
VALUES (15, 4, 'spd_decontam', '{spd9,spd14,spd12,spd20,spd16,spd7,spd15,spd1,spd10,spd8,spd17,spd11,spd5,spd19,spd2,spd13,spd18,spd4,spd6,spd3}', '[{"questionId":"spd9","correct":false,"selectedIndex":0}]', 1, 0, 0, '2026-03-04 20:09:41.149')
ON CONFLICT (id) DO NOTHING;

INSERT INTO quiz_sessions (id, user_id, level_id, question_order, answers, current_question, correct_answers, xp_earned, updated_at)
VALUES (13, 4, 'transport', '{t11,t16,t1,t12,t17,t7,t18,t5,t8,t19,t13,t20,t14,t10,t15,t9,t2,t4,t6,t3}', '[{"questionId":"t11","correct":true,"selectedIndex":1},{"questionId":"t16","correct":true,"selectedIndex":1},{"questionId":"t1","correct":true,"selectedIndex":0}]', 3, 3, 45, '2026-03-01 03:00:57.011')
ON CONFLICT (id) DO NOTHING;

-- 6. Daily activity
INSERT INTO daily_activity (id, user_id, date, questions_answered, correct_answers, xp_earned)
VALUES (7, 4, '2026-02-28', 3, 3, 45)
ON CONFLICT (id) DO NOTHING;

INSERT INTO daily_activity (id, user_id, date, questions_answered, correct_answers, xp_earned)
VALUES (6, 4, '2026-03-04', 21, 2, 0)
ON CONFLICT (id) DO NOTHING;

-- 7. Reset sequences so new IDs don't collide
SELECT setval('facilities_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM facilities), 1));
SELECT setval('users_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM users), 4));
SELECT setval('user_progress_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM user_progress), 2));
SELECT setval('user_streaks_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM user_streaks), 4));
SELECT setval('quiz_sessions_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM quiz_sessions), 15));
SELECT setval('daily_activity_id_seq', GREATEST((SELECT COALESCE(MAX(id), 0) FROM daily_activity), 7));
