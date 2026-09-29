import { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

// Attendee-only offer page for the Women of Wellington AI event.
// Reached via the QR code on the Ardent chocolate bar wrappers:
//   https://ardentstudio.io/wow?k=u2t3zl7q
// Anyone arriving without the key is sent to the homepage. This is a soft
// gate (the key lives in client code), which is the right level for a
// promo link: it keeps the page out of search and off the public nav.
const ACCESS_KEY = "u2t3zl7q";
const CALENDLY =
  "https://calendly.com/asomogyi-ardentstudio/one-task-audit-30-min?utm_source=wow&utm_medium=qr&utm_campaign=chocolate";
const OFFER_DEADLINE = "November 30, 2026";

const TEAL = "#0DBFBC";

const WowAttendeeOffer = () => {
  const [params] = useSearchParams();
  const key = params.get("k");

  useEffect(() => {
    document.title = "Your free One Task Audit | Ardent Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "An attendee-only offer from Ardent Studio: a free 30-minute audit of the one task worth automating first.",
      );
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    return () => {
      document.head.removeChild(robots);
    };
  }, []);

  if (key !== ACCESS_KEY) return <Navigate to="/" replace />;

  const steps = [
    ["01", "Book 30 minutes"],
    ["02", "Tell me what eats your week"],
    ["03", "Leave with a plan to automate it"],
  ];

  const button =
    "inline-flex items-center justify-center rounded-md bg-ardent-lime px-8 py-4 font-sans text-[16px] font-semibold text-ardent-studio transition-opacity hover:opacity-90";

  return (
    <div className="flex min-h-screen flex-col bg-ardent-studio font-sans text-ardent-paper">
      <header className="mx-auto w-full max-w-2xl px-6 pt-7">
        <a href="/" className="text-[15px] font-semibold tracking-tight">
          Ardent <span style={{ color: TEAL }}>Studio</span>
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-16">
        <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: TEAL }}>
          For Women of Wellington attendees
        </p>

        <h1 className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[60px]">
          Your free
          <br />
          <span style={{ color: TEAL }}>One Task Audit.</span>
        </h1>

        <p className="mt-6 max-w-md text-[18px] leading-[1.5] text-ardent-paper/80">
          30 minutes with me to find the one thing you should stop doing by hand.
        </p>

        <div className="mt-10">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={button}>
            Book my free audit
          </a>
        </div>

        <ol className="mt-16 space-y-4 border-t border-white/[0.08] pt-10">
          {steps.map(([n, label]) => (
            <li key={n} className="flex items-baseline gap-5">
              <span className="w-8 shrink-0 font-mono text-[13px] font-medium text-ardent-lime">{n}</span>
              <span className="text-[17px] text-ardent-paper/85">{label}</span>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex items-center gap-4">
          <img
            src="/ashley-profile.jpg"
            alt="Dr. Ashley Somogyi"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
            loading="lazy"
          />
          <div className="text-[14px] leading-[1.4]">
            <div className="font-semibold">Dr. Ashley Somogyi</div>
            <div className="text-ardent-paper/55">Founder, Ardent Studio. You get me, not an agency.</div>
          </div>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-2xl px-6 pb-8 font-mono text-[11px] uppercase tracking-[0.08em] text-ardent-paper/40">
        Free for attendees · Through {OFFER_DEADLINE}
      </footer>
    </div>
  );
};

export default WowAttendeeOffer;
