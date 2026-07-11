import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { PageContainer } from '../layout/PageContainer';

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
    { label: "Media Kit", href: "/media-kit" },
    { label: "Contact", href: "/contact" },
    { label: "Submit a Tool", href: "/submit" },
  ],
  "Legal": [
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-surface-secondary text-on-surface-variant mt-auto border-t border-border relative overflow-hidden">
      {/* Subtle Circuit Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10h10v10H10V10zm20 0h10v10H30V10zm20 0h10v10H50V10zm20 0h10v10H70V10zm20 0h10v10H90V10z\' fill=\'%237C3AED\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
      <PageContainer className="py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6 group" aria-label="AIToolsHaven Home">
              <div className="group-hover:scale-105 transition-transform origin-left">
                <BrandLogo size={1.2} />
              </div>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mb-6">
              The world&apos;s most curated AI tools directory. Discover, compare, and find the perfect AI software for your workflow.
            </p>
            <p className="text-xs text-on-surface-variant/80 leading-relaxed">
              Some links on this site are affiliate links. We may earn a commission at no extra cost to you. See our{" "}
              <Link href="/privacy-policy" className="underline hover:text-primary transition-colors">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-bold text-on-surface mb-4 text-xs uppercase tracking-[0.2em]">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
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
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-surface-variant/80">
            &copy; {new Date().getFullYear()} AIToolsHaven AI Tools Discovery Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-on-surface-variant">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
