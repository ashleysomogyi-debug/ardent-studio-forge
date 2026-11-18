import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePageMeta, SITE_URL } from "@/lib/seo";
import Nav from "./Nav";
import Footer from "./Footer";
import { hub, townCards, type TrianglePage } from "@/pages/locations/triangle/data";

const BOOKING_URL = "https://calendly.com/asomogyi-ardentstudio/30min";

const AREA_SERVED = ["Raleigh", "Durham", "Cary", "Apex", "Morrisville", "Chapel Hill", "Carrboro", "Wake Forest", "Holly Springs", "Hillsborough"];

const ownerQuotes = [
  "I'm not technical at all.",
  "I know AI can do a lot but I don't know where to start.",
  "I don't want my replies to sound like a robot wrote them.",
];

const services = [
  {
    title: "AI Setup",
    body: "We set your business up on the AI tools you already pay for, such as Microsoft Copilot, connect them to your systems, and train your team on a starter set of uses.",
    to: "/services/ai-setup",
  },
  {
    title: "Build it",
    body: "One AI tool that saves real hours, built in 2 to 4 weeks at a fixed price. You get a live walkthrough, a short guide, and 30 days of email support.",
    to: "/services/ai-automation",
  },
  {
    title: "Teach your team",
    body: "Hands-on workshops where people work on their own tasks, in plain English.",
    to: "/training",
  },
  {
    title: "Chatbots and workflow automation",
    body: "An assistant that answers inquiries after hours, or the repetitive admin job that should have stopped being manual years ago.",
    to: "/services/ai-chatbot",
  },
];

const exampleBuilds = [
  "An after-hours inquiry assistant that replies fast and still sounds like the owner",
  "Proposal drafts written straight from call notes",
  "An \"ask your data\" dashboard that answers questions about sales and customers",
  "A team assistant trained on a company's own internal processes",
];

const steps = [
  { title: "Free scope call", body: "Fifteen minutes. You get a yes or no on whether AI fits, plus a short written follow-up. No pitch." },
  { title: "Proposal", body: "Fixed scope, fixed price. No hourly surprises." },
  { title: "Build", body: "Short loops, with you reviewing as we go." },
  { title: "Handoff", body: "You get the code, the accounts, and a how-to guide. You own all of it." },
];

