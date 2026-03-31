import { useState, useEffect, useRef } from "react";

// ─── Brand tokens (match your Ardent Studio site palette) ───────────────────
const brand = {
  ink: "#0E0E0E",
  inkSoft: "#171714",
  cream: "#F5F0E8",
  creamMid: "rgba(245,240,232,0.72)",
  creamDim: "rgba(245,240,232,0.40)",
  gold: "#C4993A",
  goldLight: "#E8C96A",
  goldFaint: "rgba(196,153,58,0.12)",
  goldRule: "rgba(196,153,58,0.28)",
  rust: "#8B3A2A",
};

// ─── Data ───────────────────────────────────────────────────────────────────

const heroStory = {
  label: "Featured Study · McKinsey & Company · 2025",
  headline: "78% of companies use AI. Only 6% are seeing transformative results.",
  body:
    "McKinsey's 2025 global study of nearly 2,000 executives found that AI adoption is now near-universal — but meaningful impact belongs to a small group. High performers who built AI into their business with a clear, structured strategy are 3.6× more likely to report significant bottom-line results. The gap between companies using AI and companies truly benefiting from it has never been wider.",
  quote: "High performers are 3.6× more likely to report meaningful impact from AI — the differentiator is strategic implementation.",
  result: "1,993 executives surveyed · 105 countries · Only 6% qualify as high performers",
  source: "McKinsey & Company, State of AI in 2025",
  sourceUrl:
    "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  buttonText: "Read the Study ↗",
};

