import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OrbitFi — BSC wallet copilot",
  description: "A non-custodial BSC wallet dashboard and swap assistant.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
