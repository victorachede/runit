"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";

const RunitLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.93)} viewBox="0 0 28 26" fill="none">
    <polygon points="1,1 27,1 14,25" fill="white" />
    <clipPath id="rl-signup">
      <polygon points="1,1 27,1 14,25" />
    </clipPath>
    <g clipPath="url(#rl-signup)" stroke="#000" strokeWidth="1.25">
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

function Field({
  label, type = "text", placeholder, value, onChange,
}: {
  label: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPw = type === "password";

  return (
    <div>
      <label style={{ display: "block", fontSize: "0.78rem", color: "#444", marginBottom: "0.5rem", fontWeight: 400 }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          type={isPw && show ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: isPw ? "0.65rem 2.5rem 0.65rem 0.875rem" : "0.65rem 0.875rem",
            background: "#0a0a0a",
            border: `1px solid ${focused ? "#3a3a3a" : "#1a1a1a"}`,
            borderRadius: 7, fontSize: "0.875rem",
            color: "#e0e0e0", outline: "none",
            transition: "border-color 0.15s",
            fontFamily: "inherit",
          }}
        />
        {isPw && (
          <button type="button" onClick={() => setShow(v => !v)} style={{
            position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)",
            background: "none", border: "none", cursor: "pointer",
            color: "#333", display: "flex", padding: 0,
          }}>
            {show ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div style={{
      minHeight: "100vh", background: "#000",
      display: "flex", fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* ── Left — value prop panel ───────────────────────────────────────── */}
      <div className="signup-panel" style={{
        width: 420,
        background: "#060606",
        borderRight: "1px solid #111",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 clamp(2rem,4vw,3rem)",
        flexShrink: 0,
      }}>
        {/* Top nav */}
        <div style={{ height: 52, display: "flex", alignItems: "center" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <RunitLogo size={20} />
            <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff", letterSpacing: "-0.03em" }}>Runit</span>
          </Link>
        </div>

        {/* Features */}
        <div style={{ paddingBottom: "6rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#c8c8c8", letterSpacing: "-0.035em", marginBottom: "2rem", lineHeight: 1.3 }}>
            Everything your business<br />needs to stay in touch.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              "Unlimited automations",
              "5 channels: Gmail, WhatsApp, Telegram, SMS & Zoom",
              "Plain English — no configuration",
              "Up to 1,000 contacts",
              "Delivery analytics & reporting",
              "₦5,000/month after free trial",
            ].map(f => (
              <div key={f} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: 16, height: 16, background: "#111", border: "1px solid #1f1f1f", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <Check size={9} color="#555" strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: "0.82rem", color: "#3a3a3a", lineHeight: 1.5 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: "0.72rem", color: "#1a1a1a", paddingBottom: "2rem" }}>
          A Black Sheep Co. product · Built for Africa
        </p>
      </div>

      {/* ── Right — form ─────────────────────────────────────────────────── */}
      <div style={{
        flex: 1,
        display: "flex", flexDirection: "column",
        padding: "0 clamp(1.5rem,5vw,4rem)",
      }}>
        {/* Top nav */}
        <div style={{
          height: 52, display: "flex", alignItems: "center",
          justifyContent: "flex-end", flexShrink: 0,
        }}>
          <p style={{ fontSize: "0.8rem", color: "#333" }}>
            Have an account?{" "}
            <Link href="/login" style={{ color: "#555", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ccc")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}
            >Sign in</Link>
          </p>
        </div>

        {/* Form */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          justifyContent: "center", maxWidth: 380, width: "100%",
          paddingBottom: "4rem",
        }}>
          <h1 style={{
            fontSize: "1.75rem", fontWeight: 700,
            letterSpacing: "-0.04em", color: "#fff",
            marginBottom: "0.5rem",
          }}>
            Create your account
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#3d3d3d", marginBottom: "2.25rem" }}>
            Free 14-day trial — no card required
          </p>

          <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <Field label="First name" placeholder="Victor" value={firstName} onChange={setFirstName} />
              <Field label="Last name" placeholder="Achede" value={lastName} onChange={setLastName} />
            </div>
            <Field label="Business name" placeholder="Black Sheep Co." value={business} onChange={setBusiness} />
            <Field label="Email address" type="email" placeholder="you@business.com" value={email} onChange={setEmail} />
            <Field label="Password" type="password" placeholder="Min. 8 characters" value={pw} onChange={setPw} />

            <button type="submit" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
              background: "#fff", color: "#000",
              padding: "0.7rem", borderRadius: 7,
              border: "none", cursor: "pointer",
              fontWeight: 600, fontSize: "0.875rem",
              fontFamily: "inherit", marginTop: "0.25rem",
            }}>
              Create account <ArrowRight size={13} />
            </button>

            <p style={{ fontSize: "0.72rem", color: "#252525", textAlign: "center", lineHeight: 1.7 }}>
              By signing up you agree to our{" "}
              <a href="#" style={{ color: "#2e2e2e", textDecoration: "none" }}>Terms</a>
              {" "}and{" "}
              <a href="#" style={{ color: "#2e2e2e", textDecoration: "none" }}>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        .signup-panel { display: flex; }
        @media (max-width: 768px) { .signup-panel { display: none !important; } }
      `}</style>
    </div>
  );
}
