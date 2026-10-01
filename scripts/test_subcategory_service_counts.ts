import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
const projectDir = process.cwd();
loadEnvConfig(projectDir);

import { getToolsByCategoryId } from '../src/lib/data/tools-service';
import fs from 'fs';
import path from 'path';

async function main() {
  const categories = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'categories.json'), 'utf8'));
  const subcats = categories.filter((c: any) => c.parentId);

  console.log(`Verifying live service resolution for all ${subcats.length} subcategories...`);

  let allPass = true;
  const sampleChecks: { slug: string; name: string; returnedCount: number }[] = [];

  for (const sub of subcats) {
    const tools = await getToolsByCategoryId(sub.id);
    if (tools.length < 10) {
      console.error(`❌ FAILING: ${sub.slug} returned only ${tools.length} tools!`);
      allPass = false;
    }
    sampleChecks.push({
      slug: sub.slug,
      name: sub.name,
      returnedCount: tools.length
    });
  }

  if (allPass) {
    console.log(`\n🎉 SUCCESS! All ${subcats.length} subcategories resolve >= 10 tools via getToolsByCategoryId!`);
    console.log(`\nRandom sample of 10 subcategories:`);
    const shuffled = sampleChecks.sort(() => 0.5 - Math.random()).slice(0, 10);
    for (const s of shuffled) {
      console.log(`  - ${s.name} (${s.slug}): ${s.returnedCount} tools resolved`);
    }
  } else {
    process.exit(1);
  }
}

main().catch(err => {
  console.error("Test error:", err);
  process.exit(1);
});
