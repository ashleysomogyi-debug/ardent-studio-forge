const steps = [
  {
    num: "01",
    title: "Scope call",
    desc: "30 minutes to define the problem, the core user flow, and what success looks like. We ask the questions most developers skip. You leave with a clear scope document.",
    meta: "Free · 30 minutes",
  },
  {
    num: "02",
    title: "Proposal",
    desc: "A fixed-price proposal with deliverables, milestones, and timeline — within 24 hours. No hourly billing. No surprise invoices. 50% upfront, 50% on delivery.",
    meta: "24 hr turnaround",
  },
  {
    num: "03",
    title: "Build",
    desc: "We build in short sprints and share progress every 2–3 days. You give feedback as we go. No big reveal. You see the product forming in real time.",
    meta: "1–3 weeks",
  },
  {
    num: "04",
    title: "Handoff",
    desc: "Deployed app, full source code, and a walkthrough recording. Everything you need to own and run it independently — plus optional ongoing support.",
    meta: "Day one ownership",
  },
];

const ProcessSection = () => (
  <section id="process" className="bg-bg-base py-20 px-6 md:py-24 md:px-10">
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-16">
        <span className="font-mono text-[10px] text-gold tracking-[0.2em] uppercase">How we work</span>
      </div>

      {/* Intro */}
      <div className="reveal-section grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-light leading-[1.05]">
          A process<br />built for<br /><em className="text-gold">speed.</em>
        </h2>
        <p className="font-mono text-[13px] text-body-text leading-relaxed self-end">
          Most agencies run discovery for weeks before writing a line of code. We scope in 30 minutes, propose within 24 hours, and ship your first working build in days. Four steps. No surprises.
        </p>
      </div>

      {/* Steps grid */}
      <div className="reveal-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`border border-border p-[52px_36px] ${i > 0 ? "lg:border-l-0" : ""} ${i > 1 ? "md:border-t-0 lg:border-t" : ""} ${i === 1 ? "md:border-l-0" : ""} ${i === 3 ? "md:border-l-0" : ""}`}
          >
            <span className="font-mono text-[10px] text-label-text">{step.num}</span>
            <h3 className="font-serif text-[24px] font-light text-foreground mt-3 mb-4">{step.title}</h3>
            <p className="font-mono text-[11px] text-body-text leading-relaxed mb-6">{step.desc}</p>
            <span className="font-mono text-[10px] text-gold">{step.meta}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
