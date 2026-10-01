import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const tools = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'tools.json'), 'utf8'));

// Print all tools for a given category id or slug
const parentMap: Record<string, string[]> = {
  'c1': tools.filter((t: any) => t.category_id === 'c1' || t.category === 'AI Writing Tools').map((t: any) => `${t.name} (${t.slug})`),
  'c2': tools.filter((t: any) => t.category_id === 'c2' || t.category === 'AI Image Generators').map((t: any) => `${t.name} (${t.slug})`),
  'c3': tools.filter((t: any) => t.category_id === 'c3' || t.category === 'AI Video Generators').map((t: any) => `${t.name} (${t.slug})`),
  'c4': tools.filter((t: any) => t.category_id === 'c4' || t.category === 'Audio & Voice' || t.category_id === 'ai-voice-generators').map((t: any) => `${t.name} (${t.slug})`),
  'c5': tools.filter((t: any) => t.category_id === 'c5' || t.category === 'Coding Assistants').map((t: any) => `${t.name} (${t.slug})`),
  'c6': tools.filter((t: any) => t.category_id === 'c6' || t.category === 'Marketing & Sales').map((t: any) => `${t.name} (${t.slug})`),
  'c7': tools.filter((t: any) => t.category_id === 'c7' || t.category === 'Productivity').map((t: any) => `${t.name} (${t.slug})`),
  'chatbots': tools.filter((t: any) => t.category_id === 'b9c74436-f00a-41e0-aee9-6ab15d90d3ec' || t.category === 'AI Chatbots').map((t: any) => `${t.name} (${t.slug})`),
  'agents': tools.filter((t: any) => t.category_id === 'ai-agents' || t.category === 'AI Agents').map((t: any) => `${t.name} (${t.slug})`),
  'seo': tools.filter((t: any) => t.category_id === 'ai-seo-tools' || t.category === 'AI SEO Tools').map((t: any) => `${t.name} (${t.slug})`),
  'sales': tools.filter((t: any) => t.category_id === 'ai-sales-tools' || t.category === 'AI Sales Tools').map((t: any) => `${t.name} (${t.slug})`),
  'social': tools.filter((t: any) => t.category_id === 'ai-social-media' || t.category === 'AI Social Media Tools').map((t: any) => `${t.name} (${t.slug})`),
  'resume': tools.filter((t: any) => t.category_id === 'cat-resume' || t.category === 'AI Resume Builders').map((t: any) => `${t.name} (${t.slug})`)
};

for (const [cat, list] of Object.entries(parentMap)) {
  console.log(`\n=== Category ${cat}: ${list.length} tools ===`);
  console.log(list.slice(0, 15).join(', '));
  if (list.length > 15) console.log(`... and ${list.length - 15} more`);
}