const industries = [
  {
    id: "medspa",
    label: "Med Spas",
    icon: "✦",
    color: "#C4993A",
    tagline: "Stop losing bookings to slow response times.",
    stats: [
      {
        number: "+50%",
        desc: "Revenue increase reported by clinics using AI-powered booking & patient engagement",
        source: "Prospyr Platform Study, 2024",
        url: "https://www.prospyrmed.com/blog/post/top-ai-features-for-patient-support-in-med-spas",
      },
      {
        number: "60%",
        desc: "Of after-hours DMs go unanswered for 12+ hours without automation — costing you bookings",
        source: "Spa Voices, 2025",
        url: "https://spavoices.com/med-spa-ai-marketing-use-cases/",
      },
      {
        number: "2 min",
        desc: "AI response time vs. 2+ hour human average — the gap that decides who gets the booking",
        source: "Podium / OpenAI Case Study, 2024",
        url: "https://openai.com/index/podium/",
      },
    ],
    story:
      "A Utah med spa using Podium's AI agent reported 100% of inquiries answered instantly — up from 60% going unanswered for hours. One owner kept her phone in the shower to avoid missing high-value leads. After AI, she doesn't have to.",
    storySource: "OpenAI / Podium, 2024",
    storyUrl: "https://openai.com/index/podium/",
  },
  {
    id: "realestate",
    label: "Real Estate",
    icon: "◈",
    color: "#C4993A",
    tagline: "Most agents use AI for listings. Almost none use it for leads.",
    stats: [
      {
        number: "$34B",
        desc: "Projected efficiency gains for the real estate industry from AI automation by 2030",
        source: "Morgan Stanley Research, 2025",
        url: "https://www.morganstanley.com/insights/articles/ai-in-real-estate-2025",
      },
      {
        number: "37%",
        desc: "Of real estate tasks can be automated — especially sales, admin & client management",
        source: "Morgan Stanley Analysis of 162 REIT/CRE firms, 2025",
        url: "https://www.morganstanley.com/insights/articles/ai-in-real-estate-2025",
      },
      {
        number: "82%",
        desc: "Of agents use AI for property descriptions — but 60% don't leverage it for lead conversion",
        source: "V7 Labs Real Estate AI Report, 2025",
        url: "https://www.v7labs.com/blog/ai-in-real-estate",
      },
    ],
    story:
      "Brokers and services firms show the highest automation potential of any real estate sub-sector — with a possible 34% increase in operating cash flow from AI adoption. The agents winning in Palm Beach right now are the ones who respond in minutes, not hours.",
    storySource: "Morgan Stanley Research, 2025",
    storyUrl: "https://www.morganstanley.com/insights/articles/ai-in-real-estate-2025",
  },
  {
    id: "hvac",
    label: "HVAC",
    icon: "◇",
    color: "#C4993A",
    tagline: "The job goes to whoever answers first.",
    stats: [
      {
        number: "4.3×",
        desc: "Average ROI in year one for service businesses using AI in at least one workflow",
        source: "Deloitte, 2025 · via Mediagistic HVAC AI Guide",
        url: "https://www.mediagistic.com/winning-with-ai",
      },
      {
        number: "78%",
        desc: "Of leads go to the first responder — and 40% of HVAC inquiries arrive after hours",
        source: "LeadConnect, 2024 · Podium/OpenAI Case Study",
        url: "https://openai.com/index/podium/",
      },
      {
        number: "+15",
        desc: "Extra emergency repairs booked in one month by a Texas HVAC shop using after-hours AI",
        source: "Podium / OpenAI Case Study, 2024",
        url: "https://openai.com/index/podium/",
      },
    ],
    story:
      "A Texas HVAC shop installed an AI agent to handle after-hours calls. In a single month, it captured 15 emergency repair jobs that would have gone to a competitor. The owner estimated a single lost Saturday lead costs tens of thousands in lifetime value.",
    storySource: "OpenAI / Podium, 2024",
    storyUrl: "https://openai.com/index/podium/",
  },
  {
    id: "profservices",
    label: "Professional Services",
    icon: "◆",
    color: "#C4993A",
    tagline: "Your competitors have AI tools. The ones pulling ahead have a strategy.",
    stats: [
      {
        number: "$32B",
        desc: "Annual efficiency value AI unlocks for U.S. legal and tax professionals alone — at current adoption rates, projected to grow sharply",
        source: "Thomson Reuters Future of Professionals, 2025",
        url: "https://www.floridabar.org/the-florida-bar-news/thomson-reuters-survey-generative-ai-could-save-legal-professionals-12-hours-weekly-by-2029/",
      },
      {
        number: "2×",
        desc: "Firms with a defined AI strategy are twice as likely to report direct revenue growth — yet only 22% of firms have one",
        source: "Thomson Reuters Future of Professionals, 2025",
        url: "https://www.lawnext.com/2025/06/the-ai-strategy-divide-in-law-thomson-reuters-survey-says-strategic-ai-adoption-is-the-key-to-ai-success.html",
      },
      {
        number: "41%",
        desc: "Of accounting firms now use AI — up from just 9% in 2024. Early movers report up to 5× productivity gains with ~99% reconciliation accuracy",
        source: "Karbon State of AI in Accounting, 2025",
        url: "https://karbonhq.com/resources/state-of-ai-accounting-report-2025/",
      },
    ],
    story:
      "At one law firm, an AI-assisted workflow cut complaint response drafting time from 16 hours to under 4 minutes. At accounting firms deploying AI for reconciliation, accuracy hit 99% while staff shifted from manual entry to high-value review work. The tools already exist — the firms pulling ahead are the ones with a partner who knows how to implement them.",
    storySource: "Best Law Firms AI ROI Report / Karbon AI in Accounting, 2025",
    storyUrl: "https://www.bestlawfirms.com/articles/law-firm-ai-roi-what-finally-worked-and-why-in-2025/7229",
  },
  {
    id: "seniorcare",
    label: "Senior Care",
    icon: "◉",
    color: "#C4993A",
    tagline: "Less than 3% of home care agencies use AI. That's your advantage.",
    stats: [
      {
        number: "170+",
        desc: "Automated workflows running daily at Cypress Living — saving hours of staff time every day",
        source: "HealthTech Magazine, 2025",
        url: "https://healthtechmagazine.net/article/2025/05/how-can-ai-support-senior-care-workforce",
      },
      {
        number: "<3%",
        desc: "Current AI adoption in home care — first movers in Palm Beach County have a wide-open window",
        source: "AutomationEdge Home Care Report, 2025",
        url: "https://automationedge.com/home-health-care-automation/blogs/ai-and-automation-in-home-care/",
      },
      {
        number: "90%+",
        desc: "Accuracy of Cypress Living's AI fall-prediction model, built on data the facility already collected",
        source: "HealthTech Magazine, 2025",
        url: "https://healthtechmagazine.net/article/2025/05/how-can-ai-support-senior-care-workforce",
      },
    ],
    story:
      "Cypress Living runs 170+ daily automations through Microsoft Power Automate — from paper form digitization to email routing — saving hours every day. Their data scientist also built an AI model predicting resident falls with 90%+ accuracy, using data they were already collecting.",
    storySource: "HealthTech Magazine, 2025",
    storyUrl:
      "https://healthtechmagazine.net/article/2025/05/how-can-ai-support-senior-care-workforce",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({ stat, index, visible }) {
  return (
    <div
      style={{
        background: brand.goldFaint,
        border: `1px solid ${brand.goldRule}`,
        borderRadius: "3px",
        padding: "24px 22px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.45s ease ${index * 0.1}s, transform 0.45s ease ${index * 0.1}s`,
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          fontSize: "42px",
          fontWeight: 600,
          color: brand.gold,
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        {stat.number}
      </div>
      <div
        style={{
          fontSize: "13px",
          lineHeight: 1.6,
          color: brand.creamMid,
        }}
      >
        {stat.desc}
      </div>
      <a
        href={stat.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "10px",
          color: brand.creamDim,
          letterSpacing: "0.06em",
          textDecoration: "none",
          marginTop: "auto",
          paddingTop: "10px",
          borderTop: `1px solid ${brand.goldRule}`,
          display: "flex",
          alignItems: "center",
          gap: "5px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = brand.goldLight)}
        onMouseLeave={(e) => (e.currentTarget.style.color = brand.creamDim)}
      >
        <span style={{ color: brand.gold, fontSize: "8px" }}>↗</span>
        {stat.source}
      </a>
    </div>
  );
}

function IndustryPanel({ industry, visible }) {
  return (
    <div>
      {/* Tagline */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          fontStyle: "italic",
          fontSize: "20px",
          color: brand.goldLight,
          marginBottom: "28px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {industry.tagline}
      </div>

      {/* Stat cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        {industry.stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} visible={visible} />
        ))}
      </div>

      {/* Story card */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${brand.goldRule}`,
          borderLeft: `3px solid ${brand.gold}`,
          borderRadius: "3px",
          padding: "20px 24px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s",
        }}
      >
        <div
          style={{
            fontSize: "8.5px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: brand.gold,
            marginBottom: "10px",
            fontWeight: 500,
          }}
        >
          Real-World Result
        </div>
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: 1.7,
            color: brand.creamMid,
            margin: 0,
          }}
        >
          {industry.story}
        </p>
        <a
          href={industry.storyUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            marginTop: "12px",
            fontSize: "10px",
            color: brand.creamDim,
            letterSpacing: "0.06em",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = brand.goldLight)}
          onMouseLeave={(e) => (e.currentTarget.style.color = brand.creamDim)}
        >
          <span style={{ color: brand.gold }}>↗</span> {industry.storySource}
        </a>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("medspa");
  const [panelVisible, setPanelVisible] = useState(true);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer for section entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fade panel on tab switch
  const handleTabChange = (id) => {
    if (id === activeTab) return;
    setPanelVisible(false);
    setTimeout(() => {
      setActiveTab(id);
      setPanelVisible(true);
    }, 220);
  };

  const active = industries.find((i) => i.id === activeTab);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .ardent-tab-btn { cursor: pointer; }
        .ardent-tab-btn:hover .ardent-tab-inner { color: #E8C96A !important; border-bottom-color: rgba(196,153,58,0.5) !important; }
        .ardent-hero-link:hover { color: #E8C96A !important; }
        .ardent-cta-btn:hover { background: #E8C96A !important; }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          background: brand.ink,
          color: brand.cream,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          paddingTop: "112px",
          paddingBottom: "112px",
          position: "relative",
          overflow: "hidden",
          borderTop: `2px solid ${brand.gold}`,
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 40% at 80% 20%, rgba(196,153,58,0.06) 0%, transparent 65%),
                          radial-gradient(ellipse 40% 50% at 15% 80%, rgba(139,58,42,0.07) 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Section header ── */}
          <div
            style={{
              marginBottom: "56px",
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: brand.gold,
                fontWeight: 500,
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>Proof of Impact</span>
              <span
                style={{
                  flex: 1,
                  maxWidth: "80px",
                  height: "1px",
                  background: brand.goldRule,
                }}
              />
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.12,
                color: brand.cream,
                margin: 0,
                maxWidth: "640px",
              }}
            >
              What AI automation actually does{" "}
              <em style={{ color: brand.gold }}>for businesses like yours.</em>
            </h2>
            <p
              style={{
                marginTop: "18px",
                fontSize: "15px",
                lineHeight: 1.7,
                color: brand.creamMid,
                maxWidth: "560px",
              }}
            >
              Every stat below is sourced and verifiable. We don't sell hype —
              we show you what's already working for businesses in your industry,
              then build it for you.
            </p>
          </div>

          {/* ── Hero anchor: Fortune / Echo Janitorial ── */}
          <div
            style={{
              background: `linear-gradient(135deg, rgba(196,153,58,0.10) 0%, rgba(196,153,58,0.04) 100%)`,
              border: `1px solid ${brand.goldRule}`,
              borderTop: `2px solid ${brand.gold}`,
              borderRadius: "4px",
              padding: "28px 32px",
              marginBottom: "52px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              alignItems: "center",
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: brand.gold,
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                Featured · Fortune Magazine · March 2026
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: brand.cream,
                  margin: "0 0 8px",
                  lineHeight: 1.25,
                }}
              >
                {heroStory.headline}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: brand.creamMid,
                  margin: "0 0 14px",
                  maxWidth: "620px",
                }}
              >
                {heroStory.body}
              </p>
              <blockquote
                style={{
                  borderLeft: `2px solid ${brand.gold}`,
                  paddingLeft: "14px",
                  margin: "0 0 14px",
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: brand.goldLight,
                }}
              >
                "{heroStory.quote}"
              </blockquote>
              <div
                style={{
                  fontSize: "11px",
                  color: brand.creamDim,
                  letterSpacing: "0.05em",
                }}
              >
                {heroStory.result}
              </div>
            </div>
            <div style={{ flexShrink: 0, textAlign: "right" }}>
              <a
                href={heroStory.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ardent-hero-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: `1px solid ${brand.goldRule}`,
                  borderRadius: "2px",
                  padding: "10px 18px",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: brand.gold,
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                Read the Story ↗
              </a>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "9px",
                  color: brand.creamDim,
                  letterSpacing: "0.08em",
                }}
              >
                {heroStory.source}
              </div>
            </div>
          </div>

          {/* ── Industry tabs ── */}
          <div
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
            }}
          >
            {/* Tab bar */}
            <div
              style={{
                display: "flex",
                gap: "0",
                borderBottom: `1px solid ${brand.goldRule}`,
                marginBottom: "36px",
                overflowX: "auto",
              }}
            >
              {industries.map((ind) => {
                const isActive = ind.id === activeTab;
                return (
                  <button
                    key={ind.id}
                    className="ardent-tab-btn"
                    onClick={() => handleTabChange(ind.id)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: "0 4px 0",
                      marginRight: "28px",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="ardent-tab-inner"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 0",
                        borderBottom: isActive
                          ? `2px solid ${brand.gold}`
                          : "2px solid transparent",
                        color: isActive ? brand.cream : brand.creamDim,
                        fontSize: "13px",
                        fontWeight: isActive ? 500 : 300,
                        letterSpacing: "0.04em",
                        transition: "color 0.2s, border-bottom-color 0.2s",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <span
                        style={{
                          color: isActive ? brand.gold : brand.creamDim,
                          fontSize: "10px",
                          transition: "color 0.2s",
                        }}
                      >
                        {ind.icon}
                      </span>
                      {ind.label}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active panel */}
            <div
              style={{
                opacity: panelVisible ? 1 : 0,
                transform: panelVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              {active && (
                <IndustryPanel industry={active} visible={panelVisible} />
              )}
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div
            style={{
              marginTop: "64px",
              paddingTop: "40px",
              borderTop: `1px solid ${brand.goldRule}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              opacity: sectionVisible ? 1 : 0,
              transition: "opacity 0.6s ease 0.4s",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: brand.cream,
                  marginBottom: "6px",
                }}
              >
                Ready to see what this looks like for{" "}
                <em style={{ color: brand.gold }}>your</em> business?
              </div>
              <div style={{ fontSize: "13px", color: brand.creamDim }}>
                Free discovery call · No obligation · Palm Beach County, FL
              </div>
            </div>
            <a
              href="#contact"
              className="ardent-cta-btn"
              style={{
                background: brand.gold,
                color: brand.ink,
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "14px 28px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s",
                flexShrink: 0,
              }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
