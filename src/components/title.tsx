import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { JSX, type FC } from "react";

const titleVariants = cva("text-primary-foreground tracking-[0.15em]", {
  variants: {
    size: {
      "4xl":
        "text-[clamp(2rem,6vw,2.5rem)] md:text-[clamp(2.5rem,4vw,3rem)] lg:text-[clamp(3rem,3vw,3.5rem)] leading-[120%]",
      "3xl":
        "text-[clamp(1.75rem,5vw,2.25rem)] md:text-[clamp(2.25rem,3.5vw,2.75rem)] lg:text-[clamp(2.5rem,2.8vw,3rem)] leading-[120%]",
      "2xl":
        "text-[clamp(1.5rem,4.5vw,2rem)] md:text-[clamp(2rem,3vw,2.25rem)] lg:text-[clamp(2.25rem,2.5vw,2.5rem)] leading-[125%]",
      xl: "text-[clamp(1.375rem,4vw,1.75rem)] md:text-[clamp(1.75rem,2.6vw,1.875rem)] lg:text-[clamp(1.875rem,2.2vw,2rem)] leading-[130%]",
      lg: "text-[clamp(1.25rem,3.5vw,1.5rem)] md:text-[clamp(1.5rem,2.2vw,1.75rem)] lg:text-[clamp(1.75rem,2vw,1.875rem)] leading-[130%]",
      md: "text-[clamp(1.125rem,3vw,1.25rem)] md:text-[clamp(1.25rem,2vw,1.5rem)] lg:text-[clamp(1.375rem,1.8vw,1.625rem)] leading-[140%]",
      sm: "text-[clamp(1rem,2.5vw,1.125rem)] md:text-[clamp(1.125rem,1.8vw,1.25rem)] lg:text-[clamp(1.25rem,1.6vw,1.375rem)] leading-[150%]",
      xs: "text-[clamp(0.95rem,2vw,1rem)] md:text-[clamp(1rem,1.6vw,1.125rem)] lg:text-[clamp(1.125rem,1.4vw,1.25rem)] leading-[150%]",
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
    weight: "medium",
  },
});

type HeadingTag = keyof Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

type Props = React.ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> &
  VariantProps<typeof titleVariants> & {
    el?: HeadingTag;
  };

const Title: FC<Props> = ({
  el = "h1",
  size,
  align,
  weight,
  className,
  children,
  ...rest
}) => {
  const Comp = el;

  return (
    <Comp
      {...rest}
      className={cn(titleVariants({ size, align, weight }), className)}
    >
      {children}
    </Comp>
  );
};

export { type Props as TitleProps };
export default Title;
