import Link from "next/link";
import { goals } from "@/lib/goals";

interface GoalMatrixItem {
  slug: string;
  title: string;
  icon: string;
  revenueModel: string;
  keyTools: string[];
  startupCost: string;
  timeToRevenue: string;
  skill: "Beginner" | "Intermediate" | "Advanced";
}

const goalMatrixData: GoalMatrixItem[] = [
  {
    slug: "faceless-youtube",
    title: "Faceless YouTube Channel",
    icon: "smart_display",
    revenueModel: "AdSense, Sponsorships & Affiliates",
    keyTools: ["ChatGPT", "ElevenLabs", "CapCut"],
    startupCost: "Free / $20/mo",
    timeToRevenue: "30–60 Days",
    skill: "Beginner",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding Micro-SaaS",
    icon: "code",
    revenueModel: "Recurring Software Subscriptions (MRR)",
    keyTools: ["Cursor", "Next.js", "Supabase"],
    startupCost: "$20/mo",
    timeToRevenue: "14–30 Days",
    skill: "Intermediate",
  },
  {
    slug: "ai-for-marketing-agencies",
    title: "AI Marketing & Growth Agency",
    icon: "campaign",
    revenueModel: "Monthly Retainers ($2k–$5k/mo)",
    keyTools: ["Clay", "Instantly", "Midjourney"],
    startupCost: "$50/mo",
    timeToRevenue: "7–21 Days",
    skill: "Beginner",
  },
  {
    slug: "ai-influencers",
    title: "Virtual AI Influencer Brand",
    icon: "photo_camera_front",
    revenueModel: "Brand Deals, Merch & Content Tiers",
    keyTools: ["Midjourney", "Fooocus", "CapCut"],
    startupCost: "$10–$30/mo",
    timeToRevenue: "30–90 Days",
    skill: "Beginner",
  },
  {
    slug: "business-growth",
    title: "Automated Enterprise Growth",
    icon: "trending_up",
    revenueModel: "Pipeline Velocity & Conversion Lift",
    keyTools: ["HubSpot AI", "Apollo", "Claude"],
    startupCost: "Free / Freemium",
    timeToRevenue: "14–30 Days",
    skill: "Intermediate",
  },
  {
    slug: "make-money-online",
    title: "Solo AI Freelancer",
    icon: "payments",
    revenueModel: "Gig Contracts & Digital Product Sales",
    keyTools: ["Notion AI", "Canva AI", "Gumroad"],
    startupCost: "$0 (Free Tiers)",
    timeToRevenue: "7–14 Days",
    skill: "Beginner",
  },
  {
    slug: "ai-workflows",
    title: "Custom AI Workflow Automation",
    icon: "account_tree",
    revenueModel: "B2B Automation Setup Fees ($1.5k+)",
    keyTools: ["n8n", "Make", "OpenAI API"],
    startupCost: "Free / $9/mo",
    timeToRevenue: "14–30 Days",
    skill: "Intermediate",
  },
  {
    slug: "ai-for-academic-research",
    title: "Academic Research Synthesis",
    icon: "school",
    revenueModel: "Academic Grants & Fast Publication",
    keyTools: ["Consensus", "Elicit", "SciSpace"],
    startupCost: "Free Tier",
    timeToRevenue: "Immediate",
    skill: "Beginner",
  },
];

export function GoalComparisonMatrix() {
  return (
    <section className="my-16 md:my-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-[16px]">table_chart</span>
          Monetization Matrix
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
          Compare AI Business Models &amp; Startup Costs
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Evaluate capital requirements, primary monetization mechanics, and realistic time-to-first-revenue across each curated mission.
        </p>
      </div>

      {/* Semantic Comparison Table */}
      <div className="bg-surface border border-outline rounded-3xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-secondary/60 border-b border-border text-xs uppercase tracking-wider text-on-surface-variant font-black">
                <th scope="col" className="py-4 px-6">Mission &amp; Objective</th>
                <th scope="col" className="py-4 px-6">Revenue Model</th>
                <th scope="col" className="py-4 px-6">Primary Tool Stack</th>
                <th scope="col" className="py-4 px-6 whitespace-nowrap">Est. Startup Cost</th>
                <th scope="col" className="py-4 px-6 whitespace-nowrap">Time to 1st Revenue</th>
                <th scope="col" className="py-4 px-6">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-sm">
              {goalMatrixData.map((item) => (
                <tr key={item.slug} className="hover:bg-primary/[0.02] transition-colors">
                  <td className="py-4 px-6 font-bold text-on-surface">
                    <Link 
                      href={`/goals/${item.slug}`}
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">
                    <span className="px-2.5 py-1 rounded-full bg-surface-secondary text-xs font-medium text-on-surface">
                      {item.revenueModel}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {item.keyTools.map((tool, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-border/40 text-xs font-semibold text-on-surface">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant whitespace-nowrap font-medium">
                    {item.startupCost}
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant whitespace-nowrap font-medium">
                    {item.timeToRevenue}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      item.skill === "Beginner"
                        ? "bg-emerald-500/10 text-emerald-600"
                        : item.skill === "Advanced"
                        ? "bg-rose-500/10 text-rose-600"
                        : "bg-amber-500/10 text-amber-600"
                    }`}>
                      {item.skill}
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
