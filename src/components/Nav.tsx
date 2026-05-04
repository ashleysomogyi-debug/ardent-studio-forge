import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Automation & Apps", href: "/services/ai-automation" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        if (!menuOpen) {
          if (y <= 100) {
            setHidden(false);
          } else if (y > lastY.current + 4) {
            setHidden(true);
          } else if (y < lastY.current - 4) {
            setHidden(false);
          }
        }
        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-10 h-[80px] transition-all duration-200"
        style={{
          background: scrolled ? "rgba(13,13,13,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <a href="#" className="flex flex-col shrink-0">
          <span className="font-sans text-[16px] md:text-[18px] text-foreground tracking-wide font-semibold">Ardent Studio</span>
          <span className="font-mono text-[11px] md:text-[11px] text-ardent-cyan tracking-[0.15em] md:tracking-[0.2em] uppercase">AI Digital Products</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
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
          href="/contact"
          data-hover
          className="hidden md:inline-flex font-sans text-[12px] md:text-[13px] bg-foreground text-bg-base px-3 md:px-5 py-2 rounded-full hover:opacity-90 transition-opacity shrink-0"
        >
          Book a free consultation
        </a>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-foreground"
        >
          <Menu size={26} strokeWidth={1.5} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[200] md:hidden animate-fade-in"
          style={{ animationDuration: "200ms" }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute inset-0 bg-ardent-studio"
            style={{
              backgroundImage:
                "linear-gradient(rgba(195,247,58,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(195,247,58,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="relative h-full w-full flex flex-col px-6 pt-6 pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between h-[68px]">
              <div className="flex flex-col">
                <span className="font-sans text-[16px] text-foreground tracking-wide font-semibold">Ardent Studio</span>
                <span className="font-mono text-[11px] text-ardent-cyan tracking-[0.15em] uppercase">AI Digital Products</span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 text-foreground"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div
              className="flex-1 flex flex-col justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 font-serif text-[30px] leading-tight text-foreground hover:text-ardent-coral transition-colors"
                  style={{ fontFamily: "Georgia, 'Cormorant Garamond', serif" }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center font-sans text-[15px] font-medium bg-ardent-coral text-ardent-studio px-6 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a free consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
