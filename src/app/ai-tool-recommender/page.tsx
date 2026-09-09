import { Metadata } from "next";
import Link from "next/link";
import { RecommendationEngine } from "@/components/home/RecommendationEngine";
import { PageContainer } from "@/components/layout/PageContainer";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/config/site";
import { RecommenderEditorialGuide } from "@/components/recommender/RecommenderEditorialGuide";
import { RecommenderFAQ } from "@/components/recommender/RecommenderFAQ";
import { recommenderFaqs } from "@/lib/data/recommender-faqs";

const pageUrl = `${siteConfig.baseUrl}/ai-tool-recommender`;

export const metadata: Metadata = {
  title: "AI Tool Recommender (2026) — Find the Best AI Tools for Your Workflow | AIToolsHaven",
  description: "Interactive AI tool recommender and stack builder. Answer 2 quick questions to discover benchmark-vetted, high-ROI AI software blueprints tailored to your role and workflow goals.",
  keywords: [
    "ai tool recommender",
    "ai tool finder",
    "ai software recommender",
    "find best ai tools",
    "which ai tool should i use",
    "ai tech stack builder",
    "best ai tools for developers 2026",
    "best ai tools for content creators",
    "best ai tools for solo founders",
    "ai tools for sales teams",
    "avoiding ai subscription fatigue",
    "free ai tool finder",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "AI Tool Recommender (2026) — Match Your Workflow to Verified AI Stacks",
    description: "Interactive AI tool recommendation engine. Choose your role and goal to generate tailored, benchmark-backed software blueprints with zero subscription waste.",
    url: pageUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "AI Tool Recommender — AIToolsHaven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tool Recommender (2026) — Find Your Perfect AI Tech Stack",
    description: "Discover verified, high-ROI AI tools tailored to your exact role and workflow goals. Free interactive stack builder.",
    images: [`${siteConfig.baseUrl}${siteConfig.ogImage}`],
  },
};

export default function AIToolRecommenderPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#webapp`,
        "name": "AIToolsHaven AI Tool Recommender",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "url": pageUrl,
        "description": "Interactive AI recommendation engine matching professionals, creators, and developers to verified AI tool stacks with zero subscription waste.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": recommenderFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.baseUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Tool Recommender",
            "item": pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pb-24">
      <StructuredData data={structuredData} />
      
      {/* Sunset Ember Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[140px] mix-blend-multiply" />
        <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary/20 blur-[140px] mix-blend-multiply" />
      </div>

      <PageContainer className="pt-10 pb-6">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">AI Tool Recommender</span>
        </nav>

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4 shadow-xs border border-primary/20">
            <span className="material-symbols-outlined text-[16px] animate-pulse">auto_awesome</span>
            <span className="text-[11px] font-black uppercase tracking-[0.18em]">Interactive Stack Builder</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-gray-900 tracking-tight leading-tight mb-4">
            AI Tool Recommender
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
            Stop guessing which AI tools to buy. Tell our Recommender your role and primary bottleneck to synthesize a verified, high-ROI software blueprint.
          </p>
        </div>

        {/* Interactive Engine Container */}
        <div className="relative">
          <RecommendationEngine />
        </div>

        {/* Value Proposition Triad */}
        <section className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/5 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5F6D]/10 text-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">tune</span>
            </div>
            <h3 className="font-heading font-black text-lg text-gray-900 mb-2">
              Persona Affinity Matching
            </h3>
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              Every tool recommendation is weighted by real practitioner use cases and verified benchmarks.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/5 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <h3 className="font-heading font-black text-lg text-gray-900 mb-2">
              Zero-Spam Vetting
            </h3>
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              We test feature latency, pricing transparency, and real-world reliability before certifying tools.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/5 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">account_tree</span>
            </div>
            <h3 className="font-heading font-black text-lg text-gray-900 mb-2">
              Chained AI Workflows
            </h3>
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              Combine your recommended tools into automated step-by-step pipelines with our workflow library.
            </p>
          </div>
        </section>
      </PageContainer>

      {/* Comprehensive SEO Editorial Pillar */}
      <RecommenderEditorialGuide />

      {/* High-Intent FAQ Accordion */}
      <RecommenderFAQ />

      {/* Discovery Jump Links */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3 bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl shadow-xs">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3">
            Explore More AI Hubs:
          </span>
          <Link
            href="/workflows"
            className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-primary/10 hover:text-primary text-xs font-bold transition-all border border-black/5"
          >
            Popular AI Workflows ➔
          </Link>
          <Link
            href="/compare-tools"
            className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-primary/10 hover:text-primary text-xs font-bold transition-all border border-black/5"
          >
            Head-to-Head Comparisons ➔
          </Link>
          <Link
            href="/popular-ai-tools"
            className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-primary/10 hover:text-primary text-xs font-bold transition-all border border-black/5"
          >
            Popular AI Tools ➔
          </Link>
          <Link
            href="/categories"
            className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-primary/10 hover:text-primary text-xs font-bold transition-all border border-black/5"
          >
            All 25+ Categories ➔
          </Link>
        </div>
      </div>
    </main>
  );
}
