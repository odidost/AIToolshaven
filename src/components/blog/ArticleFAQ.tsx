"use client";

import { useState } from "react";
import type { ArticleFAQItem } from "@/lib/blog-faqs";

export function ArticleFAQ({ faqs }: { faqs: ArticleFAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-14 mb-10 pt-10 border-t border-outline" aria-labelledby="faq-heading">
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-primary text-[20px]">help</span>
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Frequently Asked Questions
        </span>
      </div>
      <h2 
        id="faq-heading" 
        className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mb-6"
      >
        Answers to Common Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? "border-primary/40 shadow-sm bg-primary/[0.02]" 
                  : "border-outline bg-surface-container hover:border-outline-variant"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-on-surface text-base sm:text-lg pr-4 leading-snug">
                  {item.question}
                </span>
                <span 
                  className={`material-symbols-outlined transition-transform duration-300 text-primary flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-5 pt-0 font-sans text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
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
