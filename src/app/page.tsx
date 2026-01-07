import HeroSection from "@/components/hero-section";
import SecondarySection from "@/components/secondary-section";
import LayoutContent from "@/components/layout/layout-content";
import HelperSection from "@/components/helper-section";
import SolutionsSection from "@/components/solutions-section";

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        as="video"
        href="/video/hero-section.webm"
        type="video/webm"
        fetchPriority="high"
      />
      <LayoutContent>
        <HeroSection />

        <SecondarySection />

        <HelperSection
          id="about-us"
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
    </>
  );
}
