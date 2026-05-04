import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TypingHeadline from "@/components/TypingHeadline";

const serif = "'Georgia', 'Cormorant Garamond', serif";

const META_TITLE = "AI Automation for Small Business — Ardent Studio (Palm Beach County, FL)";
const META_DESC =
  "Custom AI automation that fits how your small business already works. Built with Make.com and Anthropic Claude. Most clients save 5+ hours per week within 30 days. Palm Beach County, FL — and remote.";

const featuredBuilds = [
  {
    name: "Cold outreach engine",
    desc: "A drafting and sending system that finds the right contacts and writes openers in your voice.",
    stack: "Python · Make · Claude · Gmail",
  },
  {
    name: "Inbound reply drafter",
    desc: "Reads new emails as they hit the inbox and drafts a thoughtful reply for the owner to approve.",
    stack: "Gmail · Claude · Make · Slack",
  },
  {
    name: "Sartori operations stack",
    desc: "The internal tooling that runs Sartori day to day — billing, ops alerts, and analytics.",
    stack: "Stripe · Supabase · Slack · Make",
  },
];

const method = [
  { letter: "A", word: "AUDIT", desc: "Map where the week actually leaks hours." },
  { letter: "R", word: "REDUCE", desc: "Pick one leak. Build for that one first." },
  { letter: "D", word: "DEMO", desc: "Build the tool in front of you. No black box." },
  { letter: "E", word: "EVALUATE", desc: "Two weeks in, count the actual hours saved." },
  { letter: "N", word: "NORMALIZE", desc: "Wire it into the systems your team already uses." },
  { letter: "T", word: "TRANSFER", desc: "Your team owns it. We hand off and step out." },
];

const workflows = [
  { title: "Inbound email triage", desc: "Drafts replies as new emails arrive, routes the rest to the right person." },
  { title: "Cold outreach", desc: "Finds the right contacts, writes personalized openers, follows up automatically." },
  { title: "Content drafting", desc: "LinkedIn posts, newsletters, and proposals written in your voice." },
  { title: "Quote and proposal generation", desc: "Pulls from past quotes and your pricing logic to draft the next one." },
  { title: "Customer support", desc: "Matches incoming questions to past answers, escalates the rest." },
  { title: "Scheduling and intake", desc: "Reads form submissions, books the call, sends the prep doc." },
  { title: "Reporting and alerts", desc: "Weekly summary emails of what's running, what broke, what to do next." },
  { title: "Document extraction", desc: "Forms, invoices, contracts → structured data in your CRM." },
];

