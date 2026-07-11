'use client';

import React from 'react';
import { useAssetManifest } from '@/lib/contexts/AssetManifestContext';
import { AITool } from '@/lib/types/tool';
import { getExpectedAssetFilename, getGeneratedSeoMetadata } from '@/lib/utils/assets';
interface ToolImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'type'> {
  tool: AITool;
  type: 'logo' | 'screenshot';
  alt?: string;
}

export function ToolImage({ tool, type, className, alt, ...props }: ToolImageProps) {
  const manifest = useAssetManifest();
  const uploadedFormat = manifest[tool.slug]?.[type];

  let src = type === 'logo' ? tool.logoUrl : (tool.screenshotUrl || tool.imageUrl);
  const metadata = getGeneratedSeoMetadata(tool.name, type);
  const finalAlt = alt || metadata.alt;

  if (uploadedFormat) {
    const expectedFilename = getExpectedAssetFilename(tool.slug, type, uploadedFormat);
    src = `/assets/${type === 'logo' ? 'logos' : 'screenshots'}/${expectedFilename}`;
  }

  // Fallback if somehow there's no url at all
  if (!src) {
    return <div className={`bg-gray-100 flex items-center justify-center ${className || ''}`} {...props} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src={src} 
      alt={finalAlt} 
      className={className}
      {...props} 
    />
  );
}
