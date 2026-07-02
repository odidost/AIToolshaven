import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import type { AITool } from "@/lib/types/tool";

interface ToolComparisonSectionProps {
    tool: AITool;
    comparisonTools: AITool[];
}

export default function ToolComparisonSection({
    tool,
    comparisonTools,
}: ToolComparisonSectionProps) {
    return (
        <section className="mt-16">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-sm">

                {/* Header */}

                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

                    <div>

                        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            Compare AI Tools
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900">
                            Compare {tool.name} with Similar AI Tools
                        </h2>

                        <p className="mt-3 max-w-2xl text-slate-600">
                            Discover how {tool.name} compares with other popular AI assistants
                            based on pricing, ratings, features and ideal use cases.
                        </p>

                    </div>

                    <Link
                        href="/compare"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                        View All Comparisons
                        <ArrowRight size={16} />
                    </Link>

                </div>

                {/* Cards */}

                <div className="mt-10 grid gap-6 lg:grid-cols-3">

                    {comparisonTools.map((comparisonTool) => (

                        <div
                            key={comparisonTool.id}
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                        >

                            <div className="flex items-center justify-between">

                                <img
                                    src={comparisonTool.logoUrl}
                                    alt={comparisonTool.name}
                                    className="h-12 w-12 rounded-xl object-cover"
                                />

                                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-sm font-medium text-amber-600">
                                    <Star size={14} fill="currentColor" />
                                    {comparisonTool.rating}
                                </div>

                            </div>

                            <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                {comparisonTool.name}
                            </h3>

                            <p className="mt-2 text-sm text-slate-600">
                                {comparisonTool.tagline}
                            </p>

                            <div className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                {comparisonTool.price ?? comparisonTool.priceModel}
                            </div>

                            <Link
                                href={`/compare/${tool.slug}-vs-${comparisonTool.slug}`}
                                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3"
                            >
                                Compare Now
                                <ArrowRight size={16} />
                            </Link>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}