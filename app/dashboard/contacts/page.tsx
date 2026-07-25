"use client";
import { useState } from "react";
import { Upload, Users, Trash2, Link2 } from "lucide-react";

const initial = [
  { id: 1, name: "Amaka Johnson", phone: "08012345678", email: "amaka@gmail.com" },
  { id: 2, name: "Emeka Obi", phone: "08098765432", email: "emeka@business.com" },
  { id: 3, name: "Chidera Nwachukwu", phone: "07011223344", email: "chidera@yahoo.com" },
  { id: 4, name: "Fatima Aliyu", phone: "08155667788", email: "fatima@outlook.com" },
  { id: 5, name: "Tunde Bakare", phone: "09021334455", email: "tunde@gmail.com" },
];

export default function ContactsPage() {
  const [contacts, setContacts] = useState(initial);
  const [sheetsUrl, setSheetsUrl] = useState("");
  const [showSheet, setShowSheet] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontFamily: "'Audio Wide', sans-serif", fontWeight: 400, fontSize: "1.15rem", color: "#f0f0f0", marginBottom: "0.25rem", letterSpacing: "0.02em" }}>Contacts</h1>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>{contacts.length} contacts imported</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button onClick={() => setShowSheet(!showSheet)} style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            background: "#ffffff", color: "#0f172a", padding: "0.65rem 1.1rem",
            borderRadius: 9, border: "1px solid #e2e8f0", cursor: "pointer", fontWeight: 500, fontSize: "0.875rem"
          }}>
            <Link2 size={15} /> Sync Google Sheets
          </button>
          <button style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            background: "#2563eb", color: "#fff", padding: "0.65rem 1.1rem",
            borderRadius: 9, border: "none", cursor: "pointer", fontWeight: 500, fontSize: "0.875rem"
          }}>
            <Upload size={15} /> Upload CSV
          </button>
        </div>
      </div>

      {showSheet && (
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", gap: "0.75rem" }}>
          <input
            value={sheetsUrl}
            onChange={(e) => setSheetsUrl(e.target.value)}
            placeholder="Paste your Google Sheets link here..."
            style={{ flex: 1, padding: "0.6rem 0.875rem", borderRadius: 8, border: "1px solid #bfdbfe", fontSize: "0.875rem", outline: "none" }}
          />
          <button style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1rem", cursor: "pointer", fontWeight: 500, fontSize: "0.875rem" }}>
            Sync
          </button>
        </div>
      )}

      {contacts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem", color: "#94a3b8", background: "#ffffff", borderRadius: 12, border: "1px solid #e2e8f0" }}>
          <Users size={40} style={{ margin: "0 auto 1rem", opacity: 0.4 }} />
          <p style={{ fontWeight: 500 }}>No contacts yet</p>
          <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>Upload a CSV or sync your Google Sheets to get started.</p>
        </div>
      ) : (
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                {["Name", "Phone", "Email", ""].map((h, i) => (
                  <th key={i} style={{ padding: "0.875rem 1.25rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr key={c.id} style={{ borderBottom: i < contacts.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: 32, height: 32, background: "#eff6ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", fontWeight: 700, fontSize: "0.8rem" }}>
                        {c.name[0]}
                      </div>
                      <span style={{ fontWeight: 500, color: "#0f172a", fontSize: "0.875rem" }}>{c.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "1rem 1.25rem", color: "#64748b", fontSize: "0.875rem" }}>{c.phone}</td>
                  <td style={{ padding: "1rem 1.25rem", color: "#64748b", fontSize: "0.875rem" }}>{c.email}</td>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <button onClick={() => setContacts((prev) => prev.filter((x) => x.id !== c.id))} style={{ background: "none", border: "none", cursor: "pointer", color: "#ef4444" }}>
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
