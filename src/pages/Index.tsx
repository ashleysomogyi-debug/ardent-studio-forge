import { useScrollReveal } from "@/hooks/useScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

const Divider = () => (
  <div className="h-px bg-border" />
);

const GoldDivider = () => (
  <div className="h-px" style={{ background: "rgba(196,153,58,0.2)" }} />
);

const Index = () => {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <HeroSection />
        <Divider />
        <TickerSection />
        <Divider />
        <BeforeAfterSection />
        <Divider />
        <CaseStudiesSection />
        <Divider />
        <WhatWeBuildSection />
        <Divider />
        <SelectedWorkSection />
        <Divider />
        <ProcessSection />
        <GoldDivider />
        <TeamSection />
        <GoldDivider />
        <PricingSection />
        <Divider />
        <TestimonialsSection />
        <Divider />
        <CTASection />
        <Divider />
        <ContactFormSection />
        <Divider />
      </main>
      <Footer />
    </>
  );
};

export default Index;
