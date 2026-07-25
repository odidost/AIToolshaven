"use client";

import React, { useState } from 'react';
import type { AITool } from '@/lib/types/tool';

interface ToolFAQProps {
    tool: AITool;
}

export function ToolFAQ({ tool }: ToolFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    
    if (!tool.editorial?.faqs || tool.editorial.faqs.length === 0) {
        return null;
    }

    const faqs = tool.editorial.faqs;

    return (
        <section id="faq" className="scroll-mt-32 max-w-3xl mx-auto mb-20 px-4 mt-20">
            <div className="flex flex-col items-center text-center mb-10">
                <span className="material-symbols-outlined text-fluid-h2 text-primary mb-4">help</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface mb-2">Frequently Asked Questions</h2>
                <p className="text-on-surface-variant">Common questions about {tool.name}.</p>
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
