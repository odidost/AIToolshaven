import * as crypto from 'crypto';
import type {
  GscRow,
  GscOverviewMetrics,
  GscOpportunity,
  GscQueryCluster,
  GscCannibalizationCase,
  GscCategoryPerformance,
} from "@/lib/types/gsc";
import { categories } from "@/lib/data/categories";
import { tools as localTools } from "@/lib/data/tools";
import { comparisons } from "@/lib/comparisons";
import { calculateOpportunityScore, classifyQueryIntent, detectCannibalization, clusterQueries } from "./gsc-opportunities";

// In-memory or persisted GSC snapshot cache
let cachedGscRows: GscRow[] | null = null;
let lastSyncTimestamp: string | null = null;

export function getGscConnectionStatus(): {
  connected: boolean;
  siteUrl: string | null;
  lastSync: string | null;
  authType: 'Service Account' | 'OAuth' | 'None';
  missingEnv: string[];
} {
  const siteUrl = process.env.GSC_SITE_URL || null;
  const clientEmail = process.env.GSC_CLIENT_EMAIL || null;
  const privateKey = process.env.GSC_PRIVATE_KEY || null;

  const missingEnv: string[] = [];
  if (!siteUrl) missingEnv.push('GSC_SITE_URL');
  if (!clientEmail) missingEnv.push('GSC_CLIENT_EMAIL');
  if (!privateKey) missingEnv.push('GSC_PRIVATE_KEY');

  const connected = Boolean(siteUrl && clientEmail && privateKey);

  return {
    connected,
    siteUrl,
    lastSync: lastSyncTimestamp,
    authType: connected ? 'Service Account' : 'None',
    missingEnv,
  };
}

async function getGoogleServiceAccountAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const encodedClaim = Buffer.from(JSON.stringify(claim)).toString('base64url');
  const signInput = `${encodedHeader}.${encodedClaim}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  const formattedKey = privateKey.replace(/\\n/g, '\n');
  const signature = signer.sign(formattedKey, 'base64url');
  const jwt = `${signInput}.${signature}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    throw new Error(`Google OAuth token exchange failed (${tokenRes.status}): ${errText}`);
  }

  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

/**
 * Fetch raw GSC rows for a given time window.
 * When GSC API is not configured (State C), returns empty rows
 * without fabricating external Google search data.
 */
