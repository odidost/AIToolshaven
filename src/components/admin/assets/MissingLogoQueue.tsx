'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { AdminToolWithStatus } from '@/lib/utils/assets';
import { UploadDialog } from './UploadDialog';
import { Loader2, ArrowRight, ExternalLink, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export function MissingLogoQueue() {
  const [tools, setTools] = useState<AdminToolWithStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<AdminToolWithStatus | null>(null);

  const fetchMissingLogos = async () => {
    try {
      const res = await fetch('/api/admin/assets/tools?asset=logo&status=manual_required');
      const data = await res.json();
      setTools(data);
    } catch (error) {
      console.error('Failed to fetch missing logos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMissingLogos();
  }, []);

  const filteredTools = useMemo(() => {
    let result = tools;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        (tool.websiteUrl && tool.websiteUrl.toLowerCase().includes(query)) ||
        tool.slug.toLowerCase().includes(query)
      );
    }
    // Default: oldest missing logo first (assuming ID or createdAt defines age)
    // We'll just keep the default order or sort by name if they are equal
    return result;
  }, [tools, searchQuery]);

  const handleUploadClick = (tool: AdminToolWithStatus) => {
    setSelectedTool(tool);
    setUploadDialogOpen(true);
  };

  const handleUploadComplete = () => {
    if (!selectedTool) return;
    
    // Remove the tool from the queue locally to make it fast
    setTools(prev => prev.filter(t => t.id !== selectedTool.id));
    
    // Focus the next tool if available
    const currentIndex = filteredTools.findIndex(t => t.id === selectedTool.id);
    if (currentIndex >= 0 && currentIndex + 1 < filteredTools.length) {
      const nextTool = filteredTools[currentIndex + 1];
      // Slight delay to allow modal to close fully before opening the next one
      setTimeout(() => {
        setSelectedTool(nextTool);
        setUploadDialogOpen(true);
      }, 300);
    } else {
      setUploadDialogOpen(false);
      setSelectedTool(null);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          <p className="text-sm font-medium text-gray-500">Loading missing logos queue...</p>
        </div>
      </div>
    );
  }

  if (tools.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">🎉 All tool logos are complete</h2>
        <p className="text-gray-500">Every tool currently has a logo.</p>
        <div className="mt-8 text-sm text-gray-400">
          <p>Missing logos: 0</p>
        </div>
        <Link href="/admin/assets" className="mt-6 inline-block text-blue-600 hover:underline">
          Return to Asset Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Missing Logos</h2>
          <p className="text-gray-500 mt-1">
            <span className="font-semibold text-blue-600">{tools.length}</span> tools require manual logo upload
          </p>
        </div>
        
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search missing logos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Queue List */}
      <div className="space-y-4">
        {filteredTools.map(tool => (
          <div key={tool.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
            {/* Screenshot Section */}
            <div className="w-full md:w-1/3 bg-gray-50 border-r border-gray-100 p-4 flex items-center justify-center min-h-[200px]">
              {tool.assetStatus.realScreenshotUrl || (tool.screenshotUrl && !tool.screenshotUrl.includes('placeholder') && !tool.screenshotUrl.includes('default')) ? (
                <img 
                  src={tool.assetStatus.realScreenshotUrl || tool.screenshotUrl} 
                  alt={`${tool.name} screenshot`}
                  className="w-full h-auto rounded-xl border border-gray-200 shadow-sm object-cover max-h-[250px]"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                  <span className="text-sm">Screenshot unavailable</span>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                    {tool.websiteUrl && (
                      <a 
                        href={tool.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 mt-1 font-medium"
                      >
                        {tool.websiteUrl} <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <Link 
                    href={`/admin/cms/tools/${tool.slug}`} 
                    className="text-xs text-gray-400 hover:text-gray-600 underline"
                  >
                    Open Tool Editor
                  </Link>
                </div>

                <div className="mt-4 space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium text-gray-900">Primary:</span> {tool.category || 'Unknown'}</p>
                  {tool.additionalCategories && tool.additionalCategories.length > 0 && (
                    <p><span className="font-medium text-gray-900">Additional:</span> {tool.additionalCategories.join(', ')}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                    ⚠ Manual upload required
                  </span>
                </div>
                <button
                  onClick={() => handleUploadClick(tool)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl shadow-sm transition-colors flex items-center gap-2"
                >
                  Upload Logo
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredTools.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500">No missing logos match your search.</p>
          </div>
        )}
      </div>

      <UploadDialog 
        isOpen={uploadDialogOpen}
        onClose={() => setUploadDialogOpen(false)}
        tool={selectedTool}
        type="logo"
        onUploadComplete={handleUploadComplete}
      />
    </div>
  );
}
