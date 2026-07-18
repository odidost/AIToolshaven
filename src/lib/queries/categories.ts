import { createClient } from "@supabase/supabase-js";
import type { ToolCategory } from "@/lib/types/category";
import { categories as localCategories } from "@/lib/data/categories";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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
            console.error("Error fetching all categories from Supabase, falling back to local data:", error);
            return localCategories;
        }
        return data || localCategories;
    } catch (err) {
        console.error("Error connecting to Supabase in getAllCategories, falling back to local data:", err);
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
    } catch (err) {
        console.error(`Error fetching category ${id} from Supabase, falling back to local data:`, err);
        return localCategories.find(c => c.id === id);
    }
}

export async function getCategoryBySlug(slug: string): Promise<ToolCategory | undefined> {
    try {
        const { data, error } = await supabase.from('categories').select('*').eq('slug', slug).single();
        if (error || !data) {
            return localCategories.find(c => c.slug === slug);
        }
        return data;
    } catch (err) {
        console.error(`Error fetching category with slug ${slug} from Supabase, falling back to local data:`, err);
        return localCategories.find(c => c.slug === slug);
    }
}