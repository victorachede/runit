"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, LayoutDashboard, Bot, Users, CreditCard, Settings, LogOut } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/automations", icon: Bot, label: "Automations" },
  { href: "/dashboard/contacts", icon: Users, label: "Contacts" },
  { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{
      width: 220, background: "#0a0a0a", minHeight: "100vh",
      display: "flex", flexDirection: "column",
      position: "fixed", top: 0, left: 0, zIndex: 40,
      borderRight: "1px solid #161616"
    }}>
      {/* Logo */}
      <div style={{ padding: "1.25rem 1.1rem 1rem", borderBottom: "1px solid #161616" }}>
        <Link href="/dashboard" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.45rem" }}>
          <div style={{ width: 26, height: 26, background: "#f0f0f0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={13} color="#0a0a0a" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#f0f0f0", letterSpacing: "-0.02em" }}>Runit</span>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "0.875rem 0.625rem", display: "flex", flexDirection: "column", gap: "2px" }}>
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} style={{
              display: "flex", alignItems: "center", gap: "0.6rem",
              padding: "0.55rem 0.75rem", borderRadius: 7, textDecoration: "none",
              color: active ? "#f0f0f0" : "#444",
              background: active ? "#161616" : "transparent",
              fontSize: "0.835rem", fontWeight: active ? 500 : 400,
              transition: "all 0.1s",
            }}>
              <item.icon size={15} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div style={{ padding: "0.875rem 1.1rem", borderTop: "1px solid #161616" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
          <div style={{
            width: 28, height: 28, background: "#1a1a1a", border: "1px solid #222", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#888", fontWeight: 600, fontSize: "0.75rem"
          }}>V</div>
          <div>
            <div style={{ color: "#f0f0f0", fontSize: "0.8rem", fontWeight: 500 }}>Victor A.</div>
            <div style={{ color: "#333", fontSize: "0.7rem" }}>Black Sheep Co.</div>
          </div>
        </div>
        <Link href="/login" style={{
          display: "flex", alignItems: "center", gap: "0.4rem",
          color: "#333", fontSize: "0.75rem", textDecoration: "none"
        }}>
          <LogOut size={12} /> Sign out
        </Link>
      </div>
    </aside>
  );
}
