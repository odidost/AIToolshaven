export default function CMSDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Editorial Dashboard</h1>
      <p className="text-slate-500 mb-8">Welcome back. Here is the health of your content.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Total Drafts</h3>
          <p className="text-4xl font-black text-slate-900">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Pending Reviews</h3>
          <p className="text-4xl font-black text-amber-500">4</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Quality Score</h3>
          <p className="text-4xl font-black text-green-500">92/100</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50">
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="p-4 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">ChatGPT</span> was published.</p>
              <span className="text-xs text-slate-400 ml-auto">2h ago</span>
            </div>
            <div className="p-4 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">Midjourney</span> was saved as draft.</p>
              <span className="text-xs text-slate-400 ml-auto">5h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
