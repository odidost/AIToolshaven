import { createClient } from "@supabase/supabase-js";
import type { ToolCategory } from "@/lib/types/category";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getAllCategories(): Promise<ToolCategory[]> {
    const { data } = await supabase.from('categories').select('*');
    return data || [];
}

export async function getCategoryById(id: string): Promise<ToolCategory | undefined> {
    const { data } = await supabase.from('categories').select('*').eq('id', id).single();
    return data || undefined;
}

export async function getCategoryBySlug(slug: string): Promise<ToolCategory | undefined> {
    const { data } = await supabase.from('categories').select('*').eq('slug', slug).single();
    return data || undefined;
}