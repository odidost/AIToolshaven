import { AssetDashboard } from '@/components/admin/assets/AssetDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asset Management | AIToolsHaven Admin',
  description: 'Manage AIToolsHaven logos and screenshots.',
};

export default function AdminAssetsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-fluid-h2 font-bold tracking-tight text-gray-900">Asset Management System</h1>
            <p className="mt-2 text-sm text-gray-500">
              Manage, optimize, and replace placeholder logos and screenshots across all tools.
            </p>
          </div>
        </div>
      </div>
      
      <AssetDashboard />
    </div>
  );
}
