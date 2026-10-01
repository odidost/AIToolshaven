import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function findExisting() {
  const slugs = [
    'elicit-ai', 'elicit',
    'scite-ai', 'scite',
    'connected-papers',
    'researchrabbit', 'research-rabbit',
    'litmaps',
    'scispace', 'scispace-ai',
    'semantic-scholar',
    'scholarcy',
    'chatpdf', 'chat-pdf',
    'consensus-ai', 'consensus'
  ];

  const { data, error } = await supabase
    .from('tools')
    .select('id, name, slug, category_id')
    .or(slugs.map(s => `slug.ilike.%${s}%`).join(','));

  if (error) {
    console.error('Error fetching tools:', error);
    return;
  }

  console.log('Found matching tools in Supabase:');
  for (const t of (data || [])) {
    console.log(`- ID: ${t.id} | Slug: ${t.slug} | Name: ${t.name} | Cat: ${t.category_id}`);
  }
}

findExisting();
