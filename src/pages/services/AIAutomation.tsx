import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TypingHeadline from "@/components/TypingHeadline";
import heroSpeakingPhoto from "@/assets/photos/automation-workshop.png.asset.json";

const serif = "'Inter', system-ui, sans-serif";

const META_TITLE = "AI Automation and Apps for Your Team | Ardent Studio";
const META_DESC =
  "Custom AI automation that fits how your team already works. Fixed-scope builds, based in Palm Beach County and available remotely.";

const featuredBuilds = [
  {
    name: "Cold outreach engine",
    desc: "A drafting and sending system that finds the right contacts and writes openers in your voice.",
    stack: "Python · Claude · Gmail",
  },
  {
    name: "Inbound reply drafter",
    desc: "Reads new emails as they hit the inbox and drafts a thoughtful reply for the owner to approve.",
    stack: "Gmail · Claude · Slack",
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

const workflows: { title: string; desc: string; wide?: boolean }[] = [
  { title: "Lead follow-up in minutes", desc: "Every inquiry gets a reply day or night: before the prospect calls the next name on the list." },
  { title: "Inbound email triage", desc: "Drafts replies as new emails arrive, routes the rest to the right person." },
  { title: "Invoice chasing", desc: "Reminders matched to each customer's payment history, so you get paid without the awkward email." },
  { title: "Quote and proposal generation", desc: "Pulls from past quotes and your pricing logic to draft the next one." },
  { title: "Review requests", desc: "Happy customers get asked for a Google review at the right moment, automatically." },
  { title: "No-show reduction", desc: "Confirmations and reminders before every appointment, so the calendar holds." },
  { title: "New-client onboarding", desc: "Welcome email, intake form, kickoff doc: sent the moment they say yes." },
  { title: "Reporting and alerts", desc: "Weekly summary emails of what's running, what broke, what to do next." },
  { title: "Job-status updates", desc: "Customers told where their order or project stands without calling you." },
  { title: "CRM data entry", desc: "Emails and calls logged automatically: no one types into the CRM again." },
  { title: "Hiring intake", desc: "Applications screened against your criteria, interviews scheduled." },
  { title: "Morning brief", desc: "One email: today's schedule, money in, money out, what needs you." },
];
const accentPills = ["bg-teal-bright", "bg-ardent-lime", "bg-coral", "bg-peach"];

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
          { "@type": "Question", name: "What does an AI automation project cost?", acceptedAnswer: { "@type": "Answer", text: "Most automation builds run $2,000 to $10,000 over 2 to 4 weeks, fixed price and fixed timeline. Larger custom builds are scoped separately. Every project starts with a free 15-minute scope call." } },
          { "@type": "Question", name: "How long does a typical project take?", acceptedAnswer: { "@type": "Answer", text: "Most automation builds ship in 2 to 4 weeks. We don't take on projects we can't deliver in 4 weeks; if it's bigger, we scope it as multiple phases." } },
          { "@type": "Question", name: "What AI tools do you use?", acceptedAnswer: { "@type": "Answer", text: "We choose tools to fit the workflow. The build is documented and handed over with the accounts." } },
          { "@type": "Question", name: "Who do you work with?", acceptedAnswer: { "@type": "Answer", text: "We work with teams across industries. We start with one workflow and build around the way your team works." } },
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
        <section className="relative min-h-screen flex items-center bg-blush overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,125,123,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,125,123,0.10) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
            <div className="mb-10">
              <span className="section-eyebrow">
                AI Automation and Apps
              </span>
            </div>
            <TypingHeadline />
            <p className="mt-10 max-w-2xl font-sans text-lg lg:text-xl text-body-text leading-relaxed">
              We build custom AI automation that fits how your team already works, using the tools you already have. We agree on a fixed scope before work starts.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://calendly.com/asomogyi-ardentstudio/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ardent-lime text-ardent-studio font-sans font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Book a free 15-min call →
              </a>
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground text-foreground font-sans font-semibold rounded-full hover:opacity-70 transition-opacity"
              >
                See recent builds
              </Link>
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden" style={{ background: "#F5F5F0" }}>
          <div className="relative min-h-[56vh] md:min-h-[64vh] w-full flex items-end">
            <img
              src={heroSpeakingPhoto.url}
              alt="Ashley leading an AI automation workshop with a small business team around a table of laptops"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(245,245,240,0.94) 0%, rgba(245,245,240,0.70) 48%, rgba(245,245,240,0.18) 100%), linear-gradient(180deg, rgba(245,245,240,0.08) 0%, rgba(245,245,240,0.94) 100%)",
              }}
            />
            <div className="relative max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-24 md:pt-32 pb-10 md:pb-14">
              <span className="section-eyebrow mb-6">
                Workflows we automate
              </span>
              <h2
                className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal max-w-[26ch] text-foreground"
                style={{ fontFamily: serif }}
              >
                What does AI automation actually look like for a business?
              </h2>
            </div>
          </div>
        </section>

        <section className="bg-blush px-5 pb-[88px] pt-[48px] md:px-10 md:pb-[140px] md:pt-[64px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ardent-paper/10">
              {workflows.map((w, i) => (
                <div key={w.title} className={`workshop-card min-h-[180px] p-7${w.wide ? " md:col-span-2 lg:col-span-2": ""}`}>
                  <span className={`mb-5 block h-3 w-3 rounded-full ${accentPills[i % accentPills.length]}`} aria-hidden="true" />
                  <h3 className="text-[20px] mb-3 text-foreground" style={{ fontFamily: serif }}>
                    {w.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-body-text">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2.5 FEATURED APPS */}
        <section id="featured-apps" className="px-5 md:px-10 pt-[88px] md:pt-[140px] pb-[48px] md:pb-[64px]" style={{ background: "#F5F5F0" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="section-eyebrow mb-6">
              Featured Apps
            </span>
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-4 text-ardent-studio max-w-[20ch]"
              style={{ fontFamily: serif }}
            >
              Real apps. Real businesses. Real fast.
            </h2>
            <p className="text-[16px] md:text-[18px] text-ardent-studio/75 leading-[1.7] mb-14 max-w-[60ch]">
              Beyond automation, we ship full products. Built fast. Built for one business at a time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="workshop-card flex flex-col p-10 md:p-14">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                  Sales Enablement · AI Role-Play
                </span>
                <h3 className="text-[clamp(28px,3.5vw,42px)] mb-4 text-ardent-studio" style={{ fontFamily: serif }}>
                  Sartori AI
                </h3>
                <p className="italic mb-6" style={{ fontFamily: serif, color: "#0A7D7B" }}>
                  Train smarter. Close faster.
                </p>
                <p className="text-[16px] leading-[1.7] text-ardent-studio/80 mb-8">
                  Custom-built AI role-play avatars and bite-sized lessons that ramp new sales reps faster and lift close rates for the whole team.
                </p>
                <div className="mt-auto">
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                    Status · Live
                  </span>
                  <a
                    href="https://sartoriai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-[14px] rounded-full"
                    style={{ background: "#C3F73A", color: "#0D0D0D" }}
                  >
                    Visit sartoriai.com →
                  </a>
                </div>
              </div>

              <div className="workshop-card flex flex-col p-10 md:p-14">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                  Sports Tech · AI Coaching
                </span>
                <h3 className="text-[clamp(28px,3.5vw,42px)] mb-4 text-ardent-studio" style={{ fontFamily: serif }}>
                  Tryline Coach
                </h3>
                <p className="italic mb-6" style={{ fontFamily: serif, color: "#0A7D7B" }}>
                  Democratising access to elite coaching intelligence.
                </p>
                <p className="text-[16px] leading-[1.7] text-ardent-studio/80 mb-8">
                  AI-powered coaching platform for rugby, delivering personalised training analysis and performance insights to players and coaches at every level: from grassroots clubs to elite academies.
                </p>
                <div className="mt-auto">
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                    Status · In Build
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { t: "Web apps", d: "Customer portals, dashboards, and internal tools your team actually uses." },
                { t: "Mobile apps", d: "iOS and Android apps for field teams, customers, and operations." },
                { t: "AI products", d: "Full products with AI at the core: like Sartori." },
              ].map((c, i) => (
                <div key={c.t} className={`workshop-card border-t-8 p-7 ${i === 0 ? "border-t-teal-bright" : i === 1 ? "border-t-ardent-lime" : "border-t-coral"}`}>
                  <h4 className="text-[22px] mb-3 text-ardent-studio" style={{ fontFamily: serif }}>{c.t}</h4>
                  <p className="text-[14px] leading-[1.6] text-ardent-studio/75">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 px-8 py-4 text-[14px] rounded-full"
                style={{ background: "#C3F73A", color: "#0D0D0D" }}
              >
                See all our work →
              </Link>
            </div>
          </div>
        </section>

        {/* 3. ARDENT METHOD */}
        <section id="ardent-method" className="bg-blush px-5 pb-[88px] pt-[48px] md:px-10 md:pb-[140px] md:pt-[64px]">
          <div className="max-w-[1200px] mx-auto">
            <span className="section-eyebrow mb-6">
              How we work
            </span>
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-4 text-foreground"
              style={{ fontFamily: serif }}
            >
              The ARDENT method.
            </h2>
            <p className="text-[16px] text-body-text leading-[1.7] mb-14 max-w-[60ch]">
              Six steps from your first call to a tool your team owns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {method.map((m) => (
                <div key={m.letter} className="workshop-card p-7">
                  <div
                    className="text-[64px] leading-none mb-3 text-primary"
                    style={{ fontFamily: serif }}
                  >
                    {m.letter}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3">
                    {m.word}
                  </div>
                  <p className="text-[15px] leading-[1.7] text-body-text">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 py-16 bg-background">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6">
            <div className="workshop-card border-t-8 border-t-teal-bright p-7 md:p-10">
              <h2 className="text-[clamp(28px,4vw,44px)] text-foreground mb-5">Find the answer</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-7">Bring us your data and a question. We clean it, analyze it, and give you a plain-English report with charts. $150 an hour, with a scoped estimate before any work starts.</p>
              <Link to="/contact?interest=analyze-my-data" className="inline-flex px-7 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full">Ask about your data</Link>
            </div>
            <div className="rounded-3xl border-2 border-dashed border-coral bg-card p-7 md:p-10">
              <h2 className="text-[clamp(28px,4vw,44px)] text-foreground mb-5">Larger builds</h2>
              <p className="text-[16px] italic text-brick leading-relaxed mb-7">Bigger apps that need more than 2 to 4 weeks are quoted by phase after a scoping call.</p>
              <Link to="/contact?interest=bigger-project" className="inline-flex px-7 py-3 border border-foreground text-foreground font-semibold rounded-full">Talk about a bigger build</Link>
            </div>
          </div>
        </section>

        {/* 5. PRICING SIGNAL */}
        <section className="px-5 md:px-10 py-14" style={{ background: "#F5F5F0" }}>
          <div className="max-w-[900px] mx-auto text-center">
            <span className="section-eyebrow mb-4">
              Investment
            </span>
            <p
              className="text-[clamp(20px,2.6vw,28px)] leading-[1.3] text-ardent-studio mb-3"
              style={{ fontFamily: serif }}
            >
              Most projects: $2,000–$10,000, 2–6 weeks. Fixed price. Fixed timeline. Your team owns the result.
            </p>
            <p className="text-[14px] text-ardent-studio/70">
              Need something bigger? We scope custom builds too.
            </p>
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="bg-blush px-5 py-[88px] md:px-10 md:py-[140px]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-6 text-foreground"
              style={{ fontFamily: serif }}
            >
              Ready to see where AI fits in your week?
            </h2>
            <p className="text-[16px] md:text-[18px] text-body-text leading-[1.7] mb-10 max-w-[60ch] mx-auto">
              Book a free 15-minute call. We'll map your top time leaks and tell you which one is worth
              automating first.
            </p>
            <a
              href="https://calendly.com/asomogyi-ardentstudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-ardent-lime text-ardent-studio font-sans font-semibold rounded-full hover:opacity-90 transition-opacity text-[16px]"
            >
              Book a free 15-min call →
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
