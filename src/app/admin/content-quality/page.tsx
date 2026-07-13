import { getAllTools } from "@/lib/data/tools-service";
import type { AITool } from "@/lib/types/tool";
import { DashboardContainer } from "@/components/layout/DashboardContainer";

export const metadata = {
  title: "Content Quality Dashboard | Admin",
};

// Heuristics for analysis
const PLACEHOLDER_KEYWORDS = ["lorem ipsum", "coming soon", "tbd", "placeholder", "generic text"];
const AI_KEYWORDS = ["revolutionize", "cutting-edge", "game-changer", "unleash the power"];

function analyzeTool(tool: AITool) {
  const issues: string[] = [];
  
  // 1. Thin Content
  if (!tool.description || tool.description.length < 150) {
    issues.push("Thin content: Description is too short (< 150 chars).");
  }
  if (!tool.pros || tool.pros.length < 2) {
    issues.push("Thin content: Needs more Pros.");
  }
  if (!tool.cons || tool.cons.length < 2) {
    issues.push("Thin content: Needs more Cons.");
  }

  // 2. Missing Assets
  if (!tool.logoUrl) {
    issues.push("Missing logo.");
  }
  if (!tool.screenshotUrl) {
    issues.push("Missing screenshot.");
  }

  // 3. Missing Expert Verdict
  if (!tool.editorial?.verdict) {
    issues.push("Missing Expert Verdict.");
  }

  // 4. Placeholder / Generic Content
  const allText = JSON.stringify(tool).toLowerCase();
  for (const word of PLACEHOLDER_KEYWORDS) {
    if (allText.includes(word)) {
      issues.push(`Contains placeholder text: "${word}".`);
    }
  }

  for (const word of AI_KEYWORDS) {
    if (allText.includes(word)) {
      issues.push(`Contains overused/AI jargon: "${word}".`);
    }
  }

  // 5. Missing Links
  if (!tool.websiteUrl) {
    issues.push("Missing website URL.");
  }

  return issues;
}

export default async function ContentQualityDashboard() {
  const allTools = await getAllTools();
  
  const analyzedTools = allTools.map(tool => ({
    tool,
    issues: analyzeTool(tool)
  }));

  const totalTools = allTools.length;
  const toolsWithIssues = analyzedTools.filter(t => t.issues.length > 0);
  const totalIssues = toolsWithIssues.reduce((sum, t) => sum + t.issues.length, 0);

  // Overall Score calculation (0-100)
  // Max possible penalty is 10 per tool (arbitrary max)
  const maxPossiblePenalty = totalTools * 10;
  const score = Math.max(0, Math.round(((maxPossiblePenalty - totalIssues) / maxPossiblePenalty) * 100));

  return (
    <DashboardContainer className="py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-2">Content Quality Dashboard</h1>
        <p className="text-slate-500">Continuous audit for editorial standards and AdSense readiness.</p>
      </div>

      {/* Summary Scorecard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Quality Score</span>
          <span className={`text-6xl font-black ${score >= 90 ? 'text-green-500' : score >= 70 ? 'text-yellow-500' : 'text-red-500'}`}>
            {score}
          </span>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">Total Tools</span>
          <span className="text-4xl font-black text-slate-900">{totalTools}</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">Tools Needing Work</span>
          <span className="text-4xl font-black text-slate-900">{toolsWithIssues.length}</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">Total Issues</span>
          <span className="text-4xl font-black text-slate-900">{totalIssues}</span>
        </div>
      </div>

      {/* Issues List */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="px-8 py-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Detailed Findings</h2>
          <span className="text-sm font-medium text-slate-500">{toolsWithIssues.length} tools flagged</span>
        </div>
        <div className="divide-y divide-slate-100">
          {toolsWithIssues.length === 0 ? (
            <div className="p-12 text-center text-slate-500 font-medium">
              Excellent! No content issues found.
            </div>
          ) : (
            toolsWithIssues.map(({ tool, issues }) => (
              <div key={tool.id} className="p-8 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      {tool.name}
                      <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                        {issues.length} issues
                      </span>
                    </h3>
                    <div className="text-sm text-slate-500 mt-1">
                      ID: <code>{tool.id}</code> &bull; Category: {tool.category}
                    </div>
                  </div>
                  <a 
                    href={`/tool/${tool.slug}`} 
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    View Page <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
                <ul className="space-y-2">
                  {issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="material-symbols-outlined text-red-500 text-[18px]">error</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardContainer>
  );
}
