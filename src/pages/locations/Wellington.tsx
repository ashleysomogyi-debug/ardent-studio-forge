import { useEffect } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const CITY = "Wellington";
const SLUG = "wellington";
const META_TITLE = "AI Automation for Wellington, FL Businesses | Ardent Studio";
const META_DESC =
  "AI automation for Wellington, FL businesses — equestrian industry, family businesses, fitness, and more. Custom AI workflows by Ardent Studio, Palm Beach County. Book a free call.";

const features = [
  {
    title: "Lead Follow-up Automation",
    description:
      "Automatically send personalized follow-up emails to every new lead within minutes — no more lost opportunities from slow response times.",
  },
  {
    title: "AI Customer Service Chatbot",
    description:
      "A 24/7 chatbot on your website that answers FAQs, captures lead information, and routes inquiries to you — even when you're not available.",
  },
  {
    title: "Email & Invoice Reminders",
    description:
      "Automated invoice reminders, payment confirmations, and appointment follow-ups sent on schedule without you touching a thing.",
  },
  {
    title: "Appointment Booking Automation",
    description:
      "Connect your booking form to your calendar and email — new bookings get confirmation, prep info, and reminders automatically.",
  },
  {
    title: "Make.com Workflow Builds",
    description:
      "Custom multi-step automations connecting your email, CRM, spreadsheets, and other tools into one seamless workflow.",
  },
  {
    title: "AI Tools Setup & Training",
    description:
      "Get your team using ChatGPT, Claude, and other AI tools effectively — with prompts and workflows built specifically for your business.",
  },
];

const whyArdent = [
  `We're based in Boynton Beach — right here in Palm Beach County, familiar with Wellington's unique seasonal rhythms. When you book a call with Ardent Studio, you talk to Ashley directly. Not a salesperson, not an account manager.`,
  "Most automation builds ship in 1–2 weeks. We scope, build, and hand off — you own everything we build.",
  "We build with Make.com and Anthropic Claude — proven tools with transparent pricing and no vendor lock-in.",
  `According to McKinsey (2023), businesses using automation effectively recover 6–8 hours per week. Our ${CITY} clients typically see results within 30 days.`,
];

const Wellington = () => {
  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://www.ardentstudio.io/locations/${SLUG}`);
    }

    const schemaId = `faq-jsonld-${SLUG}`;
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = schemaId;
      s.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `How much does AI automation cost for a ${CITY} business?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `AI automation projects at Ardent Studio typically run $500–$3,000 depending on complexity. Simple email automations or chatbots start around $500–$1,500. More complex multi-system builds run $1,500–$3,000. Every project starts with a free 30-minute discovery call — no commitment required.`,
            },
          },
          {
            "@type": "Question",
            name: `How quickly can you set up AI automation for my ${CITY} business?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Most projects go live within 1–2 weeks. Simple automations (like a follow-up email sequence or basic chatbot) can be live in 3–5 business days. We work fast and hand off everything so you own what we build.`,
            },
          },
          {
            "@type": "Question",
            name: `What kinds of ${CITY} businesses do you work with?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `We work with service businesses, professional services, restaurants, contractors, medical offices, real estate agents, and any small business owner who wants to reclaim time from repetitive admin work. If you're in ${CITY} or anywhere in Palm Beach County, book a free call and we'll tell you exactly what we can automate for your business.`,
            },
          },
        ],
      });
      document.head.appendChild(s);
    }

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <ServicePageLayout
      metaTitle={META_TITLE}
      metaDescription={META_DESC}
      headline="AI Automation for Wellington Small Businesses"
      subheadline="Ardent Studio helps Wellington businesses — from equestrian operations and polo-season businesses to fitness studios and family-owned companies — save time with practical AI automation."
      introText="Wellington's unique economy — driven by the equestrian and polo community, seasonal influxes, and strong family business culture — creates very specific automation opportunities. Booking management, client communications, and seasonal scaling are all areas where AI automation delivers immediate value."
      features={features}
      whyArdent={whyArdent}
      ctaText={`Ready to save 5–15 hours per week? Let's find the right automation for your ${CITY} business.`}
      industries={[
        "Equestrian & Polo",
        "Fitness & Sports",
        "Family-Owned Retail",
        "Real Estate",
        "Home Services",
        "Restaurants",
        "Professional Services",
      ]}
      caseStudy={{
        title: "Wellington Equestrian Business",
        description:
          "An equestrian service business in Wellington was overwhelmed with booking requests during the winter polo circuit. Manual scheduling and client communication was taking hours daily.",
        result:
          "Booking and client communication automated. 10 hours/week saved during peak season.",
      }}
    />
  );
};

export default Wellington;
