"use client";

import { motion } from "framer-motion";
import Title from "./title";
import { createScrollAnimation } from "@/constants/animations";
import Image from "next/image";
import { solutions } from "@/constants/solutions";

const animation = createScrollAnimation();

export default function SolutionsSection() {
  return (
    <motion.section
      id="solutions"
      className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full responsive-horizontal animate-appear pt-8"
      {...animation}
    >
      <Title
        className="col-span-full mb-8"
        align="center"
        size="2xl"
        weight="semibold"
      >
        ÇÖZÜMLER
      </Title>
      {solutions.map((solution) => (
        <SolutionCard key={solution.title} {...solution} />
      ))}
    </motion.section>
  );
}

function SolutionCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <figure className="size-12 md:size-16 lg:size-[96px] select-none relative">
        <Image
          src={image}
          alt=""
          fill
          sizes="
          (max-width: 640px) 48px,
          (max-width: 768px) 64px,
          96px
          "
          className="w-full h-full object-contain"
        />
      </figure>
      <p className="text-white text-center text-sm md:text-base lg:text-lg font-semibold">
        {title}
      </p>
    </div>
  );
}
