import Link from 'next/link';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { PageContainer } from "@/components/layout/PageContainer";

const pricingTiers = [
  {
    name: "Standard",
    price: "Free",
    priceDetail: null,
    description: "Get listed on AIToolsHaven at no cost",
    recommended: false,
    features: [
      { text: "Standard directory listing", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "User reviews enabled", included: true },
      { text: "Category placement", included: true },
      { text: "Featured placement", included: false },
      { text: "Priority review (48h)", included: false },
      { text: "Social media promotion", included: false },
      { text: "Competitor ad-free page", included: false },
    ],
    cta: "Get Started Free",
    ctaHref: "/submit/form?plan=standard",
    variant: "outline" as const,
  },
  {
    name: "Priority Launch",
    price: "$49",
    priceDetail: "/one-time",
    description: "Skip the line and get reviewed within 24 hours.",
    recommended: true,
    features: [
      { text: "Everything in Standard", included: true },
      { text: "Priority review (24h)", included: true },
      { text: "Featured in \"New Arrivals\"", included: true },
      { text: "Social media shoutout", included: true },
      { text: "Enhanced analytics", included: true },
      { text: "Homepage spotlight", included: false },
      { text: "Newsletter feature", included: false },
      { text: "Competitor ad-free page", included: false },
    ],
    cta: "Launch with Priority",
    ctaHref: "/submit/form?plan=priority",
    variant: "primary" as const,
  },
  {
    name: "Featured Spotlight",
    price: "$149",
    priceDetail: "/month",
    description: "Maximum visibility and premium placement",
    recommended: false,
    features: [
      { text: "Everything in Priority", included: true },
      { text: "Homepage spotlight banner", included: true },
      { text: "Weekly newsletter feature", included: true },
      { text: "Competitor ad-free page", included: true },
      { text: "Premium analytics & insights", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom badge & verification", included: true },
      { text: "API promotion placement", included: true },
    ],
    cta: "Get Featured",
    ctaHref: "/submit/form?plan=featured",
    variant: "accent" as const,
  },
];

const processSteps = [
  {
    step: 1,
    icon: "description",
    title: "Submit Details",
    description: "Tell us about your tool, what it does, and why people should use it.",
  },
  {
    step: 2,
    icon: "rate_review",
    title: "Quick Review",
    description: "We'll check everything over to ensure it meets our quality guidelines.",
  },
  {
    step: 3,
    icon: "rocket_launch",
    title: "Go Live",
    description: "Your listing gets published and sent out to our active community.",
  },
  {
    step: 4,
    icon: "trending_up",
    title: "Track Growth",
    description: "Check your dashboard to see how many people are discovering your tool.",
  },
];

const faqItems = [
  {
    question: "How long does the review process take?",
    answer: "Standard listings are reviewed within 48 hours. Priority Launch submissions get expedited 24-hour review. Featured Spotlight submissions are typically reviewed within a few hours.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade your listing plan at any time from your dashboard. The new pricing tier benefits will take effect immediately.",
  },
  {
    question: "What are the submission requirements?",
    answer: "You'll need your tool's name, website URL, a short description, category classification, pricing model, and at least one screenshot or logo. Video demos are encouraged for better engagement.",
  },
  {
    question: "Do you accept all AI tools?",
    answer: "We review all submissions for quality and relevance. Tools must be functional, AI-powered, and provide genuine value. We do not accept tools that violate our content policies.",
  },
  {
    question: "Can I edit my listing after submission?",
    answer: "Yes, you can update your listing details, screenshots, and descriptions at any time through your dashboard. Major changes may require a brief re-review.",
  },
  {
    question: "What metrics can I track?",
    answer: "Standard listings get basic view counts. Premium tiers unlock detailed analytics including click-through rates, comparison appearances, bookmark counts, and user demographics.",
  },
];

export default function SubmitPage() {
  return (
    <PageContainer className="py-8 md:py-12">
      <Breadcrumbs items={[{ label: 'Submit Tool' }]} />
      
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span className="material-symbols-outlined text-sm">rocket_launch</span>
          Get Noticed
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4 leading-tight">
          Add your tool to the directory
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl mx-auto">
          We manually review every submission to keep the directory high quality. Choose a plan below to get started.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl p-6 flex flex-col relative transition-all duration-300 hover:-translate-y-1 ${
              tier.recommended
                ? 'bg-surface-container border-2 border-primary shadow-lg shadow-primary/10'
                : 'bg-surface-container border border-outline shadow-sm hover:border-primary/50'
            }`}
          >
            {tier.recommended && (
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">star</span>
                Popular
              </div>
            )}

            <h2 className="text-lg font-bold text-on-surface mb-1">{tier.name}</h2>
            <p className="text-sm text-on-surface-variant mb-4">{tier.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-on-surface">{tier.price}</span>
              {tier.priceDetail && (
                <span className="text-on-surface-variant text-sm">{tier.priceDetail}</span>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {tier.features.map((feature) => (
                <li key={feature.text} className={`flex items-start gap-2.5 text-sm ${feature.included ? 'text-on-surface-variant' : 'text-on-surface-variant opacity-40'}`}>
                  <span className={`material-symbols-outlined text-base shrink-0 mt-0.5 ${feature.included ? 'text-secondary' : ''}`}>
                    {feature.included ? 'check_circle' : 'cancel'}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <Link
              href={tier.ctaHref}
              className={`block text-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                tier.recommended
                  ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20'
                  : 'bg-surface border border-outline text-on-surface hover:border-primary hover:bg-surface-container'
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Process Flow */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-on-surface mb-3">How It Works</h2>
          <p className="text-on-surface-variant text-lg">From submission to discovery in four simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative text-center group">
              {/* Connector line (hidden on mobile, shown on desktop between items) */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-outline z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:text-primary-foreground transition-colors duration-300">{step.icon}</span>
                </div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Step {step.step}
                </div>
                <h3 className="font-bold text-on-surface mb-2">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-on-surface mb-3">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant text-lg">Everything you need to know about submitting your tool.</p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.question} className="group bg-surface-container rounded-xl border border-outline overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-surface transition-colors">
                <span className="font-semibold text-on-surface text-sm pr-4">{item.question}</span>
                <span className="material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-200 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-5 pb-5 pt-0 text-sm text-on-surface-variant leading-relaxed border-t border-outline mt-0 pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Launch?</h2>
          <p className="opacity-80 mb-6 max-w-md mx-auto">
            Join hundreds of AI tools already growing with AIToolsHaven. Start with a free listing today.
          </p>
          <Link
            href="/submit/form?plan=standard"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg"
          >
            Submit Your Tool
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
