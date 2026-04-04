import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="relative py-[112px] px-5 md:px-10 overflow-hidden bg-bg-base">
    <div className="max-w-[1200px] mx-auto relative z-10">
      {/* Section label */}
      <div className="reveal-section mb-6 md:mb-10">
        <span className="font-mono text-[11px] text-teal tracking-[0.2em] uppercase">About</span>
      </div>

      <h2 className="reveal-section font-sans italic text-[clamp(32px,8vw,48px)] md:text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-foreground mb-14 md:mb-20">
        The people behind <span className="text-teal">Ardent Studio.</span>
      </h2>

      {/* Ashley — full width featured bio */}
      <div className="reveal-section mb-16 md:mb-20">
        <div className="flex items-center gap-5 mb-6">
          {/* Photo placeholder */}
          <div
            className="w-[88px] h-[88px] rounded-full flex flex-col items-center justify-center flex-shrink-0"
            style={{
              border: "1.5px dashed rgba(13,191,188,0.35)",
              background: "rgba(13,191,188,0.04)",
            }}
          >
            <User className="text-primary/50" size={28} strokeWidth={1.5} />
            <span className="font-mono text-[8px] text-primary/40 uppercase tracking-[0.1em] mt-0.5">Photo</span>
          </div>

          {/* Name + role */}
          <div>
            <h3 className="font-sans text-[24px] md:text-[28px] font-semibold text-foreground leading-tight">
              Ashley Somogyi
            </h3>
            <span className="font-mono text-[12px] text-muted-foreground mt-1 block">
              Founder · Palm Beach County, FL
            </span>
          </div>
        </div>

        <div className="max-w-[640px] flex flex-col gap-4">
          <p className="font-sans text-[15px] text-body-text leading-[1.75]">
            I started Ardent Studio because I kept watching great local businesses lose clients to slower competitors — not because they were worse, but because they weren't set up to respond fast enough. I build the tools that fix that.
          </p>
          <p className="font-sans text-[15px] text-body-text leading-[1.75]">
            When you work with Ardent Studio, you work with me directly. No account managers, no overseas handoffs, no wondering who's actually building your thing. Just me, in Palm Beach County, getting it done.
          </p>
        </div>
      </div>

      {/* Team cards grid */}
      <div className="reveal-section grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          {
            name: "Wesley Price",
            role: "Operations & Strategy",
            desc: "Keeps everything running on time and on budget. If there's a bottleneck, Wesley already fixed it.",
          },
          {
            name: "Loki",
            role: "Studio Dog · Head of Morale",
            desc: "Supervises every Zoom call. Has never missed a deadline — mostly because he sleeps through them.",
          },
          {
            name: "Willow",
            role: "Studio Dog · Junior Associate",
            desc: "Specializes in moral support and aggressive napping. Currently under review for chewing a USB cable.",
          },
        ].map((member) => (
          <div
            key={member.name}
            className="rounded-xl p-6 border"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <h4 className="font-sans text-[18px] font-semibold text-foreground mb-1">{member.name}</h4>
            <span className="font-mono text-[11px] text-primary/70 block mb-4">{member.role}</span>
            <p className="font-sans text-[14px] text-body-text leading-[1.7]">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
