import Link from "next/link";
import type { Metadata } from "next";

import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      {/* Glowing number */}
      <div className="relative mb-8">
        <p className="text-[120px] md:text-[180px] font-black text-slate-100 leading-none select-none">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
        </div>
      </div>

      <span className="material-symbols-outlined text-5xl text-primary mb-6">
        search_off
      </span>

      <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-slate-500 text-lg max-w-md mb-10">
        The AI tool, category, or page you were looking for may have moved or
        never existed. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
          Back to Home
        </Link>
        <Link
          href="/category/text-generation"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <span className="material-symbols-outlined text-[18px]">explore</span>
          Explore Tools
        </Link>
      </div>
    </div>
  );
}
