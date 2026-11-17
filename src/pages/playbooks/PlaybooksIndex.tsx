import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, LayoutGrid, PenLine, Search, Send, Target, type LucideIcon } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaybookDownloadForm from "@/components/PlaybookDownloadForm";
import { usePageMeta } from "@/lib/seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BOOKING_URL = "https://calendly.com/asomogyi-ardentstudio/30min";
const mono = "font-mono uppercase";
const card = "workshop-card";

type Category = "setup" | "writing" | "planning" | "sales" | "found" | "building";

interface Playbook {
  id: Category;
  href: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  blurb: string;
  stepsLabel: string;
  steps: string[];
}

const playbooks: Playbook[] = [
  {
    id: "setup", href: "/playbooks/business-brief", icon: FileText, tag: "Start here / 30 min",
    title: "Stop re-explaining your business to AI",
    blurb: "A new chat knows very little about your business, so you get answers that could be about anyone's. Write one page about yours, save it where the AI can always see it, and the answers start sounding like they know you.",
    stepsLabel: "See the 5 steps",
    steps: ["Run one real task in a fresh chat and save the result.", "Write your one-page business brief.", "Add three things you wrote that sound like you.", "Put it all in a Project so every chat starts with it.", "Run the same task again and compare."],
  },
  {
    id: "writing", href: "/playbooks/sound-like-you", icon: PenLine, tag: "Writing / 5 min a draft",
    title: "Make AI drafts sound like you wrote them",
    blurb: "Customers can often tell when an email came straight out of a chatbot. Six questions to answer before you hit send, so the time you saved does not cost you the personal touch.",
    stepsLabel: "See the 6 questions",
    steps: ["Could you explain it to a customer without the screen?", "Did you check every price, date and name?", "Is there one detail only you would know?", "Would you say it out loud that way?", "Did you cut what the reader does not need?", "Would you sign your name under it?"],
  },
  {
    id: "planning", href: "/playbooks/one-task", icon: Target, tag: "Planning / 45 min",
    title: "Find the one task worth handing to AI",
    blurb: "Skip the AI strategy for now and work out which weekly chore to start with. This is the exercise behind our One Task Audit, written down so you can do it yourself.",
    stepsLabel: "See the 5 steps",
    steps: ["List everything you repeat every week.", "Note roughly how long each one takes.", "Score each for hours saved against what happens if it goes wrong.", "Pick one. Only one.", "Try it in the chat window before anyone builds anything."],
  },
  {
    id: "sales", href: "/playbooks/quote-follow-up", icon: Send, tag: "Sales / 1 hour setup",
    title: "Follow up on every quote without chasing",
    blurb: "Quotes go quiet because following up is nobody's favorite job. Set up a Monday routine where AI tells you who needs a nudge and drafts it in your voice. You read it, fix it, and send it yourself.",
    stepsLabel: "See the 5 steps",
    steps: ["Keep one list of open quotes and active customers.", "Give AI the list every Monday with one saved prompt.", "Get back who to contact and why.", "Have it draft each note using your business brief.", "Review and send. Nothing goes out on its own."],
  },
  {
    id: "found", href: "/playbooks/get-found-by-ai", icon: Search, tag: "Getting found / 1 hour",
    title: "Show up when customers ask AI instead of Google",
    blurb: "More people now ask ChatGPT who to hire the way they used to search. Find out what it says about your business today, then give it clearer answers to work with.",
    stepsLabel: "See the 5 steps",
    steps: ["Ask three AI tools about your business and your trade in your town.", "Write down the ten questions customers ask you most.", "Answer each one on your website in a few plain sentences.", "Make your name, hours and services match everywhere you are listed.", "Ask again next month and see what moved."],
  },
  {
    id: "building", href: "/playbooks/first-tool", icon: LayoutGrid, tag: "Building / One afternoon",
    title: "Build your first small tool without code",
    blurb: "A quote calculator, an intake form, a checklist your team can open on a phone. You describe it in plain English and the AI builds it. We also tell you where the do-it-yourself route stops being a good idea.",
    stepsLabel: "See the 5 steps",
    steps: ["Check whether something you already pay for does the job.", "Write a one-page plan: what it must do and what it must never do.", "Build it by describing it, one piece at a time.", "Test it with five real examples from last week.", "Keep customer data and payments out of your first one."],
  },
];

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" }, { id: "setup", label: "Start here" }, { id: "writing", label: "Writing" }, { id: "planning", label: "Planning" },
  { id: "sales", label: "Sales" }, { id: "found", label: "Getting found" }, { id: "building", label: "Building" },
];

