const Footer = () => (
  <footer className="bg-bg-elevated py-10 md:py-16 px-5 md:px-10">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
      <div className="flex flex-col">
        <span className="font-serif text-[16px] md:text-[18px] text-foreground">Ardent Studio</span>
        <span className="font-mono text-[11px] text-gold tracking-[0.2em] uppercase mt-1">AI App Builders</span>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-7">
        {[
          { label: "Services", href: "#services" },
          { label: "Work", href: "#work" },
          { label: "Process", href: "#process" },
          { label: "Pricing", href: "#pricing" },
          { label: "SartoriAI", href: "http://www.sartoriai.com/", external: true },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="font-mono text-[14px] text-label-text hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="md:text-right">
        <span className="font-mono text-[11px] text-label-text">© 2026 Ardent Studio</span>
      </div>
    </div>
  </footer>
);

export default Footer;
