import { NextResponse } from 'next/server';
import { getAllTools } from '@/lib/data/tools-service';
import { AssetStatus, AdminToolWithStatus, isPlaceholderUrl, AssetManifest } from '@/lib/utils/assets';
import { categories } from '@/lib/data/categories';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const tools = await getAllTools();
  
  const manifestPath = path.join(process.cwd(), 'public', 'assets', 'manifest.json');
  let manifest: AssetManifest = {};
  
  try {
    const data = await fs.readFile(manifestPath, 'utf8');
    manifest = JSON.parse(data);
  } catch (e) {
    // manifest might not exist yet
  }

  // --- 1. Content & Assets Audit ---
  let missingLogos = 0;
  let missingScreenshots = 0;
  let placeholderContentCount = 0;
  let missingMetadataCount = 0;
  const toolsWithIssues: Array<{ slug: string, issues: string[] }> = [];

  for (const tool of tools) {
    const issues: string[] = [];

    // Asset Checks
    const uploadedLogoFormat = manifest[tool.slug]?.logo;
    const uploadedScreenshotFormat = manifest[tool.slug]?.screenshot;
    if (!uploadedLogoFormat && (isPlaceholderUrl(tool.logoUrl) || !tool.logoUrl)) {
      missingLogos++;
      issues.push('Missing Logo');
    }
    if (!uploadedScreenshotFormat && (isPlaceholderUrl(tool.screenshotUrl) || !tool.screenshotUrl)) {
      missingScreenshots++;
      issues.push('Missing Screenshot');
    }

    // Content Checks
    const contentToSearch = `${tool.description} ${tool.editorial?.overview || ''} ${tool.editorial?.verdict || ''}`.toLowerCase();
    if (contentToSearch.includes('lorem ipsum') || contentToSearch.includes('placeholder')) {
      placeholderContentCount++;
      issues.push('Placeholder Text Found');
    }

    if (!tool.description || tool.description.length < 50) {
      missingMetadataCount++;
      issues.push('Description too short');
    }
    
    if (issues.length > 0) {
      toolsWithIssues.push({ slug: tool.slug, issues });
    }
  }

  // --- 2. Broken Links & Routes Audit ---
  let brokenCategories = 0;
  for (const tool of tools) {
    if (tool.category && !categories.find(c => c.id === tool.category)) {
      brokenCategories++;
      if (!toolsWithIssues.find(t => t.slug === tool.slug)) {
         toolsWithIssues.push({ slug: tool.slug, issues: [] });
      }
      toolsWithIssues.find(t => t.slug === tool.slug)?.issues.push(`Invalid category: ${tool.category}`);
    }
  }

  // --- 3. Build Information ---
  const buildInfo = {
    environment: process.env.NODE_ENV || 'development',
    nextVersion: '16.2.9',
    timestamp: new Date().toISOString(),
  };

  // --- 4. Calculate Score ---
  // Start with 100
  let score = 100;
  
  // Deduct points
  score -= (missingLogos > 0 ? 10 : 0);
  score -= (missingScreenshots > 0 ? 10 : 0);
  score -= (placeholderContentCount > 0 ? 20 : 0); // Very bad
  score -= (brokenCategories > 0 ? 15 : 0);
  score -= (missingMetadataCount > 0 ? 5 : 0);

  score = Math.max(0, score);

  return NextResponse.json({
    score,
    metrics: {
      totalTools: tools.length,
      missingLogos,
      missingScreenshots,
      placeholderContentCount,
      missingMetadataCount,
      brokenCategories
    },
    toolsWithIssues,
    buildInfo
  });
}
