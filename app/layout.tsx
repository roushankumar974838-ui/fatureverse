import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FutureVerse",
  description: "The operating system for human knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}