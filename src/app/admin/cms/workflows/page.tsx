import Link from 'next/link';
import { WorkflowRepository } from '@/lib/repositories';

export const dynamic = "force-dynamic";

export default async function WorkflowsListPage() {
  const workflows = await WorkflowRepository.findAll();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Workflows</h1>
          <p className="text-slate-500">Manage complex AI workflows and step-by-step guides.</p>
        </div>
        <Link 
          href="/admin/cms/workflows/new" 
          className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Create Workflow
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Workflow</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Steps</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {workflows.map((workflow) => (
                <tr key={workflow.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-600">account_tree</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{workflow.title}</p>
                        <p className="text-xs text-slate-500">{workflow.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                      {workflow.steps?.length || 0} steps
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/cms/workflows/${workflow.id}`}
                      className="text-primary hover:underline font-bold text-sm inline-flex items-center gap-1"
                    >
                      Edit
                      <span className="material-symbols-outlined text-[16px]">edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
              {workflows.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-500">
                    No workflows found.
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
