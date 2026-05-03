import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const serif = "'Georgia', 'Cormorant Garamond', serif";

const format = [
  { num: "01", title: "1 hour discovery", price: "Free", body: "We map what your team already does and where AI fits." },
  { num: "02", title: "2 hour live workshop", price: "On site or Zoom", body: "Hands-on building with the tools your team will actually use." },
  { num: "03", title: "Materials handoff", price: "Yours to keep", body: "Playbooks, prompts, and a recording your team can rewatch." },
];

const tracks = [
  { t: "Automation and agents", d: "How to wire AI into the work that's actually leaking hours.", featured: true },
  { t: "Writing with AI", d: "Replies, proposals, and posts in your voice — not the default voice." },
  { t: "Research and analysis", d: "Use AI to read documents and pull out what matters." },
  { t: "Customer conversations", d: "Inbound triage, FAQ answers, and respectful follow-up." },
  { t: "Operations and admin", d: "Cleanups, summaries, and the small jobs nobody wants." },
  { t: "Lead generation with AI", d: "Find the right contacts, write the openers, and follow up without going cold." },
];

const quotes = [
  { q: "We measure outcomes, not attendance.", a: "Every workshop ends with something your team built." },
  { q: "We cover automation, not just chat.", a: "Agents and workflows, not yet another ChatGPT 101." },
  { q: "The trainer is also the builder.", a: "I build this stuff for clients. I teach what actually works in production." },
];

const tiers = [
  { name: "Single workshop", price: "$2,250", body: "One 3 hour live session for a small team. ($750/hr)", items: ["Up to 10 people", "Materials handed off", "30 day Q&A window"] },
  { name: "Half day deep dive", price: "$3,750", body: "A focused 5 hour build session on one workflow. ($750/hr)", items: ["Up to 15 people", "We ship one tool together", "Recording + playbook"], featured: true },
  { name: "Four session team curriculum", price: "$9,000", body: "A four week program for a whole team.", items: ["4 live sessions", "Ongoing Slack support", "Team certification packet"] },
];

const Training = () => {
  useEffect(() => {
    document.title = "AI Training for Small Teams | Ardent Studio";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "In-person and virtual AI workshops for small business teams in South Florida.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

  return (
    <>
      <Nav />
      <main>
        <section className="px-5 md:px-10 pt-[160px] pb-[120px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">Training</span>
            <h1 className="text-[clamp(40px,6vw,72px)] leading-[1.05] mb-6 max-w-[20ch] text-ardent-paper" style={{ fontFamily: serif }}>
              Skip the AI 101. Build something today.
            </h1>
            <p className="text-[18px] leading-[1.65] max-w-[640px] text-ardent-paper/75 mb-10">
              In-person and virtual workshops for small teams in South Florida. We build something real together — your team leaves with a tool, not a slide deck.
            </p>
            <a href="/#book-a-call" className="inline-block px-8 py-4 text-[14px] rounded-full" style={{ background: "#FF6B6B", color: "#0D0D0D" }}>
              Book a free discovery call
            </a>
          </div>
        </section>

        <section className="px-5 md:px-10 py-16" style={{ background: "#171311" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-8">Past workshops</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/images/ef-shanghai-2024.jpg", caption: "EF Keynote · Shanghai" },
                { src: "/images/shrm23-audience.jpg", caption: "SHRM23 · Las Vegas" },
                { src: "/images/shrm23-stage.jpg", caption: "SHRM23 · Las Vegas" },
              ].map((p) => (
                <figure key={p.src}>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-ardent-ink">
                    <img src={p.src} alt={p.caption} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <figcaption className="font-mono text-[10px] tracking-[0.25em] uppercase text-ardent-paper/60 mt-3">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 py-[120px]" style={{ background: "#F7F3EC" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-ink block mb-6">Format</span>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-12 text-ardent-studio" style={{ fontFamily: serif }}>
              Three steps, no fluff.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {format.map((f) => (
                <div key={f.num} className="border border-ardent-studio/15 p-7 bg-white/40">
                  <span className="text-[40px] font-light leading-none" style={{ fontFamily: serif, color: "#B8862A" }}>{f.num}</span>
                  <h3 className="text-[22px] mt-4 text-ardent-studio" style={{ fontFamily: serif }}>{f.title}</h3>
                  <span className="italic block mb-3" style={{ fontFamily: serif, color: "#B8862A" }}>{f.price}</span>
                  <p className="text-[14px] leading-[1.6] text-ardent-studio/70">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 py-[120px]" style={{ background: "#171311" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">What we cover</span>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-12 text-ardent-paper" style={{ fontFamily: serif }}>
              Six tracks. Pick the ones that fit your team.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((t) => (
                <div key={t.t} className={`p-7 border ${t.featured ? "border-ardent-lime/60 bg-ardent-lime/5" : "border-ardent-paper/10"}`} style={{ background: t.featured ? undefined : "#1A1614" }}>
                  {t.featured && (
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-lime block mb-3">Differentiator</span>
                  )}
                  <h3 className="text-[22px] mb-3 text-ardent-paper" style={{ fontFamily: serif }}>{t.t}</h3>
                  <p className="text-[14px] leading-[1.6] text-ardent-paper/70">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 py-[120px]" style={{ background: "#F7F3EC" }}>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {quotes.map((q) => (
              <div key={q.q}>
                <p className="text-[24px] leading-[1.3] mb-4 text-ardent-studio" style={{ fontFamily: serif }}>
                  "{q.q}"
                </p>
                <p className="text-[14px] text-ardent-studio/70 leading-[1.6]">{q.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 md:px-10 py-[120px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">Pricing</span>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-12 text-ardent-paper" style={{ fontFamily: serif }}>
              Transparent. Fixed.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div key={tier.name} className={`p-8 border ${tier.featured ? "border-ardent-mint" : "border-ardent-paper/15"}`} style={{ background: "#171311" }}>
                  <h3 className="text-[22px] mb-2 text-ardent-paper" style={{ fontFamily: serif }}>{tier.name}</h3>
                  <p className="text-[36px] mb-4" style={{ fontFamily: serif, color: "#C8A24D" }}>{tier.price}</p>
                  <p className="text-[14px] text-ardent-paper/70 mb-6">{tier.body}</p>
                  <ul className="space-y-2 mb-8">
                    {tier.items.map((i) => (
                      <li key={i} className="text-[14px] text-ardent-paper/80 flex gap-2">
                        <span className="text-ardent-lime">+</span>{i}
                      </li>
                    ))}
                  </ul>
                  <a href="/#book-a-call" className="inline-block px-6 py-3 text-[13px] rounded-full" style={{ background: tier.featured ? "#C3F73A" : "transparent", color: tier.featured ? "#0D0D0D" : "#F7F3EC", border: tier.featured ? "none" : "1px solid rgba(247,243,236,0.3)" }}>
                    Start here
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Training;
