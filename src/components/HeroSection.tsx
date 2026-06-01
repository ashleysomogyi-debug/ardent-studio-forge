import heroPhoto from "@/assets/photos/hero-speaking.png.asset.json";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-ardent-studio overflow-hidden">
    {/* Background photo — Ashley speaking to a packed room */}
    <img
      src={heroPhoto.url}
      alt="Ashley Somogyi speaking to a packed room of business owners"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.32]"
      loading="eager"
      fetchPriority="high"
    />
    {/* Darkening + left-fade overlay so the wordmark stays the hero */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(90deg, rgba(13,13,13,0.96) 0%, rgba(13,13,13,0.82) 45%, rgba(13,13,13,0.55) 100%), linear-gradient(180deg, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0.85) 100%)",
      }}
    />
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
          AI tools for the way business already works
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
          href="https://calendly.com/asomogyi-ardentstudio/30min"
          target="_blank"
          rel="noopener noreferrer"
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
