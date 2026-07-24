"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, Zap, ChevronRight, Menu, X } from "lucide-react";

// ─── Brand icons ──────────────────────────────────────────────────────────────
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

const RunitLogo = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.93)} viewBox="0 0 28 26" fill="none">
    <polygon points="14,1 27,25 1,25" fill="white" />
    <clipPath id="lc">
      <polygon points="14,1 27,25 1,25" />
    </clipPath>
    <g clipPath="url(#lc)" stroke="#08080a" strokeWidth="1.3">
      <line x1="-2" y1="8"  x2="8"  y2="28" />
      <line x1="2"  y1="4"  x2="14" y2="28" />
      <line x1="7"  y1="2"  x2="20" y2="28" />
      <line x1="13" y1="1"  x2="27" y2="20" />
      <line x1="19" y1="1"  x2="27" y2="13" />
      <line x1="30" y1="8"  x2="20" y2="28" />
      <line x1="26" y1="4"  x2="14" y2="28" />
      <line x1="21" y1="2"  x2="8"  y2="28" />
      <line x1="15" y1="1"  x2="1"  y2="20" />
      <line x1="9"  y1="1"  x2="1"  y2="13" />
    </g>
  </svg>
);

// ─── Demo flows ────────────────────────────────────────────────────────────────
const FLOWS = [
  {
    channel: "WhatsApp",
    color: "#25D366",
    icon: <WhatsAppIcon size={14} />,
    prompt: "Send appointment reminders to my clients every morning at 8am",
    reply: "Done. WhatsApp reminders will go out to your 24 contacts every day at 8:00 AM.",
    card: { name: "Morning reminders", schedule: "Daily · 8:00 AM", contacts: 24 },
  },
  {
    channel: "Gmail",
    color: "#EA4335",
    icon: <GmailIcon size={14} />,
    prompt: "Email my customers a weekly sales summary every Monday",
    reply: "Set up. A sales summary email goes to your list every Monday at 9:00 AM via Gmail.",
    card: { name: "Weekly sales summary", schedule: "Mondays · 9:00 AM", contacts: 31 },
  },
  {
    channel: "Telegram",
    color: "#2AABEE",
    icon: <TelegramIcon size={14} />,
    prompt: "Blast my Telegram group before every event — 2 hours ahead",
    reply: "Ready. Your Telegram group gets a reminder 2 hours before each event automatically.",
    card: { name: "Event blast", schedule: "2h before event", contacts: 87 },
  },
  {
    channel: "SMS",
    color: "#8B8B8B",
    icon: <SMSIcon size={14} />,
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
          timerRef.current = setTimeout(() => setPhase("done"), 400);
        }
      }, 14);
    }, 700);
  }

  useEffect(() => {
    run(0);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const flow = FLOWS[active];

  return (
    <div style={{
      background: "#0d0d10",
      border: "1px solid #1e1e24",
      borderRadius: 16,
      overflow: "hidden",
      maxWidth: 600,
      margin: "0 auto",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset, 0 32px 64px rgba(0,0,0,0.5)",
    }}>
      {/* Window chrome */}
      <div style={{
        padding: "0.75rem 1rem",
        borderBottom: "1px solid #1a1a20",
        display: "flex", alignItems: "center", gap: "0.5rem",
        background: "#0a0a0d",
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.6 }} />
          ))}
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: "0.7rem", color: "#2a2a35", letterSpacing: "0.03em", fontFamily: "monospace" }}>
          runit.app
        </div>
        <div style={{ width: 36 }} />
      </div>

      {/* Channel tabs */}
      <div style={{
        display: "flex", padding: "0.5rem 0.75rem", gap: "0.25rem",
        borderBottom: "1px solid #161620", background: "#0a0a0d",
        overflowX: "auto",
      }}>
        {FLOWS.map((f, i) => (
          <button key={i} onClick={() => run(i)} style={{
            display: "flex", alignItems: "center", gap: "0.35rem",
            padding: "0.28rem 0.65rem", borderRadius: 6,
            border: `1px solid ${active === i ? f.color + "35" : "transparent"}`,
            background: active === i ? f.color + "10" : "transparent",
            color: active === i ? f.color : "#2e2e3a",
            fontSize: "0.72rem", fontWeight: 500,
            cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap",
            fontFamily: "inherit",
          }}>
            {f.icon} {f.channel}
          </button>
        ))}
      </div>

      {/* Chat area */}
      <div style={{ padding: "1rem", minHeight: 200, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {/* User message */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            background: "#18181e", border: "1px solid #22222e",
            color: "#c8c8d8", padding: "0.55rem 0.85rem",
            borderRadius: "10px 10px 2px 10px",
            fontSize: "0.8rem", maxWidth: "84%", lineHeight: 1.6,
          }}>
            {flow.prompt}
          </div>
        </div>

        {/* Thinking indicator */}
        {phase === "thinking" && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
              width: 22, height: 22, background: "#111116", border: "1px solid #1e1e28",
              borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Zap size={10} color="#444" />
            </div>
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 4, height: 4, borderRadius: "50%", background: "#252530",
                  animation: `pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}

        {/* AI reply */}
        {(phase === "typing" || phase === "done") && (
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
            <div style={{
              width: 22, height: 22, background: "#111116", border: "1px solid #1e1e28",
              borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, marginTop: 2,
            }}>
              <Zap size={10} color="#7c5af6" />
            </div>
            <div style={{
              background: "#111116", border: "1px solid #1a1a22",
              color: "#888898", padding: "0.55rem 0.85rem",
              borderRadius: "10px 10px 10px 2px",
              fontSize: "0.8rem", maxWidth: "84%", lineHeight: 1.6,
            }}>
              {typed}{phase === "typing" && <span style={{ opacity: 0.35, fontSize: "0.7rem" }}>▌</span>}
            </div>
          </div>
        )}

        {/* Live card */}
        {phase === "done" && (
          <div style={{
            marginTop: 2,
            background: "#0d0d12",
            border: `1px solid ${flow.color}20`,
            borderRadius: 10,
            padding: "0.7rem 0.9rem",
            display: "flex", alignItems: "center", gap: "0.75rem",
          }}>
            <div style={{
              width: 32, height: 32, background: flow.color + "12",
              borderRadius: 8, display: "flex", alignItems: "center",
              justifyContent: "center", flexShrink: 0,
            }}>
              {React.cloneElement(flow.icon as React.ReactElement, { size: 16 } as Record<string, unknown>)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#d8d8e8", marginBottom: 2 }}>{flow.card.name}</div>
              <div style={{ fontSize: "0.7rem", color: "#35353f" }}>{flow.card.schedule} · {flow.card.contacts} contacts</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.28rem" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 5px #22c55e" }} />
              <span style={{ fontSize: "0.67rem", color: "#22c55e", fontWeight: 600, letterSpacing: "0.02em" }}>Live</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 56,
        borderBottom: `1px solid ${scrolled ? "#1a1a22" : "transparent"}`,
        background: scrolled ? "rgba(8,8,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.2s ease",
        display: "flex", alignItems: "center",
        padding: "0 max(1.5rem, calc((100vw - 1100px) / 2))",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginRight: "2.5rem" }}>
          <RunitLogo size={24} />
          <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.03em", color: "#f2f2f5" }}>Runit</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.125rem", flex: 1 }} className="nav-links">
          {["Product", "Pricing", "Changelog"].map(l => (
            <a key={l} href={l === "Pricing" ? "#pricing" : "#"} style={{
              color: "#55555e", textDecoration: "none",
              fontSize: "0.83rem", fontWeight: 500,
              padding: "0.4rem 0.75rem", borderRadius: 6,
              transition: "color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c8c8d8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#55555e")}
            >{l}</a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="nav-ctas">
          <Link href="/login" style={{
            color: "#55555e", textDecoration: "none",
            fontSize: "0.83rem", fontWeight: 500,
            padding: "0.4rem 0.875rem", borderRadius: 6,
            transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#c8c8d8")}
            onMouseLeave={e => (e.currentTarget.style.color = "#55555e")}
          >Log in</Link>
          <Link href="/signup" style={{
            background: "#f0f0f5", color: "#08080a",
            textDecoration: "none", fontSize: "0.83rem",
            fontWeight: 600, padding: "0.4rem 1rem",
            borderRadius: 6, letterSpacing: "-0.01em",
            transition: "background 0.15s",
          }}>Sign up</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(v => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#888898", padding: "0.5rem" }}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 56, left: 0, right: 0, bottom: 0,
          background: "#08080a", zIndex: 199, padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "0.25rem",
        }} className="mobile-menu">
          {["Product", "Pricing", "Changelog"].map(l => (
            <a key={l} href="#" onClick={() => setMobileOpen(false)} style={{
              color: "#888898", textDecoration: "none",
              fontSize: "1rem", fontWeight: 500, padding: "0.75rem 0",
              borderBottom: "1px solid #1a1a20",
            }}>{l}</a>
          ))}
          <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <Link href="/login" onClick={() => setMobileOpen(false)} style={{
              color: "#888898", textDecoration: "none",
              fontSize: "0.9rem", fontWeight: 500, padding: "0.7rem 1rem",
              border: "1px solid #1e1e24", borderRadius: 8, textAlign: "center",
            }}>Log in</Link>
            <Link href="/signup" onClick={() => setMobileOpen(false)} style={{
              background: "#f0f0f5", color: "#08080a",
              textDecoration: "none", fontSize: "0.9rem",
              fontWeight: 600, padding: "0.7rem 1rem",
              borderRadius: 8, textAlign: "center",
            }}>Sign up free</Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-links { display: none; }
        .nav-ctas { display: none; }
        .nav-mobile-btn { display: flex; }
        .mobile-menu { display: flex; }
        @media (min-width: 720px) {
          .nav-links { display: flex; }
          .nav-ctas { display: flex; }
          .nav-mobile-btn { display: none; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const W = "max(1.5rem, calc((100vw - 1100px) / 2))";

export default function Landing() {
  return (
    <div style={{ background: "#08080a", color: "#f2f2f5", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{
        padding: `9rem ${W} 6rem`,
        position: "relative", overflow: "hidden",
      }}>
        {/* Ambient glows */}
        <div aria-hidden style={{
          position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 500,
          background: "radial-gradient(ellipse at center, rgba(124,90,246,0.1) 0%, transparent 68%)",
          pointerEvents: "none",
          animation: "glow-pulse 4s ease-in-out infinite",
        }} />
        <div aria-hidden style={{
          position: "absolute", top: 80, left: "15%",
          width: 300, height: 300,
          background: "radial-gradient(ellipse, rgba(37,211,102,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 780, position: "relative" }}>
          {/* Eyebrow badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(124,90,246,0.08)",
            border: "1px solid rgba(124,90,246,0.2)",
            padding: "0.3rem 0.875rem", borderRadius: 999,
            fontSize: "0.72rem", fontWeight: 500,
            color: "#9d80fc",
            marginBottom: "2rem",
            letterSpacing: "0.01em",
          }}>
            <div style={{ width: 5, height: 5, background: "#22c55e", borderRadius: "50%", boxShadow: "0 0 5px #22c55e" }} />
            Built for African SMEs
            <span style={{ color: "#4a4a5a", margin: "0 0.25rem" }}>·</span>
            WhatsApp, Gmail, Telegram & more
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.045em",
            color: "#ebebf0",
            marginBottom: "1.5rem",
          }}>
            Automate your business.<br />
            <span style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #7c5af6 50%, #9d80fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Just describe it.
            </span>
          </h1>

          {/* Subline */}
          <p style={{
            fontSize: "1.05rem", color: "#4e4e5e", lineHeight: 1.8,
            maxWidth: 520, marginBottom: "2.5rem", letterSpacing: "-0.01em",
          }}>
            No forms. No workflows to drag and drop. Tell Runit what you need
            in plain English — it sets up reminders, reports, and confirmations
            across every channel your customers use.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.625rem", alignItems: "center", flexWrap: "wrap", marginBottom: "3.5rem" }}>
            <Link href="/signup" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#f0f0f5", color: "#08080a",
              padding: "0.7rem 1.375rem", borderRadius: 8,
              textDecoration: "none", fontWeight: 600,
              fontSize: "0.875rem", letterSpacing: "-0.01em",
              boxShadow: "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05) inset",
              transition: "background 0.15s",
            }}>
              Start for free <ArrowRight size={13} />
            </Link>
            <a href="#demo" style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "transparent", color: "#55555e",
              padding: "0.7rem 1.1rem", borderRadius: 8,
              textDecoration: "none", fontWeight: 500,
              fontSize: "0.875rem",
              border: "1px solid #1e1e28",
              transition: "border-color 0.15s, color 0.15s",
            }}>
              See how it works <ChevronRight size={13} />
            </a>
          </div>

          {/* Social proof */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              {[GmailIcon, WhatsAppIcon, TelegramIcon, SMSIcon, ZoomIcon].map((Icon, i) => (
                <div key={i} style={{ opacity: 0.5 }}>
                  <Icon size={18} />
                </div>
              ))}
            </div>
            <div style={{ width: 1, height: 18, background: "#1e1e28" }} />
            <p style={{ fontSize: "0.78rem", color: "#35353f" }}>
              5 channels · 1,000+ automations running
            </p>
          </div>
        </div>
      </section>

      {/* ── Demo ──────────────────────────────────────────────────────────── */}
      <section id="demo" style={{ padding: `4rem ${W}` }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.68rem", color: "#7c5af6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
              Live demo
            </p>
            <p style={{ fontSize: "0.8rem", color: "#33333d" }}>Click a channel to see Runit in action</p>
          </div>
          <Demo />
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1a1a22 30%, #1a1a22 70%, transparent)", margin: `0 ${W}` }} />

      {/* ── Features bento ────────────────────────────────────────────────── */}
      <section style={{ padding: `5rem ${W}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.68rem", color: "#7c5af6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>
              Features
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "#e8e8f0", maxWidth: 560 }}>
              Everything a business needs to stay in touch.
            </h2>
          </div>

          {/* Bento grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1px", background: "#14141a" }} className="bento-grid">
            {/* Card 1 — large */}
            <div className="bento-xl" style={{
              gridColumn: "1 / 7",
              background: "#0d0d11", padding: "2.25rem",
              borderRadius: "0 0 0 0",
            }}>
              <div style={{
                width: 38, height: 38, background: "rgba(124,90,246,0.1)",
                border: "1px solid rgba(124,90,246,0.2)",
                borderRadius: 10, display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1.5rem",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9d80fc" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#d8d8e8", letterSpacing: "-0.025em", marginBottom: "0.625rem" }}>
                Plain English commands
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#3c3c4a", lineHeight: 1.7, maxWidth: 340 }}>
                Describe what you want in everyday language. Runit understands context, schedule, and recipients — no training required.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bento-sm" style={{
              gridColumn: "7 / 13",
              background: "#0d0d11", padding: "2.25rem",
            }}>
              <div style={{
                width: 38, height: 38, background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.15)",
                borderRadius: 10, display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1.5rem",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#d8d8e8", letterSpacing: "-0.025em", marginBottom: "0.625rem" }}>
                Scheduled & triggered
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#3c3c4a", lineHeight: 1.7 }}>
                Run automations on a schedule or trigger them on events like payments, sign-ups, or custom webhooks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bento-sm" style={{
              gridColumn: "1 / 5",
              background: "#0d0d11", padding: "2.25rem",
            }}>
              <div style={{
                width: 38, height: 38, background: "rgba(45,140,255,0.08)",
                border: "1px solid rgba(45,140,255,0.15)",
                borderRadius: 10, display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1.5rem",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D8CFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#d8d8e8", letterSpacing: "-0.025em", marginBottom: "0.625rem" }}>
                One-tap confirmation
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#3c3c4a", lineHeight: 1.7 }}>
                Before anything goes live, Runit shows you exactly what it understood and what it will do.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bento-sm" style={{
              gridColumn: "5 / 9",
              background: "#0d0d11", padding: "2.25rem",
            }}>
              <div style={{
                width: 38, height: 38, background: "rgba(251,188,5,0.08)",
                border: "1px solid rgba(251,188,5,0.15)",
                borderRadius: 10, display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1.5rem",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBC05" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#d8d8e8", letterSpacing: "-0.025em", marginBottom: "0.625rem" }}>
                Contact management
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#3c3c4a", lineHeight: 1.7 }}>
                Import and segment your customers across all channels from one place.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bento-sm" style={{
              gridColumn: "9 / 13",
              background: "#0d0d11", padding: "2.25rem",
            }}>
              <div style={{
                width: 38, height: 38, background: "rgba(234,67,53,0.08)",
                border: "1px solid rgba(234,67,53,0.15)",
                borderRadius: 10, display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "1.5rem",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#d8d8e8", letterSpacing: "-0.025em", marginBottom: "0.625rem" }}>
                Delivery analytics
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#3c3c4a", lineHeight: 1.7 }}>
                Track open rates, delivery status, and engagement across every channel.
              </p>
            </div>
          </div>

          <style>{`
            .bento-grid { border: 1px solid #14141a; border-radius: 16px; overflow: hidden; }
            .bento-xl { grid-column: 1 / 7; }
            .bento-sm { grid-column: auto; }
            @media (max-width: 720px) {
              .bento-xl, .bento-sm { grid-column: 1 / -1 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1a1a22 30%, #1a1a22 70%, transparent)", margin: `0 ${W}` }} />

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section style={{ padding: `5rem ${W}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.68rem", color: "#7c5af6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>
              How it works
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "#e8e8f0" }}>
              Three steps. That&apos;s it.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", position: "relative" }} className="steps-grid">
            {[
              {
                n: "01",
                title: "Describe it",
                body: "Type what you want in plain English. No settings, no forms, no flowcharts to build.",
                color: "#7c5af6",
              },
              {
                n: "02",
                title: "Confirm it",
                body: "Runit shows you exactly what it understood. One tap to approve. Nothing runs without your sign-off.",
                color: "#22c55e",
              },
              {
                n: "03",
                title: "It runs",
                body: "Your automation goes live and keeps running. Messages go out on time, every time, across every channel.",
                color: "#FBBC05",
              },
            ].map((s, i) => (
              <div key={s.n} style={{
                padding: "2.5rem",
                borderRight: i < 2 ? "1px solid #1a1a22" : "none",
                position: "relative",
              }} className="step-card">
                <div style={{
                  width: 28, height: 28, borderRadius: 7,
                  background: s.color + "15",
                  border: `1px solid ${s.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.75rem",
                }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: s.color, letterSpacing: "0.04em" }}>{s.n}</span>
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#c8c8d8", letterSpacing: "-0.025em", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ color: "#38383f", fontSize: "0.85rem", lineHeight: 1.75 }}>{s.body}</p>
              </div>
            ))}
            <style>{`
              .steps-grid { border: 1px solid #1a1a22; border-radius: 14px; overflow: hidden; }
              @media (max-width: 680px) {
                .steps-grid { grid-template-columns: 1fr !important; }
                .step-card { border-right: none !important; border-bottom: 1px solid #1a1a22; }
                .step-card:last-child { border-bottom: none !important; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1a1a22 30%, #1a1a22 70%, transparent)", margin: `0 ${W}` }} />

      {/* ── Channels ──────────────────────────────────────────────────────── */}
      <section style={{ padding: `5rem ${W}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.68rem", color: "#7c5af6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>
              Channels
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "#e8e8f0" }}>
              Every channel your customers use.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
            {[
              { Icon: WhatsAppIcon, color: "#25D366", name: "WhatsApp", desc: "Direct to phone. No app required on your side." },
              { Icon: GmailIcon, color: "#EA4335", name: "Gmail", desc: "Sent from your real Gmail. Lands in inbox." },
              { Icon: TelegramIcon, color: "#2AABEE", name: "Telegram", desc: "Free per message. Perfect for group broadcasts." },
              { Icon: SMSIcon, color: "#8B8B8B", name: "SMS", desc: "Works on any phone. No internet required." },
              { Icon: ZoomIcon, color: "#2D8CFF", name: "Zoom", desc: "Auto-generate meeting links and send invites." },
            ].map(({ Icon, color, name, desc }) => (
              <div key={name} style={{
                background: "#0d0d11",
                border: "1px solid #1a1a22",
                borderRadius: 12,
                padding: "1.5rem",
                display: "flex", flexDirection: "column", gap: "1rem",
                transition: "border-color 0.15s",
                cursor: "default",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = color + "30")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#1a1a22")}
              >
                <div style={{
                  width: 38, height: 38,
                  background: color + "10",
                  borderRadius: 9,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#c8c8d8", marginBottom: "0.3rem", letterSpacing: "-0.01em" }}>{name}</div>
                  <div style={{ fontSize: "0.8rem", color: "#30303a", lineHeight: 1.65 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1a1a22 30%, #1a1a22 70%, transparent)", margin: `0 ${W}` }} />

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ padding: `5rem ${W}` }}>
        <div style={{ maxWidth: 440, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.68rem", color: "#7c5af6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>
              Pricing
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "#e8e8f0" }}>
              One plan. Everything in.
            </h2>
          </div>

          <div style={{
            background: "#0d0d11",
            border: "1px solid #1e1e28",
            borderRadius: 16,
            padding: "2.25rem",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Top accent line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(124,90,246,0.4), transparent)" }} />

            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "rgba(124,90,246,0.1)", border: "1px solid rgba(124,90,246,0.2)",
              padding: "0.2rem 0.625rem", borderRadius: 999,
              fontSize: "0.65rem", fontWeight: 700, color: "#9d80fc",
              letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              PRO
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "3rem", fontWeight: 800, color: "#ebebf0", letterSpacing: "-0.05em" }}>₦5,000</span>
              <span style={{ color: "#35353f", fontSize: "0.875rem" }}>/month</span>
            </div>
            <p style={{ color: "#35353f", fontSize: "0.8rem", marginBottom: "2rem" }}>
              Pay in Naira via Paystack · Cancel anytime
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
              {[
                "Unlimited automations",
                "Gmail, WhatsApp, Telegram, SMS, Zoom",
                "Up to 1,000 contacts",
                "AI-powered natural language setup",
                "Delivery analytics",
                "Priority support",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.85rem", color: "#6a6a7a" }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 4,
                    background: "rgba(124,90,246,0.1)",
                    border: "1px solid rgba(124,90,246,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <Check size={9} color="#9d80fc" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <Link href="/signup" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              background: "#f0f0f5", color: "#08080a",
              padding: "0.8rem", borderRadius: 8,
              textDecoration: "none", fontWeight: 600,
              fontSize: "0.9rem", letterSpacing: "-0.01em",
              transition: "background 0.15s",
            }}>
              Start free trial <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────────────────────────── */}
      <section style={{ padding: `0 ${W} 5rem` }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          background: "#0d0d11",
          border: "1px solid #1e1e28",
          borderRadius: 20,
          padding: "4rem 3rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "2rem", flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden style={{
            position: "absolute", right: -100, top: "50%", transform: "translateY(-50%)",
            width: 400, height: 400,
            background: "radial-gradient(ellipse, rgba(124,90,246,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "#e0e0e8", marginBottom: "0.5rem" }}>
              Ready to stop doing it manually?
            </h2>
            <p style={{ color: "#38383f", fontSize: "0.875rem" }}>
              Set up your first automation in under 2 minutes.
            </p>
          </div>
          <Link href="/signup" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "#f0f0f5", color: "#08080a",
            padding: "0.75rem 1.5rem", borderRadius: 8,
            textDecoration: "none", fontWeight: 600,
            fontSize: "0.875rem", letterSpacing: "-0.01em",
            whiteSpace: "nowrap", flexShrink: 0, position: "relative",
          }}>
            Get started free <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid #12121a",
        padding: `2.5rem ${W}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "1.25rem",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <RunitLogo size={20} />
          <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#f2f2f5", letterSpacing: "-0.025em" }}>Runit</span>
          <span style={{ color: "#22222e", margin: "0 0.5rem" }}>·</span>
          <span style={{ fontSize: "0.75rem", color: "#2a2a35" }}>A Black Sheep Co. product</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy", "Terms", "Contact"].map(l => (
            <a key={l} href="#" style={{ fontSize: "0.78rem", color: "#28282e", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#888898")}
              onMouseLeave={e => (e.currentTarget.style.color = "#28282e")}
            >{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
