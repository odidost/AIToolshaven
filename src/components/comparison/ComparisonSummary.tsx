import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';

import Image from 'next/image';

interface ComparisonSummaryProps {
    mainTool: AITool;
    compareTool: AITool;
    categoryName: string;
}

const ToolSummaryCard = ({ tool, categoryName }: { tool: AITool; categoryName: string }) => (
    <div className="bg-surface rounded-[24px] p-8 border border-border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 group flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
                <Image src={tool.logoUrl} alt={tool.name} width={64} height={64} className="w-16 h-16 rounded-2xl border border-border object-contain bg-surface p-1 shadow-xs" />
                <div>
                    <h3 className="text-xl font-bold text-on-surface">{tool.name}</h3>
                    <p className="text-sm text-on-surface-variant font-medium">By {tool.company || 'Independent'}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 bg-surface-secondary px-2 py-1 rounded-md mb-1">
                    <span className="material-symbols-outlined text-[14px] text-warning">star</span>
                    <span className="text-sm font-bold text-on-surface">{tool.rating}</span>
                </div>
                <span className="text-xs text-on-surface-variant">({tool.reviewCount.toLocaleString()})</span>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">
                {tool.description}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-secondary text-on-surface-variant border border-border">
                    {categoryName}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    {tool.priceModel}
                </span>
            </div>
        </div>

        <div className="mb-8 flex-grow">
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-3">Top Features</h4>
            <ul className="space-y-3">
                {tool.features.slice(0, 4).map((feature, idx) => {
                    const title = typeof feature === 'string' ? feature : feature.title;
                    return (
                        <li key={idx} className="flex items-center gap-2 text-sm text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px] text-primary/70">check</span>
                            <span>{title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>

        <div className="mt-auto">
            <Link 
                href={tool.websiteUrl || `/tool/${tool.slug}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-on-surface text-surface font-semibold hover:bg-on-surface/90 transition-colors"
            >
                Visit Website
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </Link>
        </div>
    </div>
);

export function ComparisonSummary({ mainTool, compareTool, categoryName }: ComparisonSummaryProps) {


    return (
        <section id="overview" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ToolSummaryCard tool={mainTool} categoryName={categoryName} />
                <ToolSummaryCard tool={compareTool} categoryName={categoryName} />
            </div>
        </section>
    );
}
