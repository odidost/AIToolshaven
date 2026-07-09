import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';

interface WorkflowRecommendationsProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function WorkflowRecommendations({ mainTool, compareTool }: WorkflowRecommendationsProps) {
    // Generate some mock workflows based on tool category and useCases
    const workflows = [
        {
            title: `The Ultimate ${mainTool.useCases?.[0] || 'Productivity'} Stack`,
            description: `Combine ${mainTool.name} with these tools for maximum efficiency.`,
            steps: [
                { name: mainTool.name, action: 'Draft & Ideate', icon: 'edit' },
                { name: 'Notion AI', action: 'Organize', icon: 'format_list_bulleted' },
                { name: 'Canva', action: 'Design', icon: 'brush' },
            ]
        },
        {
            title: `The Advanced ${compareTool.useCases?.[0] || 'Research'} Workflow`,
            description: `Leverage ${compareTool.name}'s strengths with this specialized stack.`,
            steps: [
                { name: 'Perplexity', action: 'Research', icon: 'travel_explore' },
                { name: compareTool.name, action: 'Analyze & Synthesize', icon: 'psychology' },
                { name: 'Webflow', action: 'Publish', icon: 'language' },
            ]
        }
    ];

    return (
        <section id="workflows" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-3xl text-primary">account_tree</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Workflow Recommendations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workflows.map((workflow, wIdx) => (
                    <div key={wIdx} className="bg-surface rounded-[24px] p-8 border border-border shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-xl font-bold text-on-surface mb-2">{workflow.title}</h3>
                        <p className="text-sm text-on-surface-variant mb-8">{workflow.description}</p>

                        <div className="relative">
                            {/* Connecting Line */}
                            <div className="absolute left-[23px] top-[24px] bottom-[24px] w-0.5 bg-border z-0" />

                            <div className="space-y-6 relative z-10">
                                {workflow.steps.map((step, sIdx) => (
                                    <div key={sIdx} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-surface border-2 border-border shadow-sm flex items-center justify-center shrink-0 text-primary bg-surface">
                                            <span className="material-symbols-outlined">{step.icon}</span>
                                        </div>
                                        <div className="pt-2">
                                            <div className="text-sm font-bold text-on-surface">{step.name}</div>
                                            <div className="text-xs text-on-surface-variant uppercase tracking-wider">{step.action}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                            <Link href="/workflows" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                                View full workflow <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