export async function getGscRows(window: '7d' | '28d' | '90d' = '28d'): Promise<GscRow[]> {
  const status = getGscConnectionStatus();

  // If live credentials exist, fetch from Google Search Console API
  if (status.connected && process.env.GSC_SITE_URL && process.env.GSC_CLIENT_EMAIL && process.env.GSC_PRIVATE_KEY) {
    try {
      const accessToken = await getGoogleServiceAccountAccessToken(
        process.env.GSC_CLIENT_EMAIL,
        process.env.GSC_PRIVATE_KEY
      );

      const days = window === '7d' ? 7 : (window === '90d' ? 90 : 28);
      const now = new Date();
      const endDate = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // GSC has ~2-day lag
      const startDate = new Date(now.getTime() - (days + 2) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      const apiUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(process.env.GSC_SITE_URL)}/searchAnalytics/query`;
      const queryRes = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions: ['query', 'page', 'country', 'device', 'date'],
          rowLimit: 25000,
        }),
      });

      if (!queryRes.ok) {
        const errText = await queryRes.text();
        console.error(`Google Search Console API error (${queryRes.status}):`, errText);
        return cachedGscRows || [];
      }

      const queryData = await queryRes.json();
      const rawRows: Array<any> = queryData.rows || [];

      const parsedRows: GscRow[] = rawRows.map((r: any) => ({
        query: r.keys?.[0] || '',
        page: r.keys?.[1] || '',
        country: r.keys?.[2] || 'UNKNOWN',
        device: r.keys?.[3] || 'DESKTOP',
        date: r.keys?.[4] || '',
        clicks: r.clicks || 0,
        impressions: r.impressions || 0,
        ctr: r.ctr ? Number((r.ctr * 100).toFixed(2)) : 0,
        position: r.position ? Number(r.position.toFixed(1)) : 0,
      }));

      cachedGscRows = parsedRows;
      lastSyncTimestamp = new Date().toISOString();
      return parsedRows;
    } catch (err) {
      console.error("Failed fetching live GSC API data:", err);
      return cachedGscRows || [];
    }
  }

  // State C: GSC API not connected yet
  return cachedGscRows || [];
}

/**
 * Overview performance metrics.
 */
export async function getGscOverview(window: '7d' | '28d' | '90d' = '28d'): Promise<GscOverviewMetrics> {
  const status = getGscConnectionStatus();
  const rows = await getGscRows(window);

  const totalClicks = rows.reduce((sum, r) => sum + r.clicks, 0);
  const totalImpressions = rows.reduce((sum, r) => sum + r.impressions, 0);
  const averageCtr = totalImpressions > 0 ? Number(((totalClicks / totalImpressions) * 100).toFixed(2)) : 0;
  const averagePosition = rows.length > 0
    ? Number((rows.reduce((sum, r) => sum + r.position, 0) / rows.length).toFixed(1))
    : 0;

  const distinctPages = new Set(rows.map(r => r.page)).size;

  const now = new Date();
  const days = window === '7d' ? 7 : (window === '90d' ? 90 : 28);
  const startDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const endDate = now.toISOString().split('T')[0];

  return {
    totalClicks,
    totalImpressions,
    averageCtr,
    averagePosition,
    pagesReceivingImpressions: distinctPages,
    clicksChangePct: 0,
    impressionsChangePct: 0,
    ctrChangePct: 0,
    positionChange: 0,
    dateRange: {
      start: startDate,
      end: endDate,
    },
    connectionStatus: {
      connected: status.connected,
      siteUrl: status.siteUrl,
      lastSync: status.lastSync,
      authType: status.authType,
    },
  };
}

/**
 * Top Search Queries with intent classification.
 */
export async function getTopQueries(limit: number = 20): Promise<Array<{
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  intent: string;
  isBranded: boolean;
}>> {
  const rows = await getGscRows('28d');
  const map = new Map<string, { clicks: number; impressions: number; weightedPos: number }>();

  for (const r of rows) {
    if (!r.query) continue;
    const existing = map.get(r.query) || { clicks: 0, impressions: 0, weightedPos: 0 };
    map.set(r.query, {
      clicks: existing.clicks + r.clicks,
      impressions: existing.impressions + r.impressions,
      weightedPos: existing.weightedPos + r.position * r.impressions,
    });
  }

  return Array.from(map.entries())
    .map(([query, data]) => {
      const { intent, isBranded } = classifyQueryIntent(query);
      const ctr = data.impressions > 0 ? Number(((data.clicks / data.impressions) * 100).toFixed(2)) : 0;
      const position = data.impressions > 0 ? Number((data.weightedPos / data.impressions).toFixed(1)) : 0;
      return {
        query,
        clicks: data.clicks,
        impressions: data.impressions,
        ctr,
        position,
        intent,
        isBranded,
      };
    })
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, limit);
}

/**
 * Top Pages with traffic and quality stats.
 */
export async function getTopPages(limit: number = 20): Promise<Array<{
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  toolName?: string;
  category?: string;
}>> {
  const rows = await getGscRows('28d');
  const map = new Map<string, { clicks: number; impressions: number; weightedPos: number }>();

  for (const r of rows) {
    if (!r.page) continue;
    const existing = map.get(r.page) || { clicks: 0, impressions: 0, weightedPos: 0 };
    map.set(r.page, {
      clicks: existing.clicks + r.clicks,
      impressions: existing.impressions + r.impressions,
      weightedPos: existing.weightedPos + r.position * r.impressions,
    });
  }

  return Array.from(map.entries())
    .map(([page, data]) => {
      const ctr = data.impressions > 0 ? Number(((data.clicks / data.impressions) * 100).toFixed(2)) : 0;
      const position = data.impressions > 0 ? Number((data.weightedPos / data.impressions).toFixed(1)) : 0;
      return {
        page,
        clicks: data.clicks,
        impressions: data.impressions,
        ctr,
        position,
      };
    })
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, limit);
}

/**
 * Category Performance Ranking.
 */
export async function getCategoryPerformance(): Promise<GscCategoryPerformance[]> {
  const rows = await getGscRows('28d');
  const publishedTools = localTools.filter(t => t.status === "Published" || t.status === "published" || !t.status);

  return categories.map((cat, idx) => {
    const toolsInCat = publishedTools.filter(t => t.category === cat.id || t.category === cat.slug);
    const catPageUrl = `/category/${cat.slug}`;

    const catRows = rows.filter(r => r.page.startsWith(catPageUrl) || toolsInCat.some(t => r.page === `/tool/${t.slug}`));
    const impressions = catRows.reduce((sum, r) => sum + r.impressions, 0);
    const clicks = catRows.reduce((sum, r) => sum + r.clicks, 0);
    const avgCtr = impressions > 0 ? Number(((clicks / impressions) * 100).toFixed(2)) : 0;
    const avgPos = catRows.length > 0 ? Number((catRows.reduce((sum, r) => sum + r.position, 0) / catRows.length).toFixed(1)) : 0;

    let commercialPotential: 'High' | 'Medium' | 'Moderate' = 'Moderate';
    if (['ai-writing-tools', 'ai-image-generators', 'coding-assistants', 'marketing-sales', 'ai-seo-tools'].includes(cat.slug)) {
      commercialPotential = 'High';
    } else if (['audio-voice', 'ai-video-generators', 'productivity', 'ai-chatbots', 'ai-agents'].includes(cat.slug)) {
      commercialPotential = 'Medium';
    }

    return {
      categoryId: cat.id,
      categoryName: cat.name,
      publishedToolsCount: toolsInCat.length,
      impressions,
      clicks,
      averageCtr: avgCtr,
      averagePosition: avgPos,
      demandRank: idx + 1,
      commercialPotential,
    };
  }).sort((a, b) => b.publishedToolsCount - a.publishedToolsCount);
}

/**
 * Collection Performance Audit (Collections layer removed).
 */
export async function getCollectionPerformance(): Promise<Array<{
  collectionSlug: string;
  name: string;
  url: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}>> {
  return [];
}

/**
 * Comparison Performance Audit.
 */
export async function getComparisonPerformance(): Promise<Array<{
  slug: string;
  toolA: string;
  toolB: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}>> {
  const rows = await getGscRows('28d');

  return comparisons.map(c => {
    const url = `/compare-tools/${c.slug}`;
    const pageRows = rows.filter(r => r.page === url);
    const impressions = pageRows.reduce((sum, r) => sum + r.impressions, 0);
    const clicks = pageRows.reduce((sum, r) => sum + r.clicks, 0);
    const ctr = impressions > 0 ? Number(((clicks / impressions) * 100).toFixed(2)) : 0;
    const position = pageRows.length > 0 ? Number((pageRows.reduce((sum, r) => sum + r.position, 0) / pageRows.length).toFixed(1)) : 0;

    return {
      slug: c.slug,
      toolA: c.tool1.name,
      toolB: c.tool2.name,
      impressions,
      clicks,
      ctr,
      position,
    };
  });
}

/**
 * Alternatives Performance Audit.
 */
export async function getAlternativesPerformance(): Promise<Array<{
  slug: string;
  toolName: string;
  url: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}>> {
  const altSlugs = [
    'chatgpt', 'claude', 'midjourney', 'cursor', 'github-copilot',
    'elevenlabs', 'writesonic', 'synthesia', 'agentql', 'design-com'
  ];

  const rows = await getGscRows('28d');

  return altSlugs.map(slug => {
    const url = `/alternatives/${slug}`;
    const pageRows = rows.filter(r => r.page === url);
    const impressions = pageRows.reduce((sum, r) => sum + r.impressions, 0);
    const clicks = pageRows.reduce((sum, r) => sum + r.clicks, 0);
    const ctr = impressions > 0 ? Number(((clicks / impressions) * 100).toFixed(2)) : 0;
    const position = pageRows.length > 0 ? Number((pageRows.reduce((sum, r) => sum + r.position, 0) / pageRows.length).toFixed(1)) : 0;
    const tool = localTools.find(t => t.slug === slug);

    return {
      slug,
      toolName: tool?.name || slug,
      url,
      impressions,
      clicks,
      ctr,
      position,
    };
  });
}

/**
 * Country & Device Performance breakdowns.
 */
export async function getCountryAndDevicePerformance(): Promise<{
  countries: Array<{ country: string; clicks: number; impressions: number; ctr: number; position: number }>;
  devices: Array<{ device: string; clicks: number; impressions: number; ctr: number; position: number }>;
}> {
  const rows = await getGscRows('28d');

  const countryMap = new Map<string, { clicks: number; impressions: number; weightedPos: number }>();
  const deviceMap = new Map<string, { clicks: number; impressions: number; weightedPos: number }>();

  for (const r of rows) {
    // Country
    const c = r.country || 'Unknown';
    const cData = countryMap.get(c) || { clicks: 0, impressions: 0, weightedPos: 0 };
    countryMap.set(c, {
      clicks: cData.clicks + r.clicks,
      impressions: cData.impressions + r.impressions,
      weightedPos: cData.weightedPos + r.position * r.impressions,
    });

    // Device
    const d = r.device || 'DESKTOP';
    const dData = deviceMap.get(d) || { clicks: 0, impressions: 0, weightedPos: 0 };
    deviceMap.set(d, {
      clicks: dData.clicks + r.clicks,
      impressions: dData.impressions + r.impressions,
      weightedPos: dData.weightedPos + r.position * r.impressions,
    });
  }

  const countries = Array.from(countryMap.entries()).map(([country, data]) => ({
    country,
    clicks: data.clicks,
    impressions: data.impressions,
    ctr: data.impressions > 0 ? Number(((data.clicks / data.impressions) * 100).toFixed(2)) : 0,
    position: data.impressions > 0 ? Number((data.weightedPos / data.impressions).toFixed(1)) : 0,
  })).sort((a, b) => b.impressions - a.impressions);

  const devices = Array.from(deviceMap.entries()).map(([device, data]) => ({
    device,
    clicks: data.clicks,
    impressions: data.impressions,
    ctr: data.impressions > 0 ? Number(((data.clicks / data.impressions) * 100).toFixed(2)) : 0,
    position: data.impressions > 0 ? Number((data.weightedPos / data.impressions).toFixed(1)) : 0,
  })).sort((a, b) => b.impressions - a.impressions);

  return { countries, devices };
}

/**
 * Opportunity Pipeline Detector.
 */
export async function getOpportunityPipeline(): Promise<GscOpportunity[]> {
  const rows = await getGscRows('28d');
  const opportunities: GscOpportunity[] = [];

  for (let idx = 0; idx < rows.length; idx++) {
    const r = rows[idx];
    const { intent } = classifyQueryIntent(r.query);
    const scoreResult = calculateOpportunityScore({
      impressions: r.impressions,
      clicks: r.clicks,
      ctr: r.ctr,
      position: r.position,
      intent,
    });

    let opportunityType: GscOpportunity['opportunityType'] = 'POSITION_4_20_STRIKING';
    let issue = '';
    let action = '';

    if (r.position >= 4.0 && r.position <= 20.0) {
      opportunityType = 'POSITION_4_20_STRIKING';
      issue = `Ranking on page 2 / lower page 1 (Position ${r.position.toFixed(1)}) with strong search impressions.`;
      action = 'Enrich editorial content, add comparison breakdown, and strengthen internal linking from category hub.';
    } else if (r.ctr < 0.02 && r.impressions >= 100) {
      opportunityType = 'CTR_UNDERPERFORMER';
      issue = `Substantial impressions (${r.impressions}) but low CTR (${(r.ctr * 100).toFixed(1)}%). Snippet underperforming in SERP.`;
      action = 'Improve SEO title and meta description to increase click-through rate; add clear feature USP.';
    } else if (intent === 'Commercial' || intent === 'Comparison' || intent === 'Alternatives') {
      opportunityType = 'HIGH_COMMERCIAL_INTENT';
      issue = 'High commercial intent search query indicating strong user purchase interest.';
      action = 'Add verified pricing tables, pricing breakdown, and affiliate CTA for commercial conversion.';
    } else {
      opportunityType = 'CONTENT_EXPANSION';
      issue = 'Query indicates interest in specific use cases or workflows.';
      action = 'Expand use cases section and link related tools and workflows.';
    }

    opportunities.push({
      priority: idx + 1,
      page: r.page,
      query: r.query,
      queryCluster: r.query,
      intent,
      opportunityType,
      opportunityScore: scoreResult.totalScore,
      scoreBreakdown: scoreResult.breakdown,
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: r.ctr,
      position: r.position,
      issue,
      recommendedAction: action,
      effort: opportunityType === 'CTR_UNDERPERFORMER' ? 'Low' : 'Medium',
    });
  }

  return opportunities.sort((a, b) => b.opportunityScore - a.opportunityScore);
}
