import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Settings | AIToolsHaven",
};

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  async function updateProfile(formData: FormData) {
    'use server';
    const supabaseServer = await createClient();
    const { data: { user } } = await supabaseServer.auth.getUser();
    if (!user) return;

    const username = formData.get('username') as string;
    const bio = formData.get('bio') as string;
    const twitter = formData.get('twitter_handle') as string;
    const github = formData.get('github_handle') as string;

    await supabaseServer.from('profiles').upsert({
      id: user.id,
      username,
      bio,
      twitter_handle: twitter,
      github_handle: github,
      updated_at: new Date().toISOString()
    });

    revalidatePath('/dashboard/settings');
    revalidatePath('/dashboard');
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-on-surface">Settings</h1>
        <p className="text-on-surface-variant">Manage your account and public profile.</p>
      </div>

      <div className="bg-surface border border-outline rounded-2xl p-6">
        <form action={updateProfile} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-on-surface border-b border-outline pb-2">Public Profile</h2>
            
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" defaultValue={profile?.username || ''} required />
              <p className="text-xs text-on-surface-variant">This will be your public URL: aitoolshaven.com/users/{profile?.username || 'username'}</p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" name="bio" placeholder="Tell us about yourself..." defaultValue={profile?.bio || ''} rows={4} />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="twitter_handle">X (Twitter) Handle</Label>
                <Input id="twitter_handle" name="twitter_handle" placeholder="@username" defaultValue={profile?.twitter_handle || ''} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="github_handle">GitHub Handle</Label>
                <Input id="github_handle" name="github_handle" placeholder="username" defaultValue={profile?.github_handle || ''} />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-outline flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>

      <div className="bg-surface border border-outline rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-destructive border-b border-outline pb-2 mb-4">Danger Zone</h2>
        <p className="text-sm text-on-surface-variant mb-4">
          Permanently delete your account and all associated data, including reviews and bookmarks.
        </p>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </div>
  );
}
