"use client";

import { useState } from "react";
import { defaultWorkflowsFaqs, type WorkflowFAQItem } from "@/lib/data/workflowsFaqsData";

interface WorkflowsFAQProps {
  faqs?: WorkflowFAQItem[];
  title?: string;
  description?: string;
  badge?: string;
  centered?: boolean;
}

export function WorkflowsFAQ({ 
  faqs = defaultWorkflowsFaqs,
  title = "Everything You Need to Know About AI Workflows",
  description = "Clear, practical answers on multi-app chaining, no-code integrations, operational costs, and quality control.",
  badge = "Frequently Asked Questions",
  centered = true
}: WorkflowsFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`mt-14 mb-16 ${centered ? "max-w-4xl mx-auto" : "w-full"}`}>
      {/* Heading and Pill Badge */}
      <div className={`mb-8 ${centered ? "text-center" : "text-left"}`}>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-[16px]">quiz</span>
          {badge}
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mb-3">
          {title}
        </h2>
        {description && (
          <p className={`text-base text-on-surface-variant leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-3xl"}`}>
            {description}
          </p>
        )}
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
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none"
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
                <p className="p-5 sm:p-6 pt-0 font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
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
