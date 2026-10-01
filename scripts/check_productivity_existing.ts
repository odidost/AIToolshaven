import { getLocalToolsByCategory } from '../src/lib/data/tools-service';

for (const c of ['ai-calendar-scheduling', 'ai-note-taking-knowledge', 'ai-email-productivity', 'ai-project-management', 'ai-meeting-assistants', 'c7']) {
  const res = getLocalToolsByCategory(c);
  console.log(`${c} (${res.length}):`, res.map(x => x.name));
}
