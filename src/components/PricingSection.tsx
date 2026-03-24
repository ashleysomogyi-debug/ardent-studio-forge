const Check = () => <span className="text-gold mr-2">✓</span>;
const Cross = () => <span className="text-error-red mr-2">✗</span>;
const Arrow = () => <span className="text-error-red mr-2">→</span>;

const PricingSection = () => (
  <section id="pricing" className="bg-bg-base py-20 px-6 md:py-24 md:px-10">
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="reveal-section text-center mb-16">
        <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-light leading-[1.05] mb-4">
          Simple,<br /><em className="text-gold">fixed</em> pricing.
        </h2>
        <p className="font-mono text-[12px] text-body-text max-w-[480px] mx-auto">
          No hourly rates. No surprises. Every price is confirmed at scope call — before we start.
        </p>
      </div>

      {/* Qualifier tool */}
      <div className="reveal-section border border-border mb-12">
        <div className="p-6 border-b border-border">
          <span className="font-mono text-[11px] text-label-text">Which tier is your project?</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Column 1 */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-border">
            <h4 className="font-serif text-[18px] text-foreground mb-4">Every build includes</h4>
            <ul className="space-y-2 font-mono text-[11px] text-body-text">
              <li><Check />Basic auth</li>
              <li><Check />Mobile-responsive layout</li>
              <li><Check />Deployment to production</li>
              <li><Check />Full source code handoff</li>
              <li><Check />Walkthrough recording</li>
            </ul>
            <p className="font-mono text-[10px] text-label-text mt-4 leading-relaxed">
              These are never line items. Every project gets them regardless of tier.
            </p>
          </div>
          {/* Column 2 */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-border">
            <h4 className="font-serif text-[18px] text-foreground mb-1">Starter</h4>
            <span className="font-mono text-[11px] text-gold">$2,500</span>
            <ul className="space-y-2 font-mono text-[11px] text-body-text mt-4">
              <li><Check />One user role</li>
              <li><Check />One core workflow</li>
              <li><Check />Up to 3 database tables</li>
              <li><Check />Landing pages & simple tools</li>
              <li><Cross />No AI integration</li>
              <li><Cross />No third-party APIs</li>
              <li><Cross />No multiple user roles</li>
            </ul>
            <p className="font-mono text-[10px] text-label-text mt-4 leading-relaxed">
              If any <span className="text-error-red">✗</span> items apply, it moves to Business Tool.
            </p>
          </div>
          {/* Column 3 */}
          <div className="p-6">
            <h4 className="font-serif text-[18px] text-foreground mb-1">Business Tool</h4>
            <span className="font-mono text-[11px] text-gold">from $6,500</span>
            <ul className="space-y-2 font-mono text-[11px] text-body-text mt-4">
              <li><Arrow />AI integration of any kind</li>
              <li><Arrow />Third-party API</li>
              <li><Arrow />Multiple user roles</li>
              <li><Check />Complex workflows</li>
              <li><Check />PDF generation</li>
              <li><Check />Admin dashboard</li>
              <li><Check />30 days support</li>
            </ul>
            <p className="font-mono text-[10px] text-label-text mt-4 leading-relaxed">
              Any one <span className="text-error-red">→</span> trigger moves the project here.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="reveal-section grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-12">
        {/* Starter */}
        <div className="bg-bg-base p-10 flex flex-col">
          <span className="font-mono text-[10px] text-label-text">Starter</span>
          <div className="mt-2 mb-1">
            <span className="font-serif text-[40px] font-light text-foreground">$2,500</span>
          </div>
          <span className="font-mono text-[10px] text-label-text mb-4">fixed fee · 1 week</span>
          <p className="font-mono text-[11px] text-body-text leading-relaxed mb-6">
            Best for: landing pages, single-workflow tools, simple apps with one user type.
          </p>
          <ul className="space-y-2 font-mono text-[11px] text-body-text mb-4">
            <li>One core workflow / one user role</li>
            <li>Up to 3 database tables</li>
            <li>Up to 6 screens</li>
          </ul>
          <p className="font-mono text-[10px] text-label-text/50 mb-8">Auth, mobile layout, deploy, source code</p>
          <a
            href="#contact"
            data-hover
            className="mt-auto font-mono text-[11px] border border-foreground/30 text-foreground px-6 py-3 rounded-full text-center hover:border-foreground/60 transition-colors"
          >
            Book a scope call
          </a>
        </div>

        {/* Business Tool */}
        <div className="bg-bg-base p-10 flex flex-col relative">
          <span className="absolute top-4 right-4 font-mono text-[9px] bg-gold/20 text-gold px-3 py-1 rounded-full">
            Most Requested
          </span>
          <span className="font-mono text-[10px] text-label-text">Business Tool</span>
          <div className="mt-2 mb-1">
            <span className="font-serif text-[40px] font-light text-foreground">$6,500</span>
            <span className="font-mono text-[11px] text-label-text ml-1">+</span>
          </div>
          <span className="font-mono text-[10px] text-label-text mb-4">from · 1–3 weeks</span>
          <p className="font-mono text-[11px] text-body-text leading-relaxed mb-6">
            Triggered by: AI integration, any third-party API, or multiple user roles.
          </p>
          <ul className="space-y-2 font-mono text-[11px] text-body-text mb-4">
            <li>AI integration & prompt engineering</li>
            <li>Third-party APIs</li>
            <li>Multiple user roles</li>
            <li>PDF generation</li>
            <li>Admin dashboard</li>
            <li>30 days post-launch support</li>
          </ul>
          <p className="font-mono text-[10px] text-label-text/50 mb-8">Auth, mobile layout, deploy, source code</p>
          <a
            href="#contact"
            data-hover
            className="mt-auto font-mono text-[11px] bg-foreground text-bg-base px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity"
          >
            Book a scope call
          </a>
        </div>

        {/* Rescue */}
        <div className="bg-bg-base p-10 flex flex-col">
          <span className="font-mono text-[10px] text-label-text">Rescue & Finish</span>
          <div className="mt-2 mb-1">
            <span className="font-serif text-[40px] font-light text-foreground">$1,500</span>
          </div>
          <span className="font-mono text-[10px] text-label-text mb-4">fixed fee · 48–72 hrs</span>
          <p className="font-mono text-[11px] text-body-text leading-relaxed mb-6">
            Your project already exists. We take over a stuck Lovable, Bolt, or Replit build.
          </p>
          <ul className="space-y-2 font-mono text-[11px] text-body-text mb-4">
            <li>Full code review</li>
            <li>Bug fixing & completion</li>
            <li>Deployment & handoff</li>
          </ul>
          <p className="font-mono text-[10px] text-label-text/50 mb-8">Source code, walkthrough</p>
          <a
            href="#contact"
            data-hover
            className="mt-auto font-mono text-[11px] border border-foreground/30 text-foreground px-6 py-3 rounded-full text-center hover:border-foreground/60 transition-colors"
          >
            Get unstuck
          </a>
        </div>
      </div>

      {/* Retainer strip */}
      <div className="reveal-section flex flex-col md:flex-row items-start md:items-center justify-between border border-border p-6 gap-4">
        <p className="font-mono text-[11px] text-body-text">
          Ongoing support available. Every project can roll into a monthly retainer — hosting oversight, minor feature updates, and priority support.
        </p>
        <span className="font-mono text-[12px] text-gold whitespace-nowrap">From $300 / month</span>
      </div>
    </div>
  </section>
);

export default PricingSection;
