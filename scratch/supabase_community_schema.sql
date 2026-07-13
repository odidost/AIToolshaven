-- ==========================================
-- AIToolsHaven Community Platform Schema
-- ==========================================

-- 1. Profiles Table (Linked to Auth Users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  twitter_handle TEXT,
  github_handle TEXT,
  total_reviews INTEGER DEFAULT 0,
  total_bookmarks INTEGER DEFAULT 0,
  is_verified_reviewer BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- In case profiles already exists, add any missing columns safely
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS username TEXT UNIQUE;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS twitter_handle TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS github_handle TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS total_reviews INTEGER DEFAULT 0;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS total_bookmarks INTEGER DEFAULT 0;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_verified_reviewer BOOLEAN DEFAULT false;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now());
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now());

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Trigger to create a profile automatically on sign up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, username, avatar_url)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Note: In Supabase, triggers on auth.users need to be created via the Dashboard's SQL Editor 
-- because they interact with the auth schema.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 2. Bookmarks Table
CREATE TABLE IF NOT EXISTS public.bookmarks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  tool_slug TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, tool_slug)
);

ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own bookmarks" ON public.bookmarks;
CREATE POLICY "Users can view own bookmarks" ON public.bookmarks FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can insert own bookmarks" ON public.bookmarks;
CREATE POLICY "Users can insert own bookmarks" ON public.bookmarks FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can delete own bookmarks" ON public.bookmarks;
CREATE POLICY "Users can delete own bookmarks" ON public.bookmarks FOR DELETE USING (auth.uid() = user_id);

-- 3. Reviews Table
DO $$ BEGIN
  CREATE TYPE public.review_status AS ENUM ('Pending', 'Approved', 'Rejected', 'Hidden', 'Spam');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  tool_slug TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  content TEXT NOT NULL,
  status public.review_status DEFAULT 'Pending',
  helpful_votes INTEGER DEFAULT 0,
  unhelpful_votes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, tool_slug)
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
-- Anyone can read approved reviews
DROP POLICY IF EXISTS "Approved reviews are viewable by everyone" ON public.reviews;
CREATE POLICY "Approved reviews are viewable by everyone" ON public.reviews FOR SELECT USING (status = 'Approved');
-- Users can see their own reviews regardless of status
DROP POLICY IF EXISTS "Users can view own reviews" ON public.reviews;
CREATE POLICY "Users can view own reviews" ON public.reviews FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can insert own reviews" ON public.reviews;
CREATE POLICY "Users can insert own reviews" ON public.reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update own reviews" ON public.reviews;
CREATE POLICY "Users can update own reviews" ON public.reviews FOR UPDATE USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can delete own reviews" ON public.reviews;
CREATE POLICY "Users can delete own reviews" ON public.reviews FOR DELETE USING (auth.uid() = user_id);

-- Admins can do everything
DROP POLICY IF EXISTS "Admins can manage all reviews" ON public.reviews;
CREATE POLICY "Admins can manage all reviews" ON public.reviews FOR ALL USING (public.get_my_role() IN ('super_admin', 'admin', 'editor'));

-- 4. Review Votes
CREATE TABLE IF NOT EXISTS public.review_votes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  review_id UUID REFERENCES public.reviews(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  vote_type SMALLINT CHECK (vote_type IN (1, -1)) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(review_id, user_id)
);

ALTER TABLE public.review_votes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Review votes are public" ON public.review_votes;
CREATE POLICY "Review votes are public" ON public.review_votes FOR SELECT USING (true);
DROP POLICY IF EXISTS "Users can vote" ON public.review_votes;
CREATE POLICY "Users can vote" ON public.review_votes FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can change vote" ON public.review_votes;
CREATE POLICY "Users can change vote" ON public.review_votes FOR UPDATE USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can remove vote" ON public.review_votes;
CREATE POLICY "Users can remove vote" ON public.review_votes FOR DELETE USING (auth.uid() = user_id);

-- 5. Recently Viewed
CREATE TABLE IF NOT EXISTS public.recently_viewed (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  tool_slug TEXT NOT NULL,
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, tool_slug)
);

ALTER TABLE public.recently_viewed ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own recent" ON public.recently_viewed;
CREATE POLICY "Users can view own recent" ON public.recently_viewed FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can insert own recent" ON public.recently_viewed;
CREATE POLICY "Users can insert own recent" ON public.recently_viewed FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update own recent" ON public.recently_viewed;
CREATE POLICY "Users can update own recent" ON public.recently_viewed FOR UPDATE USING (auth.uid() = user_id);

-- 6. Storage Buckets (Optional: run these manually or via UI)
-- insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true);
