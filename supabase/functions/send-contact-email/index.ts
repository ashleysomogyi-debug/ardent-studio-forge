// Sends contact form submissions to hello@ardentstudio.io via Resend.
// Requires RESEND_API_KEY in project secrets.
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

interface Payload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest: string;
  message: string;
}

const TO = "hello@ardentstudio.io";
const FROM = "Ardent Studio <hello@ardentstudio.io>";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid json" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { name, email, company, phone, interest, message } = body || ({} as Payload);
  if (!name || !email || !interest || !message) {
    return new Response(JSON.stringify({ error: "missing required fields" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "invalid email" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const subject = `[Ardent Contact] ${interest} — ${name}${company ? `, ${company}` : ""}`;
  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Company:</strong> ${escape(company || "—")}</p>
    <p><strong>Phone:</strong> ${escape(phone || "—")}</p>
    <p><strong>Interested in:</strong> ${escape(interest)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escape(message)}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject,
      html,
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error("Resend error", res.status, text);
    return new Response(JSON.stringify({ error: "send failed", detail: text, from: FROM, to: TO }), {
      status: 502,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
