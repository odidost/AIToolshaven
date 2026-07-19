import { opportunities } from "@/lib/opportunities";
import { workflows } from "@/lib/workflows";
import { comparisons } from "@/lib/comparisons";
import { articles } from "@/lib/articles";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";

import { SpotlightBanner } from "@/components/shared/SpotlightBanner";
import { TrustedByMarquee } from "@/components/home/TrustedByMarquee";
import { RecommendationEngine } from "@/components/home/RecommendationEngine";
import { EditorialRankingsSection } from "@/components/home/EditorialRankingsSection";
import { HomepageCategories } from "@/components/home/HomepageCategories";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { OpportunityCard } from "@/components/home/OpportunityCard";
import { ComparisonCard } from "@/components/home/ComparisonCard";
import { ArticleCard } from "@/components/home/ArticleCard";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { ToolCard } from "@/components/shared/ToolCard";

import { getFeaturedTools, getLatestTools, getTrendingTools, getAllTools } from "@/lib/data/tools-service";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

import { CommunityReviews } from "@/components/home/CommunityReviews";
import { SubmitToolCTA } from "@/components/home/SubmitToolCTA";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";

export default async function Home() {
  const featuredTools = await getFeaturedTools(8);
  const allTools = await getAllTools();
  
  const toolLogos = allTools.reduce((acc, tool) => {
    if (tool.name && tool.logoUrl) {
      acc[tool.name.toLowerCase()] = tool.logoUrl;
    }
    return acc;
  }, {} as Record<string, string>);

  return (
    <main className="flex flex-col gap-4 md:gap-8 lg:gap-10 pb-32 relative overflow-hidden bg-background z-0 min-h-screen">
      {/* Sunset Ember Animated Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-primary/30 blur-[120px] mix-blend-multiply animate-float-slow" />
        <div className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary/30 blur-[120px] mix-blend-multiply animate-float-medium" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-accent/30 blur-[120px] mix-blend-multiply animate-float-fast" />
      </div>

      {/* Group Hero and Featured Tools with drastically reduced spacing */}
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-10">
        {/* 1. Hero Section */}
        <FadeIn delay={0.1} duration={0.8} direction="up">
          <SpotlightBanner />
        </FadeIn>

        {/* Glowing Pedestal Transition */}
        {featuredTools.length > 0 && (
          <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent shadow-[0_0_30px_rgba(255,95,109,0.8)] relative z-20 opacity-80" />
        )}

        {/* 1b. Featured Tools */}
        {featuredTools.length > 0 && (
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <section className="relative overflow-visible pt-8 pb-16">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-3xl border border-black/5 text-gray-900 shadow-xl px-4 py-1.5 rounded-full mb-4 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-[18px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Editor's Choice</span>
                  </div>
                  <h2 className="text-fluid-h2 font-black tracking-tight text-gray-900">
                    Featured Tools
                  </h2>
                </div>
                <Link href="/categories" className="text-[14px] font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group">
                  View All Categories <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10" staggerChildren={0.1}>
                {featuredTools.map((tool) => (
                  <StaggerItem key={tool.id} direction="up">
                    <ToolCard tool={tool} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          </div>
        )}
      </div>

      {/* 3b. Editorial Rankings */}
      <EditorialRankingsSection />

      {/* 2. Trust Layer */}
      <FadeIn delay={0.2} direction="up" className="w-full relative z-10">
        <section className="bg-card border-y border-border/50 py-10 sm:py-16 relative overflow-hidden">
          <TrustedByMarquee />
        </section>
      </FadeIn>

      {/* 3. AI Recommendation Engine */}
      <FadeIn direction="up">
        <RecommendationEngine />
      </FadeIn>

      {/* 4. Featured Categories */}
      <HomepageCategories />

      {/* 6. Compare Popular AI Tools (The Versus Arena) */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Receiving Data Stream Line from Curated Paths */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent pointer-events-none hidden xl:block z-0" />

        <section className="bg-gradient-to-b from-white to-primary/5 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.02)] border border-black/5 p-6 sm:p-10 md:p-16 relative overflow-hidden">
          <BackgroundPattern type="grid" opacity={0.03} />
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Head-to-Head</span>
              </div>
              <h2 className="text-fluid-h2 font-black text-slate-900 tracking-tight leading-tight">
                Compare Alternatives
              </h2>
            </div>
            <Link 
              href="/compare-tools" 
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full text-[14px] font-bold text-primary shadow-sm border border-black/5 hover:border-primary/20 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">View All Matchups</span>
              <span className="material-symbols-outlined text-[18px] relative z-10 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10" staggerChildren={0.15}>
            {comparisons.map((comparison) => {
              const fullTool1 = allTools.find(t => t.name.toLowerCase() === comparison.tool1.name.toLowerCase());
              const fullTool2 = allTools.find(t => t.name.toLowerCase() === comparison.tool2.name.toLowerCase());
              
              return (
                <StaggerItem key={comparison.slug} direction="up">
                  <ComparisonCard
                    data={comparison}
                    fullTool1={fullTool1}
                    fullTool2={fullTool2}
                  />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>
      </div>

      {/* 7. AI Workflows */}
      <div className="w-full mx-auto relative z-10">
        {/* Receiving Data Stream Line from Versus Arena */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent pointer-events-none hidden xl:block z-0" />

        <section className="bg-gradient-to-b from-white to-primary/5 shadow-[0_8px_32px_rgba(0,0,0,0.02)] border-y border-black/5 py-10 sm:py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <BackgroundPattern type="workflow" opacity={0.03} className="text-primary" />
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-[18px]">account_tree</span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Learn & Apply</span>
              </div>
              <h2 className="text-fluid-h2 font-black text-slate-900 tracking-tight leading-tight">
                Popular AI Workflows
              </h2>
            </div>
            <Link 
              href="/workflows" 
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full text-[14px] font-bold text-primary shadow-sm border border-black/5 hover:border-primary/20 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">View All Workflows</span>
              <span className="material-symbols-outlined text-[18px] relative z-10 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 relative z-10" staggerChildren={0.15}>
            {workflows.map((workflow) => (
              <StaggerItem key={workflow.slug} direction="up">
                <WorkflowCard
                  title={workflow.title}
                  tools={workflow.tools.map(t => ({
                    name: t,
                    logoUrl: toolLogos[t.toLowerCase()] || undefined
                  }))}
                  icon={workflow.icon}
                  slug={workflow.slug}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>

      {/* 9. Trending Opportunities */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section className="bg-gradient-to-b from-white to-primary/5 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.02)] border border-black/5 p-6 sm:p-10 md:p-16 relative overflow-hidden">
          <BackgroundPattern type="aurora" opacity={0.03} className="text-primary" />
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Unlock Missions</span>
              </div>
              <h2 className="text-fluid-h2 font-black text-slate-900 tracking-tight leading-tight">
                Trending Opportunities
              </h2>
            </div>
            <Link 
              href="/goals" 
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full text-[14px] font-bold text-primary shadow-sm border border-black/5 hover:border-primary/20 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">View All Missions</span>
              <span className="material-symbols-outlined text-[18px] relative z-10 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10" staggerChildren={0.15}>
            {opportunities.map((item) => (
              <StaggerItem key={item.title} direction="up">
                <OpportunityCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  slug={item.slug}
                  difficulty={item.difficulty}
                  roi={item.roi}
                  color={item.color}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>

      {/* 10. Community Reviews */}
      <FadeIn direction="up" className="w-full relative z-10">
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <CommunityReviews />
        </section>
      </FadeIn>

      {/* 11. Latest AI News */}
      <div className="w-full relative z-10">
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="flex flex-col items-center text-center mb-16 px-4 relative z-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>article</span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Resources</span>
            </div>
            <h2 className="text-fluid-h2 font-black text-slate-900 tracking-tighter leading-tight">
              Guides & Insights
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-slate-600 leading-relaxed">
              In-depth analysis, comparisons, and workflows to help you master AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px] mx-auto">
            {articles.slice(0, 4).map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                category={article.category}
                slug={article.slug}
                imageUrl={article.imageUrl}
                summary={article.summary}
              />
            ))}
          </div>

          <div className="mt-16 flex justify-center relative z-10">
            <Link href="/blog" className="group inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-md hover:shadow-xl border border-black/5 hover:-translate-y-1 transition-all duration-300">
              View all articles
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </section>
      </div>

      {/* 12. Submit Your Tool */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SubmitToolCTA />
      </div>

      {/* 13. Newsletter CTA */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterCTA />
      </div>
    </main>
  );
}
