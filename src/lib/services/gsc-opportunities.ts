import type { GscRow, GscOpportunity, GscQueryCluster, GscCannibalizationCase, QueryIntent } from "@/lib/types/gsc";

/**
 * Classifies the search intent of a query deterministically.
 */
export function classifyQueryIntent(query: string): { intent: QueryIntent; isBranded: boolean } {
  const q = query.toLowerCase().trim();
  const isBranded = q.includes('aitoolshaven') || q.includes('ai tools haven') || q.includes('toolshaven');

  if (q.includes(' vs ') || q.includes(' versus ') || q.includes(' compare ') || q.includes(' comparison ')) {
    return { intent: 'Comparison', isBranded };
  }
  if (q.includes('alternative') || q.includes('alternatives') || q.includes('competitor') || q.includes('similar to') || q.includes('like ')) {
    return { intent: 'Alternatives', isBranded };
  }
  if (q.includes('pricing') || q.includes('cost') || q.includes('price') || q.includes('plan') || q.includes('review') || q.includes('reviews') || q.includes('discount') || q.includes('deal') || q.includes('worth it')) {
    return { intent: 'Commercial', isBranded };
  }
  if (q.includes('best ') || q.includes('top ') || q.includes('tools for ') || q.includes('software for ') || q.includes('generators') || q.includes('assistants')) {
    return { intent: 'Category', isBranded };
  }
  if (q.includes('how to ') || q.includes('prompt') || q.includes('tutorial') || q.includes('guide') || q.includes('what is')) {
    return { intent: 'Informational', isBranded };
  }
  if (q.includes('for students') || q.includes('for writers') || q.includes('for coding') || q.includes('for business') || q.includes('workflow')) {
    return { intent: 'Use-Case', isBranded };
  }
  return { intent: 'Tool-Specific', isBranded };
}

/**
 * Expected baseline CTR curve by organic Google rank position.
 */
export function getExpectedCtr(position: number): number {
  if (position <= 1.5) return 0.28;
  if (position <= 2.5) return 0.15;
  if (position <= 3.5) return 0.10;
  if (position <= 5.0) return 0.06;
  if (position <= 10.0) return 0.025;
  if (position <= 20.0) return 0.01;
  return 0.005;
}

/**
 * Deterministic Opportunity Scoring Formula (0 - 100 Points):
 * 1. Observed Impressions: up to 30 pts
 * 2. Position Opportunity (Positions 4–20): up to 25 pts
 * 3. CTR Opportunity (Observed CTR vs Expected CTR): up to 20 pts
 * 4. Commercial Intent Value: up to 15 pts
 * 5. Content Quality Uplift Need: up to 10 pts
 */
