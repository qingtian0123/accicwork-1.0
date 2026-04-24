import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina Beads — Wear Your Intention | Custom Healing Crystal Bracelets",
  description: "Design your own beaded bracelet with real crystals, lampwork glass & 14k gold. Every bead carries meaning — wear your intention, carry your calm. Ethically sourced, artisan crafted, shipped worldwide.",
  keywords: "custom bead bracelet, crystal healing jewelry, DIY bracelet, intention jewelry, spiritual beads, lampwork glass, morandi aesthetic, women empowerment bracelet",
  openGraph: {
    title: "Lumina Beads — Wear Your Intention",
    description: "Design your own healing crystal bracelet. Every bead carries meaning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}