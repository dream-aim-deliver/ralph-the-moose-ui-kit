import type { Meta, StoryObj } from "@storybook/react";

import { Tabs as Component } from "@/components/tabs";

const meta = {
  title: "Components/Tabs",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tabs: {
      control: "object",
      description: "The tabs to display.",
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: ["Wrap", "Claim"],
    activeTabIndex: 0,
  },
};
