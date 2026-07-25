const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
async function test() {
  const { data, error } = await supabase.from('tools').select('id, name, published_data').limit(10);
  console.log("Error:", error);
  if (data) {
    data.forEach(d => {
      console.log(`row.name: ${d.name}, published_data.name: ${d.published_data?.name}`);
    });
  }
}
test();
