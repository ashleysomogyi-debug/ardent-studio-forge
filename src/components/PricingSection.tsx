import { Check } from "lucide-react";

const tiers = [
  {
    label: "Automate",
    title: "Automation Stack",
    price: "$3,500",
    note: "Flat fee · Delivered in 10–14 days from audit",
    bullets: [
      "Audit of your core business processes & tools",
      "Up to 5 custom automations built & integrated",
      "30-day post-launch support",
    ],
    cta: "Get started",
    href: "/contact",
    external: false,
    featured: false,
  },
  {
    label: "Growth",
    title: "AI-Powered Business",
    price: "$8,500",
    note: "Flat fee · Delivered in 10–14 days",
    bullets: [
      "Everything in Automation Stack",
      "AI lead capture, follow-up & CRM automation",
      "60-day post-launch support",
    ],
    cta: "Get started",
    href: "/contact",
    external: false,
    featured: true,
  },
  {
    label: "Build",
    title: "Custom Product",
    price: "$20,000",
    note: "Scoped per project · 3–6 week delivery",
    bullets: [
      "Full design, build & deployment",
      "Payments, auth & AI integration",
      "Optional equity or revenue-share model",
    ],
    cta: "Let's talk",
    href: "https://calendly.com/asomogyi-ardentstudio/30min",
    external: true,
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-[112px] px-5 md:px-10 bg-surface">
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="reveal-section text-center mb-12 md:mb-20">
        <span className="block font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-6">Pricing</span>
        <h2 className="font-sans text-[clamp(32px,8vw,56px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.1]">
          Simple,<br /><em className="text-primary not-italic">fixed</em> pricing.
        </h2>
      </div>

      {/* Pricing cards */}
      <div className="reveal-section grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-16">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className={`relative flex flex-col rounded-xl p-8 md:p-10 border ${
              tier.featured
                ? "border-primary/40 bg-gradient-to-b from-primary/[0.07] to-surface-2"
                : "border-border bg-surface-2"
            }`}
          >
            {tier.featured && (
              <span className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full">
                Most popular
              </span>
            )}

            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.15em] uppercase">{tier.label}</span>
            <h3 className="font-sans text-[20px] font-semibold text-foreground mt-2 mb-1">{tier.title}</h3>

            <div className="mt-3 mb-1">
              <span className="font-sans text-[14px] text-muted-foreground">from </span>
              <span className="font-sans text-[36px] md:text-[42px] font-light text-foreground leading-none">{tier.price}</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground/70 mb-6">{tier.note}</span>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check size={15} className="text-primary mt-0.5 shrink-0" />
                  <span className="font-sans text-[14px] text-muted-foreground leading-[1.6]">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              {...(tier.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              data-hover
              className={`font-sans text-[13px] px-6 py-3.5 rounded-full text-center transition-all ${
                tier.featured
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-foreground/30 text-foreground hover:border-foreground/60"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Retainer strip */}
      <div className="reveal-section flex flex-col md:flex-row items-start md:items-center justify-between border border-border rounded-xl p-5 md:p-7 gap-3 md:gap-4">
        <p className="font-sans text-[15px] text-muted-foreground leading-[1.75]">
          Ongoing support available — hosting oversight, minor feature updates, and priority support.
        </p>
        <span className="font-sans text-[14px] text-primary whitespace-nowrap">From $300 / month</span>
      </div>
    </div>
  </section>
);

export default PricingSection;
