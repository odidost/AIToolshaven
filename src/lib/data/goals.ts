import { tools } from "@/lib/data/tools";

export const ROLES: string[] = [];
export const GOALS: Record<string, string[]> = {};

const rolesMap = new Map<string, Set<string>>();

// Build roles and goals dynamically from the tools database to ensure 100% match rate
tools.forEach(t => {
    const tRoles = t.bestFor || [];
    const tGoals = [...(t.useCases || []), ...(t.goals || [])];
    
    // Clean and filter sensible goals
    const cleanGoals = tGoals
        .map(g => g.trim().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))
        .filter(g => g.length > 2 && g.length < 35);
    
    tRoles.forEach(r => {
        const role = r.trim().replace(/\b\w/g, l => l.toUpperCase());
        if (!rolesMap.has(role)) rolesMap.set(role, new Set());
        
        cleanGoals.forEach(g => rolesMap.get(role)?.add(g));
    });
});

rolesMap.forEach((goalsSet, role) => {
    if (goalsSet.size > 0) {
        ROLES.push(role);
        
        // Convert to array and sort. Take top 25 to avoid massive dropdowns.
        GOALS[role] = Array.from(goalsSet)
            .sort((a, b) => a.localeCompare(b))
            .slice(0, 25);
    }
});

ROLES.sort((a, b) => a.localeCompare(b));
