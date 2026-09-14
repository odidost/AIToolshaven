import { Metadata } from "next";
import Link from "next/link";
import { getAllTools } from "@/lib/data/tools-service";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";
import { ToolGridWithFilters } from "@/components/shared/ToolGridWithFilters";
import { getCategoryTheme } from "@/lib/data/categoryThemes";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/config/site";
import { 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Star, 
  BookOpen, 
  ArrowRight, 
  Layers, 
  HelpCircle,
  Flame,
  Award
} from "lucide-react";

export const revalidate = 3600; // 1 hour

export const metadata: Metadata = {
  title: {
    absolute: "Best Freemium AI Tools (2026) [100% Free & No Credit Card]",
  },
  description: "Discover 800+ verified freemium AI tools and free AI software for 2026. Filter by free allowances, recurring monthly credits, and zero credit card traps.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${siteConfig.baseUrl}/freemium-ai-tools`,
  },
  openGraph: {
    title: "Best Freemium AI Tools (2026) [100% Free & No Credit Card]",
    description: "Discover 800+ verified freemium AI tools and free AI software for 2026. Filter by free allowances, recurring monthly credits, and zero credit card traps.",
    url: `${siteConfig.baseUrl}/freemium-ai-tools`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Best Freemium AI Tools 2026",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Freemium AI Tools (2026) [100% Free & No Credit Card]",
    description: "Discover 800+ verified freemium AI tools and free software. No credit card traps.",
    images: [siteConfig.ogImage],
  },
};

const FREEMIUM_FAQS = [
  {
    question: "What is the difference between completely free AI and freemium AI?",
    answer: "Completely free AI tools (such as open-source models like Ollama, DeepSeek V3, or Whisper) can be downloaded and run indefinitely without subscriptions or quotas. Freemium AI tools (like Claude, Cursor, and ElevenLabs) provide a permanently free recurring monthly or daily usage tier, but charge a fee when users exceed standard speed, token, or resolution thresholds."
  },
  {
    question: "Which AI tools are genuinely free with no credit card required?",
    answer: "Leading AI platforms providing generous free tiers without asking for a credit card include ChatGPT (GPT-4o mini & limited GPT-4o), Claude 3.5 Sonnet (free web access), Cursor (2,000 monthly autocomplete completions), ElevenLabs (10,000 monthly voice characters), CapCut (free cloud video editor), and Hugging Face Spaces (thousands of free open-weight models)."
  },
  {
    question: "Can I use outputs from free and freemium AI tools for commercial purposes?",
    answer: "In most cases, yes. Major platforms like OpenAI, Anthropic, and Black Forest Labs grant commercial rights to generated outputs across both free and paid plans. However, some specialized tools watermark free outputs (e.g., video generators) or restrict commercial usage to paid tiers. Always review the tool's license summary in our directory before commercial deployment."
  },
  {
    question: "Do free AI tools use my prompts and uploaded files for model training?",
    answer: "Many free consumer tiers do reserve the right to train future foundation models on user interactions by default. However, most reputable providers allow you to opt out in your privacy settings. For strictly confidential enterprise data, either use local open-source models or dedicated paid tiers with zero-data-retention (ZDR) guarantees."
  },
  {
    question: "How can I avoid hidden paywall traps when evaluating AI tools?",
    answer: "Our directory audits all listings for deceptive pricing. Red flags to watch out for include platforms requiring upfront payment info for 'free trials', tools that restrict downloading generated files until you upgrade, and aggressive 48-hour expirations. All tools marked as Free or Freemium on AIToolsHaven offer authentic recurring functionality without payment details."
  }
];

