const HeroSection = () => (
  <section className="relative overflow-hidden bg-blush pt-24">
    <div className="coral-dot-grid pointer-events-none absolute right-5 top-28 hidden h-32 w-32 opacity-100 md:block" aria-hidden="true" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 md:py-20 grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
      <div>
       <span className="section-eyebrow mb-10">LISTEN. BUILD. TRAIN. REPEAT.</span>
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
       <div className="relative mx-auto w-full max-w-[520px] pb-5 pr-5 pt-5">
         <div className="absolute bottom-0 right-0 top-10 w-[92%] rounded-t-[999px] bg-teal-bright" aria-hidden="true" />
         <div className="absolute -left-2 top-[28%] z-20 h-8 w-8 rounded-full bg-ardent-lime md:h-11 md:w-11" aria-hidden="true" />
         <div className="absolute bottom-[18%] right-0 z-20 h-6 w-6 rounded-full bg-coral md:h-8 md:w-8" aria-hidden="true" />
         <div className="relative aspect-[4/5] max-h-[650px] w-full overflow-hidden rounded-t-[999px] border border-border bg-card">
           <img src="https://ardentstudio.io/__l5e/assets-v1/772bd1d1-7aa2-46be-8fe6-952726991289/hero-speaking.png" alt="Ashley Somogyi speaking to a packed room of business owners" className="h-full w-full object-cover object-center" loading="eager" fetchPriority="high" />
         </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
