import { Navbar, Footer } from "@/components/layout";
import { getAllPosts, type BlogPost } from "@/lib/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog | wibipOS — Insights on Multi-Vendor Wi-Fi",
  description:
    "Articles, insights, and updates on multi-vendor Wi-Fi management, OpenWiFi, MSP business strategies, and the future of wireless networking.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className={`h-full rounded-xl border border-white/[0.06] bg-dark-900/60 overflow-hidden transition-all duration-300 hover:border-white/[0.1] hover:bg-dark-900 ${
          featured ? "md:flex" : ""
        }`}
      >
        {/* Placeholder for future images */}
        <div
          className={`bg-dark-800 ${
            featured ? "md:w-2/5 aspect-video md:aspect-auto" : "aspect-video"
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-dark-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        </div>

        <div className={`p-6 ${featured ? "md:w-3/5 md:p-8" : ""}`}>
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-dark-500 mb-3">
            <span
              className={`px-2 py-0.5 rounded-full ${
                post.category === "Article"
                  ? "bg-blue-500/10 text-blue-400"
                  : post.category === "Newsletter"
                  ? "bg-primary/10 text-primary"
                  : "bg-green-500/10 text-green-400"
              }`}
            >
              {post.category}
            </span>
            <span>{formatDate(post.publishedAt)}</span>
            <span className="text-dark-600">·</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h2
            className={`font-bold text-dark-100 group-hover:text-primary transition-colors mb-3 ${
              featured ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-dark-400 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Read more */}
          <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
            Read article
            <svg
              className="ml-1.5 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => p !== featuredPost);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-dark-950">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Blog
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mt-4 mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Insights & Updates
            </h1>

            <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto">
              Thoughts on multi-vendor Wi-Fi, OpenWiFi, MSP business strategy,
              and the future of wireless networking.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-dark-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="mb-6">
                <span className="text-xs font-medium text-dark-500 uppercase tracking-wider">
                  Featured
                </span>
              </div>
              <BlogCard post={featuredPost} featured />
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12 bg-dark-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-dark-100">All Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-dark-500">No articles yet. Check back soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-dark-50 mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to Go Multi-Vendor?
            </h2>
            <p className="text-dark-400 mb-8">
              See how wibipOS can help you win deals you&apos;re currently losing.
            </p>

            <Link
              href="/demo"
              className="inline-flex items-center justify-center py-3 px-8 bg-primary text-dark-950 font-semibold rounded-lg hover:bg-brand-300 transition-colors shadow-lg shadow-primary/20"
            >
              Start Your 30-Day Sandbox
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
