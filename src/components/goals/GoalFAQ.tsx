"use client";

import { useState } from "react";
import type { GoalDetails } from "@/lib/data/goal-details";

type GoalFAQProps = {
    faqs: GoalDetails["faqs"];
};

export function GoalFAQ({ faqs }: GoalFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="rounded-2xl border border-outline bg-surface overflow-hidden transition-all duration-200">
                            <button
                                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none hover:bg-surface-variant/30"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                                    keyboard_arrow_down
                                </span>
                            </button>
                            <div 
                                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <p className="text-on-surface-variant leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
