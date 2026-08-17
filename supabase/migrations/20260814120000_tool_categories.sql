-- Migration to create tool_categories table for many-to-many relationship

CREATE TABLE IF NOT EXISTS tool_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
    category_id TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tool_id, category_id)
);

-- Enable RLS (Assuming standard Supabase RLS)
ALTER TABLE tool_categories ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Enable read access for all users" ON tool_categories
    FOR SELECT
    USING (true);

-- Allow authenticated admins to insert/update/delete (assuming service role or authenticated admins)
CREATE POLICY "Enable insert for authenticated users" ON tool_categories
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON tool_categories
    FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Enable delete for authenticated users" ON tool_categories
    FOR DELETE
    TO authenticated
    USING (true);
