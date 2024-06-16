import type { Meta, StoryObj } from "@storybook/react";

import { UnwrapModalUnwrappingVariant as Component } from "@/components/unwrap-modal";

const meta = {
  title: "Components/Unwrap/Unwrapping",
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

export const Request: Story = {
  args: {
    status: "request",
    message: "Unwrapping in progress",
    amount: 1000,
  },
};

export const EstimatedGas: Story = {
  args: {
    status: "estimated-gas",
    amount: 1000,
    estimatedGas: 1000,
    gasLimit: 1000,
  },
};

export const ApprovalError: Story = {
  args: {
    status: "error",
    type: "approval-error",
    message: "Approval Error",
    amount: 1000,
  },
};

export const VerificationError: Story = {
  args: {
    status: "error",
    type: "verification-error",
    message: "Timeout occurred",
    amount: 1000,
    unwrapTransaction: {
      hash: "0x1234567890",
      blockNumber: 123456,
      status: "error",
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

export const GenericError: Story = {
  args: {
    status: "error",
    type: "unknown",
    message: "The transaction failed",
    amount: 1000,
    unwrapTransaction: {
      hash: "0x1234567890",
      blockNumber: 123456,
      status: "error",
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

export const Success: Story = {
  args: {
    status: "success",
    amount: 1000,
    unwrapTransaction: {
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

export const InProgress: Story = {
  args: {
    status: "in-progress",
    type: "progress",
    message: "Unwrapping in progress",
    amount: 1000,
    unwrapTransaction: {
      hash: "0x1234567890",
      blockNumber: 123456,
      status: "partial",
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
