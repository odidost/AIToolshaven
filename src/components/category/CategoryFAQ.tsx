"use client";

import { useState } from "react";
import type { CategoryTheme } from "@/lib/data/categoryThemes";

export function CategoryFAQ({ theme }: { theme: CategoryTheme }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!theme.faq || theme.faq.length === 0) return null;

  return (
    <section className="mt-14 mb-12">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
        <span className="material-symbols-outlined text-[16px] text-[#E11D48]">quiz</span>
        <span>Frequently Asked Questions</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] mb-6 tracking-tight">
        Category FAQ &amp; Selection Criteria
      </h2>
      <div className="space-y-3">
        {theme.faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-lg transition-colors overflow-hidden ${
                isOpen 
                  ? "border-[#E11D48] bg-white shadow-xs" 
                  : "border-[#E5E7EB] bg-white hover:border-[#E11D48]/40"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none cursor-pointer"
              >
                <span className="font-heading font-semibold text-[#0A0A0A] text-sm sm:text-base">{item.question}</span>
                <span className={`material-symbols-outlined text-[20px] transition-transform duration-200 shrink-0 ml-2 ${isOpen ? "rotate-180 text-[#E11D48]" : "text-[#6B7280]"}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`transition-all duration-200 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4 pt-0 font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
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
