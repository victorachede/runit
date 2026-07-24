"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

const RunitLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.93)} viewBox="0 0 28 26" fill="none">
    <polygon points="1,1 27,1 14,25" fill="white" />
    <clipPath id="rl-login">
      <polygon points="1,1 27,1 14,25" />
    </clipPath>
    <g clipPath="url(#rl-login)" stroke="#000" strokeWidth="1.25">
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

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPw, setFocusPw] = useState(false);

  return (
    <div style={{
      minHeight: "100vh", background: "#000",
      display: "flex", fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* ── Left — form ───────────────────────────────────────────────────── */}
      <div style={{
        flex: 1,
        display: "flex", flexDirection: "column",
        padding: "0 clamp(1.5rem,6vw,5rem)",
      }}>
        {/* Nav */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 52, flexShrink: 0,
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <RunitLogo size={20} />
            <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff", letterSpacing: "-0.03em" }}>Runit</span>
          </Link>
          <p style={{ fontSize: "0.8rem", color: "#333" }}>
            No account?{" "}
            <Link href="/signup" style={{ color: "#888", textDecoration: "none" }}>Sign up</Link>
          </p>
        </div>

        {/* Form */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          justifyContent: "center", maxWidth: 360, width: "100%",
          paddingBottom: "4rem",
        }}>
          <h1 style={{
            fontSize: "1.75rem", fontWeight: 700,
            letterSpacing: "-0.04em", color: "#fff",
            marginBottom: "0.5rem",
          }}>
            Welcome back
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#3d3d3d", marginBottom: "2.25rem" }}>
            Sign in to your Runit account
          </p>

          <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Email */}
            <div>
              <label style={{ display: "block", fontSize: "0.78rem", color: "#444", marginBottom: "0.5rem", fontWeight: 400 }}>
                Email address
              </label>
              <input
                type="email"
                placeholder="you@business.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                style={{
                  width: "100%", padding: "0.65rem 0.875rem",
                  background: "#0a0a0a",
                  border: `1px solid ${focusEmail ? "#3a3a3a" : "#1a1a1a"}`,
                  borderRadius: 7, fontSize: "0.875rem",
                  color: "#e0e0e0", outline: "none",
                  transition: "border-color 0.15s",
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Password */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <label style={{ fontSize: "0.78rem", color: "#444", fontWeight: 400 }}>Password</label>
                <a href="#" style={{ fontSize: "0.75rem", color: "#333", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#888")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#333")}
                >Forgot password?</a>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPw ? "text" : "password"}
                  placeholder="Enter your password"
                  value={pw}
                  onChange={e => setPw(e.target.value)}
                  onFocus={() => setFocusPw(true)}
                  onBlur={() => setFocusPw(false)}
                  style={{
                    width: "100%", padding: "0.65rem 2.5rem 0.65rem 0.875rem",
                    background: "#0a0a0a",
                    border: `1px solid ${focusPw ? "#3a3a3a" : "#1a1a1a"}`,
                    borderRadius: 7, fontSize: "0.875rem",
                    color: "#e0e0e0", outline: "none",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                  }}
                />
                <button type="button" onClick={() => setShowPw(v => !v)} style={{
                  position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer",
                  color: "#333", display: "flex", padding: 0,
                  transition: "color 0.15s",
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#888")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#333")}
                >
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button type="submit" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
              background: "#fff", color: "#000",
              padding: "0.7rem", borderRadius: 7,
              border: "none", cursor: "pointer",
              fontWeight: 600, fontSize: "0.875rem",
              fontFamily: "inherit", marginTop: "0.25rem",
            }}>
              Sign in <ArrowRight size={13} />
            </button>
          </form>

          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", margin: "1.75rem 0" }}>
            <div style={{ flex: 1, height: 1, background: "#111" }} />
            <span style={{ fontSize: "0.72rem", color: "#222" }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: "#111" }} />
          </div>

          <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#2a2a2a" }}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" style={{ color: "#555", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ccc")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}
            >Create one free</Link>
          </p>
        </div>
      </div>

      {/* ── Right — context panel ─────────────────────────────────────────── */}
      <div className="login-panel" style={{
        width: 460,
        background: "#060606",
        borderLeft: "1px solid #111",
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "3rem clamp(2rem,4vw,3.5rem)",
      }}>
        {/* Quote card */}
        <div style={{
          background: "#0a0a0a", border: "1px solid #1a1a1a",
          borderRadius: 10, padding: "1.75rem",
          marginBottom: "2.5rem",
        }}>
          <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
            &ldquo;I used to spend two hours every Monday sending updates to clients. Runit handles it while I sleep.&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 700, color: "#555" }}>
              A
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "#666" }}>Adaeze Okafor</p>
              <p style={{ fontSize: "0.72rem", color: "#2a2a2a" }}>Owner, Okafor Consultants</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {[
            { v: "1,000+", l: "Automations running" },
            { v: "5", l: "Channels" },
            { v: "₦5k", l: "Per month" },
          ].map(({ v, l }) => (
            <div key={l}>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#444", letterSpacing: "-0.03em" }}>{v}</p>
              <p style={{ fontSize: "0.72rem", color: "#252525", marginTop: 3 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .login-panel { display: flex; }
        @media (max-width: 768px) { .login-panel { display: none !important; } }
      `}</style>
    </div>
  );
}
