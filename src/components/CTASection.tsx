import ParticleCanvas from "./ParticleCanvas";

const CTASection = () => (
  <section id="contact" className="relative py-[112px] px-5 md:px-10 overflow-hidden" style={{ background: "#0D0D0D" }}>
    <ParticleCanvas />

    {/* Diagonal teal gradient overlay */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(13,191,188,0.08) 0%, transparent 50%, rgba(13,191,188,0.04) 100%)" }} />

    {/* Teal top border accent */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

    <div className="relative z-10 max-w-[700px] mx-auto text-center reveal-section">
      <span className="block font-mono text-[11px] text-teal tracking-[0.2em] uppercase mb-6">Get Started</span>
      <h2 className="font-sans text-[clamp(32px,8vw,56px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.1] mb-6 md:mb-8">
        Tell us<br />what you're<br /><em className="text-teal not-italic">building.</em>
      </h2>
      <p className="font-sans text-[16px] text-body-text max-w-[400px] md:max-w-[460px] mx-auto mb-8 md:mb-12 leading-[1.75]">
        Scope call is free, takes 30 minutes, and you'll leave with a clear plan — whether you work with us or not.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
        <a
          href="#"
          data-hover
          className="font-sans text-[13px] bg-foreground text-bg-base px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity w-full md:w-auto text-center"
        >
          Book a free scope call
        </a>
        <a
          href="#work"
          data-hover
          className="font-sans text-[13px] border border-foreground/30 text-foreground px-8 py-3.5 rounded-full hover:border-foreground/60 transition-colors w-full md:w-auto text-center"
        >
          See our work
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
