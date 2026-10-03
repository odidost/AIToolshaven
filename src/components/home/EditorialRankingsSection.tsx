import Link from "next/link";
import { RankingCard } from "./RankingCard";
import { FloatingTooltip } from "./FloatingTooltip";
import { getFeaturedTools, getLatestTools, getTrendingTools, getToolsByCategoryId } from "@/lib/data/tools-service";


export async function EditorialRankingsSection() {
  // Fetch only top 10 items directly with query limits
  const [latestTools, popularTools, trendingTools, finalChatbots] = await Promise.all([
    getLatestTools(10),
    getTrendingTools(10),
    getFeaturedTools(10),
    getToolsByCategoryId("ai-chatbots", 10),
  ]);

  const latestTotal = 50;
  const popularTotal = 1000;
  const trendingTotal = 50;
  const chatbotsTotal = 24;

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <section className="relative">
        <div className="mx-auto w-full">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
                <span className="material-symbols-outlined text-[16px] text-[#E11D48]">leaderboard</span>
                <span>Live Directory &amp; Benchmarks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] font-heading">
                AI Tool Rankings &amp; Daily Fresh Drops
              </h2>
            </div>
            <Link 
              href="/categories" 
              className="text-xs sm:text-sm font-medium text-[#E11D48] hover:text-[#BE123C] transition-colors flex items-center gap-1"
            >
              View all 24 categories &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {/* Card 1: Fresh Drops */}
            <RankingCard
              title="Fresh Drops"
              icon="bolt"
              tools={latestTools}
              totalCount={latestTotal}
              categoryLink="/latest-ai-tools"
              accentColor="rose"
              badgeText="Today"
              isFreshDrops={true}
            />

            {/* Card 2: Most Popular */}
            <RankingCard
              title="Most Popular"
              icon="trending_up"
              tools={popularTools}
              totalCount={popularTotal}
              categoryLink="/popular-ai-tools"
              accentColor="primary"
            />

            {/* Card 3: Trending AI Tools */}
            <RankingCard
              title="Trending AI Tools"
              icon="local_fire_department"
              tools={trendingTools}
              totalCount={trendingTotal}
              categoryLink="/trending-ai-tools"
              accentColor="emerald"
            />

            {/* Card 4: Top AI Chatbots */}
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
        <FloatingTooltip />
      </section>
    </div>
  );
}
