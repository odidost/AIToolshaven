import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Submit Your AI Tool | AIToolsHaven',
  description: 'Get your AI product discovered by thousands of founders, marketers, developers, creators, and businesses actively searching for the best AI tools.',
  openGraph: {
    title: 'Submit Your AI Tool | AIToolsHaven',
    description: 'Get your AI product discovered by thousands of founders, marketers, developers, creators, and businesses actively searching for the best AI tools.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit Your AI Tool | AIToolsHaven',
    description: 'Get your AI product discovered by thousands of founders, marketers, developers, creators, and businesses actively searching for the best AI tools.',
  }
};

const pricingTiers = [
  {
    name: "🚀 Launch Plan",
    price: "$50",
    priceDetail: "One-Time",
    description: "Perfect for startups launching a new AI product.",
    recommended: false,
    features: [
      { text: "Editorial review", included: true },
      { text: "Premium AI Tool page", included: true },
      { text: "Category placement", included: true },
      { text: "SEO-optimized listing", included: true },
      { text: "Product logo & screenshots", included: true },
      { text: "Pricing information", included: true },
      { text: "Features section", included: true },
      { text: "Pros & Cons", included: true },
      { text: "Website & social links", included: true },
      { text: "Included in search results", included: true },
      { text: "Lifetime listing", included: true },
      { text: "Future page improvements included", included: true },
    ],
    bestFor: "New startups and indie makers.",
    cta: "Select Launch Plan",
    ctaHref: "/submit/form?plan=launch",
  },
  {
    name: "⭐ Growth Plan",
    price: "$100",
    priceDetail: "One-Time",
    description: "Everything in Launch, plus additional visibility.",
    recommended: true,
    features: [
      { text: "Everything in Launch", included: true },
      { text: "Priority editorial review", included: true },
      { text: "\"Editor's Verified\" badge", included: true },
      { text: "Featured placement within your category", included: true },
      { text: "Inclusion in related workflow pages", included: true },
      { text: "Inclusion in goal pages", included: true },
      { text: "Higher visibility in recommendations", included: true },
      { text: "Social media announcement", included: true },
    ],
    bestFor: "Companies looking for faster exposure and increased discovery.",
    cta: "Select Growth Plan",
    ctaHref: "/submit/form?plan=growth",
  },
  {
    name: "👑 Premium Spotlight",
    price: "$150",
    priceDetail: "One-Time",
    description: "Maximum visibility across AIToolsHaven.",
    recommended: false,
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Homepage featured placement", included: true },
      { text: "Featured on relevant category pages", included: true },
      { text: "Featured in comparison recommendations", included: true },
      { text: "Priority indexing and internal linking", included: true },
      { text: "Dedicated editorial review", included: true },
      { text: "Premium \"Featured Tool\" badge", included: true },
      { text: "Highest submission priority", included: true },
    ],
    bestFor: "Established AI companies launching new products or major updates.",
    cta: "Select Premium Spotlight",
    ctaHref: "/submit/form?plan=premium",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Submit and Choose",
    description: "Submit your AI tool and choose a launch plan.",
    icon: "rocket_launch"
  },
  {
    step: 2,
    title: "Editorial Review",
    description: "Our editorial team reviews your submission.",
    icon: "rate_review"
  },
  {
    step: 3,
    title: "Verification",
    description: "We verify the information provided.",
    icon: "verified_user"
  },
  {
    step: 4,
    title: "SEO Optimization",
    description: "We optimize your listing for search engines.",
    icon: "search"
  },
  {
    step: 5,
    title: "Publication",
    description: "Your tool is published and becomes discoverable across AIToolsHaven.",
    icon: "public"
  }
];

const guidelines = [
  "Use AI or machine learning as a core feature.",
  "Have a working website.",
  "Provide genuine value to users.",
  "Contain accurate and complete information.",
  "Do not promote spam, scams or misleading claims.",
];

