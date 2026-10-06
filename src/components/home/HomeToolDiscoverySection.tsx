import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeToolDiscoverySection() {
  const categories = [
    { name: "Coding Assistants", slug: "coding-assistants", icon: "code" },
    { name: "Video Generators", slug: "ai-video-generators", icon: "videocam" },
    { name: "Writing Tools", slug: "ai-writing-tools", icon: "edit_note" },
    { name: "Image Generators", slug: "ai-image-generators", icon: "image" },
    { name: "AI Chatbots & LLMs", slug: "ai-chatbots", icon: "forum" },
    { name: "Voice & Speech", slug: "ai-voice-generators", icon: "mic" },
    { name: "AI SEO Tools", slug: "ai-seo-tools", icon: "search" },
    { name: "Meeting Assistants", slug: "ai-meeting-assistants", icon: "record_voice_over" },
    { name: "Productivity", slug: "productivity", icon: "bolt" },
    { name: "Freemium Tools", href: "/freemium-ai-tools", icon: "savings" },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[16px] text-[#E11D48]">grid_view</span>
            <span>Directory Catalog</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
            Explore Tools by Category
          </h2>
          <p className="mt-1 text-sm sm:text-base text-[#4B5563] max-w-xl">
            Browse verified AI software across 100+ categories to find the right solutions for your workflow.
          </p>
        </div>
        <Link
          href="/categories"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors self-start sm:self-auto shrink-0"
        >
          Browse all categories
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Popular Category Hubs */}
      <div>
        <span className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider block mb-3">
          Popular Category Hubs:
        </span>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const href = cat.href || `/category/${cat.slug}`;
            return (
              <Link
                key={cat.name}
                href={href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-[#E5E7EB] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors text-xs font-medium text-[#4B5563]"
              >
                <span className="material-symbols-outlined text-[15px]">{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
