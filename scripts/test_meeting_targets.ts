import fs from 'fs';
import path from 'path';

const tools = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'tools.json'), 'utf8'));
const targetIdentifiers = [
  'otter-ai',
  'fireflies',
  'fathom',
  'read-ai',
  'tldv',
  '46f5e3c9-c0b6-4c7d-a1e8-245f924e8248',
  'tool-supernormal-1786742992809',
  'tool-tactiq-1786742992809',
  'tool-fellow-1786742992809',
  'tool-meetgeek-1786742992809'
];

targetIdentifiers.forEach(id => {
  const match = tools.find((t: any) => t.id === id || t.slug === id);
  if (match) {
    console.log('✓ Found:', id, '=> Name:', match.name, '| Slug:', match.slug, '| ID:', match.id, '| logo:', match.logoUrl, '| rating:', match.rating);
  } else {
    console.log('✗ Missing:', id);
  }
});
