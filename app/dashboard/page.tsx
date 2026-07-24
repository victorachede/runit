"use client";
import { useState } from "react";
import { Send, Bot, Users, Zap } from "lucide-react";

const suggestions = [
  "Send appointment reminders to my clients every morning at 8am",
  "Email my customers a weekly sales summary every Monday",
  "Remind all contacts about tomorrow's event at 9am via SMS",
  "Schedule a Zoom call with a client and send them the link",
  "Send a payment confirmation SMS when a client pays",
];

const mockMessages = [
  { role: "ai", text: "Hi! I'm your Runit assistant. Describe any automation you want and I'll set it up instantly." }
];

export default function DashboardPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    const aiReply = { role: "ai", text: `Got it. Setting up: "${input}". I'll configure this automation and activate it shortly. Shall I proceed?` };
    setMessages((prev) => [...prev, userMsg, aiReply]);
    setInput("");
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>Dashboard</h1>
        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Describe what you want to automate and Runit handles the rest.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { icon: <Bot size={18} color="#2563eb" />, label: "Active automations", value: "3" },
          { icon: <Users size={18} color="#2563eb" />, label: "Total contacts", value: "24" },
          { icon: <Zap size={18} color="#2563eb" />, label: "Messages sent", value: "142" },
        ].map((stat, i) => (
          <div key={i} style={{
            background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <div style={{ width: 34, height: 34, background: "#eff6ff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {stat.icon}
              </div>
            </div>
            <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0f172a", lineHeight: 1 }}>{stat.value}</div>
            <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.25rem" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Chat */}
      <div style={{
        background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 14,
        display: "flex", flexDirection: "column", height: 480
      }}>
        <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 28, height: 28, background: "#2563eb", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Bot size={14} color="#fff" />
          </div>
          <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#0f172a" }}>Runit AI</span>
          <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "#22c55e", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <span style={{ width: 6, height: 6, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
            Online
          </span>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
              <div style={{
                background: msg.role === "user" ? "#2563eb" : "#f1f5f9",
                color: msg.role === "user" ? "#fff" : "#0f172a",
                padding: "0.65rem 1rem", borderRadius: 10, fontSize: "0.875rem",
                maxWidth: "75%", lineHeight: 1.55
              }}>
                {msg.text}
              </div>
            </div>
          ))}

          {messages.length === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
              <p style={{ fontSize: "0.78rem", color: "#94a3b8", marginBottom: "0.25rem" }}>Try asking:</p>
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => setInput(s)} style={{
                  background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8,
                  padding: "0.55rem 0.875rem", fontSize: "0.8rem", color: "#475569",
                  cursor: "pointer", textAlign: "left"
                }}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid #e2e8f0", display: "flex", gap: "0.75rem" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="What do you want to automate?"
            style={{
              flex: 1, padding: "0.7rem 1rem", border: "1px solid #e2e8f0",
              borderRadius: 9, fontSize: "0.9rem", outline: "none", background: "#f8fafc"
            }}
          />
          <button onClick={handleSend} style={{
            background: "#2563eb", color: "#fff", border: "none",
            borderRadius: 9, padding: "0.7rem 1rem", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "0.4rem", fontWeight: 500, fontSize: "0.875rem"
          }}>
            <Send size={15} /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
