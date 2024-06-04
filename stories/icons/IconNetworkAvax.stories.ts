import type { Meta, StoryObj } from "@storybook/react";

import { IconNetworkAvax } from "@/components/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Icons/NetworkAvax",
  component: IconNetworkAvax,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
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
} as Meta<typeof IconNetworkAvax>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fill: "base-colors/neutral-900",
    size: 12,
  },
};
