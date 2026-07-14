export const dynamic = "force-dynamic";

export default function CompaniesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-fluid-h2 font-bold text-slate-900 mb-2">Companies Management</h1>
        <p className="text-slate-500">Manage tool vendors, publishers, and parent companies.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-12 text-center">
        <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">domain</span>
        <p className="text-slate-600 font-medium">Company profiles directory configuration is underway.</p>
        <p className="text-sm text-slate-400 mt-2">This module will list and organize parent entities of registered AI tools.</p>
      </div>
    </div>
  );
}