export function calculateOpportunityScore(params: {
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  intent: QueryIntent;
  contentQualityTier?: 'Tier A' | 'Tier B' | 'Tier C' | 'Tier D' | 'Tier E';
}): {
  totalScore: number;
  breakdown: {
    impressionsScore: number;
    positionScore: number;
    ctrScore: number;
    commercialScore: number;
    qualityScore: number;
  };
} {
  const { impressions, ctr, position, intent, contentQualityTier } = params;

  // 1. Impressions Score (0 - 30)
  let impressionsScore = 0;
  if (impressions >= 5000) impressionsScore = 30;
  else if (impressions >= 2000) impressionsScore = 25;
  else if (impressions >= 1000) impressionsScore = 20;
  else if (impressions >= 500) impressionsScore = 15;
  else if (impressions >= 200) impressionsScore = 10;
  else if (impressions >= 50) impressionsScore = 5;
  else impressionsScore = Math.max(1, Math.round((impressions / 50) * 5));

  // 2. Position Opportunity (0 - 25) - Striking distance positions 4 to 20
  let positionScore = 0;
  if (position >= 4.0 && position <= 20.0) {
    if (position >= 4.0 && position <= 10.0) {
      positionScore = Math.round(25 - (position - 4.0) * 1.2); // 18 - 25 pts
    } else {
      positionScore = Math.max(8, Math.round(18 - (position - 10.0) * 1.0)); // 8 - 18 pts
    }
  } else if (position < 4.0) {
    positionScore = 5; // Already top 3, low position expansion delta
  } else {
    positionScore = Math.max(2, Math.round(8 - (position - 20) * 0.2));
  }

  // 3. CTR Opportunity (0 - 20)
  let ctrScore = 0;
  const expectedCtr = getExpectedCtr(position);
  if (impressions >= 50 && ctr < expectedCtr) {
    const ctrDeficitRatio = (expectedCtr - ctr) / expectedCtr;
    ctrScore = Math.min(20, Math.round(ctrDeficitRatio * 20));
  } else {
    ctrScore = 2;
  }

  // 4. Commercial Intent (0 - 15)
  let commercialScore = 5;
  if (intent === 'Commercial' || intent === 'Comparison' || intent === 'Alternatives') {
    commercialScore = 15;
  } else if (intent === 'Category' || intent === 'Use-Case') {
    commercialScore = 11;
  } else if (intent === 'Tool-Specific') {
    commercialScore = 8;
  }

  // 5. Content Quality Need (0 - 10)
  let qualityScore = 5;
  if (contentQualityTier === 'Tier D' || contentQualityTier === 'Tier E') {
    qualityScore = 10; // High uplift potential by enriching weak content
  } else if (contentQualityTier === 'Tier C') {
    qualityScore = 7;
  } else if (contentQualityTier === 'Tier B') {
    qualityScore = 4;
  } else if (contentQualityTier === 'Tier A') {
    qualityScore = 2; // Already highly enriched
  }

  const totalScore = Math.min(100, impressionsScore + positionScore + ctrScore + commercialScore + qualityScore);

  return {
    totalScore,
    breakdown: {
      impressionsScore,
      positionScore,
      ctrScore,
      commercialScore,
      qualityScore
    }
  };
}

/**
 * Detects SEO Keyword Cannibalization across multiple ranking URLs.
 */
export function detectCannibalization(rows: GscRow[]): GscCannibalizationCase[] {
  const queryMap = new Map<string, Map<string, { impressions: number; clicks: number; position: number }>>();

  for (const row of rows) {
    if (!row.query || !row.page) continue;
    const cleanQuery = row.query.toLowerCase().trim();
    if (!queryMap.has(cleanQuery)) {
      queryMap.set(cleanQuery, new Map());
    }
    const pageMap = queryMap.get(cleanQuery)!;
    const existing = pageMap.get(row.page) || { impressions: 0, clicks: 0, position: row.position };
    pageMap.set(row.page, {
      impressions: existing.impressions + row.impressions,
      clicks: existing.clicks + row.clicks,
      position: (existing.position + row.position) / 2
    });
  }

  const cases: GscCannibalizationCase[] = [];

  for (const [query, pageMap] of queryMap.entries()) {
    if (pageMap.size > 1) {
      const competingPages = Array.from(pageMap.entries()).map(([url, stats]) => ({
        url,
        impressions: stats.impressions,
        clicks: stats.clicks,
        position: Number(stats.position.toFixed(1))
      })).sort((a, b) => b.impressions - a.impressions);

      const totalImpressions = competingPages.reduce((sum, p) => sum + p.impressions, 0);
      const totalClicks = competingPages.reduce((sum, p) => sum + p.clicks, 0);

      // Only flag if competing secondary pages receive > 10% of query impressions
      const primary = competingPages[0];
      const secondary = competingPages[1];
      if (secondary && secondary.impressions >= totalImpressions * 0.1 && totalImpressions >= 20) {
        const severity = totalImpressions > 500 ? 'High' : (totalImpressions > 100 ? 'Medium' : 'Low');
        cases.push({
          query,
          competingPages,
          totalImpressions,
          totalClicks,
          severity,
          recommendation: `Align canonical intent: Keep primary focus on ${primary.url} and cross-link from ${secondary.url} using targeted anchor text.`
        });
      }
    }
  }

  return cases.sort((a, b) => b.totalImpressions - a.totalImpressions);
}

