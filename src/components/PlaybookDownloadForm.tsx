import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

// Email gate for the free skills and prompt packs on the Playbooks page.
// Sends through the `send-playbook-downloads` Edge Function.
const BOOKING_URL = "https://calendly.com/asomogyi-ardentstudio/30min";

const inputClass =
  "w-full bg-background border border-input rounded-xl px-4 py-3 font-sans text-[16px] text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

const PlaybookDownloadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", website: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("send-playbook-downloads", {
        body: form,
      });
      if (fnError || !data?.ok) throw new Error(fnError?.message || "submit failed");
      setSubmitted(true);
      setForm({ name: "", email: "", business: "", website: "" });
    } catch (err) {
      console.error(err);
      setError("That did not go through. Please try again, or email hello@ardentstudio.io and we will send the files.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-[28px] border border-brick/10 bg-white p-8 md:p-9">
      <div className="absolute right-6 top-6 flex gap-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full bg-ardent-lime" />
      </div>

      {submitted ? (
        <div className="flex flex-col gap-3.5" role="status">
          <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-primary">On the way</span>
          <h3 className="font-sans text-[24px] font-semibold leading-[1.2] text-foreground">
            Check your inbox in a few minutes.
          </h3>
          <p className="font-sans text-[15px] leading-[1.6] text-muted-foreground">
            The email comes from hello@ardentstudio.io. If it is not there, look in spam or promotions. If you only do
            one thing this week, install the Business Brief Builder and answer its ten questions.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-primary hover:text-foreground">
            Want a second opinion on where to start? Book a free 15-minute call.
          </a>
        </div>
      ): (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
          <h3 className="font-sans text-[24px] font-semibold leading-[1.2] text-foreground">Send me the downloads</h3>
          <p className="font-sans text-[15px] leading-[1.6] text-muted-foreground">
            Tell us where to send them. All five arrive in one email, with a two-minute install guide for the skills.
          </p>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="dl-name" className="font-sans text-[14px] font-medium text-foreground">First name</label>
            <input id="dl-name" type="text" autoComplete="given-name" required maxLength={80} value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="dl-email" className="font-sans text-[14px] font-medium text-foreground">Email</label>
            <input id="dl-email" type="email" autoComplete="email" required maxLength={200} value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="dl-business" className="font-sans text-[14px] font-medium text-foreground">
              What kind of business do you run? <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input id="dl-business" type="text" maxLength={200} value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })} className={inputClass} />
          </div>

          {/* Honeypot: hidden from people and screen readers, filled only by bots. */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="dl-website">Website</label>
            <input id="dl-website" type="text" tabIndex={-1} autoComplete="off" value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })} />
          </div>

          {error && <p role="alert" className="font-sans text-[14px] text-destructive">{error}</p>}

          <button type="submit" disabled={submitting}
            className="min-h-[52px] rounded-full bg-ardent-lime px-8 font-sans text-[16px] font-semibold text-ardent-studio transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
            {submitting ? "Sending..." : "Email me the downloads"}
          </button>

          <p className="font-sans text-[13px] leading-[1.5] text-muted-foreground">
            You will also get an occasional practical note from Ashley. Unsubscribe with one click. We never share your
            email.
          </p>
        </form>
      )}
    </div>
  );
};

export default PlaybookDownloadForm;
