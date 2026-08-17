export const dynamic = "force-dynamic";

export default function SeoPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-fluid-h2 font-bold text-slate-900 mb-2">SEO Configuration</h1>
        <p className="text-slate-500">Configure global metadata, robots.txt directives, and sitemap generation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <a
          href="/admin/seo/gsc"
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-slate-400 hover:shadow-md transition-all group block"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="material-symbols-outlined text-3xl text-indigo-600 bg-indigo-50 p-2 rounded-xl">monitoring</span>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all">Open Dashboard →</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-1">Google Search Console & Demand Intelligence</h2>
          <p className="text-sm text-slate-500">
            Real search demand signals, ranking positions, CTR opportunities, keyword clusters, and cannibalization audit.
          </p>
        </a>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="material-symbols-outlined text-3xl text-slate-400 bg-slate-100 p-2 rounded-xl">schema</span>
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">Step 10A</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-1">SEO Architecture & Schemas</h2>
          <p className="text-sm text-slate-500">
            Robots directives, dynamic sitemaps, and JSON-LD structured data safeguards.
          </p>
        </div>
      </div>
    </div>
  );
}
