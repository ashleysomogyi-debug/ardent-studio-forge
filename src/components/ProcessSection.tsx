import { useEffect, useRef, useState } from "react";

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
    meta: "Scoped timeline, zero padding",
  },
  {
    num: "04",
    title: "Handoff",
    desc: "Deployed app, full source code, and a walkthrough recording. Everything you need to own and run it independently — plus optional ongoing support.",
    meta: "Day one ownership",
  },
];

const SpeedBars = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal-section max-w-[720px] mb-16 md:mb-24">
      <span className="block font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-5">
        Website Build — Time to Launch
      </span>

      {/* Agency bar */}
      <div className="mb-3">
        <span className="block font-mono text-[11px] text-muted-foreground mb-1.5">Typical agency</span>
        <div className="relative h-10 rounded bg-surface-3 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-foreground/10 rounded transition-all duration-1000 ease-out flex items-center px-4"
            style={{ width: visible ? "100%" : "0%" }}
          >
            <span className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">6 – 8 weeks</span>
          </div>
        </div>
      </div>

      {/* Ardent bar */}
      <div className="mb-4">
        <span className="block font-mono text-[11px] text-muted-foreground mb-1.5">Ardent Studio</span>
        <div className="relative h-10 rounded bg-surface-3 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-primary rounded transition-all duration-1000 ease-out delay-300 flex items-center px-4"
            style={{ width: visible ? "18%" : "0%", minWidth: visible ? "120px" : "0px" }}
          >
            <span className="font-mono text-[11px] text-primary-foreground whitespace-nowrap">5 – 7 days</span>
          </div>
        </div>
      </div>

      <p className="font-mono text-[10px] text-muted-foreground/60 leading-[1.6]">
        AI automation &amp; custom builds are scoped per project — always a fixed timeline, zero padding.
      </p>
    </div>
  );
};

const ProcessSection = () => (
  <section id="process" className="relative py-[112px] px-5 md:px-10 bg-surface-2">
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-8 md:mb-12">
        <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase">How We Work</span>
      </div>

      <div className="reveal-section mb-10 md:mb-14">
        <h2 className="font-sans text-[clamp(32px,8vw,56px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.1]">
          From call to live<br />in <em className="text-primary not-italic">four steps.</em>
        </h2>
      </div>

      <SpeedBars />

      <div className="reveal-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`border border-border p-8 md:p-[56px_40px] ${i > 0 ? "border-t-0 md:border-t lg:border-l-0" : ""} ${i > 1 ? "md:border-t-0 lg:border-t" : ""} ${i === 1 ? "md:border-l-0" : ""} ${i === 3 ? "md:border-l-0" : ""}`}
          >
            <span className="font-mono text-[11px] text-muted-foreground">{step.num}</span>
            <h3 className="font-sans text-[22px] font-semibold text-foreground mt-3 md:mt-4 mb-4 md:mb-5">{step.title}</h3>
            <p className="font-sans text-[14px] text-muted-foreground leading-[1.75] mb-6 md:mb-8">{step.desc}</p>
            <span className="font-mono text-[11px] text-primary">{step.meta}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
