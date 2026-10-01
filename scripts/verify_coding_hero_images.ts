import { getCategoryHeroMedia } from '../src/lib/data/categoryHeroImages';

const subcats = [
  'ai-app-builders-vibe-coding',
  'ai-code-review-security',
  'ai-figma-to-code',
  'ai-sql-query-generators',
  'ai-automated-test-generators'
];

async function main() {
  console.log('Testing Category 4 (Coding Assistants) Subcategory Hero Images:\n');
  for (const slug of subcats) {
    const url = `http://localhost:3000/category/${slug}`;
    const media = getCategoryHeroMedia(slug, slug);
    const res = await fetch(url);
    const text = await res.text();
    const encodedTagline = media.creatorTagline.replace(/&/g, '&amp;');
    const hasTagline = text.includes(encodedTagline);
    const hasAlt = text.includes(media.alt);
    console.log(`[${res.status}] ${url}`);
    console.log(`  imageSrc: ${media.imageSrc}`);
    console.log(`  alt: "${media.alt}" -> Present in HTML: ${hasAlt}`);
    console.log(`  tagline: "${media.creatorTagline}" -> Present in HTML: ${hasTagline}\n`);
  }
}

main();
