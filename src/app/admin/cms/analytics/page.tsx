export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-fluid-h2 font-bold text-slate-900 mb-2">Platform Analytics</h1>
        <p className="text-slate-500">Track click-through-rates (CTR), category traffic, and search performance metrics.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-12 text-center">
        <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">bar_chart</span>
        <p className="text-slate-600 font-medium">CMS Analytics reporting dashboard integration is in progress.</p>
        <p className="text-sm text-slate-400 mt-2">Aggregated referral link usage logs and user traffic details will reside here.</p>
      </div>
    </div>
  );
}
