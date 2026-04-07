import { useState, useRef, useEffect, useCallback, KeyboardEvent, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";

interface Message {
  role: "bot" | "user";
  text: string;
  quickReplies?: string[];
}

const WELCOME_MESSAGE: Message = {
  role: "bot",
  text: "Hey there! I'm the Ardent Studio assistant. I can help you learn about our web development and AI business solutions, pricing, timelines, and how to book a free consultation.\n\nWhat would you like to know?",
  quickReplies: ["Services & Pricing", "How It Works", "Book a Call", "Contact Info"],
};

const RESPONSES: { keywords: string[]; text: string; quickReplies?: string[] }[] = [
  {
    keywords: ["service", "pricing", "price", "cost"],
    text: "We offer 4 service levels:\n\n**LAUNCH ($3,500)** — Website & brand in 5–7 days. Up to 6 pages, mobile-first, SEO-ready, contact forms, booking integration, 30-day support.\n\n**GROWTH ($8,500)** — 10–14 days. Everything in Launch plus AI lead capture, automated follow-up, CRM automation, 60-day support.\n\n**BUILD ($20,000+)** — Custom product in 3–6 weeks. Full design/build/deploy, payments, auth, AI integrations. Optional equity/revenue-share.\n\n**ONGOING ($300/month)** — Continuous support and optimization.\n\nAll pricing is fixed — no surprises!",
    quickReplies: ["How It Works", "Book a Call", "Timeline"],
  },
  {
    keywords: ["timeline", "how long", "days", "weeks"],
    text: "**LAUNCH:** 5–7 days.\n**GROWTH:** 10–14 days.\n**BUILD:** 3–6 weeks.\n\nMost agencies take 6–8 weeks — we do it better and faster with agile sprints and deploys every 2–3 days.",
    quickReplies: ["Services & Pricing", "How It Works", "Book a Call"],
  },
  {
    keywords: ["process", "how it works", "steps", "workflow"],
    text: "1. **SCOPE CALL** (30 mins, free) — We learn your business and needs.\n2. **PROPOSAL** (24 hours) — Fixed pricing, clear deliverables.\n3. **BUILD** (agile sprints) — Updates every 2–3 days, constant feedback.\n4. **HANDOFF** — Deployed, documented, 30–60 days support included.",
    quickReplies: ["Services & Pricing", "Book a Call", "Timeline"],
  },
  {
    keywords: ["book", "consultation", "call", "schedule"],
    text: "We offer a **FREE 30-minute scope call**. We'll understand your goals, discuss needs, recommend a service, and give you pricing.\n\nBook on our website or email hello@ardentstudio.io. Usually available within 24–48 hours.",
    quickReplies: ["Services & Pricing", "Contact Info"],
  },
  {
    keywords: ["contact", "email", "phone", "address"],
    text: "**Email:** hello@ardentstudio.io\n**Phone:** (728) 201-0192\n**Address:** 3118 Waterside Circle, Boynton Beach, FL 33435\n**Founders:** Dr. Ashley Somogyi (Builder) & Wesley Price (Strategy & Ops)",
    quickReplies: ["Services & Pricing", "Book a Call"],
  },
  {
    keywords: ["payment", "deposit", "upfront"],
    text: "50% upfront to start, 50% on delivery. All pricing is fixed — no surprises. Optional equity/revenue-share for larger Build projects.",
    quickReplies: ["Services & Pricing", "Book a Call"],
  },
  {
    keywords: ["support", "maintain", "update"],
    text: "Launch includes 30 days, Growth/Build include 60 days. After that, ongoing support from **$300/month**.",
    quickReplies: ["Services & Pricing", "Book a Call"],
  },
  {
    keywords: ["team", "who", "founder", "experience"],
    text: "**Dr. Ashley Somogyi** — Founder & Builder (web dev, AI, product strategy).\n**Wesley Price** — Strategy & Operations (business dev, client success).\n\nLean team, fast delivery, direct communication.",
    quickReplies: ["Services & Pricing", "Book a Call"],
  },
];

const DEFAULT_RESPONSE: Message = {
  role: "bot",
  text: "I can help with: services & pricing, timelines, process, booking a consultation, contact info, and team details.\n\nWhat would you like to know?",
  quickReplies: ["Services & Pricing", "How It Works", "Book a Call", "Contact Info"],
};

function getBotResponse(input: string): Message {
  const lower = input.toLowerCase();
  for (const r of RESPONSES) {
    if (r.keywords.some((kw) => lower.includes(kw))) {
      return { role: "bot", text: r.text, quickReplies: r.quickReplies };
    }
  }
  return { ...DEFAULT_RESPONSE };
}

function renderText(text: string) {
  // Simple bold markdown
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Handle newlines
    const lines = part.split("\n");
    return lines.map((line, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line}
      </span>
    ));
  });
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const location = useLocation();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleOpen = () => {
    setIsOpen(true);
    if (!hasOpened) {
      setHasOpened(true);
      setMessages([WELCOME_MESSAGE]);
    }
  };

  const fireWebhook = (userMessage: string, allMessages: Message[]) => {
    const url = import.meta.env.VITE_CHATBOT_WEBHOOK_URL;
    if (!url) return;
    try {
      fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString(),
          page: window.location.href,
          conversation: allMessages.map((m) => ({ role: m.role, text: m.text })),
        }),
      }).catch(() => {});
    } catch {
      // fire and forget
    }
  };

  const addBotResponse = (userText: string, currentMessages: Message[]) => {
    setIsTyping(true);
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const response = getBotResponse(userText);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, delay);
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "44px";
    }
    fireWebhook(text.trim(), updated);
    addBotResponse(text.trim(), updated);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "44px";
    el.style.height = Math.min(el.scrollHeight, 100) + "px";
  };

  const handleBookCall = () => {
    setIsOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  return (
    <>
      {/* Chat Window */}
      <div
        className="ardent-chat-window"
        style={{
          position: "fixed",
          bottom: 100,
          right: 24,
          width: 400,
          maxHeight: 600,
          zIndex: 9998,
          borderRadius: 16,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          background: "#0D0D0D",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(20px)",
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #0DBFBC, #0a9a96)",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#C8A24D", fontSize: 20 }}>⚡</span>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#F7F3EC", fontWeight: 600, fontSize: 15 }}>Ardent Studio</div>
            <div style={{ color: "#F7F3EC", fontSize: 12, opacity: 0.8 }}>Online</div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#F7F3EC",
              fontSize: 20,
              cursor: "pointer",
              padding: 4,
              lineHeight: 1,
            }}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px 16px 8px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {messages.map((msg, i) => (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  gap: 8,
                  alignItems: "flex-start",
                }}
              >
                {msg.role === "bot" && (
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0DBFBC, #0a9a96)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ⚡
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: 12,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "#F7F3EC",
                    ...(msg.role === "bot"
                      ? {
                          background: "#1a1a1a",
                          borderLeft: "3px solid #0DBFBC",
                        }
                      : {
                          background: "linear-gradient(135deg, #0DBFBC, #0a9a96)",
                        }),
                  }}
                >
                  {renderText(msg.text)}
                </div>
              </div>

              {/* Quick Replies */}
              {msg.role === "bot" && msg.quickReplies && i === messages.length - 1 && !isTyping && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8, marginLeft: 36 }}>
                  {msg.quickReplies.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => handleQuickReply(qr)}
                      className="ardent-chat-qr"
                      style={{
                        background: "transparent",
                        border: "1px solid #0DBFBC",
                        color: "#0DBFBC",
                        borderRadius: 8,
                        padding: "8px 14px",
                        fontSize: 13,
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "Inter, sans-serif",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLButtonElement).style.background = "#0DBFBC";
                        (e.target as HTMLButtonElement).style.color = "#0D0D0D";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLButtonElement).style.background = "transparent";
                        (e.target as HTMLButtonElement).style.color = "#0DBFBC";
                      }}
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0DBFBC, #0a9a96)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  flexShrink: 0,
                }}
              >
                ⚡
              </div>
              <div style={{ display: "flex", gap: 4, padding: "10px 14px", background: "#1a1a1a", borderRadius: 12, borderLeft: "3px solid #0DBFBC" }}>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#0DBFBC",
                      display: "inline-block",
                      animation: `ardentBounce 1.4s infinite ease-in-out`,
                      animationDelay: `${i * 0.16}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          {messages.length > 0 && !isTyping && (
            <button
              onClick={handleBookCall}
              style={{
                background: "linear-gradient(135deg, #C8A24D, #B8862A)",
                color: "#0D0D0D",
                border: "none",
                borderRadius: 10,
                padding: "12px 20px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                textAlign: "center",
                marginTop: 4,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.opacity = "0.9"; }}
              onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.opacity = "1"; }}
            >
              Book a Free 30-Min Call
            </button>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: "12px 16px", borderTop: "1px solid #222", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask about our services..."
              rows={1}
              style={{
                flex: 1,
                background: "#1a1a1a",
                border: "1px solid #333",
                borderRadius: 10,
                padding: "10px 14px",
                color: "#F7F3EC",
                fontSize: 14,
                fontFamily: "Inter, sans-serif",
                resize: "none",
                outline: "none",
                height: 44,
                maxHeight: 100,
                lineHeight: 1.5,
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: input.trim() ? "#0DBFBC" : "#333",
                border: "none",
                cursor: input.trim() ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
                flexShrink: 0,
              }}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bubble */}
      <button
        onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
        aria-label="Open chat"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#0DBFBC",
          border: "none",
          cursor: "pointer",
          zIndex: 9998,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(13,191,188,0.4)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Bounce animation + mobile styles */}
      <style>{`
        @keyframes ardentBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @media (max-width: 480px) {
          .ardent-chat-window {
            width: calc(100vw - 48px) !important;
            right: 24px !important;
          }
        }
      `}</style>
    </>
  );
};

export default ChatbotWidget;
