import { Metadata } from 'next';
import Link from 'next/link';
import { SocialLinks } from '@/components/shared/SocialLinks';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/shared/StructuredData';
import { FounderLaunchStorySection } from '@/components/submit/FounderLaunchStorySection';
import { ListingAnatomyShowcase } from '@/components/submit/ListingAnatomyShowcase';
import { AudienceDemographicsCard } from '@/components/submit/AudienceDemographicsCard';
import {
  Rocket,
  ShieldCheck,
  FileEdit,
  Shield,
  Search,
  Globe,
  CheckCircle2,
  MinusCircle,
  Eye,
  TrendingUp,
  Grid,
  Award,
  Check,
  ChevronDown,
  Sparkles,
  Zap,
  Clock,
  Coins,
  ExternalLink,
  Target,
  BarChart3,
  Flame,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Submit Your AI Tool (2026): List Your AI Startup & Reach 50k+ Buyers | AIToolsHaven',
  description:
    'Submit your AI software or tool to AIToolsHaven. Gain high-authority dofollow SEO backlinks, reach 50,000+ monthly active buyers, and get featured in curated head-to-head comparisons.',
  keywords: [
    'submit ai tool',
    'submit your ai tool',
    'list my ai tool',
    'best ai tool directories to submit',
    'promote ai product',
    'ai tool directory submission',
    'where to promote your ai tool',
    'ai startup launch platform',
    'ai software marketing',
    'get ai tool featured',
    'promote ai software',
    'ai tool directories 2026',
  ],
  alternates: {
    canonical: `${siteConfig.baseUrl}/submit`,
  },
  openGraph: {
    title: 'Submit Your AI Tool (2026): Reach 50,000+ Buyers | AIToolsHaven',
    description:
      'List your AI product on AIToolsHaven. Get permanent SEO backlinks, category placement, and direct exposure to active software buyers.',
    url: `${siteConfig.baseUrl}/submit`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Submit Your AI Tool to AIToolsHaven',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit Your AI Tool to AIToolsHaven (2026)',
    description:
      'Get your AI product discovered by thousands of founders, marketers, and developers actively evaluating software.',
    images: [siteConfig.ogImage],
  },
};

const pricingTiers = [
  {
    name: '🌱 Free Plan',
    price: '$0',
    priceDetail: 'Free Forever',
    description: 'Perfect for indie hackers and early startups launching their first MVP.',
    recommended: false,
    features: [
      { text: 'Featured on AIToolsHaven badge', included: true, isBadge: true },
      { text: 'Editorial review & quality check', included: true },
      { text: 'Standard AI Tool profile page', included: true },
      { text: 'Category placement & tags', included: true },
      { text: 'SEO-optimized permanent listing', included: true },
      { text: 'Product logo & screenshots', included: true },
      { text: 'Indexed in site search', included: true },
      { text: 'Lifetime directory presence', included: true },
    ],
    bestFor: 'New startups and indie makers testing product-market fit.',
    cta: 'Select Free Plan',
    ctaHref: '/submit/form?plan=free',
  },
  {
    name: '⭐ Growth Plan',
    price: '$100',
    priceDetail: 'One-Time',
    description: 'Our most popular tier. Accelerate discovery and skip the queue.',
    recommended: true,
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'Priority 24–48h editorial review', included: true },
      { text: '"Editor\'s Verified" badge on profile', included: true },
      { text: 'Top featured placement within your category', included: true },
      { text: 'Inclusion in related workflow guides', included: true },
      { text: 'Inclusion in target goal recommendation pages', included: true },
      { text: 'High-priority recommendation ranking', included: true },
      { text: 'Social media spotlight announcement', included: true },
    ],
    bestFor: 'AI companies looking for faster customer acquisition and immediate exposure.',
    cta: 'Select Growth Plan',
    ctaHref: '/submit/form?plan=growth',
  },
  {
    name: '👑 Premium Spotlight',
    price: '$150',
    priceDetail: 'One-Time',
    description: 'Maximum exposure across homepage, category hubs, and matchup arenas.',
    recommended: false,
    features: [
      { text: 'Everything in Growth', included: true },
      { text: 'Homepage Featured Placement banner', included: true },
      { text: 'Top spotlight across relevant category pages', included: true },
      { text: 'Featured candidate in head-to-head comparison pages', included: true },
      { text: 'Priority deep internal linking & indexing', included: true },
      { text: 'Dedicated in-depth editorial writeup', included: true },
      { text: 'Premium "Featured Tool" distinction badge', included: true },
      { text: 'Fastest same-day priority review', included: true },
    ],
    bestFor: 'Funded AI companies launching major products or scaling paid customer acquisition.',
    cta: 'Select Premium Spotlight',
    ctaHref: '/submit/form?plan=premium',
  },
];

