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
    <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] py-6 px-6 overflow-hidden">
        <p className="text-center text-xs font-medium text-[#4B5563] uppercase tracking-wider mb-6">
          Referenced by engineers, founders &amp; creators from
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Subtle edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee items-center gap-12 sm:gap-16 w-max">
              {marqueeLogos.map((logo, idx) => (
                <div key={idx} className="relative h-6 w-20 sm:h-7 sm:w-24 grayscale opacity-40 hover:opacity-80 transition-opacity flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    width={96}
                    height={28}
                    className="h-full w-full object-contain filter brightness-0"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
