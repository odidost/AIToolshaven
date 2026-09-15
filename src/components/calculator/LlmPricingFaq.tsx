import React from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ_ITEMS = [
  {
    question: "How is LLM API pricing calculated?",
    answer: "LLM providers bill based on tokens processed. Pricing is split into two rates: Prompt (Input) tokens and Completion (Output) tokens. One million tokens is roughly 750,000 words. Because generating new text requires iterative autoregressive decoding on GPUs, output tokens are generally 3x to 5x more expensive than input tokens."
  },
  {
    question: "What is prompt caching and how much does it save?",
    answer: "Prompt caching allows providers like Anthropic, OpenAI, and Google to reuse key-value (KV) attention states for static context (such as system instructions, PDF documents, or few-shot examples) across multiple requests. Cache read hits reduce input pricing by 50% to 90% and significantly cut down time-to-first-token (TTFT) latency."
  },
  {
    question: "What is the Batch API discount?",
    answer: "Both OpenAI and Anthropic offer a 50% discount on standard token rates if requests are submitted through their Batch API. In exchange for lower pricing, requests are processed asynchronously within a 24-hour turnaround window rather than with real-time low latency. This is ideal for bulk content generation, classification, and backfilling embeddings."
  },
  {
    question: "What is the cheapest frontier LLM API in 2026?",
    answer: "As of 2026, DeepSeek V3 ($0.26/M in, $1.03/M out) and Google Gemini 3.5 Flash Lite ($0.30/M in, $2.50/M out) offer industry-leading economics for production workloads. For high-reasoning workloads, Claude Sonnet 5 ($2.00/M in, $10.00/M out) and OpenAI o4 Mini ($1.10/M in, $4.40/M out) deliver exceptional reasoning-to-cost ratios."
  },
  {
    question: "How many tokens are in a standard page or 1,000 words?",
    answer: "A general rule of thumb for English text is that 1 token ≈ 4 characters or ~0.75 words. Therefore, 1,000 words is approximately 1,333 tokens. A standard single-spaced typed page (approx. 500 words) translates to roughly 650 to 700 tokens."
  },
  {
    question: "Are thinking / reasoning tokens billed separately?",
    answer: "Reasoning models like OpenAI o3, o4 Mini, and DeepSeek R1 generate internal 'thinking tokens' before returning the visible response. While these reasoning tokens are not returned in the final markdown output, they are counted and billed at the higher completion/output token rate."
  }
];

export function LlmPricingFaq() {
  return (
    <div className="w-full space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          Frequently Asked Questions About AI Token Economics
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Essential architectural guidance on token math, prompt caching KV state reuse, and infrastructure cost optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {FAQ_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-surface border border-border space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors"
          >
            <h3 className="font-bold text-foreground text-base flex items-start space-x-2">
              <span className="text-primary font-black font-mono text-sm mt-0.5">Q.</span>
              <span>{item.question}</span>
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed pl-5">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Token Quick Reference Conversion Card */}
      <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-surface to-accent/5 border border-border text-xs text-foreground shadow-xs">
        <h4 className="font-black text-foreground text-sm mb-3 flex items-center space-x-2">
          <span>📐 Rule of Thumb Token Conversion Guide</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-2">
          <div className="bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <span className="text-on-surface-variant block mb-1">1 Token</span>
            <span className="font-mono text-primary font-bold text-sm">~4 chars</span>
          </div>
          <div className="bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <span className="text-on-surface-variant block mb-1">750 Words</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm">~1,000 tokens</span>
          </div>
          <div className="bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <span className="text-on-surface-variant block mb-1">1 Page Doc</span>
            <span className="font-mono text-accent font-bold text-sm">~650 tokens</span>
          </div>
          <div className="bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <span className="text-on-surface-variant block mb-1">1MB Text File</span>
            <span className="font-mono text-purple-600 dark:text-purple-400 font-bold text-sm">~250k tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
}
