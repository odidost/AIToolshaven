import Link from 'next/link';
import { goals } from '@/lib/goals';
import { GoalCard } from '@/components/home/GoalCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export function HomepageCategories() {
  // A set of vibrant gradients to use for the icon containers
  const iconGradients = [
    'from-rose-400 to-orange-400 text-rose-600',
    'from-blue-400 to-indigo-400 text-blue-600',
    'from-emerald-400 to-teal-400 text-emerald-600',
    'from-purple-400 to-pink-400 text-purple-600',
    'from-amber-400 to-orange-500 text-amber-600',
    'from-cyan-400 to-blue-500 text-cyan-600',
  ];

  const badgeColors = [
    'bg-rose-50 text-rose-600 border-rose-100',
    'bg-blue-50 text-blue-600 border-blue-100',
    'bg-emerald-50 text-emerald-600 border-emerald-100',
    'bg-purple-50 text-purple-600 border-purple-100',
    'bg-amber-50 text-amber-600 border-amber-100',
    'bg-cyan-50 text-cyan-600 border-cyan-100',
  ];

  return (
    <div className="w-full relative z-10">
      <section className="bg-gradient-to-b from-white to-primary/5 shadow-[0_8px_32px_rgba(0,0,0,0.02)] border-y border-black/5 py-16 sm:py-24 relative overflow-hidden">
        
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>category</span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Explore by Goal</span>
              </div>
              <h2 className="text-fluid-h2 font-black text-slate-900 tracking-tight leading-tight">
                Browse by your Goals
              </h2>
            </div>
            <Link 
              href="/goals" 
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full text-[14px] font-bold text-primary shadow-sm border border-black/5 hover:border-primary/20 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">View All</span>
              <span className="material-symbols-outlined text-[18px] relative z-10 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10" staggerChildren={0.1}>
            {goals.slice(0, 6).map((goal, index) => {
              const bgClass = badgeColors[index % badgeColors.length];
              const gradientClass = iconGradients[index % iconGradients.length];

              return (
                <StaggerItem key={goal.slug} direction="up" className="h-full">
                  <GoalCard 
                    title={goal.title} 
                    icon={goal.icon} 
                    count={goal.count} 
                    slug={goal.slug} 
                    index={index} 
                  />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
