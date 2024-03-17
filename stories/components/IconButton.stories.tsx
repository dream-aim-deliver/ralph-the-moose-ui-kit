import type { Meta, StoryObj } from "@storybook/react";
import { IconButtonClose as IconButton } from "@/components/icon-button";

const meta = {
  title: "IconButton/Close",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "number",
      description: "The TailwindCSS height and width of the button",
    },
    disabled: {
      control: "boolean",
      description: "The disabled state of the button.",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CloseSmallDefault: Story = {
  args: {
    size: 4,
  },
};
