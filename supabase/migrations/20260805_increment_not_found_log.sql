-- Migration to add atomic increment function for not_found_logs
-- This prevents race conditions and 406/409 errors on the Next.js frontend

CREATE OR REPLACE FUNCTION increment_not_found_log(p_requested_path TEXT)
RETURNS void
LANGUAGE sql
AS $$
  INSERT INTO not_found_logs (requested_path, hit_count, last_seen, resolved)
  VALUES (p_requested_path, 1, now(), false)
  ON CONFLICT (requested_path)
  DO UPDATE SET
    hit_count = not_found_logs.hit_count + 1,
    last_seen = EXCLUDED.last_seen;
$$;
