import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { workflows } from "@/lib/workflows";
import { getToolBySlug, getTrendingTools } from "@/lib/data/tools-service";
import { StructuredData } from "@/components/shared/StructuredData";

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

// Workflow metadata is now centralized in src/lib/workflows.ts

export default async function WorkflowPage({ params }: Props) {
    const { slug } = await params;
    const workflow = workflows.find((item) => item.slug === slug);

    if (!workflow) {
        notFound();
    }

    const meta = workflow.meta || {
        outcome: "Automated outputs ready for direct use.",
        time: "1-2 hours",
        skill: "Beginner",
        cost: "Variable",
        steps: workflow.tools.map(() => ({ role: "Assistant Tool", desc: "Perform dedicated automated tasks." }))
    };

    const relatedWorkflows = workflows.filter(w => w.slug !== slug).slice(0, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `${workflow.title} Workflow`,
        description: workflow.description,
        step: workflow.tools.map((toolName, index) => ({
            "@type": "HowToStep",
            name: `Step ${index + 1}: ${toolName}`,
            text: meta.steps[index]?.desc || `Use ${toolName} to complete this step.`,
        })),
    };

    return (
        <main className="container mx-auto px-6 py-12">
            <StructuredData data={jsonLd} />
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant">
                <Link href="/" className="hover:text-primary transition-colors">
                    Home
                </Link>
                <span>/</span>
                <span className="text-on-surface font-semibold">{workflow.title}</span>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-[32px] border border-outline bg-gradient-to-br from-surface to-surface-container p-8 md:p-12 mb-12 shadow-sm">
                <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                                <span className="material-symbols-outlined text-2xl text-primary">
                                    {workflow.icon}
                                </span>
                            </div>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                {workflow.audience}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                            {workflow.title} Workflow Guide
                        </h1>

                        <p className="mt-4 text-lg text-on-surface-variant leading-relaxed">
                            {workflow.description} Learn how to combine these tools step-by-step to achieve high efficiency.
                        </p>
                    </div>

                    {/* Stats Widget */}
                    <div className="w-full lg:w-80 bg-surface rounded-2xl border border-outline p-6 shadow-sm flex flex-col gap-4">
                        <div className="flex justify-between border-b border-outline pb-3">
                            <span className="text-sm text-on-surface-variant flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">schedule</span> Time Required
                            </span>
                            <span className="font-bold text-sm text-on-surface">{meta.time}</span>
                        </div>
                        <div className="flex justify-between border-b border-outline pb-3">
                            <span className="text-sm text-on-surface-variant flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">fitness_center</span> Skill Level
                            </span>
                            <span className="font-bold text-sm text-on-surface">{meta.skill}</span>
                        </div>
                        <div className="flex justify-between border-b border-outline pb-3">
                            <span className="text-sm text-on-surface-variant flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">payments</span> Cost Estimate
                            </span>
                            <span className="font-bold text-sm text-on-surface">{meta.cost}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-on-surface-variant mb-1 font-semibold uppercase tracking-wider">Expected Outcome</span>
                            <span className="text-sm font-medium text-on-surface">{meta.outcome}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Diagram & Pipeline */}
            <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-start">
                <div>
                    <h2 className="mb-8 text-2xl font-black text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">account_tree</span>
                        Step-by-Step Pipeline
                    </h2>

                    <div className="relative border-l-2 border-primary/20 ml-6 pl-8 space-y-12">
                        {workflow.tools.map((toolName, index) => {
                            const stepMeta = meta.steps[index] || { role: "Step Assistant", desc: "Automate steps using AI tool." };
                            const toolData = getToolBySlug(toolName.toLowerCase().replace(/\s+/g, "-"));

                            return (
                                <div key={toolName} className="relative group">
                                    {/* Number Badge */}
                                    <div className="absolute -left-[50px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white text-sm shadow-md border-4 border-surface group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </div>

                                    {/* Step Card */}
                                    <div className="rounded-2xl border border-outline bg-surface p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline pb-4 mb-4">
                                            <div>
                                                <span className="text-xs font-bold text-primary uppercase tracking-widest">{stepMeta.role}</span>
                                                <h3 className="text-xl font-extrabold text-on-surface mt-1">{toolName}</h3>
                                            </div>
                                            {toolData ? (
                                                <Link
                                                    href={`/tool/${toolData.slug}`}
                                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                                                >
                                                    View Details
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </Link>
                                            ) : (
                                                <span className="text-xs text-on-surface-variant italic">Directory match coming soon</span>
                                            )}
                                        </div>

                                        <p className="text-on-surface-variant leading-relaxed mb-6">
                                            {stepMeta.desc}
                                        </p>

                                        {/* Dynamic Alternatives based on Category */}
                                        {toolData && (
                                            <div className="bg-surface-container rounded-xl p-4 border border-outline">
                                                <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Alternative Tools</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    <Link href={`/tool/${toolData.slug}`} className="text-xs font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-md border border-primary/10">
                                                        {toolData.name} (Primary)
                                                    </Link>
                                                    {getTrendingTools()
                                                        .filter(t => t.category === toolData.category && t.id !== toolData.id)
                                                        .slice(0, 2)
                                                        .map(alt => (
                                                            <Link key={alt.id} href={`/tool/${alt.slug}`} className="text-xs font-medium text-on-surface-variant hover:text-primary bg-surface px-2.5 py-1 rounded-md border border-outline hover:border-primary/20 transition-colors">
                                                                {alt.name}
                                                            </Link>
                                                        ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8 lg:sticky lg:top-24">
                    {/* Visual Diagram Banner */}
                    <div className="rounded-2xl border border-outline bg-primary-container p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-on-primary-container mb-2">Visual Pipeline Summary</h3>
                        <p className="text-xs text-on-primary-container opacity-80 mb-4 leading-relaxed">
                            How details and data flow through this workflow setup.
                        </p>
                        <div className="bg-surface/85 backdrop-blur-sm rounded-xl p-4 flex flex-col gap-2 border border-outline">
                            {workflow.tools.map((t, idx) => (
                                <div key={t} className="flex items-center gap-2 text-xs font-medium text-on-surface">
                                    <div className="w-5 h-5 rounded bg-primary text-white flex items-center justify-center font-bold text-[10px]">{idx + 1}</div>
                                    <span>{t}</span>
                                    {idx !== workflow.tools.length - 1 && <span className="material-symbols-outlined text-xs text-primary ml-auto">arrow_downward</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Related Workflows */}
                    <div className="rounded-2xl border border-outline p-6">
                        <h3 className="font-black text-lg text-on-surface mb-4">Related Workflows</h3>
                        <div className="flex flex-col gap-4">
                            {relatedWorkflows.map(flow => (
                                <Link key={flow.slug} href={`/workflows/${flow.slug}`} className="group block border border-outline rounded-xl p-4 hover:border-primary transition-colors">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="material-symbols-outlined text-primary text-lg">{flow.icon}</span>
                                        <span className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">{flow.title}</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant line-clamp-2">{flow.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}