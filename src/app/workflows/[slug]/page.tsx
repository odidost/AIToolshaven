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
import { WorkflowsFAQ } from "@/components/workflow/WorkflowsFAQ";
import { PageContainer } from "@/components/layout/PageContainer";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";

import { getOptimizedWorkflowTitle, getOptimizedWorkflowDescription } from "@/lib/seo-titles";
import { getWorkflowSiloData } from "@/lib/workflow-relations";

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
    const title = getOptimizedWorkflowTitle(workflow.title, workflow.slug);
    const description = getOptimizedWorkflowDescription(workflow.description, workflow);

    return {
        title: {
            absolute: title,
        },
        description,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: `${cleanBase}/workflows/${workflow.slug}`,
        },
        openGraph: {
            title: `${title} — AIToolsHaven`,
            description,
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
            title,
            description,
            images: [siteConfig.ogImage],
        },
    };
}

function parseIsoDuration(timeStr?: string): string {
    if (!timeStr) return "PT2H";
    const str = timeStr.toLowerCase();
    const hrMatch = str.match(/(\d+(?:\.\d+)?)\s*(h|hr|hour)/);
    const minMatch = str.match(/(\d+)\s*(m|min|minute)/);

    if (hrMatch) {
        const hours = parseFloat(hrMatch[1]);
        const wholeHours = Math.floor(hours);
        const fractionalMinutes = Math.round((hours - wholeHours) * 60);
        if (fractionalMinutes > 0) {
            return `PT${wholeHours}H${fractionalMinutes}M`;
        }
        return `PT${wholeHours}H`;
    }
    if (minMatch) {
        return `PT${minMatch[1]}M`;
    }
    return "PT2H";
}

function getWorkflowFaqs(workflow: any): { question: string; answer: string }[] {
    const existing = workflow.faqs || [];
    const defaults = [
        {
            question: `What is the estimated cost and time needed to run this ${workflow.title} workflow?`,
            answer: `This blueprint typically takes ${workflow.meta?.time || "1-2 hours"} to implement and execute. The estimated software cost is ${workflow.meta?.cost || "free/freemium"} depending on your chosen subscription tier and volume.`
        },
        {
            question: `Can I replace any of the tools in this workflow with alternatives?`,
            answer: `Yes. Each phase of this blueprint includes compatible alternative tools. Review the "Alternative Playbooks: Free vs. Pro" section above to select alternatives that fit your existing subscriptions.`
        },
        {
            question: `Is coding experience required to follow this workflow?`,
            answer: `No. This workflow is designed with no-code and low-code integrations in mind. Step-by-step guidance is provided for each platform so anyone can deploy it quickly.`
        }
    ];

    const merged = [
        ...existing,
        ...defaults.filter((d: any) => !existing.some((e: any) => e.question.toLowerCase().includes(d.question.toLowerCase().slice(0, 15))))
    ];

    return merged.slice(0, 5);
}

