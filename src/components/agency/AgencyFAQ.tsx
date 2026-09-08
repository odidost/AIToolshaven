"use client";

import React, { useState } from "react";

const agencyFaqs = [
  {
    question: "What does AI Tools Haven actually build?",
    answer:
      "We design and build production-ready AI systems: custom AI agents (sales, support, research), multi-tool workflow automations (connecting CRMs, forms, and databases), data ingestion/processing pipelines, and intelligent web applications (featuring AI search, recommendation engines, and dynamic assistants).",
  },
  {
    question: "Do I need to know which AI tools I want?",
    answer:
      "No. That is our job. You only need to know your operational bottleneck, manual time sink, or business objective. Drawing from our database and continuous testing of 1,000+ AI tools and models (OpenAI, Claude, Gemini, DeepSeek, open-source models, n8n, Make), we select the right stack for cost, speed, and reliability.",
  },
  {
    question: "Can you integrate with tools we already use?",
    answer:
      "Yes. Most of our client systems connect existing software rather than replacing it. We regularly build integrations across HubSpot, Salesforce, Notion, Slack, Airtable, Google Workspace, PostgreSQL/Supabase, Shopify, Stripe, and custom internal REST APIs.",
  },
  {
    question: "Can you build custom AI agents?",
    answer:
      "Yes. We build deterministic and autonomous agents with tool-use capabilities, knowledge retrieval (RAG), strict guardrails, memory, and validation checks to prevent hallucinations and ensure enterprise-safe execution.",
  },
  {
    question: "How much does an AI implementation cost?",
    answer:
      "Projects vary depending on scope, architecture complexity, data security requirements, number of third-party integrations, and whether you require one-time builds or ongoing maintenance retainers. During our initial scoping review, we provide a fixed-scope roadmap and transparent milestone quote before any work starts.",
  },
  {
    question: "Do you work with businesses outside Nigeria?",
    answer:
      "Yes. We work with founders, agencies, e-commerce brands, and operations teams globally across the US, UK, Europe, Canada, and Africa. All communication, scoping, sprints, and handoffs are handled asynchronously and via scheduled video calls.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. After delivery and team onboarding, we offer ongoing optimization retainers to monitor agent accuracy, update API versions, handle token/cost optimization, and extend workflows as your business expands.",
  },
];

export function AgencyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {agencyFaqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden ${
              isOpen
                ? "border-primary/40 shadow-sm ring-1 ring-primary/10"
                : "border-slate-200/80 hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="text-base font-bold text-slate-900 leading-snug">
                {faq.question}
              </span>
              <span
                className={`material-symbols-outlined text-xl text-primary transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
