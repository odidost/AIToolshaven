"use server";

import { createClient } from "@/lib/supabase/server";
import { comparisonSchema, type ComparisonFormValues } from "@/lib/validations/comparisons";
import { revalidatePath } from "next/cache";

export async function saveComparison(slug: string, data: ComparisonFormValues) {
  const supabase = await createClient();
  
  // Validate data
  const validatedData = comparisonSchema.parse(data);

  // Get current user session
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !session) {
    return { success: false, error: "Unauthorized" };
  }

  const isNew = slug === 'new';
  const dbData = {
    ...validatedData,
    last_edited_by: session.user.id,
    updated_at: new Date().toISOString(),
  };

  if (isNew) {
    dbData.id = crypto.randomUUID(); // Give it a UUID
  }

  // Upsert the comparison
  const { error } = await supabase
    .from('comparisons')
    .upsert(/* @ts-ignore */ 
      isNew ? { ...dbData, created_by: session.user.id } : dbData,
      { onConflict: 'slug' }
    );

  if (error) {
    console.error("Failed to save comparison:", error);
    return { success: false, error: error.message };
  }

  // Log action
  await supabase.from('audit_logs').insert({
    user_id: session.user.id,
    action: isNew ? 'CREATED' : 'UPDATED',
    entity_type: 'COMPARISON',
    entity_id: dbData.slug,
    details: { status: dbData.status }
  });

  revalidatePath('/admin/cms/comparisons');
  revalidatePath(`/admin/cms/comparisons/${dbData.slug}`);

  return { success: true, slug: dbData.slug };
}

export async function duplicateComparison(slug: string) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return { success: false, error: "Unauthorized" };

  // Fetch original
  const { data: original, error: fetchErr } = await supabase
    .from('comparisons')
    .select('*')
    .eq('slug', slug)
    .single();

  if (fetchErr || !original) {
    return { success: false, error: "Comparison not found" };
  }

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

  const { error: insertErr } = await supabase.from('comparisons').insert(copyData as any);

  if (insertErr) {
    return { success: false, error: insertErr.message };
  }

  revalidatePath('/admin/cms/comparisons');
  return { success: true, slug: newSlug };
}
