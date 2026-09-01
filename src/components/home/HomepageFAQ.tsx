"use client";

import { useState } from "react";
import { homepageFaqs } from "./HomepageStructuredData";

export function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-black/5 text-gray-900 shadow-sm px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[18px] text-primary">help</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-fluid-h2 font-black tracking-tight text-gray-900">
            Got Questions? Everything You Need to Know
          </h2>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Clear, honest answers about our directory curation, testing methodology, free tiers, and workflows.
          </p>
        </div>

        <div className="space-y-4">
          {homepageFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden ${
                  isOpen
                    ? "border-primary/30 shadow-md ring-1 ring-primary/10"
                    : "border-black/5 shadow-xs hover:border-black/15 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
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
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-black/5 pt-4">
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
