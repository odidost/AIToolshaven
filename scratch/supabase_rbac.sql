-- Create the RBAC Roles enum
CREATE TYPE public.app_role AS ENUM ('super_admin', 'admin', 'editor', 'reviewer', 'writer');

-- Create the user_roles table
CREATE TABLE public.user_roles (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Ensure one role per user (or remove this if users can have multiple roles)
  UNIQUE(user_id)
);

-- Turn on Row Level Security
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create policies

-- Policy 1: Users can read their own roles
CREATE POLICY "Users can read own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy 2: Service Role can do everything (default bypasses RLS, but explicit is fine)
-- Super Admins can manage roles (requires checking roles recursively or doing it via service role)
-- For this initial setup, we recommend managing roles directly via the Supabase Dashboard SQL or service_role to avoid recursion issues.

-- Create a helper function to easily get the current user's role in future SQL queries
CREATE OR REPLACE FUNCTION public.get_my_role()
RETURNS public.app_role
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.user_roles WHERE user_id = auth.uid() LIMIT 1;
$$;
