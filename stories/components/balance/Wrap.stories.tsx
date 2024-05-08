import type { Meta, StoryObj } from "@storybook/react";

import { WrapCard as Component } from "@/components/balance-card";
import { RalphLogo } from "@/components/ralph-logo";
import { Signal } from "@preact/signals-react";

const meta = {
  title: "Components/Balance/Wrap",
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
    icon: <RalphLogo variant="icon" />,
    inscriptionBalance: 100000,
    onWrap: () => {},
    networkCurrency: "", // Add missing property
    claimableAmount: 0, // Add missing property
    onClaim: () => {}, // Add missing property
    SWrapStatusMessage: "" as unknown as Signal<string>, // Add missing property
    SClaimStatusMessage: "" as unknown as Signal<string>, // Add missing property
    SWrapCardView: 0 as unknown as Signal<"wrapping" | "claiming" | "default">, // Add missing property
  },
};
