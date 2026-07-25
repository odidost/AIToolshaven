const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
async function test() {
  const { data, error } = await supabase.from('tools').select('*').limit(3);
  console.log("Error:", error);
  if (data) {
    data.forEach(d => console.log(d.id, d.slug, d.name, d.tags, d.rating));
  }
}
test();
