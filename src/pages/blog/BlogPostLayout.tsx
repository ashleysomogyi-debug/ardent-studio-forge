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
      style={{ backgroundColor: "#F5F5F0", color: "#0D0D0D" }}
    >
      <Nav />

      <main className="flex-1">
        <article className="px-6 py-16 md:py-24 max-w-2xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#0D0D0D" }}
            >
              {title}
            </h1>
            <p className="text-sm" style={{ color: "rgba(13,13,13,0.62)" }}>
              {date}
              <span className="mx-2" aria-hidden="true">
                &middot;
              </span>
              {readTime} read
            </p>
          </header>

          {/* Body */}
          <div
            className="prose prose-p:leading-relaxed prose-p:text-[rgba(13,13,13,0.78)] prose-headings:text-[#0D0D0D] prose-a:text-primary prose-strong:text-[#0D0D0D] prose-li:text-[rgba(13,13,13,0.78)] prose-ul:marker:text-primary max-w-none"
            style={{ fontSize: "1.0625rem", lineHeight: "1.75" }}
          >
            {children}
          </div>

          {/* CTA Box */}
          <aside
            className="mt-14 rounded-xl p-8 border"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "rgba(13,13,13,0.08)",
            }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#0A7D7B" }}
            >
              Ardent Studio &mdash; Boynton Beach, FL
            </p>
            <p
              className="text-lg font-semibold mb-4"
              style={{ color: "#0D0D0D" }}
            >
              Ready to implement this for your Palm Beach County business?
            </p>
            <p className="text-sm mb-6" style={{ color: "rgba(13,13,13,0.62)" }}>
              We'll map out what's automatable in your business in 15 minutes:
              no pitch, just a practical conversation.
            </p>
            <a
              href="https://calendly.com/asomogyi-ardentstudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-150"
              style={{
                backgroundColor: "#C3F73A",
                color: "#0D0D0D",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "#C3F73A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "#C3F73A")
              }
            >
               Book a free 15-min call &rarr;
            </a>
          </aside>
        </article>
      </main>

      <Footer />
    </div>
  );
}