const AIAutomation = () => {
  useEffect(() => {
    document.title = META_TITLE;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", META_DESC);

    const faqId = "faq-jsonld-aiautomation";
    if (!document.getElementById(faqId)) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = faqId;
      s.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://ardentstudio.io/services/ai-automation#faq",
        mainEntity: [
          { "@type": "Question", name: "What does an AI automation project cost?", acceptedAnswer: { "@type": "Answer", text: "Most automation builds run $2,000 to $10,000 over 2 to 4 weeks, fixed price and fixed timeline. Larger custom builds are scoped separately. Every project starts with a free 30-minute scope call." } },
          { "@type": "Question", name: "How long does a typical project take?", acceptedAnswer: { "@type": "Answer", text: "Most automation builds ship in 2 to 4 weeks. We don't take on projects we can't deliver in 4 weeks; if it's bigger, we scope it as multiple phases." } },
          { "@type": "Question", name: "What AI tools do you use?", acceptedAnswer: { "@type": "Answer", text: "We build with Anthropic Claude and Make.com as our primary stack. We chose Claude for its long context handling, reliable structured output, and voice-matching for client-facing writing." } },
          { "@type": "Question", name: "Who do you work with?", acceptedAnswer: { "@type": "Answer", text: "Local service businesses, professional services (attorneys, accountants, consultants), trades and home services, and founder-stage AI products. We focus on small businesses and small teams, not enterprise." } },
        ],
      });
      document.head.appendChild(s);
    }
    return () => {
      document.getElementById(faqId)?.remove();
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        {/* 1. HERO */}
        <section className="relative min-h-screen flex items-center bg-ardent-studio overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #C3F73A 1px, transparent 1px), linear-gradient(to bottom, #C3F73A 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
            <div className="flex items-center gap-4 mb-10">
              <span className="block w-12 h-px bg-ardent-lime" />
              <span className="font-mono text-xs tracking-[0.2em] text-ardent-lime uppercase">
                AI Automation for Small Business
              </span>
            </div>
            <TypingHeadline />
            <p className="mt-10 max-w-2xl font-sans text-lg lg:text-xl text-ardent-paper/80 leading-relaxed">
              We build custom AI automation that fits how your team already works — using Make.com, Anthropic
              Claude, and the tools you're already in. Most clients save 5+ hours per week within the first 30
              days.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#book-a-call"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ardent-coral text-ardent-studio font-sans font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Book a free 30-min call →
              </a>
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 px-8 py-4 border border-ardent-paper/30 text-ardent-paper font-sans font-semibold rounded-full hover:border-ardent-paper transition-colors"
              >
                See recent builds
              </Link>
            </div>
          </div>
        </section>

        {/* 2. WORKFLOWS */}
        <section className="px-5 md:px-10 py-[88px] md:py-[140px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
              Workflows we automate
            </span>
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-14 max-w-[26ch] text-ardent-paper"
              style={{ fontFamily: serif }}
            >
              What does AI automation actually look like for a small business?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ardent-paper/10">
              {workflows.map((w) => (
                <div key={w.title} className="p-7 min-h-[180px]" style={{ background: "#1A1614" }}>
                  <h3 className="text-[20px] mb-3 text-ardent-paper" style={{ fontFamily: serif }}>
                    {w.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-ardent-paper/65">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ARDENT METHOD */}
        <section className="px-5 md:px-10 py-[88px] md:py-[140px]" style={{ background: "#F7F3EC" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-ink block mb-6">
              How we work
            </span>
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-4 text-ardent-studio"
              style={{ fontFamily: serif }}
            >
              The ARDENT method.
            </h2>
            <p className="text-[16px] text-ardent-studio/75 leading-[1.7] mb-14 max-w-[60ch]">
              Six steps from your first call to a tool your team owns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {method.map((m) => (
                <div key={m.letter} className="border border-ardent-ink/15 bg-white/40 p-7">
                  <div
                    className="text-[64px] leading-none mb-3 text-ardent-coral"
                    style={{ fontFamily: serif }}
                  >
                    {m.letter}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-ink mb-3">
                    {m.word}
                  </div>
                  <p className="text-[15px] leading-[1.7] text-ardent-studio/80">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PRICING SIGNAL */}
        <section className="px-5 md:px-10 py-14" style={{ background: "#F7F3EC" }}>
          <div className="max-w-[900px] mx-auto text-center">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-ink block mb-4">
              Investment
            </span>
            <p
              className="text-[clamp(20px,2.6vw,28px)] leading-[1.3] text-ardent-studio mb-3"
              style={{ fontFamily: serif }}
            >
              Most projects: $2,000–$10,000, 2–4 weeks. Fixed price. Fixed timeline. Your team owns the result.
            </p>
            <p className="text-[14px] text-ardent-studio/70">
              Need something bigger? We scope custom builds too.
            </p>
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="px-5 md:px-10 py-[88px] md:py-[140px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-[800px] mx-auto text-center">
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-6 text-ardent-paper"
              style={{ fontFamily: serif }}
            >
              Ready to see where AI fits in your week?
            </h2>
            <p className="text-[16px] md:text-[18px] text-ardent-paper/75 leading-[1.7] mb-10 max-w-[60ch] mx-auto">
              Book a free 30-minute call. We'll map your top time leaks and tell you which one is worth
              automating first.
            </p>
            <a
              href="#book-a-call"
              className="inline-flex items-center gap-2 px-10 py-5 bg-ardent-coral text-ardent-studio font-sans font-semibold rounded-full hover:opacity-90 transition-opacity text-[16px]"
            >
              Book a free 30-min call →
            </a>
          </div>
        </section>
      </main>
      <div id="book-a-call" />
      <Footer />
    </>
  );
};

export default AIAutomation;
