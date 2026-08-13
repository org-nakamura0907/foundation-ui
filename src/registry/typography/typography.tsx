import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const headingVariants = ["h1", "h2", "h3"] as const;
type Variant =
  (typeof headingVariants)[number] | "body" | "lead" | "muted" | "code";

const asArray = [...headingVariants, "p", "code"] as const;
type AsType = (typeof asArray)[number];

type TypographyProps<T extends AsType> = {
  /** テキストの見た目 */
  variant?: Variant;
  /** 実際にレンダリングされる要素のタグ */
  as?: AsType;
} & React.ComponentPropsWithoutRef<T>;

const typographyVariants = cva("m-0 font-sans text-foreground", {
  variants: {
    variant: {
      h1: "font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      h2: "font-bold text-3xl sm:text-4xl",
      h3: "font-semibold text-2xl sm:text-3xl",
      body: "font-normal text-base",
      lead: "font-normal text-xl text-muted-foreground",
      muted: "font-normal text-sm text-muted-foreground",
      code: "font-mono text-sm bg-muted px-1 rounded",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const BaseTypography = <T extends AsType = "p">({
  variant = "body",
  as = "p",
  className,
  ...props
}: TypographyProps<T>) => {
  const Component = asArray.includes(as) ? as : "p";

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};
const H1Typography = (props: React.ComponentPropsWithoutRef<"h1">) => (
  <BaseTypography variant="h1" as="h1" {...props} />
);
const H2Typography = (props: React.ComponentPropsWithoutRef<"h2">) => (
  <BaseTypography variant="h2" as="h2" {...props} />
);
const H3Typography = (props: React.ComponentPropsWithoutRef<"h3">) => (
  <BaseTypography variant="h3" as="h3" {...props} />
);
const BodyTypography = (props: React.ComponentPropsWithoutRef<"p">) => (
  <BaseTypography variant="body" as="p" {...props} />
);
const LeadTypography = (props: React.ComponentPropsWithoutRef<"p">) => (
  <BaseTypography variant="lead" as="p" {...props} />
);
const MutedTypography = (props: React.ComponentPropsWithoutRef<"p">) => (
  <BaseTypography variant="muted" as="p" {...props} />
);
const CodeTypography = (props: React.ComponentPropsWithoutRef<"code">) => (
  <BaseTypography variant="code" as="code" {...props} />
);

/**
 * Typographyコンポーネント
 *
 * @example
 * // 見た目と要素が異なるTypographyコンポーネントを使用したい場合
 * <Typography<"h1"> variant="body" as="h1">h1テキスト</Typography>
 *
 * @example
 * <Typography.H1>h1テキスト</Typography.H1>
 */
export const Typography = Object.assign(BaseTypography, {
  H1: H1Typography,
  H2: H2Typography,
  H3: H3Typography,
  Body: BodyTypography,
  Lead: LeadTypography,
  Muted: MutedTypography,
  Code: CodeTypography,
});
