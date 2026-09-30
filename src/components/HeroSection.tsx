const HeroSection = () => (
  <section className="relative overflow-hidden bg-blush pt-20">
    <div className="coral-dot-grid pointer-events-none absolute right-5 top-28 hidden h-32 w-32 opacity-100 md:block" aria-hidden="true" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pb-8 pt-4 md:pb-12 md:pt-6 grid lg:grid-cols-[1.08fr_0.92fr] gap-4 lg:gap-12 items-center">
      <div>
       <span className="section-eyebrow mb-5">LISTEN. BUILD. TRAIN. REPEAT.</span>
      <h1 className="font-sans font-bold text-[36px] md:text-[clamp(2.75rem,5vw,5rem)] leading-[1.08] tracking-normal text-foreground max-w-4xl">
        <span className="inline bg-ardent-lime text-ardent-studio px-2 box-decoration-clone">Get hours back</span>{' '}
        every week. We find what to automate, build it, and teach your team to run it.
      </h1>
      <p className="mt-5 md:mt-7 max-w-2xl font-sans text-lg lg:text-xl text-body-text leading-relaxed">
         Practical AI for the way you already work. You own everything we build.
      </p>
      <p className="mt-3 md:mt-5 font-mono text-[13px] tracking-[0.15em] uppercase text-label-text">
        FIXED PRICE, 2-4 WEEKS, YOU OWN IT
      </p>
       <div className="mt-5 md:mt-8 flex flex-wrap items-start gap-3 md:gap-4">
         <div>
           <a
             href="https://calendly.com/asomogyi-ardentstudio/30min"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-8 py-4 bg-ardent-lime text-ardent-studio font-sans font-semibold rounded-full hover:opacity-85 transition-opacity"
           >
             Book a free 15-min call →
           </a>
         </div>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-8 py-4 border border-foreground text-foreground font-sans font-semibold rounded-full hover:bg-foreground hover:text-background transition-colors"
        >
          See our work
        </a>
      </div>
      <ul className="mt-3 md:mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[13px] uppercase tracking-[0.12em] text-label-text" aria-label="What to expect">
         {["No pitch", "Plain English", "You own what we build"].map((t) => (
          <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />{t}</li>
        ))}
      </ul>
      </div>
       <div className="relative mx-auto w-full max-w-[520px] pb-2 pr-3 pt-2 md:pb-5 md:pr-5 md:pt-5">
         <div className="absolute bottom-0 right-0 top-10 w-[92%] rounded-t-[999px] bg-teal-bright" aria-hidden="true" />
         <div className="absolute -left-2 top-[28%] z-20 h-8 w-8 rounded-full bg-ardent-lime md:h-11 md:w-11" aria-hidden="true" />
         <div className="absolute bottom-[18%] right-0 z-20 h-6 w-6 rounded-full bg-coral md:h-8 md:w-8" aria-hidden="true" />
         <div className="relative aspect-[4/5] max-h-[320px] md:max-h-[650px] w-full overflow-hidden rounded-t-[999px] border border-border bg-card">
           <img src="https://ardentstudio.io/__l5e/assets-v1/772bd1d1-7aa2-46be-8fe6-952726991289/hero-speaking.png" alt="Ashley Somogyi speaking to a packed room of business owners" className="h-full w-full object-cover object-center" loading="eager" fetchPriority="high" />
         </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
