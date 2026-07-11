"use client";

import { useState } from "react";
import { ToolCategory } from "@/lib/types/category";
import { useRouter } from "next/navigation";

export function CategoryEditor({ initialDocument }: { initialDocument: ToolCategory }) {
  const router = useRouter();
  const [formData, setFormData] = useState<ToolCategory>(initialDocument);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/cms/categories/${formData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Saved successfully!");
        router.push('/admin/cms/categories');
      }
    } catch (error) {
      console.error("Save failed", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Category: {formData.name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push('/admin/cms/categories')}
            className="text-slate-500 hover:text-slate-900 px-4 py-2 text-sm font-bold transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Category"}
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Slug</label>
            <input 
              type="text" 
              value={formData.slug} 
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Material Icon Name</label>
            <input 
              type="text" 
              value={formData.icon || ""} 
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary font-mono text-sm"
              placeholder="e.g. edit_document"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Description (Optional)</label>
            <textarea 
              value={formData.description || ""} 
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
