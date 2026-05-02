import { Link } from "react-router-dom";

const cards = [
  {
    num: "01",
    title: "Never Miss a Lead Again",
    bullets: [
      "AI answers calls, DMs, and emails 24/7",
      "Leads are captured and followed up automatically",
      "Connects to your existing tools and CRM",
    ],
    to: "/services/ai-automation",
  },
  {
    num: "02",
    title: "AI Chatbot Development",
    bullets: [
      "Client portals, booking systems, dashboards",
      "Payments, scheduling, and notifications built in",
      "Designed around how your business actually runs",
    ],
    to: "/services/ai-chatbot",
  },
  {
    num: "03",
    title: "Full Product Development",
    bullets: [
      "Turn your idea into a real software product",
      "AI-powered features included from day one",
      "Equity or revenue-share models available",
    ],
    to: "/services/custom-software",
  },
];

const WhatWeBuildSection = () => (
  <section id="services" className="relative py-[72px] md:py-[112px] px-5 md:px-10 bg-surface">
    <div className="absolute top-8 left-1/2 -translate-x-1/2 text-primary/40 text-[24px]">◈</div>
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-8 md:mb-12">
        <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase">What We Do For You</span>
      </div>
      <div className="reveal-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <Link
            key={card.num}
            to={card.to}
            className={`group relative overflow-hidden bg-surface p-8 md:p-10 border border-border transition-colors hover:bg-surface-2 ${
              i > 0 ? "border-t-0 md:border-t md:border-l-0" : ""
            }`}
          >
            {/* Teal left border – scaleY from bottom */}
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

            <span className="font-mono text-[11px] text-muted-foreground">{card.num}</span>
            <h3 className="font-sans text-[20px] font-semibold text-foreground mt-3 mb-5">{card.title}</h3>
            <ul className="space-y-3">
              {card.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-[7px] shrink-0 w-[6px] h-[6px] rounded-full bg-primary" />
                  <span className="font-sans text-[14px] text-muted-foreground leading-[1.6]">{b}</span>
                </li>
              ))}
            </ul>
            <span className="mt-5 inline-block font-mono text-[12px] text-primary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeBuildSection;
