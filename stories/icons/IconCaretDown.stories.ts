import type { Meta, StoryObj } from "@storybook/react";

import { IconCaretDown } from "@/components/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Icons/CaretDown",
  component: IconCaretDown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconCaretDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
