"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface JsonEditorProps {
  initialData: Record<string, unknown> | unknown[];
  title: string;
  apiEndpoint: string;
  backUrl: string;
}

export function JsonEditor({ initialData, title, apiEndpoint, backUrl }: JsonEditorProps) {
  const router = useRouter();
  
  // Pretty print JSON for editing
  const [jsonString, setJsonString] = useState(JSON.stringify(initialData, null, 2));
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    try {
      // Validate JSON first
      const parsedData = JSON.parse(jsonString);
      
      const res = await fetch(apiEndpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedData),
      });
      
      if (res.ok) {
        alert("Saved successfully!");
        router.push(backUrl);
      } else {
        const err = await res.json();
        setError(err.error || "Failed to save data.");
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid JSON syntax. Please correct it before saving.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push(backUrl)}
            className="text-slate-500 hover:text-slate-900 px-4 py-2 text-sm font-bold transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl h-full flex flex-col space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-amber-800">
            <span className="material-symbols-outlined text-amber-500">warning</span>
            <div>
              <p className="font-bold text-sm">Advanced Data Editor</p>
              <p className="text-xs mt-1">This module edits raw JSON data. Ensure your syntax is correct before saving. A visual editor is planned for a future update.</p>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-bold">
              {error}
            </div>
          )}

          <textarea 
            value={jsonString} 
            onChange={(e) => setJsonString(e.target.value)}
            className="w-full flex-1 min-h-[500px] p-6 border border-slate-200 rounded-xl focus:outline-none focus:border-primary font-mono text-sm bg-slate-900 text-green-400"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
