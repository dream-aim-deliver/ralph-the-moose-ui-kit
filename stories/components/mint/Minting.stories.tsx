import type { Meta, StoryObj } from "@storybook/react";

import { MintingModal as Component } from "@/components/minting-modal";

const meta = {
  title: "Components/Mint/Minting",
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

export const MintingSuccess: Story = {
  args: {
    status: "success",
    amount: 1000,
    mintTransaction: {
      hash: "0x1234567890",
      blockNumber: 123456,
      status: "success",
      timestamp: 1234567890,
      from: "0x1234567890",
      explorerUrl: "https://etherscan.io/tx/0x1234567890",
      network: {
        chainId: 1,
        name: "Ethereum",
      },
    },
  },
};
