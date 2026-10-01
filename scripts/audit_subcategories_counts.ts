import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const categories = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'categories.json'), 'utf8'));
const tools = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'tools.json'), 'utf8'));

const subcats = categories.filter((c: any) => c.parentId);

console.log('Total subcategories found:', subcats.length);

const results: any[] = [];
for (const sub of subcats) {
  const matchingTools = tools.filter((t: any) => {
    const cats = [
      t.category,
      t.category_id,
      t.categorySlug,
      ...(t.additionalCategories || [])
    ].filter(Boolean).map((x: string) => x.toLowerCase());
    return cats.includes(sub.slug.toLowerCase()) || cats.includes(sub.id.toLowerCase());
  });
  results.push({
    parentId: sub.parentId,
    slug: sub.slug,
    name: sub.name,
    count: matchingTools.length,
    tools: matchingTools.map((t: any) => t.name)
  });
}

// Group by parentId
const grouped: Record<string, any[]> = {};
for (const r of results) {
  grouped[r.parentId] = grouped[r.parentId] || [];
  grouped[r.parentId].push(r);
}

let totalUnder10 = 0;
for (const [pId, list] of Object.entries(grouped)) {
  console.log(`\n=== Parent: ${pId} ===`);
  for (const item of list) {
    const status = item.count >= 10 ? '✓ OK' : `⚠️ NEEDS ${10 - item.count} MORE`;
    if (item.count < 10) totalUnder10++;
    console.log(`  [${item.count}] ${item.slug} (${item.name}) -> ${status}`);
  }
}
console.log(`\nSummary: ${totalUnder10} subcategories have fewer than 10 tools.`);
