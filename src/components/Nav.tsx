import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-10 h-[80px] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,13,13,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
      }}
    >
      <a href="#" className="flex flex-col shrink-0">
        <span className="font-sans text-[16px] md:text-[18px] text-foreground tracking-wide font-semibold">Ardent Studio</span>
        <span className="font-mono text-[11px] md:text-[11px] text-ardent-cyan tracking-[0.15em] md:tracking-[0.2em] uppercase">AI Digital Products</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Work", href: "/#work" },
          { label: "Process", href: "/#process" },
          { label: "Apps", href: "/apps" },
          { label: "Training", href: "/training" },
          { label: "Contact", href: "/#book-a-call" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-sans text-[15px] text-label-text hover:text-foreground transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="https://calendly.com/hello-ardentstudio/30min"
        target="_blank"
        rel="noopener noreferrer"
        data-hover
        className="font-sans text-[12px] md:text-[13px] bg-foreground text-bg-base px-3 md:px-5 py-2 rounded-full hover:opacity-90 transition-opacity shrink-0"
      >
        <span className="hidden md:inline">Book a free consultation</span>
        <span className="md:hidden">Book a call</span>
      </a>
    </nav>
  );
};

export default Nav;
