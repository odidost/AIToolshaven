"use client";

import { useState } from "react";
import { homepageFaqs } from "./HomepageStructuredData";

export function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-20 border-t border-[#E5E7EB] bg-white">
      <div className="w-full max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[16px] text-[#E11D48]">help</span>
            <span>Compare AI Tools FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4B5563] max-w-xl mx-auto">
            Clear answers about comparing AI software, discovering alternatives, verifying pricing, and choosing tools by goal.
          </p>
        </div>

        <div className="space-y-3">
          {homepageFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-lg border transition-colors bg-white ${
                  isOpen ? "border-[#E11D48]/40" : "border-[#E5E7EB] hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E11D48] rounded-lg transition-colors hover:bg-[#F9FAFB]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0A0A0A] leading-snug">
                    {faq.question}
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
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