const launchChannelComparison = [
  {
    metric: 'Traffic Lifespan',
    aitoolshaven: 'Evergreen 24/7/365 (Compounds over time)',
    producthunt: '24 Hours only (Steep drop-off next day)',
    paidAds: 'Stops immediately when ad budget runs out',
  },
  {
    metric: 'Audience Intent',
    aitoolshaven: 'High Commercial (Active buyers comparing software)',
    producthunt: 'Curious Techies / Upvote hunters',
    paidAds: 'Passive / Interruption-based browsing',
  },
  {
    metric: 'Cost Model',
    aitoolshaven: 'One-time flat fee ($0 - $150)',
    producthunt: 'Free or thousands in launch agency costs',
    paidAds: '$5.00 - $18.00 per single click in AI SaaS',
  },
  {
    metric: 'SEO Backlink Value',
    aitoolshaven: 'Permanent high-authority contextual backlink',
    producthunt: 'No direct editorial category anchor text',
    paidAds: 'Zero SEO link equity passed',
  },
  {
    metric: 'Comparison Exposure',
    aitoolshaven: 'Eligible for Head-to-Head Versus Matchups',
    producthunt: 'No versus or alternative matrixes',
    paidAds: 'Requires expensive dedicated landing pages',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Select Plan & Submit',
    description: 'Provide your tool URL, core features, ideal user persona, and select your launch tier.',
    icon: Rocket,
  },
  {
    step: 2,
    title: 'Editorial Review',
    description: 'Our testing lab evaluates your application against quality, UX, and AI value standards.',
    icon: FileEdit,
  },
  {
    step: 3,
    title: 'Verification & Scoring',
    description: 'We verify pricing transparency, model capabilities, and category placement accuracy.',
    icon: ShieldCheck,
  },
  {
    step: 4,
    title: 'SEO Architecture Optimization',
    description: 'We structure your profile with Schema.org markup, targeted keywords, and category tags.',
    icon: Search,
  },
  {
    step: 5,
    title: 'Global Publication',
    description: 'Your tool goes live to 50,000+ monthly buyers, category hubs, and search engines.',
    icon: Globe,
  },
];

const guidelines = [
  'Must use genuine AI, machine learning, or LLM-driven technology as a core feature.',
  'Must have a functional, accessible website with clear onboarding or working demo.',
  'Must provide real, demonstrable utility to users, creators, or businesses.',
  'Must maintain transparent pricing or a clear freemium / trial entry point.',
  'Strictly zero scam, misleading copyright infringement, or spam wrapper applications.',
];

