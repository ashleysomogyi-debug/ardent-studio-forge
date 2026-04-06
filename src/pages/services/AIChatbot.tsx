import ServicePageLayout from "@/components/ServicePageLayout";

const AIChatbot = () => (
  <ServicePageLayout
    metaTitle="AI Chatbot for Small Business | Boynton Beach, FL — Ardent Studio"
    metaDescription="Custom AI chatbots that answer questions, book appointments, and capture leads 24/7 for small businesses in Boynton Beach & South Florida."
    headline="AI Chatbots for Small Business"
    subheadline="Your best employee works 24/7 and never calls in sick."
    introText="We build custom AI chatbots trained on your business — so your website can answer questions, qualify leads, and book appointments while you sleep."
    features={[
      { title: "Custom-Trained AI", description: "Your chatbot is trained on your services, pricing, FAQs, and processes — so it answers like a real team member." },
      { title: "Lead Qualification", description: "The bot asks the right questions, collects contact info, and routes qualified leads to your inbox or CRM automatically." },
      { title: "Appointment Booking", description: "Clients can book directly through the chat — synced to your calendar with automatic confirmations and reminders." },
      { title: "Multi-Channel Support", description: "Deploy on your website, Facebook Messenger, Instagram DMs, or SMS — wherever your customers reach out." },
      { title: "Escalation to Human", description: "When the conversation needs a human touch, the bot hands off seamlessly with full context so nothing gets lost." },
      { title: "Analytics Dashboard", description: "See every conversation, track conversion rates, and identify the questions your customers ask most." },
    ]}
    industries={["HVAC", "Medical / Dental", "Legal", "Real Estate", "Restaurants", "Fitness / Wellness", "eCommerce", "Construction", "Auto Repair", "Property Management"]}
    caseStudy={{
      title: "Delray Beach Law Firm",
      description: "We deployed a custom AI chatbot trained on their practice areas that qualifies leads and books consultations directly from the website.",
      result: "+55% consultation bookings, 24/7 lead capture",
    }}
    whyArdent={[
      "We build and deliver in days, not months — your chatbot can be live this week.",
      "Fixed pricing. No per-message fees, no usage caps, no surprise invoices.",
      "No monthly subscriptions required. You own the chatbot outright.",
      "You work directly with the developer who builds and trains your bot.",
      "We build on open platforms — no vendor lock-in, full portability.",
      "We specialize in South Florida small businesses and understand your customer base.",
    ]}
    ctaText="Ready to never miss a lead again?"
  />
);

export default AIChatbot;
