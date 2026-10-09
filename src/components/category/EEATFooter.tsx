export function EEATFooter() {
  return (
    <section className="mt-12 mb-14 pt-8 border-t border-black/[0.07]">
      <div className="relative bg-[#F9F9F6] border border-black/[0.08] rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center shadow-2xs overflow-hidden">
        {/* Subtle ambient pastel bokeh blooms */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#FED7AA]/35 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 right-1/4 w-56 h-56 rounded-full bg-[#FDA4AF]/25 blur-3xl pointer-events-none" />

        <div className="flex-1 relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#44403C] shadow-2xs">
            <span className="material-symbols-outlined text-[15px] text-[#E11D48]">verified</span>
            <span>Expert Editorial Process</span>
          </div>
          <h4 className="font-heading font-bold text-base sm:text-lg text-[#0A0A0A] tracking-tight">
            Independent, Rigorous &amp; Payment-Free Evaluations
          </h4>
          <p className="font-serif text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-2xl font-normal">
            This category is continuously monitored and updated by the AIToolsHaven editorial team. 
            Tools are evaluated based on feature completeness, pricing transparency, real community reviews, 
            and benchmark output quality. We do not accept sponsored payment to alter our ratings or rankings.
          </p>
        </div>

        <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-black/[0.08] shadow-2xs relative z-10">
          <div className="flex items-center justify-between sm:justify-start gap-3 text-xs">
            <span className="text-[#78716C] font-serif">Reviewed by:</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center text-[10px] font-mono font-bold text-[#E11D48] shadow-2xs">
                AIT
              </div>
              <span className="font-semibold text-[#0A0A0A]">AIToolsHaven Editorial</span>
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-start gap-3 text-xs pt-2 border-t border-black/[0.06]">
            <span className="text-[#78716C] font-serif">Last updated:</span>
            <span className="font-mono font-semibold text-[#0A0A0A]">
              {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
