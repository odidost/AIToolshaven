import { getRedirects } from "@/lib/actions/redirects";
import { RedirectsClient } from "./redirects-client";

export default async function RedirectsPage() {
  const redirects = await getRedirects();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-fluid-h2 font-black text-slate-900 tracking-tight mb-2">Redirect Manager</h1>
        <p className="text-slate-500">Manage 301 and 302 URL redirects for your site.</p>
      </div>

      <RedirectsClient initialRedirects={redirects} />
    </div>
  );
}
