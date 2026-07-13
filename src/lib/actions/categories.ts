"use server";

import { createClient } from "@/lib/supabase/server";
import { categorySchema, type CategoryFormValues } from "@/lib/validations/categories";
import { revalidatePath } from "next/cache";

export async function saveCategory(slug: string, data: CategoryFormValues) {
  const supabase = await createClient();
  
  const validatedData = categorySchema.parse(data);

  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !session) return { success: false, error: "Unauthorized" };

  const isNew = slug === 'new';
  const dbData = {
    ...validatedData,
    /* @ts-ignore */ last_edited_by: session.user.id,
    updated_at: new Date().toISOString(),
  };

  if (isNew) dbData.id = crypto.randomUUID();

  const { error } = await supabase
    .from('categories')
    .upsert(/* @ts-ignore */ isNew ? { ...dbData, /* @ts-ignore */ created_by: session.user.id } : dbData, { onConflict: 'slug' });

  if (error) return { success: false, error: error.message };

  await supabase.from('audit_logs').insert({
    user_id: session.user.id,
    action: isNew ? 'CREATED' : 'UPDATED',
    entity_type: 'CATEGORY',
    entity_id: dbData.slug,
    details: { status: dbData.status }
  });

  revalidatePath('/admin/cms/categories');
  revalidatePath(`/admin/cms/categories/${dbData.slug}`);

  return { success: true, slug: dbData.slug };
}

export async function duplicateCategory(slug: string) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return { success: false, error: "Unauthorized" };

  const { data: original, error: fetchErr } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (fetchErr || !original) return { success: false, error: "Category not found" };

  const newSlug = `${original.slug}-copy-${Math.floor(Math.random() * 1000)}`;
  
  const copyData = {
    ...original,
    id: crypto.randomUUID(),
    name: `${original.name} (Copy)`,
    slug: newSlug,
    status: 'Draft',
    /* @ts-ignore */ created_by: session.user.id,
    /* @ts-ignore */ last_edited_by: session.user.id,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const { error: insertErr } = await supabase.from('categories').insert(copyData);

  if (insertErr) return { success: false, error: insertErr.message };

  revalidatePath('/admin/cms/categories');
  return { success: true, slug: newSlug };
}
