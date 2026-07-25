import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="runit-layout">
      <Sidebar />
      <main className="runit-main">
        {children}
      </main>

      <style>{`
        .runit-layout {
          display: flex;
          min-height: 100vh;
          background: #0a0a0a;
        }
        .runit-main {
          margin-left: 220px;
          flex: 1;
          padding: 2rem 2.5rem;
          max-width: calc(100vw - 220px);
          min-width: 0;
        }

        @media (max-width: 768px) {
          .runit-main {
            margin-left: 0;
            max-width: 100vw;
            padding: 1.5rem 1.125rem;
            /* space for fixed bottom nav */
            padding-bottom: calc(72px + env(safe-area-inset-bottom));
          }
        }
      `}</style>
    </div>
  );
}
