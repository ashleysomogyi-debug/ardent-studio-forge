/**
 * TestimonialsSection
 * --------------------
 * ⚠️ 100% placeholder. There are no real client quotes wired in yet —
 * every card below is a slot, not a testimonial. Do not publish this
 * section until at least 2–3 slots are replaced with real, attributed
 * quotes from actual clients (get their OK to use name + title/company,
 * or use "Anonymous, [industry]" if they prefer not to be named).
 * Fabricated testimonials are a legal risk (FTC endorsement guidelines)
 * and, if discovered, a fast way to lose the trust this section exists
 * to build.
 *
 * To fill a slot: replace `quote`, `name`, and `title` with the real
 * values, and set `filled: true`. Cards still marked `filled: false`
 * render with a visible "placeholder" treatment so they can never be
 * mistaken for real — remove any slot you don't have content for rather
 * than ship it empty.
 */

const testimonials = [
  {
    filled: false,
    quote: "[[ADD REAL QUOTE — what changed for them, in their words]]",
    name: "[[Client name]]",
    title: "[[Title, Company]]",
  },
  {
    filled: false,
    quote: "[[ADD REAL QUOTE]]",
    name: "[[Client name]]",
    title: "[[Title, Company]]",
  },
  {
    filled: false,
    quote: "[[ADD REAL QUOTE]]",
    name: "[[Client name]]",
    title: "[[Title, Company]]",
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div
    className={`p-7 border flex flex-col h-full ${t.filled ? "border-ardent-paper/10" : "border-dashed border-ardent-coral/40"}`}
    style={{ background: "#1A1614" }}
  >
    {!t.filled && (
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ardent-coral block mb-4">
        Placeholder — not live content
      </span>
    )}
    <p
      className={`text-[17px] leading-[1.55] mb-6 flex-1 ${t.filled ? "text-ardent-paper" : "text-ardent-paper/50 italic"}`}
      style={{ fontFamily: "'Georgia', 'Cormorant Garamond', serif" }}
    >
      "{t.quote}"
    </p>
    <div className="pt-4 border-t border-ardent-paper/10">
      <p className="text-[14px] text-ardent-paper">{t.name}</p>
      <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-ardent-paper/50 mt-1">{t.title}</p>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="px-5 md:px-10 py-[88px] md:py-[140px]" style={{ background: "#0D0D0D" }}>
    <div className="max-w-[1200px] mx-auto">
      <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
        What clients say
      </span>
      <h2
        className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-normal mb-14 max-w-[22ch] text-ardent-paper"
        style={{ fontFamily: "'Georgia', 'Cormorant Garamond', serif" }}
      >
        In their words.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