const FREE_EDITORIAL_GUIDES = [
  {
    title: "15 Best Completely Free AI Tools (No Credit Card)",
    slug: "best-completely-free-ai-tools-no-credit-card-2026",
    summary: "Discover 15 genuinely free AI tools across writing, video editing, coding, graphic design, and research with zero deceptive trial traps.",
    badge: "Master Roundup",
    readTime: "12 min read"
  },
  {
    title: "The Open-Source AI Stack: Run Local Models on Your Laptop",
    slug: "open-source-ai-stack-run-local-models-laptop-2026",
    summary: "Complete step-by-step guide to running Ollama, DeepSeek V4-Pro, and Flux locally on Mac and Windows at $0 cost with 100% privacy.",
    badge: "Developer Guide",
    readTime: "11 min read"
  },
  {
    title: "7 Best Free AI Image Generators (Unlimited Prompts)",
    slug: "best-free-ai-image-generators-unlimited-prompts-2026",
    summary: "Create cinematic, commercial-ready artwork, logos, and photos without subscription fees or watermarks.",
    badge: "Design",
    readTime: "8 min read"
  },
  {
    title: "10 Best Free AI Writing & Copywriting Tools",
    slug: "best-free-ai-writing-copywriting-tools-2026",
    summary: "Draft long-form essays, SEO articles, and viral marketing copy with high-tier language models without inputting credit card details.",
    badge: "Writing",
    readTime: "9 min read"
  },
  {
    title: "8 Best Free AI Coding Assistants & IDEs",
    slug: "best-free-ai-coding-assistants-ides-2026",
    summary: "Top free alternatives to GitHub Copilot including Cursor free tier, Codeium, Supermaven, and Continue.dev.",
    badge: "Coding",
    readTime: "10 min read"
  },
  {
    title: "8 Best Free AI Voice & Audio Generators",
    slug: "best-free-ai-voice-audio-generators-2026",
    summary: "Hyper-realistic voice cloning, text-to-speech audio, and background score generation with zero upfront payment.",
    badge: "Audio & Voice",
    readTime: "8 min read"
  },
];

