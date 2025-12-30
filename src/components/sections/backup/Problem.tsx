import { Section, SectionHeading } from "@/components/ui";

const painPoints = [
  {
    stat: "75%",
    label: "locked into single-vendor systems",
    solution: "Keep legacy gear AND add OpenWiFi",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    stat: "65%",
    label: "say platforms are too expensive",
    solution: "We invested $8M and 350K dev hours—so you don't have to",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    stat: "25%",
    label: "can't find Wi-Fi engineers",
    solution: "Our LiveSDK team builds it with you",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export function Problem() {
  return (
    <Section id="problem" background="default" spacing="sm">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title={
            <>
              Break Free from{" "}
              <span className="text-brand-400">Vendor Lock-In</span>
            </>
          }
        />

        {/* Stat cards with problem → solution */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="relative p-5 md:p-6 rounded-xl bg-dark-900/60 border border-white/[0.06] hover:border-brand-400/20 transition-all duration-300 group specular-border"
            >
              <div className="flex items-center gap-2 mb-3 text-brand-400/70 group-hover:text-brand-400 transition-colors">
                {point.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-dark-50 mb-1 tabular-nums tracking-tight">
                {point.stat}
              </div>
              <p className="text-sm text-dark-500 mb-4">{point.label}</p>
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-sm text-brand-400 font-medium leading-snug">
                  → {point.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-dark-600">
          2024 MSP Wi-Fi Survey, n=200
        </p>

        {/* Stakes / Cost of Inaction */}
        <div className="mt-8 p-4 rounded-xl bg-dark-800/40 border border-white/[0.04] text-center">
          <p className="text-sm text-dark-300">
            <span className="text-dark-100 font-medium">Every MDU you decline</span> is revenue walking to a competitor who said yes.
          </p>
          <p className="text-xs text-dark-500 mt-2">
            Win deals Ruckus and Meraki can&apos;t serve.
          </p>
        </div>
      </div>
    </Section>
  );
}