const faqItems = [
  {
    question: 'Does paying guarantee that my AI tool will be approved?',
    answer:
      'Payment covers the dedicated editorial review, testing, and listing setup. Every submission is rigorously evaluated against our quality guidelines. If your product does not meet our utility and safety standards, we notify you with feedback or issue a full refund.',
  },
  {
    question: 'How quickly will my AI tool be reviewed and published?',
    answer:
      'Growth and Premium submissions are fast-tracked within 24 to 48 business hours. Free tier submissions are reviewed in our standard chronological backlog (typically 3–5 business days).',
  },
  {
    question: 'Is my AI tool listing permanent?',
    answer:
      'Yes. Unlike platforms where listings expire or require monthly subscriptions, all approved AIToolsHaven listings remain permanently in our directory and continue generating organic search impressions indefinitely.',
  },
  {
    question: 'Will listing on AIToolsHaven improve my tool’s Google search rankings?',
    answer:
      'Yes. Each tool profile is structured with semantic HTML5, Product/SoftwareApplication Schema.org data, and includes a high-authority contextual link to your domain, transferring positive domain signals and referral traffic.',
  },
  {
    question: 'Can my tool be featured in Head-to-Head Comparisons?',
    answer:
      'Yes! Growth and Premium tools are prioritized when our editorial lab builds new versus matchup pages (e.g. your tool vs leading competitors in your category), putting your product directly in front of buyers at the decision point.',
  },
  {
    question: 'Can I update my screenshots, pricing, or product description later?',
    answer:
      'Absolutely. Whenever your product releases major model updates, changes pricing, or rebrands, simply contact our editorial desk to have your profile updated for free.',
  },
  {
    question: 'Can I submit multiple AI products?',
    answer:
      'Yes. Each distinct product or separate domain requires its own submission to ensure dedicated category placement and individual SEO optimization.',
  },
];

