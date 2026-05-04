import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const serif = "'Georgia', 'Cormorant Garamond', serif";

const INTEREST_OPTIONS: { value: string; label: string }[] = [
  { value: "custom-ai-automation", label: "Custom AI automation build" },
  { value: "single-workshop", label: "AI training: single workshop" },
  { value: "half-day-deep-dive", label: "AI training: half-day deep dive" },
  { value: "four-session-curriculum", label: "AI training: four-session team curriculum" },
  { value: "general-inquiry", label: "General inquiry" },
];

// Contact submissions are sent via the `send-contact-email` Edge Function,
// which uses Resend to deliver to hello@ardentstudio.io.
// RESEND_API_KEY is configured in Lovable Cloud secrets.

const Contact = () => {
  const [params] = useSearchParams();
  const initialInterest = (() => {
    const raw = params.get("interest");
    if (!raw) return "";
    const match = INTEREST_OPTIONS.find((o) => o.value === raw);
    return match ? match.value : "";
  })();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: initialInterest,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Contact | Ardent Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Tell us what you're trying to build. We reply within one business day.");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const interestLabel =
        INTEREST_OPTIONS.find((o) => o.value === form.interest)?.label || form.interest;
      const subject = `[Ardent Contact] ${interestLabel} — ${form.name}${form.company ? `, ${form.company}` : ""}`;
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "Ardent Studio Contact Form",
          to: "hello@ardentstudio.io",
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          interest: interestLabel,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
      setForm({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please email hello@ardentstudio.io directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border border-ardent-paper/20 rounded-md px-4 py-3 font-sans text-[15px] text-ardent-paper placeholder:text-ardent-paper/40 focus:outline-none focus:border-ardent-lime transition-colors";
  const labelClass =
    "block font-mono text-[11px] text-ardent-paper/70 tracking-[0.15em] uppercase mb-2";

  return (
    <>
      <Nav />
      <main>
        <section className="px-5 md:px-10 pt-[140px] pb-[40px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ardent-lime block mb-6">
              Contact
            </span>
            <h1
              className="text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 text-ardent-paper"
              style={{ fontFamily: serif }}
            >
              Tell us what you're trying to build.
            </h1>
            <p className="text-[17px] leading-[1.65] text-ardent-paper/75 max-w-[560px] mx-auto">
              We reply within one business day. Most projects start with a free 30-minute scope call.
            </p>
          </div>
        </section>

        <section className="px-5 md:px-10 pb-[120px]" style={{ background: "#0D0D0D" }}>
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div
                className="text-center p-10 md:p-14 border border-ardent-mint/40 rounded-xl"
                style={{ background: "#171311" }}
              >
                <h2
                  className="text-[clamp(26px,4vw,36px)] leading-[1.2] mb-8 text-ardent-paper"
                  style={{ fontFamily: serif }}
                >
                  Thanks. We'll be in touch within one business day.
                </h2>
                <Link
                  to="/"
                  className="inline-block px-8 py-4 text-[14px] rounded-full"
                  style={{ background: "#FF6B6B", color: "#0D0D0D" }}
                >
                  Back to home
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 md:p-10 border border-ardent-paper/15 rounded-xl"
                style={{ background: "#171311" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Company</label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className={labelClass}>I'm interested in: *</label>
                  <select
                    id="interest"
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className={inputClass}
                    style={{ appearance: "none" }}
                  >
                    <option value="" disabled style={{ background: "#171311" }}>
                      Select an option
                    </option>
                    {INTEREST_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value} style={{ background: "#171311" }}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your business and what you'd like to build or learn."
                  />
                </div>

                {error && (
                  <p className="text-[14px] text-ardent-coral">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-4 text-[15px] rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
                  style={{ background: "#FF6B6B", color: "#0D0D0D" }}
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
