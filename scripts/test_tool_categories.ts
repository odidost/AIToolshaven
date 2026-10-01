import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function testTable() {
  const { data, error } = await supabase.from('tool_categories').select('*').limit(5);
  console.log('tool_categories test:', { error, count: data?.length, sample: data });
}

testTable();
