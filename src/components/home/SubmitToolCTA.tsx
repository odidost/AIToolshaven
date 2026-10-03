import Link from "next/link";

export function SubmitToolCTA() {
  return (
    <section className="w-full relative overflow-hidden bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] p-8 sm:p-12 md:p-14 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#E5E7EB] bg-white text-xs font-medium text-[#4B5563] mb-4">
          <span className="material-symbols-outlined text-[16px] text-[#E11D48]">rocket_launch</span>
          <span>Submit &amp; Partner</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] font-heading leading-tight mb-3">
          Get your AI tool discovered by high-intent builders.
        </h2>

        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-8">
          Join 900+ hand-vetted tools. Reach engineers, creators, and teams looking for their next workflow platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-md bg-[#E11D48] hover:bg-[#BE123C] px-6 py-2.5 font-semibold text-white text-sm shadow-xs hover:shadow-sm transition-all"
          >
            <span>Submit a Tool</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
          <Link
            href="/advertise"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-[#E5E7EB] bg-white px-5 py-2.5 font-semibold text-[#4B5563] hover:text-[#E11D48] hover:border-[#FECDD3] hover:bg-[#FFF1F2] text-sm transition-all"
          >
            View Sponsorship Options
          </Link>
        </div>

        {/* Minimal metrics row */}
        <div className="grid grid-cols-3 gap-3 border-t border-[#E5E7EB] pt-8 max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-lg sm:text-xl font-bold font-heading text-[#0A0A0A]">2.5M+</p>
            <p className="text-xs text-[#4B5563] font-medium mt-0.5">Directory Views</p>
          </div>
          <div className="text-center">
            <p className="text-lg sm:text-xl font-bold font-heading text-[#0A0A0A]">900+</p>
            <p className="text-xs text-[#4B5563] font-medium mt-0.5">Listed Platforms</p>
          </div>
          <div className="text-center">
            <p className="text-lg sm:text-xl font-bold font-heading text-[#0A0A0A]">24</p>
            <p className="text-xs text-[#4B5563] font-medium mt-0.5">Target Niches</p>
          </div>
        </div>
      </div>
    </section>
  );
}
