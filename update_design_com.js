const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

async function updateAll() {
  // 1. Update Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data, error } = await supabase
    .from('tools')
    .update({ 
      verified: true,
      updated_at: new Date('2026-07-25T12:00:00Z').toISOString()
    })
    .eq('slug', 'design-com');

  if (error) {
    console.error("Error updating Supabase:", error);
  } else {
    console.log("Successfully updated Supabase verified and updated_at");
  }

  // 2. Update tools.json
  const filePath = path.join(__dirname, 'data', 'tools.json');
  if (fs.existsSync(filePath)) {
    const tools = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const designCom = tools.find(t => t.slug === 'design-com');
    if (designCom) {
      designCom.verified = true;
      designCom.lastUpdated = new Date('2026-07-25T12:00:00Z').toISOString();
      fs.writeFileSync(filePath, JSON.stringify(tools, null, 2));
      console.log("Successfully updated tools.json");
    } else {
      console.log("Could not find design-com in tools.json");
    }
  }
}

updateAll();
