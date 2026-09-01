import { Metadata } from "next";
import Link from "next/link";
import { workflows } from "@/lib/workflows";
import { getToolsByNames } from "@/lib/data/tools-service";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/config/site";
import { WorkflowsGridWithFilter } from "@/components/workflow/WorkflowsGridWithFilter";
import { WorkflowVisualPipeline } from "@/components/workflow/WorkflowVisualPipeline";
import { WorkflowComparisonMatrix } from "@/components/workflow/WorkflowComparisonMatrix";
import { WorkflowsEditorialGuide } from "@/components/workflow/WorkflowsEditorialGuide";
import { WorkflowsFAQ } from "@/components/workflow/WorkflowsFAQ";
import { defaultWorkflowsFaqs } from "@/lib/data/workflowsFaqsData";

export const metadata: Metadata = {
  title: "Best AI Workflows & Automation Blueprints (2026)",
  description: "Discover verified multi-app AI workflows for creators, agencies, and founders. Chain specialized AI tools to automate pipelines and achieve 10x leverage.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/workflows`,
  },
  openGraph: {
    title: "Best AI Workflows & Automation Blueprints (2026) — AIToolsHaven",
    description: "Discover verified multi-app AI workflows for creators, agencies, and founders. Chain specialized AI tools to automate pipelines.",
    url: `${siteConfig.baseUrl}/workflows`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Best AI Workflows — AIToolsHaven",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Workflows & Automation Blueprints (2026) — AIToolsHaven",
    description: "Discover verified multi-app AI workflows.",
    images: [siteConfig.ogImage],
  },
};

export default async function WorkflowsIndexPage() {
  const requiredToolNames = new Set<string>();
  workflows.forEach(w => w.tools.forEach(t => requiredToolNames.add(t)));
  const allTools = await getToolsByNames(Array.from(requiredToolNames));
  
  const toolLogos = allTools.reduce((acc, tool) => {
    if (tool.name && tool.logoUrl) {
      acc[tool.name.toLowerCase()] = tool.logoUrl;
    }
    return acc;
  }, {} as Record<string, string>);

  const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${cleanBase}/workflows#webpage`,
        url: `${cleanBase}/workflows`,
        name: "Best AI Workflows & Automation Blueprints (2026) | AIToolsHaven",
        description: "Discover verified multi-app AI workflows for creators, founders, agencies, and developers.",
        dateModified: currentDate,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: workflows.length,
          itemListElement: workflows.map((w, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: `${w.title} Workflow`,
            url: `${cleanBase}/workflows/${w.slug}`,
            description: w.description,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${cleanBase}/workflows#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AI Tools Directory",
            item: cleanBase,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Workflows",
            item: `${cleanBase}/workflows`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${cleanBase}/workflows#faq`,
        mainEntity: defaultWorkflowsFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pt-8 md:pt-12 pb-32">
      <StructuredData data={jsonLd} />

      {/* Sunset Ember Animated Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[0%] right-[0%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply animate-float-slow" />
        <div className="absolute top-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary/20 blur-[120px] mix-blend-multiply animate-float-medium" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={[{ label: "AI Workflows" }]} />

        {/* Header Section */}
        <div className="text-center mb-10 mt-6">
          <div className="inline-flex items-center gap-2 bg-surface text-primary px-4 py-1.5 rounded-full mb-4 shadow-xs border border-outline mx-auto">
            <span className="material-symbols-outlined text-[18px]">account_tree</span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Production Blueprints</span>
          </div>
          <h1 className="text-fluid-h1 font-black text-on-surface tracking-tight leading-tight mb-4">
            Automated AI Workflows &amp; Stacks (2026)
          </h1>
          <p className="text-lg sm:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Discover how creators, agencies, and solopreneurs chain multiple AI tools together to build automated pipelines and achieve 10x leverage.
          </p>
        </div>

        {/* 3-Step Visual Workflow Architecture Diagram */}
        <WorkflowVisualPipeline />

        {/* Interactive Workflows Grid Section with Semantic H2 */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">tune</span>
                Interactive Directory
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
                Production AI Workflow Blueprints (2026)
              </h2>
            </div>
          </div>

          <WorkflowsGridWithFilter 
            workflows={workflows}
            allTools={allTools}
            toolLogos={toolLogos}
          />
        </section>

        {/* Stack Comparison Matrix (Targeting Google Position 0 Table Snippet) */}
        <WorkflowComparisonMatrix workflows={workflows} />

        {/* Readable Architecture & Orchestration Guide */}
        <WorkflowsEditorialGuide />

        {/* Cross-Silo Monetization & Categories Link Banner */}
        <div className="my-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-surface to-secondary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Turn Automations Into Revenue</span>
            <h3 className="text-2xl font-black text-on-surface">Explore Monetization Missions &amp; Categories</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Connect these operational stacks to tangible business revenue goals or browse all 25+ verified software categories.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/goals" 
              className="px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              Browse Goals &amp; Missions →
            </Link>
            <Link 
              href="/categories" 
              className="px-6 py-3 rounded-full bg-surface border border-outline font-bold text-sm text-on-surface hover:bg-surface-secondary transition-colors"
            >
              Browse All Categories
            </Link>
          </div>
        </div>

        {/* 6-Item Workflow FAQ Accordion with Schema */}
        <WorkflowsFAQ faqs={defaultWorkflowsFaqs} />
      </div>
    </main>
  );
}
