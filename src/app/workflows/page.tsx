import { Metadata } from "next";
import { workflows } from "@/lib/workflows";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { getAllTools } from "@/lib/data/tools-service";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";

export const metadata: Metadata = {
  title: "AI Workflows & Guides | AIToolsHaven",
  description: "Learn how to chain AI tools together to create powerful automated workflows. Explore step-by-step guides for content creators, developers, and entrepreneurs.",
};

export default async function WorkflowsIndexPage() {
  const allTools = await getAllTools();
  
  const toolLogos = allTools.reduce((acc, tool) => {
    if (tool.name && tool.logoUrl) {
      acc[tool.name.toLowerCase()] = tool.logoUrl;
    }
    return acc;
  }, {} as Record<string, string>);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pt-24 pb-32">
      {/* Sunset Ember Animated Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[0%] right-[0%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply animate-float-slow" />
        <div className="absolute top-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary/20 blur-[120px] mix-blend-multiply animate-float-medium" />
      </div>

      <div className="w-full mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 mt-8 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5 mx-auto">
            <span className="material-symbols-outlined text-[18px]">account_tree</span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Blueprint Library</span>
          </div>
          <h1 className="text-fluid-h1 font-black text-slate-900 tracking-tight leading-tight mb-6">
            Popular AI Workflows
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how creators, agencies, and solopreneurs chain multiple AI tools together to build automated pipelines and incredible outputs.
          </p>
        </div>

        {/* Workflows Grid */}
        <section className="bg-gradient-to-b from-white to-primary/5 shadow-[0_8px_32px_rgba(0,0,0,0.02)] border-y border-black/5 py-10 sm:py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <BackgroundPattern type="workflow" opacity={0.03} className="text-primary" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {workflows.map((workflow) => (
              <WorkflowCard
                key={workflow.slug}
                title={workflow.title}
                tools={workflow.tools.map((t) => ({
                  name: t,
                  logoUrl: toolLogos[t.toLowerCase()] || undefined,
                }))}
                icon={workflow.icon}
                slug={workflow.slug}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
