import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const tools = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'tools.json'), 'utf8'));

// Check how many tools belong to each parent category
const catCounts: Record<string, number> = {};
for (const t of tools) {
  const c = t.category_id || t.category || t.categorySlug || 'unknown';
  catCounts[c] = (catCounts[c] || 0) + 1;
}

console.log('Parent category counts in tools.json:');
console.log(catCounts);
