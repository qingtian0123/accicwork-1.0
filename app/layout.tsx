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
  title: "Lumina Beads — 100 Trending Beads | Custom Intention Bracelets",
  description: "Design your own beaded bracelet from 100 trending beads — real crystals, freshwater pearls, 14k gold, Murano glass & more. Every bead carries meaning. From Coquette to Quiet Luxury. Refreshed daily, worldwide shipping.",
  keywords: "custom bead bracelet, crystal healing jewelry, DIY bracelet, intention jewelry, spiritual beads, lampwork glass, morandi aesthetic, coquette beads, quiet luxury jewelry, evil eye bracelet, baroque pearls, bubble letter beads, smiley face beads, mushroom beads",
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