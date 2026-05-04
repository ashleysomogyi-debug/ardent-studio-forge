import { Link } from "react-router-dom";

const services = [
  { label: "Automation & Apps", to: "/services/ai-automation" },
  { label: "Training", to: "/training" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "Book a call", href: "/contact" },
  { label: "SartoriAI", href: "https://www.sartoriai.com/", external: true },
];

const Footer = () => (
  <footer id="book-a-call" className="bg-bg-elevated py-10 md:py-16 px-5 md:px-10">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Brand */}
      <div className="flex flex-col">
        <Link to="/" className="inline-block">
          <span className="font-sans text-[16px] md:text-[18px] text-foreground font-semibold">Ardent Studio</span>
          <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase block mt-1">AI Digital Products</span>
        </Link>
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

      {/* Company */}
      <div>
        <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-4 block">Company</span>
        <ul className="space-y-2.5">
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
      </div>

      {/* Contact */}
      <div>
        <span className="font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-4 block">Contact</span>
        <address className="not-italic space-y-2.5">
          <p className="font-sans text-[14px] text-muted-foreground leading-[1.6]">
            The Greet STE A<br />Dover, DE 19901
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
  </footer>
);

export default Footer;
