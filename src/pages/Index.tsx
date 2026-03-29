import { useScrollReveal } from "@/hooks/useScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ProcessSection from "@/components/ProcessSection";
import WhyArdentSection from "@/components/WhyArdentSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <HeroSection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
        <TickerSection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
        <WhatWeBuildSection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
        <CaseStudiesSection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
        <SelectedWorkSection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
        <ProcessSection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
        <WhyArdentSection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
        <PricingSection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
        <CTASection />
        <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
      </main>
      <Footer />
    </>
  );
};

export default Index;
