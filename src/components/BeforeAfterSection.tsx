const BeforeAfterSection = () => (
  <section id="before-after" className="py-20 md:py-28 px-5 md:px-10 bg-surface">
    <div className="max-w-[1200px] mx-auto reveal-section">
      <span className="block font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-4">
        Before &amp; After
      </span>
      <h2 className="font-sans text-[clamp(28px,5vw,44px)] font-light text-foreground leading-[1.15] mb-6">
        See the <em className="text-primary not-italic">transformation.</em>
      </h2>
      <p className="font-sans text-[15px] text-muted-foreground max-w-[520px] leading-[1.75] mb-12">
        Real results from real clients — outdated workflows replaced with modern, automated systems.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            before: "Manual quoting via email chains — 48hr response time",
            after: "Instant AI-powered quotes — under 60 seconds",
            client: "Roofing contractor",
          },
          {
            before: "Paper intake forms and missed follow-ups",
            after: "Automated booking, reminders & review requests",
            client: "Med-spa clinic",
          },
        ].map((item) => (
          <div key={item.client} className="rounded-xl border border-border overflow-hidden bg-surface-2">
            <div className="grid grid-cols-2">
              <div className="p-6 border-r border-border">
                <span className="block font-mono text-[10px] text-destructive tracking-[0.15em] uppercase mb-3">Before</span>
                <p className="font-sans text-[14px] text-muted-foreground leading-[1.7]">{item.before}</p>
              </div>
              <div className="p-6">
                <span className="block font-mono text-[10px] text-primary tracking-[0.15em] uppercase mb-3">After</span>
                <p className="font-sans text-[14px] text-foreground leading-[1.7]">{item.after}</p>
              </div>
            </div>
            <div className="px-6 py-3 border-t border-border">
              <span className="font-mono text-[10px] text-muted-foreground tracking-[0.1em] uppercase">{item.client}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
