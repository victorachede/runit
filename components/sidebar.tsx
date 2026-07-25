"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Zap, LayoutDashboard, Bot, Users, CreditCard,
  Settings, LogOut, ChevronRight
} from "lucide-react";

const navItems = [
  { href: "/dashboard",             icon: LayoutDashboard, label: "Dashboard"   },
  { href: "/dashboard/automations", icon: Bot,             label: "Automations" },
  { href: "/dashboard/contacts",    icon: Users,           label: "Contacts"    },
  { href: "/dashboard/billing",     icon: CreditCard,      label: "Billing"     },
  { href: "/dashboard/settings",    icon: Settings,        label: "Settings"    },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside style={{
        width: 220, background: "#0a0a0a", minHeight: "100vh",
        display: "flex", flexDirection: "column",
        position: "fixed", top: 0, left: 0, zIndex: 40,
        borderRight: "1px solid #161616",
      }}>
        {/* Logo */}
        <div style={{ padding: "1.125rem 1rem 1rem", borderBottom: "1px solid #161616" }}>
          <Link href="/dashboard" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
              width: 26, height: 26, background: "#f0f0f0", borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Zap size={13} color="#0a0a0a" />
            </div>
            <span style={{
              fontFamily: "'Audio Wide', sans-serif",
              fontWeight: 400, fontSize: "0.95rem",
              color: "#f0f0f0", letterSpacing: "0.03em",
            }}>Runit</span>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0.75rem 0.5rem", display: "flex", flexDirection: "column", gap: 1 }}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                padding: "0.5rem 0.75rem", borderRadius: 7, textDecoration: "none",
                color: active ? "#f0f0f0" : "#3a3a3a",
                background: active ? "#161616" : "transparent",
                fontSize: "0.825rem", fontWeight: active ? 500 : 400,
                transition: "all 0.1s",
              }}>
                <item.icon size={16} />
                <span style={{ flex: 1 }}>{item.label}</span>
                {active && <ChevronRight size={12} style={{ opacity: 0.3 }} />}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div style={{ padding: "0.875rem 1rem", borderTop: "1px solid #161616" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
            <div style={{
              width: 28, height: 28, background: "#1a1a1a", border: "1px solid #222",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              color: "#888", fontWeight: 600, fontSize: "0.75rem", flexShrink: 0,
            }}>V</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ color: "#f0f0f0", fontSize: "0.8rem", fontWeight: 500 }}>Victor A.</div>
              <div style={{ color: "#2a2a2a", fontSize: "0.7rem" }}>Black Sheep Co.</div>
            </div>
          </div>
          <Link href="/login" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#2a2a2a", fontSize: "0.75rem", textDecoration: "none" }}>
            <LogOut size={12} /> Sign out
          </Link>
        </div>
      </aside>

      {/* ── Mobile bottom nav ── */}
      <nav style={{
        display: "none",
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
        background: "#0a0a0a", borderTop: "1px solid #161616",
      }} id="runit-mobile-nav">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 4, padding: "0.625rem 0.25rem 0.75rem",
              textDecoration: "none",
              color: active ? "#f0f0f0" : "#2d2d2d",
            }}>
              <item.icon size={20} />
              <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.01em" }}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          aside { display: none !important; }
          #runit-mobile-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}
