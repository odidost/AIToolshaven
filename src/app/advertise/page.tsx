import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/shared/StructuredData';
import { SocialLinks } from '@/components/shared/SocialLinks';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { AdvertiseCampaignBuilder } from '@/components/advertise/AdvertiseCampaignBuilder';
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
  Zap,
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
    'ai media kit 2026',
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

export const revalidate = 86400;

const audienceMetrics = [
  {
    label: 'Monthly Active Buyers',
    value: '50,000+',
    subtext: 'High-intent tech professionals, engineers & founders',
    icon: Users,
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
  },
  {
    label: 'Commercial Purchase Intent',
    value: '78%',
    subtext: 'Actively searching to adopt or upgrade software',
    icon: Compass,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    label: 'Tier-1 Geographic Traffic',
    value: '80%+',
    subtext: 'United States (48%), EU (18%), UK (14%), CA/AU (12%)',
    icon: Globe2,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    label: 'Average Dwell Duration',
    value: '3m 42s',
    subtext: '4.2 pages viewed per visit across guides & comparisons',
    icon: Flame,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
];

const seoPackages = [
  {
    id: 'link-insertion',
    name: 'Contextual Link Insertion',
    badge: 'Fastest Indexing',
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
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-clip max-w-full">
      <StructuredData data={jsonLd} />

      <PageContainer>
        <div className="pt-20 pb-16 md:pt-28 md:pb-24 space-y-16 max-w-full overflow-x-clip">
          {/* Breadcrumbs Navigation */}
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "Advertise & Media Kit" }]} />
          </div>

          {/* Hero Header with Ambient Radial Glow */}
          <header className="relative max-w-3xl mx-auto text-center space-y-5 overflow-x-clip">
            {/* Ambient Background Radial Glow */}
            <div 
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[300px] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" 
              aria-hidden="true" 
            />

            {/* Live Ticker Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-surface-elevated/80 border border-primary/20 backdrop-blur-md text-xs font-semibold text-foreground shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-primary font-bold">2026 LIVE MEDIA KIT</span>
              <span className="text-on-surface-variant">&bull;</span>
              <span className="text-on-surface-variant">50k+ Verified Monthly Buyers</span>
              <span className="text-on-surface-variant">&bull;</span>
              <span className="text-on-surface-variant">Direct Stripe Checkout</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
              Advertise on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500">
                AIToolsHaven
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Put your software and brand directly in front of <strong>50,000+ tech founders, engineers, and AI buyers</strong> actively researching tools to purchase. Transparent rates, permanent dofollow SEO equity, and zero hidden renewal fees.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="#campaign-builder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-rose-600 text-white px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-primary/25 hover:scale-[1.02] cursor-pointer"
              >
                <span>Interactive Campaign Builder</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:aitoolshaven@gmail.com?subject=Advertising%20Inquiry%20-%20AIToolsHaven"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface border border-border text-foreground hover:border-primary/40 px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>Email Advertising Desk</span>
                <Send className="w-4 h-4 text-primary" />
              </a>
            </div>
          </header>

          {/* ============================================================= */}
          {/* VERIFIED AUDIENCE & TRAFFIC METRICS HUD                       */}
          {/* ============================================================= */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                VERIFIED TRAFFIC &amp; DEMOGRAPHICS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                Why Software Brands Choose AIToolsHaven
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {audienceMetrics.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-3xl bg-surface border border-border shadow-2xs flex flex-col justify-between hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-on-surface-variant uppercase tracking-wider">
                        {item.label}
                      </span>
                      <div className={`w-9 h-9 rounded-2xl border flex items-center justify-center ${item.bg} ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-foreground tracking-tight mb-1">
                        {item.value}
                      </div>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{item.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Professional Role Breakdown Bar */}
            <div className="p-5 rounded-3xl bg-surface border border-border shadow-2xs">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-foreground">
                    Audience Breakdown by Role:
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-xl bg-surface-elevated font-semibold text-foreground border border-border">
                    Tech Leads &amp; Devs: <strong className="text-primary">44%</strong>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-surface-elevated font-semibold text-foreground border border-border">
                    Marketing &amp; Growth: <strong className="text-accent">28%</strong>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-surface-elevated font-semibold text-foreground border border-border">
                    Founders &amp; C-Suite: <strong className="text-emerald-500">18%</strong>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-surface-elevated font-semibold text-foreground border border-border">
                    Enterprise Ops: <strong>10%</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* INTERACTIVE CAMPAIGN BUILDER & ROI ESTIMATOR (LATEST UPGRADE)  */}
          {/* ============================================================= */}
          <div id="campaign-builder" className="scroll-mt-24">
            <AdvertiseCampaignBuilder />
          </div>

          {/* ============================================================= */}
          {/* DETAILED SEO PACKAGES: GUEST POSTS & LINK INSERTIONS          */}
          {/* ============================================================= */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center space-x-1.5 bg-primary/10 text-primary border border-primary/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Link2 className="w-3.5 h-3.5" />
                <span>SEO &amp; Content Authority Packages</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                Guest Posts &amp; Link Insertions
              </h2>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Permanent, high-authority contextual links that transfer powerful search engine equity and put your software directly in front of commercial decision-makers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {seoPackages.map((pkg) => {
                const isPopular = pkg.highlight;

                return (
                  <div
                    key={pkg.id}
                    className={`flex flex-col h-full rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden ${
                      isPopular
                        ? 'bg-gradient-to-b from-surface via-surface to-surface-elevated border-2 border-primary/70 shadow-xl shadow-primary/10 ring-2 ring-primary/20'
                        : 'bg-surface border border-border hover:border-primary/40 shadow-xs'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/15 blur-2xl rounded-full pointer-events-none" />
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${
                        isPopular
                          ? 'bg-primary text-white border-primary shadow-xs'
                          : 'bg-surface-secondary border-border text-on-surface-variant'
                      }`}>
                        {pkg.badge}
                      </span>
                      <span className="text-xs text-on-surface-variant font-mono">100% Dofollow</span>
                    </div>

                    <h3 className="text-xl font-black text-foreground mb-2">
                      {pkg.name}
                    </h3>

                    <p className="text-xs text-on-surface-variant leading-relaxed mb-6 min-h-[48px]">
                      {pkg.description}
                    </p>

                    {/* Price Header */}
                    <div className="flex items-baseline space-x-2 pb-5 border-b border-border/60 mb-5">
                      <span className="text-3xl sm:text-4xl font-black text-foreground">
                        {pkg.price}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface-variant">
                        {pkg.period}
                      </span>
                    </div>

                    {/* Best For Tag */}
                    <div className="mb-6 p-3 bg-surface-elevated rounded-2xl border border-border/80 text-xs">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block mb-0.5">
                        BEST FOR:
                      </span>
                      <p className="text-foreground/80 leading-relaxed text-[11px]">{pkg.idealFor}</p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-8 flex-grow">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs text-foreground/85">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href={pkg.ctaHref}
                      className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-center transition-all duration-200 mt-auto flex items-center justify-center space-x-2 cursor-pointer ${
                        isPopular
                          ? 'bg-primary hover:bg-rose-600 text-white shadow-md shadow-primary/25 hover:scale-[1.02]'
                          : 'bg-surface-elevated hover:bg-surface-secondary text-foreground border border-border hover:border-primary/40'
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <Send className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Special Founder Bundle Callout */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-orange-500/10 border border-primary/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="inline-flex items-center space-x-1.5 bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SPECIAL FOUNDER BUNDLE DEAL</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-foreground">
                  Directory Growth Listing + Contextual Link Insertion
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                  Get your software listed with permanent category placement, priority review, verified badge, AND 1 permanent contextual dofollow backlink inside a top ranking article or guide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 text-center md:text-right">
                <div>
                  <div className="text-3xl font-black text-foreground">$119</div>
                  <div className="text-[11px] text-on-surface-variant font-bold uppercase line-through">$149 regular value</div>
                </div>
                <a
                  href="mailto:aitoolshaven@gmail.com?subject=Founder%20Bundle%20Inquiry%20($119)%20-%20AIToolsHaven"
                  className="bg-primary hover:bg-rose-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-md shadow-primary/25 hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Claim Bundle ($119)
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* DISPLAY & CATEGORY SPONSORSHIPS                               */}
          {/* ============================================================= */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 text-blue-500 border border-blue-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>High-Impact Sponsorships</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                Category Takeovers &amp; Prime Banners
              </h2>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Own prime real estate across the directory where software buyers evaluate options side-by-side.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsorshipPlacements.map((placement, index) => {
                const Icon = placement.icon;
                return (
                  <div
                    key={index}
                    className="bg-surface border border-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-primary/40 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl sm:text-3xl font-black text-foreground">
                            {placement.price}
                          </div>
                          <div className="text-[10px] font-mono font-bold uppercase text-on-surface-variant tracking-wider">
                            {placement.period}
                          </div>
                        </div>
                      </div>

                      <div className="inline-block bg-surface-secondary border border-border text-on-surface-variant text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full mb-3">
                        {placement.badge}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        {placement.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                        {placement.description}
                      </p>

                      <div className="p-3 bg-surface-elevated rounded-2xl border border-border text-xs text-on-surface-variant mb-6">
                        <strong className="text-foreground font-semibold">Specifications:</strong> {placement.specs}
                      </div>
                    </div>

                    <a
                      href={`mailto:aitoolshaven@gmail.com?subject=${encodeURIComponent(placement.ctaSubject)}`}
                      className="w-full py-3 px-4 rounded-2xl border border-border hover:border-primary font-bold text-xs sm:text-sm text-foreground hover:text-primary transition-colors flex items-center justify-center space-x-2 bg-surface-elevated hover:bg-surface-secondary cursor-pointer"
                    >
                      <span>Inquire About Availability</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================= */}
          {/* ROI COMPARISON TABLE: AITOOLSHAVEN VS OTHER CHANNELS          */}
          {/* ============================================================= */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>ROI &amp; Efficiency Breakdown</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                Why Advertising on AIToolsHaven Delivers Higher ROI
              </h2>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Unlike generic social media or expensive pay-per-click ad networks, our audience lands on AIToolsHaven with intentional commercial readiness.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-border bg-surface shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-elevated text-foreground">
                    <th className="py-4 px-6 font-bold">Channel Dimension</th>
                    <th className="py-4 px-6 font-black text-primary bg-primary/5">AIToolsHaven</th>
                    <th className="py-4 px-6 font-semibold text-on-surface-variant">Google / Meta Ads</th>
                    <th className="py-4 px-6 font-semibold text-on-surface-variant">Product Hunt Launch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-on-surface-variant">
                  {comparisonChannels.map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface-secondary/40 transition-colors">
                      <td className="py-4 px-6 font-bold text-foreground whitespace-nowrap">
                        {row.dimension}
                      </td>
                      <td className="py-4 px-6 font-semibold text-emerald-600 dark:text-emerald-400 bg-primary/5">
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

          {/* ============================================================= */}
          {/* EDITORIAL STANDARDS & QUALITY GUIDELINES                      */}
          {/* ============================================================= */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border shadow-xs space-y-6">
              <div className="flex items-center space-x-3 border-b border-border/60 pb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    Editorial &amp; Quality Guidelines
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    To protect our readers, all sponsor content is manually reviewed prior to publishing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 p-4 rounded-2xl bg-surface-elevated border border-border">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Accepted Content</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-on-surface-variant">
                    <li>&bull; AI Software, Machine Learning models &amp; SaaS products</li>
                    <li>&bull; Developer tools, coding assistants, and API platforms</li>
                    <li>&bull; Marketing tech, copy generators, and design workflow tools</li>
                    <li>&bull; Productivity platforms, automation workflows, and CRM integrations</li>
                    <li>&bull; Informative technical tutorials, benchmarks, and comparison guides</li>
                  </ul>
                </div>

                <div className="space-y-3 p-4 rounded-2xl bg-surface-elevated border border-border">
                  <h4 className="font-bold text-xs sm:text-sm text-red-500 flex items-center space-x-2">
                    <Ban className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Strictly Prohibited</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-on-surface-variant">
                    <li>&bull; Casino, gambling, or betting websites</li>
                    <li>&bull; Adult, illegal, or scam wrapper applications</li>
                    <li>&bull; Predatory loans, pay-day schemes, or high-risk crypto pump tokens</li>
                    <li>&bull; Low-quality spinner content or AI spam gibberish</li>
                    <li>&bull; Malicious downloads, trojans, or intrusive trackers</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-surface-elevated rounded-2xl border border-border text-xs text-on-surface-variant">
                <strong className="text-foreground">Payment &amp; Invoicing:</strong> All advertising invoices are billed in USD and fulfilled securely via Stripe. In the unlikely event that your submitted article or link does not pass our quality or safety standards, you receive a 100% immediate refund under our{' '}
                <Link href="/refund-policy" className="text-primary hover:underline font-semibold">
                  Refund Policy
                </Link>.
              </div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* INTERACTIVE FAQ ACCORDION                                     */}
          {/* ============================================================= */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                Everything you need to know about our advertising rates, dofollow links, and workflow.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-surface rounded-2xl border border-border overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-2xs"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-surface-secondary/50 transition-colors gap-4">
                    <span className="font-bold text-xs sm:text-sm text-foreground">
                      {faq.q}
                    </span>
                    <ChevronDown className="w-4 h-4 text-on-surface-variant transition-transform duration-300 group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-border/40 mt-1 pt-3">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* ============================================================= */}
          {/* FINAL HIGH-IMPACT BOOKING DESK CTA                            */}
          {/* ============================================================= */}
          <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface via-surface-elevated to-surface border border-primary/30 ring-1 ring-primary/20 text-center shadow-xl space-y-6">
            <div 
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                START YOUR CAMPAIGN TODAY
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                Ready to Put Your AI Brand in Front of 50k+ Buyers?
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Send us your preferred article topic, target URL, or campaign requirements. Our advertising desk responds within 12–24 business hours with custom recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
              <a
                href="mailto:aitoolshaven@gmail.com?subject=Advertising%20%26%20Sponsorship%20Inquiry%20-%20AIToolsHaven"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary hover:bg-rose-600 text-white px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md shadow-primary/25 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Email Advertising Desk</span>
                <Send className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-surface-elevated hover:bg-surface-secondary border border-border text-foreground px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>Submit a Tool Listing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-[11px] font-mono text-on-surface-variant pt-2 relative z-10">
              Official response channel: <strong className="text-foreground">aitoolshaven@gmail.com</strong> &bull; Secure Stripe checkout &bull; 24h Review SLA
            </p>
          </div>

          {/* Social Follow CTA */}
          <div className="text-center flex flex-col items-center pt-4 border-t border-border">
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-4">
              Connect with AIToolsHaven
            </p>
            <SocialLinks variant="cta" />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
