import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section id="contact" className="bg-background px-5 py-12 md:px-10 md:py-[72px]">
    <div className="relative mx-auto grid max-w-[1200px] gap-8 overflow-hidden rounded-[28px] bg-footer-bg p-7 md:grid-cols-[170px_1fr_auto] md:items-center md:p-10 lg:p-12">
      <div className="absolute right-6 top-6 flex gap-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full bg-ardent-lime" />
      </div>
      <span className="relative font-mono text-[13px] uppercase tracking-[0.2em] text-dark-band-muted">Get Started</span>
      <div>
        <h2 className="font-sans text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] text-dark-band-text">
          Tell us what you're building.
        </h2>
        <p className="mt-4 max-w-[620px] font-sans text-[16px] leading-[1.7] text-dark-band-muted">
          Scope call is free, takes 15 minutes, and you'll leave with a clear plan, whether you work with us or not.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
        <Button asChild className="h-auto w-full rounded-full bg-ardent-lime px-8 py-3.5 text-[16px] font-semibold text-ardent-studio hover:bg-ardent-lime/90 md:w-auto">
          <a href="https://calendly.com/asomogyi-ardentstudio/30min" target="_blank" rel="noopener noreferrer" data-hover>Book a free 15-min call</a>
        </Button>
        <Button asChild variant="outline" className="h-auto w-full rounded-full border-dark-band-text bg-transparent px-8 py-3.5 text-[16px] font-semibold text-dark-band-text hover:bg-dark-band-text hover:text-ardent-studio md:w-auto">
          <a href="#work" data-hover>See our work</a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
