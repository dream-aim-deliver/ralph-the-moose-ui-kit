import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@/components/icon-button";
import { IconClose } from "../../lib";

const meta = {
  title: "Components/IconButton",
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

const iconClose = <IconClose />;

export const CloseSmallDefault: Story = {
  args: {
    icon: iconClose,
    size: 4,
  },
};
