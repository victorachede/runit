"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowUp, Zap } from "lucide-react";

const suggestions = [
  "Send appointment reminders to my clients every morning at 8am via WhatsApp",
  "Email my customers a weekly sales summary every Monday",
  "Remind all contacts about tomorrow's event via Telegram at 9am",
  "Schedule a Zoom call with a client and send them the link",
];

const aiReplies: Record<string, string> = {
  default: (input: string) => `Got it — "${input}". I'll configure this automation now. Want me to activate it?`,
} as any;

function getReply(input: string) {
  const l = input.toLowerCase();
  if (l.includes("whatsapp")) return `Done. I'll send WhatsApp messages to your contacts as described. Automating now.`;
  if (l.includes("email") || l.includes("gmail")) return `Got it. Setting up the email automation via Gmail. I'll activate it once you confirm.`;
  if (l.includes("telegram")) return `On it. Telegram messages will go out to your contacts on schedule.`;
  if (l.includes("zoom")) return `Link generated. I'll send the Zoom invite and add it to your calendar.`;
  if (l.includes("sms")) return `Ready. SMS reminders will go to your contacts at the time you specified.`;
  return `Understood. I'm setting up "${input}" — this will run automatically going forward. Activate it?`;
}

export default function DashboardPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "What do you want to automate? Describe it in plain English." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  function handleSend() {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", text: getReply(text) }]);
      setLoading(false);
    }, 900);
  }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontFamily: "'Audio Wide', sans-serif", fontWeight: 400, fontSize: "1.15rem", color: "#f0f0f0", marginBottom: "0.2rem", letterSpacing: "0.02em" }}>Dashboard</h1>
        <p style={{ color: "#444", fontSize: "0.85rem" }}>Describe what you want automated — Runit handles the rest.</p>
      </div>

      {/* Stats + Channels bento */}
      <div id="runit-bento" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr) 1.4fr", gap: "0.875rem", marginBottom: "2rem" }}>
        {[
          { label: "Active automations", value: "3",   delta: "+1 this week" },
          { label: "Total contacts",      value: "24",  delta: "4 new"        },
          { label: "Messages sent",       value: "142", delta: "38 today"     },
        ].map((stat) => (
          <div key={stat.label} style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 11, padding: "1.1rem 1.25rem" }}>
            <div style={{ fontFamily: "'Audio Wide', sans-serif", fontWeight: 400, fontSize: "1.6rem", color: "#f0f0f0", lineHeight: 1 }}>{stat.value}</div>
            <div style={{ fontSize: "0.75rem", color: "#444", marginTop: "0.3rem" }}>{stat.label}</div>
            <div style={{ fontSize: "0.7rem", color: "#22c55e", marginTop: "0.5rem", fontWeight: 500 }}>{stat.delta}</div>
          </div>
        ))}

        {/* Channels card */}
        <div id="runit-channels-card" style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 11, padding: "1rem 1.125rem" }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "#2a2a2a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.875rem" }}>
            Channels
          </div>
          {[
            { name: "Gmail",    color: "#EA4335", connected: true,  sent: 59 },
            { name: "WhatsApp", color: "#25D366", connected: true,  sent: 48 },
            { name: "Telegram", color: "#2AABEE", connected: true,  sent: 35 },
            { name: "SMS",      color: "#888",    connected: false, sent: 0  },
          ].map((ch) => (
            <div key={ch.name} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0", borderBottom: "1px solid #141414" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: ch.color, flexShrink: 0, display: "inline-block" }} />
              <span style={{ fontSize: "0.8rem", color: "#888", flex: 1 }}>{ch.name}</span>
              {ch.connected
                ? <span style={{ fontSize: "0.7rem", color: "#2a2a2a", fontVariantNumeric: "tabular-nums" }}>{ch.sent} sent</span>
                : <span style={{ fontSize: "0.68rem", color: "#222", border: "1px solid #1e1e1e", padding: "0.1rem 0.5rem", borderRadius: 4 }}>Connect</span>
              }
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #runit-bento { grid-template-columns: 1fr 1fr !important; }
          #runit-channels-card { grid-column: 1 / -1 !important; }
        }
      `}</style>

      {/* Chat */}
      <div style={{
        background: "#111", border: "1px solid #1a1a1a", borderRadius: 13,
        display: "flex", flexDirection: "column", height: 460
      }}>
        {/* Header */}
        <div style={{ padding: "0.875rem 1.1rem", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 24, height: 24, background: "#f0f0f0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={12} color="#0a0a0a" />
          </div>
          <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "#f0f0f0" }}>Runit AI</span>
          <span style={{ marginLeft: "auto", fontSize: "0.72rem", color: "#22c55e", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <span style={{ width: 5, height: 5, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} /> Online
          </span>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1.1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
              <div style={{
                background: msg.role === "user" ? "#1a1a1a" : "#161616",
                border: `1px solid ${msg.role === "user" ? "#222" : "#1a1a1a"}`,
                color: msg.role === "user" ? "#f0f0f0" : "#bbb",
                padding: "0.6rem 0.9rem", borderRadius: msg.role === "user" ? "11px 11px 3px 11px" : "11px 11px 11px 3px",
                fontSize: "0.855rem", maxWidth: "78%", lineHeight: 1.55
              }}>
                {msg.text}
              </div>
            </div>
          ))}

          {messages.length === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "0.25rem" }}>
              <p style={{ fontSize: "0.72rem", color: "#333", marginBottom: "0.25rem" }}>Try:</p>
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => setInput(s)} style={{
                  background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 8,
                  padding: "0.5rem 0.8rem", fontSize: "0.78rem", color: "#555",
                  cursor: "pointer", textAlign: "left", transition: "border-color 0.1s"
                }}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div style={{ display: "flex", gap: 4, padding: "0.25rem 0" }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 6, height: 6, background: "#333", borderRadius: "50%",
                  animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`
                }} />
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{ padding: "0.875rem 1.1rem", borderTop: "1px solid #1a1a1a", display: "flex", gap: "0.6rem", alignItems: "flex-end" }}>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
            placeholder="What do you want to automate?"
            rows={1}
            style={{
              flex: 1, padding: "0.65rem 0.875rem", background: "#0d0d0d",
              border: "1px solid #1a1a1a", borderRadius: 8, fontSize: "0.855rem",
              outline: "none", color: "#f0f0f0", resize: "none",
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5
            }}
          />
          <button onClick={handleSend} disabled={loading || !input.trim()} style={{
            background: input.trim() ? "#f0f0f0" : "#1a1a1a", color: input.trim() ? "#0a0a0a" : "#333",
            border: "none", borderRadius: 8, padding: "0.65rem 0.875rem",
            cursor: input.trim() ? "pointer" : "default",
            display: "flex", alignItems: "center", transition: "all 0.15s"
          }}>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
