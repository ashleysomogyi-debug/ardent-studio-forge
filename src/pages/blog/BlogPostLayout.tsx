import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrlFor, usePageMeta, SITE_URL } from "@/lib/seo";

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

/** "May 2026" -> "2026-05". Returns undefined when the label is not in that form. */
const isoMonth = (label: string) => {
  const [month, year] = label.trim().split(/\s+/);
  const index = MONTHS.indexOf((month ?? "").toLowerCase());
  return index >= 0 && /^\d{4}$/.test(year ?? "") ? `${year}-${String(index + 1).padStart(2, "0")}` : undefined;
};
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
  usePageMeta({ title: metaTitle, description: metaDescription });
  const { pathname } = useLocation();

  // Structured data: tells search engines and AI tools this is an article, who wrote it and when.
  useEffect(() => {
    const url = canonicalUrlFor(pathname);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-post-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          headline: title,
          description: metaDescription,
          datePublished: isoMonth(date),
          inLanguage: "en-US",
          mainEntityOfPage: url,
          image: `${SITE_URL}/og-image.png`,
          author: { "@id": `${SITE_URL}/#ashley-somogyi` },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: title, item: url },
          ],
        },
      ],
    });
    document.getElementById("blog-post-schema")?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [pathname, title, metaDescription, date]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F5F5F0", color: "#0D0D0D" }}
    >
      <Nav />

      <main className="flex-1">
        <article className="px-6 pb-12 pt-20 md:pb-[72px] md:pt-24 max-w-2xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#0D0D0D" }}
            >
              {title}
            </h1>
            <p className="text-[16px]" style={{ color: "rgba(13,13,13,0.62)" }}>
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
              className="text-[13px] font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#0A7D7B" }}
            >
              Ardent Studio &middot; Boynton Beach, FL
            </p>
            <p
              className="text-lg font-semibold mb-4"
              style={{ color: "#0D0D0D" }}
            >
              Ready to implement this for your Palm Beach County business?
            </p>
            <p className="text-[16px] mb-6" style={{ color: "rgba(13,13,13,0.62)" }}>
              We'll map out what's automatable in your business in 15 minutes:
              no pitch, just a practical conversation.
            </p>
            <a
              href="https://calendly.com/asomogyi-ardentstudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[16px] font-semibold px-5 py-3 rounded-lg transition-colors duration-150"
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
