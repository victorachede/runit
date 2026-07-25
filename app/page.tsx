"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, Menu, X } from "lucide-react";

// ─── Brand Icons (accurate SVGs) ─────────────────────────────────────────────
const GmailIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
    <path fill="#1e88e5" d="M3,16.2l3.714,2.141L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0 C4.924,8,3,9.924,3,12.298z"/>
    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/>
    <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/>
    <path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974"/>
    <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/>
    <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"/>
  </svg>
);

const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" fill="#29b6f6"/>
    <path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/>
    <path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043l0.964-6.037L23,30.505z"/>
    <path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.09L16,26c0,0,2.106,5.892,2.427,6.912c0.322,1.021,0.58,1.045,0.58,1.045l0.964-6.037l9.832-9.041C30.023,18.728,30.064,18.416,29.897,18.196z"/>
  </svg>
);

const SMSIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" fill="#78909C"/>
    <path d="M7 9h10M7 13h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ZoomIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="10" fill="#2196f3"/>
    <path d="M10 17a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H13a3 3 0 01-3-3V17zm20 3.5l9-6v13l-9-6v-1z" fill="#fff"/>
  </svg>
);

const RunitLogo = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.93)} viewBox="0 0 28 26" fill="none">
    <polygon points="1,1 27,1 14,25" fill="#111110" />
    <clipPath id="rl-main">
      <polygon points="1,1 27,1 14,25" />
    </clipPath>
    <g clipPath="url(#rl-main)" stroke="#F9F8F6" strokeWidth="1.25">
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

