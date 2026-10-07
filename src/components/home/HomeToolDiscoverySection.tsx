import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CategoryPill = {
  name: string;
  slug?: string;
  href?: string;
  icon: string;
  colorClass: string;
};

export function HomeToolDiscoverySection() {
  const categories: CategoryPill[] = [
    {
      name: "Coding Assistants",
      slug: "coding-assistants",
      icon: "code",
      colorClass: "bg-[#18181B] text-white border-zinc-700 hover:bg-zinc-800",
    },
    {
      name: "Video Generators",
      slug: "ai-video-generators",
      icon: "videocam",
      colorClass: "bg-[#9F1239] text-white border-[#881337] hover:bg-[#881337]",
    },
    {
      name: "Writing Tools",
      slug: "ai-writing-tools",
      icon: "edit_note",
      colorClass: "bg-[#701A75] text-white border-[#581C87] hover:bg-[#581C87]",
    },
    {
      name: "Image Generators",
      slug: "ai-image-generators",
      icon: "image",
      colorClass: "bg-[#E11D48] text-white border-[#BE123C] hover:bg-[#BE123C]",
    },
    {
      name: "AI Chatbots & LLMs",
      slug: "ai-chatbots",
      icon: "forum",
      colorClass: "bg-[#BE123C] text-white border-[#9F1239] hover:bg-[#9F1239]",
    },
    {
      name: "Voice & Speech",
      slug: "ai-voice-generators",
      icon: "mic",
      colorClass: "bg-[#831843] text-white border-[#701A75] hover:bg-[#701A75]",
    },
    {
      name: "AI SEO Tools",
      slug: "ai-seo-tools",
      icon: "search",
      colorClass: "bg-[#881337] text-white border-[#701A75] hover:bg-[#701A75]",
    },
    {
      name: "AI Agents",
      slug: "ai-agents",
      icon: "smart_toy",
      colorClass: "bg-[#581C87] text-white border-[#4C1D95] hover:bg-[#4C1D95]",
    },
    {
      name: "Vibe Coding & App Builders",
      slug: "ai-app-builders-vibe-coding",
      icon: "terminal",
      colorClass: "bg-[#0F172A] text-white border-slate-700 hover:bg-slate-800",
    },
    {
      name: "Marketing & Sales",
      slug: "marketing-sales",
      icon: "campaign",
      colorClass: "bg-[#991B1B] text-white border-[#7F1D1D] hover:bg-[#7F1D1D]",
    },
    {
      name: "Productivity",
      slug: "productivity",
      icon: "bolt",
      colorClass: "bg-[#4C0519] text-white border-[#881337] hover:bg-[#881337]",
    },
    {
      name: "Meeting Assistants",
      slug: "ai-meeting-assistants",
      icon: "record_voice_over",
      colorClass: "bg-[#27272A] text-white border-zinc-600 hover:bg-zinc-700",
    },
    {
      name: "AI Presentation Makers",
      slug: "ai-presentation-makers",
      icon: "slideshow",
      colorClass: "bg-[#BE123C] text-white border-[#9F1239] hover:bg-[#9F1239]",
    },
    {
      name: "AI Research Tools",
      slug: "ai-research-tools",
      icon: "science",
      colorClass: "bg-[#312E81] text-white border-[#1E1B4B] hover:bg-[#1E1B4B]",
    },
    {
      name: "Logo & Brand Identity",
      slug: "logo-generators",
      icon: "brush",
      colorClass: "bg-[#A21CAF] text-white border-[#86198F] hover:bg-[#86198F]",
    },
    {
      name: "Shorts & Video Repurposers",
      slug: "ai-shorts-repurposing",
      icon: "content_cut",
      colorClass: "bg-[#E11D48] text-white border-[#BE123C] hover:bg-[#BE123C]",
    },
    {
      name: "AI Talking Avatars",
      slug: "ai-talking-avatars",
      icon: "account_box",
      colorClass: "bg-[#9F1239] text-white border-[#881337] hover:bg-[#881337]",
    },
    {
      name: "PDF & Document Chat",
      slug: "ai-document-readers-summarizers",
      icon: "menu_book",
      colorClass: "bg-[#7C2D12] text-white border-[#9A3412] hover:bg-[#9A3412]",
    },
    {
      name: "AI Social Media Tools",
      slug: "ai-social-media-tools",
      icon: "share",
      colorClass: "bg-[#881337] text-white border-[#701A75] hover:bg-[#701A75]",
    },
    {
      name: "AI Headshots & Portraits",
      slug: "ai-headshot-generators",
      icon: "badge",
      colorClass: "bg-[#4A044E] text-white border-[#701A75] hover:bg-[#701A75]",
    },
    {
      name: "AI Humanizers & Bypass",
      slug: "ai-humanizers-bypass",
      icon: "verified_user",
      colorClass: "bg-[#064E3B] text-white border-[#065F46] hover:bg-[#065F46]",
    },
    {
      name: "Freemium AI Tools",
      href: "/freemium-ai-tools",
      icon: "savings",
      colorClass: "bg-[#E11D48] text-white border-[#BE123C] hover:bg-[#BE123C]",
    },
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
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium shadow-2xs transition-all ${cat.colorClass}`}
              >
                <span className="material-symbols-outlined text-[15px] opacity-90">{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
