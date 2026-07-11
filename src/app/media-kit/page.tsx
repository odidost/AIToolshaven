import { BrandLogo } from "@/components/shared/BrandLogo";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";
import { ContentContainer } from "@/components/layout/ContentContainer";

export const metadata = {
  title: "Media Kit & Brand Assets - AIToolsHaven",
  description: "Download official AIToolsHaven logos, brand assets, and review our brand guidelines.",
};

export default function MediaKitPage() {
  return (
    <main className="min-h-screen bg-surface-secondary pb-24 relative overflow-hidden">
      <BackgroundPattern type="ambient" />

      {/* Hero Section */}
      <ContentContainer as="section" className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">
            Brand Assets & Media Kit
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Everything you need to represent AIToolsHaven. Download our official logos, review our color palette, and explore our brand guidelines.
          </p>
        </div>
      </ContentContainer>

      {/* Logo Downloads Section */}
      <ContentContainer as="section" className="relative z-10 mb-16">
        <h2 className="text-2xl font-bold text-on-surface mb-8">Primary Logos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Primary Logo (Light Background) */}
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm flex flex-col group">
            <div className="flex-1 min-h-[240px] flex items-center justify-center p-12 bg-slate-50 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <BrandLogo size={1.5} />
            </div>
            <div className="p-6 border-t border-border bg-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-on-surface">Standard Horizontal</h3>
                <p className="text-sm text-on-surface-variant">For light backgrounds.</p>
              </div>
              <a 
                href="/logo.svg" 
                download="AIToolsHaven-Logo.svg"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-sm transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                SVG
              </a>
            </div>
          </div>

          {/* Primary Logo (Dark Background) */}
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm flex flex-col group">
            <div className="flex-1 min-h-[240px] flex items-center justify-center p-12 bg-slate-950 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <BrandLogo variant="white" size={1.5} />
            </div>
            <div className="p-6 border-t border-border bg-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-on-surface">White Horizontal</h3>
                <p className="text-sm text-on-surface-variant">For dark backgrounds.</p>
              </div>
              <a 
                href="/logo.svg" 
                download="AIToolsHaven-Logo.svg"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-sm transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                SVG
              </a>
            </div>
          </div>

        </div>
      </ContentContainer>

      {/* Alternative Logos Section */}
      <ContentContainer as="section" className="relative z-10 mb-16">
        <h2 className="text-2xl font-bold text-on-surface mb-8">Alternative Marks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Icon Mark */}
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm flex flex-col group">
            <div className="flex-1 min-h-[240px] flex items-center justify-center p-12 bg-slate-50 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <BrandLogo layout="icon" size={1.5} />
            </div>
            <div className="p-6 border-t border-border bg-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-on-surface">Icon Mark</h3>
                <p className="text-sm text-on-surface-variant">For avatars, favicons, and social.</p>
              </div>
              <a 
                href="/icon.svg" 
                download="AIToolsHaven-Icon.svg"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-sm transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                SVG
              </a>
            </div>
          </div>

          {/* Stacked */}
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm flex flex-col group">
            <div className="flex-1 min-h-[240px] flex items-center justify-center p-12 bg-slate-50 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <BrandLogo layout="stacked" size={1.2} />
            </div>
            <div className="p-6 border-t border-border bg-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-on-surface">Stacked Version</h3>
                <p className="text-sm text-on-surface-variant">For vertical or square containers.</p>
              </div>
              <a 
                href="/logo.svg" 
                download="AIToolsHaven-Logo.svg"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-sm transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                SVG
              </a>
            </div>
          </div>

        </div>
      </ContentContainer>

      {/* Brand Colors */}
      <ContentContainer as="section" className="relative z-10">
        <h2 className="text-2xl font-bold text-on-surface mb-8">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="h-24 bg-[#22D3EE] w-full"></div>
            <div className="p-4">
              <p className="font-bold text-slate-900 text-sm">Cyan (A-Mark)</p>
              <p className="text-slate-500 text-xs font-mono mt-1">#22D3EE</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="h-24 bg-[#6366F1] w-full"></div>
            <div className="p-4">
              <p className="font-bold text-slate-900 text-sm">Indigo (A-Mark)</p>
              <p className="text-slate-500 text-xs font-mono mt-1">#6366F1</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="h-24 bg-[#F59E0B] w-full"></div>
            <div className="p-4">
              <p className="font-bold text-slate-900 text-sm">Amber (I-Mark)</p>
              <p className="text-slate-500 text-xs font-mono mt-1">#F59E0B</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="h-24 bg-[#F43F5E] w-full"></div>
            <div className="p-4">
              <p className="font-bold text-slate-900 text-sm">Rose (I-Mark)</p>
              <p className="text-slate-500 text-xs font-mono mt-1">#F43F5E</p>
            </div>
          </div>

        </div>
      </ContentContainer>
      
      {/* Brand Guidelines Summary */}
      <ContentContainer as="section" className="relative z-10 mt-16">
         <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm">
           <h2 className="text-2xl font-bold text-on-surface mb-6">Logo Usage Guidelines</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div>
               <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                 <span className="material-symbols-outlined text-green-500">check_circle</span>
                 Do
               </h3>
               <ul className="space-y-2 text-sm text-slate-600">
                 <li>Use the primary logo on light backgrounds.</li>
                 <li>Use the white variant on dark backgrounds.</li>
                 <li>Allow ample clear space around the logo (minimum 24px).</li>
                 <li>Maintain the aspect ratio when resizing.</li>
               </ul>
             </div>
             <div>
               <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                 <span className="material-symbols-outlined text-red-500">cancel</span>
                 Don't
               </h3>
               <ul className="space-y-2 text-sm text-slate-600">
                 <li>Change the colors or gradients of the logo.</li>
                 <li>Distort, stretch, or compress the logo.</li>
                 <li>Add drop shadows or external effects to the mark.</li>
                 <li>Place the logo on complex, high-contrast imagery without a container.</li>
               </ul>
             </div>
           </div>
         </div>
      </ContentContainer>
    </main>
  );
}