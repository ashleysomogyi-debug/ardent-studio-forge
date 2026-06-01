import { Link } from "react-router-dom";

const services = [
  { label: "AI Automation", to: "/services/ai-automation" },
  { label: "AI Chatbots", to: "/services/ai-chatbot" },
  { label: "Workflow Automation", to: "/services/workflow-automation" },
  { label: "AI Tools Setup & Training", to: "/services/ai-tools-setup" },
  { label: "Training Workshops", to: "/training" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book a call", href: "https://calendly.com/asomogyi-ardentstudio/30min", external: true },
  { label: "SartoriAI", href: "https://www.sartoriai.com/", external: true },
];

const locations = [
  { label: "West Palm Beach", to: "/locations/west-palm-beach" },
  { label: "Boca Raton", to: "/locations/boca-raton" },
  { label: "Delray Beach", to: "/locations/delray-beach" },
  { label: "Boynton Beach", to: "/locations/boynton-beach" },
  { label: "Jupiter", to: "/locations/jupiter" },
  { label: "Palm Beach Gardens", to: "/locations/palm-beach-gardens" },
  { label: "Wellington", to: "/locations/wellington" },
  { label: "Lake Worth Beach", to: "/locations/lake-worth-beach" },
];

const Footer = () => (
  <footer id="book-a-call" className="bg-bg-elevated py-10 md:py-16 px-5 md:px-10">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Brand */}
      <div className="flex flex-col">
        <Link to="/" className="inline-block">
          <span className="font-sans text-[16px] md:text-[18px] text-foreground font-semibold">Ardent Studio</span>
          <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase block mt-1">AI Automation · Palm Beach County</span>
        </Link>
        <p className="font-sans text-[13px] text-muted-foreground mt-4 leading-[1.6]">
          AI automation for small businesses in Palm Beach County and South Florida. Based in Boynton Beach, FL.
        </p>
        <span className="font-mono text-[11px] text-muted-foreground mt-4">© 2026 Ardent Studio</span>
      </div>

      {/* Services */}
      <div>
        <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-4 block">Services</span>
        <ul className="space-y-2.5">
          {services.map((s) => (
            <li key={s.to}>
              <Link to={s.to} className="font-sans text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Locations */}
      <div>
        <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-4 block">Service Area</span>
        <ul className="space-y-2.5">
          {locations.map((loc) => (
            <li key={loc.to}>
              <Link to={loc.to} className="font-sans text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                {loc.label}
              </Link>
            </li>
          ))}
          <li>
            <span className="font-sans text-[13px] text-muted-foreground/60">+ all of Palm Beach County, FL</span>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-4 block">Contact</span>
        <div className="space-y-2.5">
          <ul className="space-y-2">
            {company.map((c) => (
              <li key={c.label}>
                {c.external ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {c.label}
                  </a>
                ) : (
                  <a href={c.href} className="font-sans text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {c.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <address className="not-italic space-y-2 pt-2">
            <p className="font-sans text-[13px] text-muted-foreground leading-[1.6]">
              Boynton Beach, FL<br />Palm Beach County
            </p>
            <a href="tel:+17282010192" className="font-sans text-[14px] text-muted-foreground hover:text-foreground transition-colors block">
              (728) 201-0192
            </a>
            <a href="mailto:hello@ardentstudio.io" className="font-sans text-[14px] text-muted-foreground hover:text-foreground transition-colors block">
              hello@ardentstudio.io
            </a>
          </address>
        </div>
      </div>
    </div>

    {/* SEO city list strip -->*/}
    <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t border-border-subtle">
      <p className="font-sans text-[12px] text-muted-foreground/50 leading-[1.8] text-center">
        Serving small businesses across Palm Beach County, FL — West Palm Beach · Boca Raton · Delray Beach · Boynton Beach · Jupiter · Palm Beach Gardens · Wellington · Lake Worth Beach · North Palm Beach · Riviera Beach · Royal Palm Beach · Greenacres · Lantana · Tequesta · Juno Beach · Palm Beach · and all of South Florida
      </p>
    </div>
  </footer>
);

export default Footer;
