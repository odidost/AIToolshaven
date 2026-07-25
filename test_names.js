const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
async function test() {
  const { data, error } = await supabase.from('tools').select('id, name').eq('status', 'Published');
  console.log("Error:", error);
  if (data) {
    let nullCount = 0;
    let emptyCount = 0;
    let validCount = 0;
    data.forEach(d => {
      if (d.name === null) nullCount++;
      else if (d.name.trim() === "") emptyCount++;
      else {
        validCount++;
        // console.log("Valid:", d.name);
      }
    });
    console.log(`Total: ${data.length}, Null: ${nullCount}, Empty: ${emptyCount}, Valid: ${validCount}`);
    
    // Log the first few that are null or empty
    console.log("Some invalid ones:", data.filter(d => d.name === null || d.name.trim() === "").slice(0, 5));
  }
}
test();
