import { siteConfig } from "@/lib/config/site";

export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQItem[] = [
  {
    question: "What is AIToolsHaven and how are tools verified?",
    answer: "AIToolsHaven is a human-curated directory of 1,000+ artificial intelligence tools, platforms, and models. Unlike automated scrapers, our editorial team manually inspects each software for active development, pricing accuracy, API availability, and real user utility before listing."
  },
  {
    question: "Can I find completely free AI tools on AIToolsHaven?",
    answer: "Yes. You can filter our catalog specifically for 100% Free AI software, open-source repositories, and freemium platforms that provide generous recurring monthly free tiers without requiring a credit card."
  },
  {
    question: "What is the difference between a standalone AI Tool, a Workflow, and a Mission?",
    answer: "An AI Tool is an individual software application (e.g., Claude, Midjourney). An AI Workflow is a multi-step pipeline chaining 2 to 4 tools together to automate complex deliverables (e.g., Podcast to Short-Form Video). A Mission is an actionable business blueprint showing how to monetize AI stacks to generate recurring revenue."
  },
  {
    question: "How do I choose the best AI tool for my specific role or business?",
    answer: "You can use our interactive AI Tool Recommender on the homepage, browse tools curated specifically for content creators, freelancers, developers, or small businesses, or compare competing platforms side-by-side using our Head-to-Head Comparison matrix."
  },
  {
    question: "How frequently is the directory updated with new AI tools?",
    answer: "Our directory is updated daily. We continuously verify pricing changes, retire deprecated wrappers, add major model updates (such as Claude 3.7, GPT-4.5, and Flux 1.1), and review submissions from indie developers."
  },
  {
    question: "How do I submit my AI tool or product to AIToolsHaven?",
    answer: "Indie founders and AI product teams can submit their software through our official Submit Tool portal. Our editorial team reviews every submission within 48 to 72 hours to verify working features, validate pricing models, and assign relevant categories and workflows."
  },
  {
    question: "Are the reviews and ratings on AIToolsHaven authentic?",
    answer: "Yes. We maintain strict editorial transparency. We do not generate synthetic ratings or fake placeholder reviews. Every score is based on direct hands-on testing, verified feature specifications, and real user evaluations submitted through our platform."
  },
  {
    question: "Can the AI tools listed here integrate with my existing tech stack via API?",
    answer: "Many of the tools in our catalog offer full developer APIs, webhooks, and native integrations with popular automation platforms like Zapier, Make, and GitHub. You can check the Technical Specifications on each tool profile to verify API support before signing up."
  },
  {
    question: "What are the best AI tools for beginners with no coding experience?",
    answer: "For non-technical creators and small business owners, we recommend starting with visual, prompt-guided tools like ChatGPT or Claude for research and drafting, Canva Magic Studio for visual design, Writesonic for marketing copy, and Opus Clip for 1-click video repurposing."
  },
  {
    question: "How does AIToolsHaven evaluate user privacy and data security?",
    answer: "We examine each platform's data retention and training policies. We actively verify whether user prompts are used to train public foundation models, whether enterprise SOC2/GDPR compliance is maintained, and whether platforms offer private workspaces or self-hosted deployment options."
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
    "description": "The human-curated directory of 1,000+ verified AI tools, workflows, and business monetization blueprints.",
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
