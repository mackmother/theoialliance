"use client";

import { useState } from "react";

interface FormData {
  email: string;
  name: string;
  role: string;
  apCount: string;
  currentVendor: string;
}

const REPORT_URL = "/docs/enterprise-wifi-msp-research-2024.pdf";

export function ReportDownloadForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    role: "",
    apCount: "",
    currentVendor: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Send to your backend/CRM here
      // For now, we'll simulate and trigger download
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Log lead data (replace with actual CRM integration)
      console.log("Lead captured:", formData);

      setIsSubmitted(true);

      // Trigger download after short delay
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = REPORT_URL;
        link.download = "Multi-Vendor-WiFi-Research-2024.pdf";
        link.click();
      }, 1000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-dark-50 mb-2">
          Your Download Is Starting
        </h3>
        <p className="text-dark-400 text-sm mb-4">
          The report should download automatically. If not,{" "}
          <a
            href={REPORT_URL}
            download
            className="text-primary hover:underline"
          >
            click here
          </a>
          .
        </p>
        <p className="text-dark-500 text-xs">
          Check your email for additional resources and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-dark-200 mb-1.5"
        >
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2.5 bg-dark-800 border border-white/[0.08] rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
          placeholder="you@company.com"
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-dark-200 mb-1.5"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 bg-dark-800 border border-white/[0.08] rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Role - Funnel Filter #1 */}
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-dark-200 mb-1.5"
        >
          Your Role *
        </label>
        <select
          id="role"
          required
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-2.5 bg-dark-800 border border-white/[0.08] rounded-lg text-dark-100 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 0.75rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.25rem",
          }}
        >
          <option value="">Select your role</option>
          <option value="founder-ceo">Founder / CEO</option>
          <option value="operations">Operations / COO</option>
          <option value="technical">Technical / CTO / Engineering</option>
          <option value="sales">Sales / Business Development</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* AP Count - Funnel Filter #2 */}
      <div>
        <label
          htmlFor="apCount"
          className="block text-sm font-medium text-dark-200 mb-1.5"
        >
          Current AP Deployment Size *
        </label>
        <select
          id="apCount"
          required
          value={formData.apCount}
          onChange={(e) =>
            setFormData({ ...formData, apCount: e.target.value })
          }
          className="w-full px-4 py-2.5 bg-dark-800 border border-white/[0.08] rounded-lg text-dark-100 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 0.75rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.25rem",
          }}
        >
          <option value="">Select deployment size</option>
          <option value="0-100">0 - 100 APs</option>
          <option value="100-500">100 - 500 APs</option>
          <option value="500-1000">500 - 1,000 APs</option>
          <option value="1000-5000">1,000 - 5,000 APs</option>
          <option value="5000+">5,000+ APs</option>
        </select>
      </div>

      {/* Current Vendor - Funnel Filter #3 */}
      <div>
        <label
          htmlFor="currentVendor"
          className="block text-sm font-medium text-dark-200 mb-1.5"
        >
          Primary WiFi Vendor Today
        </label>
        <select
          id="currentVendor"
          value={formData.currentVendor}
          onChange={(e) =>
            setFormData({ ...formData, currentVendor: e.target.value })
          }
          className="w-full px-4 py-2.5 bg-dark-800 border border-white/[0.08] rounded-lg text-dark-100 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 0.75rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.25rem",
          }}
        >
          <option value="">Select vendor (optional)</option>
          <option value="ruckus">Ruckus / CommScope</option>
          <option value="aruba">HPE Aruba</option>
          <option value="meraki">Cisco Meraki</option>
          <option value="ubiquiti">Ubiquiti</option>
          <option value="cambium">Cambium</option>
          <option value="openwifi">OpenWiFi / Edgecore</option>
          <option value="other">Other</option>
          <option value="none">Not deployed yet</option>
        </select>
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary hover:bg-primary-hover text-dark-950 font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Preparing Download...
          </span>
        ) : (
          "Download the Report"
        )}
      </button>

      <p className="text-dark-500 text-xs text-center">
        Free. Instant access. We respect your privacy.
      </p>
    </form>
  );
}
