import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function testTags() {
  const { data, error } = await supabase.from('tools').select('id, name, slug, tags').eq('slug', 'consensus').single();
  console.log('Consensus in Supabase:', { error, data });
}

testTags();
