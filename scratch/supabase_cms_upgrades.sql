-- ==========================================
-- AIToolsHaven CMS Upgrades (Phase 2 - Part 7)
-- ==========================================

-- 1. Create Status Enum
CREATE TYPE public.content_status AS ENUM ('Draft', 'In Review', 'Published', 'Unpublished', 'Archived');

-- 2. Add Audit & Metadata columns to Tools
ALTER TABLE public.tools 
  ADD COLUMN IF NOT EXISTS status public.content_status DEFAULT 'Draft',
  ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS last_edited_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;

-- 3. Add Audit & Metadata columns to Categories
ALTER TABLE public.categories 
  ADD COLUMN IF NOT EXISTS status public.content_status DEFAULT 'Draft',
  ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS last_edited_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;

-- 4. Revisions Table (Version History & Autosave)
-- We store the entire tool snapshot as JSONB so we can restore it exactly.
CREATE TABLE public.tool_revisions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tool_id TEXT REFERENCES public.tools(id) ON DELETE CASCADE NOT NULL,
    version_number SERIAL,
    is_autosave BOOLEAN DEFAULT false,
    content_snapshot JSONB NOT NULL,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.tool_revisions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view tool revisions" ON public.tool_revisions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can insert tool revisions" ON public.tool_revisions FOR INSERT TO authenticated WITH CHECK (true);

-- 5. Audit Log Table
CREATE TABLE public.audit_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action TEXT NOT NULL, -- e.g. 'CREATED', 'UPDATED', 'PUBLISHED', 'DELETED'
    entity_type TEXT NOT NULL, -- e.g. 'TOOL', 'CATEGORY'
    entity_id TEXT NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view audit logs" ON public.audit_logs FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can insert audit logs" ON public.audit_logs FOR INSERT TO authenticated WITH CHECK (true);

-- 6. Grant Permissions (ensure service_role can access new tables)
GRANT ALL ON TABLE public.tool_revisions TO service_role;
GRANT ALL ON TABLE public.audit_logs TO service_role;
GRANT ALL ON SEQUENCE public.tool_revisions_version_number_seq TO service_role;
