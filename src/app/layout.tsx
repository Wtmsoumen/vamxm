import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VaMax - Durga Puja 360° Virtual Pandal Experience",
  description:
    "Explore Durga Puja pandals and idols virtually from anywhere through our immersive 360° experience.",
  keywords: "Durga Puja, 360°, virtual pandal, idol, festival, Kolkata",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
