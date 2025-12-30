import { Navbar, Footer } from "@/components/layout";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | wibipOS",
    };
  }

  return {
    title: `${post.title} | wibipOS Blog`,
    description: post.excerpt,
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function parseContent(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        elements.push(
          <p key={elements.length} className="text-dark-300 leading-relaxed mb-6">
            {text}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    // H2 heading
    if (trimmedLine.startsWith("## ")) {
      flushParagraph();
      elements.push(
        <h2
          key={elements.length}
          className="text-xl md:text-2xl font-bold text-dark-100 mt-10 mb-4"
        >
          {trimmedLine.slice(3)}
        </h2>
      );
      return;
    }

    // H3 heading
    if (trimmedLine.startsWith("### ")) {
      flushParagraph();
      elements.push(
        <h3
          key={elements.length}
          className="text-lg font-semibold text-dark-100 mt-8 mb-3"
        >
          {trimmedLine.slice(4)}
        </h3>
      );
      return;
    }

    // List item
    if (trimmedLine.startsWith("- ")) {
      flushParagraph();
      elements.push(
        <li
          key={elements.length}
          className="text-dark-300 leading-relaxed ml-4 mb-2 flex items-start gap-2"
        >
          <span className="text-primary mt-1.5">•</span>
          <span>{trimmedLine.slice(2)}</span>
        </li>
      );
      return;
    }

    // Numbered list item
    const numberedMatch = trimmedLine.match(/^(\d+)\.\s(.+)$/);
    if (numberedMatch) {
      flushParagraph();
      elements.push(
        <li
          key={elements.length}
          className="text-dark-300 leading-relaxed ml-4 mb-2 flex items-start gap-3"
        >
          <span className="text-primary font-medium">{numberedMatch[1]}.</span>
          <span>{numberedMatch[2]}</span>
        </li>
      );
      return;
    }

    // Bold text within line (simple handling)
    if (trimmedLine.includes("**")) {
      flushParagraph();
      const parts = trimmedLine.split(/\*\*([^*]+)\*\*/);
      const formattedParts = parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-dark-100 font-semibold">
            {part}
          </strong>
        ) : (
          part
        )
      );
      elements.push(
        <p key={elements.length} className="text-dark-300 leading-relaxed mb-6">
          {formattedParts}
        </p>
      );
      return;
    }

    // Empty line
    if (!trimmedLine) {
      flushParagraph();
      return;
    }

    // Regular text
    currentParagraph.push(trimmedLine);
  });

  flushParagraph();
  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative pt-24 pb-12 bg-dark-950">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-dark-500 hover:text-dark-300 text-sm mb-8 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-dark-500 mb-4">
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
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
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-dark-400 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/[0.06]">
              <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-dark-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-dark-100 font-medium text-sm">
                  {post.author.name}
                </div>
                <div className="text-dark-500 text-xs">{post.author.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <article className="prose-dark">{parseContent(post.content)}</article>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-dark-950">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl font-bold text-dark-100 mb-6">
                Continue Reading
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block p-6 rounded-xl border border-white/[0.06] bg-dark-900/60 hover:border-white/[0.1] transition-all duration-300"
                  >
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs mb-3 ${
                        relatedPost.category === "Article"
                          ? "bg-blue-500/10 text-blue-400"
                          : relatedPost.category === "Newsletter"
                          ? "bg-primary/10 text-primary"
                          : "bg-green-500/10 text-green-400"
                      }`}
                    >
                      {relatedPost.category}
                    </span>
                    <h3 className="font-semibold text-dark-100 group-hover:text-primary transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-dark-500 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-dark-50 mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to See wibipOS in Action?
            </h2>
            <p className="text-dark-400 mb-8">
              Start your 30-day sandbox and experience multi-vendor management
              firsthand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center py-3 px-8 bg-primary text-dark-950 font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-primary/20"
              >
                Start Your Sandbox
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center py-3 px-8 border border-white/[0.1] text-dark-50 rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                Read Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
