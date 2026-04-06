import ServicePageLayout from "@/components/ServicePageLayout";

const MobileApps = () => (
  <ServicePageLayout
    metaTitle="Mobile App Development | Boynton Beach, FL — Ardent Studio"
    metaDescription="Custom mobile app development for small businesses in Boynton Beach, Palm Beach County & South Florida. iOS, Android, and cross-platform — fast delivery, fixed pricing."
    headline="Mobile App Development"
    subheadline="Your business in your customer's pocket."
    introText="We build custom mobile apps — iOS, Android, and cross-platform — designed to deepen customer engagement, streamline operations, and open new revenue channels."
    features={[
      { title: "Cross-Platform Apps", description: "One codebase, every device. We build apps that run natively on iOS and Android — faster to develop, easier to maintain." },
      { title: "Customer-Facing Apps", description: "Booking apps, loyalty programs, and service portals that keep your customers engaged and coming back." },
      { title: "Internal Team Apps", description: "Field service apps, inventory trackers, and communication tools that help your team work smarter in the field." },
      { title: "Push Notifications", description: "Re-engage customers with targeted push notifications — promotions, reminders, updates — delivered right to their lock screen." },
      { title: "Offline Functionality", description: "Apps that work without internet so your field teams can log data, take photos, and sync when they're back online." },
      { title: "App Store Deployment", description: "We handle the entire submission process for Apple App Store and Google Play — including assets, descriptions, and compliance." },
    ]}
    industries={["HVAC", "Medical / Dental", "Legal", "Real Estate", "Restaurants", "Fitness / Wellness", "eCommerce", "Construction", "Auto Repair", "Property Management"]}
    whyArdent={[
      "We build and deliver in weeks, not months — AI-assisted development cuts timelines dramatically.",
      "Fixed pricing. You'll know the full cost before we start — no change orders, no surprises.",
      "No monthly subscriptions or maintenance contracts required.",
      "You work directly with the developer building your app — no layers of project management.",
      "You own the source code from day one. No lock-in, full portability.",
      "We understand South Florida small businesses and build apps people actually use.",
    ]}
    ctaText="Ready to put your business in your customer's pocket?"
  />
);

export default MobileApps;
