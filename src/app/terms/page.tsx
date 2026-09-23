import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { StructuredData } from "@/components/shared/StructuredData";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Clock,
  Scale,
  AlertTriangle,
  RefreshCw,
  Mail,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Ban,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | AIToolsHaven",
  description:
    "Read the terms and conditions for using AIToolsHaven AI Tools Directory, including paid listing terms, Stripe payment security, and fulfillment policies.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/terms`,
  },
  openGraph: {
    title: "Terms of Service | AIToolsHaven",
    description:
      "Read the terms and conditions for using AIToolsHaven AI Tools Directory, including paid listing terms and fulfillment policies.",
    url: `${siteConfig.baseUrl}/terms`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AIToolsHaven Terms of Service",
      },
    ],
    type: "website",
  },
};

export const revalidate = 86400;

export default function TermsPage() {
  const lastUpdated = "September 14, 2026";

  const keyHighlights = [
    {
      icon: CreditCard,
      title: "Stripe-Secured Billing",
      description:
        "All payments are handled via Stripe (PCI-DSS Level 1). We never store or inspect full payment card data.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: ShieldCheck,
      title: "100% Refund Guarantee",
      description:
        "If our editorial testing desk rejects your paid tool submission for quality or safety, you receive an immediate 100% refund.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Clock,
      title: "24–48h Fulfillment SLA",
      description:
        "Paid directory submissions enter active testing within 24–48 business hours with live directory deployment upon approval.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Scale,
      title: "Fair Editorial Standards",
      description:
        "Payment guarantees priority review and badge verification, never an unearned positive rating or artificial review score.",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
  ];

  const sections = [
    {
      id: "acceptance",
      num: "01",
      icon: FileText,
      title: "Acceptance of Terms",
      content: `By accessing or using AIToolsHaven ("the Service", "we", "us", or "our"), accessible at aitoolshaven.com, you agree to be bound by these Terms of Service, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

These terms apply to all visitors, registered users, software creators, advertisers, and others who access or use the Service.`,
    },
    {
      id: "description",
      num: "02",
      icon: Building2,
      title: "Description of Service",
      content: `AIToolsHaven operates an independent AI software discovery directory, workflow research hub, and benchmarking platform. We curate, evaluate, categorize, and showcase artificial intelligence tools, productivity applications, and automated workflows.

While we strive to keep information accurate, tool specifications, pricing, model capabilities, and availability change frequently. The content on AIToolsHaven is for informational, comparative, and promotional purposes.`,
    },
    {
      id: "paid-services",
      num: "03",
      icon: CreditCard,
      title: "Paid Services & Directory Submissions",
      content: `We offer paid promotional, priority review, and advertising services for software creators, founders, and companies:

• Growth Plan ($100 one-time): Expedited editorial review within 24–48 hours, verified directory badge, and permanent category listing.
• Premium Spotlight ($150 one-time): Same-day/priority editorial testing, homepage spotlight placement, and matchup arena qualification.
• Advertising & Sponsorships: Contextual link insertions, turnkey sponsored articles, category takeovers, and newsletter placements (as detailed at /advertise).

All prices are stated in US Dollars (USD). We reserve the right to revise our standard pricing at any time; changes will not apply retroactively to already confirmed orders.`,
    },
    {
      id: "stripe-billing",
      num: "04",
      icon: ShieldCheck,
      title: "Payments & Billing via Stripe",
      content: `All payments made on AIToolsHaven are processed securely through Stripe, Inc., a certified PCI-DSS Level 1 payment service provider.

• Zero Card Storage: We do not store, process, or transmit your complete credit card numbers, CVVs, or bank credentials on our infrastructure.
• Authorization: By submitting payment, you authorize us (via Stripe) to charge your chosen payment method for the agreed amount in USD.
• Invoicing: Stripe generates an electronic transaction receipt and invoice sent to the billing email address supplied at checkout.`,
    },
    {
      id: "fulfillment-sla",
      num: "05",
      icon: Clock,
      title: "Digital Delivery & Fulfillment SLA",
      content: `Our paid offerings are intangible digital editorial and promotional services:

• Testing Window: Upon successful payment, your submission enters our editorial evaluation queue and is tested within 24 to 48 business hours.
• Instant Publication: Upon editorial approval, your tool listing or sponsored placement goes live immediately on aitoolshaven.com.
• Confirmation: You will receive an automated email notification confirming live publication with your public directory URL.`,
    },
    {
      id: "refunds",
      num: "06",
      icon: RefreshCw,
      title: "Cancellations & Refund Policy",
      content: `Our refund and cancellation policies are governed by our dedicated Refund & Cancellation Policy (available at /refund-policy):

• 100% Full Refund Guarantee: If your tool submission fails our editorial evaluation desk (e.g. broken software, spam wrappers, or security concerns), we will decline the listing and immediately issue a 100% full refund to your original payment method.
• Cancellation Before Review: If you cancel your submission before our testing desk has commenced evaluation, a full refund will be granted.
• Delivered Listings: Once a listing or sponsored post has been approved and published live on the directory, the service is deemed fully delivered and is non-refundable.`,
    },
    {
      id: "user-conduct",
      num: "07",
      icon: Ban,
      title: "User Conduct & Submission Standards",
      content: `When using our site or submitting tools for review, you agree NOT to:

• Submit fraudulent, non-functional, misleading, malicious, or plagiarized AI tools or deceptive clone wrappers.
• Misrepresent affiliation with third-party brands, trademarks, or developers.
• Attempt to compromise site security, bypass authentication, flood our infrastructure, or harvest directory data via automated scraping without written permission.
• Submit tools that facilitate unlawful activity, malware distribution, or non-consensual content generation.`,
    },
    {
      id: "intellectual-property",
      num: "08",
      icon: Scale,
      title: "Intellectual Property Rights",
      content: `The visual interfaces, design systems, editorial ratings, reviews, compilation databases, and software behind AIToolsHaven are owned by AIToolsHaven and protected by copyright and intellectual property laws.

Third-party logos, product names, and screenshots featured in our directory remain the intellectual property of their respective owners. Their inclusion does not imply exclusive endorsement by the copyright holder.`,
    },
    {
      id: "affiliate-disclosure",
      num: "09",
      icon: ExternalLink,
      title: "Affiliate Disclosure & External Links",
      content: `AIToolsHaven participates in affiliate referral programs. When you click external links to third-party tools and make a purchase, we may receive an affiliate commission at zero additional cost to you.

Our editorial opinions, benchmark evaluations, and rankings are governed strictly by our Editorial Policy and are never altered by commercial partnerships. We are not responsible for the content, privacy policies, or business practices of third-party websites linked from our directory.`,
    },
    {
      id: "disclaimer",
      num: "10",
      icon: AlertTriangle,
      title: "Disclaimer of Warranties & Limitation of Liability",
      content: `AIToolsHaven is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied. We do not guarantee that third-party AI software will meet your specific technical or commercial requirements.

To the fullest extent permitted by law, AIToolsHaven and its operators shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from your use of the directory or third-party tools discovered herein.`,
    },
    {
      id: "modifications",
      num: "11",
      icon: RefreshCw,
      title: "Modifications to Terms",
      content: `We reserve the right to modify or replace these Terms of Service at any time. Material changes will be noted on this page with an updated "Last updated" date. Continued use of our Service following any changes constitutes acceptance of the new terms.`,
    },
    {
      id: "contact",
      num: "12",
      icon: Mail,
      title: "Contact & Legal Inquiries",
      content: `If you have questions, feedback, or legal inquiries regarding these Terms of Service, please reach out to us:

• Legal Desk Email: aitoolshaven@gmail.com
• Online Form: https://aitoolshaven.com/contact
• Response Time: Within 24–48 business hours`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service - AIToolsHaven",
    description: "Terms and conditions, paid listing guidelines, and Stripe payment terms for AIToolsHaven.",
    url: `${siteConfig.baseUrl}/terms`,
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
            <Scale className="w-3.5 h-3.5" />
            LEGAL &amp; COMPLIANCE AGREEMENT
          </div>

          <h1 className="text-fluid-h1 font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Terms of Service
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Please read these Terms of Service carefully before browsing AIToolsHaven or purchasing paid directory listings and advertising inventory.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Last Updated: {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              PCI-DSS Level 1 via Stripe
            </span>
          </div>
        </div>
      </section>

      {/* Key Highlights Bento */}
      <section className="py-12 sm:py-16 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
              At A Glance
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Key Protections &amp; Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {keyHighlights.map((item) => {
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
              <h3 className="text-xl font-bold mb-2">Related Legal &amp; Trust Policies</h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Review our companion policies regarding data privacy, cookie tracking, refunds, and editorial guidelines.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/refund-policy"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="/privacy-policy"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Cookie Policy
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
