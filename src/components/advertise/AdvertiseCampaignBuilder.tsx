"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { 
  Check, 
  Copy, 
  Send, 
  Sparkles, 
  TrendingUp, 
  Link2, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  Users, 
  Clock, 
  ChevronRight,
  Package,
  Zap,
  CheckCircle2
} from 'lucide-react';

export type CampaignMode = 'seo' | 'display' | 'bundles';

interface SeoItem {
  id: string;
  name: string;
  basePrice: number;
  unit: string;
  description: string;
  badge?: string;
  estimatedImpressionsPerUnit: number;
  estimatedClicksPerUnit: number;
}

const SEO_ITEMS: SeoItem[] = [
  {
    id: 'link_insertion',
    name: 'Contextual Link Insertion',
    basePrice: 49,
    unit: 'permanent backlink',
    description: '1 permanent dofollow backlink natively integrated into an existing, indexed, high-ranking article.',
    badge: 'Fastest Indexing',
    estimatedImpressionsPerUnit: 12000,
    estimatedClicksPerUnit: 180,
  },
  {
    id: 'guest_post',
    name: 'Sponsored Guest Post',
    basePrice: 89,
    unit: 'full article (1,200–2,000 words)',
    description: 'Dedicated in-depth article published in our Blog & Guides hub with up to 2 dofollow backlinks and brand screenshots.',
    badge: 'Most Popular for SEO',
    estimatedImpressionsPerUnit: 25000,
    estimatedClicksPerUnit: 420,
  },
  {
    id: 'turnkey_post',
    name: 'Turnkey Written Deep-Dive',
    basePrice: 149,
    unit: 'custom 1,500w article written by us',
    description: 'Our senior tech editorial team conducts research, benchmarks, workflows, and writes a comprehensive spotlight.',
    badge: 'Full Turnkey Content',
    estimatedImpressionsPerUnit: 35000,
    estimatedClicksPerUnit: 680,
  },
];

interface DisplayItem {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  specs: string;
  badge?: string;
  estimatedImpressions: number;
  estimatedClicks: number;
}

const DISPLAY_ITEMS: DisplayItem[] = [
  {
    id: 'category_takeover',
    name: 'Category Takeover & #1 Pinned Spot',
    price: 49,
    period: 'per month',
    description: 'Lock your tool at the top #1 spot of any high-intent category with an Exclusive Category Sponsor badge.',
    specs: 'Top sticky card + category banner. Average 4k–10k category views/mo.',
    badge: 'High Conversion',
    estimatedImpressions: 8500,
    estimatedClicks: 320,
  },
  {
    id: 'homepage_banner',
    name: 'Homepage Header Billboard',
    price: 99,
    period: 'per month',
    description: 'Prime billboard banner above the fold on our main directory entrance across desktop and mobile.',
    specs: 'Hero billboard placement with direct trackable outbound link.',
    badge: 'Maximum Reach',
    estimatedImpressions: 50000,
    estimatedClicks: 1100,
  },
  {
    id: 'newsletter_feature',
    name: 'Weekly Newsletter Feature',
    price: 49,
    period: 'per send',
    description: 'Dedicated sponsor section in our weekly AI digest sent to curated tech founders, developers, and creators.',
    specs: 'Logo + 150-word copy + screenshot + prominent CTA button.',
    badge: 'Direct Inbox',
    estimatedImpressions: 15000,
    estimatedClicks: 450,
  },
  {
    id: 'versus_banner',
    name: 'Comparison Arena Banner',
    price: 49,
    period: 'per month',
    description: 'Position your alternative directly inside high-converting comparison arenas where buyers evaluate competitors.',
    specs: 'Contextual banner placed above the comparison matrix table.',
    badge: 'Ready-to-Buy',
    estimatedImpressions: 12000,
    estimatedClicks: 380,
  },
];

