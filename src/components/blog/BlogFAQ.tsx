"use client";

import { useState } from "react";
import { BlogFAQItem } from "@/lib/data/blogFaqsData";

interface BlogFAQProps {
  faqs: BlogFAQItem[];
}

export function BlogFAQ({ faqs }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-16 md:my-24 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-[16px]">help</span>
          Editorial &amp; Research FAQ
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
          Everything You Need to Know About Our AI Research &amp; Guides
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Clear answers regarding our editorial independence, testing methodology, benchmark updates, and tutorial standards.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 bg-surface/80 backdrop-blur-sm overflow-hidden ${
                isOpen
                  ? "border-primary/30 shadow-md ring-1 ring-primary/10"
                  : "border-outline shadow-xs hover:border-outline-variant hover:shadow-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-on-surface leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-xl text-primary transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-border/40">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
