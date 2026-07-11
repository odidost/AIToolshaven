import { notFound } from "next/navigation";
import { getToolBySlug } from "@/lib/data/tools-service";
import { categories } from "@/lib/data/categories";
import { ToolImage } from "@/components/shared/ToolImage";
import { BrandLogo } from "@/components/shared/BrandLogo";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EmbedPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  // Find human-readable category name
  const categoryName = (() => {
    const found = categories.find((c) => c.id === tool.category || c.slug === tool.category);
    return found ? found.name : tool.category;
  })();

  const toolUrl = `https://aitoolshaven.com/tool/${tool.slug}`;

  return (
    <div className="w-full h-screen flex items-center justify-center p-2 bg-transparent">
      {/* Page-specific overrides to hide RootLayout's Header and Footer */}
      <style dangerouslySetInnerHTML={{ __html: `
        header, footer { display: none !important; }
        body { background: transparent !important; min-height: auto !important; height: auto !important; overflow: hidden !important; }
        main { min-height: auto !important; padding: 0 !important; margin: 0 !important; }
      `}} />

      {/* The Compact Tool Card Widget */}
      <div className="w-full max-w-[420px] h-[180px] bg-card rounded-2xl border border-border shadow-sm flex gap-5 items-center p-5 relative overflow-hidden bg-gradient-to-b from-surface to-surface-secondary/30 box-border border-l-4 border-l-primary select-none">
        {/* Tool Logo */}
        <div className="w-[72px] h-[72px] rounded-xl overflow-hidden bg-outline flex-shrink-0 border border-border/80 flex items-center justify-center shadow-xs">
          <ToolImage
            tool={tool}
            type="logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tool Info & Details */}
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
          {/* Top Left: Tool name + verified */}
          <div className="flex justify-between items-start gap-1">
            <h4 className="font-bold text-base text-on-surface flex items-center gap-1 leading-tight truncate">
              {tool.name}
              {tool.verified && (
                <span
                  className="material-symbols-outlined text-primary text-sm align-middle"
                  title="Verified"
                >
                  verified
                </span>
              )}
            </h4>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 flex-shrink-0">
              {tool.priceModel}
            </span>
          </div>

          {/* Center: Categories */}
          <div className="flex justify-center items-center my-1">
            <span className="text-[10px] text-on-surface-variant bg-surface-secondary/80 px-3 py-1 rounded-full font-medium border border-border/50">
              {categoryName}
            </span>
          </div>

          {/* Middle: Rating & Visit Tool */}
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-1 text-[#F59E0B]">
              <span className="material-symbols-outlined text-[16px] fill-current">star</span>
              <span className="text-[13px] font-bold text-on-surface">{tool.rating}</span>
              <span className="text-[11px] text-on-surface-variant font-medium">
                ({tool.reviewCount})
              </span>
            </div>

            <a
              href={toolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white text-[11px] font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity shadow-xs"
            >
              Visit Tool
            </a>
          </div>

          {/* Bottom: AI Tools Logo */}
          <div className="flex justify-center border-t border-border/50 pt-2 w-full mt-auto">
            <BrandLogo size={0.4} className="origin-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
