import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSA Checklist",
  description: "Track your DSA progress interactively",
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
