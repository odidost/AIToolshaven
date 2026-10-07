"use client";

import { useState } from "react";
import { defaultCategoriesFaqs, type CategoryFAQItem } from "@/lib/data/categoriesFaqsData";

export function CategoriesFAQ({ faqs = defaultCategoriesFaqs }: { faqs?: CategoryFAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-16 mb-20 max-w-4xl mx-auto pt-12 border-t border-[#E5E7EB]">
      {/* Centered Heading and Badge */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
          <span className="material-symbols-outlined text-[16px] text-[#E11D48]">quiz</span>
          <span>Comparison FAQs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A0A0A] tracking-tight">
          Frequently Asked Questions: How to Compare AI Tools
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          Clear, unbiased answers on evaluating AI software, benchmarks, pricing models, and running side-by-side comparisons.
        </p>
      </div>

      {/* Interactive FAQ Accordion */}
      <div className="space-y-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-lg border transition-colors bg-white ${
                isOpen ? "border-[#E11D48]/40" : "border-[#E5E7EB] hover:border-gray-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E11D48] rounded-lg transition-colors hover:bg-[#F9FAFB]"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-[#0A0A0A] leading-snug">
                  {item.question}
                </span>
                <span
                  className={`material-symbols-outlined text-lg text-[#4B5563] transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-[#E11D48]" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E5E7EB] pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
