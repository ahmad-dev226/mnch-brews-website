import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/site-chrome";
import { FloatingCanLayer } from "@/components/floating-can";

const bodyFont = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const displayFont = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: { default: "MNCH Brews — Not Your Usual Brew", template: "%s — MNCH Brews" },
  description: "Different moods. Different brews. One MNCH kind of energy. Get to know MNCH Brews.",
  applicationName: "MNCH Brews",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: "MNCH Brews — Not Your Usual Brew",
    description: "Different moods. Different brews. One MNCH kind of energy.",
    type: "website",
    ...(siteUrl ? { images: [{ url: "/images/MNCH5.jpeg", width: 734, height: 1280, alt: "An original MNCH layered drink" }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "MNCH Brews — Not Your Usual Brew",
    description: "Different moods. Different brews. One MNCH kind of energy.",
    ...(siteUrl ? { images: ["/images/MNCH5.jpeg"] } : {}),
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <Navbar />
        <FloatingCanLayer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
