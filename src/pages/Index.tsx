import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const calendly = "https://calendly.com/asomogyi-ardentstudio/30min";

const offers = [
  {
    title: "Talk it through",
    price: "FREE, 15 MINUTES",
    body: "A free 15-minute call to find where your week leaks hours. You get an honest yes or no on whether AI fits, and a short written follow-up.",
    action: "Book the free call",
    href: calendly,
  },
  {
    title: "Build it",
    price: "FIXED PRICE",
    body: "One specific AI tool that saves real hours, built in 2 to 4 weeks at a fixed price. You own the code and the accounts.",
    action: "Start a build",
    href: "/contact",
  },
  {
    title: "Teach your team",
    price: "QUOTED BY TEAM SIZE",
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


const examples = [
  {
    title: "Replies drafted while you are on the job",
    detail: "Customer emails and enquiries get a draft reply waiting for you to approve, so nothing sits for a day.",
  },
  {
    title: "Follow-ups that actually go out",
    detail: "Quotes and leads get a friendly nudge on schedule, in your voice, without you tracking them in your head.",
  },
  {
    title: "Reports you do not build by hand",
    detail: "The weekly numbers you copy between spreadsheets get pulled together and summarized in plain English.",
  },
];

const ownerQuestions = [
  {
    question: "Do I need to be technical?",
    answer: "No. We handle the build and walk you through it in plain language. You only need to know your own business.",
  },
  {
    question: "What happens to my customer data?",
    answer: "We only ask for access to what a build needs, and we tell you where your data goes before we start. You own the accounts.",
  },
  {
    question: "What if something breaks?",
    answer: "Every build includes a live walkthrough, a short how-to guide, and 30 days of email support. After that, reach out and we will scope any fix before doing any work.",
  },
  {
    question: "How much will it cost?",
    answer: "Prices depend on the size and complexity of the project. Book a free 15 minute call and we will give you a clear, fixed quote before any work starts.",
  },
  {
    question: "Do you only work with certain kinds of businesses?",
    answer: "No. If a chore eats your week, we can probably help. We work in person around Palm Beach County and over Zoom everywhere else.",
  },
];

const taught = ["EF keynote in Shanghai", "SHRM in Las Vegas", "Training in Denmark"];
const accentPills = ["bg-teal-bright", "bg-ardent-lime", "bg-coral", "bg-peach"];

const proof = [
  { lead: "15 plus", caption: "years in tech, learning and business ops" },
  { lead: "Keynotes", caption: "on three continents" },
  { lead: "SartoriAI", caption: "built by us, live today" },
  { lead: "You own", caption: "the code and the accounts" },
];

const Index = () => (
  <>
    <Nav />
    <main>
      <HeroSection />

      <section className="border-y border-border bg-card px-5 py-7 md:px-10 md:py-9" aria-label="Ardent Studio at a glance">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4 lg:gap-8">
          {proof.map((item) => (
            <div key={item.lead} className="border-l border-border pl-4 md:pl-6">
              <strong className="block text-[clamp(22px,2.5vw,32px)] font-semibold leading-tight text-foreground">{item.lead}</strong>
              <span className="mt-2 block font-mono text-[13px] uppercase leading-relaxed text-label-text">{item.caption}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="offers-heading">
        <div className="mx-auto max-w-[1200px]">
          <span className="section-eyebrow mb-5">How we work together</span>
          <h2 id="offers-heading" className="mb-7 md:mb-10 max-w-[18ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.12] text-foreground">Three ways to make progress.</h2>
          <div className="grid gap-3 md:gap-4 md:grid-cols-3">
            {offers.map((offer, i) => (
              <article key={offer.title} className="workshop-card flex min-h-0 md:min-h-[350px] flex-col p-5 md:p-7">
                <span className={`mb-3 md:mb-8 inline-flex w-fit max-w-full items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-center font-mono text-[13px] md:text-[clamp(13px,1.15vw,16px)] font-semibold uppercase leading-none text-ardent-studio ${accentPills[i]}`}>{offer.price}</span>
                <h3 className="mb-2 md:mb-4 text-[22px] md:text-[25px] font-semibold leading-tight text-foreground">{offer.title}</h3>
                <p className="mb-4 md:mb-8 text-[16px] leading-[1.6] md:leading-[1.7] text-body-text">{offer.body}</p>
                {offer.href.startsWith("http") ? (
                  <a href={offer.href} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex min-h-11 items-center justify-center self-start px-5 py-3 text-[16px] font-semibold transition-opacity hover:opacity-75 ${i === 0 ? "bg-ardent-lime text-ardent-studio": "border border-foreground text-foreground"}`}>{offer.action} →</a>
                ): (
                  <Link to={offer.href} className="mt-auto inline-flex min-h-11 items-center justify-center self-start border border-foreground px-5 py-3 text-[16px] font-semibold text-foreground transition-opacity hover:opacity-75">{offer.action} →</Link>
                )}
              </article>
            ))}
          </div>
          <p className="mt-5 md:mt-8 text-[16px] leading-relaxed text-body-text">Every project is quoted at a fixed price before any work starts. The free call is how you get yours.</p>
           <p className="mt-5 md:mt-9 rounded-3xl border-2 border-dashed border-coral bg-card p-5 md:p-6 text-[16px] italic leading-relaxed text-brick">Bigger project? Larger apps are quoted by phase after a scoping call. <Link to="/contact" className="font-semibold text-brick underline underline-offset-4">Talk about a bigger build</Link></p>
          <div className="mt-6 md:mt-10 flex flex-col gap-2 border-t border-border pt-5 md:pt-6 sm:flex-row sm:gap-6">
            <span className="shrink-0 font-mono text-[13px] uppercase tracking-[0.15em] text-primary">Included in every build</span>
            <p className="text-[16px] text-body-text">A live walkthrough, a short how-to guide, and 30 days of email support. You own the code and the accounts.</p>
          </div>
        </div>
      </section>

      <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="examples-heading">
        <div className="mx-auto max-w-[1200px]">
          <span className="section-eyebrow mb-5">Practical examples</span>
          <h2 id="examples-heading" className="max-w-[20ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.12] text-foreground">What we could build for you</h2>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-body-text">Examples of the chores we take off your plate. Yours will be scoped to fit.</p>
          <div className="mt-6 md:mt-10 grid gap-3 md:gap-5 md:grid-cols-3">
            {examples.map((example, i) => (
              <article key={example.title} className="workshop-card flex min-h-0 md:min-h-[280px] flex-col p-5 md:p-8">
                <span className={`mb-3 md:mb-7 block h-2.5 w-2.5 rounded-full ${accentPills[i]}`} aria-hidden="true" />
                <h3 className="text-[24px] font-semibold leading-tight text-foreground">{example.title}</h3>
                <p className="mt-2 md:mt-4 text-[16px] leading-[1.6] md:leading-[1.7] text-body-text">{example.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 md:mt-9 flex flex-col items-start gap-4 md:gap-5 border-t border-border pt-5 md:pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[16px] leading-relaxed text-body-text">Have a different chore in mind? Book a free call and tell us.</p>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-ardent-lime px-6 py-3 text-[16px] font-semibold text-ardent-studio transition-opacity hover:opacity-80">Book a free 15-min call →</a>
          </div>
        </div>
      </section>

      <section id="process" className="bg-blush" aria-labelledby="process-heading">
        <div className="relative flex min-h-[220px] items-end overflow-hidden md:min-h-[440px]">
          <img src="https://ardentstudio.io/__l5e/assets-v1/03e28834-d7a2-4479-ab8b-b392e2055c87/look-around-corner.png" alt="Ashley and a client reviewing a workflow at a laptop" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/80 md:bg-background/65" />
          <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-6 pt-12 md:px-10 md:pb-12 md:pt-24">
            <span className="section-eyebrow section-eyebrow--on-photo mb-4 md:mb-6">What working with us looks like</span>
            <h2 id="process-heading" className="max-w-[20ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-foreground">From first call to handoff in four steps.</h2>
          </div>
        </div>
        <div className="mx-auto max-w-[1200px] px-5 py-6 md:px-10 md:py-[72px]">
           {steps.map((step, i) => (
            <div key={step.number} className="border-b border-border py-3.5 md:grid md:grid-cols-[80px_1fr_1fr_1fr] md:gap-7 md:py-7">
              <div className="flex items-center gap-3 md:contents">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[13px] text-ardent-studio md:h-12 md:w-12 md:text-base ${accentPills[i]}`}>{step.number}</span>
                <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">{step.title}</h3>
              </div>
              <p className="mt-1.5 pl-11 text-[16px] leading-snug text-body-text md:hidden"><span className="font-mono text-[12px] uppercase tracking-[0.15em] text-primary">You do</span> {step.you} <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-primary">We do</span> {step.we}</p>
              <p className="hidden text-[16px] leading-relaxed text-body-text md:block"><span className="mb-1 block font-mono text-[12px] uppercase tracking-[0.15em] text-primary">You do</span>{step.you}</p>
              <p className="hidden text-[16px] leading-relaxed text-body-text md:block"><span className="mb-1 block font-mono text-[12px] uppercase tracking-[0.15em] text-primary">We do</span>{step.we}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="relative overflow-hidden bg-background px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="work-heading">
        <div className="coral-dot-grid pointer-events-none absolute right-6 top-16 h-28 w-28" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px]">
          <h2 id="work-heading" className="mb-7 md:mb-10 text-[clamp(32px,5vw,56px)] font-semibold text-foreground">Our work</h2>
          <article className="relative overflow-hidden rounded-3xl border border-dark-band-text/10 bg-footer-bg p-5 md:p-11">
            <div className="coral-dot-grid pointer-events-none absolute -right-3 -top-3 h-36 w-36" aria-hidden="true" />
            <div className="relative">
            <span className="inline-flex items-center justify-center text-center rounded-full bg-ardent-lime px-3 py-2 font-mono text-[13px] uppercase tracking-[0.2em] text-ardent-studio">In build</span>
            <h3 className="mt-4 max-w-[24ch] text-[clamp(26px,3.5vw,40px)] font-semibold leading-tight text-dark-band-text">A spending plan in a CPA's own voice.</h3>
            <p className="mt-4 md:mt-6 max-w-[78ch] text-[16px] leading-[1.65] md:leading-[1.75] text-dark-band-muted">Sherron Permashwar, CPA, teaches a spending method in her Get Wealthy With Me course and wanted students to apply it to their own real spending. We are building an app that reads a student's recent transactions and sorts them the way she teaches, with her personality quiz and a coaching voice written from her own answers. She owns the ownership rights and the code.</p>
            <p className="mt-5 md:mt-7 border-t border-coral pt-4 md:pt-5 text-[14px] italic text-dark-band-muted">The first release is in build. Results will be added after launch.</p>
            </div>
          </article>
            <p className="mt-5 md:mt-8 text-[16px] leading-relaxed text-body-text">Sartori AI was built by Ardent and is now its own company. <a href="https://www.sartoriai.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4 md:inline md:min-h-0">Visit Sartori AI</a></p>
          </div>
      </section>

      <section className="border-y border-border bg-blush px-5 py-7 md:py-9 md:px-10" aria-label="Where we have taught">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 md:mb-6 max-w-[68ch] text-[18px] font-medium leading-relaxed text-foreground">Big stages, small teams. We bring the same plain-spoken approach to a local shop as to a conference room.</p>
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="section-eyebrow">Where we have taught</h2>
            <div className="flex flex-wrap gap-2 md:gap-3 text-sm font-medium text-ardent-studio">{taught.map((item, i) => <span key={item} className={`rounded-full px-4 py-2 ${accentPills[i]}`}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-[1200px] gap-7 md:gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <div>
            <span className="section-eyebrow mb-5">Straight answers</span>
            <h2 id="faq-heading" className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.12] text-foreground">Questions owners ask us</h2>
          </div>
          <Accordion type="single" collapsible className="workshop-card px-5 md:px-8">
            {ownerQuestions.map((item, i) => (
              <AccordionItem key={item.question} value={`owner-question-${i}`} className="border-border last:border-b-0">
                <AccordionTrigger className="min-h-11 py-3.5 md:py-6 text-left text-[17px] font-semibold leading-snug text-foreground hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="max-w-[68ch] pb-4 md:pb-6 text-[16px] leading-[1.75] text-body-text">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-background px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="about-heading">
        <div className="coral-dot-grid pointer-events-none absolute bottom-20 left-5 hidden h-32 w-32 md:block" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px]">
          <span className="section-eyebrow mb-5">About us</span>
          <h2 id="about-heading" className="mb-4 md:mb-8 text-[clamp(32px,5vw,56px)] font-semibold text-foreground">The people doing the work.</h2>
          <p className="mb-6 md:mb-10 max-w-[70ch] text-[17px] md:text-[18px] leading-relaxed text-body-text">We are Ashley and Wesley. We run Ardent Studio in Palm Beach County. We work directly with you to find where AI helps, build what fits, and make sure your team can use it. No account-manager handoff, just the people doing the work.</p>
          <div className="mx-auto grid max-w-[900px] grid-cols-2 items-start justify-items-center gap-x-4 gap-y-6 sm:grid-cols-3 md:gap-9">
            {[
              { src: "/ashley-profile.jpg", name: "Ashley Somogyi", role: "Cofounder · Build", detail: "PhD, 15 plus years in tech, learning and business ops" },
              { src: "/wesley-profile.jpg", name: "Wesley Price", role: "Cofounder · Strategy & Ops" },
              { src: "/loki-willow-chairs.jpg", name: "Loki & Willow", role: "Chief Officers of Snuggles and Snacks" },
            ].map((person) => (
              <div key={person.name} className={`text-center ${person.src.includes("loki") ? "col-span-2 sm:col-span-1" : ""}`}>
                <img src={person.src} alt={person.name} loading="lazy" className="mx-auto mb-3 aspect-square w-[150px] max-w-full rounded-full md:mb-5 border border-border object-cover md:w-[220px]" />
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{person.name}</h3>
                <p className="mt-1 md:mt-2 font-mono text-[13px] uppercase tracking-[0.1em] text-primary">{person.role}</p>
                {person.detail && <p className="mt-2 md:mt-3 text-[14px] md:text-[16px] text-body-text">{person.detail}</p>}
              </div>
            ))}
          </div>
          <p className="mt-6 md:mt-12 max-w-[70ch] text-[16px] leading-relaxed text-body-text">We started Ardent to make practical tools with people, not hand them a deck and disappear. We work in person when we can and on Zoom when we cannot. From the first question to the final handoff, we stay close to the work and accountable for it.</p>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
