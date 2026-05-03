import { ArrowUpRight } from "lucide-react";

interface WorkCard {
  tag: string;
  title: string;
  description: string;
  meta: string[];
  link?: string;
}

const works: WorkCard[] = [
  {
    tag: "SaaS · AI · Sales Training",
    title: "SartoriAI",
    description:
      "An AI-powered sales training platform that puts reps through scored roleplay conversations with realistic buyer personas — so teams build real skill through practice, not theory. Built by Ardent Studio. Now its own company.",
    meta: ["AI SaaS Platform", "6 weeks", "React · AI · Stripe"],
    link: "https://www.sartoriai.com",
  },
  {
    tag: "AI Automation · Med Spa · Palm Beach",
    title: "AI Booking Agent",
    description:
      "24/7 AI-powered booking and inquiry agent for a Palm Beach area wellness clinic. DMs answered instantly, appointments booked automatically — including after hours.",
    meta: ["Delivered: 6 days", "Result: +40% bookings"],
  },
  {
    tag: "AI Automation · Home Services · South Florida",
    title: "After-Hours Lead Capture",
    description:
      "AI call handling and scheduling for a South Florida HVAC company. Emergency jobs booked overnight — without a single employee on the phone.",
    meta: ["Delivered: 8 days", "Result: +14 jobs/month"],
  },
];

const SelectedWorkSection = () => (
  <section id="work" className="relative py-[112px] px-5 md:px-10 bg-background">
    <div className="max-w-[1200px] mx-auto">
      <div className="reveal-section mb-8 md:mb-12">
        <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase">Featured Work</span>
      </div>

      <div className="reveal-section flex flex-col gap-5 md:gap-6">
        {works.map((w) => {
          const isLive = !!w.link;
          const Wrapper = isLive ? "a" : "div";
          const wrapperProps = isLive
            ? { href: w.link, target: "_blank" as const, rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={w.title}
              {...wrapperProps}
              data-hover={isLive ? true : undefined}
              className={`group relative rounded-xl border overflow-hidden transition-colors ${
                isLive
                  ? "border-primary/30 bg-gradient-to-br from-primary/[0.06] to-surface-2 hover:border-primary/50"
                  : "border-border bg-surface-2"
              }`}
            >
              {/* Teal left accent for live card */}
              {isLive && (
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-primary" />
              )}

              <div className="p-6 md:p-10">
                {/* Tag */}
                <span className="font-mono text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
                  {w.tag}
                </span>

                {/* Title row */}
                <div className="flex items-center gap-3 mt-3 mb-3">
                  <h3 className="font-sans text-[22px] md:text-[26px] font-semibold text-foreground">
                    {w.title}
                  </h3>
                  {isLive && (
                    <ArrowUpRight
                      size={20}
                      className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  )}
                </div>

                {/* Description */}
                <p className="font-sans text-[14px] md:text-[15px] text-muted-foreground leading-[1.75] max-w-[640px] mb-5">
                  {w.description}
                </p>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-2">
                  {w.meta.map((m) => (
                    <span
                      key={m}
                      className="font-mono text-[10px] text-muted-foreground/70 border border-border px-3 py-1 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  </section>
);

export default SelectedWorkSection;
