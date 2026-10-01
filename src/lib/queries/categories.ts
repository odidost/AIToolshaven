import { createClient } from "@supabase/supabase-js";
import type { ToolCategory } from "@/lib/types/category";
import { categories as localCategories, resolveCategory, findCategory } from "@/lib/data/categories";
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
            if (error || !data) {
                return localCategories;
            }
            const localMap = new Map(localCategories.map(c => [c.id, c]));
            return data.map((d: any) => {
                const local = localMap.get(d.id) || localCategories.find(c => c.slug === d.slug);
                return {
                    ...local,
                    ...d,
                    parentId: local?.parentId || d.parent_id || d.parentId,
                    type: local?.type || d.type,
                    indexable: local?.indexable ?? d.indexable ?? true,
                };
            });
        } catch {
            return localCategories;
        }
    };
    return (safeCache(fetchAll, ['all_categories'], { revalidate: 86400 })() as Promise<ToolCategory[]>);
}

export async function getCategoryById(id: string): Promise<ToolCategory | undefined> {
    const fetchById = async (): Promise<ToolCategory | undefined> => {
        try {
            const resolved = findCategory(id);
            const query = resolved?.id ? `id.eq.${id},slug.eq.${id},id.eq.${resolved.id}` : `id.eq.${id},slug.eq.${id}`;
            const { data, error } = await supabase.from('categories').select('*').or(query).limit(1).maybeSingle();
            if (error || !data) {
                return resolved;
            }
            const local = resolveCategory(data.id || data.slug);
            return {
                ...local,
                ...data,
                parentId: local?.parentId || data.parent_id || data.parentId,
                type: local?.type || data.type,
                indexable: local?.indexable ?? data.indexable ?? true,
            };
        } catch {
            return findCategory(id);
        }
    };
    return (safeCache(fetchById, ['category_by_id', id], { revalidate: 86400 })() as Promise<ToolCategory | undefined>);
}

export async function getCategoryBySlug(rawSlug: string): Promise<ToolCategory | undefined> {
    const fetchBySlug = async (): Promise<ToolCategory | undefined> => {
        try {
            const slug = decodeURIComponent(rawSlug);
            const resolved = findCategory(slug);
            const query = resolved?.id ? `slug.eq.${slug},id.eq.${resolved.id}` : `slug.eq.${slug}`;
            const { data, error } = await supabase.from('categories').select('*').or(query).limit(1).maybeSingle();
            if (error || !data) {
                return resolved;
            }
            const local = resolveCategory(data.id || data.slug);
            return {
                ...local,
                ...data,
                parentId: local?.parentId || data.parent_id || data.parentId,
                type: local?.type || data.type,
                indexable: local?.indexable ?? data.indexable ?? true,
            };
        } catch {
            return findCategory(rawSlug);
        }
    };
    return (safeCache(fetchBySlug, ['category_by_slug', rawSlug], { revalidate: 86400 })() as Promise<ToolCategory | undefined>);
}