import Link from "next/link";
import { Zap } from "lucide-react";

export default function LoginPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc", padding: "1rem" }}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 36, height: 36, background: "#2563eb", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={18} color="#fff" />
            </div>
            <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0f172a" }}>Runit</span>
          </Link>
          <h1 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.4rem" }}>Welcome back</h1>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Sign in to your account</p>
        </div>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 500, color: "#0f172a", marginBottom: "0.4rem" }}>Email address</label>
              <input type="email" placeholder="you@business.com" style={{
                width: "100%", padding: "0.7rem 0.875rem", border: "1px solid #e2e8f0",
                borderRadius: 8, fontSize: "0.9rem", outline: "none", color: "#0f172a",
                background: "#ffffff"
              }} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 500, color: "#0f172a" }}>Password</label>
                <Link href="#" style={{ fontSize: "0.8rem", color: "#2563eb", textDecoration: "none" }}>Forgot password?</Link>
              </div>
              <input type="password" placeholder="••••••••" style={{
                width: "100%", padding: "0.7rem 0.875rem", border: "1px solid #e2e8f0",
                borderRadius: 8, fontSize: "0.9rem", outline: "none", color: "#0f172a",
                background: "#ffffff"
              }} />
            </div>
            <Link href="/dashboard" style={{
              display: "block", background: "#2563eb", color: "#fff", padding: "0.8rem",
              borderRadius: 9, textDecoration: "none", fontWeight: 600, textAlign: "center", fontSize: "0.95rem"
            }}>
              Sign in
            </Link>
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem", color: "#64748b" }}>
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
