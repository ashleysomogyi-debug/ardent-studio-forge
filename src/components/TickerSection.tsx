const stats = [
  { num: "24/7", label: "Async Support" },
  { num: "1–3 wks", label: "Avg. Build Time" },
  { num: "100%", label: "Code Ownership" },
];

const TickerSection = () => (
  <section className="py-4 md:py-5 px-4 md:px-10 overflow-hidden" style={{ background: "#0DBFBC" }}>
    <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-16">
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center gap-4 md:gap-16">
          {i > 0 && <span className="hidden md:block w-px h-6 bg-black/20" />}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="font-sans italic text-[20px] md:text-[26px] text-[#0A0A08] leading-none font-light">{s.num}</span>
            <span className="font-mono text-[10px] md:text-[11px] text-[#0A0A08]/70 tracking-[0.1em] uppercase">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TickerSection;
