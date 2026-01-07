"use client";

import { useFadeIn } from "@/lib/use-fade-in";
import { cn } from "@/lib/utils";
import React from "react";

export default function AnimatedSection({
  children,
  className,
  as = "section",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
} & React.ComponentProps<"section" | "div">) {
  const ref = useFadeIn<HTMLElement>();
  const Component = as;

  return (
    <Component ref={ref} className={cn("fade-section", className)} {...props}>
      {children}
    </Component>
  );
}
