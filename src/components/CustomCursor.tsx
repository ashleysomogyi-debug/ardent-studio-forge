import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [role=button], input, label, [data-cursor-hover]";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mql.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let ringScale = 1;
    let targetScale = 1;
    let ringOpacity = 1;
    let targetOpacity = 1;
    let visible = false;
    let raf = 0;

    const setVisible = (v: boolean) => {
      visible = v;
      dot.style.opacity = v ? "1" : "0";
      ring.style.opacity = v ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onDown = () => {
      targetScale = 0.55; // ~20px from 36px
    };
    const onUp = () => {
      targetScale = isHovering ? 1.78 : 1;
    };

    let isHovering = false;
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target && target.closest && target.closest(HOVER_SELECTOR)) {
        isHovering = true;
        targetScale = 1.78; // ~64px from 36px
        targetOpacity = 0.7;
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target && target.closest && target.closest(HOVER_SELECTOR)) {
        isHovering = false;
        targetScale = 1;
        targetOpacity = 1;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ringScale += (targetScale - ringScale) * 0.2;
      ringOpacity += (targetOpacity - ringOpacity) * 0.2;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      ring.style.borderColor = `rgba(195, 247, 58, ${ringOpacity})`;
      raf = requestAnimationFrame(tick);
    };

    document.documentElement.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "9999px",
          border: "1.5px solid #C3F73A",
          pointerEvents: "none",
          mixBlendMode: "difference",
          zIndex: 9998,
          opacity: 0,
          willChange: "transform, opacity",
          transition: "opacity 150ms ease",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "9999px",
          background: "#F7F3EC",
          pointerEvents: "none",
          mixBlendMode: "difference",
          zIndex: 9999,
          opacity: 0,
          willChange: "transform, opacity",
          transition: "opacity 150ms ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
