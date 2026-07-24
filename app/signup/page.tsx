"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";

const RunitLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.93)} viewBox="0 0 28 26" fill="none">
    <polygon points="14,1 27,25 1,25" fill="white" />
    <clipPath id="lc-signup">
      <polygon points="14,1 27,25 1,25" />
    </clipPath>
    <g clipPath="url(#lc-signup)" stroke="#08080a" strokeWidth="1.3">
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

const InputField = ({
  label, type = "text", placeholder, value, onChange, note,
}: {
  label: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; note?: string;
}) => {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label style={{ fontSize: "0.78rem", fontWeight: 500, color: "#55555e", letterSpacing: "0.01em" }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          type={isPassword && show ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            width: "100%",
            padding: isPassword ? "0.7rem 2.75rem 0.7rem 0.875rem" : "0.7rem 0.875rem",
            background: "#0d0d11",
            border: `1px solid ${focused ? "rgba(124,90,246,0.4)" : "#1e1e28"}`,
            borderRadius: 8, fontSize: "0.875rem",
            color: "#d8d8e8", outline: "none",
            transition: "border-color 0.15s",
            fontFamily: "inherit",
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(v => !v)}
            style={{
              position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer", color: "#35353f",
              display: "flex", alignItems: "center", padding: 0,
            }}
          >
            {show ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
      {note && <p style={{ fontSize: "0.72rem", color: "#28282e" }}>{note}</p>}
    </div>
  );
};

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      background: "#08080a",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* Left — decorative */}
      <div className="signup-panel" style={{
        width: 440,
        background: "#0d0d11",
        borderRight: "1px solid #14141a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2.5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden style={{
          position: "absolute", bottom: "10%", right: "-20%",
          width: 500, height: 500,
          background: "radial-gradient(ellipse, rgba(124,90,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <RunitLogo size={22} />
          <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#f2f2f5", letterSpacing: "-0.03em" }}>Runit</span>
        </Link>

        {/* Feature list */}
        <div>
          <p style={{ fontSize: "0.68rem", color: "#7c5af6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1.5rem" }}>
            What you get
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { title: "Unlimited automations", desc: "No cap on what you can automate." },
              { title: "5 channels included", desc: "Gmail, WhatsApp, Telegram, SMS & Zoom." },
              { title: "Plain English setup", desc: "No configuration. Just describe what you want." },
              { title: "1,000 contacts", desc: "Send to your full customer list." },
              { title: "Analytics & reporting", desc: "See delivery rates and engagement in real time." },
            ].map(({ title, desc }) => (
              <div key={title} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 5,
                  background: "rgba(124,90,246,0.1)",
                  border: "1px solid rgba(124,90,246,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: 1,
                }}>
                  <Check size={10} color="#9d80fc" />
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#c8c8d8", marginBottom: "0.2rem", letterSpacing: "-0.01em" }}>{title}</div>
                  <div style={{ fontSize: "0.76rem", color: "#2e2e38", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: "0.72rem", color: "#1e1e28" }}>
          A Black Sheep Co. product · Built for Africa
        </p>
      </div>

      {/* Right — form */}
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
          position: "absolute", top: 0, right: 0,
          padding: "1.5rem 2rem",
        }}>
          <p style={{ fontSize: "0.8rem", color: "#35353f" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#9d80fc", textDecoration: "none", fontWeight: 500 }}>Sign in</Link>
          </p>
        </div>

        <div style={{ width: "100%", maxWidth: 400 }}>
          <div style={{ marginBottom: "2.25rem" }}>
            <h1 style={{
              fontSize: "1.6rem", fontWeight: 700,
              letterSpacing: "-0.04em", color: "#ebebf0",
              marginBottom: "0.5rem",
            }}>
              Create your account
            </h1>
            <p style={{ color: "#35353f", fontSize: "0.85rem" }}>
              Start automating your business today · Free 14-day trial
            </p>
          </div>

          <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {/* Name row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
              <InputField label="First name" placeholder="Victor" value={firstName} onChange={setFirstName} />
              <InputField label="Last name" placeholder="Achede" value={lastName} onChange={setLastName} />
            </div>

            <InputField label="Business name" placeholder="Black Sheep Co." value={business} onChange={setBusiness} />
            <InputField label="Email address" type="email" placeholder="you@business.com" value={email} onChange={setEmail} />
            <InputField
              label="Password"
              type="password"
              placeholder="Min. 8 characters"
              value={password}
              onChange={setPassword}
              note="Use a strong password you don't use elsewhere."
            />

            <button
              type="submit"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                background: "#f0f0f5", color: "#08080a",
                padding: "0.8rem", borderRadius: 8,
                border: "none", cursor: "pointer",
                fontWeight: 600, fontSize: "0.9rem",
                letterSpacing: "-0.01em", fontFamily: "inherit",
                marginTop: "0.25rem",
                transition: "background 0.15s",
              }}
            >
              Create account <ArrowRight size={13} />
            </button>

            <p style={{ fontSize: "0.72rem", color: "#28282e", textAlign: "center", lineHeight: 1.6 }}>
              By creating an account you agree to our{" "}
              <a href="#" style={{ color: "#3c3c4a", textDecoration: "none" }}>Terms of Service</a>
              {" "}and{" "}
              <a href="#" style={{ color: "#3c3c4a", textDecoration: "none" }}>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        .signup-panel { display: flex; }
        @media (max-width: 860px) { .signup-panel { display: none !important; } }
      `}</style>
    </div>
  );
}
