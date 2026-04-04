const cards = [
  {
    num: "01",
    title: "Startup MVPs",
    desc: "Your idea, deployed in 1–3 weeks. We scope it, build it, and hand over code you own outright. No dev agency overhead, no equity ask.",
    price: "From $2,500",
  },
  {
    num: "02",
    title: "Business Tools",
    desc: "Internal dashboards, client portals, proposal generators, automation workflows. The software your operation actually needs — built to your exact process.",
    price: "From $5,000",
  },
  {
    num: "03",
    title: "Rescue & Finish",
    desc: "Built 70% of something in Lovable, Bolt, or Replit and hit a wall? We take over, untangle it, and ship a working product — fast.",
    price: "From $750",
  },
];

const WhatWeBuildSection = () => (
  <section id="services" className="relative py-[112px] px-5 md:px-10" style={{ background: "#141414" }}>
    <div className="absolute top-8 left-1/2 -translate-x-1/2 text-teal/40 text-[24px]">◈</div>
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-8 md:mb-12">
        <span className="font-mono text-[11px] text-teal tracking-[0.2em] uppercase">What We Build</span>
      </div>
      <div className="reveal-section grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={card.num}
            className={`group bg-bg-elevated p-8 md:p-[56px_44px] border border-border hover:bg-bg-hover transition-colors relative overflow-hidden ${i > 0 ? "md:border-l-0 border-t-0 md:border-t" : ""}`}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <span className="font-mono text-[11px] text-label-text">{card.num}</span>
            <h3 className="font-sans text-[22px] font-semibold text-foreground mt-3 md:mt-4 mb-4 md:mb-5">{card.title}</h3>
            <p className="font-sans text-[14px] text-body-text leading-[1.75] mb-6 md:mb-10">{card.desc}</p>
            <span className="font-sans text-[14px] text-teal">{card.price}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeBuildSection;
