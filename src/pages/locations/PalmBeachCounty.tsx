import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePageMeta, SITE_URL } from "@/lib/seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://calendly.com/asomogyi-ardentstudio/30min";

const hero = {
  src: "https://images.unsplash.com/photo-1584677488802-c080664c7c45?auto=format&fit=crop&w=2000&q=70",
  alt: "West Palm Beach skyline across the water with red flowers in the foreground",
  credit: "Richard Sagredo / Unsplash",
  creditUrl: "https://unsplash.com/photos/red-roses-near-body-of-water-and-city-buildings-during-daytime-ZwM0FtQ3zeY",
};

const towns = [
  { label: "West Palm Beach", to: "/locations/west-palm-beach" },
  { label: "Boca Raton", to: "/locations/boca-raton" },
  { label: "Delray Beach", to: "/locations/delray-beach" },
  { label: "Boynton Beach", to: "/locations/boynton-beach", note: "Where we are based." },
  { label: "Jupiter", to: "/locations/jupiter" },
  { label: "Palm Beach Gardens", to: "/locations/palm-beach-gardens" },
  { label: "Wellington", to: "/locations/wellington" },
  { label: "Lake Worth Beach", to: "/locations/lake-worth-beach" },
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
    body: "Hands-on workshops at your office or over video, where people work on their own tasks in plain English.",
    to: "/training",
  },
  {
    title: "Chatbots and workflow automation",
    body: "An assistant that answers inquiries after hours, or the repetitive admin job that should have stopped being manual years ago.",
    to: "/services/ai-chatbot",
  },
];

const steps = [
  { title: "Free scope call", body: "Fifteen minutes. You get a yes or no on whether AI fits, plus a short written follow-up. No pitch." },
  { title: "Proposal", body: "Fixed scope, fixed price. No hourly surprises." },
  { title: "Build", body: "Short loops, with you reviewing as we go." },
  { title: "Handoff", body: "You get the code, the accounts, and a how-to guide. You own all of it." },
];

const faqs = [
  {
    q: "Do you work in person?",
    a: "Yes. We are based in Boynton Beach and come to offices anywhere in Palm Beach County for workshops and handoffs. Scope calls and most build reviews run over video because it is faster for everyone.",
  },
  {
    q: "Which towns do you cover?",
    a: "All of Palm Beach County, from Jupiter and Tequesta down to Boca Raton, and west to Wellington and Royal Palm Beach.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. If you can describe the task that eats your week, we can take it from there.",
  },
  {
    q: "What does it cost?",
    a: "Every project is quoted at a fixed price after the scope call, so you know the number before you commit.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Code, accounts and documentation are handed over at the end.",
  },
];

