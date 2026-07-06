import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

import { goals } from "@/lib/goals";
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
import { GoalRoadmap } from "@/components/goals/GoalRoadmap";
import { roadmaps } from "@/lib/roadmaps";

export default async function GoalPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const goal = goals.find((g) => g.slug === slug);

    if (!goal) {
        notFound();
    }

    // ✅ FIX: use getAllTools instead of missing `tools`
    const tools = getAllTools();

    // Show only tools mapped to this goal
    const goalTools = tools.filter((tool) =>
        tool.goals?.includes(goal.slug)
    );

    // Get the roadmap for this goal
    const roadmap =
        roadmaps[goal.slug as keyof typeof roadmaps] ?? [];

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
            />

            {/* Tools */}
            <GoalToolGrid tools={goalTools} />

            {/* Roadmap */}
            <GoalRoadmap
                title={goal.title}
                steps={roadmap}
            />

            {/* Other Goals */}
            <section className="mt-16 rounded-2xl bg-surface-container border border-outline p-8">
                <h2 className="text-2xl font-bold mb-6">
                    Explore More Goals
                </h2>

                <div className="flex flex-wrap gap-3">
                    {goals
                        .filter((g) => g.slug !== goal.slug)
                        .map((g) => (
                            <Link
                                key={g.slug}
                                href={`/goals/${g.slug}`}
                                className="rounded-full border border-outline px-4 py-2 hover:border-primary transition"
                            >
                                {g.title}
                            </Link>
                        ))}
                </div>
            </section>
        </div>
    );
}