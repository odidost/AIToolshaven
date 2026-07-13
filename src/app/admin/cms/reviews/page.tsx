import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ReviewsTable } from "./ReviewsTable";

export default async function AdminReviewsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Admin access should be handled by middleware/layout, but we check here too
  const { data: roleData } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (!roleData || !['super_admin', 'admin', 'editor'].includes(roleData.role)) {
    redirect('/admin/unauthorized');
  }

  // Fetch all reviews
  const { data: reviews } = await supabase
    .from('reviews')
    .select('*, profiles(username, email), tools:tool_slug(name)')
    .order('created_at', { ascending: false });

  return (
    <PageContainer className="py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-on-surface">Review Moderation</h1>
          <p className="text-on-surface-variant">Manage and moderate user-submitted reviews.</p>
        </div>
      </div>

      <div className="bg-surface border border-outline rounded-2xl overflow-hidden">
        <ReviewsTable initialReviews={reviews || []} />
      </div>
    </PageContainer>
  );
}
