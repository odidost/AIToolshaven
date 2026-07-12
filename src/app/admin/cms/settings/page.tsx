export const dynamic = "force-dynamic";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-fluid-h2 font-bold text-slate-900 mb-2">CMS Settings</h1>
        <p className="text-slate-500">Configure global site settings and editorial preferences.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">General Configuration</h2>
        </div>
        <div className="p-6 space-y-6">
          
          <div className="flex items-start justify-between">
            <div>
              <p className="font-bold text-slate-900">Default Author Attribution</p>
              <p className="text-sm text-slate-500 mt-1">Automatically attribute new tools to this author.</p>
            </div>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 font-medium text-sm text-slate-700 outline-none focus:border-primary">
              <option>AIToolsHaven Editorial Team</option>
              <option>Guest Contributor</option>
            </select>
          </div>

          <div className="flex items-start justify-between border-t border-slate-100 pt-6">
            <div>
              <p className="font-bold text-slate-900">Auto-publish Workflows</p>
              <p className="text-sm text-slate-500 mt-1">Skip the draft state for minor workflow updates.</p>
            </div>
            <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
