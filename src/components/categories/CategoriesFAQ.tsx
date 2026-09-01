"use client";

import { useState } from "react";
import { defaultCategoriesFaqs, type CategoryFAQItem } from "@/lib/data/categoriesFaqsData";

export function CategoriesFAQ({ faqs = defaultCategoriesFaqs }: { faqs?: CategoryFAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section className="mt-16 mb-20 max-w-4xl mx-auto">
      {/* Centered Heading and Pill Badge */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-[16px]">quiz</span>
          Frequently Asked Questions
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
          Everything You Need to Know About AI Categories
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Clear, unbiased answers on software taxonomy, commercial licensing, free plans, and workflow automation.
        </p>
      </div>

      {/* Interactive FAQ Accordion */}
      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? "border-primary/50 shadow-md bg-primary/[0.02]" 
                  : "border-outline bg-surface hover:border-outline-variant"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-on-surface text-base sm:text-lg pr-4 leading-snug">
                  {item.question}
                </span>
                <span className={`material-symbols-outlined transition-transform duration-300 text-primary flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-6 pt-0 font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