interface BundleItem {
  id: string;
  name: string;
  price: number;
  originalValue: number;
  badge: string;
  description: string;
  included: string[];
  estimatedImpressions: number;
  estimatedClicks: number;
}

const BUNDLE_ITEMS: BundleItem[] = [
  {
    id: 'founder_starter',
    name: 'Founder Launch Starter',
    price: 119,
    originalValue: 149,
    badge: 'Save $30',
    description: 'Perfect for newly launched AI tools looking for both directory presence and initial high-authority backlink signals.',
    included: [
      '1 Permanent Directory Growth Listing with verified badge',
      '1 Contextual Link Insertion in an existing ranking article',
      'Permanent lifetime placement — zero renewal fees',
      '24-hour review SLA guarantee',
    ],
    estimatedImpressions: 18000,
    estimatedClicks: 260,
  },
  {
    id: 'category_dominance',
    name: 'Category Dominance Package',
    price: 169,
    originalValue: 217,
    badge: 'Save $48 • Best Value',
    description: 'Own an entire category hub while building evergreen search engine authority and direct inbox reach.',
    included: [
      '1 Category Takeover (#1 Pinned slot) for 30 days',
      '1 Permanent Contextual Link Insertion in a top ranking article',
      '1 Dedicated Spotlight in our Weekly Newsletter',
      'Social media spotlight across our X/Twitter channel',
    ],
    estimatedImpressions: 38000,
    estimatedClicks: 950,
  },
  {
    id: 'authority_scale',
    name: 'Scale-Up Authority Suite',
    price: 299,
    originalValue: 377,
    badge: 'Save $78 • Ultimate Growth',
    description: 'Complete hands-off content marketing and branding suite designed to position you as the category leader.',
    included: [
      '1 Turnkey 1,500+ word Deep-Dive review written by our team',
      '2 Permanent Contextual Link Insertions in ranking comparison guides',
      '1 Category Takeover (#1 Pinned slot) for 30 days',
      'Direct social spotlight and newsletter feature',
    ],
    estimatedImpressions: 80000,
    estimatedClicks: 2100,
  },
];

