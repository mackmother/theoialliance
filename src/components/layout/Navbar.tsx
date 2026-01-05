"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Why OIA", href: "/why-wibuz" },
  { label: "Journey", href: "/journey" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Study", href: "/case-studies/jamaica" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      aria-label="Main navigation"
    >
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to content
      </a>

      {/* Floating Glass Pill Container */}
      <div
        className="mx-auto max-w-5xl rounded-full px-4 py-2"
        style={{
          background: 'rgba(20, 18, 26, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo - OIA Logo Image */}
          <Link href="/" className="flex items-center pl-2">
            <Image
              src="/images/logos/OIALOGOnew.png"
              alt="OIA"
              width={80}
              height={32}
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop nav - Centered */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2 pr-1">
            <Link
              href="/login"
              className="text-sm text-white/70 hover:text-white transition-colors px-3 py-1.5"
            >
              Log in
            </Link>
            <Link
              href="/demo"
              className="btn-gradient-border text-sm font-semibold text-white px-5 py-2 rounded-full"
            >
              Talk to the Alliance
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#141318] rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - Also floating pill style */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mx-auto max-w-5xl mt-2 rounded-2xl py-4 px-6"
          role="menu"
          style={{
            background: 'rgba(20, 18, 26, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.06]">
              <Link
                href="/demo"
                className="btn-gradient-border text-center text-sm font-semibold text-white px-5 py-3 rounded-full"
              >
                Talk to the Alliance
              </Link>
              <Link
                href="/login"
                className="text-center text-sm text-white/70 hover:text-white py-2"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
