import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/shared/StructuredData';
import {
  AlertTriangle,
  ShieldCheck,
  Scale,
  Sparkles,
  ArrowRight,
  Clock,
  ExternalLink,
  Cpu,
  HelpCircle,
  FileText,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | AIToolsHaven',
  description:
    'Read AIToolsHaven’s general disclaimer regarding AI software recommendations, third-party vendor independence, and informational content liability.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/disclaimer`,
  },
  openGraph: {
    title: 'Disclaimer | AIToolsHaven',
    description:
      'General disclaimer regarding software recommendations, third-party tools, and liability on AIToolsHaven.',
    url: `${siteConfig.baseUrl}/disclaimer`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'AIToolsHaven Disclaimer',
      },
    ],
    type: 'website',
  },
};

const disclaimerCards = [
  {
    icon: Cpu,
    title: 'Independent Software Directory',
    tag: 'Third-Party Operations',
    color: 'text-primary',
    bg: 'bg-primary/10',
    description:
      'AIToolsHaven is an independent curation, review, and discovery platform. We do not own, develop, or directly operate the AI software, models, or services listed in our directory. Any purchase, subscription, or use of third-party tools is governed exclusively by the terms and privacy policies of the respective developers.',
  },
  {
    icon: Clock,
    title: 'Dynamic Pricing & Model Volatility',
    tag: 'Rapid Industry Shifts',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    description:
      'The artificial intelligence ecosystem evolves at an unprecedented pace. Tool developers frequently modify their feature tiers, token consumption limits, pricing structures, and underlying LLM models without prior notice. While we audit listings regularly, we cannot guarantee real-time price accuracy on third-party domains.',
  },
  {
    icon: Scale,
    title: 'No Professional or Legal Advice',
    tag: 'Informational Only',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    description:
      'Content, benchmark comparisons, and workflow guides provided on AIToolsHaven are for general informational, educational, and software discovery purposes only. Nothing on this website constitutes legal, medical, financial, or corporate compliance advice. You should consult certified professionals before deploying AI in high-risk operations.',
  },
  {
    icon: ExternalLink,
    title: 'Outbound Links & External Destinations',
    tag: 'Third-Party Websites',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    description:
      'Our website contains hyperlinks directing you to external websites, software landing pages, and vendor platforms. We do not control, inspect, or endorse the privacy practices, uptime, or security measures of external domains. Clicking outbound links is done solely at your own discretion and risk.',
  },
];

export default function DisclaimerPage() {
  const cleanBase = (siteConfig.baseUrl || 'https://aitoolshaven.com').replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${cleanBase}/disclaimer#webpage`,
    url: `${cleanBase}/disclaimer`,
    name: 'Disclaimer | AIToolsHaven',
    description:
      'General disclaimer regarding software recommendations, third-party software, and informational liability on AIToolsHaven.',
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
            <span className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-amber-500/30 text-slate-800 dark:text-slate-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Legal Disclaimers &bull; Informational Use &bull; Independent Directory</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
            General{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500">
              Disclaimer
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            Important legal information regarding software evaluations, third-party vendor independence, pricing changes, and limitation of liability on AIToolsHaven.
          </p>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground/60 border-t border-black/5 dark:border-slate-800 pt-6">
            <Clock className="w-4 h-4 text-primary" />
            <span>Last Updated: <strong>September 14, 2026</strong></span>
          </div>
        </div>
      </section>

      {/* 4 Bento Disclaimers */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-b border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disclaimerCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${card.bg} flex items-center justify-center ${card.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                        {card.tag}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {card.title}
                    </h2>

                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Limitation of Liability Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Limitation of Liability &amp; User Due Diligence
            </h2>

            <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, AIToolsHaven, its founders, editors, and partners shall not be held liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, profits, revenue, or business interruption, arising from your reliance on software descriptions, model benchmarks, or third-party tools discovered through our platform.
              </p>
              <p>
                Users are solely responsible for conducting their own technical and legal due diligence, reading end-user license agreements (EULAs), and verifying data handling policies before providing private data or code to third-party AI software.
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-slate-800 flex flex-wrap gap-4 text-xs text-foreground/60">
              <span>Related Policies:</span>
              <Link href="/terms" className="text-primary hover:underline font-semibold">
                Terms of Service
              </Link>
              <span>&bull;</span>
              <Link href="/privacy-policy" className="text-primary hover:underline font-semibold">
                Privacy Policy
              </Link>
              <span>&bull;</span>
              <Link href="/affiliate-disclosure" className="text-primary hover:underline font-semibold">
                Affiliate Disclosure
              </Link>
            </div>
          </div>

          {/* Questions Callout */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Have Questions About Our Disclaimer?
            </h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Our legal and editorial desks are available to address any inquiries regarding directory policies.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-rose-600 text-white font-bold text-xs px-6 py-3 rounded-full transition-all shadow-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
