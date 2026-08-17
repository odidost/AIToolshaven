import { google } from 'googleapis';

// ─────────────────────────────────────────────────
// Response Types & Interfaces
// ─────────────────────────────────────────────────

export interface Ga4Summary {
  users: number;
  sessions: number;
  views: number;
  dateRange: string;
}

export interface Ga4PageTraffic {
  pagePath: string;
  users: number;
  sessions: number;
  views: number;
}

export interface Ga4TrafficSource {
  source: string;
  medium: string;
  users: number;
  sessions: number;
}

export interface Ga4LandingPage {
  landingPage: string;
  users: number;
  sessions: number;
}

export interface Ga4Realtime {
  activeUsers: number;
  pages: Array<{
    pagePath: string;
    activeUsers: number;
  }>;
}

export interface Ga4Response<T> {
  success: boolean;
  data?: T;
  error?: string;
  errorCode?: 'GA4_NOT_CONFIGURED' | 'GA4_API_ERROR' | 'UNAUTHORIZED';
  cached?: boolean;
}

// ─────────────────────────────────────────────────
// In-Memory Report Cache
// ─────────────────────────────────────────────────

interface CacheEntry<T> {
  data: T;
  expiry: number;
}

const reportCache = new Map<string, CacheEntry<any>>();
const REPORT_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes for historical reports
const REALTIME_CACHE_TTL_MS = 30 * 1000; // 30 seconds for realtime

function getCached<T>(key: string): T | null {
  const entry = reportCache.get(key);
  if (entry && entry.expiry > Date.now()) {
    return entry.data as T;
  }
  if (entry) {
    reportCache.delete(key);
  }
  return null;
}

function setCache<T>(key: string, data: T, ttlMs: number): void {
  // Prevent memory leaks
  if (reportCache.size > 200) {
    reportCache.clear();
  }
  reportCache.set(key, {
    data,
    expiry: Date.now() + ttlMs,
  });
}

// ─────────────────────────────────────────────────
// Authentication & Client Initializer
// ─────────────────────────────────────────────────

function getGa4Credentials() {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const clientEmail = process.env.GA4_CLIENT_EMAIL || process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GA4_PRIVATE_KEY || process.env.GSC_PRIVATE_KEY;

  if (!propertyId || !clientEmail || !privateKey) {
    return null;
  }

  return {
    propertyId: propertyId.trim(),
    clientEmail: clientEmail.trim(),
    privateKey: privateKey.replace(/\\n/g, '\n'),
  };
}

function getGa4Client() {
  const creds = getGa4Credentials();
  if (!creds) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: creds.clientEmail,
    key: creds.privateKey,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });

  const analyticsdata = google.analyticsdata({
    version: 'v1beta',
    auth,
  });

  return {
    analyticsdata,
    propertyId: creds.propertyId,
  };
}

// Safe error sanitizer to never leak keys or credentials
function sanitizeErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    // Check for common Google Cloud API error messages
    if (error.message.includes('has not been used in project') || error.message.includes('is disabled')) {
      return 'Google Analytics Data API is disabled in the Google Cloud project. Enable it at console.developers.google.com.';
    }
    if (error.message.includes('User does not have sufficient permissions') || error.message.includes('403')) {
      return 'The service account does not have read permissions for this GA4 property.';
    }
    if (error.message.includes('Property not found') || error.message.includes('404')) {
      return 'The specified GA4 Property ID was not found.';
    }
    return error.message.replace(/[\n\r]+/g, ' ').slice(0, 200);
  }
  return 'An unexpected error occurred while communicating with the GA4 API.';
}

// ─────────────────────────────────────────────────
// Core Report Functions
// ─────────────────────────────────────────────────

/**
 * Total users, sessions, and screen page views over a date range.
 * Supported day ranges: 7, 28, 90 (or custom number of days).
 */
