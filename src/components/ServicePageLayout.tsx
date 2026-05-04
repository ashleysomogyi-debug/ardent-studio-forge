import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Nav from "./Nav";
import Footer from "./Footer";
import ParticleCanvas from "./ParticleCanvas";

interface Feature {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
  result: string;
}

interface ServicePageLayoutProps {
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  introText: string;
  features: Feature[];
  whyArdent: string[];
  ctaText: string;
  industries?: string[];
  caseStudy?: CaseStudy;
}

const ServicePageLayout = ({
  metaTitle,
  metaDescription,
  headline,
  subheadline,
  introText,
  features,
  whyArdent,
  ctaText,
  industries,
  caseStudy,
}: ServicePageLayoutProps) => {
  useScrollReveal();

  useEffect(() => {
    document.title = metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", metaDescription);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = metaDescription;
      document.head.appendChild(newMeta);
    }
  }, [metaTitle, metaDescription]);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[112px] px-5 md:px-10 overflow-hidden" style={{ background: "var(--color-bg)" }}>
          <ParticleCanvas />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(13,191,188,0.06) 0%, transparent 50%)" }} />
          <div className="relative z-10 max-w-[800px] mx-auto text-center reveal-section">
            <span className="block font-mono text-[11px] text-ardent-cyan tracking-[0.2em] uppercase mb-6">Ardent Studio</span>
            <h1 className="font-sans text-[clamp(32px,8vw,56px)] md:text-[clamp(36px,4.5vw,64px)] font-light leading-[1.1] mb-6">
              {headline}
            </h1>
            <h2 className="font-sans text-[18px] md:text-[20px] text-body-text font-light leading-[1.6] mb-8">
              {subheadline}
            </h2>
            <p className="font-sans text-[15px] text-label-text leading-[1.75] max-w-[600px] mx-auto">
              {introText}
            </p>
          </div>
        </section>

        <div className="h-px bg-border" />

        {/* Features Grid */}
        <section className="py-[80px] md:py-[112px] px-5 md:px-10" style={{ background: "var(--color-surface-2)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="reveal-section mb-10 md:mb-14">
              <span className="font-mono text-[11px] text-ardent-cyan tracking-[0.2em] uppercase">What's Included</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="reveal-section rounded-lg p-6 md:p-8 border border-border-subtle hover:border-ardent-cyan/30 transition-colors"
                  style={{ background: "var(--color-surface)" }}
                >
                  <span className="text-ardent-cyan text-[16px] mb-4 block">◈</span>
                  <h3 className="font-sans text-[18px] font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="font-sans text-[14px] text-body-text leading-[1.75]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-border" />

        {/* Industries */}
        {industries && industries.length > 0 && (
          <>
            <section className="py-[64px] md:py-[80px] px-5 md:px-10" style={{ background: "var(--color-bg)" }}>
              <div className="max-w-[800px] mx-auto text-center reveal-section">
                <span className="font-mono text-[11px] text-ardent-cyan tracking-[0.2em] uppercase mb-6 block">Industries We Serve</span>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="font-sans text-[13px] text-label-text border border-border-subtle rounded-full px-4 py-2"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </section>
            <div className="h-px bg-border" />
          </>
        )}

        {/* Case Study */}
        {caseStudy && (
          <>
            <section className="py-[80px] md:py-[112px] px-5 md:px-10" style={{ background: "var(--color-surface)" }}>
              <div className="max-w-[700px] mx-auto reveal-section">
                <span className="font-mono text-[11px] text-ardent-cyan tracking-[0.2em] uppercase mb-6 block">Case Study</span>
                <div className="border-l-2 border-ardent-cyan/40 pl-8 md:pl-10">
                  <h3 className="font-sans text-[24px] md:text-[28px] font-semibold text-foreground mb-4">{caseStudy.title}</h3>
                  <p className="font-sans text-[15px] text-body-text leading-[1.75] mb-6">{caseStudy.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-ardent-cyan text-[14px] font-mono">Result:</span>
                    <span className="font-sans text-[15px] text-foreground font-medium">{caseStudy.result}</span>
                  </div>
                </div>
              </div>
            </section>
            <div className="h-px bg-border" />
          </>
        )}

        {/* Why Ardent Studio */}
        <section className="py-[80px] md:py-[112px] px-5 md:px-10" style={{ background: "var(--color-surface-2)" }}>
          <div className="max-w-[800px] mx-auto">
            <div className="reveal-section mb-10">
              <span className="font-mono text-[11px] text-ardent-cyan tracking-[0.2em] uppercase">Why Ardent Studio</span>
            </div>
            <div className="flex flex-col gap-6">
              {whyArdent.map((point, i) => (
                <div key={i} className="reveal-section flex gap-4">
                  <span className="text-ardent-cyan text-[16px] mt-0.5 shrink-0">◈</span>
                  <p className="font-sans text-[15px] text-body-text leading-[1.75]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-border" />

        {/* CTA */}
        <section className="relative py-[80px] md:py-[112px] px-5 md:px-10 overflow-hidden" style={{ background: "var(--color-bg)" }}>
          <ParticleCanvas />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(13,191,188,0.08) 0%, transparent 50%, rgba(13,191,188,0.04) 100%)" }} />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
          <div className="relative z-10 max-w-[600px] mx-auto text-center reveal-section">
            <span className="block font-mono text-[11px] text-ardent-cyan tracking-[0.2em] uppercase mb-6">Get Started</span>
            <p className="font-sans text-[clamp(24px,6vw,40px)] font-light leading-[1.2] text-foreground mb-8">
              {ctaText}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
              <a
                className="font-sans text-[13px] bg-foreground text-bg-base px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity w-full md:w-auto text-center"
              >
                Book a free consultation
              </a>
              <a
                href="/"
                className="font-sans text-[13px] border border-foreground/30 text-foreground px-8 py-3.5 rounded-full hover:border-foreground/60 transition-colors w-full md:w-auto text-center"
              >
                ← Back to home
              </a>
            </div>
          </div>
        </section>

        <div className="h-px bg-border" />
      </main>
      <Footer />
    </>
  );
};

export default ServicePageLayout;
