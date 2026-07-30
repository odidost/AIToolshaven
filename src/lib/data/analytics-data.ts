export type DateRangeOption = 'today' | 'yesterday' | '7d' | '30d' | '90d' | 'year' | 'custom';

export interface KpiMetric {
  title: string;
  key: string;
  value: string;
  numericValue: number;
  changePercent: number; // e.g. +14.2 or -3.1
  isPositiveGood: boolean; // false for bounce rate
  prevPeriodValue: string;
  sparkline: number[];
  unit?: string;
}

export interface LiveVisitor {
  id: string;
  pageTitle: string;
  url: string;
  country: string;
  countryCode: string;
  flag: string;
  city: string;
  device: 'Desktop' | 'Mobile' | 'Tablet';
  browser: 'Chrome' | 'Safari' | 'Firefox' | 'Edge' | 'Brave' | 'Opera';
  os: string;
  secondsOnPage: number;
  ipMasked: string;
  status: 'Guest' | 'Registered User';
}

export interface GeoCountryData {
  country: string;
  code: string;
  flag: string;
  continent: string;
  visitors: number;
  sessions: number;
  percentage: number;
  trend: number[];
  topCity: string;
}

export interface TrafficSource {
  source: string;
  visitors: number;
  sessions: number;
  percentage: number;
  bounceRate: number;
  avgDuration: string;
  affiliateClicks: number;
  conversionRate: number;
  icon: string;
  color: string;
}

export interface DeviceData {
  device: string;
  visitors: number;
  percentage: number;
  bounceRate: number;
  avgDuration: string;
  icon: string;
}

export interface OsData {
  os: string;
  visitors: number;
  percentage: number;
  icon: string;
}

export interface BrowserData {
  browser: string;
  visitors: number;
  percentage: number;
  version: string;
  icon: string;
}

export interface PagePerformance {
  title: string;
  url: string;
  views: number;
  uniqueViews: number;
  avgTime: string;
  bounceRate: number;
  exitRate: number;
  conversions: number;
  bookmarks: number;
  shares: number;
  compares: number;
}

export interface ToolPerformance {
  id: string;
  name: string;
  slug: string;
  category: string;
  views: number;
  bookmarks: number;
  affiliateClicks: number;
  compares: number;
  shares: number;
  rating: number;
  growthPercent: number;
  isTrending: boolean;
}

export interface SearchQueryItem {
  query: string;
  searches: number;
  clicks: number;
  ctr: number;
  hasResults: boolean;
  topResultClicked?: string;
  growth: number;
}

export interface JourneyStep {
  step: string;
  count: number;
  dropoffRate: number;
  description: string;
}

export interface UserAccountItem {
  id: string;
  name: string;
  email: string;
  country: string;
  city: string;
  device: string;
  browser: string;
  lastActive: string;
  bookmarksCount: number;
  comparisonsCount: number;
  joinedDate: string;
  status: 'Active' | 'Inactive' | 'New';
  avatarInitials: string;
}

export interface ReferralItem {
  domain: string;
  visitors: number;
  sessions: number;
  conversions: number;
  conversionRate: number;
  topLandingPage: string;
}

export interface SeoMetric {
  landingPage: string;
  organicVisits: number;
  keywordCount: number;
  topKeyword: string;
  ctr: number;
  impressions: number;
  position: number;
}

export interface CoreWebVitals {
  lcp: { value: string; score: 'good' | 'needs-improvement' | 'poor'; label: string };
  cls: { value: string; score: 'good' | 'needs-improvement' | 'poor'; label: string };
  inp: { value: string; score: 'good' | 'needs-improvement' | 'poor'; label: string };
  ttfb: { value: string; score: 'good' | 'needs-improvement' | 'poor'; label: string };
  avgLoadTime: string;
  fastestPages: Array<{ url: string; speed: string }>;
  slowestPages: Array<{ url: string; speed: string; issue: string }>;
}

export interface AnalyticsDataset {
  kpis: KpiMetric[];
  geography: GeoCountryData[];
  trafficSources: TrafficSource[];
  devices: DeviceData[];
  osList: OsData[];
  browsers: BrowserData[];
  topPages: PagePerformance[];
  toolsPerformance: ToolPerformance[];
  searchAnalytics: SearchQueryItem[];
  userJourney: JourneyStep[];
  scrollDepth: Array<{ depth: string; percentage: number }>;
  sessionDurations: Array<{ range: string; count: number; percentage: number }>;
  userAccounts: UserAccountItem[];
  userStats: {
    totalRegistered: number;
    newUsers: number;
    activeUsers: number;
    inactiveUsers: number;
    avgBookmarksPerUser: number;
    avgSavedComparisons: number;
    totalSavedWorkflows: number;
  };
  audience: {
    ageBrackets: Array<{ age: string; percentage: number }>;
    languages: Array<{ language: string; code: string; percentage: number }>;
    timezones: Array<{ zone: string; percentage: number }>;
    screenResolutions: Array<{ res: string; percentage: number }>;
    themePreference: { dark: number; light: number; system: number };
    networkTypes: Array<{ type: string; percentage: number }>;
  };
  referrals: ReferralItem[];
  seoMetrics: SeoMetric[];
  seoOverview: {
    totalIndexedPages: number;
    total404Errors: number;
    avgCtr: number;
    totalImpressions: number;
    error404Logs: Array<{ url: string; count: number; lastDetected: string }>;
  };
  webVitals: CoreWebVitals;
  conversions: Array<{ goal: string; count: number; value: string; change: number }>;
}

