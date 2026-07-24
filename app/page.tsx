import Link from "next/link";
import { ArrowRight, MessageSquare, Zap, CreditCard, Mail, Phone, Send } from "lucide-react";

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 2rem", borderBottom: "1px solid #e2e8f0",
        position: "sticky", top: 0, background: "#ffffff", zIndex: 50
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{
            width: 32, height: 32, background: "#2563eb", borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Zap size={16} color="#fff" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0f172a" }}>Runit</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/login" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.9rem" }}>Login</Link>
          <Link href="/signup" style={{
            background: "#2563eb", color: "#fff", padding: "0.5rem 1.25rem",
            borderRadius: 8, textDecoration: "none", fontSize: "0.9rem", fontWeight: 500
          }}>Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "6rem 2rem", textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", background: "#eff6ff", color: "#2563eb",
          padding: "0.35rem 1rem", borderRadius: 999, fontSize: "0.8rem",
          fontWeight: 500, marginBottom: "1.5rem"
        }}>
          Built for African businesses
        </div>
        <h1 style={{
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800,
          color: "#0f172a", lineHeight: 1.15, marginBottom: "1.25rem"
        }}>
          Automate your business.<br />Just tell us what to do.
        </h1>
        <p style={{
          fontSize: "1.15rem", color: "#64748b", marginBottom: "2.5rem",
          lineHeight: 1.7, maxWidth: 520, margin: "0 auto 2.5rem"
        }}>
          No workflows. No drag and drop. No technical knowledge needed.
          Describe what you want in plain English and Runit handles the rest.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{
            background: "#2563eb", color: "#fff", padding: "0.85rem 2rem",
            borderRadius: 10, textDecoration: "none", fontWeight: 600,
            fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem"
          }}>
            Get Started Free <ArrowRight size={16} />
          </Link>
          <Link href="#how" style={{
            background: "#f1f5f9", color: "#0f172a", padding: "0.85rem 2rem",
            borderRadius: 10, textDecoration: "none", fontWeight: 500, fontSize: "1rem"
          }}>
            See how it works
          </Link>
        </div>

        {/* Chat preview */}
        <div style={{
          marginTop: "4rem", background: "#f8fafc", border: "1px solid #e2e8f0",
          borderRadius: 16, padding: "1.5rem", textAlign: "left", maxWidth: 560, margin: "4rem auto 0"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { role: "user", text: "Send appointment reminders to all my clients every morning at 8am" },
              { role: "ai", text: "Got it. I'll send SMS reminders to your contact list every day at 8:00 AM. Shall I activate this?" },
              { role: "user", text: "Yes, go ahead" },
              { role: "ai", text: "Done! Your automation is live. 24 contacts will receive reminders starting tomorrow morning." },
            ].map((msg, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start"
              }}>
                <div style={{
                  background: msg.role === "user" ? "#2563eb" : "#ffffff",
                  color: msg.role === "user" ? "#fff" : "#0f172a",
                  padding: "0.65rem 1rem", borderRadius: 12, fontSize: "0.875rem",
                  maxWidth: "80%", border: msg.role === "ai" ? "1px solid #e2e8f0" : "none",
                  lineHeight: 1.5
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="how" style={{ padding: "5rem 2rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem" }}>
            Everything your business needs
          </h2>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "3rem" }}>
            One platform. Multiple channels. Zero complexity.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: <Phone size={22} color="#2563eb" />, title: "SMS & WhatsApp", desc: "Send messages directly to your customers' phones. Replaces expensive bulk SMS services." },
              { icon: <Mail size={22} color="#2563eb" />, title: "Email Automation", desc: "Powered by Resend. Beautiful emails sent automatically on schedule or trigger." },
              { icon: <Send size={22} color="#2563eb" />, title: "Telegram", desc: "Send updates, reminders and reports directly to Telegram -- free and instant." },
              { icon: <MessageSquare size={22} color="#2563eb" />, title: "Meeting Links", desc: "Auto-generate Google Meet or Zoom links and send them to your clients." },
              { icon: <Zap size={22} color="#2563eb" />, title: "AI Powered", desc: "Just describe what you want. Our AI understands plain English and sets it up instantly." },
              { icon: <CreditCard size={22} color="#2563eb" />, title: "Naira Billing", desc: "Pay in naira via Paystack. No dollar card needed. Cancel anytime." },
            ].map((f, i) => (
              <div key={i} style={{
                background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12,
                padding: "1.5rem"
              }}>
                <div style={{
                  width: 44, height: 44, background: "#eff6ff", borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem"
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 600, color: "#0f172a", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem" }}>Simple pricing</h2>
          <p style={{ color: "#64748b", marginBottom: "2.5rem" }}>One plan. Everything included. No surprises.</p>
          <div style={{
            border: "2px solid #2563eb", borderRadius: 16, padding: "2.5rem",
            background: "#ffffff", boxShadow: "0 4px 24px rgba(37,99,235,0.08)"
          }}>
            <div style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Pro Plan</div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.25rem", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "#0f172a" }}>₦5,000</span>
              <span style={{ color: "#64748b" }}>/month</span>
            </div>
            <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "2rem" }}>Everything you need to automate your business</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem", textAlign: "left" }}>
              {["Unlimited automations", "SMS, Email, Telegram delivery", "Up to 1,000 contacts", "Google Meet & Zoom integration", "AI-powered setup", "Priority support"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.9rem", color: "#0f172a" }}>
                  <div style={{ width: 18, height: 18, background: "#2563eb", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: "0.65rem", fontWeight: 700 }}>✓</span>
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <Link href="/signup" style={{
              display: "block", background: "#2563eb", color: "#fff",
              padding: "0.85rem", borderRadius: 10, textDecoration: "none",
              fontWeight: 600, textAlign: "center"
            }}>
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e2e8f0", padding: "2rem", textAlign: "center", color: "#94a3b8", fontSize: "0.85rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <div style={{ width: 24, height: 24, background: "#2563eb", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={12} color="#fff" />
          </div>
          <span style={{ fontWeight: 600, color: "#0f172a" }}>Runit</span>
        </div>
        <p>A Black Sheep Co. product. Built for Africa.</p>
      </footer>
    </div>
  );
}
