import { Metadata } from "next";
import { comparisons } from "@/lib/comparisons";
import { ComparisonCard } from "@/components/home/ComparisonCard";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
    title: "Compare AI Tools | Head-to-Head Reviews & Features",
    description: "In-depth comparisons of the best AI tools on the market. See how ChatGPT, Claude, Midjourney, and other top AI software stack up against their competitors.",
};

export default function CompareArchivePage() {
    return (
        <PageContainer>
            <div className="pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5">
                        <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
                        <span className="text-[11px] font-black uppercase tracking-[0.2em]">The Versus Arena</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
                        Head-to-Head <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Comparisons</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        We pit the world's most powerful AI tools against each other. Read our definitive verdicts to find exactly which software you should be using for your specific workflows.
                    </p>
                </div>

                <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {comparisons.map((comparison) => (
                        <ComparisonCard
                            key={comparison.slug}
                            data={comparison}
                        />
                    ))}
                </div>
            </div>
        </PageContainer>
    );
}
