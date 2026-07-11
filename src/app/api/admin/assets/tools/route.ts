import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { getAllTools } from '@/lib/data/tools-service';
import { AssetStatus, AdminToolWithStatus, isPlaceholderUrl, getExpectedAssetFilename, AssetManifest } from '@/lib/utils/assets';

export async function GET() {
  const tools = getAllTools();
  
  const manifestPath = path.join(process.cwd(), 'public', 'assets', 'manifest.json');
  let manifest: AssetManifest = {};
  
  try {
    const data = await fs.readFile(manifestPath, 'utf8');
    manifest = JSON.parse(data);
  } catch (e) {
    // manifest might not exist yet
  }
  
  const toolsWithStatus: AdminToolWithStatus[] = tools.map((tool) => {
    let logoStatus: AssetStatus = 'Missing';
    let screenshotStatus: AssetStatus = 'Missing';
    let realLogoUrl: string | undefined;
    let realScreenshotUrl: string | undefined;

    const uploadedLogoFormat = manifest[tool.slug]?.logo;
    const uploadedScreenshotFormat = manifest[tool.slug]?.screenshot;

    // Check Logo
    const expectedLogoWebp = getExpectedAssetFilename(tool.slug, 'logo', 'webp');
    
    if (uploadedLogoFormat) {
      logoStatus = 'Real';
      const actualFilename = getExpectedAssetFilename(tool.slug, 'logo', uploadedLogoFormat);
      realLogoUrl = `/assets/logos/${actualFilename}`;
    } else if (isPlaceholderUrl(tool.logoUrl)) {
      logoStatus = 'Placeholder';
    } else if (tool.logoUrl && tool.logoUrl.startsWith('/assets/')) {
      logoStatus = 'Broken';
    }

    // Check Screenshot
    const expectedScreenshotWebp = getExpectedAssetFilename(tool.slug, 'screenshot', 'webp');
    
    if (uploadedScreenshotFormat) {
      screenshotStatus = 'Real';
      const actualFilename = getExpectedAssetFilename(tool.slug, 'screenshot', uploadedScreenshotFormat);
      realScreenshotUrl = `/assets/screenshots/${actualFilename}`;
    } else if (isPlaceholderUrl(tool.screenshotUrl)) {
      screenshotStatus = 'Placeholder';
    } else if (tool.screenshotUrl && tool.screenshotUrl.startsWith('/assets/')) {
      screenshotStatus = 'Broken';
    }

    return {
      ...tool,
      assetStatus: {
        logo: logoStatus,
        screenshot: screenshotStatus,
        expectedLogo: expectedLogoWebp,
        expectedScreenshot: expectedScreenshotWebp,
        realLogoUrl,
        realScreenshotUrl
      }
    };
  });

  return NextResponse.json(toolsWithStatus);
}
