import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Automation & Apps", href: "/services/ai-automation" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

const Nav = () => {
  const location = useLocation();
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

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

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
        className="fixed top-0 left-0 right-0 z-[100] flex h-14 items-center justify-between border-b px-4 transition-transform duration-200 md:h-16 md:px-10"
        style={{
          background: "var(--site-header-bg)",
          borderColor: "rgba(255,255,255,0.08)",
          transform: hidden ? "translateY(-100%)": "translateY(0)",
        }}
      >
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img src="/ardent-logo-circle.png" alt="Ardent Studio circular logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="flex flex-col"><span className="font-sans text-[16px] md:text-[18px] text-footer-text tracking-wide font-semibold">Ardent Studio</span>
          <span className="font-mono text-[13px] text-teal-bright tracking-[0.1em] md:tracking-[0.15em] uppercase">Practical AI for Business</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex h-16 items-center border-b-2 pt-0.5 font-sans text-[16px] text-footer-text transition-colors hover:text-ardent-lime ${isActive(item.href) ? "border-teal-bright" : "border-transparent"}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://calendly.com/asomogyi-ardentstudio/30min"
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          className="hidden md:inline-flex font-sans font-semibold text-[16px] bg-ardent-lime text-ardent-studio px-4 md:px-5 py-3 rounded-full hover:opacity-85 transition-opacity shrink-0"
        >
          Book a free 15-min call
        </a>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 text-footer-text"
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
            className="absolute inset-0"
            style={{ background: "var(--site-header-bg)" }}
          />
          <div
            className="relative h-full w-full flex flex-col px-6 pt-6 pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-14 items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/ardent-logo-circle.png" alt="Ardent Studio circular logo" className="w-10 h-10 rounded-full object-cover" />
                <span className="flex flex-col">
                <span className="font-sans text-[16px] text-footer-text tracking-wide font-semibold">Ardent Studio</span>
                 <span className="font-mono text-[13px] text-teal-bright tracking-[0.1em] uppercase">Practical AI for Business</span>
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 text-footer-text"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div
              className="flex flex-1 flex-col justify-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b-2 font-sans text-[18px] font-semibold leading-tight text-footer-text transition-colors hover:text-ardent-lime ${isActive(item.href) ? "border-teal-bright" : "border-transparent"}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="https://calendly.com/asomogyi-ardentstudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center font-sans text-[16px] font-semibold bg-ardent-lime text-ardent-studio px-6 py-4 rounded-full hover:opacity-85 transition-opacity"
            >
              Book a free 15-min call
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
