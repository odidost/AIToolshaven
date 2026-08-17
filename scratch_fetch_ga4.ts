import fs from "fs";
import path from "path";

// Manually parse .env.local
const envPath = path.resolve(".env.local");
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, "utf-8");
  envConfig.split("\n").forEach((line) => {
    const match = line.match(/^([^#\s]+?)=(.*)$/);
    if (match) {
      let key = match[1];
      let value = match[2].trim();
      // handle quotes
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1).replace(/\\n/g, '\n');
      }
      process.env[key] = value;
    }
  });
}

import { getGa4TopPages } from "./src/lib/services/ga4-service";

async function main() {
  const result = await getGa4TopPages(28, 10);
  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