export default function SubmitPage() {
  const cleanBase = (siteConfig.baseUrl || 'https://aitoolshaven.com').replace(/\/$/, '');

  // JSON-LD Structured Data Graph for Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${cleanBase}/submit#webpage`,
        url: `${cleanBase}/submit`,
        name: 'Submit Your AI Tool (2026): List Your AI Startup | AIToolsHaven',
        description:
          'Submit your AI software to AIToolsHaven. Reach 50,000+ monthly buyers and get featured in curated head-to-head comparisons.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: cleanBase,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Submit AI Tool',
              item: `${cleanBase}/submit`,
            },
          ],
        },
      },
      {
        '@type': 'Service',
        '@id': `${cleanBase}/submit#service`,
        name: 'AI Tool Directory Submission & Promotion',
        provider: {
          '@type': 'Organization',
          name: 'AIToolsHaven',
          url: cleanBase,
        },
        description:
          'Permanent listing, editorial review, and SEO promotion service for AI tools, machine learning software, and generative AI startups.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'AI Tool Launch Plans',
          itemListElement: pricingTiers.map((tier, idx) => ({
            '@type': 'Offer',
            position: idx + 1,
            name: tier.name,
            description: tier.description,
            price: tier.price.replace('$', ''),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${cleanBase}${tier.ctaHref}`,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${cleanBase}/submit#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <StructuredData data={jsonLd} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 border-b border-black/5 dark:border-slate-800 mesh-bg">
        <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/60 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-emerald-500/20 dark:border-emerald-500/30 text-slate-800 dark:text-slate-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span>Live Review Desk Active &bull; 24–48h Turnaround SLA &bull; 50k+ Monthly Buyers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900 dark:text-white">
            Submit Your AI Tool to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              AIToolsHaven
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Get your AI software in front of thousands of founders, developers, creators, and business decision-makers with high purchase intent. Gain permanent SEO backlinks and category exposure.
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-foreground/70">
            <div className="flex -space-x-3">
              {['openai.com', 'anthropic.com', 'midjourney.com', 'elevenlabs.io'].map((domain, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm overflow-hidden z-0 relative"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                    alt={`${domain} favicon`}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-primary flex items-center justify-center text-white font-bold text-xs z-10 shadow-sm relative">
                1k+
              </div>
            </div>
            <p className="font-medium">
              Join 1,000+ AI startups and tools already growing with our directory
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Choose Your Launch Plan
            </h2>
            <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
              Transparent, one-time investment. Every submission is reviewed by our editorial lab for quality and SEO readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => {
              const isPopular = tier.recommended;

              const CardContent = (
                <div
                  className={`flex flex-col h-full p-8 ${
                    isPopular ? 'animated-border-content' : 'glass-card rounded-2xl'
                  } transition-transform duration-300 hover:-translate-y-2`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,95,109,0.5)] z-20">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{tier.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6 min-h-[40px] leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mb-6 flex items-baseline gap-2 border-b border-black/10 dark:border-slate-800 pb-6">
                    <span className="text-5xl font-extrabold text-slate-900 dark:text-white">{tier.price}</span>
                    <span className="text-foreground/50 text-xs font-bold uppercase tracking-wide">
                      {tier.priceDetail}
                    </span>
                  </div>

                  <div className="mb-8">
                    <p className="text-xs font-bold text-foreground/80 mb-1 uppercase tracking-wider">Best for:</p>
                    <p className="text-xs text-foreground/60 leading-relaxed">{tier.bestFor}</p>
                  </div>

                  <ul className="space-y-3.5 mb-8 flex-grow">
                    {tier.features.map((feature: any, i) => {
                      if (feature.isBadge) {
                        return (
                          <li
                            key={i}
                            className="bg-primary/5 border border-primary/20 rounded-xl p-3.5 flex flex-col gap-2 -mx-1 my-2"
                          >
                            <div className="flex items-start gap-2">
                              <ShieldCheck className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                              <div>
                                <p className="text-xs font-bold text-foreground/90 leading-tight mb-1">
                                  Get listed for free + display your badge
                                </p>
                                <p className="text-[11px] text-foreground/60 leading-relaxed">
                                  Display the &quot;Featured on AIToolsHaven&quot; publisher badge on your homepage to qualify.
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li
                          key={i}
                          className={`flex items-start gap-3 text-xs sm:text-sm ${
                            feature.included ? 'text-foreground/80' : 'text-foreground/30'
                          }`}
                        >
                          {feature.included ? (
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                          ) : (
                            <MinusCircle className="w-4 h-4 shrink-0 text-foreground/30 mt-0.5" />
                          )}
                          <span>{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    href={tier.ctaHref}
                    className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 mt-auto ${
                      isPopular
                        ? 'bg-primary hover:bg-rose-600 text-white shadow-lg shadow-primary/25 hover:scale-[1.02]'
                        : 'bg-black/5 dark:bg-slate-800 text-foreground hover:bg-black/10 dark:hover:bg-slate-700 border border-black/5 dark:border-slate-700'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              );

              if (isPopular) {
                return (
                  <div
                    key={tier.name}
                    className="animated-border rounded-2xl p-[2px] transform scale-100 lg:scale-105 z-10 shadow-[0_0_40px_rgba(255,95,109,0.15)] relative bg-white dark:bg-slate-900"
                  >
                    {CardContent}
                  </div>
                );
              }

              return <div key={tier.name}>{CardContent}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Product Mockup & Listing Anatomy Showcase */}
      <ListingAnatomyShowcase />

      {/* NEW: Comparison Table - AIToolsHaven vs Product Hunt vs Paid Ads */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-y border-black/5 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary dark:text-rose-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              Channel ROI Analysis
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Why Launch on AIToolsHaven vs Other Channels?
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Most launch platforms offer a quick 24-hour spike that disappears tomorrow. Here is why permanent directory placement delivers continuous, compounding customer acquisition.
            </p>
          </div>

          <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200">
                  <th className="py-4 px-4 font-bold">Launch Dimension</th>
                  <th className="py-4 px-4 font-bold text-primary dark:text-rose-400">AIToolsHaven</th>
                  <th className="py-4 px-4 font-bold text-slate-500">Product Hunt</th>
                  <th className="py-4 px-4 font-bold text-slate-500">Google / Meta Ads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                {launchChannelComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                      {row.metric}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-emerald-600 dark:text-emerald-400">
                      {row.aitoolshaven}
                    </td>
                    <td className="py-3.5 px-4">{row.producthunt}</td>
                    <td className="py-3.5 px-4">{row.paidAds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Audience Demographics & Buyer Intent Transparency Hub */}
      <AudienceDemographicsCard />

      {/* Bento Grid: Why List */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Why List on AIToolsHaven?
            </h2>
            <p className="text-foreground/60 text-lg">More than just a directory. We are a customer acquisition engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500"></div>
              <Eye className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">High-Intent Traffic</h3>
              <p className="text-foreground/60 text-base sm:text-lg leading-relaxed max-w-md">
                Reach an active audience specifically searching for AI solutions to replace legacy software. We connect your product directly with buyers holding company purchase authority.
              </p>
            </div>

            <div className="col-span-1 glass-card rounded-3xl p-8 relative overflow-hidden">
              <TrendingUp className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Authoritative SEO Backlink</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Gain an editorial, dofollow contextual profile link that transfers high-authority domain signals and improves your startup&apos;s own Google search rankings.
              </p>
            </div>

            <div className="col-span-1 glass-card rounded-3xl p-8 relative overflow-hidden">
              <Grid className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Category Placement</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Get indexed within dedicated category guides, goal pages, and related workflows where user discovery intent is at its highest.
              </p>
            </div>

            <div className="col-span-1 md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/20 transition-colors duration-500"></div>
              <Award className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Head-to-Head Versus Arena</h3>
              <p className="text-foreground/60 text-base sm:text-lg leading-relaxed max-w-md">
                Qualify for our automated and curated side-by-side comparison matrixes. When users search <em>&quot;Competitor vs You&quot;</em>, ensure your software is benchmarked fairly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline Process */}
      <section className="py-24 px-4 bg-black/5 dark:bg-slate-900/30 border-y border-black/5 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              What Happens After Submission?
            </h2>
            <p className="text-foreground/60 text-lg">
              Priority submissions are reviewed within{' '}
              <span className="text-foreground font-semibold text-primary">24–48 hours</span>.
            </p>
          </div>

          <div className="relative border-l border-black/10 dark:border-slate-700 ml-6 md:ml-12 space-y-12 pb-12">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="relative pl-12 md:pl-16 group">
                  <div className="absolute -left-[20px] top-1 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-black/10 dark:border-slate-700 flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <StepIcon className="w-4 h-4" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground/90 group-hover:text-foreground transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engaging Founder's Launch Story & Distribution Playbook */}
      <FounderLaunchStorySection />

      {/* Guidelines & FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* Guidelines */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              Submission Guidelines
            </h2>
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
              <ul className="space-y-4 mb-8">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm sm:text-base leading-relaxed">{guideline}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-foreground/50 text-center border-t border-black/5 dark:border-slate-800 pt-6">
                We reserve the right to decline submissions that do not meet our quality or user security standards.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="group glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-black/5 dark:hover:bg-slate-800/50 transition-colors gap-4">
                    <span className="font-semibold text-base sm:text-lg text-foreground/90">
                      {item.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-foreground/40 transition-transform duration-300 group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-foreground/60 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-24 px-4 relative overflow-hidden border-t border-black/5 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Ready to Acquire More Paying Users?
          </h2>
          <p className="text-base sm:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of AI companies using AIToolsHaven to scale their organic reach, gain high-intent customers, and dominate comparison searches.
          </p>
          <Link
            href="/submit/form?plan=growth"
            className="inline-flex items-center gap-3 bg-primary hover:bg-rose-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/25"
          >
            <span>Choose Your Launch Plan</span>
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Social CTA */}
      <section className="text-center flex flex-col items-center py-16 border-t border-black/5 dark:border-slate-800">
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
          Stay Connected With AIToolsHaven
        </h3>
        <p className="text-foreground/60 text-sm max-w-md mx-auto mb-6">
          Follow us for new AI tool launches, weekly benchmark reports, and product feature spotlights.
        </p>
        <SocialLinks variant="cta" />
      </section>
    </div>
  );
}
