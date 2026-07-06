import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AIToolsHaven | The Best AI Tools Directory",
  description:
    "AIToolsHaven is a curated AI tools directory helping creators, developers, and entrepreneurs discover the best AI software for their needs.",
};

const stats = [
  { value: "2,500+", label: "AI Tools Indexed" },
  { value: "50+", label: "Categories" },
  { value: "10K+", label: "Monthly Users" },
  { value: "100%", label: "Independent" },
];

const values = [
  {
    icon: "verified",
    title: "Editorially Independent",
    description:
      "Our reviews and rankings are based on genuine merit. Sponsored placements are always clearly labeled — we will never bury that disclosure.",
  },
  {
    icon: "groups",
    title: "Built for Builders",
    description:
      "We are practitioners first, directory builders second. Every tool we feature is evaluated through the lens of someone who would actually use it.",
  },
  {
    icon: "update",
    title: "Constantly Updated",
    description:
      "AI moves fast. We monitor the space daily and add new tools, update pricing information, and retire outdated listings to keep the directory fresh.",
  },
  {
    icon: "open_in_new",
    title: "Transparent About Affiliates",
    description:
      "Some of our links are affiliate links. We earn a small commission at no cost to you. This helps us keep the lights on without charging users.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-bold mb-6">
          <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
          About AIToolsHaven
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
          The world's most curated<br />
          <span className="text-primary">AI tools directory.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          We built AIToolsHaven because we were tired of bloated, out-of-date tool lists.
          Our mission is to help you find the right AI tool fast — and trust what you find.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl bg-slate-50 border border-slate-100 p-8 text-center"
          >
            <p className="text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Our Values */}
      <div className="mb-24">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Our Values</h2>
        <p className="text-slate-500 mb-10">What we stand for and how we operate.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{v.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[32px] bg-slate-950 p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 h-64 w-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">
            Have a tool we should feature?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Submit your AI tool for review. If it meets our quality bar, we'll add it to the directory and help it reach thousands of early adopters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-900 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              Submit Your Tool
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
