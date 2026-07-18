import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing SUPABASE env vars");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function cleanUntitled() {
  console.log("Cleaning up untitled items...");

  // 1. Clean tools
  const { error: tErr } = await supabase
    .from("tools")
    .delete()
    .or("name.ilike.%untitled%,name.ilike.%new tool%,slug.ilike.%unnamed%,slug.ilike.%new-tool%");
  if (tErr) console.error("Error deleting tools:", tErr);
  else console.log("Deleted untitled tools");

  // 2. Clean categories
  const { error: cErr } = await supabase
    .from("categories")
    .delete()
    .or("name.ilike.%untitled%,name.ilike.%new category%,slug.ilike.%untitled%,slug.ilike.%new-category%");
  if (cErr) console.error("Error deleting categories:", cErr);
  else console.log("Deleted untitled categories");

  // 3. Clean workflows
  const { error: wErr } = await supabase
    .from("workflows")
    .delete()
    .or("title.ilike.%untitled%,title.ilike.%new workflow%,slug.ilike.%untitled%,slug.ilike.%new-workflow%");
  if (wErr) console.error("Error deleting workflows:", wErr);
  else console.log("Deleted untitled workflows");

  // 4. Clean goals
  const { error: gErr } = await supabase
    .from("goals")
    .delete()
    .or("title.ilike.%untitled%,title.ilike.%new goal%,slug.ilike.%untitled%,slug.ilike.%new-goal%");
  if (gErr) console.error("Error deleting goals:", gErr);
  else console.log("Deleted untitled goals");

  // 5. Clean comparisons
  const { error: compErr } = await supabase
    .from("comparisons")
    .delete()
    .or("title.ilike.%untitled%,slug.ilike.%untitled%");
  if (compErr) console.error("Error deleting comparisons:", compErr);
  else console.log("Deleted untitled comparisons");

  console.log("Cleanup complete!");
}

cleanUntitled();
