import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const serif = "'Georgia', 'Cormorant Garamond', serif";

const Apps = () => {
  useEffect(() => {
    document.title = "Products | Ardent Studio";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Products built by Ardent Studio — including Sartori AI and Tryline Coach. Custom apps and software for real businesses.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

  return (
    <>
      <Nav />
      <main>
        <section className="px-5 md:px-10 pt-[160px] pb-[120px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
              Apps & custom software
            </span>
            <h1 className="text-[clamp(40px,6vw,72px)] leading-[1.05] mb-6 max-w-[18ch] text-ardent-paper" style={{ fontFamily: serif }}>
              Real apps. Real businesses. Real fast.
            </h1>
            <p className="text-[18px] leading-[1.65] max-w-[640px] text-ardent-paper/75 mb-10">
              Web apps, mobile apps, and internal tools built end to end. Fixed scope, fixed price, you own the code.
            </p>
            <a
              href="/#book-a-call"
              className="inline-block px-8 py-4 text-[14px] rounded-full"
              style={{ background: "#FF6B6B", color: "#0D0D0D" }}
            >
              Book a free 20-minute call
            </a>
          </div>
        </section>

        <section className="px-5 md:px-10 py-[120px]" style={{ background: "#F7F3EC" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-ink block mb-6">
              Featured products
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-ardent-lime/40 p-10 md:p-14 bg-white/40 flex flex-col">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                  AI Sales Training
                </span>
                <h2 className="text-[clamp(32px,4vw,48px)] mb-4 text-ardent-studio" style={{ fontFamily: serif }}>
                  Sartori AI
                </h2>
                <p className="italic mb-6" style={{ fontFamily: serif, color: "#B8862A" }}>
                  Reducing ramp time for sales teams.
                </p>
                <p className="text-[16px] leading-[1.7] text-ardent-studio/80 mb-8">
                  An AI-powered sales training platform that puts reps through scored roleplay conversations with realistic buyer personas — so teams build real skill through practice, not theory. Built by Ardent Studio. Now its own company.
                </p>
                <div className="mt-auto">
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                    Status · Live
                  </span>
                  <a
                    href="https://sartoriai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-[14px] rounded-full"
                    style={{ background: "#FF6B6B", color: "#0D0D0D" }}
                  >
                    Visit sartoriai.com →
                  </a>
                </div>
              </div>

              <div className="border border-ardent-lime/40 p-10 md:p-14 bg-white/40 flex flex-col">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                  Sports Tech · AI Coaching
                </span>
                <h2 className="text-[clamp(32px,4vw,48px)] mb-4 text-ardent-studio" style={{ fontFamily: serif }}>
                  Tryline Coach
                </h2>
                <p className="italic mb-6" style={{ fontFamily: serif, color: "#B8862A" }}>
                  Democratising access to elite coaching intelligence.
                </p>
                <p className="text-[16px] leading-[1.7] text-ardent-studio/80 mb-8">
                  AI-powered coaching platform for rugby, delivering personalised training analysis and performance insights to players and coaches at every level — from grassroots clubs to elite academies.
                </p>
                <div className="mt-auto">
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-studio/60 block mb-4">
                    Status · In Build
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 py-[120px]" style={{ background: "#171311" }}>
          <div className="max-w-[1100px] mx-auto">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">What we build</span>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-12 text-ardent-paper" style={{ fontFamily: serif }}>
              From internal tools to shipped products.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t: "Web apps", d: "Customer portals, dashboards, and internal tools your team actually uses." },
                { t: "Mobile apps", d: "iOS and Android apps for field teams, customers, and operations." },
                { t: "AI products", d: "Full products with AI at the core — like Sartori." },
              ].map((c) => (
                <div key={c.t} className="p-7 border border-ardent-paper/10" style={{ background: "#1A1614" }}>
                  <h3 className="text-[22px] mb-3 text-ardent-paper" style={{ fontFamily: serif }}>{c.t}</h3>
                  <p className="text-[14px] leading-[1.6] text-ardent-paper/70">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Apps;
