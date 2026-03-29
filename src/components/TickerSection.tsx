const stats = [
  { num: "50+", label: "Apps Shipped" },
  { num: "1–3 wks", label: "Avg. Build Time" },
  { num: "100%", label: "Code Ownership" },
];

const TickerSection = () => (
  <section className="py-5 px-5 md:px-10" style={{ background: "#C4993A" }}>
    <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-8 md:gap-16">
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center gap-8 md:gap-16">
          {i > 0 && <span className="w-px h-6 bg-black/20" />}
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-[22px] md:text-[26px] text-[#0A0A08] leading-none font-light">{s.num}</span>
            <span className="font-mono text-[11px] text-[#0A0A08]/70 tracking-[0.1em] uppercase">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TickerSection;
