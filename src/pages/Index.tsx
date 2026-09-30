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
    title: "Find the answer",
    price: "SCOPED FIRST",
    body: "Bring us your data and a question. We clean it, analyze it, and give you a plain-English report with charts. You get a scoped estimate before any work starts.",
    action: "Ask about your data",
    href: "/contact",
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

const Index = () => (
  <>
    <Nav />
    <main>
      <HeroSection />

      <section className="bg-background px-5 py-20 md:px-10 md:py-28" aria-labelledby="offers-heading">
        <div className="mx-auto max-w-[1200px]">
          <span className="section-eyebrow mb-5">How we work together</span>
          <h2 id="offers-heading" className="mb-12 max-w-[18ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.12] text-foreground">Four ways to make progress.</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {offers.map((offer, i) => (
              <article key={offer.title} className="workshop-card flex min-h-[350px] flex-col p-7">
                <span className={`mb-8 w-fit max-w-full rounded-full px-4 py-2.5 font-mono text-[clamp(15px,1.5vw,21px)] font-semibold uppercase leading-tight text-ardent-studio ${accentPills[i]}`}>{offer.price}</span>
                <h3 className="mb-4 text-[25px] font-semibold leading-tight text-foreground">{offer.title}</h3>
                <p className="mb-8 text-[15px] leading-[1.7] text-body-text">{offer.body}</p>
                {offer.href.startsWith("http") ? (
                  <a href={offer.href} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex min-h-11 items-center justify-center self-start px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-75 ${i === 0 ? "bg-ardent-lime text-ardent-studio": "border border-foreground text-foreground"}`}>{offer.action} →</a>
                ): (
                  <Link to={offer.href} className="mt-auto inline-flex min-h-11 items-center justify-center self-start border border-foreground px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-75">{offer.action} →</Link>
                )}
              </article>
            ))}
          </div>
          <p className="mt-8 text-[16px] leading-relaxed text-body-text">Every project is quoted at a fixed price before any work starts. The free call is how you get yours.</p>
           <p className="mt-9 rounded-3xl border-2 border-dashed border-coral bg-card p-6 text-[15px] italic leading-relaxed text-brick">Bigger project? Larger apps are quoted by phase after a scoping call. <Link to="/contact" className="font-semibold text-brick underline underline-offset-4">Talk about a bigger build</Link></p>
          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:gap-6">
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">Included in every build</span>
            <p className="text-[14px] text-body-text">A live walkthrough, a short how-to guide, and 30 days of email support. You own the code and the accounts.</p>
          </div>
        </div>
      </section>

      <section className="bg-blush px-5 py-20 md:px-10 md:py-28" aria-labelledby="examples-heading">
        <div className="mx-auto max-w-[1200px]">
          <span className="section-eyebrow mb-5">Practical examples</span>
          <h2 id="examples-heading" className="max-w-[20ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.12] text-foreground">What we could build for you</h2>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-body-text">Examples of the chores we take off your plate. Yours will be scoped to fit.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {examples.map((example, i) => (
              <article key={example.title} className="workshop-card flex min-h-[280px] flex-col p-7 md:p-8">
                <span className={`mb-7 block h-2.5 w-2.5 rounded-full ${accentPills[i]}`} aria-hidden="true" />
                <h3 className="text-[24px] font-semibold leading-tight text-foreground">{example.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-body-text">{example.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 flex flex-col items-start gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[16px] leading-relaxed text-body-text">Have a different chore in mind? Book a free call and tell us.</p>
            <a href={calendly} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-ardent-lime px-6 py-3 text-sm font-semibold text-ardent-studio transition-opacity hover:opacity-80">Book a free 15-min call →</a>
          </div>
        </div>
      </section>

      <section id="process" className="bg-blush" aria-labelledby="process-heading">
        <div className="relative flex min-h-[360px] items-end overflow-hidden md:min-h-[440px]">
          <img src="https://ardentstudio.io/__l5e/assets-v1/03e28834-d7a2-4479-ab8b-b392e2055c87/look-around-corner.png" alt="Ashley and a client reviewing a workflow at a laptop" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/80 md:bg-background/65" />
          <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-12 pt-24 md:px-10">
            <span className="section-eyebrow mb-6">What working with us looks like</span>
            <h2 id="process-heading" className="max-w-[20ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-foreground">From first call to handoff in four steps.</h2>
          </div>
        </div>
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-10 md:py-20">
           {steps.map((step, i) => (
            <div key={step.number} className="grid gap-3 border-b border-border py-7 md:grid-cols-[80px_1fr_1fr_1fr] md:gap-7">
              <span className={`flex h-12 w-12 items-center justify-center rounded-full font-mono text-base text-ardent-studio ${accentPills[i]}`}>{step.number}</span>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-body-text"><span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-primary">You do</span>{step.you}</p>
              <p className="text-[15px] leading-relaxed text-body-text"><span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-primary">We do</span>{step.we}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="relative overflow-hidden bg-background px-5 py-20 md:px-10 md:py-28" aria-labelledby="work-heading">
        <div className="coral-dot-grid pointer-events-none absolute right-6 top-16 h-28 w-28" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px]">
          <h2 id="work-heading" className="mb-10 text-[clamp(32px,5vw,56px)] font-semibold text-foreground">Our work</h2>
          <article className="relative overflow-hidden rounded-3xl border border-dark-band-text/10 bg-footer-bg p-7 md:p-11">
            <div className="coral-dot-grid pointer-events-none absolute -right-3 -top-3 h-36 w-36" aria-hidden="true" />
            <div className="relative">
            <span className="inline-flex rounded-full bg-ardent-lime px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ardent-studio">In build</span>
            <h3 className="mt-4 max-w-[24ch] text-[clamp(26px,3.5vw,40px)] font-semibold leading-tight text-dark-band-text">A spending plan in a CPA's own voice.</h3>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-[1.75] text-dark-band-muted">Sherron Permashwar, CPA, teaches a spending method in her Get Wealthy With Me course and wanted students to apply it to their own real spending. We are building an app that reads a student's recent transactions and sorts them the way she teaches, with her personality quiz and a coaching voice written from her own answers. She owns the ownership rights and the code.</p>
            <p className="mt-7 border-t border-coral pt-5 text-[13px] italic text-dark-band-muted">The first release is in build. Results will be added after launch.</p>
            </div>
          </article>
            <p className="mt-14 text-[14px] leading-relaxed text-body-text">Sartori AI was built by Ardent and is now its own company. <a href="https://www.sartoriai.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4">Visit Sartori AI</a></p>
          </div>
      </section>

      <section className="border-y border-border bg-blush px-5 py-9 md:px-10" aria-label="Where we have taught">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 max-w-[68ch] text-[18px] font-medium leading-relaxed text-foreground">Big stages, small teams. We bring the same plain-spoken approach to a local shop as to a conference room.</p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="section-eyebrow">Where we have taught</h2>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-ardent-studio">{taught.map((item, i) => <span key={item} className={`rounded-full px-4 py-2 ${accentPills[i]}`}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-blush px-5 py-20 md:px-10 md:py-28" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <span className="section-eyebrow mb-5">Straight answers</span>
            <h2 id="faq-heading" className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.12] text-foreground">Questions owners ask us</h2>
          </div>
          <Accordion type="single" collapsible className="workshop-card px-6 md:px-8">
            {ownerQuestions.map((item, i) => (
              <AccordionItem key={item.question} value={`owner-question-${i}`} className="border-border last:border-b-0">
                <AccordionTrigger className="py-6 text-left text-[17px] font-semibold leading-snug text-foreground hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="max-w-[68ch] pb-6 text-[15px] leading-[1.75] text-body-text">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-background px-5 py-20 md:px-10 md:py-28" aria-labelledby="about-heading">
        <div className="coral-dot-grid pointer-events-none absolute bottom-20 left-5 hidden h-32 w-32 md:block" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px]">
          <span className="section-eyebrow mb-5">About us</span>
          <h2 id="about-heading" className="mb-8 text-[clamp(32px,5vw,56px)] font-semibold text-foreground">The people doing the work.</h2>
          <p className="mb-12 max-w-[70ch] text-[18px] leading-relaxed text-body-text">We are Ashley and Wesley. We run Ardent Studio in Palm Beach County. We work directly with you to find where AI helps, build what fits, and make sure your team can use it. No account-manager handoff, just the people doing the work.</p>
          <div className="mx-auto grid max-w-[900px] items-start justify-items-center gap-9 sm:grid-cols-3">
            {[
...
            ))}
          </div>
          <p className="mt-12 max-w-[70ch] text-[16px] leading-relaxed text-body-text">We started Ardent to make practical tools with people, not hand them a deck and disappear. We work in person when we can and on Zoom when we cannot. From the first question to the final handoff, we stay close to the work and accountable for it.</p>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
