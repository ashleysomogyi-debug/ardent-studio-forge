import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CALENDLY = "https://calendly.com/asomogyi-ardentstudio/30min";
const META_TITLE = "AI Setup for Your Business | Ardent Studio";
const META_DESCRIPTION =
  "We connect AI tools like Microsoft Copilot and ChatGPT to the systems you already use, and show your team what to use them for. Fixed scope, based in Palm Beach County, Florida.";

const outcomes = [
  {
    title: "Connected to your systems",
    body: "We link your AI tool to the places your work already lives, such as email, calendar, shared files, your accounting software and your CRM. No copying and pasting between tabs.",
  },
  {
    title: "Set up for how you work",
    body: "We configure it around your real workflows, your tone of voice and your team's roles, so it feels like part of the business and not a toy.",
  },
  {
    title: "Three starter use cases",
    body: "We pick the three things most worth doing first, based on what you already have. You start with wins, not a blank chat box.",
  },
  {
    title: "A team that knows how to use it",
    body: "We show your people what to do on day one, with short guides they can come back to.",
  },
];

const steps = [
  {
    number: "01",
    title: "Look around.",
    you: "Tell us what you use today and where the week leaks hours.",
    we: "We review your tools, your files and who has access to what.",
  },
  {
    number: "02",
    title: "Plan.",
    you: "Review our recommendation and pick your starting use cases.",
    we: "We send a fixed scope, a clear price and a timeline before any work starts.",
  },
  {
    number: "03",
    title: "Connect and configure.",
    you: "Approve access and answer a few questions along the way.",
    we: "We connect your tools, tidy up what the AI can see, and set it up for your team.",
  },
  {
    number: "04",
    title: "Show your team.",
    you: "Bring your people to a live walkthrough.",
    we: "We demonstrate the starter use cases on your real work and leave you with simple guides.",
  },
];

const examples = [
  {
    title: "Meetings that write their own notes",
    body: "Summaries and action items land in your inbox, so nothing gets lost.",
  },
  {
    title: "Replies drafted from your own history",
    body: "Customer emails get a first draft in your voice, based on how you've answered before.",
  },
  {
    title: "Questions answered from your own files",
    body: "Ask about a contract, a price list or a policy and get an answer with the source, instead of hunting through folders.",
  },
  {
    title: "Weekly numbers pulled together for you",
    body: "The report you build by hand every Friday gets drafted automatically.",
  },
];

const questions = [
  {
    question: "We already have Copilot. Why do we need this?",
    answer: "Having a licence and having it work for you are different things. We connect it properly, point it at the right use cases, and make sure your team knows how to use it.",
  },
  {
    question: "Do we need to buy new software?",
    answer: "Usually no. We start with what you already pay for and only recommend something new if there is a clear reason.",
  },
  {
    question: "Is it safe for our customer data?",
    answer: "We review access and permissions before the AI is switched on, and we explain in plain English what it can and cannot see.",
  },
  {
    question: "How long does it take?",
    answer: "Most setups take one to two weeks, depending on how many systems we connect.",
  },
  {
    question: "Will our team actually use it?",
    answer: "That is why the walkthrough is built around your own work, not a generic demo. For deeper hands-on learning, our training workshops are the next step.",
  },
  {
    question: "What if we want more later?",
    answer: "We can build custom tools on top of your setup, or run a training session for the whole team.",
  },
];

const accents = ["bg-teal-bright", "bg-ardent-lime", "bg-coral", "bg-peach"];

