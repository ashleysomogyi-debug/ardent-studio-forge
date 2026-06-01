import { useEffect } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between workflow automation and AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Workflow automation handles the routing and triggering of tasks — moving data between tools, sending emails at the right time, updating records automatically. AI handles the thinking: writing, classifying, extracting meaning from text. Ardent Studio uses both together: automation to move things through your pipeline, AI to handle the steps that require judgment or language.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up email and workflow automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most builds go live in 1–2 weeks. Simple email sequences can be live in 3–5 days. We scope the project first, build and test in our environment, then hand off with a live walkthrough so you understand exactly how everything works.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical skills to use the automations you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We build, test, document, and walk you through everything. You own the automation completely and can modify it yourself if you want to, or call us if something needs updating. Most clients are fully comfortable running their workflows within the first week.",
      },
    },
  ],
};

export default function WorkflowAutomation() {
  useEffect(() => {
    document.title =
      "Email & Workflow Automation for Small Businesses | Ardent Studio — Palm Beach County";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Custom email and workflow automation for Palm Beach County small businesses. Ardent Studio builds Make.com automations that save 5–15 hours per week. Free 30-min call."
      );
    }

    const existing = document.getElementById("faq-jsonld-workflow");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "faq-jsonld-workflow";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById("faq-jsonld-workflow");
      if (script) script.remove();
    };
  }, []);

  return (
    <ServicePageLayout
      metaTitle="Email & Workflow Automation for Small Businesses | Ardent Studio — Palm Beach County"
      metaDescription="Custom email and workflow automation for Palm Beach County small businesses. Ardent Studio builds Make.com automations that save 5–15 hours per week. Free 30-min call."
      headline="Email & Workflow Automation"
      subheadline="Stop doing the same thing twice. Ardent Studio builds Make.com automations that connect your tools, handle your follow-ups, and process your data — so you can focus on the work that actually moves the needle."
      introText="According to McKinsey (2023), small businesses using automation effectively recover 6–8 hours per week. Most of that time comes from email follow-ups, data entry between tools, invoice reminders, and intake processing — exactly the kind of repetitive work Ardent Studio specializes in automating. Most clients are live within 2 weeks."
      features={[
        {
          title: "Lead Follow-up Sequences",
          description:
            "Automatically send personalized follow-up emails within minutes of a form submission — no more losing prospects to slow response times. The Harvard Business Review found that 78% of leads go with the first company to respond.",
        },
        {
          title: "Invoice & Payment Reminders",
          description:
            "Automated invoice reminders sent at the right intervals, with escalating tone for late payers — without you having to manually track anything.",
        },
        {
          title: "CRM & Spreadsheet Sync",
          description:
            "New contacts, form submissions, and bookings automatically populate your CRM or Google Sheet with zero data entry.",
        },
        {
          title: "Appointment & Booking Flows",
          description:
            "New bookings trigger confirmation emails, calendar blocks, prep documents, and 24-hour reminders — automatically.",
        },
        {
          title: "Multi-tool Integrations",
          description:
            "Connect Gmail, Google Sheets, your CRM, Stripe, Calendly, Slack, and dozens of other tools into one seamless workflow using Make.com.",
        },
        {
          title: "Reporting & Alerts",
          description:
            "Automatic weekly digest emails with your key numbers — new leads, revenue, tasks due — so you always know where things stand.",
        },
      ]}
      industries={[
        "Real Estate",
        "Professional Services",
        "Contractors & Trades",
        "Healthcare & Medical",
        "Restaurants",
        "E-commerce",
        "Agencies",
      ]}
      whyArdent={[
        "We build with Make.com — the industry standard for business automation, used by 500,000+ companies. Every workflow we build is yours: fully documented, fully transferable.",
        "Most workflow builds ship in 1–2 weeks. We scope, build, test, and hand off — with a walkthrough so you understand exactly how it works.",
        "We're based in Boynton Beach, FL. Every client works directly with Ashley — no account managers, no hand-offs to junior staff.",
        "Pricing is transparent: most workflow automations run $750–$2,500. We quote before we build. No surprises.",
      ]}
      caseStudy={{
        title: "Palm Beach County Service Business",
        description:
          "A Palm Beach County home services company had 3 different tools for quoting, scheduling, and following up — and none of them talked to each other. Every new job required manual data entry in all three. We built a Make.com pipeline that connected all three automatically.",
        result:
          "12 hours/week of manual data entry eliminated. Zero dropped leads from poor follow-up.",
      }}
      ctaText="Ready to stop doing the same thing twice? Let's map out what we can automate for your business."
    />
  );
}
