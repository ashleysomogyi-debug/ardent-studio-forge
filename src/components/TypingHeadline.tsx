import { useEffect, useRef, useState } from "react";

const words = ["connects.", "works.", "matters."];
const colors = ["text-primary", "text-primary", "text-primary"];

const TYPE_MS = 85;
const DELETE_MS = 50;
const HOLD_AFTER_TYPE = 1800;
const HOLD_AFTER_DELETE = 250;

const serif = "'Inter', system-ui, sans-serif";

const TypingHeadline = () => {
  const [reduced, setReduced] = useState(false);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const current = words[idx];

    if (!deleting && text === current) {
      timeoutRef.current = setTimeout(() => setDeleting(true), HOLD_AFTER_TYPE);
    } else if (deleting && text === "") {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false);
        setIdx((i) => (i + 1) % words.length);
      }, HOLD_AFTER_DELETE);
    } else {
      timeoutRef.current = setTimeout(
        () => {
          setText((t) => (deleting ? t.slice(0, -1): current.slice(0, t.length + 1)));
        },
        deleting ? DELETE_MS: TYPE_MS,
      );
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, deleting, idx, reduced]);

  if (reduced) {
    return (
      <h1
        className="text-[clamp(3rem,8vw,6rem)] leading-[1.05] font-normal text-foreground"
        style={{ fontFamily: serif }}
      >
        Build what <span className="text-primary">connects.</span>
      </h1>
    );
  }

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <h1
      className="text-[clamp(3rem,8vw,6rem)] leading-[1.05] font-normal text-foreground"
      style={{ fontFamily: serif }}
    >
      Build what{" "}
      <span className="relative inline-block">
        <span className="invisible" aria-hidden="true">{longest}</span>
        <span className={`absolute left-0 top-0 whitespace-nowrap ${colors[idx]}`}>
          {text}
          <span className="typing-cursor text-foreground/80" aria-hidden="true">|</span>
        </span>
      </span>
    </h1>
  );
};

export default TypingHeadline;
