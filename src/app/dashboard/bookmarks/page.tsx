import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ToolCard } from "@/components/shared/ToolCard";

export const metadata = {
  title: "Bookmarks | AIToolsHaven",
};

export default async function BookmarksPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/login');
  }

  // Fetch bookmarks
  const { data: bookmarks } = await supabase
    .from('bookmarks')
    .select('tool_slug, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  // Fetch the actual tools
  let bookmarkedTools: any[] = [];
  if (bookmarks && bookmarks.length > 0) {
    const slugs = bookmarks.map(b => b.tool_slug);
    const { data: tools } = await supabase
      .from('tools')
      .select('*')
      .in('slug', slugs);
      
    if (tools) {
      // Order by bookmark creation date
      bookmarkedTools = bookmarks.map(b => tools.find(t => t.slug === b.tool_slug)).filter(Boolean);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-on-surface">Bookmarks</h1>
        <p className="text-on-surface-variant">Manage the AI tools you've saved for later.</p>
      </div>

      {bookmarkedTools.length === 0 ? (
        <div className="text-center py-16 bg-surface border border-outline rounded-2xl">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">bookmark_border</span>
          <h2 className="text-lg font-semibold text-on-surface mb-2">No bookmarks yet</h2>
          <p className="text-on-surface-variant mb-6">You haven't saved any AI tools yet.</p>
          <Link href="/" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-medium">
            Explore Tools
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
