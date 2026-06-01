import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "what-can-ai-automate-small-business",
    title: "What Can AI Actually Automate for Your Small Business?",
    date: "May 2026",
    excerpt:
      "AI can handle far more than you think — here's a practical breakdown of what's automatable right now and what still needs a human.",
  },
  {
    slug: "ai-automation-cost-palm-beach-county",
    title:
      "How Much Does AI Automation Cost? A Realistic Guide for Palm Beach County Businesses",
    date: "May 2026",
    excerpt:
      "Transparent pricing tiers, what drives costs up, and how to figure out if automation makes financial sense for your business.",
  },
  {
    slug: "ai-automation-vs-hiring-admin",
    title: "AI Automation vs. Hiring an Admin: Which Makes More Sense?",
    date: "May 2026",
    excerpt:
      "A balanced comparison — what AI does better, what humans do better, and how most small businesses end up using both.",
  },
  {
    slug: "make-com-workflows-palm-beach-small-business",
    title:
      "5 Make.com Workflows That Palm Beach County Businesses Are Using Right Now",
    date: "May 2026",
    excerpt:
      "Five real workflows — lead capture to CRM, invoice reminders, appointment confirmations, review alerts, and social scheduling.",
  },
  {
    slug: "why-ai-automation-fails-small-business",
    title:
      "The Real Reason Most Small Business AI Projects Fail (And How to Avoid It)",
    date: "May 2026",
    excerpt:
      "Honest take on why automation projects stall — and what to do instead.",
  },
];

export default function BlogIndex() {
  useEffect(() => {
    document.title =
      "AI Automation Blog | Ardent Studio — Palm Beach County, FL";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Practical AI automation guides for Palm Beach County small businesses. Tips, tools, and real-world workflows from Ardent Studio."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0D0D0D", color: "#F5F5F0" }}>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2DD4BF" }}>
            Ardent Studio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            AI Automation Blog
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#A3A3A3" }}>
            Practical guides for Palm Beach County small businesses. Real tools,
            real workflows, honest takes on what works.
          </p>
        </section>

        {/* Post Grid */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl p-6 border transition-colors duration-200 hover:border-teal-400"
                style={{
                  backgroundColor: "#141414",
                  borderColor: "#262626",
                }}
              >
                <p className="text-xs font-medium tracking-wide uppercase mb-3" style={{ color: "#2DD4BF" }}>
                  {post.date}
                </p>
                <h2 className="text-base font-semibold leading-snug mb-3 flex-1" style={{ color: "#F5F5F0" }}>
                  {post.title}
                </h2>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "#A3A3A3" }}>
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-medium transition-colors duration-150"
                  style={{ color: "#2DD4BF" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#5EEAD4")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#2DD4BF")
                  }
                >
                  Read more &rarr;
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
