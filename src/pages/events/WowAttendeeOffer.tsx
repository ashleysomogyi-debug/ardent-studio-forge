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
  "https://calendly.com/asomogyi-ardentstudio/30min?utm_source=wow&utm_medium=qr&utm_campaign=chocolate";
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
        "An attendee-only offer from Ardent Studio: a free 30-minute audit of the one manual task worth automating first in your business.",
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
      title: "Book 30 minutes",
      body: "Pick a time that works. No prep needed, no slide deck on my end.",
    },
    {
      n: "02",
      title: "We find the one task",
      body: "I ask about the work that eats your week and we pick the single manual process that costs you the most.",
    },
    {
      n: "03",
      title: "You leave with a plan",
      body: "A one-page write-up of what an agent for that task looks like, what it would take to build, and what it would save. Yours to keep, whether or not you hire me.",
    },
  ];

  return (
    <div className="min-h-screen bg-ardent-studio text-ardent-paper font-sans">
      {/* Top bar */}
      <header className="border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5">
          <a href="/" className="font-sans text-[15px] font-semibold tracking-tight text-ardent-paper">
            Ardent <span style={{ color: TEAL }}>Studio</span>
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ardent-paper/55">
            Women of Wellington · Attendee offer
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5">
        {/* Hero */}
        <section className="pb-12 pt-14 md:pt-20">
          <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: TEAL }}>
            You scanned the chocolate. Here is the rest.
          </p>
          <h1 className="text-[36px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[52px]">
            Thirty free minutes to find the task{" "}
            <span style={{ color: TEAL }}>you should stop doing by hand.</span>
          </h1>
          <div className="my-7 h-[3px] w-14 bg-ardent-lime" />
          <p className="max-w-xl text-[17px] leading-[1.55] text-ardent-paper/85">
            Most AI training stops at the demo. This is the part that comes after. As a thank-you for spending
            the session with me, I am offering every attendee a free One Task Audit: 30 minutes with me to find
            the single manual process in your business that is worth automating first, and a written plan for
            what that would look like.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-ardent-lime px-7 py-4 font-sans text-[15px] font-semibold text-ardent-studio transition-opacity hover:opacity-90"
            >
              Book my free audit
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ardent-paper/55">
              Free for attendees · Book by {OFFER_DEADLINE}
            </span>
          </div>
        </section>

        {/* What you get */}
        <section className="border-t border-white/[0.08] py-12">
          <p className="mb-8 font-mono text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: TEAL }}>
            How it works
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="mb-3 font-mono text-[32px] font-medium leading-none text-ardent-lime">{s.n}</div>
                <h3 className="mb-2 text-[18px] font-semibold leading-[1.3]">{s.title}</h3>
                <p className="text-[15px] leading-[1.55] text-ardent-paper/70">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Callout */}
        <section className="py-4">
          <div className="border-l-[3px] border-ardent-lime bg-[rgba(195,247,58,0.08)] px-6 py-5">
            <p className="text-[15px] leading-[1.55] text-ardent-paper/90">
              Good candidates for the one task: the weekly report you assemble by hand, the inbox triage that eats
              your mornings, the quotes you rewrite from scratch, the follow-ups you forget to send, the data you
              re-type from one system into another. If you already know yours, bring it. If you do not, that is
              what the 30 minutes are for.
            </p>
          </div>
        </section>

        {/* Who I am */}
        <section className="border-t border-white/[0.08] py-12">
          <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: TEAL }}>
            Who you will be talking to
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              src="/ashley-profile.jpg"
              alt="Dr. Ashley Somogyi"
              className="h-24 w-24 shrink-0 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-[15px] leading-[1.55] text-ardent-paper/85">
                I am Dr. Ashley Somogyi, founder of Ardent Studio. I build custom agents and automations for small
                businesses in Palm Beach County, Florida, and train the people who use them so the change holds after
                the project ends. There is no agency behind this page. If you book, you get me.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ardent-paper/55">
                Dr. Ashley Somogyi · Ardent Studio · hello@ardentstudio.io
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/[0.08] py-14 text-center">
          <h2 className="text-[26px] font-semibold leading-[1.2] tracking-[-0.01em] md:text-[32px]">
            Eat the chocolate. Then book the call.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.55] text-ardent-paper/70">
            The offer is open to Women of Wellington attendees through {OFFER_DEADLINE}. One audit per business.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-ardent-lime px-7 py-4 font-sans text-[15px] font-semibold text-ardent-studio transition-opacity hover:opacity-90"
          >
            Book my free audit
          </a>
          <p className="mt-6 text-[13px] text-ardent-paper/55">
            Prefer email? Write to{" "}
            <a href="mailto:hello@ardentstudio.io?subject=WoW%20One%20Task%20Audit" className="underline" style={{ color: TEAL }}>
              hello@ardentstudio.io
            </a>{" "}
            with "WoW" in the subject line.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.08em] text-ardent-paper/40 sm:flex-row sm:justify-between">
          <span>Ardent Studio · Palm Beach County, Florida</span>
          <a href="/" className="hover:text-ardent-paper/70">
            ardentstudio.io
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WowAttendeeOffer;
