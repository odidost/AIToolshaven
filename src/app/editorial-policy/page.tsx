import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/shared/StructuredData';
import {
  ShieldCheck,
  Scale,
  CheckCircle2,
  XCircle,
  Cpu,
  Layers,
  Search,
  Award,
  ArrowRight,
  Clock,
  Sparkles,
  Flame,
  FileCheck,
  RefreshCw,
  Eye,
  Send,
  Sliders,
  Check,
  Ban,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Policy & Testing Standards (2026) | AIToolsHaven',
  description:
    'Discover how AIToolsHaven tests, reviews, benchmarks, and ranks AI tools. Learn about our strict commercial firewall, independent E-E-A-T methodology, and zero-tolerance policy for wrapper spam.',
  keywords: [
    'editorial policy',
    'ai tool review methodology',
    'how aitoolshaven tests ai',
    'independent ai reviews',
    'ai software benchmarking standards',
    'e-e-a-t ai tools',
  ],
  alternates: {
    canonical: `${siteConfig.baseUrl}/editorial-policy`,
  },
  openGraph: {
    title: 'Editorial Policy & Testing Methodology | AIToolsHaven',
    description:
      'Learn how AIToolsHaven independently reviews, benchmarks, and scores AI tools without commercial bias.',
    url: `${siteConfig.baseUrl}/editorial-policy`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'AIToolsHaven Editorial Policy & Testing Standards',
      },
    ],
    type: 'website',
  },
};

const editorialPillars = [
  {
    icon: Cpu,
    title: 'Hands-On Testing Lab',
    tag: 'Firsthand Evaluation',
    color: 'text-primary',
    bg: 'bg-primary/10',
    description:
      'We do not rely on marketing brochures or press releases. Our editorial team stress-tests tools using real workflows, complex prompts, and edge cases to measure actual outputs, latency, and failure rates.',
  },
  {
    icon: Scale,
    title: 'Commercial Independence',
    tag: 'Strict Firewall',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    description:
      'Paid placements, directory listing fees, and affiliate partnerships never influence our editorial verdicts, ratings, or pros & cons. Sponsored items are strictly labeled and separated from organic rankings.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Tracking',
    tag: 'Dynamic Monitoring',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    description:
      'The AI landscape shifts weekly. We track model upgrades, API deprecations, pricing changes, and server reliability. If a listed tool degrades in quality or abandons support, its rating is downgraded or removed.',
  },
  {
    icon: Eye,
    title: 'Community Verification',
    tag: 'Consensus Checking',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    description:
      'Our lab benchmarks are cross-referenced against community sentiment across Reddit, GitHub issues, and verified buyers to prevent isolated testing anomalies from skewing our recommendations.',
  },
];

const evaluationStages = [
  {
    step: '01',
    title: 'Baseline Triage & Safety Audit',
    subtitle: 'Filtering out spam and security risks',
    description:
      'Every tool undergoes an initial triage check. We verify domain authenticity, SSL security, functional onboarding, clear terms of service, and transparent ownership. Non-functional tools and deceptive phishing copies are immediately rejected.',
    checks: ['Domain & SSL authentication', 'Functional onboarding check', 'Zero malware or deceptive popups'],
  },
  {
    step: '02',
    title: 'Hands-On Workflow Benchmarking',
    subtitle: 'Real-world execution under pressure',
    description:
      'We test the core software using standardized industry test inputs (e.g. debugging full-stack code, rendering complex multi-subject image prompts, processing 50-page PDFs). We evaluate UI responsiveness, latency, and quality of generated results.',
    checks: ['Standardized input benchmarking', 'UX & workflow speed rating', 'Feature depth vs advertised claims'],
  },
  {
    step: '03',
    title: 'Model & Architecture Verification',
    subtitle: 'Uncovering the real AI engine',
    description:
      'We inspect what actually powers the product. Does it use proprietary fine-tuned models, open-source weights (Llama 3, DeepSeek), or an unoptimized standard API wrapper? We check token rate limits and contextual memory persistence.',
    checks: ['Underlying model identification', 'Fine-tuning & proprietary logic', 'Context window & rate limits'],
  },
  {
    step: '04',
    title: 'Pricing Transparency & Value Scoring',
    subtitle: 'Protecting user budgets from hidden costs',
    description:
      'Many tools advertise "Free" but gate basic utility behind aggressive paywalls. We audit credit expiration rules, auto-renewal terms, refund policies, and cost-per-generation to calculate a genuine Price-to-Value score.',
    checks: ['Fair trial / free tier evaluation', 'Hidden credit consumption math', 'Cancellation & refund simplicity'],
  },
  {
    step: '05',
    title: 'Head-to-Head Comparative Indexing',
    subtitle: 'Positioning within category guides',
    description:
      'No tool exists in a vacuum. We map the software against its top 3 market alternatives in our comparison arenas (e.g., Cursor vs Bolt.new). We identify the ideal user persona: who should buy it, and who should look elsewhere.',
    checks: ['Direct versus matchup mapping', 'Clear "Best for" persona tags', 'Regular quarterly re-testing'],
  },
];

