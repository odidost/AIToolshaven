import { requireAuthAndRole } from '@/lib/auth/rbac';
import { Sidebar } from '@/components/admin/Sidebar';
import { TopToolbar } from '@/components/admin/TopToolbar';
import { redirect } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

export default async function CMSLayout({ children }: { children: React.ReactNode }) {
  // Ensure the user has at least "writer" role to view the dashboard
  const { user, role, isAuthorized } = await requireAuthAndRole('writer');

  if (!isAuthorized || !user) {
    redirect('/admin/login');
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar userEmail={user.email || 'Unknown User'} role={role || 'writer'} />

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-white">
        <TopToolbar userEmail={user.email || 'Unknown User'} />

        <div className="flex-1 overflow-y-auto relative p-6">
          {children}
        </div>
      </main>
      
      <Toaster />
      <Sonner />
    </div>
  );
}
