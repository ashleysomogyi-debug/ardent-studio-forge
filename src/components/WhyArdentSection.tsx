const cards = [
  {
    title: "Built for businesses like yours",
    desc: "We work with med spas, roofers, HVAC companies, attorneys, and service businesses across South Florida. We understand your clients, your workflows, and the problems that keep you up at night. That means less explaining on your end and faster results on ours.",
  },
  {
    title: "Fixed price. Always.",
    desc: "Our AI-assisted workflow means we build in days what traditional agencies build in weeks. We pass that efficiency to you through fixed-price packages — not inflated hourly rates. Your budget is a ceiling, not a floor.",
  },
  {
    title: "Code you own",
    desc: "No vendor lock-in. No proprietary platforms you'll be dependent on forever. You receive clean, exportable source code on day one. Take it anywhere, hand it to any developer, build on it yourself.",
  },
];

const WhyArdentSection = () => (
  <section className="relative py-[112px] px-5 md:px-10 overflow-hidden" style={{ background: "#1A1A1A" }}>
    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(145deg, rgba(13,191,188,0.04) 0%, transparent 40%, rgba(13,191,188,0.03) 100%)" }} />

    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="reveal-section mb-6 md:mb-10">
        <span className="font-mono text-[11px] text-teal tracking-[0.2em] uppercase">Why Ardent</span>
      </div>

      {/* 2-column layout: pull quote left, differentiators right */}
      <div className="reveal-section grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left — large italic pull quote */}
        <div className="flex items-start">
          <div className="border-l-2 border-teal/40 pl-8 md:pl-10">
            <h2 className="font-sans italic text-[clamp(32px,8vw,56px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.15] text-foreground">
              We're not just builders. We're <span className="text-teal">problem-solvers.</span>
            </h2>
          </div>
        </div>

        {/* Right — stacked differentiators with teal diamond bullets */}
        <div className="flex flex-col gap-10 md:gap-12">
          {cards.map((card) => (
            <div key={card.title} className="flex gap-4">
              <span className="text-teal text-[16px] mt-1 shrink-0">◈</span>
              <div>
                <h3 className="font-sans text-[22px] font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="font-sans text-[14px] text-body-text leading-[1.75]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyArdentSection;
