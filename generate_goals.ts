import { tools } from './src/lib/data/tools';
import * as fs from 'fs';

const rolesMap = new Map<string, Set<string>>();

tools.forEach(t => {
  const tRoles = t.bestFor || [];
  
  // Clean up and extract goals
  const rawGoals = [...(t.useCases || []), ...(t.goals || []), ...(t.tags || [])];
  
  // Optional: Clean and capitalize goals
  const cleanGoals = rawGoals.map(g => 
      g.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  ).filter(g => g.length < 30); // reasonable length

  tRoles.forEach(r => {
    // Standardize role names
    const roleName = r.trim();
    if (!rolesMap.has(roleName)) rolesMap.set(roleName, new Set());
    cleanGoals.forEach(g => {
        rolesMap.get(roleName)?.add(g);
    });
  });
});

const result = [];
for (const [r, goals] of rolesMap.entries()) {
    if (goals.size > 0) {
        // Shuffle or pick top
        const items = Array.from(goals).sort(() => 0.5 - Math.random()).slice(0, 10);
        result.push({ id: r, name: r, items });
    }
}

fs.writeFileSync('data/goals.json', JSON.stringify(result, null, 2));
console.log("Written " + result.length + " roles to goals.json");
