import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import {Navbar} from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "RunSwap - Buy & Sell Race Bibs",
  description: "The first marketplace dedicated to race bib transfers. Secure, instant, and hassle-free.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen font-inter text-gray-800 bg-white font-sans antialiased">
        <Navbar />
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
