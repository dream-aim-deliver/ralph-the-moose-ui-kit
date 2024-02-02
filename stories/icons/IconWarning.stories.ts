import type { Meta, StoryObj } from "@storybook/react";

import { IconWarning } from "@/components/icons"; // Make sure the path is correct according to your project structure

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Icons/Warning",
  component: IconWarning,
  parameters: {
    // Optional parameter to center the component in the Canvas. More information: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconWarning>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
