import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | AIToolsHaven",
  description: "Read the terms and conditions for using AIToolsHaven AI Tools Directory.",
};

export default function TermsPage() {
  const lastUpdated = "July 5, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using AIToolsHaven ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.`,
    },
    {
      title: "2. Description of Service",
      content: `AIToolsHaven is an AI tools directory and discovery platform. We curate, review, and list AI-powered tools to help users find the right software for their needs. The information provided on the platform is for informational purposes only.`,
    },
    {
      title: "3. User Conduct",
      content: `You agree not to:
• Use the Service for any unlawful purpose or in violation of any regulations
• Submit false, misleading, or fraudulent tool listings
• Attempt to gain unauthorized access to our systems
• Scrape or copy our directory data without explicit written permission
• Post spam, unsolicited communications, or malicious content`,
    },
    {
      title: "4. Tool Listings & Editorial Independence",
      content: `Tool listings on AIToolsHaven are based on our editorial assessment. We reserve the right to accept, reject, or remove any tool listing at our sole discretion. Paid placements and sponsored listings will be clearly marked as such. Our editorial reviews are independent and not influenced by commercial relationships.`,
    },
    {
      title: "5. Affiliate Links",
      content: `Some links on AIToolsHaven are affiliate links, meaning we may earn a commission if you click through and make a purchase. These links do not affect our editorial independence, and we only recommend tools we genuinely believe provide value to our users.`,
    },
    {
      title: "6. Intellectual Property",
      content: `The content on AIToolsHaven, including text, graphics, logos, and software, is the property of AIToolsHaven and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit written consent.`,
    },
    {
      title: "7. Disclaimer of Warranties",
      content: `The Service is provided "as is" without any warranties, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses. We are not responsible for the accuracy, completeness, or reliability of any tool descriptions or third-party content.`,
    },
    {
      title: "8. Limitation of Liability",
      content: `AIToolsHaven shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service or reliance on any information provided. Our total liability to you shall not exceed the amount you paid us in the past twelve months.`,
    },
    {
      title: "9. Changes to Terms",
      content: `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service constitutes acceptance of the revised Terms.`,
    },
    {
      title: "10. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.`,
    },
    {
      title: "11. Contact",
      content: `If you have questions about these Terms, please contact us at: legal@aitoolshaven.com`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors mb-8"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Home
        </Link>
        <h1 className="text-4xl font-black text-slate-900 mt-4 mb-3">
          Terms of Service
        </h1>
        <p className="text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Please read these Terms of Service carefully before using AIToolsHaven. These terms
          govern your access to and use of our website and services.
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
