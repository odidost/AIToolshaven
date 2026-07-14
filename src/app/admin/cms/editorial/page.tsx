export const dynamic = "force-dynamic";

export default function EditorialPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-fluid-h2 font-bold text-slate-900 mb-2">Editorial Audits & Standards</h1>
        <p className="text-slate-500">Monitor guidelines compliance, expert verdicts, and internal ratings consistency.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-12 text-center">
        <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">edit_document</span>
        <p className="text-slate-600 font-medium">Editorial Auditing controls will appear here.</p>
        <p className="text-sm text-slate-400 mt-2">Oversee tone of voice reviews and AdSense readiness checklist logs.</p>
      </div>
    </div>
  );
}
