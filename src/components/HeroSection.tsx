import ParticleCanvas from "./ParticleCanvas";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-5 md:px-6 overflow-hidden bg-bg-base pt-[140px] pb-[112px]" style={{ minHeight: "100svh" }}>
      <ParticleCanvas />

      {/* Corner bracket accents */}
      <div className="absolute top-[100px] left-6 md:left-10 w-10 h-10 border-t-2 border-l-2 border-teal/30" />
      <div className="absolute top-[100px] right-6 md:right-10 w-10 h-10 border-t-2 border-r-2 border-teal/30" />
      <div className="absolute bottom-16 left-6 md:left-10 w-10 h-10 border-b-2 border-l-2 border-teal/30" />
      <div className="absolute bottom-16 right-6 md:right-10 w-10 h-10 border-b-2 border-r-2 border-teal/30" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto">
        {/* Tagline */}
        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-5 md:w-8 h-px bg-teal" />
          <span className="font-mono text-[11px] text-teal tracking-[0.2em] md:tracking-[0.3em] uppercase">From idea to live in days.</span>
          <span className="w-5 md:w-8 h-px bg-teal" />
        </div>

        {/* H1 */}
        <h1
          className="font-sans font-light leading-[0.95] mb-6 md:mb-8 animate-fade-up text-[clamp(36px,9vw,96px)] md:text-[clamp(56px,8vw,96px)]"
          style={{ animationDelay: "0.2s" }}
        >
          Your competitors are automated.<br />
          <span className="text-teal hero-pulse">Are you?</span>
        </h1>

        <p className="sr-only" aria-hidden="false">Ardent Studio — AI automation, custom web design, and app development for small businesses in Boynton Beach, Palm Beach County, and South Florida.</p>

        {/* Supporting line */}
        <h2
          className="font-sans text-[16px] md:text-[18px] text-body-text max-w-[460px] mb-6 md:mb-8 leading-[1.75] animate-fade-up font-normal"
          style={{ animationDelay: "0.4s" }}
        >
          AI automation &amp; web design for small businesses in South Florida. Stop losing jobs to businesses who respond faster.
        </h2>


        {/* Buttons */}
        <div className="flex items-center justify-center mb-10 md:mb-14 w-full animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#work"
            data-hover
            className="font-sans text-[13px] border border-foreground/30 text-foreground px-8 py-3.5 rounded-full hover:border-foreground/60 transition-colors w-full md:w-auto text-center"
          >
            See our work
          </a>
        </div>

        {/* Stats */}
        <div
          className="w-full border-t pt-8 md:pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up"
          style={{ borderColor: "rgba(196,146,74,0.2)", animationDelay: "0.6s" }}
        >
          {[
            { num: "1–3 wks", label: "Typical build time" },
            { num: "Fixed", label: "Price, always" },
            { num: "100%", label: "Code you own" },
            { num: "0 hrs", label: "Wasted in standups" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-sans italic text-gold text-[24px] md:text-[36px] leading-none">{s.num}</span>
              <span className="font-mono text-[11px] text-label-text mt-2 md:mt-3">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[11px] text-label-text tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-8 bg-label-text/30 overflow-hidden">
          <div className="w-full h-full bg-foreground scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
