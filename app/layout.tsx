import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond, Cinzel, Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import CustomCursor from "@/components/effects/CustomCursor";
import SmoothScroll from "@/components/effects/SmoothScroll";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "O2plusNO | Beyond Your Limits",
  description: "合同会社O2plusNO - 本当になりたい自分に出会えるキッカケを。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="cursor-none">
      <body
        className={clsx(
          notoSansJP.variable,
          notoSerifJP.variable,
          cormorant.variable,
          cinzel.variable,
          inter.variable,
          "antialiased bg-[#050505] text-white selection:bg-[#d4a853] selection:text-[#050505]"
        )}
      >
        <SmoothScroll />
        <NoiseOverlay />
        <CustomCursor />
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}