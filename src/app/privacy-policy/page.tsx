import type { Metadata } from "next";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

export const metadata: Metadata = {
  title: "Privacy Policy | AIToolsHaven",
  description: "Learn how AIToolsHaven collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 5, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, such as when you subscribe to our newsletter, submit a tool, or contact us. This may include your name, email address, and any other information you choose to provide.

We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, pages visited, and referring URLs. We use cookies and similar tracking technologies to collect this information.`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Send you newsletters and updates you've subscribed to
• Respond to your comments and questions
• Monitor and analyze usage patterns and trends
• Detect and prevent fraudulent transactions and other illegal activities`,
    },
    {
      title: "3. Affiliate Disclosure",
      content: `AIToolsHaven participates in affiliate marketing programs. This means we may earn a commission when you click on links to tools and services featured on our platform and make a purchase. This comes at no additional cost to you. We only recommend tools we genuinely believe in, and our editorial content is not influenced by affiliate relationships.`,
    },
    {
      title: "4. Information Sharing",
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website (e.g., email providers, analytics services), subject to confidentiality agreements. We may also disclose your information if required by law.`,
    },
    {
      title: "5. Cookies",
      content: `We use cookies to enhance your experience on our site. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our service may not function properly.`,
    },
    {
      title: "6. Data Retention",
      content: `We retain your personal information for as long as necessary to provide you with our services and as described in this privacy policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.`,
    },
    {
      title: "7. Your Rights",
      content: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at the email address below.`,
    },
    {
      title: "8. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.`,
    },
    {
      title: "9. Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us at: privacy@aitoolshaven.com`,
    },
  ];

  return (
    <ContentContainer className="py-16 md:py-24">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors mb-8"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Home
        </Link>
        <h1 className="text-4xl font-black text-slate-900 mt-4 mb-3">
          Privacy Policy
        </h1>
        <p className="text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          At AIToolsHaven, we take your privacy seriously. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit our
          website and use our services.
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
    </ContentContainer>
  );
}
