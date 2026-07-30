import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("Starting migration...");

  // 1. Fetch all approved reviews
  const { data: reviews, error: reviewError } = await supabase
    .from('reviews')
    .select('tool_slug, rating')
    .eq('status', 'Approved');

  if (reviewError) {
    console.error("Error fetching reviews:", reviewError);
    return;
  }

  // Calculate aggregates
  const aggregates = new Map<string, { total: number; sum: number }>();
  reviews.forEach(r => {
    if (!aggregates.has(r.tool_slug)) {
      aggregates.set(r.tool_slug, { total: 0, sum: 0 });
    }
    const stat = aggregates.get(r.tool_slug)!;
    stat.total += 1;
    stat.sum += r.rating;
  });

  // 2. Update tools.json
  const toolsJsonPath = path.join(__dirname, '..', 'data', 'tools.json');
  const tools = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

  for (const tool of tools) {
    const stat = aggregates.get(tool.slug);
    if (stat) {
      tool.rating = parseFloat((stat.sum / stat.total).toFixed(1));
      tool.reviewCount = stat.total;
    } else {
      tool.rating = 0;
      tool.reviewCount = 0;
    }
  }

  fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2));
  console.log(`Updated tools.json with real ratings for ${tools.length} tools.`);

  // 3. Update Supabase tools table
  console.log("Updating Supabase tools table...");
  const { data: supabaseTools, error: toolError } = await supabase.from('tools').select('id, slug');
  
  if (toolError) {
    console.error("Error fetching tools:", toolError);
    return;
  }

  let updatedCount = 0;
  for (const dbTool of supabaseTools) {
    const stat = aggregates.get(dbTool.slug);
    const rating = stat ? parseFloat((stat.sum / stat.total).toFixed(1)) : 0;
    const review_count = stat ? stat.total : 0;

    const { error: updateError } = await supabase
      .from('tools')
      .update({ rating, review_count })
      .eq('id', dbTool.id);
      
    if (updateError) {
      console.error(`Failed to update ${dbTool.slug}:`, updateError);
    } else {
      updatedCount++;
    }
  }

  console.log(`Successfully updated ${updatedCount} tools in Supabase.`);
  console.log("Migration complete!");
}

run();
