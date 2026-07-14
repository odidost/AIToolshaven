import { Metadata } from "next";
import { getTrendingTools } from "@/lib/data/tools-service";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";
import { ToolGridWithFilters } from "@/components/shared/ToolGridWithFilters";
import { getCategoryTheme } from "@/lib/data/categoryThemes";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";

export const revalidate = 3600; // 1 hour

export const metadata: Metadata = {
  title: "Trending AI Tools | AIToolsHaven",
  description: "Explore the fastest growing and trending artificial intelligence tools based on user activity and engagement.",
};

export default async function TrendingAIToolsPage() {
  const trendingTools = await getTrendingTools(100);
  
  // Use a generic theme for the layout
  const theme = getCategoryTheme("trending");
  theme.accentColors = {
    heroGradient: "from-orange-500/10 to-red-500/5",
    iconBg: "bg-orange-500/20",
    iconText: "text-orange-500",
    textAccent: "text-orange-500",
    borderAccent: "border-orange-500/30",
    cssVar: "249, 115, 22", // rgb for orange-500
  };

  return (
    <PageContainer
      as="main"
      className="py-12 md:py-16 relative"
      style={{ '--category-accent': theme.accentColors.cssVar } as React.CSSProperties}
    >
      <BackgroundPattern type="sparkles" opacity={0.02} className="fixed inset-0 text-[rgb(var(--category-accent))]" />
      
      <nav className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Trending AI Tools" },
          ]}
        />
      </nav>

      {/* Premium Hero Section */}
      <section className={`relative overflow-hidden rounded-[32px] border ${theme.accentColors.borderAccent} bg-gradient-to-br ${theme.accentColors.heroGradient} bg-surface-elevated p-8 md:p-12 mb-12 shadow-md backdrop-blur-md`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between relative z-10">
          <div className="max-w-3xl">
            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.accentColors.iconBg} mb-6 border ${theme.accentColors.borderAccent} shadow-sm backdrop-blur-md`}>
              <span className={`material-symbols-outlined text-4xl ${theme.accentColors.iconText}`}>
                trending_up
              </span>
            </div>

            <h1 className="text-fluid-h1 font-bold text-on-surface tracking-tight mb-4">
              Trending AI Tools
            </h1>

            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-6">
              Discover the AI tools everyone is talking about. These platforms have seen the highest recent surge in popularity, usage, and real-world impact.
            </p>
          </div>

          {/* Stats Widget */}
          <div className="w-full lg:w-72 bg-surface/80 backdrop-blur-md rounded-2xl border border-border/50 p-6 shadow-xs flex flex-col gap-4 shrink-0 mt-4 lg:mt-0 transition-all hover:shadow-sm">
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-[16px] ${theme.accentColors.iconText}`}>grid_view</span> Trending Tools
              </span>
              <span className="font-semibold text-on-surface">{trendingTools.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-[16px] ${theme.accentColors.iconText}`}>visibility</span> Most Visited
              </span>
              <span className="font-semibold text-on-surface">Top 100</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <ToolGridWithFilters tools={trendingTools} theme={theme} />

    </PageContainer>
  );
}
