import Link from "next/link";
import type { Workflow } from "@/lib/workflows";

interface WorkflowComparisonMatrixProps {
  workflows: Workflow[];
}

export function WorkflowComparisonMatrix({ workflows }: WorkflowComparisonMatrixProps) {
  return (
    <section className="my-16 md:my-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-[16px]">table_chart</span>
          Quick Comparison Matrix
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
          Compare AI Workflow Stacks at a Glance
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Quickly evaluate time-to-setup, operational software expenses, and skill requirements across our top-rated automation blueprints.
        </p>
      </div>

      {/* Semantic Comparison Table */}
      <div className="bg-surface border border-outline rounded-3xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-secondary/60 border-b border-border text-xs uppercase tracking-wider text-on-surface-variant font-black">
                <th scope="col" className="py-4 px-6">Workflow Blueprint</th>
                <th scope="col" className="py-4 px-6">Target Audience</th>
                <th scope="col" className="py-4 px-6">Tools Chained</th>
                <th scope="col" className="py-4 px-6 whitespace-nowrap">Est. Setup Time</th>
                <th scope="col" className="py-4 px-6 whitespace-nowrap">Est. Cost</th>
                <th scope="col" className="py-4 px-6">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-sm">
              {workflows.map((workflow) => (
                <tr key={workflow.slug} className="hover:bg-primary/[0.02] transition-colors">
                  <td className="py-4 px-6 font-bold text-on-surface">
                    <Link 
                      href={`/workflows/${workflow.slug}`}
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">{workflow.icon || "route"}</span>
                      <span>{workflow.title}</span>
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">
                    <span className="px-2.5 py-1 rounded-full bg-surface-secondary text-xs font-medium text-on-surface">
                      {workflow.audience || "General"}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {workflow.tools.slice(0, 3).map((tool, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-border/40 text-xs font-semibold text-on-surface">
                          {tool}
                        </span>
                      ))}
                      {workflow.tools.length > 3 && (
                        <span className="text-xs text-on-surface-variant self-center">
                          +{workflow.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant whitespace-nowrap font-medium">
                    {workflow.meta?.time || "1-2 hours"}
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant whitespace-nowrap font-medium">
                    {workflow.meta?.cost || "Free / Freemium"}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      (workflow.meta?.skill || "").toLowerCase().includes("beginner")
                        ? "bg-emerald-500/10 text-emerald-600"
                        : (workflow.meta?.skill || "").toLowerCase().includes("advanced")
                        ? "bg-rose-500/10 text-rose-600"
                        : "bg-amber-500/10 text-amber-600"
                    }`}>
                      {workflow.meta?.skill || "Beginner"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
