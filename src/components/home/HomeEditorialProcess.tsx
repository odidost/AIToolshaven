import Link from "next/link";
import { ShieldCheck, CheckCircle2, Cpu, ArrowRight } from "lucide-react";

export function HomeEditorialProcess() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Independent Research",
      description:
        "We inspect official technical documentation, architecture specs, and user consensus across open-source communities. Directory rankings cannot be purchased, and commercial listings never alter editorial verdicts.",
      accent: "text-rose-600 bg-rose-50 border-rose-200",
    },
    {
      icon: CheckCircle2,
      title: "Pricing & Tier Verification",
      description:
        "We regularly audit recurring monthly free allowances, credit limits, and subscription pricing to help users identify genuine freemium software and avoid hidden paywalls or credit traps.",
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      icon: Cpu,
      title: "Hands-On Evaluation",
      description:
        "For featured matchups and multi-tool workflows, our editorial team stress-tests tools using real prompts, code generation tasks, and asset exports to measure output fidelity and reliability.",
      accent: "text-blue-700 bg-blue-50 border-blue-200",
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB]">
      <div className="bg-[#FAFAFA] rounded-lg border border-[#E5E7EB] p-6 sm:p-10">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-white text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[16px] text-[#E11D48]">verified</span>
            <span>Editorial Standards</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
            How We Research &amp; Compare AI Tools
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Our recommendations combine systematic editorial research, recurring pricing verification, and firsthand evaluation of featured tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-lg border border-[#E5E7EB] p-5 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-md border flex items-center justify-center mb-4 ${pillar.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0A0A0A] font-heading mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#4B5563]">
          <p>
            Sponsored placements and affiliate links are always clearly disclosed and strictly separated from organic evaluations.
          </p>
          <Link
            href="/editorial-policy"
            className="inline-flex items-center gap-1.5 font-semibold text-[#E11D48] hover:text-[#BE123C] shrink-0"
          >
            <span>Read full editorial policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
