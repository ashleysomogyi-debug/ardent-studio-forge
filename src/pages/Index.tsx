import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";

const serif = "'Georgia', 'Cormorant Garamond', serif";

const offerings = [
  {
    title: "Look around the corner with me",
    body: "A free 60–90 minute AI fit call. We sit down (in person or on Zoom), I look at how you actually run your week, and I tell you honestly where AI fits and where it doesn't.",
    included: ["A 60–90 minute working session", "A short written follow-up", "Honest yes or no on whether to build"],
    notIncluded: ["A sales pitch", "A 40-page deck"],
    cta: { label: "Book the fit call", href: "#book-a-call" },
  },
  {
    title: "Build the small thing",
    body: "We pick one specific AI tool that saves you real hours and I build it in 2–4 weeks at a fixed price. Scoped tightly so it actually ships.",
    included: ["Fixed scope and fixed price", "Built in 2–4 weeks", "You own the code and the accounts"],
    notIncluded: ["A 6 month roadmap", "Retainers you don't need"],
    cta: { label: "Start a build", href: "#book-a-call" },
  },
  {
    title: "Train your team",
    body: "In-person and virtual workshops for small teams who want to actually use AI in their day, not just hear about it.",
    included: ["Hands-on practice with real tools", "Materials your team keeps", "Follow-up Q&A window"],
    notIncluded: ["Generic ChatGPT 101", "Death by PowerPoint"],
    cta: { label: "See training", href: "/training", isLink: true },
  },
  {
    title: "Teach you to keep going",
    body: "Every build ends with a handoff session. I walk you through how it works, how to tweak it, and how to know when something breaks.",
    included: ["Live walkthrough recording", "A short ops guide", "30 days of email support"],
    notIncluded: ["Mandatory monthly retainer", "Handoff to a junior"],
    cta: { label: "How handoff works", href: "#process" },
  },
];

const processSteps = [
  {
    num: "01",
    title: "Scope call",
    you: "Tell me where the week is leaking hours.",
    me: "Ask the boring questions and write down what success looks like.",
  },
  {
    num: "02",
    title: "Proposal in 24 hours",
    you: "Read it, ask anything, say yes or no.",
    me: "Send a fixed scope, fixed price, and a real timeline within a day.",
  },
  {
    num: "03",
    title: "Build over 2 to 4 weeks",
    you: "Look at progress every few days and tell me what feels off.",
    me: "Build in short loops and share what I'm working on as I go.",
  },
  {
    num: "04",
    title: "Handoff",
    you: "Sit through the walkthrough and start using it.",
    me: "Hand over the code, the accounts, and a guide you can actually follow.",
  },
];

const spaces = [
  { name: "Professional services", note: "Attorneys, accountants, consultants." },
  { name: "Service businesses", note: "Cleaners, salons, studios, clinics." },
  { name: "Trades and home services", note: "HVAC, plumbing, roofing, electrical." },
  { name: "Founder stage AI products", note: "Early stage tools shipping fast." },
];

const builds = [
  {
    name: "Cold outreach engine",
    desc: "A drafting and sending system that finds the right contacts and writes openers in your voice.",
    stack: "Clay · GPT · Instantly · custom Postgres",
  },
  {
    name: "Inbound reply drafter",
    desc: "Reads new emails as they hit the inbox and drafts a thoughtful reply for the owner to approve.",
    stack: "Gmail API · GPT · Make · Notion",
  },
  {
    name: "LinkedIn content drafter",
    desc: "Pulls from your week and drafts five post options every Monday in your tone.",
    stack: "GPT · Notion · scheduled jobs",
  },
  {
    name: "Sartori AI",
    desc: "Featured. A full product we designed, built, and ship as the operating layer for AI search.",
    stack: "Next.js · GPT · Postgres · custom infra",
    featured: true,
  },
  {
    name: "Sartori operations stack",
    desc: "The internal tooling that runs Sartori day to day — billing, ops alerts, and analytics.",
    stack: "Stripe · Supabase · Slack · custom dashboards",
  },
];

const fieldNotes = [
  { tag: "PLAYBOOK", title: "Where AI actually saves a service business hours", date: "Coming soon" },
  { tag: "ESSAY", title: "Why I scope tighter than most builders", date: "Coming soon" },
  { tag: "FIELD NOTE", title: "Three replies a week that don't need you anymore", date: "Coming soon" },
];

