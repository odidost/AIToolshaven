'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAssetManifest } from '@/lib/contexts/AssetManifestContext';
import { getExpectedAssetFilename, getGeneratedSeoMetadata } from '@/lib/utils/assets';

interface ToolImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'type'> {
  tool: { name: string; slug: string; logoUrl?: string; screenshotUrl?: string; imageUrl?: string };
  type: 'logo' | 'screenshot';
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ToolImage({ tool, type, className, alt, width, height, priority, ...props }: ToolImageProps) {
  const manifest = useAssetManifest();
  const uploadedFormat = manifest[tool.slug]?.[type];
  const [hasError, setHasError] = useState(false);

  let src = type === 'logo' ? tool.logoUrl : (tool.screenshotUrl || tool.imageUrl);
  const metadata = getGeneratedSeoMetadata(tool.name, type);
  const finalAlt = alt || metadata.alt;

  if (uploadedFormat && !src?.includes('supabase.co')) {
    const expectedFilename = getExpectedAssetFilename(tool.slug, type, uploadedFormat);
    src = `/assets/${type === 'logo' ? 'logos' : 'screenshots'}/${expectedFilename}`;
  }

  // Fallback if somehow there's no url at all or image failed
  if (!src || hasError) {
    return <div className={`bg-gray-100 flex items-center justify-center ${className || ''}`} {...props} />;
  }

  const defaultWidth = type === 'logo' ? 48 : 600;
  const defaultHeight = type === 'logo' ? 48 : 338;
  const isSvg = src.endsWith('.svg') || src.includes('.svg?');

  const isLocalOrAllowedDomain =
    src.startsWith('/') ||
    src.includes('supabase.co') ||
    src.includes('images.unsplash.com') ||
    src.includes('upload.wikimedia.org') ||
    src.includes('googleusercontent.com') ||
    src.includes('githubusercontent.com') ||
    src.includes('api.dicebear.com');

  if (isLocalOrAllowedDomain) {
    return (
      <Image
        src={src}
        alt={finalAlt}
        width={width || defaultWidth}
        height={height || defaultHeight}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        unoptimized={isSvg}
        className={className}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={finalAlt}
      width={width || defaultWidth}
      height={height || defaultHeight}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}

