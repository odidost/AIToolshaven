import { GscDashboardClient } from "@/components/admin/seo/GscDashboardClient";
import {
  getGscOverview,
  getTopQueries,
  getTopPages,
  getOpportunityPipeline,
  getCategoryPerformance,
  getCollectionPerformance,
  getComparisonPerformance,
  getAlternativesPerformance,
  getCountryAndDevicePerformance,
  getGscRows,
} from "@/lib/services/gsc-service";
import { clusterQueries, detectCannibalization } from "@/lib/services/gsc-opportunities";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Google Search Console & SEO Intelligence | Admin Dashboard",
  description: "Search demand analysis, query intent clustering, CTR opportunities, and ranking performance.",
};

export default async function GscDashboardPage() {
  const [
    overview,
    topQueries,
    topPages,
    opportunities,
    categoryPerformance,
    collectionPerformance,
    comparisonPerformance,
    alternativesPerformance,
    countryAndDevices,
    rawRows,
  ] = await Promise.all([
    getGscOverview('28d'),
    getTopQueries(50),
    getTopPages(50),
    getOpportunityPipeline(),
    getCategoryPerformance(),
    getCollectionPerformance(),
    getComparisonPerformance(),
    getAlternativesPerformance(),
    getCountryAndDevicePerformance(),
    getGscRows('28d'),
  ]);

  const clusters = clusterQueries(rawRows);
  const cannibalizationCases = detectCannibalization(rawRows);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <GscDashboardClient
        initialOverview={overview}
        topQueries={topQueries}
        topPages={topPages}
        opportunities={opportunities}
        clusters={clusters}
        cannibalizationCases={cannibalizationCases}
        categoryPerformance={categoryPerformance}
        collectionPerformance={collectionPerformance}
        comparisonPerformance={comparisonPerformance}
        alternativesPerformance={alternativesPerformance}
        countries={countryAndDevices.countries}
        devices={countryAndDevices.devices}
      />
    </div>
  );
}
