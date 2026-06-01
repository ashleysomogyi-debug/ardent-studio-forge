import { useEffect } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const CITY = "Delray Beach";
const SLUG = "delray-beach";
const META_TITLE = "AI Automation for Delray Beach Businesses | Ardent Studio";
const META_DESC =
  "AI automation for Delray Beach, FL small businesses. Ardent Studio builds custom AI workflows and chatbots for restaurants, retail, boutiques, and service businesses. Book a free call.";

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
  `We're based in Boynton Beach — minutes from Delray Beach. When you book a call with Ardent Studio, you talk to Ashley directly. Not a salesperson, not an account manager.`,
  "Most automation builds ship in 1–2 weeks. We scope, build, and hand off — you own everything we build.",
  "We build with Make.com and Anthropic Claude — proven tools with transparent pricing and no vendor lock-in.",
  `According to McKinsey (2023), businesses using automation effectively recover 6–8 hours per week. Our ${CITY} clients typically see results within 30 days.`,
];

const DelrayBeach = () => {
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
      headline="AI Automation for Delray Beach Small Businesses"
      subheadline="Ardent Studio helps Delray Beach restaurants, boutiques, creative businesses, and service companies save 5–15 hours per week with custom AI automation — no technical expertise required."
      introText="Delray Beach has one of the most vibrant small business communities in Palm Beach County — Atlantic Avenue restaurants, boutique shops, wellness studios, and creative agencies all face the same challenge: not enough hours in the day. AI automation handles the repetitive work so you can focus on what makes your business special."
      features={features}
      whyArdent={whyArdent}
      ctaText={`Ready to save 5–15 hours per week? Let's find the right automation for your ${CITY} business.`}
      industries={[
        "Restaurants & Food Service",
        "Boutique Retail",
        "Wellness & Fitness",
        "Real Estate",
        "Creative Agencies",
        "Event Planning",
        "Professional Services",
      ]}
      caseStudy={{
        title: "Delray Beach Restaurant Group",
        description:
          "A multi-location Delray Beach restaurant was losing leads from their events inquiry form — emails sat unanswered for days. We built an automated response and qualification system.",
        result: "Response time went from 2+ days to under 1 hour. Events bookings increased 30%.",
      }}
    />
  );
};

export default DelrayBeach;
