import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { Card, Button } from "@/components/ui";

export const metadata = {
  title: "Case Studies | wibipOS",
  description:
    "See how MSPs and telcos deploy production-ready OpenWiFi with wibipOS. Real deployments, real results.",
};

const caseStudies = [
  {
    slug: "jamaica",
    title: "Jamaica Schools",
    headline: "364 Schools. 6 Vendors. 90 Days.",
    category: "Education / GovTech",
    location: "Jamaica",
    flag: "🇯🇲",
    featured: true,
    stats: [
      { value: "364", label: "Schools" },
      { value: "3,150", label: "APs" },
      { value: "90", label: "Days" },
    ],
    description:
      "How Jamaica&apos;s national education network deployed 10,000 APs across multiple vendors—managed from a single wibipOS instance.",
    image: "https://landing.wibipos.com/hs-fs/hubfs/MoEyCaseStudyImage-1.jpg?width=600&height=420&name=MoEyCaseStudyImage-1.jpg",
    logo: "https://framerusercontent.com/images/ijOOF07fRPzxousVlXywn4qdOU.png?scale-down-to=512",
  },
  {
    slug: "att",
    title: "AT&T MDU Wi-Fi",
    headline: "Turnkey MDU Wi-Fi. 2.5M Customers.",
    category: "Telecom",
    location: "United States",
    flag: "🇺🇸",
    featured: false,
    stats: [
      { value: "2.5M", label: "Customers" },
      { value: "MDU", label: "Focus" },
      { value: "24/7", label: "Support" },
    ],
    description:
      "How AT&T Business delivers high-performance broadband and Wi-Fi across multi-dwelling units with consistent branding and minimal operational overhead.",
    image: "https://landing.wibipos.com/hs-fs/hubfs/AT%26TCasStudyv1.jpg?width=600&height=445&name=AT%26TCasStudyv1.jpg",
    logo: "https://framerusercontent.com/images/vypGMHttHsFpjWtzjxaRzwnTkMg.png",
  },
  {
    slug: "optimum",
    title: "Optimum Business",
    headline: "100 SMB Installs Monthly. 15 Minutes Each.",
    category: "Telecom",
    location: "United States",
    flag: "🇺🇸",
    featured: false,
    stats: [
      { value: "100", label: "Monthly" },
      { value: "350K", label: "SMBs" },
      { value: "15min", label: "Deploy" },
    ],
    description:
      "How Optimum Business delivers high-value, plug-and-play Wi-Fi to 350,000+ small and medium businesses—with deployment times reduced from weeks to 15 minutes.",
    image: "https://landing.wibipos.com/hs-fs/hubfs/OptimumCaseStudyImage.jpg?width=600&height=445&name=OptimumCaseStudyImage.jpg",
    logo: "https://framerusercontent.com/images/HDqgG3s2d7lIsawnvoC41lddsE.png",
  },
  {
    slug: "frontier",
    title: "Frontier Communications",
    headline: "28 States. 430K Customers. Carrier-Grade.",
    category: "Telecom",
    location: "United States",
    flag: "🇺🇸",
    featured: false,
    stats: [
      { value: "28+", label: "States" },
      { value: "430K", label: "Customers" },
      { value: "8yr", label: "Partnership" },
    ],
    description:
      "How Frontier Communications deployed branded Wi-Fi and networking services to commercial customers across 28+ states—serving 430,000+ business customers.",
    image: "https://landing.wibipos.com/hs-fs/hubfs/FrontierCaseStudy-1.jpg?width=600&height=445&name=FrontierCaseStudy-1.jpg",
    logo: "https://framerusercontent.com/images/J6EQ6l0mfj8KgZOTvBadrIH2R08.png",
  },
];