const PalmBeachCounty = () => {
  useScrollReveal();
  usePageMeta({
    title: "AI Consulting in Palm Beach County, FL | Ardent Studio",
    description:
      "Practical AI consulting, custom builds and team training for Palm Beach County small businesses. Based in Boynton Beach. Free 15-minute scope call.",
  });

  useEffect(() => {
    const id = "pbc-hub-jsonld";
    document.getElementById(id)?.remove();
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = id;
    s.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "AI consulting for Palm Beach County small businesses",
          serviceType: "AI consulting",
          url: `${SITE_URL}/locations/palm-beach-county`,
          provider: { "@id": `${SITE_URL}/#localbusiness` },
          areaServed: { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
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
  }, []);

  return (
    <>
      <Nav />
      <main className="bg-background font-sans text-[16px] leading-[1.6] text-foreground">
        <section className="relative isolate flex min-h-[540px] items-end overflow-hidden bg-ardent-studio px-5 pb-14 pt-28 md:min-h-[620px] md:px-10 md:pb-20 md:pt-36">
          <img src={hero.src} alt={hero.alt} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" decoding="async" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,13,13,0.86) 0%, rgba(13,13,13,0.68) 55%, rgba(13,13,13,0.42) 100%), linear-gradient(180deg, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.7) 100%)",
            }}
          />
          <div className="mx-auto w-full max-w-[1200px]">
            <span className="section-eyebrow section-eyebrow--on-photo">Serving Palm Beach County, FL</span>
            <h1 className="mt-6 max-w-[20ch] text-[clamp(34px,5.4vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
              Practical AI for Palm Beach County small businesses
            </h1>
            <p className="mt-6 max-w-[640px] text-[18px] leading-[1.6] text-white/90 md:text-[19px]">
              We find where AI saves your team time, build one tool for that job, and train your people to use it. Based in Boynton Beach and working in person from Jupiter to Boca Raton.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ardent-lime px-8 py-3.5 text-center font-sans text-[16px] font-medium text-ardent-studio transition-opacity hover:opacity-90">
                Book a free 15-minute scope call
              </a>
              <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-white/80">No pitch · Plain English · You own it</span>
            </div>
          </div>
          <a href={hero.creditUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-4 font-sans text-[12px] text-white/60 hover:text-white">
            Photo: {hero.credit}
          </a>
        </section>

        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
          <div className="reveal-section mx-auto max-w-[760px]">
            <span className="section-eyebrow">Local, and in the room</span>
            <h2 className="mt-6 text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-[-0.01em]">Your AI consultant is down the road</h2>
            <p className="mt-6 text-[17px] leading-[1.75] text-body-text">
              Ardent Studio is run from Boynton Beach by Dr. Ashley Somogyi and Wesley Price. Most owners we meet already have ChatGPT or Claude open in a browser tab and suspect it could do more. We sit down with you, find the one task worth handing over, and build it.
            </p>
            <p className="mt-4 text-[17px] leading-[1.75] text-body-text">
              Ashley has taught AI to local owners at Women of Wellington, and brings 15+ years in tech, learning and business operations. Workshops and handoffs can happen at your office anywhere in the county.
            </p>
          </div>
        </section>
        <div className="h-px bg-border" />

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
          </div>
        </section>
        <div className="h-px bg-border" />

        <section className="px-5 py-12 md:px-10 md:py-[72px]" style={{ background: "var(--color-surface)" }} aria-labelledby="pbc-towns">
          <div className="mx-auto max-w-[1200px]">
            <h2 id="pbc-towns" className="reveal-section text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15]">Towns we serve</h2>
            <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {towns.map((c) => (
                <li key={c.to} className="reveal-section">
                  <Link to={c.to} className="workshop-card flex h-full min-h-[112px] flex-col justify-between gap-3 p-6 transition-colors hover:border-foreground">
                    <span className="text-[20px] font-semibold leading-[1.25]">{c.label}</span>
                    <span className="text-[14px] text-body-text">{c.note ?? `AI help for ${c.label} businesses`}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="reveal-section mt-8 max-w-[62ch] text-body-text">
              Not on the list? We cover all of Palm Beach County. We also work remotely with businesses in{" "}
              <Link to="/locations/raleigh-durham" className="font-medium text-primary underline hover:text-foreground">Raleigh-Durham, NC</Link>.
            </p>
          </div>
        </section>
        <div className="h-px bg-border" />

        <section className="px-5 py-12 md:px-10 md:py-[72px]">
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

        <section className="px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto max-w-[760px]">
            <h2 className="reveal-section text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15]">Questions people ask</h2>
            <dl className="mt-8">
              {faqs.map((f) => (
                <div key={f.q} className="reveal-section border-t border-border py-6 last:border-b">
                  <dt className="text-[18px] font-semibold">{f.q}</dt>
                  <dd className="mt-2 text-[16px] leading-[1.75] text-body-text">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <div className="h-px bg-border" />

        <section className="px-5 py-12 text-center md:px-10 md:py-[72px]" style={{ background: "var(--color-bg)" }}>
          <div className="reveal-section mx-auto max-w-[640px]">
            <span className="mb-6 block font-mono text-[13px] uppercase tracking-[0.2em] text-primary">Get started</span>
            <p className="text-[clamp(24px,5vw,38px)] font-light leading-[1.2]">Fifteen minutes to find out whether AI fits your business.</p>
            <div className="mt-8 flex justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ardent-lime px-8 py-3.5 text-center font-sans text-[16px] font-medium text-ardent-studio transition-opacity hover:opacity-90">
                Book a free scope call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PalmBeachCounty;
