export function TrustedByMarquee() {
  const logos = [
    { name: "OpenAI", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Vercel", src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
    { name: "Stripe", src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "GitHub", src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
    { name: "Notion", src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
    // Duplicate to ensure we have enough width for the marquee
    { name: "OpenAI 2", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Vercel 2", src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
    { name: "Stripe 2", src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  ];

  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative overflow-visible py-16 md:py-24 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Receiving Data Stream Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-primary/50 pointer-events-none hidden xl:block z-0" />

      {/* Header Pill */}
      <div className="mb-10 text-center relative z-20">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md shadow-sm border border-black/5 px-5 py-2 rounded-full transform transition-transform hover:scale-105">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-gray-900/60 bg-clip-text">
            Trusted by top teams and creators
          </span>
        </div>
      </div>

      {/* The Glass Tunnel Container */}
      <div className="relative w-full rounded-[40px] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden group">
        
        {/* Subtle interior glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 pointer-events-none" />

        {/* Gradient masks for smooth fade on edges (Now fading to white to match the glass) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10"></div>

        <div className="flex overflow-hidden py-10 md:py-12">
          {/* Pause on hover */}
          <div className="flex animate-marquee items-center gap-16 md:gap-24 pl-16 md:pl-24 w-max group-hover:[animation-play-state:paused]">
            {marqueeLogos.map((logo, idx) => (
              <div key={idx} className="relative h-8 w-24 md:h-10 md:w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-100 flex-shrink-0 hover:scale-110 cursor-pointer">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-full object-contain filter brightness-0 hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
