import type { Meta, StoryObj } from "@storybook/react";

import { IconMenu } from "@/components/icons";

const meta = {
  title: "Components/Icons/Menu",
  component: IconMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
