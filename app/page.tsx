"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, Menu, X } from "lucide-react";

// ─── Icons ────────────────────────────────────────────────────────────────────
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
    <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" fill="#8A8580"/>
    <path d="M7 9h10M7 13h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ZoomIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#2D8CFF"/>
    <path d="M6 11a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V11zm14 2.5l6-4v9l-6-4v-1z" fill="#fff"/>
  </svg>
);

const RunitLogo = ({ size = 26, dark = false }: { size?: number; dark?: boolean }) => (
  <svg width={size} height={Math.round(size * 0.93)} viewBox="0 0 28 26" fill="none">
    <polygon points="1,1 27,1 14,25" fill={dark ? "#111110" : "#111110"} />
    <clipPath id="rl-main">
      <polygon points="1,1 27,1 14,25" />
    </clipPath>
    <g clipPath="url(#rl-main)" stroke={dark ? "#F9F8F6" : "#F9F8F6"} strokeWidth="1.25">
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

// ─── Demo ─────────────────────────────────────────────────────────────────────
const FLOWS = [
  {
    channel: "WhatsApp",
    icon: <WhatsAppIcon size={13} />,
    prompt: "Send appointment reminders to my clients every morning at 8am",
    reply: "Done. WhatsApp reminders will go out to your 24 contacts every day at 8:00 AM.",
    card: { name: "Morning reminders", schedule: "Daily · 8:00 AM", contacts: 24 },
  },
  {
    channel: "Gmail",
    icon: <GmailIcon size={13} />,
    prompt: "Email my customers a weekly sales summary every Monday",
    reply: "Set up. A sales summary email goes to your list every Monday at 9:00 AM.",
    card: { name: "Weekly sales summary", schedule: "Mondays · 9:00 AM", contacts: 31 },
  },
  {
    channel: "Telegram",
    icon: <TelegramIcon size={13} />,
    prompt: "Blast my Telegram group before every event — 2 hours ahead",
    reply: "Ready. Your Telegram group gets a reminder 2 hours before each event automatically.",
    card: { name: "Event blast", schedule: "2h before event", contacts: 87 },
  },
  {
    channel: "SMS",
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
      background: "#FFFFFF",
      border: "1px solid #E4E2DC",
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)",
    }}>
      {/* Window chrome */}
      <div style={{
        padding: "0.625rem 1rem",
        borderBottom: "1px solid #F0EFec",
        display: "flex", alignItems: "center", gap: "0.5rem",
        background: "#FAFAF8",
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#E8E4DC","#DDD9D1","#D4D0C8"].map(c => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: "0.68rem", color: "#C8C5BE", fontFamily: "monospace" }}>
          runit.app — dashboard
        </div>
        <div style={{ width: 40 }} />
      </div>

      {/* Sidebar + main */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{
          width: 180,
          borderRight: "1px solid #F0EFec",
          padding: "0.875rem 0",
          background: "#FAFAF8",
          flexShrink: 0,
        }} className="demo-sidebar">
          <div style={{ padding: "0 0.75rem 0.625rem", marginBottom: "0.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <RunitLogo size={16} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#111110" }}>Runit</span>
            </div>
          </div>

          {[
            { label: "Automations", active: true },
            { label: "Contacts" },
            { label: "Analytics" },
            { label: "Settings" },
          ].map(({ label, active: isActive }) => (
            <div key={label} style={{
              padding: "0.3rem 0.75rem",
              fontSize: "0.72rem",
              color: isActive ? "#111110" : "#C0BDB7",
              display: "flex", alignItems: "center", gap: "0.4rem",
              background: isActive ? "#EEECEA" : "transparent",
              fontWeight: isActive ? 500 : 400,
            }}>
              {isActive && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />}
              {label}
            </div>
          ))}

          <div style={{ height: 1, background: "#F0EFec", margin: "0.625rem 0" }} />

          <div style={{ padding: "0 0.75rem", marginBottom: "0.25rem" }}>
            <p style={{ fontSize: "0.62rem", color: "#C0BDB7", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.375rem" }}>Channels</p>
          </div>
          {FLOWS.map((f, i) => (
            <button key={i} onClick={() => run(i)} style={{
              width: "100%", textAlign: "left",
              padding: "0.3rem 0.75rem",
              display: "flex", alignItems: "center", gap: "0.4rem",
              background: active === i ? "#EEECEA" : "transparent",
              border: "none", cursor: "pointer",
              fontSize: "0.72rem",
              color: active === i ? "#111110" : "#C0BDB7",
              fontFamily: "inherit",
              fontWeight: active === i ? 500 : 400,
              transition: "color 0.1s",
            }}>
              <div style={{ opacity: active === i ? 1 : 0.5 }}>{f.icon}</div>
              {f.channel}
            </button>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: "1rem", minHeight: 220, display: "flex", flexDirection: "column", gap: "0.625rem", overflow: "hidden", background: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B6860" }}>New automation</p>
          </div>

          {/* User bubble */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{
              background: "#111110", color: "#E8E4DC",
              padding: "0.5rem 0.8rem",
              borderRadius: "10px 10px 2px 10px",
              fontSize: "0.77rem", maxWidth: "85%", lineHeight: 1.6,
            }}>
              {flow.prompt}
            </div>
          </div>

          {phase === "thinking" && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: 20, height: 20, background: "#F0EFec", border: "1px solid #E4E2DC", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <RunitLogo size={10} />
              </div>
              <div style={{ display: "flex", gap: 3 }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{ width: 3.5, height: 3.5, borderRadius: "50%", background: "#C0BDB7", animation: `pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          )}

          {(phase === "typing" || phase === "done") && (
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <div style={{ width: 20, height: 20, background: "#F0EFec", border: "1px solid #E4E2DC", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <RunitLogo size={10} />
              </div>
              <div style={{
                background: "#FAFAF8", border: "1px solid #E4E2DC",
                color: "#4A4845", padding: "0.5rem 0.8rem",
                borderRadius: "10px 10px 10px 2px",
                fontSize: "0.77rem", maxWidth: "85%", lineHeight: 1.6,
              }}>
                {typed}{phase === "typing" && <span style={{ opacity: 0.3 }}>▌</span>}
              </div>
            </div>
          )}

          {phase === "done" && (
            <div style={{
              background: "#FAFAF8", border: "1px solid #E4E2DC",
              borderRadius: 8, padding: "0.625rem 0.875rem",
              display: "flex", alignItems: "center", gap: "0.75rem",
              marginTop: 2,
            }}>
              <div style={{ width: 28, height: 28, background: "#F0EFec", border: "1px solid #E4E2DC", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {React.cloneElement(flow.icon as React.ReactElement, { size: 14 } as Record<string,unknown>)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#111110", marginBottom: 1 }}>{flow.card.name}</div>
                <div style={{ fontSize: "0.67rem", color: "#A8A59F" }}>{flow.card.schedule} · {flow.card.contacts} contacts</div>
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

// ─── Nav — floating pill ──────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* Floating pill nav */}
      <div style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 200,
        width: "min(calc(100% - 2rem), 720px)",
      }}>
        <nav style={{
          display: "flex",
          alignItems: "center",
          height: 48,
          padding: "0 6px 0 16px",
          background: scrolled ? "rgba(249,248,246,0.88)" : "rgba(249,248,246,0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 100,
          boxShadow: scrolled
            ? "0 2px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)"
            : "0 1px 4px rgba(0,0,0,0.04)",
          transition: "background 0.25s, box-shadow 0.25s",
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.45rem", textDecoration: "none", flexShrink: 0, marginRight: "auto" }}>
            <RunitLogo size={20} />
            <span style={{ fontWeight: 700, fontSize: "0.875rem", letterSpacing: "-0.03em", color: "#111110" }}>Runit</span>
          </Link>

          {/* Centre links — hidden on mobile */}
          <div className="nav-links" style={{ display: "flex", gap: 0, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            {[
              { label: "Product", href: "#" },
              { label: "Pricing", href: "#pricing" },
              { label: "Customers", href: "#" },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{
                color: "#6B6860",
                textDecoration: "none",
                fontSize: "0.83rem",
                fontWeight: 400,
                padding: "0.35rem 0.875rem",
                borderRadius: 100,
                transition: "color 0.15s, background 0.15s",
                whiteSpace: "nowrap",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#111110";
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "#6B6860";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >{label}</a>
            ))}
          </div>

          {/* Right */}
          <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginLeft: "auto" }}>
            <Link href="/login" style={{
              color: "#6B6860",
              textDecoration: "none",
              fontSize: "0.83rem",
              padding: "0.4rem 0.875rem",
              borderRadius: 100,
              transition: "color 0.15s, background 0.15s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#111110";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "#6B6860";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >Log in</Link>
            <Link href="/signup" style={{
              color: "#F9F8F6",
              background: "#111110",
              textDecoration: "none",
              fontSize: "0.83rem",
              fontWeight: 500,
              padding: "0.45rem 1rem",
              borderRadius: 100,
              transition: "background 0.15s",
              whiteSpace: "nowrap",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#333"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#111110"; }}
            >Get started</Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(v => !v)} className="nav-mobile" style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#6B6860", padding: "0.5rem", display: "none",
            marginLeft: "0.5rem",
          }}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, top: 76, background: "#F9F8F6",
          zIndex: 199, padding: "1.5rem 1.5rem",
          display: "flex", flexDirection: "column",
        }}>
          {["Product","Pricing","Customers"].map(l => (
            <a key={l} href="#" onClick={() => setOpen(false)} style={{
              color: "#6B6860", textDecoration: "none", fontSize: "1.1rem",
              padding: "0.875rem 0", borderBottom: "1px solid #E4E2DC",
            }}>{l}</a>
          ))}
          <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <Link href="/login" onClick={() => setOpen(false)} style={{
              color: "#6B6860", textDecoration: "none", fontSize: "0.9rem",
              padding: "0.75rem 1rem", border: "1px solid #E4E2DC",
              borderRadius: 10, textAlign: "center",
            }}>Log in</Link>
            <Link href="/signup" onClick={() => setOpen(false)} style={{
              color: "#F9F8F6", background: "#111110", textDecoration: "none", fontSize: "0.9rem",
              padding: "0.75rem 1rem", borderRadius: 10, textAlign: "center", fontWeight: 500,
            }}>Get started</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-links  { display: none !important; }
          .nav-right  { display: none !important; }
          .nav-mobile { display: flex !important; }
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
    <div style={{ background: "#F9F8F6", color: "#111110", minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{
        padding: `9rem ${PX} 5rem`,
        maxWidth: MAX + 96,
        margin: "0 auto",
      }}>
        {/* Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "2.75rem" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 600,
            background: "#111110", color: "#F9F8F6",
            padding: "0.2rem 0.6rem", borderRadius: 100,
            letterSpacing: "0.02em",
          }}>New</span>
          <a href="#" style={{
            display: "flex", alignItems: "center", gap: "0.3rem",
            color: "#A8A59F", textDecoration: "none", fontSize: "0.82rem",
            transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#6B6860")}
            onMouseLeave={e => (e.currentTarget.style.color = "#A8A59F")}
          >
            Zoom & SMS channels now live
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Headline — Instrument Serif for the emotional punch */}
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(3rem, 7vw, 5.75rem)",
          fontWeight: 400,
          lineHeight: 1.04,
          letterSpacing: "-0.02em",
          color: "#111110",
          maxWidth: 820,
          marginBottom: "1.5rem",
        }}>
          The business automation<br />
          <em style={{ fontStyle: "italic", color: "#6B6860" }}>system for African SMEs</em>
        </h1>

        <p style={{
          fontSize: "1rem",
          color: "#6B6860",
          lineHeight: 1.75,
          maxWidth: 440,
          marginBottom: "2.25rem",
          fontWeight: 400,
        }}>
          Describe what you need in plain English — Runit handles reminders, reports, and
          confirmations across WhatsApp, Gmail, Telegram, SMS, and Zoom.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", flexWrap: "wrap" }}>
          <Link href="/signup" style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            background: "#111110", color: "#F9F8F6",
            padding: "0.7rem 1.375rem", borderRadius: 100,
            textDecoration: "none", fontWeight: 500,
            fontSize: "0.875rem",
            transition: "background 0.15s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#333"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#111110"; }}
          >
            Get started <ArrowRight size={13} />
          </Link>
          <a href="#demo" style={{
            display: "inline-flex", alignItems: "center", gap: "0.3rem",
            color: "#A8A59F", textDecoration: "none", fontSize: "0.875rem",
            transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#111110")}
            onMouseLeave={e => (e.currentTarget.style.color = "#A8A59F")}
          >
            See how it works <ArrowRight size={13} />
          </a>
        </div>
      </section>

      {/* ── Demo ──────────────────────────────────────────────────────────── */}
      <section id="demo" style={{ padding: `0 ${PX} 6rem`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <Demo />
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <p style={{ fontSize: "0.78rem", color: "#A8A59F", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          How it works
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }} className="steps-grid">
          {[
            { n: "01", title: "Describe it", body: "Type what you want in plain English. No forms, no drag and drop — just write it out." },
            { n: "02", title: "Confirm it", body: "Runit repeats back exactly what it understood. One tap to approve. Nothing runs until you say so." },
            { n: "03", title: "It runs", body: "Your automation goes live and keeps going. Messages hit every recipient, on time, every time." },
          ].map((s, i) => (
            <div key={s.n} style={{
              padding: "2.5rem 2.5rem 2.5rem 0",
              borderRight: i < 2 ? "1px solid #E4E2DC" : "none",
              paddingLeft: i > 0 ? "2.5rem" : 0,
            }} className={`step-${i}`}>
              <div style={{ fontSize: "0.72rem", color: "#C0BDB7", fontWeight: 500, letterSpacing: "0.04em", marginBottom: "1.5rem" }}>{s.n}</div>
              <h3 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "1.35rem", fontWeight: 400,
                color: "#111110", letterSpacing: "-0.01em", marginBottom: "0.75rem"
              }}>{s.title}</h3>
              <p style={{ color: "#6B6860", fontSize: "0.875rem", lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 640px) {
            .steps-grid { grid-template-columns: 1fr !important; }
            .step-0, .step-1, .step-2 { padding-left: 0 !important; padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid #E4E2DC; padding-bottom: 2rem; }
            .step-2 { border-bottom: none !important; }
          }
        `}</style>
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <p style={{ fontSize: "0.78rem", color: "#A8A59F", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          Features
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#E4E2DC", border: "1px solid #E4E2DC", borderRadius: 2, overflow: "hidden" }} className="feat-grid">
          {[
            { title: "Plain English commands", body: "Describe what you want the way you'd tell a person. No technical knowledge required." },
            { title: "Scheduled & event-triggered", body: "Run on a fixed schedule or trigger them on events: a payment, a form, a new contact." },
            { title: "Every channel, one place", body: "WhatsApp, Gmail, Telegram, SMS, and Zoom from a single dashboard." },
            { title: "Delivery analytics", body: "Know when messages are delivered and read. Track open rates per channel." },
            { title: "Contact management", body: "Import your list, segment by tag or channel, and target exactly the right group." },
            { title: "One-tap confirmation", body: "Runit shows a plain-language summary before anything goes live. You stay in control." },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: "#F9F8F6", padding: "2.25rem" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "#111110", marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>{title}</h3>
              <p style={{ color: "#A8A59F", fontSize: "0.85rem", lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
          <style>{`@media (max-width: 640px) { .feat-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── Channels ──────────────────────────────────────────────────────── */}
      <section style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <p style={{ fontSize: "0.78rem", color: "#A8A59F", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          Channels
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "#E4E2DC", border: "1px solid #E4E2DC", borderRadius: 2, overflow: "hidden" }} className="ch-grid">
          {[
            { Icon: WhatsAppIcon, name: "WhatsApp", desc: "Direct to phone. No app needed on your side." },
            { Icon: GmailIcon, name: "Gmail", desc: "Sent from your real Gmail address." },
            { Icon: TelegramIcon, name: "Telegram", desc: "Free per message. Ideal for groups." },
            { Icon: SMSIcon, name: "SMS", desc: "Works on any phone, anywhere." },
            { Icon: ZoomIcon, name: "Zoom", desc: "Auto-generate links and invites." },
          ].map(({ Icon, name, desc }) => (
            <div key={name} style={{ background: "#F9F8F6", padding: "2rem 1.75rem" }}>
              <div style={{ marginBottom: "1.25rem" }}><Icon size={20} /></div>
              <div style={{ fontSize: "0.875rem", fontWeight: 500, color: "#111110", marginBottom: "0.4rem" }}>{name}</div>
              <div style={{ fontSize: "0.8rem", color: "#A8A59F", lineHeight: 1.65 }}>{desc}</div>
            </div>
          ))}
          <style>{`@media (max-width: 640px) { .ch-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
        </div>
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 400, letterSpacing: "-0.02em",
          color: "#111110", marginBottom: "4rem"
        }}>
          Pricing
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0", borderTop: "1px solid #E4E2DC" }} className="price-grid">
          {/* Free */}
          <div style={{ padding: "2.5rem 2.5rem 2.5rem 0", borderRight: "1px solid #E4E2DC" }}>
            <p style={{ fontSize: "1rem", fontWeight: 500, color: "#111110", marginBottom: "0.5rem" }}>Free trial</p>
            <p style={{ fontSize: "1.5rem", fontWeight: 600, color: "#111110", letterSpacing: "-0.03em", marginBottom: "0.4rem" }}>₦0</p>
            <p style={{ fontSize: "0.8rem", color: "#A8A59F", marginBottom: "2rem" }}>14 days, no card required</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {["All Pro features included","Up to 50 contacts","5 automations","All 5 channels"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <Check size={13} color="#C0BDB7" strokeWidth={2.5} />
                  <span style={{ fontSize: "0.82rem", color: "#6B6860" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/signup" style={{
              display: "block", textAlign: "center",
              background: "#F0EFec", color: "#6B6860",
              padding: "0.7rem 1rem", borderRadius: 8,
              textDecoration: "none", fontWeight: 500,
              fontSize: "0.875rem", border: "1px solid #E4E2DC",
              transition: "border-color 0.15s",
            }}>Get started</Link>
          </div>

          {/* Pro */}
          <div style={{ padding: "2.5rem", borderRight: "1px solid #E4E2DC", gridColumn: "2 / 4", background: "#FFFFFF", borderTop: "2px solid #111110", marginTop: -1 }}>
            <p style={{ fontSize: "1rem", fontWeight: 500, color: "#111110", marginBottom: "0.5rem" }}>Pro</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: 600, color: "#111110", letterSpacing: "-0.03em" }}>₦5,000</span>
              <span style={{ fontSize: "0.8rem", color: "#A8A59F" }}>/ month</span>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#A8A59F", marginBottom: "2rem" }}>Pay in Naira via Paystack · Cancel anytime</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem 2rem", marginBottom: "2.5rem" }}>
              {[
                "Unlimited automations","Up to 1,000 contacts",
                "Gmail, WhatsApp, Telegram","SMS & Zoom included",
                "AI plain-English setup","Delivery analytics",
                "Contact management","Priority support",
              ].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={13} color="#111110" strokeWidth={2.5} />
                  <span style={{ fontSize: "0.82rem", color: "#111110" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/signup" style={{
              display: "block", textAlign: "center",
              background: "#111110", color: "#F9F8F6",
              padding: "0.7rem 1rem", borderRadius: 8,
              textDecoration: "none", fontWeight: 600,
              fontSize: "0.875rem",
            }}>Get started</Link>
          </div>

          {/* Enterprise */}
          <div style={{ padding: "2.5rem 0 2.5rem 2.5rem" }}>
            <p style={{ fontSize: "1rem", fontWeight: 500, color: "#111110", marginBottom: "0.5rem" }}>Enterprise</p>
            <p style={{ fontSize: "1.5rem", fontWeight: 600, color: "#111110", letterSpacing: "-0.03em", marginBottom: "0.4rem" }}>Custom</p>
            <p style={{ fontSize: "0.8rem", color: "#A8A59F", marginBottom: "2rem" }}>For large teams and agencies</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {["Everything in Pro","Custom contact limits","Dedicated support","SLA & onboarding"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <Check size={13} color="#C0BDB7" strokeWidth={2.5} />
                  <span style={{ fontSize: "0.82rem", color: "#6B6860" }}>{f}</span>
                </div>
              ))}
            </div>
            <a href="mailto:hello@runit.app" style={{
              display: "block", textAlign: "center",
              background: "#F0EFec", color: "#6B6860",
              padding: "0.7rem 1rem", borderRadius: 8,
              textDecoration: "none", fontWeight: 500,
              fontSize: "0.875rem", border: "1px solid #E4E2DC",
            }}>Contact sales</a>
          </div>

          <style>{`
            @media (max-width: 800px) {
              .price-grid { grid-template-columns: 1fr !important; }
              .price-grid > div { padding: 2rem 0 !important; border-right: none !important; border-bottom: 1px solid #E4E2DC; }
              .price-grid > div:last-child { border-bottom: none !important; }
            }
          `}</style>
        </div>
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer style={{ padding: `3rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "0.75rem" }}>
              <RunitLogo size={20} />
              <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#111110", letterSpacing: "-0.025em" }}>Runit</span>
            </Link>
            <p style={{ fontSize: "0.75rem", color: "#C0BDB7" }}>A Black Sheep Co. product</p>
          </div>

          <div style={{ display: "flex", gap: "3.5rem", flexWrap: "wrap" }}>
            {[
              { heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p style={{ fontSize: "0.72rem", color: "#C0BDB7", marginBottom: "0.875rem", fontWeight: 500 }}>{heading}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {links.map(l => (
                    <a key={l} href="#" style={{ fontSize: "0.78rem", color: "#A8A59F", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#111110")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#A8A59F")}
                    >{l}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: "#E4E2DC", margin: "2.5rem 0 1.5rem" }} />
        <p style={{ fontSize: "0.72rem", color: "#C0BDB7" }}>© 2025 Runit. Built for Africa.</p>
      </footer>
    </div>
  );
}
