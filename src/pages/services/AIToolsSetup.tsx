import { useEffect } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is this different from a generic AI course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Everything is built for your specific business, tools, and clients. Before the first session we review your actual workflows and recurring tasks. You leave with a prompt library and automations you can use the next day — not theory about what AI can theoretically do.",
      },
    },
    {
      "@type": "Question",
      name: "How many sessions do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients need 2–3 sessions (approximately 2 hours each). Some are fully set up and confident after one session. We go at your pace and don't upsell sessions you don't need.",
      },
    },
    {
      "@type": "Question",
      name: "Will AI tools work for my type of business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with service businesses, contractors, real estate professionals, healthcare providers, agencies, and more. Almost any small business has at least 5 hours per week of tasks that AI can handle — email drafting, report writing, data summarization, client communication templates, and more.",
      },
    },
  ],
};

export default function AIToolsSetup() {
  useEffect(() => {
    document.title =
      "AI Tools Setup & Training for Small Businesses | Ardent Studio — Palm Beach County, FL";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Get your small business actually using AI. Ardent Studio provides hands-on AI tools setup and training for Palm Beach County businesses — ChatGPT, Claude, Make.com, and more. Book a free call."
      );
    }

    const existing = document.getElementById("faq-jsonld-ai-tools");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "faq-jsonld-ai-tools";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById("faq-jsonld-ai-tools");
      if (script) script.remove();
    };
  }, []);

  return (
    <ServicePageLayout
      metaTitle="AI Tools Setup & Training for Small Businesses | Ardent Studio — Palm Beach County, FL"
      metaDescription="Get your small business actually using AI. Ardent Studio provides hands-on AI tools setup and training for Palm Beach County businesses — ChatGPT, Claude, Make.com, and more. Book a free call."
      headline="AI Tools Setup & Training"
      subheadline="Most small business owners have a ChatGPT account they use 10% of its potential. Ardent Studio sets up the right AI tools for your specific business, builds the prompts, and trains you to use them effectively."
      introText="A Salesforce survey found that 76% of small business owners who implemented AI tools reported significant time savings — but most of them needed hands-on help to get there. Generic AI courses teach you theory. This service teaches you how to use AI for your actual business: your voice, your workflows, your clients."
      features={[
        {
          title: "ChatGPT & Claude Setup",
          description:
            "Get set up on the right AI tools for your use case — with custom instructions and prompts built for your business, not for a generic company.",
        },
        {
          title: "Custom Prompt Library",
          description:
            "A library of prompts built specifically for your recurring tasks: client emails, proposals, social posts, reports — in your voice.",
        },
        {
          title: "Make.com AI Workflows",
          description:
            "Combine AI (Claude or ChatGPT) with Make.com automation to create powerful workflows: auto-draft emails, classify leads, extract data from documents.",
        },
        {
          title: "Team Training Sessions",
          description:
            "1-on-1 or small group training sessions covering exactly the tools your team uses, with hands-on practice during the session.",
        },
        {
          title: "AI for Content Creation",
          description:
            "Set up your team to create LinkedIn posts, newsletters, client proposals, and more — in your brand voice — in a fraction of the time.",
        },
        {
          title: "Ongoing Support",
          description:
            "Monthly check-in calls to review what's working, answer questions, and add new tools as AI capabilities expand.",
        },
      ]}
      industries={[
        "Professional Services",
        "Real Estate",
        "Healthcare",
        "Agencies & Consultants",
        "Restaurants & Hospitality",
        "Contractors",
        "Retail",
      ]}
      whyArdent={[
        "This isn't a generic AI course — it's a personalized setup session for your specific business. We review your workflows first, then build the tools and prompts you'll actually use.",
        "We work with ChatGPT, Claude, Perplexity, Make.com, and other leading AI tools. We recommend what's right for your use case, not what we're paid to sell.",
        "Sessions are held over Zoom or in person across Palm Beach County. Most clients need 1–3 sessions to get fully set up and confident.",
        "We're based in Boynton Beach, FL. You work directly with Ashley — not a trainer who's never run a business.",
      ]}
      caseStudy={{
        title: "Palm Beach County Consulting Firm",
        description:
          "A Palm Beach County business consultant was writing client reports, proposals, and LinkedIn posts entirely from scratch — 15+ hours of writing per week. We built a Claude-based prompt library and workflow tailored to their client base.",
        result:
          "Writing time cut by 70%. Report quality actually improved. 10 hours/week reclaimed.",
      }}
      ctaText="Ready to get AI actually working for your business? Book a free 30-minute discovery call."
    />
  );
}
