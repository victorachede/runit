import { CreditCard, CheckCircle, Download } from "lucide-react";

const invoices = [
  { id: "INV-003", date: "Jul 1, 2026", amount: "₦5,000", status: "Paid" },
  { id: "INV-002", date: "Jun 1, 2026", amount: "₦5,000", status: "Paid" },
  { id: "INV-001", date: "May 1, 2026", amount: "₦5,000", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>Billing</h1>
        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Manage your subscription and payment history</p>
      </div>

      {/* Current Plan */}
      <div style={{
        background: "#ffffff", border: "2px solid #2563eb", borderRadius: 14,
        padding: "1.75rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <CheckCircle size={18} color="#22c55e" />
            <span style={{ fontWeight: 600, color: "#0f172a" }}>Pro Plan — Active</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
            <span style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a" }}>₦5,000</span>
            <span style={{ color: "#64748b", fontSize: "0.9rem" }}>/month</span>
          </div>
          <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "0.25rem" }}>Next billing date: August 1, 2026</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button style={{
            background: "#f1f5f9", color: "#0f172a", border: "none",
            padding: "0.65rem 1.25rem", borderRadius: 9, cursor: "pointer", fontWeight: 500, fontSize: "0.875rem"
          }}>
            Cancel plan
          </button>
          <button style={{
            background: "#2563eb", color: "#fff", border: "none",
            padding: "0.65rem 1.25rem", borderRadius: 9, cursor: "pointer", fontWeight: 500, fontSize: "0.875rem",
            display: "flex", alignItems: "center", gap: "0.5rem"
          }}>
            <CreditCard size={15} /> Update payment
          </button>
        </div>
      </div>

      {/* Features included */}
      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem", marginBottom: "1.5rem" }}>
        <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: "0.875rem", fontSize: "0.9rem" }}>What's included</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
          {["Unlimited automations", "SMS, Email, Telegram", "Up to 1,000 contacts", "Google Meet & Zoom links", "AI-powered setup", "Priority support"].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#475569" }}>
              <CheckCircle size={14} color="#22c55e" /> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Invoice history */}
      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #e2e8f0" }}>
          <h2 style={{ fontWeight: 600, color: "#0f172a", fontSize: "0.95rem" }}>Payment history</h2>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
              {["Invoice", "Date", "Amount", "Status", ""].map((h, i) => (
                <th key={i} style={{ padding: "0.75rem 1.25rem", textAlign: "left", fontSize: "0.78rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr key={inv.id} style={{ borderBottom: i < invoices.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                <td style={{ padding: "1rem 1.25rem", fontWeight: 500, color: "#0f172a", fontSize: "0.875rem" }}>{inv.id}</td>
                <td style={{ padding: "1rem 1.25rem", color: "#64748b", fontSize: "0.875rem" }}>{inv.date}</td>
                <td style={{ padding: "1rem 1.25rem", color: "#0f172a", fontWeight: 500, fontSize: "0.875rem" }}>{inv.amount}</td>
                <td style={{ padding: "1rem 1.25rem" }}>
                  <span style={{ background: "#dcfce7", color: "#16a34a", padding: "0.2rem 0.65rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 500 }}>{inv.status}</span>
                </td>
                <td style={{ padding: "1rem 1.25rem" }}>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem" }}>
                    <Download size={13} /> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
