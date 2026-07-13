import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  return {
    title: `${resolvedParams.username}'s Profile | AIToolsHaven`,
  };
}

export default async function UserProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const username = resolvedParams.username;
  const supabase = await createClient();

  // Fetch the profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();

  if (!profile) {
    notFound();
  }

  // Fetch their reviews
  const { data: reviews } = await supabase
    .from('reviews')
    .select('*, tools:tool_slug(name, logo_url)')
    .eq('user_id', profile.id)
    .eq('status', 'Approved')
    .order('created_at', { ascending: false });

  return (
    <PageContainer className="py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="bg-surface border border-outline rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-primary-foreground text-4xl font-bold uppercase overflow-hidden border-4 border-background shadow-xl">
            {profile.avatar_url ? (
               <img src={profile.avatar_url} alt={profile.username} className="w-full h-full object-cover" />
            ) : (
               profile.username.substring(0, 2)
            )}
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-on-surface">{profile.username}</h1>
              <p className="text-on-surface-variant flex items-center justify-center md:justify-start gap-2 mt-1">
                Joined {new Date(profile.created_at).toLocaleDateString()}
                {profile.is_verified_reviewer && (
                  <span className="material-symbols-outlined text-primary text-sm bg-primary/10 p-1 rounded-full" title="Verified Reviewer">
                    verified
                  </span>
                )}
              </p>
            </div>
            
            {profile.bio && (
              <p className="text-on-surface leading-relaxed max-w-2xl">{profile.bio}</p>
            )}

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="flex gap-4 border-r border-outline pr-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-on-surface">{profile.total_reviews}</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-on-surface">{profile.total_bookmarks}</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Bookmarks</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {profile.twitter_handle && (
                  <a href={`https://twitter.com/${profile.twitter_handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary/10 hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    𝕏
                  </a>
                )}
                {profile.github_handle && (
                  <a href={`https://github.com/${profile.github_handle}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary/10 hover:text-primary transition-colors">
                    <span className="sr-only">GitHub</span>
                    GH
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-on-surface border-b border-outline pb-2">Public Reviews</h2>
          
          {!reviews || reviews.length === 0 ? (
            <div className="text-center py-12 bg-surface-container/50 rounded-2xl border border-outline border-dashed">
              <p className="text-on-surface-variant">This user hasn't written any public reviews yet.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {reviews.map((review: any) => (
                <div key={review.id} className="p-6 bg-surface border border-outline rounded-2xl flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      {review.tools?.logo_url ? (
                        <img src={review.tools.logo_url} alt={review.tools.name} className="w-10 h-10 rounded-xl object-cover" />
                      ) : (
                        <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-surface-variant text-sm">handyman</span>
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
                            <span key={i} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0" }}>
                              star
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-on-surface-variant">
                      {new Date(review.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-2">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </PageContainer>
  );
}
