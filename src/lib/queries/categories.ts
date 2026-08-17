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
        const { data, error } = await supabase.from('categories').select('*').eq('id', id).single();
        if (error || !data) {
            return localCategories.find(c => c.id === id);
        }
        return data;
    } catch {
        return localCategories.find(c => c.id === id);
    }
}

export async function getCategoryBySlug(rawSlug: string): Promise<ToolCategory | undefined> {
    try {
        const slug = decodeURIComponent(rawSlug);
        const { data, error } = await supabase.from('categories').select('*').eq('slug', slug).single();
        if (error || !data) {
            return localCategories.find(c => c.slug === slug);
        }
        return data;
    } catch {
        const slug = decodeURIComponent(rawSlug);
        return localCategories.find(c => c.slug === slug);
    }
}