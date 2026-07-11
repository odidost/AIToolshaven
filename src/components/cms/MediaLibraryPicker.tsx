"use client";

import { useState } from 'react';

interface MediaLibraryPickerProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function MediaLibraryPicker({ value, onChange, label }: MediaLibraryPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mock data for now, ideally fetched from IMediaRepository via API
  const mockAssets = [
    "/logos/chatgpt.svg",
    "/logos/claude.svg",
    "/logos/midjourney.svg",
    "/screenshots/chatgpt.webp",
    "/screenshots/claude.webp",
    "/screenshots/midjourney.webp"
  ];

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-bold text-slate-700">{label}</label>}
      <div className="flex items-center gap-4">
        {value ? (
          <div className="relative w-24 h-24 border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={value} alt="Selected media" className="max-w-full max-h-full object-contain" />
            <button
              type="button"
              onClick={() => onChange("")}
              className="absolute top-1 right-1 bg-white rounded-full p-0.5 shadow-sm hover:bg-red-50 text-red-500 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        ) : (
          <div className="w-24 h-24 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-slate-400 text-3xl">image</span>
          </div>
        )}
        
        <div className="flex-1 flex flex-col gap-2">
          <input 
            type="text" 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button 
            type="button"
            onClick={() => setIsOpen(true)}
            className="self-start text-sm font-bold text-primary hover:underline flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[18px]">photo_library</span>
            Browse Media Library
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Media Library</h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* Upload Button */}
              <button className="aspect-square border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-slate-50 hover:border-primary text-slate-500 hover:text-primary transition-all">
                <span className="material-symbols-outlined text-3xl">upload</span>
                <span className="text-sm font-medium">Upload File</span>
              </button>
              
              {/* Asset Grid */}
              {mockAssets.map((asset) => (
                <button
                  key={asset}
                  onClick={() => {
                    onChange(asset);
                    setIsOpen(false);
                  }}
                  className="group relative aspect-square border border-slate-200 rounded-xl overflow-hidden bg-slate-50 hover:border-primary hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset} alt={asset} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs truncate" title={asset.split('/').pop()}>
                      {asset.split('/').pop()}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
