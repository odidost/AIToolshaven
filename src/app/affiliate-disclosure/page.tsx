import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/shared/StructuredData';
import {
  ShieldCheck,
  CheckCircle2,
  Scale,
  Sparkles,
  ArrowRight,
  Clock,
  HeartHandshake,
  DollarSign,
  Lock,
  FileCheck,
  Info,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | AIToolsHaven',
  description:
    'Read AIToolsHaven’s complete affiliate disclosure. Understand how we fund our independent testing lab without compromising editorial integrity or charging user fees.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/affiliate-disclosure`,
  },
  openGraph: {
    title: 'Affiliate Disclosure & Transparency | AIToolsHaven',
    description:
      'Learn about AIToolsHaven’s reader-supported funding model and our strict editorial firewall.',
    url: `${siteConfig.baseUrl}/affiliate-disclosure`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'AIToolsHaven Affiliate Disclosure',
      },
    ],
    type: 'website',
  },
};

const disclosurePillars = [
  {
    icon: DollarSign,
    title: 'Why We Use Affiliate Links',
    tag: 'Sustainable Funding',
    color: 'text-primary',
    bg: 'bg-primary/10',
    description:
      'Operating a dedicated testing lab, auditing model weights, and benchmarking 1,000+ AI software products incurs significant research and server costs. Affiliate partnerships allow us to keep 100% of our directory free to the public without cluttering pages with intrusive popups.',
  },
  {
    icon: Lock,
    title: 'Zero Additional Cost to You',
    tag: 'Fair Pricing Guarantee',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    description:
      'When you click an outbound link and purchase software, the vendor pays us a small referral fee. The price you pay is identical—or in many cases discounted through negotiated founder coupons—compared to visiting the vendor directly.',
  },
  {
    icon: Scale,
    title: 'Editorial Ratings Are Uncompromised',
    tag: 'Strict Firewall',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    description:
      'We rank tools purely on functional merit, benchmark latency, and real-world utility. We frequently award #1 spots and Editor’s Choice badges to open-source or free models that offer zero affiliate programs.',
  },
  {
    icon: FileCheck,
    title: 'FTC 16 CFR Part 255 Compliance',
    tag: 'Full Regulatory Adherence',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    description:
      'In strict compliance with Federal Trade Commission (FTC) guidelines and international advertising transparency laws, please assume that outbound software links on aitoolshaven.com may be affiliate links.',
  },
];

const transparencyRules = [
  {
    rule: 'Affiliate Status Never Dictates Rankings',
    detail: 'A tool that pays a 40% commission will never outrank a superior tool that pays 0%. Our editorial verdicts are insulated from commercial partnerships.',
  },
  {
    rule: 'Flaws Are Highlighted Regardless of Commission',
    detail: 'If an affiliated tool has severe token limits, slow generation speeds, or bad customer support, we document these drawbacks clearly in our Pros & Cons.',
  },
  {
    rule: 'Sponsored Placements Are Clearly Labeled',
    detail: 'Paid directory inclusions, category takeovers, or sponsored articles are explicitly demarcated with "Sponsored" or "Ad" badges so you always know.',
  },
  {
    rule: 'Independent Verification Desk',
    detail: 'Our reviewers evaluate software hands-on using standard test prompts, benchmarking actual outputs rather than republishing vendor press kits.',
  },
];

export default function AffiliateDisclosurePage() {
  const cleanBase = (siteConfig.baseUrl || 'https://aitoolshaven.com').replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${cleanBase}/affiliate-disclosure#webpage`,
    url: `${cleanBase}/affiliate-disclosure`,
    name: 'Affiliate Disclosure | AIToolsHaven',
    description:
      'Learn about AIToolsHaven’s affiliate partnerships, reader-supported model, and strict commitment to independent software evaluation.',
    publisher: {
      '@type': 'Organization',
      name: 'AIToolsHaven',
      url: cleanBase,
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
            Back to Home
          </Link>

          <div className="block mb-6">
            <span className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 text-slate-800 dark:text-slate-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Reader-Supported &bull; Transparent Disclosure &bull; FTC Compliant</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
            Affiliate Disclosure &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500">
              Transparency Standards
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            AIToolsHaven is an independent, reader-supported directory. When you discover and purchase software through our links, we may earn a referral commission—at <strong>zero additional cost to you</strong>.
          </p>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground/60 border-t border-black/5 dark:border-slate-800 pt-6">
            <Clock className="w-4 h-4 text-primary" />
            <span>Last Updated: <strong>September 14, 2026</strong></span>
          </div>
        </div>
      </section>

      {/* 4 Pillars Bento Grid */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-b border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              How We Operate
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Our Monetization Principles
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              We believe in complete transparency regarding how our research is funded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disclosurePillars.map((pillar, idx) => {
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

      {/* Editorial Firewall Details */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5" />
              Editorial Independence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              How We Protect Our Readers
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              Our reputation is our most valuable asset. Here are the hard rules our editorial lab enforces:
            </p>
          </div>

          <div className="space-y-4">
            {transparencyRules.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.rule}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Related Policy Links Box */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Have questions about our reviews?
              </h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                Read our complete testing methodology or contact our editorial desk directly.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/editorial-policy"
                className="bg-primary hover:bg-rose-600 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm"
              >
                Editorial Policy
              </Link>
              <Link
                href="/contact"
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-foreground font-semibold text-xs px-5 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Contact Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
