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
  <section id="work" className="bg-bg-elevated py-20 px-6 md:py-24 md:px-10">
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-16">
        <span className="font-mono text-[14px] text-gold tracking-[0.2em] uppercase">Selected work</span>
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
              className={`group grid grid-cols-[40px_1fr_40px] md:grid-cols-[60px_1fr_auto_60px] items-center gap-4 py-6 px-4 border-b border-border transition-all hover:bg-bg-base relative ${w.link ? "cursor-none" : ""}`}
            >
              {/* Gold left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <span className="font-mono text-[14px] text-label-text">{w.num}</span>
              <div>
                <span className="font-serif text-[20px] text-foreground">{w.name}</span>
                <p className="font-mono text-[15px] text-body-text mt-1">{w.desc}</p>
                <div className="hidden md:flex flex-wrap gap-2 mt-2">
                  {w.tags.map((t) => (
                    <span key={t} className="font-mono text-[15px] text-label-text border border-border px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                {w.status && (
                  <span className="font-mono text-[15px] text-label-text/50">{w.status}</span>
                )}
              </div>
              <span className="font-serif text-[18px] text-label-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
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
