import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/shared/StructuredData';
import { SocialLinks } from '@/components/shared/SocialLinks';
import {
  TrendingUp,
  FileText,
  Link2,
  Sparkles,
  CheckCircle2,
  Users,
  Compass,
  MapPin,
  Flame,
  ShieldCheck,
  Send,
  HelpCircle,
  BarChart3,
  Layers,
  ArrowRight,
  ExternalLink,
  Target,
  Clock,
  Briefcase,
  Globe2,
  ChevronDown,
  Ban,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advertise on AIToolsHaven (2026): Reach 50k+ AI Buyers | Guest Posts, Link Insertion & Sponsorships',
  description:
    'Promote your AI software, SaaS, or agency to 50,000+ monthly active tech buyers. Transparent pricing for sponsored guest posts, contextual link insertions, category sponsorships, and directory spotlights.',
  keywords: [
    'advertise on ai directory',
    'ai guest post',
    'ai software link insertion',
    'ai sponsored post',
    'promote ai tool',
    'ai saas advertising',
    'dofollow tech backlink',
    'ai blog guest post',
    'buy ai software ads',
  ],
  alternates: {
    canonical: `${siteConfig.baseUrl}/advertise`,
  },
  openGraph: {
    title: 'Advertise on AIToolsHaven: Reach 50,000+ AI Buyers & Founders',
    description:
      'Transparent pricing for sponsored guest posts, contextual link insertions, and premium directory sponsorships on AIToolsHaven.',
    url: `${siteConfig.baseUrl}/advertise`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Advertise on AIToolsHaven - Media Kit & Sponsorship Options',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advertise on AIToolsHaven: Guest Posts, Link Insertions & Sponsorships',
    description:
      'Reach 50k+ tech decision-makers actively evaluating and purchasing AI tools. View full pricing and audience demographics.',
    images: [siteConfig.ogImage],
  },
};

