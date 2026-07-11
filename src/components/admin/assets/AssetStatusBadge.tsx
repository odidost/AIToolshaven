import { AlertCircle, CheckCircle2, Image as ImageIcon, XCircle } from 'lucide-react';
import { AssetStatus } from '@/lib/utils/assets';

interface AssetStatusBadgeProps {
  status: AssetStatus;
  type: 'logo' | 'screenshot';
}

export function AssetStatusBadge({ status, type }: AssetStatusBadgeProps) {
  switch (status) {
    case 'Real':
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-600 rounded-full border border-emerald-500/20">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Real {type}</span>
        </div>
      );
    case 'Placeholder':
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-amber-500/10 text-amber-600 rounded-full border border-amber-500/20">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Placeholder</span>
        </div>
      );
    case 'Broken':
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-red-500/10 text-red-600 rounded-full border border-red-500/20">
          <XCircle className="w-3.5 h-3.5" />
          <span>Broken</span>
        </div>
      );
    case 'Missing':
    default:
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-500/10 text-gray-600 rounded-full border border-gray-500/20">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Missing</span>
        </div>
      );
  }
}
