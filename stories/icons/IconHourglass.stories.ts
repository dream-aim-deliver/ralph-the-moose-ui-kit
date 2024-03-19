import type { Meta, StoryObj } from "@storybook/react";

import { IconHourglass } from "@/components/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Icons/Hourglass",
  component: IconHourglass,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "number",
      description: "The height and width of the svg icon.",
    },
  },
} as Meta<typeof IconHourglass>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 12,
  },
};
