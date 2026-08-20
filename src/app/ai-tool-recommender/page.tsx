import { Metadata } from "next";
import Link from "next/link";
import { RecommendationEngine } from "@/components/home/RecommendationEngine";
import { PageContainer } from "@/components/layout/PageContainer";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "AI Tool Recommender — Find Your Perfect AI Tech Stack | AIToolsHaven",
  description: "Generate instant, benchmark-backed 3-tool AI recommendations tailored to your exact role and workflow goals. Free interactive tool finder across 150+ verified AI models.",
  alternates: {
    canonical: "https://aitoolshaven.com/ai-tool-recommender",
  },
  openGraph: {
    title: "AI Tool Recommender — Match Your Workflow to Verified AI Tools",
    description: "Interactive AI tool recommendation engine. Choose your role and goal to generate tailored software blueprints.",
    url: "https://aitoolshaven.com/ai-tool-recommender",
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function AIToolRecommenderPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AIToolsHaven AI Tool Recommender",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://aitoolshaven.com/ai-tool-recommender",
    "description": "Interactive AI recommendation engine matching professionals, creators, and developers to verified AI tool stacks.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
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

        {/* Discovery Jump Links */}
        <section className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl shadow-xs">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3">
              Explore More:
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
              href="/categories"
              className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-primary/10 hover:text-primary text-xs font-bold transition-all border border-black/5"
            >
              All 21 Categories ➔
            </Link>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
