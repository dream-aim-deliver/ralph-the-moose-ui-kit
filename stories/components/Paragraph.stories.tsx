import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "@/components/paragraph";

const meta = {
  title: "Components/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextContent: Story = {
  args: {
    children: "paragraph / medium",
  },
};

export const WithChildren: Story = {
  args: {
    children: <span>paragraph / span </span>,
  },
};
