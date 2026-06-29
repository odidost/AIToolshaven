import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-outline py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
            <span className="font-bold text-lg text-on-surface">AETHER</span>
          </Link>
          <p className="text-on-surface-variant text-sm max-w-sm">
            The ultimate discovery hub for the best AI tools. Compare, review, and find the perfect AI solution for your workflow.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-on-surface">Quick Links</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li><Link href="/category/text-generation" className="hover:text-primary">Text Generation</Link></li>
            <li><Link href="/category/image-generation" className="hover:text-primary">Image Generation</Link></li>
            <li><Link href="/submit" className="hover:text-primary">Submit a Tool</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-on-surface">Legal</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-outline text-center text-sm text-on-surface-variant">
        &copy; {new Date().getFullYear()} AETHER AI Tools Discovery Hub. All rights reserved.
      </div>
    </footer>
  );
}
