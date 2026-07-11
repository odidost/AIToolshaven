import { Search } from 'lucide-react';
import { AssetStatus } from '@/lib/utils/assets';

interface AssetFiltersProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  statusFilter: AssetStatus | 'All' | 'Needs Attention';
  setStatusFilter: (s: AssetStatus | 'All' | 'Needs Attention') => void;
}

export function AssetFilters({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }: AssetFiltersProps) {
  const filters: (AssetStatus | 'All' | 'Needs Attention')[] = [
    'All', 'Real', 'Placeholder', 'Missing', 'Broken', 'Needs Attention'
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6">
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search by tool name, slug, or company..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
      </div>
      
      <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setStatusFilter(filter)}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              statusFilter === filter 
                ? 'bg-gray-900 text-white shadow-sm' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {filter === 'Needs Attention' ? '⚠️ Needs Attention' : filter}
          </button>
        ))}
      </div>
    </div>
  );
}
