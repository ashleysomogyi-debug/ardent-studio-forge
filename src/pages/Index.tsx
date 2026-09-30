import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import lookAroundPhoto from "@/assets/photos/look-around-corner.png.asset.json";

const calendly = "https://calendly.com/asomogyi-ardentstudio/30min";

const offers = [
  {
    title: "Talk it through",
    price: "FREE",
    body: "A free 15-minute call to find where your week leaks hours. You get an honest yes or no on whether AI fits, and a short written follow-up.",
    action: "Book the free call",
    href: calendly,
  },
  {
    title: "Find the answer",
    price: "$150 AN HOUR, SCOPED FIRST",
    body: "Bring us your data and a question. We clean it, analyze it, and give you a plain-English report with charts. You get a scoped estimate before any work starts.",
    action: "Ask about your data",
    href: "/contact",
  },
  {
    title: "Build it",
    price: "FROM $2,000",
    body: "One specific AI tool that saves real hours, built in 2 to 4 weeks at a fixed price. You own the code and the accounts.",
    action: "Start a build",
    href: "/contact",
  },
  {
    title: "Teach your team",
    price: "FROM $2,250",
    body: "Hands-on workshops where your team builds something real with AI, with materials to keep and a follow-up Q and A window.",
    action: "See training",
    href: "/training",
  },
];

const steps = [
  { number: "01", title: "Scope call", you: "Tell us where the week leaks hours.", we: "We ask the practical questions and define what success looks like." },
  { number: "02", title: "Proposal", you: "Review the scope, price, and timeline.", we: "We send a fixed scope and a clear price before work starts." },
  { number: "03", title: "Build", you: "Review progress and tell us what needs adjusting.", we: "We build in short loops and keep you close to the work." },
  { number: "04", title: "Handoff", you: "Join the walkthrough and start using your tool.", we: "We hand over the code, accounts, and a guide you can use." },
];

const studioTools = [
  { title: "Cold outreach engine", detail: "Finds contacts and drafts openers in our own voice." },
  { title: "Inbound reply drafter", detail: "Drafts replies for us to approve." },
  { title: "LinkedIn content drafter", detail: "Drafts five post options every Monday." },
];

const taught = ["EF keynote in Shanghai", "SHRM in Las Vegas", "Training in Denmark"];

