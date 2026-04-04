import { X, Check } from "lucide-react";

const leftItems = [
  "Missed calls become missed jobs",
  "Leads go cold while you're on-site",
  "Your competitor responded. You didn't.",
  "Generic website no one can find",
  "Admin work eats your evenings",
];

const rightItems = [
  "AI answers instantly, 24/7",
  "Leads are captured and followed up automatically",
  "You're first to respond, every time",
  "Website built to convert local traffic",
  "Automation handles the repetitive stuff",
];

const BeforeAfterSection = () => (
  <section className="py-[72px] px-5 md:px-10 bg-background">
    <div className="max-w-[1000px] mx-auto reveal-section">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-border">
        {/* Left column */}
        <div className="bg-[#141414]">
          <div className="px-6 py-5 border-b border-border">
            <span className="font-mono text-[11px] text-foreground tracking-[0.2em] uppercase">
              Without Ardent
            </span>
          </div>
          {leftItems.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 px-6 py-4 ${i < leftItems.length - 1 ? "border-b border-border" : ""}`}
            >
              <X size={16} className="text-destructive mt-0.5 shrink-0" />
              <span className="font-sans text-[14px] text-muted-foreground leading-[1.6]">{item}</span>
            </div>
          ))}
        </div>

        {/* Center divider (visible on md+) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-border" style={{ display: "none" }} />

        {/* Right column */}
        <div className="bg-surface-2 md:border-l-2 border-border border-t md:border-t-0">
          <div className="px-6 py-5 border-b border-border">
            <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase">
              With Ardent
            </span>
          </div>
          {rightItems.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 px-6 py-4 ${i < rightItems.length - 1 ? "border-b border-border" : ""}`}
            >
              <Check size={16} className="text-primary mt-0.5 shrink-0" />
              <span className="font-sans text-[14px] text-foreground leading-[1.6]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
