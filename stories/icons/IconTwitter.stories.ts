import type { Meta, StoryObj } from "@storybook/react";

import { IconTwitter } from "@/components/icons";

const meta = {
  title: "Components/Icons/TwiIconTwitter",
  component: IconTwitter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconTwitter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
