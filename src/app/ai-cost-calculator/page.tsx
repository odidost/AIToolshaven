import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { AiCostMasterCalculator } from '@/components/calculator/AiCostMasterCalculator';
import { LlmPricingTable } from '@/components/calculator/LlmPricingTable';
import { LlmPricingFaq, FAQ_ITEMS } from '@/components/calculator/LlmPricingFaq';
import { PRICING_LAST_UPDATED } from '@/data/llm-pricing';
import { 
  ShieldCheck, 
  ArrowRight,
  Server
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Cost Calculator — Compare AI Model & API Costs | AIToolsHaven',
  description: 'See what AI generation costs, how many credits it uses, and what your AI API bill could look like at scale. Calculate Text, Image, and Video API and credit costs across OpenAI, Claude, Gemini, Kling, Runway, FLUX, and Midjourney.',
  keywords: [
    'ai cost calculator',
    'ai api cost calculator',
    'llm cost calculator',
    'ai image cost calculator',
    'ai image generation cost calculator',
    'ai video cost calculator',
    'ai video generation cost calculator',
    'ai credit calculator',
    'ai generation calculator',
    'kling ai credits calculator',
    'runway credits calculator',
    'midjourney cost per image',
    'flux api cost calculator',
    'ai saas cost calculator',
    'how many videos can i generate with credits'
  ],
  alternates: {
    canonical: 'https://aitoolshaven.com/ai-cost-calculator',
  },
  openGraph: {
    title: 'AI Cost Calculator — Compare AI Model & API Costs — AIToolsHaven',
    description: 'Calculate AI generation costs for APIs, SaaS apps, and consumer credits across Text, Image, and Video.',
    url: 'https://aitoolshaven.com/ai-cost-calculator',
    siteName: 'AIToolsHaven',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cost Calculator — Compare AI Model & API Costs — AIToolsHaven',
    description: 'See what AI generation costs, how many credits it uses, and what your AI API bill could look like at scale.',
  },
};

export const revalidate = 86400;

export default function AiCostCalculatorPage() {
  const currentMonthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  // Structured Data 1: WebApplication Schema
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'AI Cost Calculator & Generation Engine',
    'url': 'https://aitoolshaven.com/ai-cost-calculator',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'All',
    'description': 'Comprehensive AI generation cost calculator forecasting Text (LLM), Image, and Video API and credit spend.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    }
  };

  // Structured Data 2: Dataset Schema
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    'name': 'AI Model API Pricing & Generation Benchmark Dataset (2026)',
    'description': 'Verified benchmark dataset of token pricing, image API rates, video duration costs, and consumer credit consumption.',
    'url': 'https://aitoolshaven.com/ai-cost-calculator',
    'temporalCoverage': '2026',
    'creator': {
      '@type': 'Organization',
      'name': 'AIToolsHaven',
      'url': 'https://aitoolshaven.com'
    }
  };

  // Structured Data 3: FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageContainer>
        <div className="pt-20 pb-16 md:pt-28 md:pb-24 space-y-12 max-w-full overflow-x-clip">
          {/* Breadcrumbs */}
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "AI Cost Calculator" }]} />
          </div>

          {/* Hero Header with Ambient Radial Glow */}
          <header className="relative max-w-3xl mx-auto text-center space-y-4 overflow-x-clip">
            {/* Ambient Background Radial Glow */}
            <div 
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[300px] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" 
              aria-hidden="true" 
            />

            {/* Live Ticker Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 border border-primary/20 backdrop-blur-md text-xs font-semibold text-foreground shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-mono text-primary font-bold">2026 LIVE BENCHMARK</span>
              <span className="text-on-surface-variant">&bull;</span>
              <span className="text-on-surface-variant">40+ Models</span>
              <span className="text-on-surface-variant">&bull;</span>
              <span className="text-on-surface-variant">Text, Image &amp; Video</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
              Calculate Your <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">AI Costs</span>
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Accurately model production API bills, forecast SaaS unit economics, and calculate consumer credit burn rates across every top AI model.
            </p>
          </header>

          {/* Master Multi-Modal Calculator (Build with AI | Use AI) */}
          <section id="calculator" className="w-full max-w-[1280px] mx-auto min-w-0">
            <React.Suspense fallback={
              <div className="w-full h-96 bg-surface border border-border rounded-2xl animate-pulse flex items-center justify-center text-on-surface-variant text-sm">
                Loading AI Cost Calculator...
              </div>
            }>
              <AiCostMasterCalculator />
            </React.Suspense>
          </section>

          {/* Methodology & Data Transparency Notice */}
          <section className="w-full max-w-[1280px] mx-auto p-6 rounded-2xl bg-surface border border-border shadow-xs text-xs space-y-2">
            <div className="flex items-center space-x-2 text-foreground font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Pricing Methodology &amp; Data Transparency</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              AI generation pricing varies by provider, model, resolution, duration, quality, and billing system. We use published provider pricing wherever available. Credit-based calculations use the provider&apos;s documented credit consumption. API calculations use developer/API pricing and are strictly separated from consumer subscription limits.
            </p>
            <div className="text-[11px] font-mono text-on-surface-variant pt-1">
              Pricing last verified: <strong className="text-foreground">{PRICING_LAST_UPDATED}</strong> against official provider documentation.
            </div>
          </section>

          {/* Crawlable Benchmark Dataset Table (SEO & SGE Citation Magnet) */}
          <section id="pricing-table" className="w-full max-w-[1280px] mx-auto pt-6 min-w-0">
            <LlmPricingTable />
          </section>

          {/* Strategic Inbound Sponsorship & Provider Hook */}
          <section className="w-full max-w-[1280px] mx-auto p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-surface-elevated border border-primary/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 min-w-0">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
                <Server className="w-4 h-4" />
                <span>For Model Hosts &amp; AI Infrastructure Providers</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-foreground">
                Feature Your Inference API on AIToolsHaven
              </h3>
              <p className="text-sm text-on-surface-variant max-w-xl">
                Reach thousands of AI founders, startup CTOs, and developers actively benchmarking LLM hosting costs and optimizing production bills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/advertise?ref=ai-cost-calculator"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-bold text-sm transition-all text-center flex items-center justify-center space-x-2 shadow-lg shadow-primary/25"
              >
                <span>Sponsor Benchmark</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?subject=Update+Model+Pricing"
                className="px-5 py-3 rounded-xl bg-surface hover:bg-surface-elevated text-foreground border border-border text-sm font-semibold transition-all text-center"
              >
                Submit Endpoint
              </Link>
            </div>
          </section>

          {/* High-Intent FAQ & Educational Guide */}
          <section id="faq" className="w-full max-w-[1280px] mx-auto pt-6 min-w-0">
            <LlmPricingFaq />
          </section>

        </div>
      </PageContainer>
    </>
  );
}
