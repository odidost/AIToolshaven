import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { AssetManifest } from '@/lib/utils/assets';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const slug = formData.get('slug') as string;
    const type = formData.get('type') as 'logo' | 'screenshot';

    if (!file || !slug || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Determine extension from file type (client should send image/webp or image/svg+xml)
    const isSvg = file.type === 'image/svg+xml';
    const extension = isSvg ? 'svg' : 'webp';
    const suffix = type === 'logo' ? 'logo' : 'interface';
    const filename = `${slug}-${suffix}.${extension}`;

    const dirName = type === 'logo' ? 'logos' : 'screenshots';
    const uploadDir = path.join(process.cwd(), 'public', 'assets', dirName);

    // Ensure directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);

    // Save the file
    await fs.writeFile(filePath, buffer);

    // Update manifest
    const manifestPath = path.join(process.cwd(), 'public', 'assets', 'manifest.json');
    let manifest: AssetManifest = {};
    try {
      const manifestData = await fs.readFile(manifestPath, 'utf8');
      manifest = JSON.parse(manifestData);
    } catch (e) {
      // file might not exist yet
    }

    if (!manifest[slug]) manifest[slug] = {};
    manifest[slug][type] = extension;
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

    return NextResponse.json({
      success: true,
      url: `/assets/${dirName}/${filename}`,
      filename,
    });
  } catch (error) {
    console.error('Error uploading asset:', error);
    return NextResponse.json({ error: 'Failed to upload asset' }, { status: 500 });
  }
}
