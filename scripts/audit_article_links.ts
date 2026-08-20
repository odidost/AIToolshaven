import fs from 'fs';
import path from 'path';
import { articles } from '../src/lib/articles';

const tools = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'tools.json'), 'utf8'));
const categories = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'categories.json'), 'utf8'));

const validToolSlugs = new Set(tools.map((t: any) => t.slug));
const validCategorySlugs = new Set(categories.map((c: any) => c.slug));

console.log('Valid Tool Slugs Count:', validToolSlugs.size);
console.log('Valid Category Slugs Count:', validCategorySlugs.size);

// Inspect the first 5 articles in detail
const top5Articles = articles.slice(0, 5);

console.log('\n=== AUDITING THE TOP 5 B2B ARTICLES ===\n');

top5Articles.forEach((art, i) => {
  console.log(`[Article ${i + 1}]: ${art.title}`);
  const regex = /href=["']([^"']+)["']/g;
  let match;
  const links: string[] = [];
  while ((match = regex.exec(art.content)) !== null) {
    links.push(match[1]);
  }
  
  console.log(`  Found ${links.length} links:`);
  links.forEach(link => {
    let isValid = true;
    let detail = '';
    if (link.startsWith('/tool/')) {
      const slug = link.replace('/tool/', '');
      isValid = validToolSlugs.has(slug);
      detail = isValid ? 'VALID TOOL' : '❌ INVALID TOOL SLUG';
    } else if (link.startsWith('/category/')) {
      const slug = link.replace('/category/', '');
      isValid = validCategorySlugs.has(slug);
      detail = isValid ? 'VALID CATEGORY' : '❌ INVALID CATEGORY SLUG';
    } else if (link.startsWith('/blog/')) {
      detail = 'BLOG LINK';
    } else {
      detail = 'INTERNAL / SUBMIT';
    }
    console.log(`    -> ${link} [${detail}]`);
  });
  console.log('');
});
