"use client";

import { useState, useEffect } from "react";
import { CmsToolDocument } from "@/lib/types/cms";
import { AITool } from "@/lib/types/tool";
import { RichTextEditor } from "./RichTextEditor";
import { MediaLibraryPicker } from "./MediaLibraryPicker";
import { useRouter } from "next/navigation";

interface ToolEditorProps {
  initialDocument: CmsToolDocument;
}

export function ToolEditor({ initialDocument }: ToolEditorProps) {
  const router = useRouter();
  const [doc, setDoc] = useState<CmsToolDocument>(initialDocument);
  const [formData, setFormData] = useState<AITool>(initialDocument.draftData);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  // Debounced Autosave
  useEffect(() => {
    const timer = setTimeout(async () => {
      // Don't autosave if no changes
      if (JSON.stringify(formData) === JSON.stringify(doc.draftData)) return;

      setIsSaving(true);
      try {
        const res = await fetch(`/api/cms/tools/${doc.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "save_draft", data: formData }),
        });
        if (res.ok) {
          const updatedDoc = await res.json();
          setDoc(updatedDoc);
        }
      } catch (error) {
        console.error("Autosave failed", error);
      } finally {
        setIsSaving(false);
      }
    }, 1500); // 1.5s debounce

    return () => clearTimeout(timer);
  }, [formData, doc.id, doc.draftData]);

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const res = await fetch(`/api/cms/tools/${doc.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "publish", data: formData }), // data sent just in case, but backend uses saved draft
      });
      if (res.ok) {
        const updatedDoc = await res.json();
        setDoc(updatedDoc);
        alert("Published successfully!");
      }
    } catch (error) {
      console.error("Publish failed", error);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleChange = (field: keyof AITool, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditorialChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      editorial: {
        ...prev.editorial,
        [field]: value
      }
    }));
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Editor Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{formData.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
              doc.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {doc.status.toUpperCase()}
            </span>
            <span className="text-xs text-slate-500">
              {isSaving ? "Saving..." : `Last saved: ${doc.lastAutosavedAt ? new Date(doc.lastAutosavedAt).toLocaleTimeString() : 'Never'}`}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push('/admin/cms/tools')}
            className="text-slate-500 hover:text-slate-900 px-4 py-2 text-sm font-bold transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handlePublish}
            disabled={isPublishing}
            className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isPublishing ? (
              <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
            ) : (
              <span className="material-symbols-outlined text-[18px]">publish</span>
            )}
            Publish Changes
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Editor Form */}
        <div className="flex-1 overflow-y-auto p-8 border-r border-slate-200">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-200 mb-8 space-x-1">
            {["general", "editorial", "features"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 border-b-2 font-bold text-sm capitalize transition-colors ${
                  activeTab === tab 
                    ? "border-primary text-primary" 
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="max-w-3xl space-y-8">
            {activeTab === "general" && (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Tool Name</label>
                    <input 
                      type="text" 
                      value={formData.name} 
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Tagline</label>
                    <input 
                      type="text" 
                      value={formData.tagline} 
                      onChange={(e) => handleChange("tagline", e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Short Description</label>
                    <textarea 
                      value={formData.description} 
                      onChange={(e) => handleChange("description", e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <MediaLibraryPicker 
                    label="Logo" 
                    value={formData.logoUrl || ""} 
                    onChange={(url) => handleChange("logoUrl", url)} 
                  />
                  <MediaLibraryPicker 
                    label="Hero Screenshot" 
                    value={formData.screenshotUrl || formData.imageUrl || ""} 
                    onChange={(url) => {
                      handleChange("screenshotUrl", url);
                      handleChange("imageUrl", url);
                    }} 
                  />
                </div>
              </>
            )}

            {activeTab === "editorial" && (
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Editorial Overview</label>
                  <p className="text-xs text-slate-500 mb-2">The main review body explaining why this tool matters.</p>
                  <RichTextEditor 
                    value={formData.editorial?.overview || ""} 
                    onChange={(html) => handleEditorialChange("overview", html)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Expert Verdict</label>
                  <RichTextEditor 
                    value={formData.editorial?.verdict || ""} 
                    onChange={(html) => handleEditorialChange("verdict", html)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Pricing Analysis</label>
                  <RichTextEditor 
                    value={formData.editorial?.pricing || ""} 
                    onChange={(html) => handleEditorialChange("pricing", html)}
                  />
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-4">
                <p className="text-slate-500">Feature editing module goes here (DraggableList).</p>
                {/* To be implemented with dnd-kit later */}
              </div>
            )}
          </div>
        </div>

        {/* Live Preview Pane */}
        <div className="w-[500px] bg-slate-100 hidden xl:flex flex-col border-l border-slate-200">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-700 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">preview</span>
              Live Preview
            </h3>
            <div className="flex bg-white rounded-lg border border-slate-200 overflow-hidden p-0.5">
              <button className="p-1 hover:bg-slate-100 rounded text-slate-600"><span className="material-symbols-outlined text-[16px]">smartphone</span></button>
              <button className="p-1 hover:bg-slate-100 rounded text-slate-600"><span className="material-symbols-outlined text-[16px]">tablet_mac</span></button>
              <button className="p-1 bg-slate-100 rounded text-slate-900 shadow-sm"><span className="material-symbols-outlined text-[16px]">desktop_windows</span></button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex justify-center">
            <div className="w-full h-[800px] bg-white shadow-xl rounded-xl border border-slate-200 overflow-hidden transform origin-top" style={{ scale: '0.8' }}>
               <iframe 
                 src={`/tool/${formData.slug}`} 
                 className="w-full h-full pointer-events-none"
                 title="Preview"
               />
               {/* 
                  Note: A true live preview would pass formData via context or postMessage to the iframe, 
                  or render the components directly here. For the scope of this implementation, 
                  we'll use a placeholder iframe or directly render the Hero component if we imported it.
               */}
               <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center pointer-events-none">
                  <div className="bg-slate-900 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    Live Preview Engine Active
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
