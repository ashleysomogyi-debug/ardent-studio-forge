import { useState, useEffect, useRef } from "react";

// ─── Brand tokens ───────────────────────────────────────────
const brand = {
  ink: "#0D0D0D",
  inkSoft: "#141414",
  cream: "#F5F5F0",
  creamMid: "rgba(245,245,240,0.72)",
  creamDim: "rgba(245,245,240,0.40)",
  teal: "#0DBFBC",
  tealLight: "#3DD4D1",
  tealFaint: "rgba(13,191,188,0.12)",
  tealRule: "rgba(13,191,188,0.28)",
  gold: "#C4924A",
  goldLight: "#D4A85E",
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
    color: "#0DBFBC",
    tagline: "Stop losing bookings to slow response times.",
    stats: [
      { number: "+50%", desc: "Revenue increase reported by clinics using AI-powered booking & patient engagement", source: "Prospyr Platform Study, 2024", url: "https://www.prospyrmed.com/blog/post/top-ai-features-for-patient-support-in-med-spas" },
      { number: "60%", desc: "Of after-hours DMs go unanswered for 12+ hours without automation — costing you bookings", source: "Spa Voices, 2025", url: "https://spavoices.com/med-spa-ai-marketing-use-cases/" },
      { number: "2 min", desc: "AI response time vs. 2+ hour human average — the gap that decides who gets the booking", source: "Podium / OpenAI Case Study, 2024", url: "https://openai.com/index/podium/" },
    ],
    story: "A Utah med spa using Podium's AI agent reported 100% of inquiries answered instantly — up from 60% going unanswered for hours. One owner kept her phone in the shower to avoid missing high-value leads. After AI, she doesn't have to.",
    storySource: "OpenAI / Podium, 2024", storyUrl: "https://openai.com/index/podium/",
  },
  {
    id: "realestate",
    label: "Real Estate",
    icon: "◈",
    color: "#0DBFBC",
    tagline: "Most agents use AI for listings. Almost none use it for leads.",
    stats: [
      { number: "$34B", desc: "Projected efficiency gains for the real estate industry from AI automation by 2030", source: "Morgan Stanley Research, 2025", url: "https://www.morganstanley.com/insights/articles/ai-in-real-estate-2025" },
      { number: "37%", desc: "Of real estate tasks can be automated — especially sales, admin & client management", source: "Morgan Stanley Analysis of 162 REIT/CRE firms, 2025", url: "https://www.morganstanley.com/insights/articles/ai-in-real-estate-2025" },
      { number: "82%", desc: "Of agents use AI for property descriptions — but 60% don't leverage it for lead conversion", source: "V7 Labs Real Estate AI Report, 2025", url: "https://www.v7labs.com/blog/ai-in-real-estate" },
    ],
    story: "Brokers and services firms show the highest automation potential of any real estate sub-sector — with a possible 34% increase in operating cash flow from AI adoption. The agents winning in Palm Beach right now are the ones who respond in minutes, not hours.",
    storySource: "Morgan Stanley Research, 2025", storyUrl: "https://www.morganstanley.com/insights/articles/ai-in-real-estate-2025",
  },
  {
    id: "hvac",
    label: "HVAC",
    icon: "◇",
    color: "#0DBFBC",
    tagline: "The job goes to whoever answers first.",
    stats: [
      { number: "4.3×", desc: "Average ROI in year one for service businesses using AI in at least one workflow", source: "Deloitte, 2025 · via Mediagistic HVAC AI Guide", url: "https://www.mediagistic.com/winning-with-ai" },
      { number: "78%", desc: "Of leads go to the first responder — and 40% of HVAC inquiries arrive after hours", source: "LeadConnect, 2024 · Podium/OpenAI Case Study", url: "https://openai.com/index/podium/" },
      { number: "+15", desc: "Extra emergency repairs booked in one month by a Texas HVAC shop using after-hours AI", source: "Podium / OpenAI Case Study, 2024", url: "https://openai.com/index/podium/" },
    ],
    story: "A Texas HVAC shop installed an AI agent to handle after-hours calls. In a single month, it captured 15 emergency repair jobs that would have gone to a competitor. The owner estimated a single lost Saturday lead costs tens of thousands in lifetime value.",
    storySource: "OpenAI / Podium, 2024", storyUrl: "https://openai.com/index/podium/",
  },
  {
    id: "professionalservices",
    label: "Professional Services",
    icon: "⊙",
    color: "#0DBFBC",
    tagline: "Your competitors have AI tools. The ones pulling ahead have a strategy.",
    stats: [
      { number: "$32B", desc: "Annual efficiency value AI unlocks for U.S. legal and tax professionals alone — at current adoption rates, projected to grow sharply", source: "Thomson Reuters Future of Professionals, 2025", url: "https://www.floridabar.org/the-florida-bar-news/thomson-reuters-survey-generative-ai-could-save-legal-professionals-12-hours-weekly-by-2029/" },
      { number: "2×", desc: "Firms with a defined AI strategy are twice as likely to report direct revenue growth — yet only 22% of firms have one", source: "Thomson Reuters Future of Professionals, 2025", url: "https://www.lawnext.com/2025/06/the-ai-strategy-divide-in-law-thomson-reuters-survey-says-strategic-ai-adoption-is-the-key-to-ai-success.html" },
      { number: "41%", desc: "Of accounting firms now use AI — up from just 9% in 2024. Early movers report up to 5× productivity gains with ~99% reconciliation accuracy", source: "Karbon State of AI in Accounting, 2025", url: "https://karbonhq.com/resources/state-of-ai-accounting-report-2025/" },
    ],
    story: "At one law firm, an AI-assisted workflow cut complaint response drafting time from 16 hours to under 4 minutes. At accounting firms deploying AI for reconciliation, accuracy hit 99% while staff shifted from manual entry to high-value review work. The tools already exist — the firms pulling ahead are the ones with a partner who knows how to implement them.",
    storySource: "Best Law Firms AI ROI Report / Karbon AI in Accounting, 2025", storyUrl: "https://www.bestlawfirms.com/articles/law-firm-ai-roi-what-finally-worked-and-why-in-2025/7229",
  },
  {
    id: "seniorcare",
    label: "Senior Care",
    icon: "◉",
    color: "#0DBFBC",
    tagline: "Less than 3% of home care agencies use AI. That's your advantage.",
    stats: [
      { number: "170+", desc: "Automated workflows running daily at Cypress Living — saving hours of staff time every day", source: "HealthTech Magazine, 2025", url: "https://healthtechmagazine.net/article/2025/05/how-can-ai-support-senior-care-workforce" },
      { number: "<3%", desc: "Current AI adoption in home care — first movers in Palm Beach County have a wide-open window", source: "AutomationEdge Home Care Report, 2025", url: "https://automationedge.com/home-health-care-automation/blogs/ai-and-automation-in-home-care/" },
      { number: "90%+", desc: "Accuracy of Cypress Living's AI fall-prediction model, built on data the facility already collected", source: "HealthTech Magazine, 2025", url: "https://healthtechmagazine.net/article/2025/05/how-can-ai-support-senior-care-workforce" },
    ],
    story: "Cypress Living runs 170+ daily automations through Microsoft Power Automate — from paper form digitization to email routing — saving hours every day. Their data scientist also built an AI model predicting resident falls with 90%+ accuracy, using data they were already collecting.",
    storySource: "HealthTech Magazine, 2025", storyUrl: "https://healthtechmagazine.net/article/2025/05/how-can-ai-support-senior-care-workforce",
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: "◆",
    color: "#0DBFBC",
    tagline: "You're losing jobs at 2am that your competitor is booking at 2am.",
    stats: [
      { number: "13%", desc: "Revenue growth achieved by My Plumber Plus after deploying Avoca AI — on a $129M revenue base", source: "Avoca AI Case Study · avoca.ai", url: "https://www.avoca.ai/" },
      { number: "90%", desc: "Booking rate achieved by Aire Serv after deploying AI — after-hours bookings jumped from 58 to 208 per month", source: "Avoca AI / Aire Serv Case Study · avoca.ai", url: "https://www.avoca.ai/" },
      { number: "−40%", desc: "Reduction in response times at a local plumbing business after implementing AI-powered scheduling and dispatch", source: "SwiftCloud AI Home Services Report, 2025", url: "https://swiftcloud.ai/ai-powered-workflow-automation-home-service-2025/" },
    ],
    story: "My Plumber Plus — a $129M plumbing business — deployed Avoca AI to handle overflow calls and after-hours bookings and grew revenue by 13%. Aire Serv, a national franchise, saw after-hours bookings jump from 58 to 208 per month after replacing their live answering service with AI, achieving a 90% booking rate.",
    storySource: "Avoca AI Case Studies · avoca.ai", storyUrl: "https://www.avoca.ai/",
  },
  {
    id: "boutiques",
    label: "Boutiques",
    icon: "◑",
    color: "#0DBFBC",
    tagline: "Your best customers are shopping online at midnight. Is anyone there?",
    stats: [
      { number: "87%", desc: "Of retailers report AI had a positive impact on revenue — and 94% say it reduced operating costs", source: "Shopify / Bain Retail AI Report, 2025", url: "https://www.shopify.com/enterprise/blog/ai-in-retail" },
      { number: "+27%", desc: "Average order value increase from AI-curated product recommendations and personalized bundles", source: "Jellyfish Technologies / Target GenAI Study, 2025", url: "https://www.jellyfishtechnologies.com/generative-ai-in-retail-use-cases-with-real-life-examples/" },
      { number: "73%", desc: "Of online shopping carts are abandoned — poor fit info and lack of personalization are the top causes", source: "Baymard Institute · Bold Metrics Retail Report, 2025", url: "https://blog.boldmetrics.com/strategic-ai-investments-in-retail-2025-balancing-innovation-and-roi" },
    ],
    story: "A boutique owner told industry researchers: \"My AI assistant takes customer inquiries 24/7, writes my email newsletters, and helps plan inventory orders. It's like having three employees for the price of a streaming subscription.\" A sportswear retailer using AI personalization saw a 297% conversion increase and 28% fewer returns in the same period.",
    storySource: "Jellyfish Technologies Retail GenAI Report, 2025", storyUrl: "https://www.jellyfishtechnologies.com/generative-ai-in-retail-use-cases-with-real-life-examples/",
  },
  {
    id: "insurance",
    label: "Insurance",
    icon: "▣",
    color: "#0DBFBC",
    tagline: "Renewals are still the #1 most inefficient task for insurance agencies.",
    stats: [
      { number: "75%", desc: "Reduction in claims resolution time — from 30 days to 7.5 days — achieved through AI automation", source: "Datagrid AI Insurance Statistics Report, 2025", url: "https://datagrid.com/blog/ai-agent-for-insurance-statistics" },
      { number: "+6%", desc: "Revenue gains reported by 90% of financial services firms implementing generative AI, per Google's study", source: "Google ROI of Gen AI in Financial Services · Vonage Insurance Report, 2025", url: "https://www.vonage.com/resources/articles/ai-in-insurance/" },
      { number: "+30%", desc: "Productivity gains reported by insurers that equipped service and operations teams with AI tools", source: "BCG Insurance AI Productivity Study · Creatio, 2025", url: "https://www.creatio.com/glossary/ai-in-insurance" },
    ],
    story: "UK insurer Aviva deployed AI across its claims domain — cutting liability assessment time for complex cases by 23 days, improving claims routing accuracy by 30%, and reducing customer complaints by 65%. The transformation saved the company more than £60 million in 2024. For independent agencies, the same automation principles apply at a fraction of the cost.",
    storySource: "McKinsey · The Future of AI in Insurance, 2025", storyUrl: "https://www.mckinsey.com/industries/financial-services/our-insights/the-future-of-ai-in-the-insurance-industry",
  },
];
// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({ stat, index, visible }) {
  return (
    <div
      style={{
        background: brand.tealFaint,
        border: `1px solid ${brand.tealRule}`,
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
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "42px",
          fontWeight: 600,
          color: brand.teal,
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
          borderTop: `1px solid ${brand.tealRule}`,
          display: "flex",
          alignItems: "center",
          gap: "5px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = brand.tealLight)}
        onMouseLeave={(e) => (e.currentTarget.style.color = brand.creamDim)}
      >
        <span style={{ color: brand.teal, fontSize: "8px" }}>↗</span>
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
          fontFamily: "'Inter', system-ui, sans-serif",
          fontStyle: "italic",
          fontSize: "20px",
          color: brand.tealLight,
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
          border: `1px solid ${brand.tealRule}`,
          borderLeft: `3px solid ${brand.teal}`,
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
            color: brand.teal,
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
          onMouseEnter={(e) => (e.currentTarget.style.color = brand.tealLight)}
          onMouseLeave={(e) => (e.currentTarget.style.color = brand.creamDim)}
        >
          <span style={{ color: brand.teal }}>↗</span> {industry.storySource}
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');
        .ardent-tab-btn { cursor: pointer; }
        .ardent-tab-btn:hover .ardent-tab-inner { color: #3DD4D1 !important; border-bottom-color: rgba(13,191,188,0.5) !important; }
        .ardent-hero-link:hover { color: #3DD4D1 !important; }
        .ardent-cta-btn:hover { background: #3DD4D1 !important; }
        .ardent-tab-scroll::-webkit-scrollbar { display: none; }
        .ardent-tab-scroll { -ms-overflow-style: none; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          background: brand.ink,
          color: brand.cream,
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 300,
          paddingTop: "112px",
          paddingBottom: "112px",
          position: "relative",
          overflow: "hidden",
          borderTop: `2px solid ${brand.teal}`,
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 40% at 80% 20%, rgba(13,191,188,0.06) 0%, transparent 65%),
                          radial-gradient(ellipse 40% 50% at 15% 80%, rgba(13,191,188,0.04) 0%, transparent 60%)`,
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
                color: brand.teal,
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
                  background: brand.tealRule,
                }}
              />
            </div>
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.12,
                color: brand.cream,
                margin: 0,
                maxWidth: "640px",
              }}
            >
              What AI automation actually does{" "}
              <em style={{ color: brand.teal, fontStyle: "normal" }}>for businesses like yours.</em>
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

          {/* ── Hero anchor ── */}
          <div
            style={{
              background: `linear-gradient(135deg, rgba(13,191,188,0.10) 0%, rgba(13,191,188,0.04) 100%)`,
              border: `1px solid ${brand.tealRule}`,
              borderTop: `2px solid ${brand.teal}`,
              borderRadius: "4px",
              padding: "24px 20px",
              marginBottom: "52px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            }}
            className="md:!grid md:!grid-cols-[1fr_auto] md:!items-center md:!p-[28px_32px]"
          >
            <div>
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: brand.teal,
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                {heroStory.label}
              </div>
              <h3
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
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
                  borderLeft: `2px solid ${brand.teal}`,
                  paddingLeft: "14px",
                  margin: "0 0 14px",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: brand.tealLight,
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
                  border: `1px solid ${brand.tealRule}`,
                  borderRadius: "2px",
                  padding: "10px 18px",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: brand.teal,
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {heroStory.buttonText}
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
              className="ardent-tab-scroll"
              style={{
                display: "flex",
                gap: "0",
                borderBottom: `1px solid ${brand.tealRule}`,
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
                          ? `2px solid ${brand.teal}`
                          : "2px solid transparent",
                        color: isActive ? brand.cream : brand.creamDim,
                        fontSize: "13px",
                        fontWeight: isActive ? 500 : 300,
                        letterSpacing: "0.04em",
                        transition: "color 0.2s, border-bottom-color 0.2s",
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      <span
                        style={{
                          color: isActive ? brand.teal : brand.creamDim,
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
              borderTop: `1px solid ${brand.tealRule}`,
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
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: brand.cream,
                  marginBottom: "6px",
                }}
              >
                Ready to see what this looks like for{" "}
                <em style={{ color: brand.teal, fontStyle: "normal" }}>your</em> business?
              </div>
              <div style={{ fontSize: "13px", color: brand.creamDim }}>
                Free discovery call · No obligation · Palm Beach County, FL
              </div>
            </div>
            <a
              href="/contact"
              className="ardent-cta-btn"
              style={{
                background: brand.teal,
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
