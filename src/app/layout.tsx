import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-playfair" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-bodoni", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "VAMXM — UtsavVerse",
  description: "Immersive experiences. Powerful digital solutions. A brighter tomorrow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} ${bodoni.variable} ${dmSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
