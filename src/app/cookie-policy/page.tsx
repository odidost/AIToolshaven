import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { StructuredData } from "@/components/shared/StructuredData";
import {
  Cookie,
  ShieldCheck,
  Layers,
  Settings,
  Clock,
  Lock,
  Mail,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  SlidersHorizontal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | AIToolsHaven",
  description:
    "Learn how AIToolsHaven uses cookies and tracking technologies to improve directory navigation, secure Stripe checkouts, and maintain privacy.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/cookie-policy`,
  },
  openGraph: {
    title: "Cookie Policy | AIToolsHaven",
    description:
      "Learn how AIToolsHaven uses cookies and tracking technologies to improve your experience.",
    url: `${siteConfig.baseUrl}/cookie-policy`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AIToolsHaven Cookie Policy",
      },
    ],
    type: "website",
  },
};

export default function CookiePolicyPage() {
  const lastUpdated = "September 14, 2026";

  const cookieCategories = [
    {
      icon: Lock,
      title: "Strictly Necessary",
      tag: "ALWAYS ACTIVE",
      description:
        "Essential for core directory navigation, CSRF security tokens, and user account session authentication.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: ShieldCheck,
      title: "Payment & Fraud (Stripe)",
      tag: "SECURITY REQUIRED",
      description:
        "Stripe anti-fraud telemetry used strictly to verify card authentications and block malicious checkout bots.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Layers,
      title: "Aggregated Analytics",
      tag: "ANONYMIZED",
      description:
        "Google Analytics measurement of popular tools and visitor journeys using masked, non-identifiable IP hashes.",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      icon: SlidersHorizontal,
      title: "User Preferences",
      tag: "OPTIONAL",
      description:
        "Stores dark/light theme toggles, bookmarked tools, and your cookie consent preference across browser visits.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
  ];

  const sections = [
    {
      id: "what-are-cookies",
      num: "01",
      icon: Cookie,
      title: "What Are Cookies?",
      content: `Cookies are small data files placed on your computer, tablet, or smartphone when you visit a website. They are widely used by online services to make web pages function efficiently, remember user preferences, and provide analytical reporting.

Cookies set directly by AIToolsHaven are known as "first-party cookies". Cookies set by external partners (such as payment networks or analytics scripts) are known as "third-party cookies".`,
    },
    {
      id: "why-we-use-cookies",
      num: "02",
      icon: Settings,
      title: "Why Do We Use Cookies?",
      content: `AIToolsHaven uses cookies and local browser storage to:

• Ensure fundamental platform infrastructure operates reliably and securely.
• Remember your theme preferences (light vs dark mode) and directory bookmarking state.
• Authenticate directory contributors and maintain session security.
• Safeguard the platform from automated denial-of-service, spam submissions, and checkout fraud.
• Measure directory traffic anonymously so we know which tool categories require expanded coverage.`,
    },
    {
      id: "cookie-classifications",
      num: "03",
      icon: Layers,
      title: "Categories of Cookies We Use",
      content: `We group the cookies deployed across aitoolshaven.com into four distinct operational classes:

A. Strictly Necessary Cookies
These cookies are technically required for our website to operate. They allow you to navigate securely, authenticate sessions, and load dynamic pages. They do not store any personally identifiable data and cannot be switched off in our systems.

B. Security & Payment Processing Cookies (Stripe)
When you submit a paid tool listing or purchase advertising inventory, our payment processor (Stripe, Inc.) deploys security cookies (such as __stripe_mid and __stripe_sid) to prevent credit card fraud and satisfy PCI-DSS Level 1 compliance standards.

C. Performance & Analytics Cookies (Google Analytics)
These cookies gather aggregated, non-personally identifiable telemetry regarding how visitors discover and navigate our directory. We use this data to identify 404 broken links, measure category popularity, and improve search speeds.

D. Preference & Functional Storage
These items save your interface selections (such as your cookie consent choice and saved tools) locally on your device so your settings remain intact when you return.`,
    },
    {
      id: "third-party-partners",
      num: "04",
      icon: ExternalLink,
      title: "Third-Party Services Operating Cookies",
      content: `We work with reputable technology infrastructure providers that may set cookies or tokens on your browser:

• Stripe, Inc.: Payment fraud mitigation, tokenized credit card authorization, and anti-bot protection. (https://stripe.com/privacy)
• Google Analytics: Aggregated traffic measurement with IP masking enabled. (https://policies.google.com/privacy)
• Supabase: Session tokens and authenticated database access for directory administrators. (https://supabase.com/privacy)`,
    },
    {
      id: "managing-preferences",
      num: "05",
      icon: SlidersHorizontal,
      title: "How Can You Manage or Disable Cookies?",
      content: `You have complete control over cookies on AIToolsHaven:

1. Through Our Consent Banner:
When you first access AIToolsHaven, our floating consent banner enables you to choose between "Accept All" or "Essential Only" cookies. Your preference is preserved across visits.

2. Browser Controls:
Every major web browser allows you to review, block, or delete cookies through its settings menu:
• Chrome: Settings > Privacy and security > Third-party cookies
• Firefox: Preferences > Privacy & Security > Cookies and Site Data
• Safari: Preferences > Privacy > Manage Website Data
• Edge: Settings > Cookies and site permissions

Please note that blocking essential cookies may disrupt site navigation, account logins, or Stripe checkout capabilities.`,
    },
    {
      id: "retention-lifespan",
      num: "06",
      icon: Clock,
      title: "Cookie Lifespan & Storage Duration",
      content: `Cookies used on AIToolsHaven fall into two lifespan classes:

• Session Cookies: Temporary cookies that exist only during your active browsing session and are erased as soon as you close your browser.
• Persistent Cookies: Stored on your device for a defined expiration period (ranging from 30 days up to a maximum of 12 months) to remember return visits and user consent states.`,
    },
    {
      id: "policy-revisions",
      num: "07",
      icon: ShieldCheck,
      title: "Updates to This Cookie Policy",
      content: `We may revise this Cookie Policy periodically to reflect changes in regulatory standards or directory features. We encourage you to review this page periodically for the latest information on our cookie practices.`,
    },
    {
      id: "contact",
      num: "08",
      icon: Mail,
      title: "Contact Our Compliance Desk",
      content: `If you have questions regarding our use of cookies or tracking technologies, please contact us:

• Email: aitoolshaven@gmail.com
• Contact Form: https://aitoolshaven.com/contact
• Response Time: Within 24–48 business hours`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy - AIToolsHaven",
    description: "Learn how AIToolsHaven uses cookies and tracking technologies to improve directory navigation, secure Stripe checkouts, and maintain privacy.",
    url: `${siteConfig.baseUrl}/cookie-policy`,
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-24 relative overflow-hidden">
      <StructuredData data={jsonLd} />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Cookie className="w-3.5 h-3.5" />
            COOKIE USAGE &amp; TRACKING NOTICE
          </div>

          <h1 className="text-fluid-h1 font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Cookie Policy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            This Cookie Policy explains how and why AIToolsHaven uses cookies, local storage, and similar technologies to ensure directory performance, safeguard Stripe transactions, and respect your privacy choices.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Last Updated: {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              User-Controlled Preferences
            </span>
          </div>
        </div>
      </section>

      {/* Bento: Cookie Classifications */}
      <section className="py-12 sm:py-16 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
              Cookie Taxonomy
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              How We Classify Browser Storage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {cookieCategories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Legal Sections */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-slate-400 block mb-0.5">
                        SECTION {section.num}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line pl-0 sm:pl-14">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Cross Links Footer */}
      <section className="pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Need to adjust your privacy settings?</h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Explore our full privacy practices or reach out to our data protection desk with questions.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl bg-primary text-slate-950 text-xs font-bold hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
