"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";

// Real brand SVG icons
const GmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
    <path d="M0 5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548V24H1.636A1.636 1.636 0 010 22.364V5.457z" fill="#34A853"/>
    <path d="M18.545 4.64L12 9.548 5.455 4.64l1.528-1.147C8.601 2.28 10.846 2 12 2c1.154 0 3.399.28 5.017 1.493L18.545 4.64z" fill="#FBBC05"/>
    <path d="M24 5.457v16.907c0 .904-.732 1.636-1.636 1.636H12V9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#4285F4"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" fill="#2AABEE"/>
  </svg>
);

const SMSIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#1a1a1a"/>
    <path d="M4 6h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" fill="#555"/>
    <path d="M4 6l8 6 8-6" stroke="#888" strokeWidth="1.5" fill="none"/>
  </svg>
);

const ZoomIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#2D8CFF"/>
    <path d="M4 8.5a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7zm13 1.5l3-2v7l-3-2V10z" fill="#fff"/>
  </svg>
);

const CHANNEL_CONFIGS: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  Gmail: { icon: <GmailIcon />, color: "#EA4335", label: "Gmail" },
  WhatsApp: { icon: <WhatsAppIcon />, color: "#25D366", label: "WhatsApp" },
  Telegram: { icon: <TelegramIcon />, color: "#2AABEE", label: "Telegram" },
  SMS: { icon: <SMSIcon />, color: "#888888", label: "SMS" },
  Zoom: { icon: <ZoomIcon />, color: "#2D8CFF", label: "Zoom" },
};

const DEMO_FLOWS = [
  {
    channel: "WhatsApp",
    trigger: "Send appointment reminders to my clients every morning at 8am via WhatsApp",
    reply: "Done. I'll send WhatsApp reminders to your 24 contacts every day at 8:00 AM. Activating now.",
    automation: { name: "Morning appointment reminders", schedule: "Daily · 8:00 AM", contacts: 24 },
  },
  {
    channel: "Gmail",
    trigger: "Email my customers a weekly sales summary every Monday",
    reply: "Got it. A weekly sales summary will go out to your list every Monday at 9:00 AM via Gmail. Shall I activate?",
    automation: { name: "Weekly sales summary", schedule: "Mondays · 9:00 AM", contacts: 18 },
  },
  {
    channel: "Telegram",
    trigger: "Remind all contacts about tomorrow's event via Telegram",
    reply: "On it. I'll send a Telegram reminder to all 31 contacts in 24 hours before the event.",
    automation: { name: "Event reminder blast", schedule: "24h before event", contacts: 31 },
  },
  {
    channel: "Zoom",
    trigger: "Schedule a Zoom call with a client and send them the link",
    reply: "Link generated. I'll send the Zoom invite to your client now and add the event to your calendar.",
    automation: { name: "Client Zoom invite", schedule: "On trigger", contacts: 1 },
  },
];

