import Link from "next/link";
import { RankingCard } from "./RankingCard";
import { FloatingTooltip } from "./FloatingTooltip";
import { getAllTools, getLatestTools, getTrendingTools, getToolsByCategoryId } from "@/lib/data/tools-service";
import { getCategoryBySlug } from "@/lib/queries/categories";

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
    <section className="mb-12 w-full bg-[#f4f7fe]/60 py-16">
      <div className="mx-auto w-full max-w-[1360px] px-6 md:px-12 xl:px-16">
        <div className="mb-10 flex flex-col items-center md:items-start justify-center gap-2">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold tracking-widest text-primary uppercase shadow-sm">
            <span className="material-symbols-outlined text-sm">stars</span>
            Editor's Picks
          </div>
          <h2 className="mb-2 text-3xl font-black md:text-4xl lg:text-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
            Explore the Best AI Tools by Category
          </h2>
          <p className="text-[17px] text-on-surface-variant text-center md:text-left max-w-2xl leading-relaxed">
            Browse expertly curated rankings featuring the most popular, highest-rated, and most useful AI tools across every major category.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Card 1: Latest AI Tools */}
          <div className="relative group/wrapper">
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
          <div className="relative group/wrapper">
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
          <div className="relative group/wrapper">
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
          <div className="relative group/wrapper">
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
            <div className="absolute -inset-1 top-2 -z-10 rounded-[14px] bg-gradient-to-r from-blue-300 via-fuchsia-300 to-orange-300 opacity-60 blur-md transition-all duration-300 group-hover:opacity-100 group-hover:blur-lg" />
            
            {/* Button container with 4px track and moving ball animation */}
            <div className="relative flex items-center justify-center rounded-[14px] p-[4px] overflow-hidden shadow-sm transition-transform hover:-translate-y-0.5">
              
              {/* Stylish static border color (acting as the track) */}
              <div className="absolute inset-0 bg-[#E9D5FF]" />

              {/* The moving "ball" of color (conic gradient with a bright tip and trailing tail) */}
              <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#ec4899_95%,#3b82f6_100%)]" />
              
              {/* Inner Button Content */}
              <Link
                href="/categories"
                className="relative z-10 flex items-center justify-center gap-2 rounded-[10px] bg-white px-16 py-3.5 text-[14px] font-bold uppercase tracking-widest text-[#1e1b4b]"
              >
                SEE THE FULL LIST OF AI <span className="text-[16px] font-normal leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FloatingTooltip />
    </section>
  );
}
