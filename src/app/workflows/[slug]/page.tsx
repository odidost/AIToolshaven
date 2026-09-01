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
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";

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

    const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");

    return {
        title: `${workflow.title} Workflow (Step-by-Step Blueprint 2026)`,
        description: workflow.description,
        alternates: {
            canonical: `${cleanBase}/workflows/${workflow.slug}`,
        },
        openGraph: {
            title: `${workflow.title} Workflow Blueprint (2026) — AIToolsHaven`,
            description: workflow.description,
            url: `${cleanBase}/workflows/${workflow.slug}`,
            type: "article",
            images: [
                {
                    url: siteConfig.ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${workflow.title} Workflow Blueprint`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${workflow.title} Workflow Blueprint (2026)`,
            description: workflow.description,
            images: [siteConfig.ogImage],
        },
    };
}

export default async function WorkflowPage({ params }: Props) {
    const { slug } = await params;
    const workflow = workflows.find((item) => item.slug === slug);

    if (!workflow) {
        notFound();
    }

    const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
    const relatedWorkflows = workflows.filter(w => w.slug !== slug).slice(0, 3);

    const schemaGraph: any[] = [
        {
            "@type": "HowTo",
            "@id": `${cleanBase}/workflows/${workflow.slug}#howto`,
            name: `${workflow.title} AI Workflow Blueprint`,
            description: workflow.description,
            totalTime: workflow.meta?.time ? "PT2H" : undefined,
            estimatedCost: workflow.meta?.cost ? {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: workflow.meta.cost.replace(/[^0-9]/g, "") || "0",
            } : undefined,
            tool: workflow.tools.map((t) => ({
                "@type": "HowToTool",
                name: t,
            })),
            step: workflow.meta?.steps?.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                name: `Step ${index + 1}: ${step.tool} (${step.role || "Task"})`,
                text: step.desc || `Use ${step.tool} to complete this step.`,
            })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${cleanBase}/workflows/${workflow.slug}#breadcrumb`,
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
                {
                    "@type": "ListItem",
                    position: 3,
                    name: `${workflow.title} Blueprint`,
                    item: `${cleanBase}/workflows/${workflow.slug}`,
                },
            ],
        },
    ];

    if (workflow.faqs && workflow.faqs.length > 0) {
        schemaGraph.push({
            "@type": "FAQPage",
            "@id": `${cleanBase}/workflows/${workflow.slug}#faq`,
            mainEntity: workflow.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                },
            })),
        });
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": schemaGraph,
    };

    return (
        <PageContainer as="main" className="py-12 md:py-16">
            <StructuredData data={jsonLd} />
            
            <Breadcrumbs 
                items={[
                    { label: "AI Workflows", href: "/workflows" },
                    { label: workflow.title }
                ]} 
            />

            <div className="mt-6">
                <WorkflowHero workflow={workflow} />
            </div>

            <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-start mt-8">
                <div>
                    <WhyThisOrderWorks workflow={workflow} />

                    <section id="workflow-start" className="mb-12">
                        <h2 className="mb-8 text-fluid-h2 font-black text-on-surface flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">route</span>
                            Step-by-Step Playbook
                        </h2>
                        <WorkflowTimeline steps={workflow.meta?.steps || []} />
                    </section>

                    <WorkflowAlternatives workflow={workflow} />
                    
                    <WorkflowSummary workflow={workflow} />
                </div>

                {/* Sidebar */}
                <aside className="space-y-8 lg:sticky lg:top-24">
                    <WorkflowDeliverables workflow={workflow} />

                    {/* Explore Categories Cross-Silo Card */}
                    <div className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-6 shadow-xs">
                        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                            <span className="material-symbols-outlined text-[18px]">category</span>
                            <span>Explore Component Categories</span>
                        </div>
                        <h4 className="font-bold text-on-surface text-base mb-2">Need Individual Tools?</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                            Browse all 25+ functional categories in our verified directory to compare alternatives and free pricing plans.
                        </p>
                        <Link 
                            href="/categories"
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline"
                        >
                            Browse All 25+ AI Tool Categories
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </Link>
                    </div>

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

            {/* Social CTA */}
            <section className="text-center flex flex-col items-center mt-12 pt-12 border-t border-border/50">
                <h3 className="text-fluid-h3 font-bold tracking-tight mb-3 text-on-surface">
                    Keep Discovering AI
                </h3>
                <p className="text-on-surface-variant max-w-lg mx-auto mb-6">
                    Follow AIToolsHaven for new AI tools, workflows and useful AI resources.
                </p>
                <SocialLinks variant="cta" />
            </section>
        </PageContainer>
    );
}