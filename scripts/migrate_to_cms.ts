import fs from "fs/promises";
import path from "path";
import { tools } from "../src/lib/data/tools";
import { CmsToolDocument } from "../src/lib/types/cms";

async function migrate() {
    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });

    const toolsFilePath = path.join(dataDir, "tools.json");
    const cmsDocs: CmsToolDocument[] = tools.map(tool => ({
        id: tool.id,
        status: "published",
        publishedAt: new Date().toISOString(),
        lastAutosavedAt: null,
        draftData: tool,
        publishedData: tool,
        versions: []
    }));

    await fs.writeFile(toolsFilePath, JSON.stringify(cmsDocs, null, 2), "utf-8");
    console.log(`Migrated ${cmsDocs.length} tools to data/tools.json`);
}

migrate().catch(console.error);
