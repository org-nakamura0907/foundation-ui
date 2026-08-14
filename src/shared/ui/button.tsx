import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium select-none " +
    "transition-[background-color,color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease)] " +
    "border border-transparent outline-none " +
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
    "disabled:pointer-events-none disabled:opacity-50 " +
    "[&_svg]:pointer-events-none [&_svg]:size-[1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary)_90%,black)]",
        destructive:
          "bg-destructive text-primary-foreground hover:bg-[color-mix(in_oklch,var(--destructive)_90%,black)]",
        outline:
          "bg-background text-foreground border-border shadow-[var(--shadow-xs)] hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary)_80%,black)]",
        ghost:
          "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "bg-transparent text-primary hover:underline hover:underline-offset-4",
      },
      size: {
        default: "h-9 px-4 gap-2 text-sm",
        sm: "h-8 px-3 gap-1 text-sm",
        lg: "h-10 px-6 gap-2 text-base",
        icon: "size-9 p-0",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-10 p-0",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        class: "h-auto p-0 rounded-none",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
