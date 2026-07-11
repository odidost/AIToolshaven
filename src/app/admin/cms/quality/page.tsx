export const dynamic = "force-dynamic";

export default function QualityDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">SEO & Content Quality</h1>
        <p className="text-slate-500">Automated checks for thin content, missing schema, and broken links.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">verified</span>
          </div>
          <p className="text-4xl font-black text-slate-900 mb-1">98%</p>
          <p className="text-sm font-medium text-slate-500">Overall Health Score</p>
        </div>
        
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">warning</span>
          </div>
          <p className="text-4xl font-black text-slate-900 mb-1">12</p>
          <p className="text-sm font-medium text-slate-500">Warnings</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">error</span>
          </div>
          <p className="text-4xl font-black text-slate-900 mb-1">0</p>
          <p className="text-sm font-medium text-slate-500">Critical Errors</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <h2 className="font-bold text-slate-900">Recent Automated Scans</h2>
        </div>
        <div className="p-12 text-center">
          <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">done_all</span>
          <p className="text-slate-600 font-medium">All tools and pages pass baseline quality thresholds.</p>
          <p className="text-sm text-slate-400 mt-2">Check back later or run a manual scan.</p>
          <button className="mt-6 px-6 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors">
            Run Manual Scan
          </button>
        </div>
      </div>
    </div>
  );
}
