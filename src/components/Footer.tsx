const Footer = () => (
  <footer className="bg-bg-elevated border-t border-border py-12 px-6 md:px-10">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* Logo */}
      <div className="flex flex-col">
        <span className="font-serif text-[18px] text-foreground">Ardent Studio</span>
        <span className="font-mono text-[9px] text-gold tracking-[0.2em] uppercase">AI App Builders</span>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-6">
        {[
          { label: "Services", href: "#services" },
          { label: "Work", href: "#work" },
          { label: "Process", href: "#process" },
          { label: "Pricing", href: "#pricing" },
          { label: "SartoriAI", href: "https://sartoriai.com", external: true },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="font-mono text-[11px] text-label-text hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="md:text-right">
        <span className="font-mono text-[11px] text-label-text">© 2026 Ardent Studio</span>
      </div>
    </div>
  </footer>
);

export default Footer;