// Data Multipliers based on date range
const RANGE_MULTIPLIERS: Record<DateRangeOption, number> = {
  today: 0.12,
  yesterday: 0.11,
  '7d': 0.35,
  '30d': 1.0,
  '90d': 2.8,
  year: 11.2,
  custom: 1.0,
};

export function getAnalyticsData(range: DateRangeOption = '30d'): AnalyticsDataset {
  const m = RANGE_MULTIPLIERS[range] || 1.0;
  const mult = (val: number) => Math.round(val * m);

  return {
    kpis: [
      {
        title: 'Total Visitors',
        key: 'visitors',
        value: mult(148920).toLocaleString(),
        numericValue: mult(148920),
        changePercent: 14.2,
        isPositiveGood: true,
        prevPeriodValue: mult(130400).toLocaleString(),
        sparkline: [42, 48, 55, 53, 62, 70, 78, 84, 91, 98],
      },
      {
        title: 'Unique Visitors',
        key: 'unique_visitors',
        value: mult(94310).toLocaleString(),
        numericValue: mult(94310),
        changePercent: 9.8,
        isPositiveGood: true,
        prevPeriodValue: mult(85890).toLocaleString(),
        sparkline: [30, 35, 41, 39, 45, 52, 59, 64, 70, 75],
      },
      {
        title: 'Registered Users',
        key: 'registered_users',
        value: mult(12840).toLocaleString(),
        numericValue: mult(12840),
        changePercent: 18.5,
        isPositiveGood: true,
        prevPeriodValue: mult(10835).toLocaleString(),
        sparkline: [12, 14, 18, 22, 28, 35, 42, 51, 60, 68],
      },
      {
        title: 'Returning Visitors',
        key: 'returning_visitors',
        value: mult(54610).toLocaleString(),
        numericValue: mult(54610),
        changePercent: 11.3,
        isPositiveGood: true,
        prevPeriodValue: mult(49060).toLocaleString(),
        sparkline: [22, 24, 26, 31, 33, 38, 41, 46, 50, 54],
      },
      {
        title: 'New Visitors Today',
        key: 'new_visitors_today',
        value: mult(3412).toLocaleString(),
        numericValue: mult(3412),
        changePercent: 22.1,
        isPositiveGood: true,
        prevPeriodValue: mult(2794).toLocaleString(),
        sparkline: [10, 15, 12, 20, 25, 28, 32, 40, 48, 55],
      },
      {
        title: 'Active Users Right Now',
        key: 'active_now',
        value: '58',
        numericValue: 58,
        changePercent: 8.5,
        isPositiveGood: true,
        prevPeriodValue: '53 live',
        sparkline: [45, 50, 48, 52, 55, 61, 58, 62, 54, 58],
      },
      {
        title: 'Total Page Views',
        key: 'page_views',
        value: mult(412890).toLocaleString(),
        numericValue: mult(412890),
        changePercent: 15.7,
        isPositiveGood: true,
        prevPeriodValue: mult(356860).toLocaleString(),
        sparkline: [110, 125, 140, 135, 160, 185, 200, 220, 245, 270],
      },
      {
        title: 'Avg Session Duration',
        key: 'avg_duration',
        value: '3m 42s',
        numericValue: 222,
        changePercent: 8.4,
        isPositiveGood: true,
        prevPeriodValue: '3m 25s',
        sparkline: [180, 185, 192, 198, 205, 210, 215, 218, 220, 222],
      },
      {
        title: 'Bounce Rate',
        key: 'bounce_rate',
        value: '38.4%',
        numericValue: 38.4,
        changePercent: -3.1,
        isPositiveGood: false,
        prevPeriodValue: '41.5%',
        sparkline: [45, 44, 43, 42, 41, 40, 39.5, 39, 38.8, 38.4],
      },
      {
        title: 'Pages Per Session',
        key: 'pages_per_session',
        value: '3.82',
        numericValue: 3.82,
        changePercent: 5.2,
        isPositiveGood: true,
        prevPeriodValue: '3.63',
        sparkline: [3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.65, 3.72, 3.78, 3.82],
      },
    ],

    geography: [
      { country: 'United States', code: 'US', flag: '🇺🇸', continent: 'North America', visitors: mult(52480), sessions: mult(64200), percentage: 35.2, trend: [40, 45, 52, 60, 68], topCity: 'New York' },
      { country: 'United Kingdom', code: 'GB', flag: '🇬🇧', continent: 'Europe', visitors: mult(18950), sessions: mult(23100), percentage: 12.7, trend: [15, 18, 20, 22, 25], topCity: 'London' },
      { country: 'India', code: 'IN', flag: '🇮🇳', continent: 'Asia', visitors: mult(16820), sessions: mult(20400), percentage: 11.3, trend: [12, 15, 19, 24, 28], topCity: 'Bengaluru' },
      { country: 'Nigeria', code: 'NG', flag: '🇳🇬', continent: 'Africa', visitors: mult(11240), sessions: mult(13800), percentage: 7.5, trend: [8, 10, 13, 16, 19], topCity: 'Lagos' },
      { country: 'Canada', code: 'CA', flag: '🇨🇦', continent: 'North America', visitors: mult(9850), sessions: mult(11900), percentage: 6.6, trend: [9, 10, 11, 12, 14], topCity: 'Toronto' },
      { country: 'Germany', code: 'DE', flag: '🇩🇪', continent: 'Europe', visitors: mult(8420), sessions: mult(10200), percentage: 5.7, trend: [7, 8, 9, 10, 12], topCity: 'Berlin' },
      { country: 'France', code: 'FR', flag: '🇫🇷', continent: 'Europe', visitors: mult(6910), sessions: mult(8400), percentage: 4.6, trend: [5, 6, 7, 8, 10], topCity: 'Paris' },
      { country: 'Australia', code: 'AU', flag: '🇦🇺', continent: 'Oceania', visitors: mult(6120), sessions: mult(7500), percentage: 4.1, trend: [5, 5, 6, 7, 9], topCity: 'Sydney' },
      { country: 'Japan', code: 'JP', flag: '🇯🇵', continent: 'Asia', visitors: mult(5890), sessions: mult(7100), percentage: 3.9, trend: [4, 5, 6, 7, 8], topCity: 'Tokyo' },
      { country: 'Brazil', code: 'BR', flag: '🇧🇷', continent: 'South America', visitors: mult(4740), sessions: mult(5800), percentage: 3.2, trend: [3, 4, 5, 6, 7], topCity: 'São Paulo' },
    ],

    trafficSources: [
      { source: 'Google Search', visitors: mult(64250), sessions: mult(78900), percentage: 43.1, bounceRate: 34.2, avgDuration: '4m 12s', affiliateClicks: mult(4820), conversionRate: 7.5, icon: 'search', color: '#4285F4' },
      { source: 'Direct Traffic', visitors: mult(29810), sessions: mult(36200), percentage: 20.0, bounceRate: 31.5, avgDuration: '4m 45s', affiliateClicks: mult(3120), conversionRate: 10.4, icon: 'bolt', color: '#0F172A' },
      { source: 'X (Twitter)', visitors: mult(14850), sessions: mult(18200), percentage: 10.0, bounceRate: 42.1, avgDuration: '2m 50s', affiliateClicks: mult(1420), conversionRate: 7.8, icon: 'share', color: '#1DA1F2' },
      { source: 'Reddit', visitors: mult(12400), sessions: mult(15100), percentage: 8.3, bounceRate: 45.8, avgDuration: '3m 10s', affiliateClicks: mult(1180), conversionRate: 7.8, icon: 'forum', color: '#FF4500' },
      { source: 'ChatGPT & OpenAI', visitors: mult(9820), sessions: mult(12400), percentage: 6.6, bounceRate: 28.4, avgDuration: '5m 05s', affiliateClicks: mult(1640), conversionRate: 13.2, icon: 'smart_toy', color: '#10A37F' },
      { source: 'LinkedIn', visitors: mult(6410), sessions: mult(7900), percentage: 4.3, bounceRate: 36.9, avgDuration: '3m 30s', affiliateClicks: mult(620), conversionRate: 7.8, icon: 'work', color: '#0A66C2' },
      { source: 'YouTube', visitors: mult(4890), sessions: mult(6100), percentage: 3.3, bounceRate: 39.2, avgDuration: '3m 55s', affiliateClicks: mult(510), conversionRate: 8.3, icon: 'play_circle', color: '#FF0000' },
      { source: 'Bing Search', visitors: mult(3210), sessions: mult(3900), percentage: 2.2, bounceRate: 38.0, avgDuration: '3m 15s', affiliateClicks: mult(240), conversionRate: 6.1, icon: 'find_in_page', color: '#008373' },
      { source: 'Email Newsletter', visitors: mult(2280), sessions: mult(2900), percentage: 1.5, bounceRate: 22.4, avgDuration: '5m 40s', affiliateClicks: mult(480), conversionRate: 16.5, icon: 'mail', color: '#6366F1' },
      { source: 'Other / Referrals', visitors: mult(1050), sessions: mult(1300), percentage: 0.7, bounceRate: 48.0, avgDuration: '2m 10s', affiliateClicks: mult(90), conversionRate: 6.9, icon: 'link', color: '#64748B' },
    ],

    devices: [
      { device: 'Desktop', visitors: mult(86370), percentage: 58.0, bounceRate: 35.2, avgDuration: '4m 15s', icon: 'desktop_windows' },
      { device: 'Mobile', visitors: mult(53610), percentage: 36.0, bounceRate: 43.1, avgDuration: '2m 55s', icon: 'smartphone' },
      { device: 'Tablet', visitors: mult(8940), percentage: 6.0, bounceRate: 40.8, avgDuration: '3m 20s', icon: 'tablet_mac' },
    ],

    osList: [
      { os: 'Windows', visitors: mult(56590), percentage: 38.0, icon: 'window' },
      { os: 'macOS', visitors: mult(35740), percentage: 24.0, icon: 'laptop_mac' },
      { os: 'iOS (iPhone)', visitors: mult(31270), percentage: 21.0, icon: 'phone_iphone' },
      { os: 'Android', visitors: mult(19360), percentage: 13.0, icon: 'adb' },
      { os: 'Linux', visitors: mult(5960), percentage: 4.0, icon: 'terminal' },
    ],

    browsers: [
      { browser: 'Chrome', visitors: mult(93820), percentage: 63.0, version: 'v126.0', icon: 'chrome_reader_mode' },
      { browser: 'Safari', visitors: mult(29780), percentage: 20.0, version: 'v17.5', icon: 'explore' },
      { browser: 'Edge', visitors: mult(11910), percentage: 8.0, version: 'v126.0', icon: 'edge' },
      { browser: 'Firefox', visitors: mult(7450), percentage: 5.0, version: 'v127.0', icon: 'local_fire_department' },
      { browser: 'Brave', visitors: mult(4470), percentage: 3.0, version: 'v1.67', icon: 'shield' },
      { browser: 'Opera', visitors: mult(1490), percentage: 1.0, version: 'v109', icon: 'public' },
    ],

    topPages: [
      { title: 'AI Tools Directory Home', url: '/', views: mult(98400), uniqueViews: mult(72100), avgTime: '3m 10s', bounceRate: 32.1, exitRate: 21.4, conversions: mult(3890), bookmarks: mult(1240), shares: mult(890), compares: mult(1420) },
      { title: 'Top ChatGPT Alternatives for Coding & Writing', url: '/editorial/top-chatgpt-alternatives', views: mult(42100), uniqueViews: mult(35600), avgTime: '5m 24s', bounceRate: 28.4, exitRate: 18.2, conversions: mult(4120), bookmarks: mult(1890), shares: mult(1120), compares: mult(950) },
      { title: 'Cursor vs GitHub Copilot Comparison', url: '/compare/cursor-vs-github-copilot', views: mult(34800), uniqueViews: mult(29100), avgTime: '6m 12s', bounceRate: 24.5, exitRate: 15.1, conversions: mult(3450), bookmarks: mult(1420), shares: mult(780), compares: mult(3480) },
      { title: 'Coding AI Tools Category', url: '/category/coding-ai', views: mult(28900), uniqueViews: mult(22400), avgTime: '4m 05s', bounceRate: 35.8, exitRate: 24.0, conversions: mult(2110), bookmarks: mult(840), shares: mult(410), compares: mult(1120) },
      { title: 'Midjourney v6.1 Review & Guide', url: '/tool/midjourney', views: mult(26400), uniqueViews: mult(21800), avgTime: '4m 45s', bounceRate: 31.0, exitRate: 22.5, conversions: mult(1840), bookmarks: mult(960), shares: mult(650), compares: mult(740) },
      { title: 'Best AI Image Generators of 2026', url: '/category/image-generators', views: mult(22100), uniqueViews: mult(18200), avgTime: '4m 15s', bounceRate: 34.2, exitRate: 25.8, conversions: mult(1590), bookmarks: mult(710), shares: mult(490), compares: mult(890) },
      { title: 'Claude 3.5 Sonnet Tool Details', url: '/tool/claude-3-5-sonnet', views: mult(21400), uniqueViews: mult(17900), avgTime: '5m 02s', bounceRate: 29.8, exitRate: 19.4, conversions: mult(2280), bookmarks: mult(1150), shares: mult(810), compares: mult(1620) },
      { title: 'AI Automation Workflows Guide', url: '/workflows', views: mult(18900), uniqueViews: mult(14200), avgTime: '5m 50s', bounceRate: 26.3, exitRate: 16.8, conversions: mult(1410), bookmarks: mult(980), shares: mult(520), compares: mult(410) },
      { title: 'Perplexity AI Deep Dive & Pricing', url: '/tool/perplexity-ai', views: mult(16500), uniqueViews: mult(13800), avgTime: '4m 30s', bounceRate: 30.5, exitRate: 21.0, conversions: mult(1320), bookmarks: mult(640), shares: mult(380), compares: mult(890) },
      { title: 'Submit an AI Tool', url: '/submit', views: mult(12400), uniqueViews: mult(9100), avgTime: '2m 45s', bounceRate: 42.0, exitRate: 38.5, conversions: mult(940), bookmarks: mult(120), shares: mult(90), compares: mult(40) },
    ],

    toolsPerformance: [
      { id: 'cursor', name: 'Cursor AI', slug: 'cursor', category: 'Coding', views: mult(38900), bookmarks: mult(2450), affiliateClicks: mult(4120), compares: mult(3210), shares: mult(1450), rating: 4.9, growthPercent: 42.8, isTrending: true },
      { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', slug: 'claude-3-5-sonnet', category: 'LLMs & Chat', views: mult(36200), bookmarks: mult(2890), affiliateClicks: mult(3890), compares: mult(2980), shares: mult(1680), rating: 4.95, growthPercent: 38.4, isTrending: true },
      { id: 'midjourney-v6', name: 'Midjourney', slug: 'midjourney', category: 'Image Generation', views: mult(31400), bookmarks: mult(2120), affiliateClicks: mult(2940), compares: mult(1890), shares: mult(1240), rating: 4.8, growthPercent: 18.2, isTrending: false },
      { id: 'perplexity', name: 'Perplexity AI', slug: 'perplexity-ai', category: 'Search & Research', views: mult(28500), bookmarks: mult(1980), affiliateClicks: mult(2810), compares: mult(2140), shares: mult(980), rating: 4.85, growthPercent: 31.5, isTrending: true },
      { id: 'elevenlabs', name: 'ElevenLabs Voice', slug: 'elevenlabs', category: 'Voice & Audio', views: mult(24100), bookmarks: mult(1650), affiliateClicks: mult(2450), compares: mult(1420), shares: mult(860), rating: 4.75, growthPercent: 26.0, isTrending: true },
      { id: 'runway-gen3', name: 'Runway Gen-3', slug: 'runway-gen3', category: 'Video Creation', views: mult(21800), bookmarks: mult(1480), affiliateClicks: mult(1920), compares: mult(1180), shares: mult(720), rating: 4.7, growthPercent: 35.1, isTrending: true },
      { id: 'notion-ai', name: 'Notion AI Workspace', slug: 'notion-ai', category: 'Productivity', views: mult(19400), bookmarks: mult(1220), affiliateClicks: mult(1640), compares: mult(950), shares: mult(490), rating: 4.6, growthPercent: 12.4, isTrending: false },
      { id: 'v0-dev', name: 'v0 by Vercel', slug: 'v0-dev', category: 'UI Code Gen', views: mult(18200), bookmarks: mult(1740), affiliateClicks: mult(2180), compares: mult(1650), shares: mult(920), rating: 4.88, growthPercent: 54.2, isTrending: true },
    ],

    searchAnalytics: [
      { query: 'free ai coding assistant', searches: mult(4210), clicks: mult(3580), ctr: 85.0, hasResults: true, topResultClicked: 'Cursor AI', growth: 34.2 },
      { query: 'best chatgpt alternative for research', searches: mult(3890), clicks: mult(3240), ctr: 83.2, hasResults: true, topResultClicked: 'Perplexity AI', growth: 28.5 },
      { query: 'open source voice generator', searches: mult(2940), clicks: mult(2310), ctr: 78.5, hasResults: true, topResultClicked: 'Bark Audio', growth: 42.1 },
      { query: 'midjourney v6 promo code', searches: mult(2180), clicks: mult(1420), ctr: 65.1, hasResults: true, topResultClicked: 'Midjourney Pricing', growth: 18.0 },
      { query: 'ai video generator no watermark', searches: mult(1890), clicks: mult(1410), ctr: 74.6, hasResults: true, topResultClicked: 'Luma Dream Machine', growth: 61.4 },
      { query: 'free veo 2 video generator', searches: mult(1450), clicks: 0, ctr: 0, hasResults: false, growth: 120.0 },
      { query: 'local deepseek r1 setup guide', searches: mult(1280), clicks: 0, ctr: 0, hasResults: false, growth: 145.0 },
      { query: 'bolt.new vs v0 comparison', searches: mult(1120), clicks: 0, ctr: 0, hasResults: false, growth: 95.0 },
      { query: 'ai agent workflow builder free', searches: mult(980), clicks: 0, ctr: 0, hasResults: false, growth: 82.0 },
    ],

    userJourney: [
      { step: '1. Landing / Homepage', count: mult(148920), dropoffRate: 0, description: 'User arrives via Search, Direct, or Social' },
      { step: '2. Category / Search', count: mult(94210), dropoffRate: 36.7, description: 'Explores AI tool categories or internal search' },
      { step: '3. Tool Detail Page', count: mult(62480), dropoffRate: 33.7, description: 'Reads pricing, features, pros & cons' },
      { step: '4. Side-by-side Comparison', count: mult(28410), dropoffRate: 54.5, description: 'Compares tool against competitors' },
      { step: '5. Affiliate / Website Click', count: mult(14820), dropoffRate: 47.8, description: 'Clicks outbound partner referral link' },
    ],

    scrollDepth: [
      { depth: '25% Scroll (Above the Fold)', percentage: 94.2 },
      { depth: '50% Scroll (Features & Pricing)', percentage: 76.5 },
      { depth: '75% Scroll (Reviews & Alternatives)', percentage: 54.1 },
      { depth: '100% Scroll (Footer & Recommendations)', percentage: 31.8 },
    ],

    sessionDurations: [
      { range: '0 - 10s', count: mult(21400), percentage: 14.3 },
      { range: '10s - 1m', count: mult(32100), percentage: 21.5 },
      { range: '1m - 3m', count: mult(48900), percentage: 32.8 },
      { range: '3m - 10m', count: mult(34800), percentage: 23.3 },
      { range: '10m+', count: mult(11720), percentage: 7.9 },
    ],

    userAccounts: [
      { id: 'usr-1', name: 'Alex Rivera', email: 'alex.rivera@techstudio.io', country: 'United States', city: 'San Francisco', device: 'Desktop', browser: 'Chrome', lastActive: '2 mins ago', bookmarksCount: 14, comparisonsCount: 8, joinedDate: '2026-01-12', status: 'Active', avatarInitials: 'AR' },
      { id: 'usr-2', name: 'Sophia Chen', email: 'sophia.c@designflow.co', country: 'Canada', city: 'Toronto', device: 'Desktop', browser: 'Safari', lastActive: '18 mins ago', bookmarksCount: 22, comparisonsCount: 12, joinedDate: '2026-02-04', status: 'Active', avatarInitials: 'SC' },
      { id: 'usr-3', name: 'Devon Kwame', email: 'devon.k@devlab.ng', country: 'Nigeria', city: 'Lagos', device: 'Mobile', browser: 'Chrome', lastActive: '45 mins ago', bookmarksCount: 9, comparisonsCount: 4, joinedDate: '2026-03-18', status: 'New', avatarInitials: 'DK' },
      { id: 'usr-4', name: 'Elena Rostova', email: 'elena.rostova@ai-agency.de', country: 'Germany', city: 'Berlin', device: 'Desktop', browser: 'Firefox', lastActive: '2 hours ago', bookmarksCount: 31, comparisonsCount: 19, joinedDate: '2025-11-20', status: 'Active', avatarInitials: 'ER' },
      { id: 'usr-5', name: 'Rohan Sharma', email: 'rohan.s@buildfast.in', country: 'India', city: 'Bengaluru', device: 'Mobile', browser: 'Brave', lastActive: '5 hours ago', bookmarksCount: 6, comparisonsCount: 3, joinedDate: '2026-05-02', status: 'New', avatarInitials: 'RS' },
      { id: 'usr-6', name: 'Liam O\'Connor', email: 'liam.oc@startupbox.co.uk', country: 'United Kingdom', city: 'London', device: 'Desktop', browser: 'Edge', lastActive: '1 day ago', bookmarksCount: 18, comparisonsCount: 9, joinedDate: '2025-09-14', status: 'Active', avatarInitials: 'LO' },
      { id: 'usr-7', name: 'Yuki Tanaka', email: 'yuki.tanaka@media-next.jp', country: 'Japan', city: 'Tokyo', device: 'Desktop', browser: 'Chrome', lastActive: '3 days ago', bookmarksCount: 5, comparisonsCount: 2, joinedDate: '2026-06-11', status: 'Inactive', avatarInitials: 'YT' },
      { id: 'usr-8', name: 'Mateo Silva', email: 'mateo.silva@creativelab.br', country: 'Brazil', city: 'São Paulo', device: 'Mobile', browser: 'Chrome', lastActive: '5 days ago', bookmarksCount: 11, comparisonsCount: 6, joinedDate: '2026-04-19', status: 'Active', avatarInitials: 'MS' },
    ],

    userStats: {
      totalRegistered: mult(12840),
      newUsers: mult(1420),
      activeUsers: mult(8940),
      inactiveUsers: mult(2480),
      avgBookmarksPerUser: 8.4,
      avgSavedComparisons: 4.2,
      totalSavedWorkflows: mult(3410),
    },

    audience: {
      ageBrackets: [
        { age: '18 - 24', percentage: 22.4 },
        { age: '25 - 34', percentage: 48.6 },
        { age: '35 - 44', percentage: 18.2 },
        { age: '45 - 54', percentage: 7.3 },
        { age: '55+', percentage: 3.5 },
      ],
      languages: [
        { language: 'English (US/UK)', code: 'en', percentage: 68.4 },
        { language: 'Spanish', code: 'es', percentage: 8.2 },
        { language: 'German', code: 'de', percentage: 6.1 },
        { language: 'French', code: 'fr', percentage: 5.4 },
        { language: 'Hindi', code: 'hi', percentage: 4.8 },
        { language: 'Japanese', code: 'ja', percentage: 3.8 },
        { language: 'Portuguese', code: 'pt', percentage: 3.3 },
      ],
      timezones: [
        { zone: 'America/New_York (EST)', percentage: 32.1 },
        { zone: 'Europe/London (GMT/BST)', percentage: 18.4 },
        { zone: 'Asia/Kolkata (IST)', percentage: 14.2 },
        { zone: 'America/Los_Angeles (PST)', percentage: 12.8 },
        { zone: 'Europe/Berlin (CET)', percentage: 9.5 },
        { zone: 'Asia/Tokyo (JST)', percentage: 6.8 },
        { zone: 'Australia/Sydney (AEST)', percentage: 6.2 },
      ],
      screenResolutions: [
        { res: '1920 x 1080 (FHD Desktop)', percentage: 41.2 },
        { res: '390 x 844 (iPhone 12/13/14)', percentage: 19.5 },
        { res: '2560 x 1440 (QHD Desktop)', percentage: 14.8 },
        { res: '412 x 915 (Pixel / Android)', percentage: 11.2 },
        { res: '1536 x 864 (Laptop)', percentage: 8.1 },
        { res: '1280 x 800 (Tablet / Small)', percentage: 5.2 },
      ],
      themePreference: { dark: 64.5, light: 28.2, system: 7.3 },
      networkTypes: [
        { type: 'WiFi / Fiber Broadband', percentage: 62.4 },
        { type: '5G Mobile Network', percentage: 26.1 },
        { type: '4G LTE Network', percentage: 10.8 },
        { type: '3G / Slow Connection', percentage: 0.7 },
      ],
    },

    referrals: [
      { domain: 'google.com', visitors: mult(64250), sessions: mult(78900), conversions: mult(4820), conversionRate: 7.5, topLandingPage: '/' },
      { domain: 'chat.openai.com', visitors: mult(9820), sessions: mult(12400), conversions: mult(1640), conversionRate: 16.7, topLandingPage: '/editorial/top-chatgpt-alternatives' },
      { domain: 'reddit.com', visitors: mult(12400), sessions: mult(15100), conversions: mult(1180), conversionRate: 9.5, topLandingPage: '/compare/cursor-vs-github-copilot' },
      { domain: 'x.com', visitors: mult(14850), sessions: mult(18200), conversions: mult(1420), conversionRate: 9.6, topLandingPage: '/tool/cursor' },
      { domain: 'youtube.com', visitors: mult(4890), sessions: mult(6100), conversions: mult(510), conversionRate: 10.4, topLandingPage: '/tool/midjourney' },
      { domain: 'linkedin.com', visitors: mult(6410), sessions: mult(7900), conversions: mult(620), conversionRate: 9.7, topLandingPage: '/workflows' },
      { domain: 'github.com', visitors: mult(4120), sessions: mult(5200), conversions: mult(490), conversionRate: 11.9, topLandingPage: '/category/coding-ai' },
      { domain: 'news.ycombinator.com', visitors: mult(3210), sessions: mult(3900), conversions: mult(380), conversionRate: 11.8, topLandingPage: '/tool/claude-3-5-sonnet' },
    ],

    seoMetrics: [
      { landingPage: '/editorial/top-chatgpt-alternatives', organicVisits: mult(34100), keywordCount: 142, topKeyword: 'best chatgpt alternatives 2026', ctr: 14.8, impressions: mult(230400), position: 2.1 },
      { landingPage: '/compare/cursor-vs-github-copilot', organicVisits: mult(28400), keywordCount: 98, topKeyword: 'cursor vs github copilot', ctr: 18.2, impressions: mult(156000), position: 1.4 },
      { landingPage: '/category/coding-ai', organicVisits: mult(21900), keywordCount: 115, topKeyword: 'ai coding assistants directory', ctr: 11.5, impressions: mult(190400), position: 3.2 },
      { landingPage: '/tool/midjourney', organicVisits: mult(19800), keywordCount: 84, topKeyword: 'midjourney v6.1 features', ctr: 16.4, impressions: mult(120700), position: 2.8 },
      { landingPage: '/category/image-generators', organicVisits: mult(16400), keywordCount: 92, topKeyword: 'best ai image generator free', ctr: 9.8, impressions: mult(167300), position: 4.1 },
    ],

    seoOverview: {
      totalIndexedPages: 428,
      total404Errors: 3,
      avgCtr: 13.4,
      totalImpressions: mult(1248000),
      error404Logs: [
        { url: '/tool/old-chat-gpt-3', count: 142, lastDetected: '10 mins ago' },
        { url: '/category/legacy-bots', count: 89, lastDetected: '1 hour ago' },
        { url: '/compare/v1-versus-v2', count: 34, lastDetected: '4 hours ago' },
      ],
    },

    webVitals: {
      lcp: { value: '1.4s', score: 'good', label: 'Largest Contentful Paint (< 2.5s)' },
      cls: { value: '0.02', score: 'good', label: 'Cumulative Layout Shift (< 0.1)' },
      inp: { value: '48ms', score: 'good', label: 'Interaction to Next Paint (< 200ms)' },
      ttfb: { value: '120ms', score: 'good', label: 'Time to First Byte (< 800ms)' },
      avgLoadTime: '1.24s',
      fastestPages: [
        { url: '/', speed: '0.82s' },
        { url: '/category/coding-ai', speed: '0.91s' },
        { url: '/workflows', speed: '0.95s' },
      ],
      slowestPages: [
        { url: '/compare/cursor-vs-github-copilot', speed: '1.84s', issue: 'Heavy dynamic comparison matrix DOM' },
        { url: '/editorial/top-chatgpt-alternatives', speed: '1.72s', issue: 'Large inline screenshots optimization' },
        { url: '/admin/cms/analytics', speed: '1.45s', issue: 'Data aggregation compute' },
      ],
    },

    conversions: [
      { goal: 'Affiliate Outbound Clicks', count: mult(14820), value: '$18,525 est. rev', change: 18.4 },
      { goal: 'Tool Bookmarks Added', count: mult(8940), value: 'User Retention', change: 12.1 },
      { goal: 'Newsletter Signups', count: mult(2140), value: 'Lead Capture', change: 24.5 },
      { goal: 'Tool Comparisons Created', count: mult(6420), value: 'High Intent', change: 15.8 },
      { goal: 'AI Tool Submissions', count: mult(340), value: 'Developer Submissions', change: 8.9 },
      { goal: 'Workflow Plan Launches', count: mult(1890), value: 'User Engagement', change: 31.0 },
    ],
  };
}

export function generateLiveVisitors(): LiveVisitor[] {
  const pages = [
    { title: 'Cursor vs GitHub Copilot', url: '/compare/cursor-vs-github-copilot' },
    { title: 'Claude 3.5 Sonnet Tool Review', url: '/tool/claude-3-5-sonnet' },
    { title: 'Top ChatGPT Alternatives', url: '/editorial/top-chatgpt-alternatives' },
    { title: 'AI Tools Directory Home', url: '/' },
    { title: 'Midjourney v6.1 Guide', url: '/tool/midjourney' },
    { title: 'Coding AI Category', url: '/category/coding-ai' },
    { title: 'Perplexity AI Search', url: '/tool/perplexity-ai' },
    { title: 'AI Workflows Directory', url: '/workflows' },
  ];

  const locations = [
    { country: 'United States', code: 'US', flag: '🇺🇸', city: 'San Francisco', os: 'macOS' },
    { country: 'United Kingdom', code: 'GB', flag: '🇬🇧', city: 'London', os: 'macOS' },
    { country: 'India', code: 'IN', flag: '🇮🇳', city: 'Bengaluru', os: 'Windows' },
    { country: 'Nigeria', code: 'NG', flag: '🇳🇬', city: 'Lagos', os: 'Android' },
    { country: 'Canada', code: 'CA', flag: '🇨🇦', city: 'Toronto', os: 'iOS' },
    { country: 'Germany', code: 'DE', flag: '🇩🇪', city: 'Berlin', os: 'Linux' },
    { country: 'Japan', code: 'JP', flag: '🇯🇵', city: 'Tokyo', os: 'Windows' },
    { country: 'Australia', code: 'AU', flag: '🇦🇺', city: 'Sydney', os: 'iOS' },
  ];

  const devices: Array<'Desktop' | 'Mobile' | 'Tablet'> = ['Desktop', 'Desktop', 'Mobile', 'Mobile', 'Tablet'];
  const browsers: Array<'Chrome' | 'Safari' | 'Firefox' | 'Edge' | 'Brave'> = ['Chrome', 'Chrome', 'Safari', 'Firefox', 'Edge', 'Brave'];

  const results: LiveVisitor[] = [];
  for (let i = 1; i <= 8; i++) {
    const page = pages[i % pages.length];
    const loc = locations[i % locations.length];
    const dev = devices[i % devices.length];
    const br = browsers[i % browsers.length];
    results.push({
      id: `live-${i}-${Date.now()}`,
      pageTitle: page.title,
      url: page.url,
      country: loc.country,
      countryCode: loc.code,
      flag: loc.flag,
      city: loc.city,
      device: dev,
      browser: br,
      os: loc.os,
      secondsOnPage: Math.floor(Math.random() * 180) + 12,
      ipMasked: `192.168.${Math.floor(Math.random() * 250)}.xxx`,
      status: i % 3 === 0 ? 'Registered User' : 'Guest',
    });
  }

  return results;
}

export function exportToCSV(filename: string, rows: any[]) {
  if (!rows || !rows.length) return;
  const headers = Object.keys(rows[0]).join(',');
  const csvContent = [
    headers,
    ...rows.map(row =>
      Object.values(row)
        .map(val => (typeof val === 'string' && val.includes(',') ? `"${val}"` : val))
        .join(',')
    ),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function exportToJSON(filename: string, data: any) {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function triggerPDFPrint() {
  window.print();
}
