"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Button } from "@/components/ui";

const navLinks = [
  { label: "Why OIA", href: "/why-wibuz" },
  { label: "Journey", href: "/journey" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/70 backdrop-blur-xl border-b border-white/[0.06]" aria-label="Main navigation">
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to content
      </a>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/OAI_Logo2.png"
              alt="Open Infrastructure Alliance"
              width={280}
              height={56}
              className="h-12 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-dark-400 hover:text-dark-100 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" href="/demo#schedule">
              Talk to the Alliance
            </Button>
            <Button variant="primary" size="sm" href="/journey">
              Start Trial-to-Profit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-dark-400 hover:text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-900 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-white/[0.06]" role="menu">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-dark-300 hover:text-dark-100 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
                <Button variant="primary" href="/journey">
                  Start Trial-to-Profit
                </Button>
                <Button variant="secondary" href="/demo#schedule">
                  Talk to the Alliance
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