// ─── Demo flows ───────────────────────────────────────────────────────────────
const FLOWS = [
  {
    channel: "WhatsApp",
    icon: <WhatsAppIcon size={14} />,
    prompt: "Send appointment reminders to my clients every morning at 8am",
    reply: "Done. WhatsApp reminders will go out to your 24 contacts every day at 8:00 AM.",
    card: { name: "Morning reminders", schedule: "Daily · 8:00 AM", contacts: 24 },
  },
  {
    channel: "Gmail",
    icon: <GmailIcon size={14} />,
    prompt: "Email my customers a weekly sales summary every Monday",
    reply: "Set up. A sales summary email goes to your list every Monday at 9:00 AM.",
    card: { name: "Weekly sales summary", schedule: "Mondays · 9:00 AM", contacts: 31 },
  },
  {
    channel: "Telegram",
    icon: <TelegramIcon size={14} />,
    prompt: "Blast my Telegram group before every event — 2 hours ahead",
    reply: "Ready. Your Telegram group gets a reminder 2 hours before each event automatically.",
    card: { name: "Event blast", schedule: "2h before event", contacts: 87 },
  },
  {
    channel: "SMS",
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
    <>
      <style>{`
        .demo-wrap {
          background: #fff;
          border: 1px solid #E4E2DC;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.06);
        }
        .demo-chrome {
          padding: 0.625rem 1rem;
          border-bottom: 1px solid #F0EFec;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #FAFAF8;
        }
        .demo-body {
          display: flex;
          flex-direction: row;
        }
        .demo-sidebar {
          width: 160px;
          flex-shrink: 0;
          border-right: 1px solid #F0EFec;
          padding: 0.875rem 0;
          background: #FAFAF8;
        }
        .demo-main {
          flex: 1;
          padding: 1rem;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          overflow: hidden;
          background: #fff;
          min-width: 0;
        }
        @media (max-width: 540px) {
          .demo-sidebar { display: none; }
          .demo-body { flex-direction: column; }
        }
      `}</style>

      <div className="demo-wrap">
        {/* Chrome */}
        <div className="demo-chrome">
          <div style={{ display: "flex", gap: 5 }}>
            {["#E8E4DC","#DDD9D1","#D4D0C8"].map(c => (
              <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{ flex: 1, textAlign: "center", fontSize: "0.68rem", color: "#C8C5BE", fontFamily: "monospace" }}>
            runit.app — dashboard
          </div>
          <div style={{ width: 44 }} />
        </div>

        <div className="demo-body">
          {/* Sidebar */}
          <div className="demo-sidebar">
            <div style={{ padding: "0 0.75rem 0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <RunitLogo size={16} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#111110", fontFamily: "'Syne', sans-serif" }}>Runit</span>
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
                {isActive && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />}
                {label}
              </div>
            ))}

            <div style={{ height: 1, background: "#F0EFec", margin: "0.5rem 0" }} />

            <div style={{ padding: "0 0.75rem 0.3rem" }}>
              <p style={{ fontSize: "0.6rem", color: "#C0BDB7", letterSpacing: "0.06em", textTransform: "uppercase" }}>Channels</p>
            </div>

            {FLOWS.map((f, i) => (
              <button key={i} onClick={() => run(i)} style={{
                width: "100%", textAlign: "left",
                padding: "0.3rem 0.75rem",
                display: "flex", alignItems: "center", gap: "0.45rem",
                background: active === i ? "#EEECEA" : "transparent",
                border: "none", cursor: "pointer",
                fontSize: "0.72rem",
                color: active === i ? "#111110" : "#C0BDB7",
                fontFamily: "inherit",
                fontWeight: active === i ? 500 : 400,
                transition: "color 0.1s",
              }}>
                <span style={{ flexShrink: 0, display: "flex" }}>{f.icon}</span>
                {f.channel}
              </button>
            ))}
          </div>

          {/* Main */}
          <div className="demo-main">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B6860" }}>New automation</p>
            </div>

            {/* User bubble */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{
                background: "#111110", color: "#E8E4DC",
                padding: "0.5rem 0.8rem",
                borderRadius: "10px 10px 2px 10px",
                fontSize: "0.77rem", maxWidth: "88%", lineHeight: 1.6,
                wordBreak: "break-word",
              }}>
                {flow.prompt}
              </div>
            </div>

            {/* Thinking */}
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

            {/* Reply */}
            {(phase === "typing" || phase === "done") && (
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <div style={{ width: 20, height: 20, background: "#F0EFec", border: "1px solid #E4E2DC", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <RunitLogo size={10} />
                </div>
                <div style={{
                  background: "#FAFAF8", border: "1px solid #E4E2DC",
                  color: "#4A4845", padding: "0.5rem 0.8rem",
                  borderRadius: "10px 10px 10px 2px",
                  fontSize: "0.77rem", maxWidth: "88%", lineHeight: 1.6,
                  wordBreak: "break-word",
                }}>
                  {typed}{phase === "typing" && <span style={{ opacity: 0.3 }}>▌</span>}
                </div>
              </div>
            )}

            {/* Live card */}
            {phase === "done" && (
              <div style={{
                background: "#FAFAF8", border: "1px solid #E4E2DC",
                borderRadius: 8, padding: "0.625rem 0.875rem",
                display: "flex", alignItems: "center", gap: "0.75rem",
              }}>
                <div style={{ width: 28, height: 28, background: "#F0EFec", border: "1px solid #E4E2DC", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {React.cloneElement(flow.icon as React.ReactElement, { size: 15 } as Record<string,unknown>)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#111110", marginBottom: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{flow.card.name}</div>
                  <div style={{ fontSize: "0.67rem", color: "#A8A59F" }}>{flow.card.schedule} · {flow.card.contacts} contacts</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexShrink: 0 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
                  <span style={{ fontSize: "0.65rem", color: "#22c55e", fontWeight: 500 }}>Live</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
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
      <style>{`
        .nav-pill {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 200;
          width: min(calc(100% - 2rem), 720px);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          height: 48px;
          padding: 0 6px 0 16px;
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.08);
          transition: background 0.25s, box-shadow 0.25s;
          position: relative;
        }
        .nav-links {
          display: flex;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .nav-right { display: flex; align-items: center; gap: 0.25rem; margin-left: auto; }
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; color: #6B6860; padding: 0.5rem; margin-left: 0.5rem; }
        .nav-drawer { display: none; }
        @media (max-width: 600px) {
          .nav-links  { display: none; }
          .nav-right  { display: none; }
          .nav-hamburger { display: flex; }
        }
        .nav-link {
          color: #6B6860; text-decoration: none; font-size: 0.83rem;
          font-weight: 400; padding: 0.35rem 0.875rem; border-radius: 100px;
          transition: color 0.15s, background 0.15s; white-space: nowrap;
        }
        .nav-link:hover { color: #111110; background: rgba(0,0,0,0.05); }
        .nav-login {
          color: #6B6860; text-decoration: none; font-size: 0.83rem;
          padding: 0.4rem 0.875rem; border-radius: 100px;
          transition: color 0.15s, background 0.15s;
        }
        .nav-login:hover { color: #111110; background: rgba(0,0,0,0.05); }
        .nav-cta {
          color: #F9F8F6; background: #111110; text-decoration: none;
          font-size: 0.83rem; font-weight: 500; padding: 0.45rem 1rem;
          border-radius: 100px; transition: background 0.15s; white-space: nowrap;
        }
        .nav-cta:hover { background: #333; }
      `}</style>

      <div className="nav-pill">
        <nav className="nav-inner" style={{
          background: scrolled ? "rgba(249,248,246,0.92)" : "rgba(249,248,246,0.76)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)" : "0 1px 4px rgba(0,0,0,0.04)",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.45rem", textDecoration: "none", flexShrink: 0 }}>
            <RunitLogo size={20} />
            <span style={{ fontWeight: 700, fontSize: "0.875rem", letterSpacing: "-0.02em", color: "#111110", fontFamily: "'Syne', sans-serif" }}>Runit</span>
          </Link>

          <div className="nav-links">
            {[{ label: "Product", href: "#" }, { label: "Pricing", href: "#pricing" }, { label: "Customers", href: "#" }].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
          </div>

          <div className="nav-right">
            <Link href="/login" className="nav-login">Log in</Link>
            <Link href="/signup" className="nav-cta">Get started</Link>
          </div>

          <button onClick={() => setOpen(v => !v)} className="nav-hamburger">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, top: 76, background: "#F9F8F6",
          zIndex: 199, padding: "1.5rem",
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
              color: "#F9F8F6", background: "#111110", textDecoration: "none",
              fontSize: "0.9rem", padding: "0.75rem 1rem",
              borderRadius: 10, textAlign: "center", fontWeight: 500,
            }}>Get started</Link>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const PX = "clamp(1.25rem, 4vw, 3rem)";
const MAX = 1100;

export default function Landing() {
  return (
    <div style={{ background: "#F9F8F6", color: "#111110", minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        .syne { font-family: 'Syne', sans-serif; }

        /* Steps */
        .steps-grid { display: grid; grid-template-columns: repeat(3,1fr); }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .step-item { padding-left: 0 !important; padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid #E4E2DC; padding-bottom: 2rem !important; }
          .step-item:last-child { border-bottom: none !important; }
        }

        /* Features */
        .feat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #E4E2DC; border: 1px solid #E4E2DC; border-radius: 2px; overflow: hidden; }
        @media (max-width: 600px) { .feat-grid { grid-template-columns: 1fr !important; } }

        /* Channels */
        .ch-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px,1fr)); gap: 1px; background: #E4E2DC; border: 1px solid #E4E2DC; border-radius: 2px; overflow: hidden; }
        @media (max-width: 500px) { .ch-grid { grid-template-columns: 1fr 1fr !important; } }

        /* Pricing */
        .price-grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 0; border-top: 1px solid #E4E2DC; }
        .price-col-free  { padding: 2.5rem 2rem 2.5rem 0; border-right: 1px solid #E4E2DC; }
        .price-col-pro   { padding: 2.5rem 2rem; border-right: 1px solid #E4E2DC; background: #fff; border-top: 2px solid #111110; margin-top: -1px; }
        .price-col-ent   { padding: 2.5rem 0 2.5rem 2rem; }
        .price-feat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 1.5rem; }
        @media (max-width: 760px) {
          .price-grid { grid-template-columns: 1fr !important; }
          .price-col-free, .price-col-pro, .price-col-ent { padding: 2rem 0 !important; border-right: none !important; border-bottom: 1px solid #E4E2DC; margin-top: 0 !important; border-top: none !important; background: transparent !important; }
          .price-col-ent { border-bottom: none !important; }
          .price-feat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: `9rem ${PX} 5rem`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "2.75rem" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 600,
            background: "#111110", color: "#F9F8F6",
            padding: "0.2rem 0.625rem", borderRadius: 100,
          }}>New</span>
          <a href="#" style={{
            display: "flex", alignItems: "center", gap: "0.3rem",
            color: "#A8A59F", textDecoration: "none", fontSize: "0.82rem",
            transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#6B6860")}
            onMouseLeave={e => (e.currentTarget.style.color = "#A8A59F")}
          >
            Zoom & SMS channels now live <ArrowRight size={13} />
          </a>
        </div>

        <h1 className="syne" style={{
          fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)",
          fontWeight: 700,
          lineHeight: 1.06,
          letterSpacing: "-0.03em",
          color: "#111110",
          maxWidth: 800,
          marginBottom: "1.5rem",
        }}>
          The business automation<br />
          <span style={{ color: "#A8A59F", fontWeight: 600 }}>system for African SMEs</span>
        </h1>

        <p style={{
          fontSize: "1rem", color: "#6B6860", lineHeight: 1.75,
          maxWidth: 440, marginBottom: "2.25rem", fontWeight: 400,
        }}>
          Describe what you need in plain English — Runit handles reminders,
          reports, and confirmations across WhatsApp, Gmail, Telegram, SMS, and Zoom.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", flexWrap: "wrap" }}>
          <Link href="/signup" style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            background: "#111110", color: "#F9F8F6",
            padding: "0.7rem 1.375rem", borderRadius: 100,
            textDecoration: "none", fontWeight: 500, fontSize: "0.875rem",
          }}>
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
        <p style={{ fontSize: "0.75rem", color: "#A8A59F", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          How it works
        </p>

        <div className="steps-grid">
          {[
            { n: "01", title: "Describe it", body: "Type what you want in plain English. No forms, no drag-and-drop — just write it out." },
            { n: "02", title: "Confirm it", body: "Runit repeats back exactly what it understood. One tap to approve. Nothing runs until you say so." },
            { n: "03", title: "It runs", body: "Your automation goes live and keeps going. Messages hit every recipient, on time, every time." },
          ].map((s, i) => (
            <div key={s.n} className="step-item" style={{
              padding: `2.5rem ${i < 2 ? "2.5rem" : "0"} 2.5rem ${i > 0 ? "2.5rem" : "0"}`,
              borderRight: i < 2 ? "1px solid #E4E2DC" : "none",
            }}>
              <div style={{ fontSize: "0.72rem", color: "#C0BDB7", fontWeight: 500, letterSpacing: "0.04em", marginBottom: "1.5rem" }}>{s.n}</div>
              <h3 className="syne" style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111110", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ color: "#6B6860", fontSize: "0.875rem", lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", color: "#A8A59F", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          Features
        </p>
        <div className="feat-grid">
          {[
            { title: "Plain English commands", body: "Describe what you want the way you'd tell a person. No technical knowledge required." },
            { title: "Scheduled & event-triggered", body: "Run on a fixed schedule or trigger on events: a payment, a form, a new contact." },
            { title: "Every channel, one place", body: "WhatsApp, Gmail, Telegram, SMS, and Zoom from a single dashboard." },
            { title: "Delivery analytics", body: "Know when messages are delivered and read. Track open rates per channel." },
            { title: "Contact management", body: "Import your list, segment by tag or channel, and target exactly the right group." },
            { title: "One-tap confirmation", body: "Runit shows a plain-language summary before anything goes live. You stay in control." },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: "#F9F8F6", padding: "2.25rem" }}>
              <h3 className="syne" style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111110", marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>{title}</h3>
              <p style={{ color: "#A8A59F", fontSize: "0.85rem", lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── Channels ──────────────────────────────────────────────────────── */}
      <section style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", color: "#A8A59F", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3.5rem" }}>
          Channels
        </p>
        <div className="ch-grid">
          {[
            { Icon: WhatsAppIcon, name: "WhatsApp", desc: "Direct to phone. No app needed on your side." },
            { Icon: GmailIcon, name: "Gmail", desc: "Sent from your real Gmail address." },
            { Icon: TelegramIcon, name: "Telegram", desc: "Free per message. Ideal for groups." },
            { Icon: SMSIcon, name: "SMS", desc: "Works on any phone, anywhere." },
            { Icon: ZoomIcon, name: "Zoom", desc: "Auto-generate links and invites." },
          ].map(({ Icon, name, desc }) => (
            <div key={name} style={{ background: "#F9F8F6", padding: "2rem 1.75rem" }}>
              <div style={{ marginBottom: "1.25rem" }}><Icon size={22} /></div>
              <div className="syne" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111110", marginBottom: "0.4rem" }}>{name}</div>
              <div style={{ fontSize: "0.8rem", color: "#A8A59F", lineHeight: 1.65 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ padding: `6rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <h2 className="syne" style={{
          fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700,
          letterSpacing: "-0.03em", color: "#111110", marginBottom: "4rem"
        }}>Pricing</h2>

        <div className="price-grid">
          {/* Free */}
          <div className="price-col-free">
            <p className="syne" style={{ fontSize: "1rem", fontWeight: 700, color: "#111110", marginBottom: "0.5rem" }}>Free trial</p>
            <p className="syne" style={{ fontSize: "1.75rem", fontWeight: 700, color: "#111110", letterSpacing: "-0.03em", marginBottom: "0.4rem" }}>₦0</p>
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
              textDecoration: "none", fontWeight: 500, fontSize: "0.875rem",
              border: "1px solid #E4E2DC",
            }}>Get started</Link>
          </div>

          {/* Pro */}
          <div className="price-col-pro">
            <p className="syne" style={{ fontSize: "1rem", fontWeight: 700, color: "#111110", marginBottom: "0.5rem" }}>Pro</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem", marginBottom: "0.4rem" }}>
              <span className="syne" style={{ fontSize: "1.75rem", fontWeight: 700, color: "#111110", letterSpacing: "-0.03em" }}>₦5,000</span>
              <span style={{ fontSize: "0.8rem", color: "#A8A59F" }}>/ month</span>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#A8A59F", marginBottom: "2rem" }}>Pay in Naira via Paystack · Cancel anytime</p>
            <div className="price-feat-grid" style={{ marginBottom: "2.5rem" }}>
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
              textDecoration: "none", fontWeight: 600, fontSize: "0.875rem",
            }}>Get started</Link>
          </div>

          {/* Enterprise */}
          <div className="price-col-ent">
            <p className="syne" style={{ fontSize: "1rem", fontWeight: 700, color: "#111110", marginBottom: "0.5rem" }}>Enterprise</p>
            <p className="syne" style={{ fontSize: "1.75rem", fontWeight: 700, color: "#111110", letterSpacing: "-0.03em", marginBottom: "0.4rem" }}>Custom</p>
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
              textDecoration: "none", fontWeight: 500, fontSize: "0.875rem",
              border: "1px solid #E4E2DC",
            }}>Contact sales</a>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#E4E2DC", margin: `0 ${PX}` }} />

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer style={{ padding: `3rem ${PX}`, maxWidth: MAX + 96, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "0.75rem" }}>
              <RunitLogo size={20} />
              <span className="syne" style={{ fontWeight: 700, fontSize: "0.875rem", color: "#111110", letterSpacing: "-0.02em" }}>Runit</span>
            </Link>
            <p style={{ fontSize: "0.75rem", color: "#C0BDB7" }}>A Black Sheep Co. product</p>
          </div>

          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            {[
              { heading: "Product", links: ["Features","Pricing","Changelog","Roadmap"] },
              { heading: "Company", links: ["About","Blog","Careers","Contact"] },
              { heading: "Legal", links: ["Privacy","Terms","Security"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="syne" style={{ fontSize: "0.72rem", color: "#C0BDB7", marginBottom: "0.875rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>{heading}</p>
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
