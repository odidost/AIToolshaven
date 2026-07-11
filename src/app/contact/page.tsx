import type { Metadata } from "next";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

export const metadata: Metadata = {
  title: "Contact Us | AIToolsHaven",
  description: "Get in touch with the AIToolsHaven team for partnerships, tool submissions, press inquiries, or support.",
};

const reasons = [
  { icon: "rocket_launch", title: "Submit a Tool", description: "Want to list your AI tool?", href: "/submit" },
  { icon: "business", title: "Sponsorships", description: "Advertise to our audience", href: "/submit" },
  { icon: "newspaper", title: "Press & Media", description: "Press kit and interviews", href: "mailto:press@aitoolshaven.com" },
  { icon: "bug_report", title: "Report an Issue", description: "Found a bug or bad listing?", href: "mailto:support@aitoolshaven.com" },
];

export default function ContactPage() {
  return (
    <ContentContainer className="py-16 md:py-24">

      {/* Header */}
      <div className="mb-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors mb-8"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4">
          Let&apos;s talk.
        </h1>
        <p className="text-xl text-slate-500 max-w-xl mx-auto">
          Whether you&apos;re a founder looking to list your tool, a brand wanting to sponsor, or just have a question — we&apos;d love to hear from you.
        </p>
      </div>

      {/* Contact Reason Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {reasons.map((r) => (
          <a
            key={r.title}
            href={r.href}
            className="group rounded-3xl border border-slate-200 bg-white p-8 flex items-center gap-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
          >
            <div className="h-14 w-14 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">{r.icon}</span>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg">{r.title}</p>
              <p className="text-slate-500 text-sm">{r.description}</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 ml-auto group-hover:text-primary transition-colors">arrow_forward</span>
          </a>
        ))}
      </div>

      {/* General Email */}
      <div className="rounded-[32px] bg-slate-50 border border-slate-100 p-10 md:p-14 text-center">
        <span className="material-symbols-outlined text-5xl text-primary mb-4 block">mail</span>
        <h2 className="text-2xl font-black text-slate-900 mb-3">
          General Enquiries
        </h2>
        <p className="text-slate-500 mb-6 max-w-sm mx-auto">
          For anything not covered above, drop us a line at:
        </p>
        <a
          href="mailto:hello@aitoolshaven.com"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          hello@aitoolshaven.com
          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
        </a>
        <p className="text-xs text-slate-400 mt-6">We typically respond within 1-2 business days.</p>
      </div>
    </ContentContainer>
  );
}
