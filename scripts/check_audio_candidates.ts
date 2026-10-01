import * as fs from 'fs';

const tools = JSON.parse(fs.readFileSync('data/tools.json', 'utf8'));
const terms = [
  'elevenlabs', 'resemble', 'descript', 'playht', 'speechify',
  'podcastle', 'cleanvoice', 'auphonic', 'riverside', 'adobe podcast',
  'suno', 'udio', 'soundraw', 'beatoven', 'mubert',
  'naturalreader', 'murf', 'lovo', 'readspeaker',
  'krisp', 'voice.ai', 'lalal', 'audiokit', 'revoice', 'voicemaker'
];

for (const term of terms) {
  const matches = tools.filter((t: any) => 
    t.name?.toLowerCase().includes(term) || t.slug?.toLowerCase().includes(term)
  );
  console.log(`${term} (${matches.length}):`, matches.map((m: any) => ({ id: m.id, slug: m.slug, name: m.name })));
}