export function AdvertiseCampaignBuilder() {
  const [activeTab, setActiveTab] = useState<CampaignMode>('seo');

  // State for SEO selections
  const [selectedSeoId, setSelectedSeoId] = useState<string>('guest_post');
  const [seoQuantity, setSeoQuantity] = useState<number>(1);

  // State for Display selections
  const [selectedDisplayId, setSelectedDisplayId] = useState<string>('category_takeover');
  const [displayMonths, setDisplayMonths] = useState<number>(1);

  // State for Bundle selections
  const [selectedBundleId, setSelectedBundleId] = useState<string>('category_dominance');

  // Copy brief feedback state
  const [copiedBrief, setCopiedBrief] = useState<boolean>(false);

  // Computed summary metrics
  const activeMetrics = useMemo(() => {
    if (activeTab === 'seo') {
      const item = SEO_ITEMS.find(i => i.id === selectedSeoId) || SEO_ITEMS[0];
      // Volume discount: 3+ gets 5%, 5+ gets 10%
      let discount = 0;
      if (seoQuantity >= 5) discount = 0.10;
      else if (seoQuantity >= 3) discount = 0.05;

      const rawTotal = item.basePrice * seoQuantity;
      const total = Math.round(rawTotal * (1 - discount));
      const impressions = item.estimatedImpressionsPerUnit * seoQuantity;
      const clicks = item.estimatedClicksPerUnit * seoQuantity;
      const effectiveCpc = (total / Math.max(1, clicks)).toFixed(2);

      return {
        title: `${seoQuantity}x ${item.name}`,
        totalPrice: total,
        billingText: 'one-time payment',
        impressions,
        clicks,
        effectiveCpc,
        savingsText: discount > 0 ? `${Math.round(discount * 100)}% Volume Discount Applied` : null,
        details: `${seoQuantity} unit(s) of ${item.name} (${item.unit})`,
      };
    }

    if (activeTab === 'display') {
      const item = DISPLAY_ITEMS.find(i => i.id === selectedDisplayId) || DISPLAY_ITEMS[0];
      // Multi-month discount: 3 months gets 15% off
      let discount = 0;
      if (displayMonths >= 3) discount = 0.15;

      const rawTotal = item.price * displayMonths;
      const total = Math.round(rawTotal * (1 - discount));
      const impressions = item.estimatedImpressions * displayMonths;
      const clicks = item.estimatedClicks * displayMonths;
      const effectiveCpc = (total / Math.max(1, clicks)).toFixed(2);

      return {
        title: `${item.name} (${displayMonths} ${displayMonths === 1 ? 'month' : 'months'})`,
        totalPrice: total,
        billingText: `${displayMonths} ${displayMonths === 1 ? 'month' : 'months'} coverage`,
        impressions,
        clicks,
        effectiveCpc,
        savingsText: discount > 0 ? `15% Multi-Month Discount Applied` : null,
        details: `${item.name} for ${displayMonths} month(s)`,
      };
    }

    // Bundles
    const bundle = BUNDLE_ITEMS.find(b => b.id === selectedBundleId) || BUNDLE_ITEMS[0];
    const total = bundle.price;
    const effectiveCpc = (total / Math.max(1, bundle.estimatedClicks)).toFixed(2);

    return {
      title: bundle.name,
      totalPrice: total,
      billingText: 'one-time bundle deal',
      impressions: bundle.estimatedImpressions,
      clicks: bundle.estimatedClicks,
      effectiveCpc,
      savingsText: bundle.badge,
      details: `${bundle.name} ($${bundle.price} vs $${bundle.originalValue} value)`,
    };
  }, [activeTab, selectedSeoId, seoQuantity, selectedDisplayId, displayMonths, selectedBundleId]);

  // Construct mailto link with prefilled parameters
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Advertising Booking Request: ${activeMetrics.title} ($${activeMetrics.totalPrice})`);
    const body = encodeURIComponent(
      `Hello AIToolsHaven Advertising Desk,\n\n` +
      `I would like to book the following advertising package:\n\n` +
      `• Package: ${activeMetrics.title}\n` +
      `• Total Investment: $${activeMetrics.totalPrice} (${activeMetrics.billingText})\n` +
      `• Estimated Reach: ${activeMetrics.impressions.toLocaleString()}+ impressions\n\n` +
      `Tool / Brand Name:\n` +
      `Website URL:\n` +
      `Target Article or Category Preference (if any):\n` +
      `Billing Contact / Stripe Invoice Email:\n\n` +
      `Please issue a Stripe invoice or send payment confirmation details.\n\n` +
      `Thank you!`
    );
    return `mailto:aitoolshaven@gmail.com?subject=${subject}&body=${body}`;
  }, [activeMetrics]);

  // Copy scenario brief handler
  const handleCopyBrief = useCallback(() => {
    if (typeof window === 'undefined') return;
    const text = 
      `AIToolsHaven Advertising Package:\n` +
      `• Plan: ${activeMetrics.title}\n` +
      `• Investment: $${activeMetrics.totalPrice} (${activeMetrics.billingText})\n` +
      `• Projected Impressions: ${activeMetrics.impressions.toLocaleString()}+\n` +
      `• Projected High-Intent Clicks: ${activeMetrics.clicks.toLocaleString()}+\n` +
      `• Effective CPC: ~$${activeMetrics.effectiveCpc} vs $8.50+ on Google Ads\n` +
      `• Official Desk: aitoolshaven@gmail.com`;
    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2200);
  }, [activeMetrics]);

  return (
    <div className="w-full space-y-8">
      {/* Studio Workflow Pill Switcher */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>INTERACTIVE CAMPAIGN BUILDER &amp; ROI ESTIMATOR</span>
          </span>
          <span className="text-[11px] font-medium text-on-surface-variant">
            Customize placements &amp; preview real-time traffic and SEO ROI
          </span>
        </div>

        {/* 3 Workflow Modes: Linear-style studio selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Option 1: SEO Authority */}
          <button
            type="button"
            onClick={() => setActiveTab('seo')}
            className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              activeTab === 'seo'
                ? 'bg-surface border-primary/60 ring-2 ring-primary/20 shadow-md'
                : 'bg-surface/80 hover:bg-surface border-border hover:border-primary/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-xl border ${
                activeTab === 'seo'
                  ? 'bg-primary/15 border-primary/30 text-primary'
                  : 'bg-surface-elevated border-border text-on-surface-variant'
              }`}>
                <Link2 className="w-4 h-4" />
              </div>
              <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${
                activeTab === 'seo'
                  ? 'bg-primary/10 border-primary/30 text-primary'
                  : 'bg-surface-secondary border-border text-on-surface-variant'
              }`}>
                DOFOLLOW SEO
              </span>
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">SEO &amp; Backlinks</div>
              <div className="text-xs text-on-surface-variant mt-0.5">
                Permanent link insertions &amp; guest posts
              </div>
            </div>
          </button>

          {/* Option 2: Brand Sponsorships */}
          <button
            type="button"
            onClick={() => setActiveTab('display')}
            className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              activeTab === 'display'
                ? 'bg-surface border-primary/60 ring-2 ring-primary/20 shadow-md'
                : 'bg-surface/80 hover:bg-surface border-border hover:border-primary/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-xl border ${
                activeTab === 'display'
                  ? 'bg-accent/15 border-accent/30 text-accent'
                  : 'bg-surface-elevated border-border text-on-surface-variant'
              }`}>
                <Layers className="w-4 h-4" />
              </div>
              <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${
                activeTab === 'display'
                  ? 'bg-accent/10 border-accent/30 text-accent'
                  : 'bg-surface-secondary border-border text-on-surface-variant'
              }`}>
                HIGH IMPACT
              </span>
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Brand Sponsorships</div>
              <div className="text-xs text-on-surface-variant mt-0.5">
                Category takeovers, billboards &amp; digest
              </div>
            </div>
          </button>

          {/* Option 3: Founder Bundles */}
          <button
            type="button"
            onClick={() => setActiveTab('bundles')}
            className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              activeTab === 'bundles'
                ? 'bg-surface border-emerald-500/60 ring-2 ring-emerald-500/20 shadow-md'
                : 'bg-surface/80 hover:bg-surface border-border hover:border-emerald-500/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-xl border ${
                activeTab === 'bundles'
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-500'
                  : 'bg-surface-elevated border-border text-on-surface-variant'
              }`}>
                <Package className="w-4 h-4" />
              </div>
              <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${
                activeTab === 'bundles'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500'
                  : 'bg-surface-secondary border-border text-on-surface-variant'
              }`}>
                UP TO 30% OFF
              </span>
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Founder Bundles</div>
              <div className="text-xs text-on-surface-variant mt-0.5">
                Pre-configured multi-channel packages
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Configuration Matrix */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-xs space-y-6">
        {/* Tab Content 1: SEO */}
        {activeTab === 'seo' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-foreground block">
                Select Your SEO Placement Type:
              </span>
              <p className="text-xs text-on-surface-variant">
                All SEO options pass 100% permanent dofollow equity with zero sponsored or nofollow tags.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SEO_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedSeoId(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedSeoId === item.id
                      ? 'bg-primary/5 border-primary/60 ring-1 ring-primary/20 shadow-xs'
                      : 'bg-surface-elevated border-border hover:border-primary/30'
                  }`}
                >
                  <div>
                    {item.badge && (
                      <span className="text-[10px] font-mono font-bold text-primary uppercase px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 inline-block mb-2">
                        {item.badge}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border/60 flex items-baseline justify-between">
                    <span className="text-lg font-black text-foreground">${item.basePrice}</span>
                    <span className="text-[10px] text-on-surface-variant font-mono">one-time</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Quantity Selector with Volume Discount Indicators */}
            <div className="pt-4 border-t border-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">
                  Number of Placements (Quantity):
                </span>
                <span className="text-[11px] font-mono text-on-surface-variant">
                  {seoQuantity >= 5 ? '🎉 10% volume discount applied' : seoQuantity >= 3 ? '✨ 5% volume discount applied' : 'Order 3+ for volume savings'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 5, 10].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setSeoQuantity(qty)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer border ${
                      seoQuantity === qty
                        ? 'bg-primary text-white border-primary shadow-xs'
                        : 'bg-surface-elevated border-border text-on-surface-variant hover:text-foreground'
                    }`}
                  >
                    {qty}x {qty >= 5 ? '(-10%)' : qty >= 3 ? '(-5%)' : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Display & Sponsorships */}
        {activeTab === 'display' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-foreground block">
                Select Placement Slot:
              </span>
              <p className="text-xs text-on-surface-variant">
                Premium high-impact slots put your brand directly in front of buyers actively comparing tools.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DISPLAY_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedDisplayId(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedDisplayId === item.id
                      ? 'bg-accent/5 border-accent/60 ring-1 ring-accent/20 shadow-xs'
                      : 'bg-surface-elevated border-border hover:border-accent/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-accent uppercase px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                        {item.badge}
                      </span>
                      <span className="text-xs text-on-surface-variant font-mono">{item.period}</span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-[11px] text-foreground/70 font-mono mt-2 bg-surface p-1.5 rounded-lg border border-border/60">
                      <strong>Specs:</strong> {item.specs}
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border/60 flex items-baseline justify-between">
                    <span className="text-lg font-black text-foreground">${item.price}</span>
                    <span className="text-[11px] text-accent font-bold">Available Now &rarr;</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Coverage Duration (Months) */}
            <div className="pt-4 border-t border-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">
                  Campaign Duration:
                </span>
                <span className="text-[11px] font-mono text-on-surface-variant">
                  {displayMonths >= 3 ? '🎉 15% multi-month discount applied' : 'Lock 3+ months for 15% discount'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: '1 Month', val: 1 },
                  { label: '2 Months', val: 2 },
                  { label: '3 Months (Save 15%)', val: 3 },
                  { label: '6 Months (Save 15%)', val: 6 },
                ].map((dur) => (
                  <button
                    key={dur.val}
                    type="button"
                    onClick={() => setDisplayMonths(dur.val)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      displayMonths === dur.val
                        ? 'bg-accent text-white border-accent shadow-xs'
                        : 'bg-surface-elevated border-border text-on-surface-variant hover:text-foreground'
                    }`}
                  >
                    {dur.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Founder Bundles */}
        {activeTab === 'bundles' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-foreground block">
                Select Pre-Configured Founder Bundle:
              </span>
              <p className="text-xs text-on-surface-variant">
                Curated high-ROI combinations giving you directory visibility, dofollow backlinks, and direct inbox reach at discounted rates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {BUNDLE_ITEMS.map((bundle) => (
                <button
                  key={bundle.id}
                  type="button"
                  onClick={() => setSelectedBundleId(bundle.id)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedBundleId === bundle.id
                      ? 'bg-emerald-500/5 border-emerald-500/60 ring-2 ring-emerald-500/20 shadow-md'
                      : 'bg-surface-elevated border-border hover:border-emerald-500/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                        {bundle.badge}
                      </span>
                      <span className="text-[11px] line-through text-on-surface-variant font-mono">
                        ${bundle.originalValue}
                      </span>
                    </div>
                    <h4 className="text-base font-black text-foreground">{bundle.name}</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed mb-3">
                      {bundle.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-border/60">
                      {bundle.included.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5 text-[11px] text-foreground/80">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/60 flex items-baseline justify-between">
                    <span className="text-2xl font-black text-foreground">${bundle.price}</span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Select Bundle &rarr;</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* EXECUTIVE CAMPAIGN FORECAST HUD (LINEAR/RAYCAST STYLE) */}
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface via-surface-elevated/90 to-surface border border-primary/30 ring-1 ring-primary/20 shadow-xl space-y-6">
        {/* Ambient Radial Glow Highlight */}
        <div 
          className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Top Header & Share Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-primary">
              CAMPAIGN FORECAST &amp; ROI SUMMARY
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyBrief}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-surface border border-border hover:border-primary/50 text-xs font-semibold text-foreground transition-all cursor-pointer shadow-2xs"
          >
            {copiedBrief ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-bold">Brief Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-on-surface-variant" />
                <span>Copy Campaign Brief</span>
              </>
            )}
          </button>
        </div>

        {/* Large Investment & Forecast Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tile 1: Total Investment */}
          <div className="p-4 rounded-2xl bg-surface border border-border/80 shadow-2xs">
            <div className="text-[11px] font-mono uppercase text-on-surface-variant font-medium">
              Total Package Investment
            </div>
            <div className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mt-1">
              ${activeMetrics.totalPrice}
            </div>
            <div className="text-[11px] text-on-surface-variant font-mono mt-0.5">
              {activeMetrics.billingText}
            </div>
            {activeMetrics.savingsText && (
              <div className="mt-2 text-[10px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block">
                {activeMetrics.savingsText}
              </div>
            )}
          </div>

          {/* Tile 2: Targeted Impressions */}
          <div className="p-4 rounded-2xl bg-surface border border-border/80 shadow-2xs">
            <div className="text-[11px] font-mono uppercase text-on-surface-variant font-medium flex items-center justify-between">
              <span>Targeted Reach</span>
              <Users className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mt-1">
              {activeMetrics.impressions.toLocaleString()}+
            </div>
            <div className="text-[11px] text-on-surface-variant font-mono mt-0.5">
              High-intent AI software buyers
            </div>
            <div className="mt-2 text-[10px] font-mono text-foreground/70">
              80%+ Tier-1 Geo (US, EU, UK)
            </div>
          </div>

          {/* Tile 3: Projected High-Intent Clicks */}
          <div className="p-4 rounded-2xl bg-surface border border-border/80 shadow-2xs">
            <div className="text-[11px] font-mono uppercase text-on-surface-variant font-medium flex items-center justify-between">
              <span>Projected Clicks</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mt-1">
              ~{activeMetrics.clicks.toLocaleString()}
            </div>
            <div className="text-[11px] text-on-surface-variant font-mono mt-0.5">
              Intent-driven commercial visits
            </div>
            <div className="mt-2 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              Ready-to-buy software shoppers
            </div>
          </div>

          {/* Tile 4: Effective CPC vs Google Ads */}
          <div className="p-4 rounded-2xl bg-surface border border-border/80 shadow-2xs">
            <div className="text-[11px] font-mono uppercase text-on-surface-variant font-medium">
              Effective Cost Per Click
            </div>
            <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mt-1">
              ${activeMetrics.effectiveCpc}
            </div>
            <div className="text-[11px] text-on-surface-variant font-mono mt-0.5">
              vs $8.50–$14.00 on Google Search
            </div>
            <div className="mt-2 text-[10px] font-mono text-primary font-bold">
              Up to 90% Cost Savings
            </div>
          </div>
        </div>

        {/* Action Bar: Book via Stripe Invoice or Inquire */}
        <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-on-surface-variant">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              <strong>Guaranteed SLA:</strong> 24 business hour turnaround &bull; 100% full refund guarantee if rejected
            </span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={mailtoHref}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-primary hover:bg-rose-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-primary/25 hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              <span>Book Selected Campaign (${activeMetrics.totalPrice})</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
