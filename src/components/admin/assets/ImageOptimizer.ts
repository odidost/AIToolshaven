export const MAX_IMAGE_DIMENSION = 2000;
export const WEBP_QUALITY = 0.85;

export async function processImageForUpload(file: File, fileNamePrefix: string): Promise<File> {
  // Pass SVGs through directly
  if (file.type === 'image/svg+xml') {
    return new File([file], `${fileNamePrefix}.svg`, { type: 'image/svg+xml' });
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      let width = img.width;
      let height = img.height;

      // Resize if oversized
      if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
        const ratio = Math.min(MAX_IMAGE_DIMENSION / width, MAX_IMAGE_DIMENSION / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return reject(new Error('Could not get canvas context'));
      }

      // Fill with white background in case of transparent PNGs if we want to ensure no black backgrounds,
      // but WebP supports transparency. So we can just draw the image.
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            return reject(new Error('Canvas to Blob conversion failed'));
          }
          // The new file is a WebP image
          const newFile = new File([blob], `${fileNamePrefix}.webp`, {
            type: 'image/webp',
            lastModified: Date.now(),
          });
          resolve(newFile);
        },
        'image/webp',
        WEBP_QUALITY
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to load image for processing'));
    };

    img.src = objectUrl;
  });
}
