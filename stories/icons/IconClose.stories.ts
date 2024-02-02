import type { Meta, StoryObj } from "@storybook/react";

import { IconClose } from "@/components/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Icons/Close",
  component: IconClose,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconClose>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
