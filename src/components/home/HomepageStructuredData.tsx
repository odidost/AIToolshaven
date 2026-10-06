import { siteConfig } from "@/lib/config/site";

export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQItem[] = [
  {
    question: "How do I compare AI tools effectively on AIToolsHaven?",
    answer: "You can compare AI tools side-by-side using our Head-to-Head Comparison hub (/compare-tools). We evaluate competing tools across primary capabilities, prompt responsiveness, output fidelity, pricing models, and workflow integrations without biased scoring or sponsored influence."
  },
  {
    question: "What should I look for when comparing AI tools for my project?",
    answer: "When you compare AI tools, focus on recurring free tier limits versus paid subscriptions, context window capacity, developer API availability, output accuracy, and whether the tool integrates natively into your existing team workflow."
  },
  {
    question: "How does AIToolsHaven choose which AI tools to compare side-by-side?",
    answer: "We prioritize matchups based on real user search demand, migration trends, and direct software competitors in high-traffic categories—such as Cursor vs GitHub Copilot for coding, ChatGPT vs Claude for foundation models, and HeyGen vs Synthesia for video creation."
  },
  {
    question: "How do I find verified alternatives to popular AI tools?",
    answer: "Our curated Alternatives directory groups verified competitors by specific advantages—such as local open-source privacy (Stable Diffusion instead of Midjourney), larger document context windows (Claude instead of ChatGPT), or generous free individual tiers (Codeium instead of Copilot)."
  },
  {
    question: "Can I choose AI tools by specific project goals rather than categories?",
    answer: "Yes. Our Goal-Driven discovery section (/goals) organizes tools and automated workflows by practical commercial and creative objectives—including vibe coding, faceless YouTube channel production, marketing agency delivery, and academic research."
  },
  {
    question: "Are the AI tool pricing tiers and feature comparisons verified?",
    answer: "Yes. Our editorial team regularly audits pricing pages, API terms, and platform limits. Any sponsored placement or affiliate partnership is strictly labeled and never influences our organic tool comparisons or rankings."
  }
];

export function HomepageStructuredData() {
  const isLocalhost = siteConfig.baseUrl?.includes("localhost");
  const baseUrl = isLocalhost ? "https://aitoolshaven.com" : (siteConfig.baseUrl || "https://aitoolshaven.com");
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  const currentDate = new Date().toISOString().split('T')[0];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${cleanBase}/#website`,
    "url": cleanBase,
    "name": "AIToolsHaven",
    "description": "Compare 1,200+ AI tools for your next project. Explore head-to-head comparisons, find alternatives, and choose tools by goal.",
    "dateModified": currentDate,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${cleanBase}/categories?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${cleanBase}/#organization`,
    "name": "AIToolsHaven",
    "url": cleanBase,
    "logo": {
      "@type": "ImageObject",
      "url": `${cleanBase}/opengraph-image`,
      "width": 1200,
      "height": 630
    },
    "sameAs": [
      siteConfig.socialLinks.x,
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.youtube
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": siteConfig.organization.email,
      "contactType": "customer support"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
