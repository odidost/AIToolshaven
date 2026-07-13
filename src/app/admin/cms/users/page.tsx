import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { UsersTable } from "./UsersTable";

export default async function AdminUsersPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Admin access
  const { data: roleData } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (!roleData || !['super_admin', 'admin'].includes(roleData.role)) {
    redirect('/admin/unauthorized');
  }

  // Fetch all users/profiles and their roles
  // Supabase does not allow public querying of auth.users directly. 
  // We query public.profiles and left join user_roles.
  const { data: profiles } = await supabase
    .from('profiles')
    .select(`
      *,
      user_roles ( role )
    `)
    .order('created_at', { ascending: false });

  const formattedUsers = profiles?.map(p => ({
    ...p,
    role: p.user_roles?.[0]?.role || 'user'
  })) || [];

  return (
    <PageContainer className="py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-on-surface">User Management</h1>
          <p className="text-on-surface-variant">Manage users and assign administrative roles.</p>
        </div>
      </div>

      <div className="bg-surface border border-outline rounded-2xl overflow-hidden">
        <UsersTable initialUsers={formattedUsers} />
      </div>
    </PageContainer>
  );
}
