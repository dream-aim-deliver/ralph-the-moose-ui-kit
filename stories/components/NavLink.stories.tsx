import type { Meta, StoryObj } from "@storybook/react";

import { NavLink } from "@/components/nav-link";
import { IconForm } from "../../lib";

const meta = {
  title: "Components/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["small", "medium"] },
    label: { control: "text" },
    url: { control: "text" },
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: "small",
    label: "navlink / small",
    url: "https://www.google.com",
    icon: <IconForm />,
  },
};

export const Medium: Story = {
  args: {
    variant: "medium",
    label: "navlink / medium",
    url: "https://www.google.com",
  },
};

export const ColorVariant: Story = {
  args: {
    variant: "medium",
    label: "navlink / medium",
    url: "https://www.google.com",
  },
};
