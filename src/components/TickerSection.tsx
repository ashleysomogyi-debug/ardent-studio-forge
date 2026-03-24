const items = [
  "MVP Builds", "Internal Tools", "SaaS Products", "Client Portals",
  "AI Integrations", "Dashboards", "Proposal Tools", "Rescue & Finish", "Workflow Automation",
];

const TickerSection = () => {
  const track = [...items, ...items];

  return (
    <section className="bg-bg-elevated border-y border-border py-4 overflow-hidden">
      <div className="ticker-track flex whitespace-nowrap">
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-mono text-[10px] text-label-text px-4">{item}</span>
            <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default TickerSection;
