import Link from "next/link";
import { RankingCard } from "./RankingCard";
import { FloatingTooltip } from "./FloatingTooltip";
import { getAllTools, getLatestTools, getTrendingTools } from "@/lib/data/tools-service";

export async function EditorialRankingsSection() {
  const allTools = await getAllTools();

  // 1. Latest AI Tools
  const latestTools = await getLatestTools(10);

  // 2. Most Popular AI Tools
  // Using popularity score
  const popularTools = [...allTools]
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, 10);

  // 3. Trending AI Tools
  // Trending could prioritize recently updated + featured
  const trendingTools = [...allTools]
    .sort((a, b) => {
      const aScore = (a.featured ? 50 : 0) + (a.popularity || 0) + (a.rating || 0) * 10;
      const bScore = (b.featured ? 50 : 0) + (b.popularity || 0) + (b.rating || 0) * 10;
      return bScore - aScore;
    })
    .slice(0, 10);

  // 4. AI Chatbots
  // Automatically pull tools from AI Chatbots category/tags
  const chatbots = allTools
    .filter((t) => {
      const isChatbotCategory = t.category === "c7"; // Future-proof if c7 becomes chatbots
      const hasChatbotTag = t.tags?.some((tag) => tag.toLowerCase().includes("chatbot"));
      const hasChatbotUseCase = t.useCases?.some((uc) => uc.toLowerCase().includes("chatbot"));
      return isChatbotCategory || hasChatbotTag || hasChatbotUseCase;
    })
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, 10);

  // Fallback if no chatbots explicitly tagged (just grab from Text Generation "c1" that might be assistants)
  const finalChatbots = chatbots.length >= 3 
    ? chatbots 
    : allTools.filter(t => t.category === "c1" || t.slug.includes("chat")).slice(0, 10);

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
              categoryLink="/category/all"
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
              categoryLink="/category/all"
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
              categoryLink="/category/all"
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
              categoryLink="/category/text-generation"
              accentColor="blue"
            />
          </div>
        </div>

        {/* Large Bottom CTA matching the image */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/categories"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-white px-12 py-4 text-[14px] font-bold uppercase tracking-wider text-primary transition-all hover:-translate-y-0.5"
          >
            {/* Animated Shimmering Border behind */}
            <div className="absolute -inset-[2px] -z-10 rounded-xl bg-gradient-to-r from-blue-500/30 via-primary/40 to-rose-500/30 bg-[length:200%_200%] opacity-70 animate-[gradient_4s_linear_infinite] group-hover:opacity-100 blur-[2px] transition-opacity" />
            <div className="absolute inset-0 -z-10 rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),_0_8px_20px_rgb(0,0,0,0.04)]" />
            
            SEE THE FULL LIST OF AI
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-500">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
      <FloatingTooltip />
    </section>
  );
}
