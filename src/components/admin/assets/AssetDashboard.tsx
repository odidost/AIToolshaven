'use client';

import { useState, useEffect, useMemo } from 'react';
import { AdminToolWithStatus, AssetStatus } from '@/lib/utils/assets';
import { AssetStats } from './AssetStats';
import { AssetFilters } from './AssetFilters';
import { AssetCard } from './AssetCard';
import { UploadDialog } from './UploadDialog';
import { Loader2 } from 'lucide-react';

export function AssetDashboard() {
  const [tools, setTools] = useState<AdminToolWithStatus[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<AssetStatus | 'All' | 'Needs Attention'>('All');

  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<AdminToolWithStatus | null>(null);
  const [uploadType, setUploadType] = useState<'logo' | 'screenshot' | null>(null);

  const fetchTools = async () => {
    try {
      const res = await fetch('/api/admin/assets/tools');
      const data = await res.json();
      setTools(data);
    } catch (error) {
      console.error('Failed to fetch tools:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchTools();
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      // Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          tool.name.toLowerCase().includes(query) || 
          tool.slug.toLowerCase().includes(query) ||
          (tool.company && tool.company.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Filter
      if (statusFilter !== 'All') {
        if (statusFilter === 'Needs Attention') {
          return tool.assetStatus.logo !== 'Real' || tool.assetStatus.screenshot !== 'Real';
        } else {
          return tool.assetStatus.logo === statusFilter || tool.assetStatus.screenshot === statusFilter;
        }
      }

      return true;
    });
  }, [tools, searchQuery, statusFilter]);

  const handleReplace = (tool: AdminToolWithStatus, type: 'logo' | 'screenshot') => {
    setSelectedTool(tool);
    setUploadType(type);
    setUploadDialogOpen(true);
  };

  const handleUploadComplete = () => {
    // Re-fetch tools to get updated status from disk
    fetchTools();
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          <p className="text-sm font-medium text-gray-500">Scanning assets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <AssetStats tools={tools} />
      
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Asset Management</h2>
        <AssetFilters 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <AssetCard 
              key={tool.id} 
              tool={tool} 
              onReplace={handleReplace} 
            />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
            <p className="text-gray-500">No tools found matching your criteria.</p>
          </div>
        )}
      </div>

      <UploadDialog 
        isOpen={uploadDialogOpen}
        onClose={() => setUploadDialogOpen(false)}
        tool={selectedTool}
        type={uploadType}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  );
}