const audienceMetrics = [
  {
    label: 'Monthly Active Buyers',
    value: '50,000+',
    subtext: 'High-intent tech professionals & founders',
    icon: Users,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    label: 'Commercial Purchase Intent',
    value: '78%',
    subtext: 'Actively searching to buy or replace software',
    icon: Compass,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    label: 'Tier-1 Geographic Traffic',
    value: '80%+',
    subtext: 'United States (48%), EU (18%), UK (14%), CA/AU (12%)',
    icon: MapPin,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    label: 'Average Dwell Duration',
    value: '3m 42s',
    subtext: '4.2 pages viewed per visit across guides & comparisons',
    icon: Flame,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
];

const seoPackages = [
  {
    id: 'link-insertion',
    name: 'Contextual Link Insertion',
    badge: 'Introductory Offer',
    price: '$49',
    period: 'one-time payment',
    highlight: false,
    description:
      'Insert 1 permanent dofollow link natively into an existing, indexed, high-ranking article or category guide of your choice.',
    idealFor: 'SaaS founders, SEO agencies, and growth leads looking for immediate topical authority from already-ranking URLs.',
    features: [
      '1 permanent dofollow contextual backlink',
      'Choose from our existing ranking articles or category guides',
      'Natural sentence integration crafted by our editorial team',
      'Immediate Google index authority (no new-content indexing wait)',
      'Fast 24-hour turnaround SLA upon review & payment',
      'Permanent lifetime placement — zero renewal fees',
      'Strictly zero "sponsored" or "nofollow" rel tag penalties',
      '100% full refund guarantee if link cannot be placed',
    ],
    ctaText: 'Order Link Insertion ($49)',
    ctaSubject: 'Link Insertion Request - AIToolsHaven',
    ctaHref: 'mailto:aitoolshaven@gmail.com?subject=Link%20Insertion%20Request%20-%20AIToolsHaven',
  },
  {
    id: 'guest-post',
    name: 'Sponsored Guest Post',
    badge: 'Most Popular for SEO',
    price: '$89',
    period: 'one-time payment',
    highlight: true,
    description:
      'Publish a dedicated, full-length educational article, case study, or tool breakdown (1,200–2,000 words) permanently featured in our Guides & Blog hub.',
    idealFor: 'Brands looking for brand trust, direct referral traffic, high-authority domain signals, and organic keyword rankings.',
    features: [
      '1 dedicated in-depth article (1,200 to 2,000 words)',
      'Up to 2 permanent dofollow contextual backlinks',
      'Full brand imagery, product screenshots, diagrams, and CTA buttons',
      'Structured with Schema.org Article markup for Google Rich Snippets',
      'Indexed in our site search, blog hub, and RSS feed',
      'Social media spotlight across our official X/Twitter channel',
      'Editorial proofreading & internal link injection included',
      'Fast 24–48h publication turnaround upon draft approval',
    ],
    ctaText: 'Submit a Guest Post ($89)',
    ctaSubject: 'Guest Post Submission - AIToolsHaven',
    ctaHref: 'mailto:aitoolshaven@gmail.com?subject=Guest%20Post%20Submission%20-%20AIToolsHaven',
  },
  {
    id: 'editorial-drafting',
    name: 'We Write Your Guest Post',
    badge: 'Full Turnkey Content',
    price: '$149',
    period: 'one-time payment',
    highlight: false,
    description:
      'No time to write? Our senior technical writers research, benchmark, and craft a 1,500+ word deep-dive spotlight promoting your software.',
    idealFor: 'Busy founders and marketing teams who want expert, human-written content optimized for Google rankings without lifting a finger.',
    features: [
      'Everything included in the Sponsored Guest Post package',
      'Written by our senior AI & software editorial team',
      'In-depth competitor benchmarking and feature breakdown',
      'Custom screenshots and step-by-step workflow tutorial',
      'Keyword-optimized for target commercial search queries',
      'Unlimited revisions until you approve the draft',
      'Direct publication to our Guides & Blog hub',
      'Turnaround: 3–5 business days from brief to live post',
    ],
    ctaText: 'Request Turnkey Post ($149)',
    ctaSubject: 'Turnkey Guest Post Request - AIToolsHaven',
    ctaHref: 'mailto:aitoolshaven@gmail.com?subject=Turnkey%20Guest%20Post%20Request%20-%20AIToolsHaven',
  },
];

const sponsorshipPlacements = [
  {
    title: 'Category Takeover & #1 Pinned Slot',
    price: '$49',
    period: 'per month ($99 / quarter)',
    badge: 'Early Founder Special',
    description:
      'Dominate an entire high-intent category hub (e.g. AI Coding, AI Video, AI Writing, Audio & Voice). Your tool sits locked at the #1 top spot with an "Exclusive Sponsor" banner.',
    specs: 'Sticky top card + category banner. Average 3,500–8,000 views/mo per category.',
    ctaSubject: 'Category Takeover Sponsorship - AIToolsHaven',
    icon: Layers,
  },
  {
    title: 'Homepage Header Spotlight Banner',
    price: '$99',
    period: 'per month ($35 / week)',
    badge: 'Maximum Reach',
    description:
      'First thing every visitor sees when entering AIToolsHaven. Premium billboard banner above the fold across both desktop and mobile devices.',
    specs: 'Prime hero placement, custom graphic or badge, direct trackable outbound link.',
    ctaSubject: 'Homepage Header Sponsorship - AIToolsHaven',
    icon: Sparkles,
  },
  {
    title: 'Newsletter Feature Spotlight',
    price: '$49',
    period: 'per email send',
    badge: 'Direct Inbox',
    description:
      'Dedicated sponsor section in our weekly AI digest sent to curated founders, developers, and creators tracking new software releases.',
    specs: 'Includes logo, 150-word copy, screenshot, and prominent call-to-action button.',
    ctaSubject: 'Newsletter Sponsorship - AIToolsHaven',
    icon: Send,
  },
  {
    title: 'Comparison & Versus Page Banner',
    price: '$49',
    period: 'per month',
    badge: 'Ready-to-Buy',
    description:
      'Position your alternative directly inside high-converting comparison arenas where buyers evaluate competing tools (e.g. "Competitor A vs Competitor B").',
    specs: 'Contextual banner placed above the comparison matrix table.',
    ctaSubject: 'Comparison Page Sponsorship - AIToolsHaven',
    icon: BarChart3,
  },
];

const comparisonChannels = [
  {
    dimension: 'Audience Mindset',
    aitoolshaven: 'High Commercial Intent (Actively searching software to adopt/buy)',
    googleAds: 'Browsing / Search queries with volatile costs ($5–$18/click)',
    productHunt: 'Casual upvoters, maker crowd; traffic vanishes in 24 hours',
  },
  {
    dimension: 'Backlink & SEO Value',
    aitoolshaven: 'Permanent dofollow contextual link from relevant AI authority domain',
    googleAds: 'Zero SEO equity (paid ad clicks pass no link signals)',
    productHunt: 'No targeted anchor text into specific editorial categories',
  },
  {
    dimension: 'Longevity of Traffic',
    aitoolshaven: 'Evergreen 24/7/365 — rankings and impressions compound over time',
    googleAds: 'Stops the second your ad spend budget is exhausted',
    productHunt: 'Spike lasts 24 to 48 hours then drops by 95%',
  },
  {
    dimension: 'Cost Predictability',
    aitoolshaven: 'Flat transparent fee ($49–$89 one-time)',
    googleAds: 'Unpredictable CPC auction bidding that escalates monthly',
    productHunt: 'Free or thousands in launch agency costs',
  },
];

const faqs = [
  {
    q: 'Are backlinks in guest posts and link insertions dofollow and permanent?',
    a: 'Yes, 100%. All approved guest posts and link insertions include permanent dofollow links that pass direct SEO authority. We do not use nofollow, sponsored tags, or temporary redirect scripts. Your links remain permanently active on the page for the lifetime of the site with zero recurring renewal fees.',
  },
  {
    q: 'Can I choose which specific article my link is inserted into?',
    a: 'Yes! You can explore our Blog, Guides, or Category Hubs and propose the exact URL and anchor text you prefer. Alternatively, our editorial team can audit our Google Analytics data to identify the highest-traffic matching article relevant to your tool.',
  },
  {
    q: 'What is the turnaround time for publication?',
    a: 'Link insertions are fulfilled within 24 business hours upon payment. Provided guest posts are published within 24 to 48 business hours after editorial review. If you order our turnkey writing service, the initial draft is delivered within 3 to 5 business days.',
  },
  {
    q: 'How are payments handled?',
    a: 'All transactions are invoiced in US Dollars (USD) and processed securely through Stripe, Inc. We accept all major credit/debit cards (Visa, Mastercard, American Express), Apple Pay, and Google Pay. We issue an official invoice and receipt immediately upon payment.',
  },
  {
    q: 'What types of content and niches are accepted?',
    a: 'We accept articles and software related to Artificial Intelligence, SaaS, developer tools, coding, productivity, automation, design, marketing tech, machine learning, and cloud infrastructure. We strictly reject gambling, adult/casino content, predatory finance, crypto pump schemes, malware, or deceptive affiliate cloakers.',
  },
  {
    q: 'Can our guest post include images, videos, or product demos?',
    a: 'Absolutely. We encourage including high-resolution product screenshots, dashboard walkthroughs, YouTube embed demos, and custom diagrams to maximize reader engagement and conversions.',
  },
];

export default function AdvertisePage() {
  const cleanBase = (siteConfig.baseUrl || 'https://aitoolshaven.com').replace(/\/$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${cleanBase}/advertise#webpage`,
        url: `${cleanBase}/advertise`,
        name: 'Advertise on AIToolsHaven: Guest Posts, Link Insertions & Sponsorships',
        description:
          'Promote your AI software, SaaS, or agency to 50,000+ monthly active tech buyers. Transparent pricing for sponsored guest posts and link insertions.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: cleanBase },
            { '@type': 'ListItem', position: 2, name: 'Advertise', item: `${cleanBase}/advertise` },
          ],
        },
      },
      {
        '@type': 'Service',
        '@id': `${cleanBase}/advertise#service`,
        name: 'AIToolsHaven Advertising & Sponsored Content',
        provider: {
          '@type': 'Organization',
          name: 'AIToolsHaven',
          url: cleanBase,
        },
        description:
          'Advertising, sponsored guest posts, contextual link insertions, and category takeovers for AI software companies.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'AIToolsHaven Advertising Products',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Contextual Link Insertion',
              price: '49',
              priceCurrency: 'USD',
              description: '1 permanent dofollow contextual backlink in an existing high-ranking article.',
            },
            {
              '@type': 'Offer',
              name: 'Sponsored Guest Post',
              price: '89',
              priceCurrency: 'USD',
              description: 'Dedicated 1,200–2,000 word permanent article with up to 2 dofollow backlinks.',
            },
            {
              '@type': 'Offer',
              name: 'Turnkey Written Guest Post',
              price: '149',
              priceCurrency: 'USD',
              description: 'Custom research and written in-depth 1,500+ word review by our senior editorial team.',
            },
            {
              '@type': 'Offer',
              name: 'Category Takeover Sponsorship',
              price: '49',
              priceCurrency: 'USD',
              description: 'Top pinned spot and category banner for 30 days.',
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <StructuredData data={jsonLd} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 border-b border-black/5 dark:border-slate-800 mesh-bg">
        <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/70 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-primary/20 text-slate-800 dark:text-slate-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span>2026 Media Kit &amp; Rates &bull; 50k+ Monthly Buyers &bull; Direct Stripe Checkout</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
            Advertise on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500">
              AIToolsHaven
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Put your software and brand directly in front of <strong>50,000+ tech founders, engineers, and AI buyers</strong> actively researching software to purchase. Transparent rates, permanent dofollow SEO value, and zero hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-lg shadow-primary/25 hover:scale-105"
            >
              <span>View Pricing &amp; Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:aitoolshaven@gmail.com?subject=Advertising%20Inquiry%20-%20AIToolsHaven"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <span>Contact Advertising Desk</span>
              <Send className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>
      </section>

      {/* Verified Traffic & Audience Metrics Bar */}
      <section className="py-16 px-4 bg-slate-50/70 dark:bg-slate-900/50 border-b border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase font-extrabold tracking-widest text-primary mb-1">
              Verified Traffic &amp; Demographic Data
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Why Brands &amp; Founders Choose AIToolsHaven
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-1">
                      {item.value}
                    </div>
                    <p className="text-xs text-foreground/60 leading-relaxed">{item.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Professional Role Breakdown Pills */}
          <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary shrink-0" />
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  Audience Breakdown by Role:
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  Tech Leads &amp; Engineers: <strong>44%</strong>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  Marketing &amp; Growth: <strong>28%</strong>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  Founders &amp; C-Suite: <strong>18%</strong>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  Enterprise Ops: <strong>10%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & CONTENT ADVERTISING: GUEST POSTS & LINK INSERTIONS */}
      <section id="pricing" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Link2 className="w-3.5 h-3.5" />
              SEO &amp; Content Placements
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Guest Posts &amp; Link Insertions
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg mt-3">
              Permanent, high-authority contextual links that transfer powerful search engine equity and put your brand in front of buying decision-makers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {seoPackages.map((pkg) => {
              const isPopular = pkg.highlight;

              return (
                <div
                  key={pkg.id}
                  className={`flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${
                    isPopular
                      ? 'bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-2 border-primary shadow-2xl shadow-primary/15 relative lg:-translate-y-2'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-500 text-white px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md">
                      {pkg.badge}
                    </div>
                  )}

                  {!isPopular && (
                    <div className="inline-block self-start bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {pkg.badge}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground/70 min-h-[48px] leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 pb-6 border-b border-black/10 dark:border-slate-800 mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Ideal for */}
                  <div className="mb-6 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                      Best For:
                    </p>
                    <p className="text-xs text-foreground/70 leading-relaxed">{pkg.idealFor}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={pkg.ctaHref}
                    className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all duration-200 mt-auto flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-primary hover:bg-rose-600 text-white shadow-lg shadow-primary/25 hover:scale-[1.02]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Special Founder Bundle Callout */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 via-rose-500/10 to-orange-500/10 border border-primary/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Special Founder Bundle Deal
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                Directory Growth Listing + Contextual Link Insertion
              </h3>
              <p className="text-xs md:text-sm text-foreground/70 max-w-2xl leading-relaxed">
                Get your tool listed with permanent category placement, priority review, verified badge, AND 1 permanent contextual dofollow backlink inside a top ranking article or guide.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 text-center md:text-right">
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">$119</div>
                <div className="text-[11px] text-foreground/50 font-bold uppercase line-through">$149 regular value</div>
              </div>
              <a
                href="mailto:aitoolshaven@gmail.com?subject=Founder%20Bundle%20Inquiry%20($119)%20-%20AIToolsHaven"
                className="bg-primary hover:bg-rose-600 text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-primary/25 hover:scale-105 whitespace-nowrap"
              >
                Claim Bundle ($119)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISPLAY & CATEGORY SPONSORSHIPS */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-y border-black/5 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Sponsorships &amp; Direct Placements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Category Takeovers &amp; High-Impact Banners
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              Own prime real estate across the directory where software buyers evaluate options side-by-side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sponsorshipPlacements.map((placement, index) => {
              const Icon = placement.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                          {placement.price}
                        </div>
                        <div className="text-[11px] font-bold uppercase text-foreground/50 tracking-wider">
                          {placement.period}
                        </div>
                      </div>
                    </div>

                    <div className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold px-2.5 py-1 rounded-full mb-3">
                      {placement.badge}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {placement.title}
                    </h3>

                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                      {placement.description}
                    </p>

                    <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-foreground/60 mb-6">
                      <strong className="text-foreground/90">Specifications:</strong> {placement.specs}
                    </div>
                  </div>

                  <a
                    href={`mailto:aitoolshaven@gmail.com?subject=${encodeURIComponent(placement.ctaSubject)}`}
                    className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary font-bold text-xs sm:text-sm text-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Inquire About Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON: AIToolshaven vs Other Channels */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              ROI &amp; Efficiency Breakdown
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Why Advertising on AIToolsHaven Delivers Higher ROI
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              Unlike generic social media or expensive pay-per-click ad networks, our audience lands on AIToolsHaven with intentional commercial readiness.
            </p>
          </div>

          <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200">
                  <th className="py-4 px-6 font-bold">Channel Dimension</th>
                  <th className="py-4 px-6 font-bold text-primary">AIToolsHaven</th>
                  <th className="py-4 px-6 font-bold text-slate-500">Google / Meta Ads</th>
                  <th className="py-4 px-6 font-bold text-slate-500">Product Hunt Launch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                {comparisonChannels.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400">
                      {row.aitoolshaven}
                    </td>
                    <td className="py-4 px-6">{row.googleAds}</td>
                    <td className="py-4 px-6">{row.productHunt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EDITORIAL STANDARDS & PROHIBITED CONTENT */}
      <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-y border-black/5 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Editorial &amp; Quality Guidelines
                </h3>
                <p className="text-xs text-foreground/60">
                  To protect our readers, all content is manually reviewed prior to publishing.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Accepted Content
                  </h4>
                  <ul className="space-y-2 text-xs text-foreground/70">
                    <li>&bull; AI Software, Machine Learning models &amp; SaaS products</li>
                    <li>&bull; Developer tools, coding assistants, and API platforms</li>
                    <li>&bull; Marketing tech, copy generators, and design workflow tools</li>
                    <li>&bull; Productivity platforms, automation workflows, and CRM integrations</li>
                    <li>&bull; Informative technical tutorials, benchmarks, and comparison guides</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-red-500">
                    <Ban className="w-4 h-4 text-red-500 shrink-0" />
                    Strictly Prohibited
                  </h4>
                  <ul className="space-y-2 text-xs text-foreground/70">
                    <li>&bull; Casino, gambling, or betting websites</li>
                    <li>&bull; Adult, illegal, or scam wrapper applications</li>
                    <li>&bull; Predatory loans, pay-day schemes, or high-risk crypto pump tokens</li>
                    <li>&bull; Low-quality spinner content or AI spam gibberish</li>
                    <li>&bull; Malicious downloads, trojans, or intrusive trackers</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-foreground/70">
                <strong>Payment &amp; Invoicing:</strong> All advertising invoices are billed in USD and fulfilled via Stripe. In the unlikely event that your submitted article or link does not pass our safety standards, you receive a 100% immediate refund under our{' '}
                <Link href="/refund-policy" className="text-primary hover:underline font-semibold">
                  Refund Policy
                </Link>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/60 text-sm mt-2">
              Everything you need to know about our advertising rates, dofollow links, and workflow.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors gap-4">
                  <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180 shrink-0" />
                </summary>
                <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION / BOOKING DESK */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-primary/5 border-t border-black/5 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Ready to Put Your AI Brand in Front of 50k+ Buyers?
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Send us your preferred article topic, target URL, or campaign requirements. Our advertising desk responds within 12–24 business hours with custom recommendations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:aitoolshaven@gmail.com?subject=Advertising%20%26%20Sponsorship%20Inquiry%20-%20AIToolsHaven"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-rose-600 text-white px-9 py-4 rounded-full font-bold text-base shadow-xl shadow-primary/25 hover:scale-105 transition-all"
            >
              <span>Email Advertising Desk</span>
              <Send className="w-4 h-4" />
            </a>
            <Link
              href="/submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <span>Submit a Tool Listing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-foreground/50 mt-6">
            Official response channel: <strong>aitoolshaven@gmail.com</strong> &bull; Secure Stripe checkout &bull; 24h SLA
          </p>
        </div>
      </section>

      {/* Social Follow CTA */}
      <section className="text-center flex flex-col items-center py-12 border-t border-black/5 dark:border-slate-800">
        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-4">
          Connect with AIToolsHaven
        </p>
        <SocialLinks variant="cta" />
      </section>
    </div>
  );
}
