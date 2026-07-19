import Link from "next/link";
import { RankingCard } from "./RankingCard";
import { FloatingTooltip } from "./FloatingTooltip";
import { getAllTools, getLatestTools, getTrendingTools, getToolsByCategoryId } from "@/lib/data/tools-service";
import { getCategoryBySlug } from "@/lib/queries/categories";
import { SectionContainer } from "../layout/SectionContainer";

export async function EditorialRankingsSection() {
  // 1. Latest AI Tools (matches /latest-ai-tools)
  const latestToolsFull = await getLatestTools(100);
  const latestTools = latestToolsFull.slice(0, 10);
  const latestTotal = latestToolsFull.length;

  // 2. Most Popular AI Tools (matches /popular-ai-tools)
  // getAllTools already orders by popularity descending
  const allTools = await getAllTools();
  const popularTools = allTools.slice(0, 10);
  const popularTotal = allTools.length;

  // 3. Trending AI Tools (matches /trending-ai-tools)
  const trendingToolsFull = await getTrendingTools(100);
  const trendingTools = trendingToolsFull.slice(0, 10);
  const trendingTotal = trendingToolsFull.length;

  // 4. AI Chatbots
  // Pull directly from the new ai-chatbots category
  const chatbotsCategory = await getCategoryBySlug("ai-chatbots");
  const chatbotsFull = chatbotsCategory 
    ? await getToolsByCategoryId(chatbotsCategory.id)
    : [];

  const finalChatbots = chatbotsFull.slice(0, 10);
  const chatbotsTotal = chatbotsFull.length;

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* The Glowing Data Line connecting from Featured Tools above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent -mt-16 pointer-events-none hidden xl:block" />

      <section className="relative overflow-visible pt-16 pb-24">
        <div className="mx-auto w-full">
        <div className="mb-16 flex flex-col items-center md:items-start justify-center gap-2">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-3xl border border-black/5 text-gray-900 shadow-xl px-4 py-1.5 rounded-full mb-4 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="material-symbols-outlined text-[18px] text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Editor's Picks</span>
          </div>
          <h2 className="text-fluid-h2 font-black tracking-tight text-gray-900 mb-2">
            Explore the Best AI Tools by Category
          </h2>
          <p className="text-[17px] text-on-surface-variant text-center md:text-left max-w-2xl leading-relaxed">
            Browse expertly curated rankings featuring the most popular, highest-rated, and most useful AI tools across every major category.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 items-start pb-12">
          {/* Card 1: Latest AI Tools */}
          <div className="relative group/wrapper xl:mt-0 transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute -inset-4 rounded-full bg-rose-500/10 blur-[80px] opacity-0 transition-opacity duration-700 group-hover/wrapper:opacity-100 pointer-events-none" />
            <RankingCard
              title="Latest AI Tools"
              icon="new_releases"
              tools={latestTools}
              totalCount={latestTotal}
              categoryLink="/latest-ai-tools"
              accentColor="rose"
            />
          </div>

          {/* Card 2: Most Popular */}
          <div className="relative group/wrapper xl:mt-12 transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-[80px] opacity-0 transition-opacity duration-700 group-hover/wrapper:opacity-100 pointer-events-none" />
            <RankingCard
              title="Most Popular"
              icon="trending_up"
              tools={popularTools}
              totalCount={popularTotal}
              categoryLink="/popular-ai-tools"
              accentColor="primary"
            />
          </div>

          {/* Card 3: Trending AI Tools */}
          <div className="relative group/wrapper xl:mt-0 transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute -inset-4 rounded-full bg-emerald-500/10 blur-[80px] opacity-0 transition-opacity duration-700 group-hover/wrapper:opacity-100 pointer-events-none" />
            <RankingCard
              title="Trending AI Tools"
              icon="local_fire_department"
              tools={trendingTools}
              totalCount={trendingTotal}
              categoryLink="/trending-ai-tools"
              accentColor="emerald"
            />
          </div>

          {/* Card 4: Top AI Chatbots */}
          <div className="relative group/wrapper xl:mt-12 transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-[80px] opacity-0 transition-opacity duration-700 group-hover/wrapper:opacity-100 pointer-events-none" />
            <RankingCard
              title="Top AI Chatbots"
              icon="forum"
              tools={finalChatbots}
              totalCount={chatbotsTotal}
              categoryLink="/category/ai-chatbots"
              accentColor="blue"
            />
          </div>
        </div>

        {/* Large Bottom CTA matching the image exactly */}
        <div className="mt-12 flex justify-center">
          <div className="relative inline-flex group">
            {/* The multi-colored gradient glow underneath */}
            <div className="absolute -inset-1 top-2 -z-10 rounded-[14px] bg-primary/40 blur-md transition-all duration-300 group-hover:opacity-100 group-hover:blur-lg group-hover:bg-primary/60" />
            
            {/* Button container with 4px track and moving ball animation */}
            <div className="relative flex items-center justify-center rounded-[14px] p-[2px] overflow-hidden shadow-sm transition-transform hover:-translate-y-0.5">
              
              {/* Stylish static border color (acting as the track) */}
              <div className="absolute inset-0 bg-border" />

              {/* The moving "ball" of color (conic gradient with a bright tip and trailing tail) */}
              <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,var(--primary)_95%,#FFFFFF_100%)]" />
              
              {/* Inner Button Content */}
              <Link
                href="/categories"
                className="relative z-10 flex items-center justify-center gap-2 rounded-[12px] bg-white px-16 py-3.5 text-[14px] font-bold uppercase tracking-widest text-gray-900 transition-colors hover:text-primary"
              >
                SEE THE FULL LIST OF AI <span className="text-[16px] font-normal leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
        <FloatingTooltip />

        {/* Data Stream to Trusted By Section */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary/50 via-primary to-transparent pointer-events-none hidden xl:block z-0" />
      </section>
    </div>
  );
}
