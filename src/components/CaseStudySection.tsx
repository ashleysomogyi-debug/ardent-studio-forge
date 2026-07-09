/**
 * CaseStudySection
 * -----------------
 * Social-proof block for the homepage. Built from projects that are already
 * named elsewhere on the site (Recent Builds / Featured Apps), so nothing
 * here is invented.
 *
 * ⚠️ BEFORE PUBLISHING: every field marked [[ADD: ...]] below is a
 * placeholder. Replace it with a real, specific number or quote before this
 * ships. Fake or rounded-up "client results" are a fast way to lose trust
 * (and can run into FTC testimonial/endorsement rules) — leave a field
 * blank/removed rather than guess.
 *
 * Fields to fill in per case study:
 *  - metric: one concrete, verifiable number (hours saved/week, response
 *    time, reply rate, leads booked, etc.) — pull from the actual system
 *    logs or ask the client directly.
 *  - timeframe: over what period the metric was measured.
 *  - quote (optional): a real line from the client, attributed by name +
 *    title/company, or "Anonymous, [industry]" if they'd rather not be named.
 */

const caseStudies = [
  {
    id: "sartori",
    tag: "Featured",
    name: "Sartori AI",
    problem:
      "New sales reps take months to ramp, and close rates lag while they learn the pitch on live prospects.",
    build:
      "Custom-built AI role-play avatars and bite-sized lessons reps practice against before they're ever on a real call.",
    metric: "[[ADD: e.g. ramp time cut from X weeks to Y weeks, or close-rate lift, with the measurement period]]",
    quote: null as string | null,
    quoteAttribution: "[[ADD: name, title — or leave blank if none yet]]",
    stack: "Next.js · Claude · Supabase · custom infra",
    link: { label: "Visit sartoriai.com", href: "https://sartoriai.com" },
  },
  {
    id: "cold-outreach",
    tag: "Automation",
    name: "Cold outreach engine",
    problem: "Finding the right contacts and writing a first line that doesn't sound like a template ate hours every week.",
    build: "A drafting and sending system that finds the right contacts and writes openers in the client's own voice.",
    metric: "[[ADD: e.g. hours saved/week, reply rate, meetings booked/month]]",
    quote: null as string | null,
    quoteAttribution: "[[ADD: name, title/company]]",
    stack: "Python · Make · Claude · Gmail",
    link: null,
  },
  {
    id: "inbound-reply",
    tag: "Automation",
    name: "Inbound reply drafter",
    problem: "Inbound emails sat for hours before anyone could reply, and every reply was written from scratch.",
    build: "Reads new emails as they hit the inbox and drafts a thoughtful reply for the owner to approve.",
    metric: "[[ADD: e.g. average response time before/after, hours saved/week]]",
    quote: null as string | null,
    quoteAttribution: "[[ADD: name, title/company]]",
    stack: "Gmail · Claude · Make · Slack",
    link: null,
  },
  {
    id: "linkedin-drafter",
    tag: "Automation",
    name: "LinkedIn content drafter",
    problem: "Posting consistently on LinkedIn kept losing to whatever was actually on fire that week.",
    build: "Pulls from the week's work and drafts five post options every Monday in the client's tone.",
    metric: "[[ADD: e.g. posting cadence before/after, time saved/week]]",
    quote: null as string | null,
    quoteAttribution: "[[ADD: name, title/company]]",
    stack: "Claude · Make · Google Docs · scheduled jobs",
    link: null,
  },
];

const CaseCard = ({ c }: { c: (typeof caseStudies)[number] }) => (
  <div
    className={`p-7 border flex flex-col ${c.tag === "Featured" ? "border-ardent-lime/60" : "border-ardent-paper/10"}`}
    style={{ background: "#1A1614" }}
  >
    <div className="flex items-center justify-between mb-4">
      <span
        className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
          c.tag === "Featured" ? "text-ardent-lime" : "text-ardent-cyan"
        }`}
      >
        {c.tag}
      </span>
    </div>

    <h3 className="text-[22px] mb-4 text-ardent-paper" style={{ fontFamily: "'Georgia', 'Cormorant Garamond', serif" }}>
      {c.name}
    </h3>

    <div className="space-y-3 mb-5">
      <div>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-paper/50 block mb-1">Problem</span>
        <p className="text-[14px] leading-[1.6] text-ardent-paper/80">{c.problem}</p>
      </div>
      <div>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-paper/50 block mb-1">What we built</span>
        <p className="text-[14px] leading-[1.6] text-ardent-paper/80">{c.build}</p>
      </div>
    </div>

    {/* Result — placeholder until real numbers are supplied */}
    <div className="border border-dashed border-ardent-coral/50 p-4 mb-5">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-coral block mb-1">Result — needs real data</span>
      <p className="text-[13px] leading-[1.6] text-ardent-paper/60 italic">{c.metric}</p>
    </div>

    {c.quote ? (
      <p className="text-[14px] italic leading-[1.6] text-ardent-paper/70 mb-4">
        "{c.quote}" <span className="not-italic text-ardent-paper/50">— {c.quoteAttribution}</span>
      </p>
    ) : (
      <p className="text-[12px] text-ardent-paper/40 italic mb-4">
        No client quote yet — {c.quoteAttribution}
      </p>
    )}

    <div className="mt-auto flex items-center justify-between pt-4 border-t border-ardent-paper/10">
      <p className="italic text-[12px]" style={{ fontFamily: "'Georgia', 'Cormorant Garamond', serif", color: "#C8A24D" }}>
        {c.stack}
      </p>
      {c.link && (
        <a
          href={c.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-[0.15em] uppercase text-ardent-lime hover:opacity-70"
        >
          {c.link.label} ↗
        </a>
      )}
    </div>
  </div>
);

const CaseStudySection = () => (
  <section id="case-studies" className="px-5 md:px-10 py-[88px] md:py-[140px]" style={{ background: "#171311" }}>
    <div className="max-w-[1200px] mx-auto">
      <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
        Case studies
      </span>
      <h2
        className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-4 max-w-[22ch] text-ardent-paper"
        style={{ fontFamily: "'Georgia', 'Cormorant Garamond', serif" }}
      >
        Real problems. Real builds.
      </h2>
      <p className="text-[15px] text-ardent-paper/60 max-w-[60ch] mb-14">
        The same projects listed above, in more detail — what the problem was, what we built, and
        what it changed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((c) => (
          <CaseCard key={c.id} c={c} />
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudySection;
