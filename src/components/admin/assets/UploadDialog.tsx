'use client';

import { useState, useRef } from 'react';
import { UploadCloud, X, Save } from 'lucide-react';
import { AdminToolWithStatus } from '@/lib/utils/assets';
import { processImageForUpload } from './ImageOptimizer';

interface UploadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  tool: AdminToolWithStatus | null;
  type: 'logo' | 'screenshot' | null;
  onUploadComplete: () => void;
}

export function UploadDialog({ isOpen, onClose, tool, type, onUploadComplete }: UploadDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen || !tool || !type) return null;

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsProcessing(true);

    try {
      // Free old preview URL
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      // Show instant preview of original
      setPreviewUrl(URL.createObjectURL(file));

      // Process file for upload
      const prefix = `${tool.slug}-${type === 'logo' ? 'logo' : 'interface'}`;
      const processed = await processImageForUpload(file, prefix);
      
      setSelectedFile(processed);
    } catch (err: Error | unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process image';
      setError(errorMessage);
      setSelectedFile(null);
      setPreviewUrl(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSave = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('slug', tool.slug);
    formData.append('type', type);

    try {
      const res = await fetch('/api/admin/assets/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Upload failed');
      }

      onUploadComplete();
      handleClose();
    } catch (err: Error | unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to upload image';
      setError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Replace {type === 'logo' ? 'Logo' : 'Screenshot'}</h3>
            <p className="text-sm text-gray-500 mt-1">{tool.name}</p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
              {error}
            </div>
          )}

          {/* Upload Area */}
          {!previewUrl ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">Click to upload image</p>
              <p className="text-xs text-gray-500 mt-2 max-w-[250px]">
                Supports PNG, JPG, JPEG, WebP, and SVG. Will be automatically optimized.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className={`relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center ${type === 'logo' ? 'aspect-square max-w-[200px] mx-auto' : 'aspect-video w-full'}`}>
                <img 
                  src={previewUrl} 
                  alt="Preview" 
                  className={`object-contain ${isProcessing ? 'opacity-50 blur-sm' : ''} ${type === 'logo' ? 'w-full h-full p-4' : 'w-full h-full'}`}
                />
                {isProcessing && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-900 bg-white/80 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md">
                      Processing...
                    </span>
                  </div>
                )}
              </div>
              
              {!isProcessing && selectedFile && (
                <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 flex justify-between items-center border border-gray-100">
                  <span className="truncate max-w-[250px]" title={selectedFile.name}>{selectedFile.name}</span>
                  <span className="font-medium">{(selectedFile.size / 1024).toFixed(1)} KB</span>
                </div>
              )}

              <button 
                onClick={() => {
                  setSelectedFile(null);
                  URL.revokeObjectURL(previewUrl);
                  setPreviewUrl(null);
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 mx-auto block"
              >
                Choose a different file
              </button>
            </div>
          )}
          
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden" 
            accept=".jpg,.jpeg,.png,.webp,.svg"
          />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b-3xl">
          <button 
            onClick={handleClose}
            className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            disabled={isUploading}
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            disabled={!selectedFile || isProcessing || isUploading}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {isUploading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save {type === 'logo' ? 'Logo' : 'Screenshot'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
