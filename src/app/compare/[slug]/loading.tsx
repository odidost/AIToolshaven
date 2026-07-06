export default function CompareLoading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* Breadcrumbs skeleton */}
      <div className="h-6 bg-surface-container rounded-md w-64 mb-8" />

      {/* Header skeleton */}
      <div className="text-center mb-12">
        <div className="h-10 bg-surface-container rounded-md w-80 mx-auto mb-4" />
        <div className="h-6 bg-surface-container rounded-md w-96 mx-auto" />
      </div>

      {/* Comparison cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center mb-10 max-w-4xl mx-auto">
        <div className="h-64 bg-surface-container rounded-2xl" />
        <div className="w-14 h-14 rounded-full bg-surface-container mx-auto" />
        <div className="h-64 bg-surface-container rounded-2xl" />
      </div>

      {/* Table skeleton */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="h-96 bg-surface-container rounded-2xl" />
      </div>
    </div>
  );
}
