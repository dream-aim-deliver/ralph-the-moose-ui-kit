import type { Meta, StoryObj } from "@storybook/react";

import { IconCaretUp } from "@/components/icons";

const meta = {
  title: "Icons/CaretUp",
  component: IconCaretUp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconCaretUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
