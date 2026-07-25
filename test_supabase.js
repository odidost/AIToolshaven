const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
async function test() {
  const { data, error } = await supabase.from('tools').select('*').limit(5);
  console.log("Error:", error);
  console.log("Data length:", data ? data.length : 0);
  if (data && data.length > 0) {
    console.log("First item:", data[0]);
  }
}
test();
