import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advertise on AIToolsHaven | Reach AI Buyers & Founders',
  description: 'Reach professionals, creators, developers, marketers, founders, and businesses actively searching for the best AI tools and software.',
  openGraph: {
    title: 'Advertise on AIToolsHaven | Reach AI Buyers',
    description: 'Reach professionals, creators, developers, marketers, founders, and businesses actively searching for the best AI tools and software.',
    type: 'website',
  },
};

const opportunities = [
  {
    title: "Homepage Sponsorship",
    description: "Position your brand in front of every visitor with premium homepage placement.",
    idealFor: "Product launches, major updates, brand awareness campaigns.",
    icon: "home"
  },
  {
    title: "Featured Tool Placement",
    description: "Highlight your AI tool in premium positions across relevant categories and recommendation sections.",
    idealFor: "Increasing visibility among users actively searching for tools like yours.",
    icon: "stars"
  },
  {
    title: "Category Sponsorship",
    description: "Own visibility within a specific category like AI Writing, Image Generation, or Coding.",
    idealFor: "Businesses targeting a very specific niche audience.",
    icon: "category"
  },
  {
    title: "Newsletter Sponsorship",
    description: "Promote your product in our email newsletter reaching subscribers interested in AI tools and industry updates.",
    idealFor: "Direct inbox reach and fast conversions.",
    icon: "mail"
  },
  {
    title: "Sponsored Editorial Content",
    description: "Publish high-quality educational content (Guides, Tutorials, Case Studies) featuring your product naturally.",
    idealFor: "Long-term organic traffic and deep product education.",
    icon: "article"
  },
  {
    title: "Comparison Page Sponsorship",
    description: "Promote your solution within high-intent comparison pages where users are evaluating competing products.",
    idealFor: "Reaching users close to making a purchasing decision.",
    icon: "compare_arrows"
  },
  {
    title: "Goal & Workflow Sponsorship",
    description: "Feature your product within practical guides showing users how to accomplish specific tasks using AI.",
    idealFor: "Attracting users with strong purchase intent based on their use-case.",
    icon: "route"
  }
];

const whoCanAdvertise = [
  "AI Software Companies", "SaaS Businesses", "API Providers", 
  "AI Startups", "Productivity Platforms", "Marketing Tech", 
  "Developer Tools", "Cloud Platforms", "Education Platforms", 
  "Conferences & Events", "VC Firms", "Accelerators", "Recruiters"
];

const ourAudience = [
  "Startup Founders", "Entrepreneurs", "Software Developers", 
  "Product Managers", "Marketing Professionals", "Designers", 
  "Content Creators", "Agencies", "Small Business Owners", 
  "Enterprise Teams", "Students & Researchers"
];

const standards = [
  "Misleading", "Scam-related", "Adult content", 
  "Gambling", "Illegal products or services", 
  "Malware or unsafe downloads", "Deceptive claims"
];

export default function AdvertisingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 border-b border-black/5 mesh-bg">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-black/10 text-foreground px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Targeted AI Advertising
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Advertise on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AIToolsHaven</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Reach AI Buyers, Founders, and Professionals exactly at the moment they're looking for tools.
          </p>

          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12">
            AIToolsHaven is a curated discovery platform helping professionals and businesses find the best AI software. If you're looking to drive qualified traffic or launch a new product, we connect your brand with high-intent users.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105"
            >
              Request Media Kit
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Advertise (Bento Grid) */}
      <section className="py-24 px-4 bg-black/5 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Advertise With Us?</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Unlike traditional display advertising, our audience isn't casually browsing—they're actively researching and selecting AI tools for work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500"></div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">ads_click</span>
              <h3 className="text-2xl font-bold mb-3">High Commercial Intent</h3>
              <p className="text-foreground/60 text-lg leading-relaxed max-w-md">Reach decision-makers evaluating AI software. Drive highly targeted website traffic that converts into qualified leads and sign-ups.</p>
            </div>
            
            <div className="col-span-1 glass-card rounded-3xl p-8 relative overflow-hidden">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">campaign</span>
              <h3 className="text-xl font-bold mb-3">Brand Awareness</h3>
              <p className="text-foreground/60">Increase your brand's visibility within the competitive AI ecosystem.</p>
            </div>
            
            <div className="col-span-1 glass-card rounded-3xl p-8 relative overflow-hidden">
              <span className="material-symbols-outlined text-4xl text-accent mb-6 block">rocket_launch</span>
              <h3 className="text-xl font-bold mb-3">Product Launches</h3>
              <p className="text-foreground/60">Launch new AI products or major updates to an already engaged audience.</p>
            </div>
            
            <div className="col-span-1 md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/20 transition-colors duration-500"></div>
              <span className="material-symbols-outlined text-4xl text-foreground mb-6 block">event</span>
              <h3 className="text-2xl font-bold mb-3">More Than Software</h3>
              <p className="text-foreground/60 text-lg leading-relaxed max-w-md">Our placements aren't just for tools. Promote your upcoming AI events, courses, API platforms, and AI consulting services to the right crowd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Advertising Opportunities</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              We offer multiple placement formats designed to align with your specific campaign goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">{opp.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{opp.title}</h3>
                <p className="text-foreground/60 mb-6 flex-grow">{opp.description}</p>
                <div className="mt-auto pt-6 border-t border-black/5">
                  <p className="text-sm font-semibold text-foreground mb-1">Ideal for:</p>
                  <p className="text-sm text-foreground/50">{opp.idealFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network (Audience & Who can advertise) */}
      <section className="py-24 px-4 bg-black/5 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">groups</span>
              <h2 className="text-3xl font-bold">Our Audience</h2>
            </div>
            <p className="text-foreground/60 mb-8 text-lg">
              They visit AIToolsHaven to discover, compare, and adopt AI solutions that improve productivity and business outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              {ourAudience.map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white border border-black/5 text-sm font-medium shadow-sm hover:border-primary/30 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
              <h2 className="text-3xl font-bold">Who Can Advertise?</h2>
            </div>
            <p className="text-foreground/60 mb-8 text-lg">
              We welcome advertising from companies shaping the future of technology.
            </p>
            <div className="flex flex-wrap gap-3">
              {whoCanAdvertise.map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white border border-black/5 text-sm font-medium shadow-sm hover:border-secondary/30 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Standards */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-14 border-red-500/10 bg-red-50/30">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Advertising Standards</h2>
              <p className="text-foreground/70 text-lg">
                To protect our community, every campaign is manually reviewed. We reserve the right to reject advertisements that do not meet our quality guidelines.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-semibold text-foreground mb-6">We DO NOT accept advertisements related to:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {standards.map((standard, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-red-100 shadow-sm">
                    <span className="material-symbols-outlined text-red-500 text-sm">block</span>
                    <span className="text-sm font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Grow Together</h2>
          <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're launching a new AI product, expanding into new markets or increasing brand awareness, AIToolsHaven offers advertising opportunities designed to help you reach the right users at the right time.
          </p>
          <div className="glass-card max-w-xl mx-auto rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Request a Media Kit</h3>
            <p className="text-foreground/60 mb-8 text-sm">
              Our media kit includes available formats, placement options, audience insights, pricing, and campaign availability.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20 w-full sm:w-auto justify-center"
            >
              Contact Us Today
              <span className="material-symbols-outlined">send</span>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