const AISetup = () => {
  useEffect(() => {
    document.title = META_TITLE;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", META_DESCRIPTION);

    const faqId = "faq-jsonld-ai-setup";
    if (!document.getElementById(faqId)) {
      const script = document.createElement("script");
      script.id = faqId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://ardentstudio.io/services/ai-setup#faq",
        mainEntity: questions.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      });
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(faqId)?.remove();
    };
  }, []);

  return (
    <>
      <Nav />
      <main className="automation-cyan-theme">
        <section className="relative overflow-hidden bg-blush">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,125,123,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,125,123,0.10) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-20 md:px-10 md:pb-20 md:pt-24 lg:px-12">
            <span className="section-eyebrow mb-7 md:mb-10">AI Setup</span>
            <h1 className="max-w-[18ch] text-[clamp(38px,6vw,72px)] font-semibold leading-[1.05] text-foreground">
              You have the AI. Now make it work for your business.
            </h1>
            <p className="mt-6 max-w-[68ch] text-[18px] leading-[1.65] text-body-text md:mt-8 md:text-[20px]">
              Many teams buy Copilot or ChatGPT and then see little change. We come in, connect it to the systems you already use, and show your team the few things worth doing first.
            </p>
            <p className="mt-5 font-mono text-[13px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-primary md:mt-7">
              Fixed scope, you own the accounts, no new software to buy
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row md:mt-10 md:gap-4">
              <Button asChild className="h-auto min-h-11 rounded-full bg-ardent-lime px-8 py-4 text-[16px] font-semibold text-ardent-studio hover:bg-ardent-lime/90">
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a free 15-min call →</a>
              </Button>
              <Button asChild variant="outline" className="h-auto min-h-11 rounded-full border-foreground bg-transparent px-8 py-4 text-[16px] font-semibold text-foreground hover:bg-card">
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto max-w-[1200px]">
            <span className="section-eyebrow mb-5">Sound familiar?</span>
            <h2 className="max-w-[20ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-foreground">Paying for AI that nobody uses.</h2>
            <p className="mt-5 max-w-[72ch] text-[16px] leading-[1.75] text-body-text md:mt-7 md:text-[18px]">
              You rolled out a licence, sent a company email, and a few people tried it once. Now it sits there. Or you use it a bit, but you're not sure it's connected to the right things, or that it's safe with your files. That is the gap we close.
            </p>
          </div>
        </section>

        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto max-w-[1200px]">
            <span className="section-eyebrow mb-7 md:mb-10">What you get</span>
            <div className="mobile-rail grid gap-3 md:grid-cols-2 md:gap-5">
              {outcomes.map((outcome, index) => (
                <article key={outcome.title} className="workshop-card p-5 md:p-8">
                  <span className={`mb-4 block h-2.5 w-2.5 rounded-full ${accents[index]}`} aria-hidden="true" />
                  <h2 className="text-[24px] font-semibold leading-tight text-foreground">{outcome.title}</h2>
                  <p className="mt-3 text-[16px] leading-[1.7] text-body-text">{outcome.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-16 bg-background px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="how-it-works-heading">
          <div className="mx-auto max-w-[1200px]">
            <span className="section-eyebrow mb-5">How it works</span>
            <h2 id="how-it-works-heading" className="mb-7 max-w-[22ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-foreground md:mb-10">
              From first call to first wins in four steps.
            </h2>
            {steps.map((step, index) => (
              <div key={step.number} className="border-b border-border py-3 md:grid md:grid-cols-[80px_1fr_1fr_1fr] md:gap-7 md:py-7">
                <div className="flex items-center gap-3 md:contents">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[13px] text-ardent-studio md:h-12 md:w-12 md:text-base ${accents[index]}`}>{step.number}</span>
                  <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">{step.title}</h3>
                </div>
                <p className="mt-1.5 text-[16px] leading-snug text-body-text md:hidden"><span className="font-mono text-[12px] uppercase tracking-[0.15em] text-primary">You do</span> {step.you} <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-primary">We do</span> {step.we}</p>
                <p className="hidden text-[16px] leading-relaxed text-body-text md:block"><span className="mb-1 block font-mono text-[12px] uppercase tracking-[0.15em] text-primary">You do</span>{step.you}</p>
                <p className="hidden text-[16px] leading-relaxed text-body-text md:block"><span className="mb-1 block font-mono text-[12px] uppercase tracking-[0.15em] text-primary">We do</span>{step.we}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="examples-heading">
          <div className="mx-auto max-w-[1200px]">
            <span className="section-eyebrow mb-5">Practical examples</span>
            <h2 id="examples-heading" className="max-w-[20ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-foreground">Where most teams start.</h2>
            <p className="mt-5 max-w-[64ch] text-[16px] leading-[1.7] text-body-text md:text-[18px]">Yours will be chosen to fit. These are the kinds of wins we usually find first.</p>
            <div className="mobile-rail mt-7 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
              {examples.map((example, index) => (
                <article key={example.title} className="workshop-card p-5 md:p-8">
                  <span className={`mb-4 block h-2.5 w-2.5 rounded-full ${accents[index]}`} aria-hidden="true" />
                  <h3 className="text-[22px] font-semibold leading-tight text-foreground">{example.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.65] text-body-text">{example.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-footer-bg px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto max-w-[1200px]">
            <span className="mb-5 inline-flex w-fit items-center justify-center rounded-full bg-card px-3 py-2 text-center font-mono text-[13px] uppercase tracking-[0.2em] text-primary">Safe by design</span>
            <h2 className="max-w-[22ch] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-dark-band-text">We check what the AI can see first.</h2>
            <p className="mt-5 max-w-[74ch] text-[16px] leading-[1.75] text-dark-band-muted md:mt-7 md:text-[18px]">
              AI tools can surface anything a person has access to. In many small businesses, shared folders have grown messy over the years. Before we switch anything on, we review who can see what and help you fix the gaps, so the AI helps your team without exposing the wrong files.
            </p>
          </div>
        </section>

        <section className="bg-background px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto max-w-[1200px]">
            <span className="section-eyebrow mb-5">Included in every setup</span>
            <p className="max-w-[66ch] text-[18px] leading-[1.75] text-body-text">
              A live walkthrough for your team, short how-to guides, and 30 days of email support. You own the accounts and the configuration. We don't hold anything back.
            </p>
          </div>
        </section>

        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="max-w-[24ch] text-[clamp(30px,4vw,44px)] font-semibold leading-[1.15] text-foreground">Microsoft Copilot, ChatGPT, Claude and more.</h2>
            <p className="mt-5 max-w-[66ch] text-[16px] leading-[1.75] text-body-text md:text-[18px]">
              Most of our clients start with Microsoft Copilot because they already run Microsoft 365. We also set up ChatGPT, Claude and other tools, and we'll tell you honestly which one fits your business best.
            </p>
          </div>
        </section>

        <section id="faq" className="bg-blush px-5 py-12 md:px-10 md:py-[72px]" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-[1200px] gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            <div>
              <span className="section-eyebrow mb-5">Straight answers</span>
              <h2 id="faq-heading" className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-foreground">Questions about AI setup.</h2>
            </div>
            <Accordion type="single" collapsible className="workshop-card px-5 md:px-8">
              {questions.map((item, index) => (
                <AccordionItem key={item.question} value={`ai-setup-question-${index}`} className="border-border last:border-b-0">
                  <AccordionTrigger className="min-h-11 py-3.5 text-left text-[17px] font-semibold leading-snug text-foreground hover:no-underline md:py-6">{item.question}</AccordionTrigger>
                  <AccordionContent className="max-w-[68ch] pb-4 text-[16px] leading-[1.75] text-body-text md:pb-6">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-blush px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-foreground">Ready to get AI working in your business?</h2>
            <p className="mx-auto mt-5 max-w-[62ch] text-[16px] leading-[1.7] text-body-text md:mt-7 md:text-[18px]">
              Book a free 15-minute call. We'll ask what you use today, tell you honestly where AI can help, and send a short written follow-up.
            </p>
            <Button asChild className="mt-7 h-auto min-h-11 rounded-full bg-ardent-lime px-8 py-4 text-[16px] font-semibold text-ardent-studio hover:bg-ardent-lime/90 md:mt-10">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a free 15-min call →</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AISetup;