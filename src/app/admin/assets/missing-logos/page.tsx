import { MissingLogoQueue } from '@/components/admin/assets/MissingLogoQueue';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Missing Logos Queue | AIToolsHaven Admin',
  description: 'Rapidly resolve missing tool logos.',
};

export default function MissingLogosPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-fluid-h2 font-bold tracking-tight text-gray-900">Missing Logos Queue</h1>
            <p className="mt-2 text-sm text-gray-500">
              A fast, focused workflow for clearing missing logos using existing screenshots.
            </p>
          </div>
        </div>
      </div>
      
      <MissingLogoQueue />
    </div>
  );
}
