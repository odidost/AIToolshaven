import React from 'react';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";

interface WinnerGridProps {
    mainTool: AITool;
    compareTool: AITool;
}

type DifferentiatorStatus = 'main' | 'compare' | 'tie' | 'neutral';

export function WinnerGrid({ mainTool, compareTool }: WinnerGridProps) {
    // 1. Accessibility / Free Tier Evaluation
    const mainHasFree = mainTool.priceModel === 'Free' || mainTool.priceModel === 'Freemium';
    const compareHasFree = compareTool.priceModel === 'Free' || compareTool.priceModel === 'Freemium';
    let budgetWinner: DifferentiatorStatus = 'tie';
    let budgetNote = 'Both tools offer free access or freemium plans to get started.';
    if (mainHasFree && !compareHasFree) {
        budgetWinner = 'main';
        budgetNote = `${mainTool.name} offers a free tier, while ${compareTool.name} requires a paid subscription.`;
    } else if (!mainHasFree && compareHasFree) {
        budgetWinner = 'compare';
        budgetNote = `${compareTool.name} offers a free tier, while ${mainTool.name} requires a paid subscription.`;
    } else if (!mainHasFree && !compareHasFree) {
        budgetWinner = 'tie';
        budgetNote = 'Both tools operate on paid models with subscription or credit tiers.';
    }

    // 2. Developer & API Extensibility
    let apiWinner: DifferentiatorStatus = 'neutral';
    let apiNote = 'Neither tool currently documents public developer API access.';
    if (mainTool.api && compareTool.api) {
        apiWinner = 'tie';
        apiNote = 'Both products provide programmatic API endpoints for developer workflows.';
    } else if (mainTool.api && !compareTool.api) {
        apiWinner = 'main';
        apiNote = `${mainTool.name} provides an API for seamless custom integrations.`;
    } else if (!mainTool.api && compareTool.api) {
        apiWinner = 'compare';
        apiNote = `${compareTool.name} provides an API for seamless custom integrations.`;
    }

    // 3. Platform & Mobile Mobility
    let platformWinner: DifferentiatorStatus = 'tie';
    let platformNote = 'Both tools offer cloud web access.';
    if (mainTool.mobileApp && !compareTool.mobileApp) {
        platformWinner = 'main';
        platformNote = `${mainTool.name} offers dedicated mobile apps for work on the go.`;
    } else if (!mainTool.mobileApp && compareTool.mobileApp) {
        platformWinner = 'compare';
        platformNote = `${compareTool.name} offers dedicated mobile apps for work on the go.`;
    } else if (mainTool.mobileApp && compareTool.mobileApp) {
        platformWinner = 'tie';
        platformNote = 'Both tools provide native mobile apps alongside web interfaces.';
    }

    // 4. Code Transparency & Open Source
    let codeWinner: DifferentiatorStatus = 'tie';
    let codeNote = 'Both tools are proprietary SaaS products with hosted cloud infrastructure.';
    if (mainTool.openSource && !compareTool.openSource) {
        codeWinner = 'main';
        codeNote = `${mainTool.name} is open source, allowing self-hosting and custom modifications.`;
    } else if (!mainTool.openSource && compareTool.openSource) {
        codeWinner = 'compare';
        codeNote = `${compareTool.name} is open source, allowing self-hosting and custom modifications.`;
    } else if (mainTool.openSource && compareTool.openSource) {
        codeWinner = 'tie';
        codeNote = 'Both projects are open source with community-audited codebases.';
    }

    const cards = [
        {
            title: 'Budget & Accessibility',
            icon: 'payments',
            status: budgetWinner,
            note: budgetNote,
        },
        {
            title: 'Developer Extensibility',
            icon: 'terminal',
            status: apiWinner,
            note: apiNote,
        },
        {
            title: 'Mobile & Device Mobility',
            icon: 'devices',
            status: platformWinner,
            note: platformNote,
        },
        {
            title: 'Codebase & Transparency',
            icon: 'code_blocks',
            status: codeWinner,
            note: codeNote,
        },
    ];

    return (
        <section id="categories" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-2xl">compare</span>
                        <h2 className="text-[28px] sm:text-[34px] font-bold tracking-tight text-on-surface">
                            Head-to-Head Differentiators
                        </h2>
                    </div>
                    <p className="text-on-surface-variant text-sm sm:text-base">
                        Factual comparison across pricing barriers, developer APIs, and ecosystem support.
                    </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-secondary text-xs font-semibold text-on-surface-variant border border-border shrink-0 self-start sm:self-auto">
                    <span className="material-symbols-outlined text-[14px] text-primary">fact_check</span>
                    Objective Spec Differentiators
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card, idx) => (
                    <div 
                        key={idx} 
                        className="bg-surface rounded-[24px] p-6 border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-surface-secondary rounded-xl flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-xl">{card.icon}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-on-surface">{card.title}</h3>
                                </div>

                                {card.status === 'tie' && (
                                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-surface-secondary text-on-surface-variant border border-border">
                                        Balanced
                                    </span>
                                )}
                            </div>

                            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                                {card.note}
                            </p>
                        </div>

                        {/* Status Footer */}
                        <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                            {card.status === 'main' && (
                                <div className="flex items-center gap-2 text-success font-semibold">
                                    <ToolImage tool={mainTool} type="logo" className="w-5 h-5 rounded-md object-contain" />
                                    <span>Advantage: {mainTool.name}</span>
                                </div>
                            )}

                            {card.status === 'compare' && (
                                <div className="flex items-center gap-2 text-success font-semibold">
                                    <ToolImage tool={compareTool} type="logo" className="w-5 h-5 rounded-md object-contain" />
                                    <span>Advantage: {compareTool.name}</span>
                                </div>
                            )}

                            {card.status === 'tie' && (
                                <div className="flex items-center gap-2 text-on-surface-variant font-medium">
                                    <div className="flex -space-x-1.5">
                                        <ToolImage tool={mainTool} type="logo" className="w-5 h-5 rounded-md object-contain border border-surface" />
                                        <ToolImage tool={compareTool} type="logo" className="w-5 h-5 rounded-md object-contain border border-surface" />
                                    </div>
                                    <span>Equivalent capability</span>
                                </div>
                            )}

                            {card.status === 'neutral' && (
                                <span className="text-on-surface-variant/70 italic">Not available on either tool</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
