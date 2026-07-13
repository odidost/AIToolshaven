"use server";

import { createClient } from "@/lib/supabase/server";
import { toolSchema, type ToolFormValues } from "@/lib/validations/tools";
import { revalidatePath } from "next/cache";

export async function saveTool(data: ToolFormValues) {
  // Validate data on the server
  const parsedData = toolSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: (parsedData.error as any).errors[0].message };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const toolData = parsedData.data;
  
  // Construct the database object
  const dbRecord = {
    ...toolData,
    last_edited_by: user.id,
    updated_at: new Date().toISOString(),
  };

  let result;
  if (toolData.id) {
    // Update existing
    result = await supabase
      .from("tools")
      .update(dbRecord as any)
      .eq("id", toolData.id);
  } else {
    // Insert new
    result = await supabase
      .from("tools")
      .insert({
        ...dbRecord,
        created_by: user.id,
        created_at: new Date().toISOString(),
      } as any);
  }

  if (result.error) {
    console.error("Supabase Error:", result.error);
    return { success: false, error: result.error.message };
  }

  revalidatePath("/admin/cms/tools");
  revalidatePath(`/admin/cms/tools/${toolData.slug}`);
  revalidatePath(`/tool/${toolData.slug}`);
  revalidatePath("/");

  return { success: true };
}
