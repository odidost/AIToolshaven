import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

import { goals } from "@/lib/goals";
import { goalDetailsData } from "@/lib/data/goal-details";
import { getAllTools } from "@/lib/queries/tools";
import { StructuredData } from "@/components/shared/StructuredData";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const goal = goals.find((g) => g.slug === slug);

    if (!goal) {
        return { title: "Goal Not Found | AIToolsHaven" };
    }

    return {
        title: `${goal.title} AI Tools & Workflows | AIToolsHaven`,
        description: goal.description,
        openGraph: {
            title: `${goal.title} AI Tools | AIToolsHaven`,
            description: goal.description,
            type: "website",
        },
    };
}

import { GoalHero } from "@/components/goals/GoalHero";
import { GoalToolGrid } from "@/components/goals/GoalToolGrid";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GoalMetrics } from "@/components/goals/GoalMetrics";
import { GoalWorkflow } from "@/components/goals/GoalWorkflow";
import { GoalAlternatives } from "@/components/goals/GoalAlternatives";
import { GoalInsights } from "@/components/goals/GoalInsights";
import { GoalPrompts } from "@/components/goals/GoalPrompts";
import { GoalFAQ } from "@/components/goals/GoalFAQ";
import { GoalEditorial } from "@/components/goals/GoalEditorial";

export default async function GoalPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const goal = goals.find((g) => g.slug === slug);
    const details = goalDetailsData[slug];

    if (!goal || !details) {
        notFound();
    }

    const tools = getAllTools();

    // Show only tools mapped to this goal
    const goalTools = tools.filter((tool) =>
        tool.goals?.includes(goal.slug)
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `${goal.title} AI Tools`,
        description: goal.description,
        url: `https://aitoolshaven.com/goals/${goal.slug}`,
        about: {
            "@type": "Thing",
            name: goal.title
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <StructuredData data={jsonLd} />
            <Breadcrumbs
                items={[
                    { label: "Goals", href: "/goals" },
                    { label: goal.title },
                ]}
            />

            {/* Hero */}
            <GoalHero
                title={goal.title}
                description={goal.description}
                icon={goal.icon}
                toolCount={goalTools.length}
                details={details}
            />

            {/* Metrics */}
            <GoalMetrics details={details} />

            {/* Workflow */}
            <GoalWorkflow steps={details.workflowSteps} />

            {/* Tools */}
            <div className="mb-16">
                <GoalToolGrid tools={goalTools} />
            </div>

            {/* Alternatives */}
            <GoalAlternatives alternatives={details.alternatives} />

            {/* Best Practices & Mistakes */}
            <GoalInsights bestPractices={details.bestPractices} mistakes={details.mistakes} />

            {/* Prompts */}
            <GoalPrompts prompts={details.prompts} />

            {/* Editorial Content */}
            <GoalEditorial content={details.editorialContent} />

            {/* FAQs */}
            <GoalFAQ faqs={details.faqs} />

            {/* Other Goals */}
            <section className="mt-16 rounded-3xl bg-surface-container border border-outline p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-8">
                    Explore More Goals
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {goals
                        .filter((g) => g.slug !== goal.slug)
                        .map((g) => (
                            <Link
                                key={g.slug}
                                href={`/goals/${g.slug}`}
                                className="rounded-full bg-surface border border-outline px-6 py-3 font-semibold hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md"
                            >
                                {g.title}
                            </Link>
                        ))}
                </div>
            </section>
        </div>
    );
}