import { Upload } from 'lucide-react';
import { AdminToolWithStatus } from '@/lib/utils/assets';
import { AssetStatusBadge } from './AssetStatusBadge';

interface AssetCardProps {
  tool: AdminToolWithStatus;
  onReplace: (tool: AdminToolWithStatus, type: 'logo' | 'screenshot') => void;
}

export function AssetCard({ tool, onReplace }: AssetCardProps) {
  const currentLogoUrl = tool.assetStatus.realLogoUrl || tool.logoUrl;
  const currentScreenshotUrl = tool.assetStatus.realScreenshotUrl || tool.screenshotUrl;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
          <p className="text-xs text-gray-500 mt-0.5 font-mono">{tool.slug}</p>
        </div>
      </div>
      
      <div className="space-y-5 flex-1">
        {/* Logo Section */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Logo</span>
            <AssetStatusBadge status={tool.assetStatus.logo} type="logo" />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center p-2 shadow-sm">
              {currentLogoUrl ? (
                <img src={currentLogoUrl} alt={`${tool.name} logo`} className="w-full h-full object-contain" loading="lazy" />
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-lg"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 mb-2 truncate" title={tool.assetStatus.expectedLogo}>
                Expected: {tool.assetStatus.expectedLogo}
              </p>
              <button 
                onClick={() => onReplace(tool, 'logo')}
                className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg transition-colors border border-blue-100 bg-white"
              >
                <Upload className="w-3.5 h-3.5" />
                Replace Logo
              </button>
            </div>
          </div>
        </div>

        {/* Screenshot Section */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Screenshot</span>
            <AssetStatusBadge status={tool.assetStatus.screenshot} type="screenshot" />
          </div>
          <div className="w-full aspect-video bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center shadow-sm relative group">
            {currentScreenshotUrl ? (
              <img src={currentScreenshotUrl} alt={`${tool.name} screenshot`} className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <div className="w-full h-full bg-gray-100"></div>
            )}
            
            <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <button 
                onClick={() => onReplace(tool, 'screenshot')}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-900 bg-white px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
              >
                <Upload className="w-4 h-4" />
                Replace Screenshot
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 truncate text-center" title={tool.assetStatus.expectedScreenshot}>
            Expected: {tool.assetStatus.expectedScreenshot}
          </p>
        </div>
      </div>
    </div>
  );
}
