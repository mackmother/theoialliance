"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { SignupModal } from "@/components/ui";

export default function JamaicaCaseStudyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[#0a0a0f]">

        {/* Hero - Clean, editorial style */}
        <section className="relative pt-32 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Back link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-sm mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Case Studies
            </Link>

            {/* Eyebrow */}
            <div className="mb-4">
              <span className="text-[#f0a559] text-sm font-medium tracking-wide">
                MsTECH • Jamaica • Education
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6"
              style={{ letterSpacing: '-0.025em' }}
            >
              How MsTECH Won Jamaica&apos;s Largest Network Contract—With{' '}
              <span className="relative inline-block">
                <span className="text-white">
                  Zero WiFi Engineers
                </span>
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="heroSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0a559" />
                      <stop offset="100%" stopColor="#a93295" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,10 Q100,2 200,10"
                    fill="none"
                    stroke="url(#heroSwoosh)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-xl md:text-2xl leading-relaxed mb-10">
              A team with no managed WiFi experience now operates 10,000 devices across 1,000 schools.
            </p>
          </div>
        </section>

        {/* Video */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-2xl overflow-hidden" style={{ background: 'rgba(20, 18, 25, 0.8)' }}>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/aI2m0XV3ACU?rel=0"
                  title="WiBUZ Minute: MsTECH Jamaica"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Snapshot + Article */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">

              {/* Main Article Content */}
              <article className="prose-invert">

                {/* The Story Begins */}
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  MsTECH is a Jamaican IT consulting company. They design, implement, and manage network infrastructure for government and enterprise clients in Jamaica. Before this project, they had about 5 people. Today they are still only 5 people.
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  The gap was clear: MsTECH had deep expertise in switching, firewalls, and WAN infrastructure. But managed WiFi at national scale? That was new territory—and they were bidding against companies with 15-20 years of experience.
                </p>

                {/* The Challenge */}
                <h2 className="text-white text-2xl font-bold mt-12 mb-6">The Opportunity That Almost Got Away</h2>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  The Jamaica Ministry of Education needed to connect 1,000 schools with reliable WiFi. It was the largest network infrastructure project in the country&apos;s history. The requirements scared off most bidders:
                </p>

                <ul className="text-white/70 text-lg leading-relaxed mb-6 space-y-3 list-none pl-0">
                  <li className="flex gap-3">
                    <span className="text-[#f0a559]">—</span>
                    <span><strong className="text-white">Multi-vendor mandatory.</strong> Ruckus gear already deployed in some schools. Fortinet firewalls in place. The Ministry refused to rip-and-replace.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f0a559]">—</span>
                    <span><strong className="text-white">90-day timeline.</strong> Phase 1 required 364 schools live in 90 days. Four schools per day, including weekends, with Christmas in the middle.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f0a559]">—</span>
                    <span><strong className="text-white">Three-tier oversight.</strong> Real-time dashboards for the Prime Minister&apos;s Office, management access for central IT, and individual views for school administrators.</span>
                  </li>
                </ul>

                {/* Pull Quote */}
                <blockquote className="border-l-4 border-[#f0a559] pl-6 my-10">
                  <p className="text-white text-xl md:text-2xl leading-relaxed italic">
                    &ldquo;We priced out the traditional approach. Meraki licensing for 7,000 APs would have been over a million dollars in year one—and it doesn&apos;t do multi-vendor. The RFP required deployment in 90 days. The math didn&apos;t work.&rdquo;
                  </p>
                  <cite className="text-white/50 text-base not-italic mt-4 block">
                    — Julian Edwards, Head of Operations, MsTECH
                  </cite>
                </blockquote>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  The stakes were simple: pass on the contract and watch it go to an off-island competitor. MsTECH&apos;s biggest opportunity would become someone else&apos;s win.
                </p>

                {/* The Hesitation */}
                <h2 className="text-white text-2xl font-bold mt-12 mb-6">What Almost Stopped Them</h2>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Julian was skeptical. Three concerns kept him up at night:
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">First, the platform was unknown.</strong> &ldquo;We&apos;d never heard of WiBUZ. You&apos;re asking us to bet our biggest contract on a platform we&apos;d never worked with.&rdquo;
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Second, OpenWiFi skepticism.</strong> &ldquo;We knew Ruckus. We knew Cisco. OpenWiFi sounded like an experiment—something you&apos;d run in a lab, not in a thousand schools.&rdquo;
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Third, their team had zero WiFi experience.</strong> &ldquo;WiBUZ doesn&apos;t answer to the Prime Minister&apos;s Office. We do.&rdquo;
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Two things changed his mind. A reference call with another deployment running wibipOS at similar complexity—&ldquo;They walked us through what was working, what wasn&apos;t, how support worked in practice. That was credible.&rdquo;
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  And the math on LiveSDK: &ldquo;$120,000 a year for access to 25 engineers who&apos;ve already built the integrations we&apos;d need. Versus $240,000 minimum for engineers we&apos;d have to recruit, relocate, and train—who still wouldn&apos;t have the multi-vendor expertise. The risk/reward flipped.&rdquo;
                </p>

                {/* What Happened */}
                <h2 className="text-white text-2xl font-bold mt-12 mb-6">What Actually Happened</h2>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Phase 1: 364 schools deployed in 90 days. 3,150 access points live. They finished three days early.
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Today: 1,000 schools and expanding. 10,000 managed devices—7,000 APs, 2,000 switches, 1,000 firewalls. Six hardware vendors unified. Single dashboard for the entire network.
                </p>

                {/* Pull Quote */}
                <blockquote className="border-l-4 border-[#a93295] pl-6 my-10">
                  <p className="text-white text-xl md:text-2xl leading-relaxed italic">
                    &ldquo;My network operations center has eight monitors. Seven of them are for other things. wibipOS runs on one screen, and that&apos;s all we need to see the entire national education network.&rdquo;
                  </p>
                  <cite className="text-white/50 text-base not-italic mt-4 block">
                    — Julian Edwards
                  </cite>
                </blockquote>

                {/* Business Impact */}
                <h2 className="text-white text-2xl font-bold mt-12 mb-6">The Business Impact</h2>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Engineers hired for managed WiFi: zero.</strong> &ldquo;We didn&apos;t hire a single network engineer for this project. LiveSDK filled that gap completely. We have our existing operations team—project managers, rollout coordinators, field technicians. The WiFi expertise comes from the partnership.&rdquo;
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Two people manage 10,000 devices.</strong> &ldquo;5,000 devices per person—that ratio would be impossible with traditional vendor platforms.&rdquo;
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Revenue more than doubled.</strong> &ldquo;The Ministry of Education contract more than doubled our annual revenue. It transformed MsTECH from a regional IT consultancy into a national infrastructure operator.&rdquo;
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Pipeline opened.</strong> They&apos;re now in discussions with three other government ministries—Ministry of Health, Ministry of Finance, and national security. &ldquo;None of those conversations would be happening if we hadn&apos;t delivered on Education.&rdquo;
                </p>

                {/* Objection Handling */}
                <h2 className="text-white text-2xl font-bold mt-12 mb-6">On the Skeptics</h2>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  When asked about the &ldquo;multi-vendor is too complex&rdquo; objection:
                </p>

                <blockquote className="border-l-4 border-[#f0a559] pl-6 my-10">
                  <p className="text-white text-xl leading-relaxed italic">
                    &ldquo;I&apos;d tell them to come to Jamaica and look at 10,000 devices running across six vendors through one dashboard. Multi-vendor sounds complicated because with legacy platforms, it is complicated. But that&apos;s not how wibipOS works. The complexity is in the platform, not in our operations. My team doesn&apos;t need to know how to configure a Ruckus AP differently than an Edgecore AP. The platform handles the translation.&rdquo;
                  </p>
                </blockquote>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  And on &ldquo;OpenWiFi isn&apos;t enterprise-ready&rdquo;:
                </p>

                <blockquote className="border-l-4 border-[#a93295] pl-6 my-10">
                  <p className="text-white text-xl leading-relaxed italic">
                    &ldquo;We&apos;re running the largest education network in the Caribbean. If that&apos;s not enterprise-ready, I don&apos;t know what is.&rdquo;
                  </p>
                </blockquote>

                {/* Transformation */}
                <h2 className="text-white text-2xl font-bold mt-12 mb-6">The Transformation</h2>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Before:</strong> Multi-vendor RFPs got passed to someone else. MsTECH didn&apos;t have the capability.
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong className="text-white">After:</strong> Multi-vendor RFPs are opportunities. They&apos;re bidding on a 300-property hospitality project they would have walked away from 12 months ago.
                </p>

                <blockquote className="border-l-4 border-[#f0a559] pl-6 my-10">
                  <p className="text-white text-xl md:text-2xl leading-relaxed italic">
                    &ldquo;Confidence. That&apos;s the biggest difference. We&apos;ve proven we can deliver at scale with a lean team. That changes everything.&rdquo;
                  </p>
                  <cite className="text-white/50 text-base not-italic mt-4 block">
                    — Julian Edwards
                  </cite>
                </blockquote>

                {/* Advice */}
                <h2 className="text-white text-2xl font-bold mt-12 mb-6">Julian&apos;s Advice</h2>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  &ldquo;You don&apos;t have to build everything yourself. There&apos;s a smarter path. Find partners who&apos;ve already solved the hard problems, and focus on what you&apos;re good at—understanding the customer, managing the relationship, executing the rollout.&rdquo;
                </p>

                <p className="text-[#f0a559] text-xl font-semibold mb-6">
                  &ldquo;The engineering can be borrowed. The customer trust can&apos;t.&rdquo;
                </p>

                {/* Attribution */}
                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-white/40 text-sm italic">
                    Case study based on interview with Julian Edwards, Head of Operations, MsTECH. Published with permission.
                  </p>
                </div>

              </article>

              {/* Sidebar - Results Snapshot */}
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: 'rgba(240, 165, 89, 0.05)',
                    border: '1px solid rgba(240, 165, 89, 0.15)',
                  }}
                >
                  <h3 className="text-[#f0a559] text-xs font-semibold uppercase tracking-wider mb-6">
                    Results Snapshot
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <div className="text-white text-3xl font-bold">1,000</div>
                      <div className="text-white/50 text-sm">schools connected</div>
                    </div>
                    <div>
                      <div className="text-white text-3xl font-bold">10,000</div>
                      <div className="text-white/50 text-sm">managed devices</div>
                    </div>
                    <div>
                      <div className="text-white text-3xl font-bold">6</div>
                      <div className="text-white/50 text-sm">hardware vendors unified</div>
                    </div>
                    <div>
                      <div className="text-white text-3xl font-bold">0</div>
                      <div className="text-white/50 text-sm">WiFi engineers hired</div>
                    </div>
                    <div>
                      <div className="text-white text-3xl font-bold">90</div>
                      <div className="text-white/50 text-sm">days to complete phase 1</div>
                    </div>
                    <div>
                      <div className="text-white text-3xl font-bold">2</div>
                      <div className="text-white/50 text-sm">people managing network</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Vendors Unified</div>
                    <div className="flex flex-wrap gap-2">
                      {["Ruckus", "Edgecore", "Actiontec", "Cybertan", "Fortinet", "NetExperience"].map((v) => (
                        <span key={v} className="text-white/60 text-xs px-2 py-1 rounded bg-white/5">{v}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* CTA - Bold, speaks to CEO */}
        <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/5">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
              style={{
                background: 'radial-gradient(ellipse, rgba(240, 165, 89, 0.12) 0%, transparent 60%)',
                filter: 'blur(60px)',
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="font-display text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.15] mb-6"
              style={{ letterSpacing: '-0.025em' }}
            >
              <span className="text-white">You&apos;re Looking at an Opportunity</span>
              <br />
              <span className="text-white">That Feels Too Big.</span>
              <br />
              <span className="relative inline-block mt-2">
                <span
                  style={{
                    background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  It&apos;s Not.
                </span>
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="ctaSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f0a559" />
                      <stop offset="100%" stopColor="#a93295" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,10 Q100,2 200,10"
                    fill="none"
                    stroke="url(#ctaSwoosh)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-[#8B8B9A] text-lg md:text-xl mb-10 max-w-xl mx-auto">
              MsTECH had zero WiFi experience. Now they operate the Caribbean&apos;s largest education network.
              The engineering can be borrowed. The customer trust can&apos;t.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-block rounded-full p-[2px] transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #f0a559 0%, #a93295 100%)',
                boxShadow: '0 0 30px rgba(240, 165, 89, 0.3), 0 0 60px rgba(169, 50, 149, 0.2)',
              }}
            >
              <span
                className="block px-10 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300"
                style={{ background: 'rgba(20, 18, 25, 0.9)' }}
              >
                Start Your 30-Day Journey
              </span>
            </button>

            <p className="text-[#8B8B9A] text-sm mt-6">
              Full access • Your CSM on standby • Prove it works before you commit
            </p>
          </div>
        </section>

      </main>
      <Footer />

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
