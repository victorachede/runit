"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Check } from "lucide-react";

// ─── Brand SVG icons ──────────────────────────────────────────────────────────
const GmailIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
    <path d="M0 5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548V24H1.636A1.636 1.636 0 010 22.364V5.457z" fill="#34A853"/>
    <path d="M18.545 4.64L12 9.548 5.455 4.64l1.528-1.147C8.601 2.28 10.846 2 12 2c1.154 0 3.399.28 5.017 1.493L18.545 4.64z" fill="#FBBC05"/>
    <path d="M24 5.457v16.907c0 .904-.732 1.636-1.636 1.636H12V9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#4285F4"/>
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
  </svg>
);

const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" fill="#2AABEE"/>
  </svg>
);

const SMSIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" fill="#6B7280"/>
    <path d="M7 9h10M7 13h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ZoomIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#2D8CFF"/>
    <path d="M6 11a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V11zm14 2.5l6-4v9l-6-4v-1z" fill="#fff"/>
  </svg>
);

// ─── Demo flows ────────────────────────────────────────────────────────────────
const FLOWS = [
  {
    channel: "WhatsApp",
    color: "#25D366",
    icon: <WhatsAppIcon size={15} />,
    prompt: "Send appointment reminders to my clients every morning at 8am",
    reply: "Done. WhatsApp reminders will go out to your 24 contacts every day at 8:00 AM. Activated.",
    card: { name: "Morning reminders", schedule: "Daily · 8:00 AM", contacts: 24 },
  },
  {
    channel: "Gmail",
    color: "#EA4335",
    icon: <GmailIcon size={15} />,
    prompt: "Email my customers a weekly sales summary every Monday",
    reply: "Set up. A sales summary email goes to your list every Monday at 9:00 AM via Gmail.",
    card: { name: "Weekly sales summary", schedule: "Mondays · 9:00 AM", contacts: 31 },
  },
  {
    channel: "Telegram",
    color: "#2AABEE",
    icon: <TelegramIcon size={15} />,
    prompt: "Blast my Telegram group before every event — 2 hours ahead",
    reply: "Ready. Your Telegram group gets a reminder 2 hours before each event automatically.",
    card: { name: "Event blast", schedule: "2h before event", contacts: 87 },
  },
  {
    channel: "SMS",
    color: "#8B8B8B",
    icon: <SMSIcon size={15} />,
    prompt: "Send payment confirmation SMS when a client pays",
    reply: "On it. Every payment triggers an instant SMS confirmation to the client.",
    card: { name: "Payment confirmation", schedule: "On trigger", contacts: "all" },
  },
];

