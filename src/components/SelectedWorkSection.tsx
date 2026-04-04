const works = [
  {
    num: "01",
    name: "SartoriAI",
    desc: "AI-powered sales training & roleplay simulation platform for enterprise B2B",
    tags: ["Enterprise SaaS", "AI Coaching", "EU & US"],
    link: "http://www.sartoriai.com/",
    status: null,
  },
  {
    num: "02",
    name: "ProposeKit",
    desc: "AI proposal generator for consultants, coaches, and sales reps",
    tags: ["Micro-SaaS", "AI Output", "SMB"],
    link: null,
    status: "In Build",
  },
  {
    num: "03",
    name: "Sales Readiness Tool",
    desc: "Team competency assessment & training recommendation engine",
    tags: ["Assessment", "L&D", "MEDDIC"],
    link: null,
    status: "Coming Soon",
  },
];

const SelectedWorkSection = () => (
  <section id="work" className="relative py-[112px] px-5 md:px-10 overflow-hidden" style={{ background: "#0D0D0D" }}>
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-8 md:mb-12">
        <span className="font-mono text-[11px] text-teal tracking-[0.2em] uppercase">Selected Work</span>
      </div>
      <div className="reveal-section">
        {works.map((w) => {
          const Tag = w.link ? "a" : "div";
          const linkProps = w.link
            ? { href: w.link, target: "_blank" as const, rel: "noopener noreferrer" }
            : {};
          return (
            <Tag
              key={w.num}
              {...linkProps}
              data-hover={w.link ? true : undefined}
              className={`group grid grid-cols-[32px_1fr_28px] md:grid-cols-[60px_1fr_auto_60px] items-center gap-3 md:gap-4 py-6 md:py-8 px-3 md:px-4 border-b border-border transition-all hover:bg-bg-base relative ${w.link ? "cursor-none" : ""}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <span className="font-mono text-[11px] text-label-text">{w.num}</span>
              <div>
                <span className="font-sans text-[22px] text-foreground font-semibold">{w.name}</span>
                <p className="font-sans text-[16px] text-body-text mt-1 md:mt-2 leading-[1.75]">{w.desc}</p>
                <div className="hidden md:flex flex-wrap gap-2 mt-3">
                  {w.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-label-text border border-border px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                {w.status && (
                  <span className="font-sans text-[14px] text-label-text/50">{w.status}</span>
                )}
              </div>
              <span className="font-sans text-[16px] md:text-[18px] text-label-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                {w.link ? "↗" : ""}
              </span>
            </Tag>
          );
        })}
      </div>
    </div>
  </section>
);

export default SelectedWorkSection;
