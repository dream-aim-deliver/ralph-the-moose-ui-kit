import type { Meta, StoryObj } from "@storybook/react";

import { UnwrapCard as Component } from "@/components/balance-card";
import { RalphLogo } from "@/components/ralph-logo";
import { Signal } from "@preact/signals-react";

const meta = {
  title: "Components/Balance/Unwrap",
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
    amountToUnwrap: {
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

export const Unwrap: Story = {
  args: {
    icon: <RalphLogo variant="icon" />,
    tokenShortName: "PR",
    amountToUnwrap: 0 as unknown as Signal<number>,
    fee: 2,
    wrappedBalance: 100000,
    onUnwrap: () => {},
    networkCurrency: "", // Add missing property
    SUnwrapStatusMessage: {} as Signal<string>, // Add missing property
    SUnwrapCardView: "default" as unknown as Signal<
      "unwrapping" | "default" | "unwrapping-ended"
    >, // Add missing property
    SUnwrapEndedStatusFrame: {} as Signal<React.ReactNode>, // Add missing property
  },
};
