"use client";

import Image from "next/image";
import React from "react";
import Title from "./title";
import Text from "./text";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { createScrollAnimation } from "@/constants/animations";

const animation = createScrollAnimation();

export default function HelperSection({
  id,
  title,
  description,
  image,
  orientation,
  className,
  ...props
}: {
  id?: string;
  title: string;
  description: string;
  image: string;
  orientation: "left" | "right";
} & React.ComponentProps<"section">) {
  return (
    <section
      id={id}
      className={cn(
        "relative bg-[linear-gradient(0deg,rgba(252,227,251,0),rgba(252,227,251,0.4)_40%,rgba(252,227,251,0.4)_50%,rgba(252,227,251,0)_100%)]",
        className
      )}
      {...props}
    >
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 responsive-horizontal py-24"
        {...animation}
      >
        {orientation === "left" && <HelperSectionImage image={image} />}
        <div className="flex flex-col gap-4">
          <Title
            el="h2"
            size="xl"
            weight="bold"
            className="text-center md:text-left"
          >
            {title}
          </Title>
          <Text
            lang="tr"
            className={cn(
              "max-w-[32ch] md:max-w-[50ch] mx-auto text-center leading-[1.75] tracking-normal text-balance hyphens-none wrap-break-word",
              "md:max-w-[50ch] md:text-justify md:leading-[1.65] md:tracking-[0.01em] md:hyphens-auto md:pr-6"
            )}
            size="xl"
          >
            {description}
          </Text>
        </div>
        {orientation === "right" && <HelperSectionImage image={image} />}
      </motion.div>
    </section>
  );
}

const HelperSectionImage = ({ image }: { image: string }) => {
  return (
    <figure className="relative shrink-0 size-[200px] md:size-[280px] lg:size-[400px] select-none">
      <Image
        src={image}
        alt=""
        fill
        sizes="
      (max-width: 640px) 200px,
      (max-width: 768px) 280px,
      400px
      "
        className="w-full h-full object-contain"
      />
    </figure>
  );
};
