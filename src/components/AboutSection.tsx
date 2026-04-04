const teamCards = [
  {
    emoji: "👔",
    name: "Wesley Price",
    role: "STRATEGY & OPERATIONS · MBA",
    note: "Keeps the business side sharp. Numbers, strategy, and the voice of reason when ideas get too ambitious.",
  },
  {
    emoji: "🐾",
    name: "Loki",
    role: "CHIEF CHAOS OFFICER",
    note: "French Bulldog. Responsible for interrupting calls, stealing chairs, and ensuring no deadline ever feels too serious.",
    tealBg: true,
  },
  {
    emoji: "🌸",
    name: "Willow",
    role: "DIRECTOR OF EMOTIONAL SUPPORT",
    note: "French Bulldog. Specialises in lap-sitting during difficult client briefs and general office morale.",
    tealBg: true,
  },
];

const AboutSection = () => (
  <section id="about" className="relative py-[112px] px-5 md:px-10 overflow-hidden bg-bg-base">
    <div className="max-w-[1200px] mx-auto relative z-10">
      {/* Section label */}
      <div className="reveal-section mb-4">
        <span className="font-mono text-[11px] text-teal tracking-[0.2em] uppercase">The Team</span>
      </div>

      <h2 className="reveal-section font-sans text-[clamp(32px,8vw,48px)] md:text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-foreground mb-14 md:mb-20">
        Built by people who <em className="italic">actually give a damn.</em>
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        {/* Left — Founder bio */}
        <div className="reveal-section">
          <h3 className="font-sans text-[26px] md:text-[30px] font-semibold text-foreground leading-tight mb-1">
            Ashley Somogyi
          </h3>
          <span className="font-mono text-[11px] text-primary tracking-[0.15em] uppercase block mb-6">
            Founder
          </span>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-[15px] text-body-text leading-[1.75]">
              I started Ardent Studio because I kept watching great local businesses lose clients to slower, less-organised competitors — not because they were worse, but because they weren't set up to respond fast enough. I build the tools that fix that.
            </p>
            <p className="font-sans text-[15px] text-body-text leading-[1.75]">
              I'm based in Palm Beach County and South Florida businesses are who I'm here for. Fast builds, honest timelines, and no agency runaround. That's the whole deal.
            </p>
          </div>
        </div>

        {/* Right — Team cards */}
        <div className="flex flex-col gap-4">
          {teamCards.map((card) => (
            <div
              key={card.name}
              className="reveal-section group flex items-start gap-4 rounded-xl p-5 border transition-all duration-300"
              style={{
                background: "#1A1A1A",
                borderColor: "rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,191,188,0.25)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(13,191,188,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Avatar */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                style={{
                  background: card.tealBg ? "rgba(13,191,188,0.1)" : "rgba(255,255,255,0.06)",
                }}
              >
                {card.emoji}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h4 className="font-sans text-[16px] font-semibold text-foreground leading-tight">
                  {card.name}
                </h4>
                <span className="font-mono text-[10px] text-primary tracking-[0.12em] uppercase block mt-0.5 mb-2">
                  {card.role}
                </span>
                <p className="font-sans text-[13px] text-muted-foreground leading-[1.65]">
                  {card.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
