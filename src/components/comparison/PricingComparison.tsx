import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";

interface PricingComparisonProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function PricingComparison({ mainTool, compareTool }: PricingComparisonProps) {
    const renderPricingCards = (tool: AITool) => {
        if (!tool.pricingPlans || tool.pricingPlans.length === 0) {
            return (
                <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm text-center h-full flex flex-col justify-center">
                    <h4 className="text-lg font-bold mb-2">Pricing Information Unavailable</h4>
                    <p className="text-sm text-on-surface-variant">Check their website for the latest pricing.</p>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                {tool.pricingPlans.slice(0, 2).map((plan, idx) => (
                    <div 
                        key={idx} 
                        className={`bg-surface rounded-2xl p-6 border shadow-sm flex flex-col ${
                            plan.recommended ? 'border-primary shadow-glow-primary/20 relative' : 'border-border'
                        }`}
                    >
                        {plan.recommended && (
                            <div className="absolute top-0 right-4 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                Recommended
                            </div>
                        )}
                        <h4 className="text-base font-bold text-on-surface mb-1">{plan.name}</h4>
                        <div className="text-2xl font-bold text-on-surface mb-2">{plan.price}</div>
                        <p className="text-xs text-on-surface-variant mb-4 flex-grow">{plan.description}</p>
                        <ul className="space-y-2 text-xs text-on-surface mb-6">
                            {plan.features.slice(0, 3).map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-1.5">
                                    <span className="material-symbols-outlined text-[14px] text-success/80">check</span>
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section id="pricing" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-fluid-h2 text-primary">sell</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Pricing Comparison</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tool A Pricing */}
                <div className="bg-surface-secondary/30 rounded-[24px] p-6 border border-border">
                    <div className="flex items-center gap-3 mb-6">
                        <ToolImage tool={mainTool} type="logo" className="w-8 h-8 rounded-lg border border-border bg-surface object-contain" />
                        <h3 className="text-xl font-bold">{mainTool.name} Pricing</h3>
                    </div>
                    {renderPricingCards(mainTool)}
                    <div className="mt-6 text-center">
                        <Link href={`/tool/${mainTool.slug}#pricing`} className="text-sm font-semibold text-primary hover:underline">
                            View full pricing details &rarr;
                        </Link>
                    </div>
                </div>

                {/* Tool B Pricing */}
                <div className="bg-surface-secondary/30 rounded-[24px] p-6 border border-border">
                    <div className="flex items-center gap-3 mb-6">
                        <ToolImage tool={compareTool} type="logo" className="w-8 h-8 rounded-lg border border-border bg-surface object-contain" />
                        <h3 className="text-xl font-bold">{compareTool.name} Pricing</h3>
                    </div>
                    {renderPricingCards(compareTool)}
                    <div className="mt-6 text-center">
                        <Link href={`/tool/${compareTool.slug}#pricing`} className="text-sm font-semibold text-primary hover:underline">
                            View full pricing details &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
