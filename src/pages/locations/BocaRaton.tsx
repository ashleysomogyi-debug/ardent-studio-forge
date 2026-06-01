import { useEffect } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const CITY = "Boca Raton";
const SLUG = "boca-raton";
const META_TITLE = "AI Automation for Boca Raton Businesses | Ardent Studio";
const META_DESC =
  "AI automation services in Boca Raton, FL. Custom AI workflows, chatbots, and email automation for Boca Raton small businesses. Palm Beach County local. Book a free call.";

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
  `We're based in Boynton Beach — just minutes from Boca Raton. When you book a call with Ardent Studio, you talk to Ashley directly. Not a salesperson, not an account manager.`,
  "Most automation builds ship in 1–2 weeks. We scope, build, and hand off — you own everything we build.",
  "We build with Make.com and Anthropic Claude — proven tools with transparent pricing and no vendor lock-in.",
  `According to McKinsey (2023), businesses using automation effectively recover 6–8 hours per week. Our ${CITY} clients typically see results within 30 days.`,
];

const BocaRaton = () => {
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
      headline="AI Automation for Boca Raton Small Businesses"
      subheadline="Ardent Studio brings practical AI automation to Boca Raton businesses — from professional services along Glades Road to boutique firms, medical practices, and tech startups."
      introText="Boca Raton businesses operate in one of the most competitive markets in South Florida. AI automation gives you the efficiency of a larger team without the overhead. According to McKinsey, businesses that implement automation well recover an average of 6–8 hours per week — time you can put back into growth."
      features={features}
      whyArdent={whyArdent}
      ctaText={`Ready to save 5–15 hours per week? Let's find the right automation for your ${CITY} business.`}
      industries={[
        "Professional Services",
        "Luxury Real Estate",
        "Technology & SaaS",
        "Medical & Dental Practices",
        "Financial Advisory",
        "Boutique Retail",
        "Law Firms",
      ]}
      caseStudy={{
        title: "Boca Raton Professional Services Firm",
        description:
          "A Boca Raton consulting firm needed their proposals auto-drafted from intake forms. We built a Claude + Make.com pipeline that pulled from their pricing doc and past proposals.",
        result: "Proposal time cut from 3 hours to 20 minutes.",
      }}
    />
  );
};

export default BocaRaton;
