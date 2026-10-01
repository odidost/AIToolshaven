import fs from 'fs';
import path from 'path';

const toolsJsonPath = path.join(process.cwd(), 'data', 'tools.json');
const tools = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

const meetingTools = tools.filter((t: any) => 
  t.category_id === 'cat-meeting' || 
  t.categorySlug === 'ai-meeting-assistants' || 
  t.category === 'AI Meeting Assistants' ||
  (t.name && (t.name.toLowerCase().includes('otter') || t.name.toLowerCase().includes('fireflies') || t.name.toLowerCase().includes('fathom') || t.name.toLowerCase().includes('granola') || t.name.toLowerCase().includes('supernormal') || t.name.toLowerCase().includes('krisp') || t.name.toLowerCase().includes('fellow') || t.name.toLowerCase().includes('meetgeek') || t.name.toLowerCase().includes('avoma') || t.name.toLowerCase().includes('tldv') || t.name.toLowerCase().includes('bluedot')))
);

console.log('Meeting related tools count:', meetingTools.length);
meetingTools.forEach((t: any) => {
  console.log(t.id, '|', t.name, '|', t.slug, '|', t.category_id || t.categorySlug);
});
