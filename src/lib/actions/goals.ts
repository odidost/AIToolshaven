"use server";

import { createClient } from "@/lib/supabase/server";
import { goalSchema, type GoalFormValues } from "@/lib/validations/goals";
import { revalidatePath } from "next/cache";

export async function saveGoal(slug: string, data: GoalFormValues) {
  const supabase = await createClient();
  
  const validatedData = goalSchema.parse(data);

  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !session) return { success: false, error: "Unauthorized" };

  const isNew = slug === 'new';
  const dbData = {
    ...validatedData,
    last_edited_by: session.user.id,
    updated_at: new Date().toISOString(),
  };

  if (isNew) dbData.id = crypto.randomUUID();

  const { error } = await supabase
    .from('goals')
    .upsert((isNew ? { ...dbData, created_by: session.user.id } : dbData) as any, { onConflict: 'slug' });

  if (error) return { success: false, error: error.message };

  await supabase.from('audit_logs').insert({
    user_id: session.user.id,
    action: isNew ? 'CREATED' : 'UPDATED',
    entity_type: 'GOAL',
    entity_id: dbData.slug,
    details: { status: dbData.status }
  });

  revalidatePath('/admin/cms/goals');
  revalidatePath(`/admin/cms/goals/${dbData.slug}`);

  return { success: true, slug: dbData.slug };
}

export async function duplicateGoal(slug: string) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return { success: false, error: "Unauthorized" };

  const { data: original, error: fetchErr } = await supabase
    .from('goals')
    .select('*')
    .eq('slug', slug)
    .single();

  if (fetchErr || !original) return { success: false, error: "Goal not found" };

  const newSlug = `${original.slug}-copy-${Math.floor(Math.random() * 1000)}`;
  
  const copyData = {
    ...original,
    id: crypto.randomUUID(),
    title: `${original.title} (Copy)`,
    slug: newSlug,
    status: 'Draft',
    created_by: session.user.id,
    last_edited_by: session.user.id,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const { error: insertErr } = await supabase.from('goals').insert(copyData as any);

  if (insertErr) return { success: false, error: insertErr.message };

  revalidatePath('/admin/cms/goals');
  return { success: true, slug: newSlug };
}