export default async function WorkflowPage({ params }: Props) {
    const { slug } = await params;
    const workflow = workflows.find((item) => item.slug === slug);

    if (!workflow) {
        notFound();
    }

    const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
    const relatedWorkflows = workflows.filter(w => w.slug !== slug).slice(0, 3);
    const workflowFaqs = getWorkflowFaqs(workflow);
    const siloData = getWorkflowSiloData(workflow.slug);

    const schemaGraph: any[] = [
        {
            "@type": "HowTo",
            "@id": `${cleanBase}/workflows/${workflow.slug}#howto`,
            name: `${workflow.title} AI Workflow Blueprint (2026)`,
            description: workflow.description,
            image: [
                `${cleanBase}${siteConfig.ogImage.startsWith('/') ? '' : '/'}${siteConfig.ogImage}`
            ],
            totalTime: parseIsoDuration(workflow.meta?.time),
            estimatedCost: workflow.meta?.cost ? {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: workflow.meta.cost.replace(/[^0-9]/g, "") || "0",
            } : undefined,
            supply: workflow.meta?.deliverables?.map((d: string) => ({
                "@type": "HowToSupply",
                name: d,
            })),
            tool: workflow.tools.map((t) => ({
                "@type": "HowToTool",
                name: t,
            })),
            step: workflow.meta?.steps?.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                name: `Phase ${index + 1}: ${step.tool} (${step.role || "Task"})`,
                text: step.desc || `Use ${step.tool} to complete this step.`,
                url: `${cleanBase}/workflows/${workflow.slug}#step-${index + 1}`,
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

    if (workflowFaqs.length > 0) {
        schemaGraph.push({
            "@type": "FAQPage",
            "@id": `${cleanBase}/workflows/${workflow.slug}#faq`,
            mainEntity: workflowFaqs.map((f) => ({
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

                    <WorkflowsFAQ 
                        faqs={workflowFaqs}
                        title={`Frequently Asked Questions: ${workflow.title}`}
                        description="Key details about prerequisites, tool options, execution speed, and costs."
                        centered={false}
                    />
                </div>

                {/* Sidebar */}
                <aside className="space-y-8 lg:sticky lg:top-24">
                    <WorkflowDeliverables workflow={workflow} />

                    {/* Related Tactical Blog Guides */}
                    {siloData.relatedGuides.length > 0 && (
                        <div className="rounded-3xl border border-primary/20 bg-surface p-6 shadow-sm">
                            <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-wider mb-2">
                                <span className="material-symbols-outlined text-base">auto_stories</span>
                                <span>Related In-Depth Guides</span>
                            </div>
                            <h4 className="font-bold text-on-surface text-base mb-3">Tactical Blueprints</h4>
                            <div className="space-y-3">
                                {siloData.relatedGuides.map((guide) => (
                                    <Link 
                                        key={guide.slug} 
                                        href={`/blog/${guide.slug}`}
                                        className="group block p-3 rounded-2xl bg-surface-secondary/60 hover:bg-primary/[0.04] border border-border/70 hover:border-primary/40 transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                                {guide.badge}
                                            </span>
                                        </div>
                                        <div className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                            {guide.title}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Component Category Cross-Silo Card */}
                    <div className="rounded-3xl border border-border bg-surface-secondary/40 p-6 shadow-xs">
                        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                            <span className="material-symbols-outlined text-[18px]">category</span>
                            <span>Component Category Hub</span>
                        </div>
                        <h4 className="font-bold text-on-surface text-base mb-1.5">{siloData.primaryCategory.name}</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                            {siloData.primaryCategory.description} Compare real benchmarks, pricing tiers, and community ratings.
                        </p>
                        <Link 
                            href={siloData.primaryCategory.slug === "all" ? "/categories" : `/category/${siloData.primaryCategory.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline"
                        >
                            <span>Explore {siloData.primaryCategory.name}</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Freemium Silo Callout */}
                    <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6 shadow-xs">
                        <div className="flex items-center gap-2 text-emerald-600 text-xs font-black uppercase tracking-wider mb-2">
                            <span className="material-symbols-outlined text-[18px]">savings</span>
                            <span>$0 Bootstrap Highway</span>
                        </div>
                        <h4 className="font-bold text-on-surface text-base mb-1.5">{siloData.freemiumCallout.title}</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                            {siloData.freemiumCallout.description}
                        </p>
                        <Link 
                            href={siloData.freemiumCallout.href}
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                            <span>{siloData.freemiumCallout.linkText}</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Related Workflows */}
                    <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
                        <h3 className="font-black text-base text-on-surface mb-4">Explore More Workflows</h3>
                        <div className="flex flex-col gap-3">
                            {relatedWorkflows.map(flow => (
                                <Link key={flow.slug} href={`/workflows/${flow.slug}`} className="group block border border-border bg-surface-secondary/40 hover:bg-surface-secondary rounded-2xl p-4 shadow-xs transition-all hover:border-primary/40">
                                    <div className="flex items-center gap-2.5 mb-1">
                                        <span className="material-symbols-outlined text-primary text-lg">{flow.icon}</span>
                                        <span className="font-bold text-xs text-on-surface group-hover:text-primary transition-colors">{flow.title}</span>
                                    </div>
                                    <p className="text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed">{flow.description}</p>
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