import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { Button } from "./button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "保存する",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "デフォルト（props なし）",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button", { name: "保存する" });
    expect(el).toHaveClass("bg-primary", "text-primary-foreground");
    expect(el).toHaveAttribute("type", "button");
  },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button", { name: "保存する" });
    expect(el).toHaveClass("bg-secondary", "text-secondary-foreground");
  },
};

export const Outline: Story = {
  args: { variant: "outline" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button", { name: "保存する" });
    expect(el).toHaveClass("border-border");
  },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Link: Story = {
  args: { variant: "link" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button", { name: "保存する" });
    expect(el).toHaveClass("h-auto", "p-0", "rounded-none");
  },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "削除" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button", { name: "削除" });
    expect(el).toHaveClass("bg-destructive");
  },
};

export const Small: Story = {
  args: { size: "sm" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button", { name: "保存する" });
    expect(el).toHaveClass("h-8");
  },
};

export const Large: Story = {
  args: { size: "lg" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button", { name: "保存する" });
    expect(el).toHaveClass("h-10");
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole("button", { name: "保存する" });
    expect(el).toBeDisabled();
  },
};

export const DarkMode: Story = {
  name: "ダークモード",
  decorators: [
    (Story) => (
      <div className="dark bg-background p-4">
        <Story />
      </div>
    ),
  ],
};
