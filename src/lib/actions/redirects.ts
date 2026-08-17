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

import { createClient as createSupabaseAdmin } from "@supabase/supabase-js";

export async function logNotFoundPath(path: string) {
  try {
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fygifuwuseksxpcetsbo.supabase.co';

    if (serviceKey) {
      const adminClient = createSupabaseAdmin(supabaseUrl, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false }
      });
      await adminClient.rpc('increment_not_found_log', {
        p_requested_path: path
      });
      return;
    }

    const supabase = await createClient();
    await supabase.rpc('increment_not_found_log', {
      p_requested_path: path
    });
  } catch (err) {
    // Silent catch for telemetry
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
