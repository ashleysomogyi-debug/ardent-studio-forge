import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DotSphere from "@/components/DotSphere";
import CTASection from "@/components/CTASection";

const serif = "'Inter', system-ui, sans-serif";

const format = [
  { num: "01", title: "15-min discovery", price: "Free", body: "We map what your team already does and where AI fits." },
  { num: "02", title: "Live workshop", price: "3 hours or 5 hours", body: "On site or on Zoom." },
  { num: "03", title: "Materials handoff", price: "Yours to keep", body: "Playbooks, prompts, and a recording your team can rewatch." },
];

const tracks = [
  { t: "Build your first agent", d: "Pick a workflow that is leaking hours. Leave with a working tool that handles it for you.", featured: true },
  { t: "Answer customers faster", d: "Set up drafted replies, FAQ answers and follow-ups in your own voice." },
  { t: "Turn documents into decisions", d: "Contracts, reports and spreadsheets get read and summarized so you get the point in minutes." },
  { t: "Write proposals and quotes in an afternoon", d: "Your past work becomes reusable templates and drafts." },
  { t: "Run the back office on autopilot", d: "Scheduling, invoice reminders, reporting and the admin nobody wants to do." },
  { t: "Keep the pipeline moving", d: "Lead follow-up and outreach that goes out on schedule." },
];

const quotes = [
  { q: "We measure outcomes, not attendance.", a: "Every workshop ends with something your team built." },
  { q: "We cover automation, not just chat.", a: "Agents and workflows, not yet another ChatGPT 101." },
  { q: "We build this stuff for clients, and we teach what actually works in production.", a: "Your team learns from real builds." },
];

const tiers = [
  { name: "3 hour workshop", body: "One live session for a small team.", items: ["Up to 10 people", "Materials handed off", "30 day Q&A window"], interest: "single-workshop" },
  { name: "5 hour half day", body: "A focused build session on one workflow.", items: ["Up to 15 people", "We ship one tool together", "Recording + playbook"], featured: true, interest: "half-day-deep-dive" },
  { name: "Four session program", body: "A program over four sessions, quoted for your team.", items: ["4 live sessions", "Ongoing Slack support", "Custom prompt + scenario library built around your team's workflows"], interest: "four-session-curriculum" },
];
const accentPills = ["bg-teal-bright", "bg-ardent-lime", "bg-coral", "bg-peach"];
const workshopPills = ["bg-ardent-lime", "bg-coral", "bg-peach"];

