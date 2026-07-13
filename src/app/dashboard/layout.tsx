import { DashboardContainer } from "@/components/layout/DashboardContainer";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/login');
  }

  // Fetch the user's profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return (
    <DashboardContainer className="py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <DashboardSidebar profile={profile} email={user.email || ''} />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </DashboardContainer>
  );
}
