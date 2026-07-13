import { createClient } from '@/lib/supabase/server'
import { requireAuthAndRole } from '@/lib/auth/rbac'
import Link from 'next/link'

export default async function CMSDashboard() {
  await requireAuthAndRole('writer'); // Ensure access
  const supabase = await createClient();

  // Fetch quick stats
  const { count: toolCount } = await supabase.from('tools').select('*', { count: 'exact', head: true });
  const { count: categoryCount } = await supabase.from('categories').select('*', { count: 'exact', head: true });
  const { count: goalCount } = await supabase.from('goals').select('*', { count: 'exact', head: true });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-fluid-h2 font-bold text-slate-900 mb-2">Editorial Dashboard</h1>
      <p className="text-slate-500 mb-8">Welcome to the Editorial OS. Here is the current health of your platform.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Published Tools</h3>
          <p className="text-4xl font-black text-slate-900">{toolCount || 0}</p>
          <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[48px] text-primary">smart_toy</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Active Categories</h3>
          <p className="text-4xl font-black text-slate-900">{categoryCount || 0}</p>
          <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[48px] text-primary">category</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Defined Goals</h3>
          <p className="text-4xl font-black text-slate-900">{goalCount || 0}</p>
          <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[48px] text-primary">flag</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 flex flex-col justify-center">
           <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
           <div className="grid grid-cols-2 gap-4">
             <Link href="/admin/cms/tools/new" className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-primary/5 hover:border-primary/20 transition-colors group">
               <span className="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">add_circle</span>
               <span className="text-sm font-medium text-slate-700">New AI Tool</span>
             </Link>
             <Link href="/admin/cms/categories/new" className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-primary/5 hover:border-primary/20 transition-colors group">
               <span className="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">create_new_folder</span>
               <span className="text-sm font-medium text-slate-700">New Category</span>
             </Link>
           </div>
        </div>

        {/* Activity Feed Placeholder */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50">
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-slate-100 p-8 text-center text-slate-500">
             <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">history</span>
             <p className="text-sm">Audit logs & activity feed will be implemented here soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
