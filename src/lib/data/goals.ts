export const ROLES = ["Developer", "Marketer", "Designer", "Founder", "Student"];

import goalsJson from '../../../data/goals.json';

// goalsJson is an array like [{ id: "Developer", name: "Developer", items: [...] }]
// The frontend expects a Record<string, string[]>:
export const GOALS: Record<string, string[]> = goalsJson.reduce((acc: Record<string, string[]>, goal: {id: string, items: string[]}) => {
  acc[goal.id] = goal.items;
  return acc;
}, {});
