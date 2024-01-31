import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["small", "medium"] },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: "small",
    label: "label / small",
  },
};

export const Medium: Story = {
  args: {
    variant: "medium",
    label: "label / medium",
  },
};
