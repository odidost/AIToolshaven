import { MediaRepository } from "@/lib/repositories";
import Image from "next/image";

export const dynamic = "force-dynamic";

interface MediaAsset {
  url: string;
  name: string;
  type: string;
  size: number;
}

export default async function MediaLibraryPage() {
  // In the real system, you'd want pagination. We'll list all for now.
  let assets: MediaAsset[] = [];
  try {
    assets = await MediaRepository.list();
  } catch (e) {
    // MediaRepository might not be fully implemented or bound in index.ts
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Media Library</h1>
          <p className="text-slate-500">Manage images and assets used across the platform.</p>
        </div>
        <button 
          className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">upload</span>
          Upload File
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {assets.map((asset) => (
          <div key={asset.url} className="group relative border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-square relative bg-slate-100 flex items-center justify-center p-4">
              <Image 
                src={asset.url} 
                alt={asset.name} 
                fill 
                className="object-contain"
              />
            </div>
            <div className="p-3 border-t border-slate-200">
              <p className="text-xs font-bold text-slate-900 truncate" title={asset.name}>{asset.name}</p>
              <p className="text-[10px] text-slate-500 uppercase mt-0.5">{asset.type} • {(asset.size / 1024).toFixed(1)} KB</p>
            </div>
            {/* Hover Actions */}
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100" title="Copy URL">
                <span className="material-symbols-outlined text-[16px]">link</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600" title="Delete">
                <span className="material-symbols-outlined text-[16px]">delete</span>
              </button>
            </div>
          </div>
        ))}
        {assets.length === 0 && (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-200 rounded-2xl">
            <span className="material-symbols-outlined text-4xl text-slate-300 mb-2 block">hide_image</span>
            <p className="text-slate-500 font-medium text-sm">No media assets found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
