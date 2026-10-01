import fs from 'fs';
import path from 'path';

const tools = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'tools.json'), 'utf8'));

const transcriptionTools = tools.filter((t: any) => 
  t.category_id === 'cat-transcription' || 
  t.categorySlug === 'ai-transcription-tools' || 
  t.category === 'AI Transcription Tools' ||
  (t.name && (t.name.toLowerCase().includes('transcri') || t.name.toLowerCase().includes('descript') || t.name.toLowerCase().includes('rev') || t.name.toLowerCase().includes('trint') || t.name.toLowerCase().includes('sonix') || t.name.toLowerCase().includes('happy scribe') || t.name.toLowerCase().includes('turboscribe') || t.name.toLowerCase().includes('riverside')))
);

console.log('Transcription related tools count:', transcriptionTools.length);
transcriptionTools.forEach((t: any) => {
  console.log(t.id, '|', t.name, '|', t.slug, '|', t.category_id || t.categorySlug);
});