const Section = ({ bg, children, id }: { bg: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className="px-5 md:px-10 py-[88px] md:py-[140px]" style={{ background: bg }}>
    <div className="max-w-[1200px] mx-auto">{children}</div>
  </section>
);

const OfferingCard = ({ o }: { o: typeof offerings[number] }) => (
  <div className="border border-ardent-ink/15 bg-white/40 p-7 md:p-9 flex flex-col">
    <h3 className="italic text-[26px] md:text-[30px] leading-[1.15] mb-4" style={{ fontFamily: serif, color: "#B8862A" }}>
      {o.title}
    </h3>
    <p className="text-[15px] leading-[1.7] text-ardent-studio/80 mb-6">{o.body}</p>
    <div className="space-y-4 mb-6">
      <div>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-ink">Included</span>
        <ul className="mt-2 space-y-1.5">
          {o.included.map((i) => (
            <li key={i} className="text-[14px] text-ardent-studio/85 flex gap-2">
              <span className="text-ardent-ink">+</span>
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-studio/50">Not included</span>
        <ul className="mt-2 space-y-1.5">
          {o.notIncluded.map((i) => (
            <li key={i} className="text-[14px] text-ardent-studio/55 flex gap-2">
              <span>—</span>
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="mt-auto pt-2">
      {o.cta.isLink ? (
        <Link to={o.cta.href} className="font-mono text-[11px] tracking-[0.2em] uppercase text-ardent-ink hover:opacity-70">
          {o.cta.label} →
        </Link>
      ) : (
        <a href={o.cta.href} className="font-mono text-[11px] tracking-[0.2em] uppercase text-ardent-ink hover:opacity-70">
          {o.cta.label} →
        </a>
      )}
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      <Nav />
      <main>
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. OFFERINGS — cream */}
        <Section bg="#F7F3EC">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
            How we serve businesses
          </span>
          <h2
            className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-14 max-w-[20ch] text-ardent-studio"
            style={{ fontFamily: serif }}
          >
            Four ways we work together.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((o) => (
              <OfferingCard key={o.title} o={o} />
            ))}
          </div>
        </Section>

        {/* 3. PROCESS — dark */}
        <Section bg="#0D0D0D" id="process">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
            What working with us looks like
          </span>
          <h2
            className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-14 max-w-[20ch] text-ardent-paper"
            style={{ fontFamily: serif }}
          >
            From first call to handoff in four steps.
          </h2>
          <div className="space-y-px bg-ardent-paper/10">
            {processSteps.map((s) => (
              <div
                key={s.num}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] gap-6 md:gap-10 py-8 md:py-10 px-2 md:px-4"
                style={{ background: "#0D0D0D" }}
              >
                <div className="text-[40px] md:text-[48px] font-light leading-none" style={{ fontFamily: serif, color: "#C8A24D" }}>
                  {s.num}
                </div>
                <div>
                  <h3 className="text-[22px] md:text-[26px] font-normal text-ardent-paper" style={{ fontFamily: serif }}>
                    {s.title}
                  </h3>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-lime block mb-2">You do</span>
                  <p className="text-[15px] leading-[1.6] text-ardent-paper/75">{s.you}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-lime block mb-2">I do</span>
                  <p className="text-[15px] leading-[1.6] text-ardent-paper/75">{s.me}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. SPACES + RECENT BUILDS — charcoal */}
        <Section bg="#171311" id="work">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
            Building in spaces that matter
          </span>
          <h2
            className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-12 max-w-[22ch] text-ardent-paper"
            style={{ fontFamily: serif }}
          >
            Where we focus.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ardent-paper/10 mb-24">
            {spaces.map((s) => (
              <div key={s.name} className="p-8 min-h-[200px] flex flex-col justify-between" style={{ background: "#1A1614" }}>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-lime">Focus</span>
                <div>
                  <h3 className="text-[22px] leading-[1.2] mb-2 text-ardent-paper" style={{ fontFamily: serif }}>
                    {s.name}
                  </h3>
                  <p className="text-[13px] text-ardent-paper/60">{s.note}</p>
                </div>
              </div>
            ))}
          </div>

          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
            Recent builds
          </span>
          <h3
            className="text-[clamp(26px,4vw,40px)] leading-[1.15] font-normal mb-10 text-ardent-paper"
            style={{ fontFamily: serif }}
          >
            Real systems, shipped.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((b) => (
              <div
                key={b.name}
                className={`p-7 border ${b.featured ? "border-ardent-coral/70" : "border-ardent-paper/10"} flex flex-col`}
                style={{ background: "#1A1614" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${b.featured ? "text-ardent-coral" : "text-ardent-lime"}`}>
                    {b.featured ? "Featured" : "Build"}
                  </span>
                  <span className={`font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 border ${b.featured ? "border-ardent-coral/50 text-ardent-coral" : "border-ardent-lime/40 text-ardent-lime"}`}>
                    Status Live
                  </span>
                </div>
                <h4 className="text-[22px] mb-3 text-ardent-paper" style={{ fontFamily: serif }}>{b.name}</h4>
                <p className="text-[14px] leading-[1.6] text-ardent-paper/70 mb-4">{b.desc}</p>
                <p className="italic text-[13px] mt-auto" style={{ fontFamily: serif, color: "#C8A24D" }}>
                  {b.stack}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. FIELD NOTES — cream */}
        <Section bg="#F7F3EC">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
            Field notes
          </span>
          <h2
            className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-12 max-w-[22ch] text-ardent-studio"
            style={{ fontFamily: serif }}
          >
            What I'm learning out loud.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {fieldNotes.map((p) => (
              <div key={p.title} className="border border-ardent-studio/15 p-7 bg-white/30">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-lime mb-4 block">{p.tag}</span>
                <h3 className="text-[22px] leading-[1.25] text-ardent-studio mb-6" style={{ fontFamily: serif }}>
                  {p.title}
                </h3>
                <span className="font-mono text-[11px] text-ardent-studio/50">{p.date}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-ardent-studio/15 pt-12">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-3">
              Build it yourself toolkit
            </span>
            <h3 className="text-[clamp(24px,3vw,32px)] mb-4 text-ardent-studio" style={{ fontFamily: serif }}>
              A short email when I write something worth keeping.
            </h3>
            <p className="text-[15px] text-ardent-studio/70 mb-6 max-w-[520px]">
              No noise, no funnel. Just the playbooks and tools I'd hand to a friend running a small business.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-[520px]"
            >
              <input
                type="email"
                required
                placeholder="you@yourbusiness.com"
                className="flex-1 px-4 py-3 border border-ardent-studio/25 bg-white text-ardent-studio text-[14px] focus:outline-none focus:border-ardent-lime"
              />
              <button
                type="submit"
                className="px-6 py-3 text-[13px] font-medium rounded-none transition-opacity hover:opacity-90"
                style={{ background: "#B8862A", color: "#F7F3EC" }}
              >
                Send me the toolkit
              </button>
            </form>
          </div>
        </Section>

        {/* 6. WHY I BUILT THIS — dark */}
        <Section bg="#0D0D0D">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
            Why I built this
          </span>
          <h2
            className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-14 max-w-[20ch] text-ardent-paper"
            style={{ fontFamily: serif }}
          >
            I help local businesses get a few hours of their week back.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 items-start mb-24">
            <img
              src="/ashley-profile.jpg"
              alt="Ashley Somogyi, founder of Ardent Studio"
              width={640}
              height={640}
              loading="lazy"
              className="w-full max-w-[320px] aspect-square object-cover"
            />
            <div className="space-y-5 text-[16px] leading-[1.75] text-ardent-paper/80">
              <p>
                I'm Ashley. I run Ardent Studio out of Palm Beach County. I figure out where small AI tools fit in your day, and I build them.
              </p>
              <p>
                I started Ardent because I watched too many local business owners get stuck between agencies that overpromise and tools that don't quite fit. They didn't need a transformation. They needed someone to sit at the table and figure out what would actually save them a few hours a week.
              </p>
              <p>
                I'm a builder. I work in person when I can, on Zoom when I can't, and I build the tool while we talk. No account managers, no slide decks, no surprise invoices.
              </p>
              <p>
                If we work together, you're working with me. That's the whole pitch.
              </p>
            </div>
          </div>

          <div className="border-t border-ardent-paper/10 pt-14">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-10">
              Behind Ardent
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[600px]">
              {[
              { src: "/wesley-profile.jpg", name: "Wesley Price", role: "Strategy and Ops" },
              { src: "/loki-willow-chairs.jpg", name: "Loki & Willow", role: "Studio mascots" },
              ].map((m) => (
                <div key={m.name} className="flex flex-col items-center text-center">
                  <img
                    src={m.src}
                    alt={m.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-40 h-40 rounded-full object-cover mb-4 border-2 border-ardent-lime/30"
                  />
                  <h3 className="text-[20px] text-ardent-paper" style={{ fontFamily: serif }}>{m.name}</h3>
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-ardent-lime mt-1">
                    {m.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <div id="book-a-call" />
      <Footer />
    </>
  );
};

export default Index;
