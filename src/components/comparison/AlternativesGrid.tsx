import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";

interface AlternativesGridProps {
    mainTool: AITool;
    compareTool: AITool;
    alternativeTools: AITool[];
}

export function AlternativesGrid({ mainTool, compareTool, alternativeTools }: AlternativesGridProps) {
    if (!alternativeTools || alternativeTools.length === 0) return null;

    return (
        <section id="related" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-fluid-h2 text-primary">diversity_2</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Other Alternatives to Consider</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {alternativeTools.slice(0, 3).map((tool) => (
                    <div key={tool.id} className="bg-surface rounded-[24px] p-6 border border-border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <ToolImage tool={tool} type="logo" className="w-12 h-12 rounded-xl border border-border bg-surface object-contain" />
                            <div>
                                <h3 className="font-bold text-on-surface">{tool.name}</h3>
                                <div className="flex items-center gap-1 text-xs font-semibold text-warning">
                                    <span className="material-symbols-outlined text-[14px]">star</span>
                                    {tool.rating}
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-on-surface-variant line-clamp-2 mb-6 flex-grow">
                            {tool.tagline || tool.description}
                        </p>
                        <div className="flex flex-col gap-3 mt-auto">
                            <Link href={tool.websiteUrl || `/tool/${tool.slug}`} className="text-center text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 py-2.5 rounded-xl transition-colors">
                                Try {tool.name}
                            </Link>
                            <Link href={`/compare/${mainTool.slug}-vs-${tool.slug}`} className="text-center text-sm font-semibold text-on-surface hover:text-primary transition-colors">
                                Compare vs {mainTool.name} &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
