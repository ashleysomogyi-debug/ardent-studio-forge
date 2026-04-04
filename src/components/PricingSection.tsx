const Check = () => <span className="text-teal mr-2">✓</span>;
const Cross = () => <span className="text-error-red mr-2">✗</span>;
const Arrow = () => <span className="text-error-red mr-2">→</span>;

const PricingSection = () => (
  <section id="pricing" className="py-[112px] px-5 md:px-10" style={{ background: "#141414" }}>
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="reveal-section text-center mb-12 md:mb-20">
        <span className="block font-mono text-[11px] text-teal tracking-[0.2em] uppercase mb-6">Pricing</span>
        <h2 className="font-sans text-[clamp(32px,8vw,56px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.1] mb-4 md:mb-5">
          Simple,<br /><em className="text-teal not-italic">fixed</em> pricing.
        </h2>
        <p className="font-sans text-[16px] text-body-text max-w-[480px] mx-auto leading-[1.75]">
          No hourly rates. No surprises. Every price is confirmed at scope call — before we start.
        </p>
      </div>

      {/* Qualifier tool */}
      <div className="reveal-section border border-border mb-10 md:mb-16">
        <div className="p-5 md:p-7 border-b border-border">
          <span className="font-sans text-[16px] text-label-text">Which tier is your project?</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-5 md:p-7 border-b md:border-b-0 md:border-r border-border">
            <h4 className="font-sans text-[17px] md:text-[18px] text-foreground font-semibold mb-4 md:mb-5">Every build includes</h4>
            <ul className="space-y-2.5 md:space-y-3 font-sans text-[14px] text-body-text">
              <li><Check />Basic auth</li>
              <li><Check />Mobile-responsive layout</li>
              <li><Check />Deployment to production</li>
              <li><Check />Full source code handoff</li>
              <li><Check />Walkthrough recording</li>
            </ul>
            <p className="font-mono text-[11px] text-label-text mt-4 md:mt-5 leading-[1.75]">
              These are never line items. Every project gets them regardless of tier.
            </p>
          </div>
          <div className="p-5 md:p-7 border-b md:border-b-0 md:border-r border-border">
            <h4 className="font-sans text-[17px] md:text-[18px] text-foreground font-semibold mb-1">Starter</h4>
            <span className="font-sans text-[14px] text-teal">$2,500</span>
            <ul className="space-y-2.5 md:space-y-3 font-sans text-[14px] text-body-text mt-4 md:mt-5">
              <li><Check />One user role</li>
              <li><Check />One core workflow</li>
              <li><Check />Up to 3 database tables</li>
              <li><Check />Landing pages & simple tools</li>
              <li><Cross />No AI integration</li>
              <li><Cross />No third-party APIs</li>
              <li><Cross />No multiple user roles</li>
            </ul>
            <p className="font-mono text-[11px] text-label-text mt-4 md:mt-5 leading-[1.75]">
              If any <span className="text-error-red">✗</span> items apply, it moves to Business Tool.
            </p>
          </div>
          <div className="p-5 md:p-7">
            <h4 className="font-sans text-[17px] md:text-[18px] text-foreground font-semibold mb-1">Business Tool</h4>
            <span className="font-sans text-[14px] text-teal">from $6,500</span>
            <ul className="space-y-2.5 md:space-y-3 font-sans text-[14px] text-body-text mt-4 md:mt-5">
              <li><Arrow />AI integration of any kind</li>
              <li><Arrow />Third-party API</li>
              <li><Arrow />Multiple user roles</li>
              <li><Check />Complex workflows</li>
              <li><Check />PDF generation</li>
              <li><Check />Admin dashboard</li>
              <li><Check />30 days support</li>
            </ul>
            <p className="font-mono text-[11px] text-label-text mt-4 md:mt-5 leading-[1.75]">
              Any one <span className="text-error-red">→</span> trigger moves the project here.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="reveal-section grid grid-cols-1 md:grid-cols-3 gap-px mb-10 md:mb-16" style={{ background: "rgba(13,191,188,0.2)" }}>
        {/* Starter */}
        <div className="p-8 md:p-12 flex flex-col" style={{ background: "#141414" }}>
          <span className="font-mono text-[11px] text-label-text">Starter</span>
          <div className="mt-2 md:mt-3 mb-1">
            <span className="font-sans text-[32px] md:text-[40px] font-light text-foreground">$2,500</span>
          </div>
          <span className="font-mono text-[11px] text-label-text mb-4 md:mb-5">fixed fee · 1 week</span>
          <p className="font-sans text-[16px] text-body-text leading-[1.75] mb-6 md:mb-8">
            Best for: landing pages, single-workflow tools, simple apps with one user type.
          </p>
          <ul className="space-y-2.5 md:space-y-3 font-sans text-[14px] text-body-text mb-4 md:mb-5">
            <li>One core workflow / one user role</li>
            <li>Up to 3 database tables</li>
            <li>Up to 6 screens</li>
          </ul>
          <p className="font-mono text-[11px] text-label-text/50 mb-8 md:mb-10">Auth, mobile layout, deploy, source code</p>
          <a
            href="#contact"
            data-hover
            className="mt-auto font-sans text-[13px] border border-foreground/30 text-foreground px-6 py-3.5 rounded-full text-center hover:border-foreground/60 transition-colors"
          >
            Book a scope call
          </a>
        </div>

        {/* Business Tool — featured with teal border + tint */}
        <div className="p-8 md:p-12 flex flex-col relative" style={{ background: "linear-gradient(180deg, rgba(13,191,188,0.08) 0%, #141414 40%)", border: "1px solid rgba(13,191,188,0.35)" }}>
          <span className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[11px] bg-teal/20 text-teal px-3 py-1 rounded-full">
            Most Requested
          </span>
          <span className="font-mono text-[11px] text-label-text">Business Tool</span>
          <div className="mt-2 md:mt-3 mb-1">
            <span className="font-sans text-[32px] md:text-[40px] font-light text-foreground">$6,500</span>
            <span className="font-sans text-[14px] text-label-text ml-1">+</span>
          </div>
          <span className="font-mono text-[11px] text-label-text mb-4 md:mb-5">from · 1–3 weeks</span>
          <p className="font-sans text-[16px] text-body-text leading-[1.75] mb-6 md:mb-8">
            Triggered by: AI integration, any third-party API, or multiple user roles.
          </p>
          <ul className="space-y-2.5 md:space-y-3 font-sans text-[14px] text-body-text mb-4 md:mb-5">
            <li>AI integration & prompt engineering</li>
            <li>Third-party APIs</li>
            <li>Multiple user roles</li>
            <li>PDF generation</li>
            <li>Admin dashboard</li>
            <li>30 days post-launch support</li>
          </ul>
          <p className="font-mono text-[11px] text-label-text/50 mb-8 md:mb-10">Auth, mobile layout, deploy, source code</p>
          <a
            href="#contact"
            data-hover
            className="mt-auto font-sans text-[13px] bg-foreground text-bg-base px-6 py-3.5 rounded-full text-center hover:opacity-90 transition-opacity"
          >
            Book a scope call
          </a>
        </div>

        {/* Rescue */}
        <div className="p-8 md:p-12 flex flex-col" style={{ background: "#141414" }}>
          <span className="font-mono text-[11px] text-label-text">Rescue & Finish</span>
          <div className="mt-2 md:mt-3 mb-1">
            <span className="font-sans text-[32px] md:text-[40px] font-light text-foreground">$1,500</span>
          </div>
          <span className="font-mono text-[11px] text-label-text mb-4 md:mb-5">fixed fee · 48–72 hrs</span>
          <p className="font-sans text-[16px] text-body-text leading-[1.75] mb-6 md:mb-8">
            Your project already exists. We take over a stuck Lovable, Bolt, or Replit build.
          </p>
          <ul className="space-y-2.5 md:space-y-3 font-sans text-[14px] text-body-text mb-4 md:mb-5">
            <li>Full code review</li>
            <li>Bug fixing & completion</li>
            <li>Deployment & handoff</li>
          </ul>
          <p className="font-mono text-[11px] text-label-text/50 mb-8 md:mb-10">Source code, walkthrough</p>
          <a
            href="#contact"
            data-hover
            className="mt-auto font-sans text-[13px] border border-foreground/30 text-foreground px-6 py-3.5 rounded-full text-center hover:border-foreground/60 transition-colors"
          >
            Get unstuck
          </a>
        </div>
      </div>

      {/* Retainer strip */}
      <div className="reveal-section flex flex-col md:flex-row items-start md:items-center justify-between border border-border p-5 md:p-7 gap-3 md:gap-4">
        <p className="font-sans text-[16px] text-body-text leading-[1.75]">
          Ongoing support available. Every project can roll into a monthly retainer — hosting oversight, minor feature updates, and priority support.
        </p>
        <span className="font-sans text-[14px] text-teal whitespace-nowrap">From $300 / month</span>
      </div>
    </div>
  </section>
);

export default PricingSection;
