export function CommunityReviews() {
  const allReviews = [
    {
      name: "Sarah Jenkins",
      role: "Growth Marketer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4",
      content: "This platform completely changed how I find AI tools. The recommendation engine saved me hours of research. I use it every single week.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Frontend Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=c0aede",
      content: "I love the UI and how fast it is to compare tools. Finally, a directory that isn't just a massive spreadsheet.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Startup Founder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=ffdfbf",
      content: "We built our entire AI stack using the workflow suggestions here. The 'Versus Battles' feature is honestly a game changer.",
      rating: 5,
    },
    {
      name: "Marcus Thorne",
      role: "Content Creator",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=d1d4f9",
      content: "Best AI directory on the internet. Period. The fact that I can filter by my specific use case makes it infinitely better than Futurepedia.",
      rating: 5,
    },
    {
      name: "Sophia Patel",
      role: "Product Manager",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia&backgroundColor=ffdfbf",
      content: "Stunning design, incredible UX. I bookmark every new workflow they post. 10/10.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Indie Hacker",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=c0aede",
      content: "Submitted my tool and got 500+ visitors in the first week. The community here is highly engaged and actually converts.",
      rating: 5,
    },
  ];

  // Split reviews into two rows
  const row1 = allReviews.slice(0, 3);
  const row2 = allReviews.slice(3, 6);

  // Helper to render a review card
  const ReviewCard = ({ review }: { review: typeof allReviews[0] }) => (
    <div className="group relative w-[380px] shrink-0 bg-white rounded-3xl border border-black/5 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-default">
      {/* Subtle Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating Quote Mark */}
      <div className="absolute -top-4 right-6 text-[120px] font-serif leading-none text-slate-100 opacity-50 pointer-events-none select-none group-hover:text-primary/10 transition-colors duration-500">
        &quot;
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap gap-1 text-amber-400 mb-6 drop-shadow-sm">
          {[...Array(review.rating)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
          ))}
        </div>
        
        <p className="text-slate-700 leading-relaxed font-medium mb-8 text-lg min-h-[90px]">
          &quot;{review.content}&quot;
        </p>

        <div className="flex items-center gap-4">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full shadow-sm bg-slate-50 ring-2 ring-white">
            <img src={review.avatar} alt={review.name} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-base font-black text-slate-900 truncate">{review.name}</p>
              {/* Verified Checkmark */}
              <span className="material-symbols-outlined text-blue-500 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest truncate">{review.role}</p>
          </div>
          {/* Subtle Social Icon (e.g. X/Twitter style) */}
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.936H5.03l12.053 13.834z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <div className="flex flex-col items-center text-center mb-16 px-4 relative z-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">Loved By Creators</span>
        </div>
        <h2 className="text-fluid-h2 font-black text-slate-900 tracking-tighter leading-tight">
          Don&apos;t just take our word for it.
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-slate-600 leading-relaxed">
          Join 10,000+ creators, developers, and founders who use our platform to stay ahead in the AI revolution.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden py-4 w-full">
        
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Scrolling Left) */}
        <div className="flex w-max hover:[&>div]:[animation-play-state:paused]">
          <div className="flex w-max animate-marquee gap-6 pr-6">
            {[...row1, ...row2].map((review, idx) => (
              <ReviewCard key={`r1-a-${idx}`} review={review} />
            ))}
          </div>
          <div className="flex w-max animate-marquee gap-6 pr-6" aria-hidden="true">
            {[...row1, ...row2].map((review, idx) => (
              <ReviewCard key={`r1-b-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="flex w-max hover:[&>div]:[animation-play-state:paused]">
          <div className="flex w-max animate-marquee-reverse gap-6 pr-6">
            {[...row2, ...row1].map((review, idx) => (
              <ReviewCard key={`r2-a-${idx}`} review={review} />
            ))}
          </div>
          <div className="flex w-max animate-marquee-reverse gap-6 pr-6" aria-hidden="true">
            {[...row2, ...row1].map((review, idx) => (
              <ReviewCard key={`r2-b-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