const BookButton = ({ label = "Book a free 15-minute scope call" }: { label?: string }) => (
  <a
    href={BOOKING_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-12 items-center justify-center rounded-full bg-ardent-lime px-8 py-3.5 text-center font-sans text-[16px] font-medium text-ardent-studio transition-opacity hover:opacity-90"
  >
    {label}
  </a>
);

const TextBlock = ({ block, tone }: { block: { eyebrow: string; heading: string; body: string[] }; tone: "surface" | "bg" }) => (
  <>
    <section className="px-5 py-12 md:px-10 md:py-[72px]" style={{ background: tone === "surface" ? "var(--color-surface)" : "var(--color-bg)" }}>
      <div className="reveal-section mx-auto max-w-[760px]">
        <span className="section-eyebrow">{block.eyebrow}</span>
        <h2 className="mt-6 text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground">{block.heading}</h2>
        <div className="mt-6 border-l-2 border-primary/40 pl-6 md:pl-8">
          {block.body.map((p) => (
            <p key={p} className="mb-4 text-[17px] leading-[1.75] text-body-text last:mb-0">{p}</p>
          ))}
        </div>
      </div>
    </section>
    <div className="h-px bg-border" />
  </>
);

const TriangleLocationLayout = ({ page }: { page: TrianglePage }) => {
  useScrollReveal();
  usePageMeta({ title: page.metaTitle, description: page.metaDescription });

  const path = `/locations/${page.slug}`;

  useEffect(() => {
    const id = `triangle-jsonld-${page.slug}`;
    document.getElementById(id)?.remove();
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = id;
    s.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: page.headline,
          serviceType: "AI consulting",
          url: `${SITE_URL}${path}`,
          provider: { "@type": "Organization", name: "Ardent Studio", url: SITE_URL },
          // No North Carolina street address: the business is not located there yet.
          areaServed: (page.isHub ? AREA_SERVED : [page.place]).map((name) => ({
            "@type": "City",
            name: `${name}, NC`,
          })),
        },
        {
          "@type": "FAQPage",
          mainEntity: page.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    });
    document.head.appendChild(s);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [page, path]);

  return (
    <>
      <Nav />
      <main className="bg-background font-sans text-[16px] leading-[1.6] text-foreground">
        {/* Hero with a location photo behind the headline */}
        <section className="relative isolate flex min-h-[540px] items-end overflow-hidden bg-ardent-studio px-5 pb-14 pt-28 md:min-h-[620px] md:px-10 md:pb-20 md:pt-36">
          <img
            src={page.hero.src}
            alt={page.hero.alt}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            style={{ objectPosition: page.hero.position ?? "center" }}
            fetchPriority="high"
            decoding="async"
          />
          {/* Dark wash so white text stays readable over any photo */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,13,13,0.86) 0%, rgba(13,13,13,0.68) 55%, rgba(13,13,13,0.42) 100%), linear-gradient(180deg, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.7) 100%)",
            }}
          />
          <div className="mx-auto w-full max-w-[1200px]">
            <span className="section-eyebrow section-eyebrow--on-photo">Serving {page.isHub ? "the Triangle" : `${page.place}, NC`}</span>
            <h1 className="mt-6 max-w-[20ch] text-[clamp(34px,5.4vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
              {page.headline}
            </h1>
            <p className="mt-6 max-w-[640px] text-[18px] leading-[1.6] text-white/90 md:text-[19px]">{page.intro}</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BookButton />
              <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-white/80">No pitch · Plain English · You own it</span>
            </div>
          </div>
          {page.hero.credit &&
            (page.hero.creditUrl ? (
              <a
                href={page.hero.creditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-4 font-sans text-[12px] text-white/60 hover:text-white"
              >
                Photo: {page.hero.credit}
              </a>
            ) : (
              <span className="absolute bottom-3 right-4 font-sans text-[12px] text-white/60">Photo: {page.hero.credit}</span>
            ))}
        </section>

        {page.isHub ? (
          <>
            {/* The client's own words */}
            <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
              <div className="reveal-section mx-auto max-w-[900px]">
                <h2 className="text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-[-0.01em]">{page.hoursHeading}</h2>
                <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.75] text-body-text">
                  Most owners we talk to have ChatGPT or Claude open in a browser tab. They ask it questions, draft the odd email, and stop there. Then they tell us some version of this:
                </p>
                <ul className="mt-6 grid list-none gap-4 p-0 md:grid-cols-3">
                  {ownerQuotes.map((q) => (
                    <li key={q} className="workshop-card p-6 text-[17px] font-medium leading-[1.5]">&ldquo;{q}&rdquo;</li>
                  ))}
                </ul>
                <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.75] text-body-text">
                  None of that is a problem. Clever business owners have mostly only scratched the surface, because nobody has shown them what sits underneath. They don't know what they don't know. That part is our job.
                </p>
              </div>
            </section>
            <div className="h-px bg-border" />

            {/* Services */}
            <section className="px-5 py-12 md:px-10 md:py-[72px]">
              <div className="mx-auto max-w-[1200px]">
                <span className="section-eyebrow reveal-section">What we do</span>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {services.map((s) => (
                    <Link key={s.title} to={s.to} className="reveal-section workshop-card block p-6 transition-colors hover:border-foreground md:p-8">
                      <h3 className="text-[20px] font-semibold">{s.title}</h3>
                      <p className="mt-3 text-[16px] leading-[1.75] text-body-text">{s.body}</p>
                    </Link>
                  ))}
                </div>
                <h3 className="reveal-section mt-12 text-[22px] font-semibold">The kind of thing we build</h3>
                <ul className="reveal-section mt-5 grid list-none gap-3 p-0 md:grid-cols-2">
                  {exampleBuilds.map((b) => (
                    <li key={b} className="flex gap-3 text-[16px] leading-[1.6] text-body-text">
                      <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">◈</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <div className="h-px bg-border" />

            {/* Process */}
            <section className="px-5 py-12 md:px-10 md:py-[72px]" style={{ background: "var(--color-surface)" }}>
              <div className="mx-auto max-w-[1200px]">
                <span className="section-eyebrow reveal-section">How it works</span>
                <ol className="mt-8 grid list-none gap-6 p-0 md:grid-cols-4">
                  {steps.map((s, i) => (
                    <li key={s.title} className="reveal-section">
                      <span className="font-mono text-[13px] tracking-[0.2em] text-primary">0{i + 1}</span>
                      <h3 className="mt-2 text-[19px] font-semibold">{s.title}</h3>
                      <p className="mt-2 text-[16px] leading-[1.7] text-body-text">{s.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
            <div className="h-px bg-border" />

            {/* Town pages */}
            <section className="px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="triangle-areas">
              <div className="mx-auto max-w-[1200px]">
                <h2 id="triangle-areas" className="reveal-section text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15]">{page.areaHeading}</h2>
                <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
                  {townCards.map((c) => (
                    <li key={c.page.slug} className="reveal-section">
                      <Link to={`/locations/${c.page.slug}`} className="group relative isolate flex h-full min-h-[190px] flex-col justify-end overflow-hidden rounded-3xl p-6">
                        <img src={c.page.hero.src.replace("w=2000", "w=800")} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <span className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.82) 100%)" }} />
                        <span className="text-[20px] font-semibold leading-[1.25] text-white">{c.label}</span>
                        <span className="mt-1 text-[14px] text-white/85">{c.note}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <div className="h-px bg-border" />

            <TextBlock block={page.spotlight} tone="surface" />

            {/* People */}
            <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
              <div className="reveal-section mx-auto max-w-[760px]">
                <span className="section-eyebrow">Who you will work with</span>
                <p className="mt-6 text-[17px] leading-[1.75] text-body-text">
                  <strong className="text-foreground">Dr. Ashley Somogyi</strong> builds. She has spent 15+ years in tech, learning and business operations, and has delivered keynotes and training in Shanghai, Las Vegas and Denmark. Her PhD is from Durham University. The other Durham, the one in England. She plans to stop having to clarify that soon.
                </p>
                <p className="mt-4 text-[17px] leading-[1.75] text-body-text">
                  <strong className="text-foreground">Wesley Price</strong> runs strategy and operations.
                </p>
              </div>
            </section>
            <div className="h-px bg-border" />
          </>
        ) : (
          <>
            {/* Where hours go */}
            <section className="px-5 py-12 md:px-10 md:py-[72px]">
              <div className="mx-auto max-w-[1200px]">
                <h2 className="reveal-section max-w-[24ch] text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-[-0.01em]">{page.hoursHeading}</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {page.hours.map((h) => (
                    <div key={h.who} className="reveal-section workshop-card p-6 md:p-8">
                      <span className="mb-4 block text-[16px] text-primary" aria-hidden="true">◈</span>
                      <h3 className="text-[18px] font-semibold">{h.who}</h3>
                      <p className="mt-3 text-[16px] leading-[1.75] text-body-text">{h.what}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="h-px bg-border" />

            <TextBlock block={page.spotlight} tone="surface" />
            {page.secondary && <TextBlock block={page.secondary} tone="bg" />}

            {/* Service area */}
            <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
              <div className="reveal-section mx-auto max-w-[760px]">
                <h2 className="text-[clamp(24px,3vw,32px)] font-semibold leading-[1.2]">{page.areaHeading}</h2>
                <p className="mt-5 text-[17px] leading-[1.75] text-body-text">{page.area}</p>
              </div>
            </section>
            <div className="h-px bg-border" />
          </>
        )}

        {/* FAQ */}
        <section className="px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto max-w-[760px]">
            <h2 className="reveal-section text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15]">{page.faqHeading}</h2>
            <dl className="mt-8">
              {page.faqs.map((f) => (
                <div key={f.q} className="reveal-section border-t border-border py-6 last:border-b">
                  <dt className="text-[18px] font-semibold">{f.q}</dt>
                  <dd className="mt-2 text-[16px] leading-[1.75] text-body-text">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <div className="h-px bg-border" />

        {/* CTA */}
        <section className="px-5 py-12 text-center md:px-10 md:py-[72px]" style={{ background: "var(--color-bg)" }}>
          <div className="reveal-section mx-auto max-w-[640px]">
            <span className="mb-6 block font-mono text-[13px] uppercase tracking-[0.2em] text-primary">Get started</span>
            <p className="text-[clamp(24px,5vw,38px)] font-light leading-[1.2]">Fifteen minutes to find out whether AI fits your business.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <BookButton label="Book a free scope call" />
              {!page.isHub && (
                <Link to={`/locations/${hub.slug}`} className="inline-flex min-h-12 items-center rounded-full border border-foreground/30 px-8 py-3.5 text-[16px] transition-colors hover:border-foreground/60">
                  Everything we offer across the Triangle
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TriangleLocationLayout;