function LiveDemo() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [stage, setStage] = useState<"idle" | "typing" | "replied" | "done">("idle");
  const [displayedReply, setDisplayedReply] = useState("");

  const flow = DEMO_FLOWS[activeFlow];
  const config = CHANNEL_CONFIGS[flow.channel];

  function runFlow(idx: number) {
    setActiveFlow(idx);
    setStage("typing");
    setDisplayedReply("");
    setTimeout(() => {
      setStage("replied");
      const reply = DEMO_FLOWS[idx].reply;
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayedReply(reply.slice(0, i));
        if (i >= reply.length) {
          clearInterval(interval);
          setTimeout(() => setStage("done"), 400);
        }
      }, 18);
    }, 900);
  }

  useEffect(() => { runFlow(0); }, []);

  return (
    <div style={{ background: "#111", border: "1px solid #222", borderRadius: 16, overflow: "hidden", maxWidth: 560, margin: "0 auto" }}>
      {/* Channel tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #1a1a1a", padding: "0.75rem 1rem", gap: "0.5rem", overflowX: "auto" }}>
        {DEMO_FLOWS.map((f, i) => {
          const c = CHANNEL_CONFIGS[f.channel];
          return (
            <button key={i} onClick={() => runFlow(i)} style={{
              display: "flex", alignItems: "center", gap: "0.4rem",
              padding: "0.35rem 0.75rem", borderRadius: 8, border: "none", cursor: "pointer",
              background: activeFlow === i ? "#1a1a1a" : "transparent",
              color: activeFlow === i ? c.color : "#555",
              fontSize: "0.78rem", fontWeight: 500, whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}>
              {c.icon} {c.label}
            </button>
          );
        })}
      </div>

      {/* Chat */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.875rem", minHeight: 200 }}>
        {/* User message */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            background: "#1a1a1a", color: "#f0f0f0", padding: "0.6rem 0.95rem",
            borderRadius: "12px 12px 3px 12px", fontSize: "0.85rem", maxWidth: "80%", lineHeight: 1.5
          }}>
            {flow.trigger}
          </div>
        </div>

        {/* AI reply */}
        {(stage === "replied" || stage === "done") && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
            <div style={{
              width: 26, height: 26, background: "#1a1a1a", borderRadius: 7, border: "1px solid #2a2a2a",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              <Zap size={12} color="#f0f0f0" />
            </div>
            <div style={{
              background: "#161616", border: "1px solid #222", color: "#d0d0d0",
              padding: "0.6rem 0.95rem", borderRadius: "12px 12px 12px 3px",
              fontSize: "0.85rem", maxWidth: "80%", lineHeight: 1.5
            }}>
              {displayedReply}
              {stage === "replied" && <span style={{ opacity: 0.5 }}>▌</span>}
            </div>
          </div>
        )}

        {stage === "typing" && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{
              width: 26, height: 26, background: "#1a1a1a", borderRadius: 7, border: "1px solid #2a2a2a",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Zap size={12} color="#f0f0f0" />
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 6, height: 6, background: "#444", borderRadius: "50%",
                  animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`
                }} />
              ))}
            </div>
          </div>
        )}

        {/* Result card */}
        {stage === "done" && (
          <div style={{
            background: "#0d0d0d", border: `1px solid ${config.color}33`,
            borderRadius: 10, padding: "0.875rem 1rem",
            display: "flex", alignItems: "center", gap: "0.875rem"
          }}>
            <div style={{
              width: 36, height: 36, background: `${config.color}15`,
              borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              {config.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#f0f0f0", marginBottom: 2 }}>
                {flow.automation.name}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#666" }}>
                {flow.automation.schedule} · {flow.automation.contacts} contacts
              </div>
            </div>
            <div style={{
              fontSize: "0.7rem", fontWeight: 600, color: config.color,
              background: `${config.color}18`, padding: "0.2rem 0.6rem", borderRadius: 999
            }}>
              Live
            </div>
          </div>
        )}
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

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#f0f0f0" }}>
      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.1rem 2rem", borderBottom: "1px solid #161616",
        position: "sticky", top: 0, background: "#0a0a0a", zIndex: 50
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 28, height: 28, background: "#f0f0f0", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={14} color="#0a0a0a" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "1rem", color: "#f0f0f0", letterSpacing: "-0.02em" }}>Runit</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href="/login" style={{ color: "#666", textDecoration: "none", fontSize: "0.875rem" }}>Login</Link>
          <Link href="/signup" style={{
            background: "#f0f0f0", color: "#0a0a0a", padding: "0.45rem 1.1rem",
            borderRadius: 8, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600
          }}>Get started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "6rem 2rem 5rem", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          background: "#111", border: "1px solid #222", color: "#888",
          padding: "0.3rem 0.875rem", borderRadius: 999, fontSize: "0.75rem",
          fontWeight: 500, marginBottom: "2rem", letterSpacing: "0.03em"
        }}>
          <span style={{ width: 5, height: 5, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
          Built for African SMEs
        </div>

        <h1 style={{
          fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 700,
          color: "#f0f0f0", lineHeight: 1.1, marginBottom: "1.5rem",
          letterSpacing: "-0.03em"
        }}>
          Business automation.<br />
          <span style={{ color: "#444" }}>Just say what you need.</span>
        </h1>

        <p style={{
          fontSize: "1.05rem", color: "#666", marginBottom: "2.5rem",
          lineHeight: 1.75, maxWidth: 480, margin: "0 auto 2.5rem"
        }}>
          No workflows to configure. No drag and drop. Type what you want done
          and Runit sets it up — WhatsApp, Gmail, Telegram, SMS, Zoom.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4.5rem" }}>
          <Link href="/signup" style={{
            background: "#f0f0f0", color: "#0a0a0a", padding: "0.8rem 1.75rem",
            borderRadius: 9, textDecoration: "none", fontWeight: 600,
            fontSize: "0.925rem", display: "inline-flex", alignItems: "center", gap: "0.5rem"
          }}>
            Try it free <ArrowRight size={15} />
          </Link>
          <Link href="#demo" style={{
            background: "transparent", color: "#888", padding: "0.8rem 1.75rem",
            borderRadius: 9, textDecoration: "none", fontWeight: 500,
            fontSize: "0.925rem", border: "1px solid #222"
          }}>
            See demo
          </Link>
        </div>

        {/* Live demo */}
        <div id="demo">
          <p style={{ fontSize: "0.75rem", color: "#444", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Live interactive demo — click any channel
          </p>
          <LiveDemo />
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "5rem 2rem", borderTop: "1px solid #161616" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", textAlign: "center" }}>How it works</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#f0f0f0", marginBottom: "3.5rem", textAlign: "center", letterSpacing: "-0.02em" }}>
            Three steps. That's it.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { num: "01", title: "Describe it", body: "Tell Runit what you want in plain English. No forms, no settings screens." },
              { num: "02", title: "Confirm it", body: "Runit shows you exactly what it understood and what it'll do. One tap to approve." },
              { num: "03", title: "It runs", body: "Your automation goes live. Runit handles the messages, timing, and delivery." },
            ].map((s) => (
              <div key={s.num} style={{ padding: "1.75rem", background: "#111", border: "1px solid #1a1a1a", borderRadius: 14 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#333", marginBottom: "1rem", letterSpacing: "0.05em" }}>{s.num}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section style={{ padding: "5rem 2rem", borderTop: "1px solid #161616" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", textAlign: "center" }}>Channels</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#f0f0f0", marginBottom: "3rem", textAlign: "center", letterSpacing: "-0.02em" }}>
            Every channel your customers use
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { channel: "Gmail", desc: "Automated emails via your Gmail account." },
              { channel: "WhatsApp", desc: "Messages straight to your customers' phones." },
              { channel: "Telegram", desc: "Free, instant, and global. Zero cost per message." },
              { channel: "SMS", desc: "Reach anyone, even without a smartphone." },
              { channel: "Zoom", desc: "Auto-generate and send meeting links." },
            ].map(({ channel, desc }) => {
              const c = CHANNEL_CONFIGS[channel];
              return (
                <div key={channel} style={{
                  padding: "1.25rem", background: "#111", border: "1px solid #1a1a1a",
                  borderRadius: 12, display: "flex", flexDirection: "column", gap: "0.875rem"
                }}>
                  <div style={{
                    width: 38, height: 38, background: `${c.color}15`,
                    borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#f0f0f0", fontSize: "0.9rem", marginBottom: "0.3rem" }}>{c.label}</div>
                    <div style={{ color: "#555", fontSize: "0.82rem", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "5rem 2rem", borderTop: "1px solid #161616" }}>
        <div style={{ maxWidth: 420, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Pricing</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#f0f0f0", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
            One plan, everything in.
          </h2>
          <div style={{ background: "#111", border: "1px solid #222", borderRadius: 16, padding: "2.5rem" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#444", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>PRO</div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.2rem", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "2.75rem", fontWeight: 700, color: "#f0f0f0", letterSpacing: "-0.03em" }}>₦5,000</span>
              <span style={{ color: "#444", fontSize: "0.875rem" }}>/month</span>
            </div>
            <p style={{ color: "#555", fontSize: "0.85rem", marginBottom: "2rem" }}>Cancel anytime. Pay in Naira via Paystack.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem", textAlign: "left" }}>
              {["Unlimited automations", "Gmail, WhatsApp, Telegram, SMS, Zoom", "Up to 1,000 contacts", "AI-powered setup", "Priority support"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "#aaa" }}>
                  <span style={{ color: "#f0f0f0", fontSize: "0.7rem" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
            <Link href="/signup" style={{
              display: "block", background: "#f0f0f0", color: "#0a0a0a",
              padding: "0.85rem", borderRadius: 9, textDecoration: "none",
              fontWeight: 600, textAlign: "center", fontSize: "0.9rem"
            }}>
              Start free trial
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #161616", padding: "2rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
          <div style={{ width: 22, height: 22, background: "#f0f0f0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={11} color="#0a0a0a" />
          </div>
          <span style={{ fontWeight: 600, color: "#f0f0f0", fontSize: "0.875rem", letterSpacing: "-0.01em" }}>Runit</span>
        </div>
        <p style={{ color: "#333", fontSize: "0.8rem" }}>A Black Sheep Co. product · Built for Africa</p>
      </footer>
    </div>
  );
}
