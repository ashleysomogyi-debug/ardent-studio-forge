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
        <span className="font-mono text-[11px] md:text-[11px] text-teal tracking-[0.15em] md:tracking-[0.2em] uppercase">AI Digital Products</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {["Work", "Process", "Pricing", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-sans text-[15px] text-label-text hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

    </nav>
  );
};

export default Nav;
