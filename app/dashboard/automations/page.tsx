"use client";
import { useState } from "react";
import { Bot, ToggleLeft, ToggleRight, Trash2, Plus } from "lucide-react";
import Link from "next/link";

const GmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
  </svg>
);
const TelegramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" fill="#2AABEE"/>
  </svg>
);
const SMSIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" fill="#888"/>
  </svg>
);

import React from "react";

const CHANNELS: Record<string, { icon: React.ReactNode; color: string }> = {
  Gmail:    { icon: <GmailIcon />,    color: "#EA4335" },
  WhatsApp: { icon: <WhatsAppIcon />, color: "#25D366" },
  Telegram: { icon: <TelegramIcon />, color: "#2AABEE" },
  SMS:      { icon: <SMSIcon />,      color: "#888888" },
};

const initial = [
  { id: 1, name: "Weekly sales summary", channel: "Gmail",    schedule: "Every Monday · 8:00 AM", active: true,  sent: 12 },
  { id: 2, name: "Appointment reminders", channel: "WhatsApp", schedule: "Daily · 9:00 AM",        active: true,  sent: 48 },
  { id: 3, name: "Payment confirmation",  channel: "Gmail",    schedule: "On trigger",              active: false, sent: 7  },
  { id: 4, name: "New month greetings",   channel: "Telegram", schedule: "1st of every month",     active: true,  sent: 3  },
];

export default function AutomationsPage() {
  const [automations, setAutomations] = useState(initial);

  const toggle = (id: number) => setAutomations(prev => prev.map(a => a.id === id ? { ...a, active: !a.active } : a));
  const remove = (id: number) => setAutomations(prev => prev.filter(a => a.id !== id));

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "2rem" }}>
        <div>
          <h1 className="heading-aw" style={{ fontSize: "1.25rem", color: "#f0f0f0", marginBottom: "0.2rem" }}>Automations</h1>
          <p style={{ color: "#444", fontSize: "0.85rem" }}>{automations.filter(a => a.active).length} running</p>
        </div>
        <Link href="/dashboard" style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          background: "#f0f0f0", color: "#0a0a0a", padding: "0.55rem 1rem",
          borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: "0.825rem"
        }}>
          <Plus size={13} /> New
        </Link>
      </div>

      {automations.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem", color: "#333" }}>
          <Bot size={36} style={{ margin: "0 auto 1rem", opacity: 0.3 }} />
          <p style={{ fontWeight: 500, color: "#555" }}>No automations yet</p>
          <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>Go to dashboard and describe what you want to automate.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {automations.map((a) => {
            const ch = CHANNELS[a.channel] || CHANNELS.SMS;
            return (
              <div key={a.id} style={{
                background: "#111", border: "1px solid #1a1a1a", borderRadius: 11,
                padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.875rem"
              }}>
                {/* Channel icon */}
                <div style={{
                  width: 36, height: 36, background: `${ch.color}12`,
                  borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  {ch.icon}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                    <span style={{ fontWeight: 600, color: "#f0f0f0", fontSize: "0.875rem" }}>{a.name}</span>
                    <span style={{
                      fontSize: "0.7rem", fontWeight: 500, color: ch.color,
                      background: `${ch.color}15`, padding: "0.1rem 0.5rem", borderRadius: 999
                    }}>{a.channel}</span>
                  </div>
                  <div style={{ fontSize: "0.775rem", color: "#444" }}>
                    {a.schedule} · {a.sent} sent
                  </div>
                </div>

                {/* Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.7rem", color: a.active ? "#22c55e" : "#333", fontWeight: 500, minWidth: 40 }}>
                    {a.active ? "Live" : "Off"}
                  </span>
                  <button onClick={() => toggle(a.id)} style={{ background: "none", border: "none", cursor: "pointer", color: a.active ? "#f0f0f0" : "#333", display: "flex" }}>
                    {a.active ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                  </button>
                  <button onClick={() => remove(a.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#2a2a2a", display: "flex", transition: "color 0.1s" }}
                    onMouseOver={e => (e.currentTarget.style.color = "#ef4444")}
                    onMouseOut={e => (e.currentTarget.style.color = "#2a2a2a")}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
