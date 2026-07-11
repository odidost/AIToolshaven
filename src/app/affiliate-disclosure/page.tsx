import type { Metadata } from "next";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Learn about AIToolsHaven's affiliate relationships and how we fund the platform.",
};

export default function AffiliateDisclosurePage() {
  const lastUpdated = "July 5, 2026";

  return (
    <ContentContainer className="py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
          <span className="material-symbols-outlined text-base">info</span>
          Legal
        </div>
        <h1 className="text-4xl font-black text-on-surface mb-4">
          Affiliate Disclosure
        </h1>
        <p className="text-on-surface-variant">
          Last updated: <strong>{lastUpdated}</strong>
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-10">
        <section>
          <p className="text-on-surface-variant leading-8 text-lg font-medium">
            AIToolsHaven is reader-supported. When you buy through links on our site, we may earn an affiliate commission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-3">
            Why do we use affiliate links?
          </h2>
          <p className="text-on-surface-variant leading-8">
            Running a comprehensive AI tools directory requires significant resources, including server costs, maintenance, and research. Affiliate links provide a way for us to fund these operations without charging users to browse the directory or bombarding the site with intrusive display ads.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-3">
            How does it work?
          </h2>
          <p className="text-on-surface-variant leading-8">
            When you click on a link to a tool from AIToolsHaven and make a purchase or sign up for a premium plan, we may receive a small commission from the tool provider. This comes at <strong>absolutely no additional cost to you</strong>. The price you pay is exactly the same whether you use our link or go directly to the provider&apos;s website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-3">
            Does this affect our ratings and reviews?
          </h2>
          <p className="text-on-surface-variant leading-8">
            <strong>No.</strong> Our editorial integrity is our most valuable asset. We rank, review, and feature tools based on their quality, features, and value to the user—not based on affiliate relationships. We list many tools that do not have affiliate programs, and we will highlight the flaws of a tool even if we are affiliated with it.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-3">
            Federal Trade Commission (FTC) Compliance
          </h2>
          <p className="text-on-surface-variant leading-8">
            In compliance with the FTC guidelines, please assume that any outbound link on aitoolshaven.com leading to a software provider or product is an affiliate link.
          </p>
        </section>
      </div>

      {/* Related links */}
      <div className="mt-16 pt-8 border-t border-outline flex flex-wrap gap-4">
        <Link
          href="/privacy-policy"
          className="text-sm text-primary hover:underline font-medium"
        >
          Privacy Policy →
        </Link>
        <Link
          href="/terms"
          className="text-sm text-primary hover:underline font-medium"
        >
          Terms of Service →
        </Link>
      </div>
    </ContentContainer>
  );
}
