import Link from 'next/link';
import { GoalRepository } from '@/lib/repositories';

export const dynamic = "force-dynamic";

export default async function GoalsListPage() {
  const goalsData = await GoalRepository.findAll();
  
  // goalsData might be a dictionary or array depending on the structure.
  // The migration script saved the raw GOALS dictionary. We'll map it to an array for display.
  // Wait, JsonBaseRepository expects an array of objects with an 'id'.
  // If goalsData is not an array, this will crash. We need to handle this.
  const goalsArray = Array.isArray(goalsData) ? goalsData : Object.keys(goalsData).map(key => ({
    id: key,
    name: key,
    items: (goalsData as Record<string, unknown>)[key]
  }));

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-fluid-h2 font-bold text-slate-900 mb-2">Goals</h1>
          <p className="text-slate-500">Manage persona-based goal categories.</p>
        </div>
        <Link 
          href="/admin/cms/goals/new" 
          className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Create Persona
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Persona</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Goals Count</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {goalsArray.map((goal) => (
                <tr key={goal.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-slate-900">{goal.id}</p>
                  </td>
                  <td className="p-4">
                    <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                      {goal.items?.length || 0} goals
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/cms/goals/${goal.id}`}
                      className="text-primary hover:underline font-bold text-sm inline-flex items-center gap-1"
                    >
                      Edit
                      <span className="material-symbols-outlined text-[16px]">edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
              {goalsArray.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-500">
                    No goals found.
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
