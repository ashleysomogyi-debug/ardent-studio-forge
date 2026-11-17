import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/lib/seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BOOKING_URL = "https://calendly.com/asomogyi-ardentstudio/30min";
const mono = "font-mono uppercase";
const card = "workshop-card";
const segment =
  "min-h-11 rounded-full px-5 py-2 text-[15px] font-semibold text-foreground data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none";
const chipTab =
  "min-h-11 rounded-full border border-foreground/25 bg-white px-5 py-2 text-[15px] font-semibold text-foreground data-[state=active]:border-foreground data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none";

/* ---------- Small content pieces used inside playbook steps ---------- */

export const P = ({ children }: { children: ReactNode }) => <p className="m-0">{children}</p>;

export const DemoLabel = ({ children }: { children: ReactNode }) => (
  <span className={`${mono} text-[12px] tracking-[0.12em] text-label-text`}>{children}</span>
);

export const Note = ({ children }: { children: ReactNode }) => (
  <p className="m-0 rounded-2xl bg-background px-[18px] py-3.5 text-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline">
    {children}
  </p>
);

export const Boxes = ({ items }: { items: [string, string | null][] }) => (
  <div className="flex flex-wrap gap-2.5">
    {items.map(([title, sub], i) => (
      <div key={title} className="min-w-0 flex-[1_1_150px] rounded-2xl bg-blush px-4 py-3.5">
        <span className="font-mono text-[20px] text-brick">{String(i + 1).padStart(2, "0")}</span>
        <p className="mt-1 text-[14px] font-semibold text-foreground">{title}</p>
        {sub && <p className="mt-0.5 text-[13px] text-body-text">{sub}</p>}
      </div>
    ))}
  </div>
);

export const ScoreRow = ({ task, hours, risk, verdict, win }: { task: string; hours: string; risk?: string; verdict?: string; win?: boolean }) => (
  <div className={`flex flex-wrap items-baseline gap-x-4 gap-y-2 rounded-xl px-3.5 py-2.5 text-foreground ${win ? "bg-ardent-lime" : "bg-white"}`}>
    <span className="flex-[1_1_200px] font-semibold">{task}</span>
    <span className="font-mono text-[13px]">{hours}</span>
    {risk && <span className="font-mono text-[13px]">{risk}</span>}
    {verdict && <span className="flex-[1_1_160px] text-[14px]">{verdict}</span>}
  </div>
);

/** A prompt box with a working Copy button. */
export const Prompt = ({ children }: { children: string }) => {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setState("copied");
    } catch {
      setState("failed");
    }
  };
  return (
    <div className="rounded-[18px] bg-bg-hover px-5 py-[18px] text-foreground">
      <div className="flex items-center justify-between gap-3">
        <span className={`${mono} text-[12px] tracking-[0.15em] text-label-text`}>Prompt to copy</span>
        <button type="button" onClick={copy} className="min-h-11 rounded-full bg-ardent-lime px-[18px] py-1.5 text-[14px] font-semibold text-ardent-studio transition-opacity hover:opacity-85">
          {state === "copied" ? "Copied" : state === "failed" ? "Select and copy" : "Copy"}
        </button>
      </div>
      <pre className="mt-2.5 whitespace-pre-wrap font-mono text-[14px] leading-[1.6]">{children}</pre>
    </div>
  );
};

/** Pick-your-tool tabs: each option shows its own instructions. */
export const ToolTabs = ({ options }: { options: { label: string; body: ReactNode }[] }) => (
  <Tabs defaultValue={options[0].label}>
    <TabsList aria-label="Choose your AI tool" className="flex h-auto flex-wrap justify-start gap-2 rounded-none bg-transparent p-0">
      {options.map((o) => (
        <TabsTrigger key={o.label} value={o.label} className={chipTab}>{o.label}</TabsTrigger>
      ))}
    </TabsList>
    {options.map((o) => (
      <TabsContent key={o.label} value={o.label} className="mt-4 rounded-2xl bg-background px-[18px] py-4">{o.body}</TabsContent>
    ))}
  </Tabs>
);

