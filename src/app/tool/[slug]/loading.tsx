export default function ToolLoading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* Breadcrumbs skeleton */}
      <div className="h-6 bg-surface-container rounded-md w-48 mb-8" />

      {/* Hero skeleton */}
      <div className="grid lg:grid-cols-[1.9fr_1fr] gap-10 items-start mb-20">
        <div>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl bg-surface-container" />
              <div>
                <div className="h-10 bg-surface-container rounded-md w-64 mb-2" />
                <div className="h-5 bg-surface-container rounded-md w-40" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-11 w-11 rounded-xl bg-surface-container" />
              <div className="h-11 w-11 rounded-xl bg-surface-container" />
            </div>
          </div>
          <div className="h-[400px] w-full rounded-[32px] bg-surface-container" />
        </div>
        <div className="h-[500px] rounded-[32px] bg-surface-container" />
      </div>

      {/* Content skeleton */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12">
        <main className="space-y-12">
          <div className="h-40 bg-surface-container rounded-2xl" />
          <div className="h-64 bg-surface-container rounded-2xl" />
          <div className="h-64 bg-surface-container rounded-2xl" />
        </main>
        <aside>
          <div className="h-[600px] bg-surface-container rounded-3xl" />
        </aside>
      </div>
    </div>
  );
}
