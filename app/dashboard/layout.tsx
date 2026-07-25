import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0a0a0a" }}>
      <Sidebar />
      <main style={{ marginLeft: 220, flex: 1, padding: "2rem 2.5rem", maxWidth: "calc(100vw - 220px)" }}>
        {children}
      </main>
      <style>{`
        @media (max-width: 768px) {
          main {
            margin-left: 0 !important;
            max-width: 100vw !important;
            padding: 1.5rem 1.125rem !important;
            padding-bottom: calc(80px + env(safe-area-inset-bottom)) !important;
          }
        }
      `}</style>
    </div>
  );
}
