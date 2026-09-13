import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | DEMA",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "DEMA",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body
        id="top"
        className="flex min-h-screen flex-col bg-neutral-50 font-sans text-navy antialiased"
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
