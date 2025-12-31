import { cn } from "@/shared/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const headingVariants = ["h1"] as const;
const variants = [...headingVariants, "body"] as const;
type Variant = typeof variants[number]

const asArry = [...headingVariants, "p"] as const;
type AsType = typeof asArry[number];

type TypographyProps<T extends AsType> = {
    /** テキストの見た目 */
    variant: Variant
    /** 実際にレンダリングされる要素のタグ */
    as: AsType
} & React.ComponentPropsWithoutRef<T>;

const typographyVariants = cva(
    "m-0 font-sans",
    {
        variants: {
            variant: {
                h1: "font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
                body: 'font-normal text-base'
            }
        },
        defaultVariants: {
            variant: "body"
        }
    }
)

const BaseTypography = <T extends AsType = "p",>({ variant = "body", as = "p", ...props }: TypographyProps<T>) => {
    const Component = asArry.includes(as) ? as : 'p';

    return (
        <Component className={cn(typographyVariants({ variant }))} {...props} />
    )
}
const H1Typography = (props: React.ComponentPropsWithoutRef<"h1">) => <BaseTypography variant="h1" as="h1" {...props} />
const BodyTypography = (props: React.ComponentPropsWithoutRef<"p">) => <BaseTypography variant="body" as="p" {...props} />

/**
 * Typographyコンポーネント
 * 
 * @example
 * // 見た目と要素が異なるTypographyコンポーネントを使用したい場合
 * <Typography<"h1"> variant="body" as="h1">h1テキスト</Typography>
 * 
 * @example
 * <Typography.h1>h1テキスト</Typography.h1>
 */
export const Typography = Object.assign(BaseTypography, {
    H1: H1Typography,
    Body: BodyTypography,
})
