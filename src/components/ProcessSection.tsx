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
  <section id="process" className="relative py-[112px] px-5 md:px-10" style={{ background: "#1A1A1A" }}>
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-8 md:mb-12">
        <span className="font-mono text-[11px] text-teal tracking-[0.2em] uppercase">How We Work</span>
      </div>

      <div className="reveal-section grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
        <h2 className="font-sans text-[clamp(32px,8vw,56px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.1]">
          A process<br />built for<br /><em className="text-teal not-italic">speed.</em>
        </h2>
        <p className="font-sans text-[16px] text-body-text leading-[1.75] self-end">
          Most agencies run discovery for weeks before writing a line of code. We scope in 30 minutes, propose within 24 hours, and ship your first working build in days. Four steps. No surprises.
        </p>
      </div>

      <div className="reveal-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`border border-border p-8 md:p-[56px_40px] ${i > 0 ? "border-t-0 md:border-t lg:border-l-0" : ""} ${i > 1 ? "md:border-t-0 lg:border-t" : ""} ${i === 1 ? "md:border-l-0" : ""} ${i === 3 ? "md:border-l-0" : ""}`}
          >
            <span className="font-mono text-[11px] text-label-text">{step.num}</span>
            <h3 className="font-sans text-[22px] font-semibold text-foreground mt-3 md:mt-4 mb-4 md:mb-5">{step.title}</h3>
            <p className="font-sans text-[14px] text-body-text leading-[1.75] mb-6 md:mb-8">{step.desc}</p>
            <span className="font-mono text-[11px] text-teal">{step.meta}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
