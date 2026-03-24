import ParticleCanvas from "./ParticleCanvas";

const CTASection = () => (
  <section id="contact" className="relative py-40 px-6 md:px-10 bg-bg-base overflow-hidden">
    <ParticleCanvas />
    <div className="relative z-10 max-w-[700px] mx-auto text-center reveal-section">
      <h2 className="font-serif text-[clamp(36px,6vw,72px)] font-light leading-[1.1] mb-8">
        Tell us<br />what you're<br /><em className="text-gold">building.</em>
      </h2>
      <p className="font-mono text-[17px] text-body-text max-w-[460px] mx-auto mb-12 leading-[1.8]">
        Scope call is free, takes 30 minutes, and you'll leave with a clear plan — whether you work with us or not.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <a
          href="#"
          data-hover
          className="font-mono text-[17px] bg-foreground text-bg-base px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Book a free scope call
        </a>
        <a
          href="#work"
          data-hover
          className="font-mono text-[17px] border border-foreground/30 text-foreground px-8 py-3.5 rounded-full hover:border-foreground/60 transition-colors"
        >
          See our work
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
