export function CommunityReviews() {
  const reviews = [
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

  return (
    <section className="mb-24">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 text-yellow-500 mb-2">
          <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-sm font-bold uppercase tracking-widest">Loved by Creators</span>
        </div>
        <h2 className="text-3xl font-black text-on-surface tracking-tight md:text-5xl">
          Don&apos;t just take our word for it.
        </h2>
        <p className="mt-4 max-w-xl text-on-surface-variant">
          Join 10,000+ creators, developers, and founders who use our platform to stay ahead in the AI revolution.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {reviews.map((review, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
          >
            <div className="flex gap-1 text-yellow-500 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            
            <p className="text-on-surface leading-relaxed font-medium mb-6">
              &quot;{review.content}&quot;
            </p>

            <div className="flex items-center gap-4 border-t border-border pt-4">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-border bg-surface-section">
                <img src={review.avatar} alt={review.name} className="h-full w-full" loading="lazy" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">{review.name}</p>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
