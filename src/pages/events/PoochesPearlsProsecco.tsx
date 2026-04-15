import { useEffect } from "react";

const PoochesPearlsProsecco = () => {
  useEffect(() => {
    // Load Google Fonts for this page
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <style>{`
        .ppp-page *, .ppp-page *::before, .ppp-page *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ppp-page {
          --bg: #0E0E11;
          --bg-card: #161619;
          --teal: #2EC4B6;
          --teal-dim: #1F8A80;
          --gold: #D4A843;
          --gold-light: #E8C876;
          --white: #FFFFFF;
          --white-90: #E8E8E8;
          --white-60: #999999;
          --white-40: #666666;
          --white-20: #333333;

          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg);
          color: var(--white-90);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .ppp-page .top-bar {
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--teal), var(--gold));
        }

        .ppp-page .header {
          padding: 2rem 1.5rem 1rem;
          text-align: center;
        }
        .ppp-page .header .brand {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--white);
        }
        .ppp-page .header .brand span { color: var(--teal); }
        .ppp-page .header .location {
          font-size: 0.7rem;
          color: var(--white-40);
          letter-spacing: 0.08em;
          margin-top: 0.25rem;
        }

        .ppp-page .event-banner {
          text-align: center;
          padding: 1.5rem 1.5rem 0.5rem;
        }
        .ppp-page .event-banner .event-label {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(212, 168, 67, 0.3);
          padding: 0.35rem 1rem;
          border-radius: 100px;
        }
        .ppp-page .event-banner .event-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: var(--white);
          margin-top: 0.75rem;
        }
        .ppp-page .event-banner .event-host {
          font-size: 0.75rem;
          color: var(--white-60);
          margin-top: 0.3rem;
        }
        .ppp-page .event-banner .event-host a {
          color: var(--teal);
          text-decoration: none;
        }
        .ppp-page .event-banner .event-host a:hover { text-decoration: underline; }

        .ppp-page .hero {
          text-align: center;
          padding: 2.5rem 1.5rem 2rem;
          position: relative;
        }
        .ppp-page .hero::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(46, 196, 182, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .ppp-page .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.2;
        }
        .ppp-page .hero .subtitle {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.15rem;
          color: var(--teal);
          margin-top: 0.5rem;
        }
        .ppp-page .hero .value-badge {
          display: inline-block;
          margin-top: 1.25rem;
          padding: 0.6rem 2rem;
          border: 1.5px solid var(--gold);
          border-radius: 8px;
          background: rgba(22, 22, 25, 0.8);
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          color: var(--gold-light);
        }
        .ppp-page .hero .charity-note {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: var(--gold);
          font-weight: 500;
        }
        .ppp-page .hero .charity-note span { color: var(--white-60); font-weight: 400; }

        .ppp-page .divider {
          height: 1px;
          margin: 0 2rem;
          background: linear-gradient(90deg, transparent, var(--white-20), transparent);
        }

        .ppp-page .how-it-works {
          text-align: center;
          padding: 2.5rem 1.5rem 1rem;
        }
        .ppp-page .how-it-works h2 {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--teal);
        }
        .ppp-page .how-it-works p {
          font-size: 0.9rem;
          color: var(--white-60);
          margin-top: 0.5rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .ppp-page .services {
          padding: 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .ppp-page .services { grid-template-columns: 1fr 1fr; }
        }

        .ppp-page .service-card {
          background: var(--bg-card);
          border: 1px solid var(--white-20);
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .ppp-page .service-card:hover { border-color: rgba(46, 196, 182, 0.3); }
        .ppp-page .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--teal), var(--teal-dim));
        }
        .ppp-page .service-card .num {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--gold);
          line-height: 1;
        }
        .ppp-page .service-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: var(--white);
          margin-top: 0.5rem;
        }
        .ppp-page .service-card .desc {
          font-size: 0.85rem;
          color: var(--white-60);
          margin-top: 0.75rem;
          line-height: 1.6;
        }
        .ppp-page .service-card .benefit {
          margin-top: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--teal);
        }

        .ppp-page .cta-section {
          text-align: center;
          padding: 2.5rem 1.5rem 3rem;
        }
        .ppp-page .cta-section .learn-more {
          display: inline-block;
          padding: 0.85rem 2.5rem;
          background: var(--gold);
          color: var(--bg);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.3s;
        }
        .ppp-page .cta-section .learn-more:hover { background: var(--gold-light); }
        .ppp-page .cta-section .subtext {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: var(--white-40);
        }
        .ppp-page .cta-section .subtext a {
          color: var(--teal);
          text-decoration: none;
        }
        .ppp-page .cta-section .subtext a:hover { text-decoration: underline; }

        .ppp-page .footer {
          border-top: 1px solid var(--white-20);
          padding: 1.5rem;
          text-align: center;
        }
        .ppp-page .footer .contact {
          font-size: 0.75rem;
          color: var(--white-40);
          line-height: 1.8;
        }
        .ppp-page .footer .contact a { color: var(--teal); text-decoration: none; }
        .ppp-page .footer .contact a:hover { text-decoration: underline; }
        .ppp-page .footer .brand-link {
          display: inline-block;
          margin-top: 0.75rem;
          font-size: 0.7rem;
          color: var(--white-40);
          letter-spacing: 0.08em;
        }
        .ppp-page .footer .brand-link a { color: var(--white-60); text-decoration: none; }
        .ppp-page .footer .brand-link a:hover { color: var(--teal); }
      `}</style>

      <div className="ppp-page">
        <div className="top-bar"></div>

        <div className="header">
          <div className="brand">ARDENT <span>STUDIO</span></div>
          <div className="location">Palm Beach County, FL</div>
        </div>

        <div className="event-banner">
          <span className="event-label">Live Auction Item</span>
          <div className="event-name">Pooches, Pearls &amp; Prosecco</div>
          <div className="event-host">
            Hosted by{" "}
            <a href="https://www.womenofwellington.com/pooches-pearls-prosecco" target="_blank" rel="noopener noreferrer">
              Women of Wellington
            </a>
            &nbsp;&bull;&nbsp; Wellington Chamber of Commerce
          </div>
        </div>

        <div className="hero">
          <h1>Automate Your Business.</h1>
          <div className="subtitle">You Pick Two. We Build Them.</div>
          <div className="value-badge">Valued at $1,000</div>
          <div className="charity-note">
            100% of proceeds benefit shelter animals
            <span>&nbsp;&mdash;&nbsp;helping local pooches find their forever homes</span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="how-it-works">
          <h2>How It Works</h2>
          <p>
            Win this auction item and choose any two of the four automations below. We'll build them
            for your business from scratch — no tech skills needed on your end.
          </p>
        </div>

        <div className="services">
          <div className="service-card">
            <div className="num">01</div>
            <h3>Workflow Automation</h3>
            <p className="desc">
              Those repetitive tasks you do every day — scheduling, invoicing, data entry, sending
              reminders — we set up systems that handle them automatically so you don't have to.
            </p>
            <p className="benefit">→ Get hours back every week without hiring anyone.</p>
          </div>

          <div className="service-card">
            <div className="num">02</div>
            <h3>Lead Generation Engine</h3>
            <p className="desc">
              We build a system that captures potential customers from your website, social media, or
              ads. It collects their info and sends them straight to you — automatically.
            </p>
            <p className="benefit">→ New leads come to you on autopilot, 24/7.</p>
          </div>

          <div className="service-card">
            <div className="num">03</div>
            <h3>Marketing Automation</h3>
            <p className="desc">
              Email campaigns, social media posts, and targeted messages that go out on their own —
              based on what your customers actually do. No more spending hours on manual marketing.
            </p>
            <p className="benefit">→ Consistent marketing that runs while you sleep.</p>
          </div>

          <div className="service-card">
            <div className="num">04</div>
            <h3>24/7 Automated Follow-Ups</h3>
            <p className="desc">
              After someone reaches out or books with you, your system automatically sends a series
              of emails or texts — reminders, check-ins, and thank-yous — without you lifting a
              finger.
            </p>
            <p className="benefit">→ Never lose a lead because you forgot to follow up.</p>
          </div>
        </div>

        <div className="cta-section">
          <a href="https://ardentstudio.io" target="_blank" rel="noopener noreferrer" className="learn-more">
            Visit Ardent Studio
          </a>
          <div className="subtext">
            Questions? Email{" "}
            <a href="mailto:hello@ardentstudio.io">hello@ardentstudio.io</a>
            &nbsp;or call <a href="tel:+17282010192">(728) 201-0192</a>
          </div>
        </div>

        <div className="footer">
          <div className="contact">
            Dr. Ashley Somogyi &nbsp;&bull;&nbsp; Ardent Studio
            <br />
            <a href="https://ardentstudio.io" target="_blank" rel="noopener noreferrer">
              ardentstudio.io
            </a>
            &nbsp;&bull;&nbsp;
            <a href="mailto:hello@ardentstudio.io">hello@ardentstudio.io</a>
            &nbsp;&bull;&nbsp;
            <a href="tel:+17282010192">(728) 201-0192</a>
          </div>
          <div className="brand-link">
            <a href="https://ardentstudio.io" target="_blank" rel="noopener noreferrer">
              ARDENT STUDIO
            </a>{" "}
            &nbsp;&bull;&nbsp; Palm Beach County, FL
          </div>
        </div>
      </div>
    </>
  );
};

export default PoochesPearlsProsecco;
