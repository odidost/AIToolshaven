import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";
import { getEditorialTitle } from "@/lib/utils";

interface QuickVerdictProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function QuickVerdict({ mainTool, compareTool }: QuickVerdictProps) {
    const mainHasFree = mainTool.priceModel === 'Free' || mainTool.priceModel === 'Freemium';
    const compareHasFree = compareTool.priceModel === 'Free' || compareTool.priceModel === 'Freemium';

    return (
        <section id="verdict-summary" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-2xl">balance</span>
                        <h2 className="text-[28px] sm:text-[34px] font-bold tracking-tight text-on-surface">
                            Quick Decision Guide
                        </h2>
                    </div>
                    <p className="text-on-surface-variant text-sm sm:text-base">
                        Which tool fits your specific workflow, budget, and technical requirements?
                    </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-secondary text-xs font-semibold text-on-surface-variant border border-border shrink-0 self-start sm:self-auto">
                    <span className="material-symbols-outlined text-[14px] text-primary">psychology</span>
                    Workflow Alignment
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Main Tool Recommendation Card */}
                <div className="bg-surface rounded-[24px] p-7 md:p-8 border border-border shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
                    
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <ToolImage tool={mainTool} type="logo" className="w-14 h-14 rounded-2xl border border-border object-contain bg-surface p-1 shadow-xs" />
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">Best Choice If</span>
                                <h3 className="text-2xl font-bold text-on-surface">{mainTool.name}</h3>
                            </div>
                        </div>

                        {/* Best For Scenario */}
                        <div className="mb-6 bg-surface-secondary/50 p-4 rounded-xl border border-border/60">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[15px] text-primary">target</span>
                                Ideal Use Case
                            </h4>
                            <p className="text-sm text-on-surface leading-relaxed font-medium">
                                {mainTool.bestFor?.join(', ') || mainTool.tagline || 'General professional production.'}
                            </p>
                        </div>

                        {/* Standout Advantages */}
                        <div className="space-y-3 mb-8">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-success flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[15px]">verified</span>
                                Key Differentiators
                            </h4>
                            <ul className="space-y-2.5">
                                {mainTool.pros && mainTool.pros.length > 0 ? (
                                    mainTool.pros.slice(0, 3).map((pro, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                                            <span className="material-symbols-outlined text-[16px] text-success shrink-0 mt-0.5">check_circle</span>
                                            <span>{getEditorialTitle(pro)}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                                        <span className="material-symbols-outlined text-[16px] text-success shrink-0 mt-0.5">check_circle</span>
                                        <span>Streamlined user experience and core capability set.</span>
                                    </li>
                                )}
                                <li className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                                    <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">sell</span>
                                    <span>Pricing: <strong>{mainTool.priceModel}</strong> {mainTool.price ? `(${mainTool.price})` : ''}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-border flex items-center justify-between">
                        <Link 
                            href={`/tool/${mainTool.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            Explore {mainTool.name}
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                        {mainTool.websiteUrl && (
                            <a 
                                href={mainTool.websiteUrl} 
                                target="_blank" 
                                rel="noopener noreferrer nofollow"
                                className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-medium"
                            >
                                Visit Site <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Compare Tool Recommendation Card */}
                <div className="bg-surface rounded-[24px] p-7 md:p-8 border border-border shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary" />

                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <ToolImage tool={compareTool} type="logo" className="w-14 h-14 rounded-2xl border border-border object-contain bg-surface p-1 shadow-xs" />
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Best Choice If</span>
                                <h3 className="text-2xl font-bold text-on-surface">{compareTool.name}</h3>
                            </div>
                        </div>

                        {/* Best For Scenario */}
                        <div className="mb-6 bg-surface-secondary/50 p-4 rounded-xl border border-border/60">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[15px] text-secondary">target</span>
                                Ideal Use Case
                            </h4>
                            <p className="text-sm text-on-surface leading-relaxed font-medium">
                                {compareTool.bestFor?.join(', ') || compareTool.tagline || 'Specialized and advanced workflows.'}
                            </p>
                        </div>

                        {/* Standout Advantages */}
                        <div className="space-y-3 mb-8">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-success flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[15px]">verified</span>
                                Key Differentiators
                            </h4>
                            <ul className="space-y-2.5">
                                {compareTool.pros && compareTool.pros.length > 0 ? (
                                    compareTool.pros.slice(0, 3).map((pro, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                                            <span className="material-symbols-outlined text-[16px] text-success shrink-0 mt-0.5">check_circle</span>
                                            <span>{getEditorialTitle(pro)}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                                        <span className="material-symbols-outlined text-[16px] text-success shrink-0 mt-0.5">check_circle</span>
                                        <span>Targeted tooling with specialized execution speed.</span>
                                    </li>
                                )}
                                <li className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">sell</span>
                                    <span>Pricing: <strong>{compareTool.priceModel}</strong> {compareTool.price ? `(${compareTool.price})` : ''}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-border flex items-center justify-between">
                        <Link 
                            href={`/tool/${compareTool.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-surface-secondary hover:bg-surface-secondary/80 text-on-surface border border-border rounded-xl text-sm font-semibold transition-colors"
                        >
                            Explore {compareTool.name}
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                        {compareTool.websiteUrl && (
                            <a 
                                href={compareTool.websiteUrl} 
                                target="_blank" 
                                rel="noopener noreferrer nofollow"
                                className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-medium"
                            >
                                Visit Site <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Factual Takeaway Pill */}
            <div className="mt-6 p-4 rounded-2xl bg-surface-secondary/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
                <div className="flex items-center gap-2 text-center sm:text-left">
                    <span className="material-symbols-outlined text-primary text-base shrink-0">lightbulb</span>
                    <span>
                        <strong>Takeaway:</strong> If you are testing without upfront cost, {mainHasFree && !compareHasFree ? `${mainTool.name} offers a free tier while ${compareTool.name} is paid.` : (!mainHasFree && compareHasFree ? `${compareTool.name} offers a free tier while ${mainTool.name} is paid.` : 'both tools provide access paths for getting started.')}
                    </span>
                </div>
                <div className="shrink-0 font-medium text-on-surface-variant/80">
                    Category: {mainTool.categoryName || mainTool.category}
                </div>
            </div>
        </section>
    );
}
