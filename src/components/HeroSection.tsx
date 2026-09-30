const HeroSection = () => (
  <section className="relative bg-bg-base overflow-hidden pt-24">
    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 md:py-20 grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
      <div>
      <div className="flex items-center gap-4 mb-10">
        <span className="block w-12 h-px bg-primary" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">Listen. Build. Train. Repeat.</span>
      </div>
      <h1 className="font-sans font-bold text-[clamp(2.75rem,5vw,5rem)] leading-[1.08] tracking-normal text-foreground max-w-4xl">
        Find where AI actually helps your business. Then{' '}
        <span className="inline bg-ardent-lime text-ardent-studio px-2 box-decoration-clone">make it work</span>.
      </h1>
      <p className="mt-10 max-w-2xl font-sans text-lg lg:text-xl text-body-text leading-relaxed">
        Practical AI for the way your team already works. We help you find the answer, build the tool, and teach your people to run it, at a fixed price.
      </p>
      <p className="mt-6 font-mono text-sm tracking-[0.15em] uppercase text-label-text">
        FIXED PRICE, 2-4 WEEKS, YOU OWN IT
      </p>
      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="https://calendly.com/asomogyi-ardentstudio/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-ardent-lime text-ardent-studio font-sans font-semibold rounded-full hover:opacity-85 transition-opacity"
        >
          Book a free 15-min call →
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-8 py-4 border border-foreground text-foreground font-sans font-semibold rounded-full hover:bg-foreground hover:text-background transition-colors"
        >
          See our work
        </a>
      </div>
      </div>
      <div className="relative aspect-[4/5] max-h-[650px] w-full overflow-hidden rounded-lg border border-border bg-card">
        <img src="https://ardentstudio.io/__l5e/assets-v1/772bd1d1-7aa2-46be-8fe6-952726991289/hero-speaking.png" alt="Ashley Somogyi speaking to a packed room of business owners" className="w-full h-full object-cover object-center" loading="eager" fetchPriority="high" />
      </div>
    </div>
  </section>
);

export default HeroSection;
