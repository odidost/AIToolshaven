import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "My Reviews | AIToolsHaven",
};

export default async function ReviewsPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/login');
  }

  // Fetch user reviews
  const { data: reviews } = await supabase
    .from('reviews')
    .select('*, tools:tool_slug(name, logo_url)')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-on-surface">My Reviews</h1>
        <p className="text-on-surface-variant">View and manage the reviews you've written.</p>
      </div>

      {!reviews || reviews.length === 0 ? (
        <div className="text-center py-16 bg-surface border border-outline rounded-2xl">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">rate_review</span>
          <h2 className="text-lg font-semibold text-on-surface mb-2">No reviews yet</h2>
          <p className="text-on-surface-variant mb-6">You haven't reviewed any AI tools yet.</p>
          <Link href="/" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-medium">
            Find a tool to review
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review: any) => (
            <div key={review.id} className="p-6 bg-surface border border-outline rounded-2xl flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  {review.tools?.logo_url ? (
                    <img src={review.tools.logo_url} alt={review.tools.name} className="w-12 h-12 rounded-xl object-cover" />
                  ) : (
                    <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant">handyman</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-on-surface">
                      <Link href={`/tool/${review.tool_slug}`} className="hover:text-primary transition-colors">
                        {review.tools?.name || review.tool_slug}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-500 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0" }}>
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Badge variant={
                  review.status === 'Approved' ? 'default' :
                  review.status === 'Pending' ? 'secondary' :
                  review.status === 'Rejected' ? 'destructive' : 'outline'
                }>
                  {review.status}
                </Badge>
              </div>
              <p className="text-on-surface-variant text-sm mt-2">{review.content}</p>
              <div className="text-xs text-on-surface-variant flex items-center justify-between border-t border-outline pt-4 mt-2">
                <span>Posted on {new Date(review.created_at).toLocaleDateString()}</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">thumb_up</span> {review.helpful_votes}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">thumb_down</span> {review.unhelpful_votes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
