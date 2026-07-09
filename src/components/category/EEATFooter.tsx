export function EEATFooter() {
  return (
    <section className="mt-8 mb-16 pt-8 border-t border-border">
      <div className="bg-surface-secondary/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1">
          <h4 className="text-[13px] font-bold tracking-widest text-on-surface-variant uppercase mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
            Expert Editorial Process
          </h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            This category is continuously monitored and updated by the AIToolsHaven editorial team. 
            Tools are evaluated based on feature completeness, pricing transparency, real user reviews, 
            and output quality. We do not accept payment to alter ratings.
          </p>
        </div>
        <div className="flex flex-col gap-2 shrink-0 bg-surface px-5 py-4 rounded-xl border border-border/50">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-on-surface-variant font-medium">Reviewed by:</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                AIT
              </div>
              <span className="font-semibold text-on-surface">AIToolsHaven Editorial</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-on-surface-variant font-medium">Last updated:</span>
            <span className="font-semibold text-on-surface">
              {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
