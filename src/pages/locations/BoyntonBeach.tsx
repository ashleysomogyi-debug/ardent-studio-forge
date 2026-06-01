import { useEffect } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const CITY = "Boynton Beach";
const SLUG = "boynton-beach";
const META_TITLE = "AI Automation in Boynton Beach, FL | Ardent Studio — Local Expert";
const META_DESC =
  "Ardent Studio is based in Boynton Beach, FL. AI automation for local contractors, service businesses, medical offices, and more. Book a free call with Ashley.";

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
  `We're not just local — we're your neighbors. Ardent Studio is founded and based right here in Boynton Beach. When you book a call, you talk to Ashley directly. No middlemen.`,
  "Most automation builds ship in 1–2 weeks. We scope, build, and hand off — you own everything we build.",
  "We build with Make.com and Anthropic Claude — proven tools with transparent pricing and no vendor lock-in.",
  `According to McKinsey (2023), businesses using automation effectively recover 6–8 hours per week. Our ${CITY} clients typically see results within 30 days.`,
];

const BoyntonBeach = () => {
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
      headline="AI Automation in Boynton Beach, FL"
      subheadline="Ardent Studio is your Boynton Beach neighbor — we're based here, we know this market, and we build AI automations for the kinds of businesses that make this city run."
      introText="We're not a big agency — we're local. Founded in Boynton Beach, Ardent Studio works with the contractors, medical offices, service businesses, and small operations that are the backbone of this city. When you work with us, you work directly with Ashley. No account managers, no handoffs, no jargon."
      features={features}
      whyArdent={whyArdent}
      ctaText={`Ready to save 5–15 hours per week? Let's find the right automation for your ${CITY} business.`}
      industries={[
        "Contractors & Trades",
        "Medical & Dental Offices",
        "Service Businesses",
        "Retail",
        "Real Estate",
        "Salons & Wellness",
        "Restaurants",
      ]}
      caseStudy={{
        title: "Boynton Beach Contractor",
        description:
          "A Boynton Beach HVAC company was losing jobs because they couldn't follow up with every quote request fast enough. We built a same-day automated follow-up system.",
        result: "Quote follow-up time dropped from 2 days to 2 hours. Close rate improved.",
      }}
    />
  );
};

export default BoyntonBeach;
