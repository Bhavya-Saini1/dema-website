import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/lib/site";

require("./globals.css");

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
    <html lang="en">
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
