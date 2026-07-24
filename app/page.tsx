"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, Zap, Menu, X } from "lucide-react";

// ─── Brand channel icons ──────────────────────────────────────────────────────
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
    <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" fill="#5a5a5a"/>
    <path d="M7 9h10M7 13h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ZoomIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#2D8CFF"/>
    <path d="M6 11a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V11zm14 2.5l6-4v9l-6-4v-1z" fill="#fff"/>
  </svg>
);

const RunitLogo = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.93)} viewBox="0 0 28 26" fill="none">
    <polygon points="1,1 27,1 14,25" fill="white" />
    <clipPath id="rl-main">
      <polygon points="1,1 27,1 14,25" />
    </clipPath>
    <g clipPath="url(#rl-main)" stroke="#000000" strokeWidth="1.25">
      <line x1="-4" y1="3"  x2="5"  y2="28" />
      <line x1="0"  y1="-1" x2="12" y2="28" />
      <line x1="5"  y1="-1" x2="19" y2="28" />
      <line x1="11" y1="-1" x2="26" y2="28" />
      <line x1="17" y1="-1" x2="32" y2="24" />
      <line x1="23" y1="-1" x2="32" y2="15" />
      <line x1="29" y1="-1" x2="32" y2="5"  />
    </g>
  </svg>
);

