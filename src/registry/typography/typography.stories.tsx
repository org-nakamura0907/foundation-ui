import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { Typography as TypographyComponent } from "./typography";
import React from "react";

const meta = {
  title: "Typography",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: TypographyComponent as React.ComponentType<any>,
} satisfies Meta<typeof TypographyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "デフォルト（props なし）",
  args: {
    children: "デフォルトテキスト",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("デフォルトテキスト");
    expect(el.tagName).toBe("P");
    expect(el).toHaveClass("font-normal", "text-base");
    expect(el).not.toHaveClass("font-extrabold");
  },
};

export const Typography: Story = {
  args: {
    as: "h1",
    variant: "body",
    children: "見た目が異なるh1タグ",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("見た目が異なるh1タグ");
    expect(el.tagName).toBe("H1");
    expect(el).toHaveClass("font-normal", "text-base");
    expect(el).not.toHaveClass("font-extrabold");
  },
};

export const H1Typography: Story = {
  name: "Typography.H1",
  args: {
    children: "サンプルテキスト",
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ ...args }) => {
    return <TypographyComponent.H1 {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("サンプルテキスト");
    expect(el.tagName).toBe("H1");
    expect(el).toHaveClass("font-extrabold", "text-4xl");
    expect(el).not.toHaveClass("font-normal");
  },
};

export const BodyTypography: Story = {
  name: "Typography.Body",
  args: {
    children: "サンプルテキスト",
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ ...args }) => {
    return <TypographyComponent.Body {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("サンプルテキスト");
    expect(el.tagName).toBe("P");
    expect(el).toHaveClass("font-normal", "text-base");
    expect(el).not.toHaveClass("font-extrabold");
  },
};

export const WithCustomClassName: Story = {
  name: "className マージ確認",
  args: {
    variant: "body",
    children: "カスタムクラス適用テキスト",
    className: "underline",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("カスタムクラス適用テキスト");
    expect(el).toHaveClass("font-normal");
    expect(el).toHaveClass("underline");
  },
};
