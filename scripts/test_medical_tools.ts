import { getToolsByCategoryId } from '../src/lib/data/tools-service';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

async function test() {
  const tools = await getToolsByCategoryId('ai-medical-clinical-scribes');
  console.log(`Found ${tools.length} tools for ai-medical-clinical-scribes:`);
  for (const t of tools) {
    console.log(`- ${t.name} (${t.slug})`);
  }
}

test();
