"use client";

import Image from "next/image";
import React from "react";
import Title from "./title";
import Text from "./text";
import { cn } from "@/lib/utils";
import { useFadeIn } from "@/lib/use-fade-in";

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
  const { ref, visible } = useFadeIn();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative bg-[linear-gradient(0deg,rgba(252,227,251,0),rgba(252,227,251,0.4)_40%,rgba(252,227,251,0.4)_50%,rgba(252,227,251,0)_100%)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col-reverse fade-section lg:flex-row items-center justify-between gap-8 responsive-horizontal py-24",
          visible && "is-visible"
        )}
      >
        {orientation === "left" && <HelperSectionImage image={image} />}
        <div className="flex flex-col gap-4">
          <Title
            el="h1"
            size="xl"
            weight="bold"
            className="text-center lg:text-left"
          >
            {title}
          </Title>
          <Text
            lang="tr"
            className={cn(
              "md:max-w-[50ch] mx-auto text-center leading-[1.75] tracking-normal text-balance hyphens-none wrap-break-word",
              "md:max-w-[50ch] lg:text-justify lg:leading-[1.65] lg:tracking-[0.01em] lg:hyphens-auto lg:pr-6"
            )}
            size="lg"
          >
            {description}
          </Text>
        </div>
        {orientation === "right" && <HelperSectionImage image={image} />}
      </div>
    </section>
  );
}

const HelperSectionImage = ({ image }: { image: string }) => {
  return (
    <figure className="relative shrink-0 size-[clamp(160px,60vw,240px)] lg:size-[320px] select-none">
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="object-contain"
      />
    </figure>
  );
};
