import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { StructuredData } from "@/components/shared/StructuredData";
import {
  RefreshCw,
  ShieldCheck,
  Clock,
  Ban,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Mail,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | AIToolsHaven",
  description:
    "Read the 100% refund guarantee, cancellation guidelines, and Stripe processing timelines for paid tool submissions and advertising on AIToolsHaven.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/refund-policy`,
  },
  openGraph: {
    title: "Refund & Cancellation Policy | AIToolsHaven",
    description:
      "Read the 100% refund guarantee and cancellation guidelines for paid tool submissions and advertising on AIToolsHaven.",
    url: `${siteConfig.baseUrl}/refund-policy`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AIToolsHaven Refund Policy",
      },
    ],
    type: "website",
  },
};

export const revalidate = 86400;

export default function RefundPolicyPage() {
  const lastUpdated = "September 14, 2026";

  const guaranteePillars = [
    {
      icon: ShieldCheck,
      title: "100% Rejection Refund",
      description:
        "If our testing desk determines your software does not meet our safety or quality baseline, you receive an immediate, full refund.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Clock,
      title: "24–48h SLA Window",
      description:
        "We commit to evaluating paid submissions within 24–48 business hours or priority same-day for Premium Spotlight tiers.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: DollarSign,
      title: "Zero Penalty Fees",
      description:
        "We never penalize creators or withhold processing charges when an editorial rejection refund is executed.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: CreditCard,
      title: "Direct Stripe Reversal",
      description:
        "Refunds are credited directly to your original payment card via Stripe and typically post within 5–10 business days.",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
  ];

  const sections = [
    {
      id: "overview",
      num: "01",
      icon: RefreshCw,
      title: "Overview of Digital Services",
      content: `AIToolsHaven (aitoolshaven.com) provides software discovery, independent benchmark evaluation, and digital directory placement services for artificial intelligence developers, software creators, and tech companies.

Our paid services include:
• Growth Plan ($100 one-time): Expedited 24–48h editorial testing, verified badge, and permanent category directory profile.
• Premium Spotlight ($150 one-time): Same-day priority review, homepage spotlight placement, and matchup arena qualification.
• Custom Advertising & Sponsorships: Turnkey sponsored write-ups, contextual link insertions, and category takeovers.

All purchases are for intangible digital services, testing resources, and digital promotional placement. No physical items are shipped.`,
    },
    {
      id: "sla-fulfillment",
      num: "02",
      icon: Clock,
      title: "Digital Delivery & Fulfillment SLA",
      content: `Upon successful payment through our secure payment gateway (Stripe):

• Evaluation Queue: Submissions immediately enter our editorial testing queue.
• Standard Delivery: Growth Plan listings are evaluated and processed within 24 to 48 business hours.
• Priority Delivery: Premium Spotlight submissions receive priority testing, typically evaluated within 24 business hours.
• Instant Publication: Upon editorial approval, your tool listing or sponsored placement goes live immediately on aitoolshaven.com.
• Confirmation Notice: You will receive an automated email confirmation with your live directory URL and verified listing badge.`,
    },
    {
      id: "rejection-guarantee",
      num: "03",
      icon: ShieldCheck,
      title: "100% Full Refund Guarantee for Editorial Rejections",
      content: `Every software product submitted to AIToolsHaven is vetted against strict quality, authenticity, security, and usability criteria. We actively filter out non-functional applications, deceptive clone wrappers, malware risks, and misleading claims.

If your submitted tool is evaluated and rejected by our editorial desk:
• You are entitled to a 100% full refund of your submission fee.
• We will promptly notify you by email outlining the specific reasons for rejection.
• The refund is initiated immediately without any processing or restocking penalty fees.`,
    },
    {
      id: "pre-review-cancellation",
      num: "04",
      icon: CheckCircle2,
      title: "Cancellation Prior to Editorial Review",
      content: `You may request a cancellation and full refund at any point before our testing desk has commenced testing on your submission.

To cancel your pending order, email aitoolshaven@gmail.com with your tool name, submission date, and checkout email address. If our team has not yet begun reviewing your tool, we will cancel the order and process a full refund immediately.`,
    },
    {
      id: "non-refundable",
      num: "05",
      icon: Ban,
      title: "Non-Refundable Circumstances (Delivered Services)",
      content: `Because AIToolsHaven provides dedicated human evaluation, digital benchmarking, and published promotional exposure:

• Published Listings: Once your tool has been reviewed, approved, and published live on AIToolsHaven, the service has been fully rendered and is non-refundable.
• Completed Sponsorships: Custom advertising placements, sponsored guest posts, contextual link insertions, and scheduled newsletter features are non-refundable once published.
• Tool Discontinuation: If your product shuts down, rebrands, or changes ownership after publication, you may request an update or unlisting, but previous listing fees remain non-refundable.`,
    },
    {
      id: "refund-timelines",
      num: "06",
      icon: CreditCard,
      title: "Refund Processing & Stripe Timelines",
      content: `When a refund is approved by our billing desk:

• Immediate Trigger: We issue the reversal directly through Stripe within 1 business day.
• Original Payment Instrument: The refund is credited back to the original credit or debit card used during checkout.
• Settlement Window: Depending on your card issuer or banking network, the refunded funds typically appear on your statement within 5 to 10 business days.
• Currency: All refunds are credited in US Dollars (USD) for the exact gross amount charged.`,
    },
    {
      id: "request-process",
      num: "07",
      icon: Mail,
      title: "How to Request Support or a Cancellation",
      content: `To submit a refund or cancellation inquiry:

1. Email aitoolshaven@gmail.com with the subject line: "Refund Request - [Tool Name]".
2. Include your Stripe transaction receipt number and the email address used during submission.
3. Our billing desk reviews and responds to all requests within 24 business hours.`,
    },
    {
      id: "chargebacks",
      num: "08",
      icon: AlertCircle,
      title: "Disputes & Chargeback Policy",
      content: `We are committed to fair resolution. If you experience an issue with your submission or billing, we strongly encourage you to contact us directly at aitoolshaven@gmail.com before filing a bank dispute or chargeback.

Filing an unnecessary chargeback without prior communication may delay refund processing, as card networks freeze funds during active dispute investigations that can take up to 60–90 days to resolve.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Refund & Cancellation Policy - AIToolsHaven",
    description: "Read the 100% refund guarantee and fulfillment SLA for paid directory submissions and advertising on AIToolsHaven.",
    url: `${siteConfig.baseUrl}/refund-policy`,
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% RISK-FREE SUBMISSION GUARANTEE
          </div>

          <h1 className="text-fluid-h1 font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Refund &amp; Cancellation Policy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We hold our directory to rigorous standards while ensuring total financial safety for creators. If we cannot approve your tool submission, you will never pay a penny.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Last Updated: {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              100% Money-Back on Rejection
            </span>
          </div>
        </div>
      </section>

      {/* Bento: Core Guarantees */}
      <section className="py-12 sm:py-16 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
              Founder Safeguards
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Transparent Protection at Every Step
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {guaranteePillars.map((item) => {
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

      {/* Submission Lifecycle Flowchart */}
      <section className="py-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
              Submission Lifecycle
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
              How Paid Reviews Are Evaluated and Resolved
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-mono font-bold text-slate-400 mb-1">STAGE 1</div>
                <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">Stripe Checkout</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Payment is authorized via Stripe PCI-DSS Level 1. Submission enters our active testing queue.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-mono font-bold text-primary mb-1">STAGE 2</div>
                <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">Editorial Testing (24–48h)</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Our lab evaluates tool functionality, API responsiveness, security, and interface quality.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-mono font-bold text-emerald-500 mb-1">STAGE 3</div>
                <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">Approval or 100% Refund</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Approved tools deploy live immediately. Rejected tools receive an automatic 100% refund.
                </p>
              </div>
            </div>
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
              <h3 className="text-xl font-bold mb-2">Ready to submit your AI tool?</h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Get priority verification with zero downside risk. If we can&apos;t feature your tool, you get 100% of your money back.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/submit"
                className="px-5 py-2.5 rounded-xl bg-primary text-slate-950 text-xs font-bold hover:bg-primary/90 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Submit a Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/terms"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Billing Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
