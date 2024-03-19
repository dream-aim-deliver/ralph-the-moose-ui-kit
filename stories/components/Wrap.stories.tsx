import type { Meta, StoryObj } from "@storybook/react";

import { WrapModal as Component } from "@/components/wrap-unwrap-modal";
import { RalphLogo } from "@/components/ralph-logo";
import { Signal } from "@preact/signals-react";

const meta = {
  title: "Components/ModalContent/Wrap",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tokenShortName: {
      control: "text",
      description: "The short name of the token.",
    },
    amountToWrap: {
      control: "number",
      description: "The amount of the token.",
    },
    fee: {
      control: "number",
      description: "The fee of the token.",
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WrapModal: Story = {
  args: {
    tokenShortName: "PR",
    amountToWrap: 0 as unknown as Signal<number>,
    fee: 2,
    maxAmount: 100000,
    icon: <RalphLogo variant="icon" />,
  },
};