/**
 * Groups related queries into intent clusters.
 */
export function clusterQueries(rows: GscRow[]): GscQueryCluster[] {
  const clusterMap = new Map<string, {
    queries: Set<string>;
    pages: Map<string, number>;
    totalClicks: number;
    totalImpressions: number;
    weightedPosition: number;
  }>();

  for (const row of rows) {
    const q = row.query.toLowerCase().trim();
    if (!q) continue;

    // Cluster key by primary entity/theme
    let clusterKey = q;
    const words = q.split(' ');
    if (q.includes(' vs ') || q.includes(' versus ')) {
      clusterKey = 'comparison: ' + words.filter(w => w !== 'vs' && w !== 'versus').slice(0, 2).sort().join(' vs ');
    } else if (q.includes('alternative') || q.includes('competitor')) {
      const entity = words.find(w => w !== 'alternative' && w !== 'alternatives' && w !== 'best' && w !== 'to' && w !== 'competitors') || words[0];
      clusterKey = `alternatives: ${entity}`;
    } else if (words.length > 2) {
      clusterKey = words.slice(0, 2).join(' ');
    }

    if (!clusterMap.has(clusterKey)) {
      clusterMap.set(clusterKey, {
        queries: new Set(),
        pages: new Map(),
        totalClicks: 0,
        totalImpressions: 0,
        weightedPosition: 0
      });
    }

    const cluster = clusterMap.get(clusterKey)!;
    cluster.queries.add(row.query);
    cluster.pages.set(row.page, (cluster.pages.get(row.page) || 0) + row.impressions);
    cluster.totalClicks += row.clicks;
    cluster.totalImpressions += row.impressions;
    cluster.weightedPosition += row.position * row.impressions;
  }

  const results: GscQueryCluster[] = [];

  for (const [clusterKey, data] of clusterMap.entries()) {
    // Find canonical page with most impressions
    let bestPage = '/';
    let maxImps = -1;
    for (const [page, imps] of data.pages.entries()) {
      if (imps > maxImps) {
        maxImps = imps;
        bestPage = page;
      }
    }

    const { intent, isBranded } = classifyQueryIntent(clusterKey);
    const avgPosition = data.totalImpressions > 0 ? Number((data.weightedPosition / data.totalImpressions).toFixed(1)) : 10.0;
    const avgCtr = data.totalImpressions > 0 ? Number(((data.totalClicks / data.totalImpressions) * 100).toFixed(2)) : 0;

    let recommendation: GscQueryCluster['recommendation'] = 'OPTIMIZE';
    if (intent === 'Comparison' && !bestPage.includes('/compare-tools/')) {
      recommendation = 'CREATE COMPARISON';
    } else if (intent === 'Alternatives' && !bestPage.includes('/alternatives/')) {
      recommendation = 'CREATE ALTERNATIVES';
    } else if (intent === 'Use-Case' && !bestPage.includes('/goals/') && !bestPage.includes('/workflows/')) {
      recommendation = clusterKey.includes('how to') || clusterKey.includes('workflow') ? 'CREATE WORKFLOW' : 'CREATE GOAL';
    } else if (intent === 'Category' && !bestPage.includes('/category/')) {
      recommendation = 'OPTIMIZE';
    } else if (avgPosition <= 3.0 && avgCtr >= 5.0) {
      recommendation = 'KEEP';
    } else if (avgPosition >= 4.0 && avgPosition <= 20.0) {
      recommendation = 'ENRICH';
    }

    results.push({
      clusterName: clusterKey,
      primaryQuery: Array.from(data.queries)[0] || clusterKey,
      queries: Array.from(data.queries).slice(0, 10),
      canonicalPage: bestPage,
      intent,
      isBranded,
      totalClicks: data.totalClicks,
      totalImpressions: data.totalImpressions,
      averageCtr: avgCtr,
      averagePosition: avgPosition,
      recommendation
    });
  }

  return results.sort((a, b) => b.totalImpressions - a.totalImpressions);
}
