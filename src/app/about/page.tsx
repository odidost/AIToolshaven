import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/shared/StructuredData';
import { SocialLinks } from '@/components/shared/SocialLinks';
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Cpu,
  Layers,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  Users,
  Search,
  Scale,
  Rocket,
  Send,
  Zap,
  Globe2,
  Terminal,
  HeartHandshake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About AIToolsHaven | The Human-Curated AI Software Discovery Hub',
  description:
    'Learn why AIToolsHaven was created: to replace bloated, spam-filled directories with human-tested benchmarks, honest reviews, and transparent head-to-head AI software matchups.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/about`,
  },
  openGraph: {
    title: 'About AIToolsHaven - Built by Builders, for Builders',
    description:
      'We test, benchmark, and curate the best AI tools across writing, coding, video, and automation so you can find the right software without the hype.',
    url: `${siteConfig.baseUrl}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'About AIToolsHaven - The Human-Curated AI Tools Directory',
      },
    ],
    type: 'website',
  },
};

export const revalidate = 86400;

const liveStats = [
  {
    value: '1,000+',
    label: 'Verified AI Tools',
    subtext: 'Manually evaluated and cataloged',
    icon: Cpu,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    value: '20+',
    label: 'Specialized Categories',
    subtext: 'From coding agents to neural video',
    icon: Layers,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    value: '100%',
    label: 'Human-Tested Logic',
    subtext: 'Zero auto-scraped hallucinated entries',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    value: '78%',
    label: 'Buyer Intent',
    subtext: 'Active founders, leads & developers',
    icon: Compass,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Editorially Independent',
    tag: 'Integrity First',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    description:
      'Our reviews, pros/cons, and category rankings are strictly based on functional merit. Paid listings and sponsorships are clearly labeled and completely insulated from our editorial verdicts.',
  },
  {
    icon: Terminal,
    title: 'Built by Practitioners',
    tag: 'Real-World Testing',
    color: 'text-primary',
    bg: 'bg-primary/10',
    description:
      'We are developers, marketers, and creators first. Every tool featured in our directory is evaluated through the lens of a daily user trying to ship real projects, not just read promotional claims.',
  },
  {
    icon: Zap,
    title: 'Zero-Tolerance for Wrapper Spam',
    tag: 'Quality Standard',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    description:
      'The web is flooded with generic API wrappers that break within weeks. We curate aggressively, rejecting over 40% of submissions to ensure only dependable, high-utility tools make the cut.',
  },
  {
    icon: HeartHandshake,
    title: 'Radical Transparency',
    tag: 'No Hidden Agendas',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    description:
      'We are open about how we fund our testing lab. We share our testing methodology in our Editorial Policy and disclose all affiliate partnerships. If an open-source tool is superior, we rank it #1.',
  },
];

const platformEcosystem = [
  {
    title: 'Head-to-Head Versus Arenas',
    description: 'Direct, objective side-by-side matrices comparing pricing, context windows, and feature benchmarks (e.g. Cursor vs Bolt.new).',
    linkText: 'Explore Comparisons',
    href: '/compare',
    icon: Scale,
  },
  {
    title: 'Curated Category Guides',
    description: 'Deep-dive hubs covering Coding Assistants, Video Generators, Voice Cloners, and LLM Agents with verified pros & cons.',
    linkText: 'Browse Categories',
    href: '/categories',
    icon: Layers,
  },
  {
    title: 'Goal & Workflow Playbooks',
    description: 'Actionable step-by-step blueprints demonstrating how to combine multiple AI tools to automate real business operations.',
    linkText: 'View Workflows',
    href: '/workflows',
    icon: Compass,
  },
  {
    title: 'Interactive Tool Recommender',
    description: 'Answer 3 quick questions about your workflow to receive an instant, personalized software recommendation.',
    linkText: 'Try Recommender',
    href: '/ai-tool-recommender',
    icon: Sparkles,
  },
];

export default function AboutPage() {
  const cleanBase = (siteConfig.baseUrl || 'https://aitoolshaven.com').replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${cleanBase}/about#webpage`,
    url: `${cleanBase}/about`,
    name: 'About AIToolsHaven | Curated AI Tools Directory',
    description:
      'AIToolsHaven is a curated AI tools directory and benchmarking platform helping creators, developers, and founders discover verified software.',
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
            Back to Home
          </Link>

          <div className="block mb-6">
            <span className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-primary/20 text-slate-800 dark:text-slate-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>The Human-Curated AI Directory &bull; Built for Builders</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
            Cutting Through the Noise to Find{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500">
              AI Tools That Actually Work.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            We built AIToolsHaven because we were tired of bloated, auto-scraped directories with thousands of dead links and fake 5-star reviews. Our mission is simple: <strong>honest benchmarks, hands-on tests, and zero fluff.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/categories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-lg shadow-primary/25 hover:scale-105"
            >
              <span>Explore 1,000+ AI Tools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/editorial-policy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Read Our Testing Standards</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-4 bg-slate-50/70 dark:bg-slate-900/50 border-b border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <div className={`w-9 h-9 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs text-foreground/60 leading-relaxed">{stat.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Story / Origin Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              Our Origin Story
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why We Started AIToolsHaven
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <p>
              In early 2024, the generative AI boom triggered a flood of new software. But finding an answer to a simple question—<em>&quot;What is the best AI video generator for cinematic camera control?&quot;</em> or <em>&quot;Which AI coding assistant won&apos;t hallucinate legacy syntax?&quot;</em>—had become nearly impossible.
            </p>
            <p>
              Traditional search engines were filled with AI-generated spam articles, and existing directory websites were nothing more than automated databases containing 15,000 unverified entries, half of which were broken API wrappers or predatory billing traps.
            </p>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-rose-500/5 to-orange-500/5 border border-primary/20 space-y-3 my-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                The AIToolsHaven Standard:
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                We believe software reviews should be written by people who actually write code, edit video, and launch products. If a tool doesn&apos;t deliver tangible, repeatable utility in real-world testing, it has no place in our directory.
              </p>
            </div>

            <p>
              Today, AIToolsHaven has grown into a trusted discovery hub for tens of thousands of developers, founders, and creative operators worldwide. We manually audit every product, benchmark model capabilities, track pricing changes, and construct side-by-side matchup arenas so you can make informed decisions in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values / What We Stand For */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-y border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              What We Stand For
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              Our editorial commitments ensure our directory remains genuinely useful, transparent, and untainted by commercial bias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${val.bg} flex items-center justify-center ${val.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                        {val.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {val.title}
                    </h3>

                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Ecosystem / Features We Built */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Directory Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              More Than Just a List: Our Discovery Engine
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              We engineered AIToolsHaven from the ground up to give you multiple ways to evaluate and adopt AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platformEcosystem.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>

                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:underline mt-auto"
                  >
                    <span>{feature.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder / Submission Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-primary/5 border-t border-black/5 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-primary/25">
            <Rocket className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Building an AI Product? Launch With Us.
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Reach active buyers evaluating software right now. Submit your product for editorial testing and get featured in our category hubs and head-to-head comparison pages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-rose-600 text-white px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-primary/25 hover:scale-105 transition-all"
            >
              <span>Submit Your AI Tool</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/advertise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <span>Explore Sponsorships &amp; Ads</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Follow CTA */}
      <section className="text-center flex flex-col items-center py-16 border-t border-black/5 dark:border-slate-800">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Connect With AIToolsHaven
        </h3>
        <p className="text-foreground/60 text-sm max-w-md mx-auto mb-6">
          Follow us for weekly AI tool discoveries, model benchmarks, and directory release updates.
        </p>
        <SocialLinks variant="cta" />
      </section>
    </div>
  );
}
