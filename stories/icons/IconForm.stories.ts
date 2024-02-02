import type { Meta, StoryObj } from "@storybook/react";

import { IconForm } from "@/components/icons";

const meta = {
  title: "Icons/Form",
  component: IconForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
