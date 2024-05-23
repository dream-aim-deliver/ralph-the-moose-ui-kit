import type { Meta, StoryObj } from "@storybook/react";

import { UnwrapModalDefaultVariant as Component } from "@/components/unwrap-modal";
import { RalphLogo } from "@/components/ralph-logo";

const meta = {
  title: "Components/Unwrap/Default",
  component: Component,
  parameters: {
    layout: "centered",
    docs: {
      iframeHeight: 600,
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unwrap: Story = {
  args: {
    network: {
      chainId: 1,
      name: "Ethereum",
      nativeCurrency: "ETH",
    },
    balance: {
      wrapped: 1000,
      inscriptions: 100,
    },
    fee: 0.00123,
    token: {
      shortName: "PR",
      icon: <RalphLogo variant="icon" />,
    },
    callbacks: {
      onUnwrap: (amount: number) => {
        console.log(`Wrapping ${amount}`);
      },
    },
  },
};
