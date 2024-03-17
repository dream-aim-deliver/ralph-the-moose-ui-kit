import type { Meta, StoryObj } from "@storybook/react";

import { IconPlaceholder } from "@/components/icons";

const meta = {
  title: "Icons/Placeholder",
  component: IconPlaceholder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fill: {
      control: "text",
      description: "The tailwind fill color for the icon.",
    },
    size: {
      control: "number",
      description: "The height and width of the svg icon.",
    },
  },
} as Meta<typeof IconPlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fill: "base-colors/neutral-900",
    size: 12,
  },
};
