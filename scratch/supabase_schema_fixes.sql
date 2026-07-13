-- ==========================================
-- AIToolsHaven CMS Schema Fixes
-- ==========================================

-- Add the missing 'tools' column to workflows and comparisons
-- This column is a JSONB array of strings storing the tool slugs or IDs involved.

ALTER TABLE public.workflows 
  ADD COLUMN IF NOT EXISTS tools JSONB DEFAULT '[]'::jsonb;

ALTER TABLE public.comparisons 
  ADD COLUMN IF NOT EXISTS tools JSONB DEFAULT '[]'::jsonb;

-- Also fix any categories constraint if id is a UUID
-- Nothing strictly needed here since upserting by slug works.
