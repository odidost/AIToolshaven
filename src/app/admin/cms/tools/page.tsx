import Link from 'next/link';
import { ToolRepository } from '@/lib/repositories';

export const dynamic = "force-dynamic"; // Ensure fresh data on reload

export default async function ToolsListPage() {
  const documents = await ToolRepository.findAllDocuments();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-fluid-h2 font-bold text-slate-900 mb-2">AI Tools</h1>
          <p className="text-slate-500">Manage all AI tool entries in the database.</p>
        </div>
        <Link 
          href="/admin/cms/tools/new" 
          className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Create New Tool
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tool</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Autosaved</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {documents.map((doc) => {
                const tool = doc.draftData || doc.publishedData;
                if (!tool) return null;
                
                return (
                  <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {tool.logoUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={tool.logoUrl} alt={tool.name} className="w-10 h-10 rounded-lg border border-slate-200 object-contain bg-white" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <span className="material-symbols-outlined text-slate-400">image</span>
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-slate-900">{tool.name}</p>
                          <p className="text-xs text-slate-500">{doc.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                        {tool.category}
                      </span>
                    </td>
                    <td className="p-4">
                      {doc.status === 'published' ? (
                        <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-bold border border-green-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-xs font-bold border border-amber-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-slate-500">
                      {doc.lastAutosavedAt ? new Date(doc.lastAutosavedAt).toLocaleString() : 'Never'}
                    </td>
                    <td className="p-4 text-right">
                      <Link 
                        href={`/admin/cms/tools/${doc.id}`}
                        className="text-primary hover:underline font-bold text-sm inline-flex items-center gap-1"
                      >
                        Edit
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
              {documents.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    No tools found. Click "Create New Tool" to get started.
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
