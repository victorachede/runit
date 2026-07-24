import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runit — Automate your business",
  description: "AI-native business automation for African SMEs. No workflows. No drag and drop. Just plain English.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
