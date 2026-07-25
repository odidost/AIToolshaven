import { config } from 'dotenv';
config({ path: '.env.local' });
import { getLatestTools, getAllTools } from './src/lib/data/tools-service';

async function test() {
  const tools = await getLatestTools(10);
  console.log(`getLatestTools Returned ${tools.length} tools`);
  tools.forEach(t => {
    console.log(`- ID: ${t.id}, Slug: ${t.slug}, Name: "${t.name}"`);
  });

  const allTools = await getAllTools();
  console.log(`getAllTools Returned ${allTools.length} tools`);
  allTools.slice(0, 10).forEach(t => {
    console.log(`- ID: ${t.id}, Slug: ${t.slug}, Name: "${t.name}"`);
  });
}
test();
