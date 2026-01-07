import Title from "./title";
import Image from "next/image";
import { solutions } from "@/constants/solutions";
import AnimatedSection from "./animated-section";

export default function SolutionsSection() {
  return (
    <AnimatedSection
      id="solutions"
      className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full responsive-horizontal"
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
    </AnimatedSection>
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
          loading="lazy"
          className="object-contain"
        />
      </figure>
      <p className="text-white text-center text-sm md:text-base lg:text-lg font-semibold">
        {title}
      </p>
    </div>
  );
}
