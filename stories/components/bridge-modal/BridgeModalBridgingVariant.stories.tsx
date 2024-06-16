import type { Meta, StoryObj } from "@storybook/react";

import { BridgeModalBridgingVariant } from "@/components/bridge-modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BridgeModal/BridgingVariant",
  component: BridgeModalBridgingVariant,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BridgeModalBridgingVariant>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    status: "success",
    toNetwork: { chainId: 2, name: "Base" },
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    amount: 1000,
    onClose: () => {
      console.log("Close button clicked");
    },
    transaction: {
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

export const NotEnoughBalance: Story = {
  args: {
    status: "error",
    type: "balance-error",
    message: "The requested amount exceeds your balance.",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
  },
};

export const ApprovalError: Story = {
  args: {
    status: "error",
    type: "approval-error",
    message:
      "Error approving reservoir for bridging your PR tokens. For nerds, here's some deets: Metamask transaction cancelled.",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
  },
};

export const TransactionError: Story = {
  args: {
    status: "error",
    type: "transaction-error",
    message: "Invalid parameters.",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
    transaction: {
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

export const VerificationError: Story = {
  args: {
    status: "error",
    type: "verification-error",
    message: "Invalid parameters.",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
    transaction: {
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

export const BridgingRequest: Story = {
  args: {
    status: "request",
    message: "Please confirm you want to bridge 1000 PR tokens.",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
  },
};
export const ProgressAwaitingApproval: Story = {
  args: {
    status: "in-progress",
    message: "Awaiting approval...",
    type: "awaiting-approval",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
    transaction: {
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

export const ProgressEstimateGas: Story = {
  args: {
    status: "in-progress",
    type: "estimated-gas",
    amount: 1000,
    estimatedGas: 1000,
    gasLimit: 1000,
  },
};

export const ProgressSendTransaction: Story = {
  args: {
    status: "in-progress",
    type: "sending-transaction",
    message: "Sending transaction...",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
    transaction: {
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

export const ProgressVerifyBridging: Story = {
  args: {
    status: "in-progress",
    type: "awaiting-verification",
    message: "Verifying you have received the tokens...",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
    transaction: {
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

export const ProgressUpdate: Story = {
  args: {
    status: "in-progress",
    type: "update",
    message: "There is a progress update from the backend....",
    amount: 1000,
    fromNetwork: {
      chainId: 1,
      name: "Ethereum",
    },
    toNetwork: { chainId: 2, name: "Base" },
  },
};
