"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CORRECT_PASSWORD = "My-oia-alliance-1";
const STORAGE_KEY = "oia-preview-auth";

interface PasswordGateProps {
  children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if already authenticated
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  // Show nothing while checking auth status
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#f0a559] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Show full site if authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Show teaser/password page
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(240, 165, 89, 0.08) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(169, 50, 149, 0.06) 0%, transparent 55%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/images/logos/OIALOGOnew.png"
            alt="OIA"
            width={120}
            height={48}
            className="h-16 w-auto"
          />
        </div>

        {/* Teaser Headline */}
        <h1
          className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white text-center mb-6 leading-[1.1]"
          style={{ letterSpacing: '-0.025em' }}
        >
          Something{' '}
          <span className="relative inline-block">
            <span
              style={{
                background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Big
            </span>
            {/* Underline arc */}
            <svg
              className="absolute -bottom-1 left-0 w-full h-3"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="teaserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f0a559" />
                  <stop offset="100%" stopColor="#a93295" />
                </linearGradient>
              </defs>
              <path
                d="M0,10 Q50,2 100,10"
                fill="none"
                stroke="url(#teaserGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {' '}is Coming
        </h1>

        {/* Subheadline */}
        <p className="text-[#8B8B9A] text-lg md:text-xl text-center max-w-md mb-12">
          Three companies. One alliance.
          <br />
          <span className="text-white/70">Redefining OpenLAN for MSPs.</span>
        </p>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter partner password"
              className="w-full px-5 py-4 rounded-full text-white placeholder-white/40 text-center focus:outline-none focus:ring-2 focus:ring-[#f0a559]/50"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
            {error && (
              <p className="absolute -bottom-8 left-0 right-0 text-center text-red-400 text-sm">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(240,165,89,0.4)]"
            style={{
              background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
            }}
          >
            Enter Preview
          </button>
        </form>

        {/* Footer note */}
        <p className="text-white/30 text-xs mt-16">
          Alliance Partner Preview
        </p>
      </div>
    </div>
  );
}
