"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirectSchema, type RedirectFormValues, type RedirectRecord, type NotFoundLogRecord } from "@/lib/validations/redirects";

// --- Redirect Actions ---

export async function getRedirects(): Promise<RedirectRecord[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("redirects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch redirects", error);
    return [];
  }
  return data as RedirectRecord[];
}

export async function saveRedirect(data: RedirectFormValues) {
  const parsedData = redirectSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: parsedData.error.issues[0].message };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const { id, old_path, new_path, status_code, active } = parsedData.data;

  // Check for duplicate old_path
  const { data: existing } = await supabase
    .from("redirects")
    .select("id")
    .eq("old_path", old_path)
    .single();

  if (existing && existing.id !== id) {
    return { success: false, error: "A redirect for this Old URL already exists" };
  }

  let result;
  if (id) {
    result = await supabase
      .from("redirects")
      .update({ old_path, new_path, status_code, active })
      .eq("id", id);
  } else {
    result = await supabase
      .from("redirects")
      .insert({ old_path, new_path, status_code, active });
  }

  if (result.error) {
    return { success: false, error: result.error.message };
  }

  revalidatePath("/admin/redirects");
  return { success: true };
}

export async function deleteRedirect(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const result = await supabase.from("redirects").delete().eq("id", id);
  if (result.error) {
    return { success: false, error: result.error.message };
  }

  revalidatePath("/admin/redirects");
  return { success: true };
}

export async function toggleRedirectActive(id: string, active: boolean) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const result = await supabase.from("redirects").update({ active }).eq("id", id);
  if (result.error) {
    return { success: false, error: result.error.message };
  }

  revalidatePath("/admin/redirects");
  return { success: true };
}

// --- 404 Monitor Actions ---

export async function getNotFoundLogs(): Promise<NotFoundLogRecord[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("not_found_logs")
    .select("*")
    .order("last_seen", { ascending: false });

  if (error) {
    console.error("Failed to fetch 404 logs", error);
    return [];
  }
  return data as NotFoundLogRecord[];
}

export async function logNotFoundPath(path: string) {
  // This is typically called by the public-facing site (not-found.tsx)
  // We don't require authentication here, but we use an admin/service client 
  // if RLS doesn't allow public inserts. Or we just use the default client if RLS is configured.
  const supabase = await createClient();
  
  // Try to find existing
  const { data: existing } = await supabase
    .from("not_found_logs")
    .select("id, hit_count")
    .eq("requested_path", path)
    .single();

  if (existing) {
    // Update hit count
    await supabase
      .from("not_found_logs")
      .update({
        hit_count: existing.hit_count + 1,
        last_seen: new Date().toISOString()
      })
      .eq("id", existing.id);
  } else {
    // Insert new
    await supabase
      .from("not_found_logs")
      .insert({
        requested_path: path,
        hit_count: 1,
        last_seen: new Date().toISOString(),
        resolved: false
      });
  }
}

export async function resolveNotFoundLog(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const result = await supabase.from("not_found_logs").update({ resolved: true }).eq("id", id);
  if (result.error) {
    return { success: false, error: result.error.message };
  }

  revalidatePath("/admin/404-monitor");
  return { success: true };
}

export async function deleteNotFoundLog(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const result = await supabase.from("not_found_logs").delete().eq("id", id);
  if (result.error) {
    return { success: false, error: result.error.message };
  }

  revalidatePath("/admin/404-monitor");
  return { success: true };
}
