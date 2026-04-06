import ServicePageLayout from "@/components/ServicePageLayout";

const WebDesign = () => (
  <ServicePageLayout
    metaTitle="Web Design Boynton Beach, FL | Custom Websites — Ardent Studio"
    metaDescription="Custom web design for small businesses in Boynton Beach and South Florida. Fast-loading, mobile-first websites built in 5–7 days. Starting at $3,500."
    headline="Web Design — Boynton Beach, FL"
    subheadline="Custom websites that load fast, convert visitors, and rank on Google."
    introText="We design and develop fast, modern websites that turn visitors into customers — built specifically for service businesses across South Florida."
    features={[
      { title: "Custom Design", description: "No templates. Every site is designed from scratch to reflect your brand, your market, and your goals." },
      { title: "Mobile-First", description: "Over 70% of your visitors are on their phone. We build mobile-first so your site looks and performs perfectly on every device." },
      { title: "SEO-Optimized", description: "Every site ships with on-page SEO, structured data, meta tags, and sitemap — so Google can find you from day one." },
      { title: "Fast Load Times", description: "Sub-2-second load times with optimized images, lazy loading, and clean code — because slow sites lose customers." },
      { title: "CMS Integration", description: "Easily update your own content with a simple content management system — no developer needed for day-to-day changes." },
      { title: "Analytics & Tracking", description: "Google Analytics, conversion tracking, and call tracking set up from launch so you can measure what's working." },
    ]}
    industries={["HVAC", "Medical / Dental", "Legal", "Real Estate", "Restaurants", "Fitness / Wellness", "eCommerce", "Construction", "Auto Repair", "Property Management"]}
    caseStudy={{
      title: "Local Law Firm",
      description: "We designed and built a new website for a local law firm focused on personal injury — optimized for local SEO and lead conversion.",
      result: "+65% organic traffic in 90 days",
    }}
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