// ─── Demo flows ────────────────────────────────────────────────────────────────
const FLOWS = [
  {
    channel: "WhatsApp",
    color: "#25D366",
    icon: <WhatsAppIcon size={13} />,
    prompt: "Send appointment reminders to my clients every morning at 8am",
    reply: "Done. WhatsApp reminders will go out to your 24 contacts every day at 8:00 AM.",
    card: { name: "Morning reminders", schedule: "Daily · 8:00 AM", contacts: 24 },
  },
  {
    channel: "Gmail",
    color: "#EA4335",
    icon: <GmailIcon size={13} />,
    prompt: "Email my customers a weekly sales summary every Monday",
    reply: "Set up. A sales summary email goes to your list every Monday at 9:00 AM.",
    card: { name: "Weekly sales summary", schedule: "Mondays · 9:00 AM", contacts: 31 },
  },
  {
    channel: "Telegram",
    color: "#2AABEE",
    icon: <TelegramIcon size={13} />,
    prompt: "Blast my Telegram group before every event — 2 hours ahead",
    reply: "Ready. Your Telegram group gets a reminder 2 hours before each event automatically.",
    card: { name: "Event blast", schedule: "2h before event", contacts: 87 },
  },
  {
    channel: "SMS",
    color: "#888888",
    icon: <SMSIcon size={13} />,
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
      const iv = setInterval(() => {
        i++;
        setTyped(reply.slice(0, i));
        if (i >= reply.length) {
          clearInterval(iv);
          timerRef.current = setTimeout(() => setPhase("done"), 350);
        }
      }, 13);
    }, 650);
  }

  useEffect(() => {
    run(0);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const flow = FLOWS[active];

  return (
    <div style={{
      background: "#0a0a0a",
      border: "1px solid #1f1f1f",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
    }}>
      {/* Window chrome */}
      <div style={{
        padding: "0.625rem 1rem",
        borderBottom: "1px solid #161616",
        display: "flex", alignItems: "center", gap: "0.5rem",
        background: "#060606",
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#3a3a3a","#2e2e2e","#262626"].map(c => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: "0.68rem", color: "#282828", fontFamily: "monospace" }}>
          runit.app — dashboard
        </div>
        <div style={{ width: 40 }} />
      </div>

      {/* Sidebar + main */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{
          width: 180,
          borderRight: "1px solid #141414",
          padding: "0.875rem 0",
          background: "#060606",
          flexShrink: 0,
        }} className="demo-sidebar">
          <div style={{ padding: "0 0.75rem 0.625rem", marginBottom: "0.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: 18, height: 18, background: "#1a1a1a", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={9} color="#555" />
              </div>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#555" }}>Runit</span>
            </div>
          </div>

          {[
            { label: "Automations", dot: true },
            { label: "Contacts" },
            { label: "Analytics" },
            { label: "Settings" },
          ].map(({ label, dot }) => (
            <div key={label} style={{
              padding: "0.3rem 0.75rem",
              fontSize: "0.72rem", color: label === "Automations" ? "#888" : "#303030",
              display: "flex", alignItems: "center", gap: "0.4rem",
              background: label === "Automations" ? "#0f0f0f" : "transparent",
            }}>
              {dot && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 4px #22c55e66" }} />}
              {label}
            </div>
          ))}

          <div style={{ height: 1, background: "#111", margin: "0.625rem 0" }} />

          <div style={{ padding: "0 0.75rem", marginBottom: "0.25rem" }}>
            <p style={{ fontSize: "0.62rem", color: "#252525", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.375rem" }}>Channels</p>
          </div>
          {FLOWS.map((f, i) => (
            <button key={i} onClick={() => run(i)} style={{
              width: "100%", textAlign: "left",
              padding: "0.3rem 0.75rem",
              display: "flex", alignItems: "center", gap: "0.4rem",
              background: active === i ? "#0f0f0f" : "transparent",
              border: "none", cursor: "pointer",
              fontSize: "0.72rem",
              color: active === i ? "#666" : "#282828",
              fontFamily: "inherit",
              transition: "color 0.1s",
            }}>
              <div style={{ opacity: active === i ? 1 : 0.4 }}>{f.icon}</div>
              {f.channel}
            </button>
          ))}
        </div>

        {/* Main area */}
        <div style={{ flex: 1, padding: "1rem", minHeight: 220, display: "flex", flexDirection: "column", gap: "0.625rem", overflow: "hidden" }}>
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#444" }}>New automation</p>
            <div style={{ display: "flex", gap: "0.375rem" }}>
              {["●","●","●"].map((d,i) => <span key={i} style={{ fontSize: "0.5rem", color: "#1f1f1f" }}>{d}</span>)}
            </div>
          </div>

          {/* User bubble */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{
              background: "#141414", border: "1px solid #1e1e1e",
              color: "#aaaaaa", padding: "0.5rem 0.8rem",
              borderRadius: "10px 10px 2px 10px",
              fontSize: "0.77rem", maxWidth: "85%", lineHeight: 1.6,
            }}>
              {flow.prompt}
            </div>
          </div>

          {/* Thinking */}
          {phase === "thinking" && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: 20, height: 20, background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Zap size={9} color="#333" />
              </div>
              <div style={{ display: "flex", gap: 3 }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{ width: 3.5, height: 3.5, borderRadius: "50%", background: "#222", animation: `pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          )}

          {/* Reply */}
          {(phase === "typing" || phase === "done") && (
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <div style={{ width: 20, height: 20, background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <Zap size={9} color="#555" />
              </div>
              <div style={{
                background: "#0d0d0d", border: "1px solid #191919",
                color: "#666", padding: "0.5rem 0.8rem",
                borderRadius: "10px 10px 10px 2px",
                fontSize: "0.77rem", maxWidth: "85%", lineHeight: 1.6,
              }}>
                {typed}{phase === "typing" && <span style={{ opacity: 0.3 }}>▌</span>}
              </div>
            </div>
          )}

          {/* Live card */}
          {phase === "done" && (
            <div style={{
              background: "#0a0a0a", border: "1px solid #1a1a1a",
              borderRadius: 8, padding: "0.625rem 0.875rem",
              display: "flex", alignItems: "center", gap: "0.75rem",
              marginTop: 2,
            }}>
              <div style={{ width: 28, height: 28, background: "#111", border: "1px solid #1a1a1a", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {React.cloneElement(flow.icon as React.ReactElement, { size: 14 } as Record<string,unknown>)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666", marginBottom: 1 }}>{flow.card.name}</div>
                <div style={{ fontSize: "0.67rem", color: "#2a2a2a" }}>{flow.card.schedule} · {flow.card.contacts} contacts</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: "0.65rem", color: "#22c55e", fontWeight: 500 }}>Live</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 52,
        display: "flex", alignItems: "center",
        padding: "0 clamp(1.5rem, 4vw, 3rem)",
        background: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "background 0.2s, border-color 0.2s, backdrop-filter 0.2s",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", flexShrink: 0 }}>
          <RunitLogo size={22} />
          <span style={{ fontWeight: 700, fontSize: "0.9rem", letterSpacing: "-0.03em", color: "#fff" }}>Runit</span>
        </Link>

        {/* Centre links */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: "0" }} className="nav-centre">
          {[
            { label: "Product", href: "#" },
            { label: "Pricing", href: "#pricing" },
            { label: "Changelog", href: "#" },
            { label: "Customers", href: "#" },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: "#888", textDecoration: "none",
              fontSize: "0.83rem", fontWeight: 400,
              padding: "0.35rem 0.875rem",
              transition: "color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#888")}
            >{label}</a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0" }} className="nav-right">
          {/* Divider */}
          <div style={{ width: 1, height: 16, background: "#1f1f1f", margin: "0 1rem 0 0" }} />
          <Link href="/login" style={{
            color: "#888", textDecoration: "none",
            fontSize: "0.83rem", fontWeight: 400,
            padding: "0.35rem 0.875rem",
            transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#888")}
          >Log in</Link>
          <Link href="/signup" style={{
            color: "#fff", textDecoration: "none",
            fontSize: "0.83rem", fontWeight: 500,
            padding: "0.35rem 0.875rem",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 6,
            transition: "border-color 0.15s, color 0.15s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
            }}
          >Sign up</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(v => !v)} className="nav-mobile" style={{
          background: "none", border: "none", cursor: "pointer",
          color: "#888", padding: "0.5rem", display: "flex",
        }}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer" style={{
          position: "fixed", inset: 0, top: 52, background: "#000",
          zIndex: 199, padding: "1.5rem clamp(1.5rem,4vw,3rem)",
          display: "flex", flexDirection: "column",
        }}>
          {["Product","Pricing","Changelog","Customers"].map(l => (
            <a key={l} href="#" onClick={() => setOpen(false)} style={{
              color: "#888", textDecoration: "none", fontSize: "1.1rem",
              padding: "0.875rem 0", borderBottom: "1px solid #111",
            }}>{l}</a>
          ))}
          <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <Link href="/login" onClick={() => setOpen(false)} style={{
              color: "#888", textDecoration: "none", fontSize: "0.9rem",
              padding: "0.75rem 1rem", border: "1px solid #1a1a1a",
              borderRadius: 7, textAlign: "center",
            }}>Log in</Link>
            <Link href="/signup" onClick={() => setOpen(false)} style={{
              color: "#fff", textDecoration: "none", fontSize: "0.9rem",
              padding: "0.75rem 1rem",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 7, textAlign: "center", fontWeight: 500,
            }}>Sign up</Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-centre { display: none; }
        .nav-right   { display: none; }
        .nav-mobile  { display: flex;  }
        .nav-drawer  { display: flex;  }
        @media (min-width: 768px) {
          .nav-centre { display: flex; }
          .nav-right  { display: flex; }
          .nav-mobile { display: none; }
          .nav-drawer { display: none !important; }
        }
      `}</style>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const PX = "clamp(1.5rem, 4vw, 3rem)";
const MAX = 1100;

export default function Landing() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{
        padding: `8rem ${PX} 5rem`,
        maxWidth: MAX + 96,
        margin: "0 auto",
      }}>
        {/* New tag — exactly like Linear's "New → Coding Sessions →" */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "2.75rem" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 600,
            background: "#fff", color: "#000",
            padding: "0.15rem 0.5rem", borderRadius: 4,
            letterSpacing: "0.02em",
          }}>New</span>
          <a href="#" style={{
            display: "flex", alignItems: "center", gap: "0.3rem",
            color: "#555", textDecoration: "none", fontSize: "0.82rem",
            transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#aaa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}
          >
            Zoom & SMS channels now live
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Headline — left-aligned, enormous, like Linear */}
        <h1 style={{
          fontSize: "clamp(2.8rem, 6.5vw, 5.25rem)",
          fontWeight: 700,
          lineHeight: 1.06,
          letterSpacing: "-0.045em",
          color: "#fff",
          maxWidth: 800,
          marginBottom: "1.5rem",
        }}>
          The business automation<br />
          system for African SMEs
        </h1>

        {/* Subline */}
        <p style={{
          fontSize: "1rem",
          color: "#666",
          lineHeight: 1.75,
          maxWidth: 480,
          marginBottom: "2.25rem",
          letterSpacing: "-0.01em",
          fontWeight: 400,
        }}>
          Purpose-built for small businesses. Describe what you need
          in plain English — Runit handles reminders, reports, and
          confirmations across WhatsApp, Gmail, Telegram, SMS, and Zoom.
        </p>

        {/* CTAs — same structure as Linear */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/signup" style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            background: "#fff", color: "#000",
            padding: "0.625rem 1.25rem", borderRadius: 7,
            textDecoration: "none", fontWeight: 600,
            fontSize: "0.875rem",
          }}>
            Get started <ArrowRight size={13} />
          </Link>
          <a href="#demo" style={{
            display: "inline-flex", alignItems: "center", gap: "0.3rem",
            color: "#555", textDecoration: "none", fontSize: "0.875rem",
            transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ccc")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}
          >
            See how it works <ArrowRight size={13} />
          </a>
        </div>
      </section>

      {/* ── Product UI demo — full width, like Linear's app screenshot ─────── */}
      <section id="demo" style={{
        padding: `0 ${PX} 6rem`,
        maxWidth: MAX + 96,
        margin: "0 auto",
      }}>
        <Demo />
      </section>

      {/* ── Horizontal rule ───────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "#111", margin: `0 ${PX}` }} />

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <p style={{ fontSize: "0.78rem", color: "#444", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          How it works
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }} className="steps-grid">
          {[
            { n: "01", title: "Describe it", body: "Type what you want in plain English. No forms to fill, no workflows to drag around — just write it out." },
            { n: "02", title: "Confirm it", body: "Runit repeats back exactly what it understood. One tap to approve. Nothing runs until you say so." },
            { n: "03", title: "It runs", body: "Your automation goes live and keeps going. Messages hit every recipient, on time, every time, every channel." },
          ].map((s, i) => (
            <div key={s.n} style={{
              padding: "2.5rem 2.5rem 2.5rem 0",
              borderRight: i < 2 ? "1px solid #111" : "none",
              paddingLeft: i > 0 ? "2.5rem" : 0,
            }} className={`step-${i}`}>
              <div style={{ fontSize: "0.72rem", color: "#2e2e2e", fontWeight: 500, letterSpacing: "0.04em", marginBottom: "1.5rem" }}>{s.n}</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e0e0e0", letterSpacing: "-0.025em", marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ color: "#444", fontSize: "0.875rem", lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <style>{`
          .steps-grid { }
          @media (max-width: 640px) {
            .steps-grid { grid-template-columns: 1fr !important; }
            .step-0, .step-1, .step-2 { padding-left: 0 !important; padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid #111; padding-bottom: 2rem; margin-bottom: 0; }
            .step-2 { border-bottom: none !important; }
          }
        `}</style>
      </section>

      {/* ── Horizontal rule ───────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "#111", margin: `0 ${PX}` }} />

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <p style={{ fontSize: "0.78rem", color: "#444", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          Features
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#111" }} className="feat-grid">
          {[
            {
              title: "Plain English commands",
              body: "Describe what you want the way you'd tell a person. Runit understands context, timing, and who to send to — no technical knowledge required.",
            },
            {
              title: "Scheduled & event-triggered",
              body: "Run automations on a fixed schedule — daily, weekly, or custom. Or trigger them on events: a payment received, a form submitted, a new contact added.",
            },
            {
              title: "Every channel, one place",
              body: "WhatsApp, Gmail, Telegram, SMS, and Zoom from a single dashboard. Your customers receive messages on whichever channel they actually use.",
            },
            {
              title: "Delivery analytics",
              body: "Know when messages are delivered and read. Track open rates and engagement per channel. Spot problems before they affect your customers.",
            },
            {
              title: "Contact management",
              body: "Import your customer list and segment it however you need. Tag contacts, filter by channel, and target exactly the right group every time.",
            },
            {
              title: "One-tap confirmation",
              body: "Before anything goes live, Runit shows you a plain-language summary of exactly what it understood and what it will do. You stay in control.",
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: "#000", padding: "2.25rem 2.25rem" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#c8c8c8", letterSpacing: "-0.02em", marginBottom: "0.625rem" }}>{title}</h3>
              <p style={{ color: "#3d3d3d", fontSize: "0.85rem", lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
          <style>{`
            .feat-grid { border: 1px solid #111; border-radius: 2px; overflow: hidden; }
            @media (max-width: 640px) { .feat-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── Horizontal rule ───────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "#111", margin: `0 ${PX}` }} />

      {/* ── Channels ─────────────────────────────────────────────────────── */}
      <section style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <p style={{ fontSize: "0.78rem", color: "#444", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          Channels
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "1px", background: "#111" }} className="ch-grid">
          {[
            { Icon: WhatsAppIcon, name: "WhatsApp", desc: "Direct to phone. No app needed on your side." },
            { Icon: GmailIcon, name: "Gmail", desc: "Sent from your real Gmail address." },
            { Icon: TelegramIcon, name: "Telegram", desc: "Free per message. Ideal for groups." },
            { Icon: SMSIcon, name: "SMS", desc: "Works on any phone, anywhere." },
            { Icon: ZoomIcon, name: "Zoom", desc: "Auto-generate links and invites." },
          ].map(({ Icon, name, desc }) => (
            <div key={name} style={{ background: "#000", padding: "2rem 1.75rem" }}>
              <div style={{ marginBottom: "1.25rem", opacity: 0.7 }}>
                <Icon size={20} />
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: 500, color: "#888", marginBottom: "0.4rem", letterSpacing: "-0.01em" }}>{name}</div>
              <div style={{ fontSize: "0.8rem", color: "#333", lineHeight: 1.65 }}>{desc}</div>
            </div>
          ))}
          <style>{`
            .ch-grid { border: 1px solid #111; border-radius: 2px; overflow: hidden; }
            @media (max-width: 640px) { .ch-grid { grid-template-columns: 1fr 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── Horizontal rule ───────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "#111", margin: `0 ${PX}` }} />

      {/* ── Pricing — Linear-style flat columns ───────────────────────────── */}
      <section id="pricing" style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.045em", color: "#fff", marginBottom: "4rem" }}>
          Pricing
        </h2>

        {/* Two columns — Free trial + Pro, like Linear */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0", borderTop: "1px solid #1a1a1a" }} className="price-grid">
          {/* Free */}
          <div style={{ padding: "2.5rem 2.5rem 2.5rem 0", borderRight: "1px solid #1a1a1a" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e0e0e0", marginBottom: "0.5rem" }}>Free trial</p>
            <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.4rem" }}>₦0</p>
            <p style={{ fontSize: "0.8rem", color: "#3a3a3a", marginBottom: "2rem" }}>14 days, no card required</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {["All Pro features included","Up to 50 contacts","5 automations","All 5 channels"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <Check size={13} color="#444" strokeWidth={2.5} />
                  <span style={{ fontSize: "0.82rem", color: "#444" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/signup" style={{
              display: "block", textAlign: "center",
              background: "#111", color: "#888",
              padding: "0.7rem 1rem", borderRadius: 7,
              textDecoration: "none", fontWeight: 500,
              fontSize: "0.875rem",
              border: "1px solid #1f1f1f",
              transition: "border-color 0.15s",
            }}>Get started</Link>
          </div>

          {/* Pro */}
          <div style={{ padding: "2.5rem", borderRight: "1px solid #1a1a1a", gridColumn: "2 / 4" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e0e0e0", marginBottom: "0.5rem" }}>Pro</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em" }}>₦5,000</span>
              <span style={{ fontSize: "0.8rem", color: "#444" }}>/ month</span>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#3a3a3a", marginBottom: "2rem" }}>Pay in Naira via Paystack · Cancel anytime</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem 2rem", marginBottom: "2.5rem" }}>
              {[
                "Unlimited automations",
                "Up to 1,000 contacts",
                "Gmail, WhatsApp, Telegram",
                "SMS & Zoom included",
                "AI plain-English setup",
                "Delivery analytics",
                "Contact management",
                "Priority support",
              ].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={13} color="#555" strokeWidth={2.5} />
                  <span style={{ fontSize: "0.82rem", color: "#555" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/signup" style={{
              display: "block", textAlign: "center",
              background: "#fff", color: "#000",
              padding: "0.7rem 1rem", borderRadius: 7,
              textDecoration: "none", fontWeight: 600,
              fontSize: "0.875rem",
            }}>Get started</Link>
          </div>

          {/* Enterprise placeholder */}
          <div style={{ padding: "2.5rem 0 2.5rem 2.5rem" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e0e0e0", marginBottom: "0.5rem" }}>Enterprise</p>
            <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.4rem" }}>Custom</p>
            <p style={{ fontSize: "0.8rem", color: "#3a3a3a", marginBottom: "2rem" }}>For large teams and agencies</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {["Everything in Pro","Custom contact limits","Dedicated support","SLA & onboarding"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <Check size={13} color="#444" strokeWidth={2.5} />
                  <span style={{ fontSize: "0.82rem", color: "#444" }}>{f}</span>
                </div>
              ))}
            </div>
            <a href="mailto:hello@runit.app" style={{
              display: "block", textAlign: "center",
              background: "#111", color: "#888",
              padding: "0.7rem 1rem", borderRadius: 7,
              textDecoration: "none", fontWeight: 500,
              fontSize: "0.875rem",
              border: "1px solid #1f1f1f",
            }}>Contact sales</a>
          </div>

          <style>{`
            .price-grid { }
            @media (max-width: 800px) {
              .price-grid { grid-template-columns: 1fr !important; }
              .price-grid > div { padding: 2rem 0 !important; border-right: none !important; border-bottom: 1px solid #1a1a1a; }
              .price-grid > div:last-child { border-bottom: none !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── Horizontal rule ───────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "#111", margin: `0 ${PX}` }} />

      {/* ── Footer — exactly like Linear ──────────────────────────────────── */}
      <footer style={{ padding: `3rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          {/* Logo */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "0.75rem" }}>
              <RunitLogo size={20} />
              <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff", letterSpacing: "-0.025em" }}>Runit</span>
            </Link>
            <p style={{ fontSize: "0.75rem", color: "#2a2a2a" }}>A Black Sheep Co. product</p>
          </div>

          {/* Link groups */}
          <div style={{ display: "flex", gap: "3.5rem", flexWrap: "wrap" }}>
            {[
              { heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p style={{ fontSize: "0.72rem", color: "#2a2a2a", marginBottom: "0.875rem", fontWeight: 500 }}>{heading}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {links.map(l => (
                    <a key={l} href="#" style={{ fontSize: "0.78rem", color: "#333", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#888")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#333")}
                    >{l}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: "#0f0f0f", margin: "2.5rem 0 1.5rem" }} />
        <p style={{ fontSize: "0.72rem", color: "#222" }}>© 2025 Runit. Built for Africa.</p>
      </footer>
    </div>
  );
}