const testimonials = [
  {
    imageUrl: "https://framerusercontent.com/images/NY7LruTfyfFyY8fJgLfPgfckGgo.png",
    alt: "Julian Edwards testimonial - Head of Operations, MsTECH",
  },
  {
    imageUrl: "https://framerusercontent.com/images/9peXEfHQbNypiXyszxyZyfW4NQ.png?scale-down-to=1024",
    alt: "Huw Rees testimonial - VP of Business Development, NetExperience",
  },
  {
    imageUrl: "https://framerusercontent.com/images/eJdUviS4uNcLRD44YUn0Y80rRc.png",
    alt: "Frank Lai testimonial - VP Business Development, Actiontec",
  },
];

export default function CaseStudiesPage() {
  const featuredStudy = caseStudies.find((cs) => cs.featured);
  const otherStudies = caseStudies.filter((cs) => !cs.featured);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-dark-950">
          {/* Background glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
            {/* Label */}
            <div className="mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Case Studies
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-6 leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
              Real Deployments.{" "}
              <span className="text-primary">Real Results.</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto">
              See how MSPs and telecom providers deploy production-ready OpenWiFi with wibipOS.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredStudy && (
          <section className="py-12 bg-dark-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              {/* Label */}
              <div className="mb-8 flex items-center gap-3">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Featured
                </span>
                <span className="px-3 py-1 text-xs font-medium text-dark-400 bg-dark-800 border border-white/[0.06] rounded-full">
                  {featuredStudy.category}
                </span>
              </div>

              <Card className="overflow-hidden" gradient>
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  {featuredStudy.image && (
                    <div className="relative aspect-video md:aspect-auto">
                      <Image
                        src={featuredStudy.image}
                        alt={featuredStudy.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-900/50 md:block hidden" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    {/* Logo */}
                    {featuredStudy.logo && (
                      <div className="mb-6">
                        <Image
                          src={featuredStudy.logo}
                          alt={featuredStudy.title}
                          width={150}
                          height={48}
                          className="h-10 w-auto"
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-dark-400 text-sm mb-4">
                      <span>{featuredStudy.flag}</span>
                      <span>{featuredStudy.location}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-dark-50 mb-4" style={{ letterSpacing: '-0.02em' }}>
                      {featuredStudy.headline}
                    </h2>

                    <p className="text-dark-400 leading-relaxed mb-6">
                      {featuredStudy.description.replace(/&apos;/g, "'")}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/[0.06] mb-6">
                      {featuredStudy.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-primary">
                            {stat.value}
                          </div>
                          <div className="text-xs text-dark-500 mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button variant="primary" href={`/case-studies/${featuredStudy.slug}`}>
                      Read Full Case Study
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Other Case Studies */}
        <section className="py-12 bg-dark-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Label */}
            <div className="mb-8">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                More Case Studies
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {otherStudies.map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                  <Card className="h-full overflow-hidden" hover>
                    {/* Image */}
                    {study.image && (
                      <div className="relative aspect-video">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Logo */}
                      {study.logo && (
                        <div className="h-8 mb-4 flex items-center">
                          <Image
                            src={study.logo}
                            alt={study.title}
                            width={100}
                            height={32}
                            className="h-6 w-auto object-contain"
                            unoptimized
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-dark-500 text-xs mb-3">
                        <span>{study.flag}</span>
                        <span>{study.location}</span>
                        <span>•</span>
                        <span>{study.category}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-dark-50 mb-3 group-hover:text-primary transition-colors">
                        {study.headline}
                      </h3>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/[0.06]">
                        {study.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-lg font-bold text-primary">
                              {stat.value}
                            </div>
                            <div className="text-xs text-dark-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                        Read Case Study
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-dark-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Label */}
            <div className="mb-8">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                What Our Partners Say
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.alt}
                    width={400}
                    height={500}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 pb-24 bg-dark-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-50 mb-4">
              Ready to write your success story?
            </h2>
            <p className="text-dark-400 mb-8 text-lg">
              Join 10+ US telcos and MSPs managing 10,000+ locations with wibipOS.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/demo">
                Start Your 30-Day Sandbox
              </Button>
              <Button variant="ghost" size="lg" href="/demo#schedule">
                Schedule a Demo
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