export async function getGa4TrafficSummary(days = 28): Promise<Ga4Response<Ga4Summary>> {
  const cacheKey = `summary_${days}d`;
  const cached = getCached<Ga4Summary>(cacheKey);
  if (cached) return { success: true, data: cached, cached: true };

  const client = getGa4Client();
  if (!client) {
    return {
      success: false,
      error: 'GA4 credentials are not configured',
      errorCode: 'GA4_NOT_CONFIGURED',
    };
  }

  try {
    const response = await client.analyticsdata.properties.runReport({
      property: `properties/${client.propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
        ],
      },
    });

    const row = response.data.rows?.[0];
    const summary: Ga4Summary = {
      users: parseInt(row?.metricValues?.[0]?.value || '0', 10),
      sessions: parseInt(row?.metricValues?.[1]?.value || '0', 10),
      views: parseInt(row?.metricValues?.[2]?.value || '0', 10),
      dateRange: `Last ${days} days`,
    };

    setCache(cacheKey, summary, REPORT_CACHE_TTL_MS);
    return { success: true, data: summary };
  } catch (err: unknown) {
    return {
      success: false,
      error: sanitizeErrorMessage(err),
      errorCode: 'GA4_API_ERROR',
    };
  }
}

/** Convenience alias for getGa4TrafficSummary */
export async function getGa4Users(days = 28) {
  return getGa4TrafficSummary(days);
}

/**
 * Users and page views grouped by pagePath.
 * Supports optional pathPrefix (e.g. '/tool/' or '/category/').
 */
export async function getGa4PageTraffic(options?: {
  days?: number;
  limit?: number;
  pathPrefix?: string;
}): Promise<Ga4Response<Ga4PageTraffic[]>> {
  const days = options?.days || 28;
  const limit = Math.min(options?.limit || 100, 100);
  const pathPrefix = options?.pathPrefix || '';

  const cacheKey = `pages_${days}d_${pathPrefix}_${limit}`;
  const cached = getCached<Ga4PageTraffic[]>(cacheKey);
  if (cached) return { success: true, data: cached, cached: true };

  const client = getGa4Client();
  if (!client) {
    return {
      success: false,
      error: 'GA4 credentials are not configured',
      errorCode: 'GA4_NOT_CONFIGURED',
    };
  }

  try {
    const dimensionFilter = pathPrefix
      ? {
          filter: {
            fieldName: 'pagePath',
            stringFilter: {
              matchType: 'BEGINS_WITH' as const,
              value: pathPrefix,
            },
          },
        }
      : undefined;

    const response = await client.analyticsdata.properties.runReport({
      property: `properties/${client.propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
        ],
        dimensionFilter,
        orderBys: [
          {
            metric: { metricName: 'totalUsers' },
            desc: true,
          },
        ],
        limit: String(limit),
      },
    });

    const pages: Ga4PageTraffic[] = (response.data.rows || []).map((r) => ({
      pagePath: r.dimensionValues?.[0]?.value || '',
      users: parseInt(r.metricValues?.[0]?.value || '0', 10),
      sessions: parseInt(r.metricValues?.[1]?.value || '0', 10),
      views: parseInt(r.metricValues?.[2]?.value || '0', 10),
    }));

    setCache(cacheKey, pages, REPORT_CACHE_TTL_MS);
    return { success: true, data: pages };
  } catch (err: unknown) {
    return {
      success: false,
      error: sanitizeErrorMessage(err),
      errorCode: 'GA4_API_ERROR',
    };
  }
}

/** Top pages overall */
export async function getGa4TopPages(days = 28, limit = 100) {
  return getGa4PageTraffic({ days, limit });
}

/** Tool page traffic: filter pagePath begins with /tool/ */
export async function getGa4ToolPages(days = 28, limit = 100) {
  return getGa4PageTraffic({ days, limit, pathPrefix: '/tool/' });
}

/** Category page traffic: filter pagePath begins with /category/ */
export async function getGa4CategoryPages(days = 28, limit = 100) {
  return getGa4PageTraffic({ days, limit, pathPrefix: '/category/' });
}

/**
 * Traffic sources and mediums (e.g. google / organic, direct / none).
 */
