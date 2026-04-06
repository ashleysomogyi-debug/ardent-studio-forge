import ServicePageLayout from "@/components/ServicePageLayout";

const CustomSoftware = () => (
  <ServicePageLayout
    metaTitle="Custom Software Development | Boynton Beach, FL — Ardent Studio"
    metaDescription="Custom software, internal tools, and business platforms built for small businesses in Boynton Beach, Palm Beach County & South Florida. Fixed pricing, fast delivery."
    headline="Custom Software Development"
    subheadline="Off-the-shelf tools don't fit your business. We build what does."
    introText="We design and develop custom software solutions — dashboards, internal tools, client portals, and business platforms — tailored to how your team actually works."
    features={[
      { title: "Internal Dashboards", description: "Centralize your data into a single dashboard so your team can make decisions faster without digging through spreadsheets." },
      { title: "Client Portals", description: "Give your clients a branded portal to view projects, upload documents, make payments, and communicate — all in one place." },
      { title: "Custom CRM Tools", description: "We build lightweight CRM solutions tailored to your sales process — no bloat, no unused features, no expensive subscriptions." },
      { title: "Inventory & Operations", description: "Track inventory, manage work orders, and streamline operations with software built around your actual workflow." },
      { title: "API Integrations", description: "Connect your existing tools — payment processors, accounting software, CRMs, and more — into a unified system." },
      { title: "Data Migration", description: "Moving off spreadsheets or legacy software? We migrate your data cleanly and set you up on a modern platform." },
    ]}
    industries={["HVAC", "Medical / Dental", "Legal", "Real Estate", "Restaurants", "Fitness / Wellness", "eCommerce", "Construction", "Auto Repair", "Property Management"]}
    whyArdent={[
      "We build and deliver in days, not months — AI-assisted development accelerates every phase.",
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
