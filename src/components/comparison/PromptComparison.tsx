"use client";

import React, { useState } from 'react';
import { AITool } from '@/lib/types/tool';

interface PromptComparisonProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function PromptComparison({ mainTool, compareTool }: PromptComparisonProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!mainTool.promptExamples || !compareTool.promptExamples || mainTool.promptExamples.length === 0) {
        return null;
    }

    // Match prompts that exist in both tools
    const matchedPrompts = mainTool.promptExamples.filter(mainExample => 
        compareTool.promptExamples?.some(compareExample => compareExample.prompt === mainExample.prompt)
    );

    if (matchedPrompts.length === 0) {
        return null;
    }

    const activePrompt = matchedPrompts[activeIndex];
    
    const compareResponse = compareTool.promptExamples.find(e => e.prompt === activePrompt.prompt)?.response || '';

    // Mock an editorial comparison based on which tool has higher rating
    const mainWins = (mainTool.featureRating || 0) >= (compareTool.featureRating || 0);
    const winner = mainWins ? mainTool : compareTool;
    const winnerMessage = mainWins 
        ? `${mainTool.name} provides a more comprehensive and structured response, fitting the request perfectly.`
        : `${compareTool.name} offers a more nuanced and context-aware answer, making it superior for this specific task.`;

    return (
        <section id="outputs" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-3xl text-primary">chat</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Prompt Output Comparison</h2>
            </div>

            <div className="bg-surface rounded-[24px] border border-border shadow-sm overflow-hidden">
                {/* Prompt Selector */}
                <div className="bg-surface-secondary/50 p-4 border-b border-border flex gap-2 overflow-x-auto hide-scrollbar">
                    {matchedPrompts.map((example, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                                activeIndex === idx 
                                    ? 'bg-primary text-primary-foreground shadow-sm' 
                                    : 'bg-surface border border-border text-on-surface-variant hover:text-on-surface'
                            }`}
                        >
                            {example.name}
                        </button>
                    ))}
                </div>

                <div className="p-6 md:p-8">
                    {/* The Prompt */}
                    <div className="mb-8">
                        <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">The Prompt</div>
                        <div className="bg-surface-secondary/30 rounded-xl p-4 border border-border text-on-surface font-medium italic">
                            &quot;{activePrompt.prompt}&quot;
                        </div>
                    </div>

                    {/* Responses */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Tool A Response */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                                <img src={mainTool.logoUrl} alt={mainTool.name} className="w-6 h-6 rounded border border-border bg-surface p-0.5" />
                                <span className="font-bold text-on-surface">{mainTool.name} Response</span>
                            </div>
                            <div className="bg-surface rounded-xl p-5 border border-border shadow-xs text-sm text-on-surface-variant leading-relaxed h-full whitespace-pre-wrap font-mono">
                                {activePrompt.response}
                            </div>
                        </div>

                        {/* Tool B Response */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                                <img src={compareTool.logoUrl} alt={compareTool.name} className="w-6 h-6 rounded border border-border bg-surface p-0.5" />
                                <span className="font-bold text-on-surface">{compareTool.name} Response</span>
                            </div>
                            <div className="bg-surface rounded-xl p-5 border border-border shadow-xs text-sm text-on-surface-variant leading-relaxed h-full whitespace-pre-wrap font-mono">
                                {compareResponse}
                            </div>
                        </div>
                    </div>

                    {/* Editorial Comparison */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                                <span className="material-symbols-outlined">rate_review</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-on-surface mb-1">Editorial Take</h4>
                                <p className="text-sm text-on-surface-variant mb-3">{winnerMessage}</p>
                                <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-lg border border-border shadow-xs">
                                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Winner:</span>
                                    <img src={winner.logoUrl} alt={winner.name} className="w-4 h-4 rounded-sm" />
                                    <span className="text-sm font-bold text-on-surface">{winner.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
