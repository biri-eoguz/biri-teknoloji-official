import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Geist, Stint_Ultra_Expanded } from "next/font/google";
import LayoutHeader from "@/components/layout/layout-header";
import LayoutFooter from "@/components/layout/layout-footer";
import LayoutPage from "@/components/layout/layout-page";

const stintUltraExpanded = Stint_Ultra_Expanded({
  subsets: ["latin"],
  variable: "--font-stint-ultra-expanded",
  display: "swap",
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Biri Teknoloji A.Ş.",
  description:
    "Biri Teknoloji A.Ş. | Dijitalleşme Yolculuğunuza Eşlik Ederken Aynı Zamanda Teknoloji Odaklı Start-Up Projeleri Geliştiriyor ve Ölçeklenebilir İş Modelleri Üzerine Çalışıyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          stintUltraExpanded.variable,
          "antialiased"
        )}
      >
        <LayoutPage>
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </LayoutPage>
      </body>
    </html>
  );
}
