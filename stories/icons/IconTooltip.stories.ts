import type { Meta, StoryObj } from "@storybook/react";

import { IconTooltip } from "@/components/icons";

const meta = {
  title: "Components/Icons/Tooltip",
  component: IconTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
