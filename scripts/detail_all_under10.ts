import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const categories = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'categories.json'), 'utf8'));
const tools = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'tools.json'), 'utf8'));

const subcats = categories.filter((c: any) => c.parentId);

const report: Record<string, { name: string; slug: string; currentCount: number; currentTools: string[] }[]> = {};

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

  if (matchingTools.length < 10) {
    report[sub.parentId] = report[sub.parentId] || [];
    report[sub.parentId].push({
      name: sub.name,
      slug: sub.slug,
      currentCount: matchingTools.length,
      currentTools: matchingTools.map((t: any) => t.name)
    });
  }
}

console.log(JSON.stringify(report, null, 2));
