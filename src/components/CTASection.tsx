const CTASection = () => (
  <section id="contact" className="bg-background px-5 py-16 md:px-10 md:py-24">
    <div className="mx-auto grid max-w-[1200px] gap-8 rounded-[28px] bg-ardent-lime p-7 md:grid-cols-[170px_1fr_auto] md:items-center md:p-10 lg:p-12">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ardent-studio">Get Started</span>
      <div>
        <h2 className="font-sans text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] text-ardent-studio">
          Tell us what you're building.
        </h2>
        <p className="mt-4 max-w-[620px] font-sans text-[15px] leading-[1.7] text-ardent-studio/75">
          Scope call is free, takes 15 minutes, and you'll leave with a clear plan: whether you work with us or not.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
        <a
          href="https://calendly.com/asomogyi-ardentstudio/30min"
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          className="w-full rounded-full bg-ardent-studio px-8 py-3.5 text-center font-sans text-[13px] font-semibold text-bg-base transition-opacity hover:opacity-85 md:w-auto"
        >
          Book a free 15-min call
        </a>
        <a
          href="#work"
          data-hover
          className="w-full rounded-full border border-ardent-studio px-8 py-3.5 text-center font-sans text-[13px] font-semibold text-ardent-studio transition-opacity hover:opacity-70 md:w-auto"
        >
          See our work
        </a>
      </div>
      </div>
    </div>
  </section>
);

export default CTASection;
