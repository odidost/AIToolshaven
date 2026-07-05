import { HeroBackground } from "./HeroBackground";
import { HeroDashboard } from "./HeroDashboard";
import { FloatingCards } from "./FloatingCards";
import { FloatingNotifications } from "./FloatingNotifications";
import { HeroParallax } from "./HeroParallax";
import { AINetwork } from "./AINetwork";

export function HeroVisual() {
    return (
        <div className="relative hidden lg:flex h-full w-full min-h-[700px] items-center justify-center overflow-visible">

            {/* Background elements */}
            <HeroBackground />
            
            {/* Connected Dots Background */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                <AINetwork />
            </div>

            {/* Glowing Orbit Rings for Depth */}
            <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-50 shadow-[inset_0_0_80px_rgba(255,255,255,0.02)] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[750px] h-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-30 shadow-[inset_0_0_80px_rgba(255,255,255,0.01)] pointer-events-none"></div>

            {/* Main Orbit Container */}
            <div className="relative w-[900px] h-[900px] flex items-center justify-center scale-[0.85] xl:scale-100 origin-center transition-transform duration-700">
                
                {/* Floating Notifications (Attached to background parallax layer) */}
                <div className="absolute inset-0 pointer-events-none">
                    <FloatingNotifications />
                </div>

                {/* Parallax Dashboard Container */}
                <div className="relative z-20">
                    <HeroParallax>
                        <HeroDashboard />
                    </HeroParallax>
                </div>

                {/* Orbiting Cards Container */}
                <FloatingCards />

            </div>

        </div>
    );
}