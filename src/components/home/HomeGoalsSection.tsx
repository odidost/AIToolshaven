import Link from "next/link";
import { goals } from "@/lib/goals";
import { ArrowRight, Workflow as WorkflowIcon } from "lucide-react";

export function HomeGoalsSection() {
  // Map goals to relevant existing workflows
  const workflowMapping: Record<string, { title: string; slug: string }> = {
    "faceless-youtube": {
      title: "Faceless YouTube Stack",
      slug: "faceless-youtube",
    },
    "vibe-coding": {
      title: "Vibe Coding Workflow",
      slug: "vibe-coding",
    },
    "ai-workflows": {
      title: "B2B Lead Enrichment",
      slug: "automated-lead-enrichment",
    },
    "business-growth": {
      title: "Solopreneur Growth Stack",
      slug: "solopreneur",
    },
    "ai-for-marketing-agencies": {
      title: "Agency Delivery Workflow",
      slug: "agency",
    },
    "ai-influencers": {
      title: "AI Influencer Workflow",
      slug: "ai-influencer",
    },
  };

  // 6 specific, outcome-driven goals (no vague income promises)
  const displayGoals = goals
    .filter((g) => g.slug !== "make-money-online")
    .slice(0, 6);

  return (
    <section id="goals" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB] scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">track_changes</span>
            <span>Goal-Driven Discovery</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
            Choose AI Tools by Goal
          </h2>
          <p className="mt-1 text-sm sm:text-base text-[#4B5563] max-w-xl">
            Select the right software and step-by-step automation workflows organized by practical project outcomes.
          </p>
        </div>
        <Link
          href="/goals"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors self-start sm:self-auto shrink-0"
        >
          All goals &amp; roadmaps
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayGoals.map((goal) => {
          const relatedWf = workflowMapping[goal.slug];
          return (
            <div
              key={goal.slug}
              className="group flex flex-col justify-between bg-white rounded-lg border border-[#E5E7EB] p-5 sm:p-6 hover:border-[#E11D48]/40 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] flex items-center justify-center text-[#0A0A0A] group-hover:border-[#FECDD3] group-hover:bg-[#FFF1F2] group-hover:text-[#E11D48] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      {goal.icon}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563]">
                    {goal.count} Tools
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0A0A0A] font-heading tracking-tight mb-2 group-hover:text-[#E11D48] transition-colors">
                  <Link href={`/goals/${goal.slug}`}>
                    {goal.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3 mb-4">
                  {goal.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#E5E7EB] flex flex-col gap-2">
                {relatedWf && (
                  <div className="flex items-center justify-between text-xs bg-[#F9FAFB] px-2.5 py-1.5 rounded border border-[#E5E7EB]">
                    <span className="text-[11px] text-[#4B5563] flex items-center gap-1.5">
                      <WorkflowIcon className="w-3 h-3 text-[#E11D48]" />
                      Workflow:
                    </span>
                    <Link
                      href={`/workflows/${relatedWf.slug}`}
                      className="font-medium text-[#0A0A0A] hover:text-[#E11D48] truncate max-w-[170px]"
                    >
                      {relatedWf.title} &rarr;
                    </Link>
                  </div>
                )}

                <Link
                  href={`/goals/${goal.slug}`}
                  className="inline-flex items-center justify-between text-xs font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors pt-1"
                >
                  <span>Explore tools for this goal</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center flex justify-center">
        <Link
          href="/goals"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-sm font-semibold text-[#0A0A0A] border border-[#E5E7EB] hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] shadow-xs hover:shadow-sm transition-all group"
        >
          <span>View All Goals &amp; Roadmaps</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
