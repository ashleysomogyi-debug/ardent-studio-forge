import ServicePageLayout from "@/components/ServicePageLayout";

const CustomSoftware = () => (
  <ServicePageLayout
    metaTitle="Custom Software Development Florida | Ardent Studio"
    metaDescription="Custom software and internal tools for small businesses in Florida. Client portals, dashboards, CRM systems, and workflow tools — built in weeks, not months."
    headline="Custom Software Development"
    subheadline="Off-the-shelf software doesn't fit? We'll build exactly what you need."
    introText="We design and develop custom software solutions — dashboards, internal tools, client portals, and business platforms — tailored to how your team actually works."
    features={[
      { title: "Client Portals", description: "Give your clients a branded portal to view projects, upload documents, make payments, and communicate — all in one place." },
      { title: "Internal Dashboards", description: "Centralize your data into a single dashboard so your team can make decisions faster without digging through spreadsheets." },
      { title: "CRM Systems", description: "We build lightweight CRM solutions tailored to your sales process — no bloat, no unused features, no expensive subscriptions." },
      { title: "API Integrations", description: "Connect your existing tools — payment processors, accounting software, CRMs, and more — into a unified system." },
      { title: "Database Design", description: "Structured, scalable database architecture designed around your data — so your software grows with your business." },
      { title: "Admin Panels", description: "Manage users, content, and settings through a clean admin interface built specifically for your team's workflow." },
    ]}
    industries={["HVAC", "Medical / Dental", "Legal", "Real Estate", "Restaurants", "Fitness / Wellness", "eCommerce", "Construction", "Auto Repair", "Property Management"]}
    caseStudy={{
      title: "SartoriAI",
      description: "We took SartoriAI from concept to a fully functional live platform — including user authentication, AI integration, and a polished UI.",
      result: "Concept to live platform in 6 weeks",
    }}
    whyArdent={[
      "We build and deliver in weeks, not months — AI-assisted development accelerates every phase.",
      "Fixed pricing on every project. No scope creep, no hourly billing.",
      "No ongoing subscriptions. You pay once and own the software forever.",
      "You work directly with the developer — fast communication, zero bureaucracy.",
      "Clean, documented, exportable code. Take it anywhere, hand it to any developer.",
      "Deep experience with South Florida small businesses — we build what actually gets used.",
    ]}
    ctaText="Ready for software that fits your business?"
  />
);

export default CustomSoftware;
