import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { JSX, type FC } from "react";

const textVariants = cva("text-primary-foreground font-(--font-geist-sans)", {
  variants: {
    size: {
      xs: "text-[clamp(0.668rem,1.8vw,0.75rem)]",
      sm: "text-[clamp(0.75rem,1.9vw,0.875rem)]",
      md: "text-[clamp(0.875rem,2vw,1rem)]",
      lg: "text-[clamp(1rem,2.5vw,1.125rem)] md:text-[clamp(1.125rem,1.8vw,1.25rem)] lg:text-[clamp(1.25rem,1.6vw,1.375rem)]",
      xl: "text-[clamp(1.25rem,2.5vw,1.375rem)] md:text-[clamp(1.375rem,1.8vw,1.5rem)] lg:text-[clamp(1.5rem,1.6vw,1.625rem)]",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    weight: {
      regular: "font-regular",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
    align: "left",
    weight: "regular",
  },
});

type TextTag = keyof Pick<JSX.IntrinsicElements, "p" | "div" | "span">;

type Props = React.ComponentProps<"p" | "div" | "span"> &
  VariantProps<typeof textVariants> & {
    el?: TextTag;
  };

const Text: FC<Props> = ({
  el = "p",
  size,
  align,
  weight,
  className,
  children,
}) => {
  const Comp = el;

  return (
    <Comp className={cn(textVariants({ size, align, weight }), className)}>
      {children}
    </Comp>
  );
};

export { type Props as TextProps };
export default Text;
