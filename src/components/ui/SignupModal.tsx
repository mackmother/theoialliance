"use client";

import { useEffect, useCallback } from "react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIGNUP_URL = "https://portal.wibip.com/portal/sign_up?key=TU5PMTM4LVNCMTMt";

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-950/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-dark-900 border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
          <div>
            <h2 className="text-lg font-semibold text-dark-50">
              Start Your Journey
            </h2>
            <p className="text-sm text-dark-400">
              30-day full access • No credit card required
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-dark-400 hover:text-dark-200 hover:bg-dark-800 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        </div>

        {/* Iframe Container */}
        <div className="relative bg-white" style={{ height: "70vh" }}>
          <iframe
            src={SIGNUP_URL}
            className="w-full h-full border-0"
            title="Sign up for wibipOS"
            allow="clipboard-write"
          />
        </div>

        {/* Footer hint */}
        <div className="px-6 py-3 bg-dark-800/50 border-t border-white/[0.06]">
          <p className="text-xs text-dark-400 text-center">
            Your LiveSDK pit crew is standing by to help you get started
          </p>
        </div>
      </div>
    </div>
  );
}