const Index = () => (
  <>
    <Nav />
    <main>
      <HeroSection />

      <section className="bg-background px-5 py-20 md:px-10 md:py-28" aria-labelledby="offers-heading">
        <div className="mx-auto max-w-[1200px]">
          <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.2em] text-primary">How we work together</span>
          <h2 id="offers-heading" className="mb-12 max-w-[18ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.12] text-foreground">Four ways to make progress.</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {offers.map((offer, i) => (
              <article key={offer.title} className="flex min-h-[350px] flex-col border border-border bg-card p-7">
                <span className="mb-8 font-mono text-[11px] uppercase tracking-[0.1em] text-primary">{offer.price}</span>
                <h3 className="mb-4 text-[25px] font-semibold leading-tight text-foreground">{offer.title}</h3>
                <p className="mb-8 text-[15px] leading-[1.7] text-body-text">{offer.body}</p>
                {offer.href.startsWith("http") ? (
                  <a href={offer.href} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex min-h-11 items-center justify-center self-start px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-75 ${i === 0 ? "bg-ardent-lime text-ardent-studio" : "border border-foreground text-foreground"}`}>{offer.action} →</a>
                ) : (
                  <Link to={offer.href} className="mt-auto inline-flex min-h-11 items-center justify-center self-start border border-foreground px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-75">{offer.action} →</Link>
                )}
              </article>
            ))}
          </div>
          <p className="mt-9 text-[15px] leading-relaxed text-body-text">Bigger project? Larger apps are quoted by phase after a scoping call. <Link to="/contact" className="font-semibold text-primary underline underline-offset-4">Talk about a bigger build</Link></p>
          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:gap-6">
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">Included in every build</span>
            <p className="text-[14px] text-body-text">A live walkthrough, a short ops guide, and 30 days of email support. You own the code and the accounts.</p>
          </div>
        </div>
      </section>

      <section id="process" className="bg-background" aria-labelledby="process-heading">
        <div className="relative flex min-h-[360px] items-end overflow-hidden md:min-h-[440px]">
          <img src={lookAroundPhoto.url} alt="Ashley and a client reviewing a workflow at a laptop" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/80 md:bg-background/65" />
          <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-12 pt-24 md:px-10">
            <span className="mb-6 block font-mono text-[11px] uppercase tracking-[0.2em] text-primary">What working with us looks like</span>
            <h2 id="process-heading" className="max-w-[20ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-foreground">From first call to handoff in four steps.</h2>
          </div>
        </div>
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-10 md:py-20">
          {steps.map((step) => (
            <div key={step.number} className="grid gap-3 border-b border-border py-7 md:grid-cols-[80px_1fr_1fr_1fr] md:gap-7">
              <span className="font-mono text-2xl text-primary">{step.number}</span>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-body-text"><span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-primary">You do</span>{step.you}</p>
              <p className="text-[15px] leading-relaxed text-body-text"><span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-primary">We do</span>{step.we}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="bg-background px-5 py-20 md:px-10 md:py-28" aria-labelledby="work-heading">
        <div className="mx-auto max-w-[1200px]">
          <h2 id="work-heading" className="mb-10 text-[clamp(32px,5vw,56px)] font-semibold text-foreground">Our work</h2>
          <article className="border border-border bg-card p-7 md:p-11">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">In build</span>
            <h3 className="mt-4 max-w-[24ch] text-[clamp(26px,3.5vw,40px)] font-semibold leading-tight text-foreground">A spending plan in a CPA's own voice.</h3>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-[1.75] text-body-text">Sherron Permashwar, CPA, teaches a spending method in her Get Wealthy With Me course and wanted students to apply it to their own real spending. We are building an app that reads a student's recent transactions and sorts them the way she teaches, with her personality quiz and a coaching voice written from her own answers. She owns the IP and the code.</p>
            <p className="mt-7 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-primary">Phase 1 is in build. Results will be added after launch.</p>
          </article>
          <div className="mt-14">
            <h3 className="mb-5 text-xl font-semibold text-foreground">Tools we run our own studio on</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {studioTools.map((tool) => <div key={tool.title} className="border-t border-border pt-4"><h4 className="font-semibold text-foreground">{tool.title}</h4><p className="mt-2 text-[14px] leading-relaxed text-body-text">{tool.detail}</p></div>)}
            </div>
            <p className="mt-9 text-[14px] leading-relaxed text-body-text">Sartori AI was built by Ardent and is now its own company. <a href="https://www.sartoriai.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4">Visit Sartori AI</a></p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-9 md:px-10" aria-label="Where we have taught">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Where we have taught</h2>
          <div className="flex flex-wrap gap-x-9 gap-y-3 text-sm font-medium text-foreground">{taught.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section id="about" className="bg-background px-5 py-20 md:px-10 md:py-28" aria-labelledby="about-heading">
        <div className="mx-auto max-w-[1200px]">
          <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.2em] text-primary">About us</span>
          <h2 id="about-heading" className="mb-8 text-[clamp(32px,5vw,56px)] font-semibold text-foreground">The people doing the work.</h2>
          <p className="mb-12 max-w-[70ch] text-[18px] leading-relaxed text-body-text">We are Ashley and Wesley. We run Ardent Studio in Palm Beach County. We work directly with you to find where AI helps, build what fits, and make sure your team can use it. No account-manager handoff, just the people doing the work.</p>
          <div className="grid gap-9 sm:grid-cols-3">
            {[
              { src: "/ashley-profile.jpg", name: "Ashley Somogyi", role: "Cofounder · Build", detail: "PhD, 15 plus years in sales, learning and product" },
              { src: "/wesley-profile.jpg", name: "Wesley Price", role: "Cofounder · Strategy & Ops" },
              { src: "/loki-willow-chairs.jpg", name: "Loki & Willow", role: "Chief Officers of Snuggles and Snacks" },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <img src={person.src} alt={person.name} loading="lazy" className="mx-auto mb-5 aspect-square w-[190px] rounded-full border border-border object-cover md:w-[220px]" />
                <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-primary">{person.role}</p>
                {person.detail && <p className="mt-3 text-[14px] text-body-text">{person.detail}</p>}
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-[70ch] text-[16px] leading-relaxed text-body-text">We started Ardent to make practical tools with people, not hand them a deck and disappear. We work in person when we can and on Zoom when we cannot. From the first question to the final handoff, we stay close to the work and accountable for it.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Index;
