import { AdminToolWithStatus, AssetStatus } from '@/lib/utils/assets';
import { CheckCircle2, AlertCircle, Image as ImageIcon, LayoutDashboard } from 'lucide-react';

interface AssetStatsProps {
  tools: AdminToolWithStatus[];
}

const StatCard = ({ title, value, icon: Icon, colorClass, subtitle }: { 
  title: string, 
  value: string | number, 
  icon: React.ElementType, 
  colorClass: { bg: string, text: string }, 
  subtitle?: string 
}) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className={`p-2 rounded-xl ${colorClass.bg}`}>
        <Icon className={`w-5 h-5 ${colorClass.text}`} />
      </div>
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-gray-900">{value}</span>
      {subtitle && <span className="text-sm text-gray-500">{subtitle}</span>}
    </div>
  </div>
);

export function AssetStats({ tools }: AssetStatsProps) {
  const totalTools = tools.length;
  
  const getCount = (type: 'logo' | 'screenshot', status: AssetStatus) => 
    tools.filter(t => t.assetStatus[type] === status).length;

  const realLogos = getCount('logo', 'Real');
  const realScreenshots = getCount('screenshot', 'Real');

  const overallCompletion = totalTools > 0 
    ? Math.round(((realLogos + realScreenshots) / (totalTools * 2)) * 100) 
    : 0;

  const logoCompletion = totalTools > 0 ? Math.round((realLogos / totalTools) * 100) : 0;
  const screenshotCompletion = totalTools > 0 ? Math.round((realScreenshots / totalTools) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Tools" 
          value={totalTools} 
          icon={LayoutDashboard} 
          colorClass={{ bg: 'bg-blue-50', text: 'text-blue-600' }} 
        />
        <StatCard 
          title="Overall Completion" 
          value={`${overallCompletion}%`} 
          subtitle="Real assets"
          icon={CheckCircle2} 
          colorClass={{ bg: 'bg-emerald-50', text: 'text-emerald-600' }} 
        />
        <StatCard 
          title="Placeholder Assets" 
          value={getCount('logo', 'Placeholder') + getCount('screenshot', 'Placeholder')} 
          icon={ImageIcon} 
          colorClass={{ bg: 'bg-amber-50', text: 'text-amber-600' }} 
        />
        <StatCard 
          title="Missing / Broken" 
          value={
            getCount('logo', 'Missing') + getCount('screenshot', 'Missing') + 
            getCount('logo', 'Broken') + getCount('screenshot', 'Broken')
          } 
          icon={AlertCircle} 
          colorClass={{ bg: 'bg-red-50', text: 'text-red-600' }} 
        />
      </div>

      {/* Progress Bars */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Bulk Progress</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-end mb-2">
              <div>
                <span className="text-sm font-medium text-gray-700">Logos</span>
                <span className="text-xs text-gray-500 ml-2">{realLogos} / {totalTools}</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{logoCompletion}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full transition-all duration-500" style={{ width: `${logoCompletion}%` }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-end mb-2">
              <div>
                <span className="text-sm font-medium text-gray-700">Screenshots</span>
                <span className="text-xs text-gray-500 ml-2">{realScreenshots} / {totalTools}</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{screenshotCompletion}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div className="bg-indigo-600 h-3 rounded-full transition-all duration-500" style={{ width: `${screenshotCompletion}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
