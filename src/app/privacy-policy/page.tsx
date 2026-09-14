import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { StructuredData } from "@/components/shared/StructuredData";
import {
  Lock,
  ShieldCheck,
  CreditCard,
  EyeOff,
  Database,
  Cookie,
  UserCheck,
  FileText,
  Mail,
  ArrowLeft,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AIToolsHaven",
  description:
    "Learn how AIToolsHaven collects, uses, protects, and handles your personal information, including Stripe payment security and GDPR/CCPA privacy rights.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | AIToolsHaven",
    description:
      "Learn how AIToolsHaven collects, uses, protects, and handles your personal data.",
    url: `${siteConfig.baseUrl}/privacy-policy`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AIToolsHaven Privacy Policy",
      },
    ],
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 14, 2026";

  const privacyPillars = [
    {
      icon: EyeOff,
      title: "Zero Data Selling",
      description:
        "We never sell, rent, or trade your personal information or browsing data to third-party data brokers.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: CreditCard,
      title: "Stripe Tokenization",
      description:
        "All payments are handled by Stripe via PCI-DSS Level 1 encryption. No raw card numbers ever touch our servers.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: UserCheck,
      title: "GDPR & CCPA Rights",
      description:
        "You retain complete rights to access, inspect, export, or request immediate deletion of your personal records.",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      icon: ShieldCheck,
      title: "Strict Editorial Firewall",
      description:
        "Analytics and advertising data are strictly quarantined and never influence directory rankings or benchmark scores.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
  ];

  const sections = [
    {
      id: "information-collected",
      num: "01",
      icon: Database,
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you subscribe to our newsletter, submit a tool for review, purchase a paid promotional tier, or contact us. This may include your name, email address, tool URL, social profiles, and transaction contact details.

We also automatically collect technical telemetry about your device and how you interact with our services, including anonymized IP address, browser type, device category, pages visited, and referring URLs. We use essential cookies and Google Analytics to compile aggregated performance metrics.`,
    },
    {
      id: "stripe-financial-data",
      num: "02",
      icon: CreditCard,
      title: "Payment Processing & Financial Data (Stripe)",
      content: `When you purchase a paid listing (such as the Growth Plan or Premium Spotlight) or advertising inventory on AIToolsHaven, payment processing is handled exclusively by Stripe, Inc.

• Zero Card Storage: We do NOT collect, process, or store your full credit card numbers, CVVs, or sensitive payment credentials on our servers.
• Bank-Grade Encryption: All transactions are encrypted and transmitted directly to Stripe under Payment Card Industry Data Security Standards (PCI-DSS Level 1).
• Limited Transaction Data: Stripe provides us only with essential audit details (transaction ID, payment date, gross amount, currency, and the card's last 4 digits) solely for accounting, tax verification, and order fulfillment.
• Stripe Privacy: You can review Stripe's Privacy Policy at https://stripe.com/privacy.`,
    },
    {
      id: "how-we-use-info",
      num: "03",
      icon: FileText,
      title: "How We Use Your Information",
      content: `We use collected information strictly to:

• Provide, operate, and maintain our AI tools directory, benchmark charts, and search features.
• Process submission fees, verify tool authentications, and fulfill paid placements within our 24–48h SLA.
• Send transactional receipts, listing publication confirmations, and editorial status updates.
• Deliver our email newsletter, product roundup alerts, or weekly updates (only when you have opted in).
• Respond promptly to customer support, editorial corrections, and partnership inquiries.
• Detect, prevent, and mitigate fraudulent tool submissions, spam wrappers, and malicious activities.`,
    },
    {
      id: "affiliate-disclosure",
      num: "04",
      icon: Lock,
      title: "Affiliate Tracking & External Referrals",
      content: `AIToolsHaven participates in affiliate referral programs. When you click outbound links to tools featured in our directory and make a purchase, we may receive a commission.

• Zero Surcharge: Affiliate links never increase the purchase price for you; in many cases, exclusive partner discounts may lower your cost.
• Editorial Independence: Affiliate compensation never dictates tool rankings, benchmark scores, or editorial reviews. (See our full /affiliate-disclosure).`,
    },
    {
      id: "information-sharing",
      num: "05",
      icon: EyeOff,
      title: "Information Sharing & Third-Party Processors",
      content: `We do not sell, trade, or rent personal data. We only share information with vetted service providers who assist us in operating our platform under strict confidentiality agreements:

• Payment Infrastructure: Stripe, Inc., for payment authorization, fraud mitigation, and billing.
• Analytics: Google Analytics (using anonymized IP collection) for directory traffic reporting.
• Database & Hosting: Supabase and Vercel cloud infrastructure with strict access controls and encryption at rest.

We may also disclose information if required by applicable law, subpoena, or to protect the safety, rights, or property of our users and the public.`,
    },
    {
      id: "cookies",
      num: "06",
      icon: Cookie,
      title: "Cookies & Tracking Technologies",
      content: `We use cookies and similar browser storage to authenticate sessions, remember preference settings, prevent fraud, and compile aggregated traffic metrics.

You can customize your cookie preferences anytime via our on-screen Cookie Consent banner or through your browser settings. For detailed information on our specific cookie types and expiration windows, read our complete Cookie Policy at /cookie-policy.`,
    },
    {
      id: "security-retention",
      num: "07",
      icon: ShieldCheck,
      title: "Data Retention & Security Safeguards",
      content: `We retain personal data only for as long as necessary to fulfill directory operations, honor active sponsorships, comply with tax and statutory accounting laws, and resolve disputes.

We implement robust administrative, technical, and physical security measures (including SSL/TLS transport encryption, restricted administrative access, and tokenized APIs) to safeguard personal data against unauthorized disclosure or loss.`,
    },
    {
      id: "user-rights",
      num: "08",
      icon: UserCheck,
      title: "Your Rights (GDPR, CCPA & Global Provisions)",
      content: `Depending on your location, you may exercise statutory rights regarding your personal data:

• Right of Access & Portability: Request a copy of the personal data we maintain about you.
• Right to Rectification: Correct inaccurate or outdated account or tool submission information.
• Right to Erasure ("Right to be Forgotten"): Request permanent deletion of your contact records.
• Right to Opt-Out: Unsubscribe from our newsletter at any time via the one-click unsubscribe link in every email.

To exercise any of these privacy rights, please email our privacy desk at aitoolshaven@gmail.com. We respond to all verified requests within 30 days without charge.`,
    },
    {
      id: "policy-updates",
      num: "09",
      icon: Sparkles,
      title: "Changes to This Privacy Policy",
      content: `We may revise this Privacy Policy periodically to reflect technological advancements, legal requirements, or adjustments to our services. Any updates will be published on this page with an updated "Last updated" timestamp. Continued use of AIToolsHaven after changes are posted indicates your consent.`,
    },
    {
      id: "contact",
      num: "10",
      icon: Mail,
      title: "Contact Our Privacy Officer",
      content: `For any questions, data deletion requests, or privacy concerns, please contact our team:

• Privacy Desk Email: aitoolshaven@gmail.com
• Online Portal: https://aitoolshaven.com/contact
• Estimated Response SLA: 24–48 business hours`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - AIToolsHaven",
    description: "Learn how AIToolsHaven collects, uses, and safeguards personal data, including Stripe payment protection and GDPR rights.",
    url: `${siteConfig.baseUrl}/privacy-policy`,
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
            <Lock className="w-3.5 h-3.5" />
            DATA PROTECTION &amp; PRIVACY NOTICE
          </div>

          <h1 className="text-fluid-h1 font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            At AIToolsHaven, we value your trust. This Privacy Policy details how we collect, process, safeguard, and respect your personal information when using our directory and advertising services.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Last Updated: {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              GDPR &amp; CCPA Compliant
            </span>
          </div>
        </div>
      </section>

      {/* Bento: Core Privacy Commitments */}
      <section className="py-12 sm:py-16 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
              Core Principles
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              How We Protect Your Personal Information
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {privacyPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-5 h-5" />
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
              <h3 className="text-xl font-bold mb-2">Have questions about your privacy rights?</h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Our privacy team can help you review, update, or delete your personal data records at any time.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/cookie-policy"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Cookie Policy
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
                Contact Privacy Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
