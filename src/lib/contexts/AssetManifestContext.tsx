'use client';

import React, { createContext, useContext } from 'react';

export type AssetFormat = 'webp' | 'svg';

export interface AssetManifestRegistry {
  [slug: string]: {
    logo?: AssetFormat;
    screenshot?: AssetFormat;
  };
}

const AssetManifestContext = createContext<AssetManifestRegistry>({});

export function AssetManifestProvider({ 
  manifest, 
  children 
}: { 
  manifest: AssetManifestRegistry; 
  children: React.ReactNode; 
}) {
  return (
    <AssetManifestContext.Provider value={manifest}>
      {children}
    </AssetManifestContext.Provider>
  );
}

export function useAssetManifest() {
  return useContext(AssetManifestContext);
}
