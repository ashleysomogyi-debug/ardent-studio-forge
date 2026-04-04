const testimonials = [
  {
    quote: "Ardent built our entire client portal in 10 days. Our response time dropped from 2 days to under a minute.",
    name: "Jason M.",
    role: "Owner, Apex Roofing",
  },
  {
    quote: "We went from juggling spreadsheets to a fully automated pipeline. Game changer for our small team.",
    name: "Priya S.",
    role: "Founder, Bloom Med Spa",
  },
  {
    quote: "They didn't just build an app — they understood our workflow and made it faster.",
    name: "Carlos D.",
    role: "Operations Lead, QuickHaul Logistics",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 px-5 md:px-10 bg-surface">
    <div className="max-w-[1200px] mx-auto reveal-section">
      <span className="block font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-4 text-center">
        Testimonials
      </span>
      <h2 className="font-sans text-[clamp(28px,5vw,44px)] font-light text-foreground leading-[1.15] mb-12 text-center">
        What our clients <em className="text-primary not-italic">say.</em>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-xl border border-border bg-surface-2 p-6 md:p-8 flex flex-col"
          >
            <p className="font-sans text-[15px] text-foreground/90 leading-[1.75] mb-6 flex-1">
              "{t.quote}"
            </p>
            <div>
              <span className="block font-sans text-[14px] text-foreground font-medium">{t.name}</span>
              <span className="block font-mono text-[11px] text-muted-foreground tracking-[0.05em]">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
