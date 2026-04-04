const TeamSection = () => {
  const ashleyDetails = [
    { label: "Based in", value: "Palm Beach County, FL" },
    { label: "Focus", value: "Apps, automations, and AI-powered digital tools for SMBs" },
    { label: "Approach", value: "Solo founder. One point of contact. Built from scratch, not from a theme." },
  ];

  const ashleyTags = ["web development", "AI automation", "small business", "Palm Beach County", "solo founder"];
  const dogTags = ["beach days", "desk co-pilots", "treat negotiations", "nap optimization", "client charm"];

  const dogStats = [
    { value: "2", label: "Frenchies" },
    { value: "∞", label: "Snacks consumed" },
    { value: "100%", label: "Meeting attendance" },
    { value: "0", label: "Bugs shipped" },
  ];

  return (
    <section className="reveal-section py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-white mb-3">
          Meet the Team
        </h2>
        <p
          className="font-mono text-sm text-center mb-16"
          style={{ color: "rgba(244,244,246,0.52)" }}
        >
          The humans and hounds behind the builds
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CARD 1 — Ashley */}
          <div
            className="rounded-xl p-8 transition-colors duration-300"
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(244,244,246,0.08)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(244,244,246,0.08)")}
          >
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
              {/* Photo column */}
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(244,244,246,0.08)" }}
              >
                <img
                  src="/ashley-profile.jpg"
                  alt="Ashley Somogyi"
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                />
                <div
                  className="absolute bottom-2 left-2 px-3 py-1.5 rounded-md font-mono uppercase tracking-wider"
                  style={{
                    fontSize: "10px",
                    background: "rgba(7,7,7,0.72)",
                    backdropFilter: "blur(10px)",
                    color: "#c9a96e",
                  }}
                >
                  Palm Beach County
                </div>
              </div>

              {/* Info column */}
              <div>
                {/* Role badge */}
                <span
                  className="inline-block rounded-full px-4 py-1.5 font-mono uppercase mb-4"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "2px",
                    background: "rgba(201,169,110,0.08)",
                    border: "1px solid rgba(201,169,110,0.25)",
                    color: "#c9a96e",
                  }}
                >
                  Founder
                </span>

                <h3 className="font-serif text-[42px] font-bold text-white leading-tight">
                  Ashley Somogyi
                </h3>
                <p className="font-mono text-sm mb-6" style={{ color: "rgba(244,244,246,0.52)" }}>
                  Founder &amp; Builder · <span style={{ color: "#c9a96e" }}>Ardent Studio</span>
                </p>

                <p
                  className="font-mono mb-7"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.85,
                    color: "rgba(244,244,246,0.78)",
                  }}
                >
                  I build apps, automations and digital tools for small businesses that need real
                  results—not a template and a prayer. When you work with Ardent Studio,{" "}
                  <span className="font-medium" style={{ color: "#c9a96e" }}>
                    you work with me directly
                  </span>
                  . No account managers, no overseas handoffs, no wondering who's actually building
                  your thing.
                </p>

                {/* Details block */}
                <div
                  className="py-5 mb-6"
                  style={{
                    borderTop: "1px solid rgba(244,244,246,0.08)",
                    borderBottom: "1px solid rgba(244,244,246,0.08)",
                  }}
                >
                  <div className="flex flex-col gap-3.5">
                    {ashleyDetails.map((d) => (
                      <div key={d.label} className="flex">
                        <span
                          className="font-mono uppercase shrink-0"
                          style={{
                            fontSize: "10px",
                            letterSpacing: "1.5px",
                            color: "rgba(244,244,246,0.35)",
                            width: "90px",
                          }}
                        >
                          {d.label}
                        </span>
                        <span
                          className="font-mono"
                          style={{ fontSize: "13px", color: "rgba(244,244,246,0.78)" }}
                        >
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {ashleyTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md px-3.5 py-1.5 font-mono"
                      style={{
                        fontSize: "11px",
                        background: "rgba(244,244,246,0.04)",
                        border: "1px solid rgba(244,244,246,0.08)",
                        color: "rgba(244,244,246,0.52)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 — Loki & Willow */}
          <div
            className="rounded-xl p-8 transition-colors duration-300"
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(244,244,246,0.08)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(244,244,246,0.08)")}
          >
            {/* Role badge */}
            <span
              className="inline-block rounded-full px-4 py-1.5 font-mono uppercase mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                background: "rgba(201,169,110,0.08)",
                border: "1px solid rgba(201,169,110,0.25)",
                color: "#c9a96e",
              }}
            >
              🐾 Chief of Snuggles &amp; Snacks
            </span>

            <h3 className="font-serif text-[42px] font-bold text-white leading-tight">
              Loki <span className="italic font-normal" style={{ color: "#c9a96e" }}>&amp;</span> Willow
            </h3>
            <p className="font-mono text-sm mb-8" style={{ color: "rgba(244,244,246,0.52)" }}>
              French Bulldogs · Palm Beach County, FL
            </p>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-1.5 rounded-xl overflow-hidden mb-8">
              {/* Top row — full width */}
              <div className="col-span-2 relative overflow-hidden h-[280px]" style={{ background: "#0d0d0d" }}>
                <img
                  src="/loki-willow-chairs.jpg"
                  alt="Loki and Willow on chairs"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                />
                <div
                  className="absolute bottom-2 left-2 px-3 py-1.5 rounded-md font-mono uppercase tracking-wider"
                  style={{
                    fontSize: "10px",
                    background: "rgba(7,7,7,0.72)",
                    backdropFilter: "blur(10px)",
                    color: "#c9a96e",
                  }}
                >
                  Delray Beach
                </div>
              </div>

              {/* Bottom left */}
              <div className="relative overflow-hidden h-[220px]" style={{ background: "#0d0d0d" }}>
                <img
                  src="/loki-willow-special.jpg"
                  alt="Loki and Willow"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                />
                <div
                  className="absolute bottom-2 left-2 px-3 py-1.5 rounded-md font-mono uppercase tracking-wider"
                  style={{
                    fontSize: "10px",
                    background: "rgba(7,7,7,0.72)",
                    backdropFilter: "blur(10px)",
                    color: "#c9a96e",
                  }}
                >
                  Loki &amp; Willow
                </div>
              </div>

              {/* Bottom right */}
              <div className="relative overflow-hidden h-[220px]" style={{ background: "#0d0d0d" }}>
                <img
                  src="/willow-beach-towel.jpg"
                  alt="Willow at the beach"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                />
                <div
                  className="absolute bottom-2 left-2 px-3 py-1.5 rounded-md font-mono uppercase tracking-wider"
                  style={{
                    fontSize: "10px",
                    background: "rgba(7,7,7,0.72)",
                    backdropFilter: "blur(10px)",
                    color: "#c9a96e",
                  }}
                >
                  Beach Day
                </div>
              </div>
            </div>

            {/* Bio */}
            <p
              className="font-mono mb-7 max-w-[600px]"
              style={{
                fontSize: "13px",
                lineHeight: 1.8,
                color: "rgba(244,244,246,0.78)",
              }}
            >
              Office morale runs through these two.{" "}
              <span className="font-medium" style={{ color: "#c9a96e" }}>Loki</span> handles quality
              assurance—if your build doesn't get a tail wag, it ships with revisions.{" "}
              <span className="font-medium" style={{ color: "#c9a96e" }}>Willow</span> manages client
              relations from whatever sunny spot she's claimed that day. Both insist on being present
              for every Zoom call and have strong opinions about lunch breaks.
            </p>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-5 md:gap-8 py-5 mb-6"
              style={{
                borderTop: "1px solid rgba(244,244,246,0.08)",
                borderBottom: "1px solid rgba(244,244,246,0.08)",
              }}
            >
              {dogStats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-2xl font-semibold text-white">{s.value}</div>
                  <div
                    className="font-mono uppercase"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1.5px",
                      color: "rgba(244,244,246,0.4)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {dogTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md px-3.5 py-1.5 font-mono"
                  style={{
                    fontSize: "11px",
                    background: "rgba(244,244,246,0.04)",
                    border: "1px solid rgba(244,244,246,0.08)",
                    color: "rgba(244,244,246,0.52)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