const Training = () => {
  useEffect(() => {
    document.title = "AI Training for Your Team | Ardent Studio";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "In-person and virtual AI workshops for teams of any kind. Build a real tool together.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-blush px-5 pb-12 pt-20 md:px-10 md:pb-20 md:pt-24">
          <DotSphere />
          <div className="relative max-w-[1100px] mx-auto" style={{ zIndex: 1 }}>
            <span className="section-eyebrow mb-6">Training</span>
            <h1 className="text-[clamp(40px,6vw,72px)] leading-[1.05] mb-6 max-w-[20ch] text-foreground" style={{ fontFamily: serif }}>
              Skip the AI 101. Build something today.
            </h1>
            <p className="text-[18px] leading-[1.65] max-w-[640px] text-body-text mb-6 md:mb-10">
              In-person and virtual workshops for teams of any kind. We build something real together, so your team leaves with a tool, not a slide deck.
            </p>
            <a href="https://calendly.com/asomogyi-ardentstudio/30min" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-7 py-3 md:inline-block md:px-8 md:py-4 text-[16px] rounded-full" style={{ background: "#C3F73A", color: "#0D0D0D" }}>
              Book a free 15-min call
            </a>
          </div>
        </section>

        <section className="bg-footer-bg px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="taught-heading">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-5 md:mb-9 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-coral" aria-hidden="true" />
              <h2 id="taught-heading" className="text-[clamp(30px,4vw,44px)] font-semibold text-dark-band-text">Where we have taught</h2>
            </div>
            <div className="mobile-rail grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              {[
                { src: "/images/ef-shanghai-2024.jpg", caption: "EF Keynote · Shanghai" },
                { src: "/images/shrm23-audience.jpg", caption: "SHRM · Las Vegas" },
                { src: "/images/ashley-lederne-speaking.jpg", caption: "Training · Denmark" },
              ].map((p, i) => (
                <figure key={p.src}>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-ardent-ink">
                    <img src={p.src} alt={p.caption} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <figcaption className={`mt-3 md:mt-4 inline-flex w-fit items-center justify-center text-center rounded-full px-4 py-2.5 font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-ardent-studio ${workshopPills[i]}`}>
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
          <div className="max-w-[1100px] mx-auto">
            <span className="section-eyebrow mb-6">Format</span>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-7 md:mb-10 text-ardent-studio" style={{ fontFamily: serif }}>
              Three steps, no fluff.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              {format.map((f, i) => (
                <div key={f.num} className="workshop-card grid grid-cols-[32px_1fr] gap-x-3 p-4 md:block md:p-7">
                  <span className={`row-span-3 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full font-mono text-base text-ardent-studio ${accentPills[i]}`}>{f.num}</span>
                  <h3 className="text-[20px] md:text-[22px] md:mt-4 max-md:leading-tight text-ardent-studio" style={{ fontFamily: serif }}>{f.title}</h3>
                  <span className="font-mono text-[13px] block mb-1 md:mb-3" style={{ fontFamily: serif, color: "#0A7D7B" }}>{f.price}</span>
                  <p className="text-[16px] leading-[1.5] md:leading-[1.6] text-ardent-studio/70">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pt-12 md:px-10 md:pt-[72px]" style={{ background: "#F5F5F0" }}>
          <div className="max-w-[1100px] mx-auto">
            <div className="workshop-card p-5 md:px-12 md:py-12">
              <span className="section-eyebrow mb-5">Signature workshop</span>
              <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.05] mb-6 text-foreground" style={{ fontFamily: serif }}>
                Build your first agent.
              </h2>
              <p className="text-[17px] leading-[1.6] md:leading-[1.65] text-body-text max-w-[68ch] mb-5 md:mb-8">
                A 5-hour hands-on session where your team leaves with a working AI agent that handles a real workflow. Pick the inbox triage problem, the outreach problem, or the proposal-drafting problem. We build the tool together, in the room, and you leave with it running.
              </p>
              <p className="text-[16px] leading-[1.6] md:leading-[1.65] text-body-text max-w-[68ch] mb-5 md:mb-8">
                Taught on the tools your team already has, whether that's ChatGPT, Claude or Microsoft Copilot.
              </p>
              <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-primary mb-5 md:mb-8">
                5 HOURS, UP TO 15 PEOPLE, IN PERSON OR VIRTUAL
              </p>
              <a href="https://calendly.com/asomogyi-ardentstudio/30min" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-7 py-3 md:inline-block md:px-8 md:py-4 text-[16px] rounded-full" style={{ background: "#C3F73A", color: "#0D0D0D" }}>
                Book the agent workshop
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-10 md:py-[72px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="section-eyebrow mb-6">What we cover</span>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-7 md:mb-10" style={{ fontFamily: serif, color: "#F5F5F0" }}>
              Six tracks. Pick the ones that fit your team.
            </h2>
            <div className="mobile-rail grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {tracks.map((t) => (
                <div key={t.t} className="workshop-card p-4 md:p-7">
                  {t.featured && (
                    <span className="mb-2 md:mb-3 inline-flex items-center justify-center text-center rounded-full bg-ardent-lime px-3 py-1.5 md:py-2 font-mono text-[13px] uppercase tracking-[0.2em] text-ardent-studio">Differentiator</span>
                  )}
                  <h3 className="text-[20px] md:text-[22px] mb-1 md:mb-3 max-md:leading-tight text-foreground" style={{ fontFamily: serif }}>{t.t}</h3>
                  <p className="text-[16px] leading-[1.5] md:leading-[1.6] text-body-text">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-10 md:py-[72px]" style={{ background: "#F5F5F0" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="section-eyebrow mb-6">Why Claude</span>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-7 md:mb-10 text-ardent-studio" style={{ fontFamily: serif }}>
              We teach the stack we ship.
            </h2>
            <div className="max-w-3xl space-y-3 md:space-y-5">
              <p className="text-[16px] leading-[1.75] text-ardent-studio/80">
                Most AI training tries to cover every model. We don't. We teach Claude, Anthropic's model, because it's what we use to build production tools for our clients.
              </p>
              <p className="text-[16px] leading-[1.75] text-ardent-studio/80">
                Your team leaves a workshop able to actually use what they learned, not a survey of options. We include a 30-minute landscape lesson covering when you'd reach for ChatGPT or Gemini instead, but the rest of every workshop is Claude-first, hands-on.
              </p>
              <p className="text-[16px] leading-[1.7] text-ardent-studio/65" style={{ fontFamily: serif }}>
                Depth over breadth. That's the choice.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {quotes.map((q) => (
              <div key={q.q}>
                <p className="text-[21px] md:text-[24px] leading-[1.3] mb-2 md:mb-4 text-ardent-studio" style={{ fontFamily: serif }}>
                  "{q.q}"
                </p>
                <p className="text-[16px] text-ardent-studio/70 leading-[1.6]">{q.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-12 md:px-10 md:py-[72px]" style={{ background: "#F5F5F0" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="section-eyebrow mb-6">Pricing</span>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-7 md:mb-10 text-foreground" style={{ fontFamily: serif }}>
              Fixed price, quoted for your team.
            </h2>
            <div className="mobile-rail grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              {tiers.map((tier, i) => (
                <div key={tier.name} className="workshop-card p-4 md:p-8">
                  <span className={`mb-3 md:mb-5 inline-flex items-center justify-center text-center rounded-full px-4 py-2 md:py-2.5 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-ardent-studio ${accentPills[i]}`}>Quoted for your team on a free call</span>
                  <h3 className="text-[20px] md:text-[22px] mb-1 md:mb-2 text-foreground" style={{ fontFamily: serif }}>{tier.name}</h3>
                  <p className="text-[16px] text-body-text mb-3 md:mb-6">{tier.body}</p>
                  <ul className="space-y-1 md:space-y-2 mb-4 md:mb-8">
                    {tier.items.map((i) => (
                      <li key={i} className="text-[16px] text-body-text flex gap-2">
                        <span className="text-primary">+</span>{i}
                      </li>
                    ))}
                  </ul>
                  <a href="https://calendly.com/asomogyi-ardentstudio/30min" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-6 py-2.5 md:inline-block md:py-3 text-[16px] rounded-full" style={{ background: tier.featured ? "#C3F73A": "transparent", color: "#0D0D0D", border: tier.featured ? "none": "1px solid #0D0D0D" }}>
                    Get a quote in 15 minutes
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-10 md:py-[72px] bg-background">
          <div className="mx-auto max-w-[1100px] rounded-3xl border-2 border-dashed border-coral bg-card p-5 md:p-10">
            <h2 className="text-[clamp(28px,4vw,44px)] text-foreground mb-3 md:mb-5">Keynotes and talks</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed mb-5 md:mb-7 max-w-[60ch]">We also speak at conferences and business events. Ask us about a keynote or a talk for your group.</p>
            <a href="/contact" className="inline-flex min-h-11 items-center px-7 py-3 text-[16px] bg-secondary text-secondary-foreground font-semibold rounded-full">Ask about a talk</a>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Training;
