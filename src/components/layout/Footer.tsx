import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

const footerLinks = {
  product: [
    { label: "The Journey", href: "/journey" },
    { label: "Pricing", href: "/pricing" },
    { label: "Why OIA", href: "/why-wibuz" },
  ],
  resources: [
    { label: "Case Study", href: "/case-studies/jamaica" },
    { label: "FAQ", href: "/faq" },
  ],
  connect: [
    { label: "Talk to the Alliance", href: "/demo" },
    { label: "YouTube", href: "https://youtube.com/@wibuz", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/company/wibuz", external: true },
  ],
};


export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800" role="contentinfo" aria-label="Site footer">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/OIALOGOnew.png"
                alt="Open Infrastructure Alliance"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-dark-400 leading-relaxed">
              Three companies. One alliance. Enterprise-ready OpenLAN for MSPs who refuse to walk away from multi-vendor deals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-dark-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-dark-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      className="text-sm text-dark-400 hover:text-dark-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-dark-400 hover:text-dark-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <p className="text-sm text-dark-500 text-center">
            &copy; {new Date().getFullYear()} Open Infrastructure Alliance. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
