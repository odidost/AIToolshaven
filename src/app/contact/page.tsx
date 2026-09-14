import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/shared/StructuredData';
import { SocialLinks } from '@/components/shared/SocialLinks';
import {
  Mail,
  Send,
  Rocket,
  Layers,
  Newspaper,
  Bug,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | AIToolsHaven',
  description:
    'Get in touch with the AIToolsHaven editorial, advertising, and support desks for tool submissions, sponsorships, corrections, or partnerships.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/contact`,
  },
  openGraph: {
    title: 'Contact AIToolsHaven - Direct Support & Editorial Desk',
    description:
      'Reach out to our team for tool submissions, advertising sponsorships, media inquiries, or technical support.',
    url: `${siteConfig.baseUrl}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Contact AIToolsHaven',
      },
    ],
    type: 'website',
  },
};

const contactChannels = [
  {
    icon: Rocket,
    title: 'Submit an AI Tool',
    description: 'Get your AI software or SaaS product evaluated and featured in our curated category hubs.',
    actionText: 'Go to Submission Form',
    href: '/submit',
    isExternal: false,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Layers,
    title: 'Advertising & Sponsorships',
    description: 'Guest posts ($89), contextual link insertions ($49), category takeovers ($49/mo), and billboard banners.',
    actionText: 'View Media Kit & Rates',
    href: '/advertise',
    isExternal: false,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Bug,
    title: 'Editorial Corrections & Updates',
    description: 'Notice an outdated benchmark, pricing shift, or factual inaccuracy in a review? Report it for 24h review.',
    actionText: 'Send Editorial Correction',
    href: 'mailto:aitoolshaven@gmail.com?subject=Editorial%20Correction%20Request%20-%20AIToolsHaven',
    isExternal: true,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Newspaper,
    title: 'Press & Media Partnerships',
    description: 'Interviews, industry commentary, brand assets, or collaborative research publications.',
    actionText: 'Contact Media Desk',
    href: 'mailto:aitoolshaven@gmail.com?subject=Press%20%26%20Partnership%20Inquiry%20-%20AIToolsHaven',
    isExternal: true,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
];

export default function ContactPage() {
  const cleanBase = (siteConfig.baseUrl || 'https://aitoolshaven.com').replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${cleanBase}/contact#webpage`,
    url: `${cleanBase}/contact`,
    name: 'Contact AIToolsHaven',
    description:
      'Contact our team for tool submissions, advertising inquiries, press, and customer support.',
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-6"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Home
          </Link>

          <div className="block mb-6">
            <span className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-primary/20 text-slate-800 dark:text-slate-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>Fast Turnaround &bull; 12–24h Response SLA &bull; Direct Support</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
            Let&apos;s Build the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500">
              AI Discovery.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/75 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are a founder looking to submit a tool, an agency inquiring about sponsorships, or a reader with feedback, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* 4 Dedicated Contact Channels Bento Grid */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-b border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              Inquiry Channels
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              How Can We Help You Today?
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              Select the appropriate department to receive the fastest possible response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${channel.bg} flex items-center justify-center ${channel.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {channel.title}
                    </h3>

                    <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                      {channel.description}
                    </p>
                  </div>

                  {channel.isExternal ? (
                    <a
                      href={channel.href}
                      className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:underline mt-auto"
                    >
                      <span>{channel.actionText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link
                      href={channel.href}
                      className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:underline mt-auto"
                    >
                      <span>{channel.actionText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Email & Support Desk */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 md:p-16 text-center shadow-lg shadow-black/5 dark:shadow-none relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white mx-auto mb-6 shadow-md shadow-primary/25">
              <Mail className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              Direct Support &amp; Inquiries
            </h2>

            <p className="text-sm sm:text-base text-foreground/70 mb-8 max-w-md mx-auto leading-relaxed">
              For billing inquiries, customized advertising packages, or partnership proposals, reach out directly:
            </p>

            <div className="inline-block mb-6">
              <a
                href="mailto:aitoolshaven@gmail.com?subject=General%20Inquiry%20-%20AIToolsHaven"
                className="inline-flex items-center gap-3 bg-primary hover:bg-rose-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-primary/25 hover:scale-105 transition-all"
              >
                <span>aitoolshaven@gmail.com</span>
                <Send className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-foreground/50">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                Response time: Within 12–24 business hours
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Secure Stripe Invoicing &amp; Billing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Follow CTA */}
      <section className="text-center flex flex-col items-center py-16 border-t border-black/5 dark:border-slate-800">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Connect With AIToolsHaven
        </h3>
        <p className="text-foreground/60 text-sm max-w-md mx-auto mb-6">
          Stay connected for new AI software launches, model benchmarks, and directory updates.
        </p>
        <SocialLinks variant="cta" />
      </section>
    </div>
  );
}
