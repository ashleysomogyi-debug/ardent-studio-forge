import ParticleCanvas from "./ParticleCanvas";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-bg-base">
      <ParticleCanvas />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-8 h-px bg-gold" />
          <span className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase">AI-Powered App Development</span>
          <span className="w-8 h-px bg-gold" />
        </div>

        {/* H1 */}
        <h1
          className="font-serif font-light leading-[0.9] mb-8 animate-fade-up text-[clamp(52px,13vw,80px)] md:text-[clamp(68px,11vw,156px)]"
          style={{ animationDelay: "0.2s" }}
        >
          From idea<br />
          to <em className="text-gold">shipped</em><br />
          in days.
        </h1>

        {/* Body */}
        <p
          className="font-mono text-[13px] text-body-text max-w-[420px] mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          We build production-ready apps, internal tools, and SaaS products for founders and businesses — faster than any dev team, at a fraction of the cost.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            data-hover
            className="font-mono text-[11px] bg-foreground text-bg-base px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a free scope call
          </a>
          <a
            href="#work"
            data-hover
            className="font-mono text-[11px] border border-foreground/30 text-foreground px-7 py-3 rounded-full hover:border-foreground/60 transition-colors"
          >
            See our work
          </a>
        </div>

        {/* Stats */}
        <div
          className="w-full border-t border-border pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { num: "1–3 wks", label: "Typical build time" },
            { num: "Fixed", label: "Price, always" },
            { num: "100%", label: "Code you own" },
            { num: "0 hrs", label: "Wasted in standups" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-serif italic text-gold text-[36px] leading-none">{s.num}</span>
              <span className="font-mono text-[10px] text-label-text mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] text-label-text tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-8 bg-label-text/30 overflow-hidden">
          <div className="w-full h-full bg-foreground scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
