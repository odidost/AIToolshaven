export default function CategoryLoading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* Breadcrumbs skeleton */}
      <div className="h-6 bg-surface-container rounded-md w-48 mb-8" />

      {/* Header skeleton */}
      <div className="mb-8">
        <div className="h-10 bg-surface-container rounded-md w-64 mb-4" />
        <div className="h-6 bg-surface-container rounded-md w-96" />
      </div>

      {/* Capsule bar skeleton */}
      <div className="mb-10 flex gap-2 overflow-hidden">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-10 w-32 bg-surface-container rounded-full" />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-72 bg-surface-container rounded-2xl border border-outline" />
        ))}
      </div>
    </div>
  );
}