const picks = [
  { quote: "“I know AI can do a lot but I don’t know where to start.”", title: "Find the one task worth handing to AI", href: "/playbooks/one-task", body: "45 minutes with a pen. You finish with one task picked and a way to try it in the chat window before spending anything." },
  { quote: "“I’m not technical at all.”", title: "Stop re-explaining your business to AI", href: "/playbooks/business-brief", body: "30 minutes and nothing to install. You answer ten plain questions and the AI writes the page that makes every later answer better." },
  { quote: "“I don’t know how to use AI.”", title: "Stop re-explaining your business to AI", href: "/playbooks/business-brief", body: "Start here. It is the one setup step that improves everything else you do with AI, and it takes about half an hour." },
  { quote: "“Everything it writes sounds generic.”", title: "Make AI drafts sound like you wrote them", href: "/playbooks/sound-like-you", body: "Five minutes a draft. Six questions to answer before you send anything an AI wrote. It works best once the AI has your business brief from the first playbook." },
  { quote: "“I send quotes and then forget to follow up.”", title: "Follow up on every quote without chasing", href: "/playbooks/quote-follow-up", body: "One hour to set up, ten minutes every Monday after that. AI tells you who needs a nudge and drafts it. You send it." },
  { quote: "“New customers aren’t finding us like they used to.”", title: "Show up when customers ask AI instead of Google", href: "/playbooks/get-found-by-ai", body: "One hour. See what ChatGPT says about your business today, then give it clearer answers to work with." },
];

const downloads = [
  { kind: "Skill", title: "Business Brief Builder", body: "Asks you ten questions about your business and writes the one-page brief from the first playbook." },
  { kind: "Skill", title: "Sounds Like Me", body: "Checks any draft against your own writing and marks the lines that read like a chatbot wrote them." },
  { kind: "Skill", title: "Quote Follow-Up", body: "Reads your list of open quotes and drafts a short, friendly follow-up for each one. You send them." },
  { kind: "Prompts", title: "The Weekly Admin Pack", body: "Copy-and-paste prompts for the jobs most owners repeat: replying to inquiries, summarizing a call, writing up a quote, chasing an invoice. Works in any AI." },
  { kind: "Prompts", title: "One Task Audit", body: "A worksheet and prompt for finding the first task worth handing to AI, based on our One Task Audit. Goes with the planning playbook." },
];

const toggle = (active: boolean) =>
  active ? "border-foreground bg-foreground text-background" : "border-foreground/25 bg-white text-foreground";

