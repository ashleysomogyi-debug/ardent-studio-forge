import ServicePageLayout from "@/components/ServicePageLayout";

const AIAutomation = () => (
  <ServicePageLayout
    metaTitle="AI Automation for Small Business | Boynton Beach, FL — Ardent Studio"
    metaDescription="Automate lead follow-up, scheduling, invoicing, and client communication with custom AI tools built for your small business. Boynton Beach & South Florida."
    headline="AI Automation for Small Business"
    subheadline="Stop doing manually what AI can handle in seconds."
    introText="We build custom AI automation systems that eliminate repetitive tasks, speed up your response time, and help your team focus on what actually grows revenue."
    features={[
      { title: "AI Lead Response", description: "Instantly respond to new leads via text, email, or chat — 24/7 — so you never lose a prospect to slow follow-up." },
      { title: "Workflow Automation", description: "Connect your tools and automate multi-step workflows like onboarding, invoicing, and task routing without writing a single line of code." },
      { title: "Smart Scheduling", description: "Let clients book, reschedule, and receive reminders automatically — synced to your calendar and CRM." },
      { title: "AI Document Processing", description: "Extract data from forms, contracts, and invoices using AI — eliminating manual data entry and reducing errors." },
      { title: "Automated Reporting", description: "Get daily, weekly, or monthly reports generated and delivered automatically with the metrics that matter to your business." },
      { title: "Custom AI Integrations", description: "We connect AI tools to your existing stack — CRMs, ERPs, payment processors, and more — so everything works together." },
    ]}
    industries={["HVAC", "Medical / Dental", "Legal", "Real Estate", "Restaurants", "Fitness / Wellness", "eCommerce", "Construction", "Auto Repair", "Property Management"]}
    caseStudy={{
      title: "Palm Beach Med Spa",
      description: "We automated their entire appointment booking flow and built an AI-powered follow-up sequence for missed calls and abandoned inquiries.",
      result: "+40% bookings in 60 days",
    }}
    whyArdent={[
      "We build and deliver in days, not months — because AI-assisted development means faster turnaround without cutting corners.",
      "Fixed pricing on every project. You'll know exactly what you're paying before we write a single line of code.",
      "No monthly subscriptions or retainers required. Pay once, own it forever.",
      "You work directly with the developer who's building your system — no account managers, no telephone game.",
      "Everything we build is yours. Clean, exportable code with no vendor lock-in.",
      "We specialize in small businesses across South Florida — we understand your clients, your market, and your workflows.",
    ]}
    ctaText="Ready to automate your business?"
  />
);

export default AIAutomation;
