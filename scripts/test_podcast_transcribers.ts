import fs from 'fs';
import path from 'path';

const tools = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'tools.json'), 'utf8'));

const candidates = [
  'castmagic',
  'podsqueeze',
  'deciphr-ai',
  'simon-says-ai-transcribe',
  'riverside-fm',
  'descript',
  'trint',
  'cockatoo-ai',
  'notta-ai',
  'sonix-ai'
];

candidates.forEach(id => {
  const match = tools.find((t: any) => t.id === id || t.slug === id);
  if (match) {
    console.log('✓ Found:', id, '=> Name:', match.name, '| Slug:', match.slug, '| ID:', match.id, '| logo:', match.logoUrl, '| rating:', match.rating);
  } else {
    console.log('✗ Missing:', id);
  }
});
