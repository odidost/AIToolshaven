import Link from 'next/link';
import { CategoryRepository } from '@/lib/repositories';

export const dynamic = "force-dynamic";

export default async function CategoriesListPage() {
  const categories = await CategoryRepository.findAll();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Categories</h1>
          <p className="text-slate-500">Manage your taxonomy and category landing pages.</p>
        </div>
        <Link 
          href="/admin/cms/categories/new" 
          className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Create Category
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Slug</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tools Count</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-600">{cat.icon || 'category'}</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{cat.name}</p>
                        <p className="text-xs text-slate-500">{cat.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600 font-mono">
                    /{cat.slug}
                  </td>
                  <td className="p-4">
                    <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                      {cat.count} tools
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/cms/categories/${cat.id}`}
                      className="text-primary hover:underline font-bold text-sm inline-flex items-center gap-1"
                    >
                      Edit
                      <span className="material-symbols-outlined text-[16px]">edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    No categories found.
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
