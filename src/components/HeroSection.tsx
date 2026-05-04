const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-ardent-studio overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(to right, #C3F73A 1px, transparent 1px), linear-gradient(to bottom, #C3F73A 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
      <div className="flex items-center gap-4 mb-12">
        <span className="block w-12 h-px bg-ardent-lime" />
        <span className="font-mono text-xs tracking-[0.2em] text-ardent-lime uppercase">
          AI tools for the way local business already works
        </span>
      </div>
      <h1 className="font-sans font-black text-[clamp(4rem,12vw,12rem)] leading-[0.95] tracking-tight">
        <span className="text-ardent-lime">Listen.</span>{' '}
        <span className="text-ardent-cyan">Build.</span>
        <br />
        <span className="text-ardent-coral">Train.</span>{' '}
        <span className="text-ardent-mint">Repeat.</span>
      </h1>
      <p className="mt-12 max-w-2xl font-sans text-lg lg:text-xl text-ardent-paper/80 leading-relaxed">
        From "we keep meaning to automate that" to a tool that does it for you. Real builds. Real hours back. Real ownership.
      </p>
      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="#book-a-call"
          className="inline-flex items-center gap-2 px-8 py-4 bg-ardent-lime text-ardent-studio font-sans font-semibold rounded-full hover:bg-ardent-lime/90 transition-colors"
        >
          Book a free call →
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-8 py-4 border border-ardent-paper/30 text-ardent-paper font-sans font-semibold rounded-full hover:border-ardent-paper transition-colors"
        >
          See recent builds
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
