import { getToolsByCategoryId } from '../src/lib/data/tools-service';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

async function test() {
  const tools = await getToolsByCategoryId('ai-paper-pdf-summarizers');
  console.log(`Found ${tools.length} tools for ai-paper-pdf-summarizers:`);
  for (const t of tools) {
    console.log(`- ${t.name} (${t.slug}) [cat: ${t.category_id}, tags: ${t.tags?.join(', ')}]`);
  }
}

test();
