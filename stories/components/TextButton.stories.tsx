import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "@/components/text-button";

const meta = {
  title: "Components/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description:
        "The title of the text-button that is displayed in the collapsed view.",
    },
    size: {
      control: "radio",
      options: ["small", "medium"],
    },
    disabled: {
      control: "boolean",
      description: "The disabled state of the button.",
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    text: "default",
    size: "small",
    onClick: () => {},
  },
};

export const Medium: Story = {
  args: {
    text: "default",
    size: "medium",
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    text: "default",
    size: "small",
    disabled: true,
    onClick: () => {},
  },
};
