// Playbooks page: emails the five free downloads to the person who signed up,
// then tells hello@ardentstudio.io about the new lead.
// Uses the same RESEND_API_KEY project secret as send-contact-email.
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

interface Payload {
  name: string;
  email: string;
  business?: string;
  // Honeypot. Real visitors never see or fill this field.
  website?: string;
}

const OWNER = "hello@ardentstudio.io";
const FROM = "Ashley at Ardent Studio <hello@ardentstudio.io>";
const SITE = "https://ardentstudio.io";
const BOOKING = "https://calendly.com/asomogyi-ardentstudio/30min";

const SKILLS = [
  { file: "business-brief-builder.zip", title: "Business Brief Builder", note: "Asks you ten questions and writes your one-page business brief." },
  { file: "sounds-like-me.zip", title: "Sounds Like Me", note: "Marks the lines in a draft that read like a chatbot wrote them." },
  { file: "quote-follow-up.zip", title: "Quote Follow-Up", note: "Sorts your open quotes and drafts a follow-up for each." },
];
const GUIDES = [
  { file: "ardent-weekly-admin-pack.pdf", title: "The Weekly Admin Pack", note: "Eight copy-and-paste prompts for inquiries, calls, quotes and invoices." },
  { file: "ardent-one-task-audit.pdf", title: "The One Task Audit", note: "A worksheet for finding the first task worth handing to AI." },
];
const INSTALL = [
  "Download the ZIP file and leave it zipped.",
  "In Claude, open Customize, then Skills.",
  "Click the plus button, choose Create skill, then Upload a skill, and pick the ZIP.",
  "Check the skill is switched on, start a new chat and say: build my business brief.",
];

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const url = (file: string) => `${SITE}/downloads/${file}`;

function buildEmail(firstName: string) {
  const item = (d: { file: string; title: string; note: string }) =>
    `<li style="margin:0 0 10px"><a href="${url(d.file)}" style="color:#0A7D7B;font-weight:600">${d.title}</a><br><span style="color:#444444">${d.note}</span></li>`;
  const html = `
<div style="background:#F5F5F0;padding:24px 0;font-family:Inter,Helvetica,Arial,sans-serif;color:#0D0D0D;font-size:16px;line-height:1.6">
<div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E8E2DF;border-radius:12px;padding:32px">
<p style="margin:0 0 16px">Hi ${escape(firstName)},</p>
<p style="margin:0 0 20px">Here are your five downloads from the Ardent Studio playbooks.</p>
<p style="margin:0 0 8px;font-weight:700">Skills for Claude</p>
<ul style="margin:0 0 20px;padding-left:20px">${SKILLS.map(item).join("")}</ul>
<p style="margin:0 0 8px;font-weight:700">Prompts for any AI</p>
<ul style="margin:0 0 20px;padding-left:20px">${GUIDES.map(item).join("")}</ul>
<div style="background:#FDEAE6;border-radius:10px;padding:18px 20px;margin:0 0 20px">
<p style="margin:0 0 8px;font-weight:700">Installing a skill takes about two minutes</p>
<ol style="margin:0;padding-left:20px">${INSTALL.map((s) => `<li>${s}</li>`).join("")}</ol>
<p style="margin:10px 0 0;color:#444444;font-size:14px">Skills work on free and paid Claude plans. If Claude says skills are unavailable, turn on code execution in Settings first.</p>
</div>
<p style="margin:0 0 16px">If you only do one thing this week, install the Business Brief Builder and answer its ten questions. Everything else works better once that page exists.</p>
<p style="margin:0 0 16px">Stuck on a step? Reply to this email, or <a href="${BOOKING}" style="color:#0A7D7B">book a free 15-minute call</a>. No pitch.</p>
<p style="margin:0">Cheers,<br>Ashley</p>
<p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #E8E2DF;color:#666666;font-size:13px">Dr. Ashley Somogyi, Ardent Studio. Practical AI for the way you already work. You are getting this because you asked for the downloads at ardentstudio.io.</p>
</div>
</div>`;
  const line = (d: { file: string; title: string; note: string }) => `- ${d.title}: ${url(d.file)}\n  ${d.note}`;
  const text = [
    `Hi ${firstName},`,
    "Here are your five downloads from the Ardent Studio playbooks.",
    "SKILLS FOR CLAUDE\n" + SKILLS.map(line).join("\n"),
    "PROMPTS FOR ANY AI\n" + GUIDES.map(line).join("\n"),
    "INSTALLING A SKILL (ABOUT TWO MINUTES)\n" + INSTALL.map((s, i) => `${i + 1}. ${s}`).join("\n") +
      "\nSkills work on free and paid Claude plans. If Claude says skills are unavailable, turn on code execution in Settings first.",
    "If you only do one thing this week, install the Business Brief Builder and answer its ten questions. Everything else works better once that page exists.",
    `Stuck on a step? Reply to this email, or book a free 15-minute call: ${BOOKING}. No pitch.`,
    "Cheers,\nAshley",
    "Dr. Ashley Somogyi, Ardent Studio. You are getting this because you asked for the downloads at ardentstudio.io.",
  ].join("\n\n");
  return { html, text };
}

async function send(apiKey: string, message: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
  return { ok: res.ok, status: res.status, detail: await res.text() };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return json({ error: "RESEND_API_KEY not configured" }, 500);

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return json({ error: "invalid json" }, 400);
  }

  const name = String(body?.name ?? "").trim().slice(0, 80);
  const email = String(body?.email ?? "").trim().toLowerCase().slice(0, 200);
  const business = String(body?.business ?? "").trim().slice(0, 200);

  // A filled honeypot means a bot. Answer as if it worked and send nothing.
  if (String(body?.website ?? "").trim()) return json({ ok: true });

  if (!name || !email) return json({ error: "missing required fields" }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "invalid email" }, 400);

  const { html, text } = buildEmail(name);
  const delivered = await send(apiKey, {
    from: FROM,
    to: [email],
    reply_to: OWNER,
    subject: "Your Ardent Studio skills and prompts",
    html,
    text,
  });
  if (!delivered.ok) {
    console.error("Resend error (downloads email)", delivered.status, delivered.detail);
    return json({ error: "send failed" }, 502);
  }

  // The lead notice is a convenience. If it fails, the visitor still has their email.
  const notice = await send(apiKey, {
    from: FROM,
    to: [OWNER],
    reply_to: email,
    subject: `[Ardent Playbooks] New download: ${name}`,
    html: `<h2>New playbook downloads signup</h2>
<p><strong>Name:</strong> ${escape(name)}</p>
<p><strong>Email:</strong> ${escape(email)}</p>
<p><strong>Business:</strong> ${escape(business || "not given")}</p>
<p>They were told to expect an occasional practical note from Ashley.</p>`,
  });
  if (!notice.ok) console.error("Resend error (lead notice)", notice.status, notice.detail);

  return json({ ok: true });
});
