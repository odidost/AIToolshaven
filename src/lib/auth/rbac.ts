import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/server';
import { createServerClient } from '@supabase/ssr';

function getAdminClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() { return [] },
        setAll() {}
      }
    }
  );
}

export type AppRole = 'super_admin' | 'admin' | 'editor' | 'reviewer' | 'writer';

/**
 * Maps a role to its priority level for hierarchical checks.
 * Higher number = more privileges.
 */
const ROLE_HIERARCHY: Record<AppRole, number> = {
  super_admin: 100,
  admin: 80,
  editor: 60,
  reviewer: 40,
  writer: 20,
};

export async function getUserRole(supabase: SupabaseClient, userId: string): Promise<AppRole | null> {
  const adminClient = getAdminClient();
  const { data, error } = await adminClient
    .from('user_roles')
    .select('role')
    .eq('user_id', userId)
    .single();

  if (error || !data) {
    console.error("getUserRole ERROR:", error, "DATA:", data);
    return null;
  }

  return data.role as AppRole;
}

export async function hasRequiredRole(supabase: SupabaseClient, userId: string, requiredRole: AppRole): Promise<boolean> {
  const userRole = await getUserRole(supabase, userId);
  
  if (!userRole) {
    console.error("hasRequiredRole: NO USER ROLE FOUND for", userId);
    return false;
  }
  
  const isAuth = ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
  console.log("hasRequiredRole:", userRole, ">=", requiredRole, "->", isAuth);
  return isAuth;
}

export async function requireAuthAndRole(requiredRole: AppRole = 'writer') {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error || !user) {
    return { user: null, role: null, isAuthorized: false };
  }

  const role = await getUserRole(supabase, user.id);
  
  if (!role || ROLE_HIERARCHY[role] < ROLE_HIERARCHY[requiredRole]) {
    return { user, role, isAuthorized: false };
  }

  return { user, role, isAuthorized: true };
}