export async function getGa4TrafficSources(days = 28, limit = 100): Promise<Ga4Response<Ga4TrafficSource[]>> {
  const cacheKey = `sources_${days}d_${limit}`;
  const cached = getCached<Ga4TrafficSource[]>(cacheKey);
  if (cached) return { success: true, data: cached, cached: true };

  const client = getGa4Client();
  if (!client) {
    return {
      success: false,
      error: 'GA4 credentials are not configured',
      errorCode: 'GA4_NOT_CONFIGURED',
    };
  }

  try {
    const response = await client.analyticsdata.properties.runReport({
      property: `properties/${client.propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        dimensions: [
          { name: 'sessionSource' },
          { name: 'sessionMedium' },
        ],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
        ],
        orderBys: [
          {
            metric: { metricName: 'totalUsers' },
            desc: true,
          },
        ],
        limit: String(limit),
      },
    });

    const sources: Ga4TrafficSource[] = (response.data.rows || []).map((r) => ({
      source: r.dimensionValues?.[0]?.value || '(direct)',
      medium: r.dimensionValues?.[1]?.value || '(none)',
      users: parseInt(r.metricValues?.[0]?.value || '0', 10),
      sessions: parseInt(r.metricValues?.[1]?.value || '0', 10),
    }));

    setCache(cacheKey, sources, REPORT_CACHE_TTL_MS);
    return { success: true, data: sources };
  } catch (err: unknown) {
    return {
      success: false,
      error: sanitizeErrorMessage(err),
      errorCode: 'GA4_API_ERROR',
    };
  }
}

/**
 * Top landing pages.
 */
export async function getGa4TopLandingPages(days = 28, limit = 100): Promise<Ga4Response<Ga4LandingPage[]>> {
  const cacheKey = `landing_${days}d_${limit}`;
  const cached = getCached<Ga4LandingPage[]>(cacheKey);
  if (cached) return { success: true, data: cached, cached: true };

  const client = getGa4Client();
  if (!client) {
    return {
      success: false,
      error: 'GA4 credentials are not configured',
      errorCode: 'GA4_NOT_CONFIGURED',
    };
  }

  try {
    const response = await client.analyticsdata.properties.runReport({
      property: `properties/${client.propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'landingPagePlusQueryString' }],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
        ],
        orderBys: [
          {
            metric: { metricName: 'totalUsers' },
            desc: true,
          },
        ],
        limit: String(limit),
      },
    });

    const landingPages: Ga4LandingPage[] = (response.data.rows || []).map((r) => ({
      landingPage: r.dimensionValues?.[0]?.value || '/',
      users: parseInt(r.metricValues?.[0]?.value || '0', 10),
      sessions: parseInt(r.metricValues?.[1]?.value || '0', 10),
    }));

    setCache(cacheKey, landingPages, REPORT_CACHE_TTL_MS);
    return { success: true, data: landingPages };
  } catch (err: unknown) {
    return {
      success: false,
      error: sanitizeErrorMessage(err),
      errorCode: 'GA4_API_ERROR',
    };
  }
}

/**
 * Realtime active users and active pages via runRealtimeReport.
 */
export async function getGa4Realtime(): Promise<Ga4Response<Ga4Realtime>> {
  const cacheKey = 'realtime';
  const cached = getCached<Ga4Realtime>(cacheKey);
  if (cached) return { success: true, data: cached, cached: true };

  const client = getGa4Client();
  if (!client) {
    return {
      success: false,
      error: 'GA4 credentials are not configured',
      errorCode: 'GA4_NOT_CONFIGURED',
    };
  }

  try {
    const response = await client.analyticsdata.properties.runRealtimeReport({
      property: `properties/${client.propertyId}`,
      requestBody: {
        dimensions: [{ name: 'unifiedScreenName' }],
        metrics: [{ name: 'activeUsers' }],
        limit: '20',
      },
    });

    let totalActiveUsers = 0;
    const pages = (response.data.rows || []).map((r) => {
      const active = parseInt(r.metricValues?.[0]?.value || '0', 10);
      totalActiveUsers += active;
      return {
        pagePath: r.dimensionValues?.[0]?.value || '/',
        activeUsers: active,
      };
    });

    const realtimeData: Ga4Realtime = {
      activeUsers: totalActiveUsers,
      pages,
    };

    setCache(cacheKey, realtimeData, REALTIME_CACHE_TTL_MS);
    return { success: true, data: realtimeData };
  } catch (err: unknown) {
    return {
      success: false,
      error: sanitizeErrorMessage(err),
      errorCode: 'GA4_API_ERROR',
    };
  }
}
