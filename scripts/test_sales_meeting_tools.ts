import fs from 'fs';
import path from 'path';

const tools = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'tools.json'), 'utf8'));

const candidates = [
  'gong',
  'chorus-ai',
  'avoma',
  'attention-ai',
  'laxis',
  'grain',
  'salesroom',
  'fireflies',
  'fathom-video',
  'cogram'
];

candidates.forEach(slug => {
  const match = tools.find((t: any) => t.slug === slug || (t.slug && t.slug.includes(slug)) || (t.id && t.id.includes(slug)));
  if (match) {
    console.log('✓ Found:', slug, '=> Name:', match.name, '| Slug:', match.slug, '| ID:', match.id, '| logo:', match.logoUrl, '| rating:', match.rating);
  } else {
    console.log('✗ Not Found:', slug);
  }
});
