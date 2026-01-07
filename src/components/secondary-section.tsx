"use client";

import Image from "next/image";
import Title from "./title";
import { useFadeIn } from "@/lib/use-fade-in";
import { cn } from "@/lib/utils";

export default function SecondarySection() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      className={cn(
        "relative fade-section responsive-horizontal my-[clamp(6rem,24svh,16rem)] md:my-[clamp(12rem,12svh,16rem)]",
        visible && "is-visible"
      )}
    >
      <SecondarySectionLightning
        position="center"
        className="block sm:hidden"
      />
      <SecondarySectionLightning position="left" className="hidden sm:block" />
      <SecondarySectionLightning position="right" className="hidden sm:block" />

      <div className="w-full h-full responsive-horizontal flex flex-col items-center justify-center relative z-20">
        <SecondarySectionImage />
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
    </section>
  );
}

function SecondarySectionLightning({
  position,
  className,
  ...props
}: {
  position: "left" | "right" | "center";
} & React.ComponentProps<"figure">) {
  return (
    <figure
      className={cn(
        "absolute size-[clamp(160px,60vw,280px)] lg:size-[320px] -top-1/4 -translate-y-1/2",
        position === "right" && "right-2 xl:-right-1/4",
        position === "left" && "left-2 xl:-left-1/4",
        position === "center" && "left-1/2 -translate-x-1/2",
        className
      )}
      {...props}
    >
      <Image
        src="/vectors/vector-18.svg"
        alt=""
        width={400}
        height={400}
        className="object-contain"
      />
    </figure>
  );
}

function SecondarySectionImage() {
  return (
    <figure className="absolute size-[clamp(280px,50vw,540px)] select-none">
      <Image
        src="/vectors/vector-17.svg"
        alt=""
        width={540}
        height={540}
        className="object-cover"
      />
    </figure>
  );
}
