import { getAllTools } from "@/lib/queries/tools";
import { getAllCategories } from "@/lib/queries/categories";
import { env } from "@/lib/env";

export default function LaunchChecklistPage() {
  const tools = getAllTools();
  const categories = getAllCategories();

  // 1. Content Checks
  const toolsMissingLogos = tools.filter(t => !t.logoUrl || t.logoUrl === "");
  const toolsMissingScreenshots = tools.filter(t => !t.screenshotUrl || t.screenshotUrl === "");
  const toolsMissingExpertVerdict = tools.filter(t => !t.editorial?.verdict);
  const toolsMissingProsCons = tools.filter(t => !t.pros || t.pros.length === 0 || !t.cons || t.cons.length === 0);

  // 2. SEO Checks
  const toolsMissingDesc = tools.filter(t => !t.description || t.description.length < 50);

  const calculateScore = (missingCount: number, totalCount: number) => {
    if (totalCount === 0) return 100;
    return Math.round(((totalCount - missingCount) / totalCount) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score === 100) return "text-emerald-500";
    if (score >= 80) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-fluid-h2 font-black text-slate-900 tracking-tight mb-2">Production Health Dashboard</h1>
          <p className="text-slate-500">Audit report to verify readiness for public launch.</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Production URL</p>
          <a href={env.NEXT_PUBLIC_BASE_URL} target="_blank" className="text-primary font-medium hover:underline">
            {env.NEXT_PUBLIC_BASE_URL}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Content Completeness */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">inventory_2</span>
            Content Completeness
          </h2>
          <div className="space-y-4">
            <ScoreRow label="Tool Logos" score={calculateScore(toolsMissingLogos.length, tools.length)} missing={toolsMissingLogos.length} />
            <ScoreRow label="Tool Screenshots" score={calculateScore(toolsMissingScreenshots.length, tools.length)} missing={toolsMissingScreenshots.length} />
            <ScoreRow label="Expert Verdicts" score={calculateScore(toolsMissingExpertVerdict.length, tools.length)} missing={toolsMissingExpertVerdict.length} />
            <ScoreRow label="Tool Pros & Cons" score={calculateScore(toolsMissingProsCons.length, tools.length)} missing={toolsMissingProsCons.length} />
          </div>
        </div>

        {/* SEO Completeness */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">search</span>
            SEO Readiness
          </h2>
          <div className="space-y-4">
            <ScoreRow label="Environment Variable (URL)" score={env.NEXT_PUBLIC_BASE_URL ? 100 : 0} missing={env.NEXT_PUBLIC_BASE_URL ? 0 : 1} />
            <ScoreRow label="Tool Descriptions (>50 chars)" score={calculateScore(toolsMissingDesc.length, tools.length)} missing={toolsMissingDesc.length} />
            <ScoreRow label="Categories Configured" score={calculateScore(0, categories.length)} missing={0} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h3 className="font-bold text-slate-900">Action Required</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {toolsMissingLogos.map(t => (
            <ActionItem key={'logo-'+t.id} title={t.name} issue="Missing Logo URL" priority="High Priority" />
          ))}
          {toolsMissingScreenshots.map(t => (
            <ActionItem key={'screen-'+t.id} title={t.name} issue="Missing Screenshots" priority="High Priority" />
          ))}
          {toolsMissingExpertVerdict.map(t => (
            <ActionItem key={'expert-'+t.id} title={t.name} issue="Missing Expert Verdict" priority="Medium Priority" />
          ))}
          {toolsMissingProsCons.map(t => (
            <ActionItem key={'proscons-'+t.id} title={t.name} issue="Missing Pros & Cons" priority="Low Priority" />
          ))}
          {toolsMissingLogos.length === 0 && toolsMissingScreenshots.length === 0 && toolsMissingExpertVerdict.length === 0 && toolsMissingProsCons.length === 0 && (
            <div className="p-8 text-center text-slate-500 flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-emerald-400 mb-2">check_circle</span>
              <p>All content requirements are fully satisfied! Ready for launch.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  function ScoreRow({ label, score, missing }: { label: string, score: number, missing: number }) {
    return (
      <div className="flex items-center justify-between">
        <span className="text-slate-600 font-medium">{label}</span>
        <div className="flex items-center gap-3">
          {missing > 0 && <span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{missing} missing</span>}
          <span className={`font-bold ${getScoreColor(score)}`}>{score}%</span>
        </div>
      </div>
    );
  }

  function ActionItem({ title, issue, priority }: { title: string, issue: string, priority: string }) {
    const isHigh = priority === "High Priority";
    return (
      <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
        <div>
          <p className="font-bold text-slate-900">{title}</p>
          <p className="text-sm text-slate-500">{issue}</p>
        </div>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${isHigh ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
          {priority}
        </span>
      </div>
    );
  }
}
