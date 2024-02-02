import type { Meta, StoryObj } from "@storybook/react";

import { IconTelegram } from "@/components/icons";

const meta = {
  title: "Components/Icons/Telegram",
  component: IconTelegram,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconTelegram>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
