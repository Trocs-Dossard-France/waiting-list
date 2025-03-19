import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RunSwap - Buy & Sell Race Bibs",
  description: "The first marketplace dedicated to race bib transfers. Secure, instant, and hassle-free.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable}`}>
      <body className="bg-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
