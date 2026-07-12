import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { workflows } from "@/lib/workflows";
import { StructuredData } from "@/components/shared/StructuredData";
import { WorkflowHero } from "@/components/workflow/WorkflowHero";
import { WorkflowTimeline } from "@/components/workflow/WorkflowTimeline";
import { WhyThisOrderWorks } from "@/components/workflow/WhyThisOrderWorks";
import { WorkflowAlternatives } from "@/components/workflow/WorkflowAlternatives";
import { WorkflowSummary } from "@/components/workflow/WorkflowSummary";
import { WorkflowDeliverables } from "@/components/workflow/WorkflowDeliverables";
import { PageContainer } from "@/components/layout/PageContainer";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const workflow = workflows.find((item) => item.slug === slug);

    if (!workflow) {
        return { title: "Workflow Not Found | AIToolsHaven" };
    }

    return {
        title: `${workflow.title} Workflow Guide | AIToolsHaven`,
        description: workflow.description,
        openGraph: {
            title: `${workflow.title} | AIToolsHaven Workflows`,
            description: workflow.description,
            type: "article",
        },
    };
}

export default async function WorkflowPage({ params }: Props) {
    const { slug } = await params;
    const workflow = workflows.find((item) => item.slug === slug);

    if (!workflow) {
        notFound();
    }

    const relatedWorkflows = workflows.filter(w => w.slug !== slug).slice(0, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `${workflow.title} Workflow`,
        description: workflow.description,
        step: workflow.meta.steps?.map((step, index) => ({
            "@type": "HowToStep",
            name: `Step ${index + 1}: ${step.tool}`,
            text: step.desc || `Use ${step.tool} to complete this step.`,
        })),
    };

    return (
        <PageContainer as="main" className="py-12 md:py-16">
            <StructuredData data={jsonLd} />
            
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant">
                <Link href="/" className="hover:text-primary transition-colors">
                    Home
                </Link>
                <span>/</span>
                <Link href="/workflows" className="hover:text-primary transition-colors">
                    Workflows
                </Link>
                <span>/</span>
                <span className="text-on-surface font-semibold">{workflow.title}</span>
            </nav>

            <WorkflowHero workflow={workflow} />

            <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-start">
                <div>
                    <WhyThisOrderWorks workflow={workflow} />

                    <section id="workflow-start" className="mb-12">
                        <h2 className="mb-8 text-fluid-h2 font-black text-on-surface flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">route</span>
                            Step-by-Step Playbook
                        </h2>
                        <WorkflowTimeline steps={workflow.meta.steps || []} />
                    </section>

                    <WorkflowAlternatives workflow={workflow} />
                    
                    <WorkflowSummary workflow={workflow} />
                </div>

                {/* Sidebar */}
                <aside className="space-y-8 lg:sticky lg:top-24">
                    <WorkflowDeliverables workflow={workflow} />

                    {/* Related Workflows */}
                    <div className="rounded-3xl border border-border bg-surface-secondary/30 p-8 shadow-sm">
                        <h3 className="font-black text-lg text-on-surface mb-5">Explore More Workflows</h3>
                        <div className="flex flex-col gap-4">
                            {relatedWorkflows.map(flow => (
                                <Link key={flow.slug} href={`/workflows/${flow.slug}`} className="group block border border-border bg-surface rounded-2xl p-5 shadow-xs transition-all hover:shadow-sm hover:border-primary hover:-translate-y-[0.5px]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-primary text-xl">{flow.icon}</span>
                                        <span className="font-bold text-[15px] text-on-surface group-hover:text-primary transition-colors">{flow.title}</span>
                                    </div>
                                    <p className="text-[13px] text-on-surface-variant line-clamp-2 leading-relaxed">{flow.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </PageContainer>
    );
}