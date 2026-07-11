/**
 * Storage Service Interface Placeholder
 * Designed to easily drop in AWS S3, Cloudflare R2, or Supabase Storage.
 */

export const StorageService = {
  /**
   * Uploads an asset (like a tool logo or screenshot) to remote storage.
   */
  async uploadFile(file: File, path: string): Promise<string> {
    // TODO: Implement Cloudflare R2 upload
    throw new Error("StorageService not yet implemented.");
  },

  /**
   * Deletes a file from remote storage.
   */
  async deleteFile(path: string): Promise<void> {
    // TODO: Implement Cloudflare R2 delete
  }
};
