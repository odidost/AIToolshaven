export function EEATFooter() {
  return (
    <section className="mt-8 mb-12 pt-8 border-t border-[#E5E7EB]">
      <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start md:items-center shadow-xs">
        <div className="flex-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-2">
            <span className="material-symbols-outlined text-[15px] text-[#E11D48]">verified</span>
            <span>Expert Editorial Process</span>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            This category is continuously monitored and updated by the AIToolsHaven editorial team. 
            Tools are evaluated based on feature completeness, pricing transparency, real user reviews, 
            and output quality. We do not accept payment to alter ratings.
          </p>
        </div>
        <div className="flex flex-col gap-2 shrink-0 bg-[#F9FAFB] px-4 py-3 rounded-md border border-[#E5E7EB]">
          <div className="flex items-center gap-2.5 text-xs">
            <span className="text-[#6B7280]">Reviewed by:</span>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center text-[10px] font-bold text-[#E11D48]">
                AIT
              </div>
              <span className="font-semibold text-[#0A0A0A]">AIToolsHaven Editorial</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-xs">
            <span className="text-[#6B7280]">Last updated:</span>
            <span className="font-semibold text-[#0A0A0A]">
              {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
