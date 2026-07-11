import type { Metadata } from "next";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

export const metadata: Metadata = {
  title: "Disclaimer | AIToolsHaven",
  description: "General disclaimer regarding the information, software recommendations, and liability on AIToolsHaven.",
};

export default function DisclaimerPage() {
  return (
    <ContentContainer className="py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
        Disclaimer
      </h1>
      <p className="text-lg text-slate-600 mb-10">
        Last Updated: July 11, 2026
      </p>

      <div className="prose prose-slate prose-lg max-w-none">
        <p>
          The information provided by AIToolsHaven ("we," "us," or "our") on <Link href="/">aitoolshaven.com</Link> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>

        <h2>1. Software and Tools Disclaimer</h2>
        <p>
          AIToolsHaven is an independent directory and review platform. We do not own, operate, or directly support the AI tools and software listed on this Site. Your use of any third-party software, tools, or services discovered through our Site is solely at your own risk. We strongly advise you to read the terms and conditions and privacy policies of any third-party tools before use or purchase.
        </p>
        <p>
          Prices, features, and availability of the tools listed on AIToolsHaven are subject to change without notice by their respective developers.
        </p>

        <h2>2. Professional Advice Disclaimer</h2>
        <p>
          The Site cannot and does not contain financial, legal, or professional advice. The AI software recommendations and technical information are provided for general informational and educational purposes only and are not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
        </p>

        <h2>3. Affiliate Disclaimer</h2>
        <p>
          The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Please see our <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for further information.
        </p>

        <h2>4. External Links Disclaimer</h2>
        <p>
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, you can contact us via our <Link href="/contact">Contact Page</Link>.
        </p>
      </div>
    </ContentContainer>
  );
}
