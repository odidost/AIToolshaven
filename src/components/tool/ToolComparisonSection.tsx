import Link from "next/link";
import type { AITool } from "@/lib/types/tool";

interface ToolComparisonSectionProps {
    tool: AITool;
    comparisonTools: AITool[];
}

export default function ToolComparisonSection({
    tool,
    comparisonTools,
}: ToolComparisonSectionProps) {
    if (!comparisonTools?.length) return null;

    return (
        <section className="mt-16">
            <div className="rounded-[24px] border border-border/50 bg-white p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.03)_0%,transparent_70%)] pointer-events-none" />

                <div className="flex flex-col gap-4 relative z-10">
                    <div>
                        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase">
                            Compare Options
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-on-surface">
                            Compare {tool.name} with Alternatives
                        </h2>
                        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                            Discover how {tool.name} compares with other popular AI tools
                            based on pricing, ratings, features, and ideal use cases.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3 relative z-10">
                    {comparisonTools.map((comparisonTool, idx) => (
                        <div
                            key={comparisonTool.id}
                            className="group relative rounded-[24px] border border-border/50 bg-surface-secondary/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md hover:bg-white overflow-hidden flex flex-col"
                        >
                            {idx === 0 && (
                                <div className="absolute -right-10 top-6 rotate-45 bg-gradient-to-r from-success to-emerald-400 px-12 py-1 text-[10px] font-bold text-white shadow-sm z-20">
                                    TOP RATED
                                </div>
                            )}

                            <div className="flex items-center justify-between mb-6 relative z-10">
                                <img
                                    src={comparisonTool.logoUrl}
                                    alt={comparisonTool.name}
                                    className="h-14 w-14 rounded-2xl border border-border/50 object-cover bg-white shadow-xs group-hover:scale-105 transition-transform"
                                />

                                <div className="flex items-center gap-1.5 rounded-full bg-warning/10 px-2.5 py-1 text-sm font-bold text-warning">
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    {comparisonTool.rating}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-on-surface mb-3 relative z-10">
                                {comparisonTool.name}
                            </h3>

                            <p className="text-sm leading-relaxed text-on-surface-variant mb-8 relative z-10">
                                See how {tool.name} compares with {comparisonTool.name}. Discover which tool offers the best features and value for your specific needs.
                            </p>

                            <Link
                                href={`/compare/${tool.slug}-vs-${comparisonTool.slug}`}
                                className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-border/50 bg-white px-4 py-3 text-sm font-semibold text-on-surface transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-glow-primary relative z-10"
                            >
                                Compare Now
                                <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center relative z-10">
                    <Link
                        href="/compare"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                        View All Comparisons
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}