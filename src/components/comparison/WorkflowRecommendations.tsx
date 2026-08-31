import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';
import { getEditorialTitle } from '@/lib/utils';

interface WorkflowRecommendationsProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function WorkflowRecommendations({ mainTool, compareTool }: WorkflowRecommendationsProps) {
    // Generate category-contextual workflow steps
    const catLower = (mainTool.category || '').toLowerCase();
    
    let mainAction = 'Execution & Generation';
    let prepAction = 'Context & Ideation';
    let finishAction = 'Final Quality Review';

    if (catLower.includes('code') || catLower.includes('developer')) {
        prepAction = 'Specification & Scaffolding';
        mainAction = 'Code Generation & Refactoring';
        finishAction = 'Unit Testing & CI/CD';
    } else if (catLower.includes('image') || catLower.includes('design') || catLower.includes('art')) {
        prepAction = 'Prompt & Style Reference';
        mainAction = 'Asset Synthesis & Inpainting';
        finishAction = 'Upscaling & Asset Export';
    } else if (catLower.includes('video') || catLower.includes('animation')) {
        prepAction = 'Script & Scene Breakdown';
        mainAction = 'AI Video Rendering';
        finishAction = 'Audio Sync & Composition';
    } else if (catLower.includes('writing') || catLower.includes('copy') || catLower.includes('content')) {
        prepAction = 'Outline & Research';
        mainAction = 'Draft Generation';
        finishAction = 'Fact Checking & Publishing';
    } else if (catLower.includes('audio') || catLower.includes('voice')) {
        prepAction = 'Text Script Preparation';
        mainAction = 'Voice Synthesis & Modulation';
        finishAction = 'Audio Mastering & Export';
    }

    const workflows = [
        {
            title: `${mainTool.name} Production Pipeline`,
            description: `How high-performing teams integrate ${mainTool.name} into their daily delivery stack.`,
            steps: [
                { name: 'Input Preparation', action: prepAction, icon: 'input' },
                { name: mainTool.name, action: mainAction, icon: 'smart_toy' },
                { name: 'Deliverable Output', action: finishAction, icon: 'verified' },
            ]
        },
        {
            title: `${compareTool.name} Production Pipeline`,
            description: `How high-performing teams integrate ${compareTool.name} into their daily delivery stack.`,
            steps: [
                { name: 'Input Preparation', action: prepAction, icon: 'input' },
                { name: compareTool.name, action: mainAction, icon: 'smart_toy' },
                { name: 'Deliverable Output', action: finishAction, icon: 'verified' },
            ]
        }
    ];

    return (
        <section id="workflows" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-fluid-h2 text-primary">account_tree</span>
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
