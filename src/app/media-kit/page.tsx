import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { BrandColorPalette } from "@/components/media-kit/BrandColorPalette";
import { EmbedBadgeCode } from "@/components/media-kit/EmbedBadgeCode";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Sparkles,
  Layers,
  Palette,
  Type,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Media Kit & Brand Assets | AIToolsHaven",
  description:
    "Official AIToolsHaven brand assets, vector logos, color tokens, typography, embeddable badges, and editorial usage guidelines.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/media-kit`,
  },
  openGraph: {
    title: "Media Kit & Brand Assets | AIToolsHaven",
    description:
      "Official AIToolsHaven brand assets, vector logos, color tokens, typography, embeddable badges, and editorial usage guidelines.",
    url: `${siteConfig.baseUrl}/media-kit`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AIToolsHaven Brand Kit & Assets",
      },
    ],
    type: "website",
  },
};

export const revalidate = 86400;

export default function MediaKitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Media Kit & Brand Assets - AIToolsHaven",
    description:
      "Official AIToolsHaven vector logos, color codes, embed badges, and brand guidelines for press, partners, and directory founders.",
    url: `${siteConfig.baseUrl}/media-kit`,
    publisher: {
      "@type": "Organization",
      name: "AIToolsHaven",
      logo: `${siteConfig.baseUrl}/logo.svg`,
    },
  };

  const logoAssets = [
    {
      id: "standard",
      title: "Standard Horizontal (Primary)",
      description: "Optimized for light surfaces, press articles, white banners, and standard print.",
      filename: "logo.svg",
      downloadName: "AIToolsHaven-Logo-Primary.svg",
      bgClass: "bg-slate-50 dark:bg-slate-950/60",
      render: <BrandLogo size={1.4} />,
      tag: "LIGHT MODE DEFAULT",
    },
    {
      id: "white",
      title: "White Inverted Horizontal",
      description: "High-contrast monochrome variant designed for dark hero surfaces and pitch decks.",
      filename: "logo-white.svg",
      downloadName: "AIToolsHaven-Logo-White.svg",
      bgClass: "bg-slate-950",
      render: <BrandLogo variant="white" size={1.4} />,
      tag: "DARK MODE DEFAULT",
    },
    {
      id: "icon",
      title: "Geometric Dual-Stem Mark",
      description: "Compact icon mark for app avatars, social profiles, favicons, and mobile navigation.",
      filename: "icon.svg",
      downloadName: "AIToolsHaven-Icon.svg",
      bgClass: "bg-slate-50 dark:bg-slate-950/60",
      render: <BrandLogo layout="icon" size={1.6} />,
      tag: "APP & SOCIAL AVATARS",
    },
    {
      id: "stacked",
      title: "Stacked Center-Aligned Mark",
      description: "Balanced vertical mark tailored for square placements, badges, cards, and video end-cards.",
      filename: "logo-stacked.svg",
      downloadName: "AIToolsHaven-Logo-Stacked.svg",
      bgClass: "bg-slate-50 dark:bg-slate-950/60",
      render: <BrandLogo layout="stacked" size={1.1} />,
      tag: "VERTICAL / SQUARE SPACES",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-24 relative overflow-hidden">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BackgroundPattern type="ambient" />

      {/* Hero Section */}
      <ContentContainer as="section" className="relative z-10 pt-16 sm:pt-20 md:pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold font-mono text-slate-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO HOME
            </Link>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            OFFICIAL BRAND ASSETS &amp; MEDIA KIT
          </div>

          {/* Title */}
          <h1 className="text-fluid-h1 font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Everything you need to represent{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-rose-500 to-amber-500">
              AIToolsHaven.
            </span>
          </h1>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-8">
            Download verified SVG vector logos, copy brand color codes, grab embeddable founder badges, and follow our visual usage guidelines for press coverage, software integrations, and affiliate partnerships.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs mb-10">
            <div>
              <span className="text-xs font-mono font-semibold text-slate-400 block uppercase">Curated Catalog</span>
              <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">1,000+ Tools</span>
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-slate-400 block uppercase">Taxonomy</span>
              <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">20+ Verticals</span>
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-slate-400 block uppercase">Format Standard</span>
              <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">SVG Vector</span>
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-slate-400 block uppercase">Press &amp; Ads</span>
              <Link
                href="/advertise"
                className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1 mt-1"
              >
                Media Rates <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* 1. Official Vector Logos Bento Grid */}
      <ContentContainer as="section" className="relative z-10 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              OFFICIAL VECTOR MARKS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Logo Packages &amp; Variations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
            All marks are scalable vector graphics (.SVG) that scale infinitely without pixelation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {logoAssets.map((logo) => (
            <div
              key={logo.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
            >
              {/* Logo Preview Canvas */}
              <div
                className={`min-h-[220px] sm:min-h-[260px] flex items-center justify-center p-8 relative ${logo.bgClass}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">{logo.render}</div>
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/10 dark:bg-white/10 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300">
                    {logo.tag}
                  </span>
                </div>
              </div>

              {/* Card Meta & Action */}
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {logo.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md">
                    {logo.description}
                  </p>
                </div>
                <a
                  href={`/${logo.filename}`}
                  download={logo.downloadName}
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download SVG</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>

      {/* 2. Founder Embed Badges */}
      <ContentContainer as="section" className="relative z-10 mb-16">
        <EmbedBadgeCode />
      </ContentContainer>

      {/* 3. Interactive Brand Color Palette */}
      <ContentContainer as="section" className="relative z-10 mb-16">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-2">
            <Palette className="w-3.5 h-3.5" />
            COLOR SYSTEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Official Brand Colors
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Click any color tile to instantly copy its exact HEX code to your clipboard.
          </p>
        </div>

        <BrandColorPalette />
      </ContentContainer>

      {/* 4. Typography & Layout Specifications */}
      <ContentContainer as="section" className="relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-3">
              <Type className="w-3.5 h-3.5" />
              TYPOGRAPHY SPECIFICATION
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Inter Primary Typeface
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              AIToolsHaven uses <strong>Inter</strong> across all digital touchpoints for maximum readability, balanced numeric weights, and modern screen clarity.
            </p>

            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Headings:</span>
                <span className="font-black text-slate-900 dark:text-white">Inter Black (900) &amp; Bold (700)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Body &amp; Editorial:</span>
                <span className="font-normal text-slate-900 dark:text-white">Inter Regular (400) &amp; Medium (500)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Metrics &amp; Badges:</span>
                <span className="font-semibold text-slate-900 dark:text-white">Inter SemiBold (600) / Monospace</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                MINIMUM CLEAR SPACE &amp; SIZING
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Clear Space &amp; Minimum Dimensions
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Maintain minimum clear space equal to 50% of the mark&apos;s height on all four sides. Do not crowd the logo with copy, buttons, or harsh border lines.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1 font-mono">
              <div>• Minimum Horizontal Width: <strong>120px</strong> (digital) / <strong>30mm</strong> (print)</div>
              <div>• Minimum Icon Mark Size: <strong>24px &times; 24px</strong></div>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* 5. Brand Usage Guidelines (Do & Don't) */}
      <ContentContainer as="section" className="relative z-10 mb-16">
        <div className="p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
              Editorial Rules
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Logo Usage Guidelines
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Please adhere to these basic standards to preserve the integrity of our visual identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DO's */}
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <h3 className="font-bold text-emerald-900 dark:text-emerald-300 text-base mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Recommended Usage (Do)
              </h3>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>Use the standard multi-color logo on white or neutral light backgrounds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>Use the white inverted logo variant on dark gray, navy, or black backgrounds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>Scale the logo proportionally while locking aspect ratio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>Direct links to <code>https://aitoolshaven.com</code> when embedding the badge or logo online.</span>
                </li>
              </ul>
            </div>

            {/* DON'Ts */}
            <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20">
              <h3 className="font-bold text-rose-900 dark:text-rose-300 text-base mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Prohibited Modifications (Don&apos;t)
              </h3>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Do not recolor, skew, distort, rotate, or apply drop shadows to the mark.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Do not place the logo on busy, high-contrast photographic patterns without a solid container.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Do not alter the letter-spacing or font style of &ldquo;ToolsHaven&rdquo;.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Do not imply false institutional endorsement without written authorization.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* 6. Media Inquiries & Sponsorship CTA */}
      <ContentContainer as="section" className="relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-semibold uppercase mb-3">
              <Mail className="w-3.5 h-3.5 text-primary" />
              PRESS &amp; ADVERTISING DESK
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Looking for media kits, interviews, or advertising placements?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Explore our transparent advertising inventory (link insertions, guest posts, and category takeovers) or contact our press team directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/advertise"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-primary text-slate-950 font-bold text-sm hover:bg-primary/90 transition-all text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>View Advertising Rates</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <a
              href="mailto:aitoolshaven@gmail.com"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all text-center flex items-center justify-center gap-2 border border-white/10"
            >
              <Mail className="w-4 h-4" />
              <span>Email Press Desk</span>
            </a>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}
