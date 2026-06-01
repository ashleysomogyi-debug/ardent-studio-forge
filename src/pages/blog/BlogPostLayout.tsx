import { useEffect, ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface BlogPostLayoutProps {
  metaTitle: string;
  metaDescription: string;
  title: string;
  date: string;
  readTime: string;
  children: ReactNode;
}

export default function BlogPostLayout({
  metaTitle,
  metaDescription,
  title,
  date,
  readTime,
  children,
}: BlogPostLayoutProps) {
  useEffect(() => {
    document.title = metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", metaDescription);
    }
  }, [metaTitle, metaDescription]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0D0D0D", color: "#F5F5F0" }}
    >
      <Nav />

      <main className="flex-1">
        <article className="px-6 py-16 md:py-24 max-w-2xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#F5F5F0" }}
            >
              {title}
            </h1>
            <p className="text-sm" style={{ color: "#737373" }}>
              {date}
              <span className="mx-2" aria-hidden="true">
                &middot;
              </span>
              {readTime} read
            </p>
          </header>

          {/* Body */}
          <div
            className="prose prose-invert prose-p:leading-relaxed prose-p:text-[#D4D4D4] prose-headings:text-[#F5F5F0] prose-a:text-teal-400 prose-strong:text-[#F5F5F0] prose-li:text-[#D4D4D4] prose-ul:marker:text-teal-400 max-w-none"
            style={{ fontSize: "1.0625rem", lineHeight: "1.75" }}
          >
            {children}
          </div>

          {/* CTA Box */}
          <aside
            className="mt-14 rounded-xl p-8 border"
            style={{
              backgroundColor: "#141414",
              borderColor: "#262626",
            }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#2DD4BF" }}
            >
              Ardent Studio &mdash; Boynton Beach, FL
            </p>
            <p
              className="text-lg font-semibold mb-4"
              style={{ color: "#F5F5F0" }}
            >
              Ready to implement this for your Palm Beach County business?
            </p>
            <p className="text-sm mb-6" style={{ color: "#A3A3A3" }}>
              We'll map out what's automatable in your business in 30 minutes —
              no pitch, just a practical conversation.
            </p>
            <a
              href="https://calendly.com/ardentstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-150"
              style={{
                backgroundColor: "#2DD4BF",
                color: "#0D0D0D",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "#5EEAD4")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "#2DD4BF")
              }
            >
              Book a free 30-minute call &rarr;
            </a>
          </aside>
        </article>
      </main>

      <Footer />
    </div>
  );
}
