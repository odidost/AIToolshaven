import { PageContainer } from "@/components/layout/PageContainer";
import { LaunchDashboardClient } from "@/components/admin/launch/LaunchDashboardClient";

export const metadata = {
  title: "Launch Dashboard | Admin",
  description: "Production Readiness Dashboard for AIToolsHaven",
};

export default function LaunchDashboardPage() {
  return (
    <PageContainer className="py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-fluid-h2 font-bold text-slate-900 tracking-tight">Production Launch Dashboard</h1>
        <p className="text-slate-500 mt-2">
          Real-time readiness audit covering content, performance, SEO, and build metrics.
        </p>
      </div>

      <LaunchDashboardClient />
    </PageContainer>
  );
}
