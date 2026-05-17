import "./globals.css";

export const metadata = {
  title: "FutureVerse",
  description: "The operating system for human knowledge.",
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