import fs from 'fs';
import path from 'path';

const tools = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'tools.json'), 'utf8'));

const candidates = [
  'fellow',
  'nyota',
  'yoodli',
  'equal-time-notetaker',
  'read-ai',
  'supernormal',
  'humantic',
  'second-nature',
  'fathom-video',
  'hyperbound'
];

candidates.forEach(q => {
  const matches = tools.filter((t: any) => 
    (t.slug && t.slug.toLowerCase().includes(q)) || 
    (t.name && t.name.toLowerCase().includes(q)) ||
    (t.id && t.id.toLowerCase().includes(q))
  );
  console.log(`\nQuery "${q}" matches:`, matches.length);
  matches.forEach((m: any) => console.log('  ', m.id, '|', m.name, '|', m.slug, '| cat:', m.category_id || m.categorySlug));
});
