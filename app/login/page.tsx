"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

const RunitLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.93)} viewBox="0 0 28 26" fill="none">
    <polygon points="14,1 27,25 1,25" fill="white" />
    <clipPath id="lc-login">
      <polygon points="14,1 27,25 1,25" />
    </clipPath>
    <g clipPath="url(#lc-login)" stroke="#08080a" strokeWidth="1.3">
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

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      background: "#08080a",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* Left — form */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 2rem",
        position: "relative",
      }}>
        {/* Top nav */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          padding: "1.25rem 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <RunitLogo size={22} />
            <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#f2f2f5", letterSpacing: "-0.03em" }}>Runit</span>
          </Link>
          <p style={{ fontSize: "0.8rem", color: "#35353f" }}>
            No account?{" "}
            <Link href="/signup" style={{ color: "#9d80fc", textDecoration: "none", fontWeight: 500 }}>Sign up free</Link>
          </p>
        </div>

        {/* Form card */}
        <div style={{ width: "100%", maxWidth: 380 }}>
          <div style={{ marginBottom: "2.25rem" }}>
            <h1 style={{
              fontSize: "1.6rem", fontWeight: 700,
              letterSpacing: "-0.04em", color: "#ebebf0",
              marginBottom: "0.5rem",
            }}>
              Welcome back
            </h1>
            <p style={{ color: "#35353f", fontSize: "0.85rem" }}>
              Sign in to continue to Runit
            </p>
          </div>

          <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label style={{ fontSize: "0.78rem", fontWeight: 500, color: "#55555e", letterSpacing: "0.01em" }}>
                Email address
              </label>
              <input
                type="email"
                placeholder="you@business.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: "100%", padding: "0.7rem 0.875rem",
                  background: "#0d0d11",
                  border: "1px solid #1e1e28",
                  borderRadius: 8, fontSize: "0.875rem",
                  color: "#d8d8e8", outline: "none",
                  transition: "border-color 0.15s",
                  fontFamily: "inherit",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(124,90,246,0.4)")}
                onBlur={e => (e.currentTarget.style.borderColor = "#1e1e28")}
              />
            </div>

            {/* Password */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 500, color: "#55555e", letterSpacing: "0.01em" }}>
                  Password
                </label>
                <a href="#" style={{ fontSize: "0.75rem", color: "#9d80fc", textDecoration: "none", fontWeight: 500 }}>
                  Forgot password?
                </a>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{
                    width: "100%", padding: "0.7rem 2.75rem 0.7rem 0.875rem",
                    background: "#0d0d11",
                    border: "1px solid #1e1e28",
                    borderRadius: 8, fontSize: "0.875rem",
                    color: "#d8d8e8", outline: "none",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(124,90,246,0.4)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#1e1e28")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  style={{
                    position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", color: "#35353f",
                    display: "flex", alignItems: "center", padding: 0,
                  }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                background: "#f0f0f5", color: "#08080a",
                padding: "0.75rem", borderRadius: 8,
                border: "none", cursor: "pointer",
                fontWeight: 600, fontSize: "0.9rem",
                letterSpacing: "-0.01em", fontFamily: "inherit",
                marginTop: "0.25rem",
                transition: "background 0.15s",
              }}
            >
              Sign in <ArrowRight size={13} />
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.5rem 0" }}>
            <div style={{ flex: 1, height: 1, background: "#1a1a22" }} />
            <span style={{ fontSize: "0.72rem", color: "#28282e" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "#1a1a22" }} />
          </div>

          <p style={{ textAlign: "center", fontSize: "0.82rem", color: "#28282e" }}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" style={{ color: "#9d80fc", textDecoration: "none", fontWeight: 500 }}>
              Create one free
            </Link>
          </p>
        </div>
      </div>

      {/* Right — decorative panel (hidden on mobile) */}
      <div className="login-panel" style={{
        width: 480,
        background: "#0d0d11",
        borderLeft: "1px solid #14141a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 400, height: 400,
          background: "radial-gradient(ellipse, rgba(124,90,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Testimonial card */}
        <div style={{
          background: "#111116",
          border: "1px solid #1e1e28",
          borderRadius: 14,
          padding: "1.75rem",
          maxWidth: 340,
          position: "relative",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(124,90,246,0.3), transparent)",
          }} />
          <p style={{ fontSize: "0.9rem", color: "#6a6a7a", lineHeight: 1.75, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
            &ldquo;I used to spend 2 hours every Monday sending summaries to clients. Now Runit handles it while I sleep.&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: 34, height: 34, borderRadius: "50%",
              background: "linear-gradient(135deg, #7c5af6, #a78bfa)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.78rem", fontWeight: 700, color: "#fff",
            }}>
              A
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#c8c8d8" }}>Adaeze Okafor</div>
              <div style={{ fontSize: "0.72rem", color: "#35353f" }}>Owner, Okafor Consultants</div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "2rem", marginTop: "2.5rem" }}>
          {[
            { v: "1,000+", l: "Automations live" },
            { v: "5", l: "Channels" },
            { v: "₦5k", l: "Per month" },
          ].map(({ v, l }) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#d8d8e8", letterSpacing: "-0.03em" }}>{v}</div>
              <div style={{ fontSize: "0.7rem", color: "#28282e", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .login-panel { display: flex; }
        @media (max-width: 800px) { .login-panel { display: none !important; } }
      `}</style>
    </div>
  );
}