const standardComparison = [
  {
    category: 'What We Endorse & Highlight',
    icon: CheckCircle2,
    color: 'text-emerald-500',
    items: [
      'Original software architecture with proprietary AI pipelines or fine-tuned weights',
      'Transparent pricing models with honest refund or freemium policies',
      'Active developer maintenance with regular changelogs and public release notes',
      'Demonstrable utility that saves measurable hours or automates complex tasks',
      'Strong data privacy safeguards (e.g. no training on customer confidential data)',
    ],
  },
  {
    category: 'What We Disqualify & Reject',
    icon: XCircle,
    color: 'text-red-500',
    items: [
      'Shallow ChatGPT wrappers with zero unique features, custom prompts, or fine-tuning',
      'Deceptive subscription models with forced annual locks and impossible cancellations',
      'Abandoned software repositories with non-responsive developers or broken APIs',
      'Tools making fraudulent claims (e.g. claiming AGI, fake benchmarks, stolen logos)',
      'Malicious software, deceptive affiliate link redirectors, or spyware wrappers',
    ],
  },
];

export default function EditorialPolicyPage() {
  const cleanBase = (siteConfig.baseUrl || 'https://aitoolshaven.com').replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${cleanBase}/editorial-policy#about`,
    url: `${cleanBase}/editorial-policy`,
    name: 'Editorial Policy & Testing Standards | AIToolsHaven',
    description:
      'Learn about how AIToolsHaven selects, benchmarks, and ranks AI tools, and our commitment to objective, helpful, human-verified content.',
    publisher: {
      '@type': 'Organization',
      name: 'AIToolsHaven',
      url: cleanBase,
      logo: `${cleanBase}/logo.svg`,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <StructuredData data={jsonLd} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 border-b border-black/5 dark:border-slate-800 mesh-bg">
        <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/70 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-6"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Directory
          </Link>

          <div className="block mb-6">
            <span className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 text-slate-800 dark:text-slate-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Independent E-E-A-T Testing Standards &bull; Zero Sponsored Bias</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
            Editorial Policy &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500">
              Review Methodology
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            At AIToolsHaven, our mission is to help software founders, engineers, and creators cut through marketing hype. Here is how we independently evaluate, score, and monitor 1,000+ AI software products.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-foreground/60 border-t border-black/5 dark:border-slate-800 pt-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              Last Updated: <strong>September 14, 2026</strong>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              Reviewed by: <strong>AIToolsHaven Senior Editorial Desk</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 4 Pillars Bento Grid */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-b border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Core Commitments
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              The 4 Pillars of Our Editorial Integrity
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              Every tool profile, comparison matrix, and workflow guide is anchored on these core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editorialPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center ${pillar.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Stage Testing Roadmap */}
      <section className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sliders className="w-3.5 h-3.5" />
              Standardized Testing Protocol
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our 5-Stage Tool Evaluation Lifecycle
            </h2>
            <p className="text-foreground/70 text-base mt-3">
              From the moment software is discovered or submitted, it undergoes our standardized five-step vetting cycle.
            </p>
          </div>

          <div className="space-y-8">
            {evaluationStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-primary/40 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-md shadow-primary/20">
                  {stage.step}
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">
                      {stage.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    {stage.checks.map((check, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        {check}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Comparison Matrix: What We Endorse vs Reject */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-y border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Curation Thresholds: What Gets In, What Gets Rejected
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              We reject over 40% of submitted applications to protect our readers from low-effort clone scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {standardComparison.map((box, index) => {
              const Icon = box.icon;
              const isPositive = index === 0;

              return (
                <div
                  key={index}
                  className={`rounded-3xl p-8 md:p-10 border shadow-sm ${
                    isPositive
                      ? 'bg-white dark:bg-slate-900 border-emerald-500/30'
                      : 'bg-white dark:bg-slate-900 border-red-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-7 h-7 ${box.color}`} />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {box.category}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {box.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        {isPositive ? (
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <Ban className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial Firewall & Affiliate Transparency */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Commercial Firewall &amp; Monetization Disclosures
            </h2>
            <p className="text-foreground/70 text-base max-w-2xl mx-auto">
              How we keep our testing lab funded while maintaining absolute independence.
            </p>
          </div>

          <div className="space-y-6">
            {/* Box 1: Paid Placement Firewall */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-primary" />
                Paid Listings &amp; Directory Promotion
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Founders can pay for expedited editorial review (Growth Plan $100) or featured placement (Premium Spotlight $150). However, <strong>paying a review fee does not guarantee positive scoring or exemption from our testing standards.</strong> If a paid tool fails our utility or security benchmarks, it is rejected and a 100% full refund is issued under our{' '}
                <Link href="/refund-policy" className="text-primary hover:underline font-semibold">
                  Refund Policy
                </Link>.
              </p>
            </div>

            {/* Box 2: Affiliate Links */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-emerald-500" />
                Affiliate Commissions
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Some outbound links on AIToolsHaven are affiliate links. If you purchase software through our links, we may earn a small referral commission at no additional cost to you. <strong>We frequently rank and award top badges to tools that offer zero affiliate program</strong> (e.g. open-source tools, free research models) because our highest obligation is user trust. Read our full{' '}
                <Link href="/affiliate-disclosure" className="text-primary hover:underline font-semibold">
                  Affiliate Disclosure
                </Link>.
              </p>
            </div>

            {/* Box 3: Corrections & Inaccuracies */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <RefreshCw className="w-5 h-5 text-blue-500" />
                Rapid Corrections &amp; Updates Protocol
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                If a software developer changes pricing, deprecates a feature, or fixes a bug highlighted in our review, we update the profile within 24 to 48 business hours of verification. If you notice a factual discrepancy, contact our editorial team directly at{' '}
                <a href="mailto:aitoolshaven@gmail.com?subject=Editorial%20Correction%20Request" className="text-primary hover:underline font-semibold">
                  aitoolshaven@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corrections Hotline CTA Banner */}
      <section className="py-20 px-4 bg-slate-50/70 dark:bg-slate-900/50 border-t border-black/5 dark:border-slate-800 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
            <Send className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Found an Error or Outdated Benchmark?
          </h2>
          <p className="text-sm text-foreground/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Our editorial desk welcomes feedback from founders, engineers, and users. Send us the target URL and updated documentation for immediate review.
          </p>

          <a
            href="mailto:aitoolshaven@gmail.com?subject=Editorial%20Inquiry%20%2F%20Correction%20Request%20-%20AIToolsHaven"
            className="inline-flex items-center gap-2 bg-primary hover:bg-rose-600 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md shadow-primary/25 hover:scale-105 transition-all"
          >
            <span>Contact Editorial Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
