import { Metadata } from "next";
import { workflows } from "@/lib/workflows";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "AI Workflows & Guides | AIToolsHaven",
  description: "Learn how to chain AI tools together to create powerful automated workflows. Explore step-by-step guides for content creators, developers, and entrepreneurs.",
};

export default function WorkflowsIndexPage() {
  return (
    <PageContainer className="py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Workflows" }]} />

      <div className="max-w-3xl mb-12 mt-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-xl">account_tree</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Learn & Apply</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-4">
          Popular AI Workflows
        </h1>
        <p className="text-xl text-on-surface-variant">
          Master the art of combining AI tools to achieve massive productivity gains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {workflows.map((workflow) => (
          <WorkflowCard
            key={workflow.slug}
            title={workflow.title}
            tools={workflow.tools}
            icon={workflow.icon}
          />
        ))}
      </div>
    </PageContainer>
  );
}
