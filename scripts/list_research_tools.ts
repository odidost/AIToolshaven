import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function listResearchTools() {
  const { data, error } = await supabase
    .from('tools')
    .select('id, name, slug, category_id, rating, price_model, logo_url, image_url')
    .eq('category_id', 'cat-research');

  if (error) {
    console.error('Error fetching tools:', error);
    return;
  }

  console.log(`Found ${data?.length} tools with category_id 'cat-research':`);
  for (const t of (data || [])) {
    console.log(`- ID: ${t.id} | Slug: ${t.slug} | Name: ${t.name}`);
  }
}

listResearchTools();
