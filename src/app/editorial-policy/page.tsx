import type { Metadata } from "next";
import { ContentContainer } from "@/components/layout/ContentContainer";

export const metadata: Metadata = {
  title: "Editorial Policy | AIToolsHaven",
  description: "Learn about how AIToolsHaven selects, reviews, and ranks AI tools, and our commitment to objective, helpful content.",
};

export default function EditorialPolicyPage() {
  return (
    <ContentContainer className="py-16 md:py-24">
      <h1 className="text-fluid-h1 font-black text-slate-900 mb-6">
        Editorial Policy
      </h1>
      <p className="text-lg text-slate-600 mb-10">
        Last Updated: July 11, 2026
      </p>

      <div className="prose prose-slate prose-lg max-w-none">
        <p>
          At AIToolsHaven, our mission is to help creators, developers, and entrepreneurs discover the best AI software for their needs. To achieve this, we maintain a strict editorial policy that prioritizes objectivity, accuracy, and usefulness.
        </p>

        <h2>How We Select AI Tools</h2>
        <p>
          We do not list every AI tool that exists. Our directory is highly curated. We discover tools through industry research, community recommendations, and direct submissions. Before a tool is added to our directory, it must meet our baseline criteria for functionality, security, and genuine user value. We reject tools that appear to be quick clones or wrappers without unique value propositions.
        </p>

        <h2>How Reviews Are Researched and Updated</h2>
        <p>
          Our editorial team evaluates each tool firsthand whenever possible. We test the core features, analyze the pricing models, and compare the tool against its closest competitors. We synthesize this hands-on experience with aggregated community feedback and verified user reviews to formulate our <strong>Expert Verdict</strong>.
        </p>
        <p>
          The AI landscape evolves rapidly. We continuously monitor the tools in our directory and update our content to reflect new feature releases, pricing changes, and shifts in the competitive landscape. If a tool significantly degrades in quality, we will update our review or remove it from the directory entirely.
        </p>

        <h2>Influence of Paid Listings</h2>
        <p>
          <strong>Paid listings do not influence our editorial opinions or rankings.</strong> While we offer sponsored placements to help sustain our operations, these are always clearly labeled as "Sponsored" or "Ad". Our core ratings, pros and cons, and expert verdicts are strictly insulated from commercial relationships.
        </p>

        <h2>Affiliate Relationships</h2>
        <p>
          AIToolsHaven participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites. However, this does not dictate our recommendations. We prioritize the best tool for the job, regardless of whether it offers an affiliate program. For more details, please read our <a href="/affiliate-disclosure">Affiliate Disclosure</a>.
        </p>

        <h2>Corrections and Updates</h2>
        <p>
          We strive for 100% accuracy, but errors can happen. When a factual error is identified, we correct it promptly and update the "Last Updated" date on the respective page. If you spot an inaccuracy, please contact us.
        </p>

        <h2>Our Commitment to You</h2>
        <p>
          Every piece of content on AIToolsHaven is written and reviewed by our editorial team. We are committed to providing you with objective, helpful, and deeply researched content that empowers you to make informed decisions about your AI software stack.
        </p>
      </div>
    </ContentContainer>
  );
}
