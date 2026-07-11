import fs from "fs/promises";
import path from "path";
import { categories } from "../src/lib/data/categories";

async function migrate() {
    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });

    const filePath = path.join(dataDir, "categories.json");
    await fs.writeFile(filePath, JSON.stringify(categories, null, 2), "utf-8");
    console.log(`Migrated ${categories.length} categories to data/categories.json`);
}

migrate().catch(console.error);
