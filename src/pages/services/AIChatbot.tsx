import ServicePageLayout from "@/components/ServicePageLayout";

const AIChatbot = () => (
  <ServicePageLayout
    metaTitle="AI Chatbot for Small Business | 24/7 Lead Capture — Ardent Studio"
    metaDescription="Custom AI chatbots that answer customer questions, book appointments, and capture leads 24/7. Built for small businesses in South Florida."
    headline="AI Chatbot Development"
    subheadline="Never miss a lead — even at 2 AM."
    introText="We build custom AI chatbots trained on your business — so your website can answer questions, qualify leads, and book appointments while you sleep."
    features={[
      { title: "24/7 Lead Capture", description: "Your chatbot works around the clock — capturing leads, answering questions, and collecting contact info even when you're off the clock." },
      { title: "Appointment Booking", description: "Clients can book directly through the chat — synced to your calendar with automatic confirmations and reminders." },
      { title: "FAQ Automation", description: "Train your bot on your most common questions so customers get instant, accurate answers without waiting for a callback." },
      { title: "Multi-Platform", description: "Deploy on your website, SMS, Facebook Messenger, and Instagram DMs — wherever your customers reach out." },
      { title: "CRM Integration", description: "Leads flow directly into your CRM with full conversation context — no manual data entry, no lost opportunities." },
      { title: "Custom Training on Your Business", description: "Your chatbot is trained on your services, pricing, FAQs, and processes — so it answers like a real team member." },
    ]}
    industries={["HVAC", "Medical / Dental", "Legal", "Real Estate", "Restaurants", "Fitness / Wellness", "eCommerce", "Construction", "Auto Repair", "Property Management"]}
    caseStudy={{
      title: "South Florida HVAC Company",
      description: "We deployed a custom AI chatbot that captures after-hours leads and books service appointments automatically from the website.",
      result: "+14 booked jobs per month",
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
