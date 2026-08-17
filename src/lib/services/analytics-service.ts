import { createClient } from '@supabase/supabase-js';

// ─────────────────────────────────────────────────
// Types for REAL analytics data only
// ─────────────────────────────────────────────────

export interface IntegrationStatus {
  name: string;
  id: string;
  status: 'connected' | 'not_configured' | 'error';
  lastSync: string | null;
  errorMessage?: string;
}

export interface SupabaseMetrics {
  tools: { count: number; items: ToolRecord[] };
  categories: { count: number };
  workflows: { count: number };
  goals: { count: number };
  comparisons: { count: number };
  registeredUsers: { count: number };
  reviews: { count: number };
  lastFetched: string;
}

export interface ToolRecord {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  rating: number | null;
  reviewCount: number | null;
  popularity: number | null;
  status: string | null;
}

export interface TelemetryMetrics {
  totalEvents: number;
  pageViews: number;
  newsletterSignups: number;
  affiliateClicks: number;
  searchQueries: number;
  lastFetched: string;
}

export interface RealAnalyticsData {
  supabase: SupabaseMetrics | null;
  supabaseError: string | null;
  telemetry: TelemetryMetrics | null;
  telemetryError: string | null;
  integrations: IntegrationStatus[];
  lastFetched: string;
}

// ─────────────────────────────────────────────────
// Supabase client (server-side, read-only)
// ─────────────────────────────────────────────────

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}

// ─────────────────────────────────────────────────
// Fetch REAL Supabase metrics (no fallbacks)
// ─────────────────────────────────────────────────

async function fetchSupabaseMetrics(): Promise<{ data: SupabaseMetrics | null; error: string | null }> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { data: null, error: 'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.' };
  }

  try {
    const [toolsRes, categoriesRes, workflowsRes, goalsRes, comparisonsRes, userRolesRes, reviewsRes, toolItemsRes] =
      await Promise.all([
        supabase.from('tools').select('*', { count: 'exact', head: true }),
        supabase.from('categories').select('*', { count: 'exact', head: true }),
        supabase.from('workflows').select('*', { count: 'exact', head: true }),
        supabase.from('goals').select('*', { count: 'exact', head: true }),
        supabase.from('comparisons').select('*', { count: 'exact', head: true }),
        supabase.from('user_roles').select('*', { count: 'exact', head: true }),
        supabase.from('reviews').select('*', { count: 'exact', head: true }),
        supabase.from('tools').select('id, name, slug, category_id, rating, review_count, popularity, status').order('popularity', { ascending: false }).limit(20),
      ]);

    // Check for table-level errors (tables might not exist)
    const errors: string[] = [];
    if (toolsRes.error) errors.push(`tools: ${toolsRes.error.message}`);
    if (categoriesRes.error) errors.push(`categories: ${categoriesRes.error.message}`);
    if (workflowsRes.error) errors.push(`workflows: ${workflowsRes.error.message}`);
    if (goalsRes.error) errors.push(`goals: ${goalsRes.error.message}`);
    if (comparisonsRes.error) errors.push(`comparisons: ${comparisonsRes.error.message}`);
    if (userRolesRes.error) errors.push(`user_roles: ${userRolesRes.error.message}`);
    if (reviewsRes.error) errors.push(`reviews: ${reviewsRes.error.message}`);

    const toolItems: ToolRecord[] = (toolItemsRes.data || []).map((t: any) => ({
      id: t.id,
      name: t.name || '',
      slug: t.slug || '',
      categoryId: t.category_id || '',
      rating: t.rating,
      reviewCount: t.review_count,
      popularity: t.popularity,
      status: t.status,
    }));

    return {
      data: {
        tools: { count: toolsRes.count ?? 0, items: toolItems },
        categories: { count: categoriesRes.count ?? 0 },
        workflows: { count: workflowsRes.count ?? 0 },
        goals: { count: goalsRes.count ?? 0 },
        comparisons: { count: comparisonsRes.count ?? 0 },
        registeredUsers: { count: userRolesRes.count ?? 0 },
        reviews: { count: reviewsRes.count ?? 0 },
        lastFetched: new Date().toISOString(),
      },
      error: errors.length > 0 ? errors.join('; ') : null,
    };
  } catch (err: any) {
    return { data: null, error: `Supabase query failed: ${err.message}` };
  }
}

