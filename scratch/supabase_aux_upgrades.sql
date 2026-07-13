-- ==========================================
-- AIToolsHaven CMS Auxiliary Upgrades
-- ==========================================

-- 1. Add Audit & Metadata columns to Comparisons
ALTER TABLE public.comparisons 
  ADD COLUMN IF NOT EXISTS status public.content_status DEFAULT 'Draft',
  ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS last_edited_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;

-- 2. Add Audit & Metadata columns to Workflows
ALTER TABLE public.workflows 
  ADD COLUMN IF NOT EXISTS status public.content_status DEFAULT 'Draft',
  ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS last_edited_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;

-- 3. Add Audit & Metadata columns to Goals
ALTER TABLE public.goals 
  ADD COLUMN IF NOT EXISTS status public.content_status DEFAULT 'Draft',
  ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS last_edited_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;
