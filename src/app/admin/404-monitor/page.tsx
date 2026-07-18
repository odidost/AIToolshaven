import { getNotFoundLogs } from "@/lib/actions/redirects";
import { NotFoundClient } from "./404-client";

export default async function NotFoundMonitorPage() {
  const logs = await getNotFoundLogs();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-fluid-h2 font-black text-slate-900 tracking-tight mb-2">404 Monitor</h1>
        <p className="text-slate-500">Track missing pages visitors attempted to access and quickly resolve them.</p>
      </div>

      <NotFoundClient initialLogs={logs} />
    </div>
  );
}
