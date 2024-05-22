import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar as Component } from "@/components/progress-bar";

const meta = {
  title: "Components/ProgressBar",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    width: 200,
  },
};
