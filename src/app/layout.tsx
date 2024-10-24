import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { baseUrl } from "./sitemap";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Harmeet Singh - Portfolio",
    template: "%s | Harmeet Singh - Portfolio",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "Harmeet Singh - Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "Harmeet Singh - Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("dark", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
