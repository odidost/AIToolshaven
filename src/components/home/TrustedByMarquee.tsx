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
    <section className="relative overflow-hidden py-12 mb-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold tracking-widest text-slate-400 uppercase">
          Trusted by top teams and creators
        </p>
      </div>

      {/* Gradient masks for smooth fade on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10"></div>

      <div className="flex overflow-hidden">
        <div className="flex animate-marquee items-center gap-16 md:gap-24 pl-16 md:pl-24 w-max">
          {marqueeLogos.map((logo, idx) => (
            <div key={idx} className="relative h-8 w-24 md:h-9 md:w-28 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
