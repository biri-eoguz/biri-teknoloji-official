"use client";

import Image from "next/image";
import Title from "./title";
import { motion } from "framer-motion";
import { createScrollAnimation } from "@/constants/animations";

const animation = createScrollAnimation();

export default function SecondarySection() {
  return (
    <motion.section
      className="relative h-[320px] responsive-horizontal mt-16"
      {...animation}
    >
      <figure className="absolute left-0 xl:-left-1/4 size-[200px] md:size-[280px] lg:size-[320px] top-0 -translate-y-1/2">
        <Image
          src="/vectors/vector-18.svg"
          alt=""
          fill
          sizes="
          (max-width: 640px) 200px,
          (max-width: 768px) 280px,
          320px
          "
          className="w-full h-full object-contain"
        />
      </figure>
      <figure className="absolute right-0 xl:-right-1/4 size-[200px] md:size-[280px] lg:size-[320px] top-0 -translate-y-1/2">
        <Image
          src="/vectors/vector-18.svg"
          alt=""
          fill
          sizes="
          (max-width: 640px) 200px,
          (max-width: 768px) 280px,
          320px
          "
          className="w-full h-full object-contain"
        />
      </figure>
      <div className="w-full h-full responsive-horizontal flex flex-col items-center justify-center relative z-20">
        <figure className="absolute size-[320px] md:size-[400px] lg:size-[480px] select-none">
          <Image
            src="/vectors/vector-17.svg"
            alt=""
            fill
            sizes="
            (max-width: 640px) 200px,
            (max-width: 768px) 240px,
            320px
            "
            className="w-full h-full object-cover"
          />
        </figure>
        <Title
          size="lg"
          align="center"
          weight="semibold"
          className="flex flex-col"
        >
          <span>DİJİTALLEŞME YOLCULUĞUNUZDA</span>
          <span>YANINIZDA BİRİ VAR!</span>
        </Title>
      </div>
    </motion.section>
  );
}
