"use client";

import { useState } from "react";
import type { CategoryTheme } from "@/lib/data/categoryThemes";

export function CategoryFAQ({ theme }: { theme: CategoryTheme }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  if (!theme.faq || theme.faq.length === 0) return null;

  return (
    <section className="mt-16 mb-12">
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-surface mb-6 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {theme.faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? "border-[rgb(var(--category-accent))] shadow-sm bg-[rgba(var(--category-accent),0.02)]" 
                  : "border-border bg-surface hover:border-outline"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="font-heading font-semibold text-on-surface text-base sm:text-lg">{item.question}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180 text-[rgb(var(--category-accent))]" : "text-on-surface-variant"}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-5 pt-0 font-sans text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px] font-normal">
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