/* ---------- The playbook page ---------- */

export interface PlaybookStep {
  /** Mono line above the title, e.g. "Step 1 / 5 min". */
  label: string;
  title: string;
  /** Short name shown in the progress list. */
  nav: string;
  /** Text beside the "done" checkbox. */
  check: string;
  body: ReactNode;
}

export interface PlaybookProps {
  metaTitle: string;
  metaDescription: string;
  crumb: string;
  title: ReactNode;
  intro: string;
  chips: string[];
  demo: {
    eyebrow: string;
    heading: string;
    tabA: string;
    tabB: string;
    leftLabel?: string;
    left?: string;
    a: ReactNode;
    b: ReactNode;
  };
  steps: PlaybookStep[];
  doneMessage: string;
  next: { href: string; label: string };
}

const PlaybookLayout = ({ metaTitle, metaDescription, crumb, title, intro, chips, demo, steps, doneMessage, next }: PlaybookProps) => {
  usePageMeta({ title: metaTitle, description: metaDescription });
  const [open, setOpen] = useState(0);
  const [done, setDone] = useState<boolean[]>(() => steps.map(() => false));
  const count = done.filter(Boolean).length;

  const toggleDone = (i: number, checked: boolean) => {
    setDone((d) => d.map((v, j) => (j === i ? checked : v)));
    if (checked && i < steps.length - 1) setOpen(i + 1);
  };

  return (
    <>
      <Nav />
      <main className="bg-background font-sans text-[16px] leading-[1.6] text-foreground">
        <section className="mx-auto max-w-[1100px] px-5 pb-10 pt-24 md:px-6 md:pt-28">
          <Link to="/playbooks" className={`${mono} text-[13px] tracking-[0.12em] text-primary hover:text-foreground`}>
            Playbooks / {crumb}
          </Link>
          <h1 className="mt-[18px] max-w-[900px] text-[clamp(34px,5vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em]">{title}</h1>
          <p className="mt-5 max-w-[720px] text-[19px] text-body-text">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <span key={c} className={`${mono} rounded-full bg-blush-pill px-3.5 py-2 text-[13px] leading-none tracking-[0.12em] text-brick`}>{c}</span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-5 pb-12 md:px-6">
          <Tabs defaultValue="a" className={`${card} p-6 md:p-8`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className={`${mono} text-[13px] tracking-[0.2em] text-primary`}>{demo.eyebrow}</span>
                <h2 className="mt-2 text-[24px] font-semibold leading-[1.25]">{demo.heading}</h2>
              </div>
              <TabsList aria-label="Choose an example" className="h-auto gap-1.5 rounded-full bg-bg-hover p-1">
                <TabsTrigger value="a" className={segment}>{demo.tabA}</TabsTrigger>
                <TabsTrigger value="b" className={segment}>{demo.tabB}</TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-6 flex flex-wrap gap-5">
              {demo.left && (
                <div className="min-w-0 flex-[1_1_280px] rounded-[18px] bg-background p-5">
                  <DemoLabel>{demo.leftLabel}</DemoLabel>
                  <p className="mt-2">{demo.left}</p>
                </div>
              )}
              <TabsContent value="a" className="mt-0 min-w-0 flex-[2_1_420px] rounded-[18px] border-2 border-bg-hover bg-bg-hover p-5">{demo.a}</TabsContent>
              <TabsContent value="b" className="mt-0 min-w-0 flex-[2_1_420px] rounded-[18px] border-2 border-primary bg-white p-5">{demo.b}</TabsContent>
            </div>
            <p className="mt-4 text-[13px] text-label-text">Illustrative example, not a client result.</p>
          </Tabs>
        </section>

        <section className="mx-auto flex max-w-[1100px] flex-wrap items-start gap-8 px-5 pb-[72px] md:px-6">
          <aside className={`${card} min-w-0 flex-[1_1_260px] p-7 lg:sticky lg:top-24`}>
            <span className={`${mono} text-[13px] tracking-[0.2em] text-primary`}>Your progress</span>
            <div className="mt-3.5 font-mono text-[40px] font-medium leading-none text-primary">
              {count}
              <span className="text-[18px] text-label-text"> of {steps.length}</span>
            </div>
            <div role="progressbar" aria-label="Steps done" aria-valuemin={0} aria-valuemax={steps.length} aria-valuenow={count} className="mt-4 h-2.5 overflow-hidden rounded-full bg-bg-hover">
              <div className="h-full rounded-full bg-ardent-lime transition-[width] duration-300" style={{ width: `${(count / steps.length) * 100}%` }} />
            </div>
            <ol className="mt-[22px] flex list-none flex-col gap-1 p-0">
              {steps.map((s, i) => (
                <li key={s.nav}>
                  <button type="button" onClick={() => setOpen(i)} className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-[15px] ${open === i ? "bg-bg-hover" : "bg-transparent"}`}>
                    <span aria-hidden="true" className={`flex h-6 w-6 flex-none items-center justify-center rounded-full font-mono text-[12px] ${done[i] ? "bg-ardent-lime" : "bg-blush-pill"}`}>
                      {done[i] ? "✓" : i + 1}
                    </span>
                    <span>{s.nav}</span>
                  </button>
                </li>
              ))}
            </ol>
            {count === steps.length && (
              <p className="mt-5 rounded-[14px] bg-ardent-lime px-4 py-3.5 font-semibold text-ardent-studio" role="status">{doneMessage}</p>
            )}
          </aside>

          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-4">
            {steps.map((s, i) => (
              <article key={s.title} className={`${card} px-6 py-6 md:px-7`}>
                <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} className="flex min-h-12 w-full items-center justify-between gap-4 bg-transparent p-0 text-left">
                  <span>
                    <span className={`${mono} block text-[13px] tracking-[0.15em] text-primary`}>{s.label}</span>
                    <span className="block text-[22px] font-semibold leading-[1.3]">{s.title}</span>
                  </span>
                  <span aria-hidden="true" className="font-mono text-[22px]">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="mt-3.5 flex flex-col gap-4 text-body-text">
                    {s.body}
                    <label className="flex min-h-11 cursor-pointer items-center gap-3 font-semibold text-foreground">
                      <input type="checkbox" checked={done[i]} onChange={(e) => toggleDone(i, e.target.checked)} className="h-[22px] w-[22px] accent-teal" />
                      {s.check}
                    </label>
                  </div>
                )}
              </article>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-4 px-1 pt-2">
              <Link to="/playbooks" className="font-semibold text-primary hover:text-foreground">Back to all playbooks</Link>
              <Link to={next.href} className="rounded-full bg-ardent-lime px-[26px] py-3 font-semibold text-ardent-studio transition-opacity hover:opacity-85">{next.label}</Link>
            </div>
          </div>
        </section>

        <section className="px-5 pb-[72px] md:px-6">
          <div className="relative mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-8 rounded-[28px] bg-footer-bg p-8 text-footer-text md:p-12">
            <div className="absolute right-6 top-6 flex gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-coral" />
              <span className="h-2.5 w-2.5 rounded-full bg-ardent-lime" />
            </div>
            <div className="min-w-0 flex-[1_1_480px]">
              <span className={`${mono} text-[13px] tracking-[0.2em] text-footer-muted`}>Stuck on a step?</span>
              <h2 className="mt-3 text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.1] text-dark-band-text">We can set this up with you.</h2>
              <p className="mt-4 max-w-[620px] leading-[1.7] text-footer-muted">
                Book a free 15-minute call. You will get a straight yes or no on whether AI fits the job you have in mind, plus a short written follow-up. No pitch.
              </p>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ardent-lime px-8 py-3.5 font-semibold text-ardent-studio transition-opacity hover:opacity-85">
              Book a free 15-min call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PlaybookLayout;
