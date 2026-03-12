--
-- Hospital Standards Challenge - Production Data Cleanup
-- Run this on your Render PostgreSQL to reset akshaysaluja to a clean state
--
-- Usage: psql YOUR_RENDER_DATABASE_URL -f data_cleanup_production.sql
--

-- Remove test progress, sessions, and activity
DELETE FROM daily_activity WHERE user_id = 4;
DELETE FROM quiz_sessions WHERE user_id = 4;
DELETE FROM user_progress WHERE user_id = 4;

-- Reset streak to zero
UPDATE user_streaks SET current_streak = 0, longest_streak = 0, last_played_date = NULL, total_xp = 0 WHERE user_id = 4;

-- Confirm clean state
SELECT 'Users:' as info, count(*) as count FROM users
UNION ALL
SELECT 'Progress:', count(*) FROM user_progress WHERE user_id = 4
UNION ALL
SELECT 'Sessions:', count(*) FROM quiz_sessions WHERE user_id = 4
UNION ALL
SELECT 'Activity:', count(*) FROM daily_activity WHERE user_id = 4;

SELECT current_streak, longest_streak, last_played_date, total_xp FROM user_streaks WHERE user_id = 4;
