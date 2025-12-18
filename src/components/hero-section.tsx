"use client";

import Image from "next/image";
import Title from "./title";
import { motion } from "framer-motion";
import { createScrollAnimation } from "@/constants/animations";
import { useInView } from "react-intersection-observer";

const animation = createScrollAnimation();

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center relative responsive-horizontal mt-8"
      {...animation}
    >
      {inView && (
        <>
          {/* <HeroSectionAnimation /> */}
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
        </>
      )}
    </motion.section>
  );
}

// function HeroSectionAnimation() {
//   return (
//     <div className="absolute opacity-15 -bottom-8 size-[480px] md:size-[640px] lg:size-[720px]">
//       <Lottie
//         animationData={animationData}
//         loop
//         autoPlay
//         className="w-full h-full"
//       />
//     </div>
//   );
// }

function HeroSectionVideo() {
  return (
    <div className="absolute opacity-15 -bottom-8 size-[480px] md:size-[640px] lg:size-[720px]">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero-section.webm" type="video/webm" />
        <source src="/video/hero-section.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function HeroSectionImage() {
  return (
    <figure className="relative shrink-0 size-[320px] md:size-[400px] lg:size-[480px] select-none -mt-10">
      <Image
        src="/vectors/vector-1.svg"
        alt=""
        fill
        sizes="
      (max-width: 640px) 320px,
      (max-width: 768px) 480px,
      540px
      "
        priority
        className="w-full h-full object-cover"
      />
    </figure>
  );
}
