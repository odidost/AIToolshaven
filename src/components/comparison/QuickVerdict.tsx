import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";

interface QuickVerdictProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function QuickVerdict({ mainTool, compareTool }: QuickVerdictProps) {
    const mainScore = ((mainTool.rating || 0) + (mainTool.featureRating || 0) + (mainTool.performance || 0)) / 3;
    const compareScore = ((compareTool.rating || 0) + (compareTool.featureRating || 0) + (compareTool.performance || 0)) / 3;

    const winner = mainScore >= compareScore ? mainTool : compareTool;
    const runnerUp = mainScore >= compareScore ? compareTool : mainTool;

    const winnerScore = Math.max(mainScore, compareScore).toFixed(1);

    return (
        <section id="verdict-summary" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-3xl text-primary">emoji_events</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Quick Verdict</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Winner Card */}
                <div className="lg:col-span-2 bg-gradient-to-br from-surface to-surface-secondary/50 rounded-[24px] p-8 border border-border shadow-sm relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    
                    <div className="flex items-start justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-4">
                            <ToolImage tool={winner} type="logo" className="w-16 h-16 rounded-xl border border-border object-contain bg-surface" />
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-warning/10 text-warning text-xs font-bold mb-1">
                                    <span className="material-symbols-outlined text-[14px]">trophy</span>
                                    OVERALL WINNER
                                </div>
                                <h3 className="text-2xl font-bold text-on-surface">{winner.name}</h3>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-primary">{winnerScore}</div>
                            <div className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">AIToolsHaven Score</div>
                        </div>
                    </div>

                    <div className="flex-grow space-y-6 relative z-10">
                        <div>
                            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Best For</h4>
                            <p className="text-on-surface-variant leading-relaxed">
                                {winner.bestFor?.join(', ') || 'General purpose use and professionals.'}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-sm font-bold text-success flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                    Why it wins
                                </h4>
                                <ul className="space-y-2 text-sm text-on-surface-variant">
                                    {winner.pros?.slice(0, 3).map((pro, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[16px] text-success/70 mt-0.5">add</span>
                                            <span>{pro}</span>
                                        </li>
                                    )) || <li>Consistently high performance across tasks.</li>}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-destructive flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                                    Weaknesses
                                </h4>
                                <ul className="space-y-2 text-sm text-on-surface-variant">
                                    {winner.cons?.slice(0, 3).map((con, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[16px] text-destructive/70 mt-0.5">remove</span>
                                            <span>{con}</span>
                                        </li>
                                    )) || <li>May have a learning curve.</li>}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border relative z-10">
                        <Link href={`/tool/${winner.slug}`} className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                            Get started with {winner.name}
                        </Link>
                    </div>
                </div>

                {/* Secondary Cards */}
                <div className="flex flex-col gap-6">
                    {/* Runner Up */}
                    <div className="bg-surface rounded-[24px] p-6 border border-border shadow-sm flex-1">
                        <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">military_tech</span>
                            Strong Alternative
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <ToolImage tool={runnerUp} type="logo" className="w-10 h-10 rounded-lg border border-border object-contain" />
                            <h3 className="font-bold text-lg">{runnerUp.name}</h3>
                        </div>
                        <p className="text-sm text-on-surface-variant mb-4">
                            Better if you specifically need {runnerUp.bestFor?.[0]?.toLowerCase() || 'a different approach'}.
                        </p>
                        <Link href={`/tool/${runnerUp.slug}`} className="text-primary text-sm font-bold hover:underline">
                            View {runnerUp.name} &rarr;
                        </Link>
                    </div>

                    {/* Best Value */}
                    <div className="bg-surface rounded-[24px] p-6 border border-border shadow-sm flex-1">
                        <div className="text-xs font-bold text-success uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">payments</span>
                            Best Value
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-lg">{mainTool.priceModel === 'Free' ? mainTool.name : (compareTool.priceModel === 'Free' ? compareTool.name : runnerUp.name)}</h3>
                        </div>
                        <p className="text-sm text-on-surface-variant">
                            Offers the most features for the lowest barrier to entry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
