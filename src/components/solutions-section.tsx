"use client";

import Title from "./title";
import Image from "next/image";
import { solutions } from "@/constants/solutions";
import { useFadeIn } from "@/lib/use-fade-in";
import { cn } from "@/lib/utils";

export default function SolutionsSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="solutions"
      ref={ref}
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 gap-12 w-full responsive-horizontal fade-section",
        visible && "is-visible"
      )}
    >
      <Title
        el="h1"
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
    </section>
  );
}

function SolutionCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <figure className="size-[clamp(48px,60vw,96px)] select-none relative">
        <Image
          src={image}
          alt=""
          width={96}
          height={96}
          className="object-contain"
        />
      </figure>
      <p className="text-white text-center text-sm md:text-base lg:text-lg font-semibold">
        {title}
      </p>
    </div>
  );
}
