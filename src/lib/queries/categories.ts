import { createClient } from "@supabase/supabase-js";
import type { ToolCategory } from "@/lib/types/category";
import { categories as localCategories, resolveCategory } from "@/lib/data/categories";
import { safeCache } from "@/lib/data/tools-service";

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
    const fetchAll = async (): Promise<ToolCategory[]> => {
        try {
            const { data, error } = await supabase.from('categories').select('*');
            if (error) {
                return localCategories;
            }
            return data || localCategories;
        } catch {
            return localCategories;
        }
    };
    return (safeCache(fetchAll, ['all_categories'], { revalidate: 3600 })() as Promise<ToolCategory[]>);
}

export async function getCategoryById(id: string): Promise<ToolCategory | undefined> {
    const fetchById = async (): Promise<ToolCategory | undefined> => {
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
    };
    return (safeCache(fetchById, ['category_by_id', id], { revalidate: 3600 })() as Promise<ToolCategory | undefined>);
}

export async function getCategoryBySlug(rawSlug: string): Promise<ToolCategory | undefined> {
    const fetchBySlug = async (): Promise<ToolCategory | undefined> => {
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
    };
    return (safeCache(fetchBySlug, ['category_by_slug', rawSlug], { revalidate: 3600 })() as Promise<ToolCategory | undefined>);
}