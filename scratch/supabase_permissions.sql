-- Grant full access to the service role (used by our server backend)
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO service_role;

-- Grant read access to the anonymous and authenticated roles (used by public users)
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO authenticated;

-- Since the tables have RLS enabled, granting SELECT to anon/authenticated is perfectly safe!
-- RLS policies will still block unauthorized rows from being returned.
