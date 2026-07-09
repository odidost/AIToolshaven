import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';

interface ExpertVerdictProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function ExpertVerdict({ mainTool, compareTool }: ExpertVerdictProps) {
    const mainWins = (mainTool.rating || 0) >= (compareTool.rating || 0);

    return (
        <section id="verdict" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="bg-surface rounded-[32px] p-8 md:p-12 border border-border shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="flex items-center justify-center mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-primary">gavel</span>
                    </div>
                </div>

                <div className="text-center relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-[34px] font-bold tracking-tight text-on-surface mb-6">Editorial Verdict</h2>
                    
                    <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                        Choosing between <strong>{mainTool.name}</strong> and <strong>{compareTool.name}</strong> comes down to your primary use case. 
                        If your focus is on <strong>{mainTool.bestFor?.[0]?.toLowerCase() || 'general productivity'}</strong>, then <strong>{mainTool.name}</strong> provides a more robust and polished experience. 
                        Conversely, if you specifically need <strong>{compareTool.bestFor?.[0]?.toLowerCase() || 'specialized tools'}</strong> and value <strong>{compareTool.pros?.[0]?.toLowerCase() || 'different features'}</strong>, <strong>{compareTool.name}</strong> is the clear winner.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left bg-surface-secondary/50 rounded-2xl p-6 border border-border">
                        <div>
                            <h4 className="font-bold text-on-surface mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person_check</span>
                                Who should choose {mainTool.name}?
                            </h4>
                            <p className="text-sm text-on-surface-variant">
                                Ideal for {mainTool.bestFor?.join(', ').toLowerCase() || 'individuals and teams'} who prioritize {mainTool.pros?.[1]?.toLowerCase() || 'a streamlined interface and core capabilities'}.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-on-surface mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person_check</span>
                                Who should choose {compareTool.name}?
                            </h4>
                            <p className="text-sm text-on-surface-variant">
                                Best for {compareTool.bestFor?.join(', ').toLowerCase() || 'professionals'} looking for {compareTool.pros?.[1]?.toLowerCase() || 'advanced controls and flexibility'}.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={`/tool/${mainTool.slug}`} className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-glow-primary transition-all">
                            Get started with {mainTool.name}
                        </Link>
                        <Link href={`/tool/${compareTool.slug}`} className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface border border-border text-on-surface font-bold hover:border-primary hover:text-primary transition-all">
                            Get started with {compareTool.name}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
