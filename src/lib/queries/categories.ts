import { createClient } from "@supabase/supabase-js";
import type { ToolCategory } from "@/lib/types/category";
import { categories as localCategories } from "@/lib/data/categories";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fygifuwuseksxpcetsbo.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Wtq6w9BRd1-O_xZxnTh5Zw_kPQbLYUM';

const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  }
);

import { resolveCategory } from "@/lib/data/categories";

export async function getAllCategories(): Promise<ToolCategory[]> {
    try {
        const { data, error } = await supabase.from('categories').select('*');
        if (error) {
            return localCategories;
        }
        return data || localCategories;
    } catch {
        return localCategories;
    }
}

export async function getCategoryById(id: string): Promise<ToolCategory | undefined> {
    try {
        const resolved = resolveCategory(id);
        const { data, error } = await supabase.from('categories').select('*').or(`id.eq.${id},slug.eq.${id},id.eq.${resolved.id}`).limit(1).maybeSingle();
        if (error || !data) {
            return resolved;
        }
        return data;
    } catch {
        return resolveCategory(id);
    }
}

export async function getCategoryBySlug(rawSlug: string): Promise<ToolCategory | undefined> {
    try {
        const slug = decodeURIComponent(rawSlug);
        const resolved = resolveCategory(slug);
        const { data, error } = await supabase.from('categories').select('*').or(`slug.eq.${slug},id.eq.${resolved.id}`).limit(1).maybeSingle();
        if (error || !data) {
            return resolved;
        }
        return data;
    } catch {
        return resolveCategory(rawSlug);
    }
}