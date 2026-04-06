import ServicePageLayout from "@/components/ServicePageLayout";

const WebDesign = () => (
  <ServicePageLayout
    metaTitle="Custom Web Design for Small Business | Boynton Beach, FL — Ardent Studio"
    metaDescription="High-converting, mobile-first websites designed and built for small businesses in Boynton Beach, Palm Beach County & South Florida. Fast delivery, fixed pricing."
    headline="Custom Web Design for Small Business"
    subheadline="A website that works as hard as you do."
    introText="We design and develop fast, modern websites that turn visitors into customers — built specifically for service businesses across South Florida."
    features={[
      { title: "Custom Design", description: "No templates. Every site is designed from scratch to reflect your brand, your market, and your goals." },
      { title: "Mobile-First Development", description: "Over 70% of your visitors are on their phone. We build mobile-first so your site looks and performs perfectly on every device." },
      { title: "SEO Foundation", description: "Every site ships with on-page SEO, structured data, meta tags, and sitemap — so Google can find you from day one." },
      { title: "Speed Optimized", description: "Sub-2-second load times with optimized images, lazy loading, and clean code — because slow sites lose customers." },
      { title: "Lead Capture Forms", description: "Strategic contact forms, click-to-call buttons, and booking integrations that make it easy for customers to reach you." },
      { title: "Analytics & Tracking", description: "Google Analytics, conversion tracking, and call tracking set up from launch so you can measure what's working." },
    ]}
    industries={["HVAC", "Medical / Dental", "Legal", "Real Estate", "Restaurants", "Fitness / Wellness", "eCommerce", "Construction", "Auto Repair", "Property Management"]}
    whyArdent={[
      "We build and deliver in days, not months — because AI-assisted development means faster turnaround without cutting corners.",
      "Fixed pricing on every project. No hourly billing surprises.",
      "No monthly subscriptions. Pay once, own your website forever.",
      "You work directly with the developer — no project managers or middlemen.",
      "Clean, exportable code you can take anywhere. No proprietary platforms.",
      "We know South Florida small businesses — your clients, your competition, and what converts in your market.",
    ]}
    ctaText="Ready for a website that actually converts?"
  />
);

export default WebDesign;