const faqItems = [
  {
    question: "Does payment guarantee publication?",
    answer: "No. Payment covers the editorial review and listing process. Every submission is reviewed against our quality guidelines. If your submission doesn't meet our standards, it may be rejected.",
  },
  {
    question: "How long does the review take?",
    answer: "Most submissions are reviewed within 1–3 business days.",
  },
  {
    question: "Is my listing permanent?",
    answer: "Yes. All approved listings remain in our directory. We also update listings over time to keep information accurate.",
  },
  {
    question: "Can I update my listing later?",
    answer: "Yes. You can contact us whenever your product changes, including pricing, features, branding or screenshots.",
  },
  {
    question: "Will my tool appear on Google?",
    answer: "Every listing is built with SEO best practices and is eligible to be indexed by search engines. While no platform can guarantee rankings, we optimize each listing for maximum visibility.",
  },
  {
    question: "Can I submit multiple AI tools?",
    answer: "Absolutely. Each AI tool requires its own submission and launch plan.",
  },
];

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 border-b border-black/5 mesh-bg">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-black/10 text-foreground px-5 py-2 rounded-full text-sm font-semibold mb-8 animate-float-slow shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Reach Active AI Buyers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Submit Your AI Tool to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AIToolsHaven</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Get your AI product discovered by thousands of founders, marketers, developers, creators, and businesses actively searching for the best AI tools.
          </p>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-foreground/60">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center backdrop-blur-md shadow-sm">
                   <span className="material-symbols-outlined text-foreground/40 text-sm">person</span>
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white font-bold text-xs z-10 shadow-sm">
                500+
              </div>
            </div>
            <p>Join 500+ AI startups already growing with us</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Launch Plan</h2>
            <p className="text-foreground/60 text-lg">Every submission is reviewed by our editorial team to ensure quality.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => {
              const isPopular = tier.recommended;
              
              const CardContent = (
                <div className={`flex flex-col h-full p-8 ${isPopular ? 'animated-border-content' : 'glass-card rounded-2xl'} transition-transform duration-300 hover:-translate-y-2`}>
                  
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,95,109,0.5)] z-20">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-foreground/50 text-sm mb-6 min-h-[40px]">{tier.description}</p>
                  
                  <div className="mb-6 flex items-baseline gap-2 border-b border-black/10 pb-6">
                    <span className="text-5xl font-extrabold">{tier.price}</span>
                    <span className="text-foreground/40 text-sm uppercase tracking-wide">{tier.priceDetail}</span>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm font-medium text-foreground/80 mb-1">Best for:</p>
                    <p className="text-sm text-foreground/50">{tier.bestFor}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-foreground/80' : 'text-foreground/30'}`}>
                        <span className={`material-symbols-outlined text-[20px] shrink-0 ${feature.included ? 'text-primary' : ''}`}>
                          {feature.included ? 'check_circle' : 'do_not_disturb_on'}
                        </span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.ctaHref}
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${
                      isPopular 
                        ? 'bg-foreground text-white hover:bg-foreground/90 shadow-md hover:scale-[1.02]' 
                        : 'bg-black/5 text-foreground hover:bg-black/10 border border-black/5'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              );

              if (isPopular) {
                return (
                  <div key={tier.name} className="animated-border rounded-2xl p-[2px] transform scale-100 lg:scale-105 z-10 shadow-[0_0_40px_rgba(255,95,109,0.15)] relative bg-white">
                    {CardContent}
                  </div>
                );
              }

              return <div key={tier.name}>{CardContent}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Bento Grid: Why List */}
      <section className="py-24 px-4 bg-black/5 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why List on AIToolsHaven?</h2>
            <p className="text-foreground/60 text-lg">More than just a directory. We're a growth engine.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500"></div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">visibility</span>
              <h3 className="text-2xl font-bold mb-3">Targeted Reach</h3>
              <p className="text-foreground/60 text-lg leading-relaxed max-w-md">Reach a targeted audience actively searching for AI tools. We connect your product with founders, marketers, and developers looking for exact solutions.</p>
            </div>
            
            <div className="col-span-1 glass-card rounded-3xl p-8 relative overflow-hidden">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">trending_up</span>
              <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
              <p className="text-foreground/60">Gain a professionally designed, SEO-optimized product page that increases your visibility on search engines.</p>
            </div>
            
            <div className="col-span-1 glass-card rounded-3xl p-8 relative overflow-hidden">
              <span className="material-symbols-outlined text-4xl text-accent mb-6 block">category</span>
              <h3 className="text-xl font-bold mb-3">Smart Placement</h3>
              <p className="text-foreground/60">Be included in relevant categories, workflows, and goal pages where users have high intent.</p>
            </div>
            
            <div className="col-span-1 md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/20 transition-colors duration-500"></div>
              <span className="material-symbols-outlined text-4xl text-foreground mb-6 block">workspace_premium</span>
              <h3 className="text-2xl font-bold mb-3">Long-term Credibility</h3>
              <p className="text-foreground/60 text-lg leading-relaxed max-w-md">Receive long-term organic exposure instead of short-lived promotions. Improve brand credibility with an editorial review and verification process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline Process */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Happens After Submission?</h2>
            <p className="text-foreground/60 text-lg">Most submissions are reviewed within <span className="text-foreground font-semibold">1–3 business days</span>.</p>
          </div>

          <div className="relative border-l border-black/10 ml-6 md:ml-12 space-y-12 pb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative pl-12 md:pl-16 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[20px] top-1 w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-sm">{step.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground/90 group-hover:text-foreground transition-colors">{step.title}</h3>
                <p className="text-foreground/50 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines & FAQ */}
      <section className="py-24 px-4 bg-black/5 border-t border-black/5">
        <div className="max-w-3xl mx-auto space-y-24">
          
          {/* Guidelines */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Submission Guidelines</h2>
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <ul className="space-y-4 mb-8">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary shrink-0">check</span>
                    <span className="text-foreground/70 text-lg">{guideline}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/40 text-center border-t border-black/5 pt-6">
                We reserve the right to reject submissions that do not meet our editorial standards.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="group glass-card rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-black/5 transition-colors">
                    <span className="font-semibold text-lg text-foreground/90">{item.question}</span>
                    <span className="material-symbols-outlined text-foreground/40 transition-transform duration-300 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-foreground/60 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-24 px-4 relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Reach More Users?</h2>
          <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto">
            Join hundreds of AI companies using AIToolsHaven to increase visibility, attract new users and grow through high-quality organic discovery.
          </p>
          <Link
            href="/submit/form?plan=growth"
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
          >
            Choose Your Launch Plan
            <span className="material-symbols-outlined">rocket_launch</span>
          </Link>
        </div>
      </section>
      
    </div>
  );
}
