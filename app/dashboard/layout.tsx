import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
      <Sidebar />
      <main style={{ marginLeft: 240, flex: 1, padding: "2rem" }}>
        {children}
      </main>
    </div>
  );
}
