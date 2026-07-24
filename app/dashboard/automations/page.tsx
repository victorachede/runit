"use client";
import { useState } from "react";
import { Bot, MessageSquare, Mail, Send, ToggleLeft, ToggleRight, Trash2, Plus } from "lucide-react";
import Link from "next/link";

const channelIcons: Record<string, React.ReactNode> = {
  SMS: <MessageSquare size={14} />,
  Email: <Mail size={14} />,
  Telegram: <Send size={14} />,
  WhatsApp: <MessageSquare size={14} />,
};

const channelColors: Record<string, string> = {
  SMS: "#f59e0b",
  Email: "#8b5cf6",
  Telegram: "#0ea5e9",
  WhatsApp: "#22c55e",
};

const initial = [
  { id: 1, name: "Weekly sales summary", channel: "Email", schedule: "Every Monday 8:00 AM", active: true, sent: 12 },
  { id: 2, name: "Appointment reminders", channel: "SMS", schedule: "Daily 9:00 AM", active: true, sent: 48 },
  { id: 3, name: "Payment confirmation", channel: "Email", schedule: "On trigger", active: false, sent: 7 },
  { id: 4, name: "New month greetings", channel: "WhatsApp", schedule: "1st of every month", active: true, sent: 3 },
];

export default function AutomationsPage() {
  const [automations, setAutomations] = useState(initial);

  const toggle = (id: number) => setAutomations((prev) => prev.map((a) => a.id === id ? { ...a, active: !a.active } : a));
  const remove = (id: number) => setAutomations((prev) => prev.filter((a) => a.id !== id));

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>Automations</h1>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>{automations.length} active automations running</p>
        </div>
        <Link href="/dashboard" style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          background: "#2563eb", color: "#fff", padding: "0.65rem 1.1rem",
          borderRadius: 9, textDecoration: "none", fontWeight: 500, fontSize: "0.875rem"
        }}>
          <Plus size={15} /> New automation
        </Link>
      </div>

      {automations.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem", color: "#94a3b8" }}>
          <Bot size={40} style={{ margin: "0 auto 1rem", opacity: 0.4 }} />
          <p style={{ fontWeight: 500 }}>No automations yet</p>
          <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>Head to the dashboard and describe what you want to automate.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {automations.map((a) => (
            <div key={a.id} style={{
              background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12,
              padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem"
            }}>
              <div style={{
                width: 40, height: 40, background: "#eff6ff", borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}>
                <Bot size={18} color="#2563eb" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                  <span style={{ fontWeight: 600, color: "#0f172a", fontSize: "0.9rem" }}>{a.name}</span>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "0.3rem",
                    background: `${channelColors[a.channel]}18`,
                    color: channelColors[a.channel],
                    padding: "0.15rem 0.6rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 500
                  }}>
                    {channelIcons[a.channel]} {a.channel}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem", color: "#94a3b8" }}>
                  <span>{a.schedule}</span>
                  <span>{a.sent} messages sent</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <button onClick={() => toggle(a.id)} style={{ background: "none", border: "none", cursor: "pointer", color: a.active ? "#2563eb" : "#94a3b8", display: "flex", alignItems: "center" }}>
                  {a.active ? <ToggleRight size={26} /> : <ToggleLeft size={26} />}
                </button>
                <span style={{ fontSize: "0.75rem", color: a.active ? "#22c55e" : "#94a3b8", fontWeight: 500, minWidth: 44 }}>
                  {a.active ? "Active" : "Paused"}
                </span>
                <button onClick={() => remove(a.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#ef4444", display: "flex", alignItems: "center" }}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
