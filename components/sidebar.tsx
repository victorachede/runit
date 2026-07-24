import Link from "next/link";
import { Zap, LayoutDashboard, Bot, Users, CreditCard, Settings, LogOut } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/automations", icon: Bot, label: "Automations" },
  { href: "/dashboard/contacts", icon: Users, label: "Contacts" },
  { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: 240, background: "#0f172a", minHeight: "100vh",
      display: "flex", flexDirection: "column", padding: "1.5rem 0",
      position: "fixed", top: 0, left: 0, zIndex: 40
    }}>
      {/* Logo */}
      <div style={{ padding: "0 1.25rem 1.5rem", borderBottom: "1px solid #1e293b" }}>
        <Link href="/dashboard" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 32, height: 32, background: "#2563eb", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={16} color="#fff" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "#ffffff" }}>Runit</span>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "1.25rem 0.75rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            padding: "0.65rem 0.875rem", borderRadius: 8, textDecoration: "none",
            color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500,
            transition: "all 0.15s"
          }}
          onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "#1e293b"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
          onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
          >
            <item.icon size={17} />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* User */}
      <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid #1e293b" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <div style={{
            width: 34, height: 34, background: "#2563eb", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: "0.85rem"
          }}>V</div>
          <div>
            <div style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 500 }}>Victor A.</div>
            <div style={{ color: "#64748b", fontSize: "0.75rem" }}>Black Sheep Co.</div>
          </div>
        </div>
        <Link href="/login" style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          color: "#64748b", fontSize: "0.8rem", textDecoration: "none"
        }}>
          <LogOut size={14} /> Sign out
        </Link>
      </div>
    </aside>
  );
}
