import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

import { goals } from "@/lib/goals";
import { goalDetailsData } from "@/lib/data/goal-details";
import { getAllTools } from "@/lib/queries/tools";
import { StructuredData } from "@/components/shared/StructuredData";
import { PageContainer } from "@/components/layout/PageContainer";
import { SocialLinks } from "@/components/shared/SocialLinks";

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
import { GoalWorkflow } from "@/components/goals/GoalWorkflow";
import { GoalTopPicks } from "@/components/goals/GoalTopPicks";
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

    const tools = await getAllTools();

    const simplifiedTools = tools.map(t => ({ name: t.name, slug: t.slug }));

    // Show only tools mapped to this goal
    const goalTools = tools.filter((tool) =>
        tool.goals?.includes(goal.slug) || tool.goals?.includes(goal.title)
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
        <PageContainer className="py-8 md:py-12">
            <StructuredData data={jsonLd} />
            <Breadcrumbs
                items={[
                    { label: "Goals", href: "/goals" },
                    { label: goal.title },
                ]}
            />

            {/* PHASE 1: LEARN (The Context & Value) */}
            <GoalHero
                title={goal.title}
                description={goal.description}
                icon={goal.icon}
                toolCount={goalTools.length}
                details={details}
                tools={goalTools.slice(0, 5)}
            />

            {/* PHASE 2: UNDERSTAND (The Strategy & Roadmap) */}
            <div id="understand" className="pt-8 mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Phase 1: Understand</span>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                
                <GoalEditorial content={details.editorialContent} />
                
                <div className="max-w-4xl mx-auto">
                    <GoalInsights bestPractices={details.bestPractices} mistakes={details.mistakes} />
                </div>
                
                <div className="max-w-4xl mx-auto mt-16">
                    <GoalWorkflow steps={details.workflowSteps} allTools={simplifiedTools} />
                </div>
            </div>

            {/* PHASE 3: COMPARE (The Top Stacks) */}
            <div id="compare" className="pt-8 mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Phase 2: Compare</span>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                
                <GoalTopPicks alternatives={details.alternatives} estimatedCost={details.estimatedCost} allTools={simplifiedTools} />
            </div>

            {/* PHASE 4: CHOOSE (The Deep Dive) */}
            <div id="tools" className="pt-8 mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Phase 3: Choose Your Tools</span>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                
                <div className="mb-8 text-center max-w-2xl mx-auto">
                    <h2 className="text-fluid-h2 font-bold text-slate-900 tracking-tight">Custom Stack Explorer</h2>
                    <p className="text-slate-500 mt-2 text-lg">Prefer to build your own stack? Browse all {goalTools.length} curated tools for this goal.</p>
                </div>
                
                <GoalToolGrid tools={goalTools} />
            </div>

            {/* PHASE 5: ACT (Prompts & Resources) */}
            <div id="act" className="pt-8 mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Phase 4: Act</span>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <GoalPrompts prompts={details.prompts} allTools={simplifiedTools} />
                    
                    <div className="mt-20">
                        <GoalFAQ faqs={details.faqs} />
                    </div>
                </div>
            </div>

            {/* Explore More Goals */}
            <section className="mt-24 rounded-[3rem] bg-slate-50 border border-slate-100 p-8 md:p-16 text-center shadow-sm">
                <h2 className="text-3xl font-black mb-8 text-slate-900 tracking-tight">
                    Explore More Goals
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {goals
                        .filter((g) => g.slug !== goal.slug)
                        .map((g) => (
                            <Link
                                key={g.slug}
                                href={`/goals/${g.slug}`}
                                className="rounded-2xl bg-white border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                            >
                                {g.title}
                            </Link>
                        ))}
                </div>
            </section>

            {/* Social CTA */}
            <section className="text-center flex flex-col items-center mt-12 pt-12 border-t border-slate-200">
                <h3 className="text-fluid-h3 font-black tracking-tight mb-3 text-slate-900">
                    Keep Discovering AI
                </h3>
                <p className="text-slate-500 max-w-lg mx-auto mb-6 font-medium">
                    Follow AIToolsHaven for new AI tools, workflows and useful AI resources.
                </p>
                <SocialLinks variant="cta" />
            </section>
        </PageContainer>
    );
}