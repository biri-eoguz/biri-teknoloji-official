import Image from "next/image";
import Title from "./title";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center relative responsive-horizontal mt-8">
      <HeroSectionVideo />
      <Title
        size="2xl"
        align="center"
        weight="bold"
        className="flex flex-col relative z-10"
      >
        <span>HER ADIMDA TEKNOLOJİ</span>
        <span>HER ADIMDA GELECEK!</span>
      </Title>
      <HeroSectionImage />
    </section>
  );
}

function HeroSectionVideo() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -translate-y-[12%] opacity-15 flex items-center justify-center"
      aria-hidden
    >
      <video
        className="size-[clamp(360px,72vw,720px)] object-cover"
        preload="metadata"
        poster="/video/hero-section.webm"
        loop
        muted
        playsInline
        autoPlay
      >
        <source src="/video/hero-section.webm" type="video/webm" />
        <source src="/video/hero-section.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function HeroSectionImage() {
  return (
    <figure className="relative -translate-y-1/12 w-[clamp(320px,60vw,480px)] aspect-square select-none">
      <Image
        src="/vectors/vector-1.svg"
        alt=""
        width={480}
        height={480}
        priority
        className="w-full h-full"
      />
    </figure>
  );
}
