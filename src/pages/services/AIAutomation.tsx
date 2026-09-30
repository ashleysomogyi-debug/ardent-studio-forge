import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TypingHeadline from "@/components/TypingHeadline";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

type WorkflowExample = {
  title: string;
  problem: string;
  build: string;
  changes: string;
};

const workflowTabs: { value: string; label: string; examples: WorkflowExample[] }[] = [
  {
    value: "sales",
    label: "Sales",
    examples: [
      {
        title: "Quote and proposal generation",
        problem: "Quotes take an evening to write, so deals stall while you find the time.",
        build: "A tool that pulls past quotes, your pricing logic and the client's request into a draft proposal for you to review.",
        changes: "Proposals go out the same day in your voice, and you edit instead of starting from scratch.",
      },
      {
        title: "Lead intake to booked appointment",
        problem: "Inquiries arrive by web form, phone and text, and the ones answered late go to a competitor.",
        build: "A system that answers each inquiry, asks the right questions, books the right calendar and updates your CRM.",
        changes: "Every lead gets a fast, consistent reply and you start the day with appointments already booked.",
      },
      {
        title: "A pipeline that chases itself",
        problem: "Deals go quiet because follow-up depends on your memory.",
        build: "Follow-ups tailored to each deal on a schedule, plus a weekly list of the deals worth a personal call.",
        changes: "Nothing slips, and your calls go to the deals that matter.",
      },
    ],
  },
  {
    value: "operations",
    label: "Operations",
    examples: [
      {
        title: "Job intake to scheduled work",
        problem: "After a quote is accepted, someone rebuilds the same tasks, materials list and schedule by hand.",
        build: "A signed quote creates the project, tasks, materials list, staff assignments and the customer's kickoff message.",
        changes: "Work starts faster and nothing gets missed between sales and delivery.",
      },
      {
        title: "Inventory and supplier reordering",
        problem: "You either run out at the wrong moment or tie up money in stock you do not need.",
        build: "Stock levels, sales and supplier lead times drive draft purchase orders for you to approve.",
        changes: "Fewer surprises and less guesswork about what to order and when.",
      },
      {
        title: "Compliance and paperwork tracking",
        problem: "Licenses, certifications and insurance renewals live in different places and lapse without warning.",
        build: "One tracker across people and clients with alerts and pre-filled documents before anything expires.",
        changes: "Deadlines stop sneaking up on you.",
      },
    ],
  },
  {
    value: "money",
    label: "Money",
    examples: [
      {
        title: "Invoicing to cash collected",
        problem: "Invoices go out late and chasing payment is awkward and inconsistent.",
        build: "Completed work triggers the invoice, reminders are matched to each customer's payment history, and you get a weekly view of who owes what.",
        changes: "You get paid sooner without the awkward emails.",
      },
      {
        title: "Month-end without the scramble",
        problem: "Receipts, bank feeds and categories pile up until month-end becomes a weekend project.",
        build: "Transactions are categorized as they arrive, exceptions are flagged for you, and a plain-English summary of the month is ready for your accountant.",
        changes: "Books close faster and you understand your numbers.",
      },
    ],
  },
  {
    value: "decisions",
    label: "Decisions",
    examples: [
      {
        title: "Your business answers, on demand",
        problem: "The same questions about policies, prices and past jobs keep landing on you.",
        build: "An assistant trained on your own documents that answers staff or customer questions and shows where each answer came from.",
        changes: "Fewer interruptions and consistent answers.",
      },
      {
        title: "A weekly owner's dashboard",
        problem: "Sales, cash, jobs and hours sit in separate tools, so you never see the whole picture.",
        build: "A Monday brief pulling from every tool, with the three things that need you.",
        changes: "You spend minutes, not hours, knowing where the business stands.",
      },
    ],
  },
  {
    value: "team",
    label: "Team",
    examples: [
      {
        title: "Hiring to onboarding",
        problem: "Screening applicants and setting up a new hire eats days of your time.",
        build: "Applications screened against your criteria, interviews scheduled, and a new hire gets accounts, training and a first-week plan.",
        changes: "Hiring moves faster and new people start ready.",
      },
      {
        title: "Customer feedback that acts",
        problem: "Reviews, surveys and support messages pile up unread.",
        build: "Feedback is read and grouped, and the recurring problems reach you with suggested fixes.",
        changes: "You hear what customers are telling you and can act on it.",
      },
    ],
  },
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
          { "@type": "Question", name: "What does an AI automation project cost?", acceptedAnswer: { "@type": "Answer", text: "Every build is a fixed price, quoted after a free 15 minute call. Larger custom builds are scoped separately. Every project starts with a free 15-minute scope call." } },
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
      <main className="automation-cyan-theme">
        {/* 1. HERO */}
        <section className="relative bg-blush overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,125,123,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,125,123,0.10) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-12 md:pt-28 md:pb-20">
            <div className="mb-10">
              <span className="section-eyebrow">
                AI Automation and Apps
              </span>
            </div>
            <TypingHeadline />
            <p className="mt-6 md:mt-10 max-w-2xl font-sans text-lg lg:text-xl text-body-text leading-relaxed">
              We build custom AI automation that fits how your team already works, using the tools you already have. We agree on a fixed scope before work starts.
            </p>
            <div className="mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-4">
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

        <section className="automation-cyan-band relative w-full overflow-hidden">
          <div className="relative min-h-[260px] md:min-h-[64vh] w-full flex items-end">
            <img
              src={`https://ardentstudio.io${heroSpeakingPhoto.url}`}
              alt="Ashley leading an AI automation workshop with a small business team around a table of laptops"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="automation-photo-overlay absolute inset-0" />
            <div className="relative max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-12 md:pt-32 pb-6 md:pb-14">
              <span className="section-eyebrow section-eyebrow--on-photo mb-4 md:mb-6">
                Workflows we automate
              </span>
              <h2
                className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal max-w-[26ch] text-foreground"
                style={{ fontFamily: serif }}
              >
                What does AI automation actually look like for a business?
              </h2>
              <p className="mt-3 md:mt-5 max-w-[48ch] text-[17px] leading-relaxed text-body-text md:text-[19px]">
                Pick the part of your business that eats your week.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
          <div className="max-w-[1200px] mx-auto">
            <Tabs defaultValue="sales">
              <div className="overflow-x-auto pb-2 md:pb-3 [scrollbar-width:thin]">
                <TabsList aria-label="Automation examples by business area" className="inline-flex h-auto min-w-max justify-start gap-2 rounded-none bg-transparent p-0">
                  {workflowTabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="min-h-11 rounded-full border border-foreground/15 bg-card px-4 md:px-5 py-2.5 md:py-3 text-[16px] font-semibold text-foreground shadow-none data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {workflowTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-3 md:mt-7">
                  <div className="mobile-rail grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {tab.examples.map((example) => (
                      <article key={example.title} className="rounded-3xl border border-foreground/10 bg-card p-4 md:p-8">
                        <h3 className="mb-2 md:mb-7 text-[20px] md:text-[23px] font-bold leading-tight text-foreground">
                          {example.title}
                        </h3>
                        <dl className="space-y-2 md:space-y-5">
                          {[
                            ["The problem", example.problem],
                            ["What we build", example.build],
                            ["What changes", example.changes],
                          ].map(([label, copy]) => (
                            <div key={label}>
                              <dt className="mb-0.5 md:mb-1.5 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-primary">{label}</dt>
                              <dd className="text-[16px] leading-[1.5] md:leading-[1.65] text-body-text">{copy}</dd>
                            </div>
                          ))}
                        </dl>
                      </article>
                    ))}
                  </div>

                  <div className="mt-4 md:mt-8 flex flex-col items-start gap-3 md:gap-4 rounded-3xl border-2 border-dashed border-coral bg-card p-4 sm:flex-row sm:items-center sm:justify-between md:p-8">
                    <p className="max-w-[50ch] text-[16px] font-semibold leading-relaxed text-foreground">
                      Recognize this? Book a free call and tell us what is eating your week.
                    </p>
                    <Button asChild className="h-auto min-h-11 shrink-0 rounded-full bg-ardent-lime px-7 py-3.5 text-[16px] font-semibold text-ardent-studio hover:bg-ardent-lime/90">
                      <a href="https://calendly.com/asomogyi-ardentstudio/30min" target="_blank" rel="noopener noreferrer">
                        Book a free 15-min call
                      </a>
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* 2.5 FEATURED APPS */}
        <section id="featured-apps" className="px-5 md:px-10 py-12 md:py-[72px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-[1200px] mx-auto">
            <span className="section-eyebrow mb-6">
              Featured Apps
            </span>
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-4 max-w-[20ch]"
              style={{ fontFamily: serif, color: "#F5F5F0" }}
            >
              Real apps. Real businesses. Real fast.
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.7] mb-7 md:mb-10 max-w-[60ch]" style={{ color: "rgba(245,245,240,0.70)" }}>
              Beyond automation, we ship full products. Built fast. Built for one business at a time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-6">
              <div className="workshop-card flex flex-col p-5 md:p-10">
                <span className="mb-4 inline-flex w-fit items-center justify-center text-center rounded-full bg-teal-bright px-3 py-2 font-mono text-[13px] uppercase tracking-[0.18em] text-ardent-studio">
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
                  <span className="font-mono text-[13px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                    Status · Live
                  </span>
                  <a
                    href="https://sartoriai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center px-7 py-3 md:inline-block md:px-8 md:py-4 text-[16px] rounded-full"
                    style={{ background: "#C3F73A", color: "#0D0D0D" }}
                  >
                    Visit sartoriai.com →
                  </a>
                </div>
              </div>

              <div className="workshop-card flex flex-col p-5 md:p-10">
                <span className="mb-4 inline-flex w-fit items-center justify-center text-center rounded-full bg-ardent-lime px-3 py-2 font-mono text-[13px] uppercase tracking-[0.18em] text-ardent-studio">
                  Sports Tech · AI Coaching
                </span>
                <h3 className="text-[clamp(28px,3.5vw,42px)] mb-4 text-ardent-studio" style={{ fontFamily: serif }}>
                  Tryline Coach
                </h3>
                <p className="italic mb-6" style={{ fontFamily: serif, color: "#0A7D7B" }}>
                  Democratising access to elite coaching intelligence.
                </p>
                <p className="text-[16px] leading-[1.7] text-ardent-studio/80 mb-8">
                  AI-powered coaching platform for rugby, delivering personalised training analysis and performance insights to players and coaches at every level, from grassroots clubs to elite academies.
                </p>
                <div className="mt-auto">
                  <span className="font-mono text-[13px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                    Status · In Build
                  </span>
                </div>
              </div>
            </div>

            <div className="mobile-rail grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-6 md:mt-10">
              {[
                { t: "Web apps", d: "Customer portals, dashboards, and internal tools your team actually uses." },
                { t: "Mobile apps", d: "iOS and Android apps for field teams, customers, and operations." },
                { t: "Data analysis", d: "Bring us your data and a question. We clean it, analyze it and give you a plain-English report with charts." },
                { t: "AI products", d: "Full products with AI at the core, like Sartori." },
              ].map((c, i) => (
                <div key={c.t} className={`workshop-card border-t-8 ${i === 0 ? "border-t-teal-bright" : i === 1 ? "border-t-ardent-lime" : "border-t-coral"} p-4 md:p-7`}>
                  <h4 className="text-[20px] md:text-[22px] mb-1 md:mb-3 text-ardent-studio" style={{ fontFamily: serif }}>{c.t}</h4>
                  <p className="text-[16px] leading-[1.5] md:leading-[1.6] text-ardent-studio/75">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 md:mt-12 text-center">
              <Link
                to="/#work"
                className="inline-flex min-h-11 items-center gap-2 px-7 md:px-8 py-3 md:py-4 text-[16px] rounded-full"
                style={{ background: "#C3F73A", color: "#0D0D0D" }}
              >
                See all our work →
              </Link>
            </div>
          </div>
        </section>

        {/* 3. ARDENT METHOD */}
        <section id="ardent-method" className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
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
            <p className="text-[16px] text-body-text leading-[1.7] mb-7 md:mb-10 max-w-[60ch]">
              Six steps from your first call to a tool your team owns.
            </p>
            <div className="mobile-rail grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {method.map((m) => (
                <div key={m.letter} className="workshop-card grid grid-cols-[40px_1fr] gap-x-3 p-4 md:block md:p-7">
                  <div
                    className="row-span-2 text-[40px] md:text-[64px] leading-none md:mb-3 text-primary"
                    style={{ fontFamily: serif }}
                  >
                    {m.letter}
                  </div>
                  <div className="font-mono text-[13px] tracking-[0.25em] uppercase text-primary mb-1 md:mb-3">
                    {m.word}
                  </div>
                  <p className="text-[16px] leading-[1.5] md:leading-[1.7] text-body-text">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-10 md:py-[72px] bg-background">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-3 md:gap-6">
            <div className="workshop-card border-t-8 border-t-teal-bright p-5 md:p-10">
              <h2 className="text-[clamp(28px,4vw,44px)] text-foreground mb-3 md:mb-5">Find the answer</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-5 md:mb-7">Bring us your data and a question. We clean it, analyze it, and give you a plain-English report with charts. Fixed price, quoted after a free 15 minute call.</p>
              <Link to="/contact?interest=analyze-my-data" className="inline-flex min-h-11 items-center px-7 py-3 text-[16px] bg-secondary text-secondary-foreground font-semibold rounded-full">Ask about your data</Link>
            </div>
            <div className="rounded-3xl border-2 border-dashed border-coral bg-card p-5 md:p-10">
              <h2 className="text-[clamp(28px,4vw,44px)] text-foreground mb-3 md:mb-5">Larger builds</h2>
              <p className="text-[16px] italic text-brick leading-relaxed mb-5 md:mb-7">Bigger apps that need more than 2 to 4 weeks are quoted by phase after a scoping call.</p>
              <Link to="/contact?interest=bigger-project" className="automation-accent-link inline-flex min-h-11 items-center px-7 py-3 text-[16px] font-semibold">Talk about a bigger build</Link>
            </div>
          </div>
        </section>

        {/* 5. PRICING SIGNAL */}
        <section className="px-5 py-12 md:px-10 md:py-[72px]" style={{ background: "#F5F5F0" }}>
          <div className="max-w-[900px] mx-auto text-center">
            <span className="section-eyebrow mb-4">
              Investment
            </span>
            <p
              className="text-[clamp(20px,2.6vw,28px)] leading-[1.3] text-ardent-studio mb-3"
              style={{ fontFamily: serif }}
            >
              Fixed price, quoted after a free 15 minute call. Your team owns the result.
            </p>
            <p className="text-[16px] text-ardent-studio/70">
              Need something bigger? We scope custom builds too.
            </p>
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-4 md:mb-6 text-foreground"
              style={{ fontFamily: serif }}
            >
              Ready to see where AI fits in your week?
            </h2>
            <p className="text-[16px] md:text-[18px] text-body-text leading-[1.7] mb-6 md:mb-10 max-w-[60ch] mx-auto">
              Book a free 15-minute call. We'll map your top time leaks and tell you which one is worth
              automating first.
            </p>
            <a
              href="https://calendly.com/asomogyi-ardentstudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-ardent-lime text-ardent-studio font-sans font-semibold rounded-full hover:opacity-90 transition-opacity text-[16px]"
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
