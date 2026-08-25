import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

// Parse .env.local manually
function loadEnv() {
  const envPath = path.resolve('.env.local');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...valParts] = trimmed.split('=');
        const val = valParts.join('=').replace(/^["']|["']$/g, '');
        process.env[key.trim()] = val;
      }
    }
  }
}
loadEnv();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const APPROVED_20_SLUGS = [
  'perplexity',
  'elicit-ai',
  'consensus',
  'scite-ai',
  'scispace',
  'chatpdf',
  'connected-papers',
  'researchrabbit',
  'jenni-ai',
  'paperpal',
  'humata',
  'explainpaper',
  'semantic-scholar',
  'scisummary-ai',
  'genei-io',
  'sourcely-ai',
  'keenious-research',
  'paperdigest-ai',
  'trinka',
  'wordvice-ai'
];

async function run() {
  console.log('=== REMOVING 25 NON-APPROVED RESEARCH TOOLS ===\n');

  // 1. Load local tools.json
  const toolsJsonPath = path.resolve('data/tools.json');
  const allTools: any[] = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

  // Find all research tools currently in dataset
  const researchTools = allTools.filter(t => 
    t.category === 'cat-research' || 
    t.category === 'ai-research-tools' || 
    t.category === 'Research' ||
    (t.additionalCategories && (t.additionalCategories.includes('cat-research') || t.additionalCategories.includes('ai-research-tools')))
  );

  console.log(`Found ${researchTools.length} total research tools currently.`);

  // Determine tools to delete
  const toolsToDelete = researchTools.filter(t => !APPROVED_20_SLUGS.includes(t.slug));
  console.log(`Tools marked for complete deletion (${toolsToDelete.length}):`);
  toolsToDelete.forEach((t, i) => {
    console.log(`  ${i + 1}. [${t.name}] (slug: ${t.slug}, id: ${t.id})`);
  });

  const idsToDelete = toolsToDelete.map(t => t.id).filter(Boolean);
  const slugsToDelete = toolsToDelete.map(t => t.slug).filter(Boolean);

  // 2. Delete from Supabase Database
  console.log('\n🗑️ Deleting from Supabase Database...');
  if (idsToDelete.length > 0) {
    const { error: errId } = await supabase.from('tools').delete().in('id', idsToDelete);
    if (errId) {
      console.error('  Error deleting by IDs from Supabase:', errId.message);
    } else {
      console.log(`  ✓ Deleted ${idsToDelete.length} records by ID from Supabase 'tools' table.`);
    }
  }
  if (slugsToDelete.length > 0) {
    const { error: errSlug } = await supabase.from('tools').delete().in('slug', slugsToDelete);
    if (errSlug) {
      console.error('  Error deleting by slugs from Supabase:', errSlug.message);
    } else {
      console.log(`  ✓ Deleted matching records by slug from Supabase 'tools' table.`);
    }
  }

  // 3. Delete assets from Supabase Storage bucket 'assets'
  console.log('\n🗑️ Deleting assets from Supabase Storage bucket "assets"...');
  const { data: logoFiles } = await supabase.storage.from('assets').list('logos', { limit: 1000 });
  const { data: shotFiles } = await supabase.storage.from('assets').list('screenshots', { limit: 1000 });

  const storagePathsToRemove: string[] = [];

  for (const slug of slugsToDelete) {
    if (logoFiles) {
      const matches = logoFiles.filter(f => f.name.startsWith(slug + '-'));
      matches.forEach(m => storagePathsToRemove.push(`logos/${m.name}`));
    }
    if (shotFiles) {
      const matches = shotFiles.filter(f => f.name.startsWith(slug + '-'));
      matches.forEach(m => storagePathsToRemove.push(`screenshots/${m.name}`));
    }
  }

  if (storagePathsToRemove.length > 0) {
    console.log(`  Found ${storagePathsToRemove.length} storage files to delete:`, storagePathsToRemove);
    const { data: removed, error: remErr } = await supabase.storage.from('assets').remove(storagePathsToRemove);
    if (remErr) {
      console.error('  Error removing storage assets:', remErr.message);
    } else {
      console.log(`  ✓ Successfully removed ${removed?.length || storagePathsToRemove.length} asset files from Supabase Storage.`);
    }
  } else {
    console.log('  No matching files found in Supabase Storage.');
  }

  // 4. Delete local assets in public/assets/ if any
  console.log('\n🗑️ Cleaning local public/assets/ files...');
  const publicLogosDir = path.resolve('public/assets/logos');
  const publicShotsDir = path.resolve('public/assets/screenshots');

  for (const slug of slugsToDelete) {
    if (fs.existsSync(publicLogosDir)) {
      const files = fs.readdirSync(publicLogosDir);
      files.filter(f => f.startsWith(slug + '-')).forEach(f => {
        const p = path.join(publicLogosDir, f);
        fs.unlinkSync(p);
        console.log(`  Deleted local file: ${p}`);
      });
    }
    if (fs.existsSync(publicShotsDir)) {
      const files = fs.readdirSync(publicShotsDir);
      files.filter(f => f.startsWith(slug + '-')).forEach(f => {
        const p = path.join(publicShotsDir, f);
        fs.unlinkSync(p);
        console.log(`  Deleted local file: ${p}`);
      });
    }
  }

  // 5. Clean manifest.json if exists
  const manifestPath = path.resolve('public/assets/manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      let manifestChanged = false;
      for (const slug of slugsToDelete) {
        if (manifest[slug]) {
          delete manifest[slug];
          manifestChanged = true;
        }
      }
      if (manifestChanged) {
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
        console.log('  ✓ Updated public/assets/manifest.json (removed deleted slugs).');
      }
    } catch (e) {
      console.error('  Error updating manifest.json:', e);
    }
  }

  // 6. Update local data/tools.json
  console.log('\n💾 Updating local data/tools.json...');
  const remainingTools = allTools.filter(t => !idsToDelete.includes(t.id) && !slugsToDelete.includes(t.slug));
  
  // Also ensure SciSpace has clean URL
  const scispace = remainingTools.find(t => t.slug === 'scispace');
  if (scispace) {
    scispace.websiteUrl = 'https://scispace.com';
    scispace.url = 'https://scispace.com';
    // Update in Supabase too
    await supabase.from('tools').update({ website_url: 'https://scispace.com', url: 'https://scispace.com' }).eq('slug', 'scispace');
  }

  fs.writeFileSync(toolsJsonPath, JSON.stringify(remainingTools, null, 2), 'utf8');
  console.log(`  ✓ Saved data/tools.json! Previous count: ${allTools.length}, New count: ${remainingTools.length}`);

  // 7. Verify category count
  const remainingResearch = remainingTools.filter(t => 
    t.category === 'cat-research' || 
    t.category === 'ai-research-tools' || 
    t.category === 'Research' ||
    (t.additionalCategories && (t.additionalCategories.includes('cat-research') || t.additionalCategories.includes('ai-research-tools')))
  );
  console.log(`\n=== DELETION COMPLETE ===`);
  console.log(`Remaining AI Research tools count: ${remainingResearch.length}`);
  remainingResearch.forEach((t, i) => {
    console.log(`  ${i + 1}. [${t.name}] (${t.slug})`);
  });
}

run().catch(console.error);