function Demo() {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"idle" | "thinking" | "typing" | "done">("idle");
  const [typed, setTyped] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  function run(idx: number) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(idx);
    setPhase("thinking");
    setTyped("");

    timerRef.current = setTimeout(() => {
      setPhase("typing");
      const reply = FLOWS[idx].reply;
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTyped(reply.slice(0, i));
        if (i >= reply.length) {
          clearInterval(interval);
          timerRef.current = setTimeout(() => setPhase("done"), 300);
        }
      }, 16);
    }, 750);
  }

  useEffect(() => { run(0); return () => { if (timerRef.current) clearTimeout(timerRef.current); }; }, []);

  const flow = FLOWS[active];

  return (
    <div style={{
      background: "linear-gradient(180deg, #141414 0%, #0f0f0f 100%)",
      border: "1px solid #1f1f1f",
      borderRadius: 20,
      overflow: "hidden",
      maxWidth: 580,
      margin: "0 auto",
      boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03) inset",
    }}>
      {/* Window chrome */}
      <div style={{ padding: "0.875rem 1.1rem", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: "0.72rem", color: "#333", letterSpacing: "0.03em" }}>
          runit.app · dashboard
        </div>
        <div style={{ width: 42 }} />
      </div>

      {/* Channel tabs */}
      <div style={{ display: "flex", padding: "0.625rem 0.875rem", gap: "0.375rem", borderBottom: "1px solid #161616", overflowX: "auto" }}>
        {FLOWS.map((f, i) => (
          <button key={i} onClick={() => run(i)} style={{
            display: "flex", alignItems: "center", gap: "0.4rem",
            padding: "0.3rem 0.7rem", borderRadius: 7,
            border: `1px solid ${active === i ? f.color + "40" : "transparent"}`,
            background: active === i ? f.color + "12" : "transparent",
            color: active === i ? f.color : "#3a3a3a",
            fontSize: "0.75rem", fontWeight: 500,
            cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap",
          }}>
            {f.icon} {f.channel}
          </button>
        ))}
      </div>

      {/* Chat area */}
      <div style={{ padding: "1.1rem", minHeight: 220, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {/* User bubble */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            background: "#1c1c1c", border: "1px solid #252525",
            color: "#d4d4d4", padding: "0.6rem 0.9rem",
            borderRadius: "12px 12px 3px 12px",
            fontSize: "0.835rem", maxWidth: "82%", lineHeight: 1.55
          }}>
            {flow.prompt}
          </div>
        </div>

        {/* Thinking */}
        {phase === "thinking" && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{ width: 24, height: 24, background: "#161616", border: "1px solid #222", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Zap size={11} color="#555" />
            </div>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 5, height: 5, borderRadius: "50%", background: "#2a2a2a",
                  animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`
                }} />
              ))}
            </div>
          </div>
        )}

        {/* AI reply */}
        {(phase === "typing" || phase === "done") && (
          <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
            <div style={{ width: 24, height: 24, background: "#161616", border: "1px solid #222", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
              <Zap size={11} color="#888" />
            </div>
            <div style={{
              background: "#141414", border: "1px solid #1e1e1e",
              color: "#aaa", padding: "0.6rem 0.9rem",
              borderRadius: "12px 12px 12px 3px",
              fontSize: "0.835rem", maxWidth: "82%", lineHeight: 1.55
            }}>
              {typed}{phase === "typing" && <span style={{ opacity: 0.4 }}>▌</span>}
            </div>
          </div>
        )}

        {/* Live card */}
        {phase === "done" && (
          <div style={{
            marginTop: 4,
            background: "#0d0d0d",
            border: `1px solid ${flow.color}25`,
            borderRadius: 11,
            padding: "0.8rem 1rem",
            display: "flex", alignItems: "center", gap: "0.875rem"
          }}>
            <div style={{ width: 34, height: 34, background: flow.color + "15", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {React.cloneElement(flow.icon as React.ReactElement, { size: 17 } as any)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#e0e0e0", marginBottom: 2 }}>{flow.card.name}</div>
              <div style={{ fontSize: "0.73rem", color: "#444" }}>{flow.card.schedule} · {flow.card.contacts} contacts</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
              <span style={{ fontSize: "0.7rem", color: "#22c55e", fontWeight: 600 }}>Live</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

// ─── Landing page ─────────────────────────────────────────────────────────────
export default function Landing() {
  return (
    <div style={{ background: "#0a0a0a", color: "#e0e0e0", minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2rem", height: 56,
        background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #161616",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 26, height: 26, background: "#e0e0e0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={13} color="#0a0a0a" strokeWidth={2.5} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.025em", color: "#e0e0e0" }}>Runit</span>
        </div>
        <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
          <Link href="/login" style={{ color: "#555", textDecoration: "none", fontSize: "0.85rem", padding: "0.4rem 0.875rem" }}>Log in</Link>
          <Link href="/signup" style={{
            background: "#e0e0e0", color: "#0a0a0a", textDecoration: "none",
            fontSize: "0.85rem", fontWeight: 600, padding: "0.4rem 1rem", borderRadius: 7,
            letterSpacing: "-0.01em"
          }}>Get started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "7rem 1.5rem 4rem", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "#111", border: "1px solid #1e1e1e",
          padding: "0.3rem 0.75rem", borderRadius: 999,
          fontSize: "0.73rem", color: "#555", marginBottom: "2.25rem",
          letterSpacing: "0.02em"
        }}>
          <div style={{ width: 5, height: 5, background: "#22c55e", borderRadius: "50%", boxShadow: "0 0 6px #22c55e55" }} />
          Built for African SMEs · WhatsApp, Gmail, Telegram & more
        </div>

        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4.25rem)", fontWeight: 700,
          lineHeight: 1.08, letterSpacing: "-0.04em",
          color: "#e8e8e8", marginBottom: "1.4rem"
        }}>
          Automate your business.<br />
          <span style={{
            background: "linear-gradient(135deg, #555 0%, #333 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            Just describe it.
          </span>
        </h1>

        <p style={{
          fontSize: "1.05rem", color: "#555", lineHeight: 1.75,
          maxWidth: 460, margin: "0 auto 2.75rem", letterSpacing: "-0.01em"
        }}>
          No forms. No workflows to configure. Tell Runit what you need
          in plain English and it handles the rest — reminders, reports, confirmations.
        </p>

        <div style={{ display: "flex", gap: "0.625rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "5rem" }}>
          <Link href="/signup" style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            background: "#e0e0e0", color: "#0a0a0a",
            padding: "0.75rem 1.5rem", borderRadius: 9,
            textDecoration: "none", fontWeight: 600,
            fontSize: "0.9rem", letterSpacing: "-0.01em",
            boxShadow: "0 1px 2px rgba(0,0,0,0.4)"
          }}>
            Start free <ArrowRight size={14} />
          </Link>
          <Link href="#demo" style={{
            display: "inline-flex", alignItems: "center",
            background: "transparent", color: "#444",
            padding: "0.75rem 1.5rem", borderRadius: 9,
            textDecoration: "none", fontWeight: 500,
            fontSize: "0.9rem", border: "1px solid #1e1e1e"
          }}>
            See how it works
          </Link>
        </div>

        {/* Channel logos row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "4rem", opacity: 0.5 }}>
          <GmailIcon size={22} />
          <WhatsAppIcon size={22} />
          <TelegramIcon size={22} />
          <SMSIcon size={22} />
          <ZoomIcon size={22} />
        </div>

        {/* Demo */}
        <div id="demo">
          <p style={{ fontSize: "0.7rem", color: "#2a2a2a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Interactive demo — click a channel
          </p>
          <Demo />
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1e1e1e 30%, #1e1e1e 70%, transparent)", margin: "3rem 0" }} />

      {/* How it works */}
      <section style={{ padding: "4rem 1.5rem", maxWidth: 840, margin: "0 auto" }}>
        <p style={{ fontSize: "0.7rem", color: "#333", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.875rem" }}>Process</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e0e0e0", marginBottom: "3rem" }}>
          Three steps. That's it.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1px", background: "#161616", borderRadius: 16, overflow: "hidden", border: "1px solid #161616" }}>
          {[
            { n: "01", title: "Describe it", body: "Type what you want in plain English. No settings. No forms." },
            { n: "02", title: "Confirm it", body: "Runit shows you exactly what it understood. One tap to approve." },
            { n: "03", title: "It runs", body: "Your automation goes live. Messages sent, on time, every time." },
          ].map(s => (
            <div key={s.n} style={{ background: "#0a0a0a", padding: "2rem 1.75rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#252525", marginBottom: "1.25rem", letterSpacing: "0.05em" }}>{s.n}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#c8c8c8", marginBottom: "0.6rem", letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p style={{ color: "#444", fontSize: "0.875rem", lineHeight: 1.65 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section style={{ padding: "4rem 1.5rem", maxWidth: 840, margin: "0 auto" }}>
        <p style={{ fontSize: "0.7rem", color: "#333", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.875rem" }}>Channels</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e0e0e0", marginBottom: "2.5rem" }}>
          Every channel your customers use.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "0.75rem" }}>
          {[
            { icon: <WhatsAppIcon size={20} />, color: "#25D366", name: "WhatsApp", desc: "Direct to phone. No app needed on your end." },
            { icon: <GmailIcon size={20} />, color: "#EA4335", name: "Gmail", desc: "Send from your real Gmail. Lands in inbox, not spam." },
            { icon: <TelegramIcon size={20} />, color: "#2AABEE", name: "Telegram", desc: "Free per message. Great for groups and broadcasts." },
            { icon: <SMSIcon size={20} />, color: "#8B8B8B", name: "SMS", desc: "Works on any phone. No internet required." },
            { icon: <ZoomIcon size={20} />, color: "#2D8CFF", name: "Zoom", desc: "Generate links and send invites automatically." },
          ].map(ch => (
            <div key={ch.name} style={{
              background: "#0f0f0f", border: "1px solid #181818", borderRadius: 13,
              padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.875rem",
              transition: "border-color 0.15s"
            }}>
              <div style={{ width: 40, height: 40, background: ch.color + "12", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {ch.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#d0d0d0", marginBottom: "0.3rem", letterSpacing: "-0.01em" }}>{ch.name}</div>
                <div style={{ fontSize: "0.8rem", color: "#404040", lineHeight: 1.6 }}>{ch.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "4rem 1.5rem 6rem", maxWidth: 440, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", color: "#333", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.875rem" }}>Pricing</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e0e0e0", marginBottom: "2.5rem" }}>
          One plan. Everything in.
        </h2>
        <div style={{
          background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 18, padding: "2.25rem",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset"
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#333", letterSpacing: "0.12em", marginBottom: "0.875rem" }}>PRO</div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.25rem", marginBottom: "0.4rem" }}>
            <span style={{ fontSize: "3rem", fontWeight: 700, color: "#e0e0e0", letterSpacing: "-0.04em" }}>₦5,000</span>
            <span style={{ color: "#333", fontSize: "0.875rem" }}>/month</span>
          </div>
          <p style={{ color: "#333", fontSize: "0.82rem", marginBottom: "2rem" }}>Pay in Naira via Paystack. Cancel anytime.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem", textAlign: "left" }}>
            {[
              "Unlimited automations",
              "Gmail, WhatsApp, Telegram, SMS, Zoom",
              "Up to 1,000 contacts",
              "AI-powered natural language setup",
              "Priority support",
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.875rem", color: "#666" }}>
                <Check size={14} color="#333" style={{ marginTop: 2, flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
          <Link href="/signup" style={{
            display: "block", background: "#e0e0e0", color: "#0a0a0a",
            padding: "0.8rem", borderRadius: 9, textDecoration: "none",
            fontWeight: 600, fontSize: "0.9rem", letterSpacing: "-0.01em"
          }}>
            Start free trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #141414", padding: "1.75rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <div style={{ width: 20, height: 20, background: "#e0e0e0", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={10} color="#0a0a0a" strokeWidth={2.5} />
          </div>
          <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#e0e0e0", letterSpacing: "-0.02em" }}>Runit</span>
        </div>
        <p style={{ color: "#252525", fontSize: "0.75rem" }}>A Black Sheep Co. product · Built for Africa</p>
      </footer>
    </div>
  );
}
