export function WorkflowVisualPipeline() {
  return (
    <div className="my-12 p-8 sm:p-10 bg-surface border border-outline rounded-3xl shadow-xs">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
          How Multi-Tool Automation Works
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-on-surface mt-1">
          From Raw Input to Autonomous Deliverables
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Step 1 */}
        <div className="bg-surface-secondary/40 border border-border/80 rounded-2xl p-6 relative flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm mb-4">
            01
          </div>
          <h4 className="font-bold text-base text-on-surface mb-2">Raw Asset / Trigger</h4>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Provide a single raw input: a podcast audio recording, a raw text outline, a Zoom call, or a customer lead event.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-surface-secondary/40 border border-border/80 rounded-2xl p-6 relative flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm mb-4">
            02
          </div>
          <h4 className="font-bold text-base text-on-surface mb-2">The Multi-Model Chain</h4>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Specialized models execute sequentially: transcription extracts transcripts, LLMs draft scripts, voice clones generate audio, and video synthesis creates 4K scenes.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-surface-secondary/40 border border-border/80 rounded-2xl p-6 relative flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black text-sm mb-4">
            03
          </div>
          <h4 className="font-bold text-base text-on-surface mb-2">Omni-Channel Distribution</h4>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Final studio-grade deliverables are distributed across YouTube, blogs, LinkedIn carousels, and client inboxes automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
