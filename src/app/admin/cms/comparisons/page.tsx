import Link from 'next/link';
import { ComparisonRepository } from '@/lib/repositories';

export const dynamic = "force-dynamic";

export default async function ComparisonsListPage() {
  const comparisons = await ComparisonRepository.findAll();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Comparisons</h1>
          <p className="text-slate-500">Manage tool head-to-head comparisons.</p>
        </div>
        <Link 
          href="/admin/cms/comparisons/new" 
          className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Create Comparison
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Comparison ID</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisons.map((comp) => (
                <tr key={comp.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-slate-900">{comp.id}</p>
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/cms/comparisons/${comp.id}`}
                      className="text-primary hover:underline font-bold text-sm inline-flex items-center gap-1"
                    >
                      Edit
                      <span className="material-symbols-outlined text-[16px]">edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
              {comparisons.length === 0 && (
                <tr>
                  <td colSpan={2} className="p-8 text-center text-slate-500">
                    No comparisons found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
