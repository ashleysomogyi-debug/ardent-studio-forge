import { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

const ACCESS_KEY = "u2t3zl7q";
const CALENDLY =
  "https://calendly.com/asomogyi-ardentstudio/one-task-audit-30-min?utm_source=wow&utm_medium=qr&utm_campaign=chocolate";
const OFFER_DEADLINE = "November 30, 2026";

const TEAL = "#0A7D7B";

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
    {
      n: "01",
      label: "Book 30 minutes",
      bg: "bg-[#0A7D7B]",
      fg: "text-white",
      chip: "bg-[#C3F73A] text-[#0D0D0D]",
    },
    {
      n: "02",
      label: "Tell me what eats your week",
      bg: "bg-[#C3F73A]",
      fg: "text-[#0D0D0D]",
      chip: "bg-[#0D0D0D] text-[#C3F73A]",
    },
    {
      n: "03",
      label: "Leave with a plan to automate it",
      bg: "bg-[#FFC9C2]",
      fg: "text-[#0D0D0D]",
      chip: "bg-[#FF6B6B] text-[#0D0D0D]",
    },
  ];

  const button =
    "inline-flex items-center justify-center rounded-full bg-[#C3F73A] px-8 py-4 font-sans text-[16px] font-semibold text-[#0D0D0D] shadow-[0_4px_0_#0D0D0D] ring-2 ring-[#0D0D0D] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none";

  const dots = {
    backgroundImage: "radial-gradient(#FF6B6B 2px, transparent 2.5px)",
    backgroundSize: "18px 18px",
  } as const;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#F5F5F0] font-sans text-[#0D0D0D]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-24 h-40 w-40 opacity-50 md:right-10 md:h-56 md:w-56"
        style={dots}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-[46%] h-44 w-44 rounded-full bg-[#C3F73A] opacity-60 md:-left-10 md:h-60 md:w-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-t-full bg-[#0DBFBC] opacity-25 md:h-80 md:w-80"
      />

      <header className="relative mx-auto w-full max-w-3xl px-6 pt-7">
        <a href="/" className="inline-flex items-center gap-3 text-[15px] font-semibold tracking-tight">
          <img src="/ardent-logo-circle.png" alt="" className="h-9 w-9" />
          <span>
            Ardent <span style={{ color: TEAL }}>Studio</span>
          </span>
        </a>
      </header>

      <main className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 pb-12 pt-12 md:pt-16">
        <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#0A7D7B] ring-1 ring-[#0A7D7B]/30">
          <span className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
          For Women of Wellington attendees
        </p>

        <h1 className="text-[44px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[72px]">
          Your free
          <br />
          <span className="relative mt-2 inline-block -rotate-1 rounded-xl bg-[#C3F73A] px-3 pb-1 md:px-4">
            One Task Audit.
          </span>
        </h1>

        <p className="mt-7 max-w-md text-[18px] leading-[1.5] text-[rgba(13,13,13,0.75)]">
          30 minutes with me to find the one thing you should stop doing by hand.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-dashed border-[#FF6B6B] bg-white shadow-[0_10px_0_rgba(255,107,107,0.25)] md:flex">
          <div className="flex flex-row items-center justify-between gap-4 bg-[#FF6B6B] px-6 py-5 md:w-56 md:flex-col md:items-start md:justify-center md:py-8">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.1em]">Admit one</span>
            <span className="text-[34px] font-bold leading-none tracking-[-0.02em]">FREE</span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.1em]">30 min audit</span>
          </div>
          <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
            <div>
              <div className="text-[22px] font-bold leading-tight">Bring me one task.</div>
              <p className="mt-1 text-[15px] text-[rgba(13,13,13,0.7)]">
                Pick the one you cannot shake. I will look at it with you, for free.
              </p>
            </div>
            <div>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={button}>
                Book my free audit
              </a>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(13,13,13,0.62)]">
              Open through {OFFER_DEADLINE} · One per business
            </div>
          </div>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className={`flex items-center gap-4 rounded-2xl p-5 md:flex-col md:items-start md:gap-6 md:p-6 ${s.bg} ${s.fg}`}
            >
              <span
                className={`shrink-0 rounded-full px-3 py-1 font-mono text-[13px] font-semibold ${s.chip}`}
              >
                {s.n}
              </span>
              <span className="text-[18px] font-semibold leading-snug">{s.label}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex items-center gap-5">
          <div className="shrink-0 rounded-t-full border-[3px] border-[#FF6B6B] bg-[#0DBFBC] p-1">
            <img
              src="/ashley-profile.jpg"
              alt="Dr. Ashley Somogyi"
              className="h-20 w-16 rounded-t-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-[15px] leading-[1.4]">
            <div className="text-[18px] font-bold">Dr. Ashley Somogyi</div>
            <div className="text-[rgba(13,13,13,0.68)]">Founder, Ardent Studio. You get me, not an agency.</div>
          </div>
        </div>
      </main>

      <footer className="relative mx-auto w-full max-w-3xl px-6 pb-8 font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(13,13,13,0.6)]">
        Free for attendees · Through {OFFER_DEADLINE}
      </footer>
    </div>
  );
};

export default WowAttendeeOffer;
