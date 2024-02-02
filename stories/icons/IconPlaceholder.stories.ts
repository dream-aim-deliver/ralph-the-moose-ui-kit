import type { Meta, StoryObj } from "@storybook/react";

import { IconPlaceholder } from "@/components/icons";

const meta = {
  title: "Icons/Placeholder",
  component: IconPlaceholder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconPlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
