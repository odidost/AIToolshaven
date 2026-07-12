import { Metadata } from "next";
import { goals } from "@/lib/goals";
import { GoalCard } from "@/components/home/GoalCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "AI Goals & Collections | AIToolsHaven",
  description: "Browse AI tools by goal. Whether you want to start a faceless YouTube channel, build AI workflows, or make money online, we have the right tools for you.",
};

export default function GoalsIndexPage() {
  return (
    <PageContainer className="py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Goals" }]} />

      <div className="max-w-3xl mb-12 mt-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-xl">interests</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Curated</span>
        </div>
        <h1 className="text-fluid-h1 font-bold text-on-surface tracking-tight mb-4">
          Browse by Goal
        </h1>
        <p className="text-xl text-on-surface-variant">
          Discover the perfect combination of AI tools tailored to your specific objectives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {goals.map((goal) => (
          <GoalCard
            key={goal.slug}
            title={goal.title}
            icon={goal.icon}
            count={goal.count}
            slug={goal.slug}
          />
        ))}
      </div>
    </PageContainer>
  );
}
