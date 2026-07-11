import type { AITool } from "@/lib/types/tool";

export type AssetStatus = 'Real' | 'Placeholder' | 'Missing' | 'Broken';

export interface ToolAssetStatus {
  logo: AssetStatus;
  screenshot: AssetStatus;
  expectedLogo: string;
  expectedScreenshot: string;
  realLogoUrl?: string;
  realScreenshotUrl?: string;
}

export type AdminToolWithStatus = AITool & { assetStatus: ToolAssetStatus };

export interface AssetManifestEntry {
  logo?: 'webp' | 'svg' | 'png' | 'jpg' | string;
  screenshot?: 'webp' | 'svg' | 'png' | 'jpg' | string;
}

export type AssetManifest = Record<string, AssetManifestEntry>;
export function getExpectedAssetFilename(slug: string, type: 'logo' | 'screenshot', format: string = 'webp') {
  const suffix = type === 'logo' ? 'logo' : 'interface';
  return `${slug}-${suffix}.${format}`;
}

export function getGeneratedSeoMetadata(toolName: string, type: 'logo' | 'screenshot') {
  if (type === 'logo') {
    return {
      alt: `${toolName} logo`,
      title: `${toolName} Logo`,
    };
  } else {
    return {
      alt: `${toolName} interface screenshot`,
      title: `${toolName} Interface Screenshot`,
    };
  }
}

export function isPlaceholderUrl(url?: string): boolean {
  if (!url) return false;
  return url.includes('unsplash.com') || url.includes('placeholder') || url.includes('default');
}
