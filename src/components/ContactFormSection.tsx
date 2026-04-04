import { useState } from "react";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    console.log("Contact form submitted:", form);
  };

  return (
    <section id="contact-form" className="py-20 md:py-28 px-5 md:px-10 bg-background">
      <div className="max-w-[600px] mx-auto reveal-section">
        <span className="block font-mono text-[11px] text-primary tracking-[0.2em] uppercase mb-4 text-center">
          Contact
        </span>
        <h2 className="font-sans text-[clamp(28px,5vw,44px)] font-light text-foreground leading-[1.15] mb-4 text-center">
          Get in <em className="text-primary not-italic">touch.</em>
        </h2>
        <p className="font-sans text-[15px] text-muted-foreground text-center mb-10 leading-[1.75]">
          Have a project in mind? Drop us a line and we'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-mono text-[11px] text-muted-foreground tracking-[0.1em] uppercase mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 font-sans text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-mono text-[11px] text-muted-foreground tracking-[0.1em] uppercase mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 font-sans text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-mono text-[11px] text-muted-foreground tracking-[0.1em] uppercase mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 font-sans text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
              placeholder="Tell us about your project…"
            />
          </div>
          <button
            type="submit"
            data-hover
            className="w-full font-sans text-[13px] bg-primary text-primary-foreground px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
