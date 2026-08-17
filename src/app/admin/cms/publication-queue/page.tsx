import { Metadata } from 'next';
import { PublicationQueueClient } from './publication-queue-client';

export const metadata: Metadata = {
  title: 'Publication Queue | AIToolsHaven Admin',
  description: 'Review and manage tool publication readiness.',
};

export default function PublicationQueuePage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Publication Queue</h1>
            <p className="mt-2 text-sm text-gray-500">
              Review publication readiness, filter by status, and manage the controlled publishing workflow.
            </p>
          </div>
        </div>
      </div>
      <PublicationQueueClient />
    </div>
  );
}
