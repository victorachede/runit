"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Zap, LayoutDashboard, Bot, Users, CreditCard,
  Settings, LogOut, ChevronRight
} from "lucide-react";

const navItems = [
  { href: "/dashboard",               icon: LayoutDashboard, label: "Dashboard"   },
  { href: "/dashboard/automations",   icon: Bot,             label: "Automations" },
  { href: "/dashboard/contacts",      icon: Users,           label: "Contacts"    },
  { href: "/dashboard/billing",       icon: CreditCard,      label: "Billing"     },
  { href: "/dashboard/settings",      icon: Settings,        label: "Settings"    },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop sidebar ──────────────────────────────────────────── */}
      <aside className="runit-sidebar">
        {/* Logo */}
        <div className="runit-sidebar-logo">
          <Link href="/dashboard" className="runit-logo-link">
            <div className="runit-logo-icon">
              <Zap size={13} color="#0a0a0a" />
            </div>
            <span className="runit-logo-text">Runit</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="runit-sidebar-nav">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`runit-nav-item ${active ? "active" : ""}`}
                title={item.label}
              >
                <item.icon size={16} />
                <span className="runit-nav-label">{item.label}</span>
                {active && <ChevronRight size={12} className="runit-nav-chevron" />}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="runit-sidebar-user">
          <div className="runit-user-row">
            <div className="runit-avatar">V</div>
            <div className="runit-user-info">
              <div className="runit-user-name">Victor A.</div>
              <div className="runit-user-org">Black Sheep Co.</div>
            </div>
          </div>
          <Link href="/login" className="runit-signout">
            <LogOut size={12} /> Sign out
          </Link>
        </div>
      </aside>

      {/* ── Mobile bottom bar ────────────────────────────────────────── */}
      <nav className="runit-mobile-nav">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`runit-mobile-item ${active ? "active" : ""}`}
            >
              <item.icon size={20} />
              <span className="runit-mobile-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <style>{`
        /* ── Shared ── */
        .runit-sidebar {
          width: 220px;
          background: #0a0a0a;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0; left: 0;
          z-index: 40;
          border-right: 1px solid #161616;
        }

        /* Logo */
        .runit-sidebar-logo {
          padding: 1.125rem 1rem 1rem;
          border-bottom: 1px solid #161616;
        }
        .runit-logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .runit-logo-icon {
          width: 26px; height: 26px;
          background: #f0f0f0;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .runit-logo-text {
          font-family: 'Audio Wide', sans-serif;
          font-weight: 400;
          font-size: 1rem;
          color: #f0f0f0;
          letter-spacing: 0.03em;
        }

        /* Nav */
        .runit-sidebar-nav {
          flex: 1;
          padding: 0.75rem 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .runit-nav-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.5rem 0.75rem;
          border-radius: 7px;
          text-decoration: none;
          color: #3a3a3a;
          font-size: 0.825rem;
          font-weight: 400;
          transition: color 0.1s, background 0.1s;
          position: relative;
        }
        .runit-nav-item:hover {
          color: #888;
          background: #111;
        }
        .runit-nav-item.active {
          color: #f0f0f0;
          background: #161616;
          font-weight: 500;
        }
        .runit-nav-label {
          flex: 1;
        }
        .runit-nav-chevron {
          opacity: 0.3;
          flex-shrink: 0;
        }

        /* User */
        .runit-sidebar-user {
          padding: 0.875rem 1rem;
          border-top: 1px solid #161616;
        }
        .runit-user-row {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          margin-bottom: 0.75rem;
        }
        .runit-avatar {
          width: 28px; height: 28px;
          background: #1a1a1a;
          border: 1px solid #222;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          font-weight: 600;
          font-size: 0.75rem;
          flex-shrink: 0;
        }
        .runit-user-info { min-width: 0; }
        .runit-user-name {
          color: #f0f0f0;
          font-size: 0.8rem;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .runit-user-org {
          color: #2a2a2a;
          font-size: 0.7rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .runit-signout {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #2a2a2a;
          font-size: 0.75rem;
          text-decoration: none;
          transition: color 0.1s;
        }
        .runit-signout:hover { color: #555; }

        /* ── Mobile nav ── */
        .runit-mobile-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .runit-sidebar { display: none; }

          .runit-mobile-nav {
            display: flex;
            position: fixed;
            bottom: 0; left: 0; right: 0;
            z-index: 50;
            background: #0a0a0a;
            border-top: 1px solid #161616;
            padding: 0 0.25rem;
            padding-bottom: env(safe-area-inset-bottom);
          }

          .runit-mobile-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 0.625rem 0.25rem;
            text-decoration: none;
            color: #2d2d2d;
            transition: color 0.15s;
            min-width: 0;
          }
          .runit-mobile-item.active {
            color: #f0f0f0;
          }
          .runit-mobile-item:hover {
            color: #666;
          }
          .runit-mobile-label {
            font-size: 0.6rem;
            font-weight: 500;
            letter-spacing: 0.01em;
            white-space: nowrap;
          }
        }
      `}</style>
    </>
  );
}