const PlaybooksIndex = () => {
  usePageMeta({
    title: "AI Playbooks for Small Business | Ardent Studio",
    description: "Free, plain-English playbooks for small business owners who use ChatGPT or Claude. One job each, step by step, with prompts to copy and free skills to download.",
  });
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [pick, setPick] = useState(0);
  const [openCards, setOpenCards] = useState<Category[]>([]);
  const shown = playbooks.filter((p) => filter === "all" || p.id === filter);

  return (
    <>
      <Nav />
      <main className="bg-background font-sans text-[16px] leading-[1.6] text-foreground">
        {/* Hero */}
        <section className="bg-blush px-5 pb-14 pt-24 md:px-6 md:pb-[72px] md:pt-32">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12">
            <div className="min-w-0 flex-[999_1_520px]">
              <span className="section-eyebrow">Playbooks / Free to read</span>
              <h1 className="mt-[22px] text-[clamp(38px,5.4vw,68px)] font-semibold leading-[1.04] tracking-[-0.02em]">
                Get more out of the AI you <span className="rounded-lg bg-ardent-lime px-[0.12em]">already pay for.</span>
              </h1>
              <p className="mt-6 max-w-[640px] text-[19px] leading-[1.6] text-body-text">
                Short, plain-English guides for small business owners who use ChatGPT or Claude but mostly just the chat window. Each playbook covers one job, step by step, with prompts you can copy and a checklist to tick off as you go.
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a href="#playbooks" className="rounded-full bg-ardent-lime px-[30px] py-3.5 font-semibold text-ardent-studio transition-opacity hover:opacity-85">Read the playbooks</a>
                <a href="#downloads" className="rounded-full border border-foreground px-[30px] py-3.5 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">Get the free skills and prompts</a>
              </div>
            </div>
            <div className="relative min-w-0 flex-[1_1_340px] pl-6 pt-6">
              <div aria-hidden="true" className="coral-dot-grid absolute left-0 top-0 h-40 w-40" />
              <div className={`${card} relative flex flex-col gap-5 p-7`}>
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-bright" /><span className="h-2.5 w-2.5 rounded-full bg-ardent-lime" /><span className="h-2.5 w-2.5 rounded-full bg-coral" />
                </div>
                {[["6", "playbooks, one job each"], ["30", "minutes for the first one"], ["5", "free skills and prompt packs"]].map(([n, label], i) => (
                  <div key={label} className={`flex items-baseline gap-4 ${i < 2 ? "border-b border-border pb-[18px]" : ""}`}>
                    <span className="min-w-[72px] font-mono text-[40px] font-medium leading-none text-primary">{n}</span>
                    <span className="text-body-text">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chooser */}
        <section className="px-5 py-14 md:px-6">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-10">
            <div className="min-w-0 flex-[1_1_420px]">
              <span className={`${mono} text-[13px] tracking-[0.2em] text-brick`}>Not sure where to start?</span>
              <h2 className="mb-5 mt-3 text-[30px] font-semibold leading-[1.2]">Pick the one that sounds like you.</h2>
              <div className="flex flex-col gap-2.5">
                {picks.map((p, i) => (
                  <button key={p.quote} type="button" aria-pressed={pick === i} onClick={() => setPick(i)} className={`min-h-[52px] rounded-2xl border px-5 py-3 text-left font-medium ${toggle(pick === i)}`}>
                    {p.quote}
                  </button>
                ))}
              </div>
            </div>
            <div className={`${card} min-w-0 flex-[1_1_420px] p-8`} aria-live="polite">
              <span className={`${mono} text-[13px] tracking-[0.2em] text-label-text`}>Start with</span>
              <h3 className="mt-3 text-[24px] font-semibold leading-[1.25]">{picks[pick].title}</h3>
              <p className="mt-2.5 text-body-text">{picks[pick].body}</p>
              <Link to={picks[pick].href} className="mt-5 inline-block rounded-full bg-ardent-lime px-[26px] py-3 font-semibold text-ardent-studio transition-opacity hover:opacity-85">Open this playbook</Link>
            </div>
          </div>
        </section>

        {/* Playbooks */}
        <section id="playbooks" className="scroll-mt-20 px-5 pb-[72px] pt-4 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            <span className="section-eyebrow">The playbooks</span>
            <h2 className="mt-[18px] text-[clamp(30px,4vw,44px)] font-semibold leading-[1.1]">Six jobs worth doing this month.</h2>
            <p className="mt-3.5 max-w-[680px] text-body-text">Start with the first one. It makes every other playbook work better, because the AI finally knows who it is working for.</p>

            <Tabs value={filter} onValueChange={(v) => setFilter(v as "all" | Category)}>
              <TabsList aria-label="Filter playbooks" className="mt-7 flex h-auto flex-wrap justify-start gap-2.5 rounded-none bg-transparent p-0">
                {filters.map((f) => (
                  <TabsTrigger key={f.id} value={f.id} className="min-h-11 rounded-full border border-foreground/25 bg-white px-[18px] py-2 text-[15px] font-medium text-foreground data-[state=active]:border-foreground data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none">
                    {f.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={filter} className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((p) => {
                const Icon = p.icon;
                const isOpen = openCards.includes(p.id);
                return (
                  <article key={p.id} className={`${card} flex flex-col gap-3.5 p-7`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-blush-pill text-brick"><Icon size={24} strokeWidth={2} aria-hidden="true" /></span>
                      <span className={`${mono} text-right text-[13px] tracking-[0.12em] text-label-text`}>{p.tag}</span>
                    </div>
                    <h3 className="text-[22px] font-semibold leading-[1.25]">{p.title}</h3>
                    <p className="text-[15px] text-body-text">{p.blurb}</p>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpenCards((c) => (isOpen ? c.filter((x) => x !== p.id) : [...c, p.id]))} className="min-h-11 self-start rounded-full bg-bg-hover px-4 py-2 text-[14px] font-semibold text-foreground">
                      {isOpen ? "Hide the steps" : p.stepsLabel}
                    </button>
                    {isOpen && (
                      <ol className="list-decimal pl-5 text-[14px] leading-[1.6] text-body-text">
                        {p.steps.map((s) => <li key={s}>{s}</li>)}
                      </ol>
                    )}
                    <Link to={p.href} className={`mt-auto self-start rounded-full px-6 py-3 font-semibold transition-opacity hover:opacity-85 ${p.id === "setup" ? "bg-ardent-lime text-ardent-studio" : "border border-foreground text-foreground"}`}>
                      Open the playbook
                    </Link>
                  </article>
                );
              })}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Downloads */}
        <section id="downloads" className="scroll-mt-16 bg-blush px-5 py-[72px] md:px-6">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-12">
            <div className="min-w-0 flex-[999_1_520px]">
              <span className="section-eyebrow">Free downloads</span>
              <h2 className="mt-[18px] text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.12]">Skills and prompts that do the setup for you.</h2>
              <p className="mt-3.5 max-w-[620px] text-body-text">
                These go with the playbooks and save you the typing. A skill is a small add-on you install in Claude once, on a free or paid plan, and it knows how to do a job. A prompt pack is a set of ready-made instructions you paste into whatever AI you use.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                {downloads.map((d) => (
                  <div key={d.title} className="flex items-start gap-4 rounded-[18px] bg-white px-5 py-[18px]">
                    <span className={`${mono} flex-none rounded-full px-2.5 py-1.5 text-[12px] leading-none tracking-[0.12em] ${d.kind === "Skill" ? "bg-peach text-foreground" : "bg-blush-pill text-brick"}`}>{d.kind}</span>
                    <div>
                      <h3 className="text-[18px] font-semibold">{d.title}</h3>
                      <p className="mt-1 text-[14px] text-body-text">{d.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0 flex-[1_1_360px]">
              <PlaybookDownloadForm />
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="px-5 py-[72px] md:px-6">
          <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 rounded-[28px] bg-footer-bg p-8 text-footer-text md:p-12">
            <div className="absolute right-6 top-6 flex gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-coral" /><span className="h-2.5 w-2.5 rounded-full bg-ardent-lime" />
            </div>
            <div className="min-w-0 flex-[1_1_480px]">
              <span className={`${mono} text-[13px] tracking-[0.2em] text-footer-muted`}>Get started</span>
              <h2 className="mt-3 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] text-dark-band-text">Rather have someone do it with you?</h2>
              <p className="mt-4 max-w-[620px] leading-[1.7] text-footer-muted">
                Book a free 15-minute call. You will get a straight yes or no on whether AI fits the job you have in mind, plus a short written follow-up. No pitch.
              </p>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ardent-lime px-8 py-3.5 font-semibold text-ardent-studio transition-opacity hover:opacity-85">Book a free 15-min call</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PlaybooksIndex;
