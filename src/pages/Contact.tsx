import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const serif = "'Inter', system-ui, sans-serif";

const INTEREST_OPTIONS: { value: string; label: string }[] = [
  { value: "free-call", label: "Free 15-min call" },
  { value: "analyze-my-data", label: "Analyze my data" },
  { value: "build-a-tool", label: "Build a tool" },
  { value: "team-training", label: "Team training or a talk" },
  { value: "bigger-project", label: "A bigger project" },
];

const LEGACY_INTEREST: Record<string, string> = {
  "custom-ai-automation": "build-a-tool",
  "single-workshop": "team-training",
  "half-day-deep-dive": "team-training",
  "four-session-curriculum": "team-training",
};

// Contact submissions are sent via the `send-contact-email` Edge Function,
// which uses Resend to deliver to hello@ardentstudio.io.
// RESEND_API_KEY is configured in Lovable Cloud secrets.

const Contact = () => {
  const [params] = useSearchParams();
  const initialInterest = (() => {
    const raw = params.get("interest");
    if (!raw) return "";
    const match = INTEREST_OPTIONS.find((o) => o.value === raw);
    return match ? match.value : LEGACY_INTEREST[raw] || "";
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
      const { data, error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          interest: interestLabel,
          message: form.message,
        },
      });
      if (fnError || !data?.ok) throw new Error(fnError?.message || "submit failed");
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
    "w-full bg-white border border-input rounded-md px-4 py-3 font-sans text-[15px] text-foreground placeholder:text-dim-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";
  const labelClass =
    "block font-mono text-[11px] text-label-text tracking-[0.15em] uppercase mb-2";

  return (
    <>
      <Nav />
      <main>
        <section className="bg-blush px-5 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow mb-6">
              Contact
            </span>
            <h1
               className="text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 text-foreground"
              style={{ fontFamily: serif }}
            >
              Tell us what you're trying to build.
            </h1>
            <p className="text-[17px] leading-[1.65] text-body-text max-w-[560px] mx-auto">
              We reply within one business day. Most projects start with a free 15-minute scope call.
            </p>
          </div>
        </section>

        <section className="bg-blush px-5 pb-[120px] md:px-10">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div
                className="text-center p-10 md:p-14 border border-primary/30 rounded-xl"
                style={{ background: "#FFFFFF" }}
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
                  style={{ background: "#C3F73A", color: "#0D0D0D" }}
                >
                  Back to home
                </Link>
              </div>
            ): (
              <form
                onSubmit={handleSubmit}
                className="workshop-card space-y-5 p-8 md:p-10"
                style={{ background: "#FFFFFF" }}
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
                  <label htmlFor="interest" className={labelClass}>What can we help with?</label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className={inputClass}
                    style={{ appearance: "none" }}
                  >
                    <option value="" disabled style={{ background: "#FFFFFF" }}>
                      Select an option (optional)
                    </option>
                    {INTEREST_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value} style={{ background: "#FFFFFF" }}>
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
                  <p className="text-[14px] text-error-red">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  variant="secondary"
                  className="w-full h-auto px-8 py-4 text-[15px] rounded-full font-semibold"
                >
                  {submitting ? "Sending…": "Send message"}
                </Button>
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
