const cards = [
  {
    title: "Domain expertise baked in",
    desc: "Our founders bring 15+ years across enterprise sales, L&D, and EdTech. We understand your business problem before we write a single prompt. That gap between 'what the AI built' and 'what you actually need' disappears.",
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
  <section className="bg-bg-elevated border-y border-border py-20 px-6 md:py-24 md:px-10">
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-8">
        <span className="font-mono text-[14px] text-gold tracking-[0.2em] uppercase">Why Ardent</span>
      </div>
      <h2 className="reveal-section font-serif text-[clamp(36px,5vw,56px)] font-light leading-[1.05] mb-16">
        We're not just<br />builders. We're<br /><em className="text-gold">problem-solvers.</em>
      </h2>
      <div className="reveal-section grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {cards.map((card) => (
          <div key={card.title} className="bg-bg-elevated p-[48px_40px]">
            <span className="text-gold text-[20px]">◈</span>
            <h3 className="font-serif text-[22px] font-light text-foreground mt-4 mb-4">{card.title}</h3>
            <p className="font-mono text-[15px] text-body-text leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyArdentSection;
