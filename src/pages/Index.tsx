import { useScrollReveal } from "@/hooks/useScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ProcessSection from "@/components/ProcessSection";
import WhyArdentSection from "@/components/WhyArdentSection";
import PricingSection from "@/components/PricingSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
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
        <TickerSection />
        <WhatWeBuildSection />
        <SelectedWorkSection />
        <ProcessSection />
        <WhyArdentSection />
        <PricingSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