// ─────────────────────────────────────────────────
// Fetch REAL telemetry from /api/analytics/track
// ─────────────────────────────────────────────────

async function fetchTelemetryMetrics(): Promise<{ data: TelemetryMetrics | null; error: string | null }> {
  try {
    if (typeof window === 'undefined') {
      return { data: null, error: 'Telemetry API is client-side only. Refresh to load.' };
    }

    const res = await fetch('/api/analytics/track');
    if (!res.ok) {
      return { data: null, error: `Telemetry API returned ${res.status}` };
    }

    const json = await res.json();
    return {
      data: {
        totalEvents: json.totalEvents ?? 0,
        pageViews: json.pageViewsCount ?? 0,
        newsletterSignups: json.newsletterSignupsCount ?? 0,
        affiliateClicks: json.affiliateClicksCount ?? 0,
        searchQueries: 0,
        lastFetched: new Date().toISOString(),
      },
      error: null,
    };
  } catch (err: any) {
    return { data: null, error: `Telemetry fetch failed: ${err.message}` };
  }
}

// ─────────────────────────────────────────────────
// Check Integration Connection Status
// ─────────────────────────────────────────────────

function checkIntegrations(): IntegrationStatus[] {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID || '';
  const gscConfigured = !!(process.env.GSC_CLIENT_EMAIL && process.env.GSC_PRIVATE_KEY);
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || '';

  return [
    {
      name: 'Google Analytics 4',
      id: gaId || 'Not configured',
      status: gaId ? 'connected' : 'not_configured',
      lastSync: gaId ? null : null,
      errorMessage: gaId ? undefined : 'Set NEXT_PUBLIC_GA_MEASUREMENT_ID in environment variables. Required for traffic, users, geography, devices, browsers, and traffic source analytics.',
    },
    {
      name: 'Google Search Console',
      id: gscConfigured ? (process.env.GSC_SITE_URL || 'Configured') : 'Not configured',
      status: gscConfigured ? 'connected' : 'not_configured',
      lastSync: null,
      errorMessage: gscConfigured ? undefined : 'Google Search Console API integration not configured. Required for organic search queries, impressions, CTR, and average position data.',
    },
    {
      name: 'Microsoft Clarity',
      id: clarityId || 'Not configured',
      status: clarityId ? 'connected' : 'not_configured',
      lastSync: clarityId ? null : null,
      errorMessage: clarityId ? undefined : 'Set NEXT_PUBLIC_CLARITY_ID in environment variables. Required for session recordings, heatmaps, scroll depth, and rage click analytics.',
    },
    {
      name: 'Supabase',
      id: supabaseUrl ? new URL(supabaseUrl).hostname : 'Not configured',
      status: supabaseUrl && supabaseAnonKey ? 'connected' : 'not_configured',
      lastSync: null,
      errorMessage: supabaseUrl ? undefined : 'Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.',
    },
    {
      name: 'Vercel Web Analytics',
      id: 'Not configured',
      status: 'not_configured',
      lastSync: null,
      errorMessage: 'Vercel Analytics API integration not configured. Enable Vercel Analytics in your project settings.',
    },
  ];
}

// ─────────────────────────────────────────────────
// Master fetch: returns ONLY real data
// ─────────────────────────────────────────────────

export async function fetchRealAnalytics(): Promise<RealAnalyticsData> {
  const [supabaseResult, telemetryResult] = await Promise.all([
    fetchSupabaseMetrics(),
    fetchTelemetryMetrics(),
  ]);

  return {
    supabase: supabaseResult.data,
    supabaseError: supabaseResult.error,
    telemetry: telemetryResult.data,
    telemetryError: telemetryResult.error,
    integrations: checkIntegrations(),
    lastFetched: new Date().toISOString(),
  };
}