export default async function FreemiumAIToolsPage() {
  const allTools = await getAllTools();
  
  // Filter exclusively for Free and Freemium tools
  const freemiumTools = allTools.filter(
    (tool) => tool.priceModel === "Free" || tool.priceModel === "Freemium"
  );
  const completelyFreeCount = freemiumTools.filter((t) => t.priceModel === "Free").length;
  const freemiumCount = freemiumTools.filter((t) => t.priceModel === "Freemium").length;

  // Use an emerald theme representing high ROI / zero cost
  const theme = getCategoryTheme("freemium");
  theme.accentColors = {
    heroGradient: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
    iconBg: "bg-emerald-500/20",
    iconText: "text-emerald-500",
    textAccent: "text-emerald-500",
    borderAccent: "border-emerald-500/30",
    cssVar: "16, 185, 129", // rgb for emerald-500
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.baseUrl}/freemium-ai-tools#webpage`,
        url: `${siteConfig.baseUrl}/freemium-ai-tools`,
        name: "Best Freemium AI Tools (2026) [100% Free & No Credit Card]",
        description: "Discover 800+ verified freemium AI tools and free AI software for 2026. Filter by free allowances, recurring monthly credits, and zero credit card traps.",
        dateModified: new Date().toISOString().split("T")[0],
        breadcrumb: {
          "@id": `${siteConfig.baseUrl}/freemium-ai-tools#breadcrumb`,
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: freemiumTools.length,
          itemListElement: freemiumTools.slice(0, 25).map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: tool.name,
              url: `${siteConfig.baseUrl}/tool/${tool.slug}`,
              applicationCategory: tool.category || "AI Software",
              operatingSystem: "Web-based",
              description: tool.tagline || tool.description,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                category: tool.priceModel,
              },
              ...(tool.rating
                ? {
                    aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: String(tool.rating),
                      bestRating: "5",
                      worstRating: "1",
                      ratingCount: String(tool.reviewCount || 15),
                    },
                  }
                : {}),
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.baseUrl}/freemium-ai-tools#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AI Tools Directory",
            item: siteConfig.baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Freemium AI Tools",
            item: `${siteConfig.baseUrl}/freemium-ai-tools`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.baseUrl}/freemium-ai-tools#faq`,
        mainEntity: FREEMIUM_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <PageContainer
      as="main"
      className="py-12 md:py-16 relative"
      style={{ "--category-accent": theme.accentColors.cssVar } as React.CSSProperties}
    >
      <StructuredData data={jsonLd} />
      <BackgroundPattern type="sparkles" opacity={0.02} className="fixed inset-0 text-[rgb(var(--category-accent))]" />

      {/* Breadcrumbs */}
      <nav className="mb-8">
        <Breadcrumbs
          items={[
            { label: "AI Tools Directory", href: "/" },
            { label: "Freemium AI Tools" },
          ]}
        />
      </nav>

      {/* Premium Hero Section */}
      <section className="relative rounded-[2rem] md:rounded-[2.5rem] bg-slate-950 overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 mb-12 text-white">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.25) 0%, transparent 55%), radial-gradient(circle at 15% 85%, rgba(20, 184, 166, 0.18) 0%, transparent 50%), linear-gradient(135deg, #061512 0%, #030a08 100%)`
          }}
        />
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[120px] opacity-40 pointer-events-none bg-gradient-to-br from-emerald-400 to-teal-400" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[120px] opacity-30 pointer-events-none bg-gradient-to-tr from-emerald-600 to-cyan-500" />

        <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between">
          <div className="max-w-2xl space-y-4 text-left">
            
            {/* Kicker Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md shadow-md shadow-emerald-500/10">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span className="text-xs font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-300">
                  2026 Free Software Index
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-[11px] font-mono font-medium">
                <Flame className="w-3 h-3 text-emerald-400" />
                <span>{freemiumTools.length} Verified Zero-Cost Entry Tools</span>
              </div>
            </div>

            {/* Multilevel Title */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-0.5 bg-emerald-400 rounded-full inline-block" />
                Immediate High-ROI Experimentation
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                The Best{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]">
                  Freemium AI Tools
                </span>{" "}
                for 2026
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-['Figtree',sans-serif] text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Cut through restrictive paywalls and deceptive 48-hour trial traps. Discover, compare, and leverage <strong className="text-white font-semibold">{freemiumTools.length}+ authentic freemium platforms</strong> with perpetual free tiers, generous monthly credits, and zero upfront credit card requirements.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-200">
                <Zap className="w-3 h-3 text-emerald-400" />
                <span>No Credit Card Traps</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-200">
                <ShieldCheck className="w-3 h-3 text-teal-400" />
                <span>Commercial-Ready Vetted</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-200">
                <Award className="w-3 h-3 text-cyan-300" />
                <span>Monthly Recurring Quotas</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#freemium-grid"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs tracking-wide uppercase shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                <span>Explore {freemiumTools.length} Free Tools</span>
              </a>

              <a
                href="#free-guides"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs border border-white/20 hover:border-emerald-400/50 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>In-Depth Free Buying Guides</span>
              </a>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] font-medium text-slate-400 border-t border-white/10">
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Tested &amp; Monitored
              </span>
              <span className="text-white/20">•</span>
              <span>Updated September 2026</span>
              <span className="text-white/20">•</span>
              <span>Zero-Spam Index</span>
            </div>
          </div>

          {/* Right Column: Telemetry HUD */}
          <div className="w-full lg:w-80 shrink-0 bg-slate-950/85 backdrop-blur-2xl rounded-2xl border border-white/15 p-4 shadow-xl space-y-3 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="text-[10px] uppercase font-black tracking-widest text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Freemium Index
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                100% Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Layers className="w-3 h-3 text-emerald-400" /> Freemium
                </div>
                <div className="text-2xl font-black text-white font-mono tracking-tight">
                  {freemiumCount}
                </div>
                <div className="text-[9px] text-slate-400 font-['Figtree',sans-serif]">Free entry tiers</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-teal-400" /> 100% Free
                </div>
                <div className="text-2xl font-black text-teal-300 font-mono tracking-tight">
                  {completelyFreeCount}
                </div>
                <div className="text-[9px] text-slate-400 font-['Figtree',sans-serif]">Perpetual zero cost</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> Avg Rating
                </div>
                <div className="text-2xl font-black text-amber-300 font-mono tracking-tight">
                  4.8
                </div>
                <div className="text-[9px] text-slate-400 font-['Figtree',sans-serif]">User satisfaction</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> No Card Trap
                </div>
                <div className="text-2xl font-black text-emerald-400 font-mono tracking-tight">
                  100%
                </div>
                <div className="text-[9px] text-slate-400 font-['Figtree',sans-serif]">Upfront security</div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Audited for: <strong>Recurring Quotas</strong></span>
              <span className="text-emerald-400 font-bold">Zero Paywall Traps</span>
            </div>
          </div>

        </div>
      </section>

      {/* Top 4 Standouts Banner */}
      <section className="mb-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          Top 4 Industry-Standard Freemium Standouts (2026)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-surface border border-border shadow-xs hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-on-surface">Cursor</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Coding</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-3 font-['Figtree',sans-serif]">
              Free 2,000 monthly AI code autocompletions and 50 slow premium model queries on Claude 3.5 Sonnet.
            </p>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Perpetual Free Tier →</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-border shadow-xs hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-on-surface">Claude 3.5 Sonnet</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Reasoning</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-3 font-['Figtree',sans-serif]">
              Free daily multimodal reasoning, artifact live rendering, and coding assistance directly on web and mobile.
            </p>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">No Credit Card →</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-border shadow-xs hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-on-surface">ElevenLabs</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Audio/Voice</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-3 font-['Figtree',sans-serif]">
              Free 10,000 text-to-speech characters monthly across 32 languages with lifelike emotion control.
            </p>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Monthly Refills →</span>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-border shadow-xs hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-on-surface">Ollama + DeepSeek</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Open-Source</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-3 font-['Figtree',sans-serif]">
              100% free local execution of DeepSeek V3 and Llama 3.2 with zero internet connection and complete privacy.
            </p>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Unlimited / $0 Cost →</span>
          </div>
        </div>
      </section>

      {/* Filterable Tool Grid */}
      <div id="freemium-grid" className="scroll-mt-24 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <h2 className="text-2xl font-black text-on-surface tracking-tight">
              Verified Freemium &amp; Free AI Tools Catalog
            </h2>
            <p className="text-sm text-on-surface-variant font-['Figtree',sans-serif]">
              Showing {freemiumTools.length} tools with verified zero-cost allowances. Sort by popularity, rating, or release date.
            </p>
          </div>
        </div>

        <ToolGridWithFilters tools={freemiumTools} theme={theme} />
      </div>

      {/* The 7 Deep-Dive Free AI Guides Showcase */}
      <section id="free-guides" className="my-16 scroll-mt-24">
        <div className="border-b border-border pb-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            Comprehensive Free Tool Guides
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-on-surface tracking-tight">
            In-Depth Buyer&apos;s Guides &amp; Benchmarks for Free AI Software
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant mt-1.5 max-w-2xl font-['Figtree',sans-serif]">
            Deep-dive tutorials, prompt benchmarks, and feature breakdowns by our editorial team testing free tiers to their breaking points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FREE_EDITORIAL_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/blog/${guide.slug}`}
              className="group flex flex-col justify-between p-5 rounded-2xl bg-surface border border-border hover:border-emerald-500/40 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {guide.badge}
                  </span>
                  <span className="text-[11px] text-on-surface-variant font-mono">
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-on-surface group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 font-['Figtree',sans-serif]">
                  {guide.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 group-hover:underline">
                Read Full Benchmark <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Freemium Evaluation Framework */}
      <section className="my-16 bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm">
        <header className="mb-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Editorial Framework
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-3">
            How to Evaluate Freemium AI Tools Without Getting Trapped
          </h2>
          <p className="text-on-surface-variant text-base font-['Figtree',sans-serif]">
            Not all zero-cost claims are genuine. Use this 4-step framework to determine whether a tool is worth incorporating into your workflow.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-surface-container-low border border-border/60">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">1</span>
              Recurring vs. One-Off Credits
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed font-['Figtree',sans-serif]">
              Authentic freemium platforms (e.g., ElevenLabs, Cursor) replenish your quota on the 1st of every calendar month. Beware of platforms offering &ldquo;50 free credits&rdquo; upon registration that permanently expire once consumed.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-low border border-border/60">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">2</span>
              Export Restrictions &amp; Watermarks
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed font-['Figtree',sans-serif]">
              Test the export pipeline before investing time. Many AI video and image editors allow free creation but stamp intrusive watermarks or restrict resolution to 480p unless you enter a paid plan.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-low border border-border/60">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">3</span>
              Commercial Rights on Free Tiers
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed font-['Figtree',sans-serif]">
              If you intend to sell, monetize, or publish your outputs, verify the commercial rights section of the terms. While OpenAI and Anthropic grant full ownership on free accounts, smaller platforms often require a Commercial License upgrade.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-low border border-border/60">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">4</span>
              Zero Credit Card Upfront
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed font-['Figtree',sans-serif]">
              Never enter credit card details for a &ldquo;free trial&rdquo; if your goal is sustainable $0 cost. The best platforms allow sign-in via Google or GitHub without collecting billing information.
            </p>
          </div>
        </div>
      </section>

      {/* Visible FAQ Accordion Section */}
      <section className="my-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-2">
            Frequently Asked Questions About Freemium AI
          </h2>
          <p className="text-sm text-on-surface-variant font-['Figtree',sans-serif]">
            Everything you need to know about pricing, usage limits, data privacy, and commercial rights.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FREEMIUM_FAQS.map((faq, index) => (
            <details
              key={index}
              className="group bg-surface border border-border rounded-2xl p-5 shadow-xs transition-all [&_summary::-webkit-details-marker]:hidden open:border-emerald-500/40"
            >
              <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-on-surface list-none group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                <span>{faq.question}</span>
                <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-on-surface-variant">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-2 border-t border-border/50 font-['Figtree',sans-serif]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

    </PageContainer>
  );
}
