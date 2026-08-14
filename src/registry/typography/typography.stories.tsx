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
    expect(el).toHaveClass("font-normal", "text-base", "text-foreground");
    expect(el).not.toHaveClass("font-extrabold");
  },
};

export const DarkMode: Story = {
  name: "ダークモード",
  args: {
    children: "ダークモードテキスト",
  },
  decorators: [
    (Story) => (
      <div className="dark bg-background p-4">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("ダークモードテキスト");
    expect(el).toHaveClass("text-foreground");
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
    expect(el).toHaveClass("font-bold", "text-[2.5rem]");
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

export const H2Typography: Story = {
  name: "Typography.H2",
  args: {
    children: "サンプルテキスト",
  },
  argTypes: {
    as: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  render: ({ ...args }) => {
    return <TypographyComponent.H2 {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("サンプルテキスト");
    expect(el.tagName).toBe("H2");
    expect(el).toHaveClass("font-bold", "text-[2rem]");
    expect(el).not.toHaveClass("font-extrabold");
  },
};

export const H3Typography: Story = {
  name: "Typography.H3",
  args: {
    children: "サンプルテキスト",
  },
  argTypes: {
    as: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  render: ({ ...args }) => {
    return <TypographyComponent.H3 {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("サンプルテキスト");
    expect(el.tagName).toBe("H3");
    expect(el).toHaveClass("font-bold", "text-[1.5rem]");
    expect(el).not.toHaveClass("font-semibold");
  },
};

export const LeadTypography: Story = {
  name: "Typography.Lead",
  args: {
    children: "サンプルテキスト",
  },
  argTypes: {
    as: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  render: ({ ...args }) => {
    return <TypographyComponent.Lead {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("サンプルテキスト");
    expect(el.tagName).toBe("P");
    expect(el).toHaveClass("font-normal", "text-xl", "text-muted-foreground");
    expect(el).not.toHaveClass("text-foreground");
  },
};

export const MutedTypography: Story = {
  name: "Typography.Muted",
  args: {
    children: "サンプルテキスト",
  },
  argTypes: {
    as: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  render: ({ ...args }) => {
    return <TypographyComponent.Muted {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("サンプルテキスト");
    expect(el.tagName).toBe("P");
    expect(el).toHaveClass(
      "font-normal",
      "text-sm",
      "text-muted-foreground",
      "leading-[1.7]",
      "tracking-[0.02em]",
    );
    expect(el).not.toHaveClass("text-base");
  },
};

export const CodeTypography: Story = {
  name: "Typography.Code",
  args: {
    children: "const x = 1;",
  },
  argTypes: {
    as: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  render: ({ ...args }) => {
    return <TypographyComponent.Code {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText("const x = 1;");
    expect(el.tagName).toBe("CODE");
    expect(el).toHaveClass("font-mono", "text-sm", "bg-muted", "leading-[1.7]");
    expect(el).not.toHaveClass("font-sans");
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
