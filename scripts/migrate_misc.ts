import fs from "fs/promises";
import path from "path";
import { workflows } from "../src/lib/workflows";
import { GOALS } from "../src/lib/data/goals";

async function migrate() {
    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });

    // Migrate workflows
    const workflowsPath = path.join(dataDir, "workflows.json");
    await fs.writeFile(workflowsPath, JSON.stringify(workflows, null, 2), "utf-8");
    console.log(`Migrated ${workflows.length} workflows to data/workflows.json`);

    // Migrate goals
    const goalsArray = Object.keys(GOALS).map(key => ({
        id: key,
        name: key,
        items: GOALS[key]
    }));
    const goalsPath = path.join(dataDir, "goals.json");
    await fs.writeFile(goalsPath, JSON.stringify(goalsArray, null, 2), "utf-8");
    console.log(`Migrated goals array to data/goals.json`);

    // Migrate comparisons (mock empty for now)
    const comparisonsPath = path.join(dataDir, "comparisons.json");
    await fs.writeFile(comparisonsPath, JSON.stringify([], null, 2), "utf-8");
    console.log(`Initialized data/comparisons.json`);
}

migrate().catch(console.error);
