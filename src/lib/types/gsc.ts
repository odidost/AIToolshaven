export interface GscRow {
  date: string;
  query: string;
  page: string;
  country: string;
  device: 'DESKTOP' | 'MOBILE' | 'TABLET' | string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export type QueryIntent =
  | 'Navigational'
  | 'Informational'
  | 'Commercial'
  | 'Transactional'
  | 'Comparison'
  | 'Alternatives'
  | 'Category'
  | 'Use-Case'
  | 'Tool-Specific';

export interface GscQueryCluster {
  clusterName: string;
  primaryQuery: string;
  queries: string[];
  canonicalPage: string;
  intent: QueryIntent;
  isBranded: boolean;
  totalClicks: number;
  totalImpressions: number;
  averageCtr: number;
  averagePosition: number;
  recommendation: 'KEEP' | 'OPTIMIZE' | 'ENRICH' | 'CREATE COMPARISON' | 'CREATE ALTERNATIVES' | 'CREATE GOAL' | 'CREATE WORKFLOW' | 'CONSOLIDATE' | 'IGNORE';
}

export interface GscOpportunity {
  priority: number;
  page: string;
  query: string;
  queryCluster: string;
  intent: QueryIntent;
  opportunityType: 'CTR_UNDERPERFORMER' | 'POSITION_4_20_STRIKING' | 'HIGH_COMMERCIAL_INTENT' | 'CONTENT_EXPANSION';
  opportunityScore: number; // 0 - 100
  scoreBreakdown: {
    impressionsScore: number; // 0 - 30
    positionScore: number;    // 0 - 25
    ctrScore: number;         // 0 - 20
    commercialScore: number;  // 0 - 15
    qualityScore: number;     // 0 - 10
  };
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  contentQualityTier?: 'Tier A' | 'Tier B' | 'Tier C' | 'Tier D' | 'Tier E';
  issue: string;
  recommendedAction: string;
  effort: 'Low' | 'Medium' | 'High';
}

export interface GscCannibalizationCase {
  query: string;
  competingPages: {
    url: string;
    impressions: number;
    clicks: number;
    position: number;
  }[];
  totalImpressions: number;
  totalClicks: number;
  severity: 'High' | 'Medium' | 'Low';
  recommendation: string;
}

export interface GscCategoryPerformance {
  categoryId: string;
  categoryName: string;
  publishedToolsCount: number;
  impressions: number;
  clicks: number;
  averageCtr: number;
  averagePosition: number;
  demandRank: number;
  commercialPotential: 'High' | 'Medium' | 'Moderate';
}

export interface GscOverviewMetrics {
  totalClicks: number;
  totalImpressions: number;
  averageCtr: number;
  averagePosition: number;
  pagesReceivingImpressions: number;
  clicksChangePct: number;
  impressionsChangePct: number;
  ctrChangePct: number;
  positionChange: number;
  dateRange: {
    start: string;
    end: string;
  };
  connectionStatus: {
    connected: boolean;
    siteUrl: string | null;
    lastSync: string | null;
    authType: 'Service Account' | 'OAuth' | 'None';
  };
}
