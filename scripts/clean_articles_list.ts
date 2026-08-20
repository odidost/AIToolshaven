import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'lib', 'articles.ts');
const rawCode = fs.readFileSync(file, 'utf8');

const seen = new Set<string>();
const blocks: string[] = [];

let current = 0;
while (true) {
  const start = rawCode.indexOf('  {\n    title:', current);
  if (start === -1) break;
  const end = rawCode.indexOf('\n  },', start);
  if (end === -1) break;
  const block = rawCode.substring(start, end + 5);
  
  const slugMatch = block.match(/slug:\s*["']([^"']+)["']/);
  if (slugMatch) {
    const slug = slugMatch[1];
    if (!seen.has(slug)) {
      seen.add(slug);
      blocks.push(block);
    }
  }
  current = end + 5;
}

console.log('Unique articles found:', blocks.length);
console.log('Unique slugs:', Array.from(seen));

const cleanFileContent = `export interface Article {
  title: string;
  category: string;
  slug: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  imageUrl: string;
  content: string;
}

export const articles: Article[] = [
${blocks.join('\n')}
];
`;

fs.writeFileSync(file, cleanFileContent, 'utf8');
console.log('Successfully wrote deduplicated clean articles.ts!');
