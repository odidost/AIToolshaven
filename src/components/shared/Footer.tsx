import Link from 'next/link';

const footerLinks = {
  "Explore": [
    { label: "All Tools", href: "/category/text-generation" },
    { label: "Text Generation", href: "/category/text-generation" },
    { label: "Image Generation", href: "/category/image-generation" },
    { label: "Coding Assistants", href: "/category/coding-assistants" },
    { label: "Marketing & Sales", href: "/category/marketing-sales" },
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Submit a Tool", href: "/submit" },
  ],
  "Legal": [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 mt-auto">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">auto_awesome</span>
              <span className="font-black text-xl text-white">AIToolsHaven</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              The world's most curated AI tools directory. Discover, compare, and find the perfect AI software for your workflow.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Some links on this site are affiliate links. We may earn a commission at no extra cost to you. See our{" "}
              <Link href="/privacy-policy" className="underline hover:text-slate-400 transition-colors">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} AIToolsHaven AI Tools Discovery Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
