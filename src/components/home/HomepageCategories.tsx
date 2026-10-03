import Link from 'next/link';
import { goals } from '@/lib/goals';
import { GoalCard } from '@/components/home/GoalCard';

export function HomepageCategories() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <section className="relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
              <span className="material-symbols-outlined text-[16px] text-[#E11D48]">explore</span>
              <span>Goal-Driven Discovery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] font-heading">
              Browse AI Tools by Goal
            </h2>
          </div>
          <Link 
            href="/goals" 
            className="text-xs sm:text-sm font-medium text-[#E11D48] hover:text-[#BE123C] transition-colors flex items-center gap-1"
          >
            View all goals &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {goals.slice(0, 6).map((goal) => (
            <div key={goal.slug} className="h-full">
              <GoalCard 
                title={goal.title} 
                icon={goal.icon} 
                count={goal.count} 
                slug={goal.slug} 
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
