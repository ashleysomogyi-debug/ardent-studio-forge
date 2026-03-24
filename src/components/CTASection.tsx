import ParticleCanvas from "./ParticleCanvas";

const CTASection = () => (
  <section id="contact" className="relative py-32 px-6 md:px-10 bg-bg-base overflow-hidden">
    <ParticleCanvas />
    <div className="relative z-10 max-w-[700px] mx-auto text-center reveal-section">
      <h2 className="font-serif text-[clamp(36px,6vw,72px)] font-light leading-[1.05] mb-6">
        Tell us<br />what you're<br /><em className="text-gold">building.</em>
      </h2>
      <p className="font-mono text-[17px] text-body-text max-w-[420px] mx-auto mb-10 leading-relaxed">
        Scope call is free, takes 30 minutes, and you'll leave with a clear plan — whether you work with us or not.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#"
          data-hover
          className="font-mono text-[17px] bg-foreground text-bg-base px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Book a free scope call
        </a>
        <a
          href="#work"
          data-hover
          className="font-mono text-[17px] border border-foreground/30 text-foreground px-7 py-3 rounded-full hover:border-foreground/60 transition-colors"
        >
          See our work
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
