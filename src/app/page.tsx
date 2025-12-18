"use client";

import HeroSection from "@/components/hero-section";
import SecondarySection from "@/components/secondary-section";
import LayoutContent from "@/components/layout/layout-content";
import dynamic from "next/dynamic";

const HelperSection = dynamic(() => import("@/components/helper-section"), {
  ssr: false,
});
const SolutionsSection = dynamic(
  () => import("@/components/solutions-section"),
  { ssr: false }
);

export default function Home() {
  return (
    <LayoutContent>
      <HeroSection />

      <SecondarySection />

      <HelperSection
        id="about-us"
        className="mt-12"
        title="HAKKIMIZDA"
        description="Biri İleri Teknoloji, güncel teknolojileri hayatın her alanına entegre etmeyi hedefleyen bir dijital dönüşüm ve inovasyon şirketidir. Kurumların ve bireylerin dijitalleşme yolculuklarına eşlik ederken aynı zamanda teknoloji odaklı start-up projeleri geliştiriyor ve ölçeklenebilir iş modelleri üzerine çalışıyoruz."
        image="/vectors/vector-3.svg"
        orientation="right"
      />

      <SolutionsSection />

      <HelperSection
        id="startup-culture"
        title="START-UP KÜLTÜRÜ"
        description="Biri İleri Teknoloji, dijitalleşme çözümlerinin yanı sıra start-up kültürüyle hareket eden bir teknoloji ekibidir. Farklı alanlarda yeni nesil projeler geliştirir, test eder ve ölçeklenebilir iş modelleri yaratmak için çalışır."
        image="/vectors/vector-5.svg"
        orientation="left"
      />
    </LayoutContent>
  );
}
