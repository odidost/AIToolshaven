import * as fs from 'fs';

const tools = JSON.parse(fs.readFileSync('data/tools.json', 'utf8'));
const terms = [
  'intercom', 'fin', 'zendesk', 'freshdesk', 'tidio', 'gorgias',
  'glean', 'dashworks', 'guru', 'moveworks',
  'manychat', 'landbot', 'wati', 'botpress', 'voiceflow',
  'character.ai', 'janitor', 'chai', 'crushon', 'tavern',
  'bland', 'vapi', 'retell', 'air ai', 'synthflow',
  'chatbase', 'customgpt', 'ingestai', 'yuma'
];

for (const term of terms) {
  const matches = tools.filter((t: any) => 
    t.name?.toLowerCase().includes(term) || t.slug?.toLowerCase().includes(term)
  );
  console.log(`${term} (${matches.length}):`, matches.map((m: any) => ({ id: m.id, slug: m.slug, name: m.name })));
}
