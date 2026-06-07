import heroPhoto from "@/assets/photos/hero-speaking.png.asset.json";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-ardent-studio overflow-hidden">
    {/* Background photo — Ashley speaking to a packed room.
        Asymmetric reveal: nearly hidden on the left where the wordmark sits,
        legible (~0.55) on the right third so the audience is actually proof. */}
    <img
      src={heroPhoto.url}
      alt="Ashley Somogyi speaking to a packed room of business owners"
      className="absolute inset-0 w-full h-full object-cover object-right"
      loading="eager"
      fetchPriority="high"
      style={{
        opacity: 0.6,
        WebkitMaskImage:
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,1) 100%)",
        maskImage:
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,1) 100%)",
      }}
    />
    {/* Vertical darkening so type stays the hero, plus a gentle left wash */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(90deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.55) 50%, rgba(13,13,13,0.15) 100%), linear-gradient(180deg, rgba(13,13,13,0.35) 0%, rgba(13,13,13,0.75) 100%)",
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
        <span className="font-mono text-xs tracking-[0.2em] uppercase">
          <span className="text-ardent-lime">Listen.</span>{' '}
          <span className="text-ardent-cyan">Build.</span>{' '}
          <span className="text-ardent-coral">Train.</span>{' '}
          <span className="text-ardent-mint">Repeat.</span>
        </span>
      </div>
      <h1 className="font-sans font-black text-[clamp(2.75rem,7.5vw,7rem)] leading-[1.02] tracking-tight text-ardent-paper max-w-5xl">
        AI tools for the way business{' '}
        <span className="text-ardent-lime">already works</span>
      </h1>
      <p className="mt-12 max-w-2xl font-sans text-lg lg:text-xl text-ardent-paper/80 leading-relaxed">
        Small, fixed-scope builds for marketing agencies, consultancies, and
        fractional executives. From "we keep meaning to automate that" to a
        tool that does it for you.
      </p>
      <p className="mt-6 font-mono text-sm tracking-[0.15em] uppercase text-ardent-paper/60">
        Fixed price · 2–4 weeks · You own it
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
