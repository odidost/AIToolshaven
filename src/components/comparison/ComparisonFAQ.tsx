"use client";

import React, { useState } from 'react';
import { AITool } from '@/lib/types/tool';

interface ComparisonFAQProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function ComparisonFAQ({ mainTool, compareTool }: ComparisonFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: `Is ${mainTool.name} better than ${compareTool.name}?`,
            answer: `It depends on your needs. ${mainTool.name} excels at ${mainTool.useCases?.[0]?.toLowerCase() || 'general tasks'}, while ${compareTool.name} is often preferred for ${compareTool.useCases?.[0]?.toLowerCase() || 'specialized workflows'}. Review our detailed performance analysis above to see which aligns better with your goals.`
        },
        {
            question: `Which one is more affordable: ${mainTool.name} or ${compareTool.name}?`,
            answer: `${mainTool.name} operates on a ${mainTool.priceModel} model, while ${compareTool.name} uses a ${compareTool.priceModel} model. ${mainTool.freeTrial && compareTool.freeTrial ? 'Both offer free trials, so you can test them before committing.' : 'Check their respective pricing pages for the most up-to-date information on limits and features.'}`
        },
        {
            question: `Can I use ${mainTool.name} and ${compareTool.name} together?`,
            answer: `Yes, many professionals use both in tandem. You might use ${mainTool.name} for ${mainTool.useCases?.[1]?.toLowerCase() || 'initial drafting'} and then switch to ${compareTool.name} for ${compareTool.useCases?.[1]?.toLowerCase() || 'final polish'}.`
        },
        {
            question: `Do both tools offer API access?`,
            answer: `${mainTool.api ? `Yes, ${mainTool.name} offers API access.` : `${mainTool.name} does not currently offer public API access.`} ${compareTool.api ? `${compareTool.name} also provides an API for developers.` : `${compareTool.name} does not have an API available.`}`
        }
    ];

    return (
        <section id="faq" className="scroll-mt-32 max-w-3xl mx-auto mb-20 px-4">
            <div className="flex flex-col items-center text-center mb-10">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">help</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface mb-2">Frequently Asked Questions</h2>
                <p className="text-on-surface-variant">Common questions about comparing these tools.</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div 
                        key={idx} 
                        className={`bg-surface border rounded-[20px] overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'border-primary shadow-sm' : 'border-border'}`}
                    >
                        <button
                            className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            aria-expanded={openIndex === idx}
                        >
                            <span className="font-bold text-on-surface pr-8">{faq.question}</span>
                            <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                expand_more
                            </span>
                        </button>
                        
                        <div 
                            className={`px-6 pb-5 text-on-surface-variant leading-relaxed text-sm overflow-hidden transition-all duration-300 ${openIndex === idx ? 'block' : 'hidden'}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
