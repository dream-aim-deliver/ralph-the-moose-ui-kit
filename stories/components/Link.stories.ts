import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "@/components/link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["small", "medium"] },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: "small",
    label: "link / small",
  },
};

export const Medium: Story = {
  args: {
    variant: "medium",
    label: "link / medium",
  },
};
